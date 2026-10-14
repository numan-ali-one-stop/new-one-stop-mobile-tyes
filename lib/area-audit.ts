/**
 * The "Area Audit" sheet (SEO + Google Ads), one row per area page, mirroring the spreadsheet columns.
 *
 * - The on-page anchors (landmarks, postcodes, roads) live in lib/local-areas/* and are rendered by
 *   <LocalAreaInfo />; page-specific fixes live in each app/mobile-tyre-fitting-<slug>/page.tsx.
 * - `tier` drives sitemap priority (see app/sitemap.ts) and tells the Ads team which pages are
 *   primary landing pages.
 * - The six Yes/No columns are the per-page checklist. `completion` is the share of them done.
 */

/** Tier names come from the sheet ("Core", …); any other value is accepted as written. */
export type AreaTier = 'Core' | (string & {})
export type YesNo = 'Yes' | 'No'

export interface AreaAuditRow {
  /** Area page slug, without the "mobile-tyre-fitting-" prefix. */
  slug: string
  /** Area */
  area: string
  /** Postcode */
  postcode: string
  /** Local anchors to add on page */
  anchors: string
  /** Tier */
  tier: AreaTier
  /** Ad group plan */
  adGroupPlan: string
  /** Flag / note */
  flag: string
  /** Page status */
  pageStatus: string
  /** Title+H1+meta fixed */
  titleH1MetaFixed: YesNo
  /** Postcode & roads in intro */
  postcodeRoadsInIntro: YesNo
  /** Unique local FAQ */
  uniqueLocalFaq: YesNo
  /** Unverified claims removed */
  unverifiedClaimsRemoved: YesNo
  /** Tracking / tel checked */
  trackingTelChecked: YesNo
  /** Sibling links (not generic block) */
  siblingLinks: YesNo
  /** Notes */
  notes: string
  /** Status */
  status: string
}

export const AREA_AUDIT: AreaAuditRow[] = [
  {
    slug: 'manchester',
    area: 'Manchester (city page)',
    postcode: 'M1-M16 +',
    anchors: 'City-centre landmarks, M-postcodes, main roads',
    tier: 'Core',
    adGroupPlan: 'Core ad group',
    flag: 'Hero rewrite, quote path, tracking, claims - see Manchester Page tab',
    pageStatus: 'Read in full',
    titleH1MetaFixed: 'Yes',
    postcodeRoadsInIntro: 'Yes',
    uniqueLocalFaq: 'Yes',
    unverifiedClaimsRemoved: 'Yes',
    trackingTelChecked: 'Yes',
    siblingLinks: 'Yes',
    notes:
      'See Manchester Page tab. Done: H1 + meta rewritten (title already updated); hero names M1–M16, Mancunian Way, ' +
      'Princess Parkway, Oxford Road, M60 and city-centre landmarks; 12 Manchester-specific FAQs replace the generic 15; ' +
      'landmarks card added; quote form in hero + under FAQ; tel/WhatsApp links checked (Tag Assistant check still with Ads team); ' +
      'generic nearby block replaced by in-copy links to 17 sibling area pages.',
    status: 'Complete (check against Manchester Page tab)',
  },
  {
    slug: 'didsbury',
    area: 'Didsbury',
    postcode: 'M20',
    anchors: 'Wilmslow Road, Burton Road, Didsbury Village',
    tier: 'A',
    adGroupPlan: 'Own ad group',
    flag: '',
    pageStatus: 'Read in full',
    titleH1MetaFixed: 'Yes',
    postcodeRoadsInIntro: 'Yes',
    uniqueLocalFaq: 'Yes',
    unverifiedClaimsRemoved: 'Yes',
    trackingTelChecked: 'Yes',
    siblingLinks: 'Yes',
    notes:
      "Sheet note: new template, Book CTA href '#TODO-book-mobile-tyre-fitting-destination' (broken), no postcode/roads. " +
      'Done: Book CTA already fixed to /contact (issue #1); H1 + meta rewritten; intro names M20, Wilmslow Road, Burton Road, ' +
      'Didsbury Village, Kingsway, Palatine Road; 11 Didsbury FAQs replace the generic 15; landmarks card; quote form in hero + under FAQ; ' +
      'tel/WhatsApp checked (Tag Assistant check still with Ads team); generic nearby block replaced by in-copy sibling links.',
    status: 'Complete',
  },
  {
    slug: 'chorlton-cum-hardy',
    area: 'Chorlton-cum-Hardy',
    postcode: 'M21',
    anchors: 'Barlow Moor Road, Wilbraham Road',
    tier: 'A',
    adGroupPlan: 'Own ad group',
    flag: '',
    pageStatus: 'Read in full',
    titleH1MetaFixed: 'Yes',
    postcodeRoadsInIntro: 'Yes',
    uniqueLocalFaq: 'Yes',
    unverifiedClaimsRemoved: 'Yes',
    trackingTelChecked: 'Yes',
    siblingLinks: 'Yes',
    notes:
      "Sheet note: broken Book CTA (#TODO); title 'Chorlton' vs body 'Chorlton Cum Hardy' inconsistent; no postcode/roads. " +
      'Done: Book CTA already fixed to /contact (issue #1); name standardised to Chorlton-cum-Hardy in title, H1 and body; ' +
      'H1 + meta rewritten; intro names M21, Barlow Moor Road, Wilbraham Road; 10 Chorlton FAQs replace the generic 15; landmarks card; ' +
      'quote form in hero + under FAQ; tel/WhatsApp checked (Tag Assistant check still with Ads team); in-copy sibling links replace the generic block.',
    status: 'Complete',
  },
]

const CHECKS: (keyof AreaAuditRow)[] = [
  'titleH1MetaFixed', 'postcodeRoadsInIntro', 'uniqueLocalFaq', 'unverifiedClaimsRemoved', 'trackingTelChecked', 'siblingLinks',
]

/** "Completion %" column: share of the six checklist columns marked Yes. */
export function completion(row: AreaAuditRow): string {
  const done = CHECKS.filter((k) => row[k] === 'Yes').length
  return `${Math.round((done / CHECKS.length) * 100)}%`
}

const BY_SLUG = new Map(AREA_AUDIT.map((row) => [row.slug, row]))

export function areaAudit(slug: string): AreaAuditRow | undefined {
  return BY_SLUG.get(slug)
}

/** Sitemap priority for an area page: Core 0.8, tier A 0.75, everything else keeps the default. */
export function areaSitemapPriority(slug: string, fallback: number): number {
  const tier = BY_SLUG.get(slug)?.tier
  if (tier === 'Core') return Math.max(fallback, 0.8)
  if (tier === 'A') return Math.max(fallback, 0.75)
  return fallback
}
