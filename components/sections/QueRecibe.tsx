"use client"

import { SectionWrapper } from "@/components/ui/SectionWrapper"
import { Card } from "@/components/ui/Card"
import { useLang } from "@/lib/i18n"

const ICONS = [
  <svg key="1" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 11l3 3L22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
  </svg>,
  <svg key="2" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
  </svg>,
  <svg key="3" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /><line x1="11" y1="8" x2="11" y2="11" /><line x1="11" y1="14" x2="11.01" y2="14" />
  </svg>,
  <svg key="4" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" />
  </svg>,
  <svg key="5" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
  </svg>,
  <svg key="6" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="15" y2="12" /><line x1="3" y1="18" x2="18" y2="18" />
  </svg>,
]

export function QueRecibe() {
  const { t } = useLang()

  return (
    <SectionWrapper id="que-recibe" className="bg-neutral-50">
      <div className="text-center mb-14">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-brand-600">
          {t.queRecibe.label}
        </p>
        <h2 className="text-3xl font-bold tracking-tight text-neutral-950 sm:text-4xl">
          {t.queRecibe.title}
        </h2>
        <p className="mt-4 text-lg text-neutral-500 max-w-xl mx-auto">
          {t.queRecibe.sub}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {t.queRecibe.items.map((item, i) => (
          <Card key={item.title} accent>
            <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
              {ICONS[i]}
            </div>
            <h3 className="text-base font-semibold text-neutral-950 mb-2">{item.title}</h3>
            <p className="text-sm leading-relaxed text-neutral-500">{item.description}</p>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  )
}
