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
  slug: 'mobile-tyre-fitting-prestwich',
  name: 'Mobile Tyre Fitting in Prestwich',
  serviceType: 'Mobile Tyre Fitting',
  areaServed: { '@type': 'City', name: 'Prestwich' },
})

export const metadata = {
  title: 'Mobile Tyre Fitting Prestwich – 24/7 Help Where You Are',
  description:
    'Tyre trouble in Prestwich? One Stop Mobile Tyres 24/7 sends a mobile tyre technician directly to your location, day or night.',
  alternates: { canonical: 'https://onestoptyres247.co.uk/mobile-tyre-fitting-prestwich' },
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

export default function PrestwichPage() {
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
              Mobile Tyre Fitting Prestwich – 24/7 Help Where You Are
            </h1>
            <p className="text-white/80 text-base leading-relaxed mb-6">
              Tyre trouble in Prestwich does not need to mean finding a garage or arranging vehicle recovery. One Stop Mobile Tyres 24/7 sends a mobile tyre technician directly to your location, with same day and emergency support available around the clock.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 mb-6">
              {[
                '20–30 Minute Response Across Prestwich',
                'Same Day Mobile Tyre Fitting Available',
                'Emergency Mobile Tyre Fitting Day & Night',
                'Premium, Mid-Range & Budget Tyres Available',
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
              <span className="text-white/60 text-xs font-medium">Rated By Drivers Across Prestwich &amp; Greater Manchester</span>
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
                Mobile Tyre Services for Prestwich Drivers
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto text-base">
                From daily journeys along Bury New Road to trips around Prestwich Village and the M60, tyre damage can happen at an awkward time and in an awkward place. Our mobile tyre service removes the need to take an unsafe vehicle to a tyre centre. Our technicians travel throughout Prestwich with mobile fitting equipment and a choice of replacement tyres. Whether the problem is a worn tyre, sudden blowout, puncture or another wheel-related issue, we can assess the situation at your location and provide the appropriate service.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {[
                { img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Emergency%20Tyre%20Fitting%20one%20Stop-airanko-gsjvsGamoet8drKwCMHYr6LH5Ni6ZI.webp', title: 'Mobile Tyre Fitting', desc: 'Our mobile tyre fitting service brings the equipment and replacement tyre directly to your vehicle. We assist drivers across Prestwich with worn, damaged and unusable tyres without requiring a separate garage appointment.', badge: 'TYRES FITTED WHERE YOU ARE',
                  href: '/mobile-tyre-fitting' },
                { img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Home%20Tyre%20Fitting%20One%20Stop-airanko-kPAsyn08SjxXwLwCVhxre5zM9jWBTs.webp', title: 'Mobile Tyre Replacement', desc: 'When a tyre is no longer suitable for continued use, our mobile tyre replacement service allows you to have a suitable replacement supplied and fitted on-site. We offer tyre choices for different vehicles and budgets.', badge: 'REPLACEMENT WITHOUT THE GARAGE TRIP',
                  href: '/home-tyre-fitting' },
                { img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Puncture%20Repair%20One%20Stop-airanko-sfmhLvDbSYmhoMprTVOHCcIWEgJvHf.webp', title: 'Mobile Puncture Repair', desc: 'Some punctures can be repaired safely rather than requiring a new tyre. Our technicians inspect the damaged area first and carry out an appropriate repair where the tyre meets the required safety conditions.', badge: 'SAVE THE TYRE WHERE POSSIBLE',
                  href: '/emergency-puncture-repair' },
                { img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/One%20Stop%20Jumpstart%20image-airanko-cXmOrXcdtaIBMNQOMCIOiPj1C290RG.webp', title: 'Jump Start', desc: 'A flat battery can stop your journey just as quickly as damaged tyres. Our mobile team can provide jump-start assistance across Prestwich when your vehicle has enough battery-related trouble to leave you unable to continue.', badge: 'BATTERY SUPPORT ON THE ROAD',
                  href: '/jump-start' },
                { img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Tyre%20pressure%20monitor-airanko-sjz7PL2Pv4N9jlPWtz5Wa1q8XO0FgP.webp', title: 'TPMS Reset', desc: 'If your tyre pressure warning remains active after tyre work, our technicians can check and reset the TPMS where required, helping the vehicle continue monitoring tyre pressures correctly.', badge: 'PRESSURE SYSTEM SUPPORT',
                  href: '/tpms-reset' },
                { img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Locking%20nut%20removal-airanko%20%281%29-ONBmqaZHMozU0jjrxbPe5J7C4zRQkS.webp', title: 'Locking Nut Removal', desc: 'Lost the locking wheel nut key or dealing with a damaged locking nut? Specialist tools allow our technicians to remove difficult wheel nuts and gain access to the tyre for fitting or repair.', badge: 'HELP WITH STUBBORN LOCKING NUTS',
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
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">Tyre Problem in Prestwich?</h3>
                <p className="text-slate-400 text-base">Send us your vehicle registration, tyre size and exact location. We can check suitable tyre options and give you an expected arrival time before dispatch.</p>
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
              <span className="text-[#b70011] font-bold uppercase tracking-widest text-sm mb-3 block">Mobile Tyre Fitting Designed Around Prestwich Journeys</span>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl text-[#0f172a] mb-5 sm:mb-8 leading-tight font-bold" style={{ fontFamily: 'var(--font-work-sans)' }}>
                Mobile Tyre Fitting Designed Around Prestwich Journeys
              </h2>
              <p className="text-slate-600 mb-6 sm:mb-8 leading-relaxed text-base sm:text-lg">
                Prestwich sits on one of the main routes between Bury and Manchester, with local traffic moving through residential streets, shopping areas and busy routes such as Bury New Road and the M60. A tyre problem here can affect everything from a short local journey to a longer commute into Manchester.
                Our service is built around bringing the tyre solution to the vehicle. A mobile car tyre fitting technician arrives with professional equipment, removes the damaged or worn tyre and fits the suitable replacement without you needing to drive the vehicle elsewhere.
                We cover Prestwich Village, Sedgley Park, areas around Heaton Park, Simister and surrounding neighbourhoods. We also attend suitable locations close to the main routes running through and around Prestwich.
                Drivers can choose from premium, mid-range and budget tyre options depending on availability, vehicle requirements and price preference. Before the technician travels, we can discuss the tyre required so you know what options are available.
              </p>
              <ul className="space-y-4 sm:space-y-5">
                <FeatureItem icon="bolt" title="Same Day Mobile Tyre Fitting" desc="If you notice excessive wear, sidewall damage or another tyre problem and want it dealt with today, our same day mobile tyre fitting service gives you a practical alternative to waiting for a garage appointment." />
                <FeatureItem icon="engineering" title="Emergency Mobile Tyre Fitting" desc="A blowout or badly damaged tyre can make the vehicle unsafe to move. Our emergency mobile tyre fitting team is available around the clock to assist drivers who need urgent tyre support in Prestwich." />
                <FeatureItem icon="sell" title="Mobile Tyre Replacement" desc="For tyres that cannot be safely repaired or continued on, we provide mobile tyre replacement at your location. The technician can supply and professionally fit a suitable tyre before completing the necessary checks." />
              </ul>
              <h3 className="text-xl sm:text-2xl text-[#0f172a] mt-8 mb-5 font-bold" style={{ fontFamily: 'var(--font-work-sans)' }}>Practical Tyre Support, Day or Night</h3>
              <ul className="space-y-4 sm:space-y-5">
                <FeatureItem icon="schedule" title="24/7 Mobile Tyre Fitting" desc="Tyre problems do not follow normal opening hours. Our 24/7 mobile tyre fitting service operates through evenings, overnight, weekends and bank holidays, subject to tyre and technician availability." />
                <FeatureItem icon="emergency" title="Emergency Tyre Replacement" desc="If impact damage, a blowout or severe tyre failure leaves the vehicle unable to continue safely, we can arrange an emergency tyre replacement rather than leaving you to find an open tyre centre." />
                <FeatureItem icon="road" title="Roadside Tyre Call-Outs" desc="Our roadside tyre call-outs cover suitable locations around Prestwich. If you are stopped near a busy road, tell us exactly where the vehicle is so the technician can plan the safest way to attend." />
              </ul>
            </div>
          </div>
        </section>

        {/* ── 5. WHY CHOOSE US */}
        <WhyChooseUs
          city="Prestwich"
          image="/images/tyre-fitting-in-emergency.webp"
          heading="Why Prestwich Drivers Choose One Stop Mobile Tyres 24/7"
          responseTitle="A Mobile Service That Fits Around the Problem"
          responseDesc="You should not have to drive on a damaged tyre simply to reach a garage. Our technicians travel to the vehicle, bringing the fitting equipment and tyre needed to deal with the problem where it has happened."
          callOutTitle="Choice Before We Fit"
          callOutDesc="Different drivers have different priorities. Some want a premium tyre that matches an existing set, while others need a dependable mid-range or budget option. We discuss available choices before dispatch so you can make an informed decision."
          certifiedTitle="Professional Fitting from Experienced Technicians"
          certifiedDesc="Our professional mobile tyre fitters are equipped to work with a wide range of cars and tyre sizes. The focus is on correct fitting, safe working practices and getting the vehicle ready to return to the road."
        />

        {/* ── 6. BRAND CAROUSEL */}
        <BrandCarousel />

        {/* ── NEARBY AREAS ───────────────────────────────────── */}
        <NearbyAreas currentSlug="prestwich" />

        {/* ── SERVICE AREAS MAP ──────────────────────────────── */}
        <ServiceAreasMap />

        {/* ── 7. FAQ */}
        <CityFaq
          canonical="https://onestoptyres247.co.uk/mobile-tyre-fitting-prestwich" city="Prestwich" faqs={[
          { q: 'How quickly can you provide mobile tyre fitting in Prestwich?', a: 'Our usual response target across Greater Manchester is around 20–30 minutes, although the exact arrival time depends on traffic, technician location and tyre availability. We will give you an expected arrival time when you book.' },
          { q: 'Do you provide 24 hour mobile tyre fitting in Prestwich?', a: 'Yes. Our 24 hour mobile tyre fitting service operates day and night across Prestwich. This includes evenings, weekends and overnight emergency call-outs when a suitable technician and tyre are available.' },
          { q: 'Can I book same day tyre fitting in Prestwich?', a: 'Yes. Same day tyre fitting is available for many common tyre sizes. Send us your registration or tyre size and we can check availability before arranging the technician.' },
          { q: 'What does your mobile tyre service include?', a: 'Our mobile tyre service can include inspecting the tyre, removing the worn or damaged tyre, fitting a suitable replacement and carrying out the relevant checks before you continue your journey.' },
          { q: 'Can you help if I suddenly get a flat tyre?', a: "Yes. We provide flat tyre assistance across Prestwich. Depending on the tyre's condition, the technician can determine whether repair is suitable or whether replacement is the safer option." },
          { q: 'Do you offer an emergency tyre service in Prestwich?', a: 'Yes. Our emergency tyre service is intended for situations where tyre damage has left you unable to continue safely. Tell us your location and tyre details so we can arrange the appropriate response.' },
          { q: 'Can you provide mobile car tyre fitting for different vehicles?', a: 'Yes. Our mobile car tyre fitting service covers many common makes and models. Providing the vehicle registration or full tyre size helps us identify the correct specification before dispatch.' },
          { q: 'Can you fit a tyre if mine is badly damaged?', a: 'Yes. Where the existing tyre is unsafe or beyond repair, our technicians can carry out a mobile tyre replacement using an appropriate tyre for the vehicle.' },
          { q: 'What is included in a mobile tyre replacement service?', a: 'A mobile tyre replacement service means we bring the required tyre and fitting equipment to your vehicle, remove the unusable tyre and install the replacement at the location where the vehicle is safely parked.' },
          { q: 'Can you attend near the M60 around Prestwich?', a: 'Yes. Prestwich has direct access to the M60 around Junction 17. If you have a tyre problem near the motorway, give us your exact location. For motorway incidents, always move to a safe place where possible and follow motorway safety guidance before arranging assistance.' },
          { q: 'Do you cover Bury New Road and Prestwich Village?', a: 'Yes. We provide mobile tyre support across Prestwich, including areas around Bury New Road, Prestwich Village, Sedgley Park and nearby residential neighbourhoods.' },
          { q: 'Are professional tyre fitters better for replacement tyres?', a: 'Using professional tyre fitting means the tyre is removed and fitted with the appropriate equipment rather than relying on a temporary roadside solution. It also allows the fitter to check for obvious wheel or tyre issues during the job.' },
          { q: 'How do I arrange fast mobile tyre fitting?', a: 'For fast mobile tyre fitting, have your exact location, vehicle registration and tyre size ready when you call or message us. This helps us identify a suitable tyre before sending the technician.' },
          { q: 'Are you a reliable mobile tyre service for Prestwich?', a: 'Our reliable mobile tyre service combines 24/7 availability, clear communication and professional on-site fitting. We aim to confirm the tyre, price and expected arrival information before dispatch.' },
          { q: 'Do you have trusted mobile tyre fitters covering Prestwich?', a: 'Yes. Our trusted mobile tyre fitters serve Prestwich as part of our Greater Manchester coverage, assisting with scheduled fitting, same-day requirements and emergency tyre problems.' },
          { q: 'Can I have a tyre fitted on my drive in Prestwich?', a: 'Where there is enough safe working space around the vehicle, having a tyre fitted on your drive can be possible. Tell us about the parking position when booking so we can confirm whether the technician can work there safely.' },
        ]} />

        {/* ── 8. FINAL CTA */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-[#f0edec] relative">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-h2 text-xl sm:text-2xl lg:text-h2 mb-4 sm:mb-5 leading-tight">Need Mobile Tyre Fitting in Prestwich Today?</h2>
            <p className="font-body-lg text-base lg:text-lg text-[#5c403c] leading-relaxed mb-6 sm:mb-8">A damaged tyre does not have to interrupt the rest of your day. Tell One Stop Mobile Tyres 24/7 where you are, what vehicle you drive and which tyre needs attention. We will check the required tyre, explain the available options and arrange a technician to come to your location in Prestwich.</p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mt-4 sm:mt-6">
              <a className="flex items-center justify-center gap-2 sm:gap-3 bg-[#dc2626] hover:bg-[#b70011] text-white px-6 sm:px-10 py-4 sm:py-5 rounded-lg font-call-to-action text-base transition-all shadow-xl" href="tel:07759708646">
                <span className="material-symbols-outlined text-xl sm:text-2xl">phone_in_talk</span>
                07759 708 646
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
