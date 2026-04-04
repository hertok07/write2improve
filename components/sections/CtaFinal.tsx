import { Button } from "@/components/ui/Button"
import { SITE } from "@/lib/content"

export function CtaFinal() {
  return (
    <section id="contacto" className="bg-brand-600 py-20">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
          ¿Quieres ofrecer esto en tu academia?
        </h2>
        <p className="mt-6 text-xl text-blue-100 max-w-2xl mx-auto">
          Cuéntanos qué necesitas. Te explicamos cómo encaja Write2Improve en
          tu academia y cómo empezar.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button variant="white" size="lg" href={`mailto:${SITE.contact}`}>
            Solicitar demo
          </Button>
          <Button
            variant="ghost"
            size="lg"
            href={`mailto:${SITE.contact}`}
            className="text-white border-white/30 hover:bg-white/10 hover:border-white/50"
          >
            {SITE.contact}
          </Button>
        </div>

        <p className="mt-8 text-sm text-blue-200">
          Sin compromiso. Respondemos en menos de 24 horas.
        </p>
      </div>
    </section>
  )
}
