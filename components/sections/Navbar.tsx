"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { useLang } from "@/lib/i18n"
import { Button } from "@/components/ui/Button"

export function Navbar() {
  const { lang, setLang, t } = useLang()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled ? "bg-white/90 backdrop-blur-sm border-b border-neutral-100 shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Write2Improve"
              width={64}
              height={64}
              className="h-14 w-auto"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {t.nav.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-neutral-600 hover:text-neutral-950 transition-colors duration-150"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right: lang switcher + CTA */}
          <div className="hidden md:flex items-center gap-4">
            {/* Language switcher */}
            <div className="flex items-center rounded-lg border border-neutral-200 overflow-hidden text-sm font-medium">
              <button
                onClick={() => setLang("es")}
                className={`px-3 py-1.5 transition-colors ${
                  lang === "es"
                    ? "bg-brand-600 text-white"
                    : "text-neutral-500 hover:text-neutral-950 hover:bg-neutral-50"
                }`}
              >
                ES
              </button>
              <button
                onClick={() => setLang("en")}
                className={`px-3 py-1.5 transition-colors ${
                  lang === "en"
                    ? "bg-brand-600 text-white"
                    : "text-neutral-500 hover:text-neutral-950 hover:bg-neutral-50"
                }`}
              >
                EN
              </button>
            </div>
            <Button variant="primary" size="sm" href="#contacto">
              {t.site.ctaPrimary}
            </Button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-neutral-600 hover:text-neutral-950"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Abrir menú"
          >
            {mobileOpen ? (
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M4 4L16 16M16 4L4 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-neutral-100 px-6 py-4 flex flex-col gap-4">
          {t.nav.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-base text-neutral-600 hover:text-neutral-950"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          {/* Language switcher mobile */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setLang("es")}
              className={`px-4 py-1.5 rounded-lg text-sm font-medium border transition-colors ${
                lang === "es"
                  ? "bg-brand-600 text-white border-brand-600"
                  : "text-neutral-500 border-neutral-200 hover:border-neutral-400"
              }`}
            >
              ES
            </button>
            <button
              onClick={() => setLang("en")}
              className={`px-4 py-1.5 rounded-lg text-sm font-medium border transition-colors ${
                lang === "en"
                  ? "bg-brand-600 text-white border-brand-600"
                  : "text-neutral-500 border-neutral-200 hover:border-neutral-400"
              }`}
            >
              EN
            </button>
          </div>
          <Button variant="primary" size="sm" href="#contacto">
            {t.site.ctaPrimary}
          </Button>
        </div>
      )}
    </header>
  )
}
