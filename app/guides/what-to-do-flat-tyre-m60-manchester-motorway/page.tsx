import JsonLd from '@/components/JsonLd'
import { breadcrumbSchema, faqSchema, articleSchema, SITE_URL } from '@/lib/schema'

export const metadata = {
  title: 'Flat Tyre on the M60? What to Do Step by Step',
  description:
    'Flat tyre on the M60? A step-by-step safety guide for Greater Manchester motorway drivers.',
  alternates: { canonical: 'https://onestoptyres247.co.uk/guides/what-to-do-flat-tyre-m60-manchester-motorway' },
}

const SLUG = 'guides/what-to-do-flat-tyre-m60-manchester-motorway'

const _breadcrumbSchema = breadcrumbSchema([
  { name: 'Home', item: SITE_URL },
  { name: 'Guides', item: `${SITE_URL}/guides` },
  { name: 'What to Do If You Get a Flat Tyre on the M60 (or Any Manchester Motorway)', item: `${SITE_URL}/${SLUG}` },
])

const _articleSchema = articleSchema({
  slug: SLUG,
  headline: 'What to Do If You Get a Flat Tyre on the M60 (or Any Manchester Motorway)',
  description:
    'A step-by-step safety guide for drivers who get a flat tyre or blowout on the M60, M62, M56, M61, M602, M66 or M67 — where to stop, who to call, and how mobile tyre fitting gets you moving again.',
  image: `${SITE_URL}/images/tyre-fitting-in-emergency.webp`,
  datePublished: '2026-07-19',
})

const faqs = [
  {
    q: 'Can a mobile tyre fitter change my tyre on the motorway hard shoulder?',
    a: 'Not on a live hard shoulder — no reputable fitter will, because it is genuinely dangerous and often prohibited. What we do instead is guide you to the nearest safe place — a service station, slip road, lay-by or emergency area — and carry out the tyre change there. On smart motorway sections with no hard shoulder, National Highways may need to close the lane and move you first.',
  },
  {
    q: 'Is it illegal to drive on a flat tyre to reach the next junction?',
    a: 'Driving on a flat tyre can count as using a vehicle in a dangerous condition, which risks a fine and penalty points — and it usually destroys the tyre and can damage the wheel too. If the tyre is losing pressure slowly you may be able to reach an exit at reduced speed, but with a rapid deflation or blowout you should stop as soon as it is safe rather than press on.',
  },
  {
    q: 'What if my car has no spare wheel?',
    a: "Most modern cars don't carry one. A sealant kit only works for small tread punctures, not blowouts or sidewall damage. This is exactly the situation mobile tyre fitting exists for — we bring a replacement tyre in the right size to your location and fit it on the spot, so you don't need a recovery truck to a garage.",
  },
  {
    q: 'Should I call National Highways or a tyre fitter first?',
    a: "If you are in a live lane, cannot get off the carriageway, or are on a smart motorway with no hard shoulder, call 999 first if you feel at risk, or National Highways on 0300 123 5000 — they can set overhead signs and close the lane. Once you are somewhere safe, or if you have already reached a service station or lay-by, call a mobile tyre fitter to get the wheel sorted.",
  },
  {
    q: 'How long does it take a mobile fitter to reach the M60?',
    a: 'Our technicians are based around Greater Manchester, so we typically reach locations on or just off the M60 within 20–30 minutes, depending on traffic and which junction you are near. We prioritise motorway breakdowns because we know how exposed you are while waiting.',
  },
  {
    q: 'Do you cover all the Manchester motorways?',
    a: 'Yes — we cover the full M60 ring road plus the M62, M56, M61, M602, M66, M67 and the A627(M), 24 hours a day. Each route has its own coverage page with junction-by-junction details.',
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

const motorwayLinks = [
  { name: 'M60 Ring Road', href: '/mobile-tyre-fitting-m60', detail: 'All 27 junctions of the orbital' },
  { name: 'M62', href: '/mobile-tyre-fitting-m62', detail: 'Trans-Pennine, incl. Birch Services' },
  { name: 'M56', href: '/mobile-tyre-fitting-m56', detail: 'Airport corridor, J1–J15' },
  { name: 'M61', href: '/mobile-tyre-fitting-m61', detail: 'Manchester–Preston, J1–J9' },
  { name: 'M602', href: '/mobile-tyre-fitting-m602', detail: 'Salford relief route' },
  { name: 'M66', href: '/mobile-tyre-fitting-m66', detail: 'Manchester–Ramsbottom' },
  { name: 'M67', href: '/mobile-tyre-fitting-m67', detail: 'Hyde bypass, Denton–Mottram' },
  { name: 'A627(M)', href: '/mobile-tyre-fitting-a627', detail: 'Oldham–Chadderton spur' },
]

export default function FlatTyreMotorwayGuide() {
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
          alt="Emergency mobile tyre fitting attending a flat tyre near a Manchester motorway"
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
            <span className="text-white/70">Flat Tyre on the Motorway</span>
          </nav>
          <span className="inline-flex items-center gap-2 bg-red-600/20 text-red-400 font-bold px-3.5 py-1.5 rounded-full mb-4 text-[11px] uppercase tracking-widest border border-red-600/30">
            Motorway Safety Guide
          </span>
          <h1
            className="text-3xl sm:text-4xl lg:text-5xl text-white font-black mb-3 leading-[1.1]"
            style={{ fontFamily: 'var(--font-work-sans)', letterSpacing: '-0.02em' }}
          >
            What to Do If You Get a Flat Tyre on the M60 (or Any Manchester Motorway)
          </h1>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            The exact steps to take, in order — where to stop, who to call, and how to get
            back on the road without a tow truck.
          </p>
          <p className="text-slate-400 text-sm mt-4">Published 19 July 2026 · 9 min read</p>
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
              If you get a flat tyre on the M60 or any motorway: <strong>slow down gradually,
              signal left, and get off the carriageway</strong> — an exit slip, service area or
              emergency area if you can reach one, the hard shoulder if you can&apos;t. Stop as
              far left as possible, put your hazards on, get everyone out of the left-hand
              doors and behind the barrier, then call for help from there. Never attempt to
              change a wheel yourself on a live motorway.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Once you&apos;re somewhere safe, our 24/7 mobile technicians can come to you and
              repair or replace the tyre on the spot. Call{' '}
              <a href="tel:07759708646" className="text-[#b70011] font-semibold hover:underline">07759 708 646</a>{' '}
              — we prioritise motorway call-outs across Greater Manchester, day and night.
            </p>
          </div>

          <p className="text-slate-600 leading-relaxed mb-6">
            A flat tyre at 70mph is frightening, and the M60 — with its constant traffic,
            smart-motorway sections and closely spaced junctions — is one of the worst places
            in the country for it to happen. The good news: if you follow the right sequence
            of steps, you and your passengers stay safe, and getting moving again is usually
            far quicker and cheaper than people expect. Here&apos;s the full sequence, in order.
          </p>

          {/* Step 1 */}
          <h2
            className="text-2xl sm:text-3xl font-bold text-[#0f172a] mt-10 mb-4"
            style={{ fontFamily: 'var(--font-work-sans)' }}
          >
            Step 1: Keep Control and Slow Down Gradually
          </h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            If the tyre deflates suddenly — or blows out — the car will pull to one side and
            you may hear a loud flapping or rumbling. The instinct is to brake hard.
            Don&apos;t.
          </p>
          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-green-600 mt-0.5 flex-shrink-0">check_circle</span>
              <span className="text-slate-600 leading-relaxed">Grip the wheel firmly with both hands and keep the car straight.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-green-600 mt-0.5 flex-shrink-0">check_circle</span>
              <span className="text-slate-600 leading-relaxed">Ease off the accelerator and let the car slow down on its own — brake only gently once speed has dropped.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-green-600 mt-0.5 flex-shrink-0">check_circle</span>
              <span className="text-slate-600 leading-relaxed">Put your hazard lights on and start moving towards the left-hand lane when it&apos;s clear.</span>
            </li>
          </ul>

          {/* Step 2 */}
          <h2
            className="text-2xl sm:text-3xl font-bold text-[#0f172a] mt-10 mb-4"
            style={{ fontFamily: 'var(--font-work-sans)' }}
          >
            Step 2: Choose the Safest Place You Can Reach
          </h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            In order of preference — take the best option your tyre will allow:
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-left border-collapse text-sm sm:text-base">
              <thead>
                <tr className="border-b-2 border-slate-200">
                  <th className="py-2 pr-4 font-bold text-[#0f172a]">Where to stop</th>
                  <th className="py-2 font-bold text-[#0f172a]">When</th>
                </tr>
              </thead>
              <tbody className="text-slate-600">
                <tr className="border-b border-slate-100">
                  <td className="py-2 pr-4">Leave at the next junction or services</td>
                  <td className="py-2">If the tyre is deflating slowly and the exit is close — reduce speed and use the left lane</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-2 pr-4">Emergency area (orange SOS bay)</td>
                  <td className="py-2">On smart-motorway sections of the M60 and M62 with no hard shoulder — signed every ~1 mile</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-2 pr-4">Hard shoulder, as far left as possible</td>
                  <td className="py-2">If you can&apos;t make an exit — wheels turned left, hazards on</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4">Where you are, in lane</td>
                  <td className="py-2">Only if the car is undriveable — hazards on, stay belted, call 999 immediately</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Step 3 */}
          <h2
            className="text-2xl sm:text-3xl font-bold text-[#0f172a] mt-10 mb-4"
            style={{ fontFamily: 'var(--font-work-sans)' }}
          >
            Step 3: Get Yourself and Your Passengers Safe
          </h2>
          <ol className="space-y-3 mb-6 list-decimal list-inside text-slate-600 leading-relaxed">
            <li>Stop as far to the left as you can, with your wheels turned to the left.</li>
            <li>Keep your hazard lights on; use sidelights too in poor visibility or at night.</li>
            <li>Get everyone out through the <strong>left-hand doors</strong>, away from traffic.</li>
            <li>Move up the bank or behind the safety barrier if there is one, and stand upstream of your car (traffic side facing you) so you can see approaching vehicles.</li>
            <li>Leave pets in the car unless it&apos;s unsafe to do so.</li>
            <li>Do <strong>not</strong> place a warning triangle on a motorway, and do not attempt any wheel change yourself.</li>
          </ol>
          <p className="text-slate-600 leading-relaxed mb-6">
            If you&apos;re stuck in a live lane, cannot leave the vehicle safely, or you&apos;re
            on a smart-motorway stretch with no hard shoulder: stay belted in, keep your
            hazards on, dial <strong>999</strong>. National Highways (0300 123 5000) can also
            close your lane using the overhead signs.
          </p>

          {/* Step 4 */}
          <h2
            className="text-2xl sm:text-3xl font-bold text-[#0f172a] mt-10 mb-4"
            style={{ fontFamily: 'var(--font-work-sans)' }}
          >
            Step 4: Call a Mobile Tyre Fitter — Not Necessarily a Recovery Truck
          </h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Most drivers assume a motorway flat means an expensive tow to a garage. Usually it
            doesn&apos;t. Once you&apos;re at a service station, slip road, lay-by or emergency
            area — or once National Highways has moved you somewhere safe — a mobile
            technician can come to you with the right size tyre and sort it on the spot:
          </p>
          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-[#b70011] mt-0.5 flex-shrink-0">build</span>
              <span className="text-slate-600 leading-relaxed">
                If the damage is a small tread puncture, a proper BS AU 159 repair may be
                possible — see our{' '}
                <a href="/guides/how-to-tell-if-your-tyre-can-be-repaired-or-needs-replacing" className="text-[#b70011] font-semibold hover:underline">
                  guide to whether a tyre can be repaired or needs replacing
                </a>. Motorway-speed blowouts, though, almost always mean replacement.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-[#b70011] mt-0.5 flex-shrink-0">tire_repair</span>
              <span className="text-slate-600 leading-relaxed">
                Our{' '}
                <a href="/mobile-tyre-fitting" className="text-[#b70011] font-semibold hover:underline">
                  mobile tyre fitting service
                </a>{' '}
                carries premium, mid-range and budget tyres and fits the replacement where you
                stand — wheel off, new tyre on, balanced, TPMS checked.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-[#b70011] mt-0.5 flex-shrink-0">schedule</span>
              <span className="text-slate-600 leading-relaxed">
                It&apos;s a genuine{' '}
                <a href="/24-hour-emergency-tyre-fitting" className="text-[#b70011] font-semibold hover:underline">
                  24 hour emergency service
                </a>{' '}
                — a 3am blowout on the M62 gets the same response as a 3pm one.
              </span>
            </li>
          </ul>
          <p className="text-slate-600 leading-relaxed mb-6">
            One honest caveat, because it matters for your safety: <strong>no fitter will
            change a tyre on a live hard shoulder</strong>. If that&apos;s where you are,
            we&apos;ll talk you through reaching the nearest safe stopping point — there&apos;s
            almost always a service area or slip road within a couple of junctions on the
            Manchester network — and meet you there.
          </p>

          {/* Local knowledge */}
          <h2
            className="text-2xl sm:text-3xl font-bold text-[#0f172a] mt-10 mb-4"
            style={{ fontFamily: 'var(--font-work-sans)' }}
          >
            Know Your Road: Safe Stopping Points Around Manchester
          </h2>
          <ul className="space-y-4 mb-6">
            {[
              { t: 'M60 ring road', d: 'No motorway services on the orbital itself, but exits come every mile or two — junctions 1 (Stockport), 12 (Eccles interchange) and 18 (Simister Island) all have fuel stations and retail parks within minutes of the slip road.' },
              { t: 'M62', d: 'Birch Services (between J18 and J19) is the obvious safe haven on the Greater Manchester stretch — we attend it regularly.' },
              { t: 'M56', d: 'Manchester Airport sits between J5 and J6; the terminal approach roads, drop-off areas and business parks all make safe meeting points.' },
              { t: 'M61', d: 'Rivington Services (northbound between J6 and J8) — or drop off at J6 for the Middlebrook retail park at Horwich.' },
              { t: 'M66 / M67 / M602 / A627(M)', d: 'These are short commuter routes — the next exit is never more than a few minutes away, and each leads quickly to town-centre car parks or fuel stations where we can work safely.' },
            ].map((item) => (
              <li key={item.t} className="flex items-start gap-3 bg-slate-50 rounded-xl p-4 border border-slate-100">
                <span className="material-symbols-outlined text-[#b70011] mt-0.5 flex-shrink-0">route</span>
                <div>
                  <p className="font-bold text-[#0f172a]">{item.t}</p>
                  <p className="text-slate-500 text-sm leading-relaxed">{item.d}</p>
                </div>
              </li>
            ))}
          </ul>

          {/* Prevention */}
          <h2
            className="text-2xl sm:text-3xl font-bold text-[#0f172a] mt-10 mb-4"
            style={{ fontFamily: 'var(--font-work-sans)' }}
          >
            Reduce the Odds Before You Join the Motorway
          </h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Most motorway tyre failures start as slow problems that were visible days earlier.
            Before a long run on the M60 or M62:
          </p>
          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-green-600 mt-0.5 flex-shrink-0">check_circle</span>
              <span className="text-slate-600 leading-relaxed">Check pressures when the tyres are cold — underinflation is the biggest cause of high-speed blowouts.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-green-600 mt-0.5 flex-shrink-0">check_circle</span>
              <span className="text-slate-600 leading-relaxed">Look for bulges, cuts and embedded nails or screws — and check tread with the 20p test.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-green-600 mt-0.5 flex-shrink-0">check_circle</span>
              <span className="text-slate-600 leading-relaxed">
                Don&apos;t ignore a TPMS warning light — it usually means a slow puncture. Our{' '}
                <a href="/tpms-reset" className="text-[#b70011] font-semibold hover:underline">TPMS reset service</a>{' '}
                can diagnose the sensor and the tyre together.
              </span>
            </li>
          </ul>

          {/* CTA */}
          <div className="bg-[#0f172a] rounded-2xl p-6 sm:p-8 my-10">
            <h3 className="text-white font-bold text-lg sm:text-xl mb-2" style={{ fontFamily: 'var(--font-work-sans)' }}>
              Stranded on a Manchester motorway right now?
            </h3>
            <p className="text-slate-400 mb-5 leading-relaxed">
              Get somewhere safe first, then call us. Tell us your motorway and nearest
              junction number — we&apos;ll confirm the best meeting point and dispatch the
              nearest technician straight away.
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

      {/* ── MOTORWAY COVERAGE LINKS ──────────────────────────────── */}
      <section className="py-12 sm:py-16 px-5 sm:px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-xl sm:text-2xl font-bold text-[#0f172a] mb-2"
            style={{ fontFamily: 'var(--font-work-sans)' }}
          >
            Our Motorway Coverage Pages
          </h2>
          <p className="text-slate-600 mb-6 leading-relaxed">
            Junction-by-junction details for every motorway we cover around Greater Manchester:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {motorwayLinks.map((m) => (
              <a
                key={m.href}
                href={m.href}
                className="group flex items-center justify-between bg-slate-50 border border-slate-100 rounded-xl p-5 hover:border-[#b70011]/30 hover:shadow-md transition-all"
              >
                <div>
                  <p className="font-bold text-[#0f172a]">{m.name}</p>
                  <p className="text-sm text-slate-500">{m.detail}</p>
                </div>
                <span className="material-symbols-outlined text-slate-400 group-hover:text-[#b70011] group-hover:translate-x-1 transition-all">arrow_forward</span>
              </a>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}
