'use client'

import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'Home', href: '#' },
  { label: 'About Us', href: '#' },
  { label: 'Services', href: '#' },
  { label: 'Service Area', href: '#' },
  { label: 'Contact', href: '#' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
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

      {/* Main Header */}
      <header className="bg-white sticky top-0 z-50 shadow-sm border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 relative flex items-center lg:grid lg:grid-cols-3 lg:gap-4">

          {/* Logo — far left on desktop */}
          <a
            href="#"
            className="hidden lg:flex justify-self-start shrink-0"
            aria-label="One Stop Mobile Tyres 24/7 - Home"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/One-Stop%20Loog-airanko-Qpv1QvladNLpRhg8X3Hs6SzyydzFMq.webp"
              alt="One Stop Mobile Tyres 24/7"
              className="h-12 w-auto"
            />
          </a>

          {/* Mobile: Logo centred */}
          <a
            href="#"
            className="lg:hidden absolute left-1/2 -translate-x-1/2 shrink-0"
            aria-label="One Stop Mobile Tyres 24/7 - Home"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/One-Stop%20Loog-airanko-Qpv1QvladNLpRhg8X3Hs6SzyydzFMq.webp"
              alt="One Stop Mobile Tyres 24/7"
              className="h-12 w-auto"
            />
          </a>

          {/* Desktop Nav — middle column, perfectly centred */}
          <nav
            className="hidden lg:flex justify-self-center items-center gap-7 text-sm font-semibold"
            style={{ fontFamily: 'var(--font-work-sans)' }}
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={
                  link.label === 'Home'
                    ? 'text-[#b70011] border-b-2 border-[#b70011] pb-0.5'
                    : 'text-slate-700 hover:text-[#b70011] transition-colors'
                }
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right side — far right on desktop */}
          <div className="flex items-center gap-3 ml-auto lg:ml-0 lg:justify-self-end">
            {/* Call CTA — desktop */}
            <a
              href="tel:07759708646"
              aria-label="Call 07759 708 646"
              className="hidden lg:flex items-center gap-2 bg-[#b70011] hover:bg-red-700 text-white px-4 py-2 rounded-lg font-bold text-sm transition-all active:scale-95 shadow-md shadow-red-200"
              style={{ fontFamily: 'var(--font-work-sans)' }}
            >
              <span
                className="material-symbols-outlined text-[18px]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                phone_in_talk
              </span>
              07759 708 646
            </a>

            {/* Hamburger */}
            <button
              className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-[5px] rounded-lg hover:bg-slate-100 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              <span
                className={`w-5 h-0.5 bg-slate-700 block transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-[7px]' : ''}`}
              />
              <span
                className={`w-5 h-0.5 bg-slate-700 block transition-all duration-300 ${mobileOpen ? 'opacity-0 scale-x-0' : ''}`}
              />
              <span
                className={`w-5 h-0.5 bg-slate-700 block transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-[7px]' : ''}`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu — Full Screen Overlay */}
      <div
        className={`lg:hidden fixed inset-0 z-40 transition-all duration-300 ${mobileOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${mobileOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setMobileOpen(false)}
        />

        {/* Drawer */}
        <div
          className={`absolute top-0 right-0 h-full w-[300px] bg-white shadow-2xl flex flex-col transition-transform duration-300 ease-in-out ${mobileOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
          {/* Drawer Header */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">Navigation</p>
              <p className="text-sm font-bold text-slate-800 mt-0.5">One Stop Tyres 24/7</p>
            </div>
            <button
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
              className="w-9 h-9 rounded-lg bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition-colors"
            >
              <span className="material-symbols-outlined text-slate-600 text-[20px]">close</span>
            </button>
          </div>

          {/* Nav Links */}
          <nav className="flex flex-col px-3 py-4 gap-1 flex-1 overflow-y-auto" style={{ fontFamily: 'var(--font-work-sans)' }}>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                  link.label === 'Home'
                    ? 'bg-[#b70011] text-white shadow-md shadow-red-200'
                    : 'text-slate-700 hover:bg-slate-100 hover:text-[#b70011]'
                }`}
              >
                {link.label}
                <span
                  className={`material-symbols-outlined text-[18px] ${link.label === 'Home' ? 'text-white/70' : 'text-slate-400'}`}
                >
                  chevron_right
                </span>
              </a>
            ))}
          </nav>

          {/* Contact Section */}
          <div className="border-t border-slate-100 bg-[#0f172a] rounded-t-2xl mx-2 mb-2 overflow-hidden">
            <p className="text-[10px] font-bold uppercase tracking-widest text-white/30 px-5 pt-4 pb-2">Contact Us</p>

            <a
              href="tel:07759708646"
              className="flex items-center gap-3 px-5 py-3 hover:bg-white/5 transition-colors"
            >
              <div className="w-9 h-9 rounded-full bg-[#b70011] flex items-center justify-center shrink-0 shadow-md shadow-red-900/40">
                <span className="material-symbols-outlined text-[17px] text-white" style={{ fontVariationSettings: "'FILL' 1" }}>phone_in_talk</span>
              </div>
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-widest text-white/40">Call Now</p>
                <p className="text-sm font-bold text-white">07759 708 646</p>
              </div>
              <span className="material-symbols-outlined text-white/30 text-[18px] ml-auto">chevron_right</span>
            </a>

            <div className="mx-5 h-px bg-white/10" />

            <a
              href="mailto:info@onestoptyres247.co.uk"
              className="flex items-center gap-3 px-5 py-3 hover:bg-white/5 transition-colors"
            >
              <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[17px] text-white/70">mail</span>
              </div>
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-widest text-white/40">Email</p>
                <p className="text-sm font-medium text-white">info@onestoptyres247.co.uk</p>
              </div>
              <span className="material-symbols-outlined text-white/30 text-[18px] ml-auto">chevron_right</span>
            </a>

            <div className="mx-5 h-px bg-white/10" />

            <div className="flex items-center gap-3 px-5 py-3 pb-5">
              <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[17px] text-white/70">schedule</span>
              </div>
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-widest text-white/40">Hours</p>
                <p className="text-sm font-medium text-white">24/7 — Greater Manchester</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
