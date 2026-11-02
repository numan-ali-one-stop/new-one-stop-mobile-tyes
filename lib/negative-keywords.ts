/**
 * The "Negative keywords" sheet (Google Ads), one row per term, mirroring the spreadsheet columns:
 *   Negative term | Category | Match type | Notes
 *
 * - Record only. Negative keywords are set inside the Google Ads account; nothing on the site reads this file.
 * - `status` and `review` are our check of each term against the services and areas on the site:
 *   "Main list" and "Manchester only" are the two lists to add, "Hold" needs a decision first.
 */
import type { MatchType } from './keywords'

export type NegativeStatus = 'Main list' | 'Manchester only' | 'Hold'

export interface NegativeKeywordRow {
  /** Negative term */
  term: string
  /** Category */
  category: string
  /** Match type */
  matchType: MatchType
  /** Notes, as written in the sheet */
  notes?: string
  status: NegativeStatus
  review?: string
}

const row = (term: string, category: string, status: NegativeStatus, review?: string, notes?: string): NegativeKeywordRow => ({
  term,
  category,
  matchType: 'Phrase',
  notes,
  status,
  review,
})

const COMPETITOR_NOTE = 'Decision needed: negative here or a separate competitor campaign'

export const NEGATIVE_KEYWORDS: NegativeKeywordRow[] = [
  row('jobs', 'Employment', 'Main list'),
  row('vacancies', 'Employment', 'Main list'),
  row('apprenticeship', 'Employment', 'Main list'),
  row('training', 'Employment', 'Main list'),
  row('course', 'Employment', 'Main list'),
  row('diy', 'Research / DIY', 'Main list'),
  row('how to', 'Research / DIY', 'Main list'),
  row('tyre pressure', 'Research / DIY', 'Hold', 'Would also block TPMS customers, e.g. "tyre pressure warning light" or "tyre pressure sensor". The site sells this at /tpms-reset.'),
  row('free', 'Low intent', 'Main list', 'Also blocks "damage free locking nut removal". The site uses "damage-free" for that service; expected to be rare.'),
  row('used', 'Low intent', 'Main list'),
  row('second hand', 'Low intent', 'Main list'),
  row('part worn', 'Low intent', 'Main list'),
  row('price list', 'Low intent', 'Main list'),
  row('wholesale', 'Trade', 'Main list'),
  row('recycling', 'Not relevant', 'Main list'),
  row('disposal', 'Not relevant', 'Main list'),
  row('liverpool', 'Other cities', 'Manchester only', 'Also blocks searches naming Liverpool Road, which is on the Cadishead, Eccles, Irlam, Patricroft and Winton pages.'),
  row('leeds', 'Other cities', 'Manchester only', 'The site has a /mobile-tyre-fitting-leeds page under national coverage. Must not be added to any campaign that targets Leeds.'),
  row('birmingham', 'Other cities', 'Manchester only'),
  row('kwik fit', 'Competitor - decide', 'Hold', undefined, COMPETITOR_NOTE),
  row('halfords', 'Competitor - decide', 'Hold', undefined, COMPETITOR_NOTE),
]
