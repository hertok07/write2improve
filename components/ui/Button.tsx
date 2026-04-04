import Link from "next/link"
import { type ReactNode } from "react"

type Variant = "primary" | "secondary" | "ghost" | "white"
type Size = "sm" | "md" | "lg"

interface ButtonProps {
  variant?: Variant
  size?: Size
  href?: string
  onClick?: () => void
  children: ReactNode
  className?: string
  type?: "button" | "submit"
}

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-brand-600 text-white hover:bg-brand-700 border border-brand-600 hover:border-brand-700",
  secondary:
    "bg-white text-neutral-950 border border-neutral-200 hover:border-neutral-400 hover:bg-neutral-50",
  ghost:
    "bg-transparent text-brand-600 border border-transparent hover:border-brand-100 hover:bg-brand-50",
  white:
    "bg-white text-brand-600 border border-white hover:bg-brand-50 hover:border-brand-50",
}

const sizeClasses: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
}

export function Button({
  variant = "primary",
  size = "md",
  href,
  onClick,
  children,
  className = "",
  type = "button",
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center rounded-lg font-medium transition-colors duration-150 cursor-pointer ${variantClasses[variant]} ${sizeClasses[size]} ${className}`

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  )
}
