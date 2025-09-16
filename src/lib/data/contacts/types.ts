export type Topic = 'PROPOSAL' | 'O_M' | 'STORAGE' | 'GENERAL'

export interface ContactSubmission {
  id: string
  fullName: string
  email: string
  phone?: string
  company?: string
  topic: Topic
  message: string
  calculatorContext?: string
  consent: boolean
  createdAt: Date
}

export interface CreateContactSubmissionData {
  fullName: string
  email: string
  phone?: string
  company?: string
  topic: Topic
  message: string
  calculatorContext?: string
  consent: boolean
}
