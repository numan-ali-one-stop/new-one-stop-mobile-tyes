import Image from 'next/image'
import JsonLd from '@/components/JsonLd'
import { aboutPageSchema, breadcrumbSchema, SITE_URL } from '@/lib/schema'
import { buildMetadata } from '@/lib/seo'
import { ADDRESS, MAPS_URL } from '@/lib/constants'

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
    <div className="bg-[#fcf9f8] text-[#1c1b1b] font-body-md">
      <JsonLd data={_breadcrumbSchema} />
      <JsonLd data={aboutPageSchema()} />
      <main>

        {/* ── 1. HERO ───────────────────────────────────────── */}
        <section className="relative min-h-[520px] lg:min-h-[600px] flex items-center justify-start text-left px-4 sm:px-8 lg:px-16 overflow-hidden">
          <Image
            src="/images/professional-mobile-tyre-services-you-can-rely-on-across-greater-manchester.jpg"
            alt="Professional mobile tyre services you can rely on across Greater Manchester"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "linear-gradient(to right, rgba(15, 23, 42, 0.96) 0%, rgba(15, 23, 42, 0.75) 100%)",
            }}
          />
          <div className="relative z-10 max-w-2xl py-20">
            <h1
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-white mb-4 leading-[1.1] font-black text-balance"
              style={{ fontFamily: 'var(--font-work-sans)', letterSpacing: '-0.02em' }}
            >
              About One Stop Mobile Tyres 24/7
            </h1>

            <p className="text-white/80 text-base leading-relaxed mb-6">
              Reliable 24/7 mobile tyre fitting and roadside assistance service across Greater Manchester.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-3">
              <a
                href="tel:07759708646"
                className="bg-[#FF4444] text-[#121212] font-black px-8 py-4 rounded-xl shadow-2xl shadow-red-900/40 flex items-center justify-center gap-2.5 hover:bg-red-700 hover:text-white transition-all text-base sm:text-lg"
                style={{ fontFamily: 'var(--font-work-sans)' }}
              >
                <span aria-hidden="true" data-nosnippet className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>call</span>
                07759 708 646
              </a>
              <a
                href="tel:01613995851"
                className="bg-[#FF4444] text-[#121212] font-black px-8 py-4 rounded-xl shadow-2xl shadow-red-900/40 flex items-center justify-center gap-2.5 hover:bg-red-700 hover:text-white transition-all text-base sm:text-lg"
                style={{ fontFamily: 'var(--font-work-sans)' }}
              >
                <span aria-hidden="true" data-nosnippet className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>call</span>
                0161 399 5851
              </a>
              <a
                href="https://wa.me/447759708646"
                className="bg-[#25D366] hover:bg-[#1ebe5d] text-white font-black px-8 py-4 rounded-xl flex items-center justify-center gap-2.5 transition-all text-base sm:text-lg shadow-lg shadow-green-900/20"
                style={{ fontFamily: 'var(--font-work-sans)' }}
              >
                <svg className="w-5 h-5 fill-current flex-shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp Us
              </a>
            </div>
          </div>
        </section>

        {/* ── 2. WHO WE ARE ─────────────────────────────────── */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
            <div className="w-full lg:w-1/2 relative pb-8 sm:pb-10">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="relative z-10 rounded-2xl sm:rounded-3xl shadow-2xl border-4 sm:border-8 border-slate-50 w-full object-cover"
                src="/images/meet-the-team-providing-reliable-mobile-tyre-services-across-greater-manchester.jpg"
                alt="Meet the team providing reliable mobile tyre services across Greater Manchester"
                width={800}
                height={600}
                loading="lazy"
                decoding="async"
              />
              <div className="absolute bottom-2 right-2 sm:-bottom-2 sm:-right-2 bg-[#b70011] text-white p-4 sm:p-5 rounded-xl sm:rounded-2xl shadow-2xl z-20">
                <span className="block text-3xl sm:text-4xl font-black leading-none">24/7</span>
                <span className="block uppercase text-[11px] font-semibold tracking-wide">
                  Greater Manchester Coverage
                </span>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <span className="text-[#b70011] font-bold uppercase tracking-widest text-sm mb-3 block">
                Who We Are
              </span>
              <h2
                className="text-2xl sm:text-4xl lg:text-5xl text-[#0f172a] mb-5 sm:mb-8 leading-tight font-bold"
                style={{ fontFamily: 'var(--font-work-sans)' }}
              >
                A Premier Mobile Tyre Service Across Greater Manchester
              </h2>
              <p className="text-slate-600 mb-4 leading-relaxed text-base sm:text-lg">
                One Stop Mobile Tyres 24/7 is a premier provider of emergency roadside services, specialised in high-urgency mobile tyre solutions. Our fleet operates round-the-clock across Greater Manchester, ensuring that no driver is ever left stranded for long.
              </p>
              <p className="text-slate-600 mb-6 sm:mb-8 leading-relaxed text-base sm:text-lg">
                With a focus on speed, reliability and technical excellence, we have built a reputation as the Greater Manchester authority in mobile tyre fitting. Our technicians are distributed strategically to reach you within 20–30 minutes, regardless of your location. We&apos;re based at{' '}
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#b70011] font-semibold hover:underline"
                >
                  {ADDRESS}
                </a>.
              </p>
              <div
                className="bg-[#f0edec] p-6 sm:p-8 rounded-xl"
                style={{ borderLeft: '8px solid #b70011' }}
              >
                <h3
                  className="text-[#0f172a] mb-2 text-xl sm:text-2xl leading-tight font-bold"
                  style={{ fontFamily: 'var(--font-work-sans)' }}
                >
                  Our Mission
                </h3>
                <p className="italic text-[#5c403c] text-base leading-relaxed">
                  &ldquo;To provide fast, reliable, and professional roadside assistance, ensuring every
                  driver gets back on the road safely and quickly.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── 3. WHAT WE DO ─────────────────────────────────── */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10 sm:mb-16">
              <span className="text-[#b70011] font-bold uppercase tracking-widest text-sm mb-2 block">
                Our Services
              </span>
              <h2
                className="text-2xl sm:text-[32px] font-bold text-[#0f172a] mb-3 leading-tight"
                style={{ fontFamily: 'var(--font-work-sans)' }}
              >
                What We Do
              </h2>
            </div>
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
                  className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border-b-4 border-[#b70011]"
                >
                  <span aria-hidden="true" data-nosnippet className="material-symbols-outlined text-[#b70011] mb-3 sm:mb-4 block text-3xl sm:text-4xl">
                    {item.icon}
                  </span>
                  <h3
                    className="mb-2 text-[#0f172a] text-xl sm:text-2xl leading-tight font-semibold"
                    style={{ fontFamily: 'var(--font-work-sans)' }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-base leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 4. WHY DRIVERS TRUST US & OUR APPROACH ────────── */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 bg-white">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 lg:gap-16">
            {/* Why trust us */}
            <div className="w-full lg:w-1/2">
              <h2
                className="mb-6 sm:mb-10 text-[#0f172a] text-2xl sm:text-3xl lg:text-[32px] leading-tight font-bold"
                style={{ fontFamily: 'var(--font-work-sans)' }}
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
                    <span aria-hidden="true" data-nosnippet
                      className="material-symbols-outlined text-[#b70011] shrink-0 text-xl sm:text-2xl"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      check_circle
                    </span>
                    <div>
                      <strong className="block text-[#0f172a] text-base font-semibold">
                        {item.title}
                      </strong>
                      <span className="text-slate-600 text-base leading-relaxed">
                        {item.desc}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Our Approach */}
            <div className="w-full lg:w-1/2 bg-[#0f172a] text-white p-6 sm:p-10 rounded-2xl flex flex-col justify-center">
              <h2
                className="mb-4 sm:mb-6 text-2xl sm:text-3xl lg:text-[32px] leading-tight font-bold"
                style={{ fontFamily: 'var(--font-work-sans)' }}
              >
                Our Approach
              </h2>
              <p className="mb-4 sm:mb-6 text-white/80 text-base sm:text-lg leading-relaxed">
                We prioritize a customer-first mindset. From the second you call us, our dispatch team
                uses real-time GPS tracking to find the closest technician to your location.
              </p>
              <p className="text-white/80 text-base sm:text-lg leading-relaxed">
                Our safety protocols are industry-leading, ensuring that both you and your vehicle are
                handled with professional care. We don&apos;t just fix tyres; we provide peace of mind in
                high-stress situations.
              </p>
              <div className="mt-6 sm:mt-10 flex gap-3 sm:gap-4">
                <div className="flex-1 bg-white/10 p-3 sm:p-4 rounded-lg backdrop-blur-sm">
                  <span className="text-[10px] sm:text-xs uppercase font-bold tracking-widest block mb-1 sm:mb-2 text-white/60">
                    Avg. Response
                  </span>
                  <span className="text-xl sm:text-2xl font-black">20–30 MIN</span>
                </div>
                <div className="flex-1 bg-white/10 p-3 sm:p-4 rounded-lg backdrop-blur-sm">
                  <span className="text-[10px] sm:text-xs uppercase font-bold tracking-widest block mb-1 sm:mb-2 text-white/60">
                    Rating
                  </span>
                  <span className="text-xl sm:text-2xl font-black">5.0/5.0</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 5. FINAL CTA ───────────────────────────────────── */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-[#f0edec] relative">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-h2 text-xl sm:text-2xl lg:text-h2 mb-4 sm:mb-5 leading-tight">Need Immediate Help?</h2>
            <p className="font-body-lg text-base lg:text-lg text-[#5c403c] leading-relaxed mb-6 sm:mb-8">
              Our team is available 24/7 to assist you anywhere across Greater Manchester. Professional help is just a phone call away.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center mt-4 sm:mt-6">
              <a
                className="flex items-center justify-center gap-2 sm:gap-3 bg-[#dc2626] hover:bg-[#b70011] text-white px-6 sm:px-10 py-4 sm:py-5 rounded-lg font-call-to-action text-base transition-all shadow-xl"
                href="tel:07759708646"
              >
                <span aria-hidden="true" data-nosnippet className="material-symbols-outlined text-xl sm:text-2xl">phone_in_talk</span>
                07759 708 646
              </a>
              <a
                className="flex items-center justify-center gap-2 sm:gap-3 bg-[#dc2626] hover:bg-[#b70011] text-white px-6 sm:px-10 py-4 sm:py-5 rounded-lg font-call-to-action text-base transition-all shadow-xl"
                href="tel:01613995851"
              >
                <span aria-hidden="true" data-nosnippet className="material-symbols-outlined text-xl sm:text-2xl">phone_in_talk</span>
                0161 399 5851
              </a>
            </div>
          </div>
        </section>

      </main>
    </div>
  )
}
