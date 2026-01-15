import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "yaudahgas.dev — nyari apa lu? | Rizky Bagas",
  description:
    "Personal playground dan portfolio santai milik Rizky Bagas. Isinya project yang kebetulan jadi: monitoring, ticket tracker, dan eksperimen iseng.",
  openGraph: {
    title: "yaudahgas.dev — Rizky Bagas",
    description: "personal dev playground. kadang serius, sering iseng.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "yaudahgas.dev — Rizky Bagas",
    description: "tempat eksperimen dan project yang kebetulan jadi",
  },
  icons: {
    icon: [
      {
        url: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/favicon.ico",
      },
    ],
    apple: "/apple-touch-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
