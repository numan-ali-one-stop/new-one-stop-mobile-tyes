import BrandCarousel from '@/components/BrandCarousel'

/* ── Shared WhatsApp SVG ─────────────────────────────────── */
function WhatsAppIcon() {
  return (
    <svg className="w-5 h-5 fill-current flex-shrink-0" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

/* ── Types ───────────────────────────────────────────────── */
export interface FaqEntry {
  q: string
  a: string
}

export interface ServicePageProps {
  /** The H1 page title, e.g. "Mobile Tyre Fitting" */
  title: string
  /** Short label used in section headings, e.g. "Mobile Tyre Fitting" */
  serviceName: string
  /** Hero subheading paragraph */
  heroSubheading: string
  /** Intro section body */
  introBody: string
  /** Bullet items for "What's Included" */
  included: string[]
  /** Bullet items for "Why Choose Us" */
  whyChooseUs?: string[]
  /** Bullet items for "Benefits" */
  benefits: string[]
  /** Short paragraph for "When You Need This Service" */
  whenYouNeedIt: string
  /** FAQ entries */
  faqs: FaqEntry[]
}

/* ── Reusable sub-components ─────────────────────────────── */
function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <span
            className="material-symbols-outlined text-[#b70011] text-[18px] mt-0.5 shrink-0"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            check_circle
          </span>
          <span className="text-slate-600 text-base leading-relaxed">{item}</span>
        </li>
      ))}
    </ul>
  )
}

function SectionHeading({ label, title }: { label?: string; title: string }) {
  return (
    <div className="mb-8">
      {label && (
        <span className="text-[#b70011] font-bold uppercase tracking-widest text-sm mb-2 block">
          {label}
        </span>
      )}
      <h2
        className="text-2xl sm:text-3xl font-bold text-[#0f172a] leading-tight text-balance"
        style={{ fontFamily: 'var(--font-work-sans)', letterSpacing: '-0.01em' }}
      >
        {title}
      </h2>
    </div>
  )
}

/* ── Main component ──────────────────────────────────────── */
export default function ServicePage({
  title,
  serviceName,
  heroSubheading,
  introBody,
  included,
  whyChooseUs,
  benefits,
  whenYouNeedIt,
  faqs,
}: ServicePageProps) {
  const defaultWhyChooseUs = whyChooseUs ?? [
    '24/7 availability — we never close',
    'Fast Greater Manchester response time',
    'Transparent, upfront pricing with no hidden fees',
    'Experienced, certified technicians',
    'Fully equipped mobile vans',
  ]

  return (
    <div className="text-[#1c1b1b]" style={{ fontFamily: 'var(--font-inter)' }}>
      {/* ── 1. HERO ───────────────────────────────────────── */}
      <section className="relative bg-[#0f172a] overflow-hidden min-h-[480px] lg:min-h-[520px] flex flex-col lg:flex-row">
        <div className="absolute inset-0 lg:left-1/2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="w-full h-full object-cover object-center"
            src="https://ss5vlswhqmiddtca.public.blob.vercel-storage.com/Hero%20section%20image%20for%20one%20stop-airanko-GThUaVjbwZmY4iQO0czB2NrcyiFDuj.webp"
            alt={`One Stop Mobile Tyres 24/7 — ${title}`}
            width={1600}
            height={1067}
            decoding="async"
          />
          <div className="absolute inset-0 bg-[#0f172a]/80 lg:bg-gradient-to-r lg:from-[#0f172a] lg:via-[#0f172a]/40 lg:to-transparent" />
        </div>

        <div className="relative z-10 w-full lg:w-1/2 flex items-center px-5 sm:px-8 py-20 lg:py-28">
          <div className="w-full max-w-lg mx-auto lg:ml-auto lg:mr-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-red-600/20 text-red-400 font-bold px-3.5 py-1.5 rounded-full mb-5 text-[11px] uppercase tracking-widest border border-red-600/30">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
              </span>
              Available 24/7 Across Greater Manchester
            </div>

            <h1
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-white mb-4 leading-[1.1] font-black text-balance"
              style={{ fontFamily: 'var(--font-work-sans)', letterSpacing: '-0.02em' }}
            >
              {title}
            </h1>

            <p className="text-base sm:text-lg text-slate-300 mb-8 leading-relaxed">
              {heroSubheading}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <a
                href="tel:07759708646"
                className="bg-[#FF4444] text-[#121212] font-black px-8 py-4 rounded-xl shadow-2xl shadow-red-900/40 flex items-center justify-center gap-2.5 hover:bg-red-700 hover:text-white transition-all text-base sm:text-lg"
                style={{ fontFamily: 'var(--font-work-sans)' }}
              >
                <span
                  className="material-symbols-outlined text-xl"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  call
                </span>
                07759 708 646
              </a>
              <a
                href="https://wa.me/447759708646"
                className="bg-white/10 border border-white/20 text-white font-black px-8 py-4 rounded-xl flex items-center justify-center gap-2.5 hover:bg-white/20 transition-all text-base sm:text-lg"
                style={{ fontFamily: 'var(--font-work-sans)' }}
              >
                <WhatsAppIcon />
                WHATSAPP US
              </a>
            </div>

            <div className="flex flex-wrap gap-x-6 gap-y-2 text-white/70">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#FF4444] text-[18px]">verified</span>
                <span className="text-sm font-medium">Fully Insured</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#FF4444] text-[18px]">payments</span>
                <span className="text-sm font-medium">Card / Cash Accepted</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. INTRO ──────────────────────────────────────── */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <SectionHeading label="Our Service" title={`Reliable ${serviceName} Service`} />
          <p className="text-slate-600 leading-relaxed text-base sm:text-lg">{introBody}</p>
        </div>
      </section>

      {/* ── 3. SERVICES GRID ─────────────────────────────── */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 sm:mb-16">
            <span className="text-[#b70011] font-bold uppercase tracking-widest text-sm mb-2 block">
              What We Do
            </span>
            <h2
              className="text-2xl sm:text-[32px] font-bold text-slate-900 mb-3 leading-tight"
              style={{ fontFamily: 'var(--font-work-sans)', letterSpacing: '-0.01em' }}
            >
              Professional Roadside Assistance
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-base">
              Comprehensive mobile vehicle support available every day of the year across Greater Manchester.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[
              {
                img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Emergency%20Tyre%20Fitting%20one%20Stop-airanko-gsjvsGamoet8drKwCMHYr6LH5Ni6ZI.webp',
                title: 'Mobile Tyre Fitting',
                desc: 'Emergency replacement at your location within 20-30 minutes.',
                badge: 'FAST RESPONSE',
              },
              {
                img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Home%20Tyre%20Fitting%20One%20Stop-airanko-kPAsyn08SjxXwLwCVhxre5zM9jWBTs.webp',
                title: 'Home Tyre Fitting',
                desc: 'Convenient tyre replacement on your driveway while you work or relax.',
                badge: 'AT YOUR DOOR',
              },
              {
                img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Puncture%20Repair%20One%20Stop-airanko-sfmhLvDbSYmhoMprTVOHCcIWEgJvHf.webp',
                title: 'Emergency Puncture Repair',
                desc: 'Professional plug and patch repair to save your tyre when possible.',
                badge: 'CERTIFIED REPAIR',
              },
              {
                img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/One%20Stop%20Jumpstart%20image-airanko-cXmOrXcdtaIBMNQOMCIOiPj1C290RG.webp',
                title: 'JumpStart',
                desc: 'Fast battery jump-start service to get your vehicle running again without delay.',
                badge: '24/7 SERVICE',
              },
              {
                img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Tyre%20pressure%20monitor-airanko-sjz7PL2Pv4N9jlPWtz5Wa1q8XO0FgP.webp',
                title: 'TPMS Reset',
                desc: 'Tyre pressure monitoring system reset after every tyre change or repair.',
                badge: 'ALL VEHICLES',
              },
              {
                img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Locking%20nut%20removal-airanko%20%281%29-ONBmqaZHMozU0jjrxbPe5J7C4zRQkS.webp',
                title: 'Locking Nut Removal',
                desc: 'Specialist damage-free removal of lost or broken locking wheel nuts.',
                badge: 'DAMAGE FREE',
              },
            ].map((card) => (
              <div
                key={card.title}
                className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all overflow-hidden border-b-4 border-[#b70011]"
              >
                <div className="relative h-44 sm:h-52 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={card.img}
                    alt={card.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    width={600}
                    height={400}
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <span className="absolute top-3 left-3 text-xs font-bold text-white bg-[#b70011] px-3 py-1 rounded-full">
                    {card.badge}
                  </span>
                </div>
                <div className="p-5 sm:p-6">
                  <h3
                    className="text-base sm:text-lg font-semibold mb-2 text-[#0f172a]"
                    style={{ fontFamily: 'var(--font-work-sans)' }}
                  >
                    {card.title}
                  </h3>
                  <p className="text-slate-600 text-base leading-relaxed mb-3">{card.desc}</p>
                  <div className="flex items-center justify-end">
                    <span className="material-symbols-outlined text-slate-400 group-hover:text-[#b70011] group-hover:translate-x-1 transition-all">
                      arrow_forward
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 sm:mt-12 bg-[#0f172a] rounded-2xl sm:rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-5 shadow-2xl text-center sm:text-left">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">Need Immediate Assistance?</h3>
              <p className="text-slate-400 text-base">
                Speak directly to a technician for an instant quote and arrival time.
              </p>
            </div>
            <a
              href="tel:07759708646"
              className="bg-[#FF4444] text-[#121212] font-black px-8 py-4 rounded-xl text-xl sm:text-2xl hover:scale-105 transition-transform shadow-lg shadow-red-900/20 whitespace-nowrap"
              style={{ fontFamily: 'var(--font-work-sans)' }}
            >
              07759 708 646
            </a>
          </div>
        </div>
      </section>

      {/* ── Brand Logos Carousel ─────────────────────────── */}
      <BrandCarousel />

      {/* ── 4. WHAT'S INCLUDED + HOW IT WORKS ────────────── */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* What's Included */}
          <div>
            <SectionHeading title={`What's Included in Our ${serviceName}`} />
            <BulletList items={included} />
          </div>

          {/* How It Works */}
          <div>
            <SectionHeading title="How Our Service Works" />
            <ol className="space-y-5">
              {[
                { n: 1, title: 'Contact Us', desc: 'Call or WhatsApp us anytime — day or night.' },
                { n: 2, title: 'Share Your Location', desc: 'Tell us where you are and we will find you fast.' },
                { n: 3, title: 'Technician Dispatched', desc: 'Our nearest expert is sent to your exact location.' },
                { n: 4, title: 'Service Completed', desc: 'We complete the job on-site so you can get on your way.' },
              ].map((step) => (
                <li key={step.n} className="flex items-start gap-4">
                  <div
                    className="w-9 h-9 bg-[#b70011] rounded-xl flex items-center justify-center text-white font-black text-sm shrink-0"
                    style={{ fontFamily: 'var(--font-work-sans)' }}
                  >
                    {step.n}
                  </div>
                  <div>
                    <span className="font-bold text-[#0f172a] block text-base">{step.title}</span>
                    <p className="text-slate-500 text-base leading-relaxed">{step.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ── 5. WHY CHOOSE US + BENEFITS ─────────────────── */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Why Choose Us */}
          <div>
            <SectionHeading label="The Best Choice" title="Why Choose One Stop Mobile Tyres 24/7" />
            <BulletList items={defaultWhyChooseUs} />
          </div>

          {/* Benefits */}
          <div>
            <SectionHeading title={`Benefits of Choosing Our ${serviceName}`} />
            <BulletList items={benefits} />
          </div>
        </div>
      </section>

      {/* ── 6. WHEN YOU NEED IT ─────────────────────────── */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-[#0f172a] text-white relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
        <div className="max-w-3xl mx-auto relative z-10">
          <span className="text-[#FF4444] font-bold uppercase tracking-widest text-sm mb-2 block">
            Real Scenarios
          </span>
          <h2
            className="text-2xl sm:text-3xl font-bold text-white mb-6 leading-tight text-balance"
            style={{ fontFamily: 'var(--font-work-sans)', letterSpacing: '-0.01em' }}
          >
            When You Might Need {serviceName}
          </h2>
          <p className="text-slate-300 leading-relaxed text-base sm:text-lg">{whenYouNeedIt}</p>
        </div>
      </section>

      {/* ── 7. FAQ ──────────────────────────────────────── */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-slate-50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10 sm:mb-14">
            <span className="text-[#b70011] font-bold uppercase tracking-widest text-sm mb-2 block">
              Common Questions
            </span>
            <h2
              className="text-2xl sm:text-[32px] font-bold text-[#0f172a]"
              style={{ fontFamily: 'var(--font-work-sans)', letterSpacing: '-0.01em' }}
            >
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.q}
                className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200"
              >
                <h3 className="font-bold text-base sm:text-lg text-[#0f172a] mb-3">{faq.q}</h3>
                <p className="text-slate-600 leading-relaxed text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. FINAL CTA ────────────────────────────────── */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-3xl mx-auto bg-[#0f172a] rounded-2xl sm:rounded-3xl p-8 sm:p-12 text-center shadow-2xl">
          <h2
            className="text-2xl sm:text-3xl font-bold text-white mb-4 text-balance"
            style={{ fontFamily: 'var(--font-work-sans)' }}
          >
            Need Immediate Assistance?
          </h2>
          <p className="text-slate-400 mb-8 leading-relaxed">
            Call now and our team will reach you quickly anywhere across Greater Manchester.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:07759708646"
              className="bg-[#FF4444] text-[#121212] font-black px-10 py-4 rounded-xl shadow-lg shadow-red-900/30 flex items-center justify-center gap-2.5 hover:bg-red-700 hover:text-white transition-all text-base sm:text-lg"
              style={{ fontFamily: 'var(--font-work-sans)' }}
            >
              <span
                className="material-symbols-outlined text-xl"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                call
              </span>
              07759 708 646
            </a>
            <a
              href="https://wa.me/447759708646"
              className="bg-white/10 border border-white/20 text-white font-black px-8 py-4 rounded-xl flex items-center justify-center gap-2.5 hover:bg-white/20 transition-all text-base sm:text-lg"
              style={{ fontFamily: 'var(--font-work-sans)' }}
            >
              <WhatsAppIcon />
              WHATSAPP
            </a>
          </div>
        </div>
      </section>

    </div>
  )
}
