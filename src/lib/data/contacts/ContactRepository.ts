import type { ContactSubmission, CreateContactSubmissionData } from './types'

export interface ContactRepository {
  create(data: CreateContactSubmissionData): Promise<ContactSubmission>
  findById(id: string): Promise<ContactSubmission | null>
  findAll(): Promise<ContactSubmission[]>
  findByEmail(email: string): Promise<ContactSubmission[]>
  delete(id: string): Promise<boolean>
}
