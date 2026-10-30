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
  slug: 'mobile-tyre-fitting-tameside',
  alternateName: '24/7 Mobile Tyre Fitting Tameside',
  areaServed: 'Tameside, Greater Manchester',
  description:
    'Need mobile tyre fitting in Tameside? Get 24/7 tyre replacement, puncture repair and roadside assistance at home, work or roadside.',
})

const _organizationSchema = pageOrganizationSchema('mobile-tyre-fitting-tameside')
const _websiteSchema = pageWebsiteSchema('mobile-tyre-fitting-tameside')
const _automotiveBusinessSchema = automotiveBusinessSchema({
  slug: 'mobile-tyre-fitting-tameside',
  image: 'https://onestoptyres247.co.uk/images/tyres-fitting-anywhere.webp',
  addressLocality: 'Tameside',
})

export const metadata = buildMetadata({
  title: 'Mobile Tyre Fitting Tameside | 24/7 Tyre Replacement',
  description:
    'Need mobile tyre fitting in Tameside? Get 24/7 tyre replacement, puncture repair and roadside assistance at home, work or roadside.',
  path: '/mobile-tyre-fitting-tameside',
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

export default function TamesidePage() {
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
              24/7 Mobile Tyre Fitting Tameside
            </h1>

            <p className="text-white/95 lg:text-white/80 text-base leading-relaxed mb-5 sm:mb-6">
              Need mobile tyre fitting in Tameside? Our mobile tyre fitters come to you for a flat tyre at home, a puncture at work or a damaged tyre.
            </p>

            {/* Trust bullets — hidden for now
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 mb-6">
              {[
                '24/7 Emergency Mobile Tyre Fitting',
                'Mobile Tyre Replacement At Home, Work Or Roadside',
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
              <span className="text-white/80 lg:text-white/60 text-xs font-medium">Rated By Drivers Across Tameside &amp; Greater Manchester</span>
            </a>

            {/* CTAs */}
            <HeroCtaButtons />

          </div>
        </section>

        <HeroQuoteSection area="Tameside" />

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
            <ReviewsCarousel offset={5} />
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
                Our Mobile Tyre Services in Tameside
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto text-base">
                A flat or damaged tyre can interrupt your journey and make driving unsafe. Our mobile tyre fitting service brings tyre assistance directly to you, reducing the need to arrange transport to a garage when your vehicle cannot be driven safely.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {[
                {
                  img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Emergency%20Tyre%20Fitting%20one%20Stop-airanko-gsjvsGamoet8drKwCMHYr6LH5Ni6ZI.webp',
                  title: '24/7 Mobile Tyre Fitting',
                  desc: 'Arrange tyre fitting at your home, workplace or another suitable location across Tameside. Contact our team to confirm availability and the tyre required.',
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
                  desc: 'Our technicians can inspect a punctured tyre and determine whether a repair is appropriate. Repairs are carried out only where the damage and tyre condition meet applicable safety requirements.',
                  badge: 'CERTIFIED REPAIR',
                  href: '/puncture-repair-Greater-manchester',
                },
                {
                  img: '/images/tyre-fitting-at-home.webp',
                  title: 'Home and Workplace Tyre Fitting',
                  desc: 'Save time by arranging tyre fitting at your property or workplace. The location must have sufficient space and safe access for the technician to carry out the work.',
                  badge: 'AT YOUR DOOR',
                  href: '/home-tyre-fitting',
                },
                {
                  img: '/images/professional-mobile-tyre-fitting.webp',
                  title: 'Roadside Tyre Assistance',
                  desc: 'If you experience a tyre problem while travelling through Tameside, contact us with your exact location. We can discuss available assistance and provide an estimated arrival time.',
                  badge: '24/7 SUPPORT',
                  href: '/roadside-assistance',
                },
                {
                  img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/One%20Stop%20Jumpstart%20image-airanko-cXmOrXcdtaIBMNQOMCIOiPj1C290RG.webp',
                  title: 'Mobile Jump-Start Assistance',
                  desc: "If your vehicle will not start because of a flat battery, ask about our mobile jump-start service. Availability depends on your location and the vehicle's requirements.",
                  badge: '24/7 SERVICE',
                  href: '/jump-start',
                },
                {
                  img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Tyre%20pressure%20monitor-airanko-sjz7PL2Pv4N9jlPWtz5Wa1q8XO0FgP.webp',
                  title: 'TPMS Checks and Resets',
                  desc: 'Tyre pressure monitoring system checks or resets may be available after tyre fitting or repair, depending on the vehicle and the system fitted.',
                  badge: 'ALL VEHICLES',
                  href: '/tpms-reset',
                },
                {
                  img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Locking%20nut%20removal-airanko%20%281%29-ONBmqaZHMozU0jjrxbPe5J7C4zRQkS.webp',
                  title: 'Locking Wheel Nut Removal',
                  desc: 'If you have lost your locking wheel nut key, tell us before booking. Specialist removal may be possible depending on the wheel nut design and vehicle requirements.',
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
                Professional Mobile Tyre Fitting in Tameside
              </h2>
              <p className="text-slate-600 mb-4 sm:mb-6 leading-relaxed text-base sm:text-lg">
                A flat or damaged tyre can interrupt your journey and make driving unsafe. Our mobile tyre fitting service brings tyre assistance directly to you, reducing the need to arrange transport to a garage when your vehicle cannot be driven safely.
              </p>
              <p className="text-slate-600 mb-6 sm:mb-8 leading-relaxed text-base sm:text-lg">
                One Stop Tyres 247 provides mobile tyre fitting and emergency tyre replacement across Tameside. Whether you are at home in Ashton-under-Lyne, at work in Denton or dealing with a tyre problem near Hyde, our team can discuss your requirements and confirm service availability. We supply and fit suitable replacement tyres, inspect punctures and provide roadside tyre assistance where safe access is available. Our aim is to make the process straightforward, with clear pricing and an estimated arrival time before dispatch.
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
          heading="Why Tameside Drivers Choose Our Mobile Tyre Fitters"
          intro="When you have a damaged tyre, you need a service that is convenient, transparent and suitable for your vehicle."
          items={[
            { icon: 'bolt', title: '24/7 Emergency Availability', desc: 'Tyre problems can happen during the day or overnight. Our service operates 24 hours a day in covered areas, subject to technician availability.' },
            { icon: 'home_repair_service', title: 'Mobile Assistance at Your Location', desc: 'We can arrange tyre fitting at home, work or a suitable roadside location. This is particularly useful when driving on a damaged tyre would be unsafe.' },
            { icon: 'sell', title: 'Clear Pricing Before Dispatch', desc: 'The cost depends on your tyre size, chosen tyre, location and the work required. We provide a quote before dispatch so you can understand the expected cost before confirming the booking.' },
            { icon: 'engineering', title: 'Trained and Insured Technicians', desc: 'Our website states that our technicians are trained and insured. When arranging your booking, share your vehicle details so the team can confirm that the required work can be carried out.' },
            { icon: 'tire_repair', title: 'Tyre Options for Different Budgets', desc: 'We offer premium and budget tyre options, with availability depending on the required size and current stock. Ask about mid-range options if you want to compare prices.' },
            { icon: 'build', title: 'Help With More Than Flat Tyres', desc: 'Alongside tyre fitting and replacement, we offer services including puncture repair, jump-start assistance, TPMS checks and locking wheel nut removal, subject to suitability and availability.' },
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
                How Mobile Tyre Fitting in Tameside Works
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-5 gap-8 sm:gap-4 lg:gap-6">
              {[
                { title: 'Call or WhatsApp Our Team', desc: 'Contact 07759 708 646 and explain whether you have a puncture, flat tyre, blowout or need a planned replacement.' },
                { title: 'Share Your Location and Vehicle Details', desc: 'Provide your postcode or map pin, vehicle make and model, and tyre size if known. A photograph of the tyre sidewall can help identify the correct size.' },
                { title: 'Confirm the Quote and Estimated Arrival Time', desc: 'Our team will discuss the available tyre options, expected cost and estimated arrival time. Timing depends on your location, traffic, technician availability and tyre stock.' },
                { title: 'Have Your Tyre Assessed', desc: 'The technician will inspect the tyre and determine whether repair or replacement is appropriate. If a replacement is needed, the correct tyre must be available and compatible with your vehicle.' },
                { title: 'Complete the Fitting or Repair', desc: 'Once the work and price have been confirmed, the technician can carry out the agreed service if conditions are safe and suitable. Tyre pressure and TPMS checks can be completed where applicable.' },
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
              Mobile Tyre Replacement Across Tameside
            </h2>
            <p className="text-slate-600 mb-4 leading-relaxed text-base sm:text-lg">
              A tyre with a sidewall bulge, severe damage, a blowout or an unsuitable puncture may need replacing rather than repairing.
            </p>
            <p className="text-slate-600 mb-4 leading-relaxed text-base sm:text-lg">
              Our mobile tyre replacement service in Tameside helps drivers arrange a replacement without needing to take their vehicle to a garage. We can discuss tyre options for your vehicle and confirm availability before the visit.
            </p>
            <p className="text-slate-600 mb-4 leading-relaxed text-base sm:text-lg">
              When requesting a replacement, provide your tyre size and vehicle details if possible. This helps the team identify a suitable tyre and give you a more accurate quote.
            </p>
            <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
              We cover locations throughout Tameside, including Ashton-under-Lyne, Denton, Hyde, Dukinfield, Droylsden, Stalybridge and Mossley.
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
              Emergency Mobile Tyre Fitting and Puncture Repair in Tameside
            </h2>
            <p className="text-slate-600 mb-4 leading-relaxed text-base sm:text-lg">
              Tyre problems can occur on residential streets, in workplace car parks or while travelling along busy roads. If a tyre is damaged, avoid driving on it if doing so could put you or other road users at risk.
            </p>
            <p className="text-slate-600 mb-4 leading-relaxed text-base sm:text-lg">
              Contact our team and share your exact location. We can discuss the available service, the likely cost and an estimated arrival time before dispatch.
            </p>
            <p className="text-slate-600 mb-4 leading-relaxed text-base sm:text-lg">
              Our coverage includes major routes around Tameside, such as the M60, M67, A635 and A57 Hyde Road, subject to safe access and service availability.
            </p>
            <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
              <span className="font-bold text-[#0f172a]">Motorway safety:</span> If you break down on a motorway, follow official motorway breakdown procedures and contact the appropriate assistance service. Do not attempt to change a tyre beside live traffic or in another unsafe location.
            </p>
          </div>
        </section>

        {/* ── MOBILE TYRE FITTING AREAS IN TAMESIDE ─────────── */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2
              className="text-2xl sm:text-[32px] font-bold text-slate-900 mb-4 leading-tight text-center"
              style={{ fontFamily: 'var(--font-work-sans)', letterSpacing: '-0.01em' }}
            >
              Mobile Tyre Fitting Areas in Tameside
            </h2>
            <p className="text-slate-600 mb-8 leading-relaxed text-base sm:text-lg text-center max-w-2xl mx-auto">
              We provide mobile tyre fitting across Tameside and surrounding neighbourhoods. Contact us with your postcode to confirm coverage and estimated arrival time.
            </p>
            <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-3 mb-8">
              {[
                'Ashton-under-Lyne', 'Audenshaw', 'Broadbottom', 'Denton',
                'Droylsden', 'Dukinfield', 'Hattersley', 'Hollingworth',
                'Hyde', 'Longdendale', 'Mossley', 'Mottram-in-Longdendale',
                'Stalybridge', 'Flowery Field', 'Gee Cross', 'Guide Bridge',
                'Hartshead', 'Hurst', 'Lumb Lane', 'Millbrook',
                'Newton', 'Stalyhill',
              ].map((area) => (
                <li key={area} className="flex items-center gap-2 text-slate-700 text-sm sm:text-base">
                  <span aria-hidden="true" data-nosnippet className="material-symbols-outlined text-[#b70011] shrink-0" style={{ fontSize: '18px', fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  <span>{area}</span>
                </li>
              ))}
            </ul>
            <p className="text-slate-600 mb-8 leading-relaxed text-base sm:text-lg text-center">
              We also cover relevant postcode areas including OL5, OL6, OL7, SK14, SK15, SK16, M34 and M43.
            </p>
            <h3
              className="text-lg sm:text-xl font-bold text-slate-900 mb-3 text-center"
              style={{ fontFamily: 'var(--font-work-sans)' }}
            >
              Mobile Tyre Assistance on the M60 and M67
            </h3>
            <p className="text-slate-600 mb-4 leading-relaxed text-base sm:text-lg text-center">
              If you experience tyre trouble while travelling around Tameside, provide your location as accurately as possible. Our listed road coverage includes the M60 (Junctions 23–24), M67, A635 and A57 Hyde Road.
            </p>
            <p className="text-slate-600 leading-relaxed text-base sm:text-lg text-center">
              For motorway breakdowns, prioritise your safety and follow the relevant motorway procedures. Our team can discuss whether assistance is possible at a safe, accessible location.
            </p>
          </div>
        </section>

        {/* ── 9. BRAND CAROUSEL ─────────────────────────────── */}
        <BrandCarousel />

        {/* ── NEARBY AREAS ───────────────────────────────────── */}
        <NearbyAreas currentSlug="tameside" />

        {/* ── SERVICE AREAS MAP ──────────────────────────────── */}
        <ServiceAreasMap />

        {/* ── LOCAL AREA DETAILS ─────────────────────────────── */}
        <LocalAreaInfo currentSlug="tameside" />

        {/* ── 10. FAQ ───────────────────────────────────────── */}
        <CityFaq
          canonical="https://onestoptyres247.co.uk/mobile-tyre-fitting-tameside"
          city="Tameside"
          faqs={[
            { q: 'Do you provide mobile tyre fitting in Tameside 24/7?', a: 'Yes. Our mobile tyre fitting service operates 24 hours a day in covered areas. Contact us to confirm availability and arrange a visit.' },
            { q: 'How quickly can a mobile tyre fitter reach me in Tameside?', a: 'The website advertises a typical response estimate of around 20–30 minutes. This is not guaranteed; actual arrival time depends on your exact location, traffic, weather, technician availability and the work required. Confirm the estimate when booking.' },
            { q: 'Do you offer emergency tyre replacement in Tameside?', a: 'Yes. We offer emergency tyre replacement in covered areas, subject to the correct tyre being available and safe access to the vehicle.' },
            { q: 'Can you fit a tyre at my home?', a: 'Yes. Home tyre fitting can be arranged where there is sufficient space and safe access for the technician to work.' },
            { q: 'Can you fit tyres at my workplace?', a: 'Yes. We can discuss workplace tyre fitting if the location is accessible and suitable for the work. Share the address and your preferred time when requesting a quote.' },
            { q: 'Do you provide mobile puncture repair in Tameside?', a: 'Yes. We inspect punctured tyres and can repair them where the damage and tyre condition make a safe repair possible. Some tyres will need replacing instead.' },
            { q: 'How much does mobile tyre fitting in Tameside cost?', a: 'The price depends on the tyre size, brand, service required and location. Contact us for a quote before confirming your booking.' },
            { q: 'Can I choose a premium or budget tyre?', a: 'Premium and budget options are listed among our services. Availability depends on your tyre size and current stock. Ask the team about suitable options and prices.' },
            { q: 'What information should I provide when booking?', a: 'Share your location or postcode, vehicle make and model, tyre size if known, and a brief description of the problem. A photograph of the tyre markings can help identify the correct size.' },
            { q: 'What if I do not know my tyre size?', a: 'Provide your vehicle details and, if possible, a photograph of the numbers and letters printed on your tyre sidewall. The team can use these details to help identify the required size.' },
            { q: 'Do you cover Ashton-under-Lyne, Hyde and Denton?', a: 'Yes. Ashton-under-Lyne, Hyde and Denton are among the areas listed in our Tameside coverage. Contact us to confirm availability for your exact postcode.' },
            { q: 'Can you come to Mossley or Longdendale?', a: 'Yes. Mossley and Longdendale are included in the listed service area. Actual attendance depends on your location and current availability.' },
            { q: 'Do you provide tyre assistance on the M60 and M67?', a: 'Our listed road coverage includes the M60 and M67 around Tameside. Any attendance depends on safe access and the circumstances of the breakdown. Follow official motorway breakdown procedures and do not attempt repairs beside live traffic.' },
            { q: 'Can you help if my tyre has a blowout?', a: 'Yes. Contact us with your location and vehicle details. If the tyre cannot be repaired safely, we can discuss replacement options, subject to stock and safe access.' },
            { q: 'Do you offer mobile jump-start assistance?', a: "Yes. Mobile jump-start assistance is listed among our services. Contact us to confirm availability and explain your vehicle's symptoms." },
            { q: 'Can you check my TPMS after fitting a tyre?', a: 'TPMS checks or resets are listed among our services. The work required depends on your vehicle and the monitoring system fitted.' },
            { q: 'Can you remove a locking wheel nut if I have lost the key?', a: 'Locking wheel nut removal is listed as a service. Tell us your vehicle details when booking so the team can confirm whether removal is possible with the available equipment.' },
            { q: 'Do you accept card and contactless payments?', a: 'The Tameside page lists card, cash and contactless payments. If you have a specific payment requirement, confirm the available options when booking.' },
            { q: 'Can I arrange same-day mobile tyre fitting?', a: 'Same-day service may be available depending on technician availability, your location and the required tyre. Contact the team to confirm an appointment.' },
            { q: 'How do I book mobile tyre fitting in Tameside?', a: 'Call or WhatsApp 07759 708 646. Share your postcode or map pin, vehicle details and tyre problem. Our team can discuss pricing, availability and the estimated arrival time.' },
          ]}
        />

        {/* ── 11. FINAL CTA ─────────────────────────────────── */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-[#f0edec] relative">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-h2 text-xl sm:text-2xl lg:text-h2 mb-4 sm:mb-5 leading-tight">Need Mobile Tyre Fitting in Tameside Right Now?</h2>
            <p className="font-body-lg text-base lg:text-lg text-[#5c403c] leading-relaxed mb-6 sm:mb-8">If you have a flat tyre, a puncture or a damaged tyre, contact One Stop Tyres 247 to discuss mobile tyre fitting and emergency tyre replacement across Tameside. Our team can help you check availability, understand your options and arrange a visit to a suitable location. 24/7 mobile tyre assistance across Tameside and surrounding areas, subject to availability and safe access.</p>
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
