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
/** 'N/A' is used for pages the audit says not to build (folded into another page). */
export type YesNo = 'Yes' | 'No' | 'N/A'

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
  {
    slug: 'wythenshawe',
    area: 'Wythenshawe',
    postcode: 'M22/M23',
    anchors: 'Wythenshawe Hospital, Princess Parkway, M56',
    tier: 'A',
    adGroupPlan: 'Own ad group',
    flag: 'Night/shift-worker angle',
    pageStatus: 'Read in full',
    titleH1MetaFixed: 'Yes',
    postcodeRoadsInIntro: 'Yes',
    uniqueLocalFaq: 'Yes',
    unverifiedClaimsRemoved: 'Yes',
    trackingTelChecked: 'Yes',
    siblingLinks: 'Yes',
    notes:
      'Sheet note: best page so far (unique copy, M22/M23, local places, honest response-time FAQ); use as base template; Baguley/Northenden overlap. Done: H1 + meta rewritten; intro leads with the night/shift-worker angle (Wythenshawe Hospital, airport) and names M22/M23, Princess Parkway, M56; 11 Wythenshawe FAQs incl. night shifts, M56 and an honest response-time answer; Baguley/Northenden now linked neighbours (no overlapping copy); landmarks card; generic nearby block replaced by in-copy sibling links.',
    status: 'Complete',
  },
  {
    slug: 'cheetham-hill',
    area: 'Cheetham Hill',
    postcode: 'M8',
    anchors: 'Cheetham Hill Road, Queens Road',
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
      'Sheet note: new template, near-identical to Didsbury except area name + last FAQ; no postcode/roads; FAQ cites Crumpsall (no page). Done: H1 + meta rewritten; intro names M8, Cheetham Hill Road, Queens Road, Bury Old Road, Waterloo Road; 10 Cheetham Hill FAQs replace the template; Crumpsall kept as a place name only (not linked); landmarks card; in-copy sibling links replace the generic block.',
    status: 'Complete',
  },
  {
    slug: 'fallowfield',
    area: 'Fallowfield',
    postcode: 'M14',
    anchors: 'Wilmslow Road, Platt Fields',
    tier: 'A',
    adGroupPlan: 'Own ad group',
    flag: 'Student area - add on-street fitting FAQ',
    pageStatus: 'Not opened',
    titleH1MetaFixed: 'Yes',
    postcodeRoadsInIntro: 'Yes',
    uniqueLocalFaq: 'Yes',
    unverifiedClaimsRemoved: 'Yes',
    trackingTelChecked: 'Yes',
    siblingLinks: 'Yes',
    notes:
      'Done: H1 + meta rewritten; intro names M14, Wilmslow Road, Platt Fields Park, Wilbraham Road, Platt Lane; on-street (kerbside) fitting FAQ added as Q1 plus student FAQs (halls, budget tyres, tight parking); landmarks card; in-copy sibling links replace the generic block.',
    status: 'Complete',
  },
  {
    slug: 'withington',
    area: 'Withington',
    postcode: 'M20',
    anchors: 'Wilmslow Road, Withington hospital area',
    tier: 'A',
    adGroupPlan: 'Own ad group',
    flag: '',
    pageStatus: 'Not opened',
    titleH1MetaFixed: 'Yes',
    postcodeRoadsInIntro: 'Yes',
    uniqueLocalFaq: 'Yes',
    unverifiedClaimsRemoved: 'Yes',
    trackingTelChecked: 'Yes',
    siblingLinks: 'Yes',
    notes:
      'Done: H1 + meta rewritten; intro names M20, Wilmslow Road, The Christie and Withington Community Hospital (Nell Lane), Burton Road; 10 Withington FAQs incl. hospital car parks and late shifts; landmarks card; in-copy sibling links replace the generic block.',
    status: 'Complete',
  },
  {
    slug: 'levenshulme',
    area: 'Levenshulme',
    postcode: 'M19',
    anchors: 'Stockport Road, Levenshulme station',
    tier: 'A',
    adGroupPlan: 'Own ad group',
    flag: '',
    pageStatus: 'Not opened',
    titleH1MetaFixed: 'Yes',
    postcodeRoadsInIntro: 'Yes',
    uniqueLocalFaq: 'Yes',
    unverifiedClaimsRemoved: 'Yes',
    trackingTelChecked: 'Yes',
    siblingLinks: 'Yes',
    notes:
      'Done: H1 + meta rewritten; intro names M19, Stockport Road (A6), Levenshulme station, Barlow Road, Chapel Street; 10 Levenshulme FAQs (old FAQ\'s 20-30 min answer replaced with a hedged one); landmarks card; in-copy sibling links added, generic block removed.',
    status: 'Complete',
  },
  {
    slug: 'gorton',
    area: 'Gorton',
    postcode: 'M18',
    anchors: 'Hyde Road',
    tier: 'A',
    adGroupPlan: 'Own ad group',
    flag: '',
    pageStatus: 'Not opened',
    titleH1MetaFixed: 'Yes',
    postcodeRoadsInIntro: 'Yes',
    uniqueLocalFaq: 'Yes',
    unverifiedClaimsRemoved: 'Yes',
    trackingTelChecked: 'Yes',
    siblingLinks: 'Yes',
    notes:
      'Done: H1 + meta rewritten; intro names M18, Hyde Road, Belle Vue, Gorton Monastery, Abbey Hey, Debdale Park; 10 Gorton FAQs (old 20-30 min answer replaced with a hedged one); landmarks card; in-copy sibling links added, generic block removed.',
    status: 'Complete',
  },
  {
    slug: 'blackley',
    area: 'Blackley',
    postcode: 'M9',
    anchors: 'Rochdale Road, Victoria Avenue',
    tier: 'A',
    adGroupPlan: 'Own ad group',
    flag: 'Sampled: generic claims, broken FAQ answer, \'dedicated line\' is the shared number',
    pageStatus: 'Read in full',
    titleH1MetaFixed: 'Yes',
    postcodeRoadsInIntro: 'Yes',
    uniqueLocalFaq: 'Yes',
    unverifiedClaimsRemoved: 'Yes',
    trackingTelChecked: 'Yes',
    siblingLinks: 'Yes',
    notes:
      'Sheet note: old template - unverified claims (IMI, no hidden fees, \'dedicated Blackley line\' = shared number), broken FAQ answer, reduced nav, 4 FAQs. Done: \'dedicated Blackley line ... dispatched in minutes\' replaced with the real shared number; IMI already removed site-wide (issue #23); \'no hidden fees\' not present in current code; FAQ replaced with 10 Blackley FAQs (incl. \'is there a separate Blackley number? No\'); H1 + meta rewritten; intro names M9, Rochdale Road, Victoria Avenue, M60 J19; landmarks card; in-copy sibling links replace the generic block. Nav is the shared site header (dropdowns restored).',
    status: 'Complete',
  },
  {
    slug: 'moston',
    area: 'Moston',
    postcode: 'M40',
    anchors: 'Moston Lane, Lightbowne Road',
    tier: 'A',
    adGroupPlan: 'Own ad group',
    flag: '',
    pageStatus: 'Not opened',
    titleH1MetaFixed: 'Yes',
    postcodeRoadsInIntro: 'Yes',
    uniqueLocalFaq: 'Yes',
    unverifiedClaimsRemoved: 'Yes',
    trackingTelChecked: 'Yes',
    siblingLinks: 'Yes',
    notes:
      'Done: H1 + meta rewritten; intro names M40, Moston Lane, Lightbowne Road, Broadhurst Park; 10 Moston FAQs (old 20-30 min answer replaced); landmarks card; in-copy sibling links added, generic block removed.',
    status: 'Complete',
  },
  {
    slug: 'rusholme',
    area: 'Rusholme',
    postcode: 'M14',
    anchors: 'Wilmslow Road, Oxford Road',
    tier: 'A',
    adGroupPlan: 'Own ad group',
    flag: 'On-street parking FAQ',
    pageStatus: 'Not opened',
    titleH1MetaFixed: 'Yes',
    postcodeRoadsInIntro: 'Yes',
    uniqueLocalFaq: 'Yes',
    unverifiedClaimsRemoved: 'Yes',
    trackingTelChecked: 'Yes',
    siblingLinks: 'Yes',
    notes:
      'Done: H1 + meta rewritten; intro names M14, Wilmslow Road (Curry Mile), Oxford Road, Dickenson Road; on-street parking FAQ added as Q1; 10 Rusholme FAQs; leftover internal note (\'The existing Rusholme...\') removed; landmarks card; in-copy sibling links replace the generic block.',
    status: 'Complete',
  },
  {
    slug: 'hulme',
    area: 'Hulme',
    postcode: 'M15',
    anchors: 'Princess Road, Stretford Road',
    tier: 'A',
    adGroupPlan: 'Own ad group',
    flag: '',
    pageStatus: 'Not opened',
    titleH1MetaFixed: 'Yes',
    postcodeRoadsInIntro: 'Yes',
    uniqueLocalFaq: 'Yes',
    unverifiedClaimsRemoved: 'Yes',
    trackingTelChecked: 'Yes',
    siblingLinks: 'Yes',
    notes:
      'Done: H1 + meta rewritten; intro names M15, Princess Road, Stretford Road, Hulme Arch, Birley Fields, Mancunian Way; 10 Hulme FAQs (apartment car parks, campus, Mancunian Way); landmarks card; in-copy sibling links replace the generic block.',
    status: 'Complete',
  },
  {
    slug: 'moss-side',
    area: 'Moss Side',
    postcode: 'M14/M16',
    anchors: 'Princess Road, Alexandra Park',
    tier: 'A',
    adGroupPlan: 'Own ad group',
    flag: '',
    pageStatus: 'Not opened',
    titleH1MetaFixed: 'Yes',
    postcodeRoadsInIntro: 'Yes',
    uniqueLocalFaq: 'Yes',
    unverifiedClaimsRemoved: 'Yes',
    trackingTelChecked: 'Yes',
    siblingLinks: 'Yes',
    notes:
      'Done: H1 + meta rewritten; intro names M14/M16, Princess Road, Alexandra Park, Moss Lane East, Claremont Road; 10 Moss Side FAQs; landmarks card; in-copy sibling links replace the generic block.',
    status: 'Complete',
  },
  {
    slug: 'newton-heath',
    area: 'Newton Heath',
    postcode: 'M40',
    anchors: 'Oldham Road',
    tier: 'A',
    adGroupPlan: 'Own ad group',
    flag: '',
    pageStatus: 'Not opened',
    titleH1MetaFixed: 'Yes',
    postcodeRoadsInIntro: 'Yes',
    uniqueLocalFaq: 'Yes',
    unverifiedClaimsRemoved: 'Yes',
    trackingTelChecked: 'Yes',
    siblingLinks: 'Yes',
    notes:
      'Done: H1 + meta rewritten; intro names M40, Oldham Road (A62), the Metrolink stop, Briscoe Lane, Culcheth Lane, Brookdale Park; 10 Newton Heath FAQs; landmarks card; in-copy sibling links replace the generic block.',
    status: 'Complete',
  },
  {
    slug: 'northenden',
    area: 'Northenden',
    postcode: 'M22',
    anchors: 'Palatine Road, Princess Parkway',
    tier: 'A',
    adGroupPlan: 'Own ad group',
    flag: '',
    pageStatus: 'Not opened',
    titleH1MetaFixed: 'Yes',
    postcodeRoadsInIntro: 'Yes',
    uniqueLocalFaq: 'Yes',
    unverifiedClaimsRemoved: 'Yes',
    trackingTelChecked: 'Yes',
    siblingLinks: 'Yes',
    notes:
      'Done: H1 + meta rewritten; intro names M22, Palatine Road, Princess Parkway, M60/M56, Sharston, Wythenshawe Park; 10 Northenden FAQs; landmarks card; in-copy sibling links replace the generic block.',
    status: 'Complete',
  },
  {
    slug: 'ancoats',
    area: 'Ancoats',
    postcode: 'M4',
    anchors: 'Great Ancoats Street, Northern Quarter',
    tier: 'A',
    adGroupPlan: 'Own ad group',
    flag: 'City-centre intent; no dedicated city-centre page exists',
    pageStatus: 'Not opened',
    titleH1MetaFixed: 'Yes',
    postcodeRoadsInIntro: 'Yes',
    uniqueLocalFaq: 'Yes',
    unverifiedClaimsRemoved: 'Yes',
    trackingTelChecked: 'Yes',
    siblingLinks: 'Yes',
    notes:
      'Done: H1 + meta rewritten; intro names M4, Great Ancoats Street, Northern Quarter, New Islington, city-centre car parks; 10 Ancoats FAQs incl. city-centre multi-storeys; links to the Manchester city page for city-centre intent; leftover internal note removed; landmarks card; in-copy sibling links. Open question for owner: a dedicated city-centre page is still not created (needs sign-off).',
    status: 'Complete',
  },
  {
    slug: 'ringway',
    area: 'Ringway',
    postcode: 'M90',
    anchors: 'Manchester Airport, Ringway Road, M56',
    tier: 'A',
    adGroupPlan: 'Own ad group (airport - confirm viability)',
    flag: 'Different intent (airport); confirm you can serve it',
    pageStatus: 'Not opened',
    titleH1MetaFixed: 'Yes',
    postcodeRoadsInIntro: 'Yes',
    uniqueLocalFaq: 'Yes',
    unverifiedClaimsRemoved: 'Yes',
    trackingTelChecked: 'Yes',
    siblingLinks: 'Yes',
    notes:
      'Done: H1 + meta rewritten (airport-led); intro names M90, Manchester Airport car parks, Ringway Road, M56 J5; 10 airport FAQs with honest access wording (most public car parks; barrier/secure/meet-and-greet need checking; no airside work); landmarks card; in-copy sibling links. Owner still to confirm the airport is viable before Ads spend.',
    status: 'Complete',
  },
  {
    slug: 'longsight',
    area: 'Longsight',
    postcode: 'M12/M13',
    anchors: 'Stockport Road, Plymouth Grove',
    tier: 'B',
    adGroupPlan: 'Corridor group: South inner',
    flag: '',
    pageStatus: 'Not opened',
    titleH1MetaFixed: 'Yes',
    postcodeRoadsInIntro: 'Yes',
    uniqueLocalFaq: 'Yes',
    unverifiedClaimsRemoved: 'Yes',
    trackingTelChecked: 'Yes',
    siblingLinks: 'Yes',
    notes:
      'Done: H1 + meta rewritten; intro names M12/M13, Stockport Road, Plymouth Grove, Longsight Market, Crowcroft Park; 10 Longsight FAQs (old 20-30 min answer replaced); landmarks card; in-copy sibling links replace the generic block.',
    status: 'Complete',
  },
  {
    slug: 'burnage',
    area: 'Burnage',
    postcode: 'M19',
    anchors: 'Burnage Lane, Kingsway',
    tier: 'B',
    adGroupPlan: 'Corridor group: South inner',
    flag: '',
    pageStatus: 'Not opened',
    titleH1MetaFixed: 'Yes',
    postcodeRoadsInIntro: 'Yes',
    uniqueLocalFaq: 'Yes',
    unverifiedClaimsRemoved: 'Yes',
    trackingTelChecked: 'Yes',
    siblingLinks: 'Yes',
    notes:
      'Done: H1 + meta rewritten; intro names M19, Burnage Lane, Kingsway, Burnage station, Fog Lane Park; 10 Burnage FAQs (old 20-30 min answer replaced); landmarks card; in-copy sibling links added, generic block removed.',
    status: 'Complete',
  },
  {
    slug: 'ladybarn',
    area: 'Ladybarn',
    postcode: 'M14/M20',
    anchors: 'Mauldeth Road, Wilmslow Road',
    tier: 'B',
    adGroupPlan: 'Corridor group: South inner',
    flag: 'Likely tiny volume',
    pageStatus: 'Not opened',
    titleH1MetaFixed: 'Yes',
    postcodeRoadsInIntro: 'Yes',
    uniqueLocalFaq: 'Yes',
    unverifiedClaimsRemoved: 'Yes',
    trackingTelChecked: 'Yes',
    siblingLinks: 'Yes',
    notes:
      'Done: H1 + meta rewritten; intro names M14/M20, Mauldeth Road, Wilmslow Road, Ladybarn Lane, Ladybarn Park; 10 Ladybarn FAQs (old 20-30 min answer replaced); landmarks card; in-copy sibling links added, generic block removed.',
    status: 'Complete',
  },
  {
    slug: 'harpurhey',
    area: 'Harpurhey',
    postcode: 'M9',
    anchors: 'Rochdale Road',
    tier: 'B',
    adGroupPlan: 'Corridor group: North',
    flag: '',
    pageStatus: 'Not opened',
    titleH1MetaFixed: 'Yes',
    postcodeRoadsInIntro: 'Yes',
    uniqueLocalFaq: 'Yes',
    unverifiedClaimsRemoved: 'Yes',
    trackingTelChecked: 'Yes',
    siblingLinks: 'Yes',
    notes:
      'Done: H1 + meta rewritten; intro names M9, Rochdale Road, Harpurhey Market, Queens Park; 10 Harpurhey FAQs (old 20-30 min answer replaced); landmarks card; in-copy sibling links added, generic block removed.',
    status: 'Complete',
  },
  {
    slug: 'collyhurst',
    area: 'Collyhurst',
    postcode: 'M40',
    anchors: 'Rochdale Road',
    tier: 'B',
    adGroupPlan: 'Corridor group: North',
    flag: 'Likely tiny volume',
    pageStatus: 'Not opened',
    titleH1MetaFixed: 'Yes',
    postcodeRoadsInIntro: 'Yes',
    uniqueLocalFaq: 'Yes',
    unverifiedClaimsRemoved: 'Yes',
    trackingTelChecked: 'Yes',
    siblingLinks: 'Yes',
    notes:
      'Done: H1 + meta rewritten; intro names M40, Rochdale Road, Collyhurst Road, Queens Park, Monsall; 10 Collyhurst FAQs (old 20-30 min answer replaced); landmarks card; in-copy sibling links added, generic block removed.',
    status: 'Complete',
  },
  {
    slug: 'miles-platting',
    area: 'Miles Platting',
    postcode: 'M40',
    anchors: 'Oldham Road',
    tier: 'B',
    adGroupPlan: 'Corridor group: North',
    flag: '',
    pageStatus: 'Not opened',
    titleH1MetaFixed: 'Yes',
    postcodeRoadsInIntro: 'Yes',
    uniqueLocalFaq: 'Yes',
    unverifiedClaimsRemoved: 'Yes',
    trackingTelChecked: 'Yes',
    siblingLinks: 'Yes',
    notes:
      'Done: H1 + meta rewritten; intro names M40, Oldham Road (A62), Varley Street, Hulme Hall Lane, Rochdale Canal, Philips Park; 10 Miles Platting FAQs (old 20-30 min answer replaced); landmarks card; in-copy sibling links added, generic block removed.',
    status: 'Complete',
  },
  {
    slug: 'clayton',
    area: 'Clayton',
    postcode: 'M11',
    anchors: 'Ashton New Road',
    tier: 'B',
    adGroupPlan: 'Corridor group: East',
    flag: '',
    pageStatus: 'Not opened',
    titleH1MetaFixed: 'Yes',
    postcodeRoadsInIntro: 'Yes',
    uniqueLocalFaq: 'Yes',
    unverifiedClaimsRemoved: 'Yes',
    trackingTelChecked: 'Yes',
    siblingLinks: 'Yes',
    notes:
      'Done: H1 + meta rewritten; intro names M11, Ashton New Road, North Road, Edge Lane, Clayton Hall, Clayton Vale; 10 Clayton FAQs incl. tram-track safety on Ashton New Road (old 20-30 min answer replaced); landmarks card; in-copy sibling links added, generic block removed.',
    status: 'Complete',
  },
  {
    slug: 'openshaw',
    area: 'Openshaw',
    postcode: 'M11',
    anchors: 'Ashton Old Road',
    tier: 'B',
    adGroupPlan: 'Corridor group: East',
    flag: '',
    pageStatus: 'Not opened',
    titleH1MetaFixed: 'Yes',
    postcodeRoadsInIntro: 'Yes',
    uniqueLocalFaq: 'Yes',
    unverifiedClaimsRemoved: 'Yes',
    trackingTelChecked: 'Yes',
    siblingLinks: 'Yes',
    notes:
      'Done: H1 + meta rewritten; intro names M11, Ashton Old Road (A635), Alan Turing Way; 10 Openshaw FAQs (old 20-30 min answer replaced); landmarks card; in-copy sibling links added, generic block removed.',
    status: 'Complete',
  },
  {
    slug: 'beswick',
    area: 'Beswick',
    postcode: 'M11',
    anchors: 'Ashton New Road, Etihad Campus',
    tier: 'B',
    adGroupPlan: 'Corridor group: East',
    flag: 'Likely tiny volume',
    pageStatus: 'Not opened',
    titleH1MetaFixed: 'Yes',
    postcodeRoadsInIntro: 'Yes',
    uniqueLocalFaq: 'Yes',
    unverifiedClaimsRemoved: 'Yes',
    trackingTelChecked: 'Yes',
    siblingLinks: 'Yes',
    notes:
      'Done: H1 + meta rewritten; intro names M11, Etihad Campus, Alan Turing Way, Ashton New Road, Grey Mare Lane (issue #8 copy kept and extended); 10 Beswick FAQs incl. match days, Etihad car parks, tram-track safety; landmarks card; in-copy sibling links replace the generic block.',
    status: 'Complete',
  },
  {
    slug: 'ardwick',
    area: 'Ardwick',
    postcode: 'M12',
    anchors: 'Hyde Road, Ardwick Green',
    tier: 'B',
    adGroupPlan: 'Corridor group: East',
    flag: '',
    pageStatus: 'Not opened',
    titleH1MetaFixed: 'Yes',
    postcodeRoadsInIntro: 'Yes',
    uniqueLocalFaq: 'Yes',
    unverifiedClaimsRemoved: 'Yes',
    trackingTelChecked: 'Yes',
    siblingLinks: 'Yes',
    notes:
      'Done: H1 + meta rewritten; intro names M12, Hyde Road, Ardwick Green, Downing Street junction, Brunswick, Mancunian Way; 10 Ardwick FAQs (incl. Mancunian Way, O2 Apollo; old 20-30 min answer replaced); leftover internal note removed; landmarks card; in-copy sibling links replace the generic block.',
    status: 'Complete',
  },
  {
    slug: 'whalley-range',
    area: 'Whalley Range',
    postcode: 'M16',
    anchors: 'Upper Chorlton Road, Wilbraham Road',
    tier: 'B',
    adGroupPlan: 'Corridor group: Chester Rd side',
    flag: '',
    pageStatus: 'Not opened',
    titleH1MetaFixed: 'Yes',
    postcodeRoadsInIntro: 'Yes',
    uniqueLocalFaq: 'Yes',
    unverifiedClaimsRemoved: 'Yes',
    trackingTelChecked: 'Yes',
    siblingLinks: 'Yes',
    notes:
      'Done: H1 + meta rewritten; intro names M16, Upper Chorlton Road, Wilbraham Road, Withington Road, College Road; 10 Whalley Range FAQs (old 20-30 min answer replaced); landmarks card; in-copy sibling links added, generic block removed.',
    status: 'Complete',
  },
  {
    slug: 'firswood',
    area: 'Firswood',
    postcode: 'M16',
    anchors: 'Seymour Grove, near Old Trafford',
    tier: 'B',
    adGroupPlan: 'Corridor group: Chester Rd side',
    flag: 'Likely tiny volume',
    pageStatus: 'Not opened',
    titleH1MetaFixed: 'Yes',
    postcodeRoadsInIntro: 'Yes',
    uniqueLocalFaq: 'Yes',
    unverifiedClaimsRemoved: 'Yes',
    trackingTelChecked: 'Yes',
    siblingLinks: 'Yes',
    notes:
      'Done: H1 + meta rewritten; intro names M16, Seymour Grove, Firswood Metrolink, Old Trafford, Chester Road; 10 Firswood FAQs incl. match days (old 20-30 min answer replaced); landmarks card; in-copy sibling links added, generic block removed.',
    status: 'Complete',
  },
  {
    slug: 'mancunian-way-area',
    area: 'Mancunian Way area',
    postcode: 'M1/M15',
    anchors: 'n/a - not a search term',
    tier: 'C',
    adGroupPlan: "Don't build: fold into Hulme, Ardwick and a new city-centre page",
    flag: 'Not a search term',
    pageStatus: 'Not opened',
    titleH1MetaFixed: 'N/A',
    postcodeRoadsInIntro: 'N/A',
    uniqueLocalFaq: 'N/A',
    unverifiedClaimsRemoved: 'N/A',
    trackingTelChecked: 'N/A',
    siblingLinks: 'N/A',
    notes:
      'Folded (owner decision): page removed and /mobile-tyre-fitting-mancunian-way-area now 301-redirects to the Manchester city page, ' +
      'which already covers the city centre (M1–M4, landmarks, Mancunian Way FAQ). Removed from header menu, service-area listing and sitemap. ' +
      'Hulme and Ardwick also cover the Mancunian Way in their intros and FAQs. No dedicated city-centre page built (Manchester page serves that intent).',
    status: 'Complete – folded (301 to Manchester page)',
  },
]

const CHECKS: (keyof AreaAuditRow)[] = [
  'titleH1MetaFixed', 'postcodeRoadsInIntro', 'uniqueLocalFaq', 'unverifiedClaimsRemoved', 'trackingTelChecked', 'siblingLinks',
]

/** "Completion %" column: share of the applicable checklist columns (not 'N/A') marked Yes. */
export function completion(row: AreaAuditRow): string {
  const applicable = CHECKS.filter((k) => row[k] !== 'N/A')
  if (applicable.length === 0) return 'N/A'
  const done = applicable.filter((k) => row[k] === 'Yes').length
  return `${Math.round((done / applicable.length) * 100)}%`
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
