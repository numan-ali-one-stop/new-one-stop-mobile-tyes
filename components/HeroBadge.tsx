import type { ReactNode } from 'react'

/** Hero pill with a live green dot (styles in globals.css). Same style as the Ads landing page badge. */
export default function HeroBadge({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <span className={`lp-badge inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full mb-5 sm:mb-6 shadow-md [text-shadow:none] ${className}`}>
      <span className="relative flex w-2.5 h-2.5 shrink-0">
        <span className="badge-dot-ping absolute inset-0 rounded-full bg-[#25D366]" />
        <span className="relative w-2.5 h-2.5 rounded-full bg-[#25D366]" />
      </span>
      {children}
    </span>
  )
}
