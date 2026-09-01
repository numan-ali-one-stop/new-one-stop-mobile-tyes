import JsonLd from '@/components/JsonLd'
import { breadcrumbSchema, faqSchema, articleSchema, SITE_URL } from '@/lib/schema'
import { buildMetadata } from '@/lib/seo'

export const metadata = buildMetadata({
  title: 'Met Office Weather Update: Check Your Tyres in Manchester',
  description:
    'Changing August weather across Greater Manchester — why you should check your tyres now.',
  path: '/guides/met-office-august-weather-check-your-tyres',
})

const SLUG = 'guides/met-office-august-weather-check-your-tyres'

const _breadcrumbSchema = breadcrumbSchema([
  { name: 'Home', item: SITE_URL },
  { name: 'Guides', item: `${SITE_URL}/guides` },
  { name: 'Met Office August Weather: Check Your Tyres', item: `${SITE_URL}/${SLUG}` },
])

const _articleSchema = articleSchema({
  slug: SLUG,
  headline: 'Met Office Forecast: Mixed August Weather Means Greater Manchester Drivers Should Check Their Tyres Now',
  description:
    'The latest Met Office forecast points to changing August weather across the UK. Why Greater Manchester drivers should inspect their tyres before travelling, and how mobile tyre fitting can help.',
  image: `${SITE_URL}/images/mobile-tyre-fitting-manchester.webp`,
  datePublished: '2026-08-04',
})

const faqs = [
  {
    q: 'Is it safe to drive after heavy rain following hot weather?',
    a: 'Rain after long dry periods can reduce grip because oil and debris on the road mix with the first rainfall. Extra care and good tyre condition are important.',
  },
  {
    q: 'How often should tyre pressure be checked?',
    a: 'At least once a month and before every long journey.',
  },
  {
    q: 'When should tyres be replaced?',
    a: 'Replace tyres if they have damage, uneven wear or tread approaching the legal limit.',
  },
  {
    q: 'Is mobile tyre fitting available at home?',
    a: 'Yes. Mobile tyre fitting allows tyres to be replaced or repaired at your home, workplace or roadside.',
  },
]

function FaqItem({ q, a }: { q: string; a: string }) {
  return (
    <details className="group bg-white p-4 sm:p-6 rounded-xl border border-slate-200 shadow-sm open:shadow-md transition-all">
      <summary className="list-none flex justify-between items-center cursor-pointer font-bold text-base sm:text-lg text-[#0f172a] gap-3">
        {q}
        <span className="material-symbols-outlined group-open:rotate-180 transition-transform text-[#b70011] flex-shrink-0 text-xl sm:text-2xl">
          expand_more
        </span>
      </summary>
      <p className="mt-3 sm:mt-4 text-slate-600 leading-relaxed text-base">{a}</p>
    </details>
  )
}

function Check({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3">
      <span className="material-symbols-outlined text-green-600 mt-0.5 flex-shrink-0">check_circle</span>
      <span className="text-slate-600 leading-relaxed">{children}</span>
    </li>
  )
}

export default function MetOfficeAugustWeatherGuide() {
  return (
    <div className="text-[#1c1b1b]" style={{ fontFamily: 'var(--font-inter)' }}>
      <JsonLd data={_breadcrumbSchema} />
      <JsonLd data={_articleSchema} />
      <JsonLd data={faqSchema(faqs)} />

      {/* ── HERO ──────────────────────────────────────────────────── */}
      <section className="relative min-h-[360px] sm:min-h-[420px] flex items-end overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/mobile-tyre-fitting-manchester.webp"
          alt="Mobile tyre fitting technician checking a tyre in Greater Manchester"
          className="absolute inset-0 w-full h-full object-cover object-center"
          width={1600}
          height={900}
          decoding="async"
        />
        <div className="absolute inset-0 bg-[#0f172a]/85" />

        <div className="relative z-10 w-full max-w-3xl mx-auto px-5 sm:px-8 py-12 sm:py-16">
          <nav aria-label="Breadcrumb" className="mb-4 text-sm text-slate-300">
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <span className="mx-2">/</span>
            <a href="/guides" className="hover:text-white transition-colors">Guides</a>
            <span className="mx-2">/</span>
            <span className="text-white/70">Met Office August Weather</span>
          </nav>
          <span className="inline-flex items-center gap-2 bg-red-600/20 text-red-400 font-bold px-3.5 py-1.5 rounded-full mb-4 text-[11px] uppercase tracking-widest border border-red-600/30">
            Driving Advice
          </span>
          <h1
            className="text-3xl sm:text-4xl lg:text-5xl text-white font-black mb-3 leading-[1.1]"
            style={{ fontFamily: 'var(--font-work-sans)', letterSpacing: '-0.02em' }}
          >
            Met Office Forecast: Mixed August Weather Means Greater Manchester Drivers Should Check Their Tyres Now
          </h1>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Sunshine, showers and rising temperatures all in the same month — why changeable
            weather makes this the right time for a tyre check.
          </p>
          <p className="text-slate-400 text-sm mt-4">Published 4 August 2026 · 6 min read</p>
        </div>
      </section>

      {/* ── ARTICLE BODY ─────────────────────────────────────────── */}
      <article className="py-12 sm:py-16 px-5 sm:px-8 bg-white">
        <div className="max-w-3xl mx-auto">

          {/* Quick answer box */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 sm:p-6 mb-10">
            <h2
              className="text-lg sm:text-xl font-bold text-[#0f172a] mb-3"
              style={{ fontFamily: 'var(--font-work-sans)' }}
            >
              The Quick Answer
            </h2>
            <p className="text-slate-600 leading-relaxed mb-3">
              The latest Met Office long-range forecast points to a changeable start to August —
              sunshine mixed with showers — with a better chance of warmer, more settled weather
              later in the month. Rain following a dry spell makes roads more slippery than usual,
              while rising temperatures increase tyre pressure and wear. Both make now a sensible
              time to check your tyre pressure, tread depth and general condition before your next
              journey.
            </p>
            <p className="text-slate-600 leading-relaxed">
              If your tyres need attention before you travel, our mobile technicians can fit or
              repair them at your home, workplace or the roadside anywhere across Greater
              Manchester. Call{' '}
              <a href="tel:07759708646" className="text-[#b70011] font-semibold hover:underline">07759 708 646</a>{' '}
              or{' '}
              <a href="https://wa.me/447759708646" className="text-[#b70011] font-semibold hover:underline">WhatsApp us</a>.
            </p>
          </div>

          <p className="text-slate-600 leading-relaxed mb-6">
            As thousands of people continue travelling during the summer holiday season, the
            latest Met Office forecast suggests the UK is entering a period of mixed weather.
            Drivers can expect a combination of sunshine, showers and changing road conditions
            through early August, with warmer weather also possible later in the month.
          </p>
          <p className="text-slate-600 leading-relaxed mb-6">
            For motorists across Greater Manchester, changing weather is more than just an
            inconvenience. Wet roads after long dry spells can become slippery, while warmer
            temperatures increase tyre pressure and accelerate tyre wear. These conditions make a
            simple tyre inspection one of the smartest things you can do before setting off.
          </p>
          <p className="text-slate-600 leading-relaxed">
            Whether you&apos;re commuting to work, heading out on a family holiday or travelling
            across the motorway network, here&apos;s why checking your tyres today could help
            prevent tomorrow&apos;s breakdown.
          </p>

          {/* Section: forecast */}
          <h2
            className="text-2xl sm:text-3xl font-bold text-[#0f172a] mt-10 mb-4"
            style={{ fontFamily: 'var(--font-work-sans)' }}
          >
            What Is the Met Office Forecast Saying?
          </h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            According to the latest long-range forecast, the first part of August will remain
            changeable, bringing periods of sunshine mixed with showers across many parts of the
            UK. As the month progresses, the likelihood of warmer and more settled conditions
            increases, particularly across southern parts of the country.
          </p>
          <p className="text-slate-600 leading-relaxed mb-4">
            For drivers, this means preparing for different road conditions rather than assuming
            every journey will be dry.
          </p>
          <p className="text-slate-600 leading-relaxed">
            Road surfaces can quickly become hazardous when rain follows prolonged dry weather,
            because oil and dirt that have built up on the road mix with the first rainfall,
            reducing grip.
          </p>

          {/* Section: why tyres matter */}
          <h2
            className="text-2xl sm:text-3xl font-bold text-[#0f172a] mt-10 mb-4"
            style={{ fontFamily: 'var(--font-work-sans)' }}
          >
            Why Tyres Matter More During Changing Weather
          </h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Your tyres are the only part of your vehicle touching the road. When weather changes
            rapidly, your tyres play a vital role in:
          </p>
          <ul className="space-y-3 mb-6">
            <Check>Maintaining grip.</Check>
            <Check>Reducing braking distance.</Check>
            <Check>Preventing aquaplaning.</Check>
            <Check>Improving steering control.</Check>
            <Check>Keeping your family safe during long journeys.</Check>
          </ul>
          <p className="text-slate-600 leading-relaxed">
            Even a well-maintained vehicle cannot perform properly if the tyres are worn or
            damaged.
          </p>

          {/* Section: 5 checks */}
          <h2
            className="text-2xl sm:text-3xl font-bold text-[#0f172a] mt-10 mb-4"
            style={{ fontFamily: 'var(--font-work-sans)' }}
          >
            Five Tyre Checks Every Driver Should Complete
          </h2>

          <h3 className="text-xl font-bold text-[#0f172a] mt-6 mb-3" style={{ fontFamily: 'var(--font-work-sans)' }}>
            1. Check Tyre Pressure
          </h3>
          <p className="text-slate-600 leading-relaxed mb-3">
            Long journeys and warmer temperatures affect tyre pressure. Driving with incorrect
            pressure can:
          </p>
          <ul className="space-y-3 mb-4">
            <Check>Increase fuel consumption.</Check>
            <Check>Reduce tyre lifespan.</Check>
            <Check>Affect braking performance.</Check>
            <Check>Make steering less stable.</Check>
          </ul>
          <p className="text-slate-600 leading-relaxed mb-6">
            Always check tyre pressure before a long journey while the tyres are cold.
          </p>

          <h3 className="text-xl font-bold text-[#0f172a] mt-6 mb-3" style={{ fontFamily: 'var(--font-work-sans)' }}>
            2. Inspect Tread Depth
          </h3>
          <p className="text-slate-600 leading-relaxed mb-6">
            The legal minimum tread depth in the UK is 1.6mm, but replacing tyres before reaching
            that limit can improve wet-weather performance. If heavy rain arrives after a dry
            period, deeper tread helps channel water away from the tyre and improves grip.
          </p>

          <h3 className="text-xl font-bold text-[#0f172a] mt-6 mb-3" style={{ fontFamily: 'var(--font-work-sans)' }}>
            3. Look for Damage
          </h3>
          <p className="text-slate-600 leading-relaxed mb-3">
            Walk around your vehicle and inspect each tyre. Watch for:
          </p>
          <ul className="space-y-3 mb-4">
            <Check>Sidewall cracks.</Check>
            <Check>Bulges.</Check>
            <Check>Nails.</Check>
            <Check>Cuts.</Check>
            <Check>Uneven wear.</Check>
          </ul>
          <p className="text-slate-600 leading-relaxed mb-6">
            Ignoring small problems today could lead to a much larger problem on the motorway
            tomorrow.
          </p>

          <h3 className="text-xl font-bold text-[#0f172a] mt-6 mb-3" style={{ fontFamily: 'var(--font-work-sans)' }}>
            4. Don&apos;t Forget the Spare
          </h3>
          <p className="text-slate-600 leading-relaxed mb-3">
            Many drivers never check the spare tyre until they actually need it. Make sure it has:
          </p>
          <ul className="space-y-3 mb-4">
            <Check>Correct pressure.</Check>
            <Check>Good tread.</Check>
            <Check>No visible damage.</Check>
          </ul>
          <p className="text-slate-600 leading-relaxed mb-6">
            If your vehicle has a repair kit instead, confirm it hasn&apos;t expired.
          </p>

          <h3 className="text-xl font-bold text-[#0f172a] mt-6 mb-3" style={{ fontFamily: 'var(--font-work-sans)' }}>
            5. Book a Professional Inspection If You&apos;re Unsure
          </h3>
          <p className="text-slate-600 leading-relaxed mb-6">
            If your tyres show signs of wear or damage, replacing them before travelling is
            usually safer than risking a roadside breakdown. Professional{' '}
            <a href="/mobile-tyre-fitting" className="text-[#b70011] font-semibold hover:underline">
              mobile tyre fitting
            </a>{' '}
            means the work can often be completed at your home, workplace or roadside without
            visiting a garage.
          </p>

          {/* Section: summer heat */}
          <h2
            className="text-2xl sm:text-3xl font-bold text-[#0f172a] mt-10 mb-4"
            style={{ fontFamily: 'var(--font-work-sans)' }}
          >
            Summer Heat Can Also Damage Tyres
          </h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Many people associate tyre problems with winter. In reality, summer creates its own
            challenges.
          </p>
          <p className="text-slate-600 leading-relaxed">
            The UK has experienced several hot periods this year, and the Met Office says warmer
            conditions may return later in August. Higher temperatures increase tyre pressure and
            place additional stress on tyres, particularly during long motorway journeys. If
            you&apos;re carrying passengers, luggage or driving long distances, it&apos;s worth
            checking your tyres before leaving.
          </p>

          {/* Section: planning a journey */}
          <h2
            className="text-2xl sm:text-3xl font-bold text-[#0f172a] mt-10 mb-4"
            style={{ fontFamily: 'var(--font-work-sans)' }}
          >
            Planning a Journey From Greater Manchester?
          </h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            If you&apos;re travelling from Greater Manchester this month, don&apos;t leave tyre
            safety until the last minute. A quick inspection today could help you avoid:
          </p>
          <ul className="space-y-3 mb-6">
            <Check>Unexpected punctures.</Check>
            <Check>Dangerous blowouts.</Check>
            <Check>Delayed holiday plans.</Check>
            <Check>Costly recovery charges.</Check>
            <Check>Time lost waiting for roadside assistance.</Check>
          </ul>

          {/* CTA */}
          <div className="bg-[#0f172a] rounded-2xl p-6 sm:p-8 my-10">
            <h3 className="text-white font-bold text-lg sm:text-xl mb-2" style={{ fontFamily: 'var(--font-work-sans)' }}>
              Need Mobile Tyre Fitting in Greater Manchester?
            </h3>
            <p className="text-slate-400 mb-5 leading-relaxed">
              Tyre problems don&apos;t always happen at home. Whether you&apos;re at work, parked
              outside your house or stranded at the roadside, One Stop Mobile Tyres 24/7 provides
              professional mobile tyre fitting across Greater Manchester. Instead of arranging
              recovery to a garage, our experienced technicians come directly to your location,
              helping you get back on the road quickly and safely.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="tel:07759708646"
                className="bg-[#FF4444] text-[#121212] font-black px-6 py-3.5 rounded-xl flex items-center justify-center gap-2.5 hover:bg-red-700 hover:text-white transition-all text-base"
                style={{ fontFamily: 'var(--font-work-sans)' }}
              >
                <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>call</span>
                07759 708 646
              </a>
              <a
                href="https://wa.me/447759708646"
                className="bg-[#25D366] hover:bg-[#1ebe5d] text-white font-black px-6 py-3.5 rounded-xl flex items-center justify-center gap-2.5 transition-all text-base shadow-lg"
                style={{ fontFamily: 'var(--font-work-sans)' }}
              >
                <svg className="w-5 h-5 fill-current flex-shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp Us
              </a>
            </div>
          </div>

          {/* Related guides */}
          <p className="text-slate-600 leading-relaxed">
            If a check reveals a slow puncture rather than full damage, our guide on{' '}
            <a href="/guides/how-to-tell-if-your-tyre-can-be-repaired-or-needs-replacing" className="text-[#b70011] font-semibold hover:underline">
              whether a tyre can be repaired or needs replacing
            </a>{' '}
            covers exactly that. And if pressure and tread are fine but your dashboard warning
            light won&apos;t clear, our{' '}
            <a href="/tpms-reset" className="text-[#b70011] font-semibold hover:underline">
              TPMS reset service
            </a>{' '}
            can help.
          </p>

        </div>
      </article>

      {/* ── FAQ ───────────────────────────────────────────────────── */}
      <section className="py-12 sm:py-16 px-5 sm:px-8 bg-slate-50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8 sm:mb-10">
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
          <div className="space-y-3 sm:space-y-4">
            {faqs.map((faq) => (
              <FaqItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}
