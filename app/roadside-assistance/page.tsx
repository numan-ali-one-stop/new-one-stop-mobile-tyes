import JsonLd from '@/components/JsonLd'
import WhyChooseGrid from '@/components/WhyChooseGrid'
import { breadcrumbSchema, serviceSchema, faqSchema, SITE_URL } from '@/lib/schema'
import { buildMetadata } from '@/lib/seo'

export const metadata = buildMetadata({
  title: 'Roadside Assistance in Greater Manchester | 24/7 Service',
  description:
    'Need roadside assistance in Greater Manchester? Get 24/7 emergency roadside support for tyre and vehicle problems across Manchester and surrounding areas.',
  path: '/roadside-assistance',
})

const _breadcrumbSchema = breadcrumbSchema([
  { name: 'Home', item: SITE_URL },
  { name: 'Roadside Assistance', item: `${SITE_URL}/roadside-assistance` },
])

const _serviceSchema = serviceSchema({
  slug: 'roadside-assistance',
  name: 'Roadside Assistance',
  serviceType: 'Roadside Assistance',
  description:
    'Need roadside assistance in Greater Manchester? Get 24/7 emergency roadside support for tyre and vehicle problems across Manchester and surrounding areas.',
})

const faqs = [
  { q: 'What does roadside assistance include?', a: 'Roadside assistance provides practical help when your vehicle develops a problem that prevents you from continuing your journey safely.' },
  { q: 'Do you provide 24/7 roadside assistance?', a: 'Yes. Our roadside assistance service is available 24/7 for drivers who need emergency support.' },
  { q: 'Do you provide emergency roadside assistance?', a: 'Yes. We provide an emergency roadside assistance service for suitable roadside problems across Greater Manchester.' },
  { q: 'What types of problems can roadside assistance help with?', a: 'This depends on the situation. We can assess common tyre-related and suitable roadside problems and advise you on the safest solution.' },
  { q: 'Can you help with a flat tyre?', a: 'Yes. We can assess a flat or damaged tyre and determine whether repair, replacement or other suitable assistance is required.' },
  { q: 'Do you provide roadside assistance for tyre problems?', a: 'Yes. Tyre-related roadside problems are one of the situations our technicians can assess and assist with where suitable.' },
  { q: 'Can you provide roadside assistance at night?', a: 'Yes. Our roadside assistance services are available 24/7, including during evenings and overnight.' },
  { q: 'How quickly can roadside assistance arrive?', a: "Arrival time depends on your location, traffic and current demand. We'll provide an estimated arrival time when you contact us." },
  { q: 'Do you provide roadside assistance across Greater Manchester?', a: 'Yes. We provide roadside assistance across Greater Manchester, including Manchester and surrounding areas.' },
  { q: 'Can you help if my car has broken down?', a: "We can assess your situation and determine what roadside assistance is suitable based on the vehicle's condition and the problem you're experiencing." },
  { q: 'Can you provide roadside assistance on motorways?', a: 'We can assist in suitable locations around major Greater Manchester routes. For motorway incidents, your safety should always come first and you should follow the relevant motorway safety procedures.' },
  { q: 'Do I need to provide my location when booking?', a: 'Yes. Your current location helps us determine where assistance is required and provide an appropriate response.' },
  { q: 'Can roadside assistance fix my vehicle at the roadside?', a: 'If the problem can be safely resolved at the roadside, our technician will provide suitable assistance. More serious problems may require further repair.' },
  { q: 'Is roadside assistance available for emergencies?', a: 'Yes. Emergency roadside support is available 24/7 for suitable situations.' },
  { q: 'How do I book roadside assistance?', a: "Contact One Stop Tyres 247 with your location and details of the problem. We'll assess your situation and advise you on the next steps." },
]

const _faqSchema = faqSchema(faqs)

const whyChooseUs = [
  {
    icon: '⚡',
    title: 'Emergency Assistance',
    desc: 'Get professional roadside support when an unexpected vehicle problem leaves you stranded.',
  },
  {
    icon: '🔧',
    title: 'Tyre-Related Assistance',
    desc: 'Help with common tyre problems that may prevent you from continuing your journey safely.',
  },
  {
    icon: '📍',
    title: 'Convenient Roadside Support',
    desc: 'Our service comes to your location, helping you avoid the hassle of finding immediate assistance.',
  },
  {
    icon: '⭐',
    title: 'Greater Manchester Coverage',
    desc: 'Roadside assistance is available across Manchester and surrounding areas.',
  },
]

const whyChooseRoadsideAssistance = [
  {
    icon: 'schedule',
    title: '24/7 Assistance',
    desc: 'Get roadside support when unexpected problems occur.',
  },
  {
    icon: 'engineering',
    title: 'Professional Support',
    desc: 'Our technicians assess the situation before carrying out suitable assistance.',
  },
  {
    icon: 'bolt',
    title: 'Emergency Roadside Assistance',
    desc: 'Practical help when you are unable to continue your journey safely.',
  },
  {
    icon: 'directions_car',
    title: 'Convenient Service',
    desc: 'Assistance is provided at your location where possible.',
  },
  {
    icon: 'tire_repair',
    title: 'Tyre Problem Assistance',
    desc: 'Support for suitable tyre-related roadside problems.',
  },
  {
    icon: 'location_on',
    title: 'Greater Manchester Service',
    desc: 'Coverage across Manchester and surrounding areas.',
  },
]

const steps = [
  {
    n: '1',
    title: 'Contact Us',
    desc: "Tell us where you are and explain the problem you're experiencing with your vehicle.",
  },
  {
    n: '2',
    title: 'We Assess the Situation',
    desc: 'Our team gathers the relevant details to understand the issue and determine the appropriate assistance.',
  },
  {
    n: '3',
    title: 'Assistance at Your Location',
    desc: 'A technician attends your location and assesses the vehicle or tyre problem.',
  },
  {
    n: '4',
    title: 'Get Back on the Road',
    desc: "Where possible, we resolve the issue so you can continue your journey safely. If the problem requires further attention, we'll explain the next suitable option.",
  },
]

const coverageAreas = [
  { name: 'Manchester', slug: 'manchester' },
  { name: 'Bolton', slug: 'bolton' },
  { name: 'Bury', slug: 'bury' },
  { name: 'Oldham', slug: 'oldham' },
  { name: 'Rochdale', slug: 'rochdale' },
  { name: 'Stockport', slug: 'stockport' },
  { name: 'Tameside', slug: 'tameside' },
  { name: 'Trafford', slug: 'trafford' },
  { name: 'Wigan', slug: 'wigan' },
]

export default function RoadsideAssistancePage() {
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
          alt="Roadside assistance service"
          className="absolute inset-0 w-full h-full object-cover object-center"
          width={1600}
          height={900}
          decoding="async"
        />
        <div className="absolute inset-0 bg-[#0f172a]/80" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-16 py-20 lg:py-28">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-red-600/20 text-red-400 font-bold px-3.5 py-1.5 rounded-full mb-6 text-[11px] uppercase tracking-widest border border-red-600/30">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
              </span>
              Roadside Assistance
            </div>

            <h1
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-white font-black mb-5 leading-[1.1]"
              style={{ fontFamily: 'var(--font-work-sans)', letterSpacing: '-0.02em' }}
            >
              24/7 Roadside Assistance in Greater Manchester
            </h1>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8">
              When your vehicle breaks down or you face an unexpected problem on the road, our <strong>roadside assistance</strong> service provides professional help at a convenient location across Greater Manchester. We provide <strong>emergency roadside assistance</strong> service for drivers who need reliable support to get back on the road safely.
            </p>

            <ul className="space-y-2 mb-8">
              {[
                '24/7 Roadside Assistance',
                'Emergency Roadside Support',
                'Professional Breakdown Assistance',
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

      {/* ── 2. RELIABLE ROADSIDE ASSISTANCE (IMAGE + TEXT) ─────────────── */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          <div className="w-full lg:w-1/2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/mobile-tyre-fitting-one-stop-tyres-24-7.webp"
              alt="Roadside assistance technician"
              className="w-full rounded-2xl sm:rounded-3xl shadow-2xl object-cover"
              width={800}
              height={600}
              loading="lazy"
              decoding="async"
            />
          </div>

          <div className="w-full lg:w-1/2">
            <span className="text-[#b70011] font-bold uppercase tracking-widest text-sm mb-3 block">
              Roadside Assistance Specialists
            </span>
            <h2
              className="text-2xl sm:text-4xl font-bold text-[#0f172a] mb-5 leading-tight"
              style={{ fontFamily: 'var(--font-work-sans)' }}
            >
              Professional Roadside Assistance Across Greater Manchester
            </h2>
            <p className="text-slate-600 text-base leading-relaxed mb-4">
              A vehicle breakdown can happen at any time, whether you&apos;re travelling to work, heading home or driving on a major route. Our <strong>roadside assistance</strong> services are designed to provide practical help when you need it most.
            </p>
            <p className="text-slate-600 text-base leading-relaxed mb-8">
              One Stop Tyres 247 provides <strong>roadside support</strong> across Greater Manchester, helping drivers deal with common vehicle and tyre-related problems. Our technicians assess the situation and provide the most suitable assistance based on the condition of your vehicle.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {whyChooseUs.map((item) => (
                <div key={item.title} className="bg-slate-50 border border-slate-100 rounded-xl p-4">
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <h3 className="font-bold text-[#0f172a] text-base mb-1">{item.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. WHY CHOOSE ────────────────────────────────────────────── */}
      <WhyChooseGrid
        heading="Why Choose Our Roadside Assistance Service?"
        intro="Choosing the right roadside assistance service means getting fast, professional support when you need it most. Our team is available across Greater Manchester to help with unexpected vehicle and tyre problems."
        items={whyChooseRoadsideAssistance}
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
              How Our Roadside Assistance Service Works
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
                {idx < steps.length - 1 && (
                  <span className="hidden lg:block absolute top-7 -right-3 text-[#FF4444] material-symbols-outlined text-3xl">
                    trending_flat
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. EMERGENCY ROADSIDE ASSISTANCE (SECOND IMAGE STRIP) ──────── */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row-reverse gap-12 lg:gap-20 items-center">
          <div className="w-full lg:w-1/2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/tyre-fitting-in-emergency.webp"
              alt="Emergency roadside assistance"
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
              Emergency Roadside Assistance When You Need Help
            </h2>
            <p className="text-slate-600 text-base leading-relaxed mb-4">
              Vehicle problems can happen without warning. A flat tyre, damaged tyre or unexpected vehicle issue can leave you unable to continue your journey.
            </p>
            <p className="text-slate-600 text-base leading-relaxed mb-4">
              Our <strong>emergency roadside assistance</strong> service is designed to provide practical support when you are stuck at the roadside. We assess the situation and determine what assistance is suitable based on the condition of your vehicle.
            </p>
            <p className="text-slate-600 text-base leading-relaxed mb-6">
              If the issue can be safely resolved at the roadside, our technician will provide the appropriate assistance. If further repairs are required, we&apos;ll explain the situation and the available options.
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

      {/* ── 6. COVERAGE AREAS ───────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mx-auto text-center mb-10 sm:mb-14">
            <span className="text-[#b70011] font-bold uppercase tracking-widest text-sm mb-3 block">
              Service Area Coverage
            </span>
            <h2
              className="text-2xl sm:text-4xl font-bold text-[#0f172a] mb-5 leading-tight"
              style={{ fontFamily: 'var(--font-work-sans)' }}
            >
              Roadside Assistance Across Greater Manchester
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Our roadside assistance services are available across Greater Manchester, helping drivers who experience unexpected problems while travelling.
            </p>
          </div>

          <p className="text-center text-[#0f172a] font-semibold mb-5">We cover areas including:</p>

          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto mb-10">
            {coverageAreas.map((area) => (
              <a
                key={area.slug}
                href={`/mobile-tyre-fitting-${area.slug}`}
                className="inline-flex items-center gap-1.5 bg-slate-50 hover:bg-[#b70011] hover:text-white text-[#0f172a] font-semibold text-sm px-4 py-2.5 rounded-full border border-slate-200 hover:border-[#b70011] transition-colors"
              >
                {area.name}
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </a>
            ))}
          </div>

          <p className="text-slate-600 text-base leading-relaxed max-w-2xl mx-auto text-center">
            Assistance is also available around major routes including the M60, M61, M62, M56, M602, M66, M67 and A627, subject to location and service requirements.
          </p>
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
            {faqs.map((faq, i) => (
              <details
                key={`${faq.q}-${i}`}
                className="group bg-white p-4 sm:p-6 rounded-xl border border-slate-200 shadow-sm open:shadow-md transition-all"
              >
                <summary className="list-none flex justify-between items-center cursor-pointer font-bold text-base sm:text-lg text-[#0f172a] gap-3">
                  {faq.q}
                  <span className="material-symbols-outlined group-open:rotate-180 transition-transform text-[#b70011] flex-shrink-0 text-xl sm:text-2xl">
                    expand_more
                  </span>
                </summary>
                <p className="mt-3 sm:mt-4 text-slate-600 leading-relaxed text-base">{faq.a}</p>
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
          Need Emergency Roadside Assistance?
        </h2>
        <p className="text-slate-400 text-base mb-8 max-w-lg mx-auto">
          Don&apos;t stay stranded when you need help. Our roadside assistance service provides professional support across Greater Manchester, helping you deal with unexpected vehicle and tyre problems.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="/contact"
            className="bg-[#FF4444] text-[#121212] font-black px-10 py-4 rounded-xl shadow-2xl shadow-red-900/40 flex items-center gap-2.5 hover:bg-red-700 hover:text-white transition-all text-lg sm:text-xl"
            style={{ fontFamily: 'var(--font-work-sans)' }}
          >
            Get Roadside Assistance
          </a>
          <a
            href="tel:07759708646"
            className="bg-white/10 border border-white/20 text-white font-black px-10 py-4 rounded-xl flex items-center gap-2.5 hover:bg-white/20 transition-all text-lg sm:text-xl"
            style={{ fontFamily: 'var(--font-work-sans)' }}
          >
            Call Now
          </a>
        </div>
      </section>
    </div>
  )
}
