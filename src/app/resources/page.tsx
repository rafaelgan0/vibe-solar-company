import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/design-system/card'
import { Button } from '@/components/design-system/button'
import { Badge } from '@/components/design-system/badge'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/design-system/accordion'
import { Breadcrumbs } from '@/components/design-system/breadcrumbs'
import { 
  FileText, 
  Download, 
  ArrowRight, 
  CheckCircle,
  HelpCircle,
  BookOpen,
  Calculator
} from 'lucide-react'

const breadcrumbItems = [
  { label: 'Home', href: '/' },
  { label: 'Resources', current: true }
]

const faqs = [
  {
    question: "How long does a solar installation take?",
    answer: "Most commercial solar installations take 2-6 weeks depending on system size and complexity. This includes permitting, installation, and commissioning."
  },
  {
    question: "What is the typical payback period?",
    answer: "Commercial solar systems typically pay for themselves in 4-6 years, with 25+ years of free electricity after payback."
  },
  {
    question: "Do I need to maintain my solar system?",
    answer: "Solar systems require minimal maintenance. We recommend annual inspections and cleaning, which we can provide as part of our O&M services."
  },
  {
    question: "What happens if my roof needs repairs?",
    answer: "Solar panels can be temporarily removed for roof repairs and reinstalled afterward. We coordinate with roofing contractors to minimize disruption."
  },
  {
    question: "Can I add battery storage later?",
    answer: "Yes, most solar systems can be retrofitted with battery storage. We design systems with future battery integration in mind."
  },
  {
    question: "What warranties do you provide?",
    answer: "We provide 25-year performance warranties on panels, 10-year warranties on inverters, and 10-year workmanship warranties on installation."
  }
]

const guides = [
  {
    title: "Commercial Solar Guide",
    description: "Complete guide to commercial solar installations, incentives, and financing options.",
    type: "PDF Guide",
    size: "2.4 MB",
    icon: FileText
  },
  {
    title: "Battery Storage Solutions",
    description: "Everything you need to know about commercial battery storage systems.",
    type: "Whitepaper",
    size: "1.8 MB",
    icon: BookOpen
  },
  {
    title: "Solar ROI Calculator",
    description: "Interactive spreadsheet to calculate your solar return on investment.",
    type: "Excel Tool",
    size: "0.5 MB",
    icon: Calculator
  }
]

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Breadcrumbs items={breadcrumbItems} className="mx-auto max-w-7xl px-6 pt-8 lg:px-8" />
      
      {/* Hero Section */}
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
            Solar{' '}
            <span className="text-solar-600">Resources</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Everything you need to know about commercial solar energy, from guides 
            and whitepapers to frequently asked questions.
          </p>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Get answers to the most common questions about commercial solar installations.
            </p>
          </div>
          
          <div className="mx-auto mt-16 max-w-4xl">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left">
                    <span className="font-semibold">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>

      {/* Guides Section */}
      <div className="bg-muted/50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Downloadable Resources
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Free guides, whitepapers, and tools to help you understand commercial solar.
            </p>
          </div>
          
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {guides.map((guide) => (
              <Card key={guide.title} className="group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-solar-100 dark:bg-solar-900">
                      <guide.icon className="h-6 w-6 text-solar-600" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{guide.title}</CardTitle>
                      <Badge variant="solar" className="mt-2">{guide.type}</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-4">
                    {guide.description}
                  </CardDescription>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">{guide.size}</span>
                    <Button variant="outline" size="sm">
                      <Download className="mr-2 h-4 w-4" />
                      Download
                    </Button>
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
              Still Have Questions?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-solar-100">
              Our solar experts are here to help. Get personalized answers to your 
              specific questions and a custom solar proposal.
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
                  <HelpCircle className="mr-2 h-5 w-5" />
                  Ask an Expert
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
