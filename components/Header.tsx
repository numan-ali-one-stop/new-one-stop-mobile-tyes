'use client'

import { useEffect, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'
import { BOROUGHS } from '@/lib/locations'

// ─── Data ────────────────────────────────────────────────────────────────────

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
    label: 'Emergency Puncture Repair',
    href: '/emergency-puncture-repair',
    icon: 'construction',
    desc: 'BS AU 159 compliant plug & patch repair',
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
  {
    label: '24 Hour Emergency Tyre Fitting',
    href: '/24-hour-emergency-tyre-fitting',
    icon: 'emergency',
    desc: 'Immediate tyre help day or night, 365 days',
  },
  {
    label: 'Cheap Mobile Tyre Fitting',
    href: '/cheap-mobile-tyre-fitting',
    icon: 'savings',
    desc: 'Budget, mid-range & premium tyres at great prices',
  },
  {
    label: 'Tyre Fitting Near Me',
    href: '/tyre-fitting-near-me',
    icon: 'location_on',
    desc: 'We come to your home, work or roadside location',
  },
]

const motorwayLinks = [
  { label: 'M60', href: '/mobile-tyre-fitting-m60', icon: 'route' },
  { label: 'M602', href: '/mobile-tyre-fitting-m602', icon: 'route' },
  { label: 'M61', href: '/mobile-tyre-fitting-m61', icon: 'route' },
  { label: 'M62', href: '/mobile-tyre-fitting-m62', icon: 'route' },
  { label: 'M56', href: '/mobile-tyre-fitting-m56', icon: 'route' },
  { label: 'M66', href: '/mobile-tyre-fitting-m66', icon: 'route' },
  { label: 'M67', href: '/mobile-tyre-fitting-m67', icon: 'route' },
  { label: 'A627', href: '/mobile-tyre-fitting-a627', icon: 'route' },
]

// ─── Component ───────────────────────────────────────────────────────────────

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [areasOpen, setAreasOpen] = useState(false)
  const [openMenu, setOpenMenu] = useState<'services' | 'areas' | null>(null)
  const [expandedBoroughs, setExpandedBoroughs] = useState<Set<string>>(new Set())
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const pathname = usePathname()

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    // Ensure we match on a full path segment boundary (e.g. /mobile-tyre-fitting
    // must NOT match /mobile-tyre-fitting-manchester)
    return pathname === href || pathname.startsWith(href + '/')
  }

  function toggleBorough(name: string) {
    setExpandedBoroughs((prev) => {
      const next = new Set(prev)
      if (next.has(name)) next.delete(name)
      else next.add(name)
      return next
    })
  }

  const isServicesActive =
    isActive('/services') || serviceLinks.some((l) => isActive(l.href))
  const isAreasActive =
    isActive('/service-area') ||
    BOROUGHS.some(
      (b) => (b.slug && isActive(`/mobile-tyre-fitting-${b.slug}`)) || b.towns.some((t) => isActive(`/mobile-tyre-fitting-${t.slug}`))
    ) ||
    motorwayLinks.some((l) => isActive(l.href))

  // Hover handlers with a small delay to prevent flicker when moving the
  // cursor between the trigger and the panel.
  function handleMouseEnter(menu: 'services' | 'areas') {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setOpenMenu(menu)
  }

  function handleMouseLeave() {
    closeTimer.current = setTimeout(() => setOpenMenu(null), 150)
  }

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      {/* Top Contact Bar */}
      <div className="hidden md:block bg-[#0f172a] text-white py-2 px-6 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-[12px] font-medium">
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-sm">mail</span>
              info@onestoptyres247.co.uk
            </span>
            <span className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-sm">alarm</span>
              24/7 Emergency Service
            </span>
            <span className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-sm">location_on</span>
              Greater Manchester
            </span>
          </div>
          <span className="flex items-center gap-1.5 font-bold text-red-400">
            <span className="material-symbols-outlined text-sm">call</span>
            07759 708 646
          </span>
        </div>
      </div>

      {/* ── Main Header ─────────────────────────────────────────────────────── */}
      <header className="bg-white sticky top-0 z-50 shadow-sm border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 lg:h-20 relative flex items-center justify-between gap-4 lg:grid lg:grid-cols-[auto_1fr_auto] lg:gap-8">

          {/* LEFT — Mobile call button | Desktop logo */}
          <div className="flex items-center lg:justify-self-start">
            <a
              href="tel:07759708646"
              aria-label="Call 07759 708 646"
              className="lg:hidden flex items-center gap-2 bg-[#b70011] hover:bg-red-700 text-white px-3 py-2 rounded-lg font-bold text-sm transition-all active:scale-95 shadow-md shadow-red-200"
              style={{ fontFamily: 'var(--font-work-sans)' }}
            >
              <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>
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
            {/* Home */}
            <a
              href="/"
              className={isActive('/') ? 'text-[#b70011] border-b-2 border-[#b70011] pb-0.5' : 'text-slate-700 hover:text-[#b70011] transition-colors'}
            >
              Home
            </a>

            {/* About */}
            <a
              href="/about"
              className={isActive('/about') ? 'text-[#b70011] border-b-2 border-[#b70011] pb-0.5' : 'text-slate-700 hover:text-[#b70011] transition-colors'}
            >
              About Us
            </a>

            {/* Services trigger */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('services')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className={`flex items-center gap-1 transition-colors ${
                  isServicesActive || openMenu === 'services'
                    ? 'text-[#b70011]'
                    : 'text-slate-700 hover:text-[#b70011]'
                } ${isServicesActive ? 'border-b-2 border-[#b70011] pb-0.5' : ''}`}
                aria-haspopup="true"
                aria-expanded={openMenu === 'services'}
              >
                Services
                <span
                  className={`material-symbols-outlined text-[16px] transition-transform duration-200 ${openMenu === 'services' ? 'rotate-180' : ''}`}
                >
                  expand_more
                </span>
              </button>

              {/* ── Services Mega Menu ──────────────────────────────────── */}
              <div
                className={`absolute left-1/2 -translate-x-1/2 top-[calc(100%+16px)] transition-all duration-200 origin-top ${
                  openMenu === 'services'
                    ? 'opacity-100 scale-y-100 pointer-events-auto'
                    : 'opacity-0 scale-y-95 pointer-events-none'
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
                            isActive(link.href)
                              ? 'bg-red-50'
                              : 'hover:bg-slate-50'
                          }`}
                        >
                          <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                            isActive(link.href)
                              ? 'bg-[#b70011]/10'
                              : 'bg-slate-100 group-hover:bg-[#b70011]/10'
                          }`}>
                            <span className={`material-symbols-outlined text-[18px] transition-colors ${
                              isActive(link.href)
                                ? 'text-[#b70011]'
                                : 'text-slate-500 group-hover:text-[#b70011]'
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
                  <div className="flex items-center justify-between gap-4 px-5 py-3 bg-slate-50 border-t border-slate-100">
                    <div className="flex items-center gap-2 min-w-0">
                      <span className="material-symbols-outlined text-[18px] text-[#b70011] shrink-0" style={{ fontVariationSettings: "'FILL' 1" }}>
                        bolt
                      </span>
                      <p className="text-[12px] text-slate-600 leading-tight">
                        <span className="font-bold text-slate-800">20–30 min response</span> across Greater Manchester
                      </p>
                    </div>
                    <a
                      href="tel:07759708646"
                      className="flex items-center gap-1.5 bg-[#b70011] hover:bg-red-700 text-white font-bold text-[13px] px-3.5 py-2 rounded-lg transition-all active:scale-95 whitespace-nowrap shrink-0"
                    >
                      <span className="material-symbols-outlined text-[15px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                        phone_in_talk
                      </span>
                      07759 708 646
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Service Area trigger */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('areas')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className={`flex items-center gap-1 transition-colors ${
                  isAreasActive || openMenu === 'areas'
                    ? 'text-[#b70011]'
                    : 'text-slate-700 hover:text-[#b70011]'
                } ${isAreasActive ? 'border-b-2 border-[#b70011] pb-0.5' : ''}`}
                aria-haspopup="true"
                aria-expanded={openMenu === 'areas'}
              >
                Service Area
                <span
                  className={`material-symbols-outlined text-[16px] transition-transform duration-200 ${openMenu === 'areas' ? 'rotate-180' : ''}`}
                >
                  expand_more
                </span>
              </button>

              {/* ── Areas Mega Menu ─────────────────────────────────────── */}
              <div
                className={`absolute left-1/2 -translate-x-1/2 top-[calc(100%+16px)] transition-all duration-200 origin-top ${
                  openMenu === 'areas'
                    ? 'opacity-100 scale-y-100 pointer-events-auto'
                    : 'opacity-0 scale-y-95 pointer-events-none'
                }`}
                style={{ width: '620px' }}
              >
                {/* Arrow */}
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-l border-t border-slate-200 rotate-45 z-10" />

                <div className="relative bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden z-20">
                  {/* Cities + Motorways */}
                  <div className="p-5">
                    {/* Cities */}
                    <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-3 px-1">
                      City Areas — click to see towns
                    </p>
                    <div className="max-h-[320px] overflow-y-auto pr-1 mb-4">
                      {BOROUGHS.map((borough) => {
                        const href = borough.slug ? `/mobile-tyre-fitting-${borough.slug}` : undefined
                        const active = (href && isActive(href)) || borough.towns.some((t) => isActive(`/mobile-tyre-fitting-${t.slug}`))
                        const expanded = expandedBoroughs.has(borough.name)
                        return (
                          <div key={borough.name} className="mb-0.5">
                            <div
                              className={`group flex items-center gap-1 rounded-xl transition-all ${
                                active ? 'bg-red-50 text-[#b70011]' : 'hover:bg-slate-50 text-slate-700 hover:text-[#b70011]'
                              }`}
                            >
                              {href ? (
                                <a href={href} className="flex items-center gap-2.5 px-3 py-2.5 flex-1 min-w-0">
                                  <span className={`material-symbols-outlined text-[15px] shrink-0 transition-colors ${
                                    active ? 'text-[#b70011]' : 'text-slate-400 group-hover:text-[#b70011]'
                                  }`} style={{ fontVariationSettings: "'FILL' 1" }}>
                                    location_on
                                  </span>
                                  <span className="font-semibold text-sm">{borough.name}</span>
                                </a>
                              ) : (
                                <span className="flex items-center gap-2.5 px-3 py-2.5 flex-1 min-w-0">
                                  <span className="material-symbols-outlined text-[15px] shrink-0 text-slate-400" style={{ fontVariationSettings: "'FILL' 1" }}>
                                    location_on
                                  </span>
                                  <span className="font-semibold text-sm">{borough.name}</span>
                                </span>
                              )}
                              {borough.towns.length > 0 && (
                                <button
                                  type="button"
                                  onClick={() => toggleBorough(borough.name)}
                                  aria-label={`${expanded ? 'Hide' : 'Show'} towns in ${borough.name}`}
                                  aria-expanded={expanded}
                                  className="p-2 mr-1.5 rounded-lg hover:bg-slate-200/60 shrink-0 transition-colors"
                                >
                                  <span className={`material-symbols-outlined text-[16px] transition-transform duration-200 ${expanded ? 'rotate-180' : ''}`}>
                                    expand_more
                                  </span>
                                </button>
                              )}
                            </div>
                            {borough.towns.length > 0 && (
                              <div className={`overflow-hidden transition-all duration-300 ${expanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                                <div className="flex flex-wrap gap-1.5 pl-8 pr-2 pb-2 pt-1">
                                  {borough.towns.map((town) => (
                                    <a
                                      key={town.slug}
                                      href={`/mobile-tyre-fitting-${town.slug}`}
                                      className={`text-xs font-bold px-2.5 py-1.5 rounded-full border transition-colors ${
                                        isActive(`/mobile-tyre-fitting-${town.slug}`)
                                          ? 'bg-[#b70011] border-[#b70011] text-white'
                                          : 'border-slate-200 text-slate-600 hover:border-[#b70011] hover:text-[#b70011] hover:bg-red-50'
                                      }`}
                                    >
                                      {town.name}
                                    </a>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        )
                      })}
                    </div>

                    {/* Divider */}
                    <div className="border-t border-slate-100 mb-4" />

                    {/* Motorways */}
                    <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-3 px-1">
                      Motorways &amp; Roads
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {motorwayLinks.map((link) => (
                        <a
                          key={link.href}
                          href={link.href}
                          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-bold transition-all border ${
                            isActive(link.href)
                              ? 'bg-[#b70011] border-[#b70011] text-white'
                              : 'border-slate-200 text-slate-600 hover:border-[#b70011] hover:text-[#b70011] hover:bg-red-50'
                          }`}
                        >
                          <span className="material-symbols-outlined text-[13px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                            route
                          </span>
                          {link.label}
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* Footer bar */}
                  <div className="flex items-center justify-between gap-4 px-5 py-3 bg-slate-50 border-t border-slate-100">
                    <div className="flex items-center gap-2 min-w-0">
                      <span className="material-symbols-outlined text-[18px] text-[#b70011] shrink-0" style={{ fontVariationSettings: "'FILL' 1" }}>
                        location_on
                      </span>
                      <p className="text-[12px] text-slate-600 leading-tight">
                        <span className="font-bold text-slate-800">9 boroughs, 27 towns &amp; 8 motorways</span> covered 24/7
                      </p>
                    </div>
                    <a
                      href="/service-area"
                      className="flex items-center gap-1.5 bg-[#b70011] hover:bg-red-700 text-white font-bold text-[13px] px-3.5 py-2 rounded-lg transition-all active:scale-95 whitespace-nowrap shrink-0"
                    >
                      <span className="material-symbols-outlined text-[15px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                        map
                      </span>
                      Coverage Map
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Guides */}
            <a
              href="/guides"
              className={isActive('/guides') ? 'text-[#b70011] border-b-2 border-[#b70011] pb-0.5' : 'text-slate-700 hover:text-[#b70011] transition-colors'}
            >
              Guides
            </a>

            {/* Contact */}
            <a
              href="/contact"
              className={isActive('/contact') ? 'text-[#b70011] border-b-2 border-[#b70011] pb-0.5' : 'text-slate-700 hover:text-[#b70011] transition-colors'}
            >
              Contact
            </a>
          </nav>

          {/* RIGHT — Mobile: Hamburger | Desktop: Call button */}
          <div className="flex items-center gap-2 lg:justify-self-end">
            <a
              href="tel:07759708646"
              aria-label="Call 07759 708 646"
              className="hidden lg:flex items-center gap-2 bg-[#b70011] hover:bg-red-700 text-white px-4 py-2 rounded-lg font-bold text-sm transition-all active:scale-95 shadow-md shadow-red-200"
              style={{ fontFamily: 'var(--font-work-sans)' }}
            >
              <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                phone_in_talk
              </span>
              07759 708 646
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
                <span className="material-symbols-outlined text-white text-[20px]">close</span>
              </button>
            </div>
            <a
              href="tel:07759708646"
              className="flex items-center gap-3 bg-[#b70011] hover:bg-red-700 transition-colors rounded-xl px-4 py-3 active:scale-[0.98]"
            >
              <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-white text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                  phone_in_talk
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-white/70 text-[10px] font-semibold uppercase tracking-wider">Emergency Call</p>
                <p className="text-white font-bold text-base">07759 708 646</p>
              </div>
              <span className="material-symbols-outlined text-white/50 text-[18px]">arrow_forward</span>
            </a>
          </div>

          {/* Scrollable Nav */}
          <nav className="flex-1 overflow-y-auto py-3">

            {/* Simple links */}
            <p className="px-5 pt-2 pb-2 text-[10px] font-bold uppercase tracking-widest text-slate-400">Menu</p>

            <a
              href="/"
              onClick={() => setMobileOpen(false)}
              className={`group flex items-center gap-4 px-5 py-3.5 mx-2 rounded-xl mb-0.5 transition-all ${isActive('/') ? 'bg-red-50 text-[#b70011]' : 'text-slate-700 hover:bg-slate-50 hover:text-[#b70011]'}`}
            >
              <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 transition-colors ${isActive('/') ? 'bg-[#b70011]/10' : 'bg-slate-100 group-hover:bg-[#b70011]/10'}`}>
                <span className={`material-symbols-outlined text-[18px] transition-colors ${isActive('/') ? 'text-[#b70011]' : 'text-slate-500 group-hover:text-[#b70011]'}`}>home</span>
              </div>
              <span className="font-semibold text-sm flex-1">Home</span>
              {isActive('/') ? <span className="w-1.5 h-1.5 rounded-full bg-[#b70011] shrink-0" /> : <span className="material-symbols-outlined text-[16px] text-slate-300 group-hover:text-[#b70011]/40 transition-colors">chevron_right</span>}
            </a>

            <a
              href="/about"
              onClick={() => setMobileOpen(false)}
              className={`group flex items-center gap-4 px-5 py-3.5 mx-2 rounded-xl mb-0.5 transition-all ${isActive('/about') ? 'bg-red-50 text-[#b70011]' : 'text-slate-700 hover:bg-slate-50 hover:text-[#b70011]'}`}
            >
              <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 transition-colors ${isActive('/about') ? 'bg-[#b70011]/10' : 'bg-slate-100 group-hover:bg-[#b70011]/10'}`}>
                <span className={`material-symbols-outlined text-[18px] transition-colors ${isActive('/about') ? 'text-[#b70011]' : 'text-slate-500 group-hover:text-[#b70011]'}`}>info</span>
              </div>
              <span className="font-semibold text-sm flex-1">About Us</span>
              {isActive('/about') ? <span className="w-1.5 h-1.5 rounded-full bg-[#b70011] shrink-0" /> : <span className="material-symbols-outlined text-[16px] text-slate-300 group-hover:text-[#b70011]/40 transition-colors">chevron_right</span>}
            </a>

            {/* ── Services Accordion ─────────────────────────────────────── */}
            <div className="mx-2 mb-0.5">
              <button
                onClick={() => setServicesOpen((v) => !v)}
                className={`w-full flex items-center gap-4 px-5 py-3.5 rounded-xl transition-all ${
                  isServicesActive ? 'bg-red-50 text-[#b70011]' : 'text-slate-700 hover:bg-slate-50 hover:text-[#b70011]'
                }`}
              >
                <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 transition-colors ${isServicesActive ? 'bg-[#b70011]/10' : 'bg-slate-100'}`}>
                  <span className={`material-symbols-outlined text-[18px] transition-colors ${isServicesActive ? 'text-[#b70011]' : 'text-slate-500'}`}>build</span>
                </div>
                <span className="font-semibold text-sm flex-1 text-left">Services</span>
                <span className={`material-symbols-outlined text-[18px] transition-transform duration-200 ${servicesOpen ? 'rotate-180 text-[#b70011]' : 'text-slate-400'}`}>
                  expand_more
                </span>
              </button>

              {/* Services sub-links */}
              <div className={`overflow-hidden transition-all duration-300 ${servicesOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="pt-1 pb-2 ml-4 pl-4 border-l-2 border-slate-100 mt-1">
                  <a
                    href="/services"
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-bold text-slate-400 hover:text-[#b70011] transition-colors mb-1"
                  >
                    <span className="material-symbols-outlined text-[14px]">grid_view</span>
                    All Services
                  </a>
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
                        <span className={`material-symbols-outlined text-[15px] transition-colors ${isActive(link.href) ? 'text-[#b70011]' : 'text-slate-500 group-hover:text-[#b70011]'}`} style={{ fontVariationSettings: "'FILL' 1" }}>
                          {link.icon}
                        </span>
                      </div>
                      <span className="font-semibold text-sm">{link.label}</span>
                      {isActive(link.href) && <span className="ml-auto w-1.5 h-1.5 rounded-full bg-[#b70011] shrink-0" />}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* ── Service Area Accordion ─────────────────────────────────── */}
            <div className="mx-2 mb-0.5">
              <button
                onClick={() => setAreasOpen((v) => !v)}
                className={`w-full flex items-center gap-4 px-5 py-3.5 rounded-xl transition-all ${
                  isAreasActive ? 'bg-red-50 text-[#b70011]' : 'text-slate-700 hover:bg-slate-50 hover:text-[#b70011]'
                }`}
              >
                <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 transition-colors ${isAreasActive ? 'bg-[#b70011]/10' : 'bg-slate-100'}`}>
                  <span className={`material-symbols-outlined text-[18px] transition-colors ${isAreasActive ? 'text-[#b70011]' : 'text-slate-500'}`}>map</span>
                </div>
                <span className="font-semibold text-sm flex-1 text-left">Service Area</span>
                <span className={`material-symbols-outlined text-[18px] transition-transform duration-200 ${areasOpen ? 'rotate-180 text-[#b70011]' : 'text-slate-400'}`}>
                  expand_more
                </span>
              </button>

              <div className={`overflow-hidden transition-all duration-300 ${areasOpen ? 'max-h-[900px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="pt-1 pb-2 ml-4 pl-4 border-l-2 border-slate-100 mt-1">
                  <a
                    href="/service-area"
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-bold text-slate-400 hover:text-[#b70011] transition-colors mb-1"
                  >
                    <span className="material-symbols-outlined text-[14px]">map</span>
                    Full Coverage Map
                  </a>

                  <p className="px-3 pt-1 pb-1.5 text-[10px] font-bold uppercase tracking-widest text-slate-400">
                    City Areas — tap to see towns
                  </p>
                  {BOROUGHS.map((borough) => {
                    const href = borough.slug ? `/mobile-tyre-fitting-${borough.slug}` : undefined
                    const active = (href && isActive(href)) || borough.towns.some((t) => isActive(`/mobile-tyre-fitting-${t.slug}`))
                    const expanded = expandedBoroughs.has(borough.name)
                    return (
                      <div key={borough.name} className="mb-0.5">
                        <div
                          className={`group flex items-center gap-1 rounded-xl transition-all ${
                            active ? 'bg-red-50 text-[#b70011]' : 'text-slate-700 hover:bg-slate-50 hover:text-[#b70011]'
                          }`}
                        >
                          {href ? (
                            <a
                              href={href}
                              onClick={() => setMobileOpen(false)}
                              className="flex items-center gap-3 px-3 py-2.5 flex-1 min-w-0"
                            >
                              <span className={`material-symbols-outlined text-[15px] shrink-0 transition-colors ${active ? 'text-[#b70011]' : 'text-slate-400 group-hover:text-[#b70011]'}`} style={{ fontVariationSettings: "'FILL' 1" }}>
                                location_on
                              </span>
                              <span className="font-semibold text-sm">{borough.name}</span>
                            </a>
                          ) : (
                            <span className="flex items-center gap-3 px-3 py-2.5 flex-1 min-w-0">
                              <span className="material-symbols-outlined text-[15px] shrink-0 text-slate-400" style={{ fontVariationSettings: "'FILL' 1" }}>
                                location_on
                              </span>
                              <span className="font-semibold text-sm">{borough.name}</span>
                            </span>
                          )}
                          {borough.towns.length > 0 && (
                            <button
                              type="button"
                              onClick={() => toggleBorough(borough.name)}
                              aria-label={`${expanded ? 'Hide' : 'Show'} towns in ${borough.name}`}
                              aria-expanded={expanded}
                              className="p-2 mr-1 rounded-lg hover:bg-slate-200/60 shrink-0 transition-colors"
                            >
                              <span className={`material-symbols-outlined text-[16px] transition-transform duration-200 ${expanded ? 'rotate-180' : ''}`}>
                                expand_more
                              </span>
                            </button>
                          )}
                        </div>
                        {borough.towns.length > 0 && (
                          <div className={`overflow-hidden transition-all duration-300 ${expanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                            <div className="flex flex-wrap gap-1.5 pl-8 pr-2 pb-2 pt-1">
                              {borough.towns.map((town) => (
                                <a
                                  key={town.slug}
                                  href={`/mobile-tyre-fitting-${town.slug}`}
                                  onClick={() => setMobileOpen(false)}
                                  className={`text-xs font-bold px-2.5 py-1.5 rounded-full border transition-colors ${
                                    isActive(`/mobile-tyre-fitting-${town.slug}`)
                                      ? 'bg-[#b70011] border-[#b70011] text-white'
                                      : 'border-slate-200 text-slate-600 hover:border-[#b70011] hover:text-[#b70011]'
                                  }`}
                                >
                                  {town.name}
                                </a>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    )
                  })}

                  <p className="px-3 pt-3 pb-1.5 text-[10px] font-bold uppercase tracking-widest text-slate-400">
                    Motorways &amp; Roads
                  </p>
                  <div className="flex flex-wrap gap-1.5 px-3 pb-2">
                    {motorwayLinks.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        onClick={() => setMobileOpen(false)}
                        className={`flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-bold transition-all border ${
                          isActive(link.href)
                            ? 'bg-[#b70011] border-[#b70011] text-white'
                            : 'border-slate-200 text-slate-600 hover:border-[#b70011] hover:text-[#b70011]'
                        }`}
                      >
                        <span className="material-symbols-outlined text-[12px]" style={{ fontVariationSettings: "'FILL' 1" }}>route</span>
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Guides */}
            <a
              href="/guides"
              onClick={() => setMobileOpen(false)}
              className={`group flex items-center gap-4 px-5 py-3.5 mx-2 rounded-xl mb-0.5 transition-all ${isActive('/guides') ? 'bg-red-50 text-[#b70011]' : 'text-slate-700 hover:bg-slate-50 hover:text-[#b70011]'}`}
            >
              <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 transition-colors ${isActive('/guides') ? 'bg-[#b70011]/10' : 'bg-slate-100 group-hover:bg-[#b70011]/10'}`}>
                <span className={`material-symbols-outlined text-[18px] transition-colors ${isActive('/guides') ? 'text-[#b70011]' : 'text-slate-500 group-hover:text-[#b70011]'}`}>menu_book</span>
              </div>
              <span className="font-semibold text-sm flex-1">Guides</span>
              {isActive('/guides') ? <span className="w-1.5 h-1.5 rounded-full bg-[#b70011] shrink-0" /> : <span className="material-symbols-outlined text-[16px] text-slate-300 group-hover:text-[#b70011]/40 transition-colors">chevron_right</span>}
            </a>

            {/* Contact */}
            <a
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className={`group flex items-center gap-4 px-5 py-3.5 mx-2 rounded-xl mb-0.5 transition-all ${isActive('/contact') ? 'bg-red-50 text-[#b70011]' : 'text-slate-700 hover:bg-slate-50 hover:text-[#b70011]'}`}
            >
              <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 transition-colors ${isActive('/contact') ? 'bg-[#b70011]/10' : 'bg-slate-100 group-hover:bg-[#b70011]/10'}`}>
                <span className={`material-symbols-outlined text-[18px] transition-colors ${isActive('/contact') ? 'text-[#b70011]' : 'text-slate-500 group-hover:text-[#b70011]'}`}>contact_support</span>
              </div>
              <span className="font-semibold text-sm flex-1">Contact</span>
              {isActive('/contact') ? <span className="w-1.5 h-1.5 rounded-full bg-[#b70011] shrink-0" /> : <span className="material-symbols-outlined text-[16px] text-slate-300 group-hover:text-[#b70011]/40 transition-colors">chevron_right</span>}
            </a>
          </nav>

          {/* Drawer Footer */}
          <div className="shrink-0 border-t border-slate-100 px-5 py-4 space-y-3">
            <a href="mailto:info@onestoptyres247.co.uk" className="flex items-center gap-3 group">
              <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[16px] text-slate-500">mail</span>
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
                <span className="material-symbols-outlined text-[16px] text-slate-500">schedule</span>
              </div>
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">Availability</p>
                <p className="text-xs font-medium text-slate-700">24/7 Emergency — Greater Manchester</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
