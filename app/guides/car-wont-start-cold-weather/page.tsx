import type { ReactNode } from 'react'
import JsonLd from '@/components/JsonLd'
import { SITE_URL } from '@/lib/schema'
import {
  GuideHero, FeaturedImage, QuickAnswer, H2, P, Table, CheckList, BoldCheckList, GuideCta, FaqSection, linkClass as link,
} from '@/components/GuideParts'

const TITLE = "Car Won't Start in Cold Weather? 7 Causes and Fixes"
const DESCRIPTION =
  "Car won't start in the cold? Check the battery, lights and starter first. Quick fixes, plus when to call a mobile jump-start."
const SLUG = 'guides/car-wont-start-cold-weather'
const PAGE_URL = `${SITE_URL}/${SLUG}`
const HEADLINE = "Car Won't Start on a Cold Morning? 7 Common Causes and Quick Fixes"
const IMAGE = '/images/car-wont-start-cold-weather.webp'

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
    images: [{ url: IMAGE, width: 1536, height: 1024 }],
  },
}

// Schema supplied by the SEO team (BlogPosting + BreadcrumbList + FAQPage).
const _schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BlogPosting",
      "@id": "https://onestoptyres247.co.uk/guides/car-wont-start-cold-weather#article",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://onestoptyres247.co.uk/guides/car-wont-start-cold-weather"
      },
      "headline": "Car Won't Start on a Cold Morning? 7 Common Causes and Quick Fixes",
      "description": "Car won't start in the cold? Check the battery, lights and starter first. Quick fixes, plus when to call a mobile jump-start.",
      "url": "https://onestoptyres247.co.uk/guides/car-wont-start-cold-weather",
      "inLanguage": "en-GB",
      "articleSection": "Car Maintenance Guides",
      "keywords": [
        "car won't start in cold weather",
        "car won't start on a cold morning",
        "cold weather car battery problems",
        "mobile jump-start service",
        "car battery jump-start Greater Manchester",
        "signs of a weak car battery"
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
        { "@type": "Thing", "name": "Car battery maintenance" },
        { "@type": "Thing", "name": "Cold weather vehicle starting" },
        { "@type": "Thing", "name": "Vehicle jump-starting" },
        { "@type": "Thing", "name": "Automotive roadside assistance" }
      ],
      "mentions": {
        "@type": "Organization",
        "name": "One Stop Tyres 247",
        "url": "https://onestoptyres247.co.uk/"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://onestoptyres247.co.uk/guides/car-wont-start-cold-weather#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://onestoptyres247.co.uk/" },
        { "@type": "ListItem", "position": 2, "name": "Guides", "item": "https://onestoptyres247.co.uk/guides/" },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Car Won't Start in Cold Weather",
          "item": "https://onestoptyres247.co.uk/guides/car-wont-start-cold-weather"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://onestoptyres247.co.uk/guides/car-wont-start-cold-weather#faq",
      "url": "https://onestoptyres247.co.uk/guides/car-wont-start-cold-weather",
      "inLanguage": "en-GB",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Why does cold weather kill car batteries?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Cold weather slows the chemical reactions inside a car battery, reducing the power it can deliver while the engine needs more power to start. One Stop Tyres 247 offers mobile jump-start assistance across Greater Manchester."
          }
        },
        {
          "@type": "Question",
          "name": "How long should I drive after a jump-start?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Driving for around 20 to 30 minutes at a steady speed may help recharge the battery, but it does not guarantee a full charge. Have the battery and charging system tested if the car struggles to start again."
          }
        },
        {
          "@type": "Question",
          "name": "Can a jump-start damage my car?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A jump-start performed correctly is safe for many vehicles, but incorrect connections can damage electrical components. Follow the vehicle manufacturer's instructions, use the specified jump-start points and never jump-start a damaged or leaking battery. Seek professional help if unsure."
          }
        },
        {
          "@type": "Question",
          "name": "How do I know if the battery or the starter is the problem?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A weak battery often causes dim dashboard lights, slow cranking or rapid clicking. A single loud click despite bright lights may indicate a starter motor or connection fault. These symptoms are not conclusive, so a battery and starter test can identify the cause."
          }
        },
        {
          "@type": "Question",
          "name": "What should I do if my car won't start in cold weather?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Switch off unnecessary electrical equipment, check the battery terminals if it is safe to do so, and try starting the car in short attempts. Avoid prolonged cranking. If the car still will not start, contact a mobile jump-start service or breakdown professional. One Stop Tyres 247 provides mobile jump-start assistance across Greater Manchester."
          }
        }
      ]
    }
  ]
}

const faqs: { q: string; a: ReactNode }[] = [
  {
    q: 'Why does cold weather kill car batteries?',
    a: (
      <>
        Cold slows the chemical reaction inside the battery, so it delivers less power just when
        the engine needs more. <a href="/" className={link}>One Stop Mobile Tyres 24/7</a> can get
        you started again.
      </>
    ),
  },
  {
    q: 'How long should I drive after a jump-start?',
    a: (
      <>
        Around 20 to 30 minutes at a steady speed is a sensible minimum. See{' '}
        <strong>how to jump-start a car safely</strong> for the full steps.
      </>
    ),
  },
  {
    q: 'Can a jump-start damage my car?',
    a: (
      <>
        Done correctly, it is safe for most cars. Newer cars with sensitive electronics should
        follow the handbook, which is why some drivers prefer a professional. Our{' '}
        <a href="/jump-start" className={link}>mobile jump-start service</a> covers Greater
        Manchester.
      </>
    ),
  },
  {
    q: 'How do I know if the battery or the starter is the problem?',
    a: (
      <>
        A battery fault usually shows as dim lights and slow cranking. A single loud click with
        bright lights points more towards the starter. A garage can test both quickly. Cold also
        hits your tyres, so check{' '}
        <a href="/guides/tyre-pressure-cold-weather" className={link}>tyre pressure in cold weather</a> too.
      </>
    ),
  },
  {
    q: "What should I do if my car won't start in cold weather?",
    a: (
      <>
        Switch off all electrics, check the battery terminals and try short attempts. If it still
        will not start, call a <a href="/jump-start" className={link}>mobile jump-start service</a>{' '}
        and avoid long cranking.
      </>
    ),
  },
]

const symptoms = [
  ['Rapid clicking, engine does not turn', 'Flat or weak battery', 'Jump-start, then test the battery'],
  ['Slow, heavy cranking', 'Weak battery or cold thick oil', 'Wait a minute and try again, then jump-start'],
  ['Dashboard lights very dim or off', 'Flat battery or loose terminal', 'Check the terminals, then jump-start'],
  ['Engine cranks normally but will not start', 'Fuel, spark or glow-plug issue', 'Try again in short bursts, then call a mechanic'],
  ['One loud click, then nothing', 'Starter motor or connection fault', 'Check the connections, then get it tested'],
  ['No sound and no lights', 'Totally flat battery or disconnected terminal', 'Check the battery terminals'],
]

const causes: [string, string][] = [
  ['Weak or old battery.', 'Most car batteries last roughly 3 to 5 years, and cold exposes a tired battery first.'],
  ['Short journeys.', 'Many short trips use more power starting the car than the alternator puts back.'],
  ['Left-on lights or electrics.', 'Interior lights, a dash cam or a phone charger can drain a battery overnight.'],
  ['Loose or corroded terminals.', 'A poor connection can mimic a flat battery.'],
  ['Thick engine oil.', 'Cold oil makes the engine harder to turn.'],
  ['Fuel issues.', 'Diesel can become harder to run in extreme cold, and water in the fuel system can cause problems.'],
  ['Starter or alternator fault.', 'If the battery keeps going flat after a jump-start, the charging system may be at fault.'],
]

const quickChecks = [
  'Turn off all electrics, including heated seats, the radio and lights.',
  'Check that the battery terminals are tight and clean.',
  'Try the key or start button in short attempts of a few seconds. Long attempts drain the battery further.',
  'Make sure the car is in neutral or park, and that the clutch is pressed in if it is a manual.',
]

const avoidDeadBattery = [
  'Take a longer drive once a week.',
  'Switch off lights, heaters and chargers before you leave the car.',
  'Have an older battery tested before the cold sets in.',
  'Keep jump leads or a jump starter pack in the boot.',
]

const voltageReadings = [
  ['About 12.6V or above', 'Fully charged'],
  ['About 12.4V', 'Roughly three-quarters charged'],
  ['About 12.0V or below', 'Effectively flat, needs charging or a jump'],
  ['Drops sharply while cranking', 'Weak battery likely to fail soon'],
]

const carTypes: [string, string][] = [
  ['Petrol cars:', 'Cold starts usually point to the battery, spark plugs or fuel supply.'],
  ['Diesel cars:', 'Glow plugs warm the engine before starting. A glow plug fault or a very cold, thickened fuel can make starting harder.'],
  ['Stop-start cars:', 'These need a specific type of battery, such as AGM or EFB. If you replace it, fit the correct type.'],
  ['Hybrid and electric cars:', "The big battery is separate from the small 12V battery that runs the car's systems. The 12V battery can still go flat and stop the car from starting. Jump-start procedures differ, so follow the handbook."],
]

const dontDo: [string, string][] = [
  ["Don't keep cranking.", 'Try for no more than about 10 seconds at a time, then wait around 30 seconds. Long attempts drain the battery and can overheat the starter.'],
  ["Don't jump-start a damaged battery.", 'If the case is cracked, swollen or leaking, stop and call for help.'],
  ["Don't use starter sprays on a modern engine", 'unless the manufacturer says it is safe.'],
  ["Don't push-start an automatic or a modern car", 'unless the handbook allows it.'],
]

const endOfLifeSigns = [
  'The engine turns over more slowly than it used to.',
  'Headlights dim when you start the car.',
  'The battery warning light appears on the dashboard.',
  'The battery is more than about four or five years old.',
  'You need a jump-start more than once.',
  'The terminals have white or blue-green corrosion.',
]

export default function CarWontStartColdWeatherGuide() {
  return (
    <div className="text-[#1c1b1b]" style={{ fontFamily: 'var(--font-inter)' }}>
      <JsonLd data={_schema} />

      <GuideHero
        crumb="Car Won't Start in Cold Weather"
        badge="Winter Driving"
        title={HEADLINE}
        published="23 October 2026"
        readTime="7 min read"
      />

      {/* ── ARTICLE BODY ─────────────────────────────────────────── */}
      <article className="py-12 sm:py-16 px-5 sm:px-8 bg-white">
        <div className="max-w-3xl mx-auto">

          <FeaturedImage
            src={IMAGE}
            alt="Car with bonnet open and jump leads attached on a snowy road, showing a car that will not start in cold weather"
            width={1536}
            height={1024}
          />

          <QuickAnswer>
            The most common reason a car will not start in cold weather is a weak or flat battery.
            Cold reduces what a battery can deliver while the engine needs more power to turn over.
            If the engine clicks, cranks slowly or the dashboard lights are dim, suspect the battery
            first. A jump-start usually gets you moving, and if you are stuck now, our{' '}
            <a href="/jump-start" className={link}>mobile jump-start service</a> can come to you.
          </QuickAnswer>

          <H2>What is your car telling you?</H2>
          <Table head={['Symptom', 'Most likely cause', 'First thing to try']} rows={symptoms} />

          <H2>The 7 common causes</H2>
          <BoldCheckList items={causes} />

          <H2>Quick checks before you call anyone</H2>
          <CheckList items={quickChecks} />

          <H2>When is a jump-start enough?</H2>
          <P>
            If the car starts after a jump and keeps running, drive for at least 20 to 30 minutes so
            the alternator can recharge the battery, then have the battery tested. If it will not
            start again or dies after a short time, the battery likely needs replacing or the
            charging system needs checking. Our{' '}
            <a href="/jump-start" className={link}>mobile jump-start service</a> at One Stop Mobile
            Tyres 24/7 comes to you across Greater Manchester. For the safe step-by-step method, read{' '}
            <strong>how to jump-start a car safely</strong>.
          </P>

          <H2>How to avoid a dead battery this winter</H2>
          <CheckList items={avoidDeadBattery} />

          <H2>How cold weather affects a car battery</H2>
          <P>
            A car battery produces power through a chemical reaction, and cold slows that reaction
            down. At the same time, cold makes the engine oil thicker, so the starter motor needs
            more power to turn the engine over. A battery that has just enough reserve in summer can
            fail on the first frosty morning. This is why a tired battery often gives no warning
            until the weather turns. A quick <a href="/jump-start" className={link}>jump start</a>{' '}
            is often all it takes to get moving again.
          </P>

          <H2>How to test your battery at home</H2>
          <P>
            If you have a multimeter, set it to DC volts and test the battery with the engine off and
            the car rested for a few hours. These are approximate figures, so check your handbook for
            your own car. If you would rather not test it yourself,{' '}
            <a href="/" className={link}>One Stop Mobile Tyres 24/7</a> can help.
          </P>
          <Table head={['Reading (engine off)', 'What it suggests']} rows={voltageReadings} />
          <P>
            With the engine running, a healthy charging system usually reads somewhere around 13.7 to
            14.7V. A reading outside that range points to an alternator or charging problem. Many
            garages and tyre centres will test a battery quickly, so you do not need to buy
            equipment. Cold weather also affects your tyres, so check{' '}
            <a href="/guides/tyre-pressure-cold-weather" className={link}>tyre pressure in cold weather</a> too.
          </P>

          <H2>Petrol, diesel, hybrid and electric cars</H2>
          <BoldCheckList items={carTypes} />

          <H2>What not to do</H2>
          <BoldCheckList items={dontDo} />

          <H2>Signs your battery is nearing the end</H2>
          <CheckList items={endOfLifeSigns} />
          <P>
            If you notice more than one of these, get the battery tested before the next cold spell.
            A short test is cheaper than a breakdown. If you are already stranded,{' '}
            <a href="/" className={link}>One Stop Mobile Tyres 24/7</a> offers roadside help across
            Greater Manchester, including our{' '}
            <a href="/mobile-tyre-fitting" className={link}>24-hour emergency tyre fitting</a> service.
          </P>

          <GuideCta
            title="Car won't start? We'll come to you."
            text="Our technicians jump-start flat batteries at your home, work or roadside across Greater Manchester, day or night."
          />

        </div>
      </article>

      <FaqSection faqs={faqs} />
    </div>
  )
}
