import type { Metadata } from "next"
import Link from "next/link"
import { SITE } from "@/lib/content"

export const metadata: Metadata = {
  title: "Contacto — Write2Improve",
  description: "Contacta con Write2Improve para solicitar información o una demo.",
}

export default function ContactoPage() {
  return (
    <div className="flex min-h-screen items-center justify-center pt-16">
      <div className="text-center px-6">
        <p className="text-sm font-semibold uppercase tracking-widest text-brand-600 mb-4">
          Contacto
        </p>
        <h1 className="text-3xl font-bold text-neutral-950 mb-4">
          Hablemos
        </h1>
        <p className="text-lg text-neutral-500 mb-8 max-w-md mx-auto">
          Escríbenos y te respondemos en menos de 24 horas.
        </p>
        <a
          href={`mailto:${SITE.contact}`}
          className="inline-flex items-center justify-center rounded-lg bg-brand-600 text-white px-6 py-3 font-medium hover:bg-brand-700 transition-colors"
        >
          {SITE.contact}
        </a>
        <div className="mt-6">
          <Link
            href="/"
            className="text-brand-600 font-medium hover:underline text-sm"
          >
            ← Volver a la página principal
          </Link>
        </div>
      </div>
    </div>
  )
}
