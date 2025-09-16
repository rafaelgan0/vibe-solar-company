"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { Button } from '@/components/design-system/button'
import { useTheme } from 'next-themes'
import { cn } from '@/lib/utils'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Why Solar Now', href: '/landmark' },
  { name: 'Industries', href: '/industries' },
  { name: 'Products & Services', href: '/products-and-services' },
  { name: 'Project Portfolio', href: '/project-portfolio' },
  { name: 'Incentives & Financing', href: '/incentives-and-financing' },
  { name: 'Resources', href: '/resources' },
  { name: 'About Us', href: '/about-us' },
  { name: 'Contact', href: '/contact' },
]

export function Header() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  return (
    <header className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Vibe Solar Company</span>
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-full bg-solar-600 flex items-center justify-center">
                <Sun className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold text-foreground">Vibe Solar</span>
            </div>
          </Link>
        </div>
        
        <div className="flex lg:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(true)}
            aria-expanded="false"
            aria-label="Open main menu"
          >
            <Menu className="h-6 w-6" aria-hidden="true" />
          </Button>
        </div>
        
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "text-sm font-semibold leading-6 transition-colors hover:text-primary",
                pathname === item.href
                  ? "text-primary"
                  : "text-foreground"
              )}
              aria-current={pathname === item.href ? "page" : undefined}
            >
              {item.name}
            </Link>
          ))}
        </div>
        
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
          >
            {theme === 'dark' ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button>
          <Button asChild variant="solar">
            <Link href="/savings-calculator">Savings Calculator</Link>
          </Button>
        </div>
      </nav>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden" role="dialog" aria-modal="true">
          <div className="fixed inset-0 z-50" />
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-background px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5" onClick={() => setMobileMenuOpen(false)}>
                <span className="sr-only">Vibe Solar Company</span>
                <div className="flex items-center space-x-2">
                  <div className="h-8 w-8 rounded-full bg-solar-600 flex items-center justify-center">
                    <Sun className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-xl font-bold text-foreground">Vibe Solar</span>
                </div>
              </Link>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <X className="h-6 w-6" aria-hidden="true" />
              </Button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={cn(
                        "-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 transition-colors hover:bg-accent",
                        pathname === item.href
                          ? "text-primary bg-accent"
                          : "text-foreground"
                      )}
                      onClick={() => setMobileMenuOpen(false)}
                      aria-current={pathname === item.href ? "page" : undefined}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="py-6 space-y-4">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                    className="w-full justify-start"
                  >
                    {theme === 'dark' ? (
                      <>
                        <Sun className="h-4 w-4 mr-2" />
                        Light theme
                      </>
                    ) : (
                      <>
                        <Moon className="h-4 w-4 mr-2" />
                        Dark theme
                      </>
                    )}
                  </Button>
                  <Button asChild variant="solar" className="w-full">
                    <Link href="/savings-calculator" onClick={() => setMobileMenuOpen(false)}>
                      Savings Calculator
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
