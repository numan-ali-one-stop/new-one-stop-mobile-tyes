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
  slug: 'mobile-tyre-fitting-farnworth',
  name: 'Mobile Tyre Fitting in Farnworth',
  serviceType: 'Mobile Tyre Fitting',
  areaServed: { '@type': 'City', name: 'Farnworth' },
})

export const metadata = {
  title: 'Mobile Tyre Fitting in Farnworth | One Stop Mobile Tyres 24/7',
  description:
    'Professional mobile tyre fitting across Farnworth, with same day fitting and 24/7 emergency tyre assistance at your location.',
  alternates: { canonical: 'https://onestoptyres247.co.uk/mobile-tyre-fitting-farnworth' },
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

export default function FarnworthPage() {
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
              Mobile Tyre Fitting Farnworth – Fast 24/7 Help at Your Location
            </h1>
            <p className="text-white/80 text-base leading-relaxed mb-6">
              Tyre problem in Farnworth? One Stop Mobile Tyres 24/7 sends a fully equipped technician to your vehicle for fast mobile tyre fitting, whether you are caught out during a local journey, heading towards Bolton or stopped near one of Farnworth&apos;s main routes.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 mb-6">
              {[
                '20–30 Minute Response Across Farnworth',
                'Same Day Mobile Tyre Fitting Available',
                '24/7 Emergency Tyre Assistance',
                'Premium, Mid-Range & Budget Tyres',
                'Card, Cash & Contactless Payments Accepted',
                'Fully Insured Professional Mobile Tyre Fitters',
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
              <span className="text-white/60 text-xs font-medium">Rated By Drivers Across Farnworth &amp; Greater Manchester</span>
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
                Mobile Tyre Services Across Farnworth
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto text-base">
                From Market Street and the town centre to the A666 and roads towards Kearsley, tyre trouble can interrupt any journey. Our mobile tyre service brings professional fitting equipment and suitable tyre options directly to your vehicle, so an unsafe tyre does not need to be driven to a garage.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {[
                { img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Emergency%20Tyre%20Fitting%20one%20Stop-airanko-gsjvsGamoet8drKwCMHYr6LH5Ni6ZI.webp', title: 'Mobile Tyre Fitting', desc: 'Our mobile tyre fitting service makes replacing a worn or damaged tyre simpler. A technician travels to your location with the required equipment, removes the affected tyre and professionally fits the replacement on-site.', badge: 'TYRE HELP BROUGHT TO YOU',
                  href: '/mobile-tyre-fitting' },
                { img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Home%20Tyre%20Fitting%20One%20Stop-airanko-kPAsyn08SjxXwLwCVhxre5zM9jWBTs.webp', title: 'Mobile Tyre Replacement', desc: 'Some tyres are too badly worn, split or damaged to remain in use. Our mobile tyre replacement service allows a suitable tyre to be supplied and fitted where your vehicle is safely parked.', badge: "WHEN REPAIR ISN'T AN OPTION",
                  href: '/home-tyre-fitting' },
                { img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Puncture%20Repair%20One%20Stop-airanko-sfmhLvDbSYmhoMprTVOHCcIWEgJvHf.webp', title: 'Mobile Puncture Repair', desc: 'If your tyre has picked up a nail, screw or other puncture, we first assess whether the damage is safe to repair. Where suitable, the repair can be completed without replacing an otherwise usable tyre.', badge: 'DEALING WITH PUNCTURES PROPERLY',
                  href: '/emergency-puncture-repair' },
                { img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/One%20Stop%20Jumpstart%20image-airanko-cXmOrXcdtaIBMNQOMCIOiPj1C290RG.webp', title: 'Jump Start', desc: 'If your journey has stopped because the battery is flat rather than the tyre, our mobile technicians can also provide jump-start support across Farnworth.', badge: 'BATTERY PROBLEM AS WELL?',
                  href: '/jump-start' },
                { img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Tyre%20pressure%20monitor-airanko-sjz7PL2Pv4N9jlPWtz5Wa1q8XO0FgP.webp', title: 'TPMS Reset', desc: 'A tyre pressure warning can remain after fitting or repair work. Where required, we can check and reset the TPMS so the vehicle can continue monitoring tyre pressures correctly.', badge: 'CLEARING TYRE PRESSURE WARNINGS',
                  href: '/tpms-reset' },
                { img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Locking%20nut%20removal-airanko%20%281%29-ONBmqaZHMozU0jjrxbPe5J7C4zRQkS.webp', title: 'Locking Nut Removal', desc: 'A missing key or damaged locking wheel nut can prevent normal tyre removal. Our technicians carry specialist tools to deal with troublesome locking nuts and access the wheel safely.', badge: 'REMOVING DIFFICULT LOCKING NUTS',
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
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">Need a Mobile Tyre Fitter in Farnworth?</h3>
                <p className="text-slate-400 text-base">Tell us your vehicle registration, tyre size and location. We can check available tyre choices, confirm the cost and provide an estimated arrival time.</p>
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
                Tyre Fitting That Works Around Your Journey
              </h2>
              <p className="text-slate-600 mb-6 sm:mb-8 leading-relaxed text-base sm:text-lg">
                Farnworth is closely connected with Bolton and Manchester, with local traffic moving through the town centre and along routes towards Kearsley, Little Lever and surrounding areas. When a tyre becomes unsafe, continuing the journey just to find a garage is rarely the best option. Our mobile car tyre fitting service allows the work to take place at the vehicle. We carry professional mobile equipment and can source premium, mid-range and budget tyres for many common cars and tyre sizes. Coverage includes Farnworth town centre, areas around Market Street and Peel Street, residential neighbourhoods and suitable locations towards Kearsley, Moses Gate and nearby parts of south Bolton. Whether the problem develops before your journey or brings it to an unexpected stop, we can arrange the appropriate tyre support without adding another unnecessary trip.
              </p>
              <ul className="space-y-4 sm:space-y-5">
                <FeatureItem icon="bolt" title="Same Day Mobile Tyre Fitting" desc="If you notice a damaged or heavily worn tyre and need it resolved before the day is over, our same day mobile tyre fitting service is available for many common tyre sizes." />
                <FeatureItem icon="engineering" title="Emergency Mobile Tyre Fitting" desc="A sudden tyre failure can make the vehicle unsafe to continue. Our emergency mobile tyre fitting service operates day and night for urgent problems across Farnworth." />
                <FeatureItem icon="sell" title="Mobile Tyre Replacement Service" desc="Our mobile tyre replacement service is suitable when the existing tyre cannot safely remain in use. We bring an appropriate replacement to the vehicle and complete the fitting on-site." />
              </ul>
            </div>
          </div>
        </section>

        {/* ── 5. WHY CHOOSE US */}
        <WhyChooseUs
          city="Farnworth"
          image="/images/tyre-fitting-in-emergency.webp"
          heading="Why Farnworth Drivers Choose One Stop Mobile Tyres 24/7"
          responseTitle="No Need to Risk Driving on the Tyre"
          responseDesc="A damaged tyre can become worse when driven on. We bring the equipment to your vehicle instead, allowing the problem to be handled at a suitable location without an unnecessary journey to a tyre centre."
          callOutTitle="Tyres for Different Needs and Budgets"
          callOutDesc="We can offer premium, mid-range and budget options depending on your vehicle and stock availability. Suitable choices can be discussed before dispatch, helping you decide what works best for you."
          certifiedTitle="Proper Equipment, Professional Fitting"
          certifiedDesc="Our professional mobile tyre fitters use specialist mobile machinery rather than relying on temporary solutions. Each job is focused on fitting the tyre correctly and preparing the vehicle to return safely to the road."
        />

        {/* ── 6. BRAND CAROUSEL */}
        <BrandCarousel />

        {/* ── NEARBY AREAS ───────────────────────────────────── */}
        <NearbyAreas currentSlug="farnworth" />

        {/* ── SERVICE AREAS MAP ──────────────────────────────── */}
        <ServiceAreasMap />

        {/* ── 7. FAQ */}
        <CityFaq
          canonical="https://onestoptyres247.co.uk/mobile-tyre-fitting-farnworth" city="Farnworth" faqs={[
          { q: 'How quickly can you reach Farnworth?', a: 'Our normal response target across Greater Manchester is around 20–30 minutes. Your exact ETA depends on traffic, the nearest available technician and whether the required tyre is immediately available.' },
          { q: 'Do you provide 24/7 mobile tyre fitting in Farnworth?', a: 'Yes. Our 24/7 mobile tyre fitting service operates day and night, including weekends and bank holidays. Contact us with your tyre details and location so we can check availability.' },
          { q: 'Can I arrange same day tyre fitting in Farnworth?', a: 'Yes. Same day tyre fitting is available for many popular tyre sizes. Providing your registration or complete tyre size helps us confirm stock before sending a technician.' },
          { q: 'What does your mobile tyre service include?', a: 'Our mobile tyre service can include checking the tyre problem, removing an unusable tyre, supplying a suitable replacement and carrying out professional fitting at your location.' },
          { q: 'Can you provide emergency tyre replacement?', a: 'Yes. Where a tyre has suffered serious damage or cannot be safely repaired, we can arrange emergency tyre replacement and bring an appropriate replacement to your vehicle.' },
          { q: 'Do you offer an emergency tyre service after normal garage hours?', a: 'Yes. Our emergency tyre service is available around the clock. This is useful when a tyre failure leaves you unable to continue safely during the evening, overnight or early morning.' },
          { q: 'Do you provide mobile car tyre fitting for different makes and models?', a: 'Yes. Our mobile car tyre fitting service covers a wide range of common vehicles. Send us your registration or tyre size so we can identify suitable tyre options before dispatch.' },
          { q: 'Can you attend Farnworth town centre?', a: 'Yes. We cover suitable locations throughout Farnworth town centre, including areas around Market Street, Peel Street and surrounding streets where there is enough safe working space.' },
          { q: 'Do you cover the A666 near Farnworth and Kearsley?', a: 'Yes. We provide roadside tyre call-outs around Farnworth and routes towards Kearsley, including suitable locations near the A666. Always move the vehicle to the safest available position before requesting assistance.' },
          { q: 'Can you help around Moses Gate and Kearsley?', a: 'Yes. Our coverage includes Farnworth and neighbouring areas such as Moses Gate and Kearsley, subject to tyre stock and technician availability.' },
          { q: 'What happens if my punctured tyre cannot be repaired?', a: 'If inspection shows that the damage falls outside a safely repairable area or the tyre is otherwise unsuitable for repair, we can recommend and arrange a mobile tyre replacement.' },
          { q: 'Can I have a tyre fitted on my drive?', a: 'If the vehicle has enough safe space around it for the technician and equipment, having a tyre fitted on your drive may be possible. Let us know how the vehicle is parked when arranging the call-out.' },
          { q: 'How can I arrange fast mobile tyre fitting in Farnworth?', a: 'For fast mobile tyre fitting, send your exact location, vehicle registration and tyre size when contacting us. These details help us identify the required tyre before dispatch.' },
          { q: 'Why should I use professional tyre fitting?', a: 'Professional tyre fitting uses suitable equipment to remove and install tyres correctly. It also allows the technician to inspect the visible condition of the tyre and wheel while completing the work.' },
          { q: 'Are your technicians professional mobile tyre fitters?', a: 'Yes. Our professional mobile tyre fitters work with a wide variety of tyre sizes and common vehicle types using equipment designed specifically for mobile fitting.' },
          { q: 'Do you provide a reliable mobile tyre service across Farnworth?', a: "Yes. Our reliable mobile tyre service focuses on clear information before dispatch, appropriate tyre choices and professional fitting at the vehicle's location." },
          { q: 'Are trusted mobile tyre fitters available overnight?', a: 'Our trusted mobile tyre fitters provide emergency coverage throughout the night, subject to technician and tyre availability. Call with your location and tyre details so we can check the quickest option.' },
          { q: 'Can you help if I am stranded with a flat tyre?', a: 'Yes. If your vehicle cannot continue safely, send us your exact position and tyre details. We can arrange appropriate flat tyre assistance, whether the situation requires repair or replacement.' },
        ]} />

        {/* ── 8. FINAL CTA */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-[#f0edec] relative">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-h2 text-xl sm:text-2xl lg:text-h2 mb-4 sm:mb-5 leading-tight">Need Mobile Tyre Fitting in Farnworth Today?</h2>
            <p className="font-body-lg text-base lg:text-lg text-[#5c403c] leading-relaxed mb-6 sm:mb-8">A worn, punctured or damaged tyre does not have to mean driving around Farnworth looking for an open garage. Call or WhatsApp One Stop Mobile Tyres 24/7 with your location, vehicle registration and tyre size. We will check suitable options and arrange a mobile technician to come to you.</p>
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
