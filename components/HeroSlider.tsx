'use client'

import { useState, useEffect, useRef, useCallback } from 'react'

const SLIDES = [
  {
    image: '/images/mobile-tyre-fitting-service.webp',
    badge: 'Mobile Tyre Fitting & Emergency Tyre Repair',
    heading: 'Mobile Tyre Fitting\nNear Me – 24/7 Service',
    body: 'Need a mobile tyre fitter fast? Our fully equipped mobile tyre fitting vans provide emergency tyre repair, mobile tyre replacement and same day tyre fitting at your home, workplace or roadside location.',
    listLabel: 'Why Drivers Choose Us',
    items: [
      'Mobile tyre fitting at your location',
      'Emergency tyre repair 24/7',
      'Same day tyre fitting available',
      'Home, work & roadside assistance',
      'Competitive prices & fast response',
    ],
  },
  {
    image: '/images/professional-mobile-tyre-fitting.webp',
    badge: 'Emergency Mobile Tyre Service',
    heading: 'Flat Tyre?\nWe Come To You',
    body: 'Whether you need mobile tyre repair, emergency tyre replacement, or roadside tyre assistance, our experienced technicians can get you safely back on the road — no waiting for recovery trucks.',
    listLabel: 'Available For',
    items: [
      'Mobile tyre fitting Manchester',
      'Mobile tyre fitting Stockport',
      'Mobile tyre fitting Bolton',
      'Mobile tyre fitting Trafford',
      'Mobile tyre fitting Rochdale',
    ],
  },
  {
    image: '/images/home-tyre-fitting.webp',
    badge: 'Same Day Mobile Tyre Replacement',
    heading: 'Professional Mobile\nTyre Fitters Near You',
    body: 'Our mobile tyre fitting service covers emergency call-outs, puncture repairs, tyre replacements and tyre recovery assistance. We bring the tyre shop directly to your location.',
    listLabel: 'Benefits',
    items: [
      'Fast mobile tyre replacement',
      'Experienced mobile tyre fitters',
      'Quality tyres available',
      'Roadside emergency assistance',
      'Available day & night',
    ],
  },
]

const WA_SVG = (
  <svg className="w-5 h-5 fill-current shrink-0" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
)

export default function HeroSlider() {
  const [current, setCurrent] = useState(0)
  const [prev, setPrev] = useState<number | null>(null)
  const [direction, setDirection] = useState<'next' | 'prev'>('next')
  const [transitioning, setTransitioning] = useState(false)
  const [contentKey, setContentKey] = useState(0)
  const paused = useRef(false)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const touchStartX = useRef<number | null>(null)

  const navigate = useCallback((idx: number, dir: 'next' | 'prev') => {
    if (transitioning) return
    setDirection(dir)
    setPrev(current)
    setTransitioning(true)
    setContentKey(k => k + 1)
    setTimeout(() => {
      setCurrent(idx)
      setPrev(null)
      setTransitioning(false)
    }, 600)
  }, [current, transitioning])

  const next = useCallback(() => navigate((current + 1) % SLIDES.length, 'next'), [current, navigate])
  const goTo = useCallback((i: number) => {
    if (i === current) return
    navigate(i, i > current ? 'next' : 'prev')
  }, [current, navigate])

  // Auto-play
  useEffect(() => {
    const tick = () => { if (!paused.current) next() }
    timerRef.current = setInterval(tick, 5500)
    return () => { if (timerRef.current) clearInterval(timerRef.current) }
  }, [next])

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return
    const diff = touchStartX.current - e.changedTouches[0].clientX
    if (Math.abs(diff) > 40) {
      const n = SLIDES.length
      diff > 0
        ? navigate((current + 1) % n, 'next')
        : navigate((current - 1 + n) % n, 'prev')
    }
    touchStartX.current = null
  }

  const slide = SLIDES[current]
  const n = SLIDES.length

  const slideInClass = direction === 'next' ? 'slide-in-right' : 'slide-in-left'
  const slideOutClass = direction === 'next' ? 'slide-out-left' : 'slide-out-right'

  return (
    <section
      className="relative overflow-hidden"
      onMouseEnter={() => { paused.current = true }}
      onMouseLeave={() => { paused.current = false }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <style>{`
        /* Background slide panels — absolutely positioned, animate */
        .slide-panel { position:absolute; inset:0; will-change:transform; }
        .slide-in-right  { animation: inRight  0.6s cubic-bezier(0.4,0,0.2,1) forwards; }
        .slide-out-left  { animation: outLeft  0.6s cubic-bezier(0.4,0,0.2,1) forwards; }
        .slide-in-left   { animation: inLeft   0.6s cubic-bezier(0.4,0,0.2,1) forwards; }
        .slide-out-right { animation: outRight 0.6s cubic-bezier(0.4,0,0.2,1) forwards; }
        @keyframes inRight  { from{transform:translateX(100%)} to{transform:translateX(0)} }
        @keyframes outLeft  { from{transform:translateX(0)}    to{transform:translateX(-100%)} }
        @keyframes inLeft   { from{transform:translateX(-100%)} to{transform:translateX(0)} }
        @keyframes outRight { from{transform:translateX(0)}    to{transform:translateX(100%)} }

        /* Content stagger */
        .hero-badge  { animation: fadeUp 0.5s 0.15s both; }
        .hero-h1     { animation: fadeUp 0.55s 0.25s both; }
        .hero-body   { animation: fadeUp 0.55s 0.35s both; }
        .hero-list   { animation: fadeUp 0.55s 0.45s both; }
        .hero-badge-google { animation: fadeUp 0.5s 0.52s both; }
        .hero-ctas   { animation: fadeUp 0.55s 0.6s both; }
        @keyframes fadeUp {
          from { opacity:0; transform:translateY(22px); }
          to   { opacity:1; transform:translateY(0); }
        }

        /* Ken Burns on background */
        .kb { animation: kenBurns 6s ease-in-out forwards; }
        @keyframes kenBurns {
          from { transform:scale(1.0); }
          to   { transform:scale(1.06); }
        }

        /* Progress bar */
        .progress-bar { animation: progress 5.5s linear forwards; }
        @keyframes progress { from{width:0} to{width:100%} }
      `}</style>

      {/* ── BACKGROUND PANELS (absolutely positioned, slide in/out) ── */}
      {prev !== null && transitioning && (
        <div className={`slide-panel ${slideOutClass}`} key={`out-${prev}`}>
          <SlideBg image={SLIDES[prev].image} />
        </div>
      )}
      <div
        className={`slide-panel ${transitioning ? slideInClass : ''}`}
        key={`bg-${current}`}
      >
        <SlideBg image={slide.image} priority={current === 0} />
      </div>

      {/* ── CONTENT (normal document flow — section grows to fit this) ── */}
      <div
        className="relative z-10 flex flex-col justify-center px-5 sm:px-10 lg:px-16 xl:px-24 pt-16 pb-24"
        style={{ minHeight: 'clamp(600px, 90svh, 820px)' }}
      >
        <div className="w-full max-w-2xl" key={contentKey}>

            {/* Badge */}
            <span className="hero-badge inline-flex items-center gap-2 bg-[#b70011] text-white text-xs sm:text-sm font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-white/80 animate-pulse" />
              {slide.badge}
            </span>

            {/* Heading */}
            <h1
              className="hero-h1 text-4xl sm:text-5xl lg:text-6xl xl:text-[68px] text-white font-black leading-[1.05] mb-5"
              style={{ fontFamily: 'var(--font-work-sans)', letterSpacing: '-0.03em' }}
            >
              {slide.heading.split('\n').map((line, i) => (
                <span key={i} className="block">{line}</span>
              ))}
            </h1>

            {/* Body */}
            <p className="hero-body text-white/75 text-base lg:text-lg leading-relaxed mb-6 max-w-xl">
              {slide.body}
            </p>

            {/* Checklist */}
            <div className="hero-list mb-6">
              <p className="text-[#FF4444] text-xs font-bold uppercase tracking-widest mb-3">{slide.listLabel}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2">
                {slide.items.map((item) => (
                  <div key={item} className="flex items-center gap-2.5 text-white/90">
                    <span
                      className="material-symbols-outlined text-green-400 shrink-0"
                      style={{ fontSize: '18px', fontVariationSettings: "'FILL' 1" }}
                    >check_circle</span>
                    <span className="text-sm font-semibold">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Google rating */}
            <a
              href="https://maps.app.goo.gl/tqGMogzsNNn8EXjH8"
              target="_blank" rel="noopener noreferrer"
              className="hero-badge-google inline-flex items-center gap-2.5 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-full px-4 py-2 mb-6 hover:bg-white/20 transition-colors"
            >
              <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              <div className="flex text-yellow-400 gap-px">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className="material-symbols-outlined text-[13px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                ))}
              </div>
              <span className="font-bold text-sm">5.0</span>
              <span className="text-white/50 text-xs">Rated By Drivers Across Greater Manchester</span>
            </a>

            {/* CTAs */}
            <div className="hero-ctas flex flex-col sm:flex-row gap-3">
              <a
                href="tel:07759708646"
                className="bg-[#FF4444] hover:bg-red-700 text-white font-black px-7 py-4 rounded-xl flex items-center justify-center gap-2.5 transition-all text-base shadow-2xl shadow-red-900/40 hover:scale-105"
                style={{ fontFamily: 'var(--font-work-sans)' }}
              >
                <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>call</span>
                CALL NOW
              </a>
              <a
                href="https://wa.me/447759708646"
                className="bg-[#25D366] hover:bg-[#1ebe5d] text-white font-black px-7 py-4 rounded-xl flex items-center justify-center gap-2.5 transition-all text-base shadow-lg shadow-green-900/30 hover:scale-105"
                style={{ fontFamily: 'var(--font-work-sans)' }}
              >
                {WA_SVG}
                WHATSAPP US
              </a>
            </div>

          </div>
        </div>

      {/* ── BOTTOM BAR: counter + dots + progress ── */}
      <div className="absolute bottom-0 left-0 right-0 z-20 px-5 sm:px-10 lg:px-16 xl:px-24 pb-4 sm:pb-6 flex items-end justify-between gap-4">

        {/* Slide counter */}
        <div className="flex items-center gap-3">
          <span className="text-white font-black text-2xl tabular-nums" style={{ fontFamily: 'var(--font-work-sans)' }}>
            {String(current + 1).padStart(2, '0')}
          </span>
          <span className="text-white/30 text-sm font-bold">/ {String(n).padStart(2, '0')}</span>
        </div>

        {/* Dots */}
        <div className="flex items-center gap-2">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              className="relative overflow-hidden rounded-full transition-all duration-400"
              style={{
                width: i === current ? '36px' : '10px',
                height: '10px',
                backgroundColor: i === current ? 'rgba(255,255,255,0.3)' : 'rgba(255,255,255,0.25)',
              }}
            >
              {i === current && (
                <span key={contentKey} className="progress-bar absolute inset-y-0 left-0 bg-white rounded-full" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Full-width progress line at very bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white/10 z-20">
        <div key={contentKey} className="progress-bar h-full bg-[#FF4444]" />
      </div>

    </section>
  )
}

function SlideBg({ image, priority }: { image: string; priority?: boolean }) {
  return (
    <div className="absolute inset-0 bg-[#0f172a]">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className="kb w-full h-full object-cover object-center"
        src={image}
        alt=""
        aria-hidden="true"
        width={1600}
        height={1067}
        decoding="async"
        {...(priority ? { fetchPriority: 'high' as const } : { loading: 'lazy' as const })}
      />
      {/* Gradient: strong left for text, fades right */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a] via-[#0f172a]/80 to-[#0f172a]/30" />
      {/* Bottom fade for controls readability */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0f172a]/70 to-transparent" />
    </div>
  )
}
