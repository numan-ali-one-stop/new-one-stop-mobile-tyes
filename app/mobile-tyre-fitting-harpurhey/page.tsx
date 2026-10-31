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
import HeroCtaButtons from '@/components/HeroCtaButtons'
import HeroQuoteSection from '@/components/HeroQuoteSection'
import HeroPostcodes from '@/components/HeroPostcodes'
import HeroBadge from '@/components/HeroBadge'

const _serviceSchema = pageServiceSchema({
  slug: 'mobile-tyre-fitting-harpurhey',
  alternateName: '24/7 Mobile Tyre Fitting Harpurhey',
  areaServed: 'Harpurhey',
  description:
    'Flat tyre or puncture in Harpurhey (M9)? 24/7 mobile tyre fitting and puncture repair on Rochdale Road, near the market and Moston Lane. Call 07759 708 646.',
})

const _organizationSchema = pageOrganizationSchema('mobile-tyre-fitting-harpurhey')
const _websiteSchema = pageWebsiteSchema('mobile-tyre-fitting-harpurhey')
const _automotiveBusinessSchema = automotiveBusinessSchema({
  slug: 'mobile-tyre-fitting-harpurhey',
  image: 'https://onestoptyres247.co.uk/images/tyres-fitting-anywhere.webp',
  addressLocality: 'Harpurhey',
})

export const metadata = buildMetadata({
  title: 'Mobile Tyre Fitting Harpurhey | 24/7 Emergency & Puncture Repair',
  description:
    'Flat tyre or puncture in Harpurhey (M9)? 24/7 mobile tyre fitting and puncture repair on Rochdale Road, near the market and Moston Lane. Call 07759 708 646.',
  path: '/mobile-tyre-fitting-harpurhey',
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

export default function HarpurheyPage() {
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
              24/7 Mobile Tyre Fitting &amp; Puncture Repair in Harpurhey
            </h1>

            <p className="text-white/95 lg:text-white/80 text-base leading-relaxed mb-5 sm:mb-6">
              Flat tyre near the market on Rochdale Road? We repair punctures and fit replacement tyres 24/7 across Harpurhey and M9.
            </p>

            <HeroPostcodes slug="harpurhey" />

            {/* Trust bullets — hidden for now
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 mb-6">
              {[
                'Mobile Puncture Repair',
                '24/7 Mobile Tyre Fitting',
                'Emergency Tyre Replacement',
                'Home, Work & Roadside Service',
                'M9: Rochdale Road &amp; Harpurhey Market',
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
              <span className="text-white/80 lg:text-white/60 text-xs font-medium">Rated By Drivers Across Harpurhey &amp; Greater Manchester</span>
            </a>

            {/* CTAs */}
            <HeroCtaButtons />

          </div>
        </section>

        <HeroQuoteSection area="Harpurhey" />

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
            <ReviewsCarousel offset={110} />
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
                24/7 Mobile Tyre Fitting &amp; Emergency Tyre Repair In Harpurhey
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto text-base">
                Mobile tyre fitting, emergency tyre replacement and puncture repair across Harpurhey. We come to your home, workplace or roadside location 24/7 with fast response times and professional service.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {[
                {
                  img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Emergency%20Tyre%20Fitting%20one%20Stop-airanko-gsjvsGamoet8drKwCMHYr6LH5Ni6ZI.webp',
                  title: 'Mobile Tyre Fitting',
                  desc: 'Mobile tyre fitting at your home, workplace or roadside location anywhere in Harpurhey. Fast response with premium and budget tyre options available.',
                  badge: 'FAST RESPONSE',
                  href: '/mobile-tyre-fitting',
                },
                {
                  img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Home%20Tyre%20Fitting%20One%20Stop-airanko-kPAsyn08SjxXwLwCVhxre5zM9jWBTs.webp',
                  title: 'Home Tyre Fitting',
                  desc: 'Same day tyre fitting at your home across Harpurhey, without the hassle of visiting a garage.',
                  badge: 'AT YOUR DOOR',
                  href: '/home-tyre-fitting',
                },
                {
                  img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Puncture%20Repair%20One%20Stop-airanko-sfmhLvDbSYmhoMprTVOHCcIWEgJvHf.webp',
                  title: 'Emergency Puncture Repair',
                  desc: 'Professional mobile puncture repair across Harpurhey, carried out on-site where safe and suitable.',
                  badge: 'CERTIFIED REPAIR',
                  href: '/puncture-repair-Greater-manchester',
                },
                {
                  img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/One%20Stop%20Jumpstart%20image-airanko-cXmOrXcdtaIBMNQOMCIOiPj1C290RG.webp',
                  title: 'Jump Start',
                  desc: 'Flat battery as well as a flat tyre? Our mobile jump start service gets you back on the road in minutes, available 24/7 across Harpurhey.',
                  badge: '24/7 SERVICE',
                  href: '/jump-start',
                },
                {
                  img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Tyre%20pressure%20monitor-airanko-sjz7PL2Pv4N9jlPWtz5Wa1q8XO0FgP.webp',
                  title: 'TPMS Reset',
                  desc: 'Tyre pressure monitoring system reset and sensor checks across Harpurhey after every fitting or repair.',
                  badge: 'ALL VEHICLES',
                  href: '/tpms-reset',
                },
                {
                  img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Locking%20nut%20removal-airanko%20%281%29-ONBmqaZHMozU0jjrxbPe5J7C4zRQkS.webp',
                  title: 'Locking Nut Removal',
                  desc: 'Specialist, damage-free locking wheel nut removal across Harpurhey using professional tools.',
                  badge: 'DAMAGE FREE',
                  href: '/locking-nut-removal',
                },
                {
                  img: '/images/professional-mobile-tyre-fitting.webp',
                  title: 'Roadside Assistance',
                  desc: 'Emergency roadside support for tyre and vehicle problems across Harpurhey, wherever you get stranded.',
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
            <div className="w-full lg:w-1/2">
              <span className="text-[#b70011] font-bold uppercase tracking-widest text-sm mb-3 block">
                What You Can Expect
              </span>
              <h2
                className="text-2xl sm:text-4xl lg:text-5xl text-[#0f172a] mb-5 sm:mb-8 leading-tight font-bold"
                style={{ fontFamily: 'var(--font-work-sans)' }}
              >
                Your Mobile Tyre Fitter in Harpurhey
              </h2>
              <p className="text-slate-600 mb-6 sm:mb-8 leading-relaxed text-base sm:text-lg">
                When you need mobile tyre fitting in Harpurhey, One Stop Tyres 247 brings professional tyre fitting directly to your location. Whether you have a flat tyre at home, a damaged tyre at work or an unexpected roadside emergency, your mobile tyre fitter in Harpurhey can help.
                We provide tyre fitting across the M9 postcode, including Rochdale Road and Moston Lane, plus replacement and puncture repair in the surrounding areas. We carry budget, mid-range and premium mobile tyres in Harpurhey, fitted wherever your car is parked.
              </p>
              <span className="text-[#b70011] font-bold uppercase tracking-widest text-sm mb-4 block">
                Our Key Services
              </span>
              <ul className="space-y-4 sm:space-y-5">
                <FeatureItem
                  icon="tire_repair"
                  title="Mobile Tyre Fitting Harpurhey"
                  desc="Professional tyre fitting at your home, workplace or a suitable roadside location without visiting a garage."
                />
                <FeatureItem
                  icon="bolt"
                  title="Mobile Tyre Replacement Harpurhey"
                  desc="Replacement tyres for worn, damaged or unsafe tyres, fitted at your location."
                />
                <FeatureItem
                  icon="build"
                  title="Mobile Puncture Repair Harpurhey"
                  desc="On-site puncture repair where the tyre is suitable and the damage can be safely repaired."
                />
                <FeatureItem
                  icon="schedule"
                  title="24/7 Emergency Tyre Assistance"
                  desc="Day and night assistance for unexpected punctures, tyre damage and emergency replacement."
                />
              </ul>
            </div>
          </div>
        </section>

        {/* ── 5. WHY CHOOSE US ──────────────────────────────── */}
        <WhyChooseGrid
          heading="Why Choose Our Mobile Tyre Fitting Service?"
          intro=""
          items={[
            {
              icon: 'engineering',
              title: 'Professional Mobile Tyre Fitters',
              desc: 'Our technicians bring specialist equipment to fit and replace tyres at your location.',
            },
            {
              icon: 'home_repair_service',
              title: 'Convenient Home and Workplace Service',
              desc: 'Arrange tyre fitting at home or work without travelling to a garage or interrupting your day.',
            },
            {
              icon: 'schedule',
              title: '24/7 Emergency Assistance',
              desc: 'Get assistance with unexpected tyre problems at any time, including evenings, weekends and bank holidays.',
            },
            {
              icon: 'tire_repair',
              title: 'Suitable Replacement Tyres',
              desc: 'We offer budget, mid-range and premium tyre options, subject to your vehicle requirements and stock availability.',
            },
            {
              icon: 'build',
              title: 'Repair Where Possible',
              desc: 'We inspect damaged tyres and carry out puncture repairs where safe and suitable, helping you avoid unnecessary replacement.',
            },
            {
              icon: 'pin_drop',
              title: 'Local Harpurhey Coverage',
              desc: 'Our mobile service covers Harpurhey and nearby areas, including Rochdale Road, Moston, Collyhurst and Blackley.',
            },
          ]}
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
                How Mobile Tyre Fitting in Harpurhey Works
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-5 gap-8 sm:gap-4 lg:gap-6 relative">
              {[
                {
                  n: '1',
                  title: 'Contact Us',
                  desc: 'Call with your location, vehicle registration, tyre size if known and the service you need.',
                },
                {
                  n: '2',
                  title: 'Get a Quote',
                  desc: 'We check suitable tyre options and confirm pricing and availability before arranging your fitting.',
                },
                {
                  n: '3',
                  title: 'We Come to You',
                  desc: 'A mobile tyre fitter travels to your home, workplace or a suitable roadside location in Harpurhey.',
                },
                {
                  n: '4',
                  title: 'Tyre Fitting or Replacement',
                  desc: 'We assess the tyre, carry out a repair where appropriate or professionally fit your replacement tyre.',
                },
                {
                  n: '5',
                  title: 'Final Safety Checks',
                  desc: 'We complete the necessary fitting, balancing and tyre-pressure checks before finishing the job.',
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
                  {idx < 4 && (
                    <span className="hidden lg:block absolute top-7 -right-3 text-[#FF4444] material-symbols-outlined text-3xl">
                      trending_flat
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 7. MOBILE TYRE REPLACEMENT ACROSS HARPURHEY ───────── */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 bg-white">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-[#b70011] font-bold uppercase tracking-widest text-sm mb-3 block">
              Mobile Tyre Replacement
            </span>
            <h2
              className="text-2xl sm:text-4xl text-[#0f172a] mb-5 sm:mb-8 leading-tight font-bold"
              style={{ fontFamily: 'var(--font-work-sans)' }}
            >
              Mobile Tyre Replacement Across Harpurhey
            </h2>
            <p className="text-slate-600 mb-4 leading-relaxed text-base sm:text-lg">
              If your tyre is worn, damaged or unsuitable for repair, our <strong>mobile tyre replacement Harpurhey</strong> service allows you to have a replacement tyre fitted without visiting a garage.
            </p>
            <p className="text-slate-600 mb-4 leading-relaxed text-base sm:text-lg">
              We supply and fit suitable tyres for cars, SUVs and vans, with options for different vehicle requirements and budgets.
            </p>
            <p className="text-slate-600 mb-4 leading-relaxed text-base sm:text-lg">
              Whether you need a single tyre replaced at home, new tyres fitted at work or assistance with a damaged tyre, our mobile technicians bring the necessary equipment directly to you.
            </p>
            <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
              We provide tyre replacement in Harpurhey and nearby areas, including Moston, Collyhurst, Blackley and Cheetham Hill.
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
              Emergency Mobile Tyre Fitting and Replacement in Harpurhey
            </h2>
            <p className="text-slate-600 mb-4 leading-relaxed text-base sm:text-lg">
              A flat tyre or blowout can leave you stranded at any time. Our <strong>emergency mobile tyre fitting in Harpurhey</strong> service is available 24/7 to help you get back on the road.
            </p>
            <p className="text-slate-600 mb-4 leading-relaxed text-base sm:text-lg">
              We attend suitable locations around Harpurhey, including residential streets, workplaces and safe roadside areas near Rochdale Road and routes towards Moston and Manchester city centre.
            </p>
            <p className="text-slate-600 mb-4 leading-relaxed text-base sm:text-lg">
              Depending on the condition of your tyre, our technicians can carry out a safe puncture repair or provide an emergency tyre replacement.
            </p>
            <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
              For urgent assistance, contact us with your exact location and vehicle details so we can confirm availability and an estimated arrival time.
            </p>
            <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
              We also cover the neighbouring areas: <a href="/mobile-tyre-fitting-blackley" className="text-[#b70011] font-semibold hover:underline">Blackley</a> to the north, <a href="/mobile-tyre-fitting-moston" className="text-[#b70011] font-semibold hover:underline">Moston</a> to the east, <a href="/mobile-tyre-fitting-newton-heath" className="text-[#b70011] font-semibold hover:underline">Newton Heath</a> to the south-east,{' '}
              and <a href="/mobile-tyre-fitting-collyhurst" className="text-[#b70011] font-semibold hover:underline">Collyhurst</a> and <a href="/mobile-tyre-fitting-cheetham-hill" className="text-[#b70011] font-semibold hover:underline">Cheetham Hill</a> to the south-west.
            </p>
          </div>
        </section>

        {/* ── 9. BRAND CAROUSEL ─────────────────────────────── */}
        <BrandCarousel />

        {/* ── SERVICE AREAS MAP ──────────────────────────────── */}
        <ServiceAreasMap />

        {/* ── LOCAL AREA DETAILS ─────────────────────────────── */}
        <LocalAreaInfo currentSlug="harpurhey" />

        {/* ── 10. FAQ ───────────────────────────────────────── */}
        <CityFaq
          canonical="https://onestoptyres247.co.uk/mobile-tyre-fitting-harpurhey"
          city="Harpurhey"
          faqs={[
            {
              q: 'I have a flat on Rochdale Road. What should I do?',
              a: 'Rochdale Road (A664) is busy, so turn into a side street if the tyre allows, then send us a map pin.',
            },
            {
              q: 'Can you help if I am parked at Harpurhey Market?',
              a: 'Yes. Tell us which part of the market car park you are in, and we will fit the tyre while you shop.',
            },
            {
              q: 'Can you come to Queens Park?',
              a: 'Yes. Tell us which entrance you parked near, and we can wait until you are back at the car.',
            },
            {
              q: 'My street has no driveway. Can you still fit the tyre?',
              a: 'Yes. Most Harpurhey streets have on-street parking, and we fit mobile tyres in Harpurhey safely at the kerb outside your house.',
            },
            {
              q: 'Do you cover all of Harpurhey (M9)?',
              a: 'Yes. We cover the whole of Harpurhey, from Rochdale Road and the market to Queens Park and the streets towards Moston Lane.',
            },
            {
              q: 'Do you also cover Blackley and Moston?',
              a: 'Yes. We cover the neighbouring areas too, including Blackley, Moston, Collyhurst and Cheetham Hill.',
            },
            {
              q: 'Do you fit tyres at night in Harpurhey?',
              a: 'Yes. We work 24 hours a day, which helps if you find a flat late at night or before an early start.',
            },
            {
              q: 'How quickly can you reach me in Harpurhey?',
              a: 'It depends on traffic on Rochdale Road and Moston Lane. We typically reach you within 20 to 30 minutes and give you an estimate when you call.',
            },
            {
              q: 'Do you offer emergency tyre fitting in Harpurhey?',
              a: 'Yes. Our emergency tyre fitting runs 24 hours a day across Harpurhey, from Rochdale Road and Harpurhey Market to Queens Park and the streets towards Moston Lane. We repair the puncture where it is safe to do so, or fit a replacement tyre on the spot, subject to availability.',
            },
            {
              q: 'Can you repair my puncture instead of replacing the tyre?',
              a: 'Often, yes. If the damage is in the central tread area and the tyre has not been driven on flat, we can repair it on the spot.',
            },
            {
              q: 'How do I book a mobile tyre fitter in Harpurhey?',
              a: 'Call or WhatsApp 07759 708 646, or use the instant quote form on this page. Send your registration or tyre size and your M9 postcode, and we will send the nearest available mobile tyre fitter to you.',
            },
          ]}
        />

        {/* ── 11. FINAL CTA ─────────────────────────────────── */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-[#f0edec] relative">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-h2 text-xl sm:text-2xl lg:text-h2 mb-4 sm:mb-5 leading-tight">Need Mobile Tyre Fitting in Harpurhey?</h2>
            <p className="font-body-lg text-base lg:text-lg text-[#5c403c] leading-relaxed mb-6 sm:mb-8">Whether you need a tyre fitted at home, a replacement at work or emergency assistance at the roadside, One Stop Tyres 247 can come to you. Contact us today for 24/7 mobile tyre fitting in Harpurhey, tyre replacement and puncture repair. Call now for a quote and availability.</p>
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
