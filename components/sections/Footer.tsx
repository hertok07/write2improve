"use client"

import Link from "next/link"
import Image from "next/image"
import { useLang } from "@/lib/i18n"

const HREFS = ["/academias", "/alumnos", "/precios", "/contacto"]

export function Footer() {
  const { t } = useLang()

  return (
    <footer className="border-t border-neutral-200 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col items-center mb-8">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Write2Improve"
              width={120}
              height={120}
              className="h-28 w-auto opacity-90 hover:opacity-100 transition-opacity"
            />
          </Link>
        </div>

        <nav className="flex flex-wrap justify-center gap-6 text-sm text-neutral-500 mb-6">
          {t.footer.links.map((label, i) => (
            <Link key={label} href={HREFS[i]} className="hover:text-neutral-950 transition-colors">
              {label}
            </Link>
          ))}
        </nav>

        <div className="border-t border-neutral-100 pt-6 flex flex-col items-center gap-2 text-center">
          <p className="text-sm text-neutral-400">
            © {new Date().getFullYear()} {t.site.name}
          </p>
          <p className="text-xs text-neutral-400 max-w-md">{t.site.disclaimer}</p>
        </div>
      </div>
    </footer>
  )
}
