import Image from 'next/image'
import BrandCarousel from '@/components/BrandCarousel'
import WhyChooseUs from '@/components/WhyChooseUs'
import CityFaq from '@/components/CityFaq'
import NearbyAreas from '@/components/NearbyAreas'
import ServiceAreasMap from '@/components/ServiceAreasMap'
import ReviewsCarousel from '@/components/ReviewsCarousel'
import JsonLd from '@/components/JsonLd'
import { serviceSchema } from '@/lib/schema'

const _serviceSchema = serviceSchema({
  slug: 'mobile-tyre-fitting-middleton',
  name: 'Mobile Tyre Fitting in Middleton',
  serviceType: 'Mobile Tyre Fitting',
  areaServed: { '@type': 'City', name: 'Middleton' },
})

export const metadata = {
  title: 'Mobile Tyre Fitting in Middleton | One Stop Mobile Tyres 24/7',
  description:
    'Professional mobile tyre fitting across Middleton, with same day fitting and 24/7 emergency tyre support delivered directly to your location.',
  alternates: { canonical: 'https://onestoptyres247.co.uk/mobile-tyre-fitting-middleton' },
}

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

export default function MiddletonPage() {
  return (
    <div className="bg-[#fcf9f8] text-[#1c1b1b] font-body-md">
      <JsonLd data={_serviceSchema} />
      <main>

        {/* ── 1. HERO */}
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
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-white mb-4 leading-[1.1] font-black text-balance" style={{ fontFamily: 'var(--font-work-sans)', letterSpacing: '-0.02em' }}>
              Mobile Tyre Fitting Middleton – 24/7 Tyre Support
            </h1>
            <p className="text-white/80 text-base leading-relaxed mb-6">
              A damaged tyre in Middleton can disrupt a local journey, a commute into Manchester or a trip towards the M60 and M62. One Stop Mobile Tyres 24/7 provides professional mobile tyre fitting across Middleton, bringing suitable tyres and specialist fitting equipment directly to your vehicle.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 mb-6">
              {[
                '20–30 Minute Response Across Middleton',
                'Same Day Mobile Tyre Fitting Available',
                'Emergency Mobile Tyre Fitting 24/7',
                'Premium, Mid-Range & Budget Tyres',
                'Card, Cash & Contactless Payments Accepted',
                'Professional Mobile Tyre Fitters',
              ].map((item) => (
                <div key={item} className="flex items-center gap-2.5 text-white/90">
                  <span className="material-symbols-outlined text-green-400 shrink-0" style={{ fontSize: '20px', fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  <span className="text-base font-semibold leading-snug">{item}</span>
                </div>
              ))}
            </div>
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
              <span className="text-white/60 text-xs font-medium">Rated By Drivers Across Middleton &amp; Greater Manchester</span>
            </a>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="tel:07759708646" className="bg-[#FF4444] text-[#121212] font-black px-8 py-4 rounded-xl shadow-2xl shadow-red-900/40 flex items-center justify-center gap-2.5 hover:bg-red-700 hover:text-white transition-all text-base sm:text-lg" style={{ fontFamily: 'var(--font-work-sans)' }}>
                <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>call</span>
                07759 708 646
              </a>
              <a href="https://wa.me/447759708646" className="bg-[#25D366] hover:bg-[#1ebe5d] text-white font-black px-8 py-4 rounded-xl flex items-center justify-center gap-2.5 transition-all text-base sm:text-lg shadow-lg shadow-green-900/20" style={{ fontFamily: 'var(--font-work-sans)' }}>
                <svg className="w-5 h-5 fill-current flex-shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WHATSAPP
              </a>
            </div>
          </div>
        </section>

        {/* ── 2. REVIEWS */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10 sm:mb-14">
              <span className="text-[#b70011] font-bold uppercase tracking-widest text-sm mb-3 block">Google Reviews</span>
              <h2 className="text-2xl sm:text-[32px] font-bold text-[#0f172a] mb-4" style={{ fontFamily: 'var(--font-work-sans)', letterSpacing: '-0.01em' }}>What Our Customers Say</h2>
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
            <ReviewsCarousel />
            <div className="text-center mt-8">
              <a href="https://share.google/bejdYHzU10lFRVv4E" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-[#b70011] font-bold text-sm hover:underline">
                View all Google reviews
                <span className="material-symbols-outlined text-[16px]">open_in_new</span>
              </a>
            </div>
          </div>
        </section>

        {/* ── 3. SERVICES */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10 sm:mb-16">
              <span className="text-[#b70011] font-bold uppercase tracking-widest text-sm mb-2 block">What We Do</span>
              <h2 className="text-2xl sm:text-[32px] font-bold text-slate-900 mb-3 leading-tight" style={{ fontFamily: 'var(--font-work-sans)', letterSpacing: '-0.01em' }}>
                Mobile Tyre Services Across Middleton
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto text-base">
                From Manchester New Road and Middleton Way to Manchester Old Road and routes towards the M60, tyre trouble can happen at any point in your journey. Our mobile tyre service brings professional equipment and suitable tyre options directly to your vehicle, helping you avoid driving further on an unsafe tyre.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {[
                { img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Emergency%20Tyre%20Fitting%20one%20Stop-airanko-gsjvsGamoet8drKwCMHYr6LH5Ni6ZI.webp', title: 'Mobile Tyre Fitting', desc: 'Our mobile tyre fitting service gives Middleton drivers a practical alternative to visiting a tyre centre. A technician travels to the vehicle, removes the worn or damaged tyre and fits an appropriate replacement using specialist mobile equipment.', badge: 'TYRE FITTING BROUGHT TO YOUR LOCATION',
                  href: '/mobile-tyre-fitting' },
                { img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Home%20Tyre%20Fitting%20One%20Stop-airanko-kPAsyn08SjxXwLwCVhxre5zM9jWBTs.webp', title: 'Mobile Tyre Replacement', desc: 'If a tyre has suffered severe damage, a blowout or excessive wear, our mobile tyre replacement service allows the replacement tyre to be supplied and fitted where your vehicle is safely parked.', badge: "REPLACEMENT FOR DAMAGED OR WORN TYRES",
                  href: '/home-tyre-fitting' },
                { img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Puncture%20Repair%20One%20Stop-airanko-sfmhLvDbSYmhoMprTVOHCcIWEgJvHf.webp', title: 'Mobile Puncture Repair', desc: 'Some punctures can be professionally repaired rather than requiring a new tyre. Our technician first checks the location and extent of the damage and carries out a repair only where it meets the required safety conditions.', badge: "REPAIR WHEN THE DAMAGE IS SUITABLE",
                  href: '/emergency-puncture-repair' },
                { img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/One%20Stop%20Jumpstart%20image-airanko-cXmOrXcdtaIBMNQOMCIOiPj1C290RG.webp', title: 'Jump Start', desc: 'If battery trouble has stopped the vehicle instead, our mobile technicians can also provide jump-start support across Middleton and surrounding areas.', badge: 'HELP WHEN YOUR BATTERY IS FLAT',
                  href: '/jump-start' },
                { img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Tyre%20pressure%20monitor-airanko-sjz7PL2Pv4N9jlPWtz5Wa1q8XO0FgP.webp', title: 'TPMS Reset', desc: 'If the tyre pressure warning remains active after fitting or repair work, we can inspect and reset the TPMS where required so the monitoring system can continue operating correctly.', badge: 'CHECKING TYRE PRESSURE SYSTEMS',
                  href: '/tpms-reset' },
                { img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Locking%20nut%20removal-airanko%20%281%29-ONBmqaZHMozU0jjrxbPe5J7C4zRQkS.webp', title: 'Locking Nut Removal', desc: 'A damaged locking nut or missing key can stop tyre work from going ahead. Our technicians use specialist removal tools to access the wheel and continue the required work safely.', badge: "SPECIALIST LOCKING NUT REMOVAL",
                  href: '/locking-nut-removal' },
              ].map((card) => (
                <a key={card.title} href={card.href} className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all overflow-hidden border-b-4 border-[#b70011]">
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
                    <span className="absolute top-3 left-3 text-xs font-bold text-white bg-[#b70011] px-3 py-1 rounded-full">{card.badge}</span>
                  </div>
                  <div className="p-5 sm:p-6">
                    <h3 className="text-base sm:text-lg font-semibold mb-2 text-[#0f172a]" style={{ fontFamily: 'var(--font-work-sans)' }}>{card.title}</h3>
                    <p className="text-slate-600 text-base leading-relaxed mb-3">{card.desc}</p>
                    <div className="flex items-center justify-end">
                      <span className="material-symbols-outlined text-slate-400 group-hover:text-[#b70011] group-hover:translate-x-1 transition-all">arrow_forward</span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
            <div className="mt-10 sm:mt-12 bg-[#0f172a] rounded-2xl sm:rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-5 shadow-2xl text-center sm:text-left">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">Need Tyre Help in Middleton?</h3>
                <p className="text-slate-400 text-base">Call or WhatsApp with your vehicle registration, tyre size and exact location. We can check suitable tyre options, confirm the price and provide an estimated arrival time.</p>
              </div>
              <a href="tel:07759708646" className="bg-[#FF4444] text-[#121212] font-black px-8 py-4 rounded-xl text-xl sm:text-2xl hover:scale-105 transition-transform shadow-lg shadow-red-900/20 whitespace-nowrap" style={{ fontFamily: 'var(--font-work-sans)' }}>
                07759 708 646
              </a>
            </div>
          </div>
        </section>

        {/* ── 4. EXPERT SECTION */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
            <div className="w-full lg:w-1/2 relative pb-8 sm:pb-10">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="relative z-10 rounded-2xl sm:rounded-3xl shadow-2xl border-4 sm:border-8 border-slate-50 w-full object-cover" src="/images/tyres-fitting-anywhere.webp" alt="Mobile tyre fitting technician" width={800} height={600} loading="lazy" decoding="async" />
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
              <span className="text-[#b70011] font-bold uppercase tracking-widest text-sm mb-3 block">The Best Choice</span>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl text-[#0f172a] mb-5 sm:mb-8 leading-tight font-bold" style={{ fontFamily: 'var(--font-work-sans)' }}>
                Mobile Tyre Fitting for Middleton&apos;s Manchester Connections
              </h2>
              <p className="text-slate-600 mb-6 sm:mb-8 leading-relaxed text-base sm:text-lg">
                Middleton sits close to Manchester while also connecting drivers towards Oldham, Rochdale, Bury and the wider motorway network. The A664 Manchester New Road provides a direct route towards Manchester, while Middleton Way and Manchester Old Road carry regular local and through traffic across the town. Our mobile car tyre fitting service is designed for drivers who cannot safely continue on a damaged tyre. Instead of asking you to reach a tyre centre first, a technician comes to the vehicle with professional mobile fitting equipment and suitable replacement options. We cover Middleton town centre and nearby areas including Alkrington, Langley, Rhodes and Boarshaw, together with suitable locations around Manchester New Road, Middleton Way and connecting roads. Premium, mid-range and budget tyre choices are available for many common cars. Providing your registration or tyre size before dispatch helps us identify the correct specification and available options.
              </p>
              <ul className="space-y-4 sm:space-y-5">
                <FeatureItem icon="bolt" title="Same Day Mobile Tyre Fitting" desc="If you discover excessive wear or damage and want the tyre dealt with today, our same day mobile tyre fitting service is available for many popular tyre sizes." />
                <FeatureItem icon="engineering" title="Emergency Mobile Tyre Fitting" desc="A sudden blowout, serious cut or rapid loss of pressure can make further driving unsafe. Our emergency mobile tyre fitting service operates throughout the day and night across Middleton." />
                <FeatureItem icon="sell" title="Mobile Tyre Replacement Service" desc="When repair is not suitable, our mobile tyre replacement service brings the required replacement and fitting equipment directly to your vehicle." />
              </ul>
            </div>
          </div>
        </section>

        {/* ── 5. WHY CHOOSE US */}
        <WhyChooseUs
          city="Middleton"
          image="/images/tyre-fitting-in-emergency.webp"
          heading="Why Middleton Drivers Choose One Stop Mobile Tyres 24/7"
          responseTitle="Useful for Local and Manchester-Bound Journeys"
          responseDesc="Middleton drivers regularly travel between the town, Manchester and neighbouring boroughs. Our mobile service gives you a practical option when tyre trouble interrupts any of those journeys."
          callOutTitle="Tyre Choices Before We Set Off"
          callOutDesc="We can discuss premium, mid-range and budget options based on the vehicle and tyre size before dispatch. This helps you understand the available choices rather than making a rushed decision after the technician arrives."
          certifiedTitle="Professional Mobile Fitting Equipment"
          certifiedDesc="Our professional mobile tyre fitters use equipment designed specifically for mobile tyre work, allowing damaged or worn tyres to be replaced properly at a suitable location."
        />

        {/* ── 6. BRAND CAROUSEL */}
        <BrandCarousel />

        {/* ── NEARBY AREAS ───────────────────────────────────── */}
        <NearbyAreas currentSlug="middleton" />

        {/* ── SERVICE AREAS MAP ──────────────────────────────── */}
        <ServiceAreasMap />

        {/* ── 7. FAQ */}
        <CityFaq
          canonical="https://onestoptyres247.co.uk/mobile-tyre-fitting-middleton" city="Middleton" faqs={[
          { q: 'How quickly can you provide mobile tyre fitting in Middleton?', a: 'Our normal response target across Greater Manchester is around 20–30 minutes. The exact arrival time depends on traffic, the required tyre and the location of the nearest available technician.' },
          { q: 'Do you provide 24/7 mobile tyre fitting in Middleton?', a: 'Yes. Our 24/7 mobile tyre fitting service operates day and night, including weekends and bank holidays, subject to tyre and technician availability.' },
          { q: 'Can I arrange same day tyre fitting in Middleton?', a: 'Yes. Same day tyre fitting is available for many common tyre sizes. Send us your vehicle registration or complete tyre size so we can check suitable stock before dispatch.' },
          { q: 'What does your mobile tyre service include?', a: 'Our mobile tyre service can include assessing the tyre problem, removing a damaged or worn tyre, supplying a suitable replacement and carrying out professional fitting at your location.' },
          { q: 'Can you provide mobile tyre replacement in Middleton?', a: 'Yes. If the tyre is badly damaged, excessively worn or unsuitable for repair, we can arrange mobile tyre replacement and fit an appropriate replacement at your vehicle.' },
          { q: 'What is included in a mobile tyre replacement service?', a: 'A mobile tyre replacement service means the replacement tyre and fitting equipment are brought to your vehicle. The unusable tyre is removed and the new tyre is professionally fitted on-site.' },
          { q: 'Do you offer an emergency tyre service in Middleton?', a: 'Yes. Our emergency tyre service operates around the clock for tyre failures that leave your vehicle unsafe or unable to continue normally.' },
          { q: 'Do you provide mobile car tyre fitting for different vehicles?', a: 'Yes. Our mobile car tyre fitting service covers many common makes and models. Providing the vehicle registration helps us identify the appropriate tyre specification before dispatch.' },
          { q: 'Can you help with a flat tyre?', a: 'Yes. We provide flat tyre assistance throughout Middleton. The technician can determine whether the tyre may be repaired or whether replacement is the safer option.' },
          { q: 'Do you cover Manchester New Road?', a: 'Yes. We attend suitable locations around Manchester New Road and the A664, as well as surrounding roads across Middleton.' },
          { q: 'Do you cover Middleton Way and Manchester Old Road?', a: 'Yes. Our mobile tyre coverage includes suitable locations around Middleton Way and Manchester Old Road, subject to safe access and technician availability.' },
          { q: 'Can you help near the M60?', a: 'Yes. Middleton sits close to the M60, and we provide tyre support around roads connecting to the motorway. If the tyre problem happens on the motorway itself, follow motorway safety guidance and move to a safe location wherever possible before arranging assistance.' },
          { q: 'Do you cover Alkrington and Langley?', a: 'Yes. Our Middleton coverage includes Alkrington, Langley and surrounding neighbourhoods, subject to tyre stock and technician availability.' },
          { q: 'Do you cover Rhodes and Boarshaw?', a: 'Yes. We also provide mobile tyre support around Rhodes, Boarshaw and nearby areas across Middleton.' },
          { q: 'Do you provide roadside tyre call-outs around Middleton?', a: 'Yes. Our roadside tyre call-outs cover suitable locations throughout Middleton. Give us your exact position so we can determine the safest way to attend.' },
          { q: 'Can I have a tyre fitted on my drive?', a: 'If there is enough safe working room around the vehicle, having a tyre fitted on your drive may be possible. Tell us how the vehicle is parked when arranging the call-out.' },
          { q: 'How can I arrange fast mobile tyre fitting in Middleton?', a: 'For fast mobile tyre fitting, send us your exact location, vehicle registration and tyre size. Having these details ready helps us identify the required tyre and arrange dispatch efficiently.' },
          { q: 'Why is professional tyre fitting important?', a: 'Professional tyre fitting uses suitable equipment to remove and install tyres correctly and allows the technician to check visible tyre and wheel condition while carrying out the work.' },
          { q: 'Are your technicians professional mobile tyre fitters?', a: 'Yes. Our professional mobile tyre fitters work with many common vehicle types and tyre sizes using equipment designed specifically for mobile tyre fitting.' },
          { q: 'Do you provide a reliable mobile tyre service in Middleton?', a: 'Our reliable mobile tyre service focuses on clear communication, suitable tyre choices and professional fitting where the vehicle is safely positioned.' },
          { q: 'Are trusted mobile tyre fitters available overnight?', a: 'Yes. Our trusted mobile tyre fitters provide emergency support across Middleton overnight as well as during the day, subject to availability.' },
          { q: 'Can you arrange emergency tyre replacement if I am already stranded?', a: 'Yes. Send us your exact location, vehicle registration and tyre size. We can check suitable stock and arrange the most appropriate emergency tyre replacement response.' },
        ]} />

        {/* ── 8. FINAL CTA */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-[#f0edec] relative">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-h2 text-xl sm:text-2xl lg:text-h2 mb-4 sm:mb-5 leading-tight">Need Mobile Tyre Fitting in Middleton Today?</h2>
            <p className="font-body-lg text-base lg:text-lg text-[#5c403c] leading-relaxed mb-6 sm:mb-8">Whether a tyre problem has interrupted a local journey or stopped you while travelling towards Manchester, Oldham or the motorway network, avoid driving further if the tyre is unsafe. Call or WhatsApp One Stop Mobile Tyres 24/7 with your location, registration and tyre size. We will check suitable options and arrange a technician to come to you in Middleton.</p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mt-4 sm:mt-6">
              <a className="flex items-center justify-center gap-2 sm:gap-3 bg-[#dc2626] hover:bg-[#b70011] text-white px-6 sm:px-10 py-4 sm:py-5 rounded-lg font-call-to-action text-base transition-all shadow-xl" href="tel:07759708646">
                <span className="material-symbols-outlined text-xl sm:text-2xl">phone_in_talk</span>
                Call: 07759 708 646
              </a>
              <a className="flex items-center justify-center gap-2 sm:gap-3 bg-[#1c1b1b] hover:bg-slate-800 text-white px-6 sm:px-10 py-4 sm:py-5 rounded-lg font-call-to-action text-base transition-all shadow-xl" href="https://wa.me/447759708646">
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
