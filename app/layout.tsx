import type React from "react"
import type { Metadata } from "next"
import CursorSpotlight from "@/components/cursor-spotlight"
import WhatsAppButton from "@/components/whatsapp-button"
import "./globals.css"

export const metadata: Metadata = {
  title: "Think About - Educational Technology Platform",
  icons: "/logo.svg",
  description: "Transform your learning journey with innovative educational technology",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Source+Sans+3:ital,wght@0,200..900;1,200..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="relative font-source-sans">
        <CursorSpotlight />
        <div className="relative z-10">{children}</div>
        <WhatsAppButton />
      </body>
    </html>
  )
}
