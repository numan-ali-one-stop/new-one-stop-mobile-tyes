import Image from 'next/image'
import BrandCarousel from '@/components/BrandCarousel'
import WhyChooseGrid from '@/components/WhyChooseGrid'
import CityFaq from '@/components/CityFaq'
import ReviewsCarousel from '@/components/ReviewsCarousel'
import JsonLd from '@/components/JsonLd'
import { pageServiceSchema, pageOrganizationSchema, pageWebsiteSchema, automotiveBusinessSchema } from '@/lib/schema'
import { buildMetadata } from '@/lib/seo'

const _serviceSchema = pageServiceSchema({
  slug: 'mobile-tyre-fitting-m62',
  alternateName: '24/7 Mobile Tyre Fitting M62',
  areaServed: 'M62 Motorway, Greater Manchester',
  description:
    'Need mobile tyre fitting on the M62? Get 24/7 emergency tyre replacement, puncture repair and roadside tyre assistance across the M62.',
})

const _organizationSchema = pageOrganizationSchema('mobile-tyre-fitting-m62')
const _websiteSchema = pageWebsiteSchema('mobile-tyre-fitting-m62')
const _automotiveBusinessSchema = automotiveBusinessSchema({
  slug: 'mobile-tyre-fitting-m62',
  image: 'https://onestoptyres247.co.uk/images/tyres-fitting-anywhere.webp',
  addressLocality: 'Greater Manchester',
})

export const metadata = buildMetadata({
  title: 'Mobile Tyre Fitting M62 | 24/7 Tyre Replacement',
  description:
    'Need mobile tyre fitting on the M62? Get 24/7 emergency tyre replacement, puncture repair and roadside tyre assistance across the M62.',
  path: '/mobile-tyre-fitting-m62',
})

export default function M62Page() {
  return (
    <div className="bg-[#fcf9f8] text-[#1c1b1b] font-body-md">
      <JsonLd data={_serviceSchema} className="schemantra" />
      <JsonLd data={_organizationSchema} />
      <JsonLd data={_websiteSchema} />
      <JsonLd data={_automotiveBusinessSchema} />
      <main>

        {/* ── 1. HERO ───────────────────────────────────────── */}
        <section className="relative min-h-[100svh] lg:min-h-[600px] flex items-center justify-start text-left px-4 sm:px-8 lg:px-16 overflow-hidden">
          <Image
            src="/images/mobile-tyre-fitting-one-stop-tyres-24-7.webp"
            alt="Mobile tyre fitting technician at work in Greater Manchester"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "linear-gradient(to right, rgba(15, 23, 42, 0.96) 0%, rgba(15, 23, 42, 0.75) 100%)",
            }}
          />
          <div className="relative z-10 max-w-2xl py-20">

            <h1
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-white mb-4 leading-[1.1] font-black text-balance"
              style={{ fontFamily: 'var(--font-work-sans)', letterSpacing: '-0.02em' }}
            >
              24/7 Mobile Tyre Fitting M62
            </h1>

            <p className="text-white/80 text-base leading-relaxed mb-6">
              If you have a flat, punctured or damaged tyre while travelling on the M62, getting professional assistance quickly can help you get back on the road safely. We provide 24/7 mobile tyre fitting on the M62, including emergency tyre replacement and puncture repair where safe and suitable.
            </p>

            {/* Trust bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 mb-6">
              {[
                '24/7 Mobile Tyre Fitting',
                'Emergency Tyre Replacement',
                'Mobile Puncture Repair',
                'M62 Motorway & Surrounding Areas',
                '20–30 Minute Typical Response',
                'Professional Mobile Tyre Technicians',
              ].map((item) => (
                <div key={item} className="flex items-center gap-2.5 text-white/90">
                  <span aria-hidden="true" data-nosnippet
                    className="material-symbols-outlined text-green-400 shrink-0"
                    style={{ fontSize: '20px', fontVariationSettings: "'FILL' 1" }}
                  >check_circle</span>
                  <span className="text-base font-semibold leading-snug">{item}</span>
                </div>
              ))}
            </div>

            {/* Motorway safety notice */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 mb-6 flex items-start gap-3">
              <span aria-hidden="true" data-nosnippet className="material-symbols-outlined text-yellow-400 shrink-0" style={{ fontSize: '22px' }}>warning</span>
              <p className="text-white/85 text-sm leading-relaxed">
                <span className="font-bold text-white">Motorway safety:</span> If you break down on the M62, follow motorway breakdown procedures and move to a safe location away from moving traffic where possible. Do not attempt tyre repairs from an unsafe position on the carriageway.
              </p>
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
              <span className="text-white/60 text-xs font-medium">Rated By Drivers Across the M62 &amp; Greater Manchester</span>
            </a>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-3">
              <a
                href="tel:07759708646"
                className="bg-[#FF4444] text-[#121212] font-black px-8 py-4 rounded-xl shadow-2xl shadow-red-900/40 flex items-center justify-center gap-2.5 hover:bg-red-700 hover:text-white transition-all text-base sm:text-lg"
                style={{ fontFamily: 'var(--font-work-sans)' }}
              >
                <span aria-hidden="true" data-nosnippet className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>call</span>
                07759 708 646
              </a>
              <a
                href="tel:01613995851"
                className="bg-[#FF4444] text-[#121212] font-black px-8 py-4 rounded-xl shadow-2xl shadow-red-900/40 flex items-center justify-center gap-2.5 hover:bg-red-700 hover:text-white transition-all text-base sm:text-lg"
                style={{ fontFamily: 'var(--font-work-sans)' }}
              >
                <span aria-hidden="true" data-nosnippet className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>call</span>
                0161 399 5851
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
                24/7 Mobile Tyre Fitting &amp; Emergency Tyre Repair On the M62
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto text-base">
                Mobile tyre fitting, emergency tyre replacement and puncture repair on the M62. We come to your location 24/7 with fast response times and professional service.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {[
                {
                  img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Emergency%20Tyre%20Fitting%20one%20Stop-airanko-gsjvsGamoet8drKwCMHYr6LH5Ni6ZI.webp',
                  title: 'Mobile Tyre Fitting',
                  desc: 'Mobile tyre fitting at your location on the M62. Fast response with premium and budget tyre options available.',
                  badge: 'FAST RESPONSE',
                  href: '/mobile-tyre-fitting',
                },
                {
                  img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Home%20Tyre%20Fitting%20One%20Stop-airanko-kPAsyn08SjxXwLwCVhxre5zM9jWBTs.webp',
                  title: 'Emergency Tyre Replacement',
                  desc: 'Genuine 24 hour emergency tyre replacement for breakdowns on the M62, day or night.',
                  badge: '24/7 DISPATCH',
                  href: '/mobile-tyre-fitting',
                },
                {
                  img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Puncture%20Repair%20One%20Stop-airanko-sfmhLvDbSYmhoMprTVOHCcIWEgJvHf.webp',
                  title: 'Emergency Puncture Repair',
                  desc: 'Professional mobile puncture repair on the M62, carried out on-site where safe and suitable.',
                  badge: 'CERTIFIED REPAIR',
                  href: '/puncture-repair-Greater-manchester',
                },
                {
                  img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/One%20Stop%20Jumpstart%20image-airanko-cXmOrXcdtaIBMNQOMCIOiPj1C290RG.webp',
                  title: 'Jump Start',
                  desc: 'Flat battery as well as a flat tyre? Our mobile jump start service gets you back on the road in minutes, available 24/7 on the M62.',
                  badge: '24/7 SERVICE',
                  href: '/jump-start',
                },
                {
                  img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Tyre%20pressure%20monitor-airanko-sjz7PL2Pv4N9jlPWtz5Wa1q8XO0FgP.webp',
                  title: 'TPMS Reset',
                  desc: 'Tyre pressure monitoring system reset and sensor checks on the M62 after every fitting or repair.',
                  badge: 'ALL VEHICLES',
                  href: '/tpms-reset',
                },
                {
                  img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Locking%20nut%20removal-airanko%20%281%29-ONBmqaZHMozU0jjrxbPe5J7C4zRQkS.webp',
                  title: 'Locking Nut Removal',
                  desc: 'Specialist, damage-free locking wheel nut removal on the M62 using professional tools.',
                  badge: 'DAMAGE FREE',
                  href: '/locking-nut-removal',
                },
                {
                  img: '/images/professional-mobile-tyre-fitting.webp',
                  title: 'Roadside Assistance',
                  desc: 'Emergency roadside support for tyre and vehicle problems across M62, wherever you get stranded.',
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
                href="tel:07759708646"
                className="bg-[#FF4444] text-[#121212] font-black px-8 py-4 rounded-xl text-xl sm:text-2xl hover:scale-105 transition-transform shadow-lg shadow-red-900/20 whitespace-nowrap"
                style={{ fontFamily: 'var(--font-work-sans)' }}
              >
                07759 708 646
              </a>
              <a
                href="tel:01613995851"
                className="bg-[#FF4444] text-[#121212] font-black px-8 py-4 rounded-xl text-xl sm:text-2xl hover:scale-105 transition-transform shadow-lg shadow-red-900/20 whitespace-nowrap"
                style={{ fontFamily: 'var(--font-work-sans)' }}
              >
                0161 399 5851
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
                src="/images/tyres-fitting-anywhere.webp"
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
                <div className="text-slate-500 text-[11px] font-semibold uppercase tracking-wide">1,200+ Customer Reviews</div>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <span className="text-[#b70011] font-bold uppercase tracking-widest text-sm mb-3 block">
                The Best Choice
              </span>
              <h2
                className="text-2xl sm:text-4xl lg:text-5xl text-[#0f172a] mb-5 sm:mb-8 leading-tight font-bold"
                style={{ fontFamily: 'var(--font-work-sans)' }}
              >
                Professional Mobile Tyre Fitting on the M62
              </h2>
              <p className="text-slate-600 mb-4 sm:mb-6 leading-relaxed text-base sm:text-lg">
                One Stop Tyres 247 provides professional mobile tyre fitting and emergency tyre assistance for drivers travelling along the M62. The service covers the M62 and surrounding areas, including the Greater Manchester section and the route across the Pennines towards West Yorkshire and East Yorkshire.
              </p>
              <p className="text-slate-600 mb-6 sm:mb-8 leading-relaxed text-base sm:text-lg">
                Whether you have a puncture, flat tyre, blowout or damaged tyre, our mobile team can attend a suitable and accessible location to assess the problem.
              </p>
              <p className="font-bold text-[#0f172a] mb-3">Our M62 services include:</p>
              <ul className="space-y-3 mb-6 sm:mb-8">
                {[
                  'Mobile Tyre Fitting M62',
                  'Emergency Tyre Replacement M62',
                  'Mobile Puncture Repair M62',
                  '24/7 Emergency Tyre Assistance',
                  'Roadside Tyre Fitting',
                  'Tyre Pressure & TPMS Checks',
                  'Mobile Jump Start',
                  'Locking Wheel Nut Removal',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-slate-700">
                    <span aria-hidden="true" data-nosnippet className="material-symbols-outlined text-[#b70011] shrink-0" style={{ fontSize: '20px', fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                    <span className="font-semibold">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
                If your tyre cannot be safely repaired, we can arrange a suitable replacement based on your vehicle, tyre size and availability.
              </p>
            </div>
          </div>
        </section>

        {/* ── 5. WHY CHOOSE US ──────────────────────────────── */}
        <WhyChooseGrid
          heading="Why Choose Our M62 Mobile Tyre Service?"
          intro=""
          items={[
            { icon: 'bolt', title: '24/7 Emergency Assistance', desc: 'Tyre problems can happen at any time. Our mobile tyre service operates 24 hours a day, 7 days a week, including nights, weekends and bank holidays.' },
            { icon: 'speed', title: 'Fast Local Response', desc: 'The current M62 service states an average arrival time of around 20–30 minutes. Actual arrival times depend on traffic, your exact location, road conditions and technician availability.' },
            { icon: 'engineering', title: 'Professional Mobile Technicians', desc: 'Our technicians are fully insured and provide mobile tyre fitting, emergency replacement and suitable puncture repair using professional equipment.' },
            { icon: 'build', title: 'Repair or Replacement', desc: 'We inspect the tyre before carrying out work. Where a puncture is safely repairable, a repair may be possible. If the tyre is damaged or unsafe, replacement may be required.' },
            { icon: 'tire_repair', title: 'Premium and Budget Tyres', desc: 'Suitable premium and budget tyre options are available depending on your vehicle, tyre size, specification and stock.' },
            { icon: 'sell', title: 'Clear Upfront Pricing', desc: 'The current M62 page states that pricing is provided upfront, with no hidden call-out fees.' },
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
                How Mobile Tyre Fitting on the M62 Works
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-5 gap-8 sm:gap-4 lg:gap-6">
              {[
                { title: 'Contact Our Team', desc: 'Call us and explain your tyre problem. Tell us your direction of travel and provide your nearest M62 junction, motorway marker, service station or nearby location.' },
                { title: 'Move to a Safe Location', desc: 'Follow motorway safety guidance and move away from live traffic where possible. If you can safely reach a suitable service station, slip road or lay-by, this can provide a safer location for assistance.' },
                { title: 'Share Your Location', desc: 'Provide your exact location using a motorway marker, junction number, nearby landmark, service station or GPS/What3Words location.' },
                { title: 'Tyre Inspection', desc: 'Our technician will assess the tyre and determine whether it can be safely repaired or needs replacement.' },
                { title: 'Fitting and Final Checks', desc: 'Where replacement is required, the suitable tyre is fitted using professional equipment. Tyre pressure and the fitting are then checked before you continue your journey.' },
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
              Mobile Tyre Replacement on the M62
            </h2>
            <p className="text-slate-600 mb-6 leading-relaxed text-base sm:text-lg">
              A damaged or blown tyre can make it unsafe to continue driving. Our mobile tyre replacement M62 service helps drivers who need a replacement without having to arrange a separate journey to a tyre shop.
            </p>
            <p className="font-bold text-[#0f172a] mb-3">We can assist with problems including:</p>
            <ul className="space-y-3 mb-6">
              {[
                'Punctured or damaged tyres',
                'Flat tyres',
                'Sidewall damage',
                'Unsafe or worn tyres',
                'Tyre blowouts',
                'Tyres that cannot be safely repaired',
              ].map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-slate-700">
                  <span aria-hidden="true" data-nosnippet className="material-symbols-outlined text-[#b70011] shrink-0" style={{ fontSize: '20px', fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  <span className="font-semibold">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-slate-600 leading-relaxed text-base sm:text-lg mb-3">
              Available tyre options depend on your vehicle, tyre size, specification, stock and availability.
            </p>
            <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
              We also carry commercial-rated tyre options for popular vans travelling along the M62 route, subject to the required size and availability.
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
              Emergency Mobile Tyre Fitting and Replacement on the M62
            </h2>
            <p className="text-slate-600 mb-4 leading-relaxed text-base sm:text-lg">
              A tyre emergency on the M62 can be stressful because the route crosses multiple regions and includes busy motorway sections. Our 24/7 emergency mobile tyre fitting service is available for drivers experiencing tyre problems along the route.
            </p>
            <p className="text-slate-600 mb-6 leading-relaxed text-base sm:text-lg">
              The current service covers the M62 from its western end near Liverpool, through Greater Manchester, across the Pennines, through West Yorkshire and East Yorkshire, towards the Humber Bridge area.
            </p>
            <p className="font-bold text-[#0f172a] mb-3">We can also attend suitable service-station locations including:</p>
            <ul className="space-y-3 mb-6">
              {[
                'Birch Services',
                'Hartshead Moor Services',
                'Ferrybridge Services',
                'Burtonwood Services',
              ].map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-slate-700">
                  <span aria-hidden="true" data-nosnippet className="material-symbols-outlined text-[#b70011] shrink-0" style={{ fontSize: '20px', fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  <span className="font-semibold">{item}</span>
                </li>
              ))}
            </ul>
            <p className="font-bold text-[#0f172a] mb-3">If you have a tyre emergency:</p>
            <ul className="space-y-3 mb-6">
              {[
                'Follow the appropriate motorway breakdown procedure.',
                'Move to a safe location away from moving traffic where possible.',
                'Contact our team.',
                'Provide your M62 junction or motorway marker.',
                'Share your GPS or What3Words location if available.',
                'Wait in a safe position while assistance is arranged.',
              ].map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-slate-700">
                  <span aria-hidden="true" data-nosnippet className="material-symbols-outlined text-[#b70011] shrink-0" style={{ fontSize: '20px', fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  <span className="font-semibold">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
              If you can safely reach one of the covered service stations, our technicians can fit your replacement tyre in the car park.
            </p>
          </div>
        </section>

        {/* ── 9. BRAND CAROUSEL ─────────────────────────────── */}
        <BrandCarousel />

        {/* ── HELPFUL GUIDE ─────────────────────────────────── */}
        <section className="py-8 px-4 sm:px-6 bg-white">
          <div className="max-w-3xl mx-auto">
            <a
              href="/guides/what-to-do-flat-tyre-m60-manchester-motorway"
              className="group flex items-center justify-between gap-4 bg-slate-50 border border-slate-100 rounded-2xl p-5 sm:p-6 hover:border-[#b70011]/30 hover:shadow-md transition-all"
            >
              <div>
                <span className="text-xs font-bold text-[#b70011] uppercase tracking-widest mb-1 block">Safety Guide</span>
                <p className="font-bold text-[#0f172a]">What to Do If You Get a Flat Tyre on the Motorway</p>
                <p className="text-sm text-slate-500">Step by step: where to stop, who to call and how to get moving again.</p>
              </div>
              <span aria-hidden="true" data-nosnippet className="material-symbols-outlined text-slate-400 group-hover:text-[#b70011] group-hover:translate-x-1 transition-all shrink-0">arrow_forward</span>
            </a>
          </div>
        </section>

        {/* ── 10. FAQ ───────────────────────────────────────── */}
        <CityFaq
          canonical="https://onestoptyres247.co.uk/mobile-tyre-fitting-m62"
          city="M62"
          faqs={[
            { q: 'Do you provide mobile tyre fitting on the M62?', a: 'Yes. We provide 24/7 mobile tyre fitting on the M62, including emergency tyre replacement and suitable puncture repair.' },
            { q: 'Do you cover the entire M62?', a: 'Yes. The current service states coverage from the western end near Liverpool, through Greater Manchester, across the Pennines and through West and East Yorkshire towards the Humber Bridge area.' },
            { q: 'Can you replace a flat tyre on the M62?', a: 'Yes. If your tyre is damaged or unsafe to continue with, we can provide a suitable mobile tyre replacement subject to tyre size, specification and availability.' },
            { q: 'Can you repair a puncture on the M62?', a: 'A puncture may be repairable where the damage is suitable and the working location is safe. If the tyre cannot be safely repaired, replacement may be required.' },
            { q: 'How quickly can you reach me on the M62?', a: 'The stated average arrival time is around 20–30 minutes, although actual arrival times depend on traffic, your exact location, road conditions and technician availability.' },
            { q: 'Can you attend M62 service stations?', a: 'Yes. The current service specifically lists Birch Services, Hartshead Moor Services, Ferrybridge Services and Burtonwood Services.' },
            { q: 'What should I do if I get a flat tyre on the M62?', a: 'Follow motorway breakdown safety procedures and move to a safe location away from traffic where possible. Contact us once you are in a safe position and provide your exact location.' },
            { q: 'Can you come to my exact location on the M62?', a: 'We can attend a suitable and accessible location. Your junction number, motorway marker, nearby service station or GPS/What3Words location will help us locate you.' },
            { q: 'Do you provide emergency tyre replacement on the M62?', a: 'Yes. We provide 24/7 emergency tyre replacement when a suitable replacement tyre is available.' },
            { q: 'Can you help with a tyre blowout?', a: 'Yes. Contact us from a safe location and provide your exact M62 location. We can assess the situation and arrange a replacement where suitable.' },
            { q: 'Do you provide commercial van tyres on the M62?', a: 'Yes. The current M62 service states that its fleet carries a range of commercial-rated tyres suitable for popular van makes and models, subject to tyre size and availability.' },
            { q: 'Can you help if I am travelling across the Pennines?', a: 'Yes. The M62 service covers the route across the Pennines, including the relevant Greater Manchester and West Yorkshire sections.' },
            { q: 'Can you replace an unsafe tyre instead of repairing it?', a: 'Yes. If the tyre damage or condition means it cannot be safely repaired, we can provide a suitable replacement subject to availability.' },
            { q: 'Can you check tyre pressure after fitting?', a: 'Yes. The M62 service includes TPMS checks and resets, with tyre pressure monitoring checks carried out after fitting or repair where applicable.' },
            { q: 'Do you provide 24/7 roadside tyre assistance on the M62?', a: 'Yes. We provide 24/7 emergency tyre assistance, including mobile tyre fitting, replacement and suitable puncture repair along the covered M62 route.' },
          ]}
        />

        {/* ── 11. FINAL CTA ─────────────────────────────────── */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-[#f0edec] relative">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-h2 text-xl sm:text-2xl lg:text-h2 mb-4 sm:mb-5 leading-tight">Need Mobile Tyre Fitting on the M62?</h2>
            <p className="font-body-lg text-base lg:text-lg text-[#5c403c] leading-relaxed mb-6 sm:mb-8">Whether you have a puncture, flat tyre, blowout or damaged tyre, One Stop Tyres 247 can provide 24/7 mobile tyre assistance at a suitable location. Contact us for 24/7 mobile tyre fitting on the M62, emergency tyre replacement and puncture repair. Call now for a quote and availability.</p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center mt-4 sm:mt-6">
              <a className="flex items-center justify-center gap-2 sm:gap-3 bg-[#dc2626] hover:bg-[#b70011] text-white px-6 sm:px-10 py-4 sm:py-5 rounded-lg font-call-to-action text-base transition-all shadow-xl" href="tel:07759708646">
                <span aria-hidden="true" data-nosnippet className="material-symbols-outlined text-xl sm:text-2xl">phone_in_talk</span>
                07759 708 646
              </a>
              <a className="flex items-center justify-center gap-2 sm:gap-3 bg-[#dc2626] hover:bg-[#b70011] text-white px-6 sm:px-10 py-4 sm:py-5 rounded-lg font-call-to-action text-base transition-all shadow-xl" href="tel:01613995851">
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
