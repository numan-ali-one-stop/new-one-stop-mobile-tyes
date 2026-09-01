import JsonLd from '@/components/JsonLd'
import { breadcrumbSchema, SITE_URL } from '@/lib/schema'

export const metadata = {
  title: 'Tyre Guides & Advice | One Stop Mobile Tyres 24/7',
  description:
    'Practical tyre advice from One Stop Mobile Tyres 24/7 — safety tips explained in plain English.',
  alternates: { canonical: 'https://onestoptyres247.co.uk/guides' },
}

const _breadcrumbSchema = breadcrumbSchema([
  { name: 'Home', item: SITE_URL },
  { name: 'Guides', item: `${SITE_URL}/guides` },
])

const guides = [
  {
    title: 'Tyre Safety Tips for Greater Manchester Drivers: August Weather Guide',
    desc: "Changeable August weather is on the way — how to check your tyres before travelling and avoid a breakdown on wet or dry roads.",
    href: '/guides/tyre-safety-tips-greater-manchester-august-weather-guide',
    readTime: '5 min read',
    published: '5 August 2026',
  },
  {
    title: 'Met Office Forecast: Mixed August Weather Means Greater Manchester Drivers Should Check Their Tyres Now',
    desc: 'Sunshine, showers and rising temperatures all in the same month — why changeable weather makes this the right time for a tyre check.',
    href: '/guides/met-office-august-weather-check-your-tyres',
    readTime: '6 min read',
    published: '4 August 2026',
  },
  {
    title: 'Run-Flat vs Normal Tyres: What Manchester Drivers Need to Know Before Replacing Theirs',
    desc: 'The real difference between run-flat and normal tyres, whether you can mix them, and what it costs to switch — explained without the jargon.',
    href: '/guides/run-flat-vs-normal-tyres-manchester',
    readTime: '7 min read',
    published: '23 July 2026',
  },
  {
    title: 'What to Do If You Get a Flat Tyre on the M60 (or Any Manchester Motorway)',
    desc: 'A step-by-step safety guide for motorway punctures and blowouts — where to stop, who to call, and how to get moving again without a tow truck.',
    href: '/guides/what-to-do-flat-tyre-m60-manchester-motorway',
    readTime: '9 min read',
    published: '19 July 2026',
  },
  {
    title: 'How to Tell If Your Tyre Can Be Repaired or Needs Replacing',
    desc: 'A practical, safety-first checklist covering puncture location, size, tread depth and the warning signs that mean a tyre must be replaced.',
    href: '/guides/how-to-tell-if-your-tyre-can-be-repaired-or-needs-replacing',
    readTime: '8 min read',
    published: '19 July 2026',
  },
]

export default function GuidesIndexPage() {
  return (
    <div className="text-[#1c1b1b]" style={{ fontFamily: 'var(--font-inter)' }}>
      <JsonLd data={_breadcrumbSchema} />

      <section className="bg-[#0f172a] py-14 sm:py-20 px-5 sm:px-8 text-center">
        <span className="inline-flex items-center gap-2 bg-red-600/20 text-red-400 font-bold px-3.5 py-1.5 rounded-full mb-4 text-[11px] uppercase tracking-widest border border-red-600/30">
          Tyre Guides &amp; Advice
        </span>
        <h1
          className="text-3xl sm:text-4xl lg:text-5xl text-white font-black mb-4 leading-[1.1]"
          style={{ fontFamily: 'var(--font-work-sans)', letterSpacing: '-0.02em' }}
        >
          Tyre Guides &amp; Advice
        </h1>
        <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          Straightforward, expert advice to help you make the right call about your tyres —
          written by the technicians who fit them.
        </p>
      </section>

      <section className="py-12 sm:py-16 px-5 sm:px-8 bg-white">
        <div className="max-w-3xl mx-auto space-y-4">
          {guides.map((g) => (
            <a
              key={g.href}
              href={g.href}
              className="group flex flex-col bg-slate-50 border border-slate-100 rounded-2xl p-5 sm:p-6 hover:border-[#b70011]/30 hover:shadow-md transition-all"
            >
              <span className="text-xs font-semibold text-slate-400 mb-2">
                Published {g.published} · {g.readTime}
              </span>
              <h2
                className="text-lg sm:text-xl font-bold text-[#0f172a] mb-2 group-hover:text-[#b70011] transition-colors"
                style={{ fontFamily: 'var(--font-work-sans)' }}
              >
                {g.title}
              </h2>
              <p className="text-slate-600 leading-relaxed mb-3">{g.desc}</p>
              <span className="inline-flex items-center gap-1.5 text-[#b70011] font-bold text-sm">
                Read guide
                <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </span>
            </a>
          ))}
        </div>
      </section>
    </div>
  )
}
