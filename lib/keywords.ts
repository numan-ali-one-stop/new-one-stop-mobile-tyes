/**
 * The "Keywords" sheet (SEO + Google Ads), one row per keyword, mirroring the spreadsheet columns:
 *   Theme | Keyword | Match type | Presence on page now | Target page | Monthly volume | Notes
 *
 * - "Match type" (Exact / Phrase / Broad) is a Google Ads setting for the Ads team; it does not change the page.
 * - "Presence on page now" is how strongly the target page uses the keyword. Where the sheet said "Missing",
 *   the keyword has been worked into the target page naturally (heading, copy, FAQ) and `presence` updated.
 * - `sheetPresence` keeps the value the sheet had, so the change is traceable.
 */
export type MatchType = 'Exact' | 'Phrase' | 'Broad'
export type Presence = 'Strong' | 'Weak' | 'Missing'

export interface KeywordRow {
  /** Theme */
  theme: string
  /** Keyword */
  keyword: string
  /** Match type (Google Ads) */
  matchType: MatchType
  /** Presence on page now — after our changes. */
  presence: Presence
  /** Presence on page now — as the sheet had it before our changes. */
  sheetPresence: Presence
  /** Target page, as named in the sheet. */
  targetPage: string
  /** Target page URL path. */
  targetPath: string
  /** Monthly volume (blank in the sheet for now). */
  monthlyVolume?: number
  /** Notes (sheet notes, plus what was done). */
  notes: string
}

export const KEYWORDS: KeywordRow[] = [
  {
    theme: 'Core',
    keyword: 'mobile tyre fitting manchester',
    matchType: 'Exact',
    presence: 'Strong',
    sheetPresence: 'Strong',
    targetPage: 'Manchester page',
    targetPath: '/mobile-tyre-fitting-manchester',
    notes: 'Already strong: in the page title and used in the body copy. No change needed.',
  },
  {
    theme: 'Core',
    keyword: 'mobile tyre fitter manchester',
    matchType: 'Phrase',
    presence: 'Strong',
    sheetPresence: 'Missing',
    targetPage: 'Manchester page',
    targetPath: '/mobile-tyre-fitting-manchester',
    notes:
      'Was missing ("fitter" never used). Added naturally: H2 "Your Mobile Tyre Fitter in Manchester", ' +
      'section copy "As a mobile tyre fitter in Manchester…", and FAQ "How do I book a mobile tyre fitter in Manchester?".',
  },
  {
    theme: 'Core',
    keyword: 'mobile tyres manchester',
    matchType: 'Phrase',
    presence: 'Strong',
    sheetPresence: 'Missing',
    targetPage: 'Manchester page',
    targetPath: '/mobile-tyre-fitting-manchester',
    notes: 'Was missing ("mobile tyres" only appeared in the brand name). Added: H2 "Mobile Tyres in Manchester, Fitted Where You Are".',
  },
  {
    theme: 'Core',
    keyword: 'mobile tyre replacement manchester',
    matchType: 'Phrase',
    presence: 'Strong',
    sheetPresence: 'Weak',
    targetPage: 'Manchester page',
    targetPath: '/mobile-tyre-fitting-manchester',
    notes: 'Was weak (appeared once). Strengthened: copy "Our mobile tyre replacement in Manchester suits drivers who…" (now used twice in the copy).',
  },
  {
    theme: 'Core',
    keyword: 'mobile tyre service manchester',
    matchType: 'Phrase',
    presence: 'Strong',
    sheetPresence: 'Missing',
    targetPage: 'Manchester page',
    targetPath: '/mobile-tyre-fitting-manchester',
    notes: 'Was missing. Added: section heading "Why Choose Our Mobile Tyre Service in Manchester?".',
  },
  {
    theme: 'Emergency',
    keyword: '24 hour mobile tyre fitting manchester',
    matchType: 'Exact',
    presence: 'Strong',
    sheetPresence: 'Strong',
    targetPage: 'Manchester page',
    targetPath: '/mobile-tyre-fitting-manchester',
    notes: 'Already strong: section heading "24 Hour Mobile Tyre Fitting in Manchester" plus body copy. No change needed.',
  },
  {
    theme: 'Emergency',
    keyword: 'emergency tyre fitting manchester',
    matchType: 'Phrase',
    presence: 'Strong',
    sheetPresence: 'Missing',
    targetPage: 'Manchester page',
    targetPath: '/mobile-tyre-fitting-manchester',
    notes: 'Was missing. Added: 24-hour section copy "For emergency tyre fitting in Manchester, call us whatever the time…" and FAQ "Do you offer emergency tyre fitting in Manchester?".',
  },
  {
    theme: 'Emergency',
    keyword: 'emergency tyre replacement manchester',
    matchType: 'Phrase',
    presence: 'Strong',
    sheetPresence: 'Missing',
    targetPage: 'Manchester page',
    targetPath: '/mobile-tyre-fitting-manchester',
    notes: 'Was missing. Added: 24-hour section copy "…we carry out emergency tyre replacement in Manchester on the spot" plus the emergency FAQ answer, and hero bullet "Emergency Tyre Replacement".',
  },
  {
    theme: 'Emergency',
    keyword: 'flat tyre manchester',
    matchType: 'Phrase',
    presence: 'Strong',
    sheetPresence: 'Missing',
    targetPage: 'Manchester page',
    targetPath: '/mobile-tyre-fitting-manchester',
    notes: 'Was missing. Added: copy "a flat tyre in Manchester city centre…" and FAQ "I have a flat tyre in Manchester. What should I do?".',
  },
  {
    theme: 'Emergency',
    keyword: 'tyre blowout manchester',
    matchType: 'Phrase',
    presence: 'Strong',
    sheetPresence: 'Missing',
    targetPage: 'Manchester page',
    targetPath: '/mobile-tyre-fitting-manchester',
    notes: 'Was missing. Added: copy "a tyre blowout on Princess Parkway…" and FAQ "What should I do after a tyre blowout in Manchester?" with safety advice.',
  },
]
