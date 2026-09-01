'use client'

import { usePathname } from 'next/navigation'
import { ADDRESS, BUSINESS_NAME } from '@/lib/constants'

export default function Footer() {
  const pathname = usePathname()
  const isContactPage = pathname === '/contact'

  return (
    <footer className="bg-[#0f172a] text-white pt-12 sm:pt-16 lg:pt-24 pb-8 sm:pb-12 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-16 mb-10 sm:mb-16 lg:mb-20">
        {/* Brand */}
        <div className="space-y-6 sm:space-y-8 sm:col-span-2 lg:col-span-1">
          <a href="#" aria-label="One Stop Mobile Tyres 24/7 - Home" className="flex justify-center sm:justify-start">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/One-Stop%20Loog-airanko-Qpv1QvladNLpRhg8X3Hs6SzyydzFMq.webp"
              alt="One Stop Mobile Tyres 24/7"
              className="h-16 sm:h-20 w-auto"
              width={200}
              height={80}
              loading="lazy"
              decoding="async"
            />
          </a>
          <p className="text-slate-400 text-base leading-relaxed text-center sm:text-left">
            {BUSINESS_NAME} — the premier 24/7 emergency roadside assistance partner across
            Greater Manchester. Rapid response, professional service, and transparent pricing.
          </p>
          <ul className="space-y-3 sm:space-y-4 text-slate-400 text-sm font-medium">
            <li className="flex items-center justify-center sm:justify-start gap-3">
              <span className="material-symbols-outlined text-[#FF4444] text-lg">call</span>
              <a href="tel:07759708646" className="text-white font-bold hover:text-[#FF4444] transition-colors">
                07759 708 646
              </a>
            </li>
            <li className="flex items-center justify-center sm:justify-start gap-3">
              <span className="material-symbols-outlined text-[#FF4444] text-lg">mail</span>
              <a href="mailto:info@onestoptyres247.co.uk" className="hover:text-[#FF4444] transition-colors break-all text-xs sm:text-sm">
                info@onestoptyres247.co.uk
              </a>
            </li>
            <li className="flex items-start justify-center sm:justify-start gap-3">
              <span className="material-symbols-outlined text-[#FF4444] text-lg">location_on</span>
              <span className="text-center sm:text-left">{ADDRESS}</span>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-bold mb-4 sm:mb-6 lg:mb-8 text-base sm:text-lg uppercase tracking-wider text-slate-200 text-center sm:text-left">
            Our Services
          </h4>
          <ul className="space-y-2 sm:space-y-3 lg:space-y-4 text-slate-400 text-sm font-medium">
            {[
              { label: '24 Hour Emergency Tyre Fitting', href: '/24-hour-emergency-tyre-fitting' },
              { label: 'Cheap Mobile Tyre Fitting', href: '/cheap-mobile-tyre-fitting' },
              { label: 'Tyre Fitting Near Me', href: '/tyre-fitting-near-me' },
              { label: 'Mobile Tyre Fitting', href: '/mobile-tyre-fitting' },
              { label: 'Home Tyre Fitting', href: '/home-tyre-fitting' },
              { label: 'Emergency Puncture Repair', href: '/emergency-puncture-repair' },
              { label: 'Jump Start', href: '/jump-start' },
              { label: 'Locking Nut Removal', href: '/locking-nut-removal' },
              { label: 'TPMS Reset', href: '/tpms-reset' },
            ].map((item) => (
              <li key={item.href}>
                <a href={item.href} className="hover:text-[#FF4444] transition-colors flex items-center justify-center sm:justify-start gap-2 py-0.5">
                  <span className="w-1 h-1 bg-[#FF4444] rounded-full shrink-0" />
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-bold mb-4 sm:mb-6 lg:mb-8 text-base sm:text-lg uppercase tracking-wider text-slate-200 text-center sm:text-left">
            Quick Links
          </h4>
          <ul className="space-y-2 sm:space-y-3 lg:space-y-4 text-slate-400 text-sm font-medium">
            {[
              { label: 'Home', href: '/' },
              { label: 'About Us', href: '/about' },
              { label: 'All Services', href: '/services' },
              { label: 'Service Area', href: '/service-area' },
              { label: 'Guides', href: '/guides' },
              { label: 'Contact Us', href: '/contact' },
            ].map((link) => (
              <li key={link.href}>
                <a href={link.href} className="hover:text-[#FF4444] transition-colors flex items-center justify-center sm:justify-start gap-2 py-0.5">
                  <span className="w-1 h-1 bg-[#FF4444] rounded-full shrink-0" />
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-bold mb-4 sm:mb-6 lg:mb-8 text-base sm:text-lg uppercase tracking-wider text-slate-200 text-center sm:text-left">
            Company
          </h4>
          <ul className="space-y-2 sm:space-y-3 lg:space-y-4 text-slate-400 text-sm font-medium mb-6 sm:mb-8">
            {[
              { label: 'Privacy Policy', href: '/privacy-policy' },
              { label: 'Cookie Policy', href: '/cookie-policy' },
              { label: 'Terms & Conditions', href: '/terms' },
            ].map((link) => (
              <li key={link.href}>
                <a href={link.href} className="hover:text-[#FF4444] transition-colors flex items-center justify-center sm:justify-start gap-2 py-0.5">
                  <span className="w-1 h-1 bg-slate-600 rounded-full shrink-0" />
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-start justify-center sm:justify-start gap-3 text-slate-400 text-sm">
            <span className="material-symbols-outlined text-[#FF4444] text-lg shrink-0">schedule</span>
            <span>Open 24/7 — Emergency Callouts Every Day of the Year</span>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto pt-6 sm:pt-8 border-t border-white/5 flex flex-col gap-4">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-slate-500 text-[11px] sm:text-xs text-center sm:text-left">
            © 2026 One Stop Mobile Tyres 24/7. High-Urgency Emergency Roadside Assistance UK. All Rights
            Reserved.
          </p>
          {isContactPage && (
            <p className="text-slate-600 text-[10px] sm:text-[11px] text-center sm:text-right">
              Designed &amp; Developed By{' '}
              <a
                href="https://linkedo.co.uk"
                rel="nofollow noopener noreferrer"
                target="_blank"
                className="text-slate-400 hover:text-[#FF4444] transition-colors font-semibold"
              >
                Linkedo
              </a>
            </p>
          )}
        </div>
      </div>
    </footer>
  )
}
