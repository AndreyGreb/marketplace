import { authOptions } from './api/auth/[...nextauth]/route'
import { Geist, Geist_Mono } from 'next/font/google'
import { getServerSession } from 'next-auth'
import type { Metadata } from 'next'

import Header from '@/components/Header'

import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Marketplace',
  description: 'Marketplace',
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const session = await getServerSession(authOptions)
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header session={session} />
        {children}
      </body>
    </html>
  )
}
