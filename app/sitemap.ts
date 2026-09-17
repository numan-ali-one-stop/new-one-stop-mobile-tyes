import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/schema'

const LAST_MODIFIED = '2026-08-05'

const SERVICE_PAGES = [
  '/mobile-tyre-fitting',
  '/home-tyre-fitting',
  '/puncture-repair-Greater-manchester',
  '/roadside-assistance',
  '/jump-start',
  '/tpms-reset',
  '/locking-nut-removal',
]

const CITY_PAGES = [
  'manchester', 'bolton', 'bury', 'oldham', 'rochdale', 'salford', 'stockport', 'tameside', 'trafford', 'wigan',
]

// Town/district pages beyond the 10 boroughs — same location tier, still live and indexed.
const TOWN_PAGES = [
  'ashton-under-lyne', 'hyde', 'glossop', 'marple', 'wythenshawe', 'altrincham', 'sale',
  'urmston', 'stretford', 'eccles', 'prestwich', 'middleton', 'farnworth', 'radcliffe',
  'heywood', 'horwich', 'westhoughton', 'atherton', 'leigh',
  'blackley', 'cheetham-hill', 'chorlton-cum-hardy', 'didsbury', 'beswick', 'fallowfield',
  'hulme', 'moss-side', 'newton-heath', 'northenden', 'ringway', 'rusholme', 'withington', 'longsight',
  'chadderton', 'failsworth', 'lees', 'royton', 'saddleworth', 'shaw-and-crompton',
  'hollinwood', 'uppermill', 'austerlands', 'delph', 'denshaw', 'derker', 'diggle',
  'dobcross', 'failsworth-pole', 'fitton-hill', 'glodwick', 'grasscroft', 'hathershaw',
  'lydgate', 'scouthead', 'springhead', 'waterhead', 'werneth',
  'bramhall', 'bredbury', 'cheadle', 'gatley', 'hazel-grove', 'heaton-chapel', 'heaton-mersey',
  'heaton-moor', 'heaton-norris', 'marple-bridge', 'mellor', 'reddish', 'romiley',
  'cheadle-hulme', 'heald-green', 'high-lane', 'woodley', 'adswood', 'bosden',
  'brinnington', 'compstall', 'davenport', 'disley', 'edgeley', 'great-moor', 'offerton',
  'swinton', 'cadishead', 'greengate', 'pendlebury', 'pendleton', 'walkden', 'worsley',
  'irlam', 'little-hulton', 'agecroft', 'broughton', 'clifton', 'higher-broughton',
  'irlam-o-th-height', 'kersal', 'lower-broughton', 'mediacityuk', 'monton', 'ordsall',
  'patricroft', 'salford-quays', 'swinton-park', 'weaste', 'winton',
  'ramsbottom', 'tottington', 'whitefield',
  'blackrod', 'kearsley', 'little-lever', 'south-turton',
  'littleborough', 'milnrow', 'newhey', 'wardle',
  'castleton', 'whitworth', 'bamford', 'belfield', 'crown-oil-area-heywood',
  'dearnley', 'healey', 'hurstead', 'kirkholt', 'norden', 'shawclough',
  'smallbridge', 'summit', 'syke', 'thrum-hall',
  'audenshaw', 'broadbottom', 'denton', 'droylsden', 'dukinfield', 'hattersley',
  'hollingworth', 'longdendale', 'mossley', 'mottram-in-longdendale', 'stalybridge',
  'flowery-field', 'gee-cross', 'guide-bridge', 'hartshead', 'hurst', 'lumb-lane',
  'millbrook', 'newton', 'stalyhill',
  'bowdon', 'hale', 'old-trafford', 'timperley',
  'ashton-upon-mersey', 'davyhulme', 'flixton', 'partington', 'baguley', 'broadheath',
  'brooklands', 'carrington', 'dunham-massey', 'priory-green', 'sale-moor', 'urmston-meadows',
  'abram', 'ashton-in-makerfield', 'aspull', 'astley', 'bryn', 'golborne', 'higher-end',
  'hindley', 'ince-in-makerfield', 'orrell', 'shevington', 'standish', 'tyldesley', 'winstanley',
  'billinge', 'hindley-green', 'lowton', 'pemberton', 'bickershaw', 'haigh', 'newtown',
  'platt-bridge', 'scholes', 'spring-view', 'worthington',
  'astley-bridge', 'breightmet', 'bromley-cross', 'deane', 'eagley', 'great-lever',
  'hall-i-th-wood', 'harwood', 'lostock', 'smithills', 'tonge-moor',
  'affetside', 'ainsworth', 'birtle', 'edenfield', 'fishpool', 'greenmount',
  'heap-bridge', 'holcombe', 'simister', 'summerseat', 'unsworth',
  'ancoats', 'ardwick', 'burnage', 'clayton', 'collyhurst', 'firswood', 'gorton',
  'harpurhey', 'ladybarn', 'levenshulme', 'mancunian-way-area', 'miles-platting',
  'moston', 'openshaw', 'whalley-range',
]

const ROAD_PAGES = [
  'm6', 'm60', 'm602', 'm61', 'm56', 'm62', 'm66', 'a627', 'm67', 'a57', 'wilmslow-road',
]

// National coverage — outside Greater Manchester, served on a same-day dispatch basis.
const NATIONAL_CITY_PAGES = [
  'leeds', 'leicester', 'bristol', 'milton-keynes', 'coventry', 'edinburgh', 'cardiff', 'solihull', 'basingstoke',
]

const LEGAL_PAGES = ['/privacy-policy', '/cookie-policy', '/terms']

const GUIDE_PAGES = [
  '/guides',
  '/guides/how-to-tell-if-your-tyre-can-be-repaired-or-needs-replacing',
  '/guides/what-to-do-flat-tyre-m60-manchester-motorway',
  '/guides/run-flat-vs-normal-tyres-manchester',
  '/guides/met-office-august-weather-check-your-tyres',
  '/guides/tyre-safety-tips-greater-manchester-august-weather-guide',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: LAST_MODIFIED,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/services`,
      lastModified: LAST_MODIFIED,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    ...SERVICE_PAGES.map((path) => ({
      url: `${SITE_URL}${path}`,
      lastModified: LAST_MODIFIED,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    })),
    ...['/about', '/contact', '/service-area'].map((path) => ({
      url: `${SITE_URL}${path}`,
      lastModified: LAST_MODIFIED,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    ...[...CITY_PAGES, ...TOWN_PAGES].map((slug) => ({
      url: `${SITE_URL}/mobile-tyre-fitting-${slug}`,
      lastModified: LAST_MODIFIED,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
    ...ROAD_PAGES.map((slug) => ({
      url: `${SITE_URL}/mobile-tyre-fitting-${slug}`,
      lastModified: LAST_MODIFIED,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
    ...NATIONAL_CITY_PAGES.map((slug) => ({
      url: `${SITE_URL}/mobile-tyre-fitting-${slug}`,
      lastModified: LAST_MODIFIED,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
    ...GUIDE_PAGES.map((path) => ({
      url: `${SITE_URL}${path}`,
      lastModified: LAST_MODIFIED,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
    ...LEGAL_PAGES.map((path) => ({
      url: `${SITE_URL}${path}`,
      lastModified: LAST_MODIFIED,
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    })),
  ]

  return entries
}
