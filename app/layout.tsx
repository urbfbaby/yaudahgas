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
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
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
