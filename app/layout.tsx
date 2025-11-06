import type { Metadata } from 'next'
import './globals.css'
import { Inter } from 'next/font/google'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Random Learner Academy',
  description: 'Learn new skills with Random Learner Academy. Explore courses, content, and more.',
  metadataBase: new URL('https://agentic-f6a6b95f.vercel.app'),
  openGraph: {
    title: 'Random Learner Academy',
    description: 'Learn new skills with Random Learner Academy. Explore courses, content, and more.',
    url: 'https://agentic-f6a6b95f.vercel.app',
    siteName: 'Random Learner',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Random Learner Academy',
    description: 'Learn new skills with Random Learner Academy.',
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="container-px mx-auto max-w-6xl">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
