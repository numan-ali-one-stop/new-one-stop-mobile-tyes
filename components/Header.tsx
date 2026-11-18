'use client'

import { useEffect, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'
import {
  EMAIL,
  ADS_LANDING_PATH,
  ADS_LANDING_PATHS,
  MOBILE_TYRE_REPLACEMENT_PATH,
  MOTORWAY_TYRE_REPLACEMENT_PATH,
  PHONE,
  PHONE_TEL,
  MAPS_URL,
} from '@/lib/constants'

// ─── Data ────────────────────────────────────────────────────────────────────

// Order set by the owner: the two main services first, then the Google Ads landing pages.
const serviceLinks = [
  {
    label: 'Mobile Tyre Fitting',
    href: '/mobile-tyre-fitting',
    icon: 'tire_repair',
    desc: 'Roadside or driveway — we come to you',
  },
  {
    label: 'Home Tyre Fitting',
    href: '/home-tyre-fitting',
    icon: 'home_repair_service',
    desc: 'Fitted while you work or relax at home',
  },
  {
    label: 'Mobile Tyre Repair',
    href: '/puncture-repair-Greater-manchester',
    icon: 'construction',
    desc: 'Puncture repair at your location, 24/7',
  },
  {
    label: 'Motorway Tyre Replacement',
    href: MOTORWAY_TYRE_REPLACEMENT_PATH,
    icon: 'add_road',
    desc: 'Blowout on the motorway? New tyre fitted safely',
  },
  {
    label: '24 Hour Emergency Tyres',
    href: ADS_LANDING_PATH,
    icon: 'car_crash',
    desc: 'Flat or blowout? Fitted day or night',
  },
  {
    label: 'Mobile Tyre Replacement',
    href: MOBILE_TYRE_REPLACEMENT_PATH,
    icon: 'build',
    desc: 'New tyres supplied and fitted where you are',
  },
  {
    label: 'Roadside Assistance',
    href: '/roadside-assistance',
    icon: 'support_agent',
    desc: '24/7 emergency roadside support wherever you are',
  },
  {
    label: 'Jump Start',
    href: '/jump-start',
    icon: 'bolt',
    desc: 'Dead battery? Back on the road in minutes',
  },
  {
    label: 'TPMS Reset',
    href: '/tpms-reset',
    icon: 'speed',
    desc: 'Sensor diagnostics & reset for all vehicles',
  },
  {
    label: 'Locking Nut Removal',
    href: '/locking-nut-removal',
    icon: 'lock_open',
    desc: 'Damage-free removal with specialist tools',
  },
]

/** Secondary pages listed under the services in "More Services". */
const moreLinks = [
  { label: 'All Services', href: '/services', icon: 'grid_view' },
  { label: 'Service Areas', href: '/service-area', icon: 'map' },
  { label: 'Guides', href: '/guides', icon: 'menu_book' },
]

/** Top-level links either side of the "More Services" menu. */
const mainLinks = [
  { label: 'Mobile Tyre Fitting', href: '/mobile-tyre-fitting', icon: 'tire_repair' },
  { label: 'Home Tyre Fitting', href: '/home-tyre-fitting', icon: 'home_repair_service' },
]
const endLinks = [
  { label: 'About', href: '/about', icon: 'info' },
  { label: 'Contact', href: '/contact', icon: 'contact_support' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  // Desktop "More Services" mega menu / mobile "More Services" accordion
  const [menuOpen, setMenuOpen] = useState(false)
  const [moreOpen, setMoreOpen] = useState(false)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const pathname = usePathname()

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    // Ensure we match on a full path segment boundary (e.g. /mobile-tyre-fitting
    // must NOT match /mobile-tyre-fitting-manchester)
    return pathname === href || pathname.startsWith(href + '/')
  }

  // Main links are highlighted on their own, so they don't also light up "More Services".
  const isServicesActive = [...serviceLinks, ...moreLinks].some(
    (l) => isActive(l.href) && !mainLinks.some((m) => m.href === l.href)
  )
  const desktopLinkClass = (href: string) =>
    isActive(href) ? 'text-[#b70011] border-b-2 border-[#b70011] pb-0.5' : 'text-slate-700 hover:text-[#b70011] transition-colors'

  const mobileLink = (link: { label: string; href: string; icon: string }) => (
    <a
      key={link.href}
      href={link.href}
      onClick={() => setMobileOpen(false)}
      className={`group flex items-center gap-4 px-5 py-3.5 mx-2 rounded-xl mb-0.5 transition-all ${isActive(link.href) ? 'bg-red-50 text-[#b70011]' : 'text-slate-700 hover:bg-slate-50 hover:text-[#b70011]'}`}
    >
      <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 transition-colors ${isActive(link.href) ? 'bg-[#b70011]/10' : 'bg-slate-100 group-hover:bg-[#b70011]/10'}`}>
        <span aria-hidden="true" data-nosnippet className={`material-symbols-outlined text-[18px] transition-colors ${isActive(link.href) ? 'text-[#b70011]' : 'text-slate-500 group-hover:text-[#b70011]'}`}>{link.icon}</span>
      </div>
      <span className="font-semibold text-sm flex-1">{link.label}</span>
      {isActive(link.href) ? <span className="w-1.5 h-1.5 rounded-full bg-[#b70011] shrink-0" /> : <span aria-hidden="true" data-nosnippet className="material-symbols-outlined text-[16px] text-slate-300 group-hover:text-[#b70011]/40 transition-colors">chevron_right</span>}
    </a>
  )

  // Hover handlers with a small delay to prevent flicker when moving the
  // cursor between the trigger and the panel.
  function handleMouseEnter() {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setMenuOpen(true)
  }

  function handleMouseLeave() {
    closeTimer.current = setTimeout(() => setMenuOpen(false), 150)
  }

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  // The landing page renders its own sticky call header.
  if (ADS_LANDING_PATHS.includes(pathname)) return null

  return (
    <>
      {/* Top Contact Bar */}
      <div className="hidden md:block bg-[#0f172a] text-white py-2 px-6 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-[12px] font-medium">
          <div className="flex items-center gap-5">
            <a href={`mailto:${EMAIL}`} className="flex items-center gap-1.5 hover:text-red-400 transition-colors">
              <span aria-hidden="true" data-nosnippet className="material-symbols-outlined text-sm">mail</span>
              {EMAIL}
            </a>
            <a href={`tel:${PHONE_TEL}`} className="flex items-center gap-1.5 hover:text-red-400 transition-colors">
              <span aria-hidden="true" data-nosnippet className="material-symbols-outlined text-sm">alarm</span>
              24/7 Emergency Service
            </a>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-red-400 transition-colors"
            >
              <span aria-hidden="true" data-nosnippet className="material-symbols-outlined text-sm">location_on</span>
              Our Service Areas
            </a>
          </div>
          <div className="flex items-center gap-3">
            <a href={`tel:${PHONE_TEL}`} className="flex items-center gap-1.5 font-bold text-red-400 hover:text-red-300 transition-colors">
              <span aria-hidden="true" data-nosnippet className="material-symbols-outlined text-sm">call</span>
              {PHONE}
            </a>
          </div>
        </div>
      </div>

      {/* ── Main Header ─────────────────────────────────────────────────────── */}
      <header className="bg-white sticky top-0 z-50 shadow-sm border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 lg:h-20 relative flex items-center justify-between gap-4 lg:grid lg:grid-cols-[auto_1fr_auto] lg:gap-8">

          {/* LEFT — Mobile call button | Desktop logo */}
          <div className="flex items-center gap-1.5 lg:justify-self-start">
            <a
              href={`tel:${PHONE_TEL}`}
              aria-label={`Call ${PHONE}`}
              className="cta-btn cta-call lg:hidden flex items-center gap-2 bg-[#b70011] hover:bg-red-700 text-white px-3 py-2 rounded-lg font-bold text-sm transition-all active:scale-95 shadow-md shadow-red-200"
              style={{ fontFamily: 'var(--font-work-sans)' }}
            >
              <span aria-hidden="true" data-nosnippet className="cta-ring material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                phone_in_talk
              </span>
            </a>
            <a href="/" className="hidden lg:block shrink-0" aria-label="One Stop Mobile Tyres 24/7 - Home">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/One-Stop%20Loog-airanko-Qpv1QvladNLpRhg8X3Hs6SzyydzFMq.webp"
                alt="One Stop Mobile Tyres 24/7"
                className="h-16 w-auto"
                width={200}
                height={64}
                loading="eager"
                decoding="async"
                fetchPriority="low"
              />
            </a>
          </div>

          {/* CENTER — Mobile: Logo | Desktop: Nav */}
          <a
            href="/"
            className="lg:hidden absolute left-1/2 -translate-x-1/2 shrink-0"
            aria-label="One Stop Mobile Tyres 24/7 - Home"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/One-Stop%20Loog-airanko-Qpv1QvladNLpRhg8X3Hs6SzyydzFMq.webp"
              alt="One Stop Mobile Tyres 24/7"
              className="h-14 w-auto"
              width={200}
              height={56}
              loading="eager"
              decoding="async"
              fetchPriority="low"
            />
          </a>

          {/* ── Desktop Nav ────────────────────────────────────────────────── */}
          <nav
            className="hidden lg:flex justify-self-center items-center gap-7 text-sm font-semibold whitespace-nowrap"
            style={{ fontFamily: 'var(--font-work-sans)' }}
          >
            {mainLinks.map((link) => (
              <a key={link.href} href={link.href} className={desktopLinkClass(link.href)}>
                {link.label}
              </a>
            ))}

            {/* More Services trigger */}
            <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <button
                className={`flex items-center gap-1 transition-colors ${
                  isServicesActive || menuOpen ? 'text-[#b70011]' : 'text-slate-700 hover:text-[#b70011]'
                } ${isServicesActive ? 'border-b-2 border-[#b70011] pb-0.5' : ''}`}
                aria-haspopup="true"
                aria-expanded={menuOpen}
                onClick={() => setMenuOpen((v) => !v)}
              >
                More Services
                <span aria-hidden="true" data-nosnippet
                  className={`material-symbols-outlined text-[16px] transition-transform duration-200 ${menuOpen ? 'rotate-180' : ''}`}
                >
                  expand_more
                </span>
              </button>

              {/* ── More Services Mega Menu ─────────────────────────────── */}
              <div
                className={`absolute left-1/2 -translate-x-1/2 top-[calc(100%+16px)] transition-all duration-200 origin-top ${
                  menuOpen ? 'opacity-100 scale-y-100 pointer-events-auto' : 'opacity-0 scale-y-95 pointer-events-none'
                }`}
                style={{ width: '620px' }}
              >
                {/* Arrow */}
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-l border-t border-slate-200 rotate-45 z-10" />

                <div className="relative bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden z-20">
                  {/* Links grid */}
                  <div className="p-5">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-3 px-1">
                      Our Services
                    </p>
                    <div className="grid grid-cols-2 gap-1">
                      {serviceLinks.map((link) => (
                        <a
                          key={link.href}
                          href={link.href}
                          className={`group flex items-start gap-3 p-3 rounded-xl transition-all ${
                            isActive(link.href) ? 'bg-red-50' : 'hover:bg-slate-50'
                          }`}
                        >
                          <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                            isActive(link.href) ? 'bg-[#b70011]/10' : 'bg-slate-100 group-hover:bg-[#b70011]/10'
                          }`}>
                            <span aria-hidden="true" data-nosnippet className={`material-symbols-outlined text-[18px] transition-colors ${
                              isActive(link.href) ? 'text-[#b70011]' : 'text-slate-500 group-hover:text-[#b70011]'
                            }`} style={{ fontVariationSettings: "'FILL' 1" }}>
                              {link.icon}
                            </span>
                          </div>
                          <div className="min-w-0">
                            <p className={`font-semibold text-sm leading-snug transition-colors ${
                              isActive(link.href) ? 'text-[#b70011]' : 'text-slate-800 group-hover:text-[#b70011]'
                            }`}>
                              {link.label}
                            </p>
                            <p className="text-[11px] text-slate-500 leading-tight mt-0.5">{link.desc}</p>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* Footer bar */}
                  <div className="flex items-center justify-between flex-wrap gap-y-2 gap-x-4 px-5 py-3 bg-slate-50 border-t border-slate-100">
                    <div className="flex items-center gap-4">
                      {moreLinks.map((link) => (
                        <a
                          key={link.href}
                          href={link.href}
                          className={`flex items-center gap-1.5 text-[12px] font-bold transition-colors ${
                            isActive(link.href) ? 'text-[#b70011]' : 'text-slate-600 hover:text-[#b70011]'
                          }`}
                        >
                          <span aria-hidden="true" data-nosnippet className="material-symbols-outlined text-[15px]">{link.icon}</span>
                          {link.label}
                        </a>
                      ))}
                    </div>
                    <a
                      href={`tel:${PHONE_TEL}`}
                      className="cta-btn cta-call flex items-center gap-1.5 bg-[#b70011] hover:bg-red-700 text-white font-bold text-[13px] px-3.5 py-2 rounded-lg transition-all active:scale-95 whitespace-nowrap"
                    >
                      <span aria-hidden="true" data-nosnippet className="cta-ring material-symbols-outlined text-[15px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                        phone_in_talk
                      </span>
                      {PHONE}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {endLinks.map((link) => (
              <a key={link.href} href={link.href} className={desktopLinkClass(link.href)}>
                {link.label}
              </a>
            ))}
          </nav>

          {/* RIGHT — Mobile: Hamburger | Desktop: Call button */}
          <div className="flex items-center gap-2 lg:justify-self-end">
            <a
              href={`tel:${PHONE_TEL}`}
              aria-label={`Call ${PHONE}`}
              className="cta-btn cta-call hidden lg:flex items-center gap-2 bg-[#b70011] hover:bg-red-700 text-white px-4 py-2 rounded-lg font-bold text-sm transition-all active:scale-95 shadow-md shadow-red-200"
              style={{ fontFamily: 'var(--font-work-sans)' }}
            >
              <span aria-hidden="true" data-nosnippet className="cta-ring material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                phone_in_talk
              </span>
              {PHONE}
            </a>

            {/* Hamburger — mobile only */}
            <button
              className="lg:hidden relative z-[110] w-10 h-10 flex flex-col items-center justify-center gap-[5px] rounded-lg hover:bg-slate-100 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              <span className={`w-5 h-0.5 block transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-[7px] bg-white' : 'bg-slate-700'}`} />
              <span className={`w-5 h-0.5 block transition-all duration-300 ${mobileOpen ? 'opacity-0 bg-white' : 'bg-slate-700'}`} />
              <span className={`w-5 h-0.5 block transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-[7px] bg-white' : 'bg-slate-700'}`} />
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile Drawer ───────────────────────────────────────────────────── */}
      <div
        className={`lg:hidden fixed inset-0 z-[100] transition-all duration-300 ${mobileOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
        aria-hidden={!mobileOpen}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${mobileOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setMobileOpen(false)}
        />

        {/* Drawer Panel */}
        <div
          className={`absolute right-0 top-0 h-full w-[85%] max-w-sm bg-white shadow-2xl flex flex-col transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] ${mobileOpen ? 'translate-x-0' : 'translate-x-full'}`}
          style={{ fontFamily: 'var(--font-work-sans)' }}
        >
          {/* Drawer Header */}
          <div className="bg-[#0f172a] px-5 pt-6 pb-5 shrink-0">
            <div className="flex items-center justify-between mb-5">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-0.5">Navigation</p>
                <p className="text-white font-bold text-base leading-tight">One Stop Mobile Tyres</p>
              </div>
              <button
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors shrink-0"
              >
                <span aria-hidden="true" data-nosnippet className="material-symbols-outlined text-white text-[20px]">close</span>
              </button>
            </div>
            <div className="space-y-2">
              <a
                href={`tel:${PHONE_TEL}`}
                className="cta-btn cta-call flex items-center gap-3 bg-[#b70011] hover:bg-red-700 transition-colors rounded-xl px-4 py-3 active:scale-[0.98]"
              >
                <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                  <span aria-hidden="true" data-nosnippet className="cta-ring material-symbols-outlined text-white text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                    phone_in_talk
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-white/70 text-[10px] font-semibold uppercase tracking-wider">Emergency Call</p>
                  <p className="text-white font-bold text-base">{PHONE}</p>
                </div>
                <span aria-hidden="true" data-nosnippet className="material-symbols-outlined text-white/50 text-[18px]">arrow_forward</span>
              </a>
            </div>
          </div>

          {/* Scrollable Nav */}
          <nav className="flex-1 overflow-y-auto py-3">

            <p className="px-5 pt-2 pb-2 text-[10px] font-bold uppercase tracking-widest text-slate-400">Menu</p>

            {mainLinks.map(mobileLink)}

            {/* ── More Services Accordion ────────────────────────────────── */}
            <div className="mx-2 mb-0.5">
              <button
                onClick={() => setMoreOpen((v) => !v)}
                aria-expanded={moreOpen}
                className={`w-full flex items-center gap-4 px-5 py-3.5 rounded-xl transition-all ${
                  isServicesActive ? 'bg-red-50 text-[#b70011]' : 'text-slate-700 hover:bg-slate-50 hover:text-[#b70011]'
                }`}
              >
                <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 transition-colors ${isServicesActive ? 'bg-[#b70011]/10' : 'bg-slate-100'}`}>
                  <span aria-hidden="true" data-nosnippet className={`material-symbols-outlined text-[18px] transition-colors ${isServicesActive ? 'text-[#b70011]' : 'text-slate-500'}`}>build</span>
                </div>
                <span className="font-semibold text-sm flex-1 text-left">More Services</span>
                <span aria-hidden="true" data-nosnippet className={`material-symbols-outlined text-[18px] transition-transform duration-200 ${moreOpen ? 'rotate-180 text-[#b70011]' : 'text-slate-400'}`}>
                  expand_more
                </span>
              </button>

              <div className={`overflow-hidden transition-all duration-300 ${moreOpen ? 'max-h-[900px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="pt-1 pb-2 ml-4 pl-4 border-l-2 border-slate-100 mt-1">
                  {serviceLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={`group flex items-center gap-3 px-3 py-2.5 rounded-xl mb-0.5 transition-all ${
                        isActive(link.href) ? 'bg-red-50 text-[#b70011]' : 'text-slate-700 hover:bg-slate-50 hover:text-[#b70011]'
                      }`}
                    >
                      <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-colors ${isActive(link.href) ? 'bg-[#b70011]/10' : 'bg-slate-100 group-hover:bg-[#b70011]/10'}`}>
                        <span aria-hidden="true" data-nosnippet className={`material-symbols-outlined text-[15px] transition-colors ${isActive(link.href) ? 'text-[#b70011]' : 'text-slate-500 group-hover:text-[#b70011]'}`} style={{ fontVariationSettings: "'FILL' 1" }}>
                          {link.icon}
                        </span>
                      </div>
                      <span className="font-semibold text-sm">{link.label}</span>
                      {isActive(link.href) && <span className="ml-auto w-1.5 h-1.5 rounded-full bg-[#b70011] shrink-0" />}
                    </a>
                  ))}
                  <div className="flex flex-wrap gap-x-4 gap-y-1 px-3 pt-2">
                    {moreLinks.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        onClick={() => setMobileOpen(false)}
                        className={`flex items-center gap-1.5 py-1.5 text-xs font-bold transition-colors ${
                          isActive(link.href) ? 'text-[#b70011]' : 'text-slate-500 hover:text-[#b70011]'
                        }`}
                      >
                        <span aria-hidden="true" data-nosnippet className="material-symbols-outlined text-[14px]">{link.icon}</span>
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {endLinks.map(mobileLink)}
          </nav>

          {/* Drawer Footer */}
          <div className="shrink-0 border-t border-slate-100 px-5 py-4 space-y-3">
            <a href="mailto:info@onestoptyres247.co.uk" className="flex items-center gap-3 group">
              <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center shrink-0">
                <span aria-hidden="true" data-nosnippet className="material-symbols-outlined text-[16px] text-slate-500">mail</span>
              </div>
              <div className="min-w-0">
                <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">Email</p>
                <p className="text-xs font-medium text-slate-700 truncate group-hover:text-[#b70011] transition-colors">
                  info@onestoptyres247.co.uk
                </p>
              </div>
            </a>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center shrink-0">
                <span aria-hidden="true" data-nosnippet className="material-symbols-outlined text-[16px] text-slate-500">schedule</span>
              </div>
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">Availability</p>
                <p className="text-xs font-medium text-slate-700">24/7 Emergency Callouts</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
