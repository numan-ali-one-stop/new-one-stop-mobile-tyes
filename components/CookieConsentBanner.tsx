'use client'

import { useEffect, useState } from 'react'

const STORAGE_KEY = 'cookie-consent'

type Consent = 'granted' | 'denied'

function pushConsentUpdate(consent: Consent) {
  const w = window as unknown as { gtag?: (...args: unknown[]) => void; dataLayer?: unknown[] }
  const signals = {
    ad_storage: consent,
    ad_user_data: consent,
    ad_personalization: consent,
    analytics_storage: consent,
  }
  if (typeof w.gtag === 'function') {
    w.gtag('consent', 'update', signals)
    return
  }
  w.dataLayer = w.dataLayer || []
  w.dataLayer.push(['consent', 'update', signals])
}

export default function CookieConsentBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    // Stored consent from a prior visit is already re-applied synchronously by the
    // inline script in <head> (before GTM loads), so we only need to show the
    // banner when there is no stored choice yet.
    const stored = window.localStorage.getItem(STORAGE_KEY)
    if (stored !== 'granted' && stored !== 'denied') {
      setVisible(true)
    }
  }, [])

  function choose(consent: Consent) {
    window.localStorage.setItem(STORAGE_KEY, consent)
    pushConsentUpdate(consent)
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie consent"
      className="fixed bottom-0 left-0 right-0 z-[70] bg-[#0f172a] text-white px-4 sm:px-6 py-4 sm:py-5 border-t border-white/10 shadow-2xl"
    >
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center gap-3 sm:gap-6">
        <p className="text-sm text-slate-300 leading-relaxed flex-1 text-center sm:text-left">
          We use cookies for analytics and advertising measurement to understand how visitors use
          our website and measure the effectiveness of our advertising. You can accept or reject
          non-essential cookies at any time — see our{' '}
          <a href="/cookie-policy" className="underline hover:text-white transition-colors">
            Cookie Policy
          </a>{' '}
          for details.
        </p>
        <div className="flex items-center gap-2.5 shrink-0">
          <button
            type="button"
            onClick={() => choose('denied')}
            className="px-4 py-2 rounded-lg text-sm font-semibold border border-white/20 text-white/80 hover:bg-white/10 transition-colors"
          >
            Reject
          </button>
          <button
            type="button"
            onClick={() => choose('granted')}
            className="px-4 py-2 rounded-lg text-sm font-bold bg-[#FF4444] hover:bg-red-700 text-white transition-colors"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  )
}
