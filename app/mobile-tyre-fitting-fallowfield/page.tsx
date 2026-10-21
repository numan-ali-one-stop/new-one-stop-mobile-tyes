import Image from 'next/image'
import BrandCarousel from '@/components/BrandCarousel'
import WhyChooseGrid from '@/components/WhyChooseGrid'
import CityFaq from '@/components/CityFaq'
import ServiceAreasMap from '@/components/ServiceAreasMap'
import ReviewsCarousel from '@/components/ReviewsCarousel'
import JsonLd from '@/components/JsonLd'
import LocalAreaInfo from '@/components/LocalAreaInfo'
import QuickQuoteForm from '@/components/QuickQuoteForm'
import { pageServiceSchema, pageOrganizationSchema, pageWebsiteSchema, automotiveBusinessSchema } from '@/lib/schema'
import { buildMetadata } from '@/lib/seo'

const _serviceSchema = pageServiceSchema({
  slug: 'mobile-tyre-fitting-fallowfield',
  alternateName: '24/7 Mobile Tyre Fitting Fallowfield',
  areaServed: 'Fallowfield',
  description:
    'Flat tyre or puncture in Fallowfield (M14)? 24/7 mobile tyre fitting and puncture repair on Wilmslow Road, by Platt Fields and on student streets. Call 07759 708 646.',
})

const _organizationSchema = pageOrganizationSchema('mobile-tyre-fitting-fallowfield')
const _websiteSchema = pageWebsiteSchema('mobile-tyre-fitting-fallowfield')
const _automotiveBusinessSchema = automotiveBusinessSchema({
  slug: 'mobile-tyre-fitting-fallowfield',
  image: 'https://onestoptyres247.co.uk/images/tyres-fitting-anywhere.webp',
  addressLocality: 'Fallowfield',
})

export const metadata = buildMetadata({
  title: 'Mobile Tyre Fitting Fallowfield | 24/7 Emergency & Puncture Repair',
  description:
    'Flat tyre or puncture in Fallowfield (M14)? 24/7 mobile tyre fitting and puncture repair on Wilmslow Road, by Platt Fields and on student streets. Call 07759 708 646.',
  path: '/mobile-tyre-fitting-fallowfield',
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

const whyChooseFallowfield = [
  {
    icon: 'schedule',
    title: '24/7 Tyre Assistance',
    desc: 'Get professional support when you need tyre fitting or replacement.',
  },
  {
    icon: 'tire_repair',
    title: 'Mobile Tyre Replacement',
    desc: 'Have damaged or unsafe tyres replaced at a suitable location.',
  },
  {
    icon: 'directions_car',
    title: 'Convenient Service',
    desc: 'Avoid the hassle of driving to a traditional tyre centre.',
  },
  {
    icon: 'engineering',
    title: 'Professional Fitting',
    desc: 'Tyres are fitted using appropriate equipment and procedures.',
  },
  {
    icon: 'home_repair_service',
    title: 'Home & Workplace Fitting',
    desc: 'Arrange tyre fitting where there is a safe and accessible working area.',
  },
  {
    icon: 'location_on',
    title: 'Local Fallowfield Coverage',
    desc: 'Service available across Fallowfield and nearby areas.',
  },
]

export default function FallowfieldPage() {
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
            quality={60}
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
              24/7 Mobile Tyre Fitting &amp; Puncture Repair in Fallowfield
            </h1>

            <p className="text-white/80 text-base leading-relaxed mb-6">
              Flat tyre outside your student house or a puncture on Wilmslow Road? We come to you 24/7 across Fallowfield and the M14 postcode, from Owens Park and the halls to the family homes around Platt Fields Park, including Wilbraham Road and Platt Lane. We fit tyres safely at the kerb on busy, on-street parking, and we reach nearby{' '}
              <a href="/mobile-tyre-fitting-rusholme" className="text-white font-semibold underline underline-offset-2 hover:text-[#FF4444]">Rusholme</a> and <a href="/mobile-tyre-fitting-withington" className="text-white font-semibold underline underline-offset-2 hover:text-[#FF4444]">Withington</a> just as quickly.
            </p>

            {/* Trust bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 mb-6">
              {[
                'Mobile Puncture Repair',
                '24/7 Mobile Tyre Fitting',
                'Emergency Tyre Replacement',
                'Home, Workplace & Roadside Fitting',
                'M14: Kerbside Fitting on Student Streets',
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
              <span className="text-white/60 text-xs font-medium">Rated By Drivers Across Fallowfield &amp; Greater Manchester</span>
            </a>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-3">
              <a
                href="tel:+447759708646"
                className="bg-[#FF4444] text-[#121212] font-black px-8 py-4 rounded-xl shadow-2xl shadow-red-900/40 flex items-center justify-center gap-2.5 hover:bg-red-700 hover:text-white transition-all text-base sm:text-lg"
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

            <QuickQuoteForm variant="hero" area="Fallowfield" />
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
                24/7 Mobile Tyre Fitting &amp; Emergency Tyre Repair In Fallowfield
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto text-base">
                Mobile tyre fitting, emergency tyre replacement and puncture repair across Fallowfield. We come to your home, workplace or roadside location 24/7 with fast response times and professional service.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {[
                {
                  img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Emergency%20Tyre%20Fitting%20one%20Stop-airanko-gsjvsGamoet8drKwCMHYr6LH5Ni6ZI.webp',
                  title: 'Mobile Tyre Fitting',
                  desc: 'Mobile tyre fitting at your home, workplace or roadside location anywhere in Fallowfield. Fast response with premium and budget tyre options available.',
                  badge: 'FAST RESPONSE',
                  href: '/mobile-tyre-fitting',
                },
                {
                  img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Home%20Tyre%20Fitting%20One%20Stop-airanko-kPAsyn08SjxXwLwCVhxre5zM9jWBTs.webp',
                  title: 'Home Tyre Fitting',
                  desc: 'Same day tyre fitting at your home across Fallowfield, without the hassle of visiting a garage.',
                  badge: 'AT YOUR DOOR',
                  href: '/home-tyre-fitting',
                },
                {
                  img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Puncture%20Repair%20One%20Stop-airanko-sfmhLvDbSYmhoMprTVOHCcIWEgJvHf.webp',
                  title: 'Emergency Puncture Repair',
                  desc: 'Professional mobile puncture repair across Fallowfield, carried out on-site where safe and suitable.',
                  badge: 'CERTIFIED REPAIR',
                  href: '/puncture-repair-Greater-manchester',
                },
                {
                  img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/One%20Stop%20Jumpstart%20image-airanko-cXmOrXcdtaIBMNQOMCIOiPj1C290RG.webp',
                  title: 'Jump Start',
                  desc: 'Flat battery as well as a flat tyre? Our mobile jump start service gets you back on the road in minutes, available 24/7 across Fallowfield.',
                  badge: '24/7 SERVICE',
                  href: '/jump-start',
                },
                {
                  img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Tyre%20pressure%20monitor-airanko-sjz7PL2Pv4N9jlPWtz5Wa1q8XO0FgP.webp',
                  title: 'TPMS Reset',
                  desc: 'Tyre pressure monitoring system reset and sensor checks across Fallowfield after every fitting or repair.',
                  badge: 'ALL VEHICLES',
                  href: '/tpms-reset',
                },
                {
                  img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Locking%20nut%20removal-airanko%20%281%29-ONBmqaZHMozU0jjrxbPe5J7C4zRQkS.webp',
                  title: 'Locking Nut Removal',
                  desc: 'Specialist, damage-free locking wheel nut removal across Fallowfield using professional tools.',
                  badge: 'DAMAGE FREE',
                  href: '/locking-nut-removal',
                },
                {
                  img: '/images/professional-mobile-tyre-fitting.webp',
                  title: 'Roadside Assistance',
                  desc: 'Emergency roadside support for tyre and vehicle problems across Fallowfield, wherever you get stranded.',
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
                className="bg-[#FF4444] text-[#121212] font-black px-8 py-4 rounded-xl text-xl sm:text-2xl hover:scale-105 transition-transform shadow-lg shadow-red-900/20 whitespace-nowrap"
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
                Your Mobile Tyre Fitter in Fallowfield
              </h2>
              <p className="text-slate-600 mb-4 leading-relaxed text-base sm:text-lg">
                A punctured, damaged or worn tyre can make it difficult or unsafe to drive to a garage. Our <strong>mobile tyre fitting in Fallowfield</strong> service allows you to have your tyres fitted or replaced at a convenient location.
              </p>
              <p className="text-slate-600 mb-6 sm:mb-8 leading-relaxed text-base sm:text-lg">
                As a mobile tyre fitter in Fallowfield, One Stop Tyres 247 provides professional mobile tyre fitting from the student streets off Wilmslow Road to the homes around Platt Fields and nearby areas. Whether you&apos;re at home, at work, parked in a suitable location or dealing with a tyre problem at the roadside, our technician can assess your requirements and carry out fitting or replacement where conditions are safe and suitable.
              </p>
              <p className="text-[#FF4444] text-xs font-bold uppercase tracking-widest mb-3">Key Benefits</p>
              <ul className="space-y-4 sm:space-y-5">
                <FeatureItem
                  icon="tire_repair"
                  title="Mobile Tyre Fitting"
                  desc="Get your tyres fitted at a convenient location without making an unnecessary garage visit."
                />
                <FeatureItem
                  icon="bolt"
                  title="Tyre Replacement"
                  desc="If your tyre is damaged beyond safe repair, we can provide a suitable replacement where available."
                />
                <FeatureItem
                  icon="location_on"
                  title="Convenient Local Service"
                  desc="Our technician comes directly to your location in Fallowfield."
                />
                <FeatureItem
                  icon="schedule"
                  title="24/7 Tyre Assistance"
                  desc="Get professional tyre fitting and replacement support when you need it."
                />
              </ul>
            </div>
          </div>
        </section>

        {/* ── 5. WHY CHOOSE ─────────────────────────────────── */}
        <WhyChooseGrid
          heading="Why Choose Our Mobile Tyre Fitting Service in Fallowfield?"
          intro=""
          items={whyChooseFallowfield}
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
                How Our Mobile Tyre Fitting Service Works in Fallowfield
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative">
              {[
                {
                  n: '1',
                  title: 'Contact Us',
                  desc: 'Tell us your location in Fallowfield, vehicle details and the tyre service you require.',
                },
                {
                  n: '2',
                  title: 'Confirm Your Tyre Requirements',
                  desc: 'Provide your vehicle registration or tyre size so we can identify the appropriate tyre where replacement is required.',
                },
                {
                  n: '3',
                  title: 'We Come to You',
                  desc: 'Our technician travels to your home, workplace or another suitable location.',
                },
                {
                  n: '4',
                  title: 'Fit or Replace Your Tyre',
                  desc: 'We remove the existing tyre where required, fit the replacement and carry out the necessary checks before completing the service.',
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

        {/* ── 7. MOBILE TYRE REPLACEMENT ACROSS FALLOWFIELD ─────── */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 bg-white">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-[#b70011] font-bold uppercase tracking-widest text-sm mb-3 block">
              Mobile Tyre Replacement
            </span>
            <h2
              className="text-2xl sm:text-4xl text-[#0f172a] mb-5 sm:mb-8 leading-tight font-bold"
              style={{ fontFamily: 'var(--font-work-sans)' }}
            >
              Mobile Tyre Replacement Across Fallowfield
            </h2>
            <p className="text-slate-600 mb-4 leading-relaxed text-base sm:text-lg">
              Not every damaged tyre can be repaired safely. Our <strong>mobile tyre replacement Fallowfield</strong> service provides a convenient option when you need a new tyre fitted without driving to a garage.
            </p>
            <p className="text-slate-600 mb-4 leading-relaxed text-base sm:text-lg">
              We can replace tyres that are severely damaged, worn beyond safe limits or punctured in a way that makes repair unsuitable. Our technician assesses the tyre first and determines whether tyre repair or replacement is the appropriate option.
            </p>
            <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
              Whether you need one replacement tyre or several tyres fitted, we can arrange mobile tyre replacement at a suitable location in Fallowfield, subject to tyre availability. We carry budget, mid-range and premium mobile tyres in Fallowfield, fitted wherever your car is parked.
            </p>
          </div>
        </section>

        {/* ── 8. EMERGENCY MOBILE TYRE FITTING & REPLACEMENT ───── */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 bg-slate-50">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-[#b70011] font-bold uppercase tracking-widest text-sm mb-3 block">
              Emergency Mobile Tyre Fitting &amp; Replacement
            </span>
            <h2
              className="text-2xl sm:text-4xl text-[#0f172a] mb-5 sm:mb-8 leading-tight font-bold"
              style={{ fontFamily: 'var(--font-work-sans)' }}
            >
              Emergency Mobile Tyre Fitting and Replacement in Fallowfield
            </h2>
            <p className="text-slate-600 mb-4 leading-relaxed text-base sm:text-lg">
              A sudden puncture, blowout or damaged tyre can leave you unable to continue your journey. Our <strong>emergency mobile tyre fitting Fallowfield</strong> service provides practical assistance when you need a tyre fitted or replaced at your location.
            </p>
            <p className="text-slate-600 mb-4 leading-relaxed text-base sm:text-lg">
              If the tyre can be safely repaired, our technician can assess the damage and provide puncture repair where appropriate. If repair isn&apos;t suitable, we can provide emergency tyre replacement with a suitable tyre, subject to availability.
            </p>
            <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
              We also cover the neighbouring areas: <a href="/mobile-tyre-fitting-rusholme" className="text-[#b70011] font-semibold hover:underline">Rusholme</a> and <a href="/mobile-tyre-fitting-moss-side" className="text-[#b70011] font-semibold hover:underline">Moss Side</a> to the north,{' '}
              <a href="/mobile-tyre-fitting-withington" className="text-[#b70011] font-semibold hover:underline">Withington</a> and <a href="/mobile-tyre-fitting-didsbury" className="text-[#b70011] font-semibold hover:underline">Didsbury</a> further along Wilmslow Road,{' '}
              <a href="/mobile-tyre-fitting-ladybarn" className="text-[#b70011] font-semibold hover:underline">Ladybarn</a> and <a href="/mobile-tyre-fitting-levenshulme" className="text-[#b70011] font-semibold hover:underline">Levenshulme</a> to the east, and{' '}
              <a href="/mobile-tyre-fitting-chorlton-cum-hardy" className="text-[#b70011] font-semibold hover:underline">Chorlton-cum-Hardy</a> and <a href="/mobile-tyre-fitting-whalley-range" className="text-[#b70011] font-semibold hover:underline">Whalley Range</a> to the west.
            </p>
          </div>
        </section>

        {/* ── 9. BRAND CAROUSEL ─────────────────────────────── */}
        <BrandCarousel />

        {/* ── SERVICE AREAS MAP ──────────────────────────────── */}
        <ServiceAreasMap />

        {/* ── LOCAL AREA DETAILS ─────────────────────────────── */}
        <LocalAreaInfo currentSlug="fallowfield" />

        {/* ── 10. FAQ ────────────────────────────────────────── */}
        <CityFaq
          canonical="https://onestoptyres247.co.uk/mobile-tyre-fitting-fallowfield"
          city="Fallowfield"
          faqs={[
            {
              q: 'Can you fit a tyre on the street outside my student house?',
              a: 'Yes. Most Fallowfield streets have on-street parking only, so fitting mobile tyres in Fallowfield at the kerb is what we do every day. We set up safely beside the car, keep the pavement clear and finish quickly.',
            },
            {
              q: 'Do you cover Owens Park and the student halls?',
              a: 'Yes. Tell us which hall or block you are at and where the car is parked, and how to get into the car park if it is gated.',
            },
            {
              q: 'I have a puncture on Wilmslow Road. What should I do?',
              a: 'Wilmslow Road has bus lanes and heavy traffic, so turn into the nearest side street if the tyre allows, then send us a map pin.',
            },
            {
              q: 'Do you offer emergency tyre fitting in Fallowfield?',
              a: 'Yes. Our emergency tyre fitting runs 24 hours a day across Fallowfield, from Wilmslow Road and the student halls to Platt Fields and Wilbraham Road. We repair the puncture where it is safe to do so, or fit a replacement tyre on the spot, subject to availability.',
            },
            {
              q: 'Can you come to Platt Fields Park or Platt Lane?',
              a: 'Yes. If you are parked by Platt Fields Park or on Platt Lane, tell us roughly where and we will come to you.',
            },
            {
              q: 'Do you cover all of Fallowfield (M14)?',
              a: 'Yes. We provide tyre fitting across the whole M14 area here, including Wilbraham Road, Mauldeth Road, Platt Lane and the streets towards Ladybarn and Victoria Park.',
            },
            {
              q: 'I am a student on a budget. What tyre options do you have?',
              a: 'We can supply budget, mid-range and premium tyres, and we always give you the price before we start, so you can choose what suits you.',
            },
            {
              q: 'My car is parked tightly between other cars. Can you still work?',
              a: 'Usually, yes. The terraced streets off Wilmslow Road are tightly parked, so we are used to it. If there is not enough room to work safely, we will suggest a better spot nearby or ask you to move the car a short distance if the tyre allows.',
            },
            {
              q: 'How quickly can you reach me in Fallowfield?',
              a: 'It depends on traffic on Wilmslow Road and Wilbraham Road. We typically reach you within 20 to 30 minutes and give you an estimate when you call.',
            },
            {
              q: 'Can you repair my puncture instead of replacing the tyre?',
              a: 'Often, yes. If the damage is in the central tread area and the tyre has not been driven on flat, we can repair it on the spot.',
            },
            {
              q: 'Do you fit tyres at night in Fallowfield?',
              a: 'Yes. We work 24 hours a day, which helps if you find a flat late at night or before an early lecture or shift.',
            },
            {
              q: 'How do I book a mobile tyre fitter in Fallowfield?',
              a: 'Call or WhatsApp 07759 708 646, or use the instant quote form on this page. Send your registration or tyre size and your M14 postcode, and we will send the nearest available mobile tyre fitter to you.',
            },
          ]}
        />

        {/* ── 11. FINAL CTA ──────────────────────────────────── */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-[#f0edec] relative">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-h2 text-xl sm:text-2xl lg:text-h2 mb-4 sm:mb-5 leading-tight">Need Mobile Tyre Fitting in Fallowfield?</h2>
            <p className="font-body-lg text-base lg:text-lg text-[#5c403c] leading-relaxed mb-6 sm:mb-8">Whether you need a new tyre fitted, a damaged tyre replaced or a puncture assessed, our mobile service brings professional tyre assistance directly to you. With One Stop Tyres 247, you can arrange tyre fitting or replacement at home, work or a suitable roadside location across Fallowfield.</p>
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
