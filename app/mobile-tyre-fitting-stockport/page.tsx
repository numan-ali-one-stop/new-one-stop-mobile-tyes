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
  slug: 'mobile-tyre-fitting-stockport',
  alternateName: '24/7 Mobile Tyre Fitting Stockport',
  areaServed: 'Stockport, Greater Manchester',
  description:
    'Need mobile tyre fitting in Stockport? Get 24/7 tyre replacement and puncture repair at home, work or roadside. Call our team for a quote.',
})

const _organizationSchema = pageOrganizationSchema('mobile-tyre-fitting-stockport')
const _websiteSchema = pageWebsiteSchema('mobile-tyre-fitting-stockport')
const _automotiveBusinessSchema = automotiveBusinessSchema({
  slug: 'mobile-tyre-fitting-stockport',
  image: 'https://onestoptyres247.co.uk/images/tyres-fitting-anywhere.webp',
  addressLocality: 'Stockport',
})

export const metadata = buildMetadata({
  title: 'Mobile Tyre Fitting Stockport | 24/7 Tyre Replacement',
  description:
    'Need mobile tyre fitting in Stockport? Get 24/7 tyre replacement and puncture repair at home, work or roadside. Call our team for a quote.',
  path: '/mobile-tyre-fitting-stockport',
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

export default function StockportPage() {
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
              24/7 Mobile Tyre Fitting Stockport
            </h1>

            <p className="text-white/95 lg:text-white/80 text-base leading-relaxed mb-5 sm:mb-6">
              Need mobile tyre fitting in Stockport? Our mobile team comes to you for a flat tyre at home, a puncture at work or a damaged tyre.
            </p>

            {/* Trust bullets — hidden for now
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 mb-6">
              {[
                '24/7 Emergency Mobile Tyre Fitting',
                'Mobile Tyre Replacement At Home, Work Or Roadside',
                'Puncture Inspection and Repair Where Suitable',
                'Premium, Mid-Range and Budget Tyre Options',
                'Clear Pricing Before Work Begins',
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
              <span className="text-white/80 lg:text-white/60 text-xs font-medium">Rated By Drivers Across Stockport &amp; Greater Manchester</span>
            </a>

            {/* CTAs */}
            <HeroCtaButtons />

          </div>
        </section>

        <HeroQuoteSection area="Stockport" />

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
            <ReviewsCarousel offset={3} />
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
                Our Mobile Tyre Services in Stockport
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto text-base">
                A damaged or flat tyre can disrupt your journey and make driving unsafe. Our mobile tyre fitting service brings tyre assistance directly to you, helping you avoid the inconvenience of travelling to a garage when your vehicle cannot be driven safely.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {[
                {
                  img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Emergency%20Tyre%20Fitting%20one%20Stop-airanko-gsjvsGamoet8drKwCMHYr6LH5Ni6ZI.webp',
                  title: '24/7 Mobile Tyre Fitting',
                  desc: 'Arrange tyre fitting at home, at work or at another suitable location. Contact us to confirm availability and arrange a convenient visit.',
                  badge: 'FAST RESPONSE',
                  href: '/mobile-tyre-fitting',
                },
                {
                  img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Home%20Tyre%20Fitting%20One%20Stop-airanko-kPAsyn08SjxXwLwCVhxre5zM9jWBTs.webp',
                  title: 'Emergency Tyre Replacement',
                  desc: 'If your tyre is damaged beyond safe repair, we can help arrange a suitable replacement, subject to tyre availability and vehicle requirements.',
                  badge: '24/7 DISPATCH',
                  href: '/home-tyre-fitting',
                },
                {
                  img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Puncture%20Repair%20One%20Stop-airanko-sfmhLvDbSYmhoMprTVOHCcIWEgJvHf.webp',
                  title: 'Mobile Puncture Repair',
                  desc: 'Our technicians can inspect a punctured tyre and determine whether a repair is safe and appropriate. Tyres with unsuitable damage may need replacing instead.',
                  badge: 'CERTIFIED REPAIR',
                  href: '/puncture-repair-Greater-manchester',
                },
                {
                  img: '/images/tyre-fitting-at-home.webp',
                  title: 'Home and Workplace Tyre Fitting',
                  desc: 'Avoid an unnecessary trip to a garage. We can arrange mobile tyre fitting at your property or workplace where there is safe access and sufficient space to carry out the work.',
                  badge: 'AT YOUR DOOR',
                  href: '/home-tyre-fitting',
                },
                {
                  img: '/images/professional-mobile-tyre-fitting.webp',
                  title: 'Roadside Tyre Assistance',
                  desc: 'If you experience tyre trouble while travelling, contact us with your location. On motorways, follow the relevant breakdown and road-safety procedures rather than attempting a tyre change in a live traffic area.',
                  badge: '24/7 SUPPORT',
                  href: '/roadside-assistance',
                },
                {
                  img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Tyre%20pressure%20monitor-airanko-sjz7PL2Pv4N9jlPWtz5Wa1q8XO0FgP.webp',
                  title: 'Tyre Pressure and TPMS Checks',
                  desc: 'Where applicable, tyre pressure and the tyre pressure monitoring system (TPMS) can be checked following fitting or repair.',
                  badge: 'ALL VEHICLES',
                  href: '/tpms-reset',
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
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">Need Immediate Assistance?</h3>
                <p className="text-slate-400 text-base">
                  Speak directly to a technician for an instant quote and arrival time.
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
                src="/images/tyre-fitting-at-home.webp"
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
                Professional Mobile Tyre Fitting in Stockport
              </h2>
              <p className="text-slate-600 mb-4 sm:mb-6 leading-relaxed text-base sm:text-lg">
                A damaged or flat tyre can disrupt your journey and make driving unsafe. Our mobile tyre fitting service brings tyre assistance directly to you, helping you avoid the inconvenience of travelling to a garage when your vehicle cannot be driven safely.
              </p>
              <p className="text-slate-600 mb-6 sm:mb-8 leading-relaxed text-base sm:text-lg">
                One Stop Tyres 247 provides mobile tyre fitting and emergency tyre replacement across Stockport, including residential streets, workplaces and accessible roadside locations. We assess the condition of your tyre before recommending the appropriate solution. Whether you need a replacement after a blowout or a puncture inspection, our team can explain the available options and arrange a visit based on your location, tyre requirements and service availability.
              </p>
              <ul className="space-y-4 sm:space-y-5">
                <FeatureItem icon="bolt" title="24/7 Mobile Tyre Fitting" desc="Tyres fitted at your home, workplace or roadside location." />
                <FeatureItem icon="engineering" title="Emergency Tyre Replacement" desc="Fast replacement of damaged or unsafe tyres across Greater Manchester." />
                <FeatureItem icon="sell" title="Mobile Puncture Repair" desc="Professional puncture repairs where safe and suitable." />
              </ul>
            </div>
          </div>
        </section>

        {/* ── 5. WHY CHOOSE US ──────────────────────────────── */}
        <WhyChooseGrid
          heading="Why Stockport Drivers Choose Our Mobile Tyre Service"
          intro="When choosing a mobile tyre fitter, you need clear information, suitable tyres and a service that fits your circumstances."
          items={[
            { icon: 'bolt', title: '24/7 Availability', desc: 'Tyre problems do not always happen during normal garage opening hours. Our service operates around the clock in covered areas, subject to technician availability.' },
            { icon: 'home_repair_service', title: 'Mobile Assistance at Your Location', desc: 'We can arrange tyre fitting at your home, workplace or a suitable roadside location, so you may not need to take your vehicle to a garage.' },
            { icon: 'sell', title: 'Clear, Upfront Pricing', desc: 'The cost depends on your tyre size, chosen tyre, location and work required. Ask for a quote before confirming the service so you understand the expected cost.' },
            { icon: 'build', title: 'Repair or Replacement Advice', desc: 'Not every puncture can be repaired safely. Our technicians can inspect the damage and explain whether a suitable repair or replacement is the better option.' },
            { icon: 'tire_repair', title: 'Tyre Options for Different Budgets', desc: 'Premium, mid-range and budget tyre options may be available. The right choice depends on your vehicle, tyre specifications and current stock.' },
            { icon: 'engineering', title: 'Convenient Emergency Support', desc: 'If your vehicle has an unsafe or unusable tyre, contact our team to discuss the problem and confirm whether mobile assistance is available at your location.' },
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
                How Mobile Tyre Fitting in Stockport Works
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-5 gap-8 sm:gap-4 lg:gap-6">
              {[
                { title: 'Contact Our Team', desc: 'Call 07759 708 646 or 0161 399 5851. Explain whether you have a puncture, flat tyre, blowout or need a planned tyre replacement.' },
                { title: 'Share Your Location and Vehicle Details', desc: 'Provide your postcode or location pin, vehicle make and model, and tyre size if known. A clear photograph of the tyre markings can help the team identify the required size.' },
                { title: 'Confirm the Quote and Availability', desc: 'Our team will discuss suitable options, pricing and the estimated arrival time. Availability depends on your location, the tyre required and current demand.' },
                { title: 'Have Your Tyre Assessed and Fitted', desc: 'The technician will inspect the tyre and determine whether repair or replacement is appropriate. If a replacement is needed, the fitting can proceed once a suitable tyre and safe working conditions are confirmed.' },
                { title: 'Check the Vehicle Before Driving', desc: 'After the work, check that you understand any advice provided by the technician. Tyre pressure and TPMS checks can be carried out where applicable.' },
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
              Mobile Tyre Replacement Across Stockport
            </h2>
            <p className="text-slate-600 mb-4 leading-relaxed text-base sm:text-lg">
              If your tyre has a sidewall bulge, serious damage, a blowout or a puncture that cannot be repaired safely, replacement may be necessary.
            </p>
            <p className="text-slate-600 mb-4 leading-relaxed text-base sm:text-lg">
              Our mobile tyre replacement service in Stockport can help drivers who need a new tyre fitted without making a separate trip to a tyre centre. We can discuss available tyre options and confirm whether the required size is in stock before arranging the visit.
            </p>
            <p className="text-slate-600 mb-4 leading-relaxed text-base sm:text-lg">
              When contacting us, share your vehicle details and tyre size if possible. This helps the team identify a suitable replacement and provide a more accurate quote.
            </p>
            <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
              We can help with tyre replacement at suitable locations across Stockport, including Bramhall, Cheadle, Hazel Grove, Reddish, Marple and nearby neighbourhoods.
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
              Emergency Mobile Tyre Fitting and Puncture Repair in Stockport
            </h2>
            <p className="text-slate-600 mb-4 leading-relaxed text-base sm:text-lg">
              A flat tyre can happen on your driveway, in a workplace car park or while travelling along a busy road. If your tyre is damaged, avoid driving on it when doing so could put you or other road users at risk.
            </p>
            <p className="text-slate-600 mb-4 leading-relaxed text-base sm:text-lg">
              Contact our team and explain your situation. We will discuss the available assistance, the estimated arrival time and whether a suitable replacement tyre may be required.
            </p>
            <p className="text-slate-600 mb-4 leading-relaxed text-base sm:text-lg">
              Our service covers Stockport and nearby areas, including routes around the A6 and M60. Actual attendance depends on the exact location, safe access, traffic, weather, technician availability and the work required.
            </p>
            <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
              If you break down on a motorway, prioritise your safety and follow the relevant motorway breakdown guidance. Do not attempt repairs beside live traffic.
            </p>
          </div>
        </section>

        {/* ── MOBILE TYRE FITTING AREAS IN STOCKPORT ────────── */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2
              className="text-2xl sm:text-[32px] font-bold text-slate-900 mb-4 leading-tight text-center"
              style={{ fontFamily: 'var(--font-work-sans)', letterSpacing: '-0.01em' }}
            >
              Mobile Tyre Fitting Areas in Stockport
            </h2>
            <p className="text-slate-600 mb-8 leading-relaxed text-base sm:text-lg text-center max-w-2xl mx-auto">
              We provide mobile tyre fitting across Stockport and a range of surrounding neighbourhoods. Coverage and arrival times should be confirmed for your exact postcode.
            </p>
            <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-3 mb-8">
              {[
                'Stockport town centre', 'Bramhall', 'Bredbury', 'Cheadle',
                'Cheadle Hulme', 'Gatley', 'Hazel Grove', 'Heald Green',
                'Heaton Chapel', 'Heaton Mersey', 'Heaton Moor', 'Heaton Norris',
                'High Lane', 'Reddish', 'Romiley', 'Marple',
                'Marple Bridge', 'Mellor', 'Woodley', 'Adswood',
                'Brinnington', 'Davenport', 'Edgeley', 'Great Moor',
                'Offerton', 'Compstall', 'Disley',
              ].map((area) => (
                <li key={area} className="flex items-center gap-2 text-slate-700 text-sm sm:text-base">
                  <span aria-hidden="true" data-nosnippet className="material-symbols-outlined text-[#b70011] shrink-0" style={{ fontSize: '18px', fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  <span>{area}</span>
                </li>
              ))}
            </ul>
            <p className="text-slate-600 leading-relaxed text-base sm:text-lg text-center">
              Not sure whether your location is covered? Call 07759 708 646 with your postcode and our team can confirm availability.
            </p>
          </div>
        </section>

        {/* ── 9. BRAND CAROUSEL ─────────────────────────────── */}
        <BrandCarousel />

        {/* ── NEARBY AREAS ───────────────────────────────────── */}
        <NearbyAreas currentSlug="stockport" />

        {/* ── SERVICE AREAS MAP ──────────────────────────────── */}
        <ServiceAreasMap />

        {/* ── LOCAL AREA DETAILS ─────────────────────────────── */}
        <LocalAreaInfo currentSlug="stockport" />

        {/* ── 10. FAQ ───────────────────────────────────────── */}
        <CityFaq
          canonical="https://onestoptyres247.co.uk/mobile-tyre-fitting-stockport"
          city="Stockport"
          faqs={[
            { q: 'Do you provide mobile tyre fitting in Stockport 24/7?', a: 'Yes, our mobile tyre fitting service operates 24 hours a day in covered areas. Contact us to confirm technician availability and arrange assistance for your location.' },
            { q: 'How quickly can a mobile tyre fitter reach me in Stockport?', a: 'The current service page gives a typical response estimate of around 20–30 minutes. This is not guaranteed; actual arrival time depends on your postcode, traffic, weather, technician availability and the work required. Confirm the estimated arrival time when booking.' },
            { q: 'Can you fit a tyre at my home in Stockport?', a: 'Yes. We can arrange mobile tyre fitting at your home where there is sufficient space and safe access for the technician to work.' },
            { q: 'Do you offer mobile tyre fitting at workplaces?', a: 'Yes. Workplace tyre fitting can be arranged where the location is accessible and suitable for the work. Provide your workplace address and preferred time when requesting a quote.' },
            { q: 'Can you replace a flat tyre at the roadside?', a: 'We can discuss roadside tyre assistance where the vehicle is in a safe, accessible location. If you are on a motorway or beside moving traffic, follow official breakdown procedures and do not attempt to change the tyre in an unsafe area.' },
            { q: 'Can you repair a punctured tyre in Stockport?', a: 'Our technicians can inspect the puncture and determine whether the tyre can be repaired safely. The damage location, size and condition of the tyre affect whether a repair is appropriate.' },
            { q: 'When does a tyre need to be replaced instead of repaired?', a: 'Replacement may be necessary if the tyre has serious sidewall damage, a bulge, a blowout or damage that cannot be repaired safely. The technician can assess the tyre and explain the available options.' },
            { q: 'How much does mobile tyre fitting in Stockport cost?', a: 'The cost depends on the tyre size, tyre brand, type of service, location and time of attendance. Contact us for a quote based on your vehicle and requirements before confirming the booking.' },
            { q: 'Can I choose between premium and budget tyres?', a: 'Premium, mid-range and budget options may be available, depending on your tyre size and current stock. Tell us your preferences when requesting a quote.' },
            { q: 'What information do I need to book a mobile tyre fitter?', a: 'Provide your location or postcode, vehicle make and model, tyre size if known, and a description of the problem. A photograph of the tyre markings can also help identify the correct replacement.' },
            { q: 'What if I do not know my tyre size?', a: 'Tell us your vehicle make, model and registration details when you contact the team. If possible, send a photograph of the numbers and letters printed on the tyre sidewall so the required size can be checked.' },
            { q: 'Can you fit tyres in Bramhall, Cheadle and Hazel Grove?', a: 'These areas are listed within our Stockport coverage. Contact us with your exact postcode to confirm availability and the estimated arrival time.' },
            { q: 'Do you cover the A6 and M60 around Stockport?', a: 'Our service page lists the A6 and M60 among the routes covered. Attendance depends on your exact location and whether the work can be carried out safely. On motorways, follow the appropriate breakdown and road-safety procedures.' },
            { q: 'Can you supply a replacement tyre if mine has blown out?', a: 'We can discuss replacement options if your tyre has blown out. The correct tyre must be available and compatible with your vehicle. Share your location and tyre details so the team can confirm what is possible.' },
            { q: 'Can you help with run-flat tyres?', a: 'Contact us with your vehicle details and the run-flat tyre specifications. Availability and the appropriate fitting procedure depend on the tyre and vehicle requirements, so confirm these details before booking.' },
            { q: 'Can you help if I have lost my locking wheel nut key?', a: 'Tell us when you book. Locking wheel nut removal may be available, but the technician will need to confirm whether the required tools and procedure are suitable for your vehicle.' },
            { q: 'Do you accept card and contactless payments?', a: 'The current Stockport service page lists card, cash and contactless payments. Confirm accepted payment options when arranging your booking if you have a specific requirement.' },
            { q: 'Can I book a tyre fitting for a specific time?', a: 'You can request a preferred time when contacting the team. The available appointment will depend on technician scheduling, your location and the tyre required.' },
            { q: 'Do you check tyre pressure after fitting?', a: 'Tyre pressure can be checked as part of the fitting process, and TPMS checks may be available where applicable. Ask the technician if your vehicle requires a particular pressure or monitoring-system check.' },
            { q: 'How do I book emergency mobile tyre fitting in Stockport?', a: 'Call 07759 708 646 or 0161 399 5851. Provide your location, vehicle details and a brief description of the tyre problem. The team can then discuss the quote, availability and estimated arrival time.' },
          ]}
        />

        {/* ── 11. FINAL CTA ─────────────────────────────────── */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-[#f0edec] relative">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-h2 text-xl sm:text-2xl lg:text-h2 mb-4 sm:mb-5 leading-tight">Need Mobile Tyre Fitting in Stockport?</h2>
            <p className="font-body-lg text-base lg:text-lg text-[#5c403c] leading-relaxed mb-6 sm:mb-8">A puncture or damaged tyre does not have to mean an unnecessary trip to a garage. Contact One Stop Tyres 247 for mobile tyre fitting, emergency tyre replacement and puncture assessment across Stockport and nearby areas. Call us to explain your tyre problem, check availability and receive a quote before arranging your visit. Mobile tyre fitting at home, work or a suitable roadside location — available 24/7 in covered areas.</p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center mt-4 sm:mt-6">
              <a className="flex items-center justify-center gap-2 sm:gap-3 bg-[#dc2626] hover:bg-[#b70011] text-white px-6 sm:px-10 py-4 sm:py-5 rounded-lg font-call-to-action text-base transition-all shadow-xl" href="tel:+447759708646">
                <span aria-hidden="true" data-nosnippet className="material-symbols-outlined text-xl sm:text-2xl">phone_in_talk</span>
                07759 708 646
              </a>
              <a className="flex items-center justify-center gap-2 sm:gap-3 bg-[#dc2626] hover:bg-[#b70011] text-white px-6 sm:px-10 py-4 sm:py-5 rounded-lg font-call-to-action text-base transition-all shadow-xl" href="tel:+441613995851">
                <span aria-hidden="true" data-nosnippet className="material-symbols-outlined text-xl sm:text-2xl">phone_in_talk</span>
                0161 399 5851
              </a>
              <a className="flex items-center justify-center gap-2 sm:gap-3 bg-[#1c1b1b] hover:bg-slate-800 text-white px-6 sm:px-10 py-4 sm:py-5 rounded-lg font-call-to-action text-base transition-all shadow-xl" href="https://wa.me/447759708646">
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
