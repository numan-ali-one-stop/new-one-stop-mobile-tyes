import JsonLd from '@/components/JsonLd'
import { breadcrumbSchema, serviceSchema, faqSchema, SITE_URL } from '@/lib/schema'
import { buildMetadata } from '@/lib/seo'

export const metadata = buildMetadata({
  title: 'Cheap Mobile Tyre Fitting | Quality Tyres at Fair Prices',
  description:
    'Affordable mobile tyre fitting across Greater Manchester with budget, mid-range and premium tyres quoted before dispatch.',
  path: '/cheap-mobile-tyre-fitting',
})

const _breadcrumbSchema = breadcrumbSchema([
  { name: 'Home', item: SITE_URL },
  { name: 'Cheap Mobile Tyre Fitting', item: `${SITE_URL}/cheap-mobile-tyre-fitting` },
])

const _serviceSchema = serviceSchema({
  slug: 'cheap-mobile-tyre-fitting',
  name: 'Cheap Mobile Tyre Fitting',
  serviceType: 'Mobile Tyre Fitting',
  description:
    'Affordable mobile tyre fitting across Greater Manchester with budget, mid-range and premium tyre options supplied and professionally fitted at your location.',
})

const faqs = [
  { q: 'Do you provide cheap mobile tyre fitting?', a: 'Yes. We specialise in affordable mobile tyre fitting with a range of budget, mid-range and premium tyres to suit every budget.' },
  { q: 'Are cheap tyres safe?', a: 'Absolutely. We only supply tyres that meet UK safety standards from trusted manufacturers.' },
  { q: 'Can you fit tyres at my home?', a: 'Yes. Our home tyre-fitting service lets you have your tyres replaced without visiting a garage.' },
  { q: 'Do you offer same-day tyre fitting?', a: 'Yes. We provide same-day mobile tyre fitting whenever stock and availability allow.' },
  { q: 'Can you replace tyres at my workplace?', a: 'Yes. We regularly fit tyres at offices, industrial estates, and business premises.' },
  { q: 'Do you provide emergency tyre replacement?', a: 'Yes. We offer emergency mobile tyre fitting for punctures, blowouts, and damaged tyres.' },
  { q: 'Can you repair a puncture instead of replacing the tyre?', a: "If the puncture is within the legal repair area and safe to repair, we'll always recommend the most cost-effective solution." },
  { q: 'Do you carry budget tyres?', a: 'Yes. We stock a wide selection of affordable tyres while also offering mid-range and premium options.' },
  { q: 'Can you fit tyres on my driveway?', a: 'Yes. Our mobile fitting vans are fully equipped to complete tyre replacement on your driveway or outside your home.' },
  { q: 'Is mobile tyre fitting more expensive than a garage?', a: 'Not necessarily. When you consider travel costs, waiting time, and recovery charges, our mobile tyre fitting service offers excellent value and convenience.' },
  { q: 'Do you provide roadside tyre fitting?', a: 'Yes. We can replace damaged tyres at the roadside where it is safe to do so.' },
  { q: 'Can I book tyres fitted today?', a: 'Yes. We offer same day appointments for many locations and tyre sizes.' },
  { q: 'Do you offer mobile puncture repair?', a: 'Yes. Our technicians can repair punctures when they meet safety guidelines or replace the tyre if necessary.' },
  { q: 'Can you replace more than one tyre?', a: 'Yes. We can fit a single tyre, two tyres or a complete set during the same visit.' },
  { q: 'Do you supply premium tyres as well?', a: 'Yes. We supply budget, mid-range and premium tyres from leading manufacturers.' },
  { q: 'What areas do you cover?', a: 'Our mobile tyre fitting service covers homes, workplaces and roadside locations across our service area.' },
  { q: 'Can you help if my tyre goes flat at night?', a: 'Yes. Our emergency tyre fitting service is available for urgent situations.' },
  { q: 'What is the cheapest tyre option you offer?', a: 'Our budget tyre range gives you a safe, legal tyre at the lowest available price point. We always confirm the exact quote by phone or WhatsApp before dispatch, so you know the cost upfront.' },
  { q: 'How long does tyre fitting take?', a: 'Most tyre replacements take between 20 and 45 minutes depending on the vehicle and the number of tyres being fitted.' },
  { q: 'Do I need to visit a tyre shop?', a: 'No. We bring the tyre shop to you, saving you time and making tyre replacement completely hassle-free.' },
  { q: 'Is a puncture repair cheaper than a new tyre?', a: 'Yes, whenever a safe repair is possible. A puncture repair is usually the most affordable option compared with a full tyre replacement — call or WhatsApp us for a free quote.' },
  { q: 'Can you fit tyres while I\'m at work?', a: 'Yes. Many customers choose workplace tyre fitting so their vehicle is ready when they finish work.' },
  { q: 'Why choose mobile tyre fitting?', a: 'Mobile tyre fitting offers convenience, saves valuable time, avoids unnecessary travel and allows professional tyre replacement wherever you need it.' },
  { q: 'Can I book by phone or WhatsApp?', a: 'Yes. Simply call us or send a WhatsApp message and our team will arrange your mobile tyre fitting appointment as quickly as possible.' },
]

const _faqSchema = faqSchema(faqs)

const whyChooseUs = [
  {
    icon: '💷',
    title: 'Competitive Tyre Prices',
    desc: 'We offer budget, mid-range and premium tyres at different price points, allowing you to choose an option that suits your vehicle and spending limit.',
  },
  {
    icon: '🚐',
    title: 'Clear Quotes Upfront',
    desc: 'Your quote is confirmed before dispatch based on the tyre required, location and service needed, helping you understand the cost before the technician travels.',
  },
  {
    icon: '⚡',
    title: 'Same Day Availability',
    desc: 'Need tyres fitted today? Same day mobile tyre fitting is available for many common tyre sizes, subject to stock and technician availability.',
  },
  {
    icon: '⭐',
    title: 'Professional Fitting Included',
    desc: 'Even when choosing a budget tyre, fitting is carried out by professional technicians using appropriate mobile tyre equipment.',
  },
]

const steps = [
  {
    n: '1',
    title: 'Send Your Vehicle Details',
    desc: 'Call or WhatsApp with your registration, tyre size if known, number of tyres required and location.',
  },
  {
    n: '2',
    title: 'Compare Suitable Tyre Options',
    desc: 'We check available budget, mid-range and premium tyres and explain the prices so you can choose the most suitable option.',
  },
  {
    n: '3',
    title: 'Technician Comes to You',
    desc: 'Once you approve the quote, the technician arrives with the selected tyres and professional fitting equipment.',
  },
  {
    n: '4',
    title: 'Tyres Fitted & Checked',
    desc: 'Your old tyre is removed, the replacement is professionally fitted and the required pressure and fitting checks are completed before the job is finished.',
  },
]

export default function CheapMobileTyreFittingPage() {
  return (
    <div className="text-[#1c1b1b]" style={{ fontFamily: 'var(--font-inter)' }}>
      <JsonLd data={_breadcrumbSchema} />
      <JsonLd data={_serviceSchema} />
      <JsonLd data={_faqSchema} />

      {/* ── 1. HERO ──────────────────────────────────────────────────── */}
      <section className="relative min-h-[580px] lg:min-h-[640px] flex items-center overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/tyre-fitting-in-emergency.webp"
          alt="Cheap mobile tyre fitting service"
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
              Affordable Tyres, Professional Fitting
            </div>

            <h1
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-white font-black mb-5 leading-[1.1]"
              style={{ fontFamily: 'var(--font-work-sans)', letterSpacing: '-0.02em' }}
            >
              Cheap Mobile Tyre Fitting – Quality Tyres at Fair Prices
            </h1>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-4">
              Need new tyres without paying more than necessary? <strong>One Stop Mobile Tyres 24/7</strong> provides <strong>cheap mobile tyre fitting</strong> across Greater Manchester, with budget, mid-range and premium tyre options supplied and professionally fitted at your location.
            </p>
            <p className="text-slate-400 text-base leading-relaxed mb-8">
              Tell us your vehicle registration or tyre size and we&apos;ll check suitable options across different price ranges. You receive a clear quote before dispatch, helping you choose the right tyre for your vehicle and budget without unexpected charges.
            </p>

            <ul className="space-y-2 mb-8">
              {[
                'Affordable Mobile Tyre Fitting',
                'Budget, Mid-Range & Premium Tyres',
                'Same Day Availability Where Possible',
                'Clear Prices Before Dispatch',
                'Cars, SUVs & Vans Covered',
                'Professional Mobile Tyre Fitters',
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
              src="/images/mobile-tyre-fitting-one-stop-tyres-24-7.webp"
              alt="Affordable mobile tyre fitting service"
              className="w-full rounded-2xl sm:rounded-3xl shadow-2xl object-cover"
              width={800}
              height={600}
              loading="lazy"
              decoding="async"
            />
          </div>

          <div className="w-full lg:w-1/2">
            <span className="text-[#b70011] font-bold uppercase tracking-widest text-sm mb-3 block">
              Affordable Mobile Tyre Service
            </span>
            <h2
              className="text-2xl sm:text-4xl font-bold text-[#0f172a] mb-5 leading-tight"
              style={{ fontFamily: 'var(--font-work-sans)' }}
            >
              Affordable Mobile Tyre Fitting Without Cutting Corners
            </h2>
            <p className="text-slate-600 text-base leading-relaxed mb-4">
              Choosing a lower-priced tyre should not mean compromising on professional fitting. Our <strong>affordable mobile tyre fitting</strong> service combines competitively priced tyre options with proper fitting equipment and experienced technicians.
            </p>
            <p className="text-slate-600 text-base leading-relaxed mb-8">
              We can supply tyres across different price ranges for cars, SUVs, vans and light commercial vehicles. Whether you want the lowest suitable budget option or prefer to compare it with mid-range and premium alternatives, we&apos;ll explain the available choices before you book.
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
              How Affordable Mobile Tyre Fitting Works
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
              alt="Cheap mobile tyre fitting at home"
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
              Affordable Tyre Fitting Without the Garage Wait
            </h2>
            <p className="text-slate-600 text-base leading-relaxed mb-6">
              Our <strong>budget mobile tyre fitting</strong> service combines competitive tyre prices with the convenience of professional fitting at your location. You can compare different tyre options without travelling between garages looking for a better price. Whether you need a single replacement tyre or several new tyres, we&apos;ll help you choose an option that matches your vehicle, driving needs and budget.
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
            href="/guides/run-flat-vs-normal-tyres-manchester"
            className="group flex items-center justify-between gap-4 bg-slate-50 border border-slate-100 rounded-2xl p-5 sm:p-6 mb-2 hover:border-[#b70011]/30 hover:shadow-md transition-all"
          >
            <div>
              <span className="text-xs font-bold text-[#b70011] uppercase tracking-widest mb-1 block">Switching from run-flats?</span>
              <p className="font-bold text-[#0f172a]">Run-Flat vs Normal Tyres: What You Need to Know</p>
              <p className="text-sm text-slate-500">Understand the differences, whether switching is suitable for your vehicle and what to consider before choosing a lower-cost tyre option.</p>
            </div>
            <span className="material-symbols-outlined text-slate-400 group-hover:text-[#b70011] group-hover:translate-x-1 transition-all shrink-0">arrow_forward</span>
          </a>
        </div>
      </section>

      {/* ── FREE QUOTE CTA ───────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-[#b70011] font-bold uppercase tracking-widest text-sm mb-2 block">
            Free Quote
          </span>
          <h2
            className="text-2xl sm:text-[32px] font-bold text-[#0f172a] mb-4"
            style={{ fontFamily: 'var(--font-work-sans)', letterSpacing: '-0.01em' }}
          >
            Budget, Mid-Range &amp; Premium Tyres – Quoted Upfront
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-base mb-8">
            The cheapest tyre is not always the best choice for every vehicle, which is why we give you options. Send us your tyre size or vehicle registration and location. We&apos;ll check available <strong>budget tyres, mid-range tyres and premium tyres</strong>, explain the prices and confirm your quote before dispatch.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="tel:07759708646"
              className="bg-[#FF4444] text-[#121212] font-black px-8 py-4 rounded-xl shadow-2xl shadow-red-900/40 flex items-center justify-center gap-2.5 hover:bg-red-700 hover:text-white transition-all text-base sm:text-lg"
              style={{ fontFamily: 'var(--font-work-sans)' }}
            >
              <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>call</span>
              Call for a Free Quote
            </a>
            <a
              href="https://wa.me/447759708646"
              className="bg-[#25D366] hover:bg-[#1ebe5d] text-white font-black px-8 py-4 rounded-xl flex items-center justify-center gap-2.5 transition-all text-base sm:text-lg shadow-lg"
              style={{ fontFamily: 'var(--font-work-sans)' }}
            >
              <svg className="w-5 h-5 fill-current flex-shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp for a Quote
            </a>
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
          Need Affordable Mobile Tyre Fitting Today?
        </h2>
        <p className="text-slate-400 text-base mb-8 max-w-lg mx-auto">
          Call or WhatsApp us for a competitive quote and we&apos;ll send a technician directly to
          your location.
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
