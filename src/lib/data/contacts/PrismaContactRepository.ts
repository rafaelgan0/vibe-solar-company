import { PrismaClient } from '@prisma/client'
import type { ContactRepository } from './ContactRepository'
import type { ContactSubmission, CreateContactSubmissionData, Topic } from './types'

export class PrismaContactRepository implements ContactRepository {
  constructor(private prisma: PrismaClient) {}

  async create(data: CreateContactSubmissionData): Promise<ContactSubmission> {
    const submission = await this.prisma.contactSubmission.create({
      data: {
        fullName: data.fullName,
        email: data.email,
        phone: data.phone,
        company: data.company,
        topic: data.topic,
        message: data.message,
        calculatorContext: data.calculatorContext,
        consent: data.consent,
      },
    })

    return {
      id: submission.id,
      fullName: submission.fullName,
      email: submission.email,
      phone: submission.phone ?? undefined,
      company: submission.company ?? undefined,
      topic: submission.topic as Topic,
      message: submission.message,
      calculatorContext: submission.calculatorContext ?? undefined,
      consent: submission.consent,
      createdAt: submission.createdAt,
    }
  }

  async findById(id: string): Promise<ContactSubmission | null> {
    const submission = await this.prisma.contactSubmission.findUnique({
      where: { id },
    })

    if (!submission) return null

    return {
      id: submission.id,
      fullName: submission.fullName,
      email: submission.email,
      phone: submission.phone ?? undefined,
      company: submission.company ?? undefined,
      topic: submission.topic as Topic,
      message: submission.message,
      calculatorContext: submission.calculatorContext ?? undefined,
      consent: submission.consent,
      createdAt: submission.createdAt,
    }
  }

  async findAll(): Promise<ContactSubmission[]> {
    const submissions = await this.prisma.contactSubmission.findMany({
      orderBy: { createdAt: 'desc' },
    })

    return submissions.map(submission => ({
      id: submission.id,
      fullName: submission.fullName,
      email: submission.email,
      phone: submission.phone ?? undefined,
      company: submission.company ?? undefined,
      topic: submission.topic as Topic,
      message: submission.message,
      calculatorContext: submission.calculatorContext ?? undefined,
      consent: submission.consent,
      createdAt: submission.createdAt,
    }))
  }

  async findByEmail(email: string): Promise<ContactSubmission[]> {
    const submissions = await this.prisma.contactSubmission.findMany({
      where: { email },
      orderBy: { createdAt: 'desc' },
    })

    return submissions.map(submission => ({
      id: submission.id,
      fullName: submission.fullName,
      email: submission.email,
      phone: submission.phone ?? undefined,
      company: submission.company ?? undefined,
      topic: submission.topic as Topic,
      message: submission.message,
      calculatorContext: submission.calculatorContext ?? undefined,
      consent: submission.consent,
      createdAt: submission.createdAt,
    }))
  }

  async delete(id: string): Promise<boolean> {
    try {
      await this.prisma.contactSubmission.delete({
        where: { id },
      })
      return true
    } catch {
      return false
    }
  }
}
