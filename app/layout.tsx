import React from "react"
import type { Metadata } from 'next'
import { Instrument_Serif, Plus_Jakarta_Sans } from 'next/font/google'

import './globals.css'

const serif = Instrument_Serif({
  subsets: ['latin'],
  variable: '--font-serif',
  weight: ['400']
})

const sans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: 'Grub - Digital Menu Platform',
  description: 'Scan, browse, and order from your favorite restaurants with Grub digital menu',
  generator: 'v0.app',
  themeColor: '#692b39',
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
