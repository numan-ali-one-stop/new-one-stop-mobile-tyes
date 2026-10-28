'use client'

import { ADDRESS, MAPS_URL } from '@/lib/constants'
import HeroMapBackground from '@/components/HeroMapBackground'
import HeroQuoteSection from '@/components/HeroQuoteSection'
import GoogleReviewsSection from '@/components/GoogleReviewsSection'
import HeroBadge from '@/components/HeroBadge'
import HeroCtaButtons from '@/components/HeroCtaButtons'
import HeroRatingBadge from '@/components/HeroRatingBadge'
import ServicesSection from '@/components/ServicesSection'

export default function ContactPageClient() {
  return (
    <>
      <main className="bg-[#fcf9f8] text-[#1c1b1b]" style={{ fontFamily: 'Inter, sans-serif' }}>

        {/* HERO */}
        <section className="relative lg:min-h-[600px] flex items-center justify-start text-left px-4 sm:px-8 lg:px-16 overflow-hidden">
          <HeroMapBackground />

          <div className="relative z-10 w-full max-w-2xl py-10 sm:py-14 lg:py-20 [text-shadow:0_1px_3px_rgba(0,0,0,0.9),0_2px_12px_rgba(0,0,0,0.7)] lg:[text-shadow:none]">
            <div>
              <HeroBadge>24/7 Emergency Mobile Tyre Service</HeroBadge>
            </div>
            <h1
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-white font-black mb-4 sm:mb-5 leading-[1.1] text-balance"
              style={{ fontFamily: 'var(--font-work-sans)', letterSpacing: '-0.02em' }}
            >
              Contact Us
            </h1>

            <p className="text-white/95 lg:text-white/80 text-base sm:text-lg leading-relaxed mb-5 sm:mb-6">
              Call us now and we will arrange for a recovery technician to come to your location, 24/7.
            </p>

            {/* Google rating */}
            <HeroRatingBadge />

            <HeroCtaButtons />
          </div>
        </section>

        {/* INSTANT QUOTE */}
        <HeroQuoteSection />

        {/* GOOGLE REVIEWS */}
        <GoogleReviewsSection bg="bg-white" />

        {/* OUR SERVICES */}
        <ServicesSection />

        {/* WHY CONTACT US */}
        <section className="py-12 sm:py-16 bg-white px-4 sm:px-6">
          <div className="max-w-7xl mx-auto text-center mb-10 sm:mb-16">
            <h2
              className="text-[#1c1b1b] mb-4 text-2xl sm:text-3xl lg:text-[32px] leading-tight font-bold"
              style={{
                fontFamily: 'Work Sans, sans-serif',
                letterSpacing: '-0.01em',
              }}
            >
              Why Contact One Stop Mobile Tyres 24/7
            </h2>
            <div className="h-1 w-24 bg-[#b70011] mx-auto rounded-full" />
          </div>
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {[
              { icon: 'emergency_home', title: '24/7 Support', desc: 'Around the clock emergency support, 365 days a year.' },
              { icon: 'speed', title: 'Fast Response', desc: 'Rapid local response, typically arriving within 20-30 minutes.' },
              { icon: 'engineering', title: 'Professional', desc: 'Expert technicians equipped with modern diagnostic tools.' },
              { icon: 'verified', title: 'Reliable', desc: 'Consistent, high-quality service you can trust every time.' },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white p-6 sm:p-8 rounded-xl border-t-4 border-[#b70011]"
                style={{ boxShadow: '0px 4px 20px rgba(0,45,98,0.05)' }}
              >
                <div className="text-[#b70011] mb-3 sm:mb-4">
                  <span aria-hidden="true" data-nosnippet className="material-symbols-outlined text-3xl sm:text-4xl">
                    {item.icon}
                  </span>
                </div>
                <h3
                  className="mb-2 text-[#1c1b1b] text-xl sm:text-2xl leading-tight font-semibold"
                  style={{ fontFamily: 'Work Sans, sans-serif' }}
                >
                  {item.title}
                </h3>
                <p className="text-[#5c403c] text-base leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* GET IN TOUCH */}
        <section id="get-in-touch" className="py-12 sm:py-16 px-4 sm:px-6 bg-slate-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10 sm:mb-12">
              <h2
                className="text-[#1c1b1b] mb-4 text-2xl sm:text-3xl lg:text-[32px] leading-tight font-bold"
                style={{
                  fontFamily: 'Work Sans, sans-serif',
                  letterSpacing: '-0.01em',
                }}
              >
                Get In Touch
              </h2>
              <div className="h-1 w-24 bg-[#b70011] mx-auto rounded-full" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {[
                { icon: 'phone_in_talk', iconClass: 'bg-[#ffdad6] text-[#b70011]', label: 'Emergency Phone', value: '07759 708 646', href: 'tel:+447759708646', note: 'Available 24/7 for urgent calls', valueClass: 'text-[#b70011] text-xl sm:text-2xl' },
                { icon: 'mail', iconClass: 'bg-[#c8e6ff] text-[#005f88]', label: 'Email Support', value: 'info@onestoptyres247.co.uk', href: 'mailto:info@onestoptyres247.co.uk', note: 'General inquiries and quotes', valueClass: 'text-[#1c1b1b] text-base break-all' },
                { icon: 'location_on', iconClass: 'bg-[#d7e2ff] text-[#3e5e95]', label: 'Our Coverage', value: 'Growing UK Coverage', note: 'Typically 20-30 min response', valueClass: 'text-[#1c1b1b] text-lg sm:text-xl' },
                { icon: 'home_pin', iconClass: 'bg-[#ffdad6] text-[#b70011]', label: 'Our Address', value: ADDRESS, href: MAPS_URL, external: true, valueClass: 'text-[#1c1b1b] text-base' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="bg-white p-6 sm:p-8 rounded-xl border border-slate-200 shadow-sm flex flex-col items-center text-center"
                  style={{ boxShadow: '0px 4px 20px rgba(0,45,98,0.05)' }}
                >
                  <div className={`${item.iconClass} p-3 rounded-lg mb-4`}>
                    <span aria-hidden="true" data-nosnippet
                      className="material-symbols-outlined text-2xl"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      {item.icon}
                    </span>
                  </div>
                  <p className="text-[#5c403c] mb-1 text-sm font-semibold">{item.label}</p>
                  {item.href ? (
                    <a
                      href={item.href}
                      {...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                      className={`${item.valueClass} font-semibold hover:text-[#b70011] transition-colors`}
                      style={{ fontFamily: 'Work Sans, sans-serif' }}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className={`${item.valueClass} font-semibold`} style={{ fontFamily: 'Work Sans, sans-serif' }}>
                      {item.value}
                    </p>
                  )}
                  {item.note && <p className="text-xs sm:text-sm text-[#5c403c] mt-1">{item.note}</p>}
                </div>
              ))}
            </div>

            {/* 24/7 note */}
            <div className="mt-8 sm:mt-10 max-w-3xl mx-auto p-5 sm:p-6 bg-[#f6f3f2] rounded-xl border-t-4 border-[#b70011] text-center">
              <h3 className="text-[#b70011] mb-2 flex items-center justify-center gap-2 text-sm font-semibold">
                <span aria-hidden="true" data-nosnippet className="material-symbols-outlined text-sm">schedule</span>
                24/7 EMERGENCY ASSISTANCE
              </h3>
              <p className="text-sm sm:text-base text-[#1c1b1b]">
                We are fully operational on weekends, bank holidays, and late nights. Don&apos;t
                hesitate to call anytime.
              </p>
            </div>
          </div>
        </section>

        {/* MAP */}
        <section className="py-12 sm:py-16 px-4 sm:px-6 bg-[#f6f3f2]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8 sm:mb-10">
              <h2
                className="text-[#1c1b1b] mb-4 text-2xl sm:text-3xl lg:text-[32px] leading-tight font-bold"
                style={{
                  fontFamily: 'Work Sans, sans-serif',
                  letterSpacing: '-0.01em',
                }}
              >
                Find Us
              </h2>
              <div className="h-1 w-24 bg-[#b70011] mx-auto rounded-full mb-4" />
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#5c403c] text-base hover:text-[#b70011] transition-colors"
              >
                {ADDRESS}
              </a>
            </div>
            <div
              className="h-72 sm:h-96 lg:h-[28rem] rounded-xl overflow-hidden border border-slate-100"
              style={{ boxShadow: '0px 4px 20px rgba(0,45,98,0.05)' }}
            >
              <iframe
                className="w-full h-full"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4741.379474172151!2d-2.1049285233703974!3d53.5454538598072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bb920bfb7fecd%3A0x4edbef2355697975!2sOne%20Stop%20Mobile%20Tyres%2024%2F7!5e0!3m2!1sen!2s!4v1781464116347!5m2!1sen!2s"
                frameBorder="0"
                scrolling="no"
                title="One Stop Mobile Tyres 24/7 service area map"
                aria-label="Google map showing One Stop Mobile Tyres 24/7 service area across Greater Manchester"
                loading="lazy"
              />
            </div>
          </div>
        </section>

      </main>
    </>
  )
}
