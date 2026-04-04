type BadgeColor = "blue" | "green" | "purple" | "neutral"

interface BadgeProps {
  label: string
  color?: BadgeColor
  className?: string
}

const colorClasses: Record<BadgeColor, string> = {
  blue: "bg-brand-50 text-brand-600 border border-brand-100",
  green: "bg-emerald-50 text-emerald-700 border border-emerald-100",
  purple: "bg-purple-50 text-purple-700 border border-purple-100",
  neutral: "bg-neutral-100 text-neutral-600 border border-neutral-200",
}

export function Badge({ label, color = "neutral", className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-semibold ${colorClasses[color]} ${className}`}
    >
      {label}
    </span>
  )
}
