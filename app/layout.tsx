import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from "./providers"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Parth Chilwerwar',
  description: 'Personal portfolio of Parth Chilwerwar, a design engineer specializing in accessible, pixel-perfect interfaces.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}