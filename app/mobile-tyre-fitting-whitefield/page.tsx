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
import HeroQuoteSection from '@/components/HeroQuoteSection'

const _serviceSchema = pageServiceSchema({
  slug: 'mobile-tyre-fitting-whitefield',
  alternateName: '24/7 Mobile Tyre Fitting Whitefield',
  areaServed: 'Whitefield, Greater Manchester',
  description:
    'Need mobile tyre fitting in Whitefield? Get 24/7 tyre fitting, emergency tyre replacement and puncture repair at home, work or roadside.',
})

const _organizationSchema = pageOrganizationSchema('mobile-tyre-fitting-whitefield')
const _websiteSchema = pageWebsiteSchema('mobile-tyre-fitting-whitefield')
const _automotiveBusinessSchema = automotiveBusinessSchema({
  slug: 'mobile-tyre-fitting-whitefield',
  image: 'https://onestoptyres247.co.uk/images/tyres-fitting-anywhere.webp',
  addressLocality: 'Whitefield',
})

export const metadata = buildMetadata({
  title: 'Mobile Tyre Fitting Whitefield | 24/7 Tyre Replacement',
  description:
    'Need mobile tyre fitting in Whitefield? Get 24/7 tyre fitting, emergency tyre replacement and puncture repair at home, work or roadside.',
  path: '/mobile-tyre-fitting-whitefield',
})

export default function WhitefieldPage() {
  return (
    <div className="bg-[#fcf9f8] text-[#1c1b1b] font-body-md">
      <JsonLd data={_serviceSchema} className="schemantra" />
      <JsonLd data={_organizationSchema} />
      <JsonLd data={_websiteSchema} />
      <JsonLd data={_automotiveBusinessSchema} />
      <main>

        {/* ── 1. HERO ───────────────────────────────────────── */}
        <section className="relative min-h-[100svh] lg:min-h-[600px] flex items-center justify-start text-left px-4 sm:px-8 lg:px-16 overflow-hidden">
          <HeroMapBackground />

          <div className="relative z-10 max-w-2xl py-20 [text-shadow:0_1px_3px_rgba(0,0,0,0.9),0_2px_12px_rgba(0,0,0,0.7)] lg:[text-shadow:none]">

            <h1
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-white mb-4 leading-[1.1] font-black text-balance"
              style={{ fontFamily: 'var(--font-work-sans)', letterSpacing: '-0.02em' }}
            >
              24/7 Mobile Tyre Fitting Whitefield
            </h1>

            <p className="text-white/95 lg:text-white/80 text-base leading-relaxed mb-6">
              Need mobile tyre fitting in Whitefield? Get emergency tyre replacement, mobile puncture repair and roadside tyre assistance at your home, workplace or a safe roadside location. Our service operates 24/7 across covered areas, with typical response times of 20–30 minutes depending on traffic, your location, technician availability and tyre stock.
            </p>

            {/* Trust bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 mb-6">
              {[
                '24/7 Mobile Tyre Fitting',
                'Emergency Tyre Replacement',
                'Mobile Puncture Repair',
                'Home, Work and Roadside Service',
                'Covering Whitefield and Surrounding Areas',
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
              <span className="text-white/80 lg:text-white/60 text-xs font-medium">Rated By Drivers Across Whitefield &amp; Greater Manchester</span>
            </a>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-3">
              <a
                href="tel:+447759708646"
                className="bg-[#dc2626] text-white font-black px-8 py-4 rounded-xl shadow-2xl shadow-red-900/40 flex items-center justify-center gap-2.5 hover:bg-red-700 hover:text-white transition-all text-base sm:text-lg"
                style={{ fontFamily: 'var(--font-work-sans)' }}
              >
                <span aria-hidden="true" data-nosnippet className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>call</span>
                07759 708 646
              </a>
              <a
                href="https://wa.me/447759708646"
                className="bg-[#25D366] hover:bg-[#1ebe5d] text-white font-black px-8 py-4 rounded-xl flex items-center justify-center gap-2.5 transition-all text-base sm:text-lg shadow-lg shadow-green-900/20"
                style={{ fontFamily: 'var(--font-work-sans)' }}
              >
                <svg className="w-5 h-5 fill-current flex-shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WHATSAPP
              </a>
            </div>

          </div>
        </section>

        <HeroQuoteSection area="Whitefield" />

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
            <ReviewsCarousel offset={42} />
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
                24/7 Mobile Tyre Fitting &amp; Emergency Tyre Repair In Whitefield
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto text-base">
                Mobile tyre fitting, emergency tyre replacement and puncture repair across Whitefield. We come to your home, workplace or roadside location 24/7 with fast response times and professional service.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {[
                {
                  img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Emergency%20Tyre%20Fitting%20one%20Stop-airanko-gsjvsGamoet8drKwCMHYr6LH5Ni6ZI.webp',
                  title: 'Mobile Tyre Fitting',
                  desc: 'Mobile tyre fitting at your home, workplace or roadside location anywhere in Whitefield. Fast response with premium and budget tyre options available.',
                  badge: 'FAST RESPONSE',
                  href: '/mobile-tyre-fitting',
                },
                {
                  img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Home%20Tyre%20Fitting%20One%20Stop-airanko-kPAsyn08SjxXwLwCVhxre5zM9jWBTs.webp',
                  title: 'Home Tyre Fitting',
                  desc: 'Same day tyre fitting at your home across Whitefield, without the hassle of visiting a garage.',
                  badge: 'AT YOUR DOOR',
                  href: '/home-tyre-fitting',
                },
                {
                  img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Puncture%20Repair%20One%20Stop-airanko-sfmhLvDbSYmhoMprTVOHCcIWEgJvHf.webp',
                  title: 'Emergency Puncture Repair',
                  desc: 'Professional mobile puncture repair across Whitefield, carried out on-site where safe and suitable.',
                  badge: 'CERTIFIED REPAIR',
                  href: '/puncture-repair-Greater-manchester',
                },
                {
                  img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/One%20Stop%20Jumpstart%20image-airanko-cXmOrXcdtaIBMNQOMCIOiPj1C290RG.webp',
                  title: 'Jump Start',
                  desc: 'Flat battery as well as a flat tyre? Our mobile jump start service gets you back on the road in minutes, available 24/7 across Whitefield.',
                  badge: '24/7 SERVICE',
                  href: '/jump-start',
                },
                {
                  img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Tyre%20pressure%20monitor-airanko-sjz7PL2Pv4N9jlPWtz5Wa1q8XO0FgP.webp',
                  title: 'TPMS Reset',
                  desc: 'Tyre pressure monitoring system reset and sensor checks across Whitefield after every fitting or repair.',
                  badge: 'ALL VEHICLES',
                  href: '/tpms-reset',
                },
                {
                  img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Locking%20nut%20removal-airanko%20%281%29-ONBmqaZHMozU0jjrxbPe5J7C4zRQkS.webp',
                  title: 'Locking Nut Removal',
                  desc: 'Specialist, damage-free locking wheel nut removal across Whitefield using professional tools.',
                  badge: 'DAMAGE FREE',
                  href: '/locking-nut-removal',
                },
                {
                  img: '/images/professional-mobile-tyre-fitting.webp',
                  title: 'Roadside Assistance',
                  desc: 'Emergency roadside support for tyre and vehicle problems across Whitefield, wherever you get stranded.',
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
                Professional Mobile Tyre Fitting in Whitefield
              </h2>
              <p className="text-slate-600 mb-4 sm:mb-6 leading-relaxed text-base sm:text-lg">
                A flat, punctured or damaged tyre can disrupt your day and make driving unsafe. One Stop Tyres 247 provides mobile tyre fitting in Whitefield, bringing professional tyre services directly to your vehicle where access and working conditions are safe.
              </p>
              <p className="text-slate-600 mb-4 sm:mb-6 leading-relaxed text-base sm:text-lg">
                Whether you need a replacement at home, tyre fitting at your workplace or assistance with a roadside puncture, our technicians can assess the problem and advise on the most suitable solution.
              </p>
              <p className="font-bold text-[#0f172a] mb-3">Our services include:</p>
              <ul className="space-y-3 mb-6">
                {[
                  { title: 'Mobile Tyre Replacement', desc: 'Replacement of damaged, worn or unsafe tyres.' },
                  { title: 'Emergency Puncture Repair', desc: 'On-site repair where the damage meets the relevant safety requirements.' },
                  { title: 'Home Tyre Fitting', desc: 'Convenient tyre fitting at your property, subject to suitable access.' },
                  { title: 'Roadside Tyre Assistance', desc: 'Help when a tyre problem prevents you from continuing your journey safely.' },
                  { title: 'Premium, Mid-Range and Budget Tyres', desc: 'Options to suit different vehicles and budgets, subject to availability.' },
                ].map((item) => (
                  <li key={item.title} className="flex items-start gap-2.5 text-slate-700">
                    <span aria-hidden="true" data-nosnippet className="material-symbols-outlined text-[#b70011] shrink-0 mt-0.5" style={{ fontSize: '20px', fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                    <span><span className="font-bold text-[#0f172a]">{item.title}:</span> {item.desc}</span>
                  </li>
                ))}
              </ul>
              <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
                When booking, provide your Whitefield postcode, vehicle details and tyre size if known. This helps us confirm availability and provide an accurate quote.
              </p>
            </div>
          </div>
        </section>

        {/* ── 5. WHY WHITEFIELD DRIVERS CHOOSE US ──────────────── */}
        <WhyChooseGrid
          heading="Why Choose Our Mobile Tyre Fitting Service?"
          intro=""
          items={[
            { icon: 'bolt', title: '24/7 Emergency Availability', desc: 'Tyre problems can happen at any time. Our mobile tyre service operates 24/7 in covered areas, subject to technician and tyre availability.' },
            { icon: 'home_repair_service', title: 'Convenient On-Site Fitting', desc: 'We come to your home, workplace or a suitable roadside location, helping you avoid an unnecessary trip to a garage with a damaged tyre.' },
            { icon: 'sell', title: 'Upfront Pricing', desc: 'We explain the expected cost before work begins. Ask about the tyre, fitting and any applicable call-out charges when requesting your quote.' },
            { icon: 'engineering', title: 'Professional Tyre Technicians', desc: 'Our technicians assess your tyre and advise whether repair or replacement is appropriate according to its condition and relevant safety requirements.' },
            { icon: 'tire_repair', title: 'Tyre Options for Different Budgets', desc: 'We can discuss premium, mid-range and budget tyre options, depending on your vehicle specifications and available stock.' },
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
                How Mobile Tyre Fitting in Whitefield Works
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-5 gap-8 sm:gap-4 lg:gap-6">
              {[
                { title: 'Contact Our Team', desc: 'Call us and explain whether you need an emergency replacement, puncture repair or routine tyre fitting.' },
                { title: 'Share Your Location and Vehicle Details', desc: 'Provide your Whitefield postcode or precise location, vehicle make and model, and tyre size if available.' },
                { title: 'Confirm the Quote', desc: 'Our team will discuss pricing, tyre availability and an estimated arrival time before you confirm the booking.' },
                { title: 'Get Your Tyre Checked', desc: 'The technician will inspect the tyre and determine whether a repair is suitable or replacement is required.' },
                { title: 'Complete the Service', desc: 'Once you approve the work, the technician completes the agreed service at a location where it is safe to do so.' },
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
              Mobile Tyre Replacement Across Whitefield
            </h2>
            <p className="text-slate-600 mb-6 leading-relaxed text-base sm:text-lg">
              Our mobile tyre fitting service covers Whitefield and nearby residential and business areas. We can arrange assistance around local streets, shopping areas and routes connecting Whitefield with neighbouring parts of Greater Manchester.
            </p>
            <p className="font-bold text-[#0f172a] mb-3">Coverage includes locations around:</p>
            <ul className="space-y-3 mb-6">
              {[
                'Whitefield town centre',
                'Bury New Road',
                'Simister',
                'Prestwich',
                'Radcliffe',
                'Nearby parts of Bury',
              ].map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-slate-700">
                  <span aria-hidden="true" data-nosnippet className="material-symbols-outlined text-[#b70011] shrink-0" style={{ fontSize: '20px', fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  <span className="font-semibold">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
              If your vehicle develops a tyre problem while travelling through the area, contact us with your exact location. We will confirm whether a technician can attend and provide an estimated arrival time based on current conditions.
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
              Emergency Mobile Tyre Fitting and Replacement in Whitefield
            </h2>
            <p className="text-slate-600 mb-6 leading-relaxed text-base sm:text-lg">
              A puncture, blowout or damaged tyre can leave you unable to continue your journey safely. Our emergency mobile tyre fitting service helps drivers in Whitefield arrange assistance without making an unnecessary trip to a tyre centre.
            </p>
            <p className="font-bold text-[#0f172a] mb-3">We can help with:</p>
            <ul className="space-y-3 mb-6">
              {[
                { title: 'Emergency Tyre Replacement', desc: 'For tyres that are damaged beyond safe repair.' },
                { title: 'Mobile Puncture Repair', desc: 'Where the damage and tyre condition meet the applicable repair requirements.' },
                { title: 'Jump-Start Assistance', desc: 'Help with suitable flat-battery problems, subject to availability.' },
                { title: 'TPMS Checks and Reset', desc: 'Support with tyre pressure monitoring systems where appropriate.' },
                { title: 'Locking Wheel Nut Removal', desc: 'Specialist assistance, subject to the vehicle and equipment requirements.' },
                { title: 'Roadside Tyre Assistance', desc: 'Help at accessible locations where work can be carried out safely.' },
              ].map((item) => (
                <li key={item.title} className="flex items-start gap-2.5 text-slate-700">
                  <span aria-hidden="true" data-nosnippet className="material-symbols-outlined text-[#b70011] shrink-0 mt-0.5" style={{ fontSize: '20px', fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  <span><span className="font-bold text-[#0f172a]">{item.title}:</span> {item.desc}</span>
                </li>
              ))}
            </ul>
            <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
              If you experience a tyre emergency on a busy road, prioritise your safety and follow the appropriate breakdown procedures. Never attempt a tyre change in a live traffic lane or another unsafe position. Contact us with your precise location so we can discuss the assistance available.
            </p>
          </div>
        </section>

        {/* ── 9. BRAND CAROUSEL ─────────────────────────────── */}
        <BrandCarousel />

        {/* ── NEARBY AREAS ───────────────────────────────────── */}
        <NearbyAreas currentSlug="whitefield" />

        {/* ── SERVICE AREAS MAP ──────────────────────────────── */}
        <ServiceAreasMap />

        {/* ── LOCAL AREA DETAILS ─────────────────────────────── */}
        <LocalAreaInfo currentSlug="whitefield" />

        {/* ── 10. FAQ ───────────────────────────────────────── */}
        <CityFaq
          canonical="https://onestoptyres247.co.uk/mobile-tyre-fitting-whitefield"
          city="Whitefield"
          faqs={[
            { q: 'How quickly can a mobile tyre fitter reach me in Whitefield?', a: 'Typical response times in covered areas are around 20–30 minutes. Actual arrival depends on traffic, your postcode, technician availability and the required tyre.' },
            { q: 'Do you provide 24/7 mobile tyre fitting in Whitefield?', a: 'Yes, emergency mobile tyre fitting is available 24/7 in covered areas. Contact us to confirm current availability for your location.' },
            { q: 'Can you fit a tyre at my home in Whitefield?', a: 'Yes. Home tyre fitting can be arranged where there is suitable access and enough safe working space for the technician.' },
            { q: 'Can you fit tyres at my workplace near Bury New Road?', a: 'Yes, subject to access and a suitable working area. Provide your workplace address and any parking restrictions when booking.' },
            { q: 'Do you offer emergency tyre replacement in Whitefield?', a: 'Yes. We can arrange emergency replacement for damaged or unsafe tyres, subject to suitable tyre stock and technician availability.' },
            { q: 'Can you repair a punctured tyre instead of replacing it?', a: 'Sometimes. The technician will assess the location and extent of the damage. Repairs are only suitable when the tyre meets the relevant safety requirements, including BS AU 159 where applicable.' },
            { q: 'Which nearby areas do you cover?', a: 'Coverage includes Whitefield and nearby areas such as Simister, Prestwich, Radcliffe and Bury. Contact us with your postcode to confirm service availability.' },
            { q: 'Can you help with a flat tyre at night?', a: 'Yes. Our emergency service operates 24/7 in covered areas. Call to check technician availability and receive an estimated arrival time.' },
            { q: 'Do you supply premium and budget tyres?', a: 'We can offer premium, mid-range and budget options, depending on your vehicle, tyre size and current stock.' },
            { q: 'How much does mobile tyre fitting in Whitefield cost?', a: 'The cost depends on the tyre size, selected tyre, work required and location. Request a quote before confirming your booking.' },
            { q: 'What information should I provide when booking?', a: 'Share your postcode or precise location, vehicle make and model, tyre size if known, and a description of the problem. A photo of the tyre may also help with the initial assessment.' },
            { q: 'Can you help if my car breaks down roadside?', a: 'We can attend suitable roadside locations where the technician can work safely. If your vehicle is in a dangerous position or on a live carriageway, follow the appropriate road safety and breakdown procedures first.' },
            { q: 'Is same-day mobile tyre fitting available in Whitefield?', a: 'Same-day appointments may be available depending on technician schedules, your location and the required tyre. Contact us to check availability.' },
            { q: 'Can you help with a flat battery as well as a tyre problem?', a: 'Jump-start assistance may be available. Mention the battery issue when booking so the team can confirm whether the service can be provided.' },
            { q: 'How do I book mobile tyre fitting in Whitefield?', a: 'Call 07759 708 646 with your location and vehicle details. Our team can discuss your requirements, provide a quote and confirm an estimated arrival time.' },
          ]}
        />

        {/* ── 11. FINAL CTA ─────────────────────────────────── */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-[#f0edec] relative">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-h2 text-xl sm:text-2xl lg:text-h2 mb-4 sm:mb-5 leading-tight">Need Mobile Tyre Fitting in Whitefield?</h2>
            <p className="font-body-lg text-base lg:text-lg text-[#5c403c] leading-relaxed mb-6 sm:mb-8">Whether you need an emergency tyre replacement, a suitable puncture repair or convenient tyre fitting at home, One Stop Tyres 247 can help you explore the available options. Call 07759 708 646 for a quote and estimated arrival time. We will confirm service coverage, tyre availability and the next steps for your location.</p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center mt-4 sm:mt-6">
              <a
                className="flex items-center justify-center gap-2 sm:gap-3 bg-[#dc2626] hover:bg-[#b70011] text-white px-6 sm:px-10 py-4 sm:py-5 rounded-lg font-call-to-action text-base transition-all shadow-xl"
                href="tel:+447759708646"
              >
                <span aria-hidden="true" data-nosnippet className="material-symbols-outlined text-xl sm:text-2xl">phone_in_talk</span>
                07759 708 646
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
