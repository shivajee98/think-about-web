import type React from "react"
import type { Metadata } from "next"
import CursorSpotlight from "@/components/cursor-spotlight"
import WhatsAppButton from "@/components/whatsapp-button"
import "./globals.css"

export const metadata: Metadata = {
  title: "Think About - Educational Technology Platform",
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
      <body className="relative">
        <CursorSpotlight />
        <div className="relative z-10">{children}</div>
        <WhatsAppButton />
      </body>
    </html>
  )
}
