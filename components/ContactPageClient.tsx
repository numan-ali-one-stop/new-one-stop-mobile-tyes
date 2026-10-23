'use client'

import { useState } from 'react'
import { ADDRESS, MAPS_URL } from '@/lib/constants'
import HeroMapBackground from '@/components/HeroMapBackground'
import HeroQuoteSection from '@/components/HeroQuoteSection'
import GoogleReviewsSection from '@/components/GoogleReviewsSection'

export default function ContactPageClient() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [location, setLocation] = useState('')
  const [message, setMessage] = useState('')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const text =
      `*New Enquiry – One Stop Mobile Tyres 24/7*\n\n` +
      `*Name:* ${name}\n` +
      `*Phone:* ${phone}\n` +
      `*Email:* ${email}\n` +
      `*Location/Postcode:* ${location}\n` +
      `*Message:* ${message}`
    window.open(`https://wa.me/447759708646?text=${encodeURIComponent(text)}`, '_blank')
  }

  return (
    <>
      <main className="bg-[#fcf9f8] text-[#1c1b1b]" style={{ fontFamily: 'Inter, sans-serif' }}>

        {/* HERO */}
        <section className="relative bg-[#1c1b1b] py-16 sm:py-24 overflow-hidden">
          <HeroMapBackground />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 text-left [text-shadow:0_1px_3px_rgba(0,0,0,0.9),0_2px_12px_rgba(0,0,0,0.7)] lg:[text-shadow:none]">
            <h1
              className="text-white mb-4 sm:mb-6 uppercase tracking-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.1] font-bold"
              style={{ fontFamily: 'Work Sans, sans-serif' }}
            >
              Contact Us
            </h1>
            <p
              className="text-white lg:text-white/90 max-w-2xl text-base sm:text-lg leading-relaxed"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Get in touch with our team for fast and reliable roadside assistance, wherever
              the road takes you. We operate round the clock to keep you moving.
            </p>
          </div>
        </section>

        {/* INSTANT QUOTE */}
        <HeroQuoteSection />

        {/* GOOGLE REVIEWS */}
        <GoogleReviewsSection />

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

        {/* GET IN TOUCH: contact details + message form */}
        <section id="get-in-touch" className="py-12 sm:py-16 px-4 sm:px-6 max-w-7xl mx-auto">
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
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">

            {/* LEFT: Contact details */}
            <div className="lg:col-span-5 space-y-6 sm:space-y-8">
              <div
                className="bg-white p-6 sm:p-10 rounded-xl border border-slate-100"
                style={{ boxShadow: '0px 4px 20px rgba(0,45,98,0.05)' }}
              >
                <h2
                  className="text-[#1c1b1b] mb-6 sm:mb-8 text-2xl sm:text-3xl lg:text-[32px] leading-tight font-bold"
                  style={{
                    fontFamily: 'Work Sans, sans-serif',
                    letterSpacing: '-0.01em',
                  }}
                >
                  Contact Details
                </h2>
                <div className="space-y-5 sm:space-y-6">
                  {/* Phone */}
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="bg-[#ffdad6] p-2.5 sm:p-3 rounded-lg text-[#b70011] shrink-0">
                      <span aria-hidden="true" data-nosnippet
                        className="material-symbols-outlined text-xl sm:text-2xl"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        phone_in_talk
                      </span>
                    </div>
                    <div className="min-w-0">
                      <p className="text-[#5c403c] mb-1 text-sm font-semibold">
                        Emergency Phone
                      </p>
                      <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                        <p
                          className="text-[#b70011] text-lg sm:text-xl lg:text-2xl font-semibold break-all"
                          style={{ fontFamily: 'Work Sans, sans-serif' }}
                        >
                          07759 708 646
                        </p>
                      </div>
                      <p className="text-xs sm:text-sm text-[#5c403c]">Available 24/7 for urgent calls</p>
                    </div>
                  </div>
                  {/* Email */}
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="bg-[#c8e6ff] p-2.5 sm:p-3 rounded-lg text-[#005f88] shrink-0">
                      <span aria-hidden="true" data-nosnippet
                        className="material-symbols-outlined text-xl sm:text-2xl"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        mail
                      </span>
                    </div>
                    <div className="min-w-0">
                      <p className="text-[#5c403c] mb-1 text-sm font-semibold">
                        Email Support
                      </p>
                      <p
                        className="text-[#1c1b1b] text-base lg:text-lg font-semibold break-all"
                        style={{ fontFamily: 'Work Sans, sans-serif' }}
                      >
                        info@onestoptyres247.co.uk
                      </p>
                      <p className="text-xs sm:text-sm text-[#5c403c]">General inquiries and quotes</p>
                    </div>
                  </div>
                  {/* Coverage */}
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="bg-[#d7e2ff] p-2.5 sm:p-3 rounded-lg text-[#3e5e95] shrink-0">
                      <span aria-hidden="true" data-nosnippet
                        className="material-symbols-outlined text-xl sm:text-2xl"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        location_on
                      </span>
                    </div>
                    <div className="min-w-0">
                      <p className="text-[#5c403c] mb-1 text-sm font-semibold">
                        Our Coverage
                      </p>
                      <p
                        className="text-[#1c1b1b] text-lg sm:text-xl lg:text-2xl font-semibold"
                        style={{ fontFamily: 'Work Sans, sans-serif' }}
                      >
                        Growing UK Coverage
                      </p>
                      <p className="text-xs sm:text-sm text-[#5c403c]">Typically 20-30 min response</p>
                    </div>
                  </div>
                  {/* Address */}
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="bg-[#ffdad6] p-2.5 sm:p-3 rounded-lg text-[#b70011] shrink-0">
                      <span aria-hidden="true" data-nosnippet
                        className="material-symbols-outlined text-xl sm:text-2xl"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        home_pin
                      </span>
                    </div>
                    <div className="min-w-0">
                      <p className="text-[#5c403c] mb-1 text-sm font-semibold">
                        Our Address
                      </p>
                      <a
                        href={MAPS_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#1c1b1b] text-base lg:text-lg font-semibold hover:text-[#b70011] transition-colors inline-block"
                        style={{ fontFamily: 'Work Sans, sans-serif' }}
                      >
                        {ADDRESS}
                      </a>
                    </div>
                  </div>
                </div>

                {/* 24/7 note */}
                <div className="mt-8 sm:mt-12 p-4 sm:p-6 bg-[#f6f3f2] rounded-lg" style={{ borderLeft: '4px solid #b70011' }}>
                  <h3 className="text-[#b70011] mb-2 flex items-center gap-2 text-sm font-semibold">
                    <span aria-hidden="true" data-nosnippet className="material-symbols-outlined text-sm">schedule</span>
                    24/7 EMERGENCY ASSISTANCE
                  </h3>
                  <p className="text-xs sm:text-sm text-[#1c1b1b]">
                    We are fully operational on weekends, bank holidays, and late nights. Don&apos;t
                    hesitate to call anytime.
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT: Contact form */}
            <div className="lg:col-span-7">
              <div
                className="bg-white p-6 sm:p-10 rounded-xl border border-slate-100"
                style={{ boxShadow: '0px 4px 20px rgba(0,45,98,0.05)' }}
              >
                <h2
                  className="text-[#1c1b1b] mb-3 sm:mb-4 text-2xl sm:text-3xl lg:text-[32px] leading-tight font-bold"
                  style={{
                    fontFamily: 'Work Sans, sans-serif',
                    letterSpacing: '-0.01em',
                  }}
                >
                  Send Us a Message
                </h2>
                <p className="text-[#5c403c] mb-6 sm:mb-8 text-base leading-relaxed">
                  For non-urgent inquiries, booking requests, or detailed quotes, please fill out the
                  form below.
                </p>
                <form className="space-y-4 sm:space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label className="block text-[#5c403c] mb-2 text-sm font-semibold">
                        Name
                      </label>
                      <input
                        type="text"
                        placeholder="John Doe"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full p-3 sm:p-4 bg-[#f6f3f2] border border-[#e6bdb8] rounded-lg focus:outline-none focus:border-[#3e5e95] transition-all text-base"
                      />
                    </div>
                    <div>
                      <label className="block text-[#5c403c] mb-2 text-sm font-semibold">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        placeholder="07123 456 789"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full p-3 sm:p-4 bg-[#f6f3f2] border border-[#e6bdb8] rounded-lg focus:outline-none focus:border-[#3e5e95] transition-all text-base"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label className="block text-[#5c403c] mb-2 text-sm font-semibold">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="john@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full p-3 sm:p-4 bg-[#f6f3f2] border border-[#e6bdb8] rounded-lg focus:outline-none focus:border-[#3e5e95] transition-all text-base"
                      />
                    </div>
                    <div>
                      <label className="block text-[#5c403c] mb-2 text-sm font-semibold">
                        Location / Postcode
                      </label>
                      <input
                        type="text"
                        placeholder="E.g. M1 1AA"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        className="w-full p-3 sm:p-4 bg-[#f6f3f2] border border-[#e6bdb8] rounded-lg focus:outline-none focus:border-[#3e5e95] transition-all text-base"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[#5c403c] mb-2 text-sm font-semibold">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Please describe your service requirements..."
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full p-3 sm:p-4 bg-[#f6f3f2] border border-[#e6bdb8] rounded-lg focus:outline-none focus:border-[#3e5e95] transition-all text-base"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full sm:w-auto bg-[#25D366] hover:bg-[#1ebe5d] text-white px-6 sm:px-10 py-3 sm:py-4 rounded-lg active:opacity-80 active:scale-95 transition-all text-base sm:text-xl font-bold flex items-center gap-2"
                    style={{
                      fontFamily: 'Work Sans, sans-serif',
                      letterSpacing: '0.02em',
                    }}
                  >
                    <svg className="w-5 h-5 fill-current shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Send via WhatsApp
                  </button>
                </form>
              </div>
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
