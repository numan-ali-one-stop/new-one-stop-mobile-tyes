'use client'

import { useId, useState, type FormEvent } from 'react'
import { PHONE, PHONE_TEL } from '@/lib/constants'

interface QuickQuoteFormProps {
  /** "hero" = compact card above the fold; "section" = full-width block under the FAQ. */
  variant?: 'hero' | 'section'
  /** Area the page is about, e.g. "Bolton" — included in the message and the tracking event. */
  area?: string
  /** Overrides the section heading, e.g. "Get a Tyre Quote on the M60". */
  heading?: string
}

type DataLayerWindow = Window & { dataLayer?: Record<string, unknown>[] }

/**
 * Short quote form: reg or tyre size, postcode, phone. Submitting pushes a `quote_form_submit`
 * event to the dataLayer (set this up as a conversion in GTM) and opens WhatsApp with the details,
 * matching how the site's other enquiry forms deliver leads.
 */
export default function QuickQuoteForm({ variant = 'section', area, heading }: QuickQuoteFormProps) {
  const id = useId()
  const [vehicle, setVehicle] = useState('')
  const [postcode, setPostcode] = useState('')
  const [phone, setPhone] = useState('')
  const [sent, setSent] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const w = window as DataLayerWindow
    w.dataLayer = w.dataLayer || []
    w.dataLayer.push({
      event: 'quote_form_submit',
      form_location: variant,
      form_area: area ?? '',
      page_path: window.location.pathname,
    })

    const text =
      `New quote request – One Stop Mobile Tyres 24/7\n\n` +
      `Reg / tyre size: ${vehicle.trim()}\n` +
      `Postcode: ${postcode.trim().toUpperCase()}\n` +
      `Phone: ${phone.trim()}` +
      (area ? `\nPage: ${area}` : '')
    window.open(`https://wa.me/447759708646?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer')
    setSent(true)
  }

  const isHero = variant === 'hero'
  const label = isHero ? 'block text-xs font-bold text-white/80 mb-1.5' : 'block text-sm font-bold text-[#0f172a] mb-2'
  const input = isHero
    ? 'w-full rounded-lg bg-white text-[#0f172a] placeholder:text-slate-400 px-3.5 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF4444]'
    : 'w-full border border-slate-200 rounded-xl px-4 py-3.5 bg-white text-[#0f172a] placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#b70011] focus:border-[#b70011] transition'

  const confirmation = (
    <div role="status" className={isHero ? 'text-white' : 'text-[#0f172a]'}>
      <p className="font-bold text-base mb-1">Thanks, WhatsApp should now be open with your details.</p>
      <p className={`text-sm ${isHero ? 'text-white/80' : 'text-slate-600'}`}>
        Press send and we&apos;ll reply with a quote. Prefer to talk?{' '}
        <a href={`tel:${PHONE_TEL}`} className={`font-bold underline ${isHero ? 'text-white' : 'text-[#b70011]'}`}>
          Call {PHONE}
        </a>
        .
      </p>
      <button
        type="button"
        onClick={() => setSent(false)}
        className={`mt-3 text-sm font-semibold underline ${isHero ? 'text-white/80' : 'text-slate-500'}`}
      >
        Edit details
      </button>
    </div>
  )

  const form = (
    <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4" aria-label="Get a quick tyre quote">
      <div className={`grid grid-cols-1 ${isHero ? 'sm:grid-cols-3 gap-3' : 'sm:grid-cols-3 gap-4'}`}>
        <div>
          <label htmlFor={`${id}-vehicle`} className={label}>Reg or tyre size</label>
          <input
            id={`${id}-vehicle`}
            name="vehicle"
            type="text"
            required
            autoComplete="off"
            placeholder="AB12 CDE or 205/55 R16"
            value={vehicle}
            onChange={(e) => setVehicle(e.target.value)}
            className={input}
          />
        </div>
        <div>
          <label htmlFor={`${id}-postcode`} className={label}>Postcode</label>
          <input
            id={`${id}-postcode`}
            name="postcode"
            type="text"
            required
            autoComplete="postal-code"
            placeholder="e.g. OL1 3QH"
            value={postcode}
            onChange={(e) => setPostcode(e.target.value)}
            className={input}
          />
        </div>
        <div>
          <label htmlFor={`${id}-phone`} className={label}>Phone</label>
          <input
            id={`${id}-phone`}
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            inputMode="tel"
            pattern="[0-9+()\s-]{10,}"
            title="Please enter a valid phone number"
            placeholder="07XXX XXXXXX"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className={input}
          />
        </div>
      </div>
      <button
        type="submit"
        className={
          isHero
            ? 'w-full bg-white text-[#0f172a] hover:bg-slate-100 font-black py-3.5 rounded-lg transition-colors text-sm sm:text-base uppercase tracking-wide'
            : 'w-full bg-[#b70011] hover:bg-red-700 text-white font-black py-4 rounded-xl shadow-lg transition-colors uppercase tracking-wider text-sm'
        }
        style={{ fontFamily: 'var(--font-work-sans)' }}
      >
        Get My Quote
      </button>
      <p className={`text-xs ${isHero ? 'text-white/60' : 'text-slate-500'}`}>
        We&apos;ll reply on WhatsApp with a price. No obligation.
      </p>
    </form>
  )

  if (isHero) {
    return (
      <div className="mt-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4 sm:p-5">
        {sent ? confirmation : (
          <>
            <p className="text-white font-bold text-base sm:text-lg mb-3" style={{ fontFamily: 'var(--font-work-sans)' }}>
              Get a quick quote
            </p>
            {form}
          </>
        )}
      </div>
    )
  }

  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 bg-white border-t border-slate-100" aria-labelledby={`${id}-title`}>
      <div className="max-w-3xl mx-auto">
        <div className="mb-6 sm:mb-8">
          <span className="text-[#b70011] font-bold uppercase tracking-widest text-sm mb-2 block">Quick Quote</span>
          <h2
            id={`${id}-title`}
            className="text-2xl sm:text-[32px] font-bold text-[#0f172a] leading-tight"
            style={{ fontFamily: 'var(--font-work-sans)', letterSpacing: '-0.01em' }}
          >
            {heading ?? (area ? `Get a Tyre Quote in ${area}` : 'Get a Tyre Quote')}
          </h2>
          <p className="text-slate-600 mt-3">
            Send us three details and we&apos;ll come back with a price, or call{' '}
            <a href={`tel:${PHONE_TEL}`} className="text-[#b70011] font-bold hover:underline">{PHONE}</a> for help right now.
          </p>
        </div>
        <div className="bg-slate-50 border border-slate-100 rounded-2xl p-5 sm:p-8">
          {sent ? confirmation : form}
        </div>
      </div>
    </section>
  )
}
