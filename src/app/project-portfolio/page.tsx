"use client"

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/design-system/card'
import { Button } from '@/components/design-system/button'
import { Badge } from '@/components/design-system/badge'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/design-system/dialog'
import { Breadcrumbs } from '@/components/design-system/breadcrumbs'
import { 
  Filter, 
  ArrowRight, 
  CheckCircle, 
  MapPin, 
  Calendar,
  Zap,
  DollarSign,
  Leaf
} from 'lucide-react'

const breadcrumbItems = [
  { label: 'Home', href: '/' },
  { label: 'Project Portfolio', current: true }
]

const projects = [
  {
    id: 1,
    name: 'GreenTech Manufacturing',
    location: 'Fremont, CA',
    industry: 'Manufacturing',
    systemSize: '2.5 MW',
    annualSavings: '$450,000',
    paybackPeriod: '4.2 years',
    co2Offset: '1,200 tons/year',
    completionDate: '2023',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop',
    description: 'Large-scale solar installation for a high-tech manufacturing facility, featuring both rooftop and ground-mounted systems.',
    features: [
      '2,500 kW total capacity',
      '8,000+ solar panels',
      'Battery storage integration',
      'Advanced monitoring system'
    ],
    results: {
      energyProduction: '3.8 GWh/year',
      costSavings: '$450,000/year',
      carbonReduction: '1,200 tons CO₂/year',
      roi: '23.8%'
    }
  },
  {
    id: 2,
    name: 'Metro Distribution Center',
    location: 'Houston, TX',
    industry: 'Warehousing',
    systemSize: '1.8 MW',
    annualSavings: '$320,000',
    paybackPeriod: '3.8 years',
    co2Offset: '900 tons/year',
    completionDate: '2023',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop',
    description: 'Comprehensive solar solution for a major distribution center, optimizing energy usage across multiple buildings.',
    features: [
      '1,800 kW total capacity',
      '6,000+ solar panels',
      'Smart energy management',
      'Grid-tie system'
    ],
    results: {
      energyProduction: '2.7 GWh/year',
      costSavings: '$320,000/year',
      carbonReduction: '900 tons CO₂/year',
      roi: '26.3%'
    }
  },
  {
    id: 3,
    name: 'University of Oregon',
    location: 'Eugene, OR',
    industry: 'Education',
    systemSize: '3.2 MW',
    annualSavings: '$580,000',
    paybackPeriod: '4.5 years',
    co2Offset: '1,600 tons/year',
    completionDate: '2022',
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=600&h=400&fit=crop',
    description: 'Multi-building solar installation across university campus, supporting educational and research facilities.',
    features: [
      '3,200 kW total capacity',
      '10,000+ solar panels',
      'Educational monitoring displays',
      'Research integration'
    ],
    results: {
      energyProduction: '4.8 GWh/year',
      costSavings: '$580,000/year',
      carbonReduction: '1,600 tons CO₂/year',
      roi: '22.2%'
    }
  },
  {
    id: 4,
    name: 'City of Greenfield',
    location: 'Greenfield, CO',
    industry: 'Municipal',
    systemSize: '1.8 MW',
    annualSavings: '$320,000',
    paybackPeriod: '4.0 years',
    co2Offset: '900 tons/year',
    completionDate: '2022',
    image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=600&h=400&fit=crop',
    description: 'Municipal solar project covering city hall, police station, and public works facilities.',
    features: [
      '1,800 kW total capacity',
      '6,000+ solar panels',
      'Public education displays',
      'Emergency backup power'
    ],
    results: {
      energyProduction: '2.7 GWh/year',
      costSavings: '$320,000/year',
      carbonReduction: '900 tons CO₂/year',
      roi: '25.0%'
    }
  },
  {
    id: 5,
    name: 'Green Valley Mall',
    location: 'San Diego, CA',
    industry: 'Retail',
    systemSize: '1.5 MW',
    annualSavings: '$280,000',
    paybackPeriod: '4.2 years',
    co2Offset: '750 tons/year',
    completionDate: '2023',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop',
    description: 'Shopping center solar installation with integrated EV charging stations and customer education displays.',
    features: [
      '1,500 kW total capacity',
      '5,000+ solar panels',
      'EV charging integration',
      'Customer engagement displays'
    ],
    results: {
      energyProduction: '2.3 GWh/year',
      costSavings: '$280,000/year',
      carbonReduction: '750 tons CO₂/year',
      roi: '23.8%'
    }
  },
  {
    id: 6,
    name: 'TechCorp Data Center',
    location: 'Phoenix, AZ',
    industry: 'Technology',
    systemSize: '4.0 MW',
    annualSavings: '$720,000',
    paybackPeriod: '4.8 years',
    co2Offset: '2,000 tons/year',
    completionDate: '2023',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
    description: 'Large-scale solar and battery storage system for a critical data center facility.',
    features: [
      '4,000 kW total capacity',
      '12,000+ solar panels',
      '2 MWh battery storage',
      'Microgrid capability'
    ],
    results: {
      energyProduction: '6.0 GWh/year',
      costSavings: '$720,000/year',
      carbonReduction: '2,000 tons CO₂/year',
      roi: '20.8%'
    }
  }
]

const industries = ['All', 'Manufacturing', 'Warehousing', 'Education', 'Municipal', 'Retail', 'Technology']
const systemSizes = ['All', 'Small (< 1 MW)', 'Medium (1-3 MW)', 'Large (3+ MW)']

export default function ProjectPortfolioPage() {
  const [selectedIndustry, setSelectedIndustry] = useState('All')
  const [selectedSize, setSelectedSize] = useState('All')
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null)

  const filteredProjects = projects.filter(project => {
    const industryMatch = selectedIndustry === 'All' || project.industry === selectedIndustry
    const sizeMatch = selectedSize === 'All' || 
      (selectedSize === 'Small (< 1 MW)' && parseFloat(project.systemSize) < 1) ||
      (selectedSize === 'Medium (1-3 MW)' && parseFloat(project.systemSize) >= 1 && parseFloat(project.systemSize) < 3) ||
      (selectedSize === 'Large (3+ MW)' && parseFloat(project.systemSize) >= 3)
    return industryMatch && sizeMatch
  })

  return (
    <div className="min-h-screen bg-background">
      <Breadcrumbs items={breadcrumbItems} className="mx-auto max-w-7xl px-6 pt-8 lg:px-8" />
      
      {/* Hero Section */}
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
            Project{' '}
            <span className="text-solar-600">Portfolio</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Explore our successful solar installations across diverse industries. 
            See how we've helped businesses reduce costs and improve sustainability.
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-wrap gap-4 mb-8">
          <div className="flex items-center space-x-2">
            <Filter className="h-5 w-5 text-muted-foreground" />
            <span className="text-sm font-medium">Filter by:</span>
          </div>
          
          <select
            value={selectedIndustry}
            onChange={(e) => setSelectedIndustry(e.target.value)}
            className="rounded-md border border-input bg-background px-3 py-2 text-sm"
          >
            {industries.map(industry => (
              <option key={industry} value={industry}>{industry}</option>
            ))}
          </select>
          
          <select
            value={selectedSize}
            onChange={(e) => setSelectedSize(e.target.value)}
            className="rounded-md border border-input bg-background px-3 py-2 text-sm"
          >
            {systemSizes.map(size => (
              <option key={size} value={size}>{size}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="group hover:shadow-lg transition-shadow">
              <div className="aspect-video relative">
                <Image
                  src={project.image}
                  alt={`${project.name} solar installation`}
                  fill
                  className="object-cover rounded-t-lg"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="solar">
                    <CheckCircle className="mr-1 h-3 w-3" />
                    Completed
                  </Badge>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">{project.name}</h3>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>{project.location}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{project.completionDate}</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-muted-foreground">System Size:</span>
                      <p className="font-medium">{project.systemSize}</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Industry:</span>
                      <p className="font-medium">{project.industry}</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Annual Savings:</span>
                      <p className="font-medium text-solar-600">{project.annualSavings}</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Payback:</span>
                      <p className="font-medium">{project.paybackPeriod}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => setSelectedProject(project)}
                        >
                          View Details
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-2xl">
                        <DialogHeader>
                          <DialogTitle>{project.name}</DialogTitle>
                          <DialogDescription>
                            {project.description}
                          </DialogDescription>
                        </DialogHeader>
                        <div className="space-y-6">
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <span className="text-sm text-muted-foreground">Location:</span>
                              <p className="font-medium">{project.location}</p>
                            </div>
                            <div>
                              <span className="text-sm text-muted-foreground">Industry:</span>
                              <p className="font-medium">{project.industry}</p>
                            </div>
                            <div>
                              <span className="text-sm text-muted-foreground">System Size:</span>
                              <p className="font-medium">{project.systemSize}</p>
                            </div>
                            <div>
                              <span className="text-sm text-muted-foreground">Completion:</span>
                              <p className="font-medium">{project.completionDate}</p>
                            </div>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold mb-2">Key Features</h4>
                            <ul className="space-y-1">
                              {project.features.map((feature) => (
                                <li key={feature} className="flex items-center space-x-2 text-sm">
                                  <CheckCircle className="h-4 w-4 text-solar-600" />
                                  <span>{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold mb-2">Results</h4>
                            <div className="grid grid-cols-2 gap-4">
                              {Object.entries(project.results).map(([key, value]) => (
                                <div key={key} className="text-center p-3 bg-muted/50 rounded-lg">
                                  <div className="text-lg font-semibold text-solar-600">{value}</div>
                                  <div className="text-sm text-muted-foreground capitalize">
                                    {key.replace(/([A-Z])/g, ' $1')}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                    
                    <Button asChild variant="solar" size="sm">
                      <Link href="/contact">
                        Get Similar Quote
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No projects found matching your filters.</p>
          </div>
        )}
      </div>

      {/* Stats Section */}
      <div className="bg-muted/50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Portfolio Impact
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Our projects have delivered significant value across all industries.
            </p>
          </div>
          
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-4">
            <div className="text-center">
              <div className="text-4xl font-bold text-solar-600">200+</div>
              <div className="text-sm text-muted-foreground">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-solar-600">150+</div>
              <div className="text-sm text-muted-foreground">MW Installed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-solar-600">$25M+</div>
              <div className="text-sm text-muted-foreground">Annual Savings</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-solar-600">12,000</div>
              <div className="text-sm text-muted-foreground">Tons CO₂ Offset</div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-solar-600">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to Join Our Success Stories?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-solar-100">
              Let us help you achieve similar results with a custom solar solution 
              designed for your business.
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
