/** Greater Manchester borough structure — maps each live location page to its
 * metropolitan borough, matching the council/postal-area groupings used by
 * the business's own service-area coverage. Only pages that actually exist
 * on the site are listed here. */

export interface LocationArea {
  name: string
  slug: string
}

export interface Borough {
  name: string
  /** Slug of the borough's own page, or null if there isn't a dedicated borough page. */
  slug: string | null
  towns: LocationArea[]
}

export const BOROUGHS: Borough[] = [
  {
    name: 'Bury',
    slug: 'bury',
    towns: [
      { name: 'Prestwich', slug: 'prestwich' },
      { name: 'Radcliffe', slug: 'radcliffe' },
    ],
  },
  {
    name: 'Bolton',
    slug: 'bolton',
    towns: [
      { name: 'Farnworth', slug: 'farnworth' },
      { name: 'Horwich', slug: 'horwich' },
      { name: 'Westhoughton', slug: 'westhoughton' },
    ],
  },
  {
    name: 'Manchester',
    slug: 'manchester',
    towns: [
      { name: 'Blackley', slug: 'blackley' },
      { name: 'Cheetham Hill', slug: 'cheetham-hill' },
      { name: 'Chorlton-cum-Hardy', slug: 'chorlton-cum-hardy' },
      { name: 'Didsbury', slug: 'didsbury' },
      { name: 'Beswick', slug: 'beswick' },
      { name: 'Fallowfield', slug: 'fallowfield' },
      { name: 'Hulme', slug: 'hulme' },
      { name: 'Moss Side', slug: 'moss-side' },
      { name: 'Newton Heath', slug: 'newton-heath' },
      { name: 'Wythenshawe', slug: 'wythenshawe' },
    ],
  },
  {
    name: 'Oldham',
    slug: 'oldham',
    towns: [],
  },
  {
    name: 'Rochdale',
    slug: 'rochdale',
    towns: [
      { name: 'Heywood', slug: 'heywood' },
      { name: 'Middleton', slug: 'middleton' },
    ],
  },
  {
    name: 'Salford',
    slug: 'salford',
    towns: [{ name: 'Eccles', slug: 'eccles' }],
  },
  {
    name: 'Stockport',
    slug: 'stockport',
    towns: [{ name: 'Marple', slug: 'marple' }],
  },
  {
    name: 'Tameside',
    slug: 'tameside',
    towns: [
      { name: 'Ashton-under-Lyne', slug: 'ashton-under-lyne' },
      { name: 'Hyde', slug: 'hyde' },
    ],
  },
  {
    name: 'Trafford',
    slug: 'trafford',
    towns: [
      { name: 'Stretford', slug: 'stretford' },
      { name: 'Altrincham', slug: 'altrincham' },
      { name: 'Sale', slug: 'sale' },
      { name: 'Urmston', slug: 'urmston' },
    ],
  },
  {
    name: 'Wigan',
    slug: 'wigan',
    towns: [
      { name: 'Atherton', slug: 'atherton' },
      { name: 'Leigh', slug: 'leigh' },
    ],
  },
]

/** Every area (borough page + town page) in one flat list, each tagged with its borough name. */
export const ALL_AREAS: (LocationArea & { borough: string })[] = BOROUGHS.flatMap((b) => [
  ...(b.slug ? [{ name: b.name, slug: b.slug, borough: b.name }] : []),
  ...b.towns.map((t) => ({ ...t, borough: b.name })),
])

/** Finds the borough that a given page slug belongs to. */
export function findBorough(slug: string): Borough | undefined {
  return BOROUGHS.find((b) => b.slug === slug || b.towns.some((t) => t.slug === slug))
}

/** Returns the other areas in the same borough as `slug` (borough page + sibling towns), excluding `slug` itself. */
export function nearbyAreas(slug: string): LocationArea[] {
  const borough = findBorough(slug)
  if (!borough) return []
  const all: LocationArea[] = [
    ...(borough.slug ? [{ name: borough.name, slug: borough.slug }] : []),
    ...borough.towns,
  ]
  return all.filter((a) => a.slug !== slug)
}
