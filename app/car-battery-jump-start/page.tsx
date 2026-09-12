import JsonLd from '@/components/JsonLd'
import WhyChooseGrid from '@/components/WhyChooseGrid'
import { breadcrumbSchema, serviceSchema, faqSchema, SITE_URL } from '@/lib/schema'
import { buildMetadata } from '@/lib/seo'

export const metadata = buildMetadata({
  title: 'Car Battery Jump Start Service | Greater Manchester',
  description:
    "Need a car battery jump start in Greater Manchester? 24/7 jump start service for flat batteries & vehicles that won't start — call 07759 708 646",
  path: '/car-battery-jump-start',
})

const _breadcrumbSchema = breadcrumbSchema([
  { name: 'Home', item: SITE_URL },
  { name: 'Jump Start', item: `${SITE_URL}/car-battery-jump-start` },
])

const _serviceSchema = serviceSchema({
  slug: 'car-battery-jump-start',
  name: 'Jump Start Service',
  serviceType: 'Battery Jump Start',
  description:
    'Professional mobile jump start service across Greater Manchester, bringing suitable jump-start equipment directly to cars, SUVs, vans and light commercial vehicles.',
})

const faqs = [
  {
    q: 'Can you jump start my car?',
    a: 'Yes. We provide a professional **jump start service** for vehicles with a suitable flat or discharged battery.',
  },
  {
    q: 'Do you provide car battery jump starts?',
    a: 'Yes. Our **car battery jump starter** service is available for drivers whose vehicles would not start because of a battery issue.',
  },
  {
    q: 'What is a battery jump start?',
    a: 'A battery jump start uses suitable equipment to provide enough electrical power to start a vehicle when its battery does not have sufficient charge.',
  },
  {
    q: 'Can you help with a flat battery?',
    a: 'Yes. If your car has a **flat battery**, we can assess the situation and determine whether a jump start is suitable.',
  },
  {
    q: 'Do you provide 24/7 jump start service?',
    a: 'Yes. Our jump start assistance is available 24/7 for suitable battery-related emergencies.',
  },
  {
    q: "How does a car battery jump starter work?",
    a: 'A suitable jump starter provides temporary electrical power to help the vehicles battery start the engine.',
  },
  {
    q: 'Can you jump start an automatic car?',
    a: 'Yes. Automatic vehicles can generally be jump started when the battery is discharged, provided the vehicle and battery are suitable for the procedure.',
  },
  {
    q: 'What causes a car battery to go flat?',
    a: 'Common causes include leaving lights or electrical systems switched on, prolonged periods without driving and an ageing or faulty battery.',
  },
  {
    q: 'How long does a battery jump start take?',
    a: 'The actual jump start is usually quick, but the total time depends on the vehicle, battery condition and circumstances at the location.',
  },
  {
    q: 'Can you jump start my car at home?',
    a: 'Yes, where the location is suitable and accessible. You can contact us with your location and battery problem.',
  },
  {
    q: "Can you provide a jump start at the roadside?",
    a: 'Yes. We provide roadside **battery jump start** assistance across Greater Manchester.',
  },
  {
    q: 'Will a jump start fix my flat battery?',
    a: 'A jump start can start the vehicle, but it does not necessarily repair a faulty or ageing battery. If the battery cannot hold charge, further action may be required.',
  },
  {
    q: 'Can you help if my car would not start?',
    a: 'Yes. If you believe the problem is related to a flat or discharged battery, our jump start car service can assess the situation and provide suitable assistance.',
  },
  {
    q: 'Do you provide jump start services across Greater Manchester?',
    a: 'Yes. We provide battery assistance across Greater Manchester, including Manchester and surrounding areas.',
  },
  {
    q: 'Can I drive immediately after a jump start?',
    a: 'If the vehicle starts successfully, the appropriate next step depends on the battery and vehicle condition. If you are unsure, our technician can advise you based on the situation.',
  },
]

const whyChooseCarBatteryJumpStart = [
  {
    icon: 'engineering',
    title: 'Professional Assistance',
    desc: 'Your vehicle and battery are assessed before the jump start.',
  },
  {
    icon: 'schedule',
    title: '24/7 Battery Support',
    desc: 'Assistance is available when unexpected battery problems occur.',
  },
  {
    icon: 'directions_car',
    title: 'Convenient Service',
    desc: "Get help at your location when your car won't start.",
  },
  {
    icon: 'bolt',
    title: 'Suitable Equipment',
    desc: 'A professional battery jump starter is used to assist with starting the vehicle.',
  },
  {
    icon: 'battery_alert',
    title: 'Flat Battery Assistance',
    desc: 'Practical support when a discharged battery leaves you stranded.',
  },
  {
    icon: 'location_on',
    title: 'Greater Manchester Coverage',
    desc: 'Service available across Manchester and surrounding areas.',
  },
]

const steps = [
  {
    n: '1',
    title: 'Contact Us',
    desc: 'Tell us your location and explain that your vehicle has a flat or discharged battery.',
  },
  {
    n: '2',
    title: 'We Assess the Situation',
    desc: 'Our technician checks the vehicle and battery condition to determine whether a jump start is suitable.',
  },
  {
    n: '3',
    title: 'Battery Jump Start',
    desc: 'Suitable equipment is connected correctly to provide the required assistance to start your vehicle.',
  },
  {
    n: '4',
    title: 'Get Back on the Road',
    desc: 'Once the vehicle starts, we will provide basic guidance based on the situation and battery condition.',
  },
]

const _faqSchema = faqSchema(faqs.map((faq) => ({ q: faq.q, a: faq.a.replace(/\*\*/g, '') })))

export default function JumpStartPage() {
  return (
    <div className="text-[#1c1b1b]" style={{ fontFamily: 'var(--font-inter)' }}>
      <JsonLd data={_breadcrumbSchema} />
      <JsonLd data={_serviceSchema} />
      <JsonLd data={_faqSchema} />

      {/* ── 1. HERO ──────────────────────────────────────────────────── */}
      <section className="relative min-h-[580px] lg:min-h-[640px] flex items-center overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/professional-mobile-tyre-fitting.webp"
          alt="One Stop Mobile Tyres 24/7 mobile technician assisting a vehicle"
          className="absolute inset-0 w-full h-full object-cover object-center"
          width={1600}
          height={900}
          decoding="async"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-[#0f172a]/80" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-16 py-20 lg:py-28">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-red-600/20 text-red-400 font-bold px-3.5 py-1.5 rounded-full mb-6 text-[11px] uppercase tracking-widest border border-red-600/30">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
              </span>
              24/7 Battery Assistance
            </div>

            <h1
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-white font-black mb-5 leading-[1.1]"
              style={{ fontFamily: 'var(--font-work-sans)', letterSpacing: '-0.02em' }}
            >
              24/7 Car Battery Jump Start Service in Greater Manchester
            </h1>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-4">
              Got a <strong>flat battery</strong> and unable to start your car? Our professional <strong>jump start service</strong> provides convenient roadside assistance across Greater Manchester, helping you get your vehicle started and back on the road.
            </p>

            <ul className="space-y-2 mb-8">
              {[
                'Professional Car Battery Jump Start',
                '24/7 Battery Assistance',
                'Flat Battery Support',
                'Greater Manchester Coverage',
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-white/90 text-sm sm:text-base font-medium">
                  <span className="text-green-400 text-lg">✓</span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="hidden sm:flex flex-row gap-3">
              <a
                href="tel:07759708646"
                className="bg-[#FF4444] text-[#121212] font-black px-8 py-4 rounded-xl shadow-2xl shadow-red-900/40 flex items-center gap-2.5 hover:bg-red-700 hover:text-white transition-all text-base sm:text-lg"
                style={{ fontFamily: 'var(--font-work-sans)' }}
              >
                <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>call</span>
                Call Now
              </a>
              <a
                href="https://wa.me/447759708646"
                className="bg-[#25D366] hover:bg-[#1ebe5d] text-white font-black px-8 py-4 rounded-xl flex items-center gap-2.5 transition-all text-base sm:text-lg shadow-lg"
                style={{ fontFamily: 'var(--font-work-sans)' }}
              >
                <svg className="w-5 h-5 fill-current flex-shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. IMAGE + TEXT ──────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          <div className="w-full lg:w-1/2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/mobile-tyre-fitting-one-stop-tyres-24-7.webp"
              alt="Mobile technician attending a vehicle callout"
              className="w-full rounded-2xl sm:rounded-3xl shadow-2xl object-cover"
              width={800}
              height={600}
              loading="lazy"
              decoding="async"
            />
          </div>

          <div className="w-full lg:w-1/2">
            <span className="text-[#b70011] font-bold uppercase tracking-widest text-sm mb-3 block">
              Mobile Jump Start Specialists
            </span>
            <h2
              className="text-2xl sm:text-4xl font-bold text-[#0f172a] mb-5 leading-tight"
              style={{ fontFamily: 'var(--font-work-sans)' }}
            >
              Professional Car Battery Jump Start Service Across Greater Manchester
            </h2>
            <p className="text-slate-600 text-base leading-relaxed mb-4">
              A flat or discharged car battery can leave you stranded at home, at work or on the roadside. Our car battery jump starter service provides practical assistance when your vehicle won&apos;t start because of a battery problem.
            </p>
            <p className="text-slate-600 text-base leading-relaxed mb-8">
              One Stop Tyres 247 provides professional battery jump start assistance across Greater Manchester. Our technician assesses the battery and vehicle before carrying out a suitable jump start.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="tel:07759708646"
                className="bg-[#FF4444] text-[#121212] font-black px-8 py-4 rounded-xl shadow-2xl shadow-red-900/40 flex items-center justify-center gap-2.5 hover:bg-red-700 hover:text-white transition-all text-base sm:text-lg"
                style={{ fontFamily: 'var(--font-work-sans)' }}
              >
                <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>call</span>
                Call: 07759 708 646
              </a>
              <a
                href="https://wa.me/447759708646"
                className="bg-[#25D366] hover:bg-[#1ebe5d] text-white font-black px-8 py-4 rounded-xl flex items-center justify-center gap-2.5 transition-all text-base sm:text-lg shadow-lg"
                style={{ fontFamily: 'var(--font-work-sans)' }}
              >
                <svg className="w-5 h-5 fill-current flex-shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. WHY CHOOSE ────────────────────────────────────────────── */}
      <WhyChooseGrid
        heading="Why Choose Our Car Battery Jump Start Service?"
        intro="Choosing the right car battery jump start service means getting fast, professional support when your vehicle won't start. Our team is available across Greater Manchester to help with unexpected battery problems."
        items={whyChooseCarBatteryJumpStart}
      />

      {/* ── 4. HOW IT WORKS ──────────────────────────────────────────── */}
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
              How Our Jump Start Service Works
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative">
            {steps.map((step, idx) => (
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
                  <span className="hidden lg:block absolute top-7 -right-3 text-[#FF4444] material-symbols-outlined text-3xl">
                    trending_flat
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. EMERGENCY BATTERY JUMP START ──────────────────────────── */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-slate-50">
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-14 h-14 bg-[#b70011]/10 rounded-2xl flex items-center justify-center mx-auto mb-5">
            <span className="material-symbols-outlined text-[#b70011] text-3xl">battery_alert</span>
          </div>
          <span className="text-[#b70011] font-bold uppercase tracking-widest text-sm mb-3 block">
            Emergency Battery Jump Start
          </span>
          <h2
            className="text-2xl sm:text-[32px] font-bold text-[#0f172a] mb-6 leading-tight"
            style={{ fontFamily: 'var(--font-work-sans)', letterSpacing: '-0.01em' }}
          >
            Emergency Battery Jump Start When Your Car Won&apos;t Start
          </h2>
          <p className="text-slate-600 text-base leading-relaxed mb-4">
            A flat battery can happen unexpectedly, whether you&apos;ve left your lights on, the vehicle has been unused for some time, or the battery has lost its charge.
          </p>
          <p className="text-slate-600 text-base leading-relaxed mb-8">
            Whether you&apos;re at home, at work or stuck on the roadside, our technician can attend with professional jump start equipment to get you moving again — day or night, across Greater Manchester.
          </p>

          <div className="flex items-start gap-4 text-left bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-sm mb-8">
            <span className="material-symbols-outlined text-[#FF4444] text-2xl flex-shrink-0 mt-0.5">info</span>
            <p className="text-slate-600 text-base leading-relaxed">
              Have your exact location and vehicle registration ready when you contact us — it helps us dispatch the nearest available technician as quickly as possible.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="tel:07759708646"
              className="bg-[#FF4444] text-[#121212] font-black px-8 py-4 rounded-xl shadow-2xl shadow-red-900/20 flex items-center justify-center gap-2.5 hover:bg-red-700 hover:text-white transition-all text-base sm:text-lg"
              style={{ fontFamily: 'var(--font-work-sans)' }}
            >
              <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>call</span>
              Call: 07759 708 646
            </a>
            <a
              href="https://wa.me/447759708646"
              className="bg-[#25D366] hover:bg-[#1ebe5d] text-white font-black px-8 py-4 rounded-xl flex items-center justify-center gap-2.5 transition-all text-base sm:text-lg shadow-lg"
              style={{ fontFamily: 'var(--font-work-sans)' }}
            >
              <svg className="w-5 h-5 fill-current flex-shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* ── 6. SECOND IMAGE STRIP ────────────────────────────────────── */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row-reverse gap-12 lg:gap-20 items-center">
          <div className="w-full lg:w-1/2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/mobile-tyre-fitting-service.webp"
              alt="One Stop Mobile Tyres 24/7 mobile technician on a callout"
              className="w-full rounded-2xl sm:rounded-3xl shadow-2xl object-cover"
              width={800}
              height={600}
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="w-full lg:w-1/2">
            <span className="text-[#b70011] font-bold uppercase tracking-widest text-sm mb-3 block">
              Available 24/7
            </span>
            <h2
              className="text-2xl sm:text-4xl font-bold text-[#0f172a] mb-5 leading-tight"
              style={{ fontFamily: 'var(--font-work-sans)' }}
            >
              Reliable Car Battery Jump Starter Assistance
            </h2>
            <p className="text-slate-600 text-base leading-relaxed mb-6">
              Our <strong>automatic car battery jump starter</strong> and <strong>auto battery jump starter</strong> service is designed to help drivers dealing with a vehicle that won&apos;t start because of a flat or discharged battery.
            </p>
            <p className="text-slate-600 text-base leading-relaxed mb-6">
             A jump start can provide enough power to start the engine when the battery has insufficient charge. However, not every battery problem can be resolved with a jump start.
            </p>
            <p className="text-slate-600 text-base leading-relaxed mb-6">
              Our technician checks the situation first and determines whether a <strong>jump start car service</strong> is appropriate. If the battery appears damaged, faulty or unable to hold charge, we&apos;ll explain what further action may be required.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="tel:07759708646"
                className="bg-[#FF4444] text-[#121212] font-black px-8 py-4 rounded-xl shadow-2xl shadow-red-900/40 flex items-center justify-center gap-2.5 hover:bg-red-700 hover:text-white transition-all text-base sm:text-lg"
                style={{ fontFamily: 'var(--font-work-sans)' }}
              >
                <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>call</span>
                Call: 07759 708 646
              </a>
              <a
                href="https://wa.me/447759708646"
                className="bg-[#25D366] hover:bg-[#1ebe5d] text-white font-black px-8 py-4 rounded-xl flex items-center justify-center gap-2.5 transition-all text-base sm:text-lg shadow-lg"
                style={{ fontFamily: 'var(--font-work-sans)' }}
              >
                <svg className="w-5 h-5 fill-current flex-shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. FAQ ───────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-slate-50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10 sm:mb-16">
            <span className="text-[#b70011] font-bold uppercase tracking-widest text-sm mb-2 block">
              Common Questions
            </span>
            <h2
              className="text-2xl sm:text-[32px] font-bold text-[#0f172a]"
              style={{ fontFamily: 'var(--font-work-sans)', letterSpacing: '-0.01em' }}
            >
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-3 sm:space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="group bg-white p-4 sm:p-6 rounded-xl border border-slate-200 shadow-sm open:shadow-md transition-all"
              >
                <summary className="list-none flex justify-between items-center cursor-pointer font-bold text-base sm:text-lg text-[#0f172a] gap-3">
                  {faq.q}
                  <span className="material-symbols-outlined group-open:rotate-180 transition-transform text-[#b70011] flex-shrink-0 text-xl sm:text-2xl">
                    expand_more
                  </span>
                </summary>
                <p className="mt-3 sm:mt-4 text-slate-600 leading-relaxed text-base">
                  {faq.a.split(/\*\*(.+?)\*\*/g).map((part, i) =>
                    i % 2 === 1 ? <strong key={i}>{part}</strong> : part
                  )}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. FINAL CTA ─────────────────────────────────────────────── */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 bg-[#0f172a] text-white text-center">
        <h2
          className="text-2xl sm:text-3xl font-bold mb-3"
          style={{ fontFamily: 'var(--font-work-sans)' }}
        >
          Need a Car Battery Jump Start?
        </h2>
        <p className="text-slate-400 text-base mb-8 max-w-lg mx-auto">
          Don&apos;t stay stranded with a flat battery. Get professional <strong>jump start service</strong> across Greater Manchester and receive practical assistance when your car won&apos;t start.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="tel:07759708646"
            className="bg-[#FF4444] text-[#121212] font-black px-10 py-4 rounded-xl shadow-2xl shadow-red-900/40 flex items-center gap-2.5 hover:bg-red-700 hover:text-white transition-all text-lg sm:text-xl"
            style={{ fontFamily: 'var(--font-work-sans)' }}
          >
            <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>call</span>
            Call: 07759 708 646
          </a>
          <a
            href="https://wa.me/447759708646"
            className="bg-[#25D366] hover:bg-[#1ebe5d] text-white font-black px-10 py-4 rounded-xl flex items-center gap-2.5 transition-all text-lg sm:text-xl shadow-lg"
            style={{ fontFamily: 'var(--font-work-sans)' }}
          >
            <svg className="w-6 h-6 fill-current flex-shrink-0" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            WhatsApp Us
          </a>
        </div>
      </section>
    </div>
  )
}
