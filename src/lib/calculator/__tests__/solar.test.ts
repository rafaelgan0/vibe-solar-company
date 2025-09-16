import { describe, it, expect } from 'vitest'
import {
  calculateSystemSize,
  calculateAnnualProduction,
  calculateBaselineAnnualBill,
  calculateSolarBill,
  calculateSystemCost,
  calculateNetSystemCost,
  calculateCO2Offset,
  calculateLoanPayment,
  calculateSolarSavings,
  validateCalculatorInputs
} from '../solar'
import type { CalculatorInputs } from '../types'

describe('Solar Calculator', () => {
  describe('calculateSystemSize', () => {
    it('should calculate correct system size for basic inputs', () => {
      const result = calculateSystemSize(1000, 80, 1500)
      expect(result).toBeCloseTo(6.4, 1) // 1000 * 12 * 0.8 / 1500
    })

    it('should respect minimum system size', () => {
      const result = calculateSystemSize(100, 10, 1500)
      expect(result).toBe(1) // Minimum size
    })

    it('should respect maximum system size', () => {
      const result = calculateSystemSize(125000, 100, 1500)
      expect(result).toBe(1000) // Maximum size (1000 kW calculated, capped at 1000)
    })
  })

  describe('calculateAnnualProduction', () => {
    it('should calculate production for year 1', () => {
      const result = calculateAnnualProduction(10, 1500, 1)
      expect(result).toBe(15000)
    })

    it('should apply degradation for subsequent years', () => {
      const year1 = calculateAnnualProduction(10, 1500, 1)
      const year2 = calculateAnnualProduction(10, 1500, 2)
      expect(year2).toBeLessThan(year1)
      expect(year2).toBeCloseTo(year1 * 0.995, 0)
    })
  })

  describe('calculateBaselineAnnualBill', () => {
    it('should calculate energy costs only', () => {
      const result = calculateBaselineAnnualBill(1000, 0.12)
      expect(result).toBe(1440) // 1000 * 12 * 0.12
    })

    it('should include demand charges when provided', () => {
      const result = calculateBaselineAnnualBill(1000, 0.12, 15)
      expect(result).toBeGreaterThan(1440)
    })
  })

  describe('calculateSolarBill', () => {
    it('should calculate bill with solar offset', () => {
      const result = calculateSolarBill(12000, 10000, 0.12)
      expect(result).toBe(240) // (12000 - 10000) * 0.12
    })

    it('should return zero for complete offset', () => {
      const result = calculateSolarBill(12000, 15000, 0.12)
      expect(result).toBe(0)
    })
  })

  describe('calculateSystemCost', () => {
    it('should calculate solar cost only', () => {
      const result = calculateSystemCost(10)
      expect(result).toBe(17500) // 10 * 1000 * 1.75
    })

    it('should include battery cost when specified', () => {
      const result = calculateSystemCost(10, true, 20)
      expect(result).toBe(33500) // 17500 + (20 * 800)
    })
  })

  describe('calculateNetSystemCost', () => {
    it('should apply ITC correctly', () => {
      const result = calculateNetSystemCost(20000, 0.30)
      expect(result).toBe(14000) // 20000 - (20000 * 0.30)
    })
  })

  describe('calculateCO2Offset', () => {
    it('should calculate CO2 offset in tons', () => {
      const result = calculateCO2Offset(10000)
      expect(result).toBeCloseTo(4.25, 2) // (10000 * 0.85) / 2000
    })
  })

  describe('calculateLoanPayment', () => {
    it('should calculate monthly payment correctly', () => {
      const result = calculateLoanPayment(100000, 0.065, 20)
      expect(result).toBeCloseTo(745.57, 2)
    })

    it('should handle zero interest rate', () => {
      const result = calculateLoanPayment(100000, 0, 20)
      expect(result).toBeCloseTo(416.67, 2) // 100000 / (20 * 12)
    })
  })

  describe('calculateSolarSavings', () => {
    const baseInputs: CalculatorInputs = {
      monthlyUsageKwh: 1000,
      utilityRatePerKwh: 0.12,
      desiredOffsetPercent: 80,
      productionFactor: 1500,
      financingType: 'cash',
      itcRate: 0.30
    }

    it('should calculate cash purchase correctly', () => {
      const result = calculateSolarSavings(baseInputs)
      
      expect(result.systemSizeKw).toBeGreaterThan(0)
      expect(result.annualProductionKwh).toBeGreaterThan(0)
      expect(result.systemCost).toBeGreaterThan(0)
      expect(result.netSystemCost).toBeLessThan(result.systemCost)
      expect(result.annualSavings).toBeGreaterThan(0)
      expect(result.co2OffsetTons).toBeGreaterThan(0)
    })

    it('should calculate loan financing correctly', () => {
      const inputs = { ...baseInputs, financingType: 'loan' as const }
      const result = calculateSolarSavings(inputs)
      
      expect(result.monthlyPayment).toBeGreaterThan(0)
      expect(result.annualSavings).toBeLessThan(
        calculateSolarSavings(baseInputs).annualSavings
      )
    })

    it('should calculate PPA financing correctly', () => {
      const inputs = { ...baseInputs, financingType: 'ppa' as const }
      const result = calculateSolarSavings(inputs)
      
      expect(result.ppaRatePerKwh).toBeGreaterThan(0)
      expect(result.ppaAnnualCost).toBeGreaterThan(0)
    })

    it('should include battery costs when specified', () => {
      const inputs = { 
        ...baseInputs, 
        includeBattery: true, 
        batterySizeKwh: 20 
      }
      const result = calculateSolarSavings(inputs)
      
      expect(result.systemCost).toBeGreaterThan(
        calculateSolarSavings(baseInputs).systemCost
      )
    })
  })

  describe('validateCalculatorInputs', () => {
    const validInputs: CalculatorInputs = {
      monthlyUsageKwh: 1000,
      utilityRatePerKwh: 0.12,
      desiredOffsetPercent: 80,
      productionFactor: 1500,
      financingType: 'cash',
      itcRate: 0.30
    }

    it('should pass validation for valid inputs', () => {
      const errors = validateCalculatorInputs(validInputs)
      expect(errors).toHaveLength(0)
    })

    it('should catch invalid monthly usage', () => {
      const inputs = { ...validInputs, monthlyUsageKwh: 0 }
      const errors = validateCalculatorInputs(inputs)
      expect(errors).toContain('Monthly usage must be greater than 0')
    })

    it('should catch invalid utility rate', () => {
      const inputs = { ...validInputs, utilityRatePerKwh: -0.1 }
      const errors = validateCalculatorInputs(inputs)
      expect(errors).toContain('Utility rate must be greater than 0')
    })

    it('should catch invalid offset percentage', () => {
      const inputs = { ...validInputs, desiredOffsetPercent: 150 }
      const errors = validateCalculatorInputs(inputs)
      expect(errors).toContain('Desired offset must be between 0% and 100%')
    })

    it('should catch invalid production factor', () => {
      const inputs = { ...validInputs, productionFactor: 500 }
      const errors = validateCalculatorInputs(inputs)
      expect(errors).toContain('Production factor must be between 1200 and 1900')
    })

    it('should catch missing battery size when battery is included', () => {
      const inputs = { 
        ...validInputs, 
        includeBattery: true, 
        batterySizeKwh: 0 
      }
      const errors = validateCalculatorInputs(inputs)
      expect(errors).toContain('Battery size must be specified when including battery storage')
    })
  })
})
