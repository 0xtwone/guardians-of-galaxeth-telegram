import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Guardians of GalaxETH',
  description: 'A Web3 Game',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
} 