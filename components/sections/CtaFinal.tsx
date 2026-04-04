"use client"

import { Button } from "@/components/ui/Button"
import { useLang } from "@/lib/i18n"

export function CtaFinal() {
  const { t } = useLang()

  return (
    <section id="contacto" className="bg-brand-600 py-20">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
          {t.ctaFinal.title}
        </h2>
        <p className="mt-6 text-xl text-blue-100 max-w-2xl mx-auto">
          {t.ctaFinal.sub}
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button variant="white" size="lg" href={`mailto:${t.site.contact}`}>
            {t.ctaFinal.cta}
          </Button>
          <Button
            variant="ghost"
            size="lg"
            href={`mailto:${t.site.contact}`}
            className="text-white border-white/30 hover:bg-white/10 hover:border-white/50"
          >
            {t.site.contact}
          </Button>
        </div>
        <p className="mt-8 text-sm text-blue-200">{t.ctaFinal.note}</p>
      </div>
    </section>
  )
}
