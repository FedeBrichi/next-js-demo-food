import type { Metadata } from 'next'
import { Quicksand } from 'next/font/google'
import './globals.css'
import { MainHeader } from '@/src/components/MainHeader'

const font = Quicksand({
  weight: ['400', '500', '600', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Da Fuddo',
  description: 'Various dishes collection',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <MainHeader />
        {children}
      </body>
    </html>
  )
}
