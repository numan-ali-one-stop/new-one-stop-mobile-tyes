import { LOCAL_AREAS, areaName } from '@/lib/local-areas'

interface LocalAreaInfoProps {
  /** The current page's location slug, e.g. "fallowfield" (no "mobile-tyre-fitting-" prefix). */
  currentSlug: string
}

/** Area-specific postcodes, roads and copy. Neighbouring-area links live in <NearbyAreas />. */
export default function LocalAreaInfo({ currentSlug }: LocalAreaInfoProps) {
  const area = LOCAL_AREAS[currentSlug]
  const name = areaName(currentSlug)
  if (!area || !name) return null

  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 bg-[#f8fafc] border-t border-slate-100">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl mb-8 sm:mb-10">
          <span className="text-[#b70011] font-bold uppercase tracking-widest text-sm mb-2 block">
            Local Knowledge
          </span>
          <h2
            className="text-2xl sm:text-[32px] font-bold text-[#0f172a] mb-4 leading-tight"
            style={{ fontFamily: 'var(--font-work-sans)', letterSpacing: '-0.01em' }}
          >
            Mobile Tyre Fitting Around {name}
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">{area.note}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6">
            <div className="flex items-center gap-2 mb-4">
              <span aria-hidden="true" data-nosnippet className="material-symbols-outlined text-[#b70011]">markunread_mailbox</span>
              <h3 className="font-bold text-[#0f172a]">Postcodes we cover</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {area.pc.map((pc) => (
                <span key={pc} className="bg-slate-100 text-[#0f172a] font-semibold text-sm px-3 py-1.5 rounded-lg">
                  {pc}
                </span>
              ))}
            </div>
            {area.near.length > 0 && (
              <p className="text-slate-500 text-sm mt-4 leading-relaxed">
                Also close to {area.near.slice(0, -1).join(', ')}
                {area.near.length > 1 ? ' and ' : ''}
                {area.near[area.near.length - 1]}.
              </p>
            )}
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6">
            <div className="flex items-center gap-2 mb-4">
              <span aria-hidden="true" data-nosnippet className="material-symbols-outlined text-[#b70011]">add_road</span>
              <h3 className="font-bold text-[#0f172a]">Roads we regularly attend</h3>
            </div>
            <ul className="space-y-2">
              {area.roads.map((road) => (
                <li key={road} className="flex items-start gap-2 text-slate-600 text-sm sm:text-base">
                  <span className="text-[#b70011] mt-0.5">•</span>
                  {road}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
