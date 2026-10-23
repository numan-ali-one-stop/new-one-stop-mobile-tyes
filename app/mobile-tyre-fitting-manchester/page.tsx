import Image from 'next/image'
import BrandCarousel from '@/components/BrandCarousel'
import WhyChooseGrid from '@/components/WhyChooseGrid'
import CityFaq from '@/components/CityFaq'
import ServiceAreasMap from '@/components/ServiceAreasMap'
import ReviewsCarousel from '@/components/ReviewsCarousel'
import JsonLd from '@/components/JsonLd'
import LocalAreaInfo from '@/components/LocalAreaInfo'
import { pageServiceSchema, pageOrganizationSchema, pageWebsiteSchema, automotiveBusinessSchema } from '@/lib/schema'
import { buildMetadata } from '@/lib/seo'
import HeroMapBackground from '@/components/HeroMapBackground'
import HeroQuoteSection from '@/components/HeroQuoteSection'

const _serviceSchema = pageServiceSchema({
  slug: 'mobile-tyre-fitting-manchester',
  alternateName: 'Manchester Mobile Tyre Fitting Service',
  areaServed: 'Manchester',
  description:
    'Flat tyre or puncture in Manchester? 24/7 mobile tyre fitting and puncture repair across the city centre and M1–M16 postcodes. Call 07759 708 646.',
})

const _organizationSchema = pageOrganizationSchema('mobile-tyre-fitting-manchester')
const _websiteSchema = pageWebsiteSchema('mobile-tyre-fitting-manchester')
const _automotiveBusinessSchema = automotiveBusinessSchema({
  slug: 'mobile-tyre-fitting-manchester',
  image: 'https://onestoptyres247.co.uk/images/tyres-fitting-anywhere.webp',
  addressLocality: 'Manchester',
})

export const metadata = buildMetadata({
  title: 'Mobile Tyre Fitting Manchester | 24/7 Emergency & Puncture Repair',
  description:
    'Flat tyre or puncture in Manchester? 24/7 mobile tyre fitting and puncture repair across the city centre and M1–M16 postcodes. Call 07759 708 646.',
  path: '/mobile-tyre-fitting-manchester',
})

function FeatureItem({ icon, title, desc }: { icon: string; title: string; desc: string }) {
  return (
    <li className="flex items-center gap-4 bg-slate-50 p-4 rounded-xl border-l-4 border-[#b70011]">
      <div className="w-10 h-10 bg-[#b70011]/10 rounded-full flex items-center justify-center shrink-0">
        <span aria-hidden="true" data-nosnippet className="material-symbols-outlined text-[#b70011]">
          {icon}
        </span>
      </div>
      <div>
        <span className="font-bold text-[#0f172a] block">{title}</span>
        <p className="text-sm text-slate-500">{desc}</p>
      </div>
    </li>
  )
}

const whyChooseManchester = [
  {
    icon: 'directions_car',
    title: 'Convenient Service',
    desc: 'Get your tyres fitted at a suitable location in Manchester.',
  },
  {
    icon: 'schedule',
    title: '24-Hour Availability',
    desc: 'Our mobile fitting service is available around the clock for suitable appointments.',
  },
  {
    icon: 'engineering',
    title: 'Professional Tyre Fitting',
    desc: 'Your tyres are fitted carefully using suitable equipment.',
  },
  {
    icon: 'garage',
    title: 'No Unnecessary Garage Visit',
    desc: 'Save time by having your tyres fitted at your location.',
  },
  {
    icon: 'pin_drop',
    title: 'Flexible Locations',
    desc: 'We can provide fitting at home, work or another suitable location.',
  },
  {
    icon: 'location_on',
    title: 'Manchester Coverage',
    desc: 'Local service for drivers throughout Manchester and surrounding areas.',
  },
]

export default function ManchesterPage() {
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
              24/7 Mobile Tyre Fitting &amp; Puncture Repair in Manchester
            </h1>

            <p className="text-white/95 lg:text-white/80 text-base leading-relaxed mb-6">
              Flat tyre in a city-centre car park or a puncture on the Mancunian Way? We come to you 24/7 across Manchester&apos;s M1–M16 postcodes, from Piccadilly, Deansgate and the Northern Quarter to homes in{' '}
              <a href="/mobile-tyre-fitting-didsbury" className="text-white font-semibold underline underline-offset-2 hover:text-[#FF4444]">Didsbury</a>,{' '}
              <a href="/mobile-tyre-fitting-chorlton-cum-hardy" className="text-white font-semibold underline underline-offset-2 hover:text-[#FF4444]">Chorlton</a> and{' '}
              <a href="/mobile-tyre-fitting-cheetham-hill" className="text-white font-semibold underline underline-offset-2 hover:text-[#FF4444]">Cheetham Hill</a>, and anywhere along Princess Parkway, Oxford Road and the M60. We repair punctures where it is safe and fit replacement tyres on the spot, so there is no need to drive to a garage.
            </p>

            {/* Trust bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 mb-6">
              {[
                'On-the-Spot Puncture Repair',
                'Emergency Tyre Replacement',
                '24 Hour Tyre Fitting',
                'Home, Workplace & Roadside Service',
                'City Centre & M1–M16 Coverage',
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
            <a href="https://maps.app.goo.gl/tqGMogzsNNn8EXjH8" target="_blank" rel="noopener noreferrer" className="inline-flex flex-wrap items-center gap-2 sm:gap-2.5 max-w-full bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-full px-4 py-2 mb-4">
              <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              <div className="flex text-yellow-400 gap-px shrink-0">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span aria-hidden="true" data-nosnippet key={i} className="material-symbols-outlined text-[13px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                ))}
              </div>
              <span className="font-bold text-sm shrink-0">5.0</span>
              <span className="text-white/80 lg:text-white/60 text-xs font-medium hidden sm:inline">Rated By Drivers Across Manchester &amp; Greater Manchester</span>
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

        <HeroQuoteSection area="Manchester" />

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
            <ReviewsCarousel offset={0} />
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
                Mobile Tyre Replacement &amp; Fitting In Manchester
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto text-base">
                When a tyre is worn, damaged or no longer safe to drive on, getting a replacement should be simple. One Stop Mobile Tyres 24/7 provides mobile tyre replacement across Manchester, bringing suitable tyres directly to you and fitting them on-site. Our technicians can replace tyres at your home, workplace or a suitable roadside location, with a choice of premium, mid-range and budget tyres to suit both your vehicle and budget.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {[
                {
                  img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Emergency%20Tyre%20Fitting%20one%20Stop-airanko-gsjvsGamoet8drKwCMHYr6LH5Ni6ZI.webp',
                  title: 'Mobile Tyre Fitting',
                  desc: 'Professional tyre replacement at your location across Manchester. We supply suitable tyres and fit them on-site, saving you a trip to a garage.',
                  badge: 'FAST RESPONSE',
                  href: '/mobile-tyre-fitting',
                },
                {
                  img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Home%20Tyre%20Fitting%20One%20Stop-airanko-kPAsyn08SjxXwLwCVhxre5zM9jWBTs.webp',
                  title: 'Home Tyre Fitting',
                  desc: 'Have your tyres replaced at home while you get on with your day. Our mobile service makes tyre replacement convenient without rearranging your schedule.',
                  badge: 'AT YOUR DOOR',
                  href: '/home-tyre-fitting',
                },
                {
                  img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Puncture%20Repair%20One%20Stop-airanko-sfmhLvDbSYmhoMprTVOHCcIWEgJvHf.webp',
                  title: 'Emergency Puncture Repair',
                  desc: 'Professional mobile puncture repair across Manchester, carried out on-site where safe and suitable.',
                  badge: 'CERTIFIED REPAIR',
                  href: '/puncture-repair-Greater-manchester',
                },
                {
                  img: '/images/professional-mobile-tyre-fitting.webp',
                  title: 'Roadside Assistance',
                  desc: 'Emergency roadside support for tyre and vehicle problems across Manchester, wherever you get stranded.',
                  badge: '24/7 SUPPORT',
                  href: '/roadside-assistance',
                },
                {
                  img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/One%20Stop%20Jumpstart%20image-airanko-cXmOrXcdtaIBMNQOMCIOiPj1C290RG.webp',
                  title: 'Jump Start',
                  desc: 'Flat battery as well as a flat tyre? Our mobile jump start service gets you back on the road in minutes, available 24/7 across Manchester.',
                  badge: '24/7 SERVICE',
                  href: '/jump-start',
                },
                {
                  img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Tyre%20pressure%20monitor-airanko-sjz7PL2Pv4N9jlPWtz5Wa1q8XO0FgP.webp',
                  title: 'TPMS Reset',
                  desc: 'Tyre pressure monitoring system reset and sensor checks across Manchester after every fitting or repair.',
                  badge: 'ALL VEHICLES',
                  href: '/tpms-reset',
                },
                {
                  img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Locking%20nut%20removal-airanko%20%281%29-ONBmqaZHMozU0jjrxbPe5J7C4zRQkS.webp',
                  title: 'Locking Nut Removal',
                  desc: 'Specialist, damage-free locking wheel nut removal across Manchester using professional tools.',
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

        {/* ── 4. MOBILE TYRE FITTING IN MANCHESTER ─────────────── */}
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
                <div className="text-slate-500 text-[11px] font-semibold uppercase tracking-wide">Google Rating</div>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <span className="text-[#b70011] font-bold uppercase tracking-widest text-sm mb-3 block">
                Mobile Tyre Fitting in Manchester
              </span>
              <h2
                className="text-2xl sm:text-4xl lg:text-5xl text-[#0f172a] mb-5 sm:mb-8 leading-tight font-bold"
                style={{ fontFamily: 'var(--font-work-sans)' }}
              >
                Your Mobile Tyre Fitter in Manchester
              </h2>
              <p className="text-slate-600 mb-4 leading-relaxed text-base sm:text-lg">
                Getting a tyre replaced or fitted doesn&apos;t always mean taking your car to a garage. Our <strong>mobile tyre fitting in Manchester</strong> service brings professional tyre fitting directly to your location.
              </p>
              <p className="text-slate-600 mb-6 sm:mb-8 leading-relaxed text-base sm:text-lg">
                As a mobile tyre fitter in Manchester, One Stop Tyres 247 brings the tyres and equipment to drivers right across the city. Whether you need a replacement tyre at home, at work or at a suitable roadside location, our technician can assess your requirements and carry out the fitting where conditions are safe and suitable. If you have been searching for &quot;mobile tyre fitting near me&quot; or &quot;tyre fitters near me&quot;, there is no garage to find: our technicians work across every part of Manchester, so the nearest available fitter comes to you.
              </p>
              <p className="text-[#FF4444] text-xs font-bold uppercase tracking-widest mb-3">Key Benefits</p>
              <ul className="space-y-4 sm:space-y-5">
                <FeatureItem
                  icon="directions_car"
                  title="Convenient Tyre Fitting"
                  desc="Have your tyres fitted at a suitable location instead of arranging a garage visit."
                />
                <FeatureItem
                  icon="location_on"
                  title="Manchester-Wide Service"
                  desc="From the city centre (M1–M4) to Didsbury, Chorlton, Cheetham Hill and Wythenshawe, everywhere inside the M60."
                />
                <FeatureItem
                  icon="engineering"
                  title="Professional Fitting"
                  desc="Tyres are fitted using appropriate equipment and professional procedures."
                />
                <FeatureItem
                  icon="schedule"
                  title="24-Hour Availability"
                  desc="Our 24 hour mobile tyre fitting Manchester service provides assistance when you need tyre fitting outside normal garage hours."
                />
              </ul>
            </div>
          </div>
        </section>

        {/* ── 5. WHY CHOOSE ─────────────────────────────────── */}
        <WhyChooseGrid
          heading="Why Choose Our Mobile Tyre Service in Manchester?"
          intro=""
          items={whyChooseManchester}
        />

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
                Simple Process
              </span>
              <h2
                className="text-2xl sm:text-[32px] font-bold"
                style={{ fontFamily: 'var(--font-work-sans)', letterSpacing: '-0.01em' }}
              >
                How Our Mobile Tyre Fitting Service Works in Manchester
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative">
              {[
                {
                  n: '1',
                  title: 'Contact Us',
                  desc: 'Provide your vehicle details, tyre requirements and Manchester location.',
                },
                {
                  n: '2',
                  title: 'Choose Your Tyres',
                  desc: 'Tell us which tyres you need or provide your vehicle registration or existing tyre size so we can confirm the appropriate option.',
                },
                {
                  n: '3',
                  title: 'We Come to You',
                  desc: 'Our technician travels to your agreed location in Manchester at the arranged time.',
                },
                {
                  n: '4',
                  title: 'Professional Tyre Fitting',
                  desc: 'The tyre is fitted and checked to ensure the vehicle is ready for safe use.',
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

        {/* ── 7. MOBILE TYRE FITTING ACROSS MANCHESTER ─────────── */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 bg-white">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-[#b70011] font-bold uppercase tracking-widest text-sm mb-3 block">
              Mobile Tyre Fitting Across Manchester
            </span>
            <h2
              className="text-2xl sm:text-4xl text-[#0f172a] mb-5 sm:mb-8 leading-tight font-bold"
              style={{ fontFamily: 'var(--font-work-sans)' }}
            >
              Mobile Tyres in Manchester, Fitted Where You Are
            </h2>
            <p className="text-slate-600 mb-4 leading-relaxed text-base sm:text-lg">
              Our <strong>mobile tyre fitting service in Manchester</strong> is designed for drivers who want professional tyre fitting without making a trip to a tyre garage.
            </p>
            <p className="text-slate-600 mb-4 leading-relaxed text-base sm:text-lg">
              Our <a href="/home-tyre-fitting" className="text-[#b70011] font-semibold hover:underline">home tyre fitting in Manchester</a> means tyre fitting at home, on your drive or at the kerb outside your house, and we can also come to your workplace or another suitable location.
            </p>
            <p className="text-slate-600 mb-4 leading-relaxed text-base sm:text-lg">
              Our <strong>mobile tyre replacement in Manchester</strong> suits drivers who need a new tyre, have discovered a damaged tyre or simply prefer the convenience of having their tyres fitted where they are.
            </p>
            <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
              We cover every part of the city: <a href="/mobile-tyre-fitting-ancoats" className="text-[#b70011] font-semibold hover:underline">Ancoats</a> and <a href="/mobile-tyre-fitting-ardwick" className="text-[#b70011] font-semibold hover:underline">Ardwick</a> on the edge of the centre,{' '}
              <a href="/mobile-tyre-fitting-hulme" className="text-[#b70011] font-semibold hover:underline">Hulme</a> and <a href="/mobile-tyre-fitting-moss-side" className="text-[#b70011] font-semibold hover:underline">Moss Side</a> to the south,{' '}
              <a href="/mobile-tyre-fitting-fallowfield" className="text-[#b70011] font-semibold hover:underline">Fallowfield</a>, <a href="/mobile-tyre-fitting-withington" className="text-[#b70011] font-semibold hover:underline">Withington</a> and <a href="/mobile-tyre-fitting-didsbury" className="text-[#b70011] font-semibold hover:underline">Didsbury</a> along Wilmslow Road,{' '}
              <a href="/mobile-tyre-fitting-chorlton-cum-hardy" className="text-[#b70011] font-semibold hover:underline">Chorlton-cum-Hardy</a> and <a href="/mobile-tyre-fitting-whalley-range" className="text-[#b70011] font-semibold hover:underline">Whalley Range</a> to the south-west,{' '}
              <a href="/mobile-tyre-fitting-cheetham-hill" className="text-[#b70011] font-semibold hover:underline">Cheetham Hill</a>, <a href="/mobile-tyre-fitting-blackley" className="text-[#b70011] font-semibold hover:underline">Blackley</a> and <a href="/mobile-tyre-fitting-harpurhey" className="text-[#b70011] font-semibold hover:underline">Harpurhey</a> to the north,{' '}
              <a href="/mobile-tyre-fitting-gorton" className="text-[#b70011] font-semibold hover:underline">Gorton</a>, <a href="/mobile-tyre-fitting-levenshulme" className="text-[#b70011] font-semibold hover:underline">Levenshulme</a> and <a href="/mobile-tyre-fitting-longsight" className="text-[#b70011] font-semibold hover:underline">Longsight</a> to the east, and{' '}
              <a href="/mobile-tyre-fitting-wythenshawe" className="text-[#b70011] font-semibold hover:underline">Wythenshawe</a> and <a href="/mobile-tyre-fitting-northenden" className="text-[#b70011] font-semibold hover:underline">Northenden</a> near the airport.
            </p>
          </div>
        </section>

        {/* ── VEHICLES, PRICE & SPEED ───────────────────────────── */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 bg-white border-t border-slate-100">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-[#b70011] font-bold uppercase tracking-widest text-sm mb-3 block">
              Every Vehicle, Every Budget
            </span>
            <h2
              className="text-2xl sm:text-4xl text-[#0f172a] mb-5 sm:mb-8 leading-tight font-bold"
              style={{ fontFamily: 'var(--font-work-sans)' }}
            >
              Van, EV and Run Flat Tyre Fitting in Manchester
            </h2>
            <p className="text-slate-600 mb-4 leading-relaxed text-base sm:text-lg">
              We fit tyres for cars, SUVs, vans and electric vehicles at your home, workplace or a safe roadside spot. Our <strong>van tyre fitting in Manchester</strong> keeps tradespeople and delivery drivers on the road, with load-rated van tyres fitted on site.
            </p>
            <p className="text-slate-600 mb-4 leading-relaxed text-base sm:text-lg">
              <strong>EV tyre fitting in Manchester</strong> needs tyres with the right load rating for heavier electric cars, and we fit tyres to suit your vehicle. We also offer <strong>run flat tyre fitting in Manchester</strong> for cars that came with run-flats from the factory. Not sure which you need? Read our <a href="/guides/run-flat-vs-normal-tyres-manchester" className="text-[#b70011] font-semibold hover:underline">run-flat vs normal tyres guide</a>.
            </p>
            <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
              Looking for <strong>cheap mobile tyre fitting in Manchester</strong>? We supply budget, mid-range and premium tyres and give you the full price before we start, so you can choose what suits you. <strong>Same day tyre fitting in Manchester</strong> is often possible too, subject to your tyre size being in stock.
            </p>
          </div>
        </section>

        {/* ── 8. 24 HOUR MOBILE TYRE FITTING ───────────────────── */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 bg-slate-50">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-[#b70011] font-bold uppercase tracking-widest text-sm mb-3 block">
              24 Hour Mobile Tyre Fitting
            </span>
            <h2
              className="text-2xl sm:text-4xl text-[#0f172a] mb-5 sm:mb-8 leading-tight font-bold"
              style={{ fontFamily: 'var(--font-work-sans)' }}
            >
              24 Hour Mobile Tyre Fitting in Manchester
            </h2>
            <p className="text-slate-600 mb-4 leading-relaxed text-base sm:text-lg">
              Tyre problems don&apos;t always happen during normal working hours. Our <strong>24 hour mobile tyre fitting Manchester</strong> service provides convenient tyre fitting assistance when you need it.
            </p>
            <p className="text-slate-600 mb-4 leading-relaxed text-base sm:text-lg">
              If you have a damaged tyre or need a replacement outside standard garage hours, contact us with your location and vehicle details. We&apos;ll assess your requirements and arrange suitable mobile tyre fitting where possible.
            </p>
            <p className="text-slate-600 mb-4 leading-relaxed text-base sm:text-lg">
              Our service is particularly useful when visiting a garage is inconvenient or you&apos;re unable to drive your vehicle safely to a tyre centre.
            </p>
            <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
              For <strong>emergency tyre fitting in Manchester</strong>, call us whatever the time: a flat tyre in Manchester city centre, a tyre blowout on Princess Parkway or a puncture on the Mancunian Way. If the tyre cannot be repaired safely, we carry out <strong>emergency tyre replacement in Manchester</strong> on the spot, subject to tyre availability.
            </p>
          </div>
        </section>

        {/* ── 9. BRAND CAROUSEL ─────────────────────────────── */}
        <BrandCarousel />

        {/* ── SERVICE AREAS MAP ──────────────────────────────── */}
        <ServiceAreasMap />

        {/* ── LOCAL AREA DETAILS ─────────────────────────────── */}
        <LocalAreaInfo currentSlug="manchester" />

        {/* ── 10. FAQ ────────────────────────────────────────── */}
        <CityFaq
          canonical="https://onestoptyres247.co.uk/mobile-tyre-fitting-manchester"
          city="Manchester"
          faqs={[
            {
              q: 'Can you fit a tyre in a city-centre multi-storey car park?',
              a: 'Yes. We regularly work in multi-storeys around Piccadilly, the Arndale and Deansgate. Tell us the car park name, level and bay, and check the height limit so we can plan access.',
            },
            {
              q: 'I have a flat on the Mancunian Way. What should I do?',
              a: 'Do not stop on the Mancunian Way, as there is no hard shoulder. Leave at the next exit, stop in a side street or car park, then call us with a map pin and we will come to you.',
            },
            {
              q: 'Which Manchester postcodes do you cover?',
              a: 'We cover the M1 to M16 postcodes, including the city centre (M1 to M4), plus M18 to M23 and M40, which takes in Wythenshawe, Didsbury, Gorton and Newton Heath.',
            },
            {
              q: 'Can you come to my apartment block\'s underground car park?',
              a: 'Yes. Many of our city-centre jobs are in residents\' car parks in Spinningfields, Ancoats, Castlefield and Hulme. Let us know how to get in, or meet us at the gate.',
            },
            {
              q: 'Do you work in the bus lanes on Oxford Road or Wilmslow Road?',
              a: 'No. For safety we never work in a bus lane. Turn into the nearest side street and we will meet you there to repair or replace the tyre.',
            },
            {
              q: 'Do you cover the car parks at Manchester Airport?',
              a: 'Yes. Tell us which car park, level and bay you are in. Some airport car parks have barriers or height limits, so we plan our access before we set off.',
            },
            {
              q: 'Can you help on match days near the Etihad Campus?',
              a: 'Yes. Traffic around the Etihad builds up quickly on match and event days, so tell us exactly where you are parked and we will give you an honest arrival estimate.',
            },
            {
              q: 'How quickly can you reach me in Manchester?',
              a: 'It depends on your location, the time of day and traffic on roads like Princess Parkway and the Mancunian Way. In most of the city we typically reach you within 20 to 30 minutes, and we give you an estimate when you call.',
            },
            {
              q: 'Do you offer night tyre fitting in Manchester?',
              a: 'Yes. We work 24 hours a day, so night tyre fitting in Manchester is part of our normal service, whether you find a flat after a late shift, a night out or before an early-morning start.',
            },
            {
              q: 'Can you repair my puncture instead of replacing the tyre?',
              a: 'Often, yes. If the damage is in the central tread area and the tyre has not been driven on flat, we can repair it on the spot. Sidewall damage means the tyre needs replacing.',
            },
            {
              q: 'Is there mobile tyre fitting near me in Manchester?',
              a: 'Yes. Wherever you are in Manchester, from the city centre to Didsbury, Chorlton and Withington in the south or Cheetham Hill, Blackley and Harpurhey in the north, our mobile tyre fitters come to you, so the nearest tyre fitting is wherever your car is parked.',
            },
            {
              q: 'Can you do tyre fitting at home in Manchester?',
              a: 'Yes. Home tyre fitting in Manchester is one of our most popular services. We fit tyres on your drive or at the kerb outside your house, so you do not need to take the car anywhere.',
            },
            {
              q: 'Do you offer emergency tyre fitting in Manchester?',
              a: 'Yes. Our emergency tyre fitting runs 24 hours a day across the city. We repair the puncture where it is safe to do so, and if the tyre cannot be saved we provide emergency tyre replacement in Manchester on the spot, subject to tyre availability.',
            },
            {
              q: 'I have a flat tyre in Manchester. What should I do?',
              a: 'If you are driving, slow down gently and stop somewhere safe, away from traffic, with your hazard lights on. Do not keep driving on a flat tyre, as it can damage the wheel. Then call or WhatsApp us with your location and we will come to you to repair or replace the tyre.',
            },
            {
              q: 'What should I do after a tyre blowout in Manchester?',
              a: 'Hold the steering wheel firmly, ease off the accelerator and let the car slow down before braking gently. Pull over somewhere safe, put your hazard lights on and get everyone away from the traffic. Never change a tyre on a motorway hard shoulder or the Mancunian Way. A blown tyre always needs replacing, so call us and we will fit a new one where it is safe to do so.',
            },
            {
              q: 'Do you offer cheap mobile tyre fitting in Manchester?',
              a: 'We supply budget, mid-range and premium tyres, so there is an option for every budget. We always give you the full price before we start, so you can compare and decide.',
            },
            {
              q: 'Do you offer same day tyre fitting in Manchester?',
              a: 'Often, yes. If your tyre size is in stock, we can usually fit it the same day. Send us your registration or tyre size and we will confirm availability when you call.',
            },
            {
              q: 'How do I book a mobile tyre fitter in Manchester?',
              a: 'Call or WhatsApp 07759 708 646, or use the instant quote form on this page. Send your registration or tyre size and your postcode, and a map pin if you are on the road, and we will send the nearest available mobile tyre fitter to you.',
            },
          ]}
        />

        {/* ── 11. FINAL CTA ──────────────────────────────────── */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-[#f0edec] relative">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-h2 text-xl sm:text-2xl lg:text-h2 mb-4 sm:mb-5 leading-tight">Need Mobile Tyre Fitting in Manchester?</h2>
            <p className="font-body-lg text-base lg:text-lg text-[#5c403c] leading-relaxed mb-6 sm:mb-8">Get professional tyre fitting at a convenient location with One Stop Tyres 247. Whether you need a tyre fitted during the day or require 24 hour mobile tyre fitting Manchester, contact us to arrange a suitable service.</p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center mt-4 sm:mt-6">
              <a
                className="flex items-center justify-center gap-2 sm:gap-3 bg-[#dc2626] hover:bg-[#b70011] text-white px-6 sm:px-10 py-4 sm:py-5 rounded-lg font-call-to-action text-base transition-all shadow-xl"
                href="/contact"
              >
                <span aria-hidden="true" data-nosnippet className="material-symbols-outlined text-xl sm:text-2xl">calendar_month</span>
                Book Mobile Tyre Fitting
              </a>
              <a
                className="flex items-center justify-center gap-2 sm:gap-3 bg-[#1c1b1b] hover:bg-slate-800 text-white px-6 sm:px-10 py-4 sm:py-5 rounded-lg font-call-to-action text-base transition-all shadow-xl"
                href="tel:+447759708646"
              >
                <span aria-hidden="true" data-nosnippet className="material-symbols-outlined text-xl sm:text-2xl">phone_in_talk</span>
                Call Now
              </a>
            </div>
          </div>
        </section>

      </main>
    </div>
  )
}
