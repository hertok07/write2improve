import { type ReactNode } from "react"

interface SectionWrapperProps {
  id?: string
  children: ReactNode
  className?: string
}

export function SectionWrapper({ id, children, className = "" }: SectionWrapperProps) {
  return (
    <section id={id} className={`py-20 ${className}`}>
      <div className="mx-auto max-w-6xl px-6">{children}</div>
    </section>
  )
}
