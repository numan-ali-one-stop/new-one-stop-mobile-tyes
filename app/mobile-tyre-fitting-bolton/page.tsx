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
  slug: 'mobile-tyre-fitting-bolton',
  name: 'Mobile Tyre Fitting in Bolton',
  serviceType: 'Mobile Tyre Fitting',
  areaServed: { '@type': 'City', name: 'Bolton' },
})

export const metadata = buildMetadata({
  title: 'Mobile Tyre Fitting in Bolton | One Stop Mobile Tyres 24/7',
  description:
    'Professional mobile tyre fitting across Bolton, with same day and 24/7 emergency tyre support delivered directly to your vehicle.',
  path: '/mobile-tyre-fitting-bolton',
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

export default function BoltonPage() {
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
              Mobile Tyre Fitting Bolton – 24/7 Tyre Help
            </h1>

            <p className="text-white/80 text-base leading-relaxed mb-6">
              Tyre trouble can stop a journey anywhere in Bolton, from a busy route into town to a residential street or a journey towards the M61. One Stop Mobile Tyres 24/7 brings professional mobile tyre fitting directly to your vehicle, with same day and emergency support available around the clock.
            </p>

            {/* Trust bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 mb-6">
              {[
                '20–30 Minute Response Across Bolton',
                'Same Day Mobile Tyre Fitting Available',
                'Emergency Mobile Tyre Fitting 24/7',
                'Premium, Mid-Range & Budget Tyres',
                'Card, Cash & Contactless Payments Accepted',
                'Professional Mobile Tyre Fitters',
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
              <span className="text-white/60 text-xs font-medium">Rated By Drivers Across Bolton &amp; Greater Manchester</span>
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
            <ReviewsCarousel offset={2} />
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
                Mobile Tyre Services for Bolton Drivers
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto text-base">
                Bolton&apos;s busy roads, from the A666 to the M61, can make tyre trouble especially disruptive. Our mobile tyre service brings professional fitting equipment and suitable tyre options directly to your location, so there&apos;s no need to drive an unsafe vehicle to a garage.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {[
                {
                  img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Emergency%20Tyre%20Fitting%20one%20Stop-airanko-gsjvsGamoet8drKwCMHYr6LH5Ni6ZI.webp',
                  title: 'Mobile Tyre Fitting',
                  desc: 'Our mobile tyre fitting service brings the tyre fitting process to you. We attend cars across Bolton with the equipment needed to remove worn or damaged tyres and professionally fit suitable replacements on-site.',
                  badge: 'FITTING WITHOUT THE GARAGE QUEUE',
                  href: '/mobile-tyre-fitting',
                },
                {
                  img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Home%20Tyre%20Fitting%20One%20Stop-airanko-kPAsyn08SjxXwLwCVhxre5zM9jWBTs.webp',
                  title: 'Mobile Tyre Replacement',
                  desc: 'If a tyre has suffered a blowout, sidewall damage or excessive wear, replacement may be the safest option. Our mobile tyre replacement service supplies and fits an appropriate tyre at your location.',
                  badge: 'REPLACEMENT WHEN DAMAGE IS TOO SERIOUS',
                  href: '/home-tyre-fitting',
                },
                {
                  img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Puncture%20Repair%20One%20Stop-airanko-sfmhLvDbSYmhoMprTVOHCcIWEgJvHf.webp',
                  title: 'Mobile Puncture Repair',
                  desc: 'Where a puncture falls within a repairable area and the tyre remains structurally safe, our technicians can carry out a professional puncture repair rather than replacing the entire tyre unnecessarily.',
                  badge: 'REPAIR BEFORE REPLACEMENT',
                  href: '/emergency-puncture-repair',
                },
                {
                  img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/One%20Stop%20Jumpstart%20image-airanko-cXmOrXcdtaIBMNQOMCIOiPj1C290RG.webp',
                  title: 'Jump Start',
                  desc: 'Battery problems can leave you stranded just as quickly as tyre damage. Our mobile technicians also provide jump-start assistance throughout Bolton when your vehicle needs help getting started.',
                  badge: 'HELP WHEN YOUR CAR WILL NOT START',
                  href: '/jump-start',
                },
                {
                  img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Tyre%20pressure%20monitor-airanko-sjz7PL2Pv4N9jlPWtz5Wa1q8XO0FgP.webp',
                  title: 'TPMS Reset',
                  desc: 'If a tyre pressure warning remains active after tyre work, we can inspect and reset the TPMS where required, helping the system continue monitoring pressure correctly.',
                  badge: 'KEEP YOUR TYRE WARNING SYSTEM WORKING',
                  href: '/tpms-reset',
                },
                {
                  img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Locking%20nut%20removal-airanko%20%281%29-ONBmqaZHMozU0jjrxbPe5J7C4zRQkS.webp',
                  title: 'Locking Nut Removal',
                  desc: 'A damaged locking nut or missing key can prevent tyre work from going ahead. We use specialist equipment to remove difficult locking wheel nuts while taking care around the wheel.',
                  badge: 'WHEN THE LOCKING KEY IS LOST OR DAMAGED',
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
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">Need Tyre Help in Bolton?</h3>
                <p className="text-slate-400 text-base">
                  Call or WhatsApp with your vehicle registration, tyre size and exact location. We can check suitable tyre options, explain the price and give you an expected arrival time.
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
                Mobile Tyre Fitting for Bolton&apos;s Busy Roads and Neighbourhoods
              </h2>
              <p className="text-slate-600 mb-6 sm:mb-8 leading-relaxed text-base sm:text-lg">
                Bolton combines a busy town centre with large residential areas and major routes connecting drivers towards Manchester, Chorley, Bury and Wigan. That means a tyre problem can happen during almost any type of journey. Our mobile car tyre fitting service is designed for that variety. Instead of asking you to move the vehicle on a damaged tyre, our technician travels to a suitable location and completes the fitting with mobile equipment. We cover Bolton town centre as well as surrounding areas such as Farnworth, Horwich, Westhoughton and nearby neighbourhoods. We also regularly support drivers travelling around the M61, A666 and other main routes through the borough. Premium, mid-range and budget tyres are available for many common vehicle sizes. Send us your vehicle registration or tyre markings when booking so we can check suitable options before dispatch.
              </p>
              <ul className="space-y-4 sm:space-y-5">
                <FeatureItem
                  icon="bolt"
                  title="Same Day Mobile Tyre Fitting"
                  desc="Need the problem resolved today? Our same day mobile tyre fitting service is available for many common tyre sizes, helping you avoid delaying an important journey or waiting for another garage appointment."
                />
                <FeatureItem
                  icon="engineering"
                  title="Emergency Mobile Tyre Fitting"
                  desc="A sudden blowout or serious tyre failure can leave your vehicle unsafe to continue. Our emergency mobile tyre fitting service operates around the clock for drivers who need urgent assistance across Bolton."
                />
                <FeatureItem
                  icon="sell"
                  title="Mobile Tyre Replacement Service"
                  desc="When a damaged or worn tyre needs changing, our mobile tyre replacement service allows the replacement to be supplied and professionally fitted at a suitable location without a separate garage visit."
                />
              </ul>
            </div>
          </div>
        </section>

        {/* ── 5. WHY BOLTON DRIVERS CHOOSE US ──────────────── */}
        <WhyChooseUs
          city="Bolton"
          image="/images/tyres-fitting-anywhere.webp"
          heading="Why Bolton Drivers Choose One Stop Mobile Tyres 24/7"
          responseTitle="We Come to the Vehicle"
          responseDesc="Driving on a badly damaged tyre can make the problem worse and may be unsafe. Our mobile setup allows the technician to bring the tyre, tools and fitting equipment to your location instead."
          callOutTitle="Options for Different Budgets"
          callOutDesc="Not every driver wants the same tyre. We can discuss premium, mid-range and budget options before dispatch, helping you choose a tyre that suits your vehicle, driving needs and budget."
          certifiedTitle="Professional Fitting On-Site"
          certifiedDesc="Our professional mobile tyre fitters use specialist mobile equipment to carry out tyre replacement correctly. We work with a wide range of common cars and tyre sizes across Bolton."
        />

        {/* ── 6. BRAND CAROUSEL ─────────────────────────────── */}
        <BrandCarousel />

        {/* ── NEARBY AREAS ───────────────────────────────────── */}
        <NearbyAreas currentSlug="bolton" />

        {/* ── SERVICE AREAS MAP ──────────────────────────────── */}
        <ServiceAreasMap />

        {/* ── 7. FAQ ────────────────────────────────────────── */}
        <CityFaq
          canonical="https://onestoptyres247.co.uk/mobile-tyre-fitting-bolton"
          city="Bolton"
          faqs={[
            {
              q: 'How quickly can you provide mobile tyre fitting in Bolton?',
              a: 'Our usual response target across Greater Manchester is around 20–30 minutes. The exact arrival time depends on traffic, your location, technician availability and the tyre required.',
            },
            {
              q: 'Do you provide 24/7 mobile tyre fitting in Bolton?',
              a: 'Yes. Our 24/7 mobile tyre fitting service operates day and night across Bolton, including evenings, weekends and bank holidays, subject to technician and tyre availability.',
            },
            {
              q: 'Can I book same day tyre fitting in Bolton?',
              a: 'Yes. Same day tyre fitting is available for many common tyre sizes. Contact us with your vehicle registration or tyre size and we can check stock before arranging the fitting.',
            },
            {
              q: 'What is included in your mobile tyre service?',
              a: 'Our mobile tyre service can include assessing the tyre problem, removing the worn or damaged tyre, supplying a suitable replacement and completing the professional fitting at your location.',
            },
            {
              q: 'Can you provide mobile tyre replacement in Bolton?',
              a: 'Yes. If your existing tyre is badly damaged, excessively worn or unsuitable for repair, we can provide mobile tyre replacement using an appropriate tyre for your vehicle.',
            },
            {
              q: 'What is a mobile tyre replacement service?',
              a: 'A mobile tyre replacement service means the technician brings the required tyre and fitting equipment to you, removes the unusable tyre and fits the replacement without you visiting a tyre centre.',
            },
            {
              q: 'Do you offer an emergency tyre service in Bolton?',
              a: 'Yes. Our emergency tyre service is available when tyre damage leaves you unable to continue your journey safely. Give us your exact location and tyre details so we can arrange the right response.',
            },
            {
              q: 'Can you carry out mobile car tyre fitting for different vehicles?',
              a: 'Yes. Our mobile car tyre fitting service covers many common cars and tyre sizes. Providing your registration allows us to check the correct specification before dispatch.',
            },
            {
              q: 'Can you help with a flat tyre?',
              a: 'Yes. We provide flat tyre assistance across Bolton. Depending on the cause and condition of the tyre, the technician can determine whether repair or replacement is the appropriate solution.',
            },
            {
              q: 'Do you cover the M61 around Bolton?',
              a: 'Yes. We provide tyre assistance around the M61 and surrounding Bolton routes. If you are on a motorway, follow motorway safety guidance and move to a safe location wherever possible before contacting us.',
            },
            {
              q: 'Do you cover the A666?',
              a: 'Yes. Our technicians cover suitable locations around the A666 and other main roads running through Bolton. Give us your exact position so we can identify the nearest available technician.',
            },
            {
              q: 'Do you cover Farnworth, Horwich and Westhoughton?',
              a: 'Yes. Our Bolton coverage includes Farnworth, Horwich and Westhoughton, as well as Bolton town centre and surrounding neighbourhoods.',
            },
            {
              q: 'Can I have a tyre fitted on my drive?',
              a: 'Where there is enough safe working space around the vehicle, having a tyre fitted on your drive may be possible. Tell us about the parking position when booking so we can confirm suitability.',
            },
            {
              q: 'How do I arrange fast mobile tyre fitting in Bolton?',
              a: 'For fast mobile tyre fitting, send us your exact location, vehicle registration and tyre size. Having these details ready helps us identify an appropriate tyre and organise dispatch more efficiently.',
            },
            {
              q: 'Why use professional tyre fitting?',
              a: 'Professional tyre fitting uses suitable equipment and procedures to remove and install tyres correctly. The technician can also check the visible condition of the tyre and wheel while completing the job.',
            },
            {
              q: 'Are your technicians professional mobile tyre fitters?',
              a: 'Yes. Our professional mobile tyre fitters use dedicated equipment and provide mobile fitting for a wide range of common cars and tyre sizes across Greater Manchester.',
            },
            {
              q: 'Do you provide a reliable mobile tyre service in Bolton?',
              a: 'Our reliable mobile tyre service focuses on clear communication, suitable tyre choices and professional fitting where your vehicle is located.',
            },
            {
              q: 'Do trusted mobile tyre fitters cover Bolton at night?',
              a: 'Yes. Our trusted mobile tyre fitters provide both scheduled and emergency support across Bolton day and night, subject to technician and tyre availability.',
            },
            {
              q: 'What happens if I need an emergency tyre replacement late at night?',
              a: 'Call or WhatsApp with your location, tyre size and vehicle details. We can check the required tyre and arrange an available technician for emergency tyre replacement where possible.',
            },
          ]}
        />

        {/* ── 8. FINAL CTA ──────────────────────────────────── */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-[#f0edec] relative">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-h2 text-xl sm:text-2xl lg:text-h2 mb-4 sm:mb-5 leading-tight">Need Mobile Tyre Fitting in Bolton Today?</h2>
            <p className="font-body-lg text-base lg:text-lg text-[#5c403c] leading-relaxed mb-6 sm:mb-8">Whether you have found a damaged tyre before setting off or a tyre problem has already stopped your journey, One Stop Mobile Tyres 24/7 can bring the fitting service to you. Send us your vehicle details, tyre size and location. We will check suitable tyre options and arrange a technician to attend you in Bolton.</p>
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
