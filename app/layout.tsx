import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Ashton Hall Coins",
  description: "Ashton Hall",
  generator: "Ashton Hall Coins",
  icons: {
    icon: '/images/ashton.jpeg',
    apple: '/images/ashton.jpeg',
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}



import './globals.css'
