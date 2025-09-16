import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/design-system/card'
import { Button } from '@/components/design-system/button'
import { Badge } from '@/components/design-system/badge'
import { Breadcrumbs } from '@/components/design-system/breadcrumbs'
import { 
  DollarSign, 
  Percent, 
  Calculator, 
  FileText, 
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Shield
} from 'lucide-react'

const breadcrumbItems = [
  { label: 'Home', href: '/' },
  { label: 'Incentives & Financing', current: true }
]

const incentives = [
  {
    name: 'Federal Investment Tax Credit (ITC)',
    description: '30% federal tax credit for commercial solar installations',
    value: '30%',
    details: 'Available through 2032, then decreases to 26% in 2033 and 22% in 2034',
    icon: Percent,
    requirements: [
      'System must be placed in service by December 31, 2032',
      'Must be new equipment',
      'Must be used for business purposes'
    ]
  },
  {
    name: 'Bonus Depreciation',
    description: 'Accelerated depreciation for solar equipment',
    value: '80%',
    details: '80% of system cost can be depreciated in the first year, remaining 20% over 5 years',
    icon: TrendingUp,
    requirements: [
      'Equipment must be placed in service in 2023',
      'Must be new equipment',
      'Used for business purposes'
    ]
  },
  {
    name: 'State Rebates',
    description: 'Additional incentives vary by state and utility',
    value: 'Varies',
    details: 'Many states offer additional rebates, grants, or tax credits',
    icon: FileText,
    requirements: [
      'Varies by state and utility',
      'Often requires specific equipment',
      'May have income or size limits'
    ]
  },
  {
    name: 'Net Metering',
    description: 'Sell excess solar energy back to the grid',
    value: 'Retail Rate',
    details: 'Credits can be used to offset future electricity bills',
    icon: Calculator,
    requirements: [
      'System must be grid-tied',
      'Must meet utility interconnection requirements',
      'Credits typically expire after 12 months'
    ]
  }
]

const financingOptions = [
  {
    name: 'Cash Purchase',
    description: 'Own your system outright with maximum long-term savings',
    benefits: [
      'Maximum long-term savings',
      'Full ownership of system',
      'Eligible for all incentives',
      'No ongoing payments'
    ],
    considerations: [
      'Requires upfront capital',
      'Longer payback period',
      'Responsible for maintenance'
    ],
    bestFor: 'Businesses with available capital and long-term outlook'
  },
  {
    name: 'Solar Loan',
    description: 'Finance your system with fixed monthly payments',
    benefits: [
      'No upfront cost',
      'Fixed monthly payments',
      'Own system after loan term',
      'Eligible for tax incentives'
    ],
    considerations: [
      'Monthly loan payments',
      'Interest costs',
      'Credit requirements'
    ],
    bestFor: 'Businesses wanting ownership with manageable payments'
  },
  {
    name: 'Power Purchase Agreement (PPA)',
    description: 'Pay for the energy your system produces',
    benefits: [
      'No upfront cost',
      'No maintenance responsibility',
      'Immediate savings',
      'Performance guarantee'
    ],
    considerations: [
      'No system ownership',
      'Long-term contract',
      'Escalation rates may apply'
    ],
    bestFor: 'Businesses wanting immediate savings with no upfront cost'
  },
  {
    name: 'Solar Lease',
    description: 'Lease your system with fixed monthly payments',
    benefits: [
      'No upfront cost',
      'Fixed monthly payments',
      'No maintenance responsibility',
      'Immediate savings'
    ],
    considerations: [
      'No system ownership',
      'Long-term contract',
      'May affect property sale'
    ],
    bestFor: 'Businesses wanting predictable costs and no maintenance'
  }
]

const stateIncentives = [
  { state: 'California', rebate: 'Up to $0.25/W', additional: 'SGIP for storage' },
  { state: 'New York', rebate: 'Up to $0.50/W', additional: 'NYSERDA incentives' },
  { state: 'Massachusetts', rebate: 'Up to $0.40/W', additional: 'SMART program' },
  { state: 'New Jersey', rebate: 'Up to $0.30/W', additional: 'SREC program' },
  { state: 'Texas', rebate: 'Varies by utility', additional: 'Local incentives' },
  { state: 'Florida', rebate: 'Property tax exemption', additional: 'Sales tax exemption' }
]

export default function IncentivesAndFinancingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Breadcrumbs items={breadcrumbItems} className="mx-auto max-w-7xl px-6 pt-8 lg:px-8" />
      
      {/* Hero Section */}
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
            Incentives &{' '}
            <span className="text-solar-600">Financing</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Maximize your solar investment with available incentives and flexible 
            financing options designed for commercial installations.
          </p>
        </div>
      </div>

      {/* Federal Incentives Section */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Federal Incentives
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Take advantage of federal tax incentives that can significantly 
              reduce your solar investment cost.
            </p>
          </div>
          
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            {incentives.map((incentive) => (
              <Card key={incentive.name}>
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-solar-100 dark:bg-solar-900">
                      <incentive.icon className="h-6 w-6 text-solar-600" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{incentive.name}</CardTitle>
                      <div className="text-2xl font-bold text-solar-600">{incentive.value}</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-4">
                    {incentive.description}
                  </CardDescription>
                  <p className="text-sm text-muted-foreground mb-4">
                    {incentive.details}
                  </p>
                  <div>
                    <h4 className="text-sm font-semibold mb-2">Requirements:</h4>
                    <ul className="space-y-1">
                      {incentive.requirements.map((requirement) => (
                        <li key={requirement} className="flex items-center space-x-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-solar-600" />
                          <span>{requirement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* State Incentives Section */}
      <div className="bg-muted/50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              State & Local Incentives
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Many states and utilities offer additional incentives beyond federal programs.
            </p>
          </div>
          
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-4 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            {stateIncentives.map((state) => (
              <Card key={state.state}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">{state.state}</h3>
                      <p className="text-sm text-muted-foreground">{state.rebate}</p>
                    </div>
                    <Badge variant="solar">{state.additional}</Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Financing Options Section */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Financing Options
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Choose the financing option that best fits your business needs and financial situation.
            </p>
          </div>
          
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            {financingOptions.map((option) => (
              <Card key={option.name}>
                <CardHeader>
                  <CardTitle className="text-xl">{option.name}</CardTitle>
                  <CardDescription className="text-base">
                    {option.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="text-sm font-semibold mb-2 text-green-600">Benefits:</h4>
                    <ul className="space-y-1">
                      {option.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-center space-x-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold mb-2 text-amber-600">Considerations:</h4>
                    <ul className="space-y-1">
                      {option.considerations.map((consideration) => (
                        <li key={consideration} className="flex items-center space-x-2 text-sm">
                          <div className="h-2 w-2 rounded-full bg-amber-600" />
                          <span>{consideration}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="p-3 bg-muted/50 rounded-lg">
                    <h4 className="text-sm font-semibold mb-1">Best for:</h4>
                    <p className="text-sm text-muted-foreground">{option.bestFor}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-solar-600">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to Maximize Your Savings?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-solar-100">
              Let us help you identify all available incentives and choose the 
              best financing option for your solar project.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button asChild size="lg" variant="secondary">
                <Link href="/savings-calculator">
                  <Calculator className="mr-2 h-5 w-5" />
                  Calculate Your Savings
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-solar-600">
                <Link href="/contact">
                  Get Financing Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
