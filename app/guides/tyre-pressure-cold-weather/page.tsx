import type { ReactNode } from 'react'
import JsonLd from '@/components/JsonLd'

export const metadata = {
  title: 'Tyre Pressure in Cold Weather: Why It Drops and What to Do',
  description:
    'Why tyre pressure falls in cold weather, how often to check it and how to clear the warning light. Mobile help across Greater Manchester.',
  alternates: { canonical: 'https://onestoptyres247.co.uk/guides/tyre-pressure-cold-weather' },
  openGraph: {
    title: 'Tyre Pressure in Cold Weather: Why It Drops and What to Do',
    description:
      'Why tyre pressure falls in cold weather, how often to check it and how to clear the warning light. Mobile help across Greater Manchester.',
    url: 'https://onestoptyres247.co.uk/guides/tyre-pressure-cold-weather',
    siteName: 'One Stop Mobile Tyres 24/7',
    type: 'article',
    publishedTime: '2026-10-22',
    images: [{ url: '/images/tyre-pressure-cold-weather.webp', width: 1536, height: 1024 }],
  },
}

const HEADLINE = 'Why Your Tyre Pressure Drops in Cold Weather (and How to Fix It)'

// Schema supplied by the SEO team (BlogPosting + BreadcrumbList + FAQPage).
const _schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BlogPosting',
      '@id': 'https://onestoptyres247.co.uk/guides/tyre-pressure-cold-weather#article',
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://onestoptyres247.co.uk/guides/tyre-pressure-cold-weather',
      },
      headline: 'Why Your Tyre Pressure Drops in Cold Weather (and How to Fix It)',
      description:
        'Why tyre pressure falls in cold weather, how often to check it and how to clear the warning light. Mobile help across Greater Manchester.',
      url: 'https://onestoptyres247.co.uk/guides/tyre-pressure-cold-weather',
      inLanguage: 'en-GB',
      articleSection: 'Tyre Guides',
      keywords: [
        'tyre pressure in cold weather',
        'tyre pressure drops in cold weather',
        'tyre pressure warning light',
        'how to check tyre pressure',
        'TPMS reset service',
        'mobile tyre fitting Greater Manchester',
      ],
      author: { '@type': 'Organization', name: 'One Stop Tyres 247', url: 'https://onestoptyres247.co.uk/' },
      publisher: { '@type': 'Organization', name: 'One Stop Tyres 247', url: 'https://onestoptyres247.co.uk/' },
      about: [
        { '@type': 'Thing', name: 'Tyre pressure' },
        { '@type': 'Thing', name: 'Tyre pressure monitoring systems' },
        { '@type': 'Thing', name: 'Cold weather vehicle maintenance' },
        { '@type': 'Thing', name: 'Tyre safety' },
      ],
      mentions: [
        { '@type': 'Organization', name: 'One Stop Tyres 247', url: 'https://onestoptyres247.co.uk/' },
      ],
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://onestoptyres247.co.uk/guides/tyre-pressure-cold-weather#breadcrumb',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://onestoptyres247.co.uk/' },
        { '@type': 'ListItem', position: 2, name: 'Guides', item: 'https://onestoptyres247.co.uk/guides/' },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Tyre Pressure in Cold Weather',
          item: 'https://onestoptyres247.co.uk/guides/tyre-pressure-cold-weather',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://onestoptyres247.co.uk/guides/tyre-pressure-cold-weather#faq',
      url: 'https://onestoptyres247.co.uk/guides/tyre-pressure-cold-weather',
      inLanguage: 'en-GB',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Should I check pressure on cold or warm tyres?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Check tyre pressure when the tyres are cold, ideally before driving or after the car has been parked for a few hours. Driving heats the tyres and increases the pressure reading. One Stop Tyres 247 can check your tyre pressures for you.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is it normal for the tyre pressure light to come on in cold weather?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Yes, the tyre pressure warning light can come on during cold weather because falling temperatures reduce tyre pressure. Treat the warning as genuine, stop somewhere safe and check all four tyres against the vehicle manufacturer's recommended pressures.",
          },
        },
        {
          '@type': 'Question',
          name: 'Should I use nitrogen instead of air in my tyres?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Nitrogen does not prevent tyre pressure from falling when temperatures drop. Ordinary air is suitable for most drivers, and checking tyre pressure regularly is more important than choosing nitrogen.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I reset the tyre pressure light?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The reset procedure depends on the vehicle. Some cars allow a reset through the dashboard menu or a dedicated button after the tyres are correctly inflated, while others may require diagnostic equipment. One Stop Tyres 247 offers a TPMS reset service across Greater Manchester.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the correct tyre pressure for winter?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Use the tyre pressure recommended by your vehicle manufacturer, found in the owner's handbook, on the driver's door-frame sticker or sometimes on the fuel flap. There is no separate winter pressure unless the manufacturer specifies one. One Stop Tyres 247 can help check the correct pressure.",
          },
        },
      ],
    },
  ],
}

const link = 'text-[#b70011] font-semibold hover:underline'

const faqs: { q: string; a: ReactNode }[] = [
  {
    q: 'Should I check pressure on cold or warm tyres?',
    a: (
      <>
        Cold. Driving heats the tyres and raises the reading.{' '}
        <a href="/" className={link}>One Stop Mobile Tyres 24/7</a> can check them for you.
      </>
    ),
  },
  {
    q: 'Is it normal for the tyre pressure light to come on in cold weather?',
    a: (
      <>
        Yes, it is common during the first cold snaps. Treat it as a real warning and check all
        four tyres. Driving in winter? Compare{' '}
        <a href="/guides/winter-tyres-vs-all-season-tyres-uk" className={link}>winter tyres vs all-season tyres</a>.
      </>
    ),
  },
  {
    q: 'Should I use nitrogen instead of air?',
    a: 'Nitrogen does not stop pressure falling in the cold, and ordinary air is fine for most drivers. Regular checks matter more than the gas.',
  },
  {
    q: 'How do I reset the tyre pressure light?',
    a: (
      <>
        The method depends on the car. Some reset through a dashboard menu or button after
        inflating, others need a diagnostic tool. Our{' '}
        <a href="/tpms-reset" className={link}>TPMS reset service</a> can do this for you.
      </>
    ),
  },
  {
    q: 'What is the correct tyre pressure for winter?',
    a: (
      <>
        Use the pressure in your car&apos;s handbook or door-frame sticker. There is no separate
        winter figure unless the manufacturer lists one. If you are unsure, ask a fitter from{' '}
        <a href="/" className={link}>One Stop Mobile Tyres 24/7</a> to check it.
      </>
    ),
  },
]

const checkFrequency = [
  ['Normal driving', 'At least once a month'],
  ['Winter or sudden cold snap', 'Every 2 to 3 weeks, and after a big temperature drop'],
  ['Before a long motorway trip or with a full load', 'Every time'],
  ['After a warning light', 'Straight away'],
]

const lowPressureEffects = [
  ['Safety', 'The sidewalls flex more and heat up, which raises the risk of a blowout at speed'],
  ['Grip and braking', 'Handling feels vague and stopping distances can increase'],
  ['Tyre wear', 'The outer edges wear faster and the tyre needs replacing sooner'],
  ['Fuel economy', 'More rolling resistance means the engine works harder'],
  ['Comfort', 'The steering can feel heavy and less precise'],
]

const checkSteps = [
  'Check when the tyres are cold, ideally before driving or after the car has been parked for a few hours.',
  'Remove the valve cap and press a reliable gauge firmly onto the valve.',
  'Compare the reading with the figure for your car.',
  'Add air in short bursts and re-check until you reach the target. If you overshoot, release a little air.',
  'Refit the valve caps and repeat on every tyre, including the spare if it is a full-size or space-saver wheel that has its own pressure.',
]

const mistakes = [
  ['Checking after a long drive.', 'Warm tyres give a higher reading, so you may think the pressure is fine when it is not.'],
  ['Using the sidewall figure.', "That number is the tyre's maximum, not your car's recommended pressure."],
  ['Forgetting the spare.', 'A full-size spare or a space-saver wheel has its own pressure and loses air over time.'],
  ['Relying on the light alone.', 'By the time the warning appears, a tyre can already be well below its target pressure.'],
  ['Not resetting after inflating.', 'On indirect systems the light may stay on until you reset it.'],
]

const routine = [
  'Buy a reliable digital or dial tyre gauge and keep it in the glovebox.',
  'Set a monthly reminder, and add a check after any sharp cold snap.',
  'Check first thing in the morning, before you drive.',
  'Write your correct pressures in your phone so you do not have to look them up.',
  'If a tyre needs topping up every week, have it inspected for a slow puncture.',
]

function H2({ children }: { children: ReactNode }) {
  return (
    <h2
      className="text-2xl sm:text-3xl font-bold text-[#0f172a] mt-10 mb-4"
      style={{ fontFamily: 'var(--font-work-sans)' }}
    >
      {children}
    </h2>
  )
}

function Table({ head, rows }: { head: string[]; rows: string[][] }) {
  return (
    <div className="overflow-x-auto mb-6">
      <table className="w-full text-left border-collapse text-sm sm:text-base">
        <thead>
          <tr className="border-b-2 border-slate-200">
            {head.map((h) => (
              <th key={h} className="py-2 pr-4 font-bold text-[#0f172a]">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody className="text-slate-600">
          {rows.map((row) => (
            <tr key={row[0]} className="border-b border-slate-100 last:border-0">
              {row.map((cell, i) => (
                <td key={i} className={`py-2 pr-4 ${i === 0 ? 'font-semibold text-[#0f172a]' : ''}`}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function CheckList({ items }: { items: ReactNode[] }) {
  return (
    <ul className="space-y-3 mb-6">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3">
          <span aria-hidden="true" data-nosnippet className="material-symbols-outlined text-green-600 mt-0.5 flex-shrink-0">check_circle</span>
          <span className="text-slate-600 leading-relaxed">{item}</span>
        </li>
      ))}
    </ul>
  )
}

function FaqItem({ q, a }: { q: string; a: ReactNode }) {
  return (
    <details className="group bg-white p-4 sm:p-6 rounded-xl border border-slate-200 shadow-sm open:shadow-md transition-all">
      <summary className="list-none flex justify-between items-center cursor-pointer font-bold text-base sm:text-lg text-[#0f172a] gap-3">
        {q}
        <span aria-hidden="true" data-nosnippet className="material-symbols-outlined group-open:rotate-180 transition-transform text-[#b70011] flex-shrink-0 text-xl sm:text-2xl">
          expand_more
        </span>
      </summary>
      <p className="mt-3 sm:mt-4 text-slate-600 leading-relaxed text-base">{a}</p>
    </details>
  )
}

export default function TyrePressureColdWeatherGuide() {
  return (
    <div className="text-[#1c1b1b]" style={{ fontFamily: 'var(--font-inter)' }}>
      <JsonLd data={_schema} />

      {/* ── HERO ──────────────────────────────────────────────────── */}
      <section className="bg-[#0f172a] py-12 sm:py-16 px-5 sm:px-8">
        <div className="max-w-3xl mx-auto">
          <nav aria-label="Breadcrumb" className="mb-4 text-sm text-slate-300">
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <span className="mx-2">/</span>
            <a href="/guides" className="hover:text-white transition-colors">Guides</a>
            <span className="mx-2">/</span>
            <span className="text-white/70">Tyre Pressure in Cold Weather</span>
          </nav>
          <span className="inline-flex items-center gap-2 bg-red-600/20 text-red-400 font-bold px-3.5 py-1.5 rounded-full mb-4 text-[11px] uppercase tracking-widest border border-red-600/30">
            Winter Driving
          </span>
          <h1
            className="text-3xl sm:text-4xl lg:text-5xl text-white font-black mb-3 leading-[1.1]"
            style={{ fontFamily: 'var(--font-work-sans)', letterSpacing: '-0.02em' }}
          >
            {HEADLINE}
          </h1>
          <p className="text-slate-400 text-sm mt-4">Published 22 October 2026 · 5 min read</p>
        </div>
      </section>

      {/* ── ARTICLE BODY ─────────────────────────────────────────── */}
      <article className="py-12 sm:py-16 px-5 sm:px-8 bg-white">
        <div className="max-w-3xl mx-auto">

          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/tyre-pressure-cold-weather.webp"
            alt="Tyre pressure gauge held against a car tyre on a snowy road, showing why tyre pressure drops in cold weather"
            className="w-full h-auto rounded-2xl shadow-sm mb-10"
            width={1536}
            height={1024}
            fetchPriority="high"
          />

          {/* Quick answer box */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 sm:p-6 mb-10">
            <h2
              className="text-lg sm:text-xl font-bold text-[#0f172a] mb-3"
              style={{ fontFamily: 'var(--font-work-sans)' }}
            >
              The Quick Answer
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Air contracts as it cools, so tyre pressure falls when the temperature drops. A cold
              snap can take enough pressure out to trigger your tyre pressure warning light. Check
              your pressures when the tyres are cold, top up to the figure in your car&apos;s
              handbook, and check again every few weeks through winter. If the light keeps coming
              back, <a href="/" className={link}>One Stop Mobile Tyres 24/7</a> can help.
            </p>
          </div>

          <H2>Why does tyre pressure drop when it&apos;s cold?</H2>
          <p className="text-slate-600 leading-relaxed mb-6">
            The air inside a tyre behaves like any gas: when it cools, it takes up less space and
            the pressure falls. As a rule of thumb, tyre pressure drops by about 1 PSI for every 5
            to 6°C fall in temperature. A tyre that was correct in September can be noticeably low
            by December without any puncture. If you keep topping up the same tyre, book{' '}
            <a href="/puncture-repair-Greater-manchester" className={link}>emergency puncture repair</a>.
          </p>

          <H2>Why does the warning light come on in the morning?</H2>
          <p className="text-slate-600 leading-relaxed mb-6">
            Many cars have a tyre pressure monitoring system (TPMS) that warns you when a tyre is
            well below its target pressure. The coldest point of the day is early morning, so a
            tyre that is already slightly low can cross the warning threshold overnight. The light
            may go out once the tyres warm up as you drive, but that does not mean the pressure is
            correct. Check it anyway. If it keeps returning, a{' '}
            <a href="/tpms-reset" className={link}>TPMS reset</a> may be needed.
          </p>

          <H2>How often should you check your tyre pressure?</H2>
          <Table head={['Situation', 'How often']} rows={checkFrequency} />

          <H2>Where do I find the correct pressure?</H2>
          <p className="text-slate-600 leading-relaxed mb-6">
            Use the figure for your own car, not the number printed on the tyre sidewall. That
            sidewall figure is the tyre&apos;s maximum. Your correct pressures are normally in the
            vehicle handbook, on a sticker inside the driver&apos;s door frame or on the fuel flap.
            Many cars list different pressures for normal and fully loaded. A fitter can confirm the
            right figure during a{' '}
            <a href="/mobile-tyre-fitting" className={link}>mobile tyre fitting</a> visit.
          </p>

          <H2>How to check and adjust your tyre pressure</H2>
          <ol className="space-y-3 mb-6">
            {checkSteps.map((step, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="w-7 h-7 rounded-full bg-[#b70011] text-white text-sm font-bold flex items-center justify-center flex-shrink-0">
                  {i + 1}
                </span>
                <span className="text-slate-600 leading-relaxed">{step}</span>
              </li>
            ))}
          </ol>

          <H2>The warning light stays on after you&apos;ve inflated the tyres</H2>
          <p className="text-slate-600 leading-relaxed mb-6">
            If the light stays on after all four tyres are at the right pressure, there are three
            common causes: the system needs resetting, a sensor has a flat battery or fault, or one
            tyre has a slow puncture. If you suspect a slow puncture, read our guide on{' '}
            <strong>slow puncture signs</strong>. If the system just needs a reset, our{' '}
            <a href="/tpms-reset" className={link}>TPMS reset service</a> at One Stop Mobile Tyres
            24/7 can clear the light at your home or workplace across Greater Manchester. Call{' '}
            <a href="tel:+441613995851" className={link}>0161 399 5851</a>.
          </p>

          <H2>Direct and indirect TPMS: why the light behaves differently</H2>
          <p className="text-slate-600 leading-relaxed mb-6">
            There are two main types of tyre pressure monitoring system. A <strong>direct</strong>{' '}
            system has a pressure sensor inside each wheel and reads the actual pressure. An{' '}
            <strong>indirect</strong> system uses the ABS wheel-speed sensors to spot a tyre that is
            spinning faster than the others, which usually means it has lost air and has a smaller
            diameter. Indirect systems normally need to be reset after you inflate the tyres. Both
            types can trigger in cold weather. Direct sensors run on small batteries that eventually
            wear out, usually after several years, and a failing sensor can keep the light on even
            when the pressure is correct.
          </p>

          <H2>Should you inflate above the recommended pressure in winter?</H2>
          <p className="text-slate-600 leading-relaxed mb-6">
            No. Use the pressure your car&apos;s maker recommends. Over-inflating reduces the area of
            rubber touching the road, which lowers grip and can wear the middle of the tread faster.
            Some handbooks list a higher pressure for a fully loaded car or sustained high speeds,
            and you should use that figure only in those situations. Correct pressure also helps
            tyres cope with rough roads, as we explain in our{' '}
            <a href="/guides/pothole-tyre-damage-claim" className={link}>pothole tyre damage</a>{' '}
            guide.
          </p>

          <H2>Why correct pressure matters beyond the warning light</H2>
          <Table head={['Area', 'What happens when pressure is too low']} rows={lowPressureEffects} />

          <H2>Common tyre pressure mistakes</H2>
          <CheckList
            items={mistakes.map(([title, body]) => (
              <>
                <strong>{title}</strong> {body}
              </>
            ))}
          />

          <H2>A simple winter pressure routine</H2>
          <CheckList items={routine} />

          {/* CTA */}
          <div className="bg-[#0f172a] rounded-2xl p-6 sm:p-8 my-10">
            <h3 className="text-white font-bold text-lg sm:text-xl mb-2" style={{ fontFamily: 'var(--font-work-sans)' }}>
              Tyre pressure light won&apos;t go off?
            </h3>
            <p className="text-slate-400 mb-5 leading-relaxed">
              We&apos;ll check all four tyres, look for slow punctures and reset your TPMS at your
              home or workplace anywhere in Greater Manchester.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-3">
              <a
                href="tel:+447759708646"
                className="bg-[#dc2626] text-white font-black px-6 py-3.5 rounded-xl flex items-center justify-center gap-2.5 hover:bg-red-700 hover:text-white transition-all text-base"
                style={{ fontFamily: 'var(--font-work-sans)' }}
              >
                <span aria-hidden="true" data-nosnippet className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>call</span>
                07759 708 646
              </a>
              <a
                href="https://wa.me/447759708646"
                className="bg-[#25D366] hover:bg-[#1ebe5d] text-white font-black px-6 py-3.5 rounded-xl flex items-center justify-center gap-2.5 transition-all text-base shadow-lg"
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
      </article>

      {/* ── FAQ ───────────────────────────────────────────────────── */}
      <section className="py-12 sm:py-16 px-5 sm:px-8 bg-slate-50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8 sm:mb-10">
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
              <FaqItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}
