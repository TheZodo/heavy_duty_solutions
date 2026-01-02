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
    'Manufacturing, fabrication, steel structures laser cutting, e.t.c',
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
      'Manufacturing, fabrication, steel structures laser cutting, e.t.c',
    url: 'https://heavydutysolutions.co.zm', // Update with your actual domain
    siteName: 'Heavy Duty Solutions',
    images: [
      {
        url: '/HDS_logo.png', // This is the image that appears when shared
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
      "Innovative power production solutions addressing Zambia's energy crisis",
    images: ['/HDS_logo.png'], // Twitter also uses this image
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
