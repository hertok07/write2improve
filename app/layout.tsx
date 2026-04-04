import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navbar } from "@/components/sections/Navbar"
import { Footer } from "@/components/sections/Footer"
import { LanguageProvider } from "@/lib/i18n"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Write2Improve — Practica y mejora tu writing",
  description:
    "Write2Improve es un bot de práctica y corrección de writing para academias de inglés. Feedback estructurado con criterios reales para niveles B1, B2 y C1.",
  openGraph: {
    title: "Write2Improve — Practica y mejora tu writing",
    description:
      "Bot de práctica y corrección de writing para academias de inglés. Niveles B1, B2 y C1.",
    url: "https://write2improve.com",
    siteName: "Write2Improve",
    locale: "es_ES",
    type: "website",
  },
  metadataBase: new URL("https://write2improve.com"),
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <LanguageProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  )
}
