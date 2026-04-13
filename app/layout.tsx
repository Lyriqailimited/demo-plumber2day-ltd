import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Plumber2day Ltd',
  description: 'Fast, reliable plumbing and boiler services in Leeds — available 24/7',
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
