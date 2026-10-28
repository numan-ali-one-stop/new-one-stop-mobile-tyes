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

const _serviceSchema = pageServiceSchema({
  slug: 'mobile-tyre-fitting-bury',
  alternateName: '24/7 Mobile Tyre Fitting Bury',
  areaServed: 'Bury, Greater Manchester',
  description:
    'Need mobile tyre fitting in Bury? Get 24/7 tyre fitting, emergency tyre replacement and puncture repair at home, work or roadside.',
})

const _organizationSchema = pageOrganizationSchema('mobile-tyre-fitting-bury')
const _websiteSchema = pageWebsiteSchema('mobile-tyre-fitting-bury')
const _automotiveBusinessSchema = automotiveBusinessSchema({
  slug: 'mobile-tyre-fitting-bury',
  image: 'https://onestoptyres247.co.uk/images/tyres-fitting-anywhere.webp',
  addressLocality: 'Bury',
})

export const metadata = buildMetadata({
  title: 'Mobile Tyre Fitting Bury | 24/7 Tyre Replacement',
  description:
    'Need mobile tyre fitting in Bury? Get 24/7 tyre fitting, emergency tyre replacement and puncture repair at home, work or roadside.',
  path: '/mobile-tyre-fitting-bury',
})

export default function BuryPage() {
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

            <h1
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-white mb-3 sm:mb-4 leading-[1.1] font-black text-balance"
              style={{ fontFamily: 'var(--font-work-sans)', letterSpacing: '-0.02em' }}
            >
              24/7 Mobile Tyre Fitting Bury
            </h1>

            <p className="text-white/95 lg:text-white/80 text-base leading-relaxed mb-5 sm:mb-6">
              Need a tyre replaced in Bury? Our mobile tyre fitting service brings tyre replacement and puncture repair to you.
            </p>

            {/* Trust bullets — hidden for now
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 mb-6">
              {[
                '24/7 Mobile Tyre Fitting',
                'Emergency Tyre Replacement',
                'Mobile Puncture Repair',
                'Home, Workplace and Roadside Service',
                'Bury and Surrounding Areas Covered',
                'Premium, Mid-Range and Budget Tyres',
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
              <span className="text-white/80 lg:text-white/60 text-xs font-medium">Rated By Drivers Across Bury &amp; Greater Manchester</span>
            </a>

            {/* CTAs */}
            <HeroCtaButtons />

          </div>
        </section>

        <HeroQuoteSection area="Bury" />

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
            <ReviewsCarousel offset={4} />
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
                Mobile Tyre Services for Drivers Across Bury
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto text-base">
                A damaged tyre can disrupt your journey without warning. Our mobile tyre service is designed to solve the problem where your vehicle is, rather than making you arrange recovery or travel to a tyre centre. From Bury town centre and Fairfield to Unsworth, Tottington and surrounding communities, our mobile tyre fitters provide same day and emergency support with the equipment needed to fit, replace and inspect tyres on-site.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {[
                {
                  img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Emergency%20Tyre%20Fitting%20one%20Stop-airanko-gsjvsGamoet8drKwCMHYr6LH5Ni6ZI.webp',
                  title: 'Mobile Tyre Fitting',
                  desc: 'Our mobile tyre fitting service brings the fitting equipment and suitable tyre options directly to your vehicle. We can help with worn tyres, blowouts and damaged tyres without requiring a separate garage visit.',
                  badge: 'FAST MOBILE RESPONSE',
                  href: '/mobile-tyre-fitting',
                },
                {
                  img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Home%20Tyre%20Fitting%20One%20Stop-airanko-kPAsyn08SjxXwLwCVhxre5zM9jWBTs.webp',
                  title: 'Mobile Tyre Replacement',
                  desc: 'If a tyre is no longer safe to use, we can supply a suitable replacement and fit it at your location. Premium, mid-range and budget options are available for a wide range of vehicles.',
                  badge: 'CONVENIENT REPLACEMENT',
                  href: '/home-tyre-fitting',
                },
                {
                  img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Puncture%20Repair%20One%20Stop-airanko-sfmhLvDbSYmhoMprTVOHCcIWEgJvHf.webp',
                  title: 'Emergency Puncture Repair',
                  desc: 'Not every puncture requires a new tyre. Where the location and type of damage meet repair standards, our technician can inspect the tyre and carry out a professional repair.',
                  badge: 'REPAIR WHERE SUITABLE',
                  href: '/puncture-repair-Greater-manchester',
                },
                {
                  img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/One%20Stop%20Jumpstart%20image-airanko-cXmOrXcdtaIBMNQOMCIOiPj1C290RG.webp',
                  title: 'Jump Start',
                  desc: 'A flat battery can leave you stuck just as easily as tyre damage. Our mobile technicians can provide jump-start assistance alongside our roadside tyre services across Bury.',
                  badge: 'AVAILABLE DAY OR NIGHT',
                  href: '/jump-start',
                },
                {
                  img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Tyre%20pressure%20monitor-airanko-sjz7PL2Pv4N9jlPWtz5Wa1q8XO0FgP.webp',
                  title: 'TPMS Reset',
                  desc: 'After tyre work, we can inspect the tyre pressure monitoring system and reset it where required so the system can continue monitoring tyre pressures correctly.',
                  badge: 'TYRE SYSTEM CHECK',
                  href: '/tpms-reset',
                },
                {
                  img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Locking%20nut%20removal-airanko%20%281%29-ONBmqaZHMozU0jjrxbPe5J7C4zRQkS.webp',
                  title: 'Locking Nut Removal',
                  desc: 'Missing or damaged locking wheel nut key? Our technicians use specialist equipment to help remove locking wheel nuts while reducing the risk of damage to the wheel.',
                  badge: 'SPECIALIST REMOVAL',
                  href: '/locking-nut-removal',
                },
                {
                  img: '/images/professional-mobile-tyre-fitting.webp',
                  title: 'Roadside Assistance',
                  desc: 'Emergency roadside support for tyre and vehicle problems across Bury, wherever you get stranded.',
                  badge: '24/7 SUPPORT',
                  href: '/roadside-assistance',
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
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">Need Help With a Tyre in Bury?</h3>
                <p className="text-slate-400 text-base">
                  Tell us your location, vehicle and tyre size. A technician can confirm suitable tyre options, pricing and expected arrival time.
                </p>
              </div>
              <a
                href="tel:+447759708646"
                className="bg-[#dc2626] text-white font-black px-8 py-4 rounded-xl text-xl sm:text-2xl hover:scale-105 transition-transform shadow-lg shadow-red-900/20 whitespace-nowrap"
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
                Professional Mobile Tyre Fitting in Bury
              </h2>
              <p className="text-slate-600 mb-4 sm:mb-6 leading-relaxed text-base sm:text-lg">
                A flat or damaged tyre can disrupt your plans and leave you unable to continue your journey safely. One Stop Tyres 247 provides mobile tyre fitting in Bury, bringing professional equipment and suitable replacement tyres directly to your vehicle.
              </p>
              <p className="text-slate-600 mb-4 sm:mb-6 leading-relaxed text-base sm:text-lg">
                Our service covers Bury town centre and surrounding neighbourhoods, including Fairfield, Elton, Unsworth, Tottington, Radcliffe, Whitefield and Prestwich. We also assist drivers travelling along nearby routes such as the A56, A58 and M66.
              </p>
              <p className="text-slate-600 mb-4 sm:mb-6 leading-relaxed text-base sm:text-lg">
                Whether you need a replacement tyre before work, have discovered tyre damage at home or require emergency assistance, our mobile technicians can help you find a suitable solution without an unnecessary trip to a tyre centre.
              </p>
              <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
                We operate 24/7 for emergency callouts, with same-day appointments also available subject to tyre stock and technician availability.
              </p>
            </div>
          </div>
        </section>

        {/* ── 5. WHY BURY DRIVERS CHOOSE US ──────────────── */}
        <WhyChooseGrid
          heading="Why Choose Our Mobile Tyre Fitting Service?"
          intro=""
          items={[
            { icon: 'bolt', title: '24/7 Emergency Assistance', desc: 'Tyre problems do not always happen during normal working hours. Our emergency mobile tyre service operates day and night, including weekends and bank holidays, subject to availability.' },
            { icon: 'speed', title: 'Fast Local Response', desc: 'Our technicians cover Bury and surrounding Greater Manchester areas. The advertised average response time is around 20–30 minutes, depending on your location, traffic and current callout demand.' },
            { icon: 'engineering', title: 'Professional Mobile Technicians', desc: 'Our mobile fitters use dedicated tyre-fitting equipment and work with a wide range of vehicles and tyre sizes. We aim to provide professional fitting at a suitable location without requiring you to visit a garage.' },
            { icon: 'build', title: 'Repair or Replacement', desc: 'Not every puncture requires a new tyre. Where the damage and location meet the relevant safety requirements, our technician can inspect the tyre and carry out a suitable repair. If the tyre is unsafe or unsuitable for repair, we can provide a replacement.' },
            { icon: 'tire_repair', title: 'Tyre Options for Different Budgets', desc: 'We offer premium, mid-range and budget tyre options, depending on your vehicle, tyre size and availability. Our team can discuss suitable options before the technician attends.' },
            { icon: 'sell', title: 'Clear Upfront Pricing', desc: 'We explain the available tyre options and costs before proceeding with the work. This helps you understand the expected price and make an informed decision.' },
          ]}
        />

        {/* ── 6. HOW IT WORKS ───────────────────────────────── */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 bg-[#0f172a]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10 sm:mb-16">
              <span className="text-[#FF4444] font-bold uppercase tracking-widest text-sm mb-2 block">
                The Process
              </span>
              <h2
                className="text-2xl sm:text-[32px] font-bold text-white mb-3 leading-tight"
                style={{ fontFamily: 'var(--font-work-sans)', letterSpacing: '-0.01em' }}
              >
                How Mobile Tyre Fitting in Bury Works
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-5 gap-8 sm:gap-4 lg:gap-6">
              {[
                { title: 'Contact Our Team', desc: 'Call or message us and explain whether you need a tyre replacement, puncture repair or emergency assistance.' },
                { title: 'Share Your Location and Tyre Details', desc: 'Provide your postcode or exact location, vehicle registration and tyre size if available. This helps us identify suitable tyres and plan the callout.' },
                { title: 'Confirm the Quote', desc: 'We will discuss available options, explain the cost and confirm the expected arrival time based on current availability.' },
                { title: 'Technician Travels to You', desc: 'A mobile tyre technician comes to your location with the equipment and suitable tyre options needed for the job.' },
                { title: 'Complete the Tyre Work', desc: 'Where safe and appropriate, the technician will repair the puncture or fit the replacement tyre, then carry out relevant checks before completing the job.' },
              ].map((step, idx) => (
                <div key={step.title} className="flex sm:flex-col items-start sm:items-center gap-4 sm:text-center relative">
                  <div className="bg-[#FF4444] text-[#121212] font-black w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center shrink-0 text-lg sm:text-xl">
                    {idx + 1}
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-base sm:text-lg mb-1.5">{step.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                  {idx < 4 && (
                    <span aria-hidden="true" data-nosnippet className="material-symbols-outlined text-slate-600 hidden sm:block absolute top-5 -right-6 lg:-right-8" style={{ fontSize: '24px' }}>trending_flat</span>
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
              Mobile Tyre Replacement Across Bury
            </h2>
            <p className="text-slate-600 mb-6 leading-relaxed text-base sm:text-lg">
              If your tyre has a sidewall bulge, serious damage, a blowout or a puncture that cannot be repaired safely, replacement may be necessary. Our mobile tyre replacement service brings suitable tyres directly to your vehicle.
            </p>
            <p className="font-bold text-[#0f172a] mb-3">We cover Bury town centre and nearby areas, including:</p>
            <ul className="space-y-3 mb-6">
              {[
                'Fairfield and Elton – mobile tyre assistance for residential and local journeys',
                'Unsworth and Whitefield – replacement tyres and emergency callouts',
                'Tottington and Ramsbottom – mobile fitting for drivers in surrounding communities',
                'Radcliffe and Prestwich – tyre fitting at suitable home, work or roadside locations',
                'A56, A58 and M66 corridors – assistance around these routes where access is safe and appropriate',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-slate-700">
                  <span aria-hidden="true" data-nosnippet className="material-symbols-outlined text-[#b70011] shrink-0 mt-0.5" style={{ fontSize: '20px', fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  <span className="font-semibold">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
              Premium, mid-range and budget options are available depending on your vehicle and the required tyre. If you are unsure whether a damaged tyre can be repaired, our technician can inspect it and explain the suitable options.
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
              Emergency Mobile Tyre Fitting and Replacement in Bury
            </h2>
            <p className="text-slate-600 mb-4 leading-relaxed text-base sm:text-lg">
              A tyre failure can happen during a local journey, on the way to work or while travelling through Greater Manchester. Our 24/7 emergency service provides mobile tyre assistance across Bury and surrounding areas.
            </p>
            <p className="text-slate-600 mb-6 leading-relaxed text-base sm:text-lg">
              We cover locations including Bury town centre, Fairfield, Elton, Unsworth, Tottington, Radcliffe, Whitefield and Prestwich, as well as nearby routes such as the A56, A58 and M66.
            </p>
            <p className="font-bold text-[#0f172a] mb-3">Our mobile services include:</p>
            <ul className="space-y-3 mb-6">
              {[
                'Emergency tyre replacement',
                'Mobile puncture repair where suitable',
                'Mobile tyre fitting at home or work',
                'Roadside tyre assistance at a safe and accessible location',
                'Jump-start assistance for flat batteries',
                'TPMS checks and resets where required',
                'Locking wheel nut removal using specialist equipment',
              ].map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-slate-700">
                  <span aria-hidden="true" data-nosnippet className="material-symbols-outlined text-[#b70011] shrink-0" style={{ fontSize: '20px', fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  <span className="font-semibold">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
              If you experience a tyre problem on a busy road, prioritise your safety. Move away from moving traffic where possible and follow the appropriate breakdown procedures. Work will only be undertaken where the location is safe and suitable for the technician.
            </p>
          </div>
        </section>

        {/* ── 9. BRAND CAROUSEL ─────────────────────────────── */}
        <BrandCarousel />

        {/* ── NEARBY AREAS ───────────────────────────────────── */}
        <NearbyAreas currentSlug="bury" />

        {/* ── SERVICE AREAS MAP ──────────────────────────────── */}
        <ServiceAreasMap />

        {/* ── LOCAL AREA DETAILS ─────────────────────────────── */}
        <LocalAreaInfo currentSlug="bury" />

        {/* ── 10. FAQ ───────────────────────────────────────── */}
        <CityFaq
          canonical="https://onestoptyres247.co.uk/mobile-tyre-fitting-bury"
          city="Bury"
          faqs={[
            { q: 'Do you provide 24/7 mobile tyre fitting in Bury?', a: 'Yes. Our mobile tyre fitting service operates 24/7 across Bury, subject to technician and tyre availability.' },
            { q: 'Can I book same-day mobile tyre fitting in Bury?', a: 'Yes. Same-day appointments are available for many tyre sizes. Availability depends on your location, the tyre required and current callout demand.' },
            { q: 'How quickly can a technician reach me in Bury?', a: 'The advertised average response time is around 20–30 minutes. Actual arrival times vary according to traffic, location and technician availability.' },
            { q: 'Do you provide emergency tyre replacement in Bury?', a: 'Yes. We provide emergency tyre replacement when a suitable replacement is available and the work can be carried out safely.' },
            { q: 'Can you repair a punctured tyre at my location?', a: 'Yes. Our technician can inspect the tyre and carry out a repair if the damage is suitable and the location is safe. Otherwise, replacement may be recommended.' },
            { q: 'Do you offer mobile tyre fitting at home?', a: 'Yes. We can arrange mobile tyre fitting at your home, provided the location is accessible and suitable for the work.' },
            { q: 'Can you fit tyres at my workplace?', a: 'Yes. Mobile tyre fitting can be arranged at a suitable workplace or car park, subject to access and availability.' },
            { q: 'Which areas around Bury do you cover?', a: 'Coverage includes Bury town centre, Fairfield, Elton, Unsworth, Tottington, Radcliffe, Whitefield, Prestwich and other surrounding areas. Contact us to confirm availability for your postcode.' },
            { q: 'Do you cover the M66 near Bury?', a: 'Yes. Our wider service area includes the M66 corridor. For a roadside callout, share your exact location so the team can confirm access and availability.' },
            { q: 'What tyre brands and price ranges are available?', a: 'We offer premium, mid-range and budget tyre options. Availability depends on your tyre size, vehicle requirements and current stock.' },
            { q: 'Can you help if my tyre has suffered a blowout?', a: 'Yes. Contact us with your location and vehicle details. We can check the availability of a suitable replacement and arrange assistance where it is safe to work.' },
            { q: 'Do you offer jump-start assistance in Bury?', a: 'Yes. Mobile jump-start assistance is available for suitable flat-battery situations, subject to availability.' },
            { q: 'Can you reset my tyre pressure monitoring system?', a: 'TPMS checks and resets are available where required and supported by the vehicle and equipment.' },
            { q: 'Can you remove locking wheel nuts?', a: 'Yes. Our technicians have specialist equipment for locking wheel nut removal on suitable vehicles. Let us know if the key is missing or damaged when booking.' },
            { q: 'How do I book mobile tyre fitting in Bury?', a: 'Call or WhatsApp us with your location, vehicle registration or tyre size, and a description of the problem. We can discuss suitable tyre options, provide a quote and confirm availability.' },
          ]}
        />

        {/* ── 11. FINAL CTA ─────────────────────────────────── */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-[#f0edec] relative">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-h2 text-xl sm:text-2xl lg:text-h2 mb-4 sm:mb-5 leading-tight">Need Mobile Tyre Fitting in Bury?</h2>
            <p className="font-body-lg text-base lg:text-lg text-[#5c403c] leading-relaxed mb-6 sm:mb-8">Whether you need a tyre fitted at home, a replacement at work or emergency assistance at the roadside, One Stop Tyres 247 can come to you. Contact us today for 24/7 mobile tyre fitting in Bury, tyre replacement and puncture repair. Call now for a quote and availability.</p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center mt-4 sm:mt-6">
              <a
                className="flex items-center justify-center gap-2 sm:gap-3 bg-[#dc2626] hover:bg-[#b70011] text-white px-6 sm:px-10 py-4 sm:py-5 rounded-lg font-call-to-action text-base transition-all shadow-xl"
                href="tel:+447759708646"
              >
                <span aria-hidden="true" data-nosnippet className="material-symbols-outlined text-xl sm:text-2xl">phone_in_talk</span>
                Call: 07759 708 646
              </a>
              <a
                className="flex items-center justify-center gap-2 sm:gap-3 bg-[#1c1b1b] hover:bg-slate-800 text-white px-6 sm:px-10 py-4 sm:py-5 rounded-lg font-call-to-action text-base transition-all shadow-xl"
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
