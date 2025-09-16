"use client"

import { useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/design-system/button'
import { Alert, AlertDescription } from '@/components/design-system/alert'
import { Home, RefreshCw, AlertCircle } from 'lucide-react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Application error:', error)
  }, [error])

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-6">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <AlertCircle className="h-16 w-16 text-destructive mx-auto mb-4" />
          <h1 className="text-2xl font-semibold text-foreground">
            Something went wrong
          </h1>
          <p className="text-muted-foreground mt-2">
            We're sorry, but something unexpected happened. Please try again.
          </p>
        </div>
        
        <Alert className="mb-6">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>
            Error: {error.message || 'An unexpected error occurred'}
          </AlertDescription>
        </Alert>
        
        <div className="space-y-4">
          <Button onClick={reset} className="w-full">
            <RefreshCw className="mr-2 h-4 w-4" />
            Try Again
          </Button>
          
          <Button asChild variant="outline" className="w-full">
            <Link href="/">
              <Home className="mr-2 h-4 w-4" />
              Go Home
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
