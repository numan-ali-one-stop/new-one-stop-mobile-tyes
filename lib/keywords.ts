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
/** 'n/a' = the sheet did not score it because the keyword targets another page. */
export type Presence = 'Strong' | 'Weak' | 'Missing' | 'n/a'

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
  {
    theme: 'Emergency',
    keyword: 'night tyre fitting manchester',
    matchType: 'Phrase',
    presence: 'Strong',
    sheetPresence: 'Missing',
    targetPage: 'Manchester page',
    targetPath: '/mobile-tyre-fitting-manchester',
    notes: 'Was missing. Added: FAQ "Do you offer night tyre fitting in Manchester?" (question and answer).',
  },
  {
    theme: 'Near me',
    keyword: 'mobile tyre fitting near me',
    matchType: 'Phrase',
    presence: 'Strong',
    sheetPresence: 'Missing',
    targetPage: 'Manchester page',
    targetPath: '/mobile-tyre-fitting-manchester',
    notes: 'Was missing. Added once, the way customers search it: copy "If you have been searching for ‘mobile tyre fitting near me’…" in the Mobile Tyre Fitter section. Also in the FAQ question "Is there mobile tyre fitting near me in Manchester?". Google matches near-me searches by location, so no further repetition needed.',
  },
  {
    theme: 'Near me',
    keyword: 'tyre fitting near me',
    matchType: 'Phrase',
    presence: 'Strong',
    sheetPresence: 'Missing',
    targetPage: 'Manchester page',
    targetPath: '/mobile-tyre-fitting-manchester',
    notes: 'Was missing. Covered by the same copy line plus FAQ "Is there mobile tyre fitting near me in Manchester?".',
  },
  {
    theme: 'Near me',
    keyword: 'tyre fitters near me',
    matchType: 'Phrase',
    presence: 'Weak',
    sheetPresence: 'Missing',
    targetPage: 'Manchester page',
    targetPath: '/mobile-tyre-fitting-manchester',
    notes: 'Was missing. Added: copy "…or ‘tyre fitters near me’, there is no garage to find…" in the Mobile Tyre Fitter section. One natural use is deliberate: repeating "near me" reads badly and Google matches it by location.',
  },
  {
    theme: 'Home / work',
    keyword: 'tyre fitting at home manchester',
    matchType: 'Phrase',
    presence: 'Strong',
    sheetPresence: 'Weak',
    targetPage: 'Manchester page',
    targetPath: '/mobile-tyre-fitting-manchester',
    notes: 'Was weak (service card only). Added: copy "…means tyre fitting at home, on your drive…" and FAQ "Can you do tyre fitting at home in Manchester?".',
  },
  {
    theme: 'Home / work',
    keyword: 'home tyre fitting manchester',
    matchType: 'Phrase',
    presence: 'Strong',
    sheetPresence: 'Weak',
    targetPage: 'Manchester page',
    targetPath: '/mobile-tyre-fitting-manchester',
    notes: 'Was weak (service card only). Added: copy "Our home tyre fitting in Manchester…" (linked to the Home Tyre Fitting page) and the home FAQ answer.',
  },
  {
    theme: 'Price / speed',
    keyword: 'cheap mobile tyre fitting manchester',
    matchType: 'Phrase',
    presence: 'Strong',
    sheetPresence: 'Missing',
    targetPage: 'Manchester page',
    targetPath: '/mobile-tyre-fitting-manchester',
    notes: 'Was missing. Added in the new Van/EV/Run Flat section (Looking for cheap mobile tyre fitting in Manchester? budget, mid-range and premium tyres, full price upfront) and FAQ. No cheapest claim made.',
  },
  {
    theme: 'Price / speed',
    keyword: 'same day tyre fitting manchester',
    matchType: 'Phrase',
    presence: 'Strong',
    sheetPresence: 'Missing',
    targetPage: 'Manchester page',
    targetPath: '/mobile-tyre-fitting-manchester',
    notes: 'Was missing. Added in the new section and FAQ, hedged: often possible, subject to the tyre size being in stock (same-day claim still awaiting owner confirmation).',
  },
  {
    theme: 'Vehicle',
    keyword: 'run flat tyre fitting manchester',
    matchType: 'Phrase',
    presence: 'Strong',
    sheetPresence: 'Missing',
    targetPage: 'Manchester page',
    targetPath: '/mobile-tyre-fitting-manchester',
    notes: 'Was missing. Added: section heading Van, EV and Run Flat Tyre Fitting in Manchester plus copy, linking to the run-flat vs normal tyres guide.',
  },
  {
    theme: 'Vehicle',
    keyword: 'van tyre fitting manchester',
    matchType: 'Phrase',
    presence: 'Strong',
    sheetPresence: 'Missing',
    targetPage: 'Manchester page',
    targetPath: '/mobile-tyre-fitting-manchester',
    notes: 'Was missing. Added: section heading plus copy (Our van tyre fitting in Manchester keeps tradespeople and delivery drivers on the road).',
  },
  {
    theme: 'Vehicle',
    keyword: 'EV tyre fitting manchester',
    matchType: 'Phrase',
    presence: 'Strong',
    sheetPresence: 'Missing',
    targetPage: 'Manchester page',
    targetPath: '/mobile-tyre-fitting-manchester',
    notes: 'Was missing. Added: section heading plus copy (EV tyre fitting in Manchester needs tyres with the right load rating).',
  },
  {
    theme: 'Other service',
    keyword: 'mobile puncture repair manchester',
    matchType: 'Phrase',
    presence: 'Strong',
    sheetPresence: 'n/a',
    targetPage: 'Puncture page (not this page)',
    targetPath: '/puncture-repair-Greater-manchester',
    notes: 'Targets the Puncture page. Title now Mobile Puncture Repair Greater Manchester and meta leads with mobile puncture repair; phrase already used 5 times in visible copy. No city name added to visible copy (owner rule for core pages).',
  },
  {
    theme: 'Other service',
    keyword: 'locking wheel nut removal manchester',
    matchType: 'Phrase',
    presence: 'Strong',
    sheetPresence: 'n/a',
    targetPage: 'Locking nut page',
    targetPath: '/locking-nut-removal',
    notes: 'Targets the Locking nut page. Already in title, meta and H1 (10 visible uses); Greater Manchester added to the title. Meta already had it. No visible city name added (owner rule).',
  },
  {
    theme: 'Other service',
    keyword: 'tpms reset manchester',
    matchType: 'Phrase',
    presence: 'Strong',
    sheetPresence: 'n/a',
    targetPage: 'TPMS page',
    targetPath: '/tpms-reset',
    notes: 'Targets the TPMS page. Already in title, meta and H1 (14 visible uses); Greater Manchester added to the title. Meta already had it. No visible city name added (owner rule).',
  },
  {
    theme: 'Other service',
    keyword: 'jump start manchester',
    matchType: 'Phrase',
    presence: 'Strong',
    sheetPresence: 'n/a',
    targetPage: 'Jump start page',
    targetPath: '/jump-start',
    notes: 'Targets the Jump start page. Already strong: Greater Manchester in title and meta, jump start in H1 and used 53 times. No change needed.',
  },
]
