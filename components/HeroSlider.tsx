'use client'

import HeroCtaButtons from '@/components/HeroCtaButtons'

const HERO = {
  image: '/images/greater-manchester-mobile-tyre-service-area-map.jpeg',
  badge: '24/7 Emergency Mobile Tyre Service',
  heading: '24/7 Mobile Tyre Service & Repair Near You',
  body: 'Our 24/7 mobile tyre service offers tyre repair, tyre replacement and emergency tyre fitting at your home, workplace or roadside.',
  listLabel: 'Benefits',
  items: [
    '24/7 emergency tyre service',
    'Fast mobile tyre fitting',
    'Tyre repair and replacement',
    'Home, work & roadside service',
  ],
}

export default function HeroSlider() {
  return (
    <section className="relative overflow-hidden">
      <style>{`
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

        /* Badge: fade in, then the shared green glow (keyframes in globals.css) */
        .hero-badge-glow { animation: fadeUp 0.5s 0.15s both, badgeGlow 2s 0.7s ease-in-out infinite, badgePulse 2s 0.7s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) {
          .hero-badge-glow { animation: fadeUp 0.5s 0.15s both; }
        }

        /* Ken Burns on background */
        .kb { animation: kenBurns 6s ease-in-out forwards; }
        @keyframes kenBurns {
          from { transform:scale(1.0); }
          to   { transform:scale(1.06); }
        }
      `}</style>

      {/* ── BACKGROUND ── */}
      <div className="absolute inset-0">
        <SlideBg image={HERO.image} priority />
      </div>

      {/* ── CONTENT ── */}
      <div
        className="relative z-10 flex flex-col justify-center px-5 sm:px-10 lg:px-16 xl:px-24 pt-10 pb-10 sm:pt-14 sm:pb-14 lg:pt-16 lg:pb-16 lg:min-h-[clamp(600px,90svh,820px)] [text-shadow:0_1px_3px_rgba(0,0,0,0.9),0_2px_12px_rgba(0,0,0,0.7)] lg:[text-shadow:none]"
      >
        <div className="w-full max-w-2xl">

            {/* Badge */}
            <span className="hero-badge-glow inline-flex items-center gap-2 bg-[#b70011] text-white text-[11px] sm:text-sm font-bold uppercase tracking-wider sm:tracking-widest px-3.5 sm:px-4 py-2 rounded-full mb-4 sm:mb-5 ring-1 ring-[#25D366]/60 [text-shadow:none]">
              <span className="relative flex w-2 h-2 shrink-0">
                <span className="badge-dot-ping absolute inset-0 rounded-full bg-[#25D366]" />
                <span className="relative w-2 h-2 rounded-full bg-[#25D366]" />
              </span>
              {HERO.badge}
            </span>

            {/* Heading */}
            <h1
              className="hero-h1 text-4xl sm:text-5xl lg:text-6xl xl:text-[68px] text-white font-black leading-[1.05] mb-4 sm:mb-5"
              style={{ fontFamily: 'var(--font-work-sans)', letterSpacing: '-0.03em' }}
            >
              {HERO.heading.split('\n').map((line, i) => (
                <span key={i} className="block">{line}</span>
              ))}
            </h1>

            {/* Body */}
            <p className="hero-body text-white/95 lg:text-white/75 text-base lg:text-lg leading-relaxed mb-5 sm:mb-6 max-w-xl">
              {HERO.body}
            </p>

            {/* Checklist — hidden for now
            <div className="hero-list mb-6">
              <p className="text-[#FF4444] text-xs font-bold uppercase tracking-widest mb-3">{HERO.listLabel}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2">
                {HERO.items.map((item) => (
                  <div key={item} className="flex items-center gap-2.5 text-white lg:text-white/90">
                    <span aria-hidden="true" data-nosnippet
                      className="material-symbols-outlined text-green-400 shrink-0"
                      style={{ fontSize: '18px', fontVariationSettings: "'FILL' 1" }}
                    >check_circle</span>
                    <span className="text-sm font-semibold">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            */}

            {/* Google rating */}
            <a
              href="https://maps.app.goo.gl/tqGMogzsNNn8EXjH8"
              target="_blank" rel="noopener noreferrer"
              className="hero-badge-google inline-flex items-center gap-2.5 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-full px-4 py-2 mb-5 sm:mb-6 hover:bg-white/20 transition-colors"
            >
              <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              <div className="flex text-yellow-400 gap-px">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span aria-hidden="true" data-nosnippet key={i} className="material-symbols-outlined text-[13px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                ))}
              </div>
              <span className="font-bold text-sm">5.0</span>
              <span className="text-white/80 lg:text-white/50 text-xs">Rated By Local Drivers</span>
            </a>

            {/* CTAs */}
            <HeroCtaButtons className="hero-ctas" />

          </div>
        </div>

    </section>
  )
}

function SlideBg({ image, priority }: { image: string; priority?: boolean }) {
  return (
    <div className="absolute inset-0 bg-[#0f172a] overflow-hidden">
      {/* Blurred copy fills the background so the main photo isn't zoomed */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className="hidden lg:block absolute inset-0 w-full h-full object-cover blur-xl scale-110"
        src={image}
        alt=""
        aria-hidden="true"
        decoding="async"
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className="kb absolute inset-0 w-full h-full object-cover object-[60%_60%] lg:left-auto lg:right-0 lg:top-0 lg:h-full lg:w-auto lg:aspect-[4/3] lg:[mask-image:linear-gradient(to_right,transparent,black_25%)]"
        src={image}
        alt=""
        aria-hidden="true"
        width={1600}
        height={1067}
        decoding="async"
        {...(priority ? { fetchPriority: 'high' as const } : { loading: 'lazy' as const })}
      />
      {/* Mobile: strong navy tint so the map stays subtle and the text stays readable */}
      <div className="absolute inset-0 bg-[#002D62]/85 lg:hidden" />
      {/* Desktop gradient: strong left for text, fades right */}
      <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-[#0f172a] via-[#0f172a]/85 to-[#0f172a]/35" />
      {/* Bottom fade for controls readability */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0f172a]/70 to-transparent" />
    </div>
  )
}
