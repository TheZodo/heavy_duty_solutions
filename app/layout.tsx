import type React from 'react'
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ['latin'] })
const _geistMono = Geist_Mono({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Heavy Duty Solutions',
  description:
    'Heavy Duty Solutions specializes in prefabricated buildings, steel structures, CNC laser cutting, metal works, booths, kiosks, and outdoor furniture. Home of the innovative Hydro Master floating hydro-kinetic turbine.',
  icons: {
    icon: [
      {
        url: '/HDS_logo.png',
        type: 'image/png',
      },
    ],
    apple: '/HDS_logo.png',
  },
  openGraph: {
    title: 'Heavy Duty Solutions',
    description:
      'Prefabricated buildings, steel structures, CNC laser cutting, metal works, and the innovative Hydro Master turbine. Quality manufacturing solutions in Zambia.',
    url: 'https://heavydutysolutions.co.zm',
    siteName: 'Heavy Duty Solutions',
    images: [
      {
        url: '/HDS_logo.png',
        width: 1200,
        height: 630,
        alt: 'Heavy Duty Solutions',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Heavy Duty Solutions',
    description:
      'Quality manufacturing and fabrication solutions in Zambia. Prefabricated buildings, steel structures, CNC cutting, and the Hydro Master turbine.',
    images: ['/HDS_logo.png'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
