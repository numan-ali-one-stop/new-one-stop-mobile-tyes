import Image from 'next/image'
import Link from 'next/link'
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
import HeroTrustBadges from '@/components/HeroTrustBadges'
import HeroQuoteSection from '@/components/HeroQuoteSection'
import HeroPostcodes from '@/components/HeroPostcodes'
import HeroBadge from '@/components/HeroBadge'

const _serviceSchema = pageServiceSchema({
  slug: 'mobile-tyre-fitting-oldham',
  alternateName: '24/7 Mobile Tyre Fitting Oldham',
  areaServed: 'Oldham',
  description:
    'Need mobile tyre fitting in Oldham? Get 24/7 tyre fitting and puncture repair across Oldham. We cover Oldham and the Surrounding OL1-OL9 areas.',
})

const _organizationSchema = pageOrganizationSchema('mobile-tyre-fitting-oldham')
const _websiteSchema = pageWebsiteSchema('mobile-tyre-fitting-oldham')
const _automotiveBusinessSchema = automotiveBusinessSchema({
  slug: 'mobile-tyre-fitting-oldham',
  image: 'https://onestoptyres247.co.uk/images/tyres-fitting-anywhere.webp',
  addressLocality: 'Oldham',
})

export const metadata = buildMetadata({
  title: 'Mobile Tyre Fitting Oldham | 24/7 Tyre Replacement',
  description:
    'Need mobile tyre fitting in Oldham? Get 24/7 tyre fitting and puncture repair across Oldham. We cover Oldham and the Surrounding OL1-OL9 areas.',
  path: '/mobile-tyre-fitting-oldham',
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

export default function OldhamPage() {
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
              24/7 Mobile Tyre Fitting Oldham
            </h1>

            <p className="text-white/95 lg:text-white/80 text-base leading-relaxed mb-5 sm:mb-6">
              Need mobile tyre fitting in Oldham? We provide 24/7 emergency tyre replacement and mobile puncture repair at your home, workplace or a safe roadside location. Get a clear quote and an estimated arrival time from our team.
            </p>

            <HeroPostcodes slug="oldham" />

            {/* Trust bullets — hidden for now
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 mb-6">
              {[
                'Mobile Puncture Repair',
                '24/7 Mobile Tyre Fitting',
                'Emergency Tyre Replacement',
                'Home, Work & Roadside Service',
                'Oldham & Surrounding Areas',
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

            {/* CTAs */}
            <HeroCtaButtons />
            <HeroTrustBadges className="mt-5 sm:mt-6" />

          </div>
        </section>

        <HeroQuoteSection area="Oldham" />

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
            <ReviewsCarousel offset={6} />
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
                24/7 Mobile Tyre Fitting &amp; Emergency Tyre Repair In Oldham
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto text-base">
                Mobile tyre fitting, emergency tyre replacement and puncture repair across Oldham. We come to your home, workplace or roadside location 24/7 with fast response times and professional service.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {[
                {
                  img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Emergency%20Tyre%20Fitting%20one%20Stop-airanko-gsjvsGamoet8drKwCMHYr6LH5Ni6ZI.webp',
                  title: 'Mobile Tyre Fitting',
                  desc: "Mobile tyre fitting at your home, workplace or roadside anywhere in Oldham. We carry a full range of budget and premium tyres on every van — no garage visit needed.",
                  badge: 'FAST RESPONSE',
                  href: '/mobile-tyre-fitting',
                },
                {
                  img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Home%20Tyre%20Fitting%20One%20Stop-airanko-kPAsyn08SjxXwLwCVhxre5zM9jWBTs.webp',
                  title: 'Home Tyre Fitting',
                  desc: "Need new tyres but can't get to a garage? We come to your Oldham address at a time that suits you and have the job done on your driveway in under an hour.",
                  badge: 'AT YOUR DOOR',
                  href: '/home-tyre-fitting',
                },
                {
                  img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Puncture%20Repair%20One%20Stop-airanko-sfmhLvDbSYmhoMprTVOHCcIWEgJvHf.webp',
                  title: 'Mobile Tyre Repair',
                  desc: 'Where the damage qualifies under British Standard BS AU 159, we carry out a professional plug-and-patch repair on-site — saving you the cost of a full replacement.',
                  badge: 'CERTIFIED REPAIR',
                  href: '/puncture-repair-Greater-manchester',
                },
                {
                  img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/One%20Stop%20Jumpstart%20image-airanko-cXmOrXcdtaIBMNQOMCIOiPj1C290RG.webp',
                  title: 'Jump Start',
                  desc: 'Dead battery on top of a flat tyre? We handle both. Our technicians carry jump-start equipment on every callout across Oldham, available around the clock.',
                  badge: '24/7 SERVICE',
                  href: '/jump-start',
                },
                {
                  img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Tyre%20pressure%20monitor-airanko-sjz7PL2Pv4N9jlPWtz5Wa1q8XO0FgP.webp',
                  title: 'TPMS Reset',
                  desc: 'After every fitting or repair, we reset your Tyre Pressure Monitoring System as standard. We also carry replacement sensors for most makes and models.',
                  badge: 'ALL VEHICLES',
                  href: '/tpms-reset',
                },
                {
                  img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Locking%20nut%20removal-airanko%20%281%29-ONBmqaZHMozU0jjrxbPe5J7C4zRQkS.webp',
                  title: 'Locking Nut Removal',
                  desc: 'Lost your locking wheel nut key? Our specialists use professional-grade tools to remove locking nuts without causing any damage to your alloys or wheel studs.',
                  badge: 'DAMAGE FREE',
                  href: '/locking-nut-removal',
                },
                {
                  img: '/images/professional-mobile-tyre-fitting.webp',
                  title: 'Roadside Assistance',
                  desc: 'Emergency roadside support for tyre and vehicle problems across Oldham, wherever you get stranded.',
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

        {/* ── 4. WHY CHOOSE US (image + features) ──────────── */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
            <div className="w-full lg:w-1/2 relative pb-8 sm:pb-10">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="relative z-10 rounded-2xl sm:rounded-3xl shadow-2xl border-4 sm:border-8 border-slate-50 w-full object-cover"
                src="/images/tyre-fitting-at-home.webp"
                alt="Tyre fitting at home in Oldham"
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
                Professional Mobile Tyre Fitting in Oldham
              </h2>
              <p className="text-slate-600 mb-4 leading-relaxed text-base sm:text-lg">
                A damaged tyre can interrupt your day, whether you are commuting, travelling to work or parked outside your home. Our mobile tyre fitting service brings the necessary tyre assistance directly to your location.
              </p>
              <p className="text-slate-600 mb-6 sm:mb-8 leading-relaxed text-base sm:text-lg">
                <Link href="/" className="text-[#b70011] font-semibold hover:underline">One Stop Tyres 247</Link> provides mobile tyre fitting across Oldham, including residential streets, workplaces, car parks and suitable roadside locations. Instead of arranging transport to a tyre centre, you can contact our team and discuss having the work carried out where your vehicle is parked.
                Our technicians can inspect your tyre, identify whether it is suitable for repair and arrange a replacement where necessary. We also help customers who need new tyres fitted as part of planned vehicle maintenance.
              </p>
              <span className="text-[#b70011] font-bold uppercase tracking-widest text-sm mb-4 block">
                Mobile Tyre Services Available in Oldham
              </span>
              <ul className="space-y-4 sm:space-y-5 text-left">
                <FeatureItem
                  icon="tire_repair"
                  title="Mobile Tyre Fitting Oldham"
                  desc="Professional tyre fitting at your home, workplace or a suitable roadside location without visiting a tyre shop."
                />
                <FeatureItem
                  icon="bolt"
                  title="Mobile Tyre Replacement Oldham"
                  desc="Replacement tyres for worn, damaged or unsafe tyres, fitted directly at your location."
                />
                <FeatureItem
                  icon="build"
                  title="Mobile Puncture Repair Oldham"
                  desc="On-site puncture repair where the tyre is suitable and the damage can be safely repaired."
                />
                <FeatureItem
                  icon="schedule"
                  title="24/7 Emergency Tyre Assistance"
                  desc="Day and night assistance for unexpected punctures, tyre damage, flat tyres and emergency replacement."
                />
              </ul>
            </div>
          </div>
        </section>

        {/* ── 5. WHY CHOOSE US ──────────────────────────────── */}
        <WhyChooseGrid
          heading="Why Choose Our Mobile Tyre Fitting Service in Oldham?"
          intro="When choosing a mobile tyre fitter, you need more than someone who can bring a tyre to your location. You need clear communication, suitable tyre options and a service that fits your situation."
          items={[
            {
              icon: 'engineering',
              title: 'Professional Mobile Tyre Fitters',
              desc: 'Our technicians bring specialist equipment directly to your location, making tyre fitting more convenient than travelling to a traditional tyre shop.',
            },
            {
              icon: 'home_repair_service',
              title: 'Convenient Home and Workplace Service',
              desc: 'Arrange your tyre fitting at home or work without making a separate garage visit.',
            },
            {
              icon: 'schedule',
              title: '24/7 Emergency Assistance',
              desc: 'Get help with unexpected tyre problems at any time, including nights, weekends and bank holidays.',
            },
            {
              icon: 'tire_repair',
              title: 'Suitable Replacement Tyres',
              desc: 'We provide budget, mid-range and premium tyre options, depending on your vehicle requirements, tyre size and availability.',
            },
            {
              icon: 'build',
              title: 'On-Site Tyre Fitting',
              desc: 'Our on-site tyre fitting service allows suitable tyres to be fitted at your location, helping you get back on the road without travelling to a tyre centre.',
            },
            {
              icon: 'pin_drop',
              title: 'Local Oldham Coverage',
              desc: 'We cover Oldham and surrounding areas, including Chadderton, Failsworth, Royton, Shaw, Hollinwood, Lees and Saddleworth.',
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
                How Does Mobile Tyre Fitting in Oldham Work?
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-x-8 sm:gap-y-10 relative">
              {[
                {
                  n: '1',
                  title: 'Contact Our Team',
                  desc: 'Call or WhatsApp 07759 708 646. Explain whether you need a new tyre, have a puncture, are dealing with a flat tyre or require emergency assistance.',
                },
                {
                  n: '2',
                  title: 'Provide Your Vehicle and Location Details',
                  desc: 'Share your postcode or location pin, vehicle registration, make and model, and tyre size if known. A photograph of the tyre sidewall can help identify the correct specification.',
                },
                {
                  n: '3',
                  title: 'Receive Your Quote',
                  desc: 'Our team will check the available tyre options and explain the expected cost. We can also discuss the estimated arrival time and confirm whether the required service is available.',
                },
                {
                  n: '4',
                  title: 'Arrange Your Mobile Fitting',
                  desc: 'Once you confirm the quote, the team can arrange a visit to your home, workplace or another suitable location. The appointment depends on technician availability, tyre stock and access to the vehicle.',
                },
                {
                  n: '5',
                  title: 'Tyre Inspection and Fitting',
                  desc: 'The technician will assess the tyre and determine whether repair or replacement is appropriate. If a replacement is required, the suitable tyre can be fitted once availability and the work have been confirmed.',
                },
                {
                  n: '6',
                  title: 'Final Checks',
                  desc: "After fitting or repair, the technician completes the necessary checks, including tyre pressure checks. TPMS checks or resets can also be carried out where applicable.",
                },
              ].map((step) => (
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
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 7. MOBILE TYRE REPLACEMENT ACROSS OLDHAM ──────────── */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 bg-white">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-[#b70011] font-bold uppercase tracking-widest text-sm mb-3 block">
              Mobile Tyre Replacement
            </span>
            <h2
              className="text-2xl sm:text-4xl text-[#0f172a] mb-5 sm:mb-8 leading-tight font-bold"
              style={{ fontFamily: 'var(--font-work-sans)' }}
            >
              Mobile Tyre Replacement Across Oldham
            </h2>
            <p className="text-slate-600 mb-4 leading-relaxed text-base sm:text-lg">
              If your tyre is worn, damaged or unsuitable for repair, our <strong>mobile tyre replacement Oldham</strong> service allows you to have a replacement tyre fitted without visiting a tyre shop.
            </p>
            <p className="text-slate-600 mb-4 leading-relaxed text-base sm:text-lg">
              We supply and fit suitable tyres for cars, SUVs and light commercial vehicles, with options for different vehicle requirements and budgets.
            </p>
            <p className="text-slate-600 mb-4 leading-relaxed text-base sm:text-lg">
              Whether you need a single tyre replaced at home, new tyres fitted at work or an emergency tyre change, our mobile technicians bring the necessary equipment directly to you.
            </p>
            <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
              We provide tyre replacement in Oldham and nearby areas, including Chadderton, Failsworth, Royton, Shaw and Saddleworth.
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
              Emergency Mobile Tyre Fitting and Replacement in Oldham
            </h2>
            <p className="text-slate-600 mb-4 leading-relaxed text-base sm:text-lg">
              A flat tyre or blowout can leave you stranded at any time. Our <strong>emergency mobile tyre fitting in Oldham</strong> service is available 24/7 to help you get back on the road.
            </p>
            <p className="text-slate-600 mb-4 leading-relaxed text-base sm:text-lg">
              We attend suitable locations across Oldham, including residential areas, workplaces, car parks and safe roadside locations. The service covers OL1–OL9 and surrounding areas. Our average response time across Oldham is around 20–30 minutes, subject to location and conditions.
            </p>
            <p className="text-slate-600 mb-4 leading-relaxed text-base sm:text-lg">
              Depending on the condition of your tyre, our technicians can carry out a suitable puncture repair or provide an emergency tyre replacement.
            </p>
            <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
              If you&apos;re searching for a tyre fitter that comes to you in Oldham, contact us with your exact location and vehicle details so we can confirm availability, suitable tyres and an estimated arrival time.
            </p>
          </div>
        </section>

        {/* ── 9. BRAND CAROUSEL ─────────────────────────────── */}
        <BrandCarousel />

        {/* ── NEARBY AREAS ───────────────────────────────────── */}
        <NearbyAreas currentSlug="oldham" />

        {/* ── SERVICE AREAS MAP ──────────────────────────────── */}
        <ServiceAreasMap />

        {/* ── LOCAL AREA DETAILS ─────────────────────────────── */}
        <LocalAreaInfo currentSlug="oldham" />

        {/* ── 10. FAQ ───────────────────────────────────────── */}
        <CityFaq
          canonical="https://onestoptyres247.co.uk/mobile-tyre-fitting-oldham"
          city="Oldham"
          faqs={[
            {
              q: 'Do you provide mobile tyre fitting in Oldham 24/7?',
              a: 'Yes. Our mobile tyre fitting service operates 24 hours a day in covered areas, including nights, weekends and bank holidays. Contact us to confirm availability for your location.',
            },
            {
              q: 'How quickly can a mobile tyre fitter reach me in Oldham?',
              a: 'Our website advertises a typical response estimate of around 20–30 minutes in covered areas. This is not guaranteed. Actual arrival time depends on your postcode, traffic, weather, technician availability and the work required. We recommend confirming the estimated arrival time when booking.',
            },
            {
              q: 'Do you offer emergency mobile tyre fitting in Oldham?',
              a: 'Yes. We provide 24/7 emergency mobile tyre assistance for suitable locations across Oldham. Contact us with your exact location and explain whether you have a flat tyre, puncture or blowout.',
            },
            {
              q: 'Can you fit a new tyre at my home in Oldham?',
              a: 'Yes. We can arrange mobile tyre fitting at your home, provided there is sufficient space and safe access for the technician to work.',
            },
            {
              q: 'Can I get tyres fitted at my workplace?',
              a: 'Yes. We can arrange mobile tyre fitting at suitable workplace locations, including car parks and business premises. Provide the address and your preferred time when requesting a quote.',
            },
            {
              q: 'How much does mobile tyre fitting in Oldham cost?',
              a: 'The price depends on your tyre size, selected brand, location and whether you need a repair or replacement. Contact us with your vehicle registration or tyre size to receive a quote before confirming the service.',
            },
            {
              q: 'Do you provide same-day mobile tyre fitting in Oldham?',
              a: 'Same-day fitting may be available depending on technician availability, your location and the required tyre being in stock. Contact us to check available appointments.',
            },
            {
              q: 'Can you repair a punctured tyre at my home?',
              a: 'Yes. Our mobile technicians can inspect a punctured tyre at your home and determine whether a safe repair is possible. If the damage is unsuitable for repair, a replacement may be required.',
            },
            {
              q: 'Is it better to repair a puncture or replace the tyre?',
              a: 'It depends on the location and extent of the damage and the overall condition of the tyre. A suitable puncture may be repaired, but sidewall damage, structural damage or an unsuitable puncture generally requires replacement.',
            },
            {
              q: 'What tyre brands do you offer in Oldham?',
              a: 'We list a range of major tyre brands, including Michelin, Goodyear, Continental, Bridgestone, Pirelli, Dunlop, Hankook and others. Availability depends on the required tyre size and current stock.',
            },
            {
              q: 'Can I choose between budget, mid-range and premium tyres?',
              a: 'Yes. We provide different tyre options depending on your vehicle requirements, tyre size and availability. Contact us to compare suitable options and prices.',
            },
            {
              q: 'What information do I need to book a mobile tyre fitter?',
              a: 'Ideally, provide your vehicle registration, postcode or location pin, tyre size if known and a description of the problem. This helps us identify the correct tyre and provide a more accurate quote.',
            },
            {
              q: 'What if I do not know my tyre size?',
              a: 'You can provide your vehicle registration and make and model. You can also send a photograph of the numbers printed on your tyre sidewall. Our team can use these details to help identify the correct specification.',
            },
            {
              q: 'Do you cover Chadderton, Royton and Shaw?',
              a: 'Yes. Chadderton, Royton and Shaw are included in our Oldham service coverage. Contact us with your postcode to confirm availability.',
            },
            {
              q: 'Can you provide mobile tyre fitting in Saddleworth?',
              a: 'Yes. Our listed coverage includes Saddleworth and nearby locations such as Uppermill, Delph, Diggle, Dobcross and Austerlands. Contact us to confirm availability and the estimated arrival time.',
            },
            {
              q: 'Do you cover the M60 and A627(M) near Oldham?',
              a: 'Our listed road coverage includes M60 Junctions 21–22 and the A627(M). If you experience a breakdown, prioritise your safety and follow the appropriate road or motorway breakdown procedures. Assistance depends on safe access.',
            },
            {
              q: 'Can you replace a tyre after a blowout?',
              a: 'Yes. We can discuss an emergency replacement if your tyre has suffered a blowout. The correct replacement must be available and compatible with your vehicle.',
            },
            {
              q: 'Do you provide mobile tyre fitting for cars only?',
              a: 'Yes. Our mobile tyre fitting service is for cars. Contact us with your vehicle registration, tyre size and location so we can check the correct tyre and service availability.',
            },
            {
              q: 'Can you help if I have lost my locking wheel nut key?',
              a: 'Locking wheel nut removal is among our listed services. Tell us your vehicle make and model when booking so the team can confirm whether the required removal procedure is suitable.',
            },
            {
              q: 'Can you check or reset my TPMS after fitting?',
              a: "TPMS checks and resets are available where applicable. The work required depends on your vehicle's monitoring system and sensor requirements.",
            },
            {
              q: 'Do you offer jump-start assistance in Oldham?',
              a: 'Yes. Mobile jump-start assistance is among our listed services. Contact us with your location and vehicle details to check availability.',
            },
            {
              q: 'Can I book mobile tyre fitting for a specific time?',
              a: 'You can request a preferred appointment time. The team will confirm availability based on technician scheduling, your location and the tyre required.',
            },
            {
              q: 'Do you accept card and contactless payments?',
              a: 'Contact our team when booking to confirm the available payment options for your appointment.',
            },
            {
              q: 'How do I book mobile tyre fitting in Oldham?',
              a: 'Call or WhatsApp 07759 708 646. Provide your location, vehicle registration, tyre size if known and a description of the problem. Our team can discuss suitable options, pricing and the estimated arrival time.',
            },
          ]}
        />

        {/* ── 11. FINAL CTA ─────────────────────────────────── */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-[#f0edec] relative">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-h2 text-xl sm:text-2xl lg:text-h2 mb-4 sm:mb-5 leading-tight">Need a Mobile Tyre Fitter in Oldham?</h2>
            <p className="font-body-lg text-base lg:text-lg text-[#5c403c] leading-relaxed mb-3">Whether you need a new tyre at home, a puncture repaired at work or emergency tyre replacement while travelling, our mobile team can help you arrange suitable assistance.</p>
            <p className="font-body-lg text-base lg:text-lg text-[#5c403c] leading-relaxed mb-3">Contact One Stop Tyres 247 for 24/7 mobile tyre fitting, puncture repair and emergency tyre replacement across Oldham and nearby areas.</p>
            <p className="font-body-lg text-base lg:text-lg text-[#5c403c] leading-relaxed mb-6 sm:mb-8">Share your postcode or location pin and vehicle details to receive a quote and check availability — mobile tyre fitting at home, work or a suitable roadside location across Oldham.</p>
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
