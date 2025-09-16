import * as React from "react"
import { ChevronRight, Home } from "lucide-react"
import { cn } from "@/lib/utils"

interface BreadcrumbItem {
  label: string
  href?: string
  current?: boolean
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
  className?: string
}

export function Breadcrumbs({ items, className }: BreadcrumbsProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className={cn("flex items-center space-x-1 text-sm text-muted-foreground", className)}
    >
      <ol className="flex items-center space-x-1">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            {index > 0 && (
              <ChevronRight className="h-4 w-4 mx-1 flex-shrink-0" aria-hidden="true" />
            )}
            {item.href && !item.current ? (
              <a
                href={item.href}
                className="hover:text-foreground transition-colors"
                aria-current={item.current ? "page" : undefined}
              >
                {index === 0 && <Home className="h-4 w-4 mr-1" aria-hidden="true" />}
                {item.label}
              </a>
            ) : (
              <span
                className="flex items-center"
                aria-current={item.current ? "page" : undefined}
              >
                {index === 0 && <Home className="h-4 w-4 mr-1" aria-hidden="true" />}
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
