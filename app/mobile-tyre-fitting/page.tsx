import JsonLd from '@/components/JsonLd'
import WhyChooseGrid from '@/components/WhyChooseGrid'
import { breadcrumbSchema, serviceSchema, faqSchema, SITE_URL } from '@/lib/schema'
import { buildMetadata } from '@/lib/seo'

export const metadata = buildMetadata({
  title: 'Mobile Tyre Fitting Greater Manchester | 24/7 Service',
  description:
    'Need mobile tyre fitting in Greater Manchester? Get professional mobile tyre replacement, repair and emergency tyre fitting at your location.',
  path: '/mobile-tyre-fitting',
})

const _breadcrumbSchema = breadcrumbSchema([
  { name: 'Home', item: SITE_URL },
  { name: 'Mobile Tyre Fitting', item: `${SITE_URL}/mobile-tyre-fitting` },
])

const _serviceSchema = serviceSchema({
  slug: 'mobile-tyre-fitting',
  name: 'Mobile Tyre Fitting',
  serviceType: 'Mobile Tyre Fitting',
  description:
    'Professional mobile tyre fitting across Greater Manchester. We supply and fit premium, mid-range and budget tyres for cars, SUVs, vans and light commercial vehicles at your location.',
})

const faqs = [
  { q: 'What is mobile tyre fitting?', a: 'Mobile tyre fitting is a service where a tyre fitter comes to your location to replace and fit tyres on your vehicle, rather than requiring you to visit a tyre centre.' },
  { q: 'Where can mobile tyres be fitted?', a: 'Tyres can usually be fitted at a suitable location such as your home, workplace or another accessible and safe location.' },
  { q: 'How does mobile tyre fitting work?', a: 'You provide your vehicle or tyre details and location. A mobile tyre fitter then brings the required tyres and equipment to complete the fitting at your chosen location.' },
  { q: 'Do you provide mobile tyre replacement?', a: 'Yes. Our mobile tyre replacement service allows you to have worn or damaged tyres replaced without travelling to a tyre centre.' },
  { q: 'Can you provide emergency mobile tyre fitting?', a: 'Yes. Emergency mobile tyre fitting is available for urgent situations where you need a replacement tyre and cannot continue your journey safely.' },
  { q: 'Do you provide mobile tyre repair?', a: 'Yes. We can inspect a damaged or punctured tyre and determine whether a safe mobile tyre repair is possible. If the tyre cannot be safely repaired, replacement may be recommended.' },
  { q: 'Can you fit tyres to cars, SUVs and vans?', a: 'Yes. Our mobile car tyre fitters can provide tyre fitting for a range of cars, SUVs and vans, subject to tyre availability and vehicle requirements.' },
  { q: 'How long does mobile tyre fitting take?', a: 'The time required depends on the number of tyres being fitted, the vehicle and the work involved. Once we know your requirements, we can give you a better estimate.' },
  { q: 'Can I have my tyres fitted at home?', a: 'Yes. Mobile tyre fitting can be arranged at home where there is a suitable and safe location for the work to be completed.' },
  { q: 'Can you fit tyres at my workplace?', a: 'Yes. We can arrange tyre fitting mobile at a workplace where there is sufficient safe and accessible space.' },
  { q: 'Do you provide emergency tyre replacement?', a: 'Yes. We provide emergency tyre replacement when a suitable replacement tyre is available and the location is suitable for the work.' },
  { q: 'How do I book a mobile tyre fitter?', a: 'Contact us with your vehicle registration or tyre details, your location and the tyres you require. We can then confirm the available options and arrange the fitting.' },
  { q: 'Can you replace just one tyre?', a: 'Yes, where appropriate. Our technician can assess the tyre requirements of your vehicle and advise whether replacing one tyre is suitable.' },
  { q: 'Do you check the tyres after fitting?', a: 'Yes. After fitting, the technician checks the installation and tyre pressure to help ensure everything is ready before you continue your journey.' },
  { q: 'Why choose a mobile tyre fitting service?', a: 'A mobile tyre fitting service saves you the time and inconvenience of travelling to a tyre centre. You can arrange professional tyre fitting at a suitable location while your vehicle remains where it is.' },
]

const _faqSchema = faqSchema(faqs)

const whyChooseUs = [
  {
    icon: '🚐',
    title: 'Convenient Fitting',
    desc: 'Get your tyres fitted at a suitable location without visiting a garage.',
  },
  {
    icon: '⚡',
    title: 'Professional Equipment',
    desc: 'Our technicians use appropriate equipment to complete tyre fitting safely and correctly.',
  },
  {
    icon: '💷',
    title: 'Suitable Tyre Options',
    desc: 'We help you choose suitable replacement tyres based on your vehicle and requirements.',
  },
  {
    icon: '⭐',
    title: 'Experienced Fitters',
    desc: 'Our experienced technicians provide professional tyre fitting for different types of vehicles.',
  },
]

const whyChooseMobileFitting = [
  {
    icon: 'engineering',
    title: 'Experienced Mobile Tyre Fitters',
    desc: 'Our technicians have the skills and equipment to handle mobile tyre fitting for cars, SUVs and vans.',
  },
  {
    icon: 'schedule',
    title: 'Convenient Tyre Fitting',
    desc: 'Our tyre fitting mobile service saves you the time and inconvenience of visiting a tyre centre.',
  },
  {
    icon: 'tire_repair',
    title: 'Professional Tyre Replacement',
    desc: 'We provide mobile tyre replacement using suitable tyres for your vehicle and requirements.',
  },
  {
    icon: 'bolt',
    title: 'Emergency Assistance Available',
    desc: 'If you have an unexpected tyre problem, emergency mobile tyre fitting and emergency tyre replacement can help you get back on the road.',
  },
  {
    icon: 'build',
    title: 'Repair When Suitable',
    desc: 'Our technicians can assess damaged tyres and provide mobile tyre repair or emergency tyre repair where a safe repair is possible.',
  },
  {
    icon: 'directions_car',
    title: 'Service for Different Vehicles',
    desc: 'Our mobile car tyre fitters can assist with tyre fitting for cars, SUVs and vans, subject to tyre availability.',
  },
]

const steps = [
  {
    n: '1',
    title: 'Tell Us Your Tyre Details',
    desc: 'Provide your vehicle registration or tyre size and let us know which tyres you need.',
  },
  {
    n: '2',
    title: 'Choose a Suitable Location',
    desc: 'Tell us where you would like the tyre fitting carried out, such as your home or workplace.',
  },
  {
    n: '3',
    title: 'We Bring the Tyres',
    desc: 'Our mobile tyre fitter arrives with the required tyres and professional fitting equipment.',
  },
  {
    n: '4',
    title: 'Tyres Are Fitted',
    desc: 'The technician removes the old tyres, fits the replacement tyres and checks the installation before completing the job.',
  },
]

export default function MobileTyreFittingPage() {
  return (
    <div className="text-[#1c1b1b]" style={{ fontFamily: 'var(--font-inter)' }}>
      <JsonLd data={_breadcrumbSchema} />
      <JsonLd data={_serviceSchema} />
      <JsonLd data={_faqSchema} />

      {/* ── 1. HERO ──────────────────────────────────────────────────── */}
      <section className="relative min-h-[580px] lg:min-h-[640px] flex items-center overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/mobile-tyre-fitting-one-stop-tyres-24-7.webp"
          alt="Mobile tyre fitting service"
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
              Professional Mobile Tyre Service
            </div>

            <h1
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-white font-black mb-5 leading-[1.1]"
              style={{ fontFamily: 'var(--font-work-sans)', letterSpacing: '-0.02em' }}
            >
              Professional Mobile Tyre Fitting in Greater Manchester
            </h1>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-4">
              Need new tyres without visiting a garage? Our <strong>mobile tyre fitting</strong> service brings professional tyre fitting directly to your location across Greater Manchester. Our experienced mobile tyre fitters can replace tyres at your home, workplace or another suitable location, helping you save time and avoid unnecessary disruption.
            </p>
            <p className="text-slate-400 text-base leading-relaxed mb-8">
              From planned <strong>mobile tyre replacement</strong> to emergency mobile tyre fitting, we provide a convenient tyre fitting solution when you need it. Our technicians can also assess tyre problems and provide mobile tyre repair where a safe repair is possible.
            </p>

            <ul className="space-y-2 mb-8">
              {[
                'Professional mobile tyre fitting',
                'Experienced mobile tyre fitters',
                'Mobile tyre replacement',
                'Emergency tyre fitting available',
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
              src="/images/tyre-fitting-at-home.webp"
              alt="Mobile tyre fitters that come to you"
              className="w-full rounded-2xl sm:rounded-3xl shadow-2xl object-cover"
              width={800}
              height={600}
              loading="lazy"
              decoding="async"
            />
          </div>

          <div className="w-full lg:w-1/2">
            <span className="text-[#b70011] font-bold uppercase tracking-widest text-sm mb-3 block">
              Professional Mobile Tyre Service
            </span>
            <h2
              className="text-2xl sm:text-4xl font-bold text-[#0f172a] mb-5 leading-tight"
              style={{ fontFamily: 'var(--font-work-sans)' }}
            >
              Mobile Tyre Fitters That Come to You in Greater Manchester
            </h2>
            <p className="text-slate-600 text-base leading-relaxed mb-4">
              Our <strong>mobile car tyre fitters</strong>{' '}bring the equipment and expertise needed to fit replacement tyres at a location that works for you. Serving customers across Greater Manchester, our tyre fitting mobile service means you don&apos;t need to take time out to visit a tyre centre.
            </p>
            <p className="text-slate-600 text-base leading-relaxed mb-4">
              We can help with different tyre requirements, from replacing worn tyres to dealing with an unexpected tyre problem. Before fitting, our technician checks the tyre requirements and ensures the replacement is suitable for your vehicle.
            </p>
            <p className="text-slate-600 text-base leading-relaxed mb-8">
              Whether you need a single tyre replaced or a complete set, our <strong>mobile tyre fitters</strong> provide a straightforward and professional service across Greater Manchester.
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
        heading="Why Choose Our Mobile Tyre Fitting Service in Greater Manchester?"
        intro="Choosing the right tyre fitter means getting professional service, clear communication and a solution that suits your vehicle. Our mobile tyre fitting service is designed to make tyre replacement simple and convenient, with experienced mobile tyre fitters coming to a suitable location."
        items={whyChooseMobileFitting}
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
              How Mobile Tyre Fitting Works
            </h2>
            <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto mt-4 leading-relaxed">
              Getting your tyres fitted doesn&apos;t have to mean taking your vehicle to a tyre centre. Our mobile tyre fitting service makes the process simple by bringing the tyre fitting service to you.
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
              alt="Professional mobile tyre replacement"
              className="w-full rounded-2xl sm:rounded-3xl shadow-2xl object-cover"
              width={800}
              height={600}
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="w-full lg:w-1/2">
            <span className="text-[#b70011] font-bold uppercase tracking-widest text-sm mb-3 block">
              Mobile Tyre Fitting for Vehicles
            </span>
            <h2
              className="text-2xl sm:text-4xl font-bold text-[#0f172a] mb-5 leading-tight"
              style={{ fontFamily: 'var(--font-work-sans)' }}
            >
              Mobile Tyre Fitting for Cars, SUVs and Vans
            </h2>
            <p className="text-slate-600 text-base leading-relaxed mb-4">
              Our <strong>mobile car tyre fitting</strong> service is suitable for a wide range of everyday vehicles, including cars, SUVs and vans. Whether your tyres are worn and need replacing or you need an urgent replacement, our mobile tyre fitters can provide fitting at a suitable location.
            </p>
            <p className="text-slate-600 text-base leading-relaxed mb-4">
              We can assist with different tyre sizes and requirements, helping you select a suitable replacement before fitting. Our technicians use professional equipment and calibrated tools to ensure the tyres are fitted correctly.
            </p>
            <p className="text-slate-600 text-base leading-relaxed mb-6">
              For drivers who need an urgent solution, emergency mobile tyre fitting can also help when a damaged or unusable tyre leaves you unable to continue your journey.
            </p>
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

      {/* ── SUPPORTING POINTS ────────────────────────────────────────── */}
      <section className="px-4 sm:px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-between gap-4 bg-slate-50 border border-slate-100 rounded-2xl p-5 sm:p-6 mb-2">
            <div>
              <p className="font-bold text-[#0f172a]">Mobile Tyre Replacement</p>
              <p className="text-sm text-slate-500">Replace worn or damaged tyres without taking your vehicle to a garage.</p>
            </div>
          </div>
          <div className="flex items-center justify-between gap-4 bg-slate-50 border border-slate-100 rounded-2xl p-5 sm:p-6 mb-2">
            <div>
              <p className="font-bold text-[#0f172a]">Emergency Tyre Replacement</p>
              <p className="text-sm text-slate-500">Get assistance when a tyre needs replacing unexpectedly.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. FAQ ───────────────────────────────────────────────────── */}
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

      {/* ── 7. FINAL CTA ─────────────────────────────────────────────── */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 bg-[#0f172a] text-white text-center">
        <h2
          className="text-2xl sm:text-3xl font-bold mb-3"
          style={{ fontFamily: 'var(--font-work-sans)' }}
        >
          Need Mobile Tyre Fitting Today?
        </h2>
        <p className="text-slate-400 text-base mb-8 max-w-lg mx-auto">
          Need a tyre replacement without the hassle of visiting a garage? Contact our mobile tyre fitters today. Whether you need planned tyre fitting or emergency mobile tyre fitting, we&apos;ll help arrange a suitable tyre solution for your vehicle. <strong>One Stop Mobile Tyres 24/7</strong>
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="tel:07759708646"
            className="bg-[#FF4444] text-[#121212] font-black px-10 py-4 rounded-xl shadow-2xl shadow-red-900/40 flex items-center gap-2.5 hover:bg-red-700 hover:text-white transition-all text-lg sm:text-xl"
            style={{ fontFamily: 'var(--font-work-sans)' }}
          >
            <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>call</span>
            07759 708 646
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
