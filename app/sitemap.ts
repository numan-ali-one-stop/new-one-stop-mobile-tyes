import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/schema'

const LAST_MODIFIED = '2026-08-05'

const SERVICE_PAGES = [
  '/mobile-tyre-fitting',
  '/home-tyre-fitting',
  '/emergency-puncture-repair',
  '/jump-start',
  '/tpms-reset',
  '/locking-nut-removal',
  '/24-hour-emergency-tyre-fitting',
  '/cheap-mobile-tyre-fitting',
  '/tyre-fitting-near-me',
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
  'hulme', 'moss-side', 'newton-heath',
]

const ROAD_PAGES = ['m60', 'm61', 'm62', 'm56', 'm66', 'm67', 'm602', 'a627']

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
