import type { Metadata } from 'next'
import { Geist, Geist_Mono, Montserrat } from 'next/font/google'
import CookieConsent from '@/components/shared/cookie-consent'

import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: '--font-montserrat'
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
