import { LOCAL_AREAS, postcodeRuns } from '@/lib/local-areas'

const MAX_RUNS = 3

/** Short postcode coverage line for an area hero; the full list is in <LocalAreaInfo /> (#postcodes). */
export default function HeroPostcodes({ slug }: { slug: string }) {
  const area = LOCAL_AREAS[slug]
  if (!area) return null
  const runs = postcodeRuns(area.pc)
  const shown = runs.slice(0, MAX_RUNS)

  return (
    <div className="flex flex-wrap items-center gap-2 -mt-2 sm:-mt-3 mb-5 sm:mb-6">
      <span className="flex items-center gap-1.5 text-white lg:text-white/90 text-sm font-semibold">
        <span aria-hidden="true" data-nosnippet className="material-symbols-outlined text-[#FF4444] text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>
          location_on
        </span>
        Postcodes we cover:
      </span>
      {shown.map((run) => (
        <span key={run} className="bg-white/10 border border-white/20 text-white text-sm font-bold px-2.5 py-1 rounded-md [text-shadow:none]">
          {run}
        </span>
      ))}
      {runs.length > MAX_RUNS && (
        <a href="#postcodes" className="text-white/90 text-sm font-semibold underline underline-offset-2 hover:text-white">
          + more
        </a>
      )}
    </div>
  )
}
