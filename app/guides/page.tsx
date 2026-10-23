import JsonLd from '@/components/JsonLd'
import { breadcrumbSchema, SITE_URL } from '@/lib/schema'
import { getGuides } from '@/lib/guides'

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

const guides = getGuides()

export default function GuidesIndexPage() {
  return (
    <div className="text-[#1c1b1b]" style={{ fontFamily: 'var(--font-inter)' }}>
      <JsonLd data={_breadcrumbSchema} />

      <section className="bg-[#0f172a] py-14 sm:py-20 px-5 sm:px-8 text-left">
        <div className="max-w-7xl mx-auto">
        <span className="inline-flex items-center gap-2 bg-red-600/20 text-red-400 font-bold px-3.5 py-1.5 rounded-full mb-4 text-[11px] uppercase tracking-widest border border-red-600/30">
          Tyre Guides &amp; Advice
        </span>
        <h1
          className="text-3xl sm:text-4xl lg:text-5xl text-white font-black mb-4 leading-[1.1]"
          style={{ fontFamily: 'var(--font-work-sans)', letterSpacing: '-0.02em' }}
        >
          Tyre Guides &amp; Advice
        </h1>
        <p className="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed">
          Straightforward, expert advice to help you make the right call about your tyres —
          written by the technicians who fit them.
        </p>
        </div>
      </section>

      <section className="py-12 sm:py-16 px-5 sm:px-8 bg-white">
        <div className="max-w-3xl mx-auto space-y-4">
          {guides.map((g) => (
            <a
              key={g.href}
              href={g.href}
              className="group flex flex-col sm:flex-row gap-4 sm:gap-6 bg-slate-50 border border-slate-100 rounded-2xl p-5 sm:p-6 hover:border-[#b70011]/30 hover:shadow-md transition-all"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={g.image}
                alt={g.imageAlt}
                className="w-full sm:w-56 aspect-[3/2] object-cover rounded-xl flex-shrink-0 self-start"
                width={600}
                height={400}
                loading="lazy"
                decoding="async"
              />
              <div className="flex flex-col">
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
                <span aria-hidden="true" data-nosnippet className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </span>
              </div>
            </a>
          ))}
        </div>
      </section>
    </div>
  )
}
