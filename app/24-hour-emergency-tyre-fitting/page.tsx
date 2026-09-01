import JsonLd from '@/components/JsonLd'
import { breadcrumbSchema, serviceSchema, faqSchema, SITE_URL } from '@/lib/schema'
import { buildMetadata } from '@/lib/seo'

export const metadata = buildMetadata({
  title: '24 Hour Emergency Tyre Fitting | Day or Night',
  description:
    'Professional 24 hour emergency tyre fitting across Greater Manchester for blowouts, flat tyres and urgent tyre replacement.',
  path: '/24-hour-emergency-tyre-fitting',
})

const _breadcrumbSchema = breadcrumbSchema([
  { name: 'Home', item: SITE_URL },
  { name: '24 Hour Emergency Tyre Fitting', item: `${SITE_URL}/24-hour-emergency-tyre-fitting` },
])

const _serviceSchema = serviceSchema({
  slug: '24-hour-emergency-tyre-fitting',
  name: '24 Hour Emergency Tyre Fitting',
  serviceType: 'Emergency Tyre Fitting',
  description:
    'Professional 24 hour emergency tyre fitting across Greater Manchester for blowouts, flat tyres and damage that makes a vehicle unsafe to continue.',
})

const faqs = [
  { q: 'Do you provide 24 hour emergency tyre fitting?', a: 'Yes. Our 24 hour emergency tyre fitting service operates throughout the day and night across Greater Manchester, including weekends and bank holidays, subject to technician and tyre availability.' },
  { q: 'How quickly can an emergency tyre fitter reach me?', a: 'Our usual response target is around 20–30 minutes across Greater Manchester. The actual ETA depends on traffic, your location, tyre availability and the nearest available technician.' },
  { q: 'What situations count as an emergency tyre call-out?', a: 'Common emergency situations include a complete flat tyre, blowout, serious sidewall damage, sudden pressure loss or another tyre problem that makes continued driving unsafe.' },
  { q: 'Do you provide emergency mobile tyre fitting at night?', a: 'Yes. Emergency mobile tyre fitting is available overnight as well as during the day. Tell us your location and tyre details so we can check availability.' },
  { q: 'Can you replace a completely flat tyre?', a: 'Yes. If the tyre cannot safely be repaired or used, we can arrange emergency tyre replacement and bring a suitable replacement tyre to your location.' },
  { q: 'Can you help after a tyre blowout?', a: 'Yes. A blowout will normally require the damaged tyre to be replaced. We provide tyre blowout assistance and can bring a suitable replacement where the vehicle is safely accessible.' },
  { q: 'Do you provide roadside tyre replacement?', a: 'Yes. Our roadside tyre replacement service is available at suitable and safe locations across Greater Manchester. If you are on a high-speed road or motorway, prioritise reaching a safe location first.' },
  { q: 'What should I do if my tyre fails on a motorway?', a: 'If your vehicle can still be driven safely, try to reach the next suitable junction, service area or other safe stopping point. If you are stopped in a live lane or cannot reach safety, follow official motorway emergency guidance before arranging tyre work.' },
  { q: 'Do you provide flat tyre assistance?', a: 'Yes. Our flat tyre assistance service covers tyres that have suddenly lost pressure or become unusable. We can assess the problem and determine whether replacement or another appropriate solution is required.' },
  { q: 'What information do you need when I call?', a: 'Send your exact location, vehicle registration and tyre size if known. A photo of the affected tyre can also be useful when assessing what may be required.' },
  { q: 'Do you supply replacement tyres?', a: 'Yes. We can supply premium, mid-range and budget replacement tyres for many common vehicle sizes, subject to current stock.' },
  { q: 'Do you offer late night tyre fitting?', a: "Yes. Late night tyre fitting is part of our 24-hour emergency service. Call or WhatsApp with your details and we'll check the nearest available technician." },
  { q: 'Can you replace more than one tyre during an emergency call-out?', a: 'Yes, subject to tyre stock and your vehicle requirements. Tell us how many tyres you need when booking so we can check availability before dispatch.' },
  { q: 'What vehicles do you provide emergency tyre fitting for?', a: 'We provide emergency tyre assistance for many cars, SUVs, vans and light commercial vehicles. Send us your registration so we can check the appropriate tyre specification.' },
  { q: 'Can you repair a puncture during an emergency call-out?', a: 'Where the tyre remains suitable for a safe professional repair, puncture repair may be possible. For detailed puncture-specific service information, our dedicated Emergency Puncture Repair service covers this in greater depth.' },
  { q: 'Is emergency tyre fitting available on weekends and bank holidays?', a: 'Yes. Our 24 hour emergency tyre service operates seven days a week, including weekends and bank holidays, subject to availability.' },
  { q: 'Do I need to know my tyre size?', a: 'No. Your vehicle registration can help us identify the likely tyre specification. We may also ask you to confirm the size printed on the tyre sidewall.' },
  { q: 'Can you help if my tyre will not hold pressure?', a: 'Yes. Sudden or repeated pressure loss can be caused by several tyre or wheel issues. If the tyre is unsafe to continue on, we can arrange urgent tyre replacement.' },
  { q: 'Can you attend business or commercial vehicles?', a: 'We can assist many vans, company cars and light commercial vehicles with urgent tyre problems. Provide the vehicle registration and tyre details when contacting us.' },
  { q: 'Is emergency mobile tyre fitting more expensive than normal fitting?', a: 'Emergency pricing can differ depending on the time, location, tyre required and call-out circumstances. We confirm the expected price before dispatch so you know what to expect.' },
]

const _faqSchema = faqSchema(faqs)

const whyChooseUs = [
  {
    icon: '🚗',
    title: 'Available 24 Hours',
    desc: 'Our 24 hour mobile tyre fitting service operates day and night, including weekends and bank holidays, subject to technician and tyre availability.',
  },
  {
    icon: '⚡',
    title: 'Fast Emergency Response',
    desc: 'Our usual Greater Manchester response target is 20–30 minutes. Traffic, location, tyre stock and current demand can affect the actual arrival time.',
  },
  {
    icon: '🔧',
    title: 'Fully Equipped Mobile Service',
    desc: 'Our technicians bring specialist tyre-fitting equipment directly to your vehicle, allowing many emergency replacements to be completed without a separate garage visit.',
  },
  {
    icon: '⭐',
    title: 'Clear Pricing Before Dispatch',
    desc: "Give us your registration or tyre size and we'll explain suitable tyre options and the expected price before sending the technician.",
  },
]

const steps = [
  {
    n: '1',
    title: 'Tell Us What Happened',
    desc: 'Call or WhatsApp with your exact location, vehicle registration and tyre size if available. Let us know whether the tyre is flat, blown out, damaged or losing pressure.',
  },
  {
    n: '2',
    title: 'We Check & Dispatch',
    desc: 'We check suitable tyre availability and arrange the nearest appropriate technician for your emergency tyre call out.',
  },
  {
    n: '3',
    title: 'Technician Assesses the Tyre',
    desc: 'The technician inspects the tyre and visible wheel condition to determine whether replacement is required or another safe solution is appropriate.',
  },
  {
    n: '4',
    title: 'Tyre Fitted & Final Checks Completed',
    desc: 'Where replacement is required, the new tyre is professionally fitted, balanced where needed and checked before you continue your journey.',
  },
]

export default function EmergencyTyreFitting24HourPage() {
  return (
    <div className="text-[#1c1b1b]" style={{ fontFamily: 'var(--font-inter)' }}>
      <JsonLd data={_breadcrumbSchema} />
      <JsonLd data={_serviceSchema} />
      <JsonLd data={_faqSchema} />

      {/* ── 1. HERO ──────────────────────────────────────────────────── */}
      <section className="relative min-h-[580px] lg:min-h-[640px] flex items-center overflow-hidden">
        {/* Background image */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/tyre-fitting-in-emergency.webp"
          alt="24 hour emergency tyre fitting"
          className="absolute inset-0 w-full h-full object-cover object-center"
          width={1600}
          height={900}
          decoding="async"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#0f172a]/80" />

        {/* Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-16 py-20 lg:py-28">
          <div className="max-w-2xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-red-600/20 text-red-400 font-bold px-3.5 py-1.5 rounded-full mb-6 text-[11px] uppercase tracking-widest border border-red-600/30">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
              </span>
              Emergency Tyre Support Day &amp; Night
            </div>

            <h1
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-white font-black mb-5 leading-[1.1]"
              style={{ fontFamily: 'var(--font-work-sans)', letterSpacing: '-0.02em' }}
            >
              24 Hour Emergency Tyre Fitting – Fast Help Day or Night
            </h1>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-4">
              A tyre failure can stop your journey without warning, especially when garages are closed. <strong>One Stop Mobile Tyres 24/7</strong> provides professional <strong>24 hour emergency tyre fitting</strong> across Greater Manchester for drivers dealing with blowouts, flat tyres and damage that makes the vehicle unsafe to continue.
            </p>
            <p className="text-slate-400 text-base leading-relaxed mb-8">
              Tell us your location, vehicle registration and tyre size if known. We can check a suitable replacement, confirm pricing and arrange an <strong>emergency tyre fitter</strong> to attend your location.
            </p>

            {/* Checklist */}
            <ul className="space-y-2 mb-8">
              {[
                '24 Hour Emergency Mobile Tyre Fitting',
                'Urgent Tyre Replacement Day or Night',
                '20–30 Minute Response Target',
                'Premium, Mid-Range & Budget Tyres',
                'Cars, SUVs, Vans & Light Commercial Vehicles',
                'Clear Pricing Before Dispatch',
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-white/90 text-sm sm:text-base font-medium">
                  <span className="text-green-400 text-lg">✓</span>
                  {item}
                </li>
              ))}
            </ul>

            {/* Desktop CTAs only */}
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
          {/* Image */}
          <div className="w-full lg:w-1/2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/mobile-tyre-fitting-one-stop-tyres-24-7.webp"
              alt="24 hour mobile tyre experts"
              className="w-full rounded-2xl sm:rounded-3xl shadow-2xl object-cover"
              width={800}
              height={600}
              loading="lazy"
              decoding="async"
            />
          </div>

          {/* Text */}
          <div className="w-full lg:w-1/2">
            <span className="text-[#b70011] font-bold uppercase tracking-widest text-sm mb-3 block">
              Trusted Emergency Tyre Service
            </span>
            <h2
              className="text-2xl sm:text-4xl font-bold text-[#0f172a] mb-5 leading-tight"
              style={{ fontFamily: 'var(--font-work-sans)' }}
            >
              Emergency Mobile Tyre Fitters Available 24/7
            </h2>
            <p className="text-slate-600 text-base leading-relaxed mb-4">
              When a tyre fails unexpectedly, waiting until the next morning may not be practical. Our <strong>emergency mobile tyre fitting</strong> service is designed for urgent situations where a damaged, blown or completely flat tyre prevents you from continuing safely.
            </p>
            <p className="text-slate-600 text-base leading-relaxed mb-8">
              Our technicians arrive with professional fitting equipment and suitable tyre options for many common vehicles. Whether you need an <strong>urgent tyre replacement</strong>, assistance after a blowout or help with a tyre that will no longer hold pressure, we can assess the problem and provide the appropriate solution.
            </p>

            {/* Why Choose Us grid */}
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
              How It Works
            </span>
            <h2
              className="text-2xl sm:text-[32px] font-bold"
              style={{ fontFamily: 'var(--font-work-sans)', letterSpacing: '-0.01em' }}
            >
              Simple Emergency Tyre Call-Out Process
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
              src="/images/tyre-fitting-at-home.webp"
              alt="Mobile tyre fitting at home"
              className="w-full rounded-2xl sm:rounded-3xl shadow-2xl object-cover"
              width={800}
              height={600}
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="w-full lg:w-1/2">
            <span className="text-[#b70011] font-bold uppercase tracking-widest text-sm mb-3 block">
              Ready to Help
            </span>
            <h2
              className="text-2xl sm:text-4xl font-bold text-[#0f172a] mb-5 leading-tight"
              style={{ fontFamily: 'var(--font-work-sans)' }}
            >
              Emergency Tyre Assistance Whenever You Need It
            </h2>
            <p className="text-slate-600 text-base leading-relaxed mb-6">
              Tyre problems do not follow normal opening hours. A blowout after a late shift, a flat tyre before an early journey or unexpected damage during the weekend can all leave you unable to continue. Our <strong>24/7 tyre fitting</strong> service provides urgent tyre assistance across Greater Manchester when you need professional help outside normal garage hours. Send us your location, vehicle registration and tyre size and we&apos;ll check the appropriate tyre and arrange an available technician.
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
          Need an Emergency Tyre Fitter Right Now?
        </h2>
        <p className="text-slate-400 text-base mb-8 max-w-lg mx-auto">
          If a flat tyre, blowout or serious tyre damage has stopped your journey, avoid continuing if the vehicle is unsafe. Call or WhatsApp <strong>One Stop Mobile Tyres 24/7</strong> with your location, vehicle registration and tyre size. We&apos;ll check a suitable replacement and arrange the appropriate <strong>emergency tyre fitting</strong> response. <strong>One Stop Mobile Tyres 24/7</strong> — Alliance Mill, Willow St, Oldham OL1 3QH, United Kingdom — <strong>07759 708 646</strong>
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
