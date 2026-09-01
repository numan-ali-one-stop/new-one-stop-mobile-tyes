import JsonLd from '@/components/JsonLd'
import { breadcrumbSchema, serviceSchema, SITE_URL } from '@/lib/schema'
import { buildMetadata } from '@/lib/seo'
import { BOROUGHS } from '@/lib/locations'

export const metadata = buildMetadata({
  title: 'Service Area | Mobile Tyre Fitting Coverage',
  description:
    'Full coverage map: all 10 Greater Manchester boroughs plus 8 motorways, covered 24/7 always.',
  path: '/service-area',
})

// ── Borough / city hub cards ───────────────────────────────────────────────────
const boroughAreas = [
  {
    name: 'Manchester City',
    boroughKey: 'Manchester',
    href: '/mobile-tyre-fitting-manchester',
    icon: 'location_city',
    postcodes: 'M1 – M16, M40, M60',
    desc: '24/7 mobile tyre fitting across the city centre, Salford, Ancoats, Deansgate and all inner districts.',
  },
  {
    name: 'Bolton',
    boroughKey: 'Bolton',
    href: '/mobile-tyre-fitting-bolton',
    icon: 'location_on',
    postcodes: 'BL1 – BL7',
    desc: 'Full coverage across Bolton, Horwich, Farnworth, Westhoughton and surrounding villages.',
  },
  {
    name: 'Bury',
    boroughKey: 'Bury',
    href: '/mobile-tyre-fitting-bury',
    icon: 'location_on',
    postcodes: 'BL8, BL9, M26',
    desc: 'Rapid response throughout Bury, Radcliffe, Ramsbottom, Tottington and Whitefield.',
  },
  {
    name: 'Oldham',
    boroughKey: 'Oldham',
    href: '/mobile-tyre-fitting-oldham',
    icon: 'location_on',
    postcodes: 'OL1 – OL9',
    desc: 'Covering Oldham, Chadderton, Failsworth, Lees, Royton and Saddleworth.',
  },
  {
    name: 'Rochdale',
    boroughKey: 'Rochdale',
    href: '/mobile-tyre-fitting-rochdale',
    icon: 'location_on',
    postcodes: 'OL10 – OL16',
    desc: 'Serving Rochdale, Heywood, Middleton, Milnrow and the surrounding Pennine areas.',
  },
  {
    name: 'Salford',
    boroughKey: 'Salford',
    href: '/mobile-tyre-fitting-salford',
    icon: 'location_on',
    postcodes: 'M3, M5 – M7, M27, M28, M30, M44, M50',
    desc: 'Fast mobile tyre fitting across Salford, Eccles, Swinton, Pendlebury, Worsley and nearby districts.',
  },
  {
    name: 'Stockport',
    boroughKey: 'Stockport',
    href: '/mobile-tyre-fitting-stockport',
    icon: 'location_on',
    postcodes: 'SK1 – SK8, SK12',
    desc: 'Mobile tyre fitting in Stockport, Hazel Grove, Cheadle, Bramhall and Marple.',
  },
  {
    name: 'Tameside',
    boroughKey: 'Tameside',
    href: '/mobile-tyre-fitting-tameside',
    icon: 'location_on',
    postcodes: 'OL5 – OL7, SK14 – SK16',
    desc: 'Full coverage of Ashton-under-Lyne, Denton, Droylsden, Hyde, Mossley and Stalybridge.',
  },
  {
    name: 'Trafford',
    boroughKey: 'Trafford',
    href: '/mobile-tyre-fitting-trafford',
    icon: 'location_on',
    postcodes: 'M16, M17, M32, M33, WA14 – WA15',
    desc: 'Serving Altrincham, Sale, Stretford, Urmston, Partington and all of Trafford borough.',
  },
  {
    name: 'Wigan',
    boroughKey: 'Wigan',
    href: '/mobile-tyre-fitting-wigan',
    icon: 'location_on',
    postcodes: 'WN1 – WN6',
    desc: 'Rapid call-out across Wigan, Leigh, Atherton, Hindley and Skelmersdale.',
  },
]

// ── Motorway / road cards ─────────────────────────────────────────────────────
const motorwayAreas = [
  {
    name: 'M60 Orbital',
    href: '/mobile-tyre-fitting-m60',
    junctions: 'J1 – J27 (full ring)',
    desc: 'Complete coverage of the Greater Manchester orbital motorway — all 27 junctions, 24/7.',
  },
  {
    name: 'M61 Motorway',
    href: '/mobile-tyre-fitting-m61',
    junctions: 'J1 – J9',
    desc: 'Manchester to Preston corridor covered from J1 Worsley through to J9 at Clayton Brook.',
  },
  {
    name: 'M62 Motorway',
    href: '/mobile-tyre-fitting-m62',
    junctions: 'J12 – J21 (GM stretch)',
    desc: 'Trans-Pennine motorway serviced across the Greater Manchester section including Eccles and Birch.',
  },
  {
    name: 'M56 Motorway',
    href: '/mobile-tyre-fitting-m56',
    junctions: 'J1 – J6 (GM stretch)',
    desc: 'Manchester Airport corridor covered on the Greater Manchester stretch of the M56, from the Cheshire border to the A34 interchange.',
  },
  {
    name: 'M66 Motorway',
    href: '/mobile-tyre-fitting-m66',
    junctions: 'J1 – J5',
    desc: 'Manchester to Ramsbottom — emergency tyre cover on the M66 north–south corridor.',
  },
  {
    name: 'M67 Motorway',
    href: '/mobile-tyre-fitting-m67',
    junctions: 'J1 – J4',
    desc: 'Hyde bypass and Tameside connector fully covered from Denton interchange to Mottram.',
  },
  {
    name: 'M602 Motorway',
    href: '/mobile-tyre-fitting-m602',
    junctions: 'J1 – J3',
    desc: 'Salford inner relief route — fast response on the M602 between Eccles and Regent Road.',
  },
  {
    name: 'A627(M)',
    href: '/mobile-tyre-fitting-a627',
    junctions: 'Oldham – Chadderton',
    desc: 'A627(M) spur road and approaches covered — connecting Oldham town centre to the M60.',
  },
]

// ── Trust badges ──────────────────────────────────────────────────────────────
const trustBadges = [
  { icon: 'schedule', label: '24/7 Emergency', sub: 'Always on call' },
  { icon: 'bolt', label: '20–30 Min', sub: 'Average arrival' },
  { icon: 'public', label: '10 Boroughs', sub: 'Greater Manchester' },
  { icon: 'route', label: '8 Motorways', sub: 'Full roadside cover' },
]


const _breadcrumbSchema = breadcrumbSchema([
  { name: 'Home', item: SITE_URL },
  { name: 'Service Area', item: `${SITE_URL}/service-area` },
])

const _serviceSchema = serviceSchema({
  slug: 'service-area',
  name: 'Mobile Tyre Fitting Coverage — Greater Manchester',
  serviceType: 'Mobile Tyre Fitting',
  description:
    'Mobile tyre fitting and roadside assistance across all 10 Greater Manchester boroughs and the M60, M61, M62, M56, M66, M67, M602 and A627 motorways.',
  areaServed: { '@type': 'AdministrativeArea', name: 'Greater Manchester' },
})

export default function ServiceAreaPage() {
  return (
    <div className="bg-surface font-body-md text-on-background antialiased">
      <JsonLd data={_breadcrumbSchema} />
      <JsonLd data={_serviceSchema} />
      {/* ── Hero ── */}
      <section className="relative min-h-[400px] sm:min-h-[450px] lg:h-[500px] flex items-center justify-center overflow-hidden py-16 sm:py-20">
        <div className="absolute inset-0 bg-secondary/85 z-10" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="absolute inset-0 w-full h-full object-cover"
          src="https://ss5vlswhqmiddtca.public.blob.vercel-storage.com/Hero%20section%20image%20for%20one%20stop-airanko-GThUaVjbwZmY4iQO0czB2NrcyiFDuj.webp"
          alt="One Stop Mobile Tyres 24/7 mobile tyre fitting van on the road"
          width={1920}
          height={500}
          loading="eager"
        />
        <div className="relative z-20 text-center px-4 sm:px-5 max-w-3xl mx-auto">
          <span className="inline-block bg-primary/20 border border-primary/40 text-white text-[10px] sm:text-xs font-bold uppercase tracking-widest px-3 sm:px-4 py-1 sm:py-1.5 rounded-full mb-4 sm:mb-5">
            Greater Manchester
          </span>
          <h1 className="font-h1 text-2xl sm:text-3xl lg:text-h1 text-white mb-4 sm:mb-5 text-balance leading-tight">
            Our Service Area
          </h1>
          <p className="font-body-lg text-base lg:text-body-lg text-white/90 max-w-2xl mx-auto mb-6 sm:mb-8 text-pretty leading-relaxed">
            We cover all 10 Greater Manchester boroughs and 8 major motorways — wherever you
            are, we&apos;ll come to you, 24 hours a day, 7 days a week.
          </p>
          <a
            href="tel:07759708646"
            className="inline-flex items-center gap-2 bg-primary text-white font-call-to-action text-base lg:text-call-to-action px-6 sm:px-8 py-3 sm:py-4 rounded-xl hover:bg-primary/90 transition-all shadow-lg uppercase"
          >
            <span className="material-symbols-outlined text-lg sm:text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>
              phone_in_talk
            </span>
            07759 708 646
          </a>
        </div>
      </section>

      {/* ── Trust badges ── */}
      <section className="bg-white border-b border-slate-100 py-4 sm:py-6 px-4 sm:px-5">
        <div className="max-w-5xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {trustBadges.map((b) => (
            <div
              key={b.label}
              className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 rounded-xl bg-surface-container-low"
            >
              <div className="bg-primary/10 p-2 sm:p-2.5 rounded-lg shrink-0">
                <span className="material-symbols-outlined text-primary text-lg sm:text-xl">{b.icon}</span>
              </div>
              <div className="min-w-0">
                <p className="font-label-bold text-xs sm:text-label-bold text-secondary leading-tight truncate">{b.label}</p>
                <p className="text-[10px] sm:text-xs text-on-surface-variant">{b.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Borough / city hub areas ── */}
      <section className="py-12 sm:py-16 lg:py-xl px-4 sm:px-5 max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="font-h2 text-xl sm:text-2xl lg:text-h2 text-secondary mb-3 text-balance leading-tight">
            Boroughs We Cover
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-primary mx-auto rounded-full mb-3 sm:mb-4" />
          <p className="font-body-md text-sm sm:text-body-md text-on-surface-variant max-w-xl mx-auto text-pretty">
            All 10 Greater Manchester boroughs, each with full coverage of the borough and every
            surrounding town and village.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {boroughAreas.map((area) => {
            const towns = BOROUGHS.find((b) => b.name === area.boroughKey)?.towns ?? []
            return (
              <div
                key={area.name}
                className="group flex flex-col bg-white rounded-2xl border-2 border-slate-100 shadow-md hover:shadow-2xl hover:border-primary hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                <div className="h-1.5 bg-primary" />
                <a href={area.href} className="flex items-center gap-4 px-5 pt-5 pb-3">
                  <div className="bg-primary p-3.5 rounded-2xl shrink-0 shadow-md shadow-primary/30">
                    <span className="material-symbols-outlined text-white text-[28px]">
                      {area.icon}
                    </span>
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-xl sm:text-2xl font-extrabold text-[#0f172a] leading-snug" style={{ fontFamily: 'var(--font-work-sans)' }}>
                      {area.name}
                    </h3>
                    <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                      {area.postcodes}
                    </span>
                  </div>
                </a>
                <a href={area.href} className="px-5 pb-4 block">
                  <p className="font-body-md text-body-md text-on-surface-variant text-base leading-relaxed">
                    {area.desc}
                  </p>
                </a>
                {towns.length > 0 && (
                  <div className="px-5 pb-5">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-2 block">
                      Also Covering
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {towns.map((town) => (
                        <a
                          key={town.slug}
                          href={`/mobile-tyre-fitting-${town.slug}`}
                          className="text-xs font-bold text-primary bg-primary/5 hover:bg-primary hover:text-white border-2 border-primary/20 hover:border-primary px-3 py-1.5 rounded-full transition-colors"
                        >
                          {town.name}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
                <a
                  href={area.href}
                  className="mt-auto bg-primary hover:bg-[#dc2626] text-white px-5 py-3.5 flex items-center justify-between font-bold text-sm uppercase tracking-wide transition-colors"
                >
                  View {area.name} Coverage
                  <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </a>
              </div>
            )
          })}
        </div>
      </section>

      {/* ── Motorway / road coverage ── */}
      <section className="bg-surface-container py-12 sm:py-16 lg:py-xl px-4 sm:px-5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="font-h2 text-xl sm:text-2xl lg:text-h2 text-secondary mb-3 text-balance leading-tight">
              Motorway &amp; Road Coverage
            </h2>
            <div className="w-16 sm:w-20 h-1 bg-primary mx-auto rounded-full mb-3 sm:mb-4" />
            <p className="font-body-md text-sm sm:text-body-md text-on-surface-variant max-w-xl mx-auto text-pretty">
              Broken down on a motorway? Our rapid response team covers every major road
              in and around Greater Manchester, 24/7.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4">
            {motorwayAreas.map((road) => (
              <a
                key={road.name}
                href={road.href}
                className="group bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-primary/30 transition-all p-5 flex flex-col gap-3"
              >
                <div className="flex items-center justify-between">
                  <span className="bg-secondary text-white font-black text-base px-3 py-1 rounded-lg tracking-wide">
                    {road.name}
                  </span>
                  <span className="material-symbols-outlined text-primary group-hover:translate-x-0.5 transition-transform">
                    arrow_forward
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-on-surface-variant font-semibold">
                  <span className="material-symbols-outlined text-sm text-primary">route</span>
                  {road.junctions}
                </div>
                <p className="text-sm text-on-surface-variant leading-relaxed flex-1">{road.desc}</p>
                <span className="text-xs font-bold text-primary uppercase tracking-wide">
                  View coverage
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── "Not sure?" coverage checker CTA ── */}
      <section className="py-12 sm:py-16 lg:py-xl px-4 sm:px-5">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl sm:rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="bg-secondary p-6 sm:p-8 md:p-10 flex flex-col justify-center md:w-2/5 shrink-0">
              <span className="material-symbols-outlined text-white/30 text-[50px] sm:text-[80px] mb-3 sm:mb-4" style={{ fontVariationSettings: "'FILL' 1" }}>
                help
              </span>
              <h3 className="font-h2 text-xl sm:text-2xl text-white mb-2 text-balance">Not sure if we cover your area?</h3>
              <p className="text-white/70 text-xs sm:text-base leading-relaxed">
                Simply give us a call and we&apos;ll let you know instantly. We&apos;re constantly expanding our coverage.
              </p>
            </div>
            <div className="p-6 sm:p-8 md:p-10 flex flex-col justify-center gap-4 sm:gap-5">
              <p className="font-body-lg text-base lg:text-body-lg text-on-surface-variant text-pretty">
                Our dispatch team can confirm coverage for your exact postcode and give you an
                estimated arrival time in under 60 seconds.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="tel:07759708646"
                  className="flex items-center justify-center gap-2 bg-primary text-white font-bold text-sm px-6 py-3.5 rounded-xl hover:bg-primary/90 transition-all shadow-md"
                >
                  <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>
                    phone_in_talk
                  </span>
                  Call 07759 708 646
                </a>
                <a
                  href="mailto:info@onestoptyres247.co.uk"
                  className="flex items-center justify-center gap-2 border-2 border-secondary text-secondary font-bold text-sm px-6 py-3.5 rounded-xl hover:bg-secondary hover:text-white transition-all"
                >
                  <span className="material-symbols-outlined text-lg">mail</span>
                  Email Us
                </a>
              </div>
              <p className="text-xs text-on-surface-variant flex items-center gap-1.5">
                <span className="material-symbols-outlined text-sm text-green-500" style={{ fontVariationSettings: "'FILL' 1" }}>
                  check_circle
                </span>
                Typical response: 20–30 minutes anywhere in Greater Manchester
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Emergency CTA banner ── */}
      <section className="px-4 sm:px-5 mb-12 sm:mb-16 lg:mb-xl">
        <div className="max-w-7xl mx-auto bg-primary rounded-2xl overflow-hidden shadow-2xl relative">
          <div className="absolute top-0 right-0 p-4 sm:p-8 opacity-10 pointer-events-none">
            <span className="material-symbols-outlined text-[100px] sm:text-[150px] lg:text-[200px]">tire_repair</span>
          </div>
          <div className="p-6 sm:p-8 lg:px-14 lg:py-12 flex flex-col sm:flex-row justify-between items-center gap-5 sm:gap-6 relative z-10">
            <div className="text-white text-center sm:text-left">
              <h2 className="font-h1 text-2xl sm:text-3xl lg:text-h1 mb-2 text-balance">Broken Down Right Now?</h2>
              <p className="font-body-lg text-base lg:text-body-lg text-white/90">
                Call immediately — our team is standing by 24/7 across Greater Manchester.
              </p>
              <div className="mt-4 sm:mt-5 flex items-center justify-center sm:justify-start gap-3 sm:gap-4">
                <span className="material-symbols-outlined text-2xl sm:text-3xl lg:text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>call</span>
                <span className="text-xl sm:text-2xl lg:text-4xl font-black font-h1">07759 708 646</span>
              </div>
            </div>
            <a
              className="bg-white text-primary font-h2 text-base sm:text-xl lg:text-h2 px-6 sm:px-10 py-4 sm:py-5 rounded-xl hover:bg-gray-100 transition-all uppercase shadow-lg text-center w-full sm:w-auto sm:min-w-[180px] lg:min-w-[200px] shrink-0"
              href="tel:07759708646"
            >
              07759 708 646
            </a>
          </div>
        </div>
      </section>

      {/* Mobile bottom nav */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-2 sm:px-4 py-2 bg-white border-t border-gray-100 shadow-[0_-4px_20px_rgba(0,45,98,0.05)] rounded-t-2xl">
        <a className="flex flex-col items-center justify-center text-gray-500 py-1 px-2" href="/">
          <span className="material-symbols-outlined text-xl">home</span>
          <span className="text-[9px] sm:text-[10px] font-semibold font-h3">Home</span>
        </a>
        <a className="flex flex-col items-center justify-center text-gray-500 py-1 px-2" href="/services">
          <span className="material-symbols-outlined text-xl">tire_repair</span>
          <span className="text-[9px] sm:text-[10px] font-semibold font-h3">Services</span>
        </a>
        <a className="flex flex-col items-center justify-center text-gray-500 py-1 px-2" href="tel:07759708646">
          <span className="material-symbols-outlined text-xl">emergency</span>
          <span className="text-[9px] sm:text-[10px] font-semibold font-h3">Emergency</span>
        </a>
        <a className="flex flex-col items-center justify-center bg-red-50 text-red-600 rounded-xl px-2 sm:px-3 py-1.5" href="/service-area">
          <span className="material-symbols-outlined text-xl">map</span>
          <span className="text-[9px] sm:text-[10px] font-semibold font-h3">Area</span>
        </a>
      </nav>


    </div>
  )
}
