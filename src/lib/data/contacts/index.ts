import { PrismaClient } from '@prisma/client'
import { PrismaContactRepository } from './PrismaContactRepository'
import { MemoryContactRepository } from './MemoryContactRepository'
import type { ContactRepository } from './ContactRepository'

let prisma: PrismaClient | null = null
let contactRepository: ContactRepository | null = null

export function getContactRepository(): ContactRepository {
  if (contactRepository) {
    return contactRepository
  }

  // Use Prisma in production, Memory in development/test
  if (process.env.NODE_ENV === 'production' || process.env.DATABASE_URL) {
    if (!prisma) {
      prisma = new PrismaClient()
    }
    contactRepository = new PrismaContactRepository(prisma)
  } else {
    contactRepository = new MemoryContactRepository()
  }

  return contactRepository
}

export { PrismaContactRepository, MemoryContactRepository }
export type { ContactRepository } from './ContactRepository'
export type { ContactSubmission, CreateContactSubmissionData } from './types'
