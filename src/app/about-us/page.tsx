import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/design-system/card'
import { Button } from '@/components/design-system/button'
import { Badge } from '@/components/design-system/badge'
import { Breadcrumbs } from '@/components/design-system/breadcrumbs'
import { 
  Users, 
  Target, 
  Leaf, 
  Award, 
  ArrowRight,
  CheckCircle,
  Globe,
  Shield,
  TrendingUp
} from 'lucide-react'

const breadcrumbItems = [
  { label: 'Home', href: '/' },
  { label: 'About Us', current: true }
]

const values = [
  {
    title: 'Sustainability First',
    description: 'We believe in a sustainable future powered by clean energy.',
    icon: Leaf,
    details: 'Every project we undertake is designed to maximize environmental impact while delivering economic value.'
  },
  {
    title: 'Customer Success',
    description: 'Your success is our success. We partner with you for the long term.',
    icon: Target,
    details: 'We provide ongoing support and maintenance to ensure your system performs optimally for decades.'
  },
  {
    title: 'Innovation',
    description: 'We stay at the forefront of solar technology and best practices.',
    icon: TrendingUp,
    details: 'Our team continuously learns and adopts the latest technologies to deliver better results.'
  },
  {
    title: 'Integrity',
    description: 'We do what we say and say what we do. Honest, transparent, reliable.',
    icon: Shield,
    details: 'We provide accurate estimates, realistic timelines, and honest recommendations.'
  }
]

const team = [
  {
    name: 'Sarah Johnson',
    title: 'CEO & Founder',
    bio: '15+ years in renewable energy, former Tesla Energy executive.',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face'
  },
  {
    name: 'Michael Chen',
    title: 'CTO',
    bio: 'Solar engineering expert with 20+ years designing commercial systems.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face'
  },
  {
    name: 'Emily Rodriguez',
    title: 'Head of Operations',
    bio: 'Project management specialist ensuring smooth installations and customer satisfaction.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face'
  },
  {
    name: 'David Kim',
    title: 'Lead Engineer',
    bio: 'Electrical engineering expert specializing in commercial solar and storage systems.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face'
  }
]

const achievements = [
  { metric: 'Projects Completed', value: '200+', description: 'Successful commercial installations' },
  { metric: 'MW Installed', value: '150+', description: 'Total solar capacity deployed' },
  { metric: 'Years Experience', value: '15+', description: 'Combined team experience' },
  { metric: 'Customer Satisfaction', value: '98%', description: 'Client satisfaction rating' }
]

const certifications = [
  'NABCEP Certified Installers',
  'NECA Member',
  'SEIA Member',
  'BBB A+ Rating',
  'ISO 9001 Certified',
  'OSHA Safety Certified'
]

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Breadcrumbs items={breadcrumbItems} className="mx-auto max-w-7xl px-6 pt-8 lg:px-8" />
      
      {/* Hero Section */}
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
            About{' '}
            <span className="text-solar-600">Vibe Solar</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            We're passionate about accelerating the transition to clean energy by 
            making commercial solar accessible, affordable, and reliable for businesses of all sizes.
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Our Mission
              </h2>
              <p className="mt-6 text-lg text-muted-foreground">
                To accelerate the global transition to clean energy by making commercial solar 
                accessible, affordable, and reliable for businesses of all sizes. We believe 
                that every business should have the opportunity to reduce costs, improve 
                sustainability, and contribute to a cleaner future.
              </p>
              <div className="mt-8">
                <h3 className="text-xl font-semibold text-foreground mb-4">Our Vision</h3>
                <p className="text-muted-foreground">
                  A world where clean energy is the default choice for businesses, creating 
                  a sustainable economy that benefits both people and the planet.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1548611635-b6e3c182b307?w=600&h=400&fit=crop"
                alt="Solar panels on commercial building"
                width={600}
                height={400}
                className="rounded-2xl shadow-lg"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-muted/50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Our Values
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              These core values guide everything we do and shape how we work with our clients.
            </p>
          </div>
          
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            {values.map((value) => (
              <Card key={value.title}>
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-solar-100 dark:bg-solar-900">
                      <value.icon className="h-6 w-6 text-solar-600" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{value.title}</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-4">
                    {value.description}
                  </CardDescription>
                  <p className="text-sm text-muted-foreground">
                    {value.details}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Meet Our Team
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Experienced professionals dedicated to delivering exceptional solar solutions.
            </p>
          </div>
          
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            {team.map((member) => (
              <Card key={member.name}>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="h-16 w-16 rounded-full overflow-hidden">
                      <Image
                        src={member.image}
                        alt={member.name}
                        width={64}
                        height={64}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">{member.name}</h3>
                      <p className="text-sm text-solar-600">{member.title}</p>
                      <p className="text-sm text-muted-foreground mt-1">{member.bio}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Achievements Section */}
      <div className="bg-muted/50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Our Track Record
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Numbers that speak to our experience and success in commercial solar.
            </p>
          </div>
          
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-4">
            {achievements.map((achievement) => (
              <div key={achievement.metric} className="text-center">
                <div className="text-4xl font-bold text-solar-600">{achievement.value}</div>
                <div className="text-lg font-semibold text-foreground mt-2">{achievement.metric}</div>
                <div className="text-sm text-muted-foreground mt-1">{achievement.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Certifications Section */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Certifications & Memberships
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              We maintain the highest industry standards and certifications.
            </p>
          </div>
          
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-4 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {certifications.map((certification) => (
              <div key={certification} className="flex items-center space-x-2 p-4 bg-muted/50 rounded-lg">
                <CheckCircle className="h-5 w-5 text-solar-600" />
                <span className="text-sm font-medium">{certification}</span>
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
              Ready to Work With Us?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-solar-100">
              Join the growing number of businesses that trust Vibe Solar for their 
              clean energy needs.
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
