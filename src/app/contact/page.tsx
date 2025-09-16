"use client"

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/design-system/card'
import { Button } from '@/components/design-system/button'
import { Input } from '@/components/design-system/input'
import { Textarea } from '@/components/design-system/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/design-system/select'
import { Checkbox } from '@/components/design-system/checkbox'
import { Alert, AlertDescription } from '@/components/design-system/alert'
import { Breadcrumbs } from '@/components/design-system/breadcrumbs'
import { submitContactForm } from '@/lib/actions/contact'
import { Mail, Phone, MapPin, CheckCircle, AlertCircle } from 'lucide-react'
import type { ContactFormState } from '@/lib/actions/contact'

const breadcrumbItems = [
  { label: 'Home', href: '/' },
  { label: 'Contact', current: true }
]

const topicOptions = [
  { value: 'PROPOSAL', label: 'Request a Proposal' },
  { value: 'O_M', label: 'Operations & Maintenance' },
  { value: 'STORAGE', label: 'Battery Storage' },
  { value: 'GENERAL', label: 'General Inquiry' }
]

export default function ContactPage() {
  const searchParams = useSearchParams()
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    topic: 'GENERAL' as 'PROPOSAL' | 'O_M' | 'STORAGE' | 'GENERAL',
    message: '',
    consent: false
  })
  const [calculatorContext, setCalculatorContext] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formState, setFormState] = useState<ContactFormState>({})

  // Pre-fill form with calculator data if coming from calculator
  useEffect(() => {
    const source = searchParams.get('source')
    if (source === 'calculator') {
      const storedData = sessionStorage.getItem('calculatorContext')
      if (storedData) {
        setCalculatorContext(storedData)
        
        try {
          const data = JSON.parse(storedData)
          // Pre-fill some fields based on calculator data
          if (data.results) {
            setFormData(prev => ({
              ...prev,
              topic: 'PROPOSAL',
              message: `I'm interested in a solar proposal based on my calculator results:\n\n` +
                      `System Size: ${data.results.systemSizeKw?.toFixed(1)} kW\n` +
                      `Estimated Savings: $${data.results.annualSavings?.toFixed(0)}/year\n` +
                      `Payback Period: ${data.results.simplePaybackYears?.toFixed(1)} years\n\n` +
                      `Please contact me to discuss this proposal.`
            }))
          }
        } catch (error) {
          console.error('Error parsing calculator context:', error)
        }
      }
    }
  }, [searchParams])

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setFormState({})

    const formDataObj = new FormData()
    formDataObj.append('fullName', formData.fullName)
    formDataObj.append('email', formData.email)
    formDataObj.append('phone', formData.phone)
    formDataObj.append('company', formData.company)
    formDataObj.append('topic', formData.topic)
    formDataObj.append('message', formData.message)
    formDataObj.append('consent', formData.consent ? 'on' : 'off')
    
    if (calculatorContext) {
      formDataObj.append('calculatorContext', calculatorContext)
    }

    const result = await submitContactForm({}, formDataObj)
    setFormState(result)
    setIsSubmitting(false)

    if (result.success) {
      // Reset form
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        company: '',
        topic: 'GENERAL',
        message: '',
        consent: false
      })
      setCalculatorContext(null)
      sessionStorage.removeItem('calculatorContext')
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
        <Breadcrumbs items={breadcrumbItems} className="mb-8" />
        
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Contact Us
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Ready to start your solar journey? Get in touch with our team of experts 
              for a personalized consultation and detailed proposal.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle as="h2">Get in Touch</CardTitle>
                  <CardDescription>
                    We're here to help you with all your solar energy needs.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Mail className="h-5 w-5 text-solar-600 mt-1" />
                    <div>
                      <p className="font-medium">Email</p>
                      <a 
                        href="mailto:info@vibesolar.com" 
                        className="text-muted-foreground hover:text-foreground transition-colors"
                      >
                        info@vibesolar.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Phone className="h-5 w-5 text-solar-600 mt-1" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <a 
                        href="tel:+1-555-0123" 
                        className="text-muted-foreground hover:text-foreground transition-colors"
                      >
                        (555) 123-4567
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <MapPin className="h-5 w-5 text-solar-600 mt-1" />
                    <div>
                      <p className="font-medium">Address</p>
                      <p className="text-muted-foreground">
                        123 Solar Street<br />
                        Green City, GC 12345
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle as="h2">Business Hours</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span>8:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span>9:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span>Closed</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle as="h2">Send us a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you within 24 hours.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {formState.success && (
                    <Alert className="mb-6">
                      <CheckCircle className="h-4 w-4" />
                      <AlertDescription>
                        Thank you for your message! We'll get back to you within 24 hours.
                      </AlertDescription>
                    </Alert>
                  )}

                  {formState.error && (
                    <Alert variant="destructive" className="mb-6">
                      <AlertCircle className="h-4 w-4" />
                      <AlertDescription>{formState.error}</AlertDescription>
                    </Alert>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="fullName" className="block text-sm font-medium mb-2">
                          Full Name *
                        </label>
                        <Input
                          id="fullName"
                          name="fullName"
                          value={formData.fullName}
                          onChange={(e) => handleInputChange('fullName', e.target.value)}
                          error={formState.fieldErrors?.fullName?.[0]}
                          required
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                          Email Address *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          error={formState.fieldErrors?.email?.[0]}
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium mb-2">
                          Phone Number
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          error={formState.fieldErrors?.phone?.[0]}
                        />
                      </div>

                      <div>
                        <label htmlFor="company" className="block text-sm font-medium mb-2">
                          Company
                        </label>
                        <Input
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={(e) => handleInputChange('company', e.target.value)}
                          error={formState.fieldErrors?.company?.[0]}
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="topic" className="block text-sm font-medium mb-2">
                        Topic *
                      </label>
                      <Select
                        value={formData.topic}
                        onValueChange={(value: 'PROPOSAL' | 'O_M' | 'STORAGE' | 'GENERAL') => 
                          handleInputChange('topic', value)
                        }
                      >
                        <SelectTrigger id="topic" aria-label="Select a topic">
                          <SelectValue placeholder="Select a topic" />
                        </SelectTrigger>
                        <SelectContent>
                          {topicOptions.map((option) => (
                            <SelectItem key={option.value} value={option.value}>
                              {option.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {formState.fieldErrors?.topic?.[0] && (
                        <p className="text-sm text-destructive mt-1">
                          {formState.fieldErrors.topic[0]}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        rows={6}
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        error={formState.fieldErrors?.message?.[0]}
                        placeholder="Tell us about your solar energy needs..."
                        required
                      />
                    </div>

                    <div className="flex items-start space-x-3">
                      <Checkbox
                        id="consent"
                        name="consent"
                        checked={formData.consent}
                        onCheckedChange={(checked) => handleInputChange('consent', checked)}
                        required
                      />
                      <label htmlFor="consent" className="text-sm text-muted-foreground">
                        I consent to Vibe Solar Company processing my personal data for the purpose of 
                        responding to my inquiry and providing solar energy services. *
                      </label>
                    </div>
                    {formState.fieldErrors?.consent?.[0] && (
                      <p className="text-sm text-destructive">
                        {formState.fieldErrors.consent[0]}
                      </p>
                    )}

                    <Button 
                      type="submit" 
                      className="w-full" 
                      size="lg"
                      variant="solar"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
