import type { ReactNode } from 'react'
import JsonLd from '@/components/JsonLd'
import { SITE_URL } from '@/lib/schema'
import {
  GuideHero, FeaturedImage, QuickAnswer, H2, P, Table, CheckList, BoldCheckList, GuideCta, FaqSection, linkClass as link,
} from '@/components/GuideParts'

const TITLE = 'Pothole Tyre Damage: Signs, Checks and How to Claim'
const DESCRIPTION =
  'Hit a pothole? Check for bulges, vibration and pressure loss, then see how to claim from the council. Mobile tyre checks in Greater Manchester.'
const SLUG = 'guides/pothole-tyre-damage-claim'
const PAGE_URL = `${SITE_URL}/${SLUG}`
const HEADLINE = 'Hit a Pothole? How to Check Your Tyre and Claim for Damage'
const IMAGE = '/images/pothole-tyre-damage-claim.webp'

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
    publishedTime: '2026-10-23',
    images: [{ url: IMAGE, width: 1600, height: 900 }],
  },
}

// Schema supplied by the SEO team (BlogPosting + BreadcrumbList + FAQPage).
const _schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BlogPosting",
      "@id": "https://onestoptyres247.co.uk/guides/pothole-tyre-damage-claim#article",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://onestoptyres247.co.uk/guides/pothole-tyre-damage-claim"
      },
      "headline": "Hit a Pothole? How to Check Your Tyre and Claim for Damage",
      "description": "Hit a pothole? Check for bulges, vibration and pressure loss, then see how to claim from the council. Mobile tyre checks in Greater Manchester.",
      "url": "https://onestoptyres247.co.uk/guides/pothole-tyre-damage-claim",
      "inLanguage": "en-GB",
      "articleSection": "Tyre Guides",
      "keywords": [
        "pothole tyre damage",
        "pothole tyre damage claim",
        "signs of pothole tyre damage",
        "tyre sidewall bulge",
        "emergency puncture repair Greater Manchester",
        "mobile tyre fitting Greater Manchester",
        "claim for pothole damage UK"
      ],
      "author": {
        "@type": "Organization",
        "name": "One Stop Tyres 247",
        "url": "https://onestoptyres247.co.uk/"
      },
      "publisher": {
        "@type": "Organization",
        "name": "One Stop Tyres 247",
        "url": "https://onestoptyres247.co.uk/"
      },
      "about": [
        { "@type": "Thing", "name": "Pothole damage" },
        { "@type": "Thing", "name": "Tyre inspection" },
        { "@type": "Thing", "name": "Tyre puncture repair" },
        { "@type": "Thing", "name": "Road maintenance claims" },
        { "@type": "Thing", "name": "Mobile tyre fitting" }
      ],
      "mentions": [
        {
          "@type": "Organization",
          "name": "One Stop Mobile Tyres 24/7",
          "url": "https://onestoptyres247.co.uk/"
        },
        { "@type": "Thing", "name": "Greater Manchester" }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://onestoptyres247.co.uk/guides/pothole-tyre-damage-claim#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://onestoptyres247.co.uk/" },
        { "@type": "ListItem", "position": 2, "name": "Guides", "item": "https://onestoptyres247.co.uk/guides/" },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Pothole Tyre Damage: Signs, Checks and How to Claim",
          "item": "https://onestoptyres247.co.uk/guides/pothole-tyre-damage-claim"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://onestoptyres247.co.uk/guides/pothole-tyre-damage-claim#faq",
      "url": "https://onestoptyres247.co.uk/guides/pothole-tyre-damage-claim",
      "inLanguage": "en-GB",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Can I drive on a tyre with a bulge?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. A bulge indicates damage to the tyre's internal structure and the tyre could fail without warning. Do not continue driving on it. Arrange a replacement and use mobile tyre fitting if you need help at your location."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need a wheel alignment after a pothole?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "If your car pulls to one side or the steering wheel is off-centre after hitting a pothole, have the wheel alignment and suspension checked. Inspect the tyres and ensure they are inflated to the vehicle manufacturer's recommended pressures."
          }
        },
        {
          "@type": "Question",
          "name": "How long do I have to make a claim for pothole damage?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Claim deadlines and requirements depend on the circumstances and the authority responsible for the road. Check the relevant council or National Highways claim procedure and submit your evidence as soon as possible. Keep photographs, repair estimates and receipts."
          }
        },
        {
          "@type": "Question",
          "name": "Should I report a pothole even if there is no damage?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Reporting a pothole to the responsible road authority can help it arrange an inspection and repair. Use the appropriate official reporting service for the road."
          }
        },
        {
          "@type": "Question",
          "name": "Is a pothole puncture an emergency?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A flat tyre or a tyre with a sidewall bulge can be unsafe to drive on. Stop in a safe location, avoid driving on the damaged tyre and arrange emergency puncture assistance or a replacement. One Stop Mobile Tyres 24/7 offers emergency puncture repair across Greater Manchester."
          }
        }
      ]
    }
  ]
}

const faqs: { q: string; a: ReactNode }[] = [
  {
    q: 'Can I drive on a tyre with a bulge?',
    a: (
      <>
        No. A bulge means internal damage, and the tyre could fail. Replace it, and book{' '}
        <a href="/mobile-tyre-fitting" className={link}>mobile tyre fitting</a> the same day if you can.
      </>
    ),
  },
  {
    q: 'Do I need a wheel alignment after a pothole?',
    a: (
      <>
        If the car pulls to one side or the steering wheel is off-centre, get the tracking checked.
        Also check{' '}
        <a href="/guides/tyre-pressure-cold-weather" className={link}>tyre pressure in cold weather</a>,
        as low pressure raises damage risk.
      </>
    ),
  },
  {
    q: 'How long do I have to make a claim?',
    a: (
      <>
        Time limits and rules vary by authority. Check the council&apos;s claim page and act
        quickly. Keep your tyre receipts from{' '}
        <a href="/" className={link}>One Stop Mobile Tyres 24/7</a>.
      </>
    ),
  },
  {
    q: 'Should I report the pothole even if there is no damage?',
    a: (
      <>
        Yes. Reporting it helps get it repaired and may support a claim by someone else. Hit one on
        the motorway? Read{' '}
        <a href="/guides/what-to-do-flat-tyre-m60-manchester-motorway" className={link}>
          flat tyre on the motorway: what to do
        </a>.
      </>
    ),
  },
  {
    q: 'Is a pothole puncture an emergency?',
    a: (
      <>
        If the tyre is flat or bulging, yes. Stop in a safe place and get help with{' '}
        <a href="/puncture-repair-Greater-manchester" className={link}>emergency puncture repair</a>.
      </>
    ),
  },
]

const damageSigns = [
  ['Bulge or bubble in the sidewall', 'Internal cords have broken', 'Stop driving on it, replace the tyre'],
  ['Visible cut or crack', 'Tyre structure damaged', 'Replace the tyre'],
  ['Pressure keeps dropping', 'Puncture or bent wheel causing a leak', 'Check pressure, get a puncture inspection'],
  ['Steering wheel vibration', 'Bent wheel or tyre damage', 'Have the wheel and tyre checked'],
  ['Car pulls to one side', 'Tracking or suspension damage', 'Book a tracking check'],
  ['Tyre pressure warning light', 'Sudden pressure loss', 'Check all four tyres'],
]

const straightAway = [
  'Slow down gradually and pull over somewhere safe. Never stop on a live carriageway.',
  'Look at all four tyres and wheels, not just the one that hit the hole.',
  'Check the pressures. If a tyre is low, do not keep driving on it.',
  'If you see a bulge, a deep cut or a bent wheel, call for help rather than driving on.',
]

const evidence = [
  'Photograph the pothole with something for scale, such as a coin or tape measure, and note the exact location.',
  'Photograph the damage to the tyre, wheel and car.',
  'Note the date and time, and keep the repair estimate and receipts.',
  'Keep the damaged tyre if you can, as it may be requested as evidence.',
]

const beyondTyre = [
  ['Wheel', 'Bent or cracked rim, especially on alloys', 'Vibration, pressure loss, visible dent'],
  ['Suspension', 'Shock absorbers, springs or arms', 'Bouncing, knocking noises, uneven ride'],
  ['Tracking or alignment', 'Wheels knocked out of line', 'Car pulls to one side, off-centre steering wheel'],
  ['Steering', 'Track rod ends or steering rack', 'Loose or vague steering'],
  ['Underside', 'Exhaust or undertray', 'Scraping or rattling'],
]

const repairable = [
  ['Nail or screw puncture in the central tread area', 'Often yes, if done to the UK repair standard (BS AU 159)'],
  ['Cut or bulge in the sidewall', 'No, replace the tyre'],
  ['Damage near the shoulder or edge of the tread', 'Usually no'],
  ['Damage where the tyre meets the rim', 'No'],
  ['Tyre driven for some distance while flat or very low', 'Usually no, as internal damage is likely'],
]

const reduceRisk: [string, string][] = [
  ['Keep your tyres at the correct pressure.', 'Under-inflated tyres are more likely to be damaged.'],
  ['Look well ahead', 'and leave a gap to the car in front so you can see the road surface.'],
  ['Ease off before the pothole, not in it.', 'Braking hard in the hole can put extra strain on the front tyre and suspension.'],
  ["Don't swerve suddenly", 'into another lane or towards a kerb.'],
  ['Be careful after rain.', 'Puddles can hide deep holes.'],
  ['Slow down on poor roads', 'and avoid carrying heavy loads you do not need.'],
]

export default function PotholeTyreDamageGuide() {
  return (
    <div className="text-[#1c1b1b]" style={{ fontFamily: 'var(--font-inter)' }}>
      <JsonLd data={_schema} />

      <GuideHero
        crumb="Pothole Tyre Damage"
        badge="Tyre Safety"
        title={HEADLINE}
        published="23 October 2026"
        readTime="7 min read"
      />

      {/* ── ARTICLE BODY ─────────────────────────────────────────── */}
      <article className="py-12 sm:py-16 px-5 sm:px-8 bg-white">
        <div className="max-w-3xl mx-auto">

          <FeaturedImage
            src={IMAGE}
            alt="Car tyre beside a deep pothole on the road, showing pothole tyre damage signs, checks and how to claim"
            width={1600}
            height={900}
          />

          <QuickAnswer>
            After hitting a pothole, pull over somewhere safe and check each tyre for bulges, cuts and
            pressure loss. A damaged sidewall cannot be repaired and the tyre should be replaced. If
            the pothole damaged your car, you may be able to claim from the authority responsible for
            the road, but you will need evidence. For a puncture or damaged tyre, our{' '}
            <a href="/puncture-repair-Greater-manchester" className={link}>emergency puncture repair</a>{' '}
            service covers Greater Manchester.
          </QuickAnswer>

          <H2>6 signs a pothole has damaged your tyre</H2>
          <Table head={['Sign', 'What it may mean', 'What to do']} rows={damageSigns} />

          <H2>What to do straight away</H2>
          <CheckList items={straightAway} />
          <P>
            Our <a href="/puncture-repair-Greater-manchester" className={link}>emergency puncture repair</a>{' '}
            and <a href="/mobile-tyre-fitting" className={link}>mobile tyre fitting</a> teams at One
            Stop Mobile Tyres 24/7 can inspect and replace damaged tyres at your location across
            Greater Manchester. Call <a href="tel:+441613995851" className={link}>0161 399 5851</a>.
          </P>

          <H2>Why a bulge means replacement</H2>
          <P>
            A bulge shows that the tyre&apos;s internal structure has been damaged by the impact. The
            tyre can fail without warning at speed, so it should be replaced rather than repaired. A
            puncture in the tread can often be repaired, but sidewall damage cannot. If you need a
            replacement, our{' '}
            <a href="/mobile-tyre-fitting" className={link}>mobile tyre fitting service</a> can fit it
            where you are.
          </P>

          <H2>How to collect evidence for a claim</H2>
          <CheckList items={evidence} />

          <H2>Who do you claim from?</H2>
          <P>
            The authority responsible depends on the road. Local roads are generally the
            responsibility of the local council, and motorways and major trunk roads are managed by
            National Highways. You can find the right authority through the GOV.UK pothole reporting
            service. Each council has its own claim process and conditions, so check the official
            claim page for the authority covering your road. Meanwhile, get the tyre checked: our{' '}
            <a href="/mobile-tyre-fitting" className={link}>mobile tyre fitting</a> team can inspect
            it and give you a receipt for your claim.
          </P>

          <H2>Will the council pay?</H2>
          <P>
            Not always. Councils often defend claims where they can show they had inspected and
            maintained the road reasonably. A strong claim usually has clear evidence, a prompt report
            and receipts. This is general information, not legal advice. If a claim is large or
            disputed, consider getting independent advice.
          </P>

          <H2>Why potholes damage tyres</H2>
          <P>
            When a wheel drops into a pothole and hits the far edge, the tyre can be squeezed between
            the road edge and the wheel rim. This can break the cords inside the sidewall, even if the
            outside looks fine at first. The damage can appear later as a bulge. Speed makes it worse,
            and so does low pressure, because a soft tyre has less cushion. Tyres with a low profile,
            which have thinner sidewalls, are more likely to be damaged. Check your pressures often:
            see <a href="/guides/tyre-pressure-cold-weather" className={link}>tyre pressure in cold weather</a>.
          </P>

          <H2>Damage beyond the tyre</H2>
          <P className="mb-4">A pothole hit can affect more than the tyre.</P>
          <Table head={['Part', 'Possible damage', 'Warning sign']} rows={beyondTyre} />
          <P>
            If you notice any of these after hitting a pothole, have the car checked before a long
            journey.
          </P>

          <H2>Can a pothole-damaged tyre be repaired?</H2>
          <Table head={['Damage', 'Repairable?']} rows={repairable} />
          <P>
            A technician has to inspect the inside of the tyre as well as the outside, which is one
            reason a proper repair is more than a plug from the outside. For a proper repair or
            replacement, call <a href="/" className={link}>One Stop Mobile Tyres 24/7</a>.
          </P>

          <H2>How to reduce your pothole risk</H2>
          <BoldCheckList items={reduceRisk} />

          <H2>Costs and insurance</H2>
          <P>
            The cost depends on the tyre size, the type of tyre and any other damage. Keep every
            receipt and estimate, as you will need them for a council claim. If you claim on your own
            insurance instead, remember that your excess applies and it may affect your no-claims
            bonus. Check your policy before deciding. For a clear quote on tyres, contact{' '}
            <a href="/" className={link}>One Stop Mobile Tyres 24/7</a>.
          </P>

          <GuideCta
            title="Hit a pothole? Get your tyre checked where you are."
            text="We'll inspect the tyre and wheel, repair or replace it on the spot, and give you a receipt for your claim, anywhere in Greater Manchester."
          />

        </div>
      </article>

      <FaqSection faqs={faqs} />
    </div>
  )
}
