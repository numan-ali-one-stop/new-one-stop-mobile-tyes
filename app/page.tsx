import { buildMetadata } from '@/lib/seo'

export const metadata = buildMetadata({
  title: '24/7 Mobile Tyre Service & Repair | Greater Manchester',
  description:
    'Need a tyre service in Greater Manchester? Get 24/7 mobile tyre fitting, tyre repair and emergency tyre replacement across Manchester and surrounding areas.',
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
      name: 'Do you provide a 24/7 tyre service?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We provide a 24/7 tyre service across Greater Manchester for drivers who need assistance with flat, punctured or damaged tyres, including emergency support day and night.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you offer emergency tyres 24/7?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Our emergency tyres 24/7 service is available for urgent tyre problems. We can assess the issue and provide repair or replacement where appropriate and available.',
      },
    },
    {
      '@type': 'Question',
      name: 'How quickly can you reach me?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our typical response time is around 20–30 minutes, although the actual arrival time depends on your location, traffic, road conditions and current demand.',
      },
    },
    {
      '@type': 'Question',
      name: 'What areas do you cover?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We cover Manchester, Bolton, Bury, Oldham, Rochdale, Stockport, Tameside, Trafford and Wigan, providing tyre services throughout Greater Manchester.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you provide tyre services on motorways?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We provide assistance around major routes including the M60, M61, M62, M56, M602, M66, M67 and A627. For your safety, always move to a safe location away from moving traffic where possible.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you repair a punctured tyre?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our technicians can inspect a punctured tyre and determine whether a safe tyre repair is possible. If the damage is unsuitable for repair, we can recommend replacement.',
      },
    },
    {
      '@type': 'Question',
      name: 'When does a tyre need to be replaced instead of repaired?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A tyre may require replacement when the damage is too severe, located in an unsafe area of the tyre, or when its condition means it cannot be safely repaired.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you provide emergency tyre replacement?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We provide emergency tyre replacement when a suitable replacement tyre is available. Our technician will assess the damaged tyre and explain the available options.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you provide tyre fitting?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Our tyre fitting service is available for replacement tyres and can be arranged according to your location and requirements.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you help if I have a flat tyre?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. If you have a flat tyre, contact us with your location and vehicle details. We can assess the problem and advise whether a repair or replacement is the appropriate solution.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I book a tyre service?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Simply contact us by phone and provide your location, vehicle details and tyre requirements. We will confirm the available service and arrange assistance.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does an emergency tyre service cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The cost depends on factors such as the tyre required, your location, the type of work needed and the time of assistance. We aim to keep pricing clear and explain the cost before proceeding.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you check my tyre pressure after fitting?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Our technicians can check tyre pressures after fitting and, where applicable, inspect the TPMS (Tyre Pressure Monitoring System) to help ensure the system is functioning correctly.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you provide tyre fitting at home or work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Where suitable, our tyre service can be arranged at your home, workplace or another safe location, depending on accessibility and the work required.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you provide 24/7 emergency car recovery and tyre fitting?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We provide 24/7 emergency tyre assistance and tyre fitting for tyre-related problems. If you require car recovery in addition to tyre assistance, contact us with your location and vehicle details so we can confirm what help is available.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is One Stop Tyres 247?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'One Stop Tyres 247 provides professional tyre services across Greater Manchester, helping drivers with tyre repair, tyre fitting, replacement and 24/7 emergency tyre assistance.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why choose One Stop Tyres 247?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'One Stop Tyres 247 focuses on fast, reliable and professional tyre service. Our qualified technicians provide clear advice, transparent pricing and practical tyre solutions to help you get safely back on the road.',
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
  sameAs: [
    'https://maps.app.goo.gl/tqGMogzsNNn8EXjH8',
    'https://www.facebook.com/onestoptyres247',
    'https://www.instagram.com/onestoptyres247/',
    'https://www.tiktok.com/@onestoptyres247',
  ],
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

const servicesBreadcrumbSchema = {
  '@context': 'https://schema.org/',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Professional Mobile Tyre Fitting in Greater Manchester',
      item: 'https://onestoptyres247.co.uk/mobile-tyre-fitting',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Home Tyre Fitting in Greater Manchester',
      item: 'https://onestoptyres247.co.uk/home-tyre-fitting',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Professional Tyre Puncture Repair in Greater Manchester',
      item: 'https://onestoptyres247.co.uk/puncture-repair-Greater-manchester',
    },
    {
      '@type': 'ListItem',
      position: 4,
      name: '24/7 Roadside Assistance in Greater Manchester',
      item: 'https://onestoptyres247.co.uk/roadside-assistance',
    },
    {
      '@type': 'ListItem',
      position: 5,
      name: '24/7 Car Battery Jump Start Service in Greater Manchester',
      item: 'https://onestoptyres247.co.uk/car-battery-jump-start',
    },
  ],
}

/* ─── Page ──────────────────────────────────────────────── */
export default function Home() {
  return (
    <div className="text-[#1c1b1b]" style={{ fontFamily: 'var(--font-inter)' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesBreadcrumbSchema) }} />

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
              What Our Customers Say Our Tyre Repair Service in Greater Manchester
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
              Reliable Tyre Service When You Need It
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-5 text-left sm:text-center">
              When a damaged or flat tyre leaves you stranded, getting help quickly matters. One Stop
              Mobile Tyres 24/7 provides professional mobile tyre services across Greater Manchester,
              bringing tyre fitting, tyre repair and replacement directly to your location.
            </p>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-5 text-left sm:text-center">
              Whether you&apos;re at home, at work or dealing with a roadside tyre problem, our mobile team
              can assess the issue and provide the right solution where it is safe to do so. We offer 24/7
              emergency tyre assistance as well as same-day mobile tyre fitting for less urgent
              requirements.
            </p>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed text-left sm:text-center">
              Our aim is simple: provide a fast, professional and convenient tyre service without making
              you drive to a garage.
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
              Our Tyre Services Across Greater Manchester
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-base">
              From emergency tyre problems to planned tyre fitting, our mobile team provides practical
              tyre services at your location.
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
                href: '/puncture-repair-Greater-manchester',
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
                href: '/car-battery-jump-start',
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
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto">
              <a
                href="tel:07759708646"
                className="bg-[#FF4444] text-[#121212] font-black px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-lg sm:text-2xl hover:scale-105 transition-transform shadow-lg shadow-red-900/20 whitespace-nowrap w-full sm:w-auto text-center"
                style={{ fontFamily: 'var(--font-work-sans)' }}
              >
                07759 708 646
              </a>
              <a
                href="tel:01613995851"
                className="bg-[#FF4444] text-[#121212] font-black px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-lg sm:text-2xl hover:scale-105 transition-transform shadow-lg shadow-red-900/20 whitespace-nowrap w-full sm:w-auto text-center"
                style={{ fontFamily: 'var(--font-work-sans)' }}
              >
                0161 399 5851
              </a>
            </div>
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
              Professional Tyre Services &amp; Replacement Across Greater Manchester
            </h2>
            <p className="text-slate-600 mb-4 leading-relaxed text-base sm:text-lg">
              When you&apos;re stuck with a flat, punctured or damaged tyre, you need a fast response and a
              professional you can trust. Our 24/7 tyre service provides emergency assistance across
              Greater Manchester, helping drivers get back on the road safely.
            </p>
            <p className="text-slate-600 mb-4 leading-relaxed text-base sm:text-lg">
              We cover Manchester, Bolton, Bury, Oldham, Rochdale, Stockport, Tameside, Trafford and Wigan,
              as well as major routes including the M60, M61, M62, M56, M602, M66, M67 and A627.
            </p>
            <p className="text-slate-600 mb-6 sm:mb-8 leading-relaxed text-base sm:text-lg">
              Our qualified technicians assess damaged tyres to determine whether a safe tyre repair is
              possible. If repair is not suitable, we can provide tyre replacement and fitting. Every job
              is completed professionally, with a TPMS check where applicable, clear pricing and no
              unnecessary hassle.
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
            How Our Modern Tyre Service Works
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-12 relative">
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
              Get a Tyre Service Quote
            </h2>
            <p className="text-slate-600 mb-6 sm:mb-8 leading-relaxed text-base">
              Need a tyre service but don&apos;t need emergency assistance? Send us your details and
              we&apos;ll get back to you with a quote and available fitting options.
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
              Frequently Asked Questions About Our Tyre Services
            </h2>
          </div>
          <div className="space-y-3 sm:space-y-4">
            <FaqItem
              q="Do you provide a 24/7 tyre service?"
              a="Yes. We provide a 24/7 tyre service across Greater Manchester for drivers who need assistance with flat, punctured or damaged tyres, including emergency support day and night."
            />
            <FaqItem
              q="Do you offer emergency tyres 24/7?"
              a="Yes. Our emergency tyres 24/7 service is available for urgent tyre problems. We can assess the issue and provide repair or replacement where appropriate and available."
            />
            <FaqItem
              q="How quickly can you reach me?"
              a="Our typical response time is around 20–30 minutes, although the actual arrival time depends on your location, traffic, road conditions and current demand."
            />
            <FaqItem
              q="What areas do you cover?"
              a="We cover Manchester, Bolton, Bury, Oldham, Rochdale, Stockport, Tameside, Trafford and Wigan, providing tyre services throughout Greater Manchester."
            />
            <FaqItem
              q="Do you provide tyre services on motorways?"
              a="Yes. We provide assistance around major routes including the M60, M61, M62, M56, M602, M66, M67 and A627. For your safety, always move to a safe location away from moving traffic where possible."
            />
            <FaqItem
              q="Can you repair a punctured tyre?"
              a="Our technicians can inspect a punctured tyre and determine whether a safe tyre repair is possible. If the damage is unsuitable for repair, we can recommend replacement."
            />
            <FaqItem
              q="When does a tyre need to be replaced instead of repaired?"
              a="A tyre may require replacement when the damage is too severe, located in an unsafe area of the tyre, or when its condition means it cannot be safely repaired."
            />
            <FaqItem
              q="Do you provide emergency tyre replacement?"
              a="Yes. We provide emergency tyre replacement when a suitable replacement tyre is available. Our technician will assess the damaged tyre and explain the available options."
            />
            <FaqItem
              q="Do you provide tyre fitting?"
              a="Yes. Our tyre fitting service is available for replacement tyres and can be arranged according to your location and requirements."
            />
            <FaqItem
              q="Can you help if I have a flat tyre?"
              a="Yes. If you have a flat tyre, contact us with your location and vehicle details. We can assess the problem and advise whether a repair or replacement is the appropriate solution."
            />
            <FaqItem
              q="How do I book a tyre service?"
              a="Simply contact us by phone and provide your location, vehicle details and tyre requirements. We will confirm the available service and arrange assistance."
            />
            <FaqItem
              q="How much does an emergency tyre service cost?"
              a="The cost depends on factors such as the tyre required, your location, the type of work needed and the time of assistance. We aim to keep pricing clear and explain the cost before proceeding."
            />
            <FaqItem
              q="Can you check my tyre pressure after fitting?"
              a="Yes. Our technicians can check tyre pressures after fitting and, where applicable, inspect the TPMS (Tyre Pressure Monitoring System) to help ensure the system is functioning correctly."
            />
            <FaqItem
              q="Can you provide tyre fitting at home or work?"
              a="Yes. Where suitable, our tyre service can be arranged at your home, workplace or another safe location, depending on accessibility and the work required."
            />
            <FaqItem
              q="Do you provide 24/7 emergency car recovery and tyre fitting?"
              a="We provide 24/7 emergency tyre assistance and tyre fitting for tyre-related problems. If you require car recovery in addition to tyre assistance, contact us with your location and vehicle details so we can confirm what help is available."
            />
            <FaqItem
              q="What is One Stop Tyres 247?"
              a="One Stop Tyres 247 provides professional tyre services across Greater Manchester, helping drivers with tyre repair, tyre fitting, replacement and 24/7 emergency tyre assistance."
            />
            <FaqItem
              q="Why choose One Stop Tyres 247?"
              a="One Stop Tyres 247 focuses on fast, reliable and professional tyre service. Our qualified technicians provide clear advice, transparent pricing and practical tyre solutions to help you get safely back on the road."
            />
          </div>
        </div>
      </section>

    </div>
  )
}
