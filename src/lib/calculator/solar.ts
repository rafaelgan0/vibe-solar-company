import { CALCULATOR_CONFIG } from './config'
import type { CalculatorInputs, CalculatorResults, FinancingDetails } from './types'

/**
 * Calculate system size based on annual usage and desired offset
 */
export function calculateSystemSize(
  monthlyUsageKwh: number,
  desiredOffsetPercent: number,
  productionFactor: number
): number {
  const annualUsageKwh = monthlyUsageKwh * 12
  const targetProductionKwh = annualUsageKwh * (desiredOffsetPercent / 100)
  const systemSizeKw = targetProductionKwh / productionFactor
  
  return Math.max(
    CALCULATOR_CONFIG.MIN_SYSTEM_SIZE,
    Math.min(CALCULATOR_CONFIG.MAX_SYSTEM_SIZE, systemSizeKw)
  )
}

/**
 * Calculate annual production with degradation over time
 */
export function calculateAnnualProduction(
  systemSizeKw: number,
  productionFactor: number,
  year: number = 1
): number {
  const degradationFactor = Math.pow(1 - CALCULATOR_CONFIG.ANNUAL_DEGRADATION_RATE, year - 1)
  return systemSizeKw * productionFactor * degradationFactor
}

/**
 * Calculate baseline annual electricity bill
 */
export function calculateBaselineAnnualBill(
  monthlyUsageKwh: number,
  utilityRatePerKwh: number,
  demandChargePerKwMonth?: number
): number {
  const annualUsageKwh = monthlyUsageKwh * 12
  const energyCost = annualUsageKwh * utilityRatePerKwh
  
  let demandCost = 0
  if (demandChargePerKwMonth) {
    // Estimate peak demand as 1.2x average monthly usage
    const estimatedPeakKw = (monthlyUsageKwh / 30) * 1.2
    demandCost = estimatedPeakKw * demandChargePerKwMonth * 12
  }
  
  return energyCost + demandCost
}

/**
 * Calculate solar bill after offset
 */
export function calculateSolarBill(
  annualUsageKwh: number,
  annualProductionKwh: number,
  utilityRatePerKwh: number
): number {
  const netUsageKwh = Math.max(0, annualUsageKwh - annualProductionKwh)
  return netUsageKwh * utilityRatePerKwh
}

/**
 * Calculate system cost including optional battery
 */
export function calculateSystemCost(
  systemSizeKw: number,
  includeBattery: boolean = false,
  batterySizeKwh: number = 0
): number {
  const solarCost = systemSizeKw * 1000 * CALCULATOR_CONFIG.SYSTEM_COST_PER_WATT
  const batteryCost = includeBattery && batterySizeKwh > 0 
    ? batterySizeKwh * CALCULATOR_CONFIG.BATTERY_COST_PER_KWH 
    : 0
  
  return solarCost + batteryCost
}

/**
 * Calculate net system cost after ITC
 */
export function calculateNetSystemCost(
  systemCost: number,
  itcRate: number
): number {
  const itcCredit = systemCost * itcRate
  return systemCost - itcCredit
}

/**
 * Calculate annual O&M costs
 */
export function calculateAnnualOMCost(systemSizeKw: number): number {
  return systemSizeKw * CALCULATOR_CONFIG.O_M_COST_PER_KW_YEAR
}

/**
 * Calculate CO2 offset in tons
 */
export function calculateCO2Offset(
  annualProductionKwh: number,
  gridEmissionsFactor: number = CALCULATOR_CONFIG.GRID_EMISSIONS_FACTOR
): number {
  // Convert lbs to tons (2000 lbs = 1 ton)
  return (annualProductionKwh * gridEmissionsFactor) / 2000
}

/**
 * Calculate loan monthly payment
 */
export function calculateLoanPayment(
  principal: number,
  annualRate: number,
  termYears: number
): number {
  const monthlyRate = annualRate / 12
  const numPayments = termYears * 12
  
  if (monthlyRate === 0) {
    return principal / numPayments
  }
  
  return principal * (monthlyRate * Math.pow(1 + monthlyRate, numPayments)) / 
         (Math.pow(1 + monthlyRate, numPayments) - 1)
}

/**
 * Calculate PPA rate and costs
 */
export function calculatePPACosts(
  annualProductionKwh: number,
  ppaRatePerKwh: number,
  escalationRate: number = CALCULATOR_CONFIG.PPA_ESCALATION_RATE
): { annualCost: number; savings: number } {
  const annualCost = annualProductionKwh * ppaRatePerKwh
  // For simplicity, we'll use the first year cost for savings calculation
  // In a real implementation, you'd calculate the present value over 25 years
  const savings = 0 // This would be calculated based on utility rate comparison
  
  return { annualCost, savings }
}

/**
 * Calculate 25-year NPV (simplified)
 */
export function calculateTwentyFiveYearNPV(
  annualSavings: number,
  netSystemCost: number,
  discountRate: number = 0.08
): number {
  let npv = -netSystemCost
  
  for (let year = 1; year <= CALCULATOR_CONFIG.ANALYSIS_PERIOD_YEARS; year++) {
    const annualProduction = annualSavings // Simplified - would include degradation
    const presentValue = annualProduction / Math.pow(1 + discountRate, year)
    npv += presentValue
  }
  
  return npv
}

/**
 * Main calculator function
 */
export function calculateSolarSavings(inputs: CalculatorInputs): CalculatorResults {
  const {
    monthlyUsageKwh,
    utilityRatePerKwh,
    demandChargePerKwMonth,
    desiredOffsetPercent,
    productionFactor,
    financingType,
    itcRate,
    includeBattery = false,
    batterySizeKwh = 0
  } = inputs

  // System sizing
  const systemSizeKw = calculateSystemSize(monthlyUsageKwh, desiredOffsetPercent, productionFactor)
  const annualProductionKwh = calculateAnnualProduction(systemSizeKw, productionFactor)
  
  // Financial calculations
  const annualUsageKwh = monthlyUsageKwh * 12
  const baselineAnnualBill = calculateBaselineAnnualBill(
    monthlyUsageKwh, 
    utilityRatePerKwh, 
    demandChargePerKwMonth
  )
  
  const solarBill = calculateSolarBill(annualUsageKwh, annualProductionKwh, utilityRatePerKwh)
  const systemCost = calculateSystemCost(systemSizeKw, includeBattery, batterySizeKwh)
  const netSystemCost = calculateNetSystemCost(systemCost, itcRate)
  const annualOMCost = calculateAnnualOMCost(systemSizeKw)
  
  // Calculate savings
  let annualSavings = baselineAnnualBill - solarBill - annualOMCost
  
  // Adjust for financing
  let monthlyPayment: number | undefined
  let ppaRatePerKwh: number | undefined
  let ppaAnnualCost: number | undefined
  let ppaSavings: number | undefined
  
  if (financingType === 'loan') {
    monthlyPayment = calculateLoanPayment(
      netSystemCost,
      CALCULATOR_CONFIG.LOAN_INTEREST_RATE,
      CALCULATOR_CONFIG.LOAN_TERM_YEARS
    )
    // For loan, savings are reduced by the monthly payment
    annualSavings -= monthlyPayment * 12
  } else if (financingType === 'ppa') {
    // PPA rate is typically 60-80% of utility rate
    ppaRatePerKwh = utilityRatePerKwh * 0.7
    const ppaCosts = calculatePPACosts(annualProductionKwh, ppaRatePerKwh)
    ppaAnnualCost = ppaCosts.annualCost
    ppaSavings = ppaCosts.savings
    annualSavings = baselineAnnualBill - ppaAnnualCost
  }
  
  const simplePaybackYears = annualSavings > 0 ? netSystemCost / annualSavings : Infinity
  const twentyFiveYearNpv = calculateTwentyFiveYearNPV(annualSavings, netSystemCost)
  const co2OffsetTons = calculateCO2Offset(annualProductionKwh)
  
  return {
    systemSizeKw,
    annualProductionKwh,
    systemCost,
    netSystemCost,
    annualSavings,
    simplePaybackYears,
    twentyFiveYearNpv,
    co2OffsetTons,
    monthlyPayment,
    ppaRatePerKwh,
    ppaAnnualCost,
    ppaSavings
  }
}

/**
 * Validate calculator inputs
 */
export function validateCalculatorInputs(inputs: CalculatorInputs): string[] {
  const errors: string[] = []
  
  if (inputs.monthlyUsageKwh <= 0) {
    errors.push('Monthly usage must be greater than 0')
  }
  
  if (inputs.utilityRatePerKwh <= 0) {
    errors.push('Utility rate must be greater than 0')
  }
  
  if (inputs.desiredOffsetPercent < 0 || inputs.desiredOffsetPercent > 100) {
    errors.push('Desired offset must be between 0% and 100%')
  }
  
  if (inputs.productionFactor < CALCULATOR_CONFIG.MIN_PRODUCTION_FACTOR || 
      inputs.productionFactor > CALCULATOR_CONFIG.MAX_PRODUCTION_FACTOR) {
    errors.push(`Production factor must be between ${CALCULATOR_CONFIG.MIN_PRODUCTION_FACTOR} and ${CALCULATOR_CONFIG.MAX_PRODUCTION_FACTOR}`)
  }
  
  if (inputs.itcRate < 0 || inputs.itcRate > 1) {
    errors.push('ITC rate must be between 0% and 100%')
  }
  
  if (inputs.includeBattery && (!inputs.batterySizeKwh || inputs.batterySizeKwh <= 0)) {
    errors.push('Battery size must be specified when including battery storage')
  }
  
  return errors
}
