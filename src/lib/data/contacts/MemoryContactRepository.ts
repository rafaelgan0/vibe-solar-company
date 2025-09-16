import type { ContactRepository } from './ContactRepository'
import type { ContactSubmission, CreateContactSubmissionData } from './types'

export class MemoryContactRepository implements ContactRepository {
  private submissions: ContactSubmission[] = []
  private nextId = 1

  async create(data: CreateContactSubmissionData): Promise<ContactSubmission> {
    const submission: ContactSubmission = {
      id: `mem_${this.nextId++}`,
      fullName: data.fullName,
      email: data.email,
      phone: data.phone,
      company: data.company,
      topic: data.topic,
      message: data.message,
      calculatorContext: data.calculatorContext,
      consent: data.consent,
      createdAt: new Date(),
    }

    this.submissions.push(submission)
    return submission
  }

  async findById(id: string): Promise<ContactSubmission | null> {
    return this.submissions.find(s => s.id === id) || null
  }

  async findAll(): Promise<ContactSubmission[]> {
    return [...this.submissions].sort((a, b) => 
      b.createdAt.getTime() - a.createdAt.getTime()
    )
  }

  async findByEmail(email: string): Promise<ContactSubmission[]> {
    return this.submissions
      .filter(s => s.email === email)
      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
  }

  async delete(id: string): Promise<boolean> {
    const index = this.submissions.findIndex(s => s.id === id)
    if (index === -1) return false
    
    this.submissions.splice(index, 1)
    return true
  }
}
