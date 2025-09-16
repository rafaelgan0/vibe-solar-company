import React from 'react'
import { render, screen } from '@testing-library/react'
import { axe, toHaveNoViolations } from 'jest-axe'
import { vi } from 'vitest'
import HomePage from '@/app/page'
import ContactPage from '@/app/contact/page'
import SavingsCalculatorPage from '@/app/savings-calculator/page'

// Extend Vitest matchers
expect.extend(toHaveNoViolations)

// Mock Next.js components and hooks
vi.mock('next/link', () => ({
  default: ({ children, href }: { children: React.ReactNode; href: string }) => (
    <a href={href}>{children}</a>
  )
}))

vi.mock('next/image', () => ({
  default: ({ src, alt, ...props }: { src: string; alt: string; [key: string]: any }) => (
    <img src={src} alt={alt} {...props} />
  )
}))

vi.mock('next/navigation', () => ({
  usePathname: () => '/',
  useSearchParams: () => new URLSearchParams(),
}))

vi.mock('next-themes', () => ({
  useTheme: () => ({
    theme: 'light',
    setTheme: vi.fn(),
  }),
}))

// Mock next-intl
vi.mock('next-intl', () => ({
  useTranslations: () => (key: string) => key,
  useLocale: () => 'en',
}))

describe('Accessibility Tests', () => {
  describe('Home Page', () => {
    it('should not have accessibility violations', async () => {
      const { container } = render(<HomePage />)
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })

    it('should have proper heading structure', () => {
      render(<HomePage />)
      
      // Check for main heading
      expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()
    })

    it('should have accessible content structure', () => {
      render(<HomePage />)
      
      // Check for headings hierarchy
      expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()
      expect(screen.getAllByRole('heading', { level: 2 })).toHaveLength(4)
    })
  })

  describe('Contact Page', () => {
    it('should not have accessibility violations', async () => {
      const { container } = render(<ContactPage />)
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })

    it('should have accessible form elements', () => {
      render(<ContactPage />)
      
      // Check for form fields
      expect(screen.getByLabelText(/full name/i)).toBeInTheDocument()
      expect(screen.getByLabelText(/email address/i)).toBeInTheDocument()
      expect(screen.getByLabelText(/message/i)).toBeInTheDocument()
      
      // Check for submit button
      expect(screen.getByRole('button', { name: /send message/i })).toBeInTheDocument()
    })
  })

  describe('Savings Calculator Page', () => {
    it('should not have accessibility violations', async () => {
      const { container } = render(<SavingsCalculatorPage />)
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })

    it('should have accessible form controls', () => {
      render(<SavingsCalculatorPage />)
      
      // Check for form inputs
      expect(screen.getByLabelText(/average monthly usage/i)).toBeInTheDocument()
      expect(screen.getByLabelText(/utility rate/i)).toBeInTheDocument()
      expect(screen.getByLabelText(/desired solar offset/i)).toBeInTheDocument()
      
      // Check for select elements
      expect(screen.getByRole('combobox')).toBeInTheDocument()
    })
  })
})
