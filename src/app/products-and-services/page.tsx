import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/design-system/card'
import { Button } from '@/components/design-system/button'
import { Badge } from '@/components/design-system/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/design-system/tabs'
import { Breadcrumbs } from '@/components/design-system/breadcrumbs'
import { 
  Zap, 
  Battery, 
  Car, 
  Grid3X3,
  ArrowRight,
  CheckCircle,
  Shield,
  TrendingUp,
  Clock,
  Leaf
} from 'lucide-react'

const breadcrumbItems = [
  { label: 'Home', href: '/' },
  { label: 'Products & Services', current: true }
]

const products = [
  {
    name: 'Commercial Solar PV',
    description: 'High-efficiency solar panels designed for commercial rooftops and ground-mounted installations.',
    icon: Zap,
    features: [
      '22%+ efficiency panels',
      '25-year performance warranty',
      'Weather-resistant design',
      'Easy installation and maintenance'
    ],
    benefits: [
      'Reduce electricity costs by 60-80%',
      'Protect against rising energy prices',
      'Improve sustainability credentials',
      'Qualify for tax incentives'
    ],
    specifications: {
      efficiency: '22%+',
      warranty: '25 years',
      degradation: '0.5% per year',
      temperatureCoefficient: '-0.35%/°C'
    },
    image: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=600&h=400&fit=crop'
  },
  {
    name: 'Battery Storage Systems',
    description: 'Advanced energy storage solutions for backup power and demand management.',
    icon: Battery,
    features: [
      'Lithium-ion technology',
      'Modular design for scalability',
      'Smart energy management',
      'Grid-tie and off-grid capable'
    ],
    benefits: [
      'Backup power during outages',
      'Peak shaving and demand management',
      'Time-of-use arbitrage',
      'Grid services revenue potential'
    ],
    specifications: {
      chemistry: 'Lithium Iron Phosphate',
      cycleLife: '6,000+ cycles',
      efficiency: '95% round-trip',
      warranty: '10 years'
    },
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop'
  },
  {
    name: 'EV Charging Infrastructure',
    description: 'Integrated electric vehicle charging stations powered by clean solar energy.',
    icon: Car,
    features: [
      'Level 2 and DC fast charging',
      'Solar-powered operation',
      'Smart charging management',
      'Payment processing integration'
    ],
    benefits: [
      'Attract EV-driving customers',
      'Generate additional revenue',
      'Demonstrate sustainability leadership',
      'Qualify for EV charging incentives'
    ],
    specifications: {
      powerLevels: '7.4kW - 150kW',
      connectors: 'J1772, CCS, CHAdeMO',
      efficiency: '95%+',
      warranty: '5 years'
    },
    image: 'https://images.unsplash.com/photo-1593941707882-a5bac6861d75?w=600&h=400&fit=crop'
  },
  {
    name: 'Microgrid Solutions',
    description: 'Resilient microgrid systems for critical infrastructure and remote locations.',
    icon: Grid3X3,
    features: [
      'Islanding capability',
      'Multiple generation sources',
      'Advanced control systems',
      'Grid-tie and off-grid operation'
    ],
    benefits: [
      'Energy independence',
      'Enhanced reliability',
      'Reduced energy costs',
      'Environmental sustainability'
    ],
    specifications: {
      capacity: '100kW - 10MW+',
      islanding: 'Automatic',
      control: 'Advanced EMS',
      warranty: '10 years'
    },
    image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=600&h=400&fit=crop'
  }
]

const services = [
  {
    name: 'Design & Engineering',
    description: 'Custom solar system design optimized for your specific needs and site conditions.',
    icon: TrendingUp,
    features: [
      'Site assessment and analysis',
      'Energy modeling and optimization',
      'Permitting and interconnection',
      '3D design and visualization'
    ]
  },
  {
    name: 'Installation & Commissioning',
    description: 'Professional installation by certified technicians with full commissioning.',
    icon: Shield,
    features: [
      'Certified installation team',
      'Quality assurance testing',
      'System commissioning',
      'Performance verification'
    ]
  },
  {
    name: 'Operations & Maintenance',
    description: 'Comprehensive O&M services to ensure optimal system performance.',
    icon: Clock,
    features: [
      'Preventive maintenance',
      'Performance monitoring',
      'Warranty management',
      '24/7 support'
    ]
  },
  {
    name: 'Financing & Incentives',
    description: 'Help secure financing and maximize available incentives and rebates.',
    icon: Leaf,
    features: [
      'Financing options',
      'Incentive applications',
      'Tax credit optimization',
      'PPA and lease options'
    ]
  }
]

export default function ProductsAndServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Breadcrumbs items={breadcrumbItems} className="mx-auto max-w-7xl px-6 pt-8 lg:px-8" />
      
      {/* Hero Section */}
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
            Complete Solar{' '}
            <span className="text-solar-600">Solutions</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            From solar panels to battery storage, we provide everything you need 
            for a complete renewable energy system tailored to your business.
          </p>
        </div>
      </div>

      {/* Products and Services Tabs */}
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <Tabs defaultValue="products" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="products">Products</TabsTrigger>
            <TabsTrigger value="services">Services</TabsTrigger>
          </TabsList>
          
          <TabsContent value="products" className="mt-8">
            <div className="space-y-16">
              {products.map((product) => (
                <div key={product.name} className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
                  <div>
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-solar-100 dark:bg-solar-900">
                        <product.icon className="h-6 w-6 text-solar-600" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-foreground">{product.name}</h3>
                      </div>
                    </div>
                    
                    <p className="text-lg text-muted-foreground mb-6">
                      {product.description}
                    </p>
                    
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-lg font-semibold text-foreground mb-3">Key Features</h4>
                        <ul className="space-y-2">
                          {product.features.map((feature) => (
                            <li key={feature} className="flex items-center space-x-2">
                              <CheckCircle className="h-4 w-4 text-solar-600" />
                              <span className="text-muted-foreground">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-semibold text-foreground mb-3">Benefits</h4>
                        <ul className="space-y-2">
                          {product.benefits.map((benefit) => (
                            <li key={benefit} className="flex items-center space-x-2">
                              <CheckCircle className="h-4 w-4 text-solar-600" />
                              <span className="text-muted-foreground">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-semibold text-foreground mb-3">Specifications</h4>
                        <div className="grid grid-cols-2 gap-4">
                          {Object.entries(product.specifications).map(([key, value]) => (
                            <div key={key} className="text-sm">
                              <span className="text-muted-foreground capitalize">{key.replace(/([A-Z])/g, ' $1')}:</span>
                              <p className="font-medium">{value}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <Button asChild variant="solar">
                        <Link href="/contact">
                          Get Quote for {product.name}
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                  
                  <div>
                    <Card>
                      <div className="aspect-video relative">
                        <Image
                          src={product.image}
                          alt={`${product.name} system`}
                          fill
                          className="object-cover rounded-t-lg"
                        />
                      </div>
                      <CardContent className="p-6">
                        <div className="text-center">
                          <h4 className="text-lg font-semibold text-foreground mb-2">{product.name}</h4>
                          <p className="text-sm text-muted-foreground">
                            Professional installation and support included
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="services" className="mt-8">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {services.map((service) => (
                <Card key={service.name}>
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-solar-100 dark:bg-solar-900">
                        <service.icon className="h-6 w-6 text-solar-600" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{service.name}</CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base mb-4">
                      {service.description}
                    </CardDescription>
                    <ul className="space-y-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-solar-600" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-muted/50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Why Choose Vibe Solar?
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              We're not just another solar installer. We're your long-term partner 
              in clean energy success.
            </p>
          </div>
          
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-solar-100 dark:bg-solar-900">
                  <Shield className="h-8 w-8 text-solar-600" />
                </div>
                <CardTitle>Proven Expertise</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Over 200 successful projects with 150+ MW installed across diverse industries.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-solar-100 dark:bg-solar-900">
                  <TrendingUp className="h-8 w-8 text-solar-600" />
                </div>
                <CardTitle>Maximum Value</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  We optimize every system for maximum energy production and return on investment.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-solar-100 dark:bg-solar-900">
                  <Clock className="h-8 w-8 text-solar-600" />
                </div>
                <CardTitle>Lifetime Support</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Comprehensive O&M services ensure your system performs optimally for decades.
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
              Ready to Get Started?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-solar-100">
              Let us design the perfect solar solution for your business. 
              Get a free consultation and detailed proposal.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button asChild size="lg" variant="secondary">
                <Link href="/savings-calculator">
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
