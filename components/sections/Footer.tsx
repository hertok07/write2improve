import Link from "next/link"
import Image from "next/image"
import { SITE } from "@/lib/content"

export function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-12">

        {/* Logo centrado grande */}
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

        {/* Nav links */}
        <nav className="flex flex-wrap justify-center gap-6 text-sm text-neutral-500 mb-6">
          <Link href="/academias" className="hover:text-neutral-950 transition-colors">
            Academias
          </Link>
          <Link href="/alumnos" className="hover:text-neutral-950 transition-colors">
            Alumnos
          </Link>
          <Link href="/precios" className="hover:text-neutral-950 transition-colors">
            Precios
          </Link>
          <Link href="/contacto" className="hover:text-neutral-950 transition-colors">
            Contacto
          </Link>
        </nav>

        {/* Copyright + disclaimer */}
        <div className="border-t border-neutral-100 pt-6 flex flex-col items-center gap-2 text-center">
          <p className="text-sm text-neutral-400">
            © {new Date().getFullYear()} {SITE.name}
          </p>
          <p className="text-xs text-neutral-400 max-w-md">
            {SITE.disclaimer}
          </p>
        </div>
      </div>
    </footer>
  )
}
