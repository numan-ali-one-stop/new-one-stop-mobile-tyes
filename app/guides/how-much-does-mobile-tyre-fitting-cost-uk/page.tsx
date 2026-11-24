import type { ReactNode } from 'react'
import JsonLd from '@/components/JsonLd'
import { SITE_URL } from '@/lib/schema'
import {
  GuideHero, FeaturedImage, QuickAnswer, H2, P, Table, CheckList, BoldCheckList, GuideCta, FaqSection, linkClass as link,
} from '@/components/GuideParts'

const TITLE = 'Mobile Tyre Fitting Cost UK: What You Really Pay'
const DESCRIPTION =
  'What does mobile tyre fitting cost in the UK? See what affects the price, what is included and how to get an accurate quote.'
const SLUG = 'guides/how-much-does-mobile-tyre-fitting-cost-uk'
const PAGE_URL = `${SITE_URL}/${SLUG}`
const HEADLINE = 'How Much Does Mobile Tyre Fitting Cost in the UK?'
const IMAGE = '/images/professional-mobile-tyre-fitting.webp'

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
    publishedTime: '2026-11-24',
    images: [{ url: IMAGE, width: 1210, height: 907 }],
  },
}

// Schema supplied by the SEO team.
const _schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://onestoptyres247.co.uk/#website",
      "url": "https://onestoptyres247.co.uk/",
      "name": "One Stop Tyres 247",
      "inLanguage": "en-GB",
      "publisher": {
        "@id": "https://onestoptyres247.co.uk/#business"
      }
    },
    {
      "@type": "WebPage",
      "@id": "https://onestoptyres247.co.uk/guides/how-much-does-mobile-tyre-fitting-cost-uk#webpage",
      "url": "https://onestoptyres247.co.uk/guides/how-much-does-mobile-tyre-fitting-cost-uk",
      "name": "How Much Does Mobile Tyre Fitting Cost in the UK?",
      "description": "What does mobile tyre fitting cost in the UK? See what affects the price, what is included and how to get an accurate quote.",
      "isPartOf": {
        "@id": "https://onestoptyres247.co.uk/#website"
      },
      "breadcrumb": {
        "@id": "https://onestoptyres247.co.uk/guides/how-much-does-mobile-tyre-fitting-cost-uk#breadcrumb"
      },
      "mainEntity": {
        "@id": "https://onestoptyres247.co.uk/guides/how-much-does-mobile-tyre-fitting-cost-uk#article"
      },
      "inLanguage": "en-GB"
    },
    {
      "@type": "BlogPosting",
      "@id": "https://onestoptyres247.co.uk/guides/how-much-does-mobile-tyre-fitting-cost-uk#article",
      "mainEntityOfPage": {
        "@id": "https://onestoptyres247.co.uk/guides/how-much-does-mobile-tyre-fitting-cost-uk#webpage"
      },
      "headline": "How Much Does Mobile Tyre Fitting Cost in the UK?",
      "description": "What does mobile tyre fitting cost in the UK? See what affects the price, what is included and how to get an accurate quote.",
      "articleSection": "Tyre Guides",
      "inLanguage": "en-GB",
      "author": {
        "@id": "https://onestoptyres247.co.uk/#business"
      },
      "publisher": {
        "@id": "https://onestoptyres247.co.uk/#business"
      },
      "about": [
        { "@type": "Thing", "name": "Mobile tyre fitting" },
        { "@type": "Thing", "name": "Tyre replacement costs" },
        { "@type": "Thing", "name": "Tyre fitting prices in the UK" },
        { "@type": "Thing", "name": "Mobile tyre fitting in Greater Manchester" }
      ],
      "mentions": [
        { "@type": "Service", "name": "Mobile Tyre Fitting", "url": "https://onestoptyres247.co.uk/mobile-tyre-fitting" },
        { "@type": "Service", "name": "Emergency Mobile Tyre Fitting", "url": "https://onestoptyres247.co.uk/emergency-mobile-tyre-fitting" },
        { "@type": "Service", "name": "Mobile Tyre Fitting Manchester", "url": "https://onestoptyres247.co.uk/mobile-tyre-fitting-manchester" },
        { "@type": "Service", "name": "Mobile Tyre Fitting Oldham", "url": "https://onestoptyres247.co.uk/mobile-tyre-fitting-oldham" }
      ],
      "keywords": [
        "mobile tyre fitting cost UK",
        "mobile tyre fitting prices",
        "how much does mobile tyre fitting cost",
        "mobile tyre fitting charges",
        "mobile tyre replacement cost",
        "mobile tyre fitting vs garage",
        "mobile tyre fitting Greater Manchester"
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
        "streetAddress": "Alliance Mill, Willow Street",
        "addressLocality": "Oldham",
        "postalCode": "OL1 3QH",
        "addressCountry": "GB"
      },
      "areaServed": [
        { "@type": "City", "name": "Manchester" },
        { "@type": "AdministrativeArea", "name": "Greater Manchester" },
        { "@type": "AdministrativeArea", "name": "Bolton" },
        { "@type": "AdministrativeArea", "name": "Bury" },
        { "@type": "AdministrativeArea", "name": "Oldham" },
        { "@type": "AdministrativeArea", "name": "Rochdale" },
        { "@type": "AdministrativeArea", "name": "Salford" },
        { "@type": "AdministrativeArea", "name": "Stockport" },
        { "@type": "AdministrativeArea", "name": "Tameside" },
        { "@type": "AdministrativeArea", "name": "Trafford" },
        { "@type": "AdministrativeArea", "name": "Wigan" }
      ],
      "knowsAbout": [
        "Mobile tyre fitting",
        "Mobile tyre replacement",
        "Emergency tyre fitting",
        "Puncture repair",
        "Wheel balancing",
        "Tyre pressure monitoring systems",
        "Locking wheel nut removal",
        "Tyre safety and maintenance"
      ]
    },
    {
      "@type": "Service",
      "@id": "https://onestoptyres247.co.uk/mobile-tyre-fitting#service",
      "name": "Mobile Tyre Fitting",
      "serviceType": "Mobile tyre fitting and replacement",
      "url": "https://onestoptyres247.co.uk/mobile-tyre-fitting",
      "provider": {
        "@id": "https://onestoptyres247.co.uk/#business"
      },
      "areaServed": {
        "@type": "AdministrativeArea",
        "name": "Greater Manchester"
      },
      "description": "Mobile tyre fitting and replacement services for drivers across Greater Manchester, with tyre fitting carried out at the customer's location."
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://onestoptyres247.co.uk/guides/how-much-does-mobile-tyre-fitting-cost-uk#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://onestoptyres247.co.uk/" },
        { "@type": "ListItem", "position": 2, "name": "Guides", "item": "https://onestoptyres247.co.uk/guides" },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "How Much Does Mobile Tyre Fitting Cost in the UK?",
          "item": "https://onestoptyres247.co.uk/guides/how-much-does-mobile-tyre-fitting-cost-uk"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://onestoptyres247.co.uk/guides/how-much-does-mobile-tyre-fitting-cost-uk#faq",
      "url": "https://onestoptyres247.co.uk/guides/how-much-does-mobile-tyre-fitting-cost-uk",
      "isPartOf": {
        "@id": "https://onestoptyres247.co.uk/guides/how-much-does-mobile-tyre-fitting-cost-uk#webpage"
      },
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How much does mobile tyre fitting cost in the UK?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Mobile tyre fitting prices depend on the tyre brand, size and service requirements. A standard passenger car tyre supplied and fitted may cost approximately £45 to £185 or more. Request a quote for an accurate price based on your vehicle."
          }
        },
        {
          "@type": "Question",
          "name": "Is mobile tyre fitting more expensive than a garage?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Not necessarily. Mobile fitting may involve an additional travel or call-out charge, but it saves you from travelling to a garage. Compare the complete quotation rather than just the fitting fee."
          }
        },
        {
          "@type": "Question",
          "name": "Do mobile tyre fitters charge a call-out fee?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Some mobile tyre fitters include travel in their quoted price, while others charge a separate call-out fee. Emergency and out-of-hours appointments may also involve additional charges."
          }
        },
        {
          "@type": "Question",
          "name": "Does mobile tyre fitting include wheel balancing and disposal?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "These services are often included when purchasing a replacement tyre, but this depends on the provider. Always confirm whether wheel balancing, valves and old tyre disposal are covered."
          }
        },
        {
          "@type": "Question",
          "name": "Can I get a mobile tyre fitting quote before booking?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Most providers can give an estimate using your vehicle registration, tyre size, number of replacement tyres and location. Ask for a complete quotation before confirming the appointment."
          }
        },
        {
          "@type": "Question",
          "name": "Is mobile tyre fitting available at night or on weekends?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Some mobile tyre fitting providers offer evening, weekend and 24-hour emergency services. Availability and additional charges depend on the provider and your location."
          }
        },
        {
          "@type": "Question",
          "name": "Is it cheaper to replace two tyres at once?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Replacing two tyres in one visit may reduce the overall cost if the provider charges a separate call-out fee. However, replacement should depend on tyre condition, tread depth and vehicle manufacturer recommendations."
          }
        },
        {
          "@type": "Question",
          "name": "How do I find the correct tyre size for my vehicle?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Check the markings on your existing tyre sidewall, vehicle handbook or manufacturer's tyre information label. You can also provide your registration to a tyre fitter to help identify the correct specification."
          }
        },
        {
          "@type": "Question",
          "name": "How can I find mobile tyre fitting near me?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Search for mobile tyre fitting in your town or postcode and check whether the provider covers your location. Drivers in Greater Manchester can explore our local mobile tyre fitting services to find relevant coverage information."
          }
        }
      ]
    }
  ]
}

// `a` (when set) is the on-page answer with links; otherwise `text` is shown.
const faqs: { q: string; text: string; a?: ReactNode }[] = [
  {
    q: 'How much does mobile tyre fitting cost in the UK?',
    text: 'Mobile tyre fitting prices depend on the tyre brand, size and service requirements. A standard passenger car tyre supplied and fitted may cost approximately £45 to £185 or more. Request a quote for an accurate price based on your vehicle.',
  },
  {
    q: 'Is mobile tyre fitting more expensive than a garage?',
    text: 'Not necessarily. Mobile fitting may involve an additional travel or call-out charge, but it saves you from travelling to a garage. Compare the complete quotation rather than just the fitting fee.',
  },
  {
    q: 'Do mobile tyre fitters charge a call-out fee?',
    text: 'Some mobile tyre fitters include travel in their quoted price, while others charge a separate call-out fee. Emergency and out-of-hours appointments may also involve additional charges.',
  },
  {
    q: 'Does mobile tyre fitting include wheel balancing and disposal?',
    text: 'These services are often included when purchasing a replacement tyre, but this depends on the provider. Always confirm whether wheel balancing, valves and old tyre disposal are covered.',
  },
  {
    q: 'Can I get a mobile tyre fitting quote before booking?',
    text: 'Yes. Most providers can give an estimate using your vehicle registration, tyre size, number of replacement tyres and location. Ask for a complete quotation before confirming the appointment.',
  },
  {
    q: 'Is mobile tyre fitting available at night or on weekends?',
    text: 'Some mobile tyre fitting providers offer evening, weekend and 24-hour emergency services. Availability and additional charges depend on the provider and your location. See our emergency mobile tyre fitting service for more information.',
    a: (
      <>
        Some mobile tyre fitting providers offer evening, weekend and 24-hour emergency services.
        Availability and additional charges depend on the provider and your location. See our{' '}
        <a href="/emergency-mobile-tyre-fitting" className={link}>emergency mobile tyre fitting service</a>{' '}
        for more information.
      </>
    ),
  },
  {
    q: 'Is it cheaper to replace two tyres at once?',
    text: 'Replacing two tyres in one visit may reduce the overall cost if the provider charges a separate call-out fee. However, replacement should depend on tyre condition, tread depth and vehicle manufacturer recommendations.',
  },
  {
    q: 'How do I find the correct tyre size for my vehicle?',
    text: "Check the markings on your existing tyre sidewall, vehicle handbook or manufacturer's tyre information label. You can also provide your registration to a tyre fitter to help identify the correct specification.",
  },
  {
    q: 'How can I find mobile tyre fitting near me?',
    text: 'Search for mobile tyre fitting in your town or postcode and check whether the provider covers your location. Drivers in Greater Manchester can explore our local mobile tyre fitting services to find relevant coverage information.',
    a: (
      <>
        Search for mobile tyre fitting in your town or postcode and check whether the provider
        covers your location. Drivers in Greater Manchester can explore our{' '}
        <a href="/service-area" className={link}>local mobile tyre fitting services</a> to find
        relevant coverage information.
      </>
    ),
  },
]

const priceFactors = [
  ['Tyre brand and quality', 'Premium tyres cost more than mid-range or budget tyres'],
  ['Tyre size', 'Larger and low-profile tyres cost more'],
  ['Speed and load rating', 'Higher ratings usually cost more'],
  ['Run-flat or winter tyres', 'Specialist tyres are priced higher'],
  ['Number of tyres', 'Fitting two or four tyres in one visit can be better value than one'],
  ['Time of day', 'Out-of-hours or emergency calls can cost more'],
  ['Extras', 'Wheel balancing, new valves, TPMS reset and disposal'],
]

const quoteIncludes = [
  'The replacement tyre and its specification.',
  'Removal of the existing tyre.',
  'Fitting and inflation of the new tyre.',
  'Wheel balancing.',
  'New standard valves, where applicable.',
  'Disposal of the old tyre.',
  'VAT.',
  'Any mobile call-out or location charges.',
]

const garageVsMobile = [
  ['Tyre price', 'Depends on tyre choice', 'Depends on tyre choice'],
  ['Fitting charge', 'Usually charged per tyre', 'May include mobile fitting'],
  ['Travel expenses', 'Your responsibility', 'Usually no need to travel'],
  ['Waiting time', 'Depends on garage availability', 'Fitting takes place at your location'],
  ['Call-out charge', 'Usually not applicable', 'May apply depending on provider'],
  ['Convenience', 'Requires a garage visit', 'Service comes to your location'],
]

const hiddenCharges: [string, ReactNode][] = [
  ['Call-out fees:', 'Some providers charge separately for travelling to your location.'],
  ['Wheel balancing:', 'Confirm whether balancing is included in the fitting price.'],
  ['Valve charges:', 'Specialist or replacement valves may cost extra.'],
  ['Tyre disposal:', 'Old tyres may carry a separate disposal charge.'],
  ['Out-of-hours charges:', 'Evening, weekend and emergency appointments may cost more.'],
  [
    'Locking wheel nut removal:',
    <>
      Additional work may be required if the{' '}
      <a href="/locking-nut-removal" className={link}>locking wheel nut</a> key is missing or damaged.
    </>,
  ],
]

const quoteSteps = [
  'Note your registration number, so the fitter can confirm the correct tyre size.',
  'Check the size on the tyre sidewall, for example 205/55 R16 91V.',
  'Say how many tyres you need and whether any are damaged.',
  'Tell the fitter where the car is parked and whether you have a locking wheel nut key.',
  'Ask for the total price including VAT, fitting, balancing and disposal.',
]

const saveMoney: [string, ReactNode][] = [
  ['Compare tyre options:', 'Consider suitable budget and mid-range tyres alongside premium brands.'],
  ['Replace multiple tyres when necessary:', 'If more than one tyre requires replacement, ask whether a combined booking offers better value.'],
  [
    'Check for a repair first:',
    <>
      A small puncture may be repairable if the damage meets the relevant safety requirements. Read
      our guide on{' '}
      <a href="/guides/how-to-tell-if-your-tyre-can-be-repaired-or-needs-replacing" className={link}>
        tyre repair or replacement
      </a>.
    </>,
  ],
  [
    'Maintain correct tyre pressure:',
    <>
      Regular{' '}
      <a href="/guides/tyre-pressure-cold-weather" className={link}>pressure checks</a> can help
      prevent uneven wear and unnecessary replacement.
    </>,
  ],
  ['Book in advance where possible:', 'A planned appointment may help you avoid emergency or out-of-hours charges.'],
]

const valueChecks = [
  'Tyre brand and manufacturer specifications.',
  'Wet grip and fuel efficiency ratings.',
  'Treadwear and expected tyre life.',
  'Warranty and product availability.',
  'Whether fitting, balancing and disposal are included.',
]

export default function MobileTyreFittingCostGuide() {
  return (
    <div className="text-[#1c1b1b]" style={{ fontFamily: 'var(--font-inter)' }}>
      <JsonLd data={_schema} />

      <GuideHero
        crumb="Mobile Tyre Fitting Cost UK"
        badge="Pricing Guide"
        title={HEADLINE}
        published="24 November 2026"
        readTime="8 min read"
      />

      {/* ── ARTICLE BODY ─────────────────────────────────────────── */}
      <article className="py-12 sm:py-16 px-5 sm:px-8 bg-white">
        <div className="max-w-3xl mx-auto">

          <FeaturedImage
            src={IMAGE}
            alt="One Stop Mobile Tyres 24/7 van with tyre fitting equipment replacing a tyre on a customer's car at their location"
            width={1210}
            height={907}
          />

          <QuickAnswer>
            The cost of mobile tyre fitting in the UK depends on several factors, including the tyre
            brand, size, fitting charges and whether an additional call-out fee applies. For a
            standard car, a replacement tyre supplied and fitted can typically cost around{' '}
            <strong>£45 to £185 or more</strong>, depending on the specification and provider.
          </QuickAnswer>

          <P className="mb-4">
            Unlike visiting a traditional garage, mobile tyre fitting brings the service to your
            location, saving you the time and inconvenience of travelling to a tyre centre. Before
            booking, it is important to understand what is included in the price and whether
            additional charges apply.
          </P>
          <P>
            This guide explains typical UK mobile tyre fitting prices, the factors that affect the
            final cost and how to compare quotes before choosing a service.
          </P>

          <H2>What affects the price of mobile tyre fitting?</H2>
          <Table head={['Factor', 'How it changes the price']} rows={priceFactors} />

          <H2>What is included in a mobile tyre fitting quote?</H2>
          <P className="mb-4">
            A mobile tyre fitting quote should clearly explain which services and products are
            included in the final price. Before confirming a booking, check whether the quotation
            covers:
          </P>
          <CheckList items={quoteIncludes} />
          <P>
            Not every provider includes all these items in the advertised price. Some may charge
            separately for specialist valves, TPMS sensors or additional work. Ask for an itemised
            quotation so you know exactly what you are paying for.
          </P>

          <H2>Mobile tyre fitting vs a garage: which is cheaper?</H2>
          <P className="mb-4">
            The cost of mobile tyre fitting compared with a traditional garage depends on the
            provider, tyre specification and additional charges.
          </P>
          <P className="mb-4">
            A garage may offer a lower labour charge, but you also need to consider travelling to the
            location, waiting for the fitting and arranging alternative transport if your vehicle
            cannot be driven safely.
          </P>
          <P className="mb-4">
            A mobile tyre fitting service brings the equipment and technician to your vehicle, which
            can save time and make the process more convenient. Consider these factors when
            comparing both options:
          </P>
          <Table head={['Cost or consideration', 'Traditional garage', 'Mobile tyre fitting']} rows={garageVsMobile} />
          <P>
            Mobile fitting is not automatically cheaper than garage fitting. However, the convenience
            and time saved can make it a practical option for many drivers. For more information
            about the process, see our{' '}
            <a href="/mobile-tyre-fitting" className={link}>mobile tyre fitting service</a>.
          </P>

          <H2>Hidden mobile tyre fitting charges to watch for</H2>
          <P className="mb-4">
            An advertised price does not always represent the complete cost. Some additional charges
            may only become clear when you request a quotation. Here are some costs worth checking
            before booking:
          </P>
          <BoldCheckList items={hiddenCharges} />

          <H2>How to get an accurate mobile tyre fitting quote</H2>
          <ol className="space-y-3 mb-6">
            {quoteSteps.map((step, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="w-7 h-7 rounded-full bg-[#b70011] text-white text-sm font-bold flex items-center justify-center flex-shrink-0">
                  {i + 1}
                </span>
                <span className="text-slate-600 leading-relaxed">{step}</span>
              </li>
            ))}
          </ol>

          <H2>How to save money on mobile tyre fitting without compromising safety</H2>
          <P className="mb-4">
            Reducing your tyre expenses does not mean choosing the cheapest product available. A few
            practical steps can help you manage the overall cost while maintaining vehicle safety.
          </P>
          <BoldCheckList items={saveMoney} />
          <P>
            The right option depends on your tyre condition, driving requirements and the
            manufacturer&apos;s recommendations.
          </P>

          <H2>Is the cheapest mobile tyre fitting option always best?</H2>
          <P className="mb-4">
            No. The lowest quotation does not necessarily offer the best overall value.
          </P>
          <P className="mb-4">
            Tyres are the only part of your vehicle that make direct contact with the road. Their
            condition and performance affect braking, steering and grip, particularly in wet
            conditions. When comparing mobile tyre fitting prices, consider:
          </P>
          <CheckList items={valueChecks} />
          <P>
            A suitable tyre with the correct specification can provide better long-term value than
            choosing an unsuitable product simply because it has a lower initial price.
          </P>

          <H2>Mobile tyre fitting cost in Greater Manchester</H2>
          <P className="mb-4">
            For drivers in Greater Manchester, the final cost of mobile tyre fitting depends on the
            tyre specification, vehicle type, service location and appointment time.
          </P>
          <P className="mb-4">
            One Stop Mobile Tyres 24/7 is based at Alliance Mill, Willow Street, Oldham OL1 3QH, and
            provides mobile tyre services across Greater Manchester and surrounding areas. Whether you
            need a replacement tyre or assistance with a damaged tyre, provide your vehicle
            registration and location to request a quotation.
          </P>
          <P className="mb-4">You can explore our local services:</P>
          <CheckList
            items={[
              <a key="manchester" href="/mobile-tyre-fitting-manchester" className={link}>Mobile Tyre Fitting Manchester</a>,
              <a key="oldham" href="/mobile-tyre-fitting-oldham" className={link}>Mobile Tyre Fitting Oldham</a>,
            ]}
          />
          <P>
            Visit our <a href="/service-area" className={link}>service area information</a> to check
            availability in your location.
          </P>

          <GuideCta
            title="Want an exact price for your car?"
            text="Send us your registration, tyre size and location and we'll give you a clear, all-in quote with fitting, balancing and disposal included, anywhere in Greater Manchester."
          />

        </div>
      </article>

      <FaqSection faqs={faqs.map((f) => ({ q: f.q, a: f.a ?? f.text }))} />
    </div>
  )
}
