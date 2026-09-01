/* ─── City-specific FAQ section ────────────────────────────── */

import { breadcrumbSchema, faqSchema, SITE_URL } from '@/lib/schema'
import JsonLd from '@/components/JsonLd'

export interface FaqEntry {
  q: string
  a: string
}

function FaqItem({ q, a }: FaqEntry) {
  return (
    <details className="group bg-white p-4 sm:p-6 rounded-xl border border-slate-200 shadow-sm open:shadow-md transition-all">
      <summary className="list-none flex justify-between items-center cursor-pointer font-bold text-base sm:text-lg text-[#0f172a] gap-3">
        {q}
        <span className="material-symbols-outlined group-open:rotate-180 transition-transform text-[#b70011] flex-shrink-0 text-xl sm:text-2xl">
          expand_more
        </span>
      </summary>
      <p className="mt-3 sm:mt-4 text-[#5c403c] leading-relaxed text-base">{a}</p>
    </details>
  )
}

interface CityFaqProps {
  city: string
  faqs: FaqEntry[]
  /** Canonical URL of the page — used to generate BreadcrumbList schema */
  canonical?: string
  /** Human-readable breadcrumb label; defaults to "Mobile Tyre Fitting {city}" */
  breadcrumbName?: string
}

export default function CityFaq({ city, faqs, canonical, breadcrumbName }: CityFaqProps) {
  const _faqSchema = faqSchema(faqs)

  const _breadcrumbSchema = canonical
    ? breadcrumbSchema([
        { name: 'Home', item: SITE_URL },
        { name: 'Service Area', item: `${SITE_URL}/service-area` },
        { name: breadcrumbName ?? `Mobile Tyre Fitting ${city}`, item: canonical },
      ])
    : null

  return (
    <>
      <JsonLd data={_faqSchema} />
      {_breadcrumbSchema && <JsonLd data={_breadcrumbSchema} />}
      <section className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 bg-slate-50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8 sm:mb-10 lg:mb-16">
            <span className="text-[#b70011] font-bold uppercase tracking-widest text-xs sm:text-sm mb-2 block">
              Common Questions
            </span>
            <h2
              className="text-xl sm:text-2xl lg:text-[32px] font-bold text-[#0f172a] leading-tight"
              style={{ fontFamily: 'var(--font-work-sans)', letterSpacing: '-0.01em' }}
            >
              Frequently Asked Questions — {city}
            </h2>
          </div>
          <div className="space-y-3 sm:space-y-4">
            {faqs.map((faq) => (
              <FaqItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
