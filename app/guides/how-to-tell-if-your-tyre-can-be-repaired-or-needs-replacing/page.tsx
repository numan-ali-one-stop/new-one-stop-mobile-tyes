import JsonLd from '@/components/JsonLd'
import { breadcrumbSchema, faqSchema, articleSchema, SITE_URL } from '@/lib/schema'

export const metadata = {
  title: 'Tyre Repair or Replace? How to Tell the Difference',
  description:
    'Not sure if your tyre needs repair or replacing? Our quick safety guide explains how to tell.',
  alternates: { canonical: 'https://onestoptyres247.co.uk/guides/how-to-tell-if-your-tyre-can-be-repaired-or-needs-replacing' },
}

const SLUG = 'guides/how-to-tell-if-your-tyre-can-be-repaired-or-needs-replacing'

const _breadcrumbSchema = breadcrumbSchema([
  { name: 'Home', item: SITE_URL },
  { name: 'Guides', item: `${SITE_URL}/guides` },
  { name: 'How to Tell If Your Tyre Can Be Repaired or Needs Replacing', item: `${SITE_URL}/${SLUG}` },
])

const _articleSchema = articleSchema({
  slug: SLUG,
  headline: 'How to Tell If Your Tyre Can Be Repaired or Needs Replacing',
  description:
    'A practical, safety-first guide to checking puncture location, size, tread depth and damage so you know whether your tyre can be repaired or needs replacing.',
  image: `${SITE_URL}/images/tyre-fitting-in-emergency.webp`,
  datePublished: '2026-07-19',
})

const faqs = [
  {
    q: 'Can a tyre with a nail in it always be repaired?',
    a: "Not always. If the nail is in the central tread area, is 6mm or smaller in diameter, and the tyre has no other damage, it can usually be repaired to BS AU 159 standard. A nail in the sidewall or shoulder, or a larger puncture, means the tyre needs replacing.",
  },
  {
    q: 'How much tread depth do I legally need in the UK?',
    a: 'The legal minimum is 1.6mm across the central three-quarters of the tyre width, all the way around. Most garages, including ours, recommend replacing at 3mm because stopping distances increase sharply below that in wet weather.',
  },
  {
    q: 'Can the same tyre be repaired twice?',
    a: "Yes, but only if the new puncture is at least 16cm (roughly 6 inches) away from any existing repair, and the tyre still meets all the other safety criteria. Multiple repairs close together compromise the tyre's structural integrity and mean it should be replaced.",
  },
  {
    q: 'Is a bulge in my tyre dangerous?',
    a: 'Yes. A bulge or blister means the internal casing has been damaged, usually from hitting a pothole or kerb. This cannot be repaired under any circumstances and the tyre needs replacing immediately, as it can burst without warning, even at low speed.',
  },
  {
    q: 'Can run-flat tyres be repaired?',
    a: "Most tyre manufacturers advise against repairing run-flat tyres, because the reinforced sidewall can be damaged internally even after driving on it briefly while flat, without any visible sign. Our technicians will always inspect and advise, but replacement is usually the safer option.",
  },
  {
    q: "Do you repair or replace tyres at my home?",
    a: 'We do both. Our mobile technicians carry the tools to carry out a proper BS AU 159 puncture repair on-site where it is safe to do so, and if your tyre needs replacing instead, we carry a wide range of tyres and can fit a new one at your home, workplace or roadside location.',
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

export default function TyreRepairOrReplaceGuide() {
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
          alt="Technician inspecting a punctured tyre to decide between repair and replacement"
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
            <span className="text-white/70">Tyre Repair or Replace</span>
          </nav>
          <span className="inline-flex items-center gap-2 bg-red-600/20 text-red-400 font-bold px-3.5 py-1.5 rounded-full mb-4 text-[11px] uppercase tracking-widest border border-red-600/30">
            Tyre Safety Guide
          </span>
          <h1
            className="text-3xl sm:text-4xl lg:text-5xl text-white font-black mb-3 leading-[1.1]"
            style={{ fontFamily: 'var(--font-work-sans)', letterSpacing: '-0.02em' }}
          >
            How to Tell If Your Tyre Can Be Repaired or Needs Replacing
          </h1>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            A practical, safety-first checklist you can run through in under five minutes —
            no jargon, just what actually matters.
          </p>
          <p className="text-slate-400 text-sm mt-4">Published 19 July 2026 · 8 min read</p>
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
              A tyre can usually be repaired if the damage is a small puncture (6mm or less)
              in the <strong>central tread area</strong>, the tyre has no other damage, and it
              hasn&apos;t already been repaired nearby. It needs <strong>replacing</strong> if
              the damage is in the sidewall or shoulder, larger than 6mm, if there&apos;s a
              bulge or crack, or if the tread is worn below 3mm.
            </p>
            <p className="text-slate-600 leading-relaxed">
              If you&apos;re not confident checking it yourself, our technicians can inspect
              your tyre at your home, work or roadside location and give you an honest answer
              — repair where it&apos;s safe, replace where it isn&apos;t. Call{' '}
              <a href="tel:07759708646" className="text-[#b70011] font-semibold hover:underline">07759 708 646</a>{' '}
              any time, day or night.
            </p>
          </div>

          <p className="text-slate-600 leading-relaxed mb-6">
            A puncture is one of those problems that always seems to happen at the worst
            possible moment — on the school run, on the way to work, or on a motorway hard
            shoulder. The first question on everyone&apos;s mind is the same: <em>do I need a
            new tyre, or can this one be fixed?</em> The honest answer depends on exactly
            where the damage is, how big it is, and what condition the rest of the tyre is
            in. Here&apos;s how to check it properly.
          </p>

          {/* Section: Where's the damage */}
          <h2
            className="text-2xl sm:text-3xl font-bold text-[#0f172a] mt-10 mb-4"
            style={{ fontFamily: 'var(--font-work-sans)' }}
          >
            1. Where Is the Damage on the Tyre?
          </h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            This is the single biggest factor. A tyre is made up of three zones, and only one
            of them can safely be repaired:
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-left border-collapse text-sm sm:text-base">
              <thead>
                <tr className="border-b-2 border-slate-200">
                  <th className="py-2 pr-4 font-bold text-[#0f172a]">Zone</th>
                  <th className="py-2 font-bold text-[#0f172a]">Can it be repaired?</th>
                </tr>
              </thead>
              <tbody className="text-slate-600">
                <tr className="border-b border-slate-100">
                  <td className="py-2 pr-4">Central tread (middle ~75% of the tyre width)</td>
                  <td className="py-2 text-green-700 font-semibold">Usually, yes</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-2 pr-4">Shoulder (where tread meets sidewall)</td>
                  <td className="py-2 text-red-700 font-semibold">No</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4">Sidewall</td>
                  <td className="py-2 text-red-700 font-semibold">No</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-slate-600 leading-relaxed mb-6">
            The sidewall flexes constantly as you drive, so any repair there is at genuine
            risk of failing without warning. This is why professional repairs — including
            ours — always follow the British Standard <strong>BS AU 159</strong>, which
            restricts repairs to the central tread area only.
          </p>

          {/* Section: How big */}
          <h2
            className="text-2xl sm:text-3xl font-bold text-[#0f172a] mt-10 mb-4"
            style={{ fontFamily: 'var(--font-work-sans)' }}
          >
            2. How Big Is the Puncture?
          </h2>
          <p className="text-slate-600 leading-relaxed mb-6">
            Under BS AU 159, a puncture can only be repaired if the damage is{' '}
            <strong>6mm in diameter or smaller</strong> — roughly the width of a large nail
            or screw. A wider puncture, a cut, or a split in the tread means the internal
            structure of the tyre is too compromised to repair safely, and it will need
            replacing.
          </p>

          {/* Section: Tread depth */}
          <h2
            className="text-2xl sm:text-3xl font-bold text-[#0f172a] mt-10 mb-4"
            style={{ fontFamily: 'var(--font-work-sans)' }}
          >
            3. Check the Tread Depth
          </h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Even a perfectly repairable puncture doesn&apos;t make sense to fix if the tyre
            is nearly worn out anyway. Here&apos;s the quick way to check:
          </p>
          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <span className="text-[#b70011] font-bold mt-1">1.</span>
              <span className="text-slate-600 leading-relaxed">
                Insert a 20p coin into the main tread grooves, at a few points across the tyre.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#b70011] font-bold mt-1">2.</span>
              <span className="text-slate-600 leading-relaxed">
                If the outer band of the coin is still visible, your tread is below the legal
                limit of <strong>1.6mm</strong> and the tyre must be replaced regardless of
                the puncture.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#b70011] font-bold mt-1">3.</span>
              <span className="text-slate-600 leading-relaxed">
                Most professionals, us included, recommend replacing at <strong>3mm</strong>,
                since wet-weather braking distances increase sharply once tread drops below
                that.
              </span>
            </li>
          </ul>

          {/* Section: 7 signs */}
          <h2
            className="text-2xl sm:text-3xl font-bold text-[#0f172a] mt-10 mb-4"
            style={{ fontFamily: 'var(--font-work-sans)' }}
          >
            4. Seven Signs Your Tyre Needs Replacing, Not Repairing
          </h2>
          <ul className="space-y-4 mb-6">
            {[
              { t: 'A bulge or blister on the sidewall', d: 'Means the internal casing is damaged. This can burst without warning and can never be repaired.' },
              { t: 'A cut, split or gash in the tread or sidewall', d: 'Rather than a clean puncture from a nail or screw, wider damage compromises the whole structure.' },
              { t: 'Damage in the shoulder or sidewall area', d: 'Outside the repairable central tread zone, regardless of how small it looks.' },
              { t: 'Tread wear indicators showing', d: 'The small raised bars built into the grooves flush with the tread mean you\'re at the legal limit.' },
              { t: 'A second puncture within 16cm of an existing repair', d: 'Repairs too close together weaken the tyre further and are not considered safe.' },
              { t: 'Exposed steel cords or fabric plies', d: 'If you can see the tyre\'s internal structure through the damage, it is beyond repair.' },
              { t: 'The tyre is over 6-10 years old', d: 'Rubber degrades with age even with good tread remaining — check the date code on the sidewall.' },
            ].map((item) => (
              <li key={item.t} className="flex items-start gap-3 bg-slate-50 rounded-xl p-4 border border-slate-100">
                <span className="material-symbols-outlined text-[#b70011] mt-0.5 flex-shrink-0">cancel</span>
                <div>
                  <p className="font-bold text-[#0f172a]">{item.t}</p>
                  <p className="text-slate-500 text-sm leading-relaxed">{item.d}</p>
                </div>
              </li>
            ))}
          </ul>

          {/* Section: DIY checklist */}
          <h2
            className="text-2xl sm:text-3xl font-bold text-[#0f172a] mt-10 mb-4"
            style={{ fontFamily: 'var(--font-work-sans)' }}
          >
            5. A 5-Minute DIY Check You Can Do Right Now
          </h2>
          <ol className="space-y-3 mb-6 list-decimal list-inside text-slate-600 leading-relaxed">
            <li>Park on level ground and apply the handbrake.</li>
            <li>Walk around the tyre and look for anything embedded — nails, screws or stones.</li>
            <li>Note exactly where the damage is: central tread, shoulder, or sidewall.</li>
            <li>Check for bulges, cracks or cuts anywhere on the tyre, not just where you found the damage.</li>
            <li>Run the 20p coin test at three or four points around the tread.</li>
            <li>If in doubt, don&apos;t drive on it — call a mobile technician to inspect it in place.</li>
          </ol>

          {/* Section: when to call professional */}
          <h2
            className="text-2xl sm:text-3xl font-bold text-[#0f172a] mt-10 mb-4"
            style={{ fontFamily: 'var(--font-work-sans)' }}
          >
            If It Can Be Repaired
          </h2>
          <p className="text-slate-600 leading-relaxed mb-6">
            A professional puncture repair, carried out to BS AU 159 standard, involves
            removing the tyre from the wheel completely to inspect the inside for hidden
            damage, then fitting a combination plug-and-patch that seals the injury from
            both outside and inside the tyre — a proper repair, not a quick plug from
            outside. Our{' '}
            <a href="/emergency-puncture-repair" className="text-[#b70011] font-semibold hover:underline">
              mobile emergency puncture repair service
            </a>{' '}
            carries out exactly this kind of repair at your home, workplace or the roadside,
            with a full TPMS check afterwards so your dashboard warning light clears once
            the job is done.
          </p>

          <h2
            className="text-2xl sm:text-3xl font-bold text-[#0f172a] mt-10 mb-4"
            style={{ fontFamily: 'var(--font-work-sans)' }}
          >
            If It Needs Replacing
          </h2>
          <p className="text-slate-600 leading-relaxed mb-6">
            If your tyre falls into any of the &quot;needs replacing&quot; categories above,
            the good news is you don&apos;t need to go anywhere to sort it. Our{' '}
            <a href="/mobile-tyre-fitting" className="text-[#b70011] font-semibold hover:underline">
              mobile tyre fitting service
            </a>{' '}
            brings a fully equipped van to your home, workplace or roadside location,
            carrying premium, mid-range and budget tyres from leading manufacturers, so we
            can supply and fit a matching replacement on the spot — no tow truck, no
            waiting room, and no need to drive on a tyre that isn&apos;t safe.
          </p>

          <div className="bg-[#0f172a] rounded-2xl p-6 sm:p-8 my-10">
            <h3 className="text-white font-bold text-lg sm:text-xl mb-2" style={{ fontFamily: 'var(--font-work-sans)' }}>
              Not sure which one you need?
            </h3>
            <p className="text-slate-400 mb-5 leading-relaxed">
              Send us a photo on WhatsApp or describe what you can see over the phone —
              we&apos;ll tell you honestly whether it&apos;s a repair or a replacement job,
              and get a technician to you either way.
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

      {/* ── RELATED SERVICES ─────────────────────────────────────── */}
      <section className="py-12 sm:py-16 px-5 sm:px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-xl sm:text-2xl font-bold text-[#0f172a] mb-6"
            style={{ fontFamily: 'var(--font-work-sans)' }}
          >
            Related Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a
              href="/emergency-puncture-repair"
              className="group flex items-center justify-between bg-slate-50 border border-slate-100 rounded-xl p-5 hover:border-[#b70011]/30 hover:shadow-md transition-all"
            >
              <div>
                <p className="font-bold text-[#0f172a]">Emergency Puncture Repair</p>
                <p className="text-sm text-slate-500">BS AU 159 compliant repairs, on-site, 24/7.</p>
              </div>
              <span className="material-symbols-outlined text-slate-400 group-hover:text-[#b70011] group-hover:translate-x-1 transition-all">arrow_forward</span>
            </a>
            <a
              href="/mobile-tyre-fitting"
              className="group flex items-center justify-between bg-slate-50 border border-slate-100 rounded-xl p-5 hover:border-[#b70011]/30 hover:shadow-md transition-all"
            >
              <div>
                <p className="font-bold text-[#0f172a]">Mobile Tyre Fitting</p>
                <p className="text-sm text-slate-500">Replacement tyres fitted at your location, 24/7.</p>
              </div>
              <span className="material-symbols-outlined text-slate-400 group-hover:text-[#b70011] group-hover:translate-x-1 transition-all">arrow_forward</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  )
}
