import Link from 'next/link'
import { Sun, Mail, Phone, MapPin } from 'lucide-react'

const navigation = {
  solutions: [
    { name: 'Commercial Solar', href: '/products-and-services' },
    { name: 'Battery Storage', href: '/products-and-services' },
    { name: 'EV Charging', href: '/products-and-services' },
    { name: 'Microgrids', href: '/products-and-services' },
  ],
  industries: [
    { name: 'Warehouses', href: '/industries' },
    { name: 'Retail', href: '/industries' },
    { name: 'Manufacturing', href: '/industries' },
    { name: 'Education', href: '/industries' },
    { name: 'Municipalities', href: '/industries' },
  ],
  company: [
    { name: 'About Us', href: '/about-us' },
    { name: 'Project Portfolio', href: '/project-portfolio' },
    { name: 'Why Solar Now', href: '/landmark' },
    { name: 'Contact', href: '/contact' },
  ],
  resources: [
    { name: 'Savings Calculator', href: '/savings-calculator' },
    { name: 'Incentives & Financing', href: '/incentives-and-financing' },
    { name: 'Resources', href: '/resources' },
    { name: 'FAQ', href: '/resources' },
  ],
}

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-full bg-solar-600 flex items-center justify-center">
                <Sun className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold text-foreground">Vibe Solar</span>
            </div>
            <p className="text-sm leading-6 text-muted-foreground">
              Leading commercial solar solutions for sustainable energy independence. 
              We help businesses reduce costs, increase resilience, and achieve their 
              sustainability goals.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" aria-hidden="true" />
                <a href="mailto:info@vibesolar.com" className="hover:text-foreground transition-colors">
                  info@vibesolar.com
                </a>
              </div>
              <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" aria-hidden="true" />
                <a href="tel:+1-555-0123" className="hover:text-foreground transition-colors">
                  (555) 123-4567
                </a>
              </div>
              <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" aria-hidden="true" />
                <span>123 Solar Street, Green City, GC 12345</span>
              </div>
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-foreground">
                  Solutions
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.solutions.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-foreground">
                  Industries
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.industries.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-foreground">
                  Company
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-foreground">
                  Resources
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.resources.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-border pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-muted-foreground">
            &copy; 2024 Vibe Solar Company. All rights reserved. | 
            <Link href="/privacy" className="hover:text-foreground transition-colors ml-1">
              Privacy Policy
            </Link>
            {' | '}
            <Link href="/terms" className="hover:text-foreground transition-colors">
              Terms of Service
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
