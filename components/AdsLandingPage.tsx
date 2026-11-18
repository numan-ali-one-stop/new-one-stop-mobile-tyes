import Image from 'next/image'
import type { ReactNode } from 'react'
import JsonLd from '@/components/JsonLd'
import HeroMapBackground from '@/components/HeroMapBackground'
import HeroQuoteSection from '@/components/HeroQuoteSection'
import HowItWorksSteps from '@/components/HowItWorksSteps'
import { PHONE, PHONE_TEL } from '@/lib/constants'
import { breadcrumbSchema, faqSchema, serviceSchema, SITE_URL } from '@/lib/schema'

/**
 * Google Ads / SEO landing page layout, built from the site's own section styles. It has its own
 * sticky call header and compliance footer: the site Header and Footer hide themselves on every
 * path in ADS_LANDING_PATHS (lib/constants.ts), so add new landing pages there too.
 * The site's mobile Call / WhatsApp bar and desktop floating buttons still come from the root layout.
 */

/** Same link as "View all Google reviews" in components/GoogleReviewsSection.tsx. */
const GOOGLE_REVIEWS_URL = 'https://share.google/bejdYHzU10lFRVv4E'
const LOGO_URL =
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/One-Stop%20Loog-airanko-Qpv1QvladNLpRhg8X3Hs6SzyydzFMq.webp'
const HEADING_FONT = { fontFamily: 'var(--font-work-sans)' }
const H2_STYLE = { ...HEADING_FONT, letterSpacing: '-0.01em' }
const FILLED_ICON = { fontVariationSettings: "'FILL' 1" }

export interface LandingCard {
  img: string
  title: string
  desc: string
  badge: string
}

export interface LandingFeature {
  icon: string
  title: string
  desc: string
}

export interface LandingReview {
  initials: string
  name: string
  text: string
}

export interface LandingFaq {
  q: string
  a: string
}

export interface AdsLandingPageProps {
  /** Path without the leading slash, e.g. "mobile-tyre-replacement". */
  slug: string
  h1: string
  /** Hero paragraph under the H1. */
  intro: ReactNode
  /** Pill above the H1. */
  heroBadge?: string
  ctaLabel?: string
  trustBadges?: { icon: string; iconClass: string; text: string; href?: string }[]
  /** Sent with quote-form submissions so leads show which landing page they came from. */
  quoteArea: string
  servicesHeading: string
  servicesIntro: string
  services: LandingCard[]
  featuresHeading: string
  features: LandingFeature[]
  reviews: LandingReview[]
  stepsHeading: string
  faqs: LandingFaq[]
  schema: { name: string; serviceType: string; description: string }
  footerTagline: string
}

const DEFAULT_TRUST_BADGES = [
  { icon: 'star', iconClass: 'text-yellow-400', text: '5.0 Stars Throughout (1,200+ Driver Reviews)', href: GOOGLE_REVIEWS_URL },
  { icon: 'timer', iconClass: 'text-[#FF4444]', text: '20–30 Minute Rapid Arrival' },
  { icon: 'local_shipping', iconClass: 'text-[#FF4444]', text: '24/7 Nationwide Coverage' },
]

export default function AdsLandingPage({
  slug,
  h1,
  intro,
  heroBadge = 'Vans Active & Dispatched Near You Now',
  ctaLabel = 'CALL NOW FOR IMMEDIATE DISPATCH',
  trustBadges = DEFAULT_TRUST_BADGES,
  quoteArea,
  servicesHeading,
  servicesIntro,
  services,
  featuresHeading,
  features,
  reviews,
  stepsHeading,
  faqs,
  schema,
  footerTagline,
}: AdsLandingPageProps) {
  const _breadcrumbSchema = breadcrumbSchema([
    { name: 'Home', item: SITE_URL },
    { name: h1, item: `${SITE_URL}/${slug}` },
  ])
  const _serviceSchema = serviceSchema({
    slug,
    name: schema.name,
    serviceType: schema.serviceType,
    description: schema.description,
    areaServed: { '@type': 'Country', name: 'United Kingdom' },
  })
  const _faqSchema = faqSchema(faqs)

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
              {heroBadge}
            </div>
            <h1
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-white font-black mb-4 sm:mb-5 leading-[1.1]"
              style={{ ...HEADING_FONT, letterSpacing: '-0.02em' }}
            >
              {h1}
            </h1>
            <p className="text-white/95 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto mb-6">{intro}</p>
            <a
              href={`tel:${PHONE_TEL}`}
              className="cta-btn cta-call bg-[#FF4444] hover:bg-red-700 text-white font-black min-h-14 px-5 sm:px-8 py-3 rounded-2xl w-full sm:w-fit sm:mx-auto flex items-center justify-center gap-2.5 text-center text-[15px] sm:text-base tracking-wide border border-white/20 [text-shadow:none] mb-5 sm:mb-6"
              style={HEADING_FONT}
            >
              <span aria-hidden="true" data-nosnippet className="cta-ring material-symbols-outlined text-[22px] leading-none shrink-0" style={FILLED_ICON}>
                call
              </span>
              {ctaLabel}
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
        area={quoteArea}
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
              {servicesHeading}
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-base">{servicesIntro}</p>
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
              {featuresHeading}
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
      <HowItWorksSteps heading={stepsHeading} />

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
      <footer className="bg-[#0f172a] text-white py-4 sm:py-5 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-2">
            <strong className="text-white">ONE STOP MOBILE TYRES LTD</strong> — {footerTagline}
          </p>
          <nav aria-label="Legal and contact" className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-slate-400 text-xs sm:text-sm font-medium mb-2">
            <a href="/privacy-policy" className="hover:text-[#FF4444] transition-colors">Privacy Policy</a>
            <span aria-hidden="true">|</span>
            <a href="/terms" className="hover:text-[#FF4444] transition-colors">Terms of Service</a>
            <span aria-hidden="true">|</span>
            <a href="/contact" className="hover:text-[#FF4444] transition-colors">Contact Us</a>
          </nav>
          <div className="pt-2 border-t border-white/5">
            <p className="text-slate-500 text-[11px] sm:text-xs">
              Company Registration: ONE STOP MOBILE TYRES LTD | All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
