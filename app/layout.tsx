import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from './components/Header'
import Footer from '@/app/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'International Proptech Conference & Investment Expo',
  description: 'Join us in Dubai, Feb 2025 for the latest in Proptech and Fractional Ownership',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className}`}>
      <Header />
        <main className="pt-0">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}