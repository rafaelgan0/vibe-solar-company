import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { SkipLink } from '@/components/skip-link'
import { Header } from '@/components/navigation/header'
import { Footer } from '@/components/navigation/footer'
import { TooltipProvider } from '@/components/design-system/tooltip'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Vibe Solar Company - Commercial Solar Solutions',
    template: '%s | Vibe Solar Company'
  },
  description: 'Leading commercial solar solutions for sustainable energy independence. Reduce costs, increase resilience, and achieve your sustainability goals.',
  keywords: ['commercial solar', 'solar energy', 'battery storage', 'renewable energy', 'sustainability', 'solar installation'],
  authors: [{ name: 'Vibe Solar Company' }],
  creator: 'Vibe Solar Company',
  publisher: 'Vibe Solar Company',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://vibesolar.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://vibesolar.com',
    title: 'Vibe Solar Company - Commercial Solar Solutions',
    description: 'Leading commercial solar solutions for sustainable energy independence.',
    siteName: 'Vibe Solar Company',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vibe Solar Company - Commercial Solar Solutions',
    description: 'Leading commercial solar solutions for sustainable energy independence.',
    creator: '@vibesolar',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#16a34a" />
        <meta name="color-scheme" content="light dark" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <TooltipProvider>
            <SkipLink />
            <div className="relative flex min-h-screen flex-col">
              <Header />
              <main id="main-content" className="flex-1">
                {children}
              </main>
              <Footer />
            </div>
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}