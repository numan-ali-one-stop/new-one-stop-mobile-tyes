export const HERO_MAP_IMAGE = '/images/greater-manchester-mobile-tyre-service-area-map.webp'
export const HERO_MAP_ALT = 'Map of our mobile tyre service area across Greater Manchester and the North West'
/** The map is the LCP element on phones, where it sits under an 85% navy tint, so phones get a
 *  40 KB copy instead of the 180 KB desktop one. The small mobile `sizes` value makes every phone,
 *  whatever its pixel density, pick the 480w file; React preloads the same choice from srcSet. */
export const HERO_MAP_SRCSET =
  '/images/greater-manchester-mobile-tyre-service-area-map-mobile.webp 480w, /images/greater-manchester-mobile-tyre-service-area-map.webp 1086w'
export const HERO_MAP_SIZES = '(min-width: 1024px) 1086px, 120px'

/** Shared hero background: service-area map with a navy tint on mobile and a left-to-right gradient on desktop.
 *  Place inside a `relative overflow-hidden` hero section, before the content (which needs `relative z-10`). */
export default function HeroMapBackground({ priority = true }: { priority?: boolean }) {
  return (
    <div className="absolute inset-0 bg-[#0f172a] overflow-hidden">
      {/* Desktop: blurred copy fills the background so the main image isn't zoomed.
          Lazy so phones (where it's display:none) never download it. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className="hidden lg:block absolute inset-0 w-full h-full object-cover blur-xl scale-110"
        src={HERO_MAP_IMAGE}
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className="absolute inset-0 w-full h-full object-cover object-[60%_60%] lg:left-auto lg:right-0 lg:top-0 lg:h-full lg:w-auto lg:aspect-[4/3] lg:[mask-image:linear-gradient(to_right,transparent,black_25%)]"
        src={HERO_MAP_IMAGE}
        srcSet={HERO_MAP_SRCSET}
        sizes={HERO_MAP_SIZES}
        alt={HERO_MAP_ALT}
        width={1086}
        height={1448}
        decoding="async"
        {...(priority ? { fetchPriority: 'high' as const } : { loading: 'lazy' as const })}
      />
      {/* Mobile: strong navy tint so the map stays subtle */}
      <div className="absolute inset-0 bg-[#002D62]/85 lg:hidden" />
      {/* Desktop gradient: strong left for text, fades right */}
      <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-[#0f172a] via-[#0f172a]/85 to-[#0f172a]/35" />
      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0f172a]/70 to-transparent" />
    </div>
  )
}
