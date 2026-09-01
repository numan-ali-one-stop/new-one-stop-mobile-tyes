import JsonLd from '@/components/JsonLd'
import { breadcrumbSchema, faqSchema, articleSchema, SITE_URL } from '@/lib/schema'

export const metadata = {
  title: 'Run-Flat vs Normal Tyres: What Drivers Should Know',
  description:
    'The real difference between run-flat and normal tyres, and what it costs to switch, explained.',
  alternates: { canonical: 'https://onestoptyres247.co.uk/guides/run-flat-vs-normal-tyres-manchester' },
}

const SLUG = 'guides/run-flat-vs-normal-tyres-manchester'

const _breadcrumbSchema = breadcrumbSchema([
  { name: 'Home', item: SITE_URL },
  { name: 'Guides', item: `${SITE_URL}/guides` },
  { name: 'Run-Flat vs Normal Tyres', item: `${SITE_URL}/${SLUG}` },
])

const _articleSchema = articleSchema({
  slug: SLUG,
  headline: 'Run-Flat vs Normal Tyres: What Manchester Drivers Need to Know Before Replacing Theirs',
  description:
    'A plain-English comparison of run-flat and normal tyres — how they differ, whether you can mix them, what a replacement costs, and how to tell which type your car currently has.',
  image: `${SITE_URL}/images/mobile-tyre-fitting-service.webp`,
  datePublished: '2026-07-23',
})

const faqs = [
  {
    q: 'Can I replace a run-flat tyre with a normal tyre?',
    a: "It's technically possible on many cars, but not straightforward. If your car has no spare wheel and no space-saver, fitting normal tyres removes your safety net for a puncture — you would need breakdown cover or a mobile tyre fitter on speed dial. Some manufacturers also tune suspension and TPMS specifically around run-flat sidewalls, so ride quality and warning accuracy can change. We always talk this through with you before fitting.",
  },
  {
    q: 'Do all four tyres need to be the same type?',
    a: 'Yes, this one is not optional. Mixing run-flat and normal tyres on the same axle — or front-to-back on many four-wheel-drive and all-wheel-drive cars — affects handling and is unsafe because the tyres behave differently under load and when damaged. If you are switching type, we replace the full set or at minimum the full axle, and advise you clearly which applies to your car.',
  },
  {
    q: 'How do I know if my car currently has run-flat tyres?',
    a: 'Look at the tyre sidewall for lettering such as ROF (Bridgestone), ZP or "Run Flat" (Michelin), SSR (Continental), ROF or EMT (Goodyear/Dunlop), or the letters RFT. No spare wheel in the boot — just a repair kit or nothing at all — is also a strong hint, though not proof on its own. If you are not sure, send us a photo of the sidewall and we will confirm before you book anything.',
  },
  {
    q: 'Are run-flat tyres more expensive to replace?',
    a: 'Generally yes. Run-flats have reinforced sidewalls, so they cost more to manufacture, and fewer brands and sizes are stocked locally compared with normal tyres. Expect a noticeable price difference for the same brand and size, and sometimes a slightly longer wait if your exact size needs to be sourced.',
  },
  {
    q: 'What happens if a run-flat tyre is damaged beyond its rated distance?',
    a: "Run-flats are designed to be driven, at a reduced speed, for a limited distance after a puncture — typically around 50 miles at up to 50mph, though this varies by brand and model. Beyond that distance or speed, or with sidewall damage, a run-flat is finished and cannot be repaired: the reinforced sidewall that lets it run flat also makes a safe repair impossible in almost all cases. It has to be replaced.",
  },
  {
    q: 'Will switching away from run-flats affect my TPMS warning light?',
    a: "It shouldn't cause a fault, but it is worth having your Tyre Pressure Monitoring System checked at the same time — run-flat sidewalls behave differently under pressure loss, and some systems are calibrated with that in mind. Our technicians include a TPMS check with every fitting, and our TPMS reset service can recalibrate the system if needed.",
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

export default function RunFlatVsNormalGuide() {
  return (
    <div className="text-[#1c1b1b]" style={{ fontFamily: 'var(--font-inter)' }}>
      <JsonLd data={_breadcrumbSchema} />
      <JsonLd data={_articleSchema} />
      <JsonLd data={faqSchema(faqs)} />

      {/* ── HERO ──────────────────────────────────────────────────── */}
      <section className="relative min-h-[360px] sm:min-h-[420px] flex items-end overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/mobile-tyre-fitting-service.webp"
          alt="Mobile tyre fitting technician replacing a tyre in Manchester"
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
            <span className="text-white/70">Run-Flat vs Normal Tyres</span>
          </nav>
          <span className="inline-flex items-center gap-2 bg-red-600/20 text-red-400 font-bold px-3.5 py-1.5 rounded-full mb-4 text-[11px] uppercase tracking-widest border border-red-600/30">
            Buying Guide
          </span>
          <h1
            className="text-3xl sm:text-4xl lg:text-5xl text-white font-black mb-3 leading-[1.1]"
            style={{ fontFamily: 'var(--font-work-sans)', letterSpacing: '-0.02em' }}
          >
            Run-Flat vs Normal Tyres: What Manchester Drivers Need to Know Before Replacing Theirs
          </h1>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            The real difference, whether you can mix them, and what it costs to switch —
            explained without the jargon.
          </p>
          <p className="text-slate-400 text-sm mt-4">Published 23 July 2026 · 7 min read</p>
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
              Run-flat tyres have reinforced sidewalls that let you keep driving — at a reduced
              speed, for a limited distance — after a puncture, so the car needs no spare wheel.
              Normal tyres are lighter, cheaper and more widely stocked, but a puncture usually
              means stopping straight away. You <strong>can</strong> switch from run-flat to
              normal tyres on most cars, but all four tyres must match, and you should check
              what safety net (spare wheel, breakdown cover, or a mobile fitter) replaces the
              run-flat&apos;s "keep driving" ability first.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Not sure which type your car has, or want a straight answer on cost before you
              commit? Call{' '}
              <a href="tel:07759708646" className="text-[#b70011] font-semibold hover:underline">07759 708 646</a>{' '}
              — we&apos;ll check your sidewalls, confirm the right option, and fit at your home,
              work or roadside anywhere in Greater Manchester.
            </p>
          </div>

          <p className="text-slate-600 leading-relaxed mb-6">
            We get this question most often from drivers replacing tyres on BMW, Mini, Mercedes
            and some Audi models, where run-flats are common as standard fitment. The confusion
            is understandable — the two types look almost identical from the outside, but they
            behave very differently the moment something goes wrong. Here&apos;s what actually
            matters when you&apos;re choosing a replacement.
          </p>

          {/* Section 1 */}
          <h2
            className="text-2xl sm:text-3xl font-bold text-[#0f172a] mt-10 mb-4"
            style={{ fontFamily: 'var(--font-work-sans)' }}
          >
            What&apos;s Actually Different About a Run-Flat Tyre?
          </h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            A run-flat tyre has a much stiffer, reinforced sidewall than a normal tyre. When air
            pressure drops to zero, that reinforced sidewall supports the weight of the car
            instead of collapsing, so you can keep driving — usually up to around 50 miles at a
            maximum of 50mph, though the exact limit depends on the brand and model. A normal
            tyre has no such reinforcement, so a full puncture means the tyre collapses onto the
            wheel rim almost immediately, and driving on it any distance damages the tyre and
            often the wheel too.
          </p>
          <p className="text-slate-600 leading-relaxed mb-6">
            Because run-flats provide their own built-in "get you home" capability, cars fitted
            with them from the factory almost always skip the spare wheel entirely to save
            weight and boot space. That single design choice is the main reason switching type
            later needs a bit of thought.
          </p>

          {/* Comparison table */}
          <h2
            className="text-2xl sm:text-3xl font-bold text-[#0f172a] mt-10 mb-4"
            style={{ fontFamily: 'var(--font-work-sans)' }}
          >
            Run-Flat vs Normal: Side by Side
          </h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-left border-collapse text-sm sm:text-base">
              <thead>
                <tr className="border-b-2 border-slate-200">
                  <th className="py-2 pr-4 font-bold text-[#0f172a]">Factor</th>
                  <th className="py-2 pr-4 font-bold text-[#0f172a]">Run-Flat</th>
                  <th className="py-2 font-bold text-[#0f172a]">Normal</th>
                </tr>
              </thead>
              <tbody className="text-slate-600">
                <tr className="border-b border-slate-100">
                  <td className="py-2 pr-4">After a full puncture</td>
                  <td className="py-2 pr-4">Drive on, reduced speed, limited distance</td>
                  <td className="py-2">Stop as soon as safely possible</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-2 pr-4">Spare wheel needed</td>
                  <td className="py-2 pr-4">Usually not fitted</td>
                  <td className="py-2">Often included, or a repair kit</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-2 pr-4">Ride comfort</td>
                  <td className="py-2 pr-4">Firmer, due to stiffer sidewall</td>
                  <td className="py-2">Generally softer</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-2 pr-4">Price &amp; stock availability</td>
                  <td className="py-2 pr-4">Higher cost, fewer sizes in stock</td>
                  <td className="py-2">Wider choice, usually cheaper</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4">Repairable after a puncture?</td>
                  <td className="py-2 pr-4">Almost never — sidewall damage is common</td>
                  <td className="py-2">Often yes, if the puncture qualifies</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-slate-600 leading-relaxed mb-6">
            On that last point — if you&apos;re not sure whether your current tyre can be saved
            with a repair rather than a full replacement, our{' '}
            <a href="/guides/how-to-tell-if-your-tyre-can-be-repaired-or-needs-replacing" className="text-[#b70011] font-semibold hover:underline">
              guide to whether a tyre can be repaired or needs replacing
            </a>{' '}
            covers exactly that.
          </p>

          {/* Section: can you mix */}
          <h2
            className="text-2xl sm:text-3xl font-bold text-[#0f172a] mt-10 mb-4"
            style={{ fontFamily: 'var(--font-work-sans)' }}
          >
            Can You Switch From Run-Flat to Normal Tyres?
          </h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            On the majority of cars, yes — but there are three things to sort out before you do:
          </p>
          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-green-600 mt-0.5 flex-shrink-0">check_circle</span>
              <span className="text-slate-600 leading-relaxed">
                <strong>Replace the full set, not just one or two.</strong> Mixing run-flat and
                normal tyres on the same car — or even the same axle — creates uneven handling
                and is not something we&apos;ll do for safety reasons.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-green-600 mt-0.5 flex-shrink-0">check_circle</span>
              <span className="text-slate-600 leading-relaxed">
                <strong>Sort out your puncture safety net.</strong> Without run-flats, a flat
                tyre means stopping. Consider a space-saver spare if there&apos;s room for one,
                good breakdown cover, or simply knowing a mobile tyre fitter you can call — which
                is exactly the gap our{' '}
                <a href="/mobile-tyre-fitting" className="text-[#b70011] font-semibold hover:underline">
                  mobile tyre fitting service
                </a>{' '}
                is built to fill.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-green-600 mt-0.5 flex-shrink-0">check_circle</span>
              <span className="text-slate-600 leading-relaxed">
                <strong>Check your TPMS setup.</strong> Some systems are calibrated around
                run-flat sidewall behaviour; we include a check with every fitting so your
                warning light stays accurate either way.
              </span>
            </li>
          </ul>
          <p className="text-slate-600 leading-relaxed mb-6">
            We talk every customer through this trade-off before fitting — most drivers who
            switch are simply after cheaper, more widely available tyres and a softer ride, and
            are happy to rely on a mobile fitter instead of a run-flat&apos;s built-in buffer.
          </p>

          {/* Section: cost */}
          <h2
            className="text-2xl sm:text-3xl font-bold text-[#0f172a] mt-10 mb-4"
            style={{ fontFamily: 'var(--font-work-sans)' }}
          >
            What Does It Cost to Replace Run-Flat Tyres?
          </h2>
          <p className="text-slate-600 leading-relaxed mb-6">
            Run-flats typically cost more than a normal tyre of the same brand and size, mainly
            because of the reinforced sidewall construction and lower demand meaning less stock
            is held locally. If budget is the main driver behind switching, our{' '}
            <a href="/cheap-mobile-tyre-fitting" className="text-[#b70011] font-semibold hover:underline">
              cheap mobile tyre fitting service
            </a>{' '}
            covers budget, mid-range and premium options at competitive prices — we&apos;ll give
            you an honest, upfront quote for both a like-for-like run-flat replacement and a
            normal-tyre alternative, so you can decide with the full picture in front of you.
          </p>

          {/* CTA */}
          <div className="bg-[#0f172a] rounded-2xl p-6 sm:p-8 my-10">
            <h3 className="text-white font-bold text-lg sm:text-xl mb-2" style={{ fontFamily: 'var(--font-work-sans)' }}>
              Not sure which tyres your car needs?
            </h3>
            <p className="text-slate-400 mb-5 leading-relaxed">
              Send us your reg or a photo of the tyre sidewall and we&apos;ll confirm what you
              currently have, talk through your options, and give you a straight quote — no
              obligation.
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
