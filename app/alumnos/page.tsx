import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Para alumnos — Write2Improve",
  description: "Información para alumnos sobre Write2Improve.",
}

export default function AlumnosPage() {
  return (
    <div className="flex min-h-screen items-center justify-center pt-16">
      <div className="text-center px-6">
        <p className="text-sm font-semibold uppercase tracking-widest text-brand-600 mb-4">
          Próximamente
        </p>
        <h1 className="text-3xl font-bold text-neutral-950 mb-4">
          Área de alumnos
        </h1>
        <p className="text-lg text-neutral-500 mb-8 max-w-md mx-auto">
          Estamos preparando esta sección. Consulta con tu academia para acceder al sistema.
        </p>
        <Link
          href="/"
          className="text-brand-600 font-medium hover:underline"
        >
          ← Volver a la página principal
        </Link>
      </div>
    </div>
  )
}
