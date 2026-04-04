import { SectionWrapper } from "@/components/ui/SectionWrapper"
import { Button } from "@/components/ui/Button"
import { ACADEMY_FEATURES } from "@/lib/content"

export function ParaAcademias() {
  return (
    <section id="para-academias" className="bg-neutral-950 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
          {/* Left: editorial */}
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-brand-400">
              Para academias
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Una herramienta de apoyo docente y operativo
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-neutral-400">
              Write2Improve no solo sirve para el alumno. La academia tiene el
              control total del servicio: quién accede, qué tareas se ofrecen y
              cómo se gestiona todo sin depender de procesos manuales.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-neutral-400">
              Una experiencia homogénea entre alumnos y niveles, con una base
              sólida para escalar el servicio a otras academias.
            </p>
            <div className="mt-8">
              <Button variant="white" size="md" href="#contacto">
                Solicitar demo para mi academia
              </Button>
            </div>
          </div>

          {/* Right: feature grid */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {ACADEMY_FEATURES.map((feature) => (
              <div
                key={feature.title}
                className="rounded-xl border border-neutral-800 bg-neutral-900 p-6"
              >
                <div className="mb-3 h-2 w-8 rounded-full bg-brand-600" />
                <h3 className="text-base font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-neutral-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
