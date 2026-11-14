import JsonLd from '@/components/JsonLd'
import HeroMapBackground from '@/components/HeroMapBackground'
import HeroCtaButtons from '@/components/HeroCtaButtons'
import HeroRatingBadge from '@/components/HeroRatingBadge'
import { breadcrumbSchema, serviceSchema, SITE_URL } from '@/lib/schema'
import { buildMetadata } from '@/lib/seo'
import GoogleReviewsSection from '@/components/GoogleReviewsSection'
import ServicesSection from '@/components/ServicesSection'
import HeroBadge from '@/components/HeroBadge'
import HeroQuoteSection from '@/components/HeroQuoteSection'
import ServiceAreaRegions, { type ServiceAreaRegion } from '@/components/ServiceAreaRegions'

export const metadata = buildMetadata({
  title: 'Service Area | Mobile Tyre Fitting Coverage',
  description:
    'Full coverage map: all 10 Greater Manchester boroughs plus 11 motorways and major roads, with same-day dispatch across West Yorkshire and South Yorkshire too.',
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

// ── West Yorkshire city cards ──────────────────────────────────────────────────
const westYorkshireAreas = [
  {
    name: 'Leeds',
    boroughKey: 'Leeds',
    href: '/mobile-tyre-fitting-leeds',
    icon: 'location_city',
    postcodes: 'LS1 – LS29',
    desc: 'Covering the Leeds city centre, Headingley and Roundhay, the ring roads and near the M621, dispatched the same day.',
  },
  {
    name: 'Bradford',
    boroughKey: 'Bradford',
    href: '/mobile-tyre-fitting-bradford',
    icon: 'location_on',
    postcodes: 'BD1 – BD18',
    desc: 'Covering the Bradford city centre, the Outer Ring Road and near the M606 and M62 Junction 26, dispatched the same day.',
  },
  {
    name: 'Huddersfield',
    boroughKey: 'Huddersfield',
    href: '/mobile-tyre-fitting-huddersfield',
    icon: 'location_on',
    postcodes: 'HD1 – HD9',
    desc: 'Covering Huddersfield, Batley, Dewsbury and Mirfield, near the M62 junctions, dispatched the same day.',
  },
  {
    name: 'Halifax',
    boroughKey: 'Halifax',
    href: '/mobile-tyre-fitting-halifax',
    icon: 'location_on',
    postcodes: 'HX1 – HX7',
    desc: 'Covering Halifax, Brighouse, Hebden Bridge and Todmorden, near M62 Junction 24, dispatched the same day.',
  },
  {
    name: 'Wakefield',
    boroughKey: 'Wakefield',
    href: '/mobile-tyre-fitting-wakefield',
    icon: 'location_on',
    postcodes: 'WF1 – WF17',
    desc: 'Covering Wakefield, Pontefract and Castleford, near M1 Junctions 39 to 42, dispatched the same day.',
  },
]

// ── South Yorkshire city card ──────────────────────────────────────────────────
const southYorkshireAreas = [
  {
    name: 'Barnsley',
    boroughKey: 'Barnsley',
    href: '/mobile-tyre-fitting-barnsley',
    icon: 'location_city',
    postcodes: 'S70 – S75, S36',
    desc: 'Covering Barnsley and Stocksbridge, near M1 Junctions 36 and 37, dispatched the same day.',
  },
]

// ── West Yorkshire motorway card ────────────────────────────────────────────────
const westYorkshireMotorwayAreas = [
  {
    name: 'M621',
    href: '/mobile-tyre-fitting-m621',
    junctions: 'J1 – J7 (Leeds)',
    desc: 'Leeds inner motorway covered from the M62 Junction 27 interchange through to the approach into Leeds city centre.',
  },
]

// ── South Yorkshire motorway card ───────────────────────────────────────────────
const southYorkshireMotorwayAreas = [
  {
    name: 'M18',
    href: '/mobile-tyre-fitting-m18',
    junctions: 'J1 – J7 (South Yorkshire)',
    desc: 'Covered from the M1 interchange near Rotherham through to the A1(M) and M180 near Doncaster.',
  },
]

// ── Motorway / road cards ─────────────────────────────────────────────────────
const motorwayAreas = [
  {
    name: 'M6 Motorway',
    href: '/mobile-tyre-fitting-m6',
    junctions: 'J23 – J27 (GM stretch)',
    desc: 'Emergency tyre cover along our section of the M6, 24/7.',
  },
  {
    name: 'M60 Orbital',
    href: '/mobile-tyre-fitting-m60',
    junctions: 'J1 – J27 (full ring)',
    desc: 'Complete coverage of the orbital ring road — all 27 junctions, 24/7.',
  },
  {
    name: 'M602 Motorway',
    href: '/mobile-tyre-fitting-m602',
    junctions: 'J1 – J3',
    desc: 'Salford inner relief route — fast response on the M602 between Eccles and Regent Road.',
  },
  {
    name: 'M61 Motorway',
    href: '/mobile-tyre-fitting-m61',
    junctions: 'J1 – J9',
    desc: 'Manchester to Preston corridor covered from J1 Worsley through to J9 at Clayton Brook.',
  },
  {
    name: 'M56 Motorway',
    href: '/mobile-tyre-fitting-m56',
    junctions: 'J1 – J6 (GM stretch)',
    desc: 'Manchester Airport corridor covered along our stretch of the M56, from the Cheshire border to the A34 interchange.',
  },
  {
    name: 'M62 Motorway',
    href: '/mobile-tyre-fitting-m62',
    junctions: 'J12 – J21 (GM stretch)',
    desc: 'Trans-Pennine motorway serviced along our section, including Birch Services.',
  },
  {
    name: 'M66 Motorway',
    href: '/mobile-tyre-fitting-m66',
    junctions: 'J1 – J5',
    desc: 'Manchester to Ramsbottom — emergency tyre cover on the M66 north–south corridor.',
  },
  {
    name: 'A627(M)',
    href: '/mobile-tyre-fitting-a627',
    junctions: 'Oldham – Chadderton',
    desc: 'A627(M) spur road and approaches covered — connecting Oldham town centre to the M60.',
  },
  {
    name: 'M67 Motorway',
    href: '/mobile-tyre-fitting-m67',
    junctions: 'J1 – J4',
    desc: 'Hyde bypass and Tameside connector fully covered from Denton interchange to Mottram.',
  },
  {
    name: 'A57(M)',
    href: '/mobile-tyre-fitting-a57',
    junctions: 'Mancunian Way spur',
    desc: 'The A57(M) Mancunian Way through Manchester city centre, linking Chester Road to Ardwick.',
  },
  {
    name: 'Wilmslow Road',
    href: '/mobile-tyre-fitting-wilmslow-road',
    junctions: 'Rusholme – Didsbury',
    desc: 'The A34 corridor along Wilmslow Road through Rusholme, Fallowfield, Withington and Didsbury.',
  },
]

// ── Region groupings for the collapsible accordion ──────────────────────────────
const regions: ServiceAreaRegion[] = [
  {
    name: 'Greater Manchester',
    label: 'Greater Manchester',
    heading: 'Boroughs We Cover',
    description: 'Every area we serve gets full coverage, including each surrounding town and village.',
    areas: boroughAreas,
    roadsHeading: 'Motorway & Road Coverage',
    roads: motorwayAreas,
  },
  {
    name: 'West Yorkshire',
    label: 'West Yorkshire',
    heading: 'Cities We Cover',
    description:
      'Outside Greater Manchester, we also cover West Yorkshire — Leeds, Bradford, Huddersfield, Halifax and Wakefield, plus their surrounding towns — on a same-day dispatch basis.',
    areas: westYorkshireAreas,
    roadsHeading: 'Motorway Coverage',
    roads: westYorkshireMotorwayAreas,
  },
  {
    name: 'South Yorkshire',
    label: 'South Yorkshire',
    heading: 'Also Serving Barnsley',
    description: 'We also cover Barnsley and Stocksbridge in South Yorkshire on a same-day dispatch basis.',
    areas: southYorkshireAreas,
    roadsHeading: 'Motorway Coverage',
    roads: southYorkshireMotorwayAreas,
  },
]

// ── Trust badges ──────────────────────────────────────────────────────────────
const trustBadges = [
  { icon: 'schedule', label: '24/7 Emergency', sub: 'Always on call' },
  { icon: 'bolt', label: '20–30 Min', sub: 'Average arrival' },
  { icon: 'public', label: '3 Regions', sub: 'Fully covered' },
  { icon: 'route', label: '13 Routes', sub: 'Full roadside cover' },
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
    'Mobile tyre fitting and roadside assistance across all 10 Greater Manchester boroughs and the M6, M60, M602, M61, M56, M62, M66, A627(M), M67, A57(M) and Wilmslow Road.',
  areaServed: { '@type': 'AdministrativeArea', name: 'Greater Manchester' },
})

export default function ServiceAreaPage() {
  return (
    <div className="bg-surface font-body-md text-on-background antialiased">
      <JsonLd data={_breadcrumbSchema} />
      <JsonLd data={_serviceSchema} />
      {/* ── Hero ── */}
      <section className="relative lg:h-[500px] flex items-center overflow-hidden py-10 sm:py-14 lg:py-20">
        <HeroMapBackground />
        <div className="relative z-20 w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-16 text-center lg:text-left [text-shadow:0_1px_3px_rgba(0,0,0,0.9),0_2px_12px_rgba(0,0,0,0.7)] lg:[text-shadow:none]">
          <div><HeroBadge>Our Coverage</HeroBadge></div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-white font-black mb-4 sm:mb-5 leading-[1.1] text-balance max-w-3xl mx-auto lg:mx-0" style={{ fontFamily: 'var(--font-work-sans)', letterSpacing: '-0.02em' }}>
            Our Service Area
          </h1>
          <p className="font-body-lg text-base lg:text-body-lg text-white lg:text-white/90 max-w-2xl mx-auto lg:mx-0 mb-5 sm:mb-8 text-pretty leading-relaxed">
            24/7 mobile tyre fitting across Greater Manchester, plus UK towns, cities and motorways. We come to you.
          </p>
          {/* Google rating */}
          <HeroRatingBadge />

          <HeroCtaButtons />
        </div>
      </section>

      {/* ── INSTANT QUOTE ── */}
      <HeroQuoteSection />

      {/* ── Trust badges ── */}
      <section className="bg-white border-b border-slate-100 py-4 sm:py-6 px-4 sm:px-5">
        <div className="max-w-5xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {trustBadges.map((b) => (
            <div
              key={b.label}
              className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 rounded-xl bg-surface-container-low"
            >
              <div className="bg-primary/10 p-2 sm:p-2.5 rounded-lg shrink-0">
                <span aria-hidden="true" data-nosnippet className="material-symbols-outlined text-primary text-lg sm:text-xl">{b.icon}</span>
              </div>
              <div className="min-w-0">
                <p className="font-label-bold text-xs sm:text-label-bold text-secondary leading-tight truncate">{b.label}</p>
                <p className="text-[10px] sm:text-xs text-on-surface-variant">{b.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Regions — collapsed by default, tap a region to reveal its boroughs/towns ── */}
      <section className="bg-surface-container">
        <div className="text-center pt-12 sm:pt-16 px-4 sm:px-5 max-w-2xl mx-auto">
          <h2 className="font-h2 text-xl sm:text-2xl lg:text-h2 text-secondary mb-3 text-balance leading-tight">
            Pick a Region to See Coverage
          </h2>
          <p className="font-body-md text-sm sm:text-body-md text-on-surface-variant text-pretty">
            Tap a region below to see the boroughs, cities and towns we cover there.
          </p>
        </div>
        <ServiceAreaRegions regions={regions} />
      </section>

      {/* ── Google Reviews ── */}
      <GoogleReviewsSection bg="bg-white" />

      {/* ── Our Services ── */}
      <ServicesSection cta={false} />

      {/* ── "Not sure?" coverage checker CTA ── */}
      <section className="py-12 sm:py-16 lg:py-xl px-4 sm:px-5">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl sm:rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="bg-secondary p-6 sm:p-8 md:p-10 flex flex-col justify-center md:w-2/5 shrink-0">
              <span aria-hidden="true" data-nosnippet className="material-symbols-outlined text-white/30 text-[50px] sm:text-[80px] mb-3 sm:mb-4" style={{ fontVariationSettings: "'FILL' 1" }}>
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
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:justify-center lg:justify-start">
                <a
                  href="tel:+447759708646"
                  className="flex items-center justify-center gap-2 bg-primary text-white font-bold text-sm px-6 py-3.5 rounded-xl hover:bg-primary/90 transition-all shadow-md"
                >
                  <span aria-hidden="true" data-nosnippet className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>
                    phone_in_talk
                  </span>
                  Call 07759 708 646
                </a>
                <a
                  href="mailto:info@onestoptyres247.co.uk"
                  className="flex items-center justify-center gap-2 border-2 border-secondary text-secondary font-bold text-sm px-6 py-3.5 rounded-xl hover:bg-secondary hover:text-white transition-all"
                >
                  <span aria-hidden="true" data-nosnippet className="material-symbols-outlined text-lg">mail</span>
                  Email Us
                </a>
              </div>
              <p className="text-xs text-on-surface-variant flex items-center gap-1.5">
                <span aria-hidden="true" data-nosnippet className="material-symbols-outlined text-sm text-green-500" style={{ fontVariationSettings: "'FILL' 1" }}>
                  check_circle
                </span>
                Typical response: 20–30 minutes in the areas we cover
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Emergency CTA banner ── */}
      <section className="px-4 sm:px-5 mb-12 sm:mb-16 lg:mb-xl">
        <div className="max-w-7xl mx-auto bg-primary rounded-2xl overflow-hidden shadow-2xl relative">
          <div className="absolute top-0 right-0 p-4 sm:p-8 opacity-10 pointer-events-none">
            <span aria-hidden="true" data-nosnippet className="material-symbols-outlined text-[100px] sm:text-[150px] lg:text-[200px]">tire_repair</span>
          </div>
          <div className="p-6 sm:p-8 lg:px-14 lg:py-12 flex flex-col sm:flex-row justify-between items-center gap-5 sm:gap-6 relative z-10">
            <div className="text-white text-center sm:text-left">
              <h2 className="font-h1 text-2xl sm:text-3xl lg:text-h1 mb-2 text-balance">Broken Down Right Now?</h2>
              <p className="font-body-lg text-base lg:text-body-lg text-white/90">
                Call immediately — our team is standing by 24/7 across our service areas.
              </p>
              <div className="mt-4 sm:mt-5 flex flex-wrap items-center justify-center sm:justify-start gap-3 sm:gap-4">
                <span aria-hidden="true" data-nosnippet className="material-symbols-outlined text-2xl sm:text-3xl lg:text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>call</span>
                <span className="text-xl sm:text-2xl lg:text-4xl font-black font-h1">07759 708 646</span>
              </div>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3 w-full sm:w-auto">
              <a
                className="cta-btn cta-call bg-white text-primary font-h2 text-base sm:text-xl lg:text-h2 px-6 sm:px-10 py-4 sm:py-5 rounded-xl hover:bg-gray-100 transition-all uppercase shadow-lg text-center w-full sm:w-auto sm:min-w-[180px] lg:min-w-[200px] shrink-0"
                href="tel:+447759708646"
              >
                07759 708 646
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile bottom nav */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-2 sm:px-4 py-2 bg-white border-t border-gray-100 shadow-[0_-4px_20px_rgba(0,45,98,0.05)] rounded-t-2xl">
        <a className="flex flex-col items-center justify-center text-gray-500 py-1 px-2" href="/">
          <span aria-hidden="true" data-nosnippet className="material-symbols-outlined text-xl">home</span>
          <span className="text-[9px] sm:text-[10px] font-semibold font-h3">Home</span>
        </a>
        <a className="flex flex-col items-center justify-center text-gray-500 py-1 px-2" href="/services">
          <span aria-hidden="true" data-nosnippet className="material-symbols-outlined text-xl">tire_repair</span>
          <span className="text-[9px] sm:text-[10px] font-semibold font-h3">Services</span>
        </a>
        <a className="flex flex-col items-center justify-center text-gray-500 py-1 px-2" href="tel:+447759708646">
          <span aria-hidden="true" data-nosnippet className="material-symbols-outlined text-xl">emergency</span>
          <span className="text-[9px] sm:text-[10px] font-semibold font-h3">Emergency</span>
        </a>
        <a className="flex flex-col items-center justify-center bg-red-50 text-red-600 rounded-xl px-2 sm:px-3 py-1.5" href="/service-area">
          <span aria-hidden="true" data-nosnippet className="material-symbols-outlined text-xl">map</span>
          <span className="text-[9px] sm:text-[10px] font-semibold font-h3">Area</span>
        </a>
      </nav>


    </div>
  )
}
