import { type ReactNode } from "react"

interface CardProps {
  children: ReactNode
  className?: string
  accent?: boolean
}

export function Card({ children, className = "", accent = false }: CardProps) {
  return (
    <div
      className={`rounded-xl border border-neutral-200 bg-white p-6 ${accent ? "border-l-4 border-l-brand-600" : ""} ${className}`}
    >
      {children}
    </div>
  )
}
