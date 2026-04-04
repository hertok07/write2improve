"use client"

import { SectionWrapper } from "@/components/ui/SectionWrapper"
import { Badge } from "@/components/ui/Badge"
import { useLang } from "@/lib/i18n"

export function Niveles() {
  const { t } = useLang()

  return (
    <SectionWrapper id="niveles">
      <div className="text-center mb-14">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-brand-600">
          {t.niveles.label}
        </p>
        <h2 className="text-3xl font-bold tracking-tight text-neutral-950 sm:text-4xl">
          {t.niveles.title}
        </h2>
        <p className="mt-4 text-lg text-neutral-500 max-w-xl mx-auto">
          {t.niveles.sub}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
        {t.niveles.levels.map((lvl) => (
          <div key={lvl.level} className="rounded-xl border border-neutral-200 bg-white p-8">
            <Badge label={lvl.level} color={lvl.color} className="mb-6" />
            <ul className="space-y-2.5 mb-8">
              {lvl.types.map((type) => (
                <li key={type} className="flex items-center gap-3 text-sm text-neutral-700">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-600 flex-shrink-0" />
                  {type}
                </li>
              ))}
            </ul>
            <div className="border-t border-neutral-100 pt-5">
              <p className="text-xs font-medium text-neutral-400 uppercase tracking-wider mb-1">
                {t.niveles.wordCountLabel}
              </p>
              <p className="text-sm font-semibold text-neutral-950">{lvl.wordCount}</p>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}
