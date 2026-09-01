import { findBorough, nearbyAreas } from '@/lib/locations'

interface NearbyAreasProps {
  /** The current page's location slug, e.g. "bury" or "prestwich" (no "mobile-tyre-fitting-" prefix). */
  currentSlug: string
}

export default function NearbyAreas({ currentSlug }: NearbyAreasProps) {
  const borough = findBorough(currentSlug)
  const others = nearbyAreas(currentSlug)

  if (!borough || others.length === 0) return null

  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 bg-white border-t border-slate-100">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <span className="text-[#b70011] font-bold uppercase tracking-widest text-sm mb-2 block">
            Also Covering
          </span>
          <h2
            className="text-2xl sm:text-[32px] font-bold text-[#0f172a]"
            style={{ fontFamily: 'var(--font-work-sans)', letterSpacing: '-0.01em' }}
          >
            Nearby Areas in {borough.name}
          </h2>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          {others.map((area) => (
            <a
              key={area.slug}
              href={`/mobile-tyre-fitting-${area.slug}`}
              className="inline-flex items-center gap-1.5 bg-slate-50 hover:bg-[#b70011] hover:text-white text-[#0f172a] font-semibold text-sm px-4 py-2.5 rounded-full border border-slate-200 hover:border-[#b70011] transition-colors"
            >
              Mobile Tyre Fitting {area.name}
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </a>
          ))}
        </div>
        <div className="text-center mt-6">
          <a href="/service-area" className="text-[#b70011] font-bold text-sm hover:underline">
            View full Greater Manchester coverage map
          </a>
        </div>
      </div>
    </section>
  )
}
