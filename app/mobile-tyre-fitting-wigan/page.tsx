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
  slug: 'mobile-tyre-fitting-wigan',
  alternateName: '24/7 Mobile Tyre Fitting Wigan',
  areaServed: 'Wigan, Greater Manchester',
  description:
    'Need mobile tyre fitting in Wigan? Get 24/7 tyre replacement and puncture repair at home, work or roadside. Call for a quote today.',
})

const _organizationSchema = pageOrganizationSchema('mobile-tyre-fitting-wigan')
const _websiteSchema = pageWebsiteSchema('mobile-tyre-fitting-wigan')
const _automotiveBusinessSchema = automotiveBusinessSchema({
  slug: 'mobile-tyre-fitting-wigan',
  image: 'https://onestoptyres247.co.uk/images/tyres-fitting-anywhere.webp',
  addressLocality: 'Wigan',
})

export const metadata = buildMetadata({
  title: 'Mobile Tyre Fitting Wigan | 24/7 Tyre Replacement',
  description:
    'Need mobile tyre fitting in Wigan? Get 24/7 tyre replacement and puncture repair at home, work or roadside. Call for a quote today.',
  path: '/mobile-tyre-fitting-wigan',
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

export default function WiganPage() {
  return (
    <div className="bg-[#fcf9f8] text-[#1c1b1b] font-body-md">
      <JsonLd data={_serviceSchema} className="schemantra" />
      <JsonLd data={_organizationSchema} />
      <JsonLd data={_websiteSchema} />
      <JsonLd data={_automotiveBusinessSchema} />
      <main>

        {/* ── 1. HERO */}
        <section className="relative lg:min-h-[600px] flex items-center justify-start text-left px-4 sm:px-8 lg:px-16 overflow-hidden">
          <HeroMapBackground />

          <div className="relative z-10 w-full max-w-2xl py-10 sm:py-14 lg:py-20 [text-shadow:0_1px_3px_rgba(0,0,0,0.9),0_2px_12px_rgba(0,0,0,0.7)] lg:[text-shadow:none]">
            <div>
              <HeroBadge>24/7 Emergency Mobile Tyre Service</HeroBadge>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-white mb-3 sm:mb-4 leading-[1.1] font-black text-balance" style={{ fontFamily: 'var(--font-work-sans)', letterSpacing: '-0.02em' }}>
              24/7 Mobile Tyre Fitting Wigan
            </h1>
            <p className="text-white/95 lg:text-white/80 text-base leading-relaxed mb-5 sm:mb-6">
              Need mobile tyre fitting in Wigan? Our mobile team comes to you for a flat tyre at home, a puncture at work or a damaged tyre.
            </p>

            <HeroPostcodes slug="wigan" />
            {/* Trust bullets — hidden for now
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 mb-6">
              {[
                '24/7 Emergency Mobile Tyre Fitting',
                'Mobile Tyre Replacement At Home, Work Or Roadside',
                'Puncture Inspection and Repair Where Suitable',
                'Premium and Budget Tyre Options',
                'Mobile Jump-Start Assistance',
                'TPMS Checks and Locking Wheel Nut Removal',
              ].map((item) => (
                <div key={item} className="flex items-center gap-2.5 text-white lg:text-white/90">
                  <span aria-hidden="true" data-nosnippet className="material-symbols-outlined text-green-400 shrink-0" style={{ fontSize: '20px', fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  <span className="text-base font-semibold leading-snug">{item}</span>
                </div>
              ))}
            </div>
            */}
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
              <span className="text-white/80 lg:text-white/60 text-xs font-medium">Rated By Drivers Across Wigan &amp; Greater Manchester</span>
            </a>
            <HeroCtaButtons />

          </div>
        </section>

        <HeroQuoteSection area="Wigan" />

        {/* ── 2. REVIEWS */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10 sm:mb-14">
              <span className="text-[#b70011] font-bold uppercase tracking-widest text-sm mb-3 block">Google Reviews</span>
              <h2 className="text-2xl sm:text-[32px] font-bold text-[#0f172a] mb-4" style={{ fontFamily: 'var(--font-work-sans)', letterSpacing: '-0.01em' }}>What Our Customers Say</h2>
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
              <a href="https://share.google/bejdYHzU10lFRVv4E" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-[#b70011] font-bold text-sm hover:underline">
                View all Google reviews
                <span aria-hidden="true" data-nosnippet className="material-symbols-outlined text-[16px]">open_in_new</span>
              </a>
            </div>
          </div>
        </section>

        {/* ── 3. SERVICES */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10 sm:mb-16">
              <span className="text-[#b70011] font-bold uppercase tracking-widest text-sm mb-2 block">What We Do</span>
              <h2 className="text-2xl sm:text-[32px] font-bold text-slate-900 mb-3 leading-tight" style={{ fontFamily: 'var(--font-work-sans)', letterSpacing: '-0.01em' }}>
                Our Mobile Tyre Services in Wigan
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto text-base">
                A flat or damaged tyre can disrupt your journey and make driving unsafe. Our mobile tyre fitting service brings tyre assistance directly to your location, helping you avoid an unnecessary trip to a garage when your vehicle cannot be driven safely.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {[
                { img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Emergency%20Tyre%20Fitting%20one%20Stop-airanko-gsjvsGamoet8drKwCMHYr6LH5Ni6ZI.webp', title: '24/7 Mobile Tyre Fitting', desc: 'Arrange tyre fitting at your home, workplace or another suitable location across Wigan. Contact us to check availability and discuss your tyre requirements.', badge: 'FAST RESPONSE',
                  href: '/mobile-tyre-fitting' },
                { img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Home%20Tyre%20Fitting%20One%20Stop-airanko-kPAsyn08SjxXwLwCVhxre5zM9jWBTs.webp', title: 'Emergency Tyre Replacement', desc: 'If your tyre has suffered a blowout or damage that makes it unsafe to repair, we can help arrange a suitable replacement, subject to stock and vehicle specifications.', badge: '24/7 DISPATCH',
                  href: '/home-tyre-fitting' },
                { img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Puncture%20Repair%20One%20Stop-airanko-sfmhLvDbSYmhoMprTVOHCcIWEgJvHf.webp', title: 'Mobile Puncture Repair', desc: 'Our technicians can inspect a punctured tyre and determine whether a repair is safe and appropriate. If the damage cannot be repaired safely, a replacement may be necessary.', badge: 'CERTIFIED REPAIR',
                  href: '/puncture-repair-Greater-manchester' },
                { img: '/images/tyre-fitting-at-home.webp', title: 'Home and Workplace Tyre Fitting', desc: 'Arrange tyre fitting at your property or workplace without making a separate trip to a garage. The location must provide enough space and safe access for the technician to work.', badge: 'AT YOUR DOOR',
                  href: '/home-tyre-fitting' },
                { img: '/images/professional-mobile-tyre-fitting.webp', title: 'Roadside Tyre Assistance', desc: 'If you experience tyre trouble while travelling around Wigan, share your exact location with our team. We can discuss available assistance and provide an arrival estimate.', badge: '24/7 SUPPORT',
                  href: '/roadside-assistance' },
                { img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/One%20Stop%20Jumpstart%20image-airanko-cXmOrXcdtaIBMNQOMCIOiPj1C290RG.webp', title: 'Mobile Jump-Start Assistance', desc: "If your vehicle will not start because of a flat battery, ask about our mobile jump-start service. Availability depends on your location and the vehicle's requirements.", badge: '24/7 SERVICE',
                  href: '/jump-start' },
                { img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Tyre%20pressure%20monitor-airanko-sjz7PL2Pv4N9jlPWtz5Wa1q8XO0FgP.webp', title: 'TPMS Checks and Resets', desc: 'Tyre pressure monitoring system (TPMS) checks or resets may be available following tyre fitting or repair, depending on your vehicle and its monitoring system.', badge: 'ALL VEHICLES',
                  href: '/tpms-reset' },
                { img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Locking%20nut%20removal-airanko%20%281%29-ONBmqaZHMozU0jjrxbPe5J7C4zRQkS.webp', title: 'Locking Wheel Nut Removal', desc: 'If you have lost your locking wheel nut key, tell us before booking. Removal may be possible depending on the wheel nut design, vehicle and equipment required.', badge: 'DAMAGE FREE',
                  href: '/locking-nut-removal' },
              ].map((card) => (
                <a key={card.title} href={card.href} className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all overflow-hidden border-b-4 border-[#b70011]">
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
                    <span className="absolute top-3 left-3 text-xs font-bold text-white bg-[#b70011] px-3 py-1 rounded-full">{card.badge}</span>
                  </div>
                  <div className="p-5 sm:p-6">
                    <h3 className="text-base sm:text-lg font-semibold mb-2 text-[#0f172a]" style={{ fontFamily: 'var(--font-work-sans)' }}>{card.title}</h3>
                    <p className="text-slate-600 text-base leading-relaxed mb-3">{card.desc}</p>
                    <div className="flex items-center justify-end">
                      <span aria-hidden="true" data-nosnippet className="material-symbols-outlined text-slate-400 group-hover:text-[#b70011] group-hover:translate-x-1 transition-all">arrow_forward</span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
            <div className="mt-10 sm:mt-12 bg-[#0f172a] rounded-2xl sm:rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row flex-wrap items-center justify-between gap-5 shadow-2xl text-center sm:text-left">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">Need Immediate Assistance?</h3>
                <p className="text-slate-400 text-base">Speak directly to a technician for an instant quote and arrival time.</p>
              </div>
              <a href="tel:+447759708646" className="cta-btn cta-call bg-[#dc2626] text-white font-black px-8 py-4 rounded-xl text-xl sm:text-2xl hover:scale-105 transition-transform shadow-lg shadow-red-900/20 whitespace-nowrap" style={{ fontFamily: 'var(--font-work-sans)' }}>
                07759 708 646
              </a>
            </div>
          </div>
        </section>

        {/* ── 4. EXPERT SECTION */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
            <div className="w-full lg:w-1/2 relative pb-8 sm:pb-10">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="relative z-10 rounded-2xl sm:rounded-3xl shadow-2xl border-4 sm:border-8 border-slate-50 w-full object-cover" src="/images/tyres-fitting-anywhere.webp" alt="Mobile tyre fitting technician" width={800} height={600} loading="lazy" decoding="async" />
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
              <span className="text-[#b70011] font-bold uppercase tracking-widest text-sm mb-3 block">What You Can Expect</span>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl text-[#0f172a] mb-5 sm:mb-8 leading-tight font-bold" style={{ fontFamily: 'var(--font-work-sans)' }}>
                Professional Mobile Tyre Fitting in Wigan
              </h2>
              <p className="text-slate-600 mb-4 sm:mb-6 leading-relaxed text-base sm:text-lg">
                A flat or damaged tyre can disrupt your journey and make driving unsafe. Our mobile tyre fitting service brings tyre assistance directly to your location, helping you avoid an unnecessary trip to a garage when your vehicle cannot be driven safely.
              </p>
              <p className="text-slate-600 mb-6 sm:mb-8 leading-relaxed text-base sm:text-lg">
                One Stop Tyres 247 provides mobile tyre fitting, emergency tyre replacement and puncture repair across Wigan. Whether you&apos;re at home in Standish, at work in Hindley or dealing with a tyre problem near Ashton-in-Makerfield, our team can discuss your requirements and confirm availability. We can arrange suitable replacement tyres, inspect punctures and provide roadside tyre assistance where safe access is available. Before you confirm a booking, our team can explain the available options, pricing and estimated arrival time.
              </p>
              <ul className="space-y-4 sm:space-y-5">
                <FeatureItem icon="bolt" title="24/7 Mobile Tyre Fitting" desc="Tyres fitted at your home, workplace or roadside location." />
                <FeatureItem icon="engineering" title="Emergency Tyre Replacement" desc="Fast replacement of damaged or unsafe tyres across Greater Manchester." />
                <FeatureItem icon="sell" title="Mobile Puncture Repair" desc="Professional puncture repairs where safe and suitable." />
              </ul>
            </div>
          </div>
        </section>

        {/* ── 5. WHY CHOOSE US */}
        <WhyChooseGrid
          heading="Why Wigan Drivers Choose Our Mobile Tyre Service"
          intro="When a tyre problem interrupts your journey, you need convenient assistance, clear pricing and a suitable solution for your vehicle."
          items={[
            { icon: 'bolt', title: '24/7 Emergency Availability', desc: 'Tyre problems can happen during the day or overnight. Our service operates around the clock in covered areas, subject to technician availability.' },
            { icon: 'home_repair_service', title: 'Convenient Mobile Assistance', desc: 'We can arrange tyre fitting at home, work or a suitable roadside location. This can be particularly helpful when driving on a damaged tyre would be unsafe.' },
            { icon: 'sell', title: 'Clear Pricing Before Dispatch', desc: 'The cost depends on your tyre size, chosen tyre, location and the work required. Request a quote before confirming the booking so you understand the expected cost.' },
            { icon: 'engineering', title: 'Insured Professional Technicians', desc: 'Our website states that our tyre technicians are insured. Share your vehicle details when booking so the team can confirm whether the required work can be carried out.' },
            { icon: 'tire_repair', title: 'Tyre Options for Different Budgets', desc: 'Premium and budget tyre options are available subject to stock and vehicle requirements. Ask the team about suitable choices for your vehicle and budget.' },
            { icon: 'build', title: 'Additional Vehicle Assistance', desc: 'Alongside tyre fitting and replacement, we offer services including puncture repair, jump-start assistance, TPMS checks and locking wheel nut removal, subject to suitability and availability.' },
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
                How Mobile Tyre Fitting in Wigan Works
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-5 gap-8 sm:gap-4 lg:gap-6">
              {[
                { title: 'Contact Our Team', desc: 'Call 07759 708 646 and explain whether you have a puncture, flat tyre, blowout or need a planned replacement.' },
                { title: 'Share Your Location and Vehicle Details', desc: 'Provide your postcode or location pin, vehicle make and model, and tyre size if known. A photograph of the tyre sidewall can help identify the correct size.' },
                { title: 'Confirm the Quote and Arrival Estimate', desc: 'Our team will discuss suitable tyre options, pricing and the estimated arrival time. Timing depends on your location, traffic, technician availability and tyre stock.' },
                { title: 'Have Your Tyre Assessed', desc: 'The technician will inspect the tyre and determine whether repair or replacement is appropriate. If a replacement is needed, the correct tyre must be available and compatible with your vehicle.' },
                { title: 'Complete the Fitting or Repair', desc: 'Once the work and price have been agreed, the technician can carry out the service if conditions are safe and suitable. Tyre pressure and TPMS checks can be completed where applicable.' },
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
              Mobile Tyre Replacement Across Wigan
            </h2>
            <p className="text-slate-600 mb-4 leading-relaxed text-base sm:text-lg">
              A tyre with a sidewall bulge, severe damage, a blowout or an unsuitable puncture may need replacing rather than repairing.
            </p>
            <p className="text-slate-600 mb-4 leading-relaxed text-base sm:text-lg">
              Our mobile tyre replacement service in Wigan helps drivers arrange a replacement without taking their vehicle to a garage. We can discuss suitable tyre options and confirm availability before arranging a visit.
            </p>
            <p className="text-slate-600 mb-4 leading-relaxed text-base sm:text-lg">
              When requesting a replacement, provide your vehicle details and tyre size if possible. This helps the team identify a suitable tyre and give you a more accurate quote.
            </p>
            <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
              We cover locations throughout Wigan, including Wigan town centre, Hindley, Standish, Orrell, Leigh, Atherton, Pemberton and Ashton-in-Makerfield.
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
              Emergency Mobile Tyre Fitting Near the M6 and Wigan Roads
            </h2>
            <p className="text-slate-600 mb-4 leading-relaxed text-base sm:text-lg">
              A tyre problem can occur while travelling to work, visiting local businesses or driving along a major route. If your tyre is damaged, avoid driving on it when doing so could put you or other road users at risk.
            </p>
            <p className="text-slate-600 mb-4 leading-relaxed text-base sm:text-lg">
              Contact our team with your exact location and explain what has happened. We can discuss the available service, the likely cost and an estimated arrival time.
            </p>
            <p className="text-slate-600 mb-4 leading-relaxed text-base sm:text-lg">
              Our listed coverage includes the M6 around Junctions 23–27, alongside the M61 and M60 in the wider Greater Manchester area. Attendance depends on the exact location, traffic, technician availability and safe access.
            </p>
            <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
              <span className="font-bold text-[#0f172a]">Motorway safety:</span> If you break down on a motorway, follow official motorway breakdown procedures and contact the appropriate assistance service. Do not attempt to change a tyre beside live traffic or in another unsafe location.
            </p>
          </div>
        </section>

        {/* ── MOBILE TYRE FITTING AREAS IN WIGAN ────────────── */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2
              className="text-2xl sm:text-[32px] font-bold text-slate-900 mb-4 leading-tight text-center"
              style={{ fontFamily: 'var(--font-work-sans)', letterSpacing: '-0.01em' }}
            >
              Mobile Tyre Fitting Areas in Wigan
            </h2>
            <p className="text-slate-600 mb-8 leading-relaxed text-base sm:text-lg text-center max-w-2xl mx-auto">
              We provide mobile tyre fitting across Wigan and surrounding towns and neighbourhoods. Contact us with your postcode to confirm coverage and availability.
            </p>
            <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-3 mb-8">
              {[
                'Wigan town centre', 'Abram', 'Ashton-in-Makerfield', 'Aspull',
                'Atherton', 'Astley', 'Billinge', 'Bickershaw',
                'Bryn', 'Golborne', 'Haigh', 'Hindley',
                'Hindley Green', 'Ince-in-Makerfield', 'Leigh', 'Lowton',
                'Orrell', 'Pemberton', 'Platt Bridge', 'Scholes',
                'Shevington', 'Standish', 'Tyldesley', 'Winstanley',
                'Worthington',
              ].map((area) => (
                <li key={area} className="flex items-center gap-2 text-slate-700 text-sm sm:text-base">
                  <span aria-hidden="true" data-nosnippet className="material-symbols-outlined text-[#b70011] shrink-0" style={{ fontSize: '18px', fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  <span>{area}</span>
                </li>
              ))}
            </ul>
            <p className="text-slate-600 leading-relaxed text-base sm:text-lg text-center">
              Mobile tyre assistance near Wigan town centre: if your vehicle has a flat tyre, contact our team with your exact location. We also cover Leigh and Atherton — share your postcode and vehicle details so the team can confirm the available options.
            </p>
          </div>
        </section>

        {/* ── 9. BRAND CAROUSEL */}
        <BrandCarousel />

        {/* ── NEARBY AREAS ───────────────────────────────────── */}
        <NearbyAreas currentSlug="wigan" />

        {/* ── SERVICE AREAS MAP ──────────────────────────────── */}
        <ServiceAreasMap />

        {/* ── LOCAL AREA DETAILS ─────────────────────────────── */}
        <LocalAreaInfo currentSlug="wigan" />

        {/* ── 10. FAQ */}
        <CityFaq
          canonical="https://onestoptyres247.co.uk/mobile-tyre-fitting-wigan" city="Wigan" faqs={[
          { q: 'Do you provide mobile tyre fitting in Wigan 24/7?', a: 'Yes. Our mobile tyre fitting service operates 24 hours a day in covered areas. Contact us to confirm technician availability and arrange assistance.' },
          { q: 'How quickly can a mobile tyre fitter reach Wigan town centre?', a: 'The website advertises a typical response estimate of around 20–30 minutes. This is not guaranteed; actual arrival time depends on your location, traffic, weather, technician availability and the work required. Confirm the estimate when booking.' },
          { q: 'Do you offer emergency tyre replacement in Wigan?', a: 'Yes. We offer emergency tyre replacement in covered areas, subject to the correct tyre being available and safe access to your vehicle.' },
          { q: 'Can you fit a tyre at my home in Wigan?', a: 'Yes. Home tyre fitting can be arranged where there is enough space and safe access for the technician to carry out the work.' },
          { q: 'Can you fit tyres at my workplace?', a: 'Yes. We can discuss workplace tyre fitting if the location is accessible and suitable for the work. Provide your address and preferred time when requesting a quote.' },
          { q: 'Can you repair a punctured tyre at my location?', a: 'Our technicians can inspect the puncture and determine whether a repair is safe and appropriate. The damage location, size and overall tyre condition affect whether repair is possible.' },
          { q: 'How much does mobile tyre fitting in Wigan cost?', a: 'The price depends on the tyre size, brand, location and service required. Contact us for a quote before confirming your booking.' },
          { q: 'Can I choose premium or budget tyres?', a: 'Premium and budget tyre options are listed among our services. Availability depends on the required size and current stock. Ask the team about suitable options and prices.' },
          { q: 'What information do I need to book a mobile tyre fitter?', a: 'Provide your postcode or location pin, vehicle make and model, tyre size if known, and a description of the problem. A photograph of the tyre markings can help identify the correct size.' },
          { q: 'What if I do not know my tyre size?', a: 'Share your vehicle details and, if possible, a photograph of the numbers and letters printed on the tyre sidewall. The team can use these details to help identify the correct size.' },
          { q: 'Do you cover Standish, Hindley and Orrell?', a: 'Yes. Standish, Hindley and Orrell are included in the listed Wigan service areas. Contact us to confirm availability for your exact postcode.' },
          { q: 'Can you provide mobile tyre fitting in Leigh and Atherton?', a: 'Yes. Leigh and Atherton are listed among the nearby areas we cover. Contact us to confirm the estimated arrival time and tyre availability.' },
          { q: 'Can you replace a tyre after a blowout?', a: 'Yes. We can discuss replacement options if your tyre has suffered a blowout. The correct tyre must be available and compatible with your vehicle.' },
          { q: 'Do you provide mobile tyre fitting for vans?', a: "Contact us with your van's make, model and tyre size. The team can confirm whether a suitable commercial tyre is available and whether the required fitting can be arranged." },
          { q: 'Can you provide tyre assistance on the M6 near Wigan?', a: 'The website lists M6 coverage around Junctions 23–27. Any assistance depends on your exact location and safe access. Follow official motorway breakdown procedures and do not attempt repairs beside live traffic.' },
          { q: 'Do you offer mobile jump-start assistance?', a: "Yes. Mobile jump-start assistance is listed among our services. Contact us to confirm availability and explain your vehicle's symptoms." },
          { q: 'Can you check or reset my TPMS?', a: 'TPMS checks and resets are listed among our services. The work required depends on your vehicle and the monitoring system fitted.' },
          { q: 'Can you remove a locking wheel nut if I have lost the key?', a: 'Locking wheel nut removal is listed as a service. Tell us your vehicle details when booking so the team can confirm whether removal is possible with the available equipment.' },
          { q: 'Do you accept card and contactless payments?', a: 'The current Wigan page lists card, cash and contactless payments. If you have a specific payment requirement, confirm the available options when booking.' },
          { q: 'Can I book a specific time for tyre fitting?', a: 'You can request a preferred time when contacting the team. Appointment availability depends on technician scheduling, your location and the tyre required.' },
          { q: 'Is same-day mobile tyre fitting available in Wigan?', a: 'Same-day service may be available depending on technician availability, your location and tyre stock. Contact the team to confirm a suitable appointment.' },
          { q: 'How do I book emergency mobile tyre fitting in Wigan?', a: 'Call 07759 708 646. Share your location, vehicle details and tyre problem so the team can discuss the quote, availability and estimated arrival time.' },
        ]} />

        {/* ── 11. FINAL CTA */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-[#f0edec] relative">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-h2 text-xl sm:text-2xl lg:text-h2 mb-4 sm:mb-5 leading-tight">Need Mobile Tyre Fitting in Wigan Right Now?</h2>
            <p className="font-body-lg text-base lg:text-lg text-[#5c403c] leading-relaxed mb-6 sm:mb-8">If you have a flat tyre, a puncture or a damaged tyre, contact One Stop Tyres 247 to discuss mobile tyre fitting, emergency tyre replacement and puncture repair across Wigan and surrounding areas. Our team can help you check availability, understand your options and arrange a visit to a suitable location. 24/7 mobile tyre assistance across Wigan and nearby areas, subject to availability and safe access.</p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center mt-4 sm:mt-6">
              <a className="cta-btn cta-call flex items-center justify-center gap-2 sm:gap-3 bg-[#dc2626] hover:bg-[#b70011] text-white px-6 sm:px-10 py-4 sm:py-5 rounded-lg font-call-to-action text-base transition-all shadow-xl" href="tel:+447759708646">
                <span aria-hidden="true" data-nosnippet className="material-symbols-outlined text-xl sm:text-2xl">phone_in_talk</span>
                07759 708 646
              </a>
              <a className="cta-btn cta-call flex items-center justify-center gap-2 sm:gap-3 bg-[#dc2626] hover:bg-[#b70011] text-white px-6 sm:px-10 py-4 sm:py-5 rounded-lg font-call-to-action text-base transition-all shadow-xl" href="tel:+441613995851">
                <span aria-hidden="true" data-nosnippet className="material-symbols-outlined text-xl sm:text-2xl">phone_in_talk</span>
                0161 399 5851
              </a>
              <a className="cta-btn cta-btn-wa flex items-center justify-center gap-2 sm:gap-3 bg-[#1c1b1b] hover:bg-slate-800 text-white px-6 sm:px-10 py-4 sm:py-5 rounded-lg font-call-to-action text-base transition-all shadow-xl" href="https://wa.me/447759708646">
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
