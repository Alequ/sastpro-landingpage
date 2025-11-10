import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import CookieConsent from '@/components/shared/cookie-consent'

import './globals.css'

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: '--font-montserrat',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'SASTPRO ALPHA',
  description: 'SME',}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} font-sans antialiased`}>
        {children}
        <CookieConsent />
      </body>
    </html>
  )
}
