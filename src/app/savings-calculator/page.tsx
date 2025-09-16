"use client"

import { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/design-system/card'
import { Button } from '@/components/design-system/button'
import { Input } from '@/components/design-system/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/design-system/select'
import { Switch } from '@/components/design-system/switch'
import { Label } from '@radix-ui/react-label'
import { Badge } from '@/components/design-system/badge'
import { Alert, AlertDescription } from '@/components/design-system/alert'
import { Breadcrumbs } from '@/components/design-system/breadcrumbs'
import { calculateSolarSavings, validateCalculatorInputs } from '@/lib/calculator/solar'
import { CALCULATOR_CONFIG } from '@/lib/calculator/config'
import { formatCurrency, formatNumber, formatPercentage } from '@/lib/utils'
import { Calculator, TrendingUp, Leaf, DollarSign, Zap, Battery, AlertCircle } from 'lucide-react'
import type { CalculatorInputs, CalculatorResults } from '@/lib/calculator/types'

const breadcrumbItems = [
  { label: 'Home', href: '/' },
  { label: 'Savings Calculator', current: true }
]

export default function SavingsCalculatorPage() {
  const [inputs, setInputs] = useState<CalculatorInputs>({
    monthlyUsageKwh: 1000,
    utilityRatePerKwh: 0.12,
    demandChargePerKwMonth: 15,
    desiredOffsetPercent: 80,
    productionFactor: CALCULATOR_CONFIG.DEFAULT_PRODUCTION_FACTOR,
    financingType: 'cash',
    itcRate: CALCULATOR_CONFIG.DEFAULT_ITC_RATE,
    includeBattery: false,
    batterySizeKwh: 20
  })

  const [results, setResults] = useState<CalculatorResults | null>(null)
  const [errors, setErrors] = useState<string[]>([])
  const [isCalculating, setIsCalculating] = useState(false)

  // Calculate results when inputs change
  useEffect(() => {
    const validationErrors = validateCalculatorInputs(inputs)
    setErrors(validationErrors)

    if (validationErrors.length === 0) {
      setIsCalculating(true)
      // Simulate calculation delay for better UX
      const timer = setTimeout(() => {
        const calculatedResults = calculateSolarSavings(inputs)
        setResults(calculatedResults)
        setIsCalculating(false)
      }, 300)

      return () => clearTimeout(timer)
    } else {
      setResults(null)
      setIsCalculating(false)
    }
  }, [inputs])

  const handleInputChange = (field: keyof CalculatorInputs, value: any) => {
    setInputs(prev => ({ ...prev, [field]: value }))
  }

  const handleRequestProposal = () => {
    // This would typically navigate to contact form with pre-filled data
    const calculatorData = {
      ...inputs,
      results: results
    }
    
    // Store in sessionStorage for contact form
    sessionStorage.setItem('calculatorContext', JSON.stringify(calculatorData))
    
    // Navigate to contact page
    window.location.href = '/contact?source=calculator'
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
        <Breadcrumbs items={breadcrumbItems} className="mb-8" />
        
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Solar Savings Calculator
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Estimate your potential savings, payback period, and environmental impact 
              with our comprehensive solar calculator.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Input Panel */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle as="h2" className="flex items-center gap-2">
                    <Calculator className="h-5 w-5" />
                    System Configuration
                  </CardTitle>
                  <CardDescription>
                    Enter your energy usage and preferences to calculate your solar savings.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Energy Usage */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Energy Usage</h3>
                    
                    <div>
                      <Label htmlFor="monthly-usage">Average Monthly Usage (kWh)</Label>
                      <Input
                        id="monthly-usage"
                        type="number"
                        value={inputs.monthlyUsageKwh}
                        onChange={(e) => handleInputChange('monthlyUsageKwh', Number(e.target.value))}
                        placeholder="1000"
                        helperText="Your average monthly electricity consumption"
                      />
                    </div>

                    <div>
                      <Label htmlFor="utility-rate">Utility Rate ($/kWh)</Label>
                      <Input
                        id="utility-rate"
                        type="number"
                        step="0.001"
                        value={inputs.utilityRatePerKwh}
                        onChange={(e) => handleInputChange('utilityRatePerKwh', Number(e.target.value))}
                        placeholder="0.12"
                        helperText="Your current electricity rate per kWh"
                      />
                    </div>

                    <div>
                      <Label htmlFor="demand-charge">Demand Charge ($/kW-month)</Label>
                      <Input
                        id="demand-charge"
                        type="number"
                        value={inputs.demandChargePerKwMonth || ''}
                        onChange={(e) => handleInputChange('demandChargePerKwMonth', e.target.value ? Number(e.target.value) : undefined)}
                        placeholder="15"
                        helperText="Optional: Monthly demand charge if applicable"
                      />
                    </div>
                  </div>

                  {/* System Design */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">System Design</h3>
                    
                    <div>
                      <Label htmlFor="offset-percent">Desired Solar Offset (%)</Label>
                      <Input
                        id="offset-percent"
                        type="number"
                        min="0"
                        max="100"
                        value={inputs.desiredOffsetPercent}
                        onChange={(e) => handleInputChange('desiredOffsetPercent', Number(e.target.value))}
                        placeholder="80"
                        helperText="Percentage of your energy needs to be covered by solar"
                      />
                    </div>

                    <div>
                      <Label htmlFor="production-factor">Production Factor (kWh/kW/year)</Label>
                      <Input
                        id="production-factor"
                        type="number"
                        min={CALCULATOR_CONFIG.MIN_PRODUCTION_FACTOR}
                        max={CALCULATOR_CONFIG.MAX_PRODUCTION_FACTOR}
                        value={inputs.productionFactor}
                        onChange={(e) => handleInputChange('productionFactor', Number(e.target.value))}
                        placeholder="1500"
                        helperText={`Typical range: ${CALCULATOR_CONFIG.MIN_PRODUCTION_FACTOR}-${CALCULATOR_CONFIG.MAX_PRODUCTION_FACTOR} kWh/kW/year`}
                      />
                    </div>
                  </div>

                  {/* Financing */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Financing</h3>
                    
                    <div>
                      <Label htmlFor="financing-type">Financing Type</Label>
                      <Select
                        value={inputs.financingType}
                        onValueChange={(value: 'cash' | 'loan' | 'ppa') => handleInputChange('financingType', value)}
                      >
                        <SelectTrigger id="financing-type" aria-label="Select financing option">
                          <SelectValue placeholder="Select financing option" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="cash">Cash Purchase</SelectItem>
                          <SelectItem value="loan">Solar Loan</SelectItem>
                          <SelectItem value="ppa">Power Purchase Agreement (PPA)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="itc-rate">Investment Tax Credit (%)</Label>
                      <Input
                        id="itc-rate"
                        type="number"
                        min="0"
                        max="100"
                        step="1"
                        value={inputs.itcRate * 100}
                        onChange={(e) => handleInputChange('itcRate', Number(e.target.value) / 100)}
                        placeholder="30"
                        helperText="Federal tax credit percentage"
                      />
                    </div>
                  </div>

                  {/* Battery Storage */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Battery Storage</h3>
                    
                    <div className="flex items-center space-x-2">
                      <Switch
                        id="include-battery"
                        checked={inputs.includeBattery}
                        onCheckedChange={(checked) => handleInputChange('includeBattery', checked)}
                      />
                      <Label htmlFor="include-battery">Include Battery Storage</Label>
                    </div>

                    {inputs.includeBattery && (
                      <div>
                        <Label htmlFor="battery-size">Battery Size (kWh)</Label>
                        <Input
                          id="battery-size"
                          type="number"
                          value={inputs.batterySizeKwh || ''}
                          onChange={(e) => handleInputChange('batterySizeKwh', e.target.value ? Number(e.target.value) : undefined)}
                          placeholder="20"
                          helperText="Battery storage capacity"
                        />
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* Validation Errors */}
              {errors.length > 0 && (
                <Alert variant="destructive">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>
                    <ul className="list-disc list-inside space-y-1">
                      {errors.map((error, index) => (
                        <li key={index}>{error}</li>
                      ))}
                    </ul>
                  </AlertDescription>
                </Alert>
              )}
            </div>

            {/* Results Panel */}
            <div className="space-y-6">
              {isCalculating && (
                <Card>
                  <CardContent className="py-12 text-center">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
                    <p className="text-muted-foreground">Calculating your solar savings...</p>
                  </CardContent>
                </Card>
              )}

              {results && !isCalculating && (
                <>
                  {/* System Overview */}
                  <Card>
                    <CardHeader>
                      <CardTitle as="h3" className="flex items-center gap-2">
                        <Zap className="h-5 w-5" />
                        System Overview
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm text-muted-foreground">System Size</p>
                          <p className="text-2xl font-bold">{formatNumber(results.systemSizeKw, 1)} kW</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Annual Production</p>
                          <p className="text-2xl font-bold">{formatNumber(results.annualProductionKwh, 0)} kWh</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Financial Results */}
                  <Card>
                    <CardHeader>
                      <CardTitle as="h3" className="flex items-center gap-2">
                        <DollarSign className="h-5 w-5" />
                        Financial Analysis
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm text-muted-foreground">System Cost</p>
                          <p className="text-xl font-semibold">{formatCurrency(results.systemCost)}</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">After ITC</p>
                          <p className="text-xl font-semibold text-solar-600">{formatCurrency(results.netSystemCost)}</p>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm text-muted-foreground">Annual Savings</p>
                          <p className="text-2xl font-bold text-green-600">{formatCurrency(results.annualSavings)}</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Payback Period</p>
                          <p className="text-2xl font-bold">
                            {results.simplePaybackYears === Infinity ? 'N/A' : `${formatNumber(results.simplePaybackYears, 1)} years`}
                          </p>
                        </div>
                      </div>

                      {results.monthlyPayment && (
                        <div>
                          <p className="text-sm text-muted-foreground">Monthly Payment</p>
                          <p className="text-xl font-semibold">{formatCurrency(results.monthlyPayment)}</p>
                        </div>
                      )}

                      {results.ppaRatePerKwh && (
                        <div>
                          <p className="text-sm text-muted-foreground">PPA Rate</p>
                          <p className="text-xl font-semibold">{formatCurrency(results.ppaRatePerKwh)}/kWh</p>
                        </div>
                      )}
                    </CardContent>
                  </Card>

                  {/* Environmental Impact */}
                  <Card>
                    <CardHeader>
                      <CardTitle as="h3" className="flex items-center gap-2">
                        <Leaf className="h-5 w-5" />
                        Environmental Impact
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-center">
                        <p className="text-sm text-muted-foreground">Annual CO₂ Offset</p>
                        <p className="text-3xl font-bold text-green-600">{formatNumber(results.co2OffsetTons, 1)} tons</p>
                        <p className="text-sm text-muted-foreground mt-2">
                          Equivalent to planting {Math.round(results.co2OffsetTons * 40)} trees
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Action Buttons */}
                  <div className="space-y-4">
                    <Button 
                      onClick={handleRequestProposal}
                      className="w-full"
                      size="lg"
                      variant="solar"
                    >
                      Request Detailed Proposal
                    </Button>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <Button variant="outline" className="w-full">
                        Download PDF
                      </Button>
                      <Button variant="outline" className="w-full">
                        Export CSV
                      </Button>
                    </div>
                  </div>
                </>
              )}

              {!results && !isCalculating && errors.length === 0 && (
                <Card>
                  <CardContent className="py-12 text-center">
                    <Calculator className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground">Enter your information to see your solar savings potential.</p>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
