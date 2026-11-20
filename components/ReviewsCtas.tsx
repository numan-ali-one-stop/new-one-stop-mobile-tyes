import { GOOGLE_REVIEWS_URL, PHONE_TEL } from '@/lib/constants'

const BTN =
  'cta-btn inline-flex items-center justify-center gap-1.5 text-white font-bold text-sm h-10 px-5 rounded-full tracking-wide'
const ICON = 'material-symbols-outlined text-[18px] leading-none shrink-0'

/** Small buttons under every Google reviews carousel: call, book (jumps to the quote form) and the Google review page. */
export default function ReviewsCtas() {
  return (
    <div className="mt-8 flex flex-col items-center gap-4">
      <div className="flex items-center justify-center gap-3">
        <a href={`tel:${PHONE_TEL}`} className={`${BTN} cta-call bg-[#FF4444] hover:bg-red-700`} style={{ fontFamily: 'var(--font-work-sans)' }}>
          <span aria-hidden="true" data-nosnippet className={`cta-ring ${ICON}`} style={{ fontVariationSettings: "'FILL' 1" }}>
            call
          </span>
          Call Now
        </a>
        <a href="#quote" className={`${BTN} bg-[#0f172a] hover:bg-[#1e293b]`} style={{ fontFamily: 'var(--font-work-sans)' }}>
          <span aria-hidden="true" data-nosnippet className={ICON} style={{ fontVariationSettings: "'FILL' 1" }}>
            calendar_month
          </span>
          Book Now
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
