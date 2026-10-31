import { getGuides } from '@/lib/guides'

export default function LatestGuides({ count = 3 }: { count?: number }) {
  const guides = getGuides().slice(0, count)

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-10 sm:mb-16">
          <span className="text-[#b70011] font-bold uppercase tracking-widest text-sm mb-2 block">
            Blog &amp; Guides
          </span>
          <h2
            className="text-2xl sm:text-[32px] font-bold text-slate-900 mb-3 leading-tight"
            style={{ fontFamily: 'var(--font-work-sans)', letterSpacing: '-0.01em' }}
          >
            Latest Tyre Advice From Our Blog
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-base">
            Practical tips on tyre safety, winter driving and what to do when something goes wrong,
            written by the technicians who fit your tyres.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {guides.map((g) => (
            <a
              key={g.href}
              href={g.href}
              className="group flex flex-col bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all overflow-hidden border border-slate-100 border-b-4 border-b-[#b70011]"
            >
              <div className="relative aspect-[3/2] overflow-hidden bg-slate-100">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={g.image}
                  alt={g.imageAlt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  width={600}
                  height={400}
                  loading="lazy"
                  decoding="async"
                />
                <span className="absolute top-3 left-3 text-xs font-bold text-white bg-[#b70011] px-3 py-1 rounded-full">
                  {g.category}
                </span>
              </div>
              <div className="p-5 sm:p-6 flex flex-col flex-1">
                <span className="text-xs font-semibold text-slate-400 mb-2">
                  {g.published} · {g.readTime}
                </span>
                <h3
                  className="text-base sm:text-lg font-semibold mb-2 text-[#0f172a] group-hover:text-[#b70011] transition-colors"
                  style={{ fontFamily: 'var(--font-work-sans)' }}
                >
                  {g.title}
                </h3>
                <p className="text-slate-600 text-base leading-relaxed mb-4">{g.desc}</p>
                <span className="mt-auto inline-flex items-center gap-1.5 text-[#b70011] font-bold text-sm">
                  Read more
                  <span aria-hidden="true" data-nosnippet className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* View all */}
        <div className="mt-10 sm:mt-12 text-center">
          <a
            href="/guides"
            className="cta-btn cta-pulse inline-flex items-center justify-center gap-2 bg-[#0f172a] hover:bg-[#b70011] text-white font-bold px-8 py-4 rounded-xl transition-colors text-base w-full sm:w-auto"
            style={{ fontFamily: 'var(--font-work-sans)' }}
          >
            View All Blogs
            <span aria-hidden="true" data-nosnippet className="material-symbols-outlined text-xl">arrow_forward</span>
          </a>
        </div>
      </div>
    </section>
  )
}
