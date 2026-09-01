'use client'

import { useState } from 'react'

type Review = {
  initials: string
  name: string
  when: string
  review: string
}

const REVIEWS: Review[] = [
  {
    initials: 'LN',
    name: 'Lucy Norris',
    when: 'a week ago',
    review:
      'Called this evening needing an emergency replacement tyre, and Adam couldn’t have been more helpful. He quickly sourced a tyre for me, even though it’s not one that’s widely stocked and had everything sorted in no time. From the initial call to being back on the road, it took just over an hour.\n\nGreat service, thanks Adam.',
  },
  {
    initials: 'NR',
    name: 'Nathan Reid',
    when: '3 weeks ago',
    review:
      'Nomz was wonderful! Great experience, fast, friendly, and does exactly as you’d expect. Thanks for getting me back on the road!',
  },
  {
    initials: 'PM',
    name: 'paul madden',
    when: 'a month ago',
    review:
      'quick response when really needed and friendly staff when spoke to on phone and when fitter came to do tyre',
  },
  {
    initials: 'T',
    name: 'Tez',
    when: '2 months ago',
    review:
      'Excellent service amazing response and back as fast as we could expect at 3 am highly recommend',
  },
  {
    initials: 'AH',
    name: 'Arzu Hussain',
    when: '2 months ago',
    review:
      'What a superstar !!!! Came out to the rescue and got me back on road !!! Highly recommend . Great service',
  },
  {
    initials: 'KD',
    name: 'Kayleigh Davidson',
    when: '2 months ago',
    review:
      "Called out for an emergency fix as the car wasn't drivable. I was kept updated with an ETA and the service was swift when he did arrive. The fitter was polite and friendly. Would definitely use again.",
  },
  {
    initials: 'IM',
    name: 'Ibrahim Mahmood',
    when: '2 months ago',
    review: 'Came out within 20 mins , 4am . Absolute amazing service',
  },
]

function GoogleG({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      />
    </svg>
  )
}

/** Optional starting offset so different pages (e.g. per-city landing pages) don't render byte-identical review order. */
export default function ReviewsCarousel({ offset = 0 }: { offset?: number }) {
  // Pause is tracked in state so it works identically for mouse hover and
  // touch press-and-hold across all browsers (some Tailwind arbitrary variants
  // don't reliably toggle `animation-play-state` on every engine).
  const [paused, setPaused] = useState(false)

  const rotated = offset % REVIEWS.length === 0
    ? REVIEWS
    : [...REVIEWS.slice(offset % REVIEWS.length), ...REVIEWS.slice(0, offset % REVIEWS.length)]
  // Duplicate the list once. Combined with translateX(-50%) in the keyframes,
  // this produces a seamless infinite loop.
  const LOOP = [...rotated, ...rotated]

  return (
    <div
      className="relative overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
      onTouchStart={() => setPaused(true)}
      onTouchEnd={() => setPaused(false)}
      onTouchCancel={() => setPaused(false)}
    >
      {/* Edge fades */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-6 sm:w-10 z-10 bg-gradient-to-r from-slate-50 to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-6 sm:w-10 z-10 bg-gradient-to-l from-slate-50 to-transparent" />

      {/* Marquee track: animates by default, pauses on hover or touch hold. */}
      <div
        className="flex w-max gap-4 sm:gap-6 animate-marquee motion-reduce:[animation-play-state:paused]"
        style={{ animationPlayState: paused ? 'paused' : 'running' }}
      >
        {LOOP.map((r, i) => (
          <div
            key={`${r.name}-${i}`}
            aria-hidden={i >= REVIEWS.length ? true : undefined}
            className="shrink-0 w-[85vw] sm:w-[calc((100vw-3rem)/2)] lg:w-[calc((min(80rem,100vw)-2rem-4.5rem)/4)] max-w-[22rem] bg-white p-5 sm:p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col gap-4"
          >
            {/* Stars row */}
            <div className="flex items-center justify-between">
              <div className="flex text-yellow-400 gap-0.5">
                {Array.from({ length: 5 }).map((_, j) => (
                  <span
                    key={j}
                    className="material-symbols-outlined text-[16px]"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    star
                  </span>
                ))}
              </div>
              <GoogleG className="w-4 h-4 shrink-0 opacity-60" />
            </div>

            {/* Review text */}
            <p className="text-slate-600 text-base leading-relaxed flex-1 whitespace-pre-line line-clamp-6">
              &ldquo;{r.review}&rdquo;
            </p>

            {/* Author */}
            <div className="flex items-center gap-3 pt-3 border-t border-slate-100">
              <div className="w-9 h-9 bg-[#0f172a] rounded-full flex items-center justify-center text-xs font-bold text-white shrink-0">
                {r.initials}
              </div>
              <div>
                <p className="text-sm font-bold text-[#0f172a]">{r.name}</p>
                <p className="text-xs text-slate-400">{r.when}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
