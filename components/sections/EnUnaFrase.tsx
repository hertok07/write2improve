"use client"

import Image from "next/image"
import { SectionWrapper } from "@/components/ui/SectionWrapper"
import { useLang } from "@/lib/i18n"

export function EnUnaFrase() {
  const { t } = useLang()

  return (
    <SectionWrapper className="bg-neutral-50 relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center" aria-hidden="true">
        <Image
          src="/logo.png"
          alt=""
          width={400}
          height={400}
          className="h-[360px] w-[360px] opacity-[0.04] select-none"
        />
      </div>

      <div className="relative mx-auto max-w-3xl text-center">
        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-brand-600">
          {t.enUnaFrase.label}
        </p>
        <blockquote className="text-2xl font-light italic leading-relaxed text-neutral-700 sm:text-3xl">
          {t.enUnaFrase.quote}
        </blockquote>
        <p className="mt-6 text-base text-neutral-500">{t.enUnaFrase.sub}</p>
      </div>
    </SectionWrapper>
  )
}
