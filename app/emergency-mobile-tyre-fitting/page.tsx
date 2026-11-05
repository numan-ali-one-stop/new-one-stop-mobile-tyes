import Image from 'next/image'
import JsonLd from '@/components/JsonLd'
import HeroMapBackground from '@/components/HeroMapBackground'
import HeroQuoteSection from '@/components/HeroQuoteSection'
import { ADS_LANDING_PATH, PHONE, PHONE_TEL } from '@/lib/constants'
import { breadcrumbSchema, faqSchema, serviceSchema, SITE_URL } from '@/lib/schema'
import { buildMetadata } from '@/lib/seo'

/**
 * Google Ads / SEO landing page, built from the site's own section styles. It has its own sticky
 * call header and compliance footer: the site Header and Footer hide themselves on this path.
 * The site's mobile Call / WhatsApp bar and desktop floating buttons still come from the root layout.
 */

const SLUG = ADS_LANDING_PATH.slice(1)
/** Same link as "View all Google reviews" in components/GoogleReviewsSection.tsx. */
const GOOGLE_REVIEWS_URL = 'https://share.google/bejdYHzU10lFRVv4E'
const LOGO_URL =
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/One-Stop%20Loog-airanko-Qpv1QvladNLpRhg8X3Hs6SzyydzFMq.webp'
const HEADING_FONT = { fontFamily: 'var(--font-work-sans)' }
const H2_STYLE = { ...HEADING_FONT, letterSpacing: '-0.01em' }
const FILLED_ICON = { fontVariationSettings: "'FILL' 1" }

export const metadata = buildMetadata({
  title: '24/7 Emergency Mobile Tyre Fitting | Fitters Near You',
  description:
    'Flat tyre or blowout? Rapid 24/7 mobile tyre fitting dispatched to your exact location in 20–30 minutes. Fixed upfront quotes. Call One Stop Mobile Tyres now.',
  path: ADS_LANDING_PATH,
})

const trustBadges = [
  { icon: 'star', iconClass: 'text-yellow-400', text: '5.0 Stars Throughout (1,200+ Driver Reviews)', href: GOOGLE_REVIEWS_URL },
  { icon: 'timer', iconClass: 'text-[#FF4444]', text: '20–30 Minute Rapid Arrival' },
  { icon: 'local_shipping', iconClass: 'text-[#FF4444]', text: '24/7 Nationwide Coverage' },
]

const services = [
  {
    img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Emergency%20Tyre%20Fitting%20one%20Stop-airanko-gsjvsGamoet8drKwCMHYr6LH5Ni6ZI.webp',
    title: '1. 24/7 Emergency Mobile Tyre Fitting',
    desc: 'Rapid emergency dispatch for stranded drivers facing unexpected flat tyres, dangerous blowouts, or roadside damage.',
    badge: 'Immediate response across all cities, towns, rural roads, and motorway networks.',
  },
  {
    img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Home%20Tyre%20Fitting%20One%20Stop-airanko-kPAsyn08SjxXwLwCVhxre5zM9jWBTs.webp',
    title: '2. Mobile Tyre Fitting at Home or Work',
    desc: 'Convenient, hassle-free tyre replacement scheduled right on your home driveway or workplace parking space.',
    badge: 'Saves you time with zero waiting around at traditional garages.',
  },
  {
    img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Puncture%20Repair%20One%20Stop-airanko-sfmhLvDbSYmhoMprTVOHCcIWEgJvHf.webp',
    title: '3. On-Site Mobile Puncture Repairs',
    desc: 'Safe, BS-standard mobile puncture repairs conducted directly at your location whenever the tyre can be safely saved.',
    badge: 'Honest, repair-first assessment to get you moving safely at minimum cost.',
  },
]

const features = [
  {
    icon: 'receipt_long',
    title: 'Fixed Upfront Quotes',
    desc: 'Clear, transparent emergency pricing confirmed over the phone before our mobile van is dispatched.',
  },
  {
    icon: 'location_on',
    title: 'Complete Location Coverage',
    desc: 'Specialized emergency dispatch servicing every major city, local town, residential street, and motorway hard shoulder.',
  },
  {
    icon: 'tire_repair',
    title: 'All Tyre Brands & Sizes Stocked',
    desc: 'Premium brands (Michelin, Continental, Pirelli) and budget-friendly alternatives carried in every mobile unit for cars, SUVs, and commercial vans.',
  },
  {
    icon: 'engineering',
    title: 'Fully Certified Technicians',
    desc: 'Expert mobile fitters equipped with modern high-capacity mobile fitting equipment for safe, damage-free installation.',
  },
]

const reviews = [
  {
    initials: 'DM',
    name: 'Dave M.',
    text: 'Blew a tyre late at night on a quiet road. The mobile tyre fitter arrived in 25 minutes and swapped it fast. Incredible emergency service!',
  },
  {
    initials: 'SK',
    name: 'Sarah K.',
    text: 'Stuck on my driveway in town before work with a flat tyre. They came out fast, replaced the tyre on-site, and got me to work on time. 5-star service!',
  },
  {
    initials: 'JT',
    name: 'James T.',
    text: 'Transparent upfront pricing over the phone with no hidden costs. The technician arrived quickly and was very professional. Highly recommend!',
  },
]

const steps = [
  {
    title: 'Step 1: Contact Our 24/7 Dispatch Team',
    desc: 'Call us directly or submit your vehicle registration and location for an instant fixed-price quote.',
  },
  {
    title: 'Step 2: Mobile Tyre Van Dispatched',
    desc: 'Our nearest mobile fitting van is dispatched to your exact location in any city, town, or roadside area.',
  },
  {
    title: 'Step 3: Fitted On-Site & Back Driving',
    desc: 'Our certified technician fits and inspects your new tyre on-site so you can get back on the road safely.',
  },
]

const faqs = [
  {
    q: 'How quickly can emergency mobile tyre fitters reach my location?',
    a: 'Our average emergency arrival time is 20 to 30 minutes, whether you are stranded in a busy city center, a local town, on your home driveway, or on a major motorway.',
  },
  {
    q: 'How do you calculate pricing?',
    a: 'We provide completely transparent, upfront fixed pricing over the phone before dispatching a technician, so you know the exact cost before we arrive.',
  },
  {
    q: 'Do you provide mobile tyre fitting in my local area?',
    a: 'Yes! We operate a nationwide fleet covering every city, town, local postcode, and major road network 24 hours a day.',
  },
  {
    q: 'What details do I need when I call for assistance?',
    a: 'To get you back on the road fast, we just need your current location (postcode, town, or landmark), your vehicle registration or tyre size (found on the sidewall, e.g., 205/55 R16), and if you have a locking wheel nut key.',
  },
  {
    q: 'Are your emergency mobile tyre fitting services available 24 hours a day?',
    a: 'Yes, our emergency mobile tyre fitting dispatch line is open 24 hours a day, 365 days a year—including late nights, weekends, and bank holidays.',
  },
]

const _breadcrumbSchema = breadcrumbSchema([
  { name: 'Home', item: SITE_URL },
  { name: '24/7 Emergency Mobile Tyre Fitting', item: `${SITE_URL}${ADS_LANDING_PATH}` },
])

const _serviceSchema = serviceSchema({
  slug: SLUG,
  name: '24/7 Emergency Mobile Tyre Fitting',
  serviceType: 'Emergency Mobile Tyre Fitting',
  description:
    'Rapid 24/7 emergency mobile tyre fitting and puncture repair at the roadside, at home or at work, with fixed upfront quotes confirmed before dispatch.',
  areaServed: { '@type': 'Country', name: 'United Kingdom' },
})

const _faqSchema = faqSchema(faqs)

export default function EmergencyMobileTyreFittingPage() {
  return (
    <div className="text-[#1c1b1b]" style={{ fontFamily: 'var(--font-inter)' }}>
      <JsonLd data={_breadcrumbSchema} />
      <JsonLd data={_serviceSchema} />
      <JsonLd data={_faqSchema} />

      {/* ── STICKY HEADER ────────────────────────────────────────────── */}
      <header className="bg-white sticky top-0 z-50 shadow-sm border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 lg:h-20 flex items-center justify-between gap-3">
          <a href="/" aria-label="One Stop Mobile Tyres 24/7 - Home" className="shrink-0">
            <Image
              src={LOGO_URL}
              alt="One Stop Mobile Tyres 24/7"
              className="h-14 lg:h-16 w-auto"
              width={617}
              height={390}
              sizes="102px"
              loading="eager"
            />
          </a>
          <a
            href={`tel:${PHONE_TEL}`}
            aria-label={`Call 24/7 dispatch on ${PHONE}`}
            className="cta-btn cta-call flex items-center gap-2 bg-[#b70011] hover:bg-red-700 text-white px-3 sm:px-4 py-2 rounded-lg font-bold text-sm whitespace-nowrap shadow-md shadow-red-200"
            style={HEADING_FONT}
          >
            <span aria-hidden="true" data-nosnippet className="cta-ring material-symbols-outlined text-[18px]" style={FILLED_ICON}>
              phone_in_talk
            </span>
            <span className="hidden sm:inline">CALL 24/7 DISPATCH:</span>
            {PHONE}
          </a>
        </div>
      </header>

      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="relative lg:min-h-[640px] flex items-center overflow-hidden">
        <HeroMapBackground />
        {/* The map's desktop gradient only darkens the left side, so centred text needs an even tint. */}
        <div className="hidden lg:block absolute inset-0 bg-[#0f172a]/60" />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-16 py-10 sm:py-14 lg:py-28 text-center [text-shadow:0_1px_3px_rgba(0,0,0,0.9),0_2px_12px_rgba(0,0,0,0.7)]">
          <div className="max-w-4xl mx-auto">
            <div className="lp-badge inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs sm:text-sm font-semibold mb-5 sm:mb-6 shadow-md">
              <span className="w-2.5 h-2.5 rounded-full bg-[#25D366] shrink-0" />
              Vans Active &amp; Dispatched Near You Now
            </div>
            <h1
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-white font-black mb-4 sm:mb-5 leading-[1.1]"
              style={{ ...HEADING_FONT, letterSpacing: '-0.02em' }}
            >
              24/7 Emergency Mobile Tyre Fitting
            </h1>
            <p className="text-white/95 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto mb-6">
              Looking for reliable mobile tyre fitters near you? Rapid 24/7 mobile tyre fitting dispatched to your exact
              location in <strong>20–30 minutes</strong>—covering every city, town, local roadside, and motorway.
            </p>
            <a
              href={`tel:${PHONE_TEL}`}
              className="cta-btn cta-call bg-[#FF4444] hover:bg-red-700 text-white font-black min-h-14 px-5 sm:px-8 py-3 rounded-2xl w-full sm:w-fit sm:mx-auto flex items-center justify-center gap-2.5 text-center text-[15px] sm:text-base tracking-wide border border-white/20 [text-shadow:none] mb-5 sm:mb-6"
              style={HEADING_FONT}
            >
              <span aria-hidden="true" data-nosnippet className="cta-ring material-symbols-outlined text-[22px] leading-none shrink-0" style={FILLED_ICON}>
                call
              </span>
              CALL NOW FOR IMMEDIATE DISPATCH
            </a>
            <ul className="flex flex-col items-center sm:flex-row sm:flex-wrap sm:justify-center gap-2.5">
              {trustBadges.map((badge) => {
                const pill =
                  'inline-flex items-center gap-2 w-fit bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-full px-4 py-2 text-xs sm:text-sm font-semibold'
                const content = (
                  <>
                    <span aria-hidden="true" data-nosnippet className={`material-symbols-outlined text-[16px] shrink-0 ${badge.iconClass}`} style={FILLED_ICON}>
                      {badge.icon}
                    </span>
                    {badge.text}
                  </>
                )
                return (
                  <li key={badge.text}>
                    {badge.href ? (
                      <a href={badge.href} target="_blank" rel="noopener noreferrer" className={`${pill} hover:bg-white/20 transition-colors`}>
                        {content}
                      </a>
                    ) : (
                      <span className={pill}>{content}</span>
                    )}
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </section>

      {/* ── INSTANT QUOTE ────────────────────────────────────────────── */}
      <HeroQuoteSection
        area="Emergency landing page"
        title="Get a 60-Second Instant Quote"
        subtitle="Prefer an instant online quote? Fill out the details below for a rapid response."
        submitLabel="GET INSTANT QUOTE NOW"
        note="Your details are safe. Zero obligation quote sent in seconds."
      />

      {/* ── OUR KEY SERVICES ─────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-[32px] font-bold text-slate-900 mb-3 leading-tight" style={H2_STYLE}>
              Fast &amp; Reliable Mobile Tyre Solutions
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-base">
              We bring fully equipped mobile tyre fitting workshops directly to your vehicle anywhere across the UK—in
              every city, town, roadside, or driveway.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all overflow-hidden border-b-4 border-[#b70011]"
              >
                <div className="relative h-44 sm:h-52 overflow-hidden">
                  <Image
                    src={service.img}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
                <div className="p-5 sm:p-6">
                  <h3 className="text-base sm:text-lg font-semibold mb-2 text-[#0f172a]" style={HEADING_FONT}>
                    {service.title}
                  </h3>
                  <p className="text-slate-600 text-base leading-relaxed mb-3">{service.desc}</p>
                  <p className="text-[#b70011] text-sm font-bold leading-snug">{service.badge}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY DRIVERS CHOOSE US ────────────────────────────────────── */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 sm:mb-14">
            <h2 className="text-2xl sm:text-[32px] font-bold text-[#0f172a] leading-tight" style={H2_STYLE}>
              Designed for Speed, Safety, and Transparency
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-x-8 sm:gap-y-10">
            {features.map((feature) => (
              <div key={feature.title} className="flex items-start gap-4">
                <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center shrink-0">
                  <span aria-hidden="true" data-nosnippet className="material-symbols-outlined text-[#b70011]">
                    {feature.icon}
                  </span>
                </div>
                <div>
                  <h3 className="font-bold text-[#0f172a] text-base mb-1">{feature.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CUSTOMER REVIEWS ─────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 sm:mb-14">
            <h2 className="text-2xl sm:text-[32px] font-bold text-[#0f172a] mb-4" style={H2_STYLE}>
              What Our Customers Say
            </h2>
            <p className="text-base">
              <a
                href={GOOGLE_REVIEWS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#b70011] font-bold underline hover:text-red-700 transition-colors"
              >
                5.0 Stars Throughout Across 1,200+ Verified Driver Reviews
              </a>
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {reviews.map((review) => (
              <figure key={review.name} className="bg-white p-5 sm:p-6 rounded-2xl shadow-md border border-slate-200 flex flex-col gap-4">
                <div className="flex text-yellow-400 gap-0.5" role="img" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} aria-hidden="true" data-nosnippet className="material-symbols-outlined text-[16px]" style={FILLED_ICON}>
                      star
                    </span>
                  ))}
                </div>
                <blockquote className="text-slate-600 text-base leading-relaxed flex-1">&ldquo;{review.text}&rdquo;</blockquote>
                <figcaption className="flex items-center gap-3 pt-3 border-t border-slate-100">
                  <span aria-hidden="true" className="w-9 h-9 bg-[#0f172a] rounded-full flex items-center justify-center text-xs font-bold text-white shrink-0">
                    {review.initials}
                  </span>
                  <span className="font-bold text-sm text-[#0f172a]">{review.name}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-[#0f172a] text-white relative overflow-hidden">
        <div
          className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-[32px] font-bold" style={H2_STYLE}>
              3 Simple Steps to Get Back on the Road
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 relative">
            {steps.map((step, idx) => (
              <div key={step.title} className="relative text-center lg:text-left">
                <div aria-hidden="true" className="w-14 h-14 bg-[#FF4444] rounded-2xl flex items-center justify-center mx-auto lg:mx-0 mb-5 shadow-xl">
                  <span className="text-white font-black text-xl" style={HEADING_FONT}>
                    {idx + 1}
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-3" style={HEADING_FONT}>
                  {step.title}
                </h3>
                <p className="text-slate-400 text-base leading-relaxed">{step.desc}</p>
                {idx < steps.length - 1 && (
                  <span aria-hidden="true" data-nosnippet className="hidden lg:block absolute top-7 right-0 text-[#FF4444] material-symbols-outlined text-3xl">
                    trending_flat
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-slate-50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-[32px] font-bold text-[#0f172a]" style={H2_STYLE}>
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-3 sm:space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="group bg-white p-4 sm:p-6 rounded-xl border border-slate-200 shadow-sm open:shadow-md transition-all"
              >
                <summary className="list-none [&::-webkit-details-marker]:hidden flex justify-between items-center cursor-pointer font-bold text-base sm:text-lg text-[#0f172a] gap-3">
                  <h3>{faq.q}</h3>
                  <span aria-hidden="true" data-nosnippet className="material-symbols-outlined group-open:rotate-180 transition-transform text-[#b70011] flex-shrink-0 text-xl sm:text-2xl">
                    expand_more
                  </span>
                </summary>
                <p className="mt-3 sm:mt-4 text-slate-600 leading-relaxed text-base">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMPLIANCE FOOTER ────────────────────────────────────────── */}
      <footer className="bg-[#0f172a] text-white py-10 sm:py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-5">
            <strong className="text-white">ONE STOP MOBILE TYRES LTD</strong> — Professional 24/7 Emergency Mobile Tyre
            Replacement Service.
          </p>
          <nav aria-label="Legal and contact" className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-slate-400 text-sm font-medium mb-6">
            <a href="/privacy-policy" className="hover:text-[#FF4444] transition-colors">Privacy Policy</a>
            <span aria-hidden="true">|</span>
            <a href="/terms" className="hover:text-[#FF4444] transition-colors">Terms of Service</a>
            <span aria-hidden="true">|</span>
            <a href="/contact" className="hover:text-[#FF4444] transition-colors">Contact Us</a>
          </nav>
          <div className="pt-6 border-t border-white/5">
            <p className="text-slate-500 text-[11px] sm:text-xs">
              Company Registration: ONE STOP MOBILE TYRES LTD | All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
