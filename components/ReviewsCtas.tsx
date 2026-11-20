import { GOOGLE_REVIEWS_URL, PHONE_TEL } from '@/lib/constants'

/** Buttons under every Google reviews carousel: call, book (jumps to the quote form) and the Google review page. */
export default function ReviewsCtas() {
  return (
    <div className="mt-8 flex flex-col items-center gap-4">
      <div className="w-full sm:w-auto flex flex-col sm:flex-row gap-3 sm:gap-4">
        <a
          href={`tel:${PHONE_TEL}`}
          className="cta-btn cta-call bg-[#FF4444] hover:bg-red-700 text-white font-black min-h-14 px-6 sm:px-8 py-3 rounded-2xl flex items-center justify-center gap-2.5 text-center text-[15px] sm:text-base tracking-wide"
          style={{ fontFamily: 'var(--font-work-sans)' }}
        >
          <span aria-hidden="true" data-nosnippet className="cta-ring material-symbols-outlined text-[22px] leading-none shrink-0" style={{ fontVariationSettings: "'FILL' 1" }}>
            call
          </span>
          CALL NOW FOR MOBILE TYRE FITTING
        </a>
        <a
          href="#quote"
          className="cta-btn bg-[#0f172a] hover:bg-[#1e293b] text-white font-black min-h-14 px-6 sm:px-8 py-3 rounded-2xl flex items-center justify-center gap-2.5 text-[15px] sm:text-base tracking-wide"
          style={{ fontFamily: 'var(--font-work-sans)' }}
        >
          <span aria-hidden="true" data-nosnippet className="material-symbols-outlined text-[22px] leading-none shrink-0" style={{ fontVariationSettings: "'FILL' 1" }}>
            calendar_month
          </span>
          BOOK NOW
        </a>
      </div>
      <a
        href={GOOGLE_REVIEWS_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 text-[#b70011] font-bold text-sm hover:underline"
      >
        View all Google reviews
        <span aria-hidden="true" data-nosnippet className="material-symbols-outlined text-[16px]">open_in_new</span>
      </a>
    </div>
  )
}
