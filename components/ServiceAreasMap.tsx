import { BOROUGHS } from '@/lib/locations'

const ROAD_PAGES = [
  { name: 'M60', slug: 'm60' },
  { name: 'M61', slug: 'm61' },
  { name: 'M62', slug: 'm62' },
  { name: 'M56', slug: 'm56' },
  { name: 'M66', slug: 'm66' },
  { name: 'M67', slug: 'm67' },
  { name: 'M602', slug: 'm602' },
  { name: 'A627', slug: 'a627' },
]

export default function ServiceAreasMap() {
  return (
    <section className="border-t border-slate-200 flex flex-col lg:flex-row" style={{ minHeight: '520px' }}>
      {/* Left — map */}
      <div className="w-full lg:w-1/2 h-[300px] lg:h-auto">
        <iframe
          className="w-full h-full"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4741.379474172151!2d-2.1049285233703974!3d53.5454538598072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bb920bfb7fecd%3A0x4edbef2355697975!2sOne%20Stop%20Mobile%20Tyres%2024%2F7!5e0!3m2!1sen!2s!4v1781464116347!5m2!1sen!2s"
          frameBorder="0"
          scrolling="no"
          title="Service area map"
          aria-label="Google map showing Greater Manchester service area"
          loading="lazy"
        />
      </div>

      {/* Right — locations, grouped by borough */}
      <div className="w-full lg:w-1/2 bg-[#0f172a] px-6 sm:px-10 py-10 sm:py-14 flex flex-col">
        <span className="inline-block bg-[#FF4444]/15 text-[#FF4444] font-bold uppercase tracking-widest text-xs mb-3 px-3 py-1 rounded-full border border-[#FF4444]/30 self-start">
          Our Service Areas
        </span>
        <h2
          className="text-white text-2xl sm:text-3xl font-black mb-2 leading-tight text-balance"
          style={{ fontFamily: 'var(--font-work-sans)' }}
        >
          Mobile Tyre Fitting Manchester &amp; Greater Manchester — Full Coverage
        </h2>
        <p className="text-slate-400 text-sm mb-6 leading-relaxed">
          Every Greater Manchester borough, town and motorway we cover, 24/7. Broken down on a
          motorway hard shoulder or stuck on your driveway at home — our nearest available
          technician is dispatched straight to your GPS location.
        </p>

        <div className="rounded-xl border border-white/10 bg-white/[0.02] overflow-hidden">
          <div className="divide-y divide-white/[0.06]">
            {BOROUGHS.map((borough) => (
              <div key={borough.name} className="px-4 py-3">
                <div className="flex items-center gap-2 mb-1">
                  <span className="material-symbols-outlined text-[#FF4444] shrink-0" style={{ fontSize: '15px' }}>
                    location_on
                  </span>
                  {borough.slug ? (
                    <a
                      href={`/mobile-tyre-fitting-${borough.slug}`}
                      className="text-white font-bold text-sm hover:text-[#FF4444] transition-colors"
                    >
                      {borough.name}
                    </a>
                  ) : (
                    <span className="text-white font-bold text-sm">{borough.name}</span>
                  )}
                </div>
                {borough.towns.length > 0 && (
                  <p className="text-xs text-slate-400 leading-relaxed pl-[23px]">
                    {borough.towns.map((town, i) => (
                      <span key={town.slug}>
                        <a href={`/mobile-tyre-fitting-${town.slug}`} className="hover:text-[#FF4444] transition-colors">
                          {town.name}
                        </a>
                        {i < borough.towns.length - 1 && <span className="text-slate-600"> · </span>}
                      </span>
                    ))}
                  </p>
                )}
              </div>
            ))}
          </div>

          <div className="px-4 py-3 border-t border-white/[0.06] bg-white/[0.02]">
            <div className="flex items-center gap-2 mb-1">
              <span className="material-symbols-outlined text-[#FF4444] shrink-0" style={{ fontSize: '15px' }}>
                directions
              </span>
              <span className="text-white font-bold text-sm">Motorways</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed pl-[23px]">
              {ROAD_PAGES.map((road, i) => (
                <span key={road.slug}>
                  <a href={`/mobile-tyre-fitting-${road.slug}`} className="hover:text-[#FF4444] transition-colors">
                    {road.name}
                  </a>
                  {i < ROAD_PAGES.length - 1 && <span className="text-slate-600"> · </span>}
                </span>
              ))}
            </p>
          </div>
        </div>

        <a
          href="/service-area"
          className="mt-6 inline-flex items-center gap-2 bg-[#FF4444] text-[#121212] text-sm font-bold px-5 py-3 rounded-xl hover:bg-red-700 hover:text-white transition-colors self-start"
        >
          <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>map</span>
          View Full Service Area
        </a>
      </div>
    </section>
  )
}
