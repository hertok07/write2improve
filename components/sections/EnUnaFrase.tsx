import Image from "next/image"
import { SectionWrapper } from "@/components/ui/SectionWrapper"

export function EnUnaFrase() {
  return (
    <SectionWrapper className="bg-neutral-50 relative overflow-hidden">
      {/* Logo como marca de agua */}
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
          La idea clave
        </p>
        <blockquote className="text-2xl font-light italic leading-relaxed text-neutral-700 sm:text-3xl">
          "No es solo un corrector. Es un sistema completo de interacción con el
          writing: desde que el alumno pide una tarea hasta que recibe una
          valoración detallada y accionable."
        </blockquote>
        <p className="mt-6 text-base text-neutral-500">
          Pedir una tarea, recibirla lista para responder, enviar la redacción y
          obtener feedback estructurado — todo en un mismo recorrido natural.
        </p>
      </div>
    </SectionWrapper>
  )
}
