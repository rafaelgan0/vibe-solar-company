// Solar calculator configuration and assumptions
export const CALCULATOR_CONFIG = {
  // System costs (per watt AC)
  SYSTEM_COST_PER_WATT: 1.75, // $1.75/W AC
  
  // Battery storage costs
  BATTERY_COST_PER_KWH: 800, // $800/kWh
  
  // System performance
  ANNUAL_DEGRADATION_RATE: 0.005, // 0.5% per year
  DEFAULT_PRODUCTION_FACTOR: 1500, // kWh/kW/year
  MIN_PRODUCTION_FACTOR: 1200,
  MAX_PRODUCTION_FACTOR: 1900,
  
  // Operations & Maintenance
  O_M_COST_PER_KW_YEAR: 15, // $15/kW/year
  
  // Grid emissions factor (lbs CO2/kWh)
  GRID_EMISSIONS_FACTOR: 0.85, // 0.85 lbs CO2/kWh average
  
  // Financing assumptions
  LOAN_TERM_YEARS: 20,
  LOAN_INTEREST_RATE: 0.065, // 6.5%
  
  // PPA assumptions
  PPA_ESCALATION_RATE: 0.02, // 2% annual escalation
  
  // ITC (Investment Tax Credit)
  DEFAULT_ITC_RATE: 0.30, // 30%
  
  // System sizing
  MIN_SYSTEM_SIZE: 1, // kW
  MAX_SYSTEM_SIZE: 1000, // kW
  
  // Payback calculation
  ANALYSIS_PERIOD_YEARS: 25,
} as const

export type CalculatorConfig = typeof CALCULATOR_CONFIG
