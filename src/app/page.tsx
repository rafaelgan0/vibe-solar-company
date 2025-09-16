import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/design-system/card'
import { Button } from '@/components/design-system/button'
import { Badge } from '@/components/design-system/badge'
import { Breadcrumbs } from '@/components/design-system/breadcrumbs'
import { 
  Calculator, 
  Zap, 
  Battery, 
  Leaf, 
  TrendingUp, 
  Shield, 
  ArrowRight,
  CheckCircle,
  Star
} from 'lucide-react'

const breadcrumbItems = [
  { label: 'Home', current: true }
]

const features = [
  {
    name: 'Commercial Solar PV',
    description: 'High-efficiency solar panels designed for commercial rooftops and ground-mounted installations.',
    icon: Zap,
    href: '/products-and-services'
  },
  {
    name: 'Battery Storage',
    description: 'Advanced energy storage solutions for backup power and demand management.',
    icon: Battery,
    href: '/products-and-services'
  },
  {
    name: 'EV Charging',
    description: 'Integrated electric vehicle charging infrastructure powered by clean solar energy.',
    icon: Leaf,
    href: '/products-and-services'
  },
  {
    name: 'Microgrids',
    description: 'Resilient microgrid solutions for critical infrastructure and remote locations.',
    icon: Shield,
    href: '/products-and-services'
  }
]

const industries = [
  { name: 'Warehouses', projects: '50+', savings: '$2.5M' },
  { name: 'Retail', projects: '30+', savings: '$1.8M' },
  { name: 'Manufacturing', projects: '25+', savings: '$3.2M' },
  { name: 'Education', projects: '40+', savings: '$2.1M' },
  { name: 'Municipalities', projects: '15+', savings: '$1.5M' }
]

const caseStudies = [
  {
    name: 'GreenTech Manufacturing',
    location: 'California',
    systemSize: '2.5 MW',
    annualSavings: '$450,000',
    paybackPeriod: '4.2 years',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop'
  },
  {
    name: 'Metro Distribution Center',
    location: 'Texas',
    systemSize: '1.8 MW',
    annualSavings: '$320,000',
    paybackPeriod: '3.8 years',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop'
  },
  {
    name: 'University Campus',
    location: 'Oregon',
    systemSize: '3.2 MW',
    annualSavings: '$580,000',
    paybackPeriod: '4.5 years',
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=600&h=400&fit=crop'
  }
]

const stats = [
  { label: 'Projects Completed', value: '200+' },
  { label: 'MW Installed', value: '150+' },
  { label: 'Annual Savings', value: '$25M+' },
  { label: 'CO₂ Offset', value: '12,000 tons' }
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Breadcrumbs items={breadcrumbItems} className="mx-auto max-w-7xl px-6 pt-8 lg:px-8" />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
              Power Your Business with{' '}
              <span className="text-solar-600">Clean Energy</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Leading commercial solar solutions that reduce costs, increase resilience, 
              and help you achieve your sustainability goals. Join 200+ businesses 
              already saving with solar.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button asChild size="lg" variant="solar">
                <Link href="/savings-calculator">
                  <Calculator className="mr-2 h-5 w-5" />
                  Calculate Your Savings
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">
                  Get Free Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Hero Image */}
        <div className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
          <div className="relative">
            <Image
              src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=1200&h=600&fit=crop"
              alt="Commercial solar installation on warehouse rooftop"
              width={1200}
              height={600}
              className="rounded-2xl shadow-2xl"
              priority
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/20 to-transparent" />
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-muted/50 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-solar-600">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Complete Solar Solutions
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              From solar panels to battery storage, we provide everything you need 
              for a complete renewable energy system.
            </p>
          </div>
          
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              {features.map((feature) => (
                <Card key={feature.name} className="group hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-solar-100 dark:bg-solar-900">
                        <feature.icon className="h-6 w-6 text-solar-600" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{feature.name}</CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base mb-4">
                      {feature.description}
                    </CardDescription>
                    <Button asChild variant="outline" className="group-hover:bg-solar-50 group-hover:border-solar-200">
                      <Link href={feature.href}>
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Industries Section */}
      <div className="bg-muted/50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Trusted Across Industries
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              We've helped businesses across various sectors reduce their energy costs 
              and carbon footprint.
            </p>
          </div>
          
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {industries.map((industry) => (
              <Card key={industry.name}>
                <CardContent className="p-6">
                  <div className="text-center">
                    <h3 className="text-lg font-semibold text-foreground">{industry.name}</h3>
                    <div className="mt-4 space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Projects:</span>
                        <span className="font-medium">{industry.projects}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Total Savings:</span>
                        <span className="font-medium text-solar-600">{industry.savings}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Case Studies Section */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Success Stories
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              See how our clients are saving money and reducing their environmental impact.
            </p>
          </div>
          
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {caseStudies.map((study) => (
              <Card key={study.name} className="overflow-hidden">
                <div className="aspect-video relative">
                  <Image
                    src={study.image}
                    alt={`${study.name} solar installation`}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">{study.name}</h3>
                      <p className="text-sm text-muted-foreground">{study.location}</p>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-muted-foreground">System Size:</span>
                        <p className="font-medium">{study.systemSize}</p>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Annual Savings:</span>
                        <p className="font-medium text-solar-600">{study.annualSavings}</p>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Payback Period:</span>
                        <p className="font-medium">{study.paybackPeriod}</p>
                      </div>
                      <div>
                        <Badge variant="solar" className="w-fit">
                          <CheckCircle className="mr-1 h-3 w-3" />
                          Completed
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Button asChild variant="outline" size="lg">
              <Link href="/project-portfolio">
                View All Projects
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-solar-600">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to Start Saving?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-solar-100">
              Get a personalized solar proposal and see how much you could save 
              with clean, renewable energy.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button asChild size="lg" variant="secondary">
                <Link href="/savings-calculator">
                  <Calculator className="mr-2 h-5 w-5" />
                  Calculate Savings
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