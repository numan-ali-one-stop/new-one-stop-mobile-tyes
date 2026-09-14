import JsonLd from '@/components/JsonLd'
import WhyChooseGrid from '@/components/WhyChooseGrid'
import { breadcrumbSchema, serviceSchema, faqSchema, SITE_URL } from '@/lib/schema'
import { buildMetadata } from '@/lib/seo'

export const metadata = buildMetadata({
  title: 'Tyre Puncture Repair in Greater Manchester | 24/7 Service',
  description:
    'Need a tyre puncture repair in Greater Manchester? Get professional puncture repair for cars, slow punctures and emergency tyre problems at a convenient location.',
  path: '/puncture-repair-Greater-manchester',
})

const _breadcrumbSchema = breadcrumbSchema([
  { name: 'Home', item: SITE_URL },
  { name: 'Emergency Puncture Repair', item: `${SITE_URL}/puncture-repair-Greater-manchester` },
])

const _serviceSchema = serviceSchema({
  slug: 'puncture-repair-Greater-manchester',
  name: 'Emergency Mobile Puncture Repair',
  serviceType: 'Emergency Puncture Repair',
  description:
    'Emergency puncture repair across Greater Manchester. A mobile technician inspects the damaged tyre and carries out a professional repair at your location where safe and suitable.',
})

const faqs = [
  { q: 'Can you fix a car tyre puncture?', a: 'Yes. We can inspect a car tyre puncture and determine whether the tyre is suitable for a safe repair.' },
  { q: 'Do you provide tyre puncture repair?', a: 'Yes. We provide tyre puncture repair for suitable punctures after the tyre has been properly inspected.' },
  { q: 'Can you repair a slow tyre puncture?', a: 'Yes. If you have a slow tyre puncture, our technician can inspect the tyre to identify the cause and determine whether a repair is appropriate.' },
  { q: 'Do you provide mobile puncture repair?', a: 'Yes. Our mobile puncture repair service allows us to assess and repair suitable punctures at a convenient location.' },
  { q: 'Do you provide emergency puncture repair?', a: 'Yes. We provide emergency puncture repair for suitable situations, subject to your location and the condition of the tyre.' },
  { q: 'How do I know if my tyre can be repaired?', a: 'The tyre needs to be inspected first. The location and size of the damage, along with the overall condition of the tyre, help determine whether a safe repair is possible.' },
  { q: 'What causes a tyre puncture?', a: 'Punctures can be caused by nails, screws, glass, sharp road debris and other objects that penetrate the tyre.' },
  { q: 'Can you fix a puncture caused by a nail or screw?', a: 'A puncture caused by a nail or screw may be repairable, but the tyre must be inspected to confirm that the damage is suitable for a safe repair.' },
  { q: 'How long does tyre puncture repair take?', a: 'The time depends on the type and location of the damage and the condition of the tyre. Once inspected, the technician can give you a better indication of the time required.' },
  { q: 'Can I drive with a punctured tyre?', a: "Driving on a punctured or significantly underinflated tyre can be unsafe and may cause additional damage. It's best to stop in a safe location and have the tyre assessed." },
  { q: 'What happens if my tyre cannot be repaired?', a: "If the tyre is not suitable for repair, we'll explain why and discuss the appropriate replacement option based on your vehicle and tyre requirements." },
  { q: 'Do you repair punctures at the roadside?', a: 'Yes, where the location is safe and suitable for the work, we can provide mobile tyre puncture repair at a roadside location.' },
  { q: 'Do you cover Greater Manchester?', a: 'Yes. Our Puncture Repair service covers Greater Manchester, including Manchester, Bolton, Bury, Oldham, Rochdale, Stockport, Tameside, Trafford and Wigan.' },
  { q: 'Can a slow puncture be repaired?', a: 'A slow tyre puncture may be repairable if the damage is suitable and the tyre remains in good condition. Our technician will inspect it before recommending a repair.' },
  { q: 'What should I do if I get a puncture while driving?', a: 'Move to a safe location away from traffic where possible, avoid driving on the damaged tyre and contact us with your location and vehicle details for assistance.' },
]

const _faqSchema = faqSchema(faqs)

const whyChooseUs = [
  {
    icon: '🚗',
    title: 'Puncture Assessment',
    desc: 'We inspect the tyre and identify the cause and extent of the damage.',
  },
  {
    icon: '🔧',
    title: 'Safe Repair',
    desc: 'A puncture is repaired only when the tyre is suitable for safe repair.',
  },
  {
    icon: '📍',
    title: 'Convenient Assistance',
    desc: 'Get help at a suitable location instead of arranging a trip to a tyre centre.',
  },
  {
    icon: '⭐',
    title: 'Greater Manchester Coverage',
    desc: 'Our puncture repair service covers locations throughout Greater Manchester.',
  },
]

const whyChoosePunctureRepair = [
  {
    icon: 'fact_check',
    title: 'Professional Assessment',
    desc: 'Every tyre is inspected before we recommend a tyre puncture repair.',
  },
  {
    icon: 'schedule',
    title: 'Convenient Service',
    desc: 'Our mobile puncture repair service allows you to get assistance at a suitable location.',
  },
  {
    icon: 'bolt',
    title: 'Emergency Assistance',
    desc: "If you're stranded with a puncture, our emergency puncture repair service can provide assistance where appropriate.",
  },
  {
    icon: 'build',
    title: 'Repair When Suitable',
    desc: "We don't recommend repairing a tyre when its condition or damage makes repair unsuitable.",
  },
  {
    icon: 'engineering',
    title: 'Experienced Technicians',
    desc: 'Our technicians use professional equipment to inspect and work on suitable punctured tyres.',
  },
  {
    icon: 'location_on',
    title: 'Greater Manchester Service',
    desc: 'We provide Puncture Repair across Greater Manchester, subject to location and accessibility.',
  },
]

const steps = [
  {
    n: '1',
    title: 'Tell Us About the Puncture',
    desc: 'Contact us and provide your vehicle details, location and information about the tyre problem.',
  },
  {
    n: '2',
    title: 'We Assess the Damage',
    desc: 'Our technician inspects the tyre to identify the puncture and assess whether the tyre is suitable for repair.',
  },
  {
    n: '3',
    title: 'Repair the Tyre',
    desc: 'If the damage meets the requirements for a safe repair, the technician carries out the appropriate repair.',
  },
  {
    n: '4',
    title: 'Final Safety Check',
    desc: 'The tyre is checked after the repair before you continue your journey.',
  },
]

export default function PunctureRepairGreaterManchesterPage() {
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
              Professional Tyre Puncture Repair in Greater Manchester
            </h1>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-4">
              Got a punctured tyre? Our <strong>Puncture Repair</strong> service helps drivers get back on the road without the need for an unnecessary garage visit. We provide professional tyre puncture repair for suitable punctures across Greater Manchester, with experienced technicians assessing the damage before carrying out any repair.
            </p>
            <p className="text-slate-400 text-base leading-relaxed mb-8">
              Whether you&apos;ve picked up a nail, screw or another object in your tyre, we&apos;ll inspect the tyre and determine whether it can be safely repaired. For urgent situations, <strong>emergency puncture repair</strong> is also available, subject to your location and the condition of the tyre.
            </p>

            <ul className="space-y-2 mb-8">
              {[
                'Professional Puncture Repair',
                'Tyre Puncture Repair',
                'Emergency Puncture Assistance',
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
              Tyre Puncture Repair That Comes to You
            </h2>
            <p className="text-slate-600 text-base leading-relaxed mb-4">
              A puncture can happen without warning and leave you unable to continue your journey. Our <strong>mobile puncture repair</strong> service is designed to provide a convenient solution by bringing professional assistance to a suitable location.
            </p>
            <p className="text-slate-600 text-base leading-relaxed mb-4">
              Our technician will inspect the tyre to identify the cause and location of the puncture and assess its overall condition. If the damage is suitable for repair, we&apos;ll carry out the required work and check the tyre before you continue your journey.
            </p>
            <p className="text-slate-600 text-base leading-relaxed mb-8">
              One Stop Tyres 247 provides <strong>mobile tyre puncture repair</strong> across Greater Manchester, helping drivers deal with punctures at home, work or a suitable roadside location.
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
        heading="Why Choose Our Puncture Repair Service?"
        intro="When you have a puncture, getting the right solution matters. Our service focuses on properly assessing the tyre before deciding whether a repair is appropriate."
        items={whyChoosePunctureRepair}
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
              How Our Puncture Repair Service Works
            </span>
            <h2
              className="text-2xl sm:text-[32px] font-bold"
              style={{ fontFamily: 'var(--font-work-sans)', letterSpacing: '-0.01em' }}
            >
              How Our Puncture Repair Service Works
            </h2>
            <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto mt-4 leading-relaxed">
              Getting help with a punctured tyre is straightforward. We first assess the tyre and then determine the safest and most appropriate solution.
            </p>
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

      {/* ── 5. SECOND IMAGE STRIP ────────────────────────────────────── */}
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
              Fix Car Tyre Puncture
            </span>
            <h2
              className="text-2xl sm:text-4xl font-bold text-[#0f172a] mb-5 leading-tight"
              style={{ fontFamily: 'var(--font-work-sans)' }}
            >
              Fix Car Tyre Puncture Safely and Professionally
            </h2>
            <p className="text-slate-600 text-base leading-relaxed mb-4">
              A punctured car tyre doesn&apos;t always need to be replaced. In some cases, a suitable puncture can be repaired after a proper inspection. Our technicians assess the damage, tyre condition and location of the puncture before deciding whether a <strong>car tyre puncture repair</strong> is appropriate.
            </p>
            <p className="text-slate-600 text-base leading-relaxed mb-4">
              Common causes include nails, screws, sharp road debris and other objects penetrating the tyre. Continuing to drive on a damaged or underinflated tyre can cause further damage, so getting it checked promptly is important.
            </p>
            <p className="text-slate-600 text-base leading-relaxed mb-6">
              If the tyre cannot be safely repaired, we can explain the available options, including replacement where appropriate.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-3">
              <a
                href="tel:07759708646"
                className="bg-[#FF4444] text-[#121212] font-black px-8 py-4 rounded-xl shadow-2xl shadow-red-900/40 flex items-center justify-center gap-2.5 hover:bg-red-700 hover:text-white transition-all text-base sm:text-lg"
                style={{ fontFamily: 'var(--font-work-sans)' }}
              >
                <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>call</span>
                Call: 07759 708 646
              </a>
              <a
                href="tel:01613995851"
                className="bg-[#FF4444] text-[#121212] font-black px-8 py-4 rounded-xl shadow-2xl shadow-red-900/40 flex items-center justify-center gap-2.5 hover:bg-red-700 hover:text-white transition-all text-base sm:text-lg"
                style={{ fontFamily: 'var(--font-work-sans)' }}
              >
                <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>call</span>
                Call: 0161 399 5851
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

      {/* ── 6. SLOW TYRE PUNCTURE REPAIR ─────────────────────────────── */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mx-auto text-center mb-10 sm:mb-14">
            <span className="text-[#b70011] font-bold uppercase tracking-widest text-sm mb-3 block">
              Don&apos;t Ignore a Slow Leak
            </span>
            <h2
              className="text-2xl sm:text-4xl font-bold text-[#0f172a] mb-5 leading-tight"
              style={{ fontFamily: 'var(--font-work-sans)' }}
            >
              Slow Tyre Puncture Repair
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Not every puncture causes an immediate flat tyre. A slow puncture can gradually reduce your tyre pressure and is easy to overlook until the problem becomes more serious.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {[
              {
                icon: 'tire_repair',
                title: 'Constantly Topping Up?',
                desc: 'Regularly adding air to the same tyre can point to a puncture, valve problem or another issue worth checking.',
              },
              {
                icon: 'search',
                title: 'We Find the Cause',
                desc: "Our technician inspects the tyre to identify the puncture and confirm what's causing the pressure loss.",
              },
              {
                icon: 'build',
                title: 'Repair or Replace',
                desc: 'We repair the tyre where suitable, or advise on replacement if the damage makes repair unsafe.',
              },
            ].map((item) => (
              <div key={item.title} className="bg-slate-50 border border-slate-100 rounded-xl p-5">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mb-3 shadow-sm">
                  <span className="material-symbols-outlined text-[#b70011]" style={{ fontSize: '20px' }}>{item.icon}</span>
                </div>
                <h3 className="font-bold text-[#0f172a] text-base mb-1">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
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
          Need a Tyre Puncture Fixed?
        </h2>
        <p className="text-slate-400 text-base mb-8 max-w-lg mx-auto">
          Don&apos;t let a punctured tyre disrupt your day. Contact us for professional tyre puncture repair across Greater Manchester. We&apos;ll assess the damage and provide the safest suitable solution, whether that means repairing the puncture or recommending a replacement.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          {/* TODO: confirm destination — no quote/contact route has been established sitewide yet (same open question as the home-tyre-fitting page's equivalent CTA) */}
          <a
            href="#TODO-get-puncture-repair-destination"
            className="bg-[#FF4444] text-[#121212] font-black px-10 py-4 rounded-xl shadow-2xl shadow-red-900/40 flex items-center gap-2.5 hover:bg-red-700 hover:text-white transition-all text-lg sm:text-xl"
            style={{ fontFamily: 'var(--font-work-sans)' }}
          >
            Get Puncture Repair
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
