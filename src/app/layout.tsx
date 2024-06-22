import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'
import './globals.css'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Nora Social Media App',
  description: 'Social media app built with Next.js',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={inter.className}>
        <div className="w-full px-4 bg-white md:px-8 lg:px-16 xl:px-32 2xl:px-64">
          <Navbar />
        </div>
        <div className="bg-slate-100 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
          {children}
        </div>
      </body>
    </html>
    </ClerkProvider>
  )
}
//19:00