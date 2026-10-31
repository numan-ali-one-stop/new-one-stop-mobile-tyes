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
  slug: 'mobile-tyre-fitting-trafford',
  alternateName: '24/7 Mobile Tyre Fitting Trafford',
  areaServed: 'Trafford, Greater Manchester',
  description:
    'Need mobile tyre fitting in Trafford? Get 24/7 tyre replacement, puncture repair and roadside assistance at home, work or roadside.',
})

const _organizationSchema = pageOrganizationSchema('mobile-tyre-fitting-trafford')
const _websiteSchema = pageWebsiteSchema('mobile-tyre-fitting-trafford')
const _automotiveBusinessSchema = automotiveBusinessSchema({
  slug: 'mobile-tyre-fitting-trafford',
  image: 'https://onestoptyres247.co.uk/images/tyres-fitting-anywhere.webp',
  addressLocality: 'Trafford',
})

export const metadata = buildMetadata({
  title: 'Mobile Tyre Fitting Trafford | 24/7 Tyre Replacement',
  description:
    'Need mobile tyre fitting in Trafford? Get 24/7 tyre replacement, puncture repair and roadside assistance at home, work or roadside.',
  path: '/mobile-tyre-fitting-trafford',
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

export default function TraffordPage() {
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
              24/7 Mobile Tyre Fitting Trafford
            </h1>

            <p className="text-white/95 lg:text-white/80 text-base leading-relaxed mb-5 sm:mb-6">
              Need mobile tyre fitting in Trafford? Our mobile team comes to you for a flat tyre at home, a puncture at work or a damaged tyre.
            </p>

            <HeroPostcodes slug="trafford" />

            {/* Trust bullets — hidden for now
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 mb-6">
              {[
                '24/7 Emergency Mobile Tyre Fitting',
                'Tyre Replacement At Home, Work Or Roadside',
                'Puncture Inspection and Repair Where Suitable',
                'Premium, Mid-Range and Budget Tyre Options',
                'Mobile Jump-Start Assistance',
                'TPMS Checks and Locking Wheel Nut Removal',
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
              <span className="text-white/80 lg:text-white/60 text-xs font-medium">Rated By Drivers Across Trafford &amp; Greater Manchester</span>
            </a>

            {/* CTAs */}
            <HeroCtaButtons />

          </div>
        </section>

        <HeroQuoteSection area="Trafford" />

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
                Our Mobile Tyre Services in Trafford
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto text-base">
                A flat or damaged tyre can disrupt your journey and make driving unsafe. Our mobile tyre fitting service brings tyre assistance directly to your location, helping you avoid an unnecessary trip to a garage when your vehicle cannot be driven safely.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {[
                {
                  img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Emergency%20Tyre%20Fitting%20one%20Stop-airanko-gsjvsGamoet8drKwCMHYr6LH5Ni6ZI.webp',
                  title: '24/7 Mobile Tyre Fitting',
                  desc: 'Arrange tyre fitting at your home, workplace or another suitable location across Trafford. Contact our team to confirm availability and discuss your tyre requirements.',
                  badge: 'FAST RESPONSE',
                  href: '/mobile-tyre-fitting',
                },
                {
                  img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Home%20Tyre%20Fitting%20One%20Stop-airanko-kPAsyn08SjxXwLwCVhxre5zM9jWBTs.webp',
                  title: 'Emergency Tyre Replacement',
                  desc: 'If your tyre has suffered a blowout or damage that makes it unsafe to repair, we can help arrange a suitable replacement, subject to stock and vehicle specifications.',
                  badge: '24/7 DISPATCH',
                  href: '/home-tyre-fitting',
                },
                {
                  img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Puncture%20Repair%20One%20Stop-airanko-sfmhLvDbSYmhoMprTVOHCcIWEgJvHf.webp',
                  title: 'Mobile Puncture Repair',
                  desc: 'Our technicians can inspect a punctured tyre and determine whether it can be repaired safely. If the damage is unsuitable for repair, a replacement may be necessary.',
                  badge: 'CERTIFIED REPAIR',
                  href: '/puncture-repair-Greater-manchester',
                },
                {
                  img: '/images/tyre-fitting-at-home.webp',
                  title: 'Home and Workplace Tyre Fitting',
                  desc: 'Save time by arranging tyre fitting at your property or workplace. The location must have enough space and safe access for the technician to carry out the work.',
                  badge: 'AT YOUR DOOR',
                  href: '/home-tyre-fitting',
                },
                {
                  img: '/images/professional-mobile-tyre-fitting.webp',
                  title: 'Roadside Tyre Assistance',
                  desc: 'If you experience tyre trouble while travelling around Trafford, share your exact location with our team. We can discuss available assistance and the estimated arrival time.',
                  badge: '24/7 SUPPORT',
                  href: '/roadside-assistance',
                },
                {
                  img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/One%20Stop%20Jumpstart%20image-airanko-cXmOrXcdtaIBMNQOMCIOiPj1C290RG.webp',
                  title: 'Mobile Jump-Start Assistance',
                  desc: 'If your vehicle will not start because of a flat battery, ask about our mobile jump-start service. Availability depends on your location and vehicle requirements.',
                  badge: '24/7 SERVICE',
                  href: '/jump-start',
                },
                {
                  img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Tyre%20pressure%20monitor-airanko-sjz7PL2Pv4N9jlPWtz5Wa1q8XO0FgP.webp',
                  title: 'TPMS Checks and Resets',
                  desc: 'Tyre pressure monitoring system (TPMS) checks or resets may be available after fitting or repair, depending on the vehicle and the system installed.',
                  badge: 'ALL VEHICLES',
                  href: '/tpms-reset',
                },
                {
                  img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Locking%20nut%20removal-airanko%20%281%29-ONBmqaZHMozU0jjrxbPe5J7C4zRQkS.webp',
                  title: 'Locking Wheel Nut Removal',
                  desc: 'If you have lost your locking wheel nut key, tell us before booking. Removal may be possible depending on the wheel nut design, vehicle and equipment required.',
                  badge: 'DAMAGE FREE',
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
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">Need Immediate Assistance?</h3>
                <p className="text-slate-400 text-base">
                  Speak directly to a technician for an instant quote and arrival time.
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
                src="/images/mobile-tyre-fitting-manchester.webp"
                alt="Mobile tyre fitting technician in Trafford"
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
                Professional Mobile Tyre Fitting in Trafford
              </h2>
              <p className="text-slate-600 mb-4 sm:mb-6 leading-relaxed text-base sm:text-lg">
                A flat or damaged tyre can disrupt your journey and make driving unsafe. Our mobile tyre fitting service brings tyre assistance directly to your location, helping you avoid an unnecessary trip to a garage when your vehicle cannot be driven safely.
              </p>
              <p className="text-slate-600 mb-6 sm:mb-8 leading-relaxed text-base sm:text-lg">
                One Stop Tyres 247 provides mobile tyre fitting, emergency tyre replacement and puncture repair across Trafford. Whether you are at home in Sale, at work in Altrincham or dealing with a tyre problem near the Trafford Centre, our team can discuss your requirements and confirm service availability. We can supply and fit suitable replacement tyres, inspect punctures and provide roadside assistance where safe access is available. Our team will explain the available options and pricing before you confirm the service.
              </p>
              <ul className="space-y-4 sm:space-y-5">
                <FeatureItem
                  icon="bolt"
                  title="24/7 Mobile Tyre Fitting"
                  desc="Tyres fitted at your home, workplace or roadside location."
                />
                <FeatureItem
                  icon="engineering"
                  title="Emergency Tyre Replacement"
                  desc="Fast replacement of damaged or unsafe tyres across Greater Manchester."
                />
                <FeatureItem
                  icon="sell"
                  title="Mobile Puncture Repair"
                  desc="Professional puncture repairs where safe and suitable."
                />
              </ul>
            </div>
          </div>
        </section>

        {/* ── 5. WHY TRAFFORD DRIVERS CHOOSE US ────────────── */}
        <WhyChooseGrid
          heading="Why Trafford Drivers Choose Our Mobile Tyre Service"
          intro="When you have a damaged tyre, you need convenient assistance, clear pricing and a suitable solution for your vehicle."
          items={[
            { icon: 'bolt', title: '24/7 Emergency Availability', desc: 'Tyre problems can happen at any time. Our mobile service operates around the clock in covered areas, subject to technician availability.' },
            { icon: 'home_repair_service', title: 'Assistance at Your Location', desc: 'We can arrange tyre fitting at home, work or a suitable roadside location. This can be particularly useful when driving on a damaged tyre would be unsafe.' },
            { icon: 'sell', title: 'Clear, Upfront Pricing', desc: 'The cost depends on your tyre size, chosen tyre, location and the work required. Our team will explain the quote before the service is confirmed.' },
            { icon: 'engineering', title: 'Insured Professional Technicians', desc: 'Our Trafford service page states that technicians are insured. Share your vehicle details when booking so the team can confirm that the required work can be carried out.' },
            { icon: 'tire_repair', title: 'Tyre Options for Different Budgets', desc: 'Premium, mid-range and budget tyres may be available depending on your tyre size and current stock. Ask the team about suitable options before confirming your booking.' },
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
                How Mobile Tyre Fitting in Trafford Works
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-5 gap-8 sm:gap-4 lg:gap-6">
              {[
                { title: 'Contact Our Team', desc: 'Call 07759 708 646 or 0161 399 5851. Explain whether you have a puncture, flat tyre, blowout or need a planned replacement.' },
                { title: 'Share Your Location and Vehicle Details', desc: 'Provide your postcode or location pin, vehicle make and model, and tyre size if known. A photograph of the tyre sidewall can help identify the correct size.' },
                { title: 'Confirm Your Quote and Arrival Estimate', desc: 'Our team will discuss suitable tyre options, pricing and the estimated arrival time. Timing depends on your location, traffic, technician availability and tyre stock.' },
                { title: 'Have Your Tyre Assessed', desc: 'The technician will inspect the tyre and determine whether repair or replacement is appropriate. If a replacement is required, the correct tyre must be available and compatible with your vehicle.' },
                { title: 'Complete the Fitting or Repair', desc: 'Once the work and price are agreed, the technician can carry out the service if the location and conditions are safe. Tyre pressure and TPMS checks can be completed where applicable.' },
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
              Mobile Tyre Replacement Across Trafford
            </h2>
            <p className="text-slate-600 mb-4 leading-relaxed text-base sm:text-lg">
              A tyre with a sidewall bulge, serious damage, a blowout or an unsuitable puncture may need replacing rather than repairing.
            </p>
            <p className="text-slate-600 mb-4 leading-relaxed text-base sm:text-lg">
              Our mobile tyre replacement service in Trafford helps drivers arrange a replacement without having to take their vehicle to a garage. We can discuss suitable tyre options and check availability before arranging a visit.
            </p>
            <p className="text-slate-600 mb-6 leading-relaxed text-base sm:text-lg">
              When requesting a replacement, provide your vehicle details and tyre size if possible. This helps the team identify a suitable tyre and give you a more accurate quote.
            </p>
            <p className="font-bold text-[#0f172a] mb-3">We cover locations throughout Trafford, including:</p>
            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-3">
              {[
                'Stretford', 'Altrincham', 'Sale', 'Urmston',
                'Old Trafford', 'Timperley', 'Bowdon', 'Hale',
                'Davyhulme', 'Flixton', 'Partington', 'Ashton upon Mersey',
                'Broadheath', 'Brooklands', 'Sale Moor', 'Carrington',
              ].map((area) => (
                <li key={area} className="flex items-center gap-2 text-slate-700 text-sm sm:text-base">
                  <span aria-hidden="true" data-nosnippet className="material-symbols-outlined text-[#b70011] shrink-0" style={{ fontSize: '18px', fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  <span>{area}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── 8. EMERGENCY MOBILE TYRE FITTING ──────────────── */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 bg-slate-50">
          <div className="max-w-3xl mx-auto">
            <h2
              className="text-2xl sm:text-[32px] font-bold text-slate-900 mb-4 leading-tight"
              style={{ fontFamily: 'var(--font-work-sans)', letterSpacing: '-0.01em' }}
            >
              Emergency Mobile Tyre Fitting Near the Trafford Centre
            </h2>
            <p className="text-slate-600 mb-4 leading-relaxed text-base sm:text-lg">
              A flat tyre near a shopping centre, business park or busy road can leave you stranded and disrupt your plans. If your vehicle cannot be driven safely, contact our team rather than risking further damage.
            </p>
            <p className="text-slate-600 mb-4 leading-relaxed text-base sm:text-lg">
              We provide mobile tyre fitting across Trafford, including the Trafford Centre area and nearby locations such as Stretford, Urmston and Davyhulme. Share your exact location so the team can confirm whether assistance is available and provide an arrival estimate.
            </p>
            <p className="text-slate-600 mb-4 leading-relaxed text-base sm:text-lg">
              Our listed road coverage includes the M60, M56, A56 and A57 in the wider Greater Manchester area. Attendance depends on your exact position, traffic and safe access.
            </p>
            <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
              <span className="font-bold text-[#0f172a]">Motorway safety:</span> If you break down on a motorway, follow official breakdown procedures and contact the appropriate assistance service. Do not attempt to change a tyre beside live traffic or in another unsafe location.
            </p>
          </div>
        </section>

        {/* ── MOBILE TYRE FITTING AREAS IN TRAFFORD ─────────── */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2
              className="text-2xl sm:text-[32px] font-bold text-slate-900 mb-4 leading-tight text-center"
              style={{ fontFamily: 'var(--font-work-sans)', letterSpacing: '-0.01em' }}
            >
              Mobile Tyre Fitting Areas in Trafford
            </h2>
            <p className="text-slate-600 mb-8 leading-relaxed text-base sm:text-lg text-center max-w-2xl mx-auto">
              We provide mobile tyre fitting across Trafford and surrounding neighbourhoods. Contact us with your postcode to confirm coverage and availability.
            </p>
            <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-3 mb-8">
              {[
                'Altrincham', 'Ashton upon Mersey', 'Baguley', 'Bowdon',
                'Broadheath', 'Brooklands', 'Carrington', 'Davyhulme',
                'Dunham Massey', 'Flixton', 'Hale', 'Old Trafford',
                'Partington', 'Priory Green', 'Sale', 'Sale Moor',
                'Stretford', 'Timperley', 'Urmston', 'Urmston Meadows',
              ].map((area) => (
                <li key={area} className="flex items-center gap-2 text-slate-700 text-sm sm:text-base">
                  <span aria-hidden="true" data-nosnippet className="material-symbols-outlined text-[#b70011] shrink-0" style={{ fontSize: '18px', fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  <span>{area}</span>
                </li>
              ))}
            </ul>
            <p className="text-slate-600 leading-relaxed text-base sm:text-lg text-center">
              Mobile tyre assistance around the M60 and A56: if you experience a tyre problem while travelling around Trafford, provide your location as accurately as possible. For motorway breakdowns, prioritise your safety and follow the relevant motorway procedures.
            </p>
          </div>
        </section>

        {/* ── 9. BRAND CAROUSEL ─────────────────────────────── */}
        <BrandCarousel />

        {/* ── NEARBY AREAS ───────────────────────────────────── */}
        <NearbyAreas currentSlug="trafford" />

        {/* ── SERVICE AREAS MAP ──────────────────────────────── */}
        <ServiceAreasMap />

        {/* ── LOCAL AREA DETAILS ─────────────────────────────── */}
        <LocalAreaInfo currentSlug="trafford" />

        {/* ── 10. FAQ ───────────────────────────────────────── */}
        <CityFaq
          canonical="https://onestoptyres247.co.uk/mobile-tyre-fitting-trafford"
          city="Trafford"
          faqs={[
            { q: 'Do you provide mobile tyre fitting in Trafford 24/7?', a: 'Yes. Our mobile tyre fitting service operates 24 hours a day in covered areas. Contact us to confirm technician availability and arrange a visit.' },
            { q: 'How quickly can a mobile tyre fitter reach me in Trafford?', a: 'The current page advertises a typical response estimate of around 20–30 minutes. This is not guaranteed; actual arrival time depends on your location, traffic, weather, technician availability and the work required. Confirm the estimate when booking.' },
            { q: 'Can you provide mobile tyre fitting near the Trafford Centre?', a: 'Yes. The Trafford Centre area is within our stated Trafford coverage. Contact us with your exact location to confirm availability and the estimated arrival time.' },
            { q: 'Do you offer home tyre fitting in Sale and Altrincham?', a: 'Yes. Our service covers home tyre fitting across Trafford, including Sale and Altrincham, subject to availability and suitable access.' },
            { q: 'Can you fit tyres at my workplace?', a: 'Yes. We can arrange workplace tyre fitting where there is enough space and safe access for the technician to work. Provide the address and your preferred time when requesting a quote.' },
            { q: 'Do you offer emergency tyre replacement in Trafford?', a: 'Yes. We provide emergency tyre replacement in covered areas when a suitable tyre is available. The technician will assess the damaged tyre and explain the available options.' },
            { q: 'Can you repair a punctured tyre at my location?', a: 'Our technicians can inspect a punctured tyre and determine whether repair is safe and appropriate. Tyres with unsuitable damage or unsafe wear may need replacing.' },
            { q: 'How much does mobile tyre fitting in Trafford cost?', a: 'The price depends on your tyre size, tyre brand, location and the service required. Contact us for a quote before confirming the booking.' },
            { q: 'Can I choose premium or budget tyres?', a: 'Yes. Premium and budget tyre options are listed among our services, with availability depending on the required size and current stock. Ask the team about suitable options and prices.' },
            { q: 'What information do I need to book a mobile tyre fitter?', a: 'Provide your postcode or location pin, vehicle make and model, tyre size if known, and a description of the problem. A photograph of the tyre markings can help identify the correct size.' },
            { q: 'What if I do not know my tyre size?', a: 'Share your vehicle details and, if possible, a photograph of the numbers and letters printed on the tyre sidewall. The team can use these details to help identify the required size.' },
            { q: 'Do you cover Stretford, Urmston and Old Trafford?', a: 'Yes. Stretford, Urmston and Old Trafford are among the locations listed in our Trafford coverage. Contact us to confirm availability for your exact postcode.' },
            { q: 'Can you come to Bowdon, Hale or Timperley?', a: 'Yes. Bowdon, Hale and Timperley are included in the listed service area. Actual attendance depends on your location and current availability.' },
            { q: 'Do you provide tyre assistance around the M60 and A56?', a: 'Our listed coverage includes the M60 and major routes such as the A56. Assistance depends on your exact location and safe access. Follow official motorway breakdown procedures if you are stranded on a motorway.' },
            { q: 'Can you replace a tyre after a blowout?', a: 'Yes. We can discuss replacement options if your tyre has suffered a blowout. The correct tyre must be available and compatible with your vehicle.' },
            { q: 'Do you provide mobile jump-start assistance?', a: "Yes. Mobile jump-start assistance is listed among our services. Contact us to confirm availability and explain your vehicle's symptoms." },
            { q: 'Can you check or reset my TPMS?', a: 'TPMS checks and resets are listed among our services. The work required depends on your vehicle and the monitoring system fitted.' },
            { q: 'Can you remove a locking wheel nut if I have lost the key?', a: 'Locking wheel nut removal is listed as a service. Tell us your vehicle details when booking so the team can confirm whether removal is possible with the available equipment.' },
            { q: 'Do you accept card and contactless payments?', a: 'The current Trafford page lists card, cash and contactless payments. If you have a specific payment requirement, confirm the available options when booking.' },
            { q: 'Can I book a specific time for tyre fitting?', a: 'You can request a preferred time when contacting the team. Appointment availability depends on technician scheduling, your location and the tyre required.' },
            { q: 'Do you provide same-day mobile tyre fitting?', a: 'Same-day service may be available depending on your location, technician availability and tyre stock. Contact the team to confirm a suitable appointment.' },
            { q: 'How do I book emergency mobile tyre fitting in Trafford?', a: 'Call 07759 708 646 or 0161 399 5851. Share your location, vehicle details and tyre problem so the team can discuss the quote, availability and estimated arrival time.' },
          ]}
        />

        {/* ── 11. FINAL CTA ─────────────────────────────────── */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-[#f0edec] relative">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-h2 text-xl sm:text-2xl lg:text-h2 mb-4 sm:mb-5 leading-tight">Need Mobile Tyre Fitting in Trafford?</h2>
            <p className="font-body-lg text-base lg:text-lg text-[#5c403c] leading-relaxed mb-6 sm:mb-8">If you have a flat tyre, a puncture or a damaged tyre, contact One Stop Tyres 247 to discuss mobile tyre fitting, emergency tyre replacement and puncture repair across Trafford. Our team can help you check availability, understand your options and arrange a visit to a suitable location. 24/7 mobile tyre assistance across Trafford and surrounding areas, subject to availability and safe access.</p>
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
