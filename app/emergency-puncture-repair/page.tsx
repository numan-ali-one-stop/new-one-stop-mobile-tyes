import JsonLd from '@/components/JsonLd'
import { breadcrumbSchema, serviceSchema, faqSchema, SITE_URL } from '@/lib/schema'
import { buildMetadata } from '@/lib/seo'

export const metadata = buildMetadata({
  title: 'Emergency Puncture Repair at Your Location',
  description:
    'Emergency mobile and roadside puncture repair across Greater Manchester, with same day and 24-hour assistance available.',
  path: '/emergency-puncture-repair',
})

const _breadcrumbSchema = breadcrumbSchema([
  { name: 'Home', item: SITE_URL },
  { name: 'Emergency Puncture Repair', item: `${SITE_URL}/emergency-puncture-repair` },
])

const _serviceSchema = serviceSchema({
  slug: 'emergency-puncture-repair',
  name: 'Emergency Mobile Puncture Repair',
  serviceType: 'Emergency Puncture Repair',
  description:
    'Emergency puncture repair across Greater Manchester. A mobile technician inspects the damaged tyre and carries out a professional repair at your location where safe and suitable.',
})

const faqs = [
  { q: 'What is emergency puncture repair?', a: 'Emergency puncture repair is a call-out service for drivers dealing with an unexpected punctured or flat tyre. A technician comes to your location, assesses the tyre and repairs it where safe and suitable.' },
  { q: 'Can every tyre puncture be repaired?', a: 'No. Whether a puncture can be repaired depends on factors including the location and extent of the damage and the overall condition of the tyre. The tyre should be inspected before deciding whether repair is appropriate.' },
  { q: 'Do you provide mobile puncture repair?', a: 'Yes. Our mobile puncture repair service brings the required inspection and repair equipment to your vehicle, removing the need to drive on a damaged tyre to reach a garage.' },
  { q: 'Do you offer roadside puncture repair?', a: 'Yes. We provide roadside puncture repair at suitable and safe locations across Greater Manchester. If you are on a motorway or another high-speed road, prioritise reaching a safe location and follow official road-safety guidance.' },
  { q: 'Can you repair a tyre with a nail or screw in it?', a: 'Possibly. A nail or screw in the tread does not automatically mean the tyre needs replacing. The technician needs to inspect the position of the puncture, damage and tyre condition before confirming whether repair is safe.' },
  { q: 'Should I remove a nail from my tyre before you arrive?', a: 'Usually, leave the object in place until the tyre has been professionally inspected. Removing it yourself can cause the tyre to lose pressure more quickly.' },
  { q: 'Can you repair a slow puncture?', a: 'Yes, depending on the cause. Our slow puncture repair service starts by identifying the source of the pressure loss before determining whether the tyre can be safely repaired.' },
  { q: 'Do you offer 24 hour puncture repair?', a: 'Yes. 24 hour puncture repair assistance is available for urgent tyre problems day and night, subject to technician availability.' },
  { q: 'Can I arrange same day puncture repair?', a: 'Yes. Same day puncture repair is available subject to your location and technician availability.' },
  { q: 'What happens if my tyre cannot be repaired?', a: 'If inspection shows that a safe repair is not possible, the technician will explain why and advise on an appropriate replacement tyre rather than attempting an unsuitable repair.' },
  { q: 'Can a tyre be repaired after being driven while flat?', a: 'Driving on a severely underinflated or flat tyre can cause additional internal or structural damage. The tyre needs to be inspected before a technician can determine whether flat tyre repair remains safe.' },
  { q: 'How do you decide whether to repair or replace a punctured tyre?', a: 'The decision is based on the puncture position, extent and type of damage, tyre condition and whether a professional repair can be completed safely. Replacement is recommended when the tyre is not suitable for repair.' },
  { q: 'Can you repair punctures on cars and vans?', a: 'We can assess punctured tyres on many cars, SUVs and light commercial vehicles. Repair depends on the individual tyre, its specification and the damage found during inspection.' },
  { q: 'What information should I send when I need emergency puncture repair?', a: 'Send your exact location, vehicle registration and a brief description of what happened. If possible, also send your tyre size and a clear photo of the affected tyre.' },
]

const _faqSchema = faqSchema(faqs)

const whyChooseUs = [
  {
    icon: '🚗',
    title: 'Fast Puncture Assistance',
    desc: 'A flat tyre can interrupt your journey without warning. Our mobile service is designed to get a technician to your location as quickly as availability and traffic conditions allow.',
  },
  {
    icon: '🔧',
    title: 'Repair Where Safe',
    desc: "We don't automatically replace every punctured tyre. The damage is assessed first, and repair is carried out when the tyre remains suitable for safe professional repair.",
  },
  {
    icon: '📍',
    title: 'Roadside Puncture Repair',
    desc: 'If tyre trouble happens during a journey, our roadside puncture repair service can attend a safe and accessible location to inspect the tyre and determine the right solution.',
  },
  {
    icon: '⭐',
    title: 'Clear Advice Before Any Work',
    desc: "We explain whether the tyre can be repaired and what happens next. If replacement is required, we'll explain the available options before proceeding.",
  },
]

const steps = [
  {
    n: '1',
    title: 'Tell Us What Happened',
    desc: 'Call or WhatsApp with your location, vehicle registration and details of the tyre problem. If you can see a nail or screw, tell us, but avoid removing it yourself.',
  },
  {
    n: '2',
    title: 'We Arrange Assistance',
    desc: 'We check your details and arrange a mobile puncture technician with the equipment needed to assess the damaged tyre.',
  },
  {
    n: '3',
    title: 'Your Tyre Is Inspected',
    desc: 'The technician examines the tyre and puncture to determine whether a safe repair is possible or whether the tyre needs replacing.',
  },
  {
    n: '4',
    title: 'Repair & Final Checks',
    desc: "Where suitable, the puncture is professionally repaired and the tyre is checked before the job is completed. If repair is unsafe, we'll explain the replacement options instead.",
  },
]

export default function EmergencyPunctureRepairPage() {
  return (
    <div className="text-[#1c1b1b]" style={{ fontFamily: 'var(--font-inter)' }}>
      <JsonLd data={_breadcrumbSchema} />
      <JsonLd data={_serviceSchema} />
      <JsonLd data={_faqSchema} />

      {/* ── 1. HERO ──────────────────────────────────────────────────── */}
      <section className="relative min-h-[580px] lg:min-h-[640px] flex items-center overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/tyres-fitting-anywhere.webp"
          alt="Emergency mobile puncture repair service"
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
              Fast Puncture Repair Assistance
            </div>

            <h1
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-white font-black mb-5 leading-[1.1]"
              style={{ fontFamily: 'var(--font-work-sans)', letterSpacing: '-0.02em' }}
            >
              Emergency Puncture Repair at Your Location
            </h1>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-4">
              A sudden puncture can leave your vehicle unsafe to drive, but it does not always mean you need a new tyre. <strong>One Stop Mobile Tyres 24/7</strong> provides <strong>emergency puncture repair</strong> across Greater Manchester, sending a technician to inspect the damaged tyre and determine whether a safe repair is possible.
            </p>
            <p className="text-slate-400 text-base leading-relaxed mb-8">
              If the tyre meets the requirements for repair, we can carry out a professional puncture repair at your location. If the damage, position of the puncture or condition of the tyre makes repair unsafe, we can advise you on the appropriate replacement option.
            </p>

            <ul className="space-y-2 mb-8">
              {[
                'Emergency Mobile Puncture Repair',
                'Roadside Puncture Repair',
                'Same Day & 24 Hour Assistance',
                'Slow & Sudden Puncture Assessment',
                'Repair Where Safe and Suitable',
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
              alt="Fast mobile puncture repairs"
              className="w-full rounded-2xl sm:rounded-3xl shadow-2xl object-cover"
              width={800}
              height={600}
              loading="lazy"
              decoding="async"
            />
          </div>

          <div className="w-full lg:w-1/2">
            <span className="text-[#b70011] font-bold uppercase tracking-widest text-sm mb-3 block">
              Mobile Puncture Repair Specialists
            </span>
            <h2
              className="text-2xl sm:text-4xl font-bold text-[#0f172a] mb-5 leading-tight"
              style={{ fontFamily: 'var(--font-work-sans)' }}
            >
              Professional Mobile Puncture Repair When You Need It
            </h2>
            <p className="text-slate-600 text-base leading-relaxed mb-4">
              Nails, screws and other sharp objects can cause anything from a slow loss of pressure to a completely flat tyre. Our <strong>mobile puncture repair</strong> service brings the inspection and repair equipment to your vehicle, so the tyre can be properly assessed before deciding what it needs.
            </p>
            <p className="text-slate-600 text-base leading-relaxed mb-8">
              Our technician checks the puncture location, visible tyre condition and extent of the damage. Where a <strong>professional puncture repair</strong> can be completed safely, we repair the tyre rather than recommending unnecessary replacement.
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

      {/* ── 3. HOW IT WORKS ──────────────────────────────────────────── */}
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
              How Emergency Puncture Repair Works
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

      {/* ── 4. SECOND IMAGE STRIP ────────────────────────────────────── */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row-reverse gap-12 lg:gap-20 items-center">
          <div className="w-full lg:w-1/2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/tyre-fitting-in-emergency.webp"
              alt="Emergency puncture repair at roadside"
              className="w-full rounded-2xl sm:rounded-3xl shadow-2xl object-cover"
              width={800}
              height={600}
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="w-full lg:w-1/2">
            <span className="text-[#b70011] font-bold uppercase tracking-widest text-sm mb-3 block">
              Repair First Where Appropriate
            </span>
            <h2
              className="text-2xl sm:text-4xl font-bold text-[#0f172a] mb-5 leading-tight"
              style={{ fontFamily: 'var(--font-work-sans)' }}
            >
              Can Your Punctured Tyre Be Safely Repaired?
            </h2>
            <p className="text-slate-600 text-base leading-relaxed mb-6">
              Not every flat tyre needs replacing. A puncture in a repairable area may be suitable for <strong>tyre puncture repair</strong>, provided the tyre itself remains in safe condition. The technician will assess factors such as where the puncture is located, the type and extent of damage, and the overall condition of the tyre. Damage to areas that cannot be safely repaired, serious structural damage or a tyre that has been driven while severely underinflated may mean replacement is the safer option. Our approach is simple: <strong>repair when a proper repair is safe and appropriate; recommend replacement when it isn&apos;t.</strong>
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

      {/* ── HELPFUL GUIDE ────────────────────────────────────────────── */}
      <section className="px-4 sm:px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <a
            href="/guides/how-to-tell-if-your-tyre-can-be-repaired-or-needs-replacing"
            className="group flex items-center justify-between gap-4 bg-slate-50 border border-slate-100 rounded-2xl p-5 sm:p-6 mb-2 hover:border-[#b70011]/30 hover:shadow-md transition-all"
          >
            <div>
              <span className="text-xs font-bold text-[#b70011] uppercase tracking-widest mb-1 block">Not Sure Whether Your Tyre Is Repairable?</span>
              <p className="font-bold text-[#0f172a]">How to Tell If Your Tyre Can Be Repaired or Needs Replacing</p>
              <p className="text-sm text-slate-500">Read our practical guide to puncture location, tyre condition and the factors that determine whether repair or replacement may be appropriate.</p>
            </div>
            <span className="material-symbols-outlined text-slate-400 group-hover:text-[#b70011] group-hover:translate-x-1 transition-all shrink-0">arrow_forward</span>
          </a>
        </div>
      </section>

      {/* ── 5. FAQ ───────────────────────────────────────────────────── */}
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
                <p className="mt-3 sm:mt-4 text-slate-600 leading-relaxed text-base">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. FINAL CTA ─────────────────────────────────────────────── */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 bg-[#0f172a] text-white text-center">
        <h2
          className="text-2xl sm:text-3xl font-bold mb-3"
          style={{ fontFamily: 'var(--font-work-sans)' }}
        >
          Got a Puncture and Need Help?
        </h2>
        <p className="text-slate-400 text-base mb-8 max-w-lg mx-auto">
          Avoid continuing to drive if the tyre is flat or appears unsafe. Call or WhatsApp <strong>One Stop Mobile Tyres 24/7</strong> with your location, vehicle registration and details of the puncture. We&apos;ll arrange <strong>emergency mobile puncture repair</strong> assistance and assess whether your tyre can be professionally repaired or requires replacement. <strong>One Stop Mobile Tyres 24/7</strong> — Alliance Mill, Willow St, Oldham OL1 3QH, United Kingdom
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
