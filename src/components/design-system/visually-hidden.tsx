import React from 'react'
import { cn } from '@/lib/utils'

interface VisuallyHiddenProps {
  children: React.ReactNode
  className?: string
}

export function VisuallyHidden({ children, className }: VisuallyHiddenProps) {
  return (
    <span
      className={cn(
        'absolute w-px h-px p-0 -m-px overflow-hidden whitespace-nowrap border-0',
        'clip-path-inset-50',
        className
      )}
      style={{ clipPath: 'inset(50%)' }}
    >
      {children}
    </span>
  )
}

export function ScreenReaderOnly({ children, className }: VisuallyHiddenProps) {
  return <VisuallyHidden className={className}>{children}</VisuallyHidden>
}
