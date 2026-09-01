import Image from 'next/image'
import BrandCarousel from '@/components/BrandCarousel'
import WhyChooseUs from '@/components/WhyChooseUs'
import CityFaq from '@/components/CityFaq'
import NearbyAreas from '@/components/NearbyAreas'
import ServiceAreasMap from '@/components/ServiceAreasMap'
import ReviewsCarousel from '@/components/ReviewsCarousel'
import JsonLd from '@/components/JsonLd'
import { serviceSchema } from '@/lib/schema'
import { buildMetadata } from '@/lib/seo'

const _serviceSchema = serviceSchema({
  slug: 'mobile-tyre-fitting-bury',
  name: 'Mobile Tyre Fitting in Bury',
  serviceType: 'Mobile Tyre Fitting',
  areaServed: { '@type': 'City', name: 'Bury' },
})

export const metadata = buildMetadata({
  title: 'Mobile Tyre Fitting in Bury | One Stop Mobile Tyres 24/7',
  description:
    'Flat tyre in Bury? Professional mobile tyre fitting comes directly to your location 24/7, with same day and emergency assistance available.',
  path: '/mobile-tyre-fitting-bury',
})

function FeatureItem({ icon, title, desc }: { icon: string; title: string; desc: string }) {
  return (
    <li className="flex items-center gap-4 bg-slate-50 p-4 rounded-xl border-l-4 border-[#b70011]">
      <span className="material-symbols-outlined text-[#b70011] bg-[#b70011]/10 p-2 rounded-lg font-bold">
        {icon}
      </span>
      <div>
        <span className="font-bold text-[#0f172a] block">{title}</span>
        <p className="text-sm text-slate-500">{desc}</p>
      </div>
    </li>
  )
}

export default function BuryPage() {
  return (
    <div className="bg-[#fcf9f8] text-[#1c1b1b] font-body-md">
      <JsonLd data={_serviceSchema} />
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
              24/7 Emergency Mobile Tyre Fitting and Replacement in Bury
            </h1>

            <p className="text-white/80 text-base leading-relaxed mb-6">
              Flat tyre in Bury? One Stop Mobile Tyres 24/7 brings professional mobile tyre fitting directly to your location, whether you are parked at work, safely stopped roadside or unable to drive because of a damaged tyre.
            </p>

            {/* Trust bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 mb-6">
              {[
                '20–30 Minute Response Across Bury',
                'Same Day Mobile Tyre Fitting Available',
                'Emergency Mobile Tyre Fitting 24/7',
                'Premium, Mid-Range & Budget Tyre Options',
                'Card, Cash & Contactless Payments Accepted',
                'Professional, Fully Insured Mobile Tyre Fitters',
              ].map((item) => (
                <div key={item} className="flex items-center gap-2.5 text-white/90">
                  <span
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
                  <span key={i} className="material-symbols-outlined text-[13px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                ))}
              </div>
              <span className="font-bold text-sm">5.0</span>
              <span className="text-white/60 text-xs font-medium">Rated By Drivers Across Bury &amp; Greater Manchester</span>
            </a>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="tel:07759708646"
                className="bg-[#FF4444] text-[#121212] font-black px-8 py-4 rounded-xl shadow-2xl shadow-red-900/40 flex items-center justify-center gap-2.5 hover:bg-red-700 hover:text-white transition-all text-base sm:text-lg"
                style={{ fontFamily: 'var(--font-work-sans)' }}
              >
                <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>call</span>
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
                    <span key={i} className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
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
                <span className="material-symbols-outlined text-[16px]">open_in_new</span>
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
                Mobile Tyre Services for Drivers Across Bury
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto text-base">
                A damaged tyre can disrupt your journey without warning. Our mobile tyre service is designed to solve the problem where your vehicle is, rather than making you arrange recovery or travel to a tyre centre. From Bury town centre and Fairfield to Unsworth, Tottington and surrounding communities, our mobile tyre fitters provide same day and emergency support with the equipment needed to fit, replace and inspect tyres on-site.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {[
                {
                  img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Emergency%20Tyre%20Fitting%20one%20Stop-airanko-gsjvsGamoet8drKwCMHYr6LH5Ni6ZI.webp',
                  title: 'Mobile Tyre Fitting',
                  desc: 'Our mobile tyre fitting service brings the fitting equipment and suitable tyre options directly to your vehicle. We can help with worn tyres, blowouts and damaged tyres without requiring a separate garage visit.',
                  badge: 'FAST MOBILE RESPONSE',
                  href: '/mobile-tyre-fitting',
                },
                {
                  img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Home%20Tyre%20Fitting%20One%20Stop-airanko-kPAsyn08SjxXwLwCVhxre5zM9jWBTs.webp',
                  title: 'Mobile Tyre Replacement',
                  desc: 'If a tyre is no longer safe to use, we can supply a suitable replacement and fit it at your location. Premium, mid-range and budget options are available for a wide range of vehicles.',
                  badge: 'CONVENIENT REPLACEMENT',
                  href: '/home-tyre-fitting',
                },
                {
                  img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Puncture%20Repair%20One%20Stop-airanko-sfmhLvDbSYmhoMprTVOHCcIWEgJvHf.webp',
                  title: 'Mobile Puncture Repair',
                  desc: 'Not every puncture requires a new tyre. Where the location and type of damage meet repair standards, our technician can inspect the tyre and carry out a professional repair.',
                  badge: 'REPAIR WHERE SUITABLE',
                  href: '/emergency-puncture-repair',
                },
                {
                  img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/One%20Stop%20Jumpstart%20image-airanko-cXmOrXcdtaIBMNQOMCIOiPj1C290RG.webp',
                  title: 'Jump Start',
                  desc: 'A flat battery can leave you stuck just as easily as tyre damage. Our mobile technicians can provide jump-start assistance alongside our roadside tyre services across Bury.',
                  badge: 'AVAILABLE DAY OR NIGHT',
                  href: '/jump-start',
                },
                {
                  img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Tyre%20pressure%20monitor-airanko-sjz7PL2Pv4N9jlPWtz5Wa1q8XO0FgP.webp',
                  title: 'TPMS Reset',
                  desc: 'After tyre work, we can inspect the tyre pressure monitoring system and reset it where required so the system can continue monitoring tyre pressures correctly.',
                  badge: 'TYRE SYSTEM CHECK',
                  href: '/tpms-reset',
                },
                {
                  img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Locking%20nut%20removal-airanko%20%281%29-ONBmqaZHMozU0jjrxbPe5J7C4zRQkS.webp',
                  title: 'Locking Nut Removal',
                  desc: 'Missing or damaged locking wheel nut key? Our technicians use specialist equipment to help remove locking wheel nuts while reducing the risk of damage to the wheel.',
                  badge: 'SPECIALIST REMOVAL',
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
                      <span className="material-symbols-outlined text-slate-400 group-hover:text-[#b70011] group-hover:translate-x-1 transition-all">
                        arrow_forward
                      </span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
            <div className="mt-10 sm:mt-12 bg-[#0f172a] rounded-2xl sm:rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-5 shadow-2xl text-center sm:text-left">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">Need Help With a Tyre in Bury?</h3>
                <p className="text-slate-400 text-base">
                  Tell us your location, vehicle and tyre size. A technician can confirm suitable tyre options, pricing and expected arrival time.
                </p>
              </div>
              <a
                href="tel:07759708646"
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
                    <span key={i} className="material-symbols-outlined" style={{ fontSize: '16px', fontVariationSettings: "'FILL' 1" }}>star</span>
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
                Mobile Tyre Fitting Built Around Bury Drivers
              </h2>
              <p className="text-slate-600 mb-6 sm:mb-8 leading-relaxed text-base sm:text-lg">
                Bury combines busy town-centre roads, residential neighbourhoods and routes connecting drivers towards Manchester, Bolton and Rochdale. A tyre problem on any of these journeys can leave you with few practical options if the vehicle is unsafe to drive. One Stop Mobile Tyres 24/7 provides a mobile alternative. Instead of taking the damaged vehicle to a tyre centre, one of our technicians comes to you with professional fitting equipment and suitable tyre options. We cover Bury and surrounding areas including <strong>Tottington, Unsworth, Fairfield, Elton, Radcliffe, Whitefield and Prestwich</strong>, as well as drivers using major routes around the borough such as the <strong>A56, A58 and M66</strong>. Whether you discover a worn tyre before work, damage a tyre during a journey or need an <strong>emergency tyre replacement</strong> late at night, our service is available around the clock.
              </p>
              <ul className="space-y-4 sm:space-y-5">
                <FeatureItem
                  icon="bolt"
                  title="Same Day Tyre Fitting"
                  desc="Need the tyre dealt with today? Our same day tyre fitting service can arrange a mobile technician where availability and the required tyre size allow."
                />
                <FeatureItem
                  icon="engineering"
                  title="Emergency Mobile Tyre Fitting"
                  desc="If a damaged tyre means you cannot continue your journey safely, our emergency mobile tyre fitting service provides on-site assistance 24 hours a day."
                />
                <FeatureItem
                  icon="sell"
                  title="Mobile Tyre Replacement Service"
                  desc="From one damaged tyre to several worn tyres, our mobile tyre replacement service brings the fitting process to your location and gives you tyre options suitable for your vehicle and budget."
                />
              </ul>
            </div>
          </div>
        </section>

        {/* ── 5. WHY BURY DRIVERS CHOOSE US ──────────────── */}
        <WhyChooseUs
          city="Bury"
          image="/images/mobile-tyre-fitting-manchester.webp"
          heading="Why Bury Drivers Use One Stop Mobile Tyres 24/7"
          responseTitle="Mobile Service Where Your Vehicle Is"
          responseDesc="A damaged tyre does not always leave you in a convenient place. Our technicians travel to suitable locations across Bury, helping remove the need to arrange recovery simply to have a tyre fitted."
          callOutTitle="Tyre Options to Match Your Vehicle and Budget"
          callOutDesc="We supply a range of premium, mid-range and budget tyres. Before dispatch, we can discuss the tyre size, vehicle requirements and available options so you know what is being fitted."
          certifiedTitle="Professional Mobile Tyre Fitters"
          certifiedDesc="Our professional mobile tyre fitters use dedicated mobile fitting equipment and work across a wide range of cars and tyre sizes. The aim is simple: safe, professional fitting without an unnecessary garage visit."
        />

        {/* ── 6. BRAND CAROUSEL ─────────────────────────────── */}
        <BrandCarousel />

        {/* ── NEARBY AREAS ───────────────────────────────────── */}
        <NearbyAreas currentSlug="bury" />

        {/* ── SERVICE AREAS MAP ──────────────────────────────── */}
        <ServiceAreasMap />

        {/* ── 7. FAQ ────────────────────────────────────────── */}
        <CityFaq
          canonical="https://onestoptyres247.co.uk/mobile-tyre-fitting-bury"
          city="Bury"
          faqs={[
            {
              q: 'Do you provide 24 hour mobile tyre fitting in Bury?',
              a: 'Yes. Our 24 hour mobile tyre fitting service operates across Bury day and night. If tyre damage leaves your vehicle unsafe to drive, call with your location and tyre details so we can check availability and dispatch the appropriate technician.',
            },
            {
              q: 'Can I get same day mobile tyre fitting in Bury?',
              a: 'Yes. Same day mobile tyre fitting is available across Bury for many common tyre sizes. Availability depends on your required tyre, location and current call-out demand.',
            },
            {
              q: 'What is included in your mobile tyre service?',
              a: 'Our mobile tyre service can include tyre inspection, removal of the damaged or worn tyre, professional fitting of the replacement tyre and relevant checks before the vehicle is returned to use.',
            },
            {
              q: 'Do you provide mobile car tyre fitting for different vehicle types?',
              a: 'Yes. We provide mobile car tyre fitting for a wide range of everyday vehicles. Give us your registration or tyre size when booking so we can identify suitable tyre options before travelling to you.',
            },
            {
              q: 'Can you replace a tyre if it cannot be repaired?',
              a: 'Yes. If inspection shows the tyre is unsafe or unsuitable for repair, we can provide mobile tyre replacement using a suitable tyre for the vehicle. We carry premium, mid-range and budget options depending on availability.',
            },
            {
              q: 'What is an emergency tyre replacement?',
              a: 'An emergency tyre replacement is useful when tyre damage prevents you from continuing safely. Our technician comes to your location with the equipment and suitable replacement tyre needed to get the vehicle mobile again.',
            },
            {
              q: 'Do you offer an emergency tyre service in Bury?',
              a: 'Yes. Our emergency tyre service is available for tyre problems that leave you stuck or unable to continue your journey safely. We cover Bury and surrounding areas throughout the day and night.',
            },
            {
              q: 'Is your mobile tyre fitting service available 24/7?',
              a: 'Yes. We provide 24/7 mobile tyre fitting across Bury, including evenings, nights, weekends and bank holidays, subject to technician and tyre availability.',
            },
            {
              q: 'Can you help with a flat tyre at the roadside?',
              a: 'Yes. Our flat tyre assistance covers suitable roadside locations across Bury. Tell us exactly where the vehicle is and what happened so we can determine the safest and most suitable response.',
            },
            {
              q: 'Do you provide roadside tyre call-outs around Bury?',
              a: 'Yes. Our roadside tyre call-outs cover Bury and major routes around the borough. If you are stopped on or close to a busy road, move to a safe position where possible before contacting us.',
            },
            {
              q: 'How do I arrange fast mobile tyre fitting in Bury?',
              a: 'Call or WhatsApp us with your vehicle registration, tyre size and exact location. Providing this information helps us identify the right tyre and arrange fast mobile tyre fitting without unnecessary delays.',
            },
            {
              q: 'Why choose professional tyre fitting instead of changing the tyre myself?',
              a: 'Professional tyre fitting uses dedicated equipment to remove, mount and fit tyres correctly. Our technicians can also inspect the tyre and wheel during the job and make sure the replacement is suitable for the vehicle.',
            },
            {
              q: 'Are you reliable mobile tyre service providers across Bury?',
              a: 'Our reliable mobile tyre service is designed around clear communication, mobile convenience and professional fitting. We confirm the tyre options and expected costs before the technician attends.',
            },
            {
              q: 'Do you have trusted mobile tyre fitters serving Bury?',
              a: "Our trusted mobile tyre fitters serve Bury as part of One Stop Mobile Tyres 24/7's wider Greater Manchester coverage, providing scheduled and emergency tyre assistance throughout the area.",
            },
          ]}
        />

        {/* ── 8. FINAL CTA ──────────────────────────────────── */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-[#f0edec] relative">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-h2 text-xl sm:text-2xl lg:text-h2 mb-4 sm:mb-5 leading-tight">Need Mobile Tyre Fitting in Bury Today?</h2>
            <p className="font-body-lg text-base lg:text-lg text-[#5c403c] leading-relaxed mb-6 sm:mb-8">Whether you have spotted tyre damage before a journey or are already stuck with a flat tyre, call One Stop Mobile Tyres 24/7 with your location and tyre details. We&apos;ll check the required tyre, confirm available options and arrange a mobile technician to come to you.</p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mt-4 sm:mt-6">
              <a
                className="flex items-center justify-center gap-2 sm:gap-3 bg-[#dc2626] hover:bg-[#b70011] text-white px-6 sm:px-10 py-4 sm:py-5 rounded-lg font-call-to-action text-base transition-all shadow-xl"
                href="tel:07759708646"
              >
                <span className="material-symbols-outlined text-xl sm:text-2xl">phone_in_talk</span>
                Call: 07759 708 646
              </a>
              <a
                className="flex items-center justify-center gap-2 sm:gap-3 bg-[#1c1b1b] hover:bg-slate-800 text-white px-6 sm:px-10 py-4 sm:py-5 rounded-lg font-call-to-action text-base transition-all shadow-xl"
                href="https://wa.me/447759708646"
              >
                <span className="material-symbols-outlined text-[#25D366] text-xl sm:text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>chat</span>
                WhatsApp Us
              </a>
            </div>
          </div>
        </section>

      </main>
    </div>
  )
}
