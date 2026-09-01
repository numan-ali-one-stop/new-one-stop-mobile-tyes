import JsonLd from '@/components/JsonLd'
import { AREA_SERVED, breadcrumbSchema, serviceSchema, faqSchema, SITE_URL } from '@/lib/schema'
import { buildMetadata } from '@/lib/seo'

export const metadata = buildMetadata({
  title: 'Tyre Fitting Near Me | Mobile Service That Comes to You',
  description:
    'Professional mobile tyre fitting across Greater Manchester with local fitters, same day availability and clear pricing.',
  path: '/tyre-fitting-near-me',
})

const _breadcrumbSchema = breadcrumbSchema([
  { name: 'Home', item: SITE_URL },
  { name: 'Tyre Fitting Near Me', item: `${SITE_URL}/tyre-fitting-near-me` },
])

const _serviceSchema = serviceSchema({
  slug: 'tyre-fitting-near-me',
  name: 'Tyre Fitting Near Me',
  serviceType: 'Mobile Tyre Fitting',
  description:
    'Professional mobile tyre fitting across Greater Manchester, bringing suitable tyres and specialist fitting equipment directly to your location.',
  areaServed: AREA_SERVED,
})

const districts = [
  { name: 'Manchester', href: '/mobile-tyre-fitting-manchester', postcodes: 'M1 – M16, M40, M60' },
  { name: 'Bolton', href: '/mobile-tyre-fitting-bolton', postcodes: 'BL1 – BL7' },
  { name: 'Bury', href: '/mobile-tyre-fitting-bury', postcodes: 'BL8, BL9, M26' },
  { name: 'Oldham', href: '/mobile-tyre-fitting-oldham', postcodes: 'OL1 – OL9' },
  { name: 'Rochdale', href: '/mobile-tyre-fitting-rochdale', postcodes: 'OL10 – OL16' },
  { name: 'Stockport', href: '/mobile-tyre-fitting-stockport', postcodes: 'SK1 – SK8, SK12' },
  { name: 'Tameside', href: '/mobile-tyre-fitting-tameside', postcodes: 'OL5 – OL7, SK14 – SK16' },
  { name: 'Trafford', href: '/mobile-tyre-fitting-trafford', postcodes: 'M16, M17, M32, M33, WA14 – WA15' },
  { name: 'Wigan', href: '/mobile-tyre-fitting-wigan', postcodes: 'WN1 – WN6' },
]

const faqs = [
  { q: 'How do I find tyre fitting near me?', a: 'Call or WhatsApp One Stop Mobile Tyres 24/7 with your location, vehicle registration and tyre size. We can check coverage, suitable tyre stock and the nearest available technician.' },
  { q: 'Do you provide mobile tyre fitting near me?', a: 'Yes. Our mobile tyre fitting near me service covers Greater Manchester, subject to technician and tyre availability.' },
  { q: 'How quickly can a mobile tyre fitter reach me?', a: 'Our usual response target across Greater Manchester is around 20–30 minutes for urgent call-outs. Traffic, location, tyre stock and current demand can affect the actual ETA.' },
  { q: 'Can I get same day tyre fitting near me?', a: 'Yes. Same day tyre fitting near me is available for many common tyre sizes when suitable stock and technicians are available.' },
  { q: 'Do you provide mobile tyres near me?', a: 'Yes. We supply and fit premium, mid-range and budget mobile tyres near me across our Greater Manchester service area.' },
  { q: 'Can you replace a damaged tyre at my location?', a: 'Yes. Our mobile tyre replacement near me service can supply and fit a suitable replacement where your vehicle is safely accessible.' },
  { q: 'Do you provide emergency tyre fitting near me?', a: 'Yes. Emergency tyre fitting near me is available for urgent tyre problems, subject to technician availability. For full out-of-hours details, see our dedicated 24 Hour Emergency Tyre Fitting service.' },
  { q: 'What areas do your mobile tyre fitters cover?', a: 'Our mobile tyre fitters cover Manchester, Oldham, Bury, Bolton, Rochdale, Salford, Stockport, Tameside, Trafford, Wigan and surrounding areas.' },
  { q: 'What information do you need when I book?', a: 'Send your exact location, vehicle registration, tyre size if known and number of tyres required.' },
  { q: 'Can you identify my tyre size from my registration?', a: 'Your registration can help identify the likely tyre specification, but we may ask you to confirm the markings on the tyre sidewall where necessary.' },
  { q: 'Do you offer budget tyre options?', a: 'Yes. Budget, mid-range and premium tyres are available for many common tyre sizes, depending on current stock.' },
  { q: 'Can you fit tyres for vans?', a: 'Yes. We provide mobile tyre fitting for many vans and light commercial vehicles as well as cars and SUVs.' },
  { q: 'Do you balance the wheel after fitting?', a: 'Yes. Wheel balancing is carried out as part of the fitting process where required.' },
  { q: 'Is mobile tyre fitting more expensive than a garage?', a: 'The total cost depends on the tyre, location and service required. We provide a clear quote before dispatch so you know what to expect.' },
]

const _faqSchema = faqSchema(faqs)

const whyChooseUs = [
  {
    icon: '🚐',
    title: 'Local Coverage',
    desc: 'Our technicians work across Greater Manchester, helping us arrange mobile tyre fitting in Manchester, Oldham, Bury, Bolton, Rochdale, Salford, Stockport, Tameside, Trafford and Wigan.',
  },
  {
    icon: '⚡',
    title: 'Same Day Availability',
    desc: 'Need tyres fitted today? Same day tyre fitting near me is available for many common tyre sizes, subject to stock and technician availability.',
  },
  {
    icon: '💷',
    title: 'Tyres for Different Budgets',
    desc: 'Choose from budget, mid-range and premium tyre options based on your vehicle, tyre size and budget.',
  },
  {
    icon: '⭐',
    title: 'Professional Mobile Fitters',
    desc: 'Our mobile tyre fitters near me service uses professional fitting equipment, balancing tools and proper fitting procedures at your location.',
  },
]

const steps = [
  {
    n: '1',
    title: 'Send Your Location & Vehicle Details',
    desc: 'Call or WhatsApp with your location, vehicle registration, tyre size if known and the number of tyres you need.',
  },
  {
    n: '2',
    title: 'We Check the Nearest Available Technician',
    desc: 'We review tyre availability and arrange the most suitable technician for your area.',
  },
  {
    n: '3',
    title: 'Technician Comes to You',
    desc: 'The technician arrives with the required tyre and professional fitting equipment.',
  },
  {
    n: '4',
    title: 'Tyre Fitted & Checked',
    desc: 'The worn or damaged tyre is removed, the replacement is fitted and the required pressure and fitting checks are completed before the job is finished.',
  },
]

export default function TyreFittingNearMePage() {
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
          alt="Tyre fitting near me mobile service"
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
              Local Tyre Fitters Ready to Help
            </div>

            <h1
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-white font-black mb-5 leading-[1.1]"
              style={{ fontFamily: 'var(--font-work-sans)', letterSpacing: '-0.02em' }}
            >
              Tyre Fitting Near Me – Mobile Service That Comes to You
            </h1>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-4">
              Searching for <strong>tyre fitting near me</strong> because your tyre is worn, damaged or unsafe? <strong>One Stop Mobile Tyres 24/7</strong> provides professional mobile tyre fitting across Greater Manchester, bringing suitable tyres and specialist fitting equipment directly to your location.
            </p>
            <p className="text-slate-400 text-base leading-relaxed mb-8">
              Tell us your vehicle registration, tyre size if known and exact location. We can check suitable tyre options and arrange the nearest available technician for fast, professional tyre fitting.
            </p>

            <ul className="space-y-2 mb-8">
              {[
                'Mobile Tyre Fitting Near Me',
                'Local Mobile Tyre Fitters',
                'Same Day Tyre Fitting Available',
                'Premium, Mid-Range & Budget Tyres',
                'Cars, SUVs & Vans Covered',
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
                Call: 07759 708 646
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
              alt="Local mobile tyre fitting service"
              className="w-full rounded-2xl sm:rounded-3xl shadow-2xl object-cover"
              width={800}
              height={600}
              loading="lazy"
              decoding="async"
            />
          </div>

          <div className="w-full lg:w-1/2">
            <span className="text-[#b70011] font-bold uppercase tracking-widest text-sm mb-3 block">
              Local Mobile Tyre Fitters
            </span>
            <h2
              className="text-2xl sm:text-4xl font-bold text-[#0f172a] mb-5 leading-tight"
              style={{ fontFamily: 'var(--font-work-sans)' }}
            >
              Find a Mobile Tyre Fitter Near You
            </h2>
            <p className="text-slate-600 text-base leading-relaxed mb-4">
              When you search for <strong>mobile tyre fitting near me</strong>, the most important thing is getting a suitable technician to your location with the correct tyre and equipment.
            </p>
            <p className="text-slate-600 text-base leading-relaxed mb-8">
              Our <strong>local mobile tyre fitters</strong> cover Greater Manchester and can attend many residential, workplace and roadside locations where there is enough safe space to work. We supply tyres for a wide range of common vehicles and can replace one tyre, a pair or several tyres depending on your needs.
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
              How Our Local Tyre Fitting Service Works
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
              alt="Mobile tyre fitter near me"
              className="w-full rounded-2xl sm:rounded-3xl shadow-2xl object-cover"
              width={800}
              height={600}
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="w-full lg:w-1/2">
            <span className="text-[#b70011] font-bold uppercase tracking-widest text-sm mb-3 block">
              Local Tyre Replacement
            </span>
            <h2
              className="text-2xl sm:text-4xl font-bold text-[#0f172a] mb-5 leading-tight"
              style={{ fontFamily: 'var(--font-work-sans)' }}
            >
              Mobile Tyre Replacement Near You
            </h2>
            <p className="text-slate-600 text-base leading-relaxed mb-6">
              A tyre does not always fail near a garage. It may be worn, damaged or completely flat when you are at work, parked locally or already on a journey. Our <strong>mobile tyre replacement near me</strong> service brings the replacement tyre to your location, helping you avoid driving farther on an unsafe tyre. We supply premium, mid-range and budget tyre options for many cars, SUVs and vans. Send us your registration or tyre size and location so we can check the right option before dispatch.
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

      {/* ── AREAS WE COVER ───────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 sm:mb-14">
            <span className="text-[#b70011] font-bold uppercase tracking-widest text-sm mb-2 block">
              Local Coverage
            </span>
            <h2
              className="text-2xl sm:text-[32px] font-bold text-[#0f172a] mb-4"
              style={{ fontFamily: 'var(--font-work-sans)', letterSpacing: '-0.01em' }}
            >
              Tyre Fitting Across Greater Manchester
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-base">
              <strong>One Stop Mobile Tyres 24/7</strong> provides local tyre fitting across Greater Manchester. If you&apos;re searching for a <strong>tyre fitting service near me</strong>, send us your postcode or live location and we&apos;ll check the nearest available coverage.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            {districts.map((d) => (
              <a
                key={d.href}
                href={d.href}
                className="group flex items-center justify-between gap-3 bg-slate-50 border border-slate-100 rounded-xl p-4 sm:p-5 hover:border-[#b70011]/30 hover:shadow-md transition-all"
              >
                <div>
                  <p className="font-bold text-[#0f172a]">{d.name}</p>
                  <p className="text-xs text-slate-500">{d.postcodes}</p>
                </div>
                <span className="material-symbols-outlined text-slate-400 group-hover:text-[#b70011] group-hover:translate-x-1 transition-all shrink-0">arrow_forward</span>
              </a>
            ))}
          </div>

          <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm h-[300px] sm:h-[380px]">
            <iframe
              className="w-full h-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4741.379474172151!2d-2.1049285233703974!3d53.5454538598072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bb920bfb7fecd%3A0x4edbef2355697975!2sOne%20Stop%20Mobile%20Tyres%2024%2F7!5e0!3m2!1sen!2s!4v1781464116347!5m2!1sen!2s"
              frameBorder="0"
              scrolling="no"
              title="One Stop Mobile Tyres 24/7 service area map"
              aria-label="Google map showing One Stop Mobile Tyres 24/7 service area"
              loading="lazy"
            />
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
          Looking for Tyre Fitting Near You?
        </h2>
        <p className="text-slate-400 text-base mb-8 max-w-lg mx-auto">
          Send your location, vehicle registration and tyre size to <strong>One Stop Mobile Tyres 24/7</strong> and we&apos;ll check the nearest available technician and suitable tyre options. <strong>One Stop Mobile Tyres 24/7</strong> — Alliance Mill, Willow St, Oldham OL1 3QH, United Kingdom — <strong>07759 708 646</strong>
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
