"use server"

import { z } from 'zod'
import { getContactRepository } from '@/lib/data/contacts'
import { revalidatePath } from 'next/cache'

const contactSchema = z.object({
  fullName: z.string().min(2, 'Full name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional(),
  company: z.string().optional(),
  topic: z.enum(['PROPOSAL', 'O_M', 'STORAGE', 'GENERAL'], {
    errorMap: () => ({ message: 'Please select a valid topic' })
  }),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  calculatorContext: z.string().optional(),
  consent: z.boolean().refine(val => val === true, {
    message: 'You must consent to data processing'
  })
})

export type ContactFormData = z.infer<typeof contactSchema>

export interface ContactFormState {
  success?: boolean
  error?: string
  fieldErrors?: Record<string, string[]>
}

export async function submitContactForm(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  try {
    // Parse and validate form data
    const rawData = {
      fullName: formData.get('fullName') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string || undefined,
      company: formData.get('company') as string || undefined,
      topic: formData.get('topic') as 'PROPOSAL' | 'O_M' | 'STORAGE' | 'GENERAL',
      message: formData.get('message') as string,
      calculatorContext: formData.get('calculatorContext') as string || undefined,
      consent: formData.get('consent') === 'on'
    }

    const validatedData = contactSchema.parse(rawData)

    // Save to database
    const repository = getContactRepository()
    await repository.create(validatedData)

    // Revalidate the contact page to show updated data
    revalidatePath('/contact')

    return {
      success: true
    }
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        error: 'Please correct the errors below',
        fieldErrors: error.flatten().fieldErrors as Record<string, string[]>
      }
    }

    console.error('Contact form submission error:', error)
    return {
      error: 'An error occurred while submitting your message. Please try again.'
    }
  }
}
