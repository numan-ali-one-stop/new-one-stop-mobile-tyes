import type { ReactNode } from 'react'
import JsonLd from '@/components/JsonLd'

export const metadata = {
  title: 'Winter Tyres vs All-Season Tyres UK: Which Is Better?',
  description:
    'Winter or all-season tyres? Compare grip, cost and legality on UK roads, and see when a mobile fitter can swap them at your door.',
  alternates: { canonical: 'https://onestoptyres247.co.uk/guides/winter-tyres-vs-all-season-tyres-uk' },
  openGraph: {
    title: 'Winter Tyres vs All-Season Tyres UK: Which Is Better?',
    description:
      'Winter or all-season tyres? Compare grip, cost and legality on UK roads, and see when a mobile fitter can swap them at your door.',
    url: 'https://onestoptyres247.co.uk/guides/winter-tyres-vs-all-season-tyres-uk',
    siteName: 'One Stop Mobile Tyres 24/7',
    type: 'article',
    publishedTime: '2026-10-22',
    images: [{ url: '/images/winter-tyres-vs-all-season-tyres-uk.webp', width: 1536, height: 1024 }],
  },
}

const HEADLINE = 'Winter Tyres vs All-Season Tyres in the UK: Which Should You Choose?'

// Schema supplied by the SEO team (BlogPosting + BreadcrumbList + FAQPage).
const _schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BlogPosting',
      '@id': 'https://onestoptyres247.co.uk/guides/winter-tyres-vs-all-season-tyres-uk#article',
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://onestoptyres247.co.uk/guides/winter-tyres-vs-all-season-tyres-uk',
      },
      headline: 'Winter Tyres vs All-Season Tyres in the UK: Which Should You Choose?',
      description:
        'Winter or all-season tyres? Compare grip, cost and legality on UK roads, and see when a mobile fitter can swap them at your door.',
      url: 'https://onestoptyres247.co.uk/guides/winter-tyres-vs-all-season-tyres-uk',
      inLanguage: 'en-GB',
      articleSection: 'Tyre Guides',
      keywords: [
        'winter tyres vs all-season tyres UK',
        'winter tyres UK',
        'all-season tyres',
        'winter tyre fitting',
        'mobile tyre fitting Greater Manchester',
      ],
      author: { '@type': 'Organization', name: 'One Stop Tyres 247', url: 'https://onestoptyres247.co.uk/' },
      publisher: { '@type': 'Organization', name: 'One Stop Tyres 247', url: 'https://onestoptyres247.co.uk/' },
      about: [
        { '@type': 'Thing', name: 'Winter tyres' },
        { '@type': 'Thing', name: 'All-season tyres' },
        { '@type': 'Thing', name: 'Tyre safety' },
        { '@type': 'Thing', name: 'Mobile tyre fitting' },
      ],
      mentions: { '@type': 'Organization', name: 'One Stop Tyres 247', url: 'https://onestoptyres247.co.uk/' },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://onestoptyres247.co.uk/guides/winter-tyres-vs-all-season-tyres-uk#breadcrumb',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://onestoptyres247.co.uk/' },
        { '@type': 'ListItem', position: 2, name: 'Guides', item: 'https://onestoptyres247.co.uk/guides/' },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Winter Tyres vs All-Season Tyres UK',
          item: 'https://onestoptyres247.co.uk/guides/winter-tyres-vs-all-season-tyres-uk',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://onestoptyres247.co.uk/guides/winter-tyres-vs-all-season-tyres-uk#faq',
      url: 'https://onestoptyres247.co.uk/guides/winter-tyres-vs-all-season-tyres-uk',
      inLanguage: 'en-GB',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'When should I fit winter tyres?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Fit winter tyres when temperatures regularly fall below around 7°C, usually from October or November in the UK.',
          },
        },
        {
          '@type': 'Question',
          name: 'Are all-season tyres good enough?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'For most UK drivers, all-season tyres provide good year-round grip. Winter tyres are better for drivers who regularly travel on steep, rural or untreated roads in cold conditions.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do I have to tell my insurer about winter tyres?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Check with your insurer before changing tyres, as some insurers may have notification requirements. Confirm the requirements with your own insurance provider.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I mix winter and summer tyres?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Mixing winter and summer tyres can affect vehicle handling and braking. Using four compatible tyres is recommended. Follow your vehicle manufacturer's guidance and tyre specifications.",
          },
        },
      ],
    },
  ],
}

const link = 'text-[#b70011] font-semibold hover:underline'

const faqs = [
  {
    q: 'When should I fit winter tyres?',
    a: 'Once temperatures regularly fall below around 7°C, usually from October or November.',
  },
  {
    q: 'Are all-season tyres good enough?',
    a: 'For most UK drivers, yes. They give good year-round grip. If you often drive on steep, rural or untreated roads, winter tyres are better.',
  },
  {
    q: 'Do I have to tell my insurer?',
    a: 'It is sensible to check. Some insurers want to know about tyre changes. Confirm with your own insurer.',
  },
  {
    q: 'Can I mix winter and summer tyres?',
    a: 'No. Fit four matching tyres, or at minimum matching pairs on the same axle as the manufacturer advises. Mixing can upset handling and braking.',
  },
]

const atAGlance = [
  ['Best temperature range', 'Cold, roughly below 7°C', 'Mild to cold, year-round', 'Warm, above 7°C'],
  ['Grip on cold, wet and icy roads', 'Best', 'Good', 'Reduced'],
  ['Grip on snow', 'Best', 'Good if marked with the three-peak mountain snowflake symbol', 'Poor'],
  ['Wear in hot weather', 'Faster', 'Moderate', 'Slowest'],
  ['Needs a second set and storage', 'Yes', 'No', 'Only if paired with winter tyres'],
  ['Typical buyer', 'Rural, hilly or high-mileage drivers', 'Most UK drivers', 'Drivers who rarely face cold or snow'],
]

const whichDriver = [
  ['Short town journeys, mostly main roads', 'All-season', 'Main roads are usually gritted, and you avoid buying a second set'],
  ['Rural roads, hills or early starts on untreated roads', 'Winter tyres', 'Best grip on cold, damp and icy surfaces'],
  ['High-mileage motorway driving', 'All-season, or summer tyres with careful winter checks', 'Winter tyres wear faster in warm weather'],
  ['A car used only occasionally', 'All-season', 'No storage, and the tyres are not left unused'],
  ['Van, taxi or work vehicle on the road all winter', 'Winter or all-season', 'Reliability and safety matter more than saving on a set'],
  ['Electric car', "Tyres rated for the car's weight and torque", 'EVs are heavier and need tyres designed for them'],
]

const howTheyWork = [
  ['Rubber compound.', 'Winter tyres use a softer mix with more silica, so the rubber stays flexible in the cold. Summer rubber stiffens as the temperature falls, which reduces how well it grips the road.'],
  ['Tread pattern.', 'Deeper, wider grooves clear water, slush and snow from under the tyre. This reduces aquaplaning and lets the tread bite into snow.'],
  ['Sipes.', 'These are thousands of tiny slits cut across the tread blocks. They create extra gripping edges on cold, wet and icy surfaces.'],
]

const mistakes: [string, ReactNode][] = [
  ['Fitting only two winter tyres.', 'Fit all four. Winter tyres on one axle only can leave the car unbalanced and more likely to slide.'],
  ['Waiting for the first snow.', 'By then fitters are fully booked, and stock of popular sizes can run low.'],
  ['Ignoring tread depth.', "The legal minimum is 1.6mm, but winter tyres work best with plenty of tread. Many drivers replace them earlier, so follow your tyre maker's advice."],
  [
    'Forgetting pressure.',
    <>
      Cold air lowers pressure, so check regularly through the season. See our guide on{' '}
      <a href="/guides/tyre-pressure-cold-weather" className={link}>tyre pressure in cold weather</a>.
    </>,
  ],
  ['Running them all year.', 'Winter tyres wear quickly and lose sharpness on warm roads. Swap back in spring.'],
  ['Storing them badly.', 'Keep off-season tyres cool, dry and out of direct sunlight, and away from oil and solvents.'],
]

const checklist = [
  'Check tread depth on all four tyres.',
  'Inspect the sidewalls for cracks, cuts or bulges.',
  'Check the age of each tyre using the DOT code. Many manufacturers advise regular inspections from about five years and replacement at around ten.',
  "Set the pressures to your car's recommended figures.",
  'Book your swap or new tyres early.',
  'Keep an ice scraper, torch, blanket and charged phone in the car.',
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
            {head.map((h, i) => (
              <th key={i} className="py-2 pr-4 font-bold text-[#0f172a]">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody className="text-slate-600">
          {rows.map((row) => (
            <tr key={row[0]} className="border-b border-slate-100 last:border-0">
              {row.map((cell, i) => (
                <td key={i} className={`py-2 pr-4 align-top ${i === 0 ? 'font-semibold text-[#0f172a]' : ''}`}>{cell}</td>
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

function FaqItem({ q, a }: { q: string; a: string }) {
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

export default function WinterVsAllSeasonTyresGuide() {
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
            <span className="text-white/70">Winter Tyres vs All-Season Tyres</span>
          </nav>
          <span className="inline-flex items-center gap-2 bg-red-600/20 text-red-400 font-bold px-3.5 py-1.5 rounded-full mb-4 text-[11px] uppercase tracking-widest border border-red-600/30">
            Buying Guide
          </span>
          <h1
            className="text-3xl sm:text-4xl lg:text-5xl text-white font-black mb-3 leading-[1.1]"
            style={{ fontFamily: 'var(--font-work-sans)', letterSpacing: '-0.02em' }}
          >
            {HEADLINE}
          </h1>
          <p className="text-slate-400 text-sm mt-4">Published 22 October 2026 · 6 min read</p>
        </div>
      </section>

      {/* ── ARTICLE BODY ─────────────────────────────────────────── */}
      <article className="py-12 sm:py-16 px-5 sm:px-8 bg-white">
        <div className="max-w-3xl mx-auto">

          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/winter-tyres-vs-all-season-tyres-uk.webp"
            alt="Winter tyre on a snowy road next to an all-season tyre on a wet road, comparing winter and all-season tyres in the UK"
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
              If you drive mostly in towns and on main roads, good all-season tyres are enough for
              most UK winters. Winter tyres give better grip once temperatures stay low, and they
              suit hilly, rural or untreated roads. Neither is a legal requirement in the UK. If you
              would rather have them fitted at home or work,{' '}
              <a href="/" className={link}>One Stop Mobile Tyres 24/7</a> can help across Greater
              Manchester.
            </p>
          </div>

          <H2>Winter tyres vs all-season tyres at a glance</H2>
          <Table head={['', 'Winter tyres', 'All-season tyres', 'Summer tyres']} rows={atAGlance} />

          <H2>Why temperature matters more than snow</H2>
          <p className="text-slate-600 leading-relaxed mb-6">
            Most UK winters bring cold, wet roads far more often than snow. Winter tyres use a
            softer rubber compound that stays flexible when it is cold, so they keep gripping when
            summer-type rubber starts to harden. A commonly cited guideline is that winter tyres
            start to make a difference once temperatures regularly fall below about 7°C.
          </p>

          <H2>Are winter tyres a legal requirement in the UK?</H2>
          <p className="text-slate-600 leading-relaxed mb-6">
            No. Unlike some European countries, the UK has no law that requires winter tyres.
            Whatever tyres you run must still be legal: at least 1.6mm of tread across the central
            three-quarters of the tread and around the whole circumference, correct pressure, and no
            damage.
          </p>

          <H2>What does the &quot;3PMSF&quot; symbol mean?</H2>
          <p className="text-slate-600 leading-relaxed mb-6">
            Look for a mountain with three peaks and a snowflake on the sidewall. It shows a tyre
            has passed a severe snow test. The letters &quot;M+S&quot; on their own are a weaker
            marking and do not guarantee the same snow performance. Genuine all-season tyres
            usually carry the snowflake symbol.
          </p>

          <H2>How much do they cost?</H2>
          <p className="text-slate-600 leading-relaxed mb-6">
            Winter and all-season tyres are usually priced similarly to premium summer tyres of the
            same size. The extra cost with winter tyres is the second set of wheels or the seasonal
            swap fee, plus somewhere to store the off-season set. All-season tyres avoid both, which
            is why they suit many drivers. If you are watching the budget, see our{' '}
            <a href="/mobile-tyre-fitting" className={link}>cheap mobile tyre fitting</a> page.
          </p>

          <H2>When should you fit them?</H2>
          <p className="text-slate-600 leading-relaxed mb-6">
            Fit winter tyres when daytime temperatures begin to stay low, usually from October or
            November, and swap back in spring. Do not wait for the first frost: fitters get busy in
            the first cold snap. Cold snaps also drain batteries, so if your{' '}
            <a href="/jump-start" className={link}>car won&apos;t start in cold weather</a>, we can
            help with that too.
          </p>

          <H2>Can a mobile fitter swap them at home?</H2>
          <p className="text-slate-600 leading-relaxed mb-6">
            Yes. A mobile fitter can swap a set of wheels, or change tyres on your drive or at work,
            so you do not need to lose half a day at a garage. At One Stop Mobile Tyres 24/7, our{' '}
            <a href="/home-tyre-fitting" className={link}>home tyre fitting</a> and{' '}
            <a href="/mobile-tyre-fitting" className={link}>mobile tyre fitting</a> service covers
            Greater Manchester. Call{' '}
            <a href="tel:+441613995851" className={link}>0161 399 5851</a> and tell us your car,
            tyre size and whether you want a swap or new tyres.
          </p>

          <H2>How winter tyres actually work</H2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Winter tyres differ from summer tyres in three ways.
          </p>
          <CheckList
            items={howTheyWork.map(([title, body]) => (
              <>
                <strong>{title}</strong> {body}
              </>
            ))}
          />
          <p className="text-slate-600 leading-relaxed mb-6">
            All-season tyres sit in the middle. Their compound is a compromise that works across a
            wider temperature range, so they cope far better than summer tyres in winter, but they
            do not match a dedicated winter tyre in deep snow or on ice.
          </p>

          <H2>Which tyre suits which driver?</H2>
          <Table head={['Your driving', 'Better choice', 'Why']} rows={whichDriver} />

          <H2>Common winter tyre mistakes</H2>
          <CheckList
            items={mistakes.map(([title, body]) => (
              <>
                <strong>{title}</strong> {body}
              </>
            ))}
          />

          <H2>Winter tyre checklist</H2>
          <CheckList items={checklist} />

          {/* CTA */}
          <div className="bg-[#0f172a] rounded-2xl p-6 sm:p-8 my-10">
            <h3 className="text-white font-bold text-lg sm:text-xl mb-2" style={{ fontFamily: 'var(--font-work-sans)' }}>
              Want your winter or all-season tyres fitted at home?
            </h3>
            <p className="text-slate-400 mb-5 leading-relaxed">
              Tell us your car and tyre size and we&apos;ll quote for a seasonal swap or new tyres,
              fitted on your drive or at work across Greater Manchester.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-3">
              <a
                href="tel:+447759708646"
                className="bg-[#FF4444] text-[#121212] font-black px-6 py-3.5 rounded-xl flex items-center justify-center gap-2.5 hover:bg-red-700 hover:text-white transition-all text-base"
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
