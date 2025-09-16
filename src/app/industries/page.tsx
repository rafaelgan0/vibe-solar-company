import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/design-system/card'
import { Button } from '@/components/design-system/button'
import { Badge } from '@/components/design-system/badge'
import { Breadcrumbs } from '@/components/design-system/breadcrumbs'
import { 
  Warehouse, 
  ShoppingCart, 
  Factory, 
  GraduationCap, 
  Building2,
  ArrowRight,
  CheckCircle,
  DollarSign,
  Leaf,
  Shield
} from 'lucide-react'

const breadcrumbItems = [
  { label: 'Home', href: '/' },
  { label: 'Industries', current: true }
]

const industries = [
  {
    name: 'Warehouses & Distribution',
    description: 'Large roof spaces and high energy consumption make warehouses ideal for solar installations.',
    icon: Warehouse,
    benefits: [
      'Reduce operational costs by up to 80%',
      'Protect against rising energy prices',
      'Improve sustainability credentials',
      'Qualify for additional tax incentives'
    ],
    caseStudy: {
      company: 'Metro Distribution Center',
      location: 'Texas',
      systemSize: '2.1 MW',
      annualSavings: '$380,000',
      paybackPeriod: '3.8 years',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop'
    },
    stats: {
      projects: '50+',
      totalMW: '85+',
      totalSavings: '$12M+'
    }
  },
  {
    name: 'Retail & Shopping Centers',
    description: 'Solar installations help retail businesses reduce overhead costs and attract eco-conscious customers.',
    icon: ShoppingCart,
    benefits: [
      'Lower operating expenses',
      'Enhanced brand reputation',
      'Attract sustainability-minded customers',
      'Long-term cost predictability'
    ],
    caseStudy: {
      company: 'Green Valley Mall',
      location: 'California',
      systemSize: '1.5 MW',
      annualSavings: '$280,000',
      paybackPeriod: '4.2 years',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop'
    },
    stats: {
      projects: '30+',
      totalMW: '45+',
      totalSavings: '$8M+'
    }
  },
  {
    name: 'Manufacturing',
    description: 'Energy-intensive manufacturing facilities can significantly reduce costs with solar power.',
    icon: Factory,
    benefits: [
      'Dramatic energy cost reduction',
      'Improved profit margins',
      'Enhanced sustainability reporting',
      'Energy security and reliability'
    ],
    caseStudy: {
      company: 'GreenTech Manufacturing',
      location: 'California',
      systemSize: '3.2 MW',
      annualSavings: '$580,000',
      paybackPeriod: '4.5 years',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop'
    },
    stats: {
      projects: '25+',
      totalMW: '65+',
      totalSavings: '$15M+'
    }
  },
  {
    name: 'Education',
    description: 'Schools and universities can reduce energy costs while teaching students about sustainability.',
    icon: GraduationCap,
    benefits: [
      'Free up budget for educational programs',
      'Educational opportunities for students',
      'Demonstrate environmental leadership',
      'Long-term financial stability'
    ],
    caseStudy: {
      company: 'University of Oregon',
      location: 'Oregon',
      systemSize: '2.8 MW',
      annualSavings: '$420,000',
      paybackPeriod: '4.1 years',
      image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=600&h=400&fit=crop'
    },
    stats: {
      projects: '40+',
      totalMW: '55+',
      totalSavings: '$9M+'
    }
  },
  {
    name: 'Municipalities',
    description: 'Local governments can lead by example while reducing taxpayer burden through solar energy.',
    icon: Building2,
    benefits: [
      'Reduce municipal energy costs',
      'Set example for community',
      'Qualify for government incentives',
      'Improve public perception'
    ],
    caseStudy: {
      company: 'City of Greenfield',
      location: 'Colorado',
      systemSize: '1.8 MW',
      annualSavings: '$320,000',
      paybackPeriod: '4.0 years',
      image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=600&h=400&fit=crop'
    },
    stats: {
      projects: '15+',
      totalMW: '25+',
      totalSavings: '$4M+'
    }
  }
]

const commonBenefits = [
  {
    title: 'Cost Savings',
    description: 'Reduce electricity bills by 60-80%',
    icon: DollarSign,
    stat: '80%',
    statLabel: 'Average Savings'
  },
  {
    title: 'Environmental Impact',
    description: 'Reduce carbon footprint significantly',
    icon: Leaf,
    stat: '85%',
    statLabel: 'CO₂ Reduction'
  },
  {
    title: 'Energy Security',
    description: 'Protect against grid outages and price volatility',
    icon: Shield,
    stat: '25+',
    statLabel: 'Year Warranty'
  }
]

export default function IndustriesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Breadcrumbs items={breadcrumbItems} className="mx-auto max-w-7xl px-6 pt-8 lg:px-8" />
      
      {/* Hero Section */}
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
            Solar Solutions for{' '}
            <span className="text-solar-600">Every Industry</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            We've helped businesses across diverse industries reduce energy costs, 
            improve sustainability, and achieve their clean energy goals.
          </p>
        </div>
      </div>

      {/* Common Benefits Section */}
      <div className="bg-muted/50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Universal Benefits
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Regardless of your industry, solar energy delivers consistent benefits 
              that improve your bottom line and environmental impact.
            </p>
          </div>
          
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {commonBenefits.map((benefit) => (
              <Card key={benefit.title} className="text-center">
                <CardHeader>
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-solar-100 dark:bg-solar-900">
                    <benefit.icon className="h-8 w-8 text-solar-600" />
                  </div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-4">
                    {benefit.description}
                  </CardDescription>
                  <div className="text-3xl font-bold text-solar-600">{benefit.stat}</div>
                  <div className="text-sm text-muted-foreground">{benefit.statLabel}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Industries Grid */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Industry-Specific Solutions
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Each industry has unique energy needs and challenges. We tailor our 
              solar solutions to maximize your specific benefits.
            </p>
          </div>
          
          <div className="mx-auto mt-16 space-y-24">
            {industries.map((industry, index) => (
              <div key={industry.name} className={`grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-solar-100 dark:bg-solar-900">
                      <industry.icon className="h-6 w-6 text-solar-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground">{industry.name}</h3>
                    </div>
                  </div>
                  
                  <p className="text-lg text-muted-foreground mb-6">
                    {industry.description}
                  </p>
                  
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-solar-600">{industry.stats.projects}</div>
                      <div className="text-sm text-muted-foreground">Projects</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-solar-600">{industry.stats.totalMW}</div>
                      <div className="text-sm text-muted-foreground">MW Installed</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-solar-600">{industry.stats.totalSavings}</div>
                      <div className="text-sm text-muted-foreground">Total Savings</div>
                    </div>
                  </div>
                  
                  <div className="space-y-4 mb-8">
                    <h4 className="text-lg font-semibold text-foreground">Key Benefits</h4>
                    <ul className="space-y-2">
                      {industry.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-solar-600" />
                          <span className="text-muted-foreground">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Button asChild variant="solar">
                    <Link href="/contact">
                      Get Industry Quote
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
                
                <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <Card>
                    <div className="aspect-video relative">
                      <Image
                        src={industry.caseStudy.image}
                        alt={`${industry.caseStudy.company} solar installation`}
                        fill
                        className="object-cover rounded-t-lg"
                      />
                    </div>
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        <div>
                          <h4 className="text-lg font-semibold text-foreground">{industry.caseStudy.company}</h4>
                          <p className="text-sm text-muted-foreground">{industry.caseStudy.location}</p>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <span className="text-muted-foreground">System Size:</span>
                            <p className="font-medium">{industry.caseStudy.systemSize}</p>
                          </div>
                          <div>
                            <span className="text-muted-foreground">Annual Savings:</span>
                            <p className="font-medium text-solar-600">{industry.caseStudy.annualSavings}</p>
                          </div>
                          <div>
                            <span className="text-muted-foreground">Payback Period:</span>
                            <p className="font-medium">{industry.caseStudy.paybackPeriod}</p>
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
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-solar-600">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to Lead Your Industry?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-solar-100">
              Join the growing number of businesses across all industries that are 
              reducing costs and improving sustainability with solar energy.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button asChild size="lg" variant="secondary">
                <Link href="/savings-calculator">
                  Calculate Your Savings
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-solar-600">
                <Link href="/contact">
                  Get Industry Quote
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
