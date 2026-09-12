import { buildMetadata } from '@/lib/seo'

export const metadata = buildMetadata({
  title: 'Mobile Tyre Service Manchester | Road Heroes 24/7',
  description:
    'Reliable mobile tyre fitting, repair and replacement across Manchester. Road Heroes 24/7 brings professional tyre assistance to your home, workplace or a suitable roadside location, 24/7.',
  path: '/',
})

import BrandCarousel from '@/components/BrandCarousel'
import QuoteForm from '@/components/QuoteForm'
import ReviewsCarousel from '@/components/ReviewsCarousel'
import HeroSlider from '@/components/HeroSlider'
import ServiceAreasMap from '@/components/ServiceAreasMap'
import WhyChooseGrid from '@/components/WhyChooseGrid'
import Reveal from '@/components/Reveal'
import { SITE_URL } from '@/lib/schema'

/* ─── Simple checklist item ─────────────────────────────── */
function CheckItem({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-2.5 text-slate-700">
      <span
        className="material-symbols-outlined text-[#b70011] shrink-0"
        style={{ fontSize: '20px', fontVariationSettings: "'FILL' 1" }}
      >
        check_circle
      </span>
      <span className="text-sm sm:text-base font-medium leading-snug">{text}</span>
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

/* ─── Data ──────────────────────────────────────────────── */

const faqs = [
  {
    q: 'What is a Mobile Tyre Service Manchester?',
    a: 'A Mobile Tyre Service Manchester brings tyre fitting, replacement and suitable tyre assistance directly to your location. Depending on access and safety, service can be provided at home, work or a suitable roadside location.',
  },
  {
    q: 'How does Mobile Tyre Fitting Manchester work?',
    a: 'Contact Road Heroes 24/7 with your location and vehicle details. Once the required service is confirmed, mobile tyre assistance can be arranged at a suitable location, subject to tyre availability and safe working conditions.',
  },
  {
    q: 'Do you provide Emergency Mobile Tyre Fitting Manchester?',
    a: 'Yes, Road Heroes 24/7 provides emergency mobile tyre fitting for suitable tyre problems across Manchester, subject to location, availability and safe access.',
  },
  {
    q: 'Where can I get mobile tyre fitting in Manchester?',
    a: 'Mobile tyre fitting may be available at your home, workplace, car park or suitable roadside location across Manchester. The location must provide safe and appropriate access for the mobile service.',
  },
  {
    q: 'Can you replace a damaged tyre at the roadside?',
    a: 'Yes, suitable damaged tyres can be replaced at an accessible roadside location, subject to the correct tyre being available and safe working conditions.',
  },
  {
    q: 'Do you provide Mobile Tyre Replacement Manchester?',
    a: 'Yes. Road Heroes 24/7 provides mobile tyre replacement for suitable vehicles across Manchester, subject to tyre size, availability and location.',
  },
  {
    q: 'Do you offer a 24 Hour Mobile Tyre Service Manchester?',
    a: 'Road Heroes 24/7 provides a 24 hour mobile tyre service for suitable requirements, subject to availability, location and safe working conditions.',
  },
  {
    q: 'What information do I need when booking a mobile tyre service?',
    a: 'You should provide your vehicle registration where possible, your location and details about the tyre problem. Your tyre size can also help identify the correct replacement tyre.',
  },
  {
    q: 'Can you repair a punctured tyre?',
    a: 'Some punctures may be suitable for repair, while others require replacement. The appropriate option depends on the location and severity of the damage and whether the tyre remains safe to use.',
  },
  {
    q: 'Can I get mobile tyre fitting at home?',
    a: 'Yes, mobile tyre fitting can be arranged at suitable residential locations where there is safe access and enough space to complete the work.',
  },
  {
    q: 'Can you fit tyres at my workplace?',
    a: 'Yes, workplace tyre fitting can be arranged where the location provides suitable and safe access for the mobile service.',
  },
  {
    q: 'What should I do if I have a flat tyre in Manchester?',
    a: 'If possible, stop in a safe location and avoid driving on a flat or seriously damaged tyre. Contact Road Heroes 24/7 and provide your location and vehicle details so the appropriate mobile tyre service can be arranged.',
  },
  {
    q: 'Do you provide mobile tyre services across Greater Manchester?',
    a: 'Road Heroes 24/7 provides mobile tyre assistance across Manchester and suitable surrounding areas, subject to location, availability and safe working conditions.',
  },
  {
    q: 'Why choose a mobile tyre service instead of visiting a garage?',
    a: 'Mobile tyre fitting can save travel time and reduce the inconvenience of taking your vehicle to a tyre centre. The service comes to a suitable location, making tyre fitting and replacement more convenient.',
  },
  {
    q: 'When should I replace my tyre?',
    a: 'A tyre may require replacement when it has significant wear, severe puncture damage, sidewall damage or another condition that makes it unsuitable or unsafe for continued use.',
  },
]

const coverageAreas = [
  { name: 'Manchester City Centre', slug: 'manchester' },
  { name: 'Longsight', slug: 'manchester' },
  { name: 'Rusholme', slug: 'manchester' },
  { name: 'Fallowfield', slug: 'fallowfield' },
  { name: 'Withington', slug: 'manchester' },
  { name: 'Didsbury', slug: 'didsbury' },
  { name: 'Wythenshawe', slug: 'wythenshawe' },
  { name: 'Chorlton cum Hardy', slug: 'chorlton-cum-hardy' },
  { name: 'Moss Side', slug: 'moss-side' },
  { name: 'Hulme', slug: 'hulme' },
  { name: 'Ardwick', slug: 'manchester' },
  { name: 'Gorton', slug: 'manchester' },
  { name: 'Beswick', slug: 'beswick' },
  { name: 'Newton Heath', slug: 'newton-heath' },
  { name: 'Cheetham Hill', slug: 'cheetham-hill' },
  { name: 'Blackley', slug: 'blackley' },
  { name: 'Salford', slug: 'salford' },
  { name: 'Trafford', slug: 'trafford' },
  { name: 'Stockport', slug: 'stockport' },
  { name: 'Oldham', slug: 'oldham' },
  { name: 'Rochdale', slug: 'rochdale' },
  { name: 'Bury', slug: 'bury' },
  { name: 'Bolton', slug: 'bolton' },
  { name: 'Tameside', slug: 'tameside' },
  { name: 'Wigan', slug: 'wigan' },
]

const whyChooseUs = [
  {
    icon: 'directions_car',
    title: 'We Come To You',
    desc: 'You do not always need to drive to a tyre centre. Where safe access is available, our mobile service can come to your location.',
  },
  {
    icon: 'bolt',
    title: 'Convenient Service',
    desc: 'Mobile tyre fitting can save unnecessary travel and reduce disruption to your day.',
  },
  {
    icon: 'emergency',
    title: 'Emergency Assistance',
    desc: 'When an unexpected tyre problem leaves you unable to continue your journey safely, mobile assistance can provide a practical option.',
  },
  {
    icon: 'home_repair_service',
    title: 'Home And Workplace Fitting',
    desc: 'Where access is suitable, tyres can be fitted at home or at your workplace.',
  },
  {
    icon: 'schedule',
    title: '24 Hour Availability',
    desc: 'Our 24 hour mobile tyre service provides an option for customers who need assistance outside normal garage hours, subject to availability.',
  },
  {
    icon: 'task_alt',
    title: 'Straightforward Process',
    desc: 'We aim to make the process simple from the first contact through to completing the required tyre service.',
  },
]

const steps = [
  {
    n: '1',
    title: 'Contact Road Heroes 24/7',
    desc: 'Tell us where your vehicle is located and explain the tyre problem.',
  },
  {
    n: '2',
    title: 'Provide Your Vehicle Details',
    desc: 'Where possible, provide your vehicle registration, tyre size and information about the tyre issue.',
  },
  {
    n: '3',
    title: 'Discuss The Required Service',
    desc: 'We can identify whether your requirement is for tyre fitting, replacement, repair or emergency assistance.',
  },
  {
    n: '4',
    title: 'Arrange Mobile Assistance',
    desc: 'A suitable mobile service can attend your location where access and working conditions allow.',
  },
  {
    n: '5',
    title: 'Get Back On The Road',
    desc: 'Once the required work has been completed and the vehicle is safe to continue, you can continue your journey.',
  },
]

/* ─── Structured data ───────────────────────────────────── */
/* Full LocalBusiness entity is injected site-wide via the root layout. */
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${SITE_URL}/#organization`,
  name: 'Road Heroes 24/7',
  url: SITE_URL,
  logo: {
    '@type': 'ImageObject',
    url: `${SITE_URL}/icon.webp`,
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
  '@id': `${SITE_URL}/#website`,
  url: SITE_URL,
  name: 'Road Heroes 24/7',
  description: 'Mobile Tyre Service Manchester — 24/7 mobile tyre fitting, repair and replacement across Manchester.',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${SITE_URL}/?q={search_term_string}`,
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

      {/* ── 2. LANDING INTRO ─────────────────────────────── */}
      <section className="relative py-16 sm:py-24 px-4 sm:px-6 bg-white overflow-hidden">
        <div
          className="absolute -top-24 -right-24 w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-[#b70011]/[0.04] blur-3xl pointer-events-none"
          aria-hidden="true"
        />
        <div className="max-w-4xl mx-auto relative">
          <Reveal className="text-center mb-2">
            <span className="text-[#b70011] font-bold uppercase tracking-widest text-sm mb-3 block">
              Road Heroes 24/7
            </span>
            <h2
              className="text-2xl sm:text-[32px] font-bold text-[#0f172a] mb-6 leading-tight"
              style={{ fontFamily: 'var(--font-work-sans)', letterSpacing: '-0.01em' }}
            >
              Mobile Tyre Service Manchester
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-5 text-left sm:text-center">
              A flat, damaged or worn tyre can cause serious disruption to your day. You may be at
              home, heading to work, parked outside your business or stuck with a tyre problem
              during your journey.
            </p>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-5 text-left sm:text-center">
              Road Heroes 24/7 provides a convenient <strong>Mobile Tyre Service Manchester</strong>{' '}
              for drivers who need professional tyre assistance without the inconvenience of
              visiting a traditional garage.
            </p>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-5 text-left sm:text-center">
              Our mobile approach means that, where access and working conditions are suitable,
              tyre services can be carried out at your location.
            </p>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed text-left sm:text-center">
              Whether you need a new tyre fitted, a damaged tyre replaced or emergency assistance,
              our service is designed to make the process straightforward.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── 3. MOBILE TYRE FITTING MANCHESTER ─────────────── */}
      <section id="mobile-tyre-fitting-manchester" className="py-16 sm:py-24 px-4 sm:px-6 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 sm:gap-12 lg:gap-20 items-center">
          <Reveal className="w-full lg:w-1/2 group">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/mobile-tyre-fitting-service.webp"
              alt="Mobile tyre fitting technician in Manchester"
              className="w-full rounded-2xl sm:rounded-3xl shadow-2xl object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              width={800}
              height={600}
              loading="lazy"
              decoding="async"
            />
          </Reveal>
          <Reveal className="w-full lg:w-1/2" delay={100}>
            <span className="text-[#b70011] font-bold uppercase tracking-widest text-sm mb-3 block">
              Tyres Fitted At Your Location
            </span>
            <h2
              className="text-2xl sm:text-4xl font-bold text-[#0f172a] mb-5 leading-tight"
              style={{ fontFamily: 'var(--font-work-sans)' }}
            >
              Mobile Tyre Fitting Manchester
            </h2>
            <p className="text-slate-600 text-base leading-relaxed mb-4">
              Need new tyres but do not have time to visit a tyre centre? Our{' '}
              <strong>Mobile Tyre Fitting Manchester</strong> service brings tyre fitting directly
              to a suitable location.
            </p>
            <p className="text-slate-600 text-base leading-relaxed mb-6">
              This can be particularly useful if your tyres need changing at home, at work or when
              you cannot conveniently take your vehicle to a garage. Our aim is to make tyre
              fitting more convenient while keeping the service professional and focused on your
              vehicle requirements.
            </p>
            <p className="text-[#0f172a] font-semibold mb-3">Mobile tyre fitting can help with:</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5">
              {[
                'New tyre fitting',
                'Worn tyre replacement',
                'Puncture related tyre replacement',
                'Tyre changes at home',
                'Tyre fitting at suitable workplaces',
                'Emergency tyre fitting',
                'Car and suitable van tyre requirements',
              ].map((item) => (
                <CheckItem key={item} text={item} />
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* ── 4. EMERGENCY MOBILE TYRE FITTING MANCHESTER ───── */}
      <section id="emergency-mobile-tyre-fitting-manchester" className="py-16 sm:py-24 px-4 sm:px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row-reverse gap-10 sm:gap-12 lg:gap-20 items-center">
          <Reveal className="w-full lg:w-1/2 group">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/tyre-fitting-in-emergency.webp"
              alt="Emergency mobile tyre fitting in Manchester"
              className="w-full rounded-2xl sm:rounded-3xl shadow-2xl object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              width={800}
              height={600}
              loading="lazy"
              decoding="async"
            />
          </Reveal>
          <Reveal className="w-full lg:w-1/2" delay={100}>
            <span className="text-[#b70011] font-bold uppercase tracking-widest text-sm mb-3 block">
              Available Day &amp; Night
            </span>
            <h2
              className="text-2xl sm:text-4xl font-bold text-[#0f172a] mb-5 leading-tight"
              style={{ fontFamily: 'var(--font-work-sans)' }}
            >
              Emergency Mobile Tyre Fitting Manchester
            </h2>
            <p className="text-slate-600 text-base leading-relaxed mb-4">
              A tyre problem can happen without warning. A sudden puncture, damaged sidewall or
              complete tyre failure can leave you unable to continue your journey safely.
            </p>
            <p className="text-slate-600 text-base leading-relaxed mb-4">
              Our <strong>Emergency Mobile Tyre Fitting Manchester</strong> service is designed for
              situations where you need mobile tyre assistance at a suitable location. Instead of
              trying to drive a damaged vehicle to a garage, you can contact Road Heroes 24/7 and
              provide your location and vehicle information.
            </p>
            <p className="text-[#0f172a] font-semibold mb-3">
              Emergency mobile tyre assistance can be useful when:
            </p>
            <ul className="space-y-2.5 mb-6">
              {[
                'Your tyre has suffered a serious puncture',
                'Your tyre has lost significant pressure',
                'Your tyre has visible damage',
                'You have experienced a tyre blowout',
                'Your tyre cannot safely be driven on',
                'You need a replacement tyre to continue your journey',
              ].map((item) => (
                <CheckItem key={item} text={item} />
              ))}
            </ul>
            <p className="text-slate-500 text-sm leading-relaxed italic">
              If your vehicle is stopped on a busy or unsafe road, prioritise your safety and move
              to a safe location where possible.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── 5. MOBILE TYRE REPLACEMENT MANCHESTER ─────────── */}
      <section id="mobile-tyre-replacement-manchester" className="py-16 sm:py-24 px-4 sm:px-6 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 sm:gap-12 lg:gap-20 items-center">
          <Reveal className="w-full lg:w-1/2 group">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/professional-mobile-tyre-fitting.webp"
              alt="Mobile tyre replacement in Manchester"
              className="w-full rounded-2xl sm:rounded-3xl shadow-2xl object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              width={800}
              height={600}
              loading="lazy"
              decoding="async"
            />
          </Reveal>
          <Reveal className="w-full lg:w-1/2" delay={100}>
            <span className="text-[#b70011] font-bold uppercase tracking-widest text-sm mb-3 block">
              Subject To Tyre Availability
            </span>
            <h2
              className="text-2xl sm:text-4xl font-bold text-[#0f172a] mb-5 leading-tight"
              style={{ fontFamily: 'var(--font-work-sans)' }}
            >
              Mobile Tyre Replacement Manchester
            </h2>
            <p className="text-slate-600 text-base leading-relaxed mb-4">
              Not every damaged tyre can or should be repaired. When a tyre is unsuitable for
              repair, replacement may be the safest option. Road Heroes 24/7 provides{' '}
              <strong>Mobile Tyre Replacement Manchester</strong> for suitable vehicles and
              locations, subject to tyre availability.
            </p>
            <p className="text-[#0f172a] font-semibold mb-3">
              Our mobile replacement service can be useful for tyres affected by:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5 mb-6">
              {[
                'Severe punctures',
                'Sidewall damage',
                'Excessive tread wear',
                'Road impact damage',
                'Tyre failure',
                'Damage that makes the tyre unsuitable for repair',
              ].map((item) => (
                <CheckItem key={item} text={item} />
              ))}
            </ul>
            <p className="text-slate-600 text-base leading-relaxed">
              Providing your vehicle registration or tyre size can help us understand your tyre
              requirements and identify suitable replacement options.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── 6. 24 HOUR MOBILE TYRE SERVICE MANCHESTER ─────── */}
      <section id="24-hour-mobile-tyre-service-manchester" className="relative py-16 sm:py-24 px-4 sm:px-6 bg-gradient-to-b from-white to-slate-50 overflow-hidden">
        <Reveal className="max-w-4xl mx-auto text-center relative">
          <span className="text-[#b70011] font-bold uppercase tracking-widest text-sm mb-3 block">
            Round-The-Clock Cover
          </span>
          <h2
            className="text-2xl sm:text-[32px] font-bold text-[#0f172a] mb-6 leading-tight"
            style={{ fontFamily: 'var(--font-work-sans)', letterSpacing: '-0.01em' }}
          >
            24 Hour Mobile Tyre Service Manchester
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-5">
            Tyre problems do not always happen during normal garage opening hours. A flat tyre can
            happen early in the morning, late at night, during a weekend or while you are
            travelling.
          </p>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-5">
            Road Heroes 24/7 provides a <strong>24 Hour Mobile Tyre Service Manchester</strong> for
            suitable tyre requirements, subject to location, availability and safe working
            conditions. Our 24 hour service is designed to provide greater flexibility for drivers
            who need mobile tyre assistance outside traditional working hours.
          </p>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-8">
            Whether you are dealing with an unexpected tyre problem or need mobile tyre fitting at
            a convenient time, our team can help you arrange the appropriate service.
          </p>
          <a
            href="tel:07759708646"
            className="inline-flex bg-[#FF4444] text-[#121212] font-black px-8 py-4 rounded-xl shadow-2xl shadow-red-900/40 items-center justify-center gap-2.5 hover:bg-red-700 hover:text-white transition-all text-base sm:text-lg"
            style={{ fontFamily: 'var(--font-work-sans)' }}
          >
            <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>call</span>
            07759 708 646
          </a>
        </Reveal>
      </section>

      {/* ── 7. OUR MOBILE TYRE SERVICES ────────────────────── */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <Reveal className="text-center mb-10 sm:mb-16">
            <span className="text-[#b70011] font-bold uppercase tracking-widest text-sm mb-2 block">
              What We Do
            </span>
            <h2
              className="text-2xl sm:text-[32px] font-bold text-slate-900 mb-3 leading-tight"
              style={{ fontFamily: 'var(--font-work-sans)', letterSpacing: '-0.01em' }}
            >
              Our Mobile Tyre Services
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {[
              {
                img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Emergency%20Tyre%20Fitting%20one%20Stop-airanko-gsjvsGamoet8drKwCMHYr6LH5Ni6ZI.webp',
                title: 'Mobile Tyre Fitting',
                desc: 'Professional tyre fitting at a suitable location, helping you avoid an unnecessary trip to a garage.',
                badge: 'AT YOUR LOCATION',
                href: '/mobile-tyre-fitting',
              },
              {
                img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Home%20Tyre%20Fitting%20One%20Stop-airanko-kPAsyn08SjxXwLwCVhxre5zM9jWBTs.webp',
                title: 'Mobile Tyre Replacement',
                desc: 'Replacement tyres can be supplied and fitted where suitable, subject to tyre size and availability.',
                badge: 'SUBJECT TO AVAILABILITY',
                href: '/mobile-tyre-fitting-manchester',
              },
              {
                img: '/images/tyre-fitting-in-emergency.webp',
                title: 'Emergency Tyre Fitting',
                desc: 'Mobile assistance for unexpected tyre problems when you cannot safely continue your journey.',
                badge: '24/7 SERVICE',
                href: '/24-hour-emergency-tyre-fitting',
              },
              {
                img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Puncture%20Repair%20One%20Stop-airanko-sfmhLvDbSYmhoMprTVOHCcIWEgJvHf.webp',
                title: 'Mobile Tyre Repair',
                desc: 'Where a puncture or tyre issue is safe and suitable for repair, mobile assistance may be available.',
                badge: 'WHERE SUITABLE',
                href: '/puncture-repair-Greater-manchester',
              },
              {
                img: '/images/tyres-fitting-anywhere.webp',
                title: 'Mobile Puncture Assistance',
                desc: 'If you have a puncture at home, work or a suitable roadside location, mobile tyre assistance can provide a convenient solution.',
                badge: 'HOME, WORK OR ROADSIDE',
                href: '/puncture-repair-Greater-manchester',
              },
            ].map((card, i) => (
              <Reveal key={card.title} delay={i * 60}>
              <a
                href={card.href}
                className="group block h-full bg-white rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden border-b-4 border-[#b70011] cursor-pointer"
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
              </Reveal>
            ))}
          </div>

          {/* CTA strip */}
          <Reveal className="mt-10 sm:mt-12 bg-[#0f172a] rounded-2xl sm:rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-5 shadow-2xl text-center sm:text-left">
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
          </Reveal>
        </div>
      </section>

      {/* ── 8. WHY CHOOSE ROAD HEROES 24/7 ─────────────────── */}
      <WhyChooseGrid
        heading="Why Choose Road Heroes 24/7?"
        intro="Choosing the right mobile tyre service is about more than simply getting a tyre fitted. You need a service that understands the inconvenience caused by tyre problems and provides a straightforward solution."
        items={whyChooseUs}
      />

      {/* ── 9. MOBILE TYRE FITTING AT HOME MANCHESTER ─────── */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 sm:gap-12 lg:gap-20 items-center">
          <Reveal className="w-full lg:w-1/2 group">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/tyre-fitting-at-home.webp"
              alt="Mobile tyre fitting at home in Manchester"
              className="w-full rounded-2xl sm:rounded-3xl shadow-2xl object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              width={800}
              height={600}
              loading="lazy"
              decoding="async"
            />
          </Reveal>
          <Reveal className="w-full lg:w-1/2" delay={100}>
            <span className="text-[#b70011] font-bold uppercase tracking-widest text-sm mb-3 block">
              At Your Door
            </span>
            <h2
              className="text-2xl sm:text-4xl font-bold text-[#0f172a] mb-5 leading-tight"
              style={{ fontFamily: 'var(--font-work-sans)' }}
            >
              Mobile Tyre Fitting At Home Manchester
            </h2>
            <p className="text-slate-600 text-base leading-relaxed mb-4">
              You do not always discover a tyre problem while driving. You may find a flat tyre
              when you are preparing for work or notice that a tyre has lost pressure while your
              vehicle is parked outside your home.
            </p>
            <p className="text-slate-600 text-base leading-relaxed mb-4">
              Driving on a severely damaged or flat tyre can cause additional damage and may
              create a safety risk. With mobile tyre fitting, you can arrange suitable assistance
              without needing to take your vehicle to a tyre centre.
            </p>
            <p className="text-slate-600 text-base leading-relaxed">
              Road Heroes 24/7 can provide mobile tyre assistance at suitable residential locations
              across Manchester, subject to access and working conditions.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── 10. MOBILE TYRE FITTING AT WORK ────────────────── */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row-reverse gap-10 sm:gap-12 lg:gap-20 items-center">
          <Reveal className="w-full lg:w-1/2 group">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/mobile-tyre-fitting-one-stop-tyres-24-7.webp"
              alt="Mobile tyre fitting at the workplace in Manchester"
              className="w-full rounded-2xl sm:rounded-3xl shadow-2xl object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              width={800}
              height={600}
              loading="lazy"
              decoding="async"
            />
          </Reveal>
          <Reveal className="w-full lg:w-1/2" delay={100}>
            <span className="text-[#b70011] font-bold uppercase tracking-widest text-sm mb-3 block">
              No Need To Leave Work
            </span>
            <h2
              className="text-2xl sm:text-4xl font-bold text-[#0f172a] mb-5 leading-tight"
              style={{ fontFamily: 'var(--font-work-sans)' }}
            >
              Mobile Tyre Fitting At Work
            </h2>
            <p className="text-slate-600 text-base leading-relaxed mb-4">
              A tyre problem can also interrupt your working day. Instead of leaving work to visit
              a garage, mobile tyre fitting can allow the service to come to a suitable workplace
              location.
            </p>
            <p className="text-slate-600 text-base leading-relaxed mb-4">
              This can be useful for employees, business owners and drivers who rely on their
              vehicles during the working day.
            </p>
            <p className="text-slate-600 text-base leading-relaxed">
              Where there is suitable access and a safe working environment, Road Heroes 24/7 can
              provide mobile tyre assistance at your workplace.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── 11. EMERGENCY TYRE SERVICE ACROSS MANCHESTER + AREAS ── */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <Reveal className="max-w-2xl mx-auto text-center mb-10 sm:mb-14">
            <span className="text-[#b70011] font-bold uppercase tracking-widest text-sm mb-3 block">
              Service Area Coverage
            </span>
            <h2
              className="text-2xl sm:text-4xl font-bold text-[#0f172a] mb-5 leading-tight"
              style={{ fontFamily: 'var(--font-work-sans)' }}
            >
              Emergency Tyre Service Across Manchester
            </h2>
            <p className="text-slate-600 text-base leading-relaxed mb-4">
              Manchester has busy city roads, residential areas, commercial districts and major
              routes connecting the city with surrounding areas. A tyre problem can happen
              anywhere during your journey.
            </p>
            <p className="text-slate-600 text-base leading-relaxed">
              Road Heroes 24/7 provides mobile tyre assistance across suitable Manchester
              locations, helping drivers arrange tyre fitting and replacement without
              unnecessarily driving a damaged vehicle. Our service can be relevant for drivers in
              Manchester city centre as well as surrounding areas.
            </p>
          </Reveal>

          <Reveal>
            <p className="text-center text-[#0f172a] font-semibold mb-2">Areas We Cover Across Manchester</p>
            <p className="text-center text-slate-500 text-sm mb-5">We cover areas including:</p>

            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 max-w-4xl mx-auto mb-10">
              {coverageAreas.map((area, i) => (
                <a
                  key={`${area.name}-${i}`}
                  href={`/mobile-tyre-fitting-${area.slug}`}
                  className="inline-flex items-center gap-1.5 bg-slate-50 hover:bg-[#b70011] hover:text-white text-[#0f172a] font-semibold text-xs sm:text-sm px-3 sm:px-4 py-2 sm:py-2.5 rounded-full border border-slate-200 hover:border-[#b70011] transition-colors"
                >
                  {area.name}
                  <span className="material-symbols-outlined text-[16px] hidden sm:inline">arrow_forward</span>
                </a>
              ))}
            </div>

            <p className="text-slate-600 text-base leading-relaxed max-w-2xl mx-auto text-center">
              If you are outside these areas, contact Road Heroes 24/7 with your location and tyre
              requirements to check service availability.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── 12. CARS, VANS, REPLACEMENT & BUSY DRIVERS ─────── */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <Reveal className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <div className="w-12 h-12 bg-[#b70011]/10 rounded-full flex items-center justify-center mb-4">
              <span className="material-symbols-outlined text-[#b70011]">directions_car</span>
            </div>
            <h3
              className="text-lg sm:text-xl font-bold text-[#0f172a] mb-3"
              style={{ fontFamily: 'var(--font-work-sans)' }}
            >
              Mobile Tyre Service For Cars And Vans
            </h3>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Road Heroes 24/7 can provide mobile tyre assistance for suitable cars and light
              commercial vehicles, subject to tyre requirements and availability. For van drivers
              and small businesses, tyre problems can create additional disruption because the
              vehicle may be essential for daily work. Whether you use your vehicle for commuting,
              family travel or business purposes, keeping your tyres in good condition is
              essential.
            </p>
          </Reveal>

          <Reveal delay={80} className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <div className="w-12 h-12 bg-[#b70011]/10 rounded-full flex items-center justify-center mb-4">
              <span className="material-symbols-outlined text-[#b70011]">tire_repair</span>
            </div>
            <h3
              className="text-lg sm:text-xl font-bold text-[#0f172a] mb-3"
              style={{ fontFamily: 'var(--font-work-sans)' }}
            >
              Tyre Replacement When You Need It
            </h3>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-3">
              Tyres naturally wear over time, but unexpected damage can also make replacement
              necessary. A tyre may require replacement because of:
            </p>
            <ul className="space-y-1.5">
              {[
                'Severe puncture damage',
                'Sidewall damage',
                'Excessive tread wear',
                'Impact damage',
                'Age and condition',
                'Damage that cannot be safely repaired',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-slate-600 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#b70011] mt-2 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={160} className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 sm:col-span-2 lg:col-span-1">
            <div className="w-12 h-12 bg-[#b70011]/10 rounded-full flex items-center justify-center mb-4">
              <span className="material-symbols-outlined text-[#b70011]">schedule</span>
            </div>
            <h3
              className="text-lg sm:text-xl font-bold text-[#0f172a] mb-3"
              style={{ fontFamily: 'var(--font-work-sans)' }}
            >
              Mobile Tyre Service For Busy Drivers
            </h3>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Finding time to visit a tyre centre can be difficult. Work commitments, family
              responsibilities and daily travel can make a simple tyre change more complicated
              than expected. A mobile tyre service provides a more convenient alternative by
              allowing suitable tyre work to be carried out at an accessible location, helping you
              reduce unnecessary travel and avoid spending additional time waiting at a
              traditional tyre centre.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── 13. SIMPLE MOBILE TYRE SERVICE PROCESS ─────────── */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-[#0f172a] text-white relative overflow-hidden">
        <div
          className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
        <div className="max-w-7xl mx-auto relative z-10">
          <Reveal className="text-center mb-12 sm:mb-16">
            <span className="text-[#FF4444] font-bold uppercase tracking-widest text-sm mb-3 block">
              Simple Process
            </span>
            <h2
              className="text-2xl sm:text-[32px] font-bold"
              style={{ fontFamily: 'var(--font-work-sans)', letterSpacing: '-0.01em' }}
            >
              Simple Mobile Tyre Service Process
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-6 relative">
            {steps.map((step, idx) => (
              <Reveal key={step.n} delay={idx * 80} className="relative text-center lg:text-left">
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
                <p className="text-slate-400 text-sm sm:text-base leading-relaxed">{step.desc}</p>
                {idx < steps.length - 1 && (
                  <span className="hidden lg:block absolute top-7 -right-3 text-[#FF4444] material-symbols-outlined text-3xl">
                    trending_flat
                  </span>
                )}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 14. BRAND LOGOS ────────────────────────────────── */}
      <BrandCarousel />

      {/* ── 15. WHAT OUR CUSTOMERS SAY ─────────────────────── */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <Reveal className="text-center mb-10 sm:mb-14">
            <span className="text-[#b70011] font-bold uppercase tracking-widest text-sm mb-3 block">
              Google Reviews
            </span>
            <h2
              className="text-2xl sm:text-[32px] font-bold text-[#0f172a] mb-4"
              style={{ fontFamily: 'var(--font-work-sans)', letterSpacing: '-0.01em' }}
            >
              What Our Customers Say
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-base mb-6">
              At Road Heroes 24/7, our goal is to provide a professional and convenient experience
              from the first contact to the completion of the tyre service.
            </p>
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
          </Reveal>

          <ReviewsCarousel />

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

      {/* ── 16. MANCHESTER MOBILE TYRE SERVICE RECAP ───────── */}
      <section className="relative py-16 sm:py-24 px-4 sm:px-6 bg-white overflow-hidden">
        <div
          className="absolute -bottom-24 -left-24 w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-[#b70011]/[0.04] blur-3xl pointer-events-none"
          aria-hidden="true"
        />
        <Reveal className="max-w-4xl mx-auto text-center relative">
          <span className="text-[#b70011] font-bold uppercase tracking-widest text-sm mb-3 block">
            Trusted Across Manchester
          </span>
          <h2
            className="text-2xl sm:text-[32px] font-bold text-[#0f172a] mb-6 leading-tight"
            style={{ fontFamily: 'var(--font-work-sans)', letterSpacing: '-0.01em' }}
          >
            Manchester Mobile Tyre Service You Can Rely On
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-4">
            A damaged or flat tyre can quickly disrupt your plans. You may not have time to visit
            a garage, and driving on a damaged tyre may not be safe.
          </p>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-4">
            Road Heroes 24/7 provides a convenient <strong>Mobile Tyre Service Manchester</strong>{' '}
            for customers who need professional tyre assistance at a suitable location. From
            everyday tyre fitting to emergency tyre replacement, our mobile approach is designed
            to make the process easier.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {[
              { label: 'Mobile Tyre Fitting Manchester', href: '#mobile-tyre-fitting-manchester' },
              { label: 'Emergency Mobile Tyre Fitting Manchester', href: '#emergency-mobile-tyre-fitting-manchester' },
              { label: 'Mobile Tyre Replacement Manchester', href: '#mobile-tyre-replacement-manchester' },
              { label: '24 Hour Mobile Tyre Service Manchester', href: '#24-hour-mobile-tyre-service-manchester' },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="inline-flex items-center gap-1.5 bg-slate-50 hover:bg-[#b70011] hover:text-white text-[#0f172a] font-semibold text-sm px-4 py-2.5 rounded-full border border-slate-200 hover:border-[#b70011] transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ── 17. CONTACT FORM ───────────────────────────────── */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 lg:gap-16">
          <Reveal className="w-full lg:w-1/3">
            <h2
              className="text-2xl sm:text-4xl text-[#0f172a] mb-4 sm:mb-6 leading-tight font-bold"
              style={{ fontFamily: 'var(--font-work-sans)' }}
            >
              Get a Mobile Tyre Service Quote
            </h2>
            <p className="text-slate-600 mb-6 sm:mb-8 leading-relaxed text-base">
              Need a tyre service but don&apos;t need emergency assistance? Send us your details
              and we&apos;ll get back to you with a quote and available fitting options.
            </p>
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[#b70011]">location_on</span>
                </div>
                <div>
                  <p className="font-bold text-[#0f172a] text-base">Service Area</p>
                  <p className="text-sm text-slate-500">
                    Coverage across Manchester and suitable surrounding areas.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[#b70011]">schedule</span>
                </div>
                <div>
                  <p className="font-bold text-[#0f172a] text-base">Hours</p>
                  <p className="text-sm text-slate-500">Open 24/7 for Emergencies</p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal className="w-full lg:w-2/3" delay={100}>
            <div className="bg-white p-5 sm:p-8 md:p-12 rounded-2xl sm:rounded-3xl border border-slate-100 shadow-sm">
              <QuoteForm />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 18. MAP + LOCATIONS ────────────────────────────── */}
      <ServiceAreasMap />

      {/* ── 19. FINAL CTA ───────────────────────────────────── */}
      <section className="relative py-16 sm:py-20 px-4 sm:px-6 bg-[#0f172a] text-white text-center overflow-hidden">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[480px] h-[480px] rounded-full bg-[#FF4444]/[0.06] blur-3xl pointer-events-none"
          aria-hidden="true"
        />
        <Reveal className="relative">
          <h2
            className="text-2xl sm:text-3xl font-bold mb-3"
            style={{ fontFamily: 'var(--font-work-sans)' }}
          >
            Get Mobile Tyre Assistance In Manchester
          </h2>
          <p className="text-slate-400 text-base mb-8 max-w-lg mx-auto">
            Need a tyre fitted or replaced? Road Heroes 24/7 provides mobile tyre assistance across
            Manchester and suitable surrounding areas. Whether you are at home, at work or dealing
            with a tyre problem at a suitable roadside location, contact us to discuss your tyre
            requirements.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-10">
            <a
              href="tel:07759708646"
              className="w-full md:w-auto bg-[#FF4444] text-[#121212] font-black px-10 py-4 rounded-xl shadow-2xl shadow-red-900/40 flex items-center justify-center gap-2.5 hover:bg-red-700 hover:text-white transition-all text-lg sm:text-xl"
              style={{ fontFamily: 'var(--font-work-sans)' }}
            >
              <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>call</span>
              Call Road Heroes 24/7
            </a>
            <a
              href="/contact"
              className="w-full md:w-auto bg-white/10 border border-white/20 text-white font-black px-10 py-4 rounded-xl flex items-center justify-center gap-2.5 hover:bg-white/20 transition-all text-lg sm:text-xl"
              style={{ fontFamily: 'var(--font-work-sans)' }}
            >
              Get In Touch
            </a>
          </div>

          <div className="max-w-2xl mx-auto border-t border-white/10 pt-8">
            <p className="text-white font-bold text-lg mb-4">Road Heroes 24/7</p>
            <div className="flex flex-wrap justify-center gap-2 mb-4">
              {[
                'Mobile Tyre Service Manchester',
                'Mobile Tyre Fitting Manchester',
                'Emergency Mobile Tyre Fitting Manchester',
                'Mobile Tyre Replacement Manchester',
                '24 Hour Mobile Tyre Service Manchester',
              ].map((label) => (
                <span
                  key={label}
                  className="text-slate-300 text-xs sm:text-sm bg-white/5 border border-white/10 rounded-full px-3 py-1.5"
                >
                  {label}
                </span>
              ))}
            </div>
            <p className="text-slate-500 text-sm">
              Professional mobile tyre assistance across Manchester.
            </p>
          </div>
        </Reveal>
      </section>

      {/* ── 20. FAQ ───────────────────────────────────────── */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-slate-50">
        <div className="max-w-3xl mx-auto">
          <Reveal className="text-center mb-10 sm:mb-16">
            <span className="text-[#b70011] font-bold uppercase tracking-widest text-sm mb-2 block">
              Common Questions
            </span>
            <h2
              className="text-2xl sm:text-[32px] font-bold text-[#0f172a]"
              style={{ fontFamily: 'var(--font-work-sans)', letterSpacing: '-0.01em' }}
            >
              Frequently Asked Questions
            </h2>
          </Reveal>
          <div className="space-y-3 sm:space-y-4">
            {faqs.map((faq, i) => (
              <Reveal key={faq.q} delay={Math.min(i, 6) * 40}>
                <FaqItem q={faq.q} a={faq.a} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}
