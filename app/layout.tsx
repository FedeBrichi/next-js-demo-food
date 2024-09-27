import type { Metadata } from 'next'
import './globals.css'
import { MainHeader } from '@/src/components/MainHeader'

export const metadata: Metadata = {
  title: 'Daje The Food',
  description: 'Various dishes collection',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <MainHeader />
        {children}
      </body>
    </html>
  )
}
