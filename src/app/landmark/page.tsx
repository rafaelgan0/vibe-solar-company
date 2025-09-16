import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/design-system/card'
import { Button } from '@/components/design-system/button'
import { Badge } from '@/components/design-system/badge'
import { Breadcrumbs } from '@/components/design-system/breadcrumbs'
import { 
  Leaf, 
  TrendingUp, 
  Shield, 
  Zap, 
  ArrowRight,
  CheckCircle,
  Globe,
  DollarSign,
  Clock,
  Calculator
} from 'lucide-react'

const breadcrumbItems = [
  { label: 'Home', href: '/' },
  { label: 'Why Solar Now', current: true }
]

const benefits = [
  {
    title: 'Immediate Cost Savings',
    description: 'Reduce your electricity bills by up to 80% from day one.',
    icon: DollarSign,
    stat: '80%',
    statLabel: 'Average Savings'
  },
  {
    title: 'Energy Independence',
    description: 'Protect your business from rising energy costs and grid outages.',
    icon: Shield,
    stat: '25+',
    statLabel: 'Year Warranty'
  },
  {
    title: 'Environmental Impact',
    description: 'Reduce your carbon footprint and meet sustainability goals.',
    icon: Leaf,
    stat: '12,000',
    statLabel: 'Tons CO₂ Offset'
  },
  {
    title: 'Fast Payback',
    description: 'Most systems pay for themselves in 4-6 years.',
    icon: Clock,
    stat: '4.2',
    statLabel: 'Years Average'
  }
]

const policyHighlights = [
  {
    title: '30% Federal Tax Credit',
    description: 'The Investment Tax Credit (ITC) provides a 30% federal tax credit for commercial solar installations.',
    details: 'Available through 2032, then decreases to 26% in 2033 and 22% in 2034.'
  },
  {
    title: 'Bonus Depreciation',
    description: 'Accelerated depreciation allows businesses to write off 80% of system costs in the first year.',
    details: 'Remaining 20% can be depreciated over 5 years using MACRS depreciation.'
  },
  {
    title: 'State & Local Incentives',
    description: 'Many states and utilities offer additional rebates and incentives for solar installations.',
    details: 'We help identify and apply for all available incentives in your area.'
  },
  {
    title: 'Net Metering',
    description: 'Sell excess solar energy back to the grid at retail rates.',
    details: 'Credits can be used to offset future electricity bills, maximizing your savings.'
  }
]

const sustainabilityMetrics = [
  { metric: 'Carbon Footprint Reduction', value: '85%', description: 'Average reduction in scope 2 emissions' },
  { metric: 'Renewable Energy Usage', value: '100%', description: 'Clean energy for your operations' },
  { metric: 'Energy Cost Stability', value: '25+ years', description: 'Fixed energy costs for decades' },
  { metric: 'Grid Independence', value: '90%', description: 'Reduced reliance on utility grid' }
]

export default function LandmarkPage() {
  return (
    <div className="min-h-screen bg-background">
      <Breadcrumbs items={breadcrumbItems} className="mx-auto max-w-7xl px-6 pt-8 lg:px-8" />
      
      {/* Hero Section */}
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
            Why Solar{' '}
            <span className="text-solar-600">Now</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            The perfect storm of policy incentives, technology advances, and economic benefits 
            makes this the ideal time to invest in commercial solar energy.
          </p>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-muted/50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              The Business Case for Solar
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Solar energy isn't just good for the environment—it's a smart business decision 
              that delivers immediate and long-term value.
            </p>
          </div>
          
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            {benefits.map((benefit) => (
              <Card key={benefit.title} className="relative">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-solar-100 dark:bg-solar-900">
                      <benefit.icon className="h-6 w-6 text-solar-600" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{benefit.title}</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-4">
                    {benefit.description}
                  </CardDescription>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-solar-600">{benefit.stat}</div>
                    <div className="text-sm text-muted-foreground">{benefit.statLabel}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Policy Highlights Section */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Favorable Policy Environment
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Government incentives and policies have never been more supportive of 
              commercial solar adoption.
            </p>
          </div>
          
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            {policyHighlights.map((policy) => (
              <Card key={policy.title}>
                <CardHeader>
                  <CardTitle className="text-xl">{policy.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-4">
                    {policy.description}
                  </CardDescription>
                  <p className="text-sm text-muted-foreground">
                    {policy.details}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Sustainability Impact Section */}
      <div className="bg-muted/50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Environmental Impact
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Make a meaningful contribution to environmental sustainability while 
              improving your bottom line.
            </p>
          </div>
          
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="space-y-8">
              {sustainabilityMetrics.map((metric) => (
                <div key={metric.metric} className="text-center">
                  <div className="text-4xl font-bold text-solar-600">{metric.value}</div>
                  <div className="text-lg font-semibold text-foreground mt-2">{metric.metric}</div>
                  <div className="text-sm text-muted-foreground mt-1">{metric.description}</div>
                </div>
              ))}
            </div>
            
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1548611635-b6e3c182b307?w=600&h=400&fit=crop"
                alt="Solar panels on commercial building with green landscape"
                width={600}
                height={400}
                className="rounded-2xl shadow-lg"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </div>
        </div>
      </div>

      {/* Technology Advances Section */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Technology Advances
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Modern solar technology delivers higher efficiency, better reliability, 
              and lower costs than ever before.
            </p>
          </div>
          
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <Card>
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-solar-100 dark:bg-solar-900">
                  <Zap className="h-6 w-6 text-solar-600" />
                </div>
                <CardTitle>Higher Efficiency</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Modern panels achieve 22%+ efficiency, generating more power 
                  from the same roof space.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-solar-100 dark:bg-solar-900">
                  <Shield className="h-6 w-6 text-solar-600" />
                </div>
                <CardTitle>Better Reliability</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  25+ year warranties and proven durability ensure decades 
                  of reliable energy generation.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-solar-100 dark:bg-solar-900">
                  <TrendingUp className="h-6 w-6 text-solar-600" />
                </div>
                <CardTitle>Lower Costs</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Solar costs have dropped 90% over the past decade, making 
                  it more affordable than ever.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-solar-600">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Don't Miss This Opportunity
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-solar-100">
              With favorable policies, advanced technology, and proven economics, 
              there's never been a better time to go solar.
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
                  Get Free Quote
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
