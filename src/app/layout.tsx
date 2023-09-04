import './globals.css'
import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'

const outfit = Outfit({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: 'NFT Preview Card Component - Frontend Mentor Challenge',
  description: 'This is a NFT Preview Card Component Challenge - Frontend Mentor',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={outfit.className}>{children}</body>
    </html>
  )
}
