import JsonLd from '@/components/JsonLd'
import { breadcrumbSchema, serviceSchema, faqSchema, SITE_URL } from '@/lib/schema'
import { buildMetadata } from '@/lib/seo'

export const metadata = buildMetadata({
  title: 'Professional Mobile Tyre Fitting at Your Location',
  description:
    'Professional mobile tyre fitting across Greater Manchester for cars, SUVs, vans and light commercial vehicles, with same day appointments available.',
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
  { q: 'What is mobile tyre fitting?', a: 'Mobile tyre fitting is a service where a professional tyre technician brings the tyres and fitting equipment directly to your vehicle. It removes the need to drive to and wait at a traditional tyre garage.' },
  { q: 'What does your mobile tyre fitting service include?', a: 'Our mobile tyre service includes bringing the required tyre and fitting equipment to your location, removing the existing tyre, professionally fitting the replacement, balancing the wheel and completing final tyre-pressure checks.' },
  { q: 'Do you offer same day mobile tyre fitting?', a: 'Yes. Same day mobile tyre fitting is available for many common tyre sizes, subject to tyre stock, your location and technician availability.' },
  { q: 'What vehicles do you provide mobile tyre fitting for?', a: 'We provide mobile car tyre fitting for many cars and SUVs as well as tyre fitting for vans and light commercial vehicles.' },
  { q: 'Can you replace just one tyre?', a: 'Yes. We can replace a single tyre, a pair or a complete set depending on the condition of your tyres, vehicle requirements and what you want replaced.' },
  { q: 'Do you provide mobile tyre replacement?', a: 'Yes. Our mobile tyre replacement service is suitable for worn, damaged or unusable tyres that need to be replaced rather than repaired.' },
  { q: 'What tyre brands do you supply?', a: 'We can supply premium, mid-range and budget tyres from a range of manufacturers. Availability depends on your required tyre size and current stock.' },
  { q: 'Do you balance the wheel after fitting a tyre?', a: 'Yes. Wheel balancing is carried out as part of the fitting process using professional mobile tyre equipment.' },
  { q: 'How long does mobile tyre fitting take?', a: 'The time required depends on your vehicle and the number of tyres being replaced. A straightforward single-tyre fitting will normally take less time than replacing several tyres.' },
  { q: 'What information do you need when I book?', a: 'Send us your vehicle registration, tyre size if known, number of tyres required and your location. These details help us identify suitable tyres and prepare for the fitting.' },
  { q: "What if I don't know my tyre size?", a: "That's fine. Send us your vehicle registration and we can use it to help identify the appropriate tyre specification. We may ask you to confirm information shown on the existing tyre where necessary." },
  { q: 'Can a punctured tyre be repaired instead of replaced?', a: 'Sometimes. It depends on the position and extent of the damage and the overall condition of the tyre. If the tyre can be repaired safely, puncture repair may be a better option than replacement.' },
  { q: 'Do you provide mobile tyre fitting across Greater Manchester?', a: 'Yes. One Stop Mobile Tyres 24/7 provides mobile tyre fitting across Greater Manchester, including Manchester, Oldham, Bury, Bolton, Rochdale, Salford, Stockport, Tameside, Trafford and Wigan.' },
  { q: 'Why use professional mobile tyre fitters?', a: 'Professional mobile tyre fitters bring the specialist equipment and fitting experience needed to replace tyres correctly at your location, including tyre removal, fitting, balancing and final checks.' },
]

const _faqSchema = faqSchema(faqs)

const whyChooseUs = [
  {
    icon: '🚐',
    title: 'Fully Equipped Mobile Fitting',
    desc: 'Our technicians arrive with specialist equipment for professional on-site tyre removal, fitting and balancing, allowing the work to be completed without a conventional tyre-shop visit.',
  },
  {
    icon: '⚡',
    title: 'Same Day Mobile Tyre Fitting',
    desc: 'Need new tyres today? Same day mobile tyre fitting is available for many common tyre sizes, subject to stock and technician availability.',
  },
  {
    icon: '💷',
    title: 'Tyres for Different Budgets',
    desc: 'Choose from budget, mid-range and premium tyres based on your vehicle, driving requirements and budget. We provide clear pricing before confirming the job.',
  },
  {
    icon: '⭐',
    title: 'Professional Mobile Tyre Fitters',
    desc: 'Our professional mobile tyre fitters use dedicated equipment and proper fitting procedures to replace tyres, balance wheels and complete final pressure and safety checks.',
  },
]

const steps = [
  {
    n: '1',
    title: 'Tell Us What You Need',
    desc: 'Call or WhatsApp with your vehicle registration, tyre size if known, number of tyres required and your current location.',
  },
  {
    n: '2',
    title: 'We Check & Dispatch',
    desc: 'We check suitable tyre options and availability, confirm the price and arrange the appropriate mobile tyre fitter for your job.',
  },
  {
    n: '3',
    title: 'Your Tyres Are Fitted',
    desc: 'The technician arrives with the required tyres and equipment, removes the old tyre and professionally fits and balances the replacement.',
  },
  {
    n: '4',
    title: 'Final Checks & Ready to Drive',
    desc: 'Tyre pressure and fitting are checked before the work is completed, helping ensure your vehicle is ready to return to the road.',
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
              Professional Mobile Tyre Fitting at Your Location
            </h1>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-4">
              Need new tyres without making a trip to a garage? <strong>One Stop Mobile Tyres 24/7</strong> provides professional <strong>mobile tyre fitting</strong> across Greater Manchester, bringing the tyres, equipment and fitting service directly to your vehicle.
            </p>
            <p className="text-slate-400 text-base leading-relaxed mb-8">
              We supply and fit premium, mid-range and budget tyres for cars, SUVs, vans and light commercial vehicles. Whether you need one worn tyre replaced or several new tyres fitted, our <strong>mobile tyre service</strong> makes it simple to arrange professional fitting at a suitable location.
            </p>

            <ul className="space-y-2 mb-8">
              {[
                'Mobile Tyre Fitting Across Greater Manchester',
                'Same Day Mobile Tyre Fitting Available',
                'Premium, Mid-Range & Budget Tyres',
                'Cars, SUVs, Vans & Light Commercial Vehicles',
                'Professional Mobile Tyre Fitters',
                'Clear Pricing Before Dispatch',
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
              Mobile Tyre Fitters That Come to You
            </h2>
            <p className="text-slate-600 text-base leading-relaxed mb-4">
              Our <strong>mobile tyre fitters</strong> bring professional tyre-changing equipment directly to your vehicle, removing the need to arrange a separate visit to a tyre centre. We can replace a single damaged tyre, fit a pair or install a complete set depending on your vehicle and requirements.
            </p>
            <p className="text-slate-600 text-base leading-relaxed mb-8">
              Provide your vehicle registration or tyre size when booking and we can check suitable tyre options before dispatch. Our <strong>mobile tyre replacement service</strong> covers many common vehicle types and tyre sizes, with fitting, balancing and tyre-pressure checks completed as part of the job.
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
              How Mobile Tyre Fitting Works
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
              Mobile Tyre Replacement
            </span>
            <h2
              className="text-2xl sm:text-4xl font-bold text-[#0f172a] mb-5 leading-tight"
              style={{ fontFamily: 'var(--font-work-sans)' }}
            >
              Mobile Tyre Fitting for Cars, SUVs and Vans
            </h2>
            <p className="text-slate-600 text-base leading-relaxed mb-6">
              Different vehicles require different tyre sizes, load ratings and specifications. Our <strong>mobile car tyre fitting</strong> service covers many popular cars and SUVs, while tyre fitting is also available for vans and light commercial vehicles. We can provide <strong>mobile tyre replacement</strong> for worn tread, sidewall damage, ageing tyres and other problems where replacement is the appropriate solution. Premium, mid-range and budget options are available across many common tyre sizes. If you&apos;re unsure which tyre you need, simply provide your vehicle registration. Our team can check the required specification and discuss suitable options before arranging the fitting.
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

      {/* ── HELPFUL GUIDE ────────────────────────────────────────────── */}
      <section className="px-4 sm:px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <a
            href="/guides/how-to-tell-if-your-tyre-can-be-repaired-or-needs-replacing"
            className="group flex items-center justify-between gap-4 bg-slate-50 border border-slate-100 rounded-2xl p-5 sm:p-6 mb-2 hover:border-[#b70011]/30 hover:shadow-md transition-all"
          >
            <div>
              <span className="text-xs font-bold text-[#b70011] uppercase tracking-widest mb-1 block">Not sure yet?</span>
              <p className="font-bold text-[#0f172a]">How to Tell If Your Tyre Can Be Repaired or Needs Replacing</p>
              <p className="text-sm text-slate-500">Our quick, expert checklist for puncture location, size and tread depth.</p>
            </div>
            <span className="material-symbols-outlined text-slate-400 group-hover:text-[#b70011] group-hover:translate-x-1 transition-all shrink-0">arrow_forward</span>
          </a>
          <a
            href="/guides/run-flat-vs-normal-tyres-manchester"
            className="group flex items-center justify-between gap-4 bg-slate-50 border border-slate-100 rounded-2xl p-5 sm:p-6 mb-2 hover:border-[#b70011]/30 hover:shadow-md transition-all"
          >
            <div>
              <span className="text-xs font-bold text-[#b70011] uppercase tracking-widest mb-1 block">Replacing run-flats?</span>
              <p className="font-bold text-[#0f172a]">Run-Flat vs Normal Tyres: What You Need to Know</p>
              <p className="text-sm text-slate-500">The real difference, whether you can mix them, and what it costs to switch.</p>
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
          Need Mobile Tyre Fitting Today?
        </h2>
        <p className="text-slate-400 text-base mb-8 max-w-lg mx-auto">
          Tell us what your vehicle needs and we&apos;ll bring the tyre fitting service to you. Send your <strong>vehicle registration, tyre size and location</strong> by phone or WhatsApp so we can check suitable tyre options and arrange your fitting. <strong>One Stop Mobile Tyres 24/7</strong>
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
