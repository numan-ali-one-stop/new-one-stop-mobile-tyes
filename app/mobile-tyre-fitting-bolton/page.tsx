import Image from 'next/image'
import BrandCarousel from '@/components/BrandCarousel'
import WhyChooseGrid from '@/components/WhyChooseGrid'
import CityFaq from '@/components/CityFaq'
import NearbyAreas from '@/components/NearbyAreas'
import ServiceAreasMap from '@/components/ServiceAreasMap'
import ReviewsCarousel from '@/components/ReviewsCarousel'
import JsonLd from '@/components/JsonLd'
import LocalAreaInfo from '@/components/LocalAreaInfo'
import { pageServiceSchema, pageOrganizationSchema, pageWebsiteSchema, automotiveBusinessSchema } from '@/lib/schema'
import { buildMetadata } from '@/lib/seo'
import HeroMapBackground from '@/components/HeroMapBackground'
import HeroCtaButtons from '@/components/HeroCtaButtons'
import HeroQuoteSection from '@/components/HeroQuoteSection'
import HeroPostcodes from '@/components/HeroPostcodes'
import HeroBadge from '@/components/HeroBadge'

const _serviceSchema = pageServiceSchema({
  slug: 'mobile-tyre-fitting-bolton',
  alternateName: '24/7 Mobile Tyre Fitting Bolton',
  areaServed: 'Bolton, Greater Manchester',
  description:
    'Need mobile tyre fitting in Bolton? Get 24/7 emergency tyre replacement and puncture repair at home, work or roadside. Call for a quote.',
})

const _organizationSchema = pageOrganizationSchema('mobile-tyre-fitting-bolton')
const _websiteSchema = pageWebsiteSchema('mobile-tyre-fitting-bolton')
const _automotiveBusinessSchema = automotiveBusinessSchema({
  slug: 'mobile-tyre-fitting-bolton',
  image: 'https://onestoptyres247.co.uk/images/tyres-fitting-anywhere.webp',
  addressLocality: 'Bolton',
})

export const metadata = buildMetadata({
  title: 'Mobile Tyre Fitting Bolton | 24/7 Tyre Replacement',
  description:
    'Need mobile tyre fitting in Bolton? Get 24/7 emergency tyre replacement and puncture repair at home, work or roadside. Call for a quote.',
  path: '/mobile-tyre-fitting-bolton',
})

function FeatureItem({ icon, title, desc }: { icon: string; title: string; desc: string }) {
  return (
    <li className="flex items-center gap-4 bg-slate-50 p-4 rounded-xl border-l-4 border-[#b70011]">
      <div className="w-10 h-10 bg-[#b70011]/10 rounded-lg flex items-center justify-center shrink-0">
        <span aria-hidden="true" data-nosnippet className="material-symbols-outlined text-[#b70011] font-bold">{icon}</span>
      </div>
      <div>
        <span className="font-bold text-[#0f172a] block">{title}</span>
        <p className="text-sm text-slate-500">{desc}</p>
      </div>
    </li>
  )
}

export default function BoltonPage() {
  return (
    <div className="bg-[#fcf9f8] text-[#1c1b1b] font-body-md">
      <JsonLd data={_serviceSchema} className="schemantra" />
      <JsonLd data={_organizationSchema} />
      <JsonLd data={_websiteSchema} />
      <JsonLd data={_automotiveBusinessSchema} />
      <main>

        {/* ── 1. HERO ───────────────────────────────────────── */}
        <section className="relative lg:min-h-[600px] flex items-center justify-start text-left px-4 sm:px-8 lg:px-16 overflow-hidden">
          <HeroMapBackground />

          <div className="relative z-10 w-full max-w-2xl py-10 sm:py-14 lg:py-20 [text-shadow:0_1px_3px_rgba(0,0,0,0.9),0_2px_12px_rgba(0,0,0,0.7)] lg:[text-shadow:none]">

            <div>
              <HeroBadge>24/7 Emergency Mobile Tyre Service</HeroBadge>
            </div>
            <h1
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-white mb-3 sm:mb-4 leading-[1.1] font-black text-balance"
              style={{ fontFamily: 'var(--font-work-sans)', letterSpacing: '-0.02em' }}
            >
              24/7 Mobile Tyre Fitting Bolton
            </h1>

            <p className="text-white/95 lg:text-white/80 text-base leading-relaxed mb-5 sm:mb-6">
              Flat, punctured or damaged tyre? Our mobile tyre fitting in Bolton brings emergency tyre replacement and same-day fitting to you.
            </p>

            <HeroPostcodes slug="bolton" />

            {/* Trust bullets — hidden for now
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 mb-6">
              {[
                '24/7 Emergency Mobile Tyre Fitting',
                'Same-Day Tyre Fitting, Subject to Availability',
                'Emergency Tyre Replacement',
                'Mobile Puncture Assessment and Repair',
                'Home, Workplace and Suitable Roadside Service',
                'Premium, Mid-Range and Budget Tyre Options',
                'Card, Cash and Contactless Payments Accepted',
              ].map((item) => (
                <div key={item} className="flex items-center gap-2.5 text-white lg:text-white/90">
                  <span aria-hidden="true" data-nosnippet
                    className="material-symbols-outlined text-green-400 shrink-0"
                    style={{ fontSize: '20px', fontVariationSettings: "'FILL' 1" }}
                  >check_circle</span>
                  <span className="text-base font-semibold leading-snug">{item}</span>
                </div>
              ))}
            </div>
            */}

            {/* Google Rating Badge */}
            <a href="https://maps.app.goo.gl/tqGMogzsNNn8EXjH8" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2.5 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-full px-4 py-2 mb-4">
              <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              <div className="flex text-yellow-400 gap-px">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span aria-hidden="true" data-nosnippet key={i} className="material-symbols-outlined text-[13px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                ))}
              </div>
              <span className="font-bold text-sm">5.0</span>
              <span className="text-white/80 lg:text-white/60 text-xs font-medium">Rated By Drivers Across Bolton &amp; Greater Manchester</span>
            </a>

            {/* CTAs */}
            <HeroCtaButtons />

          </div>
        </section>

        <HeroQuoteSection area="Bolton" />

        {/* ── 2. REVIEWS ────────────────────────────────────── */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10 sm:mb-14">
              <span className="text-[#b70011] font-bold uppercase tracking-widest text-sm mb-3 block">
                Google Reviews
              </span>
              <h2
                className="text-2xl sm:text-[32px] font-bold text-[#0f172a] mb-4"
                style={{ fontFamily: 'var(--font-work-sans)', letterSpacing: '-0.01em' }}
              >
                What Our Customers Say
              </h2>
              <a href="https://maps.app.goo.gl/tqGMogzsNNn8EXjH8" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-white border border-slate-200 shadow-sm rounded-full px-5 py-2.5">
                <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" aria-label="Google">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                <div className="flex text-yellow-400 gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span aria-hidden="true" data-nosnippet key={i} className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  ))}
                </div>
                <span className="text-sm font-bold text-[#0f172a]">5 / 5</span>
                <span className="text-xs text-slate-400 font-medium hidden sm:inline">Based on Google Reviews</span>
              </a>
            </div>
            <ReviewsCarousel offset={2} />
            <div className="text-center mt-8">
              <a
                href="https://share.google/bejdYHzU10lFRVv4E"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[#b70011] font-bold text-sm hover:underline"
              >
                View all Google reviews
                <span aria-hidden="true" data-nosnippet className="material-symbols-outlined text-[16px]">open_in_new</span>
              </a>
            </div>
          </div>
        </section>

        {/* ── 3. SERVICES ───────────────────────────────────── */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10 sm:mb-16">
              <span className="text-[#b70011] font-bold uppercase tracking-widest text-sm mb-2 block">
                What We Do
              </span>
              <h2
                className="text-2xl sm:text-[32px] font-bold text-slate-900 mb-3 leading-tight"
                style={{ fontFamily: 'var(--font-work-sans)', letterSpacing: '-0.01em' }}
              >
                Our Mobile Tyre Services
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto text-base">
                A tyre problem can disrupt your plans whether you&apos;re commuting, travelling for work or returning home late at night. Our mobile tyre fitting service brings the necessary equipment and suitable replacement tyres to your vehicle, provided the location is safe and accessible.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {[
                {
                  img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Emergency%20Tyre%20Fitting%20one%20Stop-airanko-gsjvsGamoet8drKwCMHYr6LH5Ni6ZI.webp',
                  title: 'Mobile Tyre Fitting',
                  desc: 'Have suitable replacement tyres fitted at your home, workplace or another accessible location.',
                  badge: 'FITTING WITHOUT THE GARAGE QUEUE',
                  href: '/mobile-tyre-fitting',
                },
                {
                  img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Home%20Tyre%20Fitting%20One%20Stop-airanko-kPAsyn08SjxXwLwCVhxre5zM9jWBTs.webp',
                  title: 'Emergency Tyre Replacement',
                  desc: 'Arrange a replacement when a tyre has suffered a blowout, serious damage or excessive wear.',
                  badge: 'REPLACEMENT WHEN DAMAGE IS TOO SERIOUS',
                  href: '/home-tyre-fitting',
                },
                {
                  img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Puncture%20Repair%20One%20Stop-airanko-sfmhLvDbSYmhoMprTVOHCcIWEgJvHf.webp',
                  title: 'Mobile Puncture Repair',
                  desc: 'We inspect punctured tyres and repair them where the damage and tyre condition meet the applicable safety requirements.',
                  badge: 'REPAIR BEFORE REPLACEMENT',
                  href: '/puncture-repair-Greater-manchester',
                },
                {
                  img: '/images/tyre-fitting-at-home.webp',
                  title: 'Home Tyre Fitting',
                  desc: 'Arrange tyre replacement at home without needing to drive to a tyre centre.',
                  badge: 'AT YOUR DOOR',
                  href: '/home-tyre-fitting',
                },
                {
                  img: '/images/professional-mobile-tyre-fitting.webp',
                  title: 'Same-Day Tyre Fitting',
                  desc: 'Need a tyre fitted today? Contact us to check technician availability and whether the required tyre is in stock.',
                  badge: 'SUBJECT TO AVAILABILITY',
                  href: '/mobile-tyre-fitting',
                },
                {
                  img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/One%20Stop%20Jumpstart%20image-airanko-cXmOrXcdtaIBMNQOMCIOiPj1C290RG.webp',
                  title: 'Jump-Start Assistance',
                  desc: 'If your car also has a flat battery, ask about our available jump-start service.',
                  badge: 'HELP WHEN YOUR CAR WILL NOT START',
                  href: '/jump-start',
                },
                {
                  img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Tyre%20pressure%20monitor-airanko-sjz7PL2Pv4N9jlPWtz5Wa1q8XO0FgP.webp',
                  title: 'TPMS Checks and Reset',
                  desc: 'Tyre pressure monitoring system checks or resets may be available where applicable after tyre work.',
                  badge: 'KEEP YOUR TYRE WARNING SYSTEM WORKING',
                  href: '/tpms-reset',
                },
                {
                  img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Locking%20nut%20removal-airanko%20%281%29-ONBmqaZHMozU0jjrxbPe5J7C4zRQkS.webp',
                  title: 'Locking Wheel Nut Removal',
                  desc: 'Contact us if a missing or damaged locking wheel nut key is preventing tyre replacement. We can confirm whether assistance is available for your vehicle.',
                  badge: 'WHEN THE LOCKING KEY IS LOST OR DAMAGED',
                  href: '/locking-nut-removal',
                },
              ].map((card) => (
                <a
                  key={card.title}
                  href={card.href}
                  className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all overflow-hidden border-b-4 border-[#b70011]"
                >
                  <div className="relative h-44 sm:h-52 overflow-hidden">
                    <Image
                      src={card.img}
                      alt={card.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <span className="absolute top-3 left-3 text-xs font-bold text-white bg-[#b70011] px-3 py-1 rounded-full">
                      {card.badge}
                    </span>
                  </div>
                  <div className="p-5 sm:p-6">
                    <h3
                      className="text-base sm:text-lg font-semibold mb-2 text-[#0f172a]"
                      style={{ fontFamily: 'var(--font-work-sans)' }}
                    >
                      {card.title}
                    </h3>
                    <p className="text-slate-600 text-base leading-relaxed mb-3">{card.desc}</p>
                    <div className="flex items-center justify-end">
                      <span aria-hidden="true" data-nosnippet className="material-symbols-outlined text-slate-400 group-hover:text-[#b70011] group-hover:translate-x-1 transition-all">
                        arrow_forward
                      </span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
            <div className="mt-10 sm:mt-12 bg-[#0f172a] rounded-2xl sm:rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row flex-wrap items-center justify-between gap-5 shadow-2xl text-center sm:text-left">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">Need Tyre Help in Bolton?</h3>
                <p className="text-slate-400 text-base">
                  Call or WhatsApp with your vehicle registration, tyre size and exact location. We can check suitable tyre options, explain the price and give you an expected arrival time.
                </p>
              </div>
              <a
                href="tel:+447759708646"
                className="cta-btn cta-call bg-[#dc2626] text-white font-black px-8 py-4 rounded-xl text-xl sm:text-2xl hover:scale-105 transition-transform shadow-lg shadow-red-900/20 whitespace-nowrap"
                style={{ fontFamily: 'var(--font-work-sans)' }}
              >
                07759 708 646
              </a>
            </div>
          </div>
        </section>

        {/* ── 4. EXPERT SECTION ─────────────────────────────── */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
            <div className="w-full lg:w-1/2 relative pb-8 sm:pb-10">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="relative z-10 rounded-2xl sm:rounded-3xl shadow-2xl border-4 sm:border-8 border-slate-50 w-full object-cover"
                src="/images/tyre-fitting-in-emergency.webp"
                alt="Mobile tyre fitting technician"
                width={800}
                height={600}
                loading="lazy"
                decoding="async"
              />
              <div className="absolute bottom-2 right-2 sm:-bottom-2 sm:-right-2 bg-white p-4 sm:p-5 rounded-xl sm:rounded-2xl shadow-2xl z-20 max-w-[165px] sm:max-w-[195px] border border-slate-100">
                <div className="flex text-yellow-400 gap-0.5 mb-1.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span aria-hidden="true" data-nosnippet key={i} className="material-symbols-outlined" style={{ fontSize: '16px', fontVariationSettings: "'FILL' 1" }}>star</span>
                  ))}
                </div>
                <div className="text-[#0f172a] font-black text-2xl sm:text-3xl leading-none mb-1">5.0 / 5.0</div>
                <div className="text-slate-500 text-[11px] font-semibold uppercase tracking-wide">Google Rating</div>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <span className="text-[#b70011] font-bold uppercase tracking-widest text-sm mb-3 block">
                What You Can Expect
              </span>
              <h2
                className="text-2xl sm:text-4xl lg:text-5xl text-[#0f172a] mb-5 sm:mb-8 leading-tight font-bold"
                style={{ fontFamily: 'var(--font-work-sans)' }}
              >
                Professional Mobile Tyre Fitting in Bolton
              </h2>
              <p className="text-slate-600 mb-4 sm:mb-6 leading-relaxed text-base sm:text-lg">
                A tyre problem can disrupt your plans whether you&apos;re commuting, travelling for work or returning home late at night. Our mobile tyre fitting service brings the necessary equipment and suitable replacement tyres to your vehicle, provided the location is safe and accessible.
              </p>
              <p className="text-slate-600 mb-6 sm:mb-8 leading-relaxed text-base sm:text-lg">
                One Stop Tyres 247 helps drivers across Bolton arrange mobile tyre fitting, emergency tyre replacement and puncture assessments. Instead of driving on a damaged tyre, you can contact our team and find out whether a technician can attend your location. We cover Bolton town centre and surrounding areas, including Farnworth, Horwich, Westhoughton, Kearsley and Little Lever. We also assist drivers in nearby neighbourhoods and around suitable locations on major routes such as the A666 and M61, subject to safe access.
              </p>
              <ul className="space-y-4 sm:space-y-5">
                <FeatureItem
                  icon="bolt"
                  title="Same Day Mobile Tyre Fitting"
                  desc="Need the problem resolved today? Our same day mobile tyre fitting service is available for many common tyre sizes, helping you avoid delaying an important journey or waiting for another garage appointment."
                />
                <FeatureItem
                  icon="engineering"
                  title="Emergency Mobile Tyre Fitting"
                  desc="A sudden blowout or serious tyre failure can leave your vehicle unsafe to continue. Our emergency mobile tyre fitting service operates around the clock for drivers who need urgent assistance across Bolton."
                />
                <FeatureItem
                  icon="sell"
                  title="Mobile Tyre Replacement Service"
                  desc="When a damaged or worn tyre needs changing, our mobile tyre replacement service allows the replacement to be supplied and professionally fitted at a suitable location without a separate garage visit."
                />
              </ul>
            </div>
          </div>
        </section>

        {/* ── 5. WHY BOLTON DRIVERS CHOOSE US ──────────────── */}
        <WhyChooseGrid
          heading="Why Choose Our Mobile Tyre Fitting Service?"
          intro=""
          items={[
            { icon: 'bolt', title: '24/7 Emergency Availability', desc: 'Tyre problems do not always happen during normal garage hours. Contact us any time to check availability for emergency tyre fitting in Bolton, including evenings, weekends and bank holidays.' },
            { icon: 'home_repair_service', title: 'Convenient On-Site Fitting', desc: 'Where the location is suitable, our technicians can attend your home, workplace, car park or a safe roadside position.' },
            { icon: 'sell', title: 'Clear Pricing Before Work Begins', desc: 'The cost depends on your tyre specification, replacement option, location and service requirements. We explain the available options and confirm the price before proceeding.' },
            { icon: 'tire_repair', title: 'Tyre Options for Different Budgets', desc: 'We can check premium, mid-range and budget tyre options, subject to the required specification and stock availability.' },
            { icon: 'engineering', title: 'Professional Tyre Assessment', desc: 'Not every puncture requires a new tyre. Our technician will assess the damage and determine whether a safe repair is possible or replacement is necessary.' },
          ]}
        />

        {/* ── COVERAGE ACROSS BOLTON ─────────────────────────── */}
        <section className="py-10 sm:py-14 px-4 sm:px-6 bg-white">
          <div className="max-w-3xl mx-auto text-center">
            <h2
              className="text-xl sm:text-2xl text-[#0f172a] mb-3 font-bold"
              style={{ fontFamily: 'var(--font-work-sans)' }}
            >
              Coverage Across Bolton
            </h2>
            <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
              We serve Bolton town centre and surrounding areas, including Horwich, Farnworth, Westhoughton, Blackrod, Kearsley and Little Lever. Contact us with your postcode to confirm coverage and the estimated arrival time.
            </p>
          </div>
        </section>

        {/* ── 6. HOW IT WORKS ──────────────────────────────────── */}
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
              <span className="text-[#FF4444] font-bold uppercase tracking-widest text-sm mb-3 block">
                Step-by-Step
              </span>
              <h2
                className="text-2xl sm:text-[32px] font-bold"
                style={{ fontFamily: 'var(--font-work-sans)', letterSpacing: '-0.01em' }}
              >
                How Mobile Tyre Fitting in Bolton Works
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative">
              {[
                {
                  n: '1',
                  title: 'Contact Our Team',
                  desc: 'Call 07759 708 646 or 0161 399 5851 and explain what has happened to your tyre.',
                },
                {
                  n: '2',
                  title: 'Share Your Vehicle Details',
                  desc: 'Provide your vehicle registration, tyre size if known, and exact location. Tell us whether the tyre is punctured, flat, damaged or completely unusable.',
                },
                {
                  n: '3',
                  title: 'Check Tyre Options and Pricing',
                  desc: 'We check the suitable tyre options and availability, explain the cost and provide an estimated arrival time before arranging the visit.',
                },
                {
                  n: '4',
                  title: 'Get Your Tyre Fitted',
                  desc: 'The technician attends the agreed location and completes the work where it is safe and suitable. Tyre pressure and TPMS checks can be carried out where applicable.',
                },
              ].map((step, idx) => (
                <div key={step.n} className="relative text-center lg:text-left">
                  <div className="w-14 h-14 bg-[#FF4444] rounded-2xl flex items-center justify-center mx-auto lg:mx-0 mb-5 shadow-xl">
                    <span
                      className="text-white font-black text-xl"
                      style={{ fontFamily: 'var(--font-work-sans)' }}
                    >
                      {step.n}
                    </span>
                  </div>
                  <h3
                    className="text-lg sm:text-xl font-bold text-white mb-3"
                    style={{ fontFamily: 'var(--font-work-sans)' }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-slate-400 text-base leading-relaxed">{step.desc}</p>
                  {idx < 3 && (
                    <span aria-hidden="true" data-nosnippet className="hidden lg:block absolute top-7 -right-3 text-[#FF4444] material-symbols-outlined text-3xl">
                      trending_flat
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 7. MOBILE TYRE REPLACEMENT ────────────────────── */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2
              className="text-2xl sm:text-[32px] font-bold text-slate-900 mb-4 leading-tight"
              style={{ fontFamily: 'var(--font-work-sans)', letterSpacing: '-0.01em' }}
            >
              Mobile Tyre Replacement Across Bolton
            </h2>
            <p className="text-slate-600 mb-4 leading-relaxed text-base sm:text-lg">
              A tyre with serious sidewall damage, a blowout or excessive wear may need replacing rather than repairing. Our mobile tyre replacement service helps Bolton drivers arrange a suitable replacement at their location.
            </p>
            <p className="text-slate-600 mb-4 leading-relaxed text-base sm:text-lg">
              We cover Bolton town centre, residential streets and surrounding areas, including Farnworth, Horwich, Westhoughton, Kearsley, Little Lever and Blackrod.
            </p>
            <p className="text-slate-600 mb-4 leading-relaxed text-base sm:text-lg">
              Before dispatch, share your vehicle registration or tyre size so we can check the correct specification. We can discuss available premium, mid-range and budget options, depending on your requirements and current stock.
            </p>
            <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
              If the tyre has a puncture, our technician will assess whether it is suitable for repair. A repair will only be carried out when the tyre meets the applicable safety requirements.
            </p>
          </div>
        </section>

        {/* ── 8. EMERGENCY MOBILE TYRE FITTING ──────────────── */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 bg-slate-50">
          <div className="max-w-3xl mx-auto">
            <h2
              className="text-2xl sm:text-[32px] font-bold text-slate-900 mb-4 leading-tight"
              style={{ fontFamily: 'var(--font-work-sans)', letterSpacing: '-0.01em' }}
            >
              Emergency Mobile Tyre Fitting in Bolton
            </h2>
            <p className="text-slate-600 mb-4 leading-relaxed text-base sm:text-lg">
              A sudden puncture or blowout can leave you unable to continue your journey safely. Our 24/7 emergency mobile tyre service helps drivers in Bolton check the available options when a tyre problem needs urgent attention.
            </p>
            <p className="text-slate-600 mb-4 leading-relaxed text-base sm:text-lg">
              We can attend suitable locations across Bolton and nearby areas, subject to technician availability, traffic, tyre stock and safe access. When you call, provide your exact location so we can give you a realistic estimated arrival time.
            </p>
            <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
              If your vehicle breaks down on a motorway, follow the relevant motorway safety procedures. Do not attempt to change a tyre on a live carriageway or in an unsafe position. Contact the appropriate motorway or breakdown assistance service where necessary. Call 07759 708 646 to discuss your tyre problem and check availability.
            </p>
          </div>
        </section>

        {/* ── 9. BRAND CAROUSEL ─────────────────────────────── */}
        <BrandCarousel />

        {/* ── NEARBY AREAS ───────────────────────────────────── */}
        <NearbyAreas currentSlug="bolton" />

        {/* ── SERVICE AREAS MAP ──────────────────────────────── */}
        <ServiceAreasMap />

        {/* ── LOCAL AREA DETAILS ─────────────────────────────── */}
        <LocalAreaInfo currentSlug="bolton" />

        {/* ── 10. FAQ ────────────────────────────────────────── */}
        <CityFaq
          canonical="https://onestoptyres247.co.uk/mobile-tyre-fitting-bolton"
          city="Bolton"
          faqs={[
            { q: 'How much does mobile tyre fitting cost in Bolton?', a: 'The price depends on your tyre size, the type and brand of tyre, the work required, your location and the time of the call-out. Contact us with your vehicle registration or tyre details for a quote. Confirm the total price before authorising the work.' },
            { q: 'How quickly can a mobile tyre fitter reach me in Bolton?', a: 'The stated response target across Bolton is around 20–30 minutes, but this is an estimate rather than a guarantee. Traffic, your exact location, technician availability and the tyre required can affect arrival time. Call us for an updated estimate before booking.' },
            { q: 'Can you replace my tyre today?', a: 'Same-day tyre fitting may be available, depending on technician availability and whether a suitable tyre is in stock. Contact us with your vehicle details and location to check the options.' },
            { q: 'What should I do if I have a flat tyre and no spare?', a: 'Avoid driving on a flat or seriously damaged tyre, as this can damage the wheel and create a safety risk. Contact us with your location and vehicle details. We can check whether a mobile repair or replacement is available for your vehicle.' },
            { q: "Can you repair my puncture, or will I need a new tyre?", a: "That depends on the location and extent of the damage and the tyre's condition. Some punctures can be repaired safely, while sidewall damage and other unsuitable damage may require replacement. Our technician will assess the tyre against the applicable safety requirements before recommending the appropriate option." },
            { q: 'Do you provide mobile tyre fitting at home or work?', a: 'Yes. We can arrange fitting at your home or workplace where there is suitable access and enough safe working space. Provide the address and parking details when booking so we can confirm suitability.' },
            { q: 'Are you available at night, on Sundays and on bank holidays?', a: 'Our service operates 24/7 for emergency tyre assistance, including nights, weekends and bank holidays. Actual attendance depends on technician availability, the tyre required and your location, so contact us to confirm before relying on a specific arrival time.' },
            { q: 'Can you fit a tyre if I do not know its size?', a: 'Yes, you can start by providing your vehicle registration, make and model. If possible, send a clear photo of the tyre markings as well. We will use the available details to check the correct tyre specification before arranging the service.' },
            { q: 'Can you supply a tyre while I wait, or do I need to buy one first?', a: 'You do not necessarily need to purchase a tyre separately. Contact us with your vehicle details and we can check whether a suitable replacement is available through our service. The fitting can be arranged once the tyre and attendance have been confirmed.' },
            { q: 'Do you offer premium and budget tyres in Bolton?', a: "We can check premium, mid-range and budget options, depending on your vehicle's requirements and current stock. We will explain the available choices so you can decide which suitable option best meets your needs and budget." },
            { q: 'Can you help if my tyre goes flat on the M61 or A666?', a: 'Contact us with your exact location and circumstances so we can check what assistance is available. Safety comes first: if you are on a motorway, follow motorway safety procedures and use the appropriate emergency or breakdown assistance service. Do not attempt a tyre change on a live carriageway or unsafe roadside position.' },
            { q: 'Can you fit tyres in Farnworth, Horwich and Westhoughton?', a: 'Yes. Our Bolton coverage includes Farnworth, Horwich, Westhoughton and other surrounding areas, including Kearsley, Blackrod and Little Lever. Share your postcode to confirm coverage and the estimated arrival time.' },
            { q: 'What payment methods do you accept?', a: 'The current service page lists card, cash and contactless payments. Confirm the available payment method when booking if you have a particular preference.' },
            { q: 'What if the tyre I need is not in stock?', a: 'Tell us your vehicle registration or exact tyre size when you contact us. We will check availability and explain the options. If a matching tyre is not available, we can discuss whether another suitable option can be sourced and how this may affect the timing.' },
            { q: 'Can you fit run-flat tyres or tyres with special specifications?', a: 'Availability depends on your vehicle, tyre specification and the equipment required. Tell us if your vehicle uses run-flat tyres or has a specific load index, speed rating or other requirement. We will check whether a suitable tyre and fitting service are available before confirming the booking.' },
            { q: 'Can you help if I have a locking wheel nut but have lost the key?', a: 'Contact us before booking and explain the situation. Assistance with locking wheel nut removal may be available, depending on the wheel and locking nut. Let us know the vehicle make and model so we can check the requirements.' },
            { q: 'Do you check tyre pressure after fitting?', a: 'Tyre pressure can be checked after fitting, and TPMS checks or resets may be available where applicable. If a tyre pressure warning remains on after the work, tell the technician so the system can be checked as appropriate.' },
            { q: 'Can I book a mobile tyre fitter for a specific time?', a: 'You can contact us to discuss a preferred time. Scheduled attendance depends on the service area, technician availability and tyre stock. Confirm the agreed time or arrival window with the team when booking.' },
            { q: 'What information should I have ready when I call?', a: 'Prepare your exact location or postcode, vehicle registration, make and model, tyre size if known, a brief description of the damage, whether the vehicle is parked at home, at work or roadside, and any special requirements, such as run-flat tyres or a locking wheel nut issue. These details help us check the correct tyre, estimate the cost and provide a more useful arrival estimate.' },
            { q: 'What happens if the technician arrives and my tyre cannot be repaired?', a: 'If the damage is unsuitable for repair, the technician can explain why a repair is not appropriate and discuss replacement options, subject to suitable stock and your approval. Ask about any applicable call-out or inspection charges before confirming the booking.' },
            { q: 'Can I drive a short distance with a punctured tyre to meet the fitter?', a: 'It is not advisable to drive on a flat tyre or one with serious damage. Doing so can damage the wheel and compromise vehicle control. If the vehicle is unsafe to move, tell us where it is parked and arrange assistance at a safe, accessible location.' },
            { q: 'How do I book emergency mobile tyre fitting in Bolton?', a: 'Call 07759 708 646 or 0161 399 5851. Provide your location, vehicle registration or tyre size, and a description of the problem. We can check tyre availability, explain the price and give you an estimated arrival time before you confirm the booking.' },
          ]}
        />

        {/* ── 11. FINAL CTA ──────────────────────────────────── */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-[#f0edec] relative">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-h2 text-xl sm:text-2xl lg:text-h2 mb-4 sm:mb-5 leading-tight">Need Mobile Tyre Fitting in Bolton Today?</h2>
            <p className="font-body-lg text-base lg:text-lg text-[#5c403c] leading-relaxed mb-6 sm:mb-8">Whether you&apos;ve discovered a flat tyre before work or experienced a tyre failure during a journey, our team can help you check the available options. One Stop Tyres 247 provides mobile tyre fitting, emergency tyre replacement and puncture assessment across Bolton and surrounding areas. Contact us to confirm tyre availability, pricing and the estimated arrival time for your location. Mobile tyre assistance at home, work or a suitable location — 24 hours a day, 7 days a week.</p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center mt-4 sm:mt-6">
              <a
                className="cta-btn cta-call flex items-center justify-center gap-2 sm:gap-3 bg-[#dc2626] hover:bg-[#b70011] text-white px-6 sm:px-10 py-4 sm:py-5 rounded-lg font-call-to-action text-base transition-all shadow-xl"
                href="tel:+447759708646"
              >
                <span aria-hidden="true" data-nosnippet className="material-symbols-outlined text-xl sm:text-2xl">phone_in_talk</span>
                07759 708 646
              </a>
              <a
                className="cta-btn cta-call flex items-center justify-center gap-2 sm:gap-3 bg-[#dc2626] hover:bg-[#b70011] text-white px-6 sm:px-10 py-4 sm:py-5 rounded-lg font-call-to-action text-base transition-all shadow-xl"
                href="tel:+441613995851"
              >
                <span aria-hidden="true" data-nosnippet className="material-symbols-outlined text-xl sm:text-2xl">phone_in_talk</span>
                0161 399 5851
              </a>
              <a
                className="cta-btn cta-btn-wa flex items-center justify-center gap-2 sm:gap-3 bg-[#1c1b1b] hover:bg-slate-800 text-white px-6 sm:px-10 py-4 sm:py-5 rounded-lg font-call-to-action text-base transition-all shadow-xl"
                href="https://wa.me/447759708646"
              >
                <span aria-hidden="true" data-nosnippet className="material-symbols-outlined text-[#25D366] text-xl sm:text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>chat</span>
                WhatsApp Us
              </a>
            </div>
          </div>
        </section>

      </main>
    </div>
  )
}
