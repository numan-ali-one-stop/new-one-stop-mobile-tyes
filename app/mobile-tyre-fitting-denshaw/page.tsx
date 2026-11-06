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
  slug: 'mobile-tyre-fitting-denshaw',
  alternateName: '24/7 Mobile Tyre Fitting Denshaw',
  areaServed: 'Denshaw, Greater Manchester',
  description:
    'Need mobile tyre fitting in Denshaw? Get 24/7 tyre fitting, emergency tyre replacement and puncture repair at home, work or roadside.',
})

const _organizationSchema = pageOrganizationSchema('mobile-tyre-fitting-denshaw')
const _websiteSchema = pageWebsiteSchema('mobile-tyre-fitting-denshaw')
const _automotiveBusinessSchema = automotiveBusinessSchema({
  slug: 'mobile-tyre-fitting-denshaw',
  image: 'https://onestoptyres247.co.uk/images/tyres-fitting-anywhere.webp',
  addressLocality: 'Denshaw',
})

export const metadata = buildMetadata({
  title: 'Mobile Tyre Fitting Denshaw | 24/7 Tyre Replacement',
  description:
    'Need mobile tyre fitting in Denshaw? Get 24/7 tyre fitting, emergency tyre replacement and puncture repair at home, work or roadside.',
  path: '/mobile-tyre-fitting-denshaw',
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

export default function DenshawPage() {
  return (
    <div className="bg-[#fcf9f8] text-[#1c1b1b] font-body-md">
      <JsonLd data={_serviceSchema} className="schemantra" />
      <JsonLd data={_organizationSchema} />
      <JsonLd data={_websiteSchema} />
      <JsonLd data={_automotiveBusinessSchema} />
      <main>

        {/* ── 1. HERO ───────────────────────────────────────── */}
        <section className="relative lg:min-h-[600px] flex items-center justify-center lg:justify-start text-center lg:text-left px-4 sm:px-8 lg:px-16 overflow-hidden">
          <HeroMapBackground />

          <div className="relative z-10 w-full max-w-2xl mx-auto lg:mx-0 py-10 sm:py-14 lg:py-20 [text-shadow:0_1px_3px_rgba(0,0,0,0.9),0_2px_12px_rgba(0,0,0,0.7)] lg:[text-shadow:none]">

            <div>
              <HeroBadge>24/7 Emergency Mobile Tyre Service</HeroBadge>
            </div>
            <h1
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-white mb-3 sm:mb-4 leading-[1.1] font-black text-balance"
              style={{ fontFamily: 'var(--font-work-sans)', letterSpacing: '-0.02em' }}
            >
              24/7 Mobile Tyre Fitting Denshaw
            </h1>

            <p className="text-white/95 lg:text-white/80 text-base leading-relaxed mb-3">
              Need reliable mobile tyre fitting in Denshaw? We provide 24/7 mobile tyre fitting, emergency tyre replacement and puncture repair at your home, workplace or a safe roadside location. Whether you have a flat tyre, a sudden puncture or a damaged tyre that needs replacing, our mobile team can come to you.
            </p>
            <p className="text-white/95 lg:text-white/80 text-base leading-relaxed mb-5 sm:mb-6">
              We cover Denshaw and surrounding Saddleworth areas, helping drivers arrange tyre assistance without travelling to a garage. From replacement tyres to puncture assessments, we&apos;ll check your requirements, explain the available options and provide an estimated arrival time when you call.
            </p>

            <HeroPostcodes slug="denshaw" />

            {/* Trust bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 mb-6">
              {[
                '24/7 Mobile Tyre Fitting',
                'Emergency Tyre Replacement',
                'Mobile Puncture Repair',
                'Home, Workplace and Roadside Service',
                'Coverage Across Denshaw and Surrounding OL3 Areas',
                'Premium, Mid-Range and Budget Tyre Options, Subject to Availability',
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
              <span className="text-white/80 lg:text-white/60 text-xs font-medium">Rated By Drivers Across Denshaw &amp; Greater Manchester</span>
            </a>

            {/* CTAs */}
            <HeroCtaButtons />

          </div>
        </section>

        <HeroQuoteSection area="Denshaw" />

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
            <ReviewsCarousel offset={122} />
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
                24/7 Mobile Tyre Fitting &amp; Emergency Tyre Repair In Denshaw
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto text-base">
                Mobile tyre fitting, emergency tyre replacement and puncture repair across Denshaw. We come to your home, workplace or roadside location 24/7 with fast response times and professional service.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {[
                {
                  img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Emergency%20Tyre%20Fitting%20one%20Stop-airanko-gsjvsGamoet8drKwCMHYr6LH5Ni6ZI.webp',
                  title: 'Mobile Tyre Fitting',
                  desc: 'Mobile tyre fitting at your home, workplace or roadside location anywhere in Denshaw. Fast response with premium and budget tyre options available.',
                  badge: 'FAST RESPONSE',
                  href: '/mobile-tyre-fitting',
                },
                {
                  img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Home%20Tyre%20Fitting%20One%20Stop-airanko-kPAsyn08SjxXwLwCVhxre5zM9jWBTs.webp',
                  title: 'Home Tyre Fitting',
                  desc: 'Same day tyre fitting at your home across Denshaw, without the hassle of visiting a garage.',
                  badge: 'AT YOUR DOOR',
                  href: '/home-tyre-fitting',
                },
                {
                  img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Puncture%20Repair%20One%20Stop-airanko-sfmhLvDbSYmhoMprTVOHCcIWEgJvHf.webp',
                  title: 'Emergency Puncture Repair',
                  desc: 'Professional mobile puncture repair across Denshaw, carried out on-site where safe and suitable.',
                  badge: 'CERTIFIED REPAIR',
                  href: '/puncture-repair-Greater-manchester',
                },
                {
                  img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/One%20Stop%20Jumpstart%20image-airanko-cXmOrXcdtaIBMNQOMCIOiPj1C290RG.webp',
                  title: 'Jump Start',
                  desc: 'Flat battery as well as a flat tyre? Our mobile jump start service gets you back on the road in minutes, available 24/7 across Denshaw.',
                  badge: '24/7 SERVICE',
                  href: '/jump-start',
                },
                {
                  img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Tyre%20pressure%20monitor-airanko-sjz7PL2Pv4N9jlPWtz5Wa1q8XO0FgP.webp',
                  title: 'TPMS Reset',
                  desc: 'Tyre pressure monitoring system reset and sensor checks across Denshaw after every fitting or repair.',
                  badge: 'ALL VEHICLES',
                  href: '/tpms-reset',
                },
                {
                  img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Locking%20nut%20removal-airanko%20%281%29-ONBmqaZHMozU0jjrxbPe5J7C4zRQkS.webp',
                  title: 'Locking Nut Removal',
                  desc: 'Specialist, damage-free locking wheel nut removal across Denshaw using professional tools.',
                  badge: 'DAMAGE FREE',
                  href: '/locking-nut-removal',
                },
                {
                  img: '/images/professional-mobile-tyre-fitting.webp',
                  title: 'Roadside Assistance',
                  desc: 'Emergency roadside support for tyre and vehicle problems across Denshaw, wherever you get stranded.',
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
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <span className="text-[#b70011] font-bold uppercase tracking-widest text-sm mb-3 block">
                What You Can Expect
              </span>
              <h2
                className="text-2xl sm:text-4xl lg:text-5xl text-[#0f172a] mb-5 sm:mb-8 leading-tight font-bold"
                style={{ fontFamily: 'var(--font-work-sans)' }}
              >
                Professional Mobile Tyre Fitting in Denshaw
              </h2>
              <p className="text-slate-600 mb-4 sm:mb-6 leading-relaxed text-base sm:text-lg">
                A flat or damaged tyre can be particularly inconvenient in a rural area, where the nearest garage may not be easy to reach. Our mobile tyre fitting service brings the necessary equipment and suitable replacement tyres directly to your location, provided there is safe access to carry out the work.
              </p>
              <p className="text-slate-600 mb-4 sm:mb-6 leading-relaxed text-base sm:text-lg">
                One Stop Tyres 247 helps drivers in Denshaw with tyre replacement, puncture assessments and emergency tyre fitting. Whether you&apos;re at home, at work or dealing with a tyre problem while travelling, contact our team to check the available service for your vehicle and location.
              </p>
              <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
                Our aim is to make tyre assistance straightforward, with clear pricing and an estimated arrival time before the work begins.
              </p>
            </div>
          </div>
        </section>

        {/* ── 5. OUR MOBILE TYRE SERVICES ───────────────────── */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 bg-slate-50">
          <div className="max-w-6xl mx-auto">
            <h2
              className="text-2xl sm:text-[32px] font-bold text-slate-900 mb-10 sm:mb-12 leading-tight text-center"
              style={{ fontFamily: 'var(--font-work-sans)', letterSpacing: '-0.01em' }}
            >
              Our Mobile Tyre Services
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: 'bolt', title: 'Mobile Tyre Fitting', desc: 'Have replacement tyres fitted at home, work or another suitable location in Denshaw.' },
                { icon: 'engineering', title: 'Emergency Tyre Replacement', desc: 'Replace damaged or unsafe tyres with suitable alternatives, subject to vehicle requirements and stock availability.' },
                { icon: 'sell', title: 'Mobile Puncture Repair', desc: 'We inspect punctured tyres and carry out repairs where the damage meets the applicable safety requirements.' },
                { icon: 'home_repair_service', title: 'Home Tyre Fitting', desc: 'Arrange tyre replacement at home without the need to visit a garage.' },
                { icon: 'bolt', title: 'Jump-Start Assistance', desc: 'If you also have a flat battery, contact us to check availability for jump-start assistance.' },
                { icon: 'tire_repair', title: 'TPMS Checks and Reset', desc: 'Tyre pressure monitoring system checks or resets may be available where applicable following tyre fitting or repair.' },
                { icon: 'build', title: 'Locking Wheel Nut Removal', desc: 'Ask about assistance with lost or seized locking wheel nuts using specialist tools.' },
              ].map((item) => (
                <div key={item.title} className="bg-white rounded-2xl shadow-sm p-6 border-l-4 border-[#b70011]">
                  <div className="w-12 h-12 bg-[#b70011]/10 rounded-lg flex items-center justify-center mb-4">
                    <span aria-hidden="true" data-nosnippet className="material-symbols-outlined text-[#b70011]">{item.icon}</span>
                  </div>
                  <h3 className="font-bold text-[#0f172a] text-lg mb-2">{item.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 6. WHY DENSHAW DRIVERS CHOOSE US ──────────────── */}
        <WhyChooseGrid
          heading="Why Choose Our Mobile Tyre Fitting Service?"
          intro="When you need a tyre repaired or replaced, you want a convenient service with clear communication and pricing. Our mobile team helps drivers in Denshaw arrange practical tyre assistance based on their vehicle, tyre condition and location."
          items={[
            { icon: 'bolt', title: '24/7 Emergency Availability', desc: 'Tyre problems can happen at any time. Contact us day or night to check availability for emergency tyre fitting and replacement in Denshaw.' },
            { icon: 'home_repair_service', title: 'Convenient On-Site Service', desc: 'Where access and working conditions allow, our technicians can attend your home, workplace or a suitable roadside location.' },
            { icon: 'sell', title: 'Clear, Upfront Pricing', desc: "Tell us your vehicle details, tyre size and location. We'll discuss the available options and confirm the price before work begins." },
            { icon: 'tire_repair', title: 'Tyre Options for Different Budgets', desc: 'Premium, mid-range and budget tyre options may be available depending on the required size, specification and current stock.' },
            { icon: 'build', title: 'Professional Tyre Assessment', desc: 'We inspect damaged tyres to determine whether repair is appropriate. If the damage makes a tyre unsafe to repair, replacement may be recommended.' },
            { icon: 'engineering', title: 'Coverage for Rural Locations', desc: 'Denshaw and its surrounding roads can involve rural routes and changing travel conditions. Contact us with your exact location so we can confirm service availability and provide a realistic estimated arrival time.' },
          ]}
        />

        {/* ── 7. HOW IT WORKS ───────────────────────────────── */}
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
                How Mobile Tyre Fitting in Denshaw Works
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-8 sm:gap-4 lg:gap-6">
              {[
                { title: 'Contact Our Team', desc: 'Call 07759 708 646 and explain whether you need a replacement tyre, puncture assessment or another tyre-related service.' },
                { title: 'Share Your Location and Vehicle Details', desc: 'Tell us where you are in Denshaw and provide your vehicle registration or tyre size, if known. You can also share your location through WhatsApp to help the technician identify your position.' },
                { title: 'Confirm the Price and Estimated Arrival', desc: "We'll check the available tyre options, explain the service and confirm the price and estimated arrival time before dispatch." },
                { title: 'Get Your Tyre Fitted', desc: 'Our technician will attend the agreed location and complete the work where it is safe and suitable to do so. Tyre pressure and TPMS checks can be carried out where applicable.' },
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

        {/* ── 8. MOBILE TYRE REPLACEMENT ────────────────────── */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 bg-white">
          <div className="max-w-3xl mx-auto text-center lg:text-left">
            <h2
              className="text-2xl sm:text-[32px] font-bold text-slate-900 mb-4 leading-tight"
              style={{ fontFamily: 'var(--font-work-sans)', letterSpacing: '-0.01em' }}
            >
              Mobile Tyre Replacement Across Denshaw
            </h2>
            <p className="text-slate-600 mb-4 leading-relaxed text-base sm:text-lg">
              If your tyre has a serious puncture, sidewall damage or excessive wear, replacement may be necessary. Our mobile tyre replacement service helps drivers in Denshaw arrange a suitable replacement without driving to a garage on an unsafe tyre.
            </p>
            <p className="text-slate-600 mb-4 leading-relaxed text-base sm:text-lg">
              We cover Denshaw village and surrounding roads, including routes connecting the area with Delph and the M62 Junction 22 area. Rural access, traffic and weather can affect how quickly a technician reaches you.
            </p>
            <p className="text-slate-600 mb-4 leading-relaxed text-base sm:text-lg">
              Before arranging a replacement, provide your vehicle registration or tyre size so we can check suitable options. Tyre availability depends on the required specification and current stock.
            </p>
            <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
              If the tyre appears repairable, our technician will assess the damage first. Repairs are only suitable when the tyre meets the relevant safety requirements; otherwise, replacement may be the safer option.
            </p>
          </div>
        </section>

        {/* ── 9. EMERGENCY MOBILE TYRE FITTING ──────────────── */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 bg-slate-50">
          <div className="max-w-3xl mx-auto text-center lg:text-left">
            <h2
              className="text-2xl sm:text-[32px] font-bold text-slate-900 mb-4 leading-tight"
              style={{ fontFamily: 'var(--font-work-sans)', letterSpacing: '-0.01em' }}
            >
              Emergency Mobile Tyre Fitting and Replacement in Denshaw
            </h2>
            <p className="text-slate-600 mb-4 leading-relaxed text-base sm:text-lg">
              A puncture or blowout can leave you stranded, particularly when travelling along rural roads near Denshaw or connecting routes towards the M62. Our 24/7 emergency tyre service helps drivers arrange assistance when a tyre becomes damaged or unsafe.
            </p>
            <p className="text-slate-600 mb-4 leading-relaxed text-base sm:text-lg">
              We can attend suitable locations in Denshaw and the surrounding OL3 area, subject to technician availability, road conditions and safe access. Because Denshaw includes rural and hillside routes, arrival times can vary. Call us for an estimated arrival time based on your exact location.
            </p>
            <p className="text-slate-600 mb-4 leading-relaxed text-base sm:text-lg">
              If you experience a tyre problem on a busy road, do not attempt to change it beside moving traffic. Follow the appropriate breakdown procedures and move to a safe location if possible.
            </p>
            <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
              Call 07759 708 646 to discuss your situation and check the available assistance.
            </p>
          </div>
        </section>

        {/* ── 10. BRAND CAROUSEL ────────────────────────────── */}
        <BrandCarousel />

        {/* ── NEARBY AREAS ───────────────────────────────────── */}
        <NearbyAreas currentSlug="denshaw" />

        {/* ── SERVICE AREAS MAP ──────────────────────────────── */}
        <ServiceAreasMap />

        {/* ── LOCAL AREA DETAILS ─────────────────────────────── */}
        <LocalAreaInfo currentSlug="denshaw" />

        {/* ── 11. FAQ ───────────────────────────────────────── */}
        <CityFaq
          canonical="https://onestoptyres247.co.uk/mobile-tyre-fitting-denshaw"
          city="Denshaw"
          faqs={[
            {
              q: 'Do you provide mobile tyre fitting in Denshaw?',
              a: 'Yes. We provide mobile tyre fitting in Denshaw, with service available at your home, workplace or a suitable roadside location, subject to access and availability.',
            },
            {
              q: 'Are you available 24/7 in Denshaw?',
              a: 'Our service operates 24/7 for emergency tyre assistance. Contact us to confirm technician availability and the estimated arrival time for your location.',
            },
            {
              q: 'How quickly can you reach Denshaw?',
              a: 'We estimate a response time of around 30-40 minutes for this rural area. This is an estimate, not a guarantee. Traffic, weather, road conditions, technician availability and your exact location can affect arrival time.',
            },
            {
              q: 'Do you cover rural and hillside roads around Denshaw?',
              a: 'Yes. We cover Denshaw and surrounding areas where a technician can reach the vehicle safely. Contact us with your location to confirm access and availability.',
            },
            {
              q: 'Can you help if I get a flat tyre near M62 Junction 22?',
              a: 'Contact us with your exact location and vehicle details. We can check whether a technician is available to assist. If you are on a motorway or another dangerous road, follow the relevant motorway safety and breakdown procedures rather than attempting a tyre change beside moving traffic.',
            },
            {
              q: 'Can you fit tyres at my home in Denshaw?',
              a: 'Yes. Home tyre fitting can be arranged where there is sufficient safe space and access for the technician to carry out the work.',
            },
            {
              q: 'Do you provide mobile tyre fitting at workplaces near Denshaw?',
              a: 'We can attend suitable workplace locations, subject to access, parking arrangements and technician availability. Contact us to confirm your requirements.',
            },
            {
              q: 'Can you replace a damaged tyre in Denshaw?',
              a: 'Yes. We provide mobile tyre replacement when a suitable tyre is available for your vehicle. Share your tyre size or vehicle registration so we can check the options.',
            },
            {
              q: 'Can you repair a punctured tyre instead of replacing it?',
              a: 'In some cases. Our technician will inspect the damage and determine whether the tyre meets the relevant safety requirements, including applicable BS AU 159 guidance. If it is unsafe to repair, replacement may be recommended.',
            },
            {
              q: 'What types of tyres can you supply?',
              a: 'Premium, mid-range and budget options may be available. The choices depend on your vehicle, tyre size, specification and current stock.',
            },
            {
              q: 'How much does mobile tyre fitting in Denshaw cost?',
              a: 'The price depends on the tyre required, the work involved, your location and the time of service. Contact us for a quote and confirm the price before work begins.',
            },
            {
              q: 'Can you provide emergency puncture repair at the roadside?',
              a: 'Yes, where the tyre is suitable for repair and the location is safe. We cannot carry out tyre work in an unsafe position beside moving traffic.',
            },
            {
              q: 'Can you help if my car battery is flat as well?',
              a: 'Jump-start assistance may be available. Contact us with your location and vehicle details to confirm availability.',
            },
            {
              q: 'What information should I provide when booking?',
              a: 'Provide your location, vehicle make and model, tyre size if known, and a brief description of the problem. A location pin or photo can also help us understand your situation.',
            },
            {
              q: 'How do I book emergency tyre assistance in Denshaw?',
              a: 'Call 07759 708 646 and explain the problem. Share your location and vehicle details so our team can confirm the available service, quote and estimated arrival time.',
            },
          ]}
        />

        {/* ── 12. FINAL CTA ─────────────────────────────────── */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-[#f0edec] relative">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-h2 text-xl sm:text-2xl lg:text-h2 mb-4 sm:mb-5 leading-tight">Need Mobile Tyre Fitting in Denshaw?</h2>
            <p className="font-body-lg text-base lg:text-lg text-[#5c403c] leading-relaxed mb-6 sm:mb-8">If you have a flat, punctured or damaged tyre, contact our team to discuss mobile tyre fitting in Denshaw. We can check the available repair or replacement options and arrange a visit where service is available. One Stop Tyres 247 provides mobile tyre fitting, emergency tyre replacement and puncture assessment across Denshaw and surrounding areas, subject to availability and safe access. Call 07759 708 646 to request a quote and estimated arrival time.</p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center mt-4 sm:mt-6">
              <a
                className="cta-btn cta-call flex items-center justify-center gap-2 sm:gap-3 bg-[#dc2626] hover:bg-[#b70011] text-white px-6 sm:px-10 py-4 sm:py-5 rounded-lg font-call-to-action text-base transition-all shadow-xl"
                href="tel:+447759708646"
              >
                <span aria-hidden="true" data-nosnippet className="material-symbols-outlined text-xl sm:text-2xl">phone_in_talk</span>
                07759 708 646
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
