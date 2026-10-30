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
import HeroBadge from '@/components/HeroBadge'

const _serviceSchema = pageServiceSchema({
  slug: 'mobile-tyre-fitting-rochdale',
  alternateName: '24/7 Mobile Tyre Fitting Rochdale',
  areaServed: 'Rochdale, Greater Manchester',
  description:
    'Need mobile tyre fitting in Rochdale? Get 24/7 emergency tyre replacement and puncture repair at home, work or roadside. Call for a quote.',
})

const _organizationSchema = pageOrganizationSchema('mobile-tyre-fitting-rochdale')
const _websiteSchema = pageWebsiteSchema('mobile-tyre-fitting-rochdale')
const _automotiveBusinessSchema = automotiveBusinessSchema({
  slug: 'mobile-tyre-fitting-rochdale',
  image: 'https://onestoptyres247.co.uk/images/tyres-fitting-anywhere.webp',
  addressLocality: 'Rochdale',
})

export const metadata = buildMetadata({
  title: 'Mobile Tyre Fitting Rochdale | 24/7 Tyre Replacement',
  description:
    'Need mobile tyre fitting in Rochdale? Get 24/7 emergency tyre replacement and puncture repair at home, work or roadside. Call for a quote.',
  path: '/mobile-tyre-fitting-rochdale',
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

export default function RochdalePage() {
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
              24/7 Mobile Tyre Fitting Rochdale
            </h1>

            <p className="text-white/95 lg:text-white/80 text-base leading-relaxed mb-5 sm:mb-6">
              Flat, punctured or damaged tyre? Our mobile tyre fitting in Rochdale brings emergency tyre replacement and same-day fitting to you.
            </p>

            {/* Trust bullets — hidden for now
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 mb-6">
              {[
                '24/7 Emergency Mobile Tyre Fitting',
                'Emergency Tyre Replacement',
                'Mobile Puncture Assessment and Repair',
                'Home and Workplace Tyre Fitting',
                'Suitable Roadside Assistance',
                'Premium, Mid-Range and Budget Tyre Options',
                'Card, Cash and Contactless Payment Options',
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
              <span className="text-white/80 lg:text-white/60 text-xs font-medium">Rated By Drivers Across Rochdale &amp; Greater Manchester</span>
            </a>

            {/* CTAs */}
            <HeroCtaButtons />

          </div>
        </section>

        <HeroQuoteSection area="Rochdale" />

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
            <ReviewsCarousel offset={1} />
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
                A flat tyre can disrupt your commute, work schedule or journey home. Our mobile tyre fitting service brings the necessary equipment and suitable replacement tyres to your vehicle, provided the location is safe and accessible.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {[
                {
                  img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Emergency%20Tyre%20Fitting%20one%20Stop-airanko-gsjvsGamoet8drKwCMHYr6LH5Ni6ZI.webp',
                  title: 'Mobile Tyre Fitting',
                  desc: 'Have suitable replacement tyres fitted at your home, workplace or another accessible location.',
                  badge: 'MOBILE FITTING WITHOUT MOVING THE CAR',
                  href: '/mobile-tyre-fitting',
                },
                {
                  img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Home%20Tyre%20Fitting%20One%20Stop-airanko-kPAsyn08SjxXwLwCVhxre5zM9jWBTs.webp',
                  title: 'Emergency Tyre Replacement',
                  desc: 'Arrange a replacement if your tyre has suffered a blowout, serious damage or excessive wear.',
                  badge: 'REPLACEMENT FOR UNSAFE TYRES',
                  href: '/home-tyre-fitting',
                },
                {
                  img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Puncture%20Repair%20One%20Stop-airanko-sfmhLvDbSYmhoMprTVOHCcIWEgJvHf.webp',
                  title: 'Mobile Puncture Repair',
                  desc: 'We assess punctured tyres and carry out repairs where the damage and tyre condition meet the applicable safety requirements.',
                  badge: 'ASSESS FIRST, REPAIR WHERE SAFE',
                  href: '/puncture-repair-Greater-manchester',
                },
                {
                  img: '/images/tyre-fitting-at-home.webp',
                  title: 'Home Tyre Fitting',
                  desc: 'Arrange tyre replacement at home without needing to travel to a tyre centre.',
                  badge: 'AT YOUR DOOR',
                  href: '/home-tyre-fitting',
                },
                {
                  img: '/images/professional-mobile-tyre-fitting.webp',
                  title: 'Same-Day Tyre Fitting',
                  desc: 'Need a tyre fitted today? Contact us to check technician availability and whether your required tyre is in stock.',
                  badge: 'SUBJECT TO AVAILABILITY',
                  href: '/mobile-tyre-fitting',
                },
                {
                  img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/One%20Stop%20Jumpstart%20image-airanko-cXmOrXcdtaIBMNQOMCIOiPj1C290RG.webp',
                  title: 'Jump-Start Assistance',
                  desc: 'If your vehicle also has a flat battery, ask about the availability of our jump-start service.',
                  badge: 'WHEN THE BATTERY STOPS THE JOURNEY',
                  href: '/jump-start',
                },
                {
                  img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Tyre%20pressure%20monitor-airanko-sjz7PL2Pv4N9jlPWtz5Wa1q8XO0FgP.webp',
                  title: 'TPMS Checks and Reset',
                  desc: 'Tyre pressure monitoring system checks or resets may be available where applicable after tyre fitting or repair.',
                  badge: 'TYRE PRESSURE SYSTEM CHECKS',
                  href: '/tpms-reset',
                },
                {
                  img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Locking%20nut%20removal-airanko%20%281%29-ONBmqaZHMozU0jjrxbPe5J7C4zRQkS.webp',
                  title: 'Locking Wheel Nut Removal',
                  desc: 'If you have lost your locking wheel nut key, contact us to check whether assistance is available for your vehicle.',
                  badge: 'SPECIALIST LOCKING NUT SUPPORT',
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
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">Need a Tyre Technician in Rochdale?</h3>
                <p className="text-slate-400 text-base">
                  Call or WhatsApp with your registration, tyre size and exact location. We can check suitable tyre options, confirm pricing and provide an expected arrival time.
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
                src="/images/mobile-tyre-fitting-manchester.webp"
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
                Professional Mobile Tyre Fitting in Rochdale
              </h2>
              <p className="text-slate-600 mb-4 sm:mb-6 leading-relaxed text-base sm:text-lg">
                A flat tyre can disrupt your commute, work schedule or journey home. Our mobile tyre fitting service brings the necessary equipment and suitable replacement tyres to your vehicle, provided the location is safe and accessible.
              </p>
              <p className="text-slate-600 mb-6 sm:mb-8 leading-relaxed text-base sm:text-lg">
                One Stop Tyres 247 helps drivers across Rochdale arrange mobile tyre fitting, emergency tyre replacement and puncture assessments. Whether your vehicle is parked at home, outside your workplace or at a suitable roadside location, contact our team to check the available options. We cover Rochdale town centre and surrounding areas, including Heywood, Littleborough, Milnrow, Middleton, Newhey, Wardle, Castleton, Whitworth and Norden. Coverage and arrival times depend on your exact location and technician availability.
              </p>
              <ul className="space-y-4 sm:space-y-5">
                <FeatureItem
                  icon="bolt"
                  title="Same Day Mobile Tyre Fitting"
                  desc="If you spot damage, low tread or another tyre issue before an important journey, our same day mobile tyre fitting service can help you deal with it without waiting for another day."
                />
                <FeatureItem
                  icon="engineering"
                  title="Emergency Mobile Tyre Fitting"
                  desc="A sudden blowout or serious loss of pressure can leave the vehicle unsafe to move. Our emergency mobile tyre fitting service operates day and night across Rochdale."
                />
                <FeatureItem
                  icon="sell"
                  title="Mobile Tyre Replacement Service"
                  desc="When the tyre cannot be safely repaired or continued on, our mobile tyre replacement service allows an appropriate replacement to be supplied and professionally fitted at your location."
                />
              </ul>
            </div>
          </div>
        </section>

        {/* ── 5. WHY ROCHDALE DRIVERS CHOOSE US ──────────────── */}
        <WhyChooseGrid
          heading="Why Choose Our Mobile Tyre Fitting Service?"
          intro=""
          items={[
            { icon: 'bolt', title: '24/7 Emergency Availability', desc: 'Tyre problems can happen at any time. Contact us day or night to check availability for emergency tyre fitting in Rochdale, including evenings, weekends and bank holidays.' },
            { icon: 'home_repair_service', title: 'Convenient On-Site Fitting', desc: 'Where the location is suitable, our technicians can attend your home, workplace, car park or a safe roadside position.' },
            { icon: 'sell', title: 'Clear Pricing Before Work Begins', desc: 'The cost depends on the tyre required, the work involved, your location and the time of service. We explain the available options and confirm the price before proceeding.' },
            { icon: 'tire_repair', title: 'Tyre Options for Different Budgets', desc: "We can check premium, mid-range and budget tyre options, subject to your vehicle's requirements and current stock." },
            { icon: 'engineering', title: 'Professional Tyre Assessment', desc: 'Not every puncture requires a replacement. Our technician assesses the damage and determines whether a safe repair is possible or a replacement is necessary.' },
          ]}
        />

        {/* ── COVERAGE ACROSS ROCHDALE ──────────────────────── */}
        <section className="py-10 sm:py-14 px-4 sm:px-6 bg-white">
          <div className="max-w-3xl mx-auto text-center">
            <h2
              className="text-xl sm:text-2xl text-[#0f172a] mb-3 font-bold"
              style={{ fontFamily: 'var(--font-work-sans)' }}
            >
              Coverage Across Rochdale and Nearby Areas
            </h2>
            <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
              We serve Rochdale and surrounding communities, including Heywood, Middleton, Milnrow, Littleborough, Newhey, Wardle, Castleton, Whitworth and Norden. Contact us with your postcode to confirm coverage and the estimated arrival time.
            </p>
          </div>
        </section>

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
                How Mobile Tyre Fitting in Rochdale Works
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-8 sm:gap-4 lg:gap-6">
              {[
                { title: 'Contact Our Team', desc: 'Call 07759 708 646 or 0161 399 5851 and explain the problem with your tyre.' },
                { title: 'Share Your Vehicle and Location Details', desc: 'Provide your vehicle registration, tyre size if known, and exact location. Tell us whether the tyre is punctured, flat, damaged or completely unusable.' },
                { title: 'Check Tyre Options and Pricing', desc: 'We check suitable tyre options and availability, explain the cost and provide an estimated arrival time before arranging the visit.' },
                { title: 'Get Your Tyre Fitted', desc: 'The technician attends the agreed location and completes the work where it is safe and suitable. Tyre pressure and TPMS checks can be carried out where applicable.' },
              ].map((step, idx) => (
                <div key={step.title} className="flex sm:flex-col items-start sm:items-center gap-4 sm:text-center relative">
                  <div className="bg-[#FF4444] text-[#121212] font-black w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center shrink-0 text-lg sm:text-xl">
                    {idx + 1}
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-base sm:text-lg mb-1.5">{step.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                  {idx < 3 && (
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
              Mobile Tyre Replacement Across Rochdale
            </h2>
            <p className="text-slate-600 mb-4 leading-relaxed text-base sm:text-lg">
              A tyre with serious sidewall damage, a blowout or excessive wear may need replacing rather than repairing. Our mobile tyre replacement service helps drivers across Rochdale arrange a suitable replacement without driving to a garage on an unsafe tyre.
            </p>
            <p className="text-slate-600 mb-4 leading-relaxed text-base sm:text-lg">
              We cover Rochdale town centre and nearby areas, including Heywood, Castleton, Norden, Milnrow, Newhey, Wardle, Littleborough and Whitworth.
            </p>
            <p className="text-slate-600 mb-4 leading-relaxed text-base sm:text-lg">
              Before arranging a replacement, provide your vehicle registration or tyre size so we can check the correct specification. We can discuss suitable premium, mid-range and budget options, depending on your requirements and current stock.
            </p>
            <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
              If your tyre has a puncture, our technician will assess whether it can be repaired safely. Repairs are only carried out when the tyre meets the applicable safety requirements.
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
              Emergency Mobile Tyre Fitting and Replacement in Rochdale
            </h2>
            <p className="text-slate-600 mb-4 leading-relaxed text-base sm:text-lg">
              A puncture or blowout can leave you stranded at an inconvenient time. Our 24/7 emergency mobile tyre service helps drivers in Rochdale check the available options when a tyre problem needs urgent attention.
            </p>
            <p className="text-slate-600 mb-4 leading-relaxed text-base sm:text-lg">
              We can attend suitable locations across Rochdale and nearby areas, subject to technician availability, traffic, tyre stock and safe access. When you call, provide your exact location so we can give you a realistic estimated arrival time.
            </p>
            <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
              If your vehicle breaks down on a motorway or busy road, follow the relevant safety procedures. Do not attempt to change a tyre on a live carriageway or in an unsafe roadside position. Use the appropriate emergency or breakdown assistance service where necessary. Call 07759 708 646 to discuss your tyre problem and check availability.
            </p>
          </div>
        </section>

        {/* ── 9. BRAND CAROUSEL ─────────────────────────────── */}
        <BrandCarousel />

        {/* ── NEARBY AREAS ───────────────────────────────────── */}
        <NearbyAreas currentSlug="rochdale" />

        {/* ── SERVICE AREAS MAP ──────────────────────────────── */}
        <ServiceAreasMap />

        {/* ── LOCAL AREA DETAILS ─────────────────────────────── */}
        <LocalAreaInfo currentSlug="rochdale" />

        {/* ── 10. FAQ ───────────────────────────────────────── */}
        <CityFaq
          canonical="https://onestoptyres247.co.uk/mobile-tyre-fitting-rochdale"
          city="Rochdale"
          faqs={[
            { q: 'How much does mobile tyre fitting cost in Rochdale?', a: 'The price depends on your tyre size, tyre brand, the work required, your location and the time of the call-out. Contact us with your vehicle registration or tyre details for a quote. Confirm the total price before authorising the work.' },
            { q: 'How quickly can a mobile tyre fitter reach me in Rochdale?', a: 'The general response target across Greater Manchester is around 20–30 minutes, but this is an estimate, not a guarantee. Traffic, your exact location, tyre availability and the nearest available technician can affect arrival time. Contact us for an updated estimate before booking.' },
            { q: 'Can you replace my tyre today?', a: 'Same-day tyre fitting may be available, depending on technician availability and whether a suitable tyre is in stock. Share your vehicle registration or tyre size so we can check the options.' },
            { q: 'What should I do if I have a flat tyre and no spare?', a: 'Avoid driving on a flat or seriously damaged tyre, as this can damage the wheel and compromise safety. Contact us with your location and vehicle details. We can check whether mobile repair or replacement is available for your vehicle.' },
            { q: "Can you repair my puncture, or will I need a new tyre?", a: "That depends on the location and extent of the damage and the condition of the tyre. Some punctures can be repaired safely, while sidewall damage and other unsuitable damage may require replacement. Our technician will assess the tyre against the applicable safety requirements before recommending the appropriate option." },
            { q: 'Do you provide mobile tyre fitting at home or work?', a: 'Yes. We can arrange fitting at your home or workplace where there is suitable access and enough safe working space. Provide the address and parking details when booking so we can confirm suitability.' },
            { q: 'Are you available at night, on Sundays and on bank holidays?', a: 'Our service operates 24/7 for emergency tyre assistance. Actual attendance depends on technician availability, the tyre required and your location, so contact us to confirm before relying on a specific arrival time.' },
            { q: 'Can you fit a tyre if I do not know its size?', a: 'You can start by providing your vehicle registration, make and model. If possible, send a clear photo of the tyre markings as well. We can use these details to check the correct specification before arranging the service.' },
            { q: 'Do I need to buy a tyre before booking your service?', a: 'Not necessarily. Contact us with your vehicle details and we can check whether a suitable replacement is available through our service. We can explain the tyre options and fitting cost before confirming the booking.' },
            { q: 'Do you offer premium and budget tyres in Rochdale?', a: "Premium, mid-range and budget options may be available, depending on your vehicle's requirements and current stock. We can explain the available suitable options so you can choose one that fits your needs and budget." },
            { q: 'Can you help if my tyre goes flat on the M62?', a: 'Contact us with your exact location and circumstances to check what assistance may be available. If you are on a motorway, follow motorway safety procedures and use the appropriate emergency or breakdown assistance service. Do not attempt a tyre change on a live carriageway or in an unsafe position.' },
            { q: 'Which areas around Rochdale do you cover?', a: 'Our coverage includes Rochdale and nearby areas such as Heywood, Middleton, Milnrow, Newhey, Littleborough, Wardle, Castleton, Whitworth and Norden. Contact us with your postcode to confirm coverage and the estimated arrival time.' },
            { q: 'What payment methods do you accept?', a: 'The service lists card, cash and contactless payments. If you have a preferred payment method, confirm its availability when booking.' },
            { q: 'What happens if my tyre size is not in stock?', a: 'We will check availability based on your vehicle and required tyre specification. If the exact tyre is unavailable, we can explain whether a suitable alternative can be sourced and how this may affect the timing. Any replacement must meet the vehicle’s requirements.' },
            { q: 'Can you fit run-flat tyres or tyres with special specifications?', a: 'Availability depends on the vehicle, tyre specification and equipment required. Tell us if you use run-flat tyres or have a particular load index, speed rating or other requirement. We will check whether a suitable tyre and fitting service are available before confirming the booking.' },
            { q: 'Can you help if I have lost my locking wheel nut key?', a: 'Contact us before booking and explain the situation. Assistance with locking wheel nut removal may be available depending on the vehicle and locking nut. Provide your vehicle make and model so we can check the requirements.' },
            { q: 'Will you check my tyre pressure after fitting?', a: 'Tyre pressure can be checked after fitting, and TPMS checks or resets may be available where applicable. If a tyre pressure warning remains on after the work, tell the technician so the system can be checked as appropriate.' },
            { q: 'Can I book a mobile tyre fitter for a specific time?', a: 'You can contact us to discuss a preferred time. Scheduled attendance depends on technician availability, the service area and tyre stock. Confirm the agreed time or arrival window with our team when booking.' },
            { q: 'What information should I have ready when I call?', a: 'Prepare your postcode or exact location, vehicle registration, tyre size if known, and a short description of the problem. Also mention whether your vehicle is at home, at work or roadside. These details help us check the correct tyre, estimate the cost and provide a more useful arrival estimate.' },
            { q: 'What happens if my tyre cannot be repaired?', a: 'If the damage is unsuitable for repair, the technician can explain why and discuss replacement options, subject to suitable stock and your approval. Ask about any applicable call-out or inspection charges before confirming your booking.' },
            { q: 'Can I drive a short distance with a punctured tyre to meet the fitter?', a: 'It is not advisable to drive on a flat tyre or one with serious damage. This can damage the wheel and compromise vehicle control. If the vehicle is unsafe to move, tell us where it is parked and arrange assistance at a safe, accessible location.' },
            { q: 'How do I book emergency mobile tyre fitting in Rochdale?', a: 'Call 07759 708 646 or 0161 399 5851. Provide your location, vehicle registration or tyre size, and a description of the problem. We can check tyre availability, explain the price and give you an estimated arrival time before you confirm the booking.' },
          ]}
        />

        {/* ── 11. FINAL CTA ─────────────────────────────────── */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-[#f0edec] relative">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-h2 text-xl sm:text-2xl lg:text-h2 mb-4 sm:mb-5 leading-tight">Need Mobile Tyre Fitting in Rochdale?</h2>
            <p className="font-body-lg text-base lg:text-lg text-[#5c403c] leading-relaxed mb-6 sm:mb-8">Whether you have a flat tyre at home, a puncture at work or an unexpected tyre problem during a journey, our team can help you check the available options. One Stop Tyres 247 provides mobile tyre fitting, emergency tyre replacement and puncture assessment across Rochdale and surrounding areas, subject to availability and safe access. Mobile tyre assistance at home, work or a suitable location — 24 hours a day, 7 days a week.</p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center mt-4 sm:mt-6">
              <a
                className="flex items-center justify-center gap-2 sm:gap-3 bg-[#dc2626] hover:bg-[#b70011] text-white px-6 sm:px-10 py-4 sm:py-5 rounded-lg font-call-to-action text-base transition-all shadow-xl"
                href="tel:+447759708646"
              >
                <span aria-hidden="true" data-nosnippet className="material-symbols-outlined text-xl sm:text-2xl">phone_in_talk</span>
                07759 708 646
              </a>
              <a
                className="flex items-center justify-center gap-2 sm:gap-3 bg-[#dc2626] hover:bg-[#b70011] text-white px-6 sm:px-10 py-4 sm:py-5 rounded-lg font-call-to-action text-base transition-all shadow-xl"
                href="tel:+441613995851"
              >
                <span aria-hidden="true" data-nosnippet className="material-symbols-outlined text-xl sm:text-2xl">phone_in_talk</span>
                0161 399 5851
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
