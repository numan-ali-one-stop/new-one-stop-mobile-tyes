import { BOROUGHS } from '@/lib/locations'

const ROAD_PAGES = [
  { name: 'M6', slug: 'm6' },
  { name: 'M60', slug: 'm60' },
  { name: 'M602', slug: 'm602' },
  { name: 'M61', slug: 'm61' },
  { name: 'M56', slug: 'm56' },
  { name: 'M62', slug: 'm62' },
  { name: 'M66', slug: 'm66' },
  { name: 'A627(M)', slug: 'a627' },
  { name: 'M67', slug: 'm67' },
  { name: 'A57(M)', slug: 'a57' },
  { name: 'Wilmslow Road', slug: 'wilmslow-road' },
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
          Mobile Tyre Fitting — Our Coverage Areas
        </h2>
        <p className="text-slate-400 text-sm mb-6 leading-relaxed">
          Broken down on a motorway hard shoulder or stuck on your driveway at home? Our nearest
          available technician is dispatched straight to your location, 24/7. See every town we
          cover on the full service area page.
        </p>

        <div className="rounded-xl border border-white/10 bg-white/[0.02] overflow-hidden">
          <div className="grid grid-cols-2 gap-x-4 gap-y-2.5 px-4 py-4">
            {BOROUGHS.filter((b) => b.slug).map((borough) => (
              <a
                key={borough.name}
                href={`/mobile-tyre-fitting-${borough.slug}`}
                className="flex items-center gap-2 text-white font-bold text-sm hover:text-[#FF4444] transition-colors"
              >
                <span aria-hidden="true" data-nosnippet className="material-symbols-outlined text-[#FF4444] shrink-0" style={{ fontSize: '15px' }}>
                  location_on
                </span>
                {borough.name}
              </a>
            ))}
          </div>

          <div className="px-4 py-3 border-t border-white/[0.06] bg-white/[0.02]">
            <div className="flex items-center gap-2 mb-1">
              <span aria-hidden="true" data-nosnippet className="material-symbols-outlined text-[#FF4444] shrink-0" style={{ fontSize: '15px' }}>
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
          className="cta-btn cta-pulse mt-6 inline-flex items-center gap-2 bg-[#dc2626] text-white text-sm font-bold px-5 py-3 rounded-xl hover:bg-red-700 hover:text-white transition-colors self-start"
        >
          <span aria-hidden="true" data-nosnippet className="material-symbols-outlined" style={{ fontSize: '16px' }}>map</span>
          View Full Service Area
        </a>
      </div>
    </section>
  )
}
