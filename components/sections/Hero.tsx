import Image from "next/image"
import { Button } from "@/components/ui/Button"
import { SITE } from "@/lib/content"

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center bg-white pt-16">
      {/* Subtle background accent */}
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full bg-brand-50 opacity-60 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-[400px] w-[400px] rounded-full bg-brand-50 opacity-40 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 py-20 w-full">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-16">

          {/* Left: text */}
          <div className="flex-1">
            {/* Eyebrow */}
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-100 bg-brand-50 px-4 py-1.5 text-sm font-medium text-brand-600">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-600" />
              Preparación para exámenes de inglés B1 · B2 · C1
            </p>

            {/* Headline */}
            <h1 className="text-5xl font-bold tracking-tight text-neutral-950 sm:text-6xl lg:text-7xl">
              {SITE.tagline.split("\n").map((line, i) => (
                <span key={i} className={i === 1 ? "text-brand-600" : undefined}>
                  {line}
                  {i === 0 && <br />}
                </span>
              ))}
            </h1>

            {/* Subheadline */}
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-neutral-600 sm:text-xl">
              {SITE.description}
            </p>

            {/* CTAs */}
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Button variant="primary" size="lg" href="#contacto">
                Solicitar demo
              </Button>
              <Button variant="ghost" size="lg" href="#como-funciona">
                Ver cómo funciona →
              </Button>
            </div>
          </div>

          {/* Right: logo */}
          <div className="mt-14 flex justify-center lg:mt-0 lg:flex-shrink-0">
            <div className="relative">
              {/* Glow ring */}
              <div className="absolute inset-0 rounded-full bg-brand-100 blur-2xl opacity-60 scale-110" aria-hidden="true" />
              <Image
                src="/logo.png"
                alt="Write2Improve — Writing made simple"
                width={340}
                height={340}
                className="relative h-[260px] w-[260px] sm:h-[300px] sm:w-[300px] lg:h-[340px] lg:w-[340px] drop-shadow-xl"
                priority
              />
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div className="mt-20 flex flex-wrap gap-x-12 gap-y-6 border-t border-neutral-100 pt-12">
          {[
            { value: "3 niveles", label: "B1, B2 y C1" },
            { value: "11 tipos", label: "de writing para exámenes" },
            { value: "4 criterios", label: "de evaluación oficial" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-2xl font-bold text-neutral-950">{stat.value}</p>
              <p className="mt-1 text-sm text-neutral-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
