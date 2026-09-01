import Image from 'next/image'
import JsonLd from '@/components/JsonLd'
import { aboutPageSchema, breadcrumbSchema, SITE_URL } from '@/lib/schema'
import { buildMetadata } from '@/lib/seo'
import { ADDRESS } from '@/lib/constants'

export const metadata = buildMetadata({
  title: 'About One Stop Mobile Tyres 24/7 | Mobile Tyre Fitters Manchester',
  description:
    'Meet One Stop Mobile Tyres 24/7 — insured, IMI-trained mobile tyre fitters across Manchester.',
  path: '/about',
})

const _breadcrumbSchema = breadcrumbSchema([
  { name: 'Home', item: SITE_URL },
  { name: 'About Us', item: `${SITE_URL}/about` },
])

export default function AboutPage() {
  return (
    <>
      <JsonLd data={_breadcrumbSchema} />
      <JsonLd data={aboutPageSchema()} />
      <main className="bg-[#fcf9f8] text-[#1c1b1b]" style={{ fontFamily: 'Inter, sans-serif' }}>

        {/* 1. HERO */}
        <section className="relative overflow-hidden py-16 sm:py-24 px-4 sm:px-6 text-center text-white">
          <Image
            src="/images/mobile-tyre-fitting-manchester.webp"
            alt="Mobile tyre fitting technician at work in Greater Manchester"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div
            className="absolute inset-0"
            style={{ backgroundImage: 'linear-gradient(rgba(28,27,27,0.85),rgba(28,27,27,0.85))' }}
          />
          <div className="relative z-10 max-w-4xl mx-auto">
            <h1
              className="mb-4 sm:mb-6 text-white text-3xl sm:text-4xl lg:text-[40px] leading-[1.1] font-bold"
              style={{
                fontFamily: 'Work Sans, sans-serif',
                letterSpacing: '-0.02em',
              }}
            >
              About One Stop Mobile Tyres 24/7
            </h1>
            <p
              className="mb-8 sm:mb-10 text-white/90 text-base sm:text-lg leading-relaxed"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Reliable 24/7 mobile tyre fitting and roadside assistance service across Greater Manchester.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
              <a
                href="tel:07759708646"
                className="flex items-center justify-center gap-2 px-6 sm:px-10 py-3 sm:py-4 rounded-lg uppercase text-white hover:opacity-90 active:scale-95 transition-all text-base sm:text-xl font-bold"
                style={{
                  background: '#dc2626',
                  fontFamily: 'Work Sans, sans-serif',
                  letterSpacing: '0.02em',
                }}
              >
                <span className="material-symbols-outlined text-xl sm:text-2xl">phone_in_talk</span>
                07759 708 646
              </a>
              <a
                href="https://wa.me/447759708646"
                className="flex items-center justify-center gap-2 border-2 border-white text-white px-6 sm:px-10 py-3 sm:py-4 rounded-lg uppercase hover:bg-white hover:text-[#1c1b1b] active:scale-95 transition-all text-base sm:text-xl font-bold"
                style={{
                  fontFamily: 'Work Sans, sans-serif',
                  letterSpacing: '0.02em',
                }}
              >
                <span className="material-symbols-outlined text-xl sm:text-2xl">chat</span>
                WhatsApp Us
              </a>
            </div>
          </div>
        </section>

        {/* 2. COMPANY INTRO & 3. MISSION */}
        <section className="py-12 sm:py-16 px-4 sm:px-6 bg-[#fcf9f8]">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left: text */}
            <div className="space-y-8 sm:space-y-10">
              <div className="space-y-4">
                <h2
                  className="uppercase text-[#b70011] text-2xl sm:text-3xl lg:text-[32px] leading-tight font-bold"
                  style={{
                    fontFamily: 'Work Sans, sans-serif',
                    letterSpacing: '-0.01em',
                  }}
                >
                  Who We Are
                </h2>
                <p className="text-[#5c403c] text-base sm:text-lg leading-relaxed">
                  One Stop Mobile Tyres 24/7 is a premier provider of emergency roadside services, specialized
                  in high-urgency mobile tyre solutions. Our fleet operates round-the-clock across
                  Greater Manchester, ensuring that no driver is ever left stranded for long.
                </p>
                <p className="text-[#5c403c] text-base sm:text-lg leading-relaxed">
                  With a focus on speed, reliability, and technical excellence, we have built a reputation
                  as the Greater Manchester authority in mobile tyre fitting. Our technicians are distributed
                  strategically to reach you within 20–30 minutes, regardless of your location. We&apos;re
                  based at {ADDRESS}.
                </p>
              </div>
              {/* Mission box */}
              <div
                className="bg-[#f0edec] p-6 sm:p-10 rounded-xl shadow-sm"
                style={{ borderLeft: '8px solid #b70011' }}
              >
                <h2
                  className="mb-2 text-[#3e5e95] text-2xl sm:text-3xl lg:text-[32px] leading-tight font-bold"
                  style={{
                    fontFamily: 'Work Sans, sans-serif',
                    letterSpacing: '-0.01em',
                  }}
                >
                  Our Mission
                </h2>
                <p className="italic text-[#1c1b1b] text-base sm:text-lg leading-relaxed">
                  &ldquo;To provide fast, reliable, and professional roadside assistance, ensuring every
                  driver gets back on the road safely and quickly.&rdquo;
                </p>
              </div>
            </div>
            {/* Right: image with badge */}
            <div className="relative pb-6 lg:pb-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/professional-mobile-tyre-fitting.webp"
                alt="Mobile service technician"
                className="rounded-xl shadow-xl w-full object-cover h-[300px] sm:h-[400px] lg:h-[500px]"
                width={800}
                height={600}
                loading="lazy"
                decoding="async"
              />
              <div className="absolute bottom-0 left-2 sm:-bottom-6 sm:-left-6 bg-[#b70011] text-white p-4 sm:p-6 rounded-lg shadow-lg">
                <span className="block text-3xl sm:text-4xl font-black">24/7</span>
                <span className="block uppercase text-xs sm:text-sm font-semibold">
                  Greater Manchester Coverage
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* 4. WHAT WE DO (Bento Grid) */}
        <section className="py-12 sm:py-16 px-4 sm:px-6 bg-[#f6f3f2]">
          <div className="max-w-7xl mx-auto">
            <h2
              className="text-center mb-10 sm:mb-16 text-[#1c1b1b] text-2xl sm:text-3xl lg:text-[32px] leading-tight font-bold"
              style={{
                fontFamily: 'Work Sans, sans-serif',
                letterSpacing: '-0.01em',
              }}
            >
              What We Do
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {[
                { icon: 'tire_repair', title: 'Mobile tyre fitting', desc: 'We bring the tyre shop to you, anywhere in Greater Manchester, at any time of day.' },
                { icon: 'build', title: 'Emergency puncture repair', desc: 'Swift repairs to get you moving without needing a full tyre replacement.' },
                { icon: 'bolt', title: 'Jump start services', desc: 'Flat battery? Our technicians carry professional grade boosters for all vehicles.' },
                { icon: 'settings_input_component', title: 'TPMS reset', desc: 'Electronic sensor calibration to ensure your safety monitoring is accurate.' },
                { icon: 'key', title: 'Locking nut removal', desc: 'Lost your key? We use specialist tools to remove locking nuts without damage.' },
                { icon: 'home', title: 'Home tyre fitting', desc: 'Convenient service at your driveway, tailored to your personal schedule.' },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-white p-6 sm:p-8 rounded-xl shadow-sm border border-[#e6bdb8] hover:border-[#b70011] transition-colors group"
                >
                  <span className="material-symbols-outlined text-[#b70011] mb-3 sm:mb-4 block text-3xl sm:text-4xl">
                    {item.icon}
                  </span>
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
          </div>
        </section>

        {/* 5. WHY CHOOSE US & 6. OUR APPROACH */}
        <section className="py-12 sm:py-16 px-4 sm:px-6 bg-white">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 lg:gap-16">
            {/* Why trust us */}
            <div className="w-full lg:w-1/2">
              <h2
                className="mb-6 sm:mb-10 text-[#1c1b1b] text-2xl sm:text-3xl lg:text-[32px] leading-tight font-bold"
                style={{
                  fontFamily: 'Work Sans, sans-serif',
                  letterSpacing: '-0.01em',
                }}
              >
                Why Drivers Trust Us
              </h2>
              <ul className="space-y-5 sm:space-y-6">
                {[
                  { title: '24/7 Availability', desc: 'Day or night, rain or shine, we are always on call.' },
                  { title: 'Fast Response Across Greater Manchester', desc: 'Average arrival time of 20-30 minutes across Greater Manchester.' },
                  { title: 'Transparent Pricing', desc: 'No hidden fees. Upfront quotes provided before we dispatch.' },
                  { title: 'Experienced Technicians', desc: 'Fully certified experts with years of roadside experience.' },
                ].map((item) => (
                  <li key={item.title} className="flex items-start gap-3 sm:gap-4">
                    <span
                      className="material-symbols-outlined text-[#b70011] shrink-0 text-xl sm:text-2xl"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      check_circle
                    </span>
                    <div>
                      <strong className="block text-[#1c1b1b] text-base font-semibold">
                        {item.title}
                      </strong>
                      <span className="text-[#5c403c] text-base leading-relaxed">
                        {item.desc}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Our Approach */}
            <div className="w-full lg:w-1/2 bg-slate-900 text-white p-6 sm:p-10 rounded-2xl flex flex-col justify-center">
              <h2
                className="mb-4 sm:mb-6 text-2xl sm:text-3xl lg:text-[32px] leading-tight font-bold"
                style={{
                  fontFamily: 'Work Sans, sans-serif',
                  letterSpacing: '-0.01em',
                }}
              >
                Our Approach
              </h2>
              <p className="mb-4 sm:mb-6 opacity-90 text-base sm:text-lg leading-relaxed">
                We prioritize a customer-first mindset. From the second you call us, our dispatch team
                uses real-time GPS tracking to find the closest technician to your location.
              </p>
              <p className="opacity-90 text-base sm:text-lg leading-relaxed">
                Our safety protocols are industry-leading, ensuring that both you and your vehicle are
                handled with professional care. We don&apos;t just fix tyres; we provide peace of mind in
                high-stress situations.
              </p>
              <div className="mt-6 sm:mt-10 flex gap-3 sm:gap-4">
                <div className="flex-1 bg-white/10 p-3 sm:p-4 rounded-lg backdrop-blur-sm">
                  <span className="text-[10px] sm:text-xs uppercase font-bold tracking-widest block mb-1 sm:mb-2 opacity-60">
                    Avg. Response
                  </span>
                  <span className="text-xl sm:text-2xl font-black">20–30 MIN</span>
                </div>
                <div className="flex-1 bg-white/10 p-3 sm:p-4 rounded-lg backdrop-blur-sm">
                  <span className="text-[10px] sm:text-xs uppercase font-bold tracking-widest block mb-1 sm:mb-2 opacity-60">
                    Rating
                  </span>
                  <span className="text-xl sm:text-2xl font-black">5.0/5.0</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. FINAL CTA */}
        <section className="py-12 sm:py-16 px-4 sm:px-6 bg-[#dc2626] text-white text-center">
          <div className="max-w-4xl mx-auto">
            <h2
              className="mb-3 sm:mb-4 text-2xl sm:text-3xl lg:text-[32px] leading-tight font-bold"
              style={{
                fontFamily: 'Work Sans, sans-serif',
                letterSpacing: '-0.01em',
              }}
            >
              Need Immediate Help?
            </h2>
            <p className="mb-6 sm:mb-10 opacity-90 text-base sm:text-lg leading-relaxed">
              Our team is available 24/7 to assist you anywhere across Greater Manchester. Professional help is just
              a phone call away.
            </p>
            <a
              href="tel:07759708646"
              className="inline-flex items-center justify-center gap-2 sm:gap-3 bg-white text-[#b70011] px-6 sm:px-12 py-4 sm:py-5 rounded-lg uppercase shadow-xl hover:bg-slate-100 active:scale-95 transition-all text-sm sm:text-xl font-bold"
              style={{
                fontFamily: 'Work Sans, sans-serif',
                letterSpacing: '0.02em',
              }}
            >
              <span
                className="material-symbols-outlined text-xl sm:text-2xl"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                phone_enabled
              </span>
              07759 708 646
            </a>
          </div>
        </section>


      </main>
    </>
  )
}
