import type { ReactNode } from 'react'

// Shared building blocks for blog / guide articles under app/guides.

export const linkClass = 'text-[#b70011] font-semibold hover:underline'

export function GuideHero({
  crumb,
  badge,
  title,
  published,
  readTime,
}: {
  crumb: string
  badge: string
  title: string
  published: string
  readTime: string
}) {
  return (
    <section className="bg-[#0f172a] py-12 sm:py-16 px-5 sm:px-8">
      <div className="max-w-3xl mx-auto">
        <nav aria-label="Breadcrumb" className="mb-4 text-sm text-slate-300">
          <a href="/" className="hover:text-white transition-colors">Home</a>
          <span className="mx-2">/</span>
          <a href="/guides" className="hover:text-white transition-colors">Guides</a>
          <span className="mx-2">/</span>
          <span className="text-white/70">{crumb}</span>
        </nav>
        <span className="inline-flex items-center gap-2 bg-red-600/20 text-red-400 font-bold px-3.5 py-1.5 rounded-full mb-4 text-[11px] uppercase tracking-widest border border-red-600/30">
          {badge}
        </span>
        <h1
          className="text-3xl sm:text-4xl lg:text-5xl text-white font-black mb-3 leading-[1.1]"
          style={{ fontFamily: 'var(--font-work-sans)', letterSpacing: '-0.02em' }}
        >
          {title}
        </h1>
        <p className="text-slate-400 text-sm mt-4">Published {published} · {readTime}</p>
      </div>
    </section>
  )
}

export function FeaturedImage({ src, alt, width, height }: { src: string; alt: string; width: number; height: number }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      className="w-full h-auto rounded-2xl shadow-sm mb-10"
      width={width}
      height={height}
      fetchPriority="high"
    />
  )
}

export function QuickAnswer({ children }: { children: ReactNode }) {
  return (
    <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 sm:p-6 mb-10">
      <h2
        className="text-lg sm:text-xl font-bold text-[#0f172a] mb-3"
        style={{ fontFamily: 'var(--font-work-sans)' }}
      >
        The Quick Answer
      </h2>
      <p className="text-slate-600 leading-relaxed">{children}</p>
    </div>
  )
}

export function H2({ children }: { children: ReactNode }) {
  return (
    <h2
      className="text-2xl sm:text-3xl font-bold text-[#0f172a] mt-10 mb-4"
      style={{ fontFamily: 'var(--font-work-sans)' }}
    >
      {children}
    </h2>
  )
}

export function P({ children, className = 'mb-6' }: { children: ReactNode; className?: string }) {
  return <p className={`text-slate-600 leading-relaxed ${className}`}>{children}</p>
}

export function Table({ head, rows }: { head: string[]; rows: string[][] }) {
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

export function CheckList({ items }: { items: ReactNode[] }) {
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

/** Checklist where each item starts with a bold lead-in, e.g. ['Weak battery.', 'Most last 3 to 5 years.']. */
export function BoldCheckList({ items }: { items: [string, ReactNode][] }) {
  return (
    <CheckList
      items={items.map(([title, body]) => (
        <>
          <strong>{title}</strong> {body}
        </>
      ))}
    />
  )
}

export function GuideCta({ title, text }: { title: string; text: string }) {
  return (
    <div className="bg-[#0f172a] rounded-2xl p-6 sm:p-8 my-10">
      <h3 className="text-white font-bold text-lg sm:text-xl mb-2" style={{ fontFamily: 'var(--font-work-sans)' }}>
        {title}
      </h3>
      <p className="text-slate-400 mb-5 leading-relaxed">{text}</p>
      <div className="flex flex-col sm:flex-row flex-wrap gap-3">
        <a
          href="tel:+447759708646"
          className="cta-btn cta-call bg-[#dc2626] text-white font-black px-6 py-3.5 rounded-xl flex items-center justify-center gap-2.5 hover:bg-red-700 hover:text-white transition-all text-base"
          style={{ fontFamily: 'var(--font-work-sans)' }}
        >
          <span aria-hidden="true" data-nosnippet className="cta-ring material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>call</span>
          07759 708 646
        </a>
        <a
          href="https://wa.me/447759708646"
          className="cta-btn cta-btn-wa bg-[#25D366] hover:bg-[#1ebe5d] text-white font-black px-6 py-3.5 rounded-xl flex items-center justify-center gap-2.5 transition-all text-base shadow-lg"
          style={{ fontFamily: 'var(--font-work-sans)' }}
        >
          <svg className="cta-bounce w-5 h-5 fill-current flex-shrink-0" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          WhatsApp Us
        </a>
      </div>
    </div>
  )
}

export function FaqSection({ faqs }: { faqs: { q: string; a: ReactNode }[] }) {
  return (
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
            <details key={faq.q} className="group bg-white p-4 sm:p-6 rounded-xl border border-slate-200 shadow-sm open:shadow-md transition-all">
              <summary className="list-none flex justify-between items-center cursor-pointer font-bold text-base sm:text-lg text-[#0f172a] gap-3">
                {faq.q}
                <span aria-hidden="true" data-nosnippet className="material-symbols-outlined group-open:rotate-180 transition-transform text-[#b70011] flex-shrink-0 text-xl sm:text-2xl">
                  expand_more
                </span>
              </summary>
              <p className="mt-3 sm:mt-4 text-slate-600 leading-relaxed text-base">{faq.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
