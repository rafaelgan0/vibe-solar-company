export interface CalculatorInputs {
  // Energy usage
  monthlyUsageKwh: number
  utilityRatePerKwh: number
  demandChargePerKwMonth?: number
  
  // System design
  desiredOffsetPercent: number
  productionFactor: number
  
  // Financing
  financingType: 'cash' | 'loan' | 'ppa'
  itcRate: number
  
  // Optional battery
  includeBattery?: boolean
  batterySizeKwh?: number
}

export interface CalculatorResults {
  // System sizing
  systemSizeKw: number
  annualProductionKwh: number
  
  // Financial
  systemCost: number
  netSystemCost: number // After ITC
  annualSavings: number
  simplePaybackYears: number
  twentyFiveYearNpv: number
  
  // Environmental
  co2OffsetTons: number
  
  // Financing details
  monthlyPayment?: number
  ppaRatePerKwh?: number
  ppaAnnualCost?: number
  ppaSavings?: number
}

export interface FinancingDetails {
  type: 'cash' | 'loan' | 'ppa'
  monthlyPayment?: number
  totalFinanced?: number
  interestRate?: number
  termYears?: number
  ppaRate?: number
  ppaEscalation?: number
}
