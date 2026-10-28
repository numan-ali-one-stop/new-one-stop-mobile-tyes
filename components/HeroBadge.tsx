import type { ReactNode } from 'react'

/** Red hero pill with a pulsing green glow and ping dot (styles in globals.css). Matches the homepage badge. */
export default function HeroBadge({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <span className={`badge-glow inline-flex items-center gap-2 bg-[#b70011] text-white text-[11px] sm:text-sm font-bold uppercase tracking-wider sm:tracking-widest px-3.5 sm:px-4 py-2 rounded-full mb-4 sm:mb-5 ring-1 ring-[#25D366]/60 [text-shadow:none] ${className}`}>
      <span className="relative flex w-2 h-2 shrink-0">
        <span className="badge-dot-ping absolute inset-0 rounded-full bg-[#25D366]" />
        <span className="relative w-2 h-2 rounded-full bg-[#25D366]" />
      </span>
      {children}
    </span>
  )
}
