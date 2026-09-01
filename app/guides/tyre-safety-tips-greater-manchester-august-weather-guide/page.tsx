import JsonLd from '@/components/JsonLd'
import { breadcrumbSchema, faqSchema, articleSchema, SITE_URL } from '@/lib/schema'
import { buildMetadata } from '@/lib/seo'

export const metadata = buildMetadata({
  title: 'Tyre Safety Tips for Greater Manchester Drivers',
  description:
    "How Greater Manchester drivers can check their tyres before travelling this August safely.",
  path: '/guides/tyre-safety-tips-greater-manchester-august-weather-guide',
})

const SLUG = 'guides/tyre-safety-tips-greater-manchester-august-weather-guide'

const _breadcrumbSchema = breadcrumbSchema([
  { name: 'Home', item: SITE_URL },
  { name: 'Guides', item: `${SITE_URL}/guides` },
  { name: 'Tyre Safety Tips: August Weather Guide', item: `${SITE_URL}/${SLUG}` },
])

const _articleSchema = articleSchema({
  slug: SLUG,
  headline: 'Why Greater Manchester Drivers Should Check Their Tyres Before Travelling This August',
  description:
    "Changeable August weather is on the way. Here's how Greater Manchester drivers can check their tyres before travelling and avoid breakdowns on wet or dry roads.",
  image: `${SITE_URL}/images/tyre-fitting-in-emergency.webp`,
  datePublished: '2026-08-05',
})

const faqs = [
  {
    q: 'How often should I check my tyre pressure in changeable weather?',
    a: 'Check it at least once a month, and always before a longer trip — ideally when the tyres are cold, since driving warms the air inside and skews the reading.',
  },
  {
    q: 'Why do roads feel more slippery after the first rain following a dry spell?',
    a: 'Oil and dust build up on the road surface during dry weather. The first rain lifts that layer before washing it away, which temporarily reduces grip — good tread depth matters most at exactly this moment.',
  },
  {
    q: 'When should I replace my tyres rather than just topping up pressure?',
    a: "Replace them if tread depth is nearing the legal minimum, wear looks uneven, there's a bulge, crack or other visible damage, or pressure keeps dropping even after you top it up — that usually points to a slow puncture or a fault that a top-up won't fix.",
  },
  {
    q: 'Can I get a tyre replaced without going to a garage?',
    a: "Yes. Our mobile tyre fitting technicians come to your home, workplace or the roadside, so you don't need to build a garage visit into your day.",
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

function Warn({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3">
      <span className="material-symbols-outlined text-[#b70011] mt-0.5 flex-shrink-0">warning</span>
      <span className="text-slate-600 leading-relaxed">{children}</span>
    </li>
  )
}

export default function TyreSafetyAugustWeatherGuide() {
  return (
    <div className="text-[#1c1b1b]" style={{ fontFamily: 'var(--font-inter)' }}>
      <JsonLd data={_breadcrumbSchema} />
      <JsonLd data={_articleSchema} />
      <JsonLd data={faqSchema(faqs)} />

      {/* ── HERO ──────────────────────────────────────────────────── */}
      <section className="relative min-h-[360px] sm:min-h-[420px] flex items-end overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/tyre-fitting-in-emergency.webp"
          alt="Mobile tyre fitting technician changing a tyre beside a car on a Greater Manchester roadside"
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
            <span className="text-white/70">Tyre Safety Tips: August Weather Guide</span>
          </nav>
          <span className="inline-flex items-center gap-2 bg-red-600/20 text-red-400 font-bold px-3.5 py-1.5 rounded-full mb-4 text-[11px] uppercase tracking-widest border border-red-600/30">
            Driving Advice
          </span>
          <h1
            className="text-3xl sm:text-4xl lg:text-5xl text-white font-black mb-3 leading-[1.1]"
            style={{ fontFamily: 'var(--font-work-sans)', letterSpacing: '-0.02em' }}
          >
            Why Greater Manchester Drivers Should Check Their Tyres Before Travelling This August
          </h1>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Changeable August weather is on the way — here&apos;s how to check your tyres before
            you travel and avoid a breakdown on wet or dry roads.
          </p>
          <p className="text-slate-400 text-sm mt-4">Published 5 August 2026 · 5 min read</p>
        </div>
      </section>

      {/* ── ARTICLE BODY ─────────────────────────────────────────── */}
      <article className="py-12 sm:py-16 px-5 sm:px-8 bg-white">
        <div className="max-w-3xl mx-auto">

          <p className="text-slate-600 leading-relaxed mb-6">
            August is shaping up to be a mixed bag — sunshine and showers early on, with warmer,
            drier spells expected later in the month. If you&apos;re planning a summer trip or
            just tackling the daily commute, that kind of unpredictable weather makes tyre
            condition more important than usual.
          </p>
          <p className="text-slate-600 leading-relaxed">
            A few minutes spent checking your tyres before you set off can make the difference
            between a smooth journey and an unexpected breakdown.
          </p>

          {/* Section: how weather affects tyres */}
          <h2
            className="text-2xl sm:text-3xl font-bold text-[#0f172a] mt-10 mb-4"
            style={{ fontFamily: 'var(--font-work-sans)' }}
          >
            How Changing Weather Affects Your Tyres
          </h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            When rain follows a dry spell, roads can actually become more slippery — oil and dust
            build up on the surface over time, and the first rainfall lifts it before washing it
            away. Combine that with worn tread or incorrect pressure, and your stopping distance
            can increase noticeably.
          </p>
          <p className="text-slate-600 leading-relaxed">
            Later in the month, as temperatures climb again, tyre pressure can rise too —
            especially on longer trips with a full car and luggage on board. Getting into the
            habit of checking pressure regularly helps you stay ahead of both extremes.
          </p>

          {/* Section: five quick checks */}
          <h2
            className="text-2xl sm:text-3xl font-bold text-[#0f172a] mt-10 mb-4"
            style={{ fontFamily: 'var(--font-work-sans)' }}
          >
            Five Quick Tyre Checks Before You Travel
          </h2>
          <ol className="space-y-3 mb-4 list-none">
            <Check>Check tyre pressure when tyres are cold — readings taken after driving can be misleading.</Check>
            <Check>Inspect tread depth on all four tyres, not just the ones you can see easily.</Check>
            <Check>Look over the sidewalls for cuts, bulges, or other visible damage.</Check>
            <Check>Check your spare tyre or repair kit so it&apos;s ready if you need it.</Check>
            <Check>Clear any stones or debris lodged in the tread grooves.</Check>
          </ol>
          <p className="text-slate-600 leading-relaxed">
            None of these take more than a few minutes, but together they go a long way toward
            preventing roadside trouble.
          </p>

          {/* Section: when to replace */}
          <h2
            className="text-2xl sm:text-3xl font-bold text-[#0f172a] mt-10 mb-4"
            style={{ fontFamily: 'var(--font-work-sans)' }}
          >
            When Is It Time to Replace Your Tyres?
          </h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            It&apos;s worth booking a replacement if you notice any of the following:
          </p>
          <ul className="space-y-3 mb-6">
            <Warn>Tread depth is approaching the legal minimum.</Warn>
            <Warn>Wear looks uneven across the tyre.</Warn>
            <Warn>There&apos;s a bulge, crack, or other visible damage.</Warn>
            <Warn>Pressure keeps dropping even after topping up.</Warn>
          </ul>
          <p className="text-slate-600 leading-relaxed">
            Driving on tyres in this condition raises your risk of punctures and can affect how
            the car handles, particularly in wet weather.
          </p>

          {/* Section: mobile fitting */}
          <h2
            className="text-2xl sm:text-3xl font-bold text-[#0f172a] mt-10 mb-4"
            style={{ fontFamily: 'var(--font-work-sans)' }}
          >
            Don&apos;t Have Time for a Garage Visit? Mobile Tyre Fitting Comes to You
          </h2>
          <p className="text-slate-600 leading-relaxed">
            Spotted a problem tyre right before a trip? You don&apos;t need to rearrange your day
            around a garage appointment. A{' '}
            <a href="/mobile-tyre-fitting" className="text-[#b70011] font-semibold hover:underline">
              mobile tyre fitting
            </a>{' '}
            technician can come to your home, workplace, or even the roadside to repair or{' '}
            <a href="/emergency-puncture-repair" className="text-[#b70011] font-semibold hover:underline">
              replace the tyre
            </a>{' '}
            on the spot — so you can get back on the road with as little disruption as possible.
          </p>

          {/* Section: bottom line */}
          <h2
            className="text-2xl sm:text-3xl font-bold text-[#0f172a] mt-10 mb-4"
            style={{ fontFamily: 'var(--font-work-sans)' }}
          >
            The Bottom Line
          </h2>
          <p className="text-slate-600 leading-relaxed">
            With changeable weather on the way across Greater Manchester this August, now&apos;s a
            good time to give your tyres a once-over. A quick check today could save you a
            stressful breakdown tomorrow.
          </p>

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
            Not sure whether a damaged tyre can be saved? Our guide on{' '}
            <a href="/guides/how-to-tell-if-your-tyre-can-be-repaired-or-needs-replacing" className="text-[#b70011] font-semibold hover:underline">
              whether a tyre can be repaired or needs replacing
            </a>{' '}
            walks through exactly that. Still have questions about your tyres?{' '}
            <a href="/contact" className="text-[#b70011] font-semibold hover:underline">
              Get in touch
            </a>{' '}
            and we&apos;ll help.
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
