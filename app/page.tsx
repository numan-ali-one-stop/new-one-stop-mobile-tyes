import { buildMetadata } from '@/lib/seo'

export const metadata = buildMetadata({
  title: 'Mobile Tyre Fitting Manchester | One Stop Mobile Tyres 24/7',
  description:
    '24/7 mobile tyre fitting across Greater Manchester — fast response at home or roadside.',
  path: '/',
})

import BrandCarousel from '@/components/BrandCarousel'
import QuoteForm from '@/components/QuoteForm'
import ReviewsCarousel from '@/components/ReviewsCarousel'
import HeroSlider from '@/components/HeroSlider'
import ServiceAreasMap from '@/components/ServiceAreasMap'

/* ─── Why-choose feature list item ─────────────────────── */
function FeatureItem({
  icon,
  title,
  desc,
}: {
  icon: string
  title: string
  desc: string
}) {
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

/* ─── FAQ Item ──────────────────────────────────────────── */
function FaqItem({ q, a }: { q: string; a: string }) {
  return (
    <details className="group bg-white p-6 rounded-2xl shadow-sm border border-slate-200 open:shadow-md transition-all">
      <summary className="list-none flex justify-between items-center cursor-pointer font-bold text-lg text-[#0f172a] gap-3">
        {q}
        <span className="material-symbols-outlined group-open:rotate-180 transition-transform text-[#b70011] flex-shrink-0">
          expand_more
        </span>
      </summary>
      <div className="mt-4 text-slate-600 leading-relaxed text-sm">{a}</div>
    </details>
  )
}

/* ─── Structured data ───────────────────────────────────── */
/* Full LocalBusiness entity is injected site-wide via the root layout. */
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How fast can you reach me for a mobile tyre fitting in Manchester?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our average response time across Greater Manchester is 20 to 30 minutes, depending on traffic and your exact location. For genuine roadside emergencies, we prioritise dispatch to get a technician to you as quickly as possible.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are you really available 24 hours a day?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes. Our 24 hour tyre service operates every day of the year, including Christmas Day, New Year's Eve and all Bank Holidays. Whether it's 3pm or 3am, our phone line is answered and a technician is on call.",
      },
    },
    {
      '@type': 'Question',
      name: 'Do you offer same day tyre fitting at home?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Absolutely. Same day mobile tyre fitting is one of our most requested services — simply call or WhatsApp us your tyre size and postcode, and we'll fit your tyre at home the same day, often within the hour.",
      },
    },
    {
      '@type': 'Question',
      name: "What's the difference between emergency tyre fitting and a booked appointment?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Emergency tyre fitting is for drivers who are stranded right now — a blowout, a flat on the roadside, or an unsafe tyre that cannot wait. A booked same day tyre fitting at home appointment is for less urgent needs, like a slow puncture, where we schedule a convenient time on the same or next day.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you stock my tyre size?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our mobile tyre fitting vans carry a wide range of common tyre sizes ready for immediate mobile tyre replacement. For specialist or less common sizes, we have access to local supplier hubs with instant availability, so there is rarely a long wait.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you fit tyres on the motorway?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For safety reasons we do not carry out tyre changes on live motorway carriageways or hard shoulders where it is not safe to do so. If you break down on the M60, M61, M62, M56, M602, M66 or M67, we will guide you to the nearest safe location — a service station, slip road or lay-by — and get a technician to you there.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does emergency mobile tyre fitting cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pricing depends on your tyre size, brand choice and time of callout. We always confirm the full price by phone or WhatsApp before any work begins, so there are no surprises — just an honest quote for a professional, same day tyre fitting service.',
      },
    },
    {
      '@type': 'Question',
      name: 'What payment methods do you accept?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We accept all major debit and credit cards, contactless payments, and cash on completion of the job.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you fit tyres at my workplace as well as at home?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Our mobile car tyre fitting service covers home, work and roadside locations across Greater Manchester, so you do not need to take time off or find your own way to a garage.',
      },
    },
    {
      '@type': 'Question',
      name: 'Will you reset my TPMS light after fitting a new tyre?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, every mobile tyre replacement and puncture repair includes a TPMS check and reset where required, so your dashboard warning light is cleared before our technician leaves.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are your technicians qualified and insured?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Every technician is fully trained, insured, and carries out puncture repairs to BS AU 159 standard. We are a directly employed, vetted team — not a network of random subcontractors — so you always know the standard of work you are getting.',
      },
    },
    {
      '@type': 'Question',
      name: 'What areas do you cover for mobile tyre fitting?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We cover Manchester, Bolton, Bury, Oldham, Rochdale, Stockport, Tameside, Trafford and Wigan, along with the M60, M61, M62, M56, M602, M66, M67 and A627. If you are searching for a 24 hour tyre service near me anywhere in Greater Manchester, we are likely already covering your area.',
      },
    },
  ],
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://onestoptyres247.co.uk/#organization',
  name: 'One Stop Mobile Tyres 24/7',
  url: 'https://onestoptyres247.co.uk',
  logo: {
    '@type': 'ImageObject',
    url: 'https://onestoptyres247.co.uk/icon.webp',
    width: 512,
    height: 512,
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+447759708646',
    contactType: 'customer service',
    areaServed: 'GB',
    availableLanguage: 'English',
    hoursAvailable: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59',
    },
  },
  sameAs: ['https://maps.app.goo.gl/tqGMogzsNNn8EXjH8'],
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://onestoptyres247.co.uk/#website',
  url: 'https://onestoptyres247.co.uk',
  name: 'One Stop Mobile Tyres 24/7',
  description: '24/7 emergency mobile tyre fitting across Greater Manchester',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://onestoptyres247.co.uk/?q={search_term_string}',
    },
    'query-input': 'required name=search_term_string',
  },
}

/* ─── Page ──────────────────────────────────────────────── */
export default function Home() {
  return (
    <div className="text-[#1c1b1b]" style={{ fontFamily: 'var(--font-inter)' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />

      {/* ── 1. HERO ───────────────────────────────────────── */}
      <HeroSlider />

      {/* ── 2. REVIEWS ────────────────────────────────────── */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">

          {/* Section header */}
          <div className="text-center mb-10 sm:mb-14">
            <span className="text-[#b70011] font-bold uppercase tracking-widest text-sm mb-3 block">
              Google Reviews
            </span>
            <h2
              className="text-2xl sm:text-[32px] font-bold text-[#0f172a] mb-4"
              style={{ fontFamily: 'var(--font-work-sans)', letterSpacing: '-0.01em' }}
            >
              What Our Customers Say
            </h2>
            {/* Rating badge */}
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

          {/* Review cards carousel */}
          <ReviewsCarousel />

          {/* View all link */}
          <div className="text-center mt-8">
            <a
              href="https://share.google/bejdYHzU10lFRVv4E"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[#b70011] font-bold text-sm hover:underline"
            >
              View all Google reviews
              <span className="material-symbols-outlined text-[16px]">open_in_new</span>
            </a>
          </div>

        </div>
      </section>

      {/* ── 3. WHAT WE DO (EEAT intro) ────────────────────── */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10 sm:mb-14">
            <span className="text-[#b70011] font-bold uppercase tracking-widest text-sm mb-3 block">
              What We Do
            </span>
            <h2
              className="text-2xl sm:text-[32px] font-bold text-[#0f172a] mb-6 leading-tight"
              style={{ fontFamily: 'var(--font-work-sans)', letterSpacing: '-0.01em' }}
            >
              24/7 Mobile Tyre Fitting &amp; Emergency Tyre Replacement Across Greater Manchester
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-5">
              One Stop Mobile Tyres 24/7 has been getting Greater Manchester drivers safely back on the
              road since our first van hit the streets. Our technicians are fully trained in on-site tyre
              change at home, at work and at the roadside, carrying premium and budget tyres from Michelin,
              Continental, Bridgestone, Pirelli and more, ready to fit on arrival.
            </p>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Whether you need a same day mobile tyre fitting appointment for a slow puncture, or genuinely
              emergency tyre fitting at 3am on the M60, our vans are stocked, our technicians are qualified,
              and our dispatch team answers the phone around the clock. We don&apos;t outsource to random
              contractors — every mobile car tyre fitting job is carried out by our own vetted, insured
              technicians, so you know exactly who is turning up and what standard of work to expect.
            </p>
          </div>

          {/* Trust strip */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                emoji: '⚡',
                title: 'Experience',
                desc: 'Over 1,100 completed callouts and a 5.0 Google rating from Greater Manchester drivers.',
              },
              {
                emoji: '🛡️',
                title: 'Trusted &amp; Insured',
                desc: 'Fully insured technicians, BS AU 159 compliant repairs, transparent upfront pricing.',
              },
              {
                emoji: '🕐',
                title: 'Always On Call',
                desc: 'Genuine 24 hour tyre service near me — including Christmas Day and Bank Holidays.',
              },
            ].map((item) => (
              <div key={item.title} className="bg-slate-50 border border-slate-100 rounded-2xl p-6 text-center">
                <div className="text-3xl mb-3">{item.emoji}</div>
                <h3 className="font-bold text-[#0f172a] text-base mb-2" dangerouslySetInnerHTML={{ __html: item.title }} />
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. SERVICES ───────────────────────────────────── */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-10 sm:mb-16">
            <span className="text-[#b70011] font-bold uppercase tracking-widest text-sm mb-2 block">
              Our Services
            </span>
            <h2
              className="text-2xl sm:text-[32px] font-bold text-slate-900 mb-3 leading-tight"
              style={{ fontFamily: 'var(--font-work-sans)', letterSpacing: '-0.01em' }}
            >
              Mobile Tyre Service Manchester — Everything You Need, On-Site
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-base">
              From routine mobile tyre replacement to genuine roadside emergencies, our mobile tyre service
              covers Manchester and the whole of Greater Manchester with one simple promise: we come to you.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[
              {
                img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Emergency%20Tyre%20Fitting%20one%20Stop-airanko-gsjvsGamoet8drKwCMHYr6LH5Ni6ZI.webp',
                title: 'Mobile Tyre Fitting',
                desc: 'Emergency mobile tyre fitting at your home, work or roadside location, typically within 20–30 minutes.',
                badge: 'FAST RESPONSE',
                href: '/mobile-tyre-fitting',
              },
              {
                img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Home%20Tyre%20Fitting%20One%20Stop-airanko-kPAsyn08SjxXwLwCVhxre5zM9jWBTs.webp',
                title: 'Home Tyre Fitting',
                desc: 'Same day tyre fitting at home while you get on with your day — no garage visit required.',
                badge: 'AT YOUR DOOR',
                href: '/home-tyre-fitting',
              },
              {
                img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Puncture%20Repair%20One%20Stop-airanko-sfmhLvDbSYmhoMprTVOHCcIWEgJvHf.webp',
                title: 'Emergency Puncture Repair',
                desc: 'Certified, BS AU 159 compliant plug-and-patch puncture repair, fitted on-site.',
                badge: 'CERTIFIED REPAIR',
                href: '/emergency-puncture-repair',
              },
              {
                img: '/images/tyre-fitting-in-emergency.webp',
                title: '24 Hour Emergency Tyre Fitting',
                desc: 'Genuine 24/7 emergency tyre replacement, day or night, 365 days a year.',
                badge: 'DAY & NIGHT',
                href: '/24-hour-emergency-tyre-fitting',
              },
              {
                img: '/images/tyres-fitting-anywhere.webp',
                title: 'Cheap Mobile Tyre Fitting',
                desc: 'Budget, mid-range and premium tyre options, all professionally fitted at competitive prices.',
                badge: 'BEST PRICES',
                href: '/cheap-mobile-tyre-fitting',
              },
              {
                img: '/images/mobile-tyre-fitting-one-stop-tyres-24-7.webp',
                title: 'Tyre Fitting Near Me',
                desc: 'Search no further — our mobile technicians reach almost anywhere in Greater Manchester fast.',
                badge: 'NEAR YOU',
                href: '/tyre-fitting-near-me',
              },
              {
                img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/One%20Stop%20Jumpstart%20image-airanko-cXmOrXcdtaIBMNQOMCIOiPj1C290RG.webp',
                title: 'Jump Start',
                desc: "Flat battery as well as a flat tyre? We'll get your car started again in minutes.",
                badge: '24/7 SERVICE',
                href: '/jump-start',
              },
              {
                img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Tyre%20pressure%20monitor-airanko-sjz7PL2Pv4N9jlPWtz5Wa1q8XO0FgP.webp',
                title: 'TPMS Reset',
                desc: 'Tyre pressure monitoring system reset and diagnostics after every fitting or repair.',
                badge: 'ALL VEHICLES',
                href: '/tpms-reset',
              },
              {
                img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Locking%20nut%20removal-airanko%20%281%29-ONBmqaZHMozU0jjrxbPe5J7C4zRQkS.webp',
                title: 'Locking Nut Removal',
                desc: 'Damage-free removal of lost or seized locking wheel nuts using specialist tools.',
                badge: 'DAMAGE FREE',
                href: '/locking-nut-removal',
              },
            ].map((card) => (
              <a
                key={card.title}
                href={card.href}
                className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all overflow-hidden border-b-4 border-[#b70011] cursor-pointer"
              >
                <div className="relative h-44 sm:h-52 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={card.img}
                    alt={card.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    width={600}
                    height={400}
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <span className="absolute top-3 left-3 text-xs font-bold text-white bg-[#b70011] px-3 py-1 rounded-full">
                    {card.badge}
                  </span>
                </div>
                <div className="p-5 sm:p-6">
                  <h3
                    className="text-base sm:text-lg font-semibold mb-2 text-[#0f172a]"
                    style={{ fontFamily: 'var(--font-work-sans)' }}
                  >
                    {card.title}
                  </h3>
                  <p className="text-slate-600 text-base leading-relaxed mb-3">{card.desc}</p>
                  <div className="flex items-center justify-end">
                    <span className="material-symbols-outlined text-slate-400 group-hover:text-[#b70011] group-hover:translate-x-1 transition-all">
                      arrow_forward
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* CTA strip */}
          <div className="mt-10 sm:mt-12 bg-[#0f172a] rounded-2xl sm:rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-5 shadow-2xl text-center sm:text-left">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">Need Immediate Assistance?</h3>
              <p className="text-slate-400 text-base">
                Speak directly to a technician for an instant quote and arrival time.
              </p>
            </div>
            <a
              href="tel:07759708646"
              className="bg-[#FF4444] text-[#121212] font-black px-8 py-4 rounded-xl text-xl sm:text-2xl hover:scale-105 transition-transform shadow-lg shadow-red-900/20 whitespace-nowrap"
              style={{ fontFamily: 'var(--font-work-sans)' }}
            >
              07759 708 646
            </a>
          </div>
        </div>
      </section>

      {/* ── 5. WHY CHOOSE US ──────────────────────────────── */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          {/* Image col */}
          <div className="w-full lg:w-1/2 relative pb-8 sm:pb-10">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="relative z-10 rounded-2xl sm:rounded-3xl shadow-2xl border-4 sm:border-8 border-slate-50 w-full object-cover"
              src="/images/mobile-tyre-fitting-manchester.webp"
              alt="Mobile tyre fitting technician in Manchester"
              width={800}
              height={600}
              loading="lazy"
              decoding="async"
            />
            {/* Floating trust badge */}
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

          {/* Content col */}
          <div className="w-full lg:w-1/2">
            <span className="text-[#b70011] font-bold uppercase tracking-widest text-sm mb-3 block">
              The Best Choice
            </span>
            <h2
              className="text-2xl sm:text-4xl lg:text-5xl text-[#0f172a] mb-5 sm:mb-8 leading-tight font-bold"
              style={{ fontFamily: 'var(--font-work-sans)' }}
            >
              Professional Mobile Tyre Replacement Across Greater Manchester
            </h2>
            <p className="text-slate-600 mb-4 leading-relaxed text-base sm:text-lg">
              When you&apos;re stuck with a damaged tyre, you need two things: speed and a professional you
              can trust. Our 24/7 mobile tyre fitting service was built around exactly that. We cover
              Manchester, Bolton, Bury, Oldham, Rochdale, Stockport, Tameside, Trafford and Wigan, plus the
              M60, M61, M62, M56, M602, M66, M67 and A627 — so wherever you&apos;re searching for a 24 hour
              tyre service near me, chances are we&apos;re already close by.
            </p>
            <p className="text-slate-600 mb-6 sm:mb-8 leading-relaxed text-base sm:text-lg">
              Every emergency tyre replacement is carried out by a qualified technician using calibrated
              torque tools and genuine parts, and every job includes a TPMS check so your dashboard warning
              lights are cleared before we leave. No hidden fees, no second visit needed — just a fast,
              professional mobile car tyre fitting service that gets you home safely.
            </p>
            <ul className="space-y-4 sm:space-y-5">
              <FeatureItem
                icon="bolt"
                title="24/7 Mobile Tyre Fitting"
                desc="Tyres fitted at your home, workplace or roadside location."
              />
              <FeatureItem
                icon="engineering"
                title="Emergency Tyre Replacement"
                desc="Fast replacement of damaged or unsafe tyres across Greater Manchester."
              />
              <FeatureItem
                icon="sell"
                title="Mobile Puncture Repair"
                desc="Professional, certified repairs carried out where safe and suitable."
              />
            </ul>
          </div>
        </div>
      </section>

      {/* ── 6. HOW IT WORKS ───────────────────────────────── */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-[#0f172a] text-white relative overflow-hidden">
        <div
          className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h2
            className="text-2xl sm:text-[32px] font-bold mb-10 sm:mb-16"
            style={{ fontFamily: 'var(--font-work-sans)', letterSpacing: '-0.01em' }}
          >
            4 Steps To Get You Back On The Road
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-12 relative">
            {[
              { icon: 'tire_repair',    title: 'Confirm Your Tyre Size',           desc: 'Tell us your vehicle and tyre size for an instant match and quote.',                                              rot: 'rotate-3' },
              { icon: 'pin_drop',       title: 'Send Us Your Location',            desc: 'Share your exact location by call or WhatsApp pin for the fastest routing.',                                     rot: '-rotate-3' },
              { icon: 'local_car_wash', title: 'Choose Branded or Economy Tyres', desc: 'Premium brands or budget options — every tyre is quality guaranteed.',                                           rot: 'rotate-3' },
              { icon: 'directions_car', title: 'Get Back On The Road',             desc: 'Our technician completes the mobile tyre replacement on-site. Pay securely and drive away.',                    rot: '-rotate-3' },
            ].map((step, idx) => (
              <div key={step.icon} className="relative">
                <div
                  className={`w-14 h-14 sm:w-20 sm:h-20 bg-[#FF4444] rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-8 shadow-xl ${step.rot}`}
                >
                  <span
                    className="material-symbols-outlined text-white text-[28px] sm:text-[36px]"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >{step.icon}</span>
                </div>
                <h3
                  className="text-base sm:text-xl font-semibold mb-2 sm:mb-4 text-white"
                  style={{ fontFamily: 'var(--font-work-sans)' }}
                >
                  {step.title}
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm">{step.desc}</p>
                {idx < 3 && (
                  <span className="hidden md:block absolute top-10 -right-6 text-[#FF4444] material-symbols-outlined text-3xl">
                    trending_flat
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. BRAND LOGOS ────────────────────────────────── */}
      <BrandCarousel />

      {/* ── 8. CONTACT FORM ───────────────────────────────── */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 lg:gap-16">
          {/* Left */}
          <div className="w-full lg:w-1/3">
            <h2
              className="text-2xl sm:text-4xl text-[#0f172a] mb-4 sm:mb-6 leading-tight font-bold"
              style={{ fontFamily: 'var(--font-work-sans)' }}
            >
              Get a Non-Urgent Quote
            </h2>
            <p className="text-slate-600 mb-6 sm:mb-8 leading-relaxed text-base">
              For emergency call-outs, please phone us directly. For general queries or to book a
              fitting at home later this week, fill in the form.
            </p>
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-slate-100 rounded-full flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[#b70011]">location_on</span>
                </div>
                <div>
                  <p className="font-bold text-[#0f172a] text-base">Service Area</p>
                  <p className="text-sm text-slate-500">
                    Coverage across Greater Manchester and surrounding areas.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-slate-100 rounded-full flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[#b70011]">schedule</span>
                </div>
                <div>
                  <p className="font-bold text-[#0f172a] text-base">Hours</p>
                  <p className="text-sm text-slate-500">Open 24/7 for Emergencies</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="w-full lg:w-2/3">
            <div className="bg-slate-50 p-5 sm:p-8 md:p-12 rounded-2xl sm:rounded-3xl border border-slate-100 shadow-sm">
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>

      {/* ── 9. MAP + LOCATIONS ────────────────────────────── */}
      <ServiceAreasMap />

      {/* ── 10. FAQ ───────────────────────────────────────── */}
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
            <FaqItem
              q="How fast can you reach me for a mobile tyre fitting in Manchester?"
              a="Our average response time across Greater Manchester is 20 to 30 minutes, depending on traffic and your exact location. For genuine roadside emergencies, we prioritise dispatch to get a technician to you as quickly as possible."
            />
            <FaqItem
              q="Are you really available 24 hours a day?"
              a="Yes. Our 24 hour tyre service operates every day of the year, including Christmas Day, New Year's Eve and all Bank Holidays. Whether it's 3pm or 3am, our phone line is answered and a technician is on call."
            />
            <FaqItem
              q="Do you offer same day tyre fitting at home?"
              a="Absolutely. Same day mobile tyre fitting is one of our most requested services — simply call or WhatsApp us your tyre size and postcode, and we'll fit your tyre at home the same day, often within the hour."
            />
            <FaqItem
              q="What's the difference between emergency tyre fitting and a booked appointment?"
              a="Emergency tyre fitting is for drivers who are stranded right now — a blowout, a flat on the roadside, or an unsafe tyre that cannot wait. A booked same day tyre fitting at home appointment is for less urgent needs, like a slow puncture, where we schedule a convenient time on the same or next day."
            />
            <FaqItem
              q="Do you stock my tyre size?"
              a="Our mobile tyre fitting vans carry a wide range of common tyre sizes ready for immediate mobile tyre replacement. For specialist or less common sizes, we have access to local supplier hubs with instant availability, so there is rarely a long wait."
            />
            <FaqItem
              q="Can you fit tyres on the motorway?"
              a="For safety reasons we do not carry out tyre changes on live motorway carriageways or hard shoulders where it is not safe to do so. If you break down on the M60, M61, M62, M56, M602, M66 or M67, we will guide you to the nearest safe location — a service station, slip road or lay-by — and get a technician to you there."
            />
            <FaqItem
              q="How much does emergency mobile tyre fitting cost?"
              a="Pricing depends on your tyre size, brand choice and time of callout. We always confirm the full price by phone or WhatsApp before any work begins, so there are no surprises — just an honest quote for a professional, same day tyre fitting service."
            />
            <FaqItem
              q="What payment methods do you accept?"
              a="We accept all major debit and credit cards, contactless payments, and cash on completion of the job."
            />
            <FaqItem
              q="Do you fit tyres at my workplace as well as at home?"
              a="Yes. Our mobile car tyre fitting service covers home, work and roadside locations across Greater Manchester, so you do not need to take time off or find your own way to a garage."
            />
            <FaqItem
              q="Will you reset my TPMS light after fitting a new tyre?"
              a="Yes, every mobile tyre replacement and puncture repair includes a TPMS check and reset where required, so your dashboard warning light is cleared before our technician leaves."
            />
            <FaqItem
              q="Are your technicians qualified and insured?"
              a="Every technician is fully trained, insured, and carries out puncture repairs to BS AU 159 standard. We are a directly employed, vetted team — not a network of random subcontractors — so you always know the standard of work you are getting."
            />
            <FaqItem
              q="What areas do you cover for mobile tyre fitting?"
              a="We cover Manchester, Bolton, Bury, Oldham, Rochdale, Stockport, Tameside, Trafford and Wigan, along with the M60, M61, M62, M56, M602, M66, M67 and A627. If you are searching for a 24 hour tyre service near me anywhere in Greater Manchester, we are likely already covering your area."
            />
          </div>
        </div>
      </section>

    </div>
  )
}
