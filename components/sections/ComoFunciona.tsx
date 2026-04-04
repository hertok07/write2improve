"use client"

import { SectionWrapper } from "@/components/ui/SectionWrapper"
import { useLang } from "@/lib/i18n"

const ICONS = [
  <svg key="1" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>,
  <svg key="2" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
  </svg>,
  <svg key="3" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 16 12 12 8 16" />
    <line x1="12" y1="12" x2="12" y2="21" />
    <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3" />
  </svg>,
  <svg key="4" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>,
]

export function ComoFunciona() {
  const { t } = useLang()

  return (
    <SectionWrapper id="como-funciona">
      <div className="text-center mb-14">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-brand-600">
          {t.comoFunciona.label}
        </p>
        <h2 className="text-3xl font-bold tracking-tight text-neutral-950 sm:text-4xl">
          {t.comoFunciona.title}
        </h2>
        <p className="mt-4 text-lg text-neutral-500 max-w-xl mx-auto">
          {t.comoFunciona.sub}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {t.comoFunciona.steps.map((step, i) => (
          <div key={step.number} className="relative">
            {i < t.comoFunciona.steps.length - 1 && (
              <div className="hidden lg:block absolute top-8 left-[calc(100%+0.75rem)] w-6 h-px bg-neutral-200" aria-hidden="true" />
            )}
            <div className="rounded-xl border border-neutral-200 bg-white p-6 h-full">
              <p className="text-4xl font-bold text-neutral-100 leading-none mb-4">{step.number}</p>
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                {ICONS[i]}
              </div>
              <h3 className="text-base font-semibold text-neutral-950 mb-2">{step.title}</h3>
              <p className="text-sm leading-relaxed text-neutral-500">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}
