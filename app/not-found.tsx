import { buildMetadata } from '@/lib/seo'

export const metadata = buildMetadata({
  title: 'Page Not Found | One Stop Mobile Tyres 24/7',
  description: 'Sorry, we could not find that page. Find our mobile tyre fitting services or check our Greater Manchester coverage area.',
  path: '/404',
})

export default function NotFound() {
  return (
    <section className="min-h-[60vh] flex items-center justify-center px-4 sm:px-6 py-20 sm:py-28 bg-[#fcf9f8]">
      <div className="max-w-xl mx-auto text-center">
        <span className="text-[#b70011] font-black text-6xl sm:text-7xl block mb-4" style={{ fontFamily: 'var(--font-work-sans)' }}>
          404
        </span>
        <h1
          className="text-2xl sm:text-3xl font-bold text-[#0f172a] mb-4"
          style={{ fontFamily: 'var(--font-work-sans)', letterSpacing: '-0.01em' }}
        >
          Page Not Found
        </h1>
        <p className="text-slate-600 text-base leading-relaxed mb-8">
          Sorry, we couldn&apos;t find the page you were looking for. It may have moved, or the
          link may be out of date. Try one of these instead:
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
          <a
            href="/services"
            className="bg-[#0f172a] hover:bg-[#1c2a45] text-white font-bold px-6 py-3.5 rounded-xl transition-colors text-base"
            style={{ fontFamily: 'var(--font-work-sans)' }}
          >
            View Our Services
          </a>
          <a
            href="/service-area"
            className="border-2 border-[#0f172a] text-[#0f172a] hover:bg-[#0f172a] hover:text-white font-bold px-6 py-3.5 rounded-xl transition-colors text-base"
            style={{ fontFamily: 'var(--font-work-sans)' }}
          >
            Check Our Coverage Area
          </a>
        </div>
        <a
          href="tel:07759708646"
          className="inline-flex items-center gap-2.5 bg-[#FF4444] hover:bg-red-700 text-[#121212] hover:text-white font-black px-8 py-4 rounded-xl shadow-lg transition-all text-lg"
          style={{ fontFamily: 'var(--font-work-sans)' }}
        >
          <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>call</span>
          Emergency? Call 07759 708 646
        </a>
      </div>
    </section>
  )
}
