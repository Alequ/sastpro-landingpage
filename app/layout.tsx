import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import CookieConsent from '@/components/shared/cookie-consent'
import GoogleAnalytics from '@/components/GoogleAnalytics'

import './globals.css'

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ['400', '600', '700'],
  variable: '--font-montserrat',
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  title: 'SASTPRO ALPHA',
  description: 'SME',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} font-sans antialiased`}>
        {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
          <GoogleAnalytics GA_MEASUREMENT_ID={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />
        )}
        {children}
        <CookieConsent />
      </body>
    </html>
  )
}