import type { ReactNode } from 'react'
import JsonLd from '@/components/JsonLd'
import { SITE_URL } from '@/lib/schema'
import {
  GuideHero, FeaturedImage, QuickAnswer, H2, P, Table, CheckList, GuideCta, FaqSection, linkClass as link,
} from '@/components/GuideParts'

const TITLE = 'How Does Mobile Tyre Replacement Work? Step by Step'
const DESCRIPTION =
  'How does mobile tyre replacement work? See each step, what to have ready and when a mobile fitter is the right choice.'
const SLUG = 'guides/how-does-mobile-tyre-replacement-work'
const PAGE_URL = `${SITE_URL}/${SLUG}`
const HEADLINE = 'How Does Mobile Tyre Replacement Work? A Step-by-Step Guide'
const IMAGE = '/images/home-tyre-fitting.webp'

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: PAGE_URL,
    siteName: 'One Stop Mobile Tyres 24/7',
    type: 'article',
    publishedTime: '2026-11-26',
    images: [{ url: IMAGE, width: 1040, height: 780 }],
  },
}

// Schema supplied by the SEO team.
const _schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://onestoptyres247.co.uk/guides/how-does-mobile-tyre-replacement-work#webpage",
      "url": "https://onestoptyres247.co.uk/guides/how-does-mobile-tyre-replacement-work",
      "name": "How Does Mobile Tyre Replacement Work? A Step-by-Step Guide",
      "description": "How does mobile tyre replacement work? See each step, what to have ready and when a mobile fitter is the right choice.",
      "inLanguage": "en-GB",
      "isPartOf": { "@id": "https://onestoptyres247.co.uk/#website" },
      "breadcrumb": { "@id": "https://onestoptyres247.co.uk/guides/how-does-mobile-tyre-replacement-work#breadcrumb" },
      "mainEntity": { "@id": "https://onestoptyres247.co.uk/guides/how-does-mobile-tyre-replacement-work#article" },
      "about": { "@id": "https://onestoptyres247.co.uk/guides/how-does-mobile-tyre-replacement-work#service" }
    },
    {
      "@type": "WebSite",
      "@id": "https://onestoptyres247.co.uk/#website",
      "url": "https://onestoptyres247.co.uk/",
      "name": "One Stop Tyres 247",
      "publisher": { "@id": "https://onestoptyres247.co.uk/#business" },
      "inLanguage": "en-GB"
    },
    {
      "@type": "BlogPosting",
      "@id": "https://onestoptyres247.co.uk/guides/how-does-mobile-tyre-replacement-work#article",
      "mainEntityOfPage": { "@id": "https://onestoptyres247.co.uk/guides/how-does-mobile-tyre-replacement-work#webpage" },
      "headline": "How Does Mobile Tyre Replacement Work? A Step-by-Step Guide",
      "description": "How does mobile tyre replacement work? See each step, what to have ready and when a mobile fitter is the right choice.",
      "url": "https://onestoptyres247.co.uk/guides/how-does-mobile-tyre-replacement-work",
      "inLanguage": "en-GB",
      "articleSection": "Tyre Guides",
      "keywords": [
        "mobile tyre replacement",
        "how does mobile tyre replacement work",
        "mobile tyre fitting",
        "mobile tyre fitter",
        "mobile tyre replacement service",
        "mobile tyre fitting Greater Manchester",
        "mobile tyre replacement Greater Manchester",
        "tyre replacement at home",
        "emergency mobile tyre fitting",
        "mobile tyre balancing",
        "mobile tyre replacement process"
      ],
      "author": { "@id": "https://onestoptyres247.co.uk/#business" },
      "publisher": { "@id": "https://onestoptyres247.co.uk/#business" },
      "about": [
        { "@type": "Thing", "name": "Mobile tyre replacement" },
        { "@type": "Thing", "name": "Mobile tyre fitting" },
        { "@type": "Thing", "name": "Tyre balancing" },
        { "@type": "Thing", "name": "Vehicle tyre maintenance" },
        { "@type": "Thing", "name": "Roadside tyre assistance" }
      ],
      "mentions": [
        { "@id": "https://onestoptyres247.co.uk/#business" },
        { "@id": "https://onestoptyres247.co.uk/guides/how-does-mobile-tyre-replacement-work#service" },
        {
          "@type": "Place",
          "name": "Greater Manchester",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Greater Manchester",
            "addressRegion": "England",
            "addressCountry": "GB"
          }
        }
      ]
    },
    {
      "@type": "AutomotiveBusiness",
      "@id": "https://onestoptyres247.co.uk/#business",
      "name": "One Stop Mobile Tyres 24/7",
      "alternateName": "One Stop Tyres 247",
      "url": "https://onestoptyres247.co.uk/",
      "telephone": "+441613995851",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Alliance Mill, Willow St",
        "addressLocality": "Oldham",
        "addressRegion": "Greater Manchester",
        "postalCode": "OL1 3QH",
        "addressCountry": "GB"
      },
      "areaServed": [
        { "@type": "AdministrativeArea", "name": "Greater Manchester" },
        { "@type": "AdministrativeArea", "name": "Bolton" },
        { "@type": "AdministrativeArea", "name": "Bury" },
        { "@type": "AdministrativeArea", "name": "Manchester" },
        { "@type": "AdministrativeArea", "name": "Oldham" },
        { "@type": "AdministrativeArea", "name": "Rochdale" },
        { "@type": "AdministrativeArea", "name": "Salford" },
        { "@type": "AdministrativeArea", "name": "Stockport" },
        { "@type": "AdministrativeArea", "name": "Tameside" },
        { "@type": "AdministrativeArea", "name": "Trafford" },
        { "@type": "AdministrativeArea", "name": "Wigan" }
      ],
      "description": "One Stop Mobile Tyres 24/7 provides mobile tyre fitting, tyre replacement, emergency puncture repair and roadside tyre assistance across Greater Manchester. Mobile tyre services are available at suitable home, workplace and safe roadside locations.",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+441613995851",
        "contactType": "customer service",
        "areaServed": "GB",
        "availableLanguage": "English"
      },
      "knowsAbout": [
        "Mobile tyre replacement",
        "Mobile tyre fitting",
        "Emergency tyre fitting",
        "Tyre puncture repair",
        "Tyre balancing",
        "Tyre pressure monitoring systems",
        "TPMS reset",
        "Locking wheel nut removal",
        "Roadside tyre assistance"
      ]
    },
    {
      "@type": "Service",
      "@id": "https://onestoptyres247.co.uk/guides/how-does-mobile-tyre-replacement-work#service",
      "name": "Mobile Tyre Replacement",
      "serviceType": "Mobile Tyre Replacement and Fitting",
      "description": "Mobile tyre replacement service where a professional fitter travels to a suitable customer location, removes the existing tyre, checks the wheel, fits and balances the replacement tyre, sets the correct pressure and refits the wheel.",
      "provider": { "@id": "https://onestoptyres247.co.uk/#business" },
      "areaServed": {
        "@type": "AdministrativeArea",
        "name": "Greater Manchester",
        "address": {
          "@type": "PostalAddress",
          "addressRegion": "England",
          "addressCountry": "GB"
        }
      },
      "availableChannel": {
        "@type": "ServiceChannel",
        "serviceUrl": "https://onestoptyres247.co.uk/mobile-tyre-fitting",
        "servicePhone": {
          "@type": "ContactPoint",
          "telephone": "+441613995851",
          "contactType": "booking"
        },
        "serviceLocation": {
          "@type": "Place",
          "name": "Customer's home, workplace or safe roadside location"
        }
      },
      "termsOfService": "Availability depends on location, vehicle suitability, tyre size, stock and safe working conditions."
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://onestoptyres247.co.uk/guides/how-does-mobile-tyre-replacement-work#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://onestoptyres247.co.uk/" },
        { "@type": "ListItem", "position": 2, "name": "Guides", "item": "https://onestoptyres247.co.uk/guides/" },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "How Does Mobile Tyre Replacement Work?",
          "item": "https://onestoptyres247.co.uk/guides/how-does-mobile-tyre-replacement-work"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://onestoptyres247.co.uk/guides/how-does-mobile-tyre-replacement-work#faq",
      "url": "https://onestoptyres247.co.uk/guides/how-does-mobile-tyre-replacement-work",
      "inLanguage": "en-GB",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Is mobile tyre replacement as good as a garage?",
          "acceptedAnswer": { "@type": "Answer", "text": "For standard tyre replacement, a professional mobile tyre fitter can carry out the same essential fitting and balancing work as a traditional garage. The equipment and quality of workmanship matter more than the location. However, jobs requiring specialist workshop equipment, wheel alignment or suspension repairs may need a garage." }
        },
        {
          "@type": "Question",
          "name": "Can I choose my own tyre brand?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes. Depending on your vehicle's requirements and tyre availability, you can usually choose between budget, mid-range and premium tyre options. Make sure the selected tyre has the correct size, load index and speed rating for your vehicle. Ask the fitter to explain the available options before confirming your booking." }
        },
        {
          "@type": "Question",
          "name": "Should I replace tyres in pairs?",
          "acceptedAnswer": { "@type": "Answer", "text": "Replacing tyres in pairs on the same axle is often recommended when both tyres are worn or when matching tyre performance is important. However, the correct approach depends on the condition of the existing tyres, vehicle requirements and manufacturer guidance. Some four-wheel-drive vehicles have specific tread-depth matching requirements." }
        },
        {
          "@type": "Question",
          "name": "What if I have a puncture?",
          "acceptedAnswer": { "@type": "Answer", "text": "A puncture does not always mean you need a replacement tyre. A small puncture in the central tread area may be repairable if the tyre meets the relevant safety requirements. Sidewall damage, bulges, large cuts or internal damage may make replacement necessary. A trained technician should inspect the tyre before deciding whether it can be repaired." }
        },
        {
          "@type": "Question",
          "name": "Can a mobile tyre fitter replace a tyre at my workplace?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes, provided the vehicle is parked on a suitable surface and there is enough space to carry out the work safely. Workplace car parks, business premises and depots can be suitable locations. Check whether your employer or site manager requires permission before arranging the appointment." }
        },
        {
          "@type": "Question",
          "name": "Will my tyre pressure warning light go off after replacement?",
          "acceptedAnswer": { "@type": "Answer", "text": "It depends on your vehicle's TPMS system. Some vehicles automatically recognise the new tyre pressures, while others require a manual reset or diagnostic procedure. If the warning light remains on, have the tyre pressures and monitoring system checked rather than ignoring the warning." }
        },
        {
          "@type": "Question",
          "name": "Can a mobile tyre fitter replace just one tyre?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes, a mobile tyre fitter can usually replace a single tyre if the replacement matches your vehicle's requirements. However, the condition and tread depth of the tyre on the opposite side of the same axle should also be considered. Your fitter can advise whether replacing one tyre is suitable for your vehicle." }
        },
        {
          "@type": "Question",
          "name": "Do I need to be present during mobile tyre replacement?",
          "acceptedAnswer": { "@type": "Answer", "text": "It is best to be available when the fitter arrives so you can confirm the work, provide access to the vehicle and answer any questions. Some providers may allow arrangements to be made in your absence, but this should be agreed beforehand." }
        },
        {
          "@type": "Question",
          "name": "Can mobile tyre replacement be carried out in a car park?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes, if the car park provides a flat, firm surface, sufficient working space and permission for the work. Multi-storey car parks, restricted spaces and areas with low clearance may not be suitable. Share the exact parking arrangements with the fitter before booking." }
        },
        {
          "@type": "Question",
          "name": "Do you cover Rochdale and Wigan?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes. One Stop Mobile Tyres 24/7 covers Rochdale and Wigan as part of its Greater Manchester service area. Availability and response times depend on the vehicle's location, traffic and existing bookings. Contact the team with your postcode and tyre details to check availability." }
        }
      ]
    }
  ]
}

// `a` (when set) is the on-page answer with links; otherwise `text` is shown.
const faqs: { q: string; text: string; a?: ReactNode }[] = [
  {
    q: 'Is mobile tyre replacement as good as a garage?',
    text: 'For standard tyre replacement, a professional mobile tyre fitter can carry out the same essential fitting and balancing work as a traditional garage. The equipment and quality of workmanship matter more than the location. However, jobs requiring specialist workshop equipment, wheel alignment or suspension repairs may need a garage.',
  },
  {
    q: 'Can I choose my own tyre brand?',
    text: "Yes. Depending on your vehicle's requirements and tyre availability, you can usually choose between budget, mid-range and premium tyre options. Make sure the selected tyre has the correct size, load index and speed rating for your vehicle. Ask the fitter to explain the available options before confirming your booking.",
  },
  {
    q: 'Should I replace tyres in pairs?',
    text: 'Replacing tyres in pairs on the same axle is often recommended when both tyres are worn or when matching tyre performance is important. However, the correct approach depends on the condition of the existing tyres, vehicle requirements and manufacturer guidance. Some four-wheel-drive vehicles have specific tread-depth matching requirements.',
  },
  {
    q: 'What if I have a puncture?',
    text: 'A puncture does not always mean you need a replacement tyre. A small puncture in the central tread area may be repairable if the tyre meets the relevant safety requirements. Sidewall damage, bulges, large cuts or internal damage may make replacement necessary. A trained technician should inspect the tyre before deciding whether it can be repaired. For further help, explore our emergency mobile tyre fitting service.',
    a: (
      <>
        A puncture does not always mean you need a replacement tyre. A small puncture in the
        central tread area may be repairable if the tyre meets the relevant safety requirements.
        Sidewall damage, bulges, large cuts or internal damage may make replacement necessary. A
        trained technician should inspect the tyre before deciding whether it can be repaired. For
        further help, explore our{' '}
        <a href="/emergency-mobile-tyre-fitting" className={link}>emergency mobile tyre fitting service</a>.
      </>
    ),
  },
  {
    q: 'Can a mobile tyre fitter replace a tyre at my workplace?',
    text: 'Yes, provided the vehicle is parked on a suitable surface and there is enough space to carry out the work safely. Workplace car parks, business premises and depots can be suitable locations. Check whether your employer or site manager requires permission before arranging the appointment.',
  },
  {
    q: 'Will my tyre pressure warning light go off after replacement?',
    text: "It depends on your vehicle's TPMS system. Some vehicles automatically recognise the new tyre pressures, while others require a manual reset or diagnostic procedure. If the warning light remains on, have the tyre pressures and monitoring system checked rather than ignoring the warning.",
  },
  {
    q: 'Can a mobile tyre fitter replace just one tyre?',
    text: "Yes, a mobile tyre fitter can usually replace a single tyre if the replacement matches your vehicle's requirements. However, the condition and tread depth of the tyre on the opposite side of the same axle should also be considered. Your fitter can advise whether replacing one tyre is suitable for your vehicle.",
  },
  {
    q: 'Do I need to be present during mobile tyre replacement?',
    text: 'It is best to be available when the fitter arrives so you can confirm the work, provide access to the vehicle and answer any questions. Some providers may allow arrangements to be made in your absence, but this should be agreed beforehand.',
  },
  {
    q: 'Can mobile tyre replacement be carried out in a car park?',
    text: 'Yes, if the car park provides a flat, firm surface, sufficient working space and permission for the work. Multi-storey car parks, restricted spaces and areas with low clearance may not be suitable. Share the exact parking arrangements with the fitter before booking.',
  },
  {
    q: 'Do you cover Rochdale and Wigan?',
    text: "Yes. One Stop Mobile Tyres 24/7 covers Rochdale and Wigan as part of its Greater Manchester service area. Availability and response times depend on the vehicle's location, traffic and existing bookings. Contact the team with your postcode and tyre details to check availability.",
    a: (
      <>
        Yes. One Stop Mobile Tyres 24/7 covers{' '}
        <a href="/mobile-tyre-fitting-rochdale" className={link}>Rochdale</a> and{' '}
        <a href="/mobile-tyre-fitting-wigan" className={link}>Wigan</a> as part of its Greater
        Manchester service area. Availability and response times depend on the vehicle&apos;s
        location, traffic and existing bookings. Contact the team with your postcode and tyre
        details to check availability.
      </>
    ),
  },
]

const steps: [string, ReactNode][] = [
  ['Contact the fitter.', 'Call or message with your registration number and say which tyre needs replacing.'],
  ['Confirm the tyre size.', 'The fitter can check from your registration, or you can read the size on the tyre sidewall, for example 205/55 R16 91V.'],
  [
    'Choose your tyre and get a quote.',
    <>
      Ask for a total price including fitting, balancing, valves, disposal and VAT. Our guide to{' '}
      <a href="/guides/how-much-does-mobile-tyre-fitting-cost-uk" className={link}>mobile tyre fitting costs</a>{' '}
      explains what a quote should include.
    </>,
  ],
  ['Agree a time and location.', 'Tell the fitter where the car is parked and whether it is on a driveway, a street or at work.'],
  ['The fitter arrives and checks the vehicle.', 'They inspect the wheel, the tyre and the surroundings to make sure it is safe to work.'],
  [
    'The wheel is removed.',
    <>
      If you have locking wheel nuts, have the key ready. If you have lost it, see our{' '}
      <a href="/locking-nut-removal" className={link}>locking wheel nut removal service</a>.
    </>,
  ],
  ['The old tyre is removed and the wheel is checked.', 'The fitter looks for rim damage and valve problems.'],
  ['The new tyre is fitted and balanced.', 'Balancing helps prevent vibration and uneven wear.'],
  ['The wheel is refitted and torqued.', 'The nuts are tightened to the correct setting.'],
  [
    'Pressure is set and any warning light is dealt with.',
    <>
      Cars with a tyre pressure system may need a reset. See our{' '}
      <a href="/tpms-reset" className={link}>TPMS reset service</a>.
    </>,
  ],
  ['The old tyre is taken away and you get a receipt.', ''],
]

const haveReady = [
  ['Registration number', 'Lets the fitter confirm the correct tyre'],
  ['Tyre size', 'Speeds up the quote'],
  ['Locking wheel nut key', 'Needed to remove the wheel'],
  ['Clear access around the car', 'Gives the fitter room to work safely'],
  ['A flat, safe surface', 'Needed for jacking and wheel work'],
  ['Payment details', 'Keeps the visit quick'],
]

const rightChoice: ReactNode[] = [
  'Your tyre is worn below the legal limit and you want it fixed without a garage trip.',
  'You have a puncture that cannot be repaired.',
  'You cannot leave work, or you are caring for family at home.',
  <>
    Your tyre has a bulge, cut or sidewall damage and is unsafe to drive. If you are unsure, read
    our guide on{' '}
    <a href="/guides/how-to-tell-if-your-tyre-can-be-repaired-or-needs-replacing" className={link}>
      tyre repair or replacement
    </a>.
  </>,
  'You want to avoid waiting at a garage.',
]

const safety: ReactNode[] = [
  'The car should be parked on a flat, firm surface with the handbrake on.',
  'Keep children and pets away from the working area.',
  'Do not stay in the car while it is on a jack.',
  <>
    Never ask for work on a live motorway carriageway or hard shoulder. Our{' '}
    <a href="/emergency-mobile-tyre-fitting" className={link}>24-hour emergency tyre fitting</a> team
    attends once you are in a safe place.
  </>,
]

export default function HowMobileTyreReplacementWorksGuide() {
  return (
    <div className="text-[#1c1b1b]" style={{ fontFamily: 'var(--font-inter)' }}>
      <JsonLd data={_schema} />

      <GuideHero
        crumb="How Mobile Tyre Replacement Works"
        badge="How It Works"
        title={HEADLINE}
        published="26 November 2026"
        readTime="7 min read"
      />

      {/* ── ARTICLE BODY ─────────────────────────────────────────── */}
      <article className="py-12 sm:py-16 px-5 sm:px-8 bg-white">
        <div className="max-w-3xl mx-auto">

          <FeaturedImage
            src={IMAGE}
            alt="One Stop Mobile Tyres 24/7 van parked on a customer's driveway during a mobile tyre replacement"
            width={1040}
            height={780}
          />

          <QuickAnswer>
            Mobile tyre replacement means a fitter comes to your home, workplace or a safe roadside
            location, removes the old tyre, fits a new one, balances the wheel and leaves you ready to
            drive. You give your registration and tyre size, agree a price, and the fitter does the
            rest on site. <a href="/" className={link}>One Stop Mobile Tyres 24/7</a> provides this
            across Greater Manchester.
          </QuickAnswer>

          <H2>What is mobile tyre replacement?</H2>
          <P>
            Mobile tyre replacement is the same job a garage does, carried out from a fully equipped
            van. The fitter brings the tyre changing and balancing equipment to you, so you do not
            need to drive on a worn or damaged tyre. It suits busy drivers, people working from home,
            and anyone whose car is not safe to drive. If you want to understand the wider service,
            read our guide to <a href="/mobile-tyre-fitting" className={link}>mobile tyre fitting</a>.
          </P>

          <H2>Mobile tyre replacement step by step</H2>
          <ol className="space-y-3 mb-6">
            {steps.map(([title, body], i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="w-7 h-7 rounded-full bg-[#b70011] text-white text-sm font-bold flex items-center justify-center flex-shrink-0">
                  {i + 1}
                </span>
                <span className="text-slate-600 leading-relaxed">
                  <strong className="text-[#0f172a]">{title}</strong> {body}
                </span>
              </li>
            ))}
          </ol>

          <H2>What to have ready before the fitter arrives</H2>
          <Table head={['Item', 'Why it matters']} rows={haveReady} />

          <H2>How long does mobile tyre replacement take?</H2>
          <P>
            The time depends on how many tyres you need, the type of tyre and the vehicle. A single
            tyre is usually quicker than a full set, and awkward wheels or locking nuts can add time.
            Ask the fitter for an estimate when you book.
          </P>

          <H2>When is mobile tyre replacement the right choice?</H2>
          <CheckList items={rightChoice} />

          <H2>When might a garage be better?</H2>
          <P>
            Mobile replacement covers most cars, but a garage may be better if you need work that
            requires a lift or specialist equipment, such as suspension repairs or wheel alignment.
            Some unusual or very large wheels may also need a workshop. A good fitter will tell you
            honestly if the job is not suitable for a mobile visit.
          </P>

          <H2>Safety checklist for mobile tyre replacement</H2>
          <CheckList items={safety} />

          <H2>Mobile tyre replacement in Greater Manchester</H2>
          <P className="mb-4">
            Mobile tyre replacement is offered across the UK, but coverage and response times depend
            on where the fitter is based. One Stop Mobile Tyres 24/7 is at Alliance Mill, Willow St,
            Oldham OL1 3QH and covers all ten Greater Manchester boroughs, travelling to homes,
            workplaces and safe roadside locations.
          </P>
          <P className="mb-4">
            Because travel time and traffic differ across the region, availability can vary, so ask
            for a quote that matches your postcode. Our{' '}
            <a href="/service-area" className={link}>service area page</a> shows the boroughs we cover.
          </P>
          <P>
            Each borough has its own page. For example,{' '}
            <a href="/mobile-tyre-fitting-bolton" className={link}>mobile tyre fitting Bolton</a>{' '}
            covers the service for drivers in and around Bolton, and the other boroughs follow the
            same format.
          </P>

          <GuideCta
            title="Need a tyre replaced at home or work?"
            text="Send us your registration and location and we'll quote, agree a time and fit the new tyre wherever your car is parked across Greater Manchester."
          />

        </div>
      </article>

      <FaqSection faqs={faqs.map((f) => ({ q: f.q, a: f.a ?? f.text }))} />
    </div>
  )
}
