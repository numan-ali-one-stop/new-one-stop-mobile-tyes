import { GOOGLE_REVIEWS_URL, RATING } from '@/lib/constants'

export type TrustBadge = { icon: string; iconClass: string; text: string; href?: string }

/** Rating / arrival / coverage pills shown under the hero call buttons on every page.
 *  The rating pill always links to the Google reviews. */
export const DEFAULT_TRUST_BADGES: TrustBadge[] = [
  { icon: 'star', iconClass: 'text-yellow-400', text: `${RATING} Stars Throughout (1,200+ Driver Reviews)`, href: GOOGLE_REVIEWS_URL },
  { icon: 'timer', iconClass: 'text-[#FF4444]', text: '20–30 Minute Rapid Arrival' },
  { icon: 'local_shipping', iconClass: 'text-[#FF4444]', text: '24/7 Mobile Tyre Fitters' },
]

const PILL =
  'inline-flex items-center gap-2 w-fit bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-full px-4 py-2 text-xs sm:text-sm font-semibold'

export default function HeroTrustBadges({
  badges = DEFAULT_TRUST_BADGES,
  align = 'responsive',
  className = '',
}: {
  badges?: TrustBadge[]
  /** 'responsive' = centred on mobile, left-aligned on desktop (site page heroes); 'center' = always centred. */
  align?: 'responsive' | 'center'
  className?: string
}) {
  const justify = align === 'center' ? 'sm:justify-center' : 'sm:justify-center lg:justify-start'
  const items = align === 'center' ? 'items-center' : 'items-center lg:items-start'
  return (
    <ul className={`flex flex-col ${items} sm:flex-row sm:flex-wrap ${justify} gap-2.5 [text-shadow:none] ${className}`}>
      {badges.map((badge) => {
        const content = (
          <>
            <span
              aria-hidden="true"
              data-nosnippet
              className={`material-symbols-outlined text-[16px] shrink-0 ${badge.iconClass}`}
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              {badge.icon}
            </span>
            {badge.text}
          </>
        )
        return (
          <li key={badge.text}>
            {badge.href ? (
              <a href={badge.href} target="_blank" rel="noopener noreferrer" className={`${PILL} hover:bg-white/20 transition-colors`}>
                {content}
              </a>
            ) : (
              <span className={PILL}>{content}</span>
            )}
          </li>
        )
      })}
    </ul>
  )
}
