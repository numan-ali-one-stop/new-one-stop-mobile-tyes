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
      { name: 'Longsight', slug: 'longsight' },
      { name: 'Moss Side', slug: 'moss-side' },
      { name: 'Newton Heath', slug: 'newton-heath' },
      { name: 'Northenden', slug: 'northenden' },
      { name: 'Ringway', slug: 'ringway' },
      { name: 'Rusholme', slug: 'rusholme' },
      { name: 'Withington', slug: 'withington' },
      { name: 'Wythenshawe', slug: 'wythenshawe' },
    ],
  },
  {
    name: 'Oldham',
    slug: 'oldham',
    towns: [
      { name: 'Chadderton', slug: 'chadderton' },
      { name: 'Failsworth', slug: 'failsworth' },
      { name: 'Lees', slug: 'lees' },
      { name: 'Royton', slug: 'royton' },
      { name: 'Saddleworth', slug: 'saddleworth' },
      { name: 'Shaw and Crompton', slug: 'shaw-and-crompton' },
    ],
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
    towns: [
      { name: 'Cadishead', slug: 'cadishead' },
      { name: 'Eccles', slug: 'eccles' },
      { name: 'Greengate', slug: 'greengate' },
      { name: 'Pendlebury', slug: 'pendlebury' },
      { name: 'Pendleton', slug: 'pendleton' },
      { name: 'Swinton', slug: 'swinton' },
      { name: 'Walkden', slug: 'walkden' },
      { name: 'Worsley', slug: 'worsley' },
    ],
  },
  {
    name: 'Stockport',
    slug: 'stockport',
    towns: [
      { name: 'Bramhall', slug: 'bramhall' },
      { name: 'Bredbury', slug: 'bredbury' },
      { name: 'Cheadle', slug: 'cheadle' },
      { name: 'Gatley', slug: 'gatley' },
      { name: 'Hazel Grove', slug: 'hazel-grove' },
      { name: 'Heaton Chapel', slug: 'heaton-chapel' },
      { name: 'Heaton Mersey', slug: 'heaton-mersey' },
      { name: 'Heaton Moor', slug: 'heaton-moor' },
      { name: 'Heaton Norris', slug: 'heaton-norris' },
      { name: 'Marple', slug: 'marple' },
      { name: 'Marple Bridge', slug: 'marple-bridge' },
      { name: 'Mellor', slug: 'mellor' },
      { name: 'Reddish', slug: 'reddish' },
      { name: 'Romiley', slug: 'romiley' },
    ],
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
