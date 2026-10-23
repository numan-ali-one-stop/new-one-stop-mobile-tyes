// Single source for the blog / guides listings (the /guides index and the homepage section).
// Add new posts here; they are shown newest first by `date`.

export interface GuideSummary {
  title: string
  desc: string
  href: string
  image: string
  imageAlt: string
  readTime: string
  date: string // ISO yyyy-mm-dd, used for sorting
  published: string // display date
  category: string
}

const GUIDES: GuideSummary[] = [
  {
    title: 'Hit a Pothole? How to Check Your Tyre and Claim for Damage',
    desc: 'The signs a pothole has damaged your tyre, what to do straight away, and how to collect evidence and claim from the council.',
    href: '/guides/pothole-tyre-damage-claim',
    image: '/images/pothole-tyre-damage-claim.webp',
    imageAlt: 'Car tyre next to a deep pothole, showing pothole tyre damage signs, checks and how to claim',
    readTime: '7 min read',
    date: '2026-10-23',
    published: '23 October 2026',
    category: 'Tyre Safety',
  },
  {
    title: "Car Won't Start on a Cold Morning? 7 Common Causes and Quick Fixes",
    desc: 'Clicking, slow cranking or no lights? The 7 common causes of a cold-weather non-start, quick checks to try, and when a jump-start is enough.',
    href: '/guides/car-wont-start-cold-weather',
    image: '/images/car-wont-start-cold-weather.webp',
    imageAlt: 'Car with bonnet open and jump leads attached on a snowy road, car will not start in cold weather',
    readTime: '7 min read',
    date: '2026-10-23',
    published: '23 October 2026',
    category: 'Winter Driving',
  },
  {
    title: 'Winter Tyres vs All-Season Tyres in the UK: Which Should You Choose?',
    desc: 'Compare grip, cost and legality on UK roads, find out which tyre suits your driving, and see when a mobile fitter can swap them at your door.',
    href: '/guides/winter-tyres-vs-all-season-tyres-uk',
    image: '/images/winter-tyres-vs-all-season-tyres-uk.webp',
    imageAlt: 'Winter tyre on a snowy road next to an all-season tyre on a wet road',
    readTime: '6 min read',
    date: '2026-10-22',
    published: '22 October 2026',
    category: 'Buying Guide',
  },
  {
    title: 'Why Your Tyre Pressure Drops in Cold Weather (and How to Fix It)',
    desc: 'Why tyre pressure falls when the temperature drops, how often to check it, and what to do when the warning light will not go off.',
    href: '/guides/tyre-pressure-cold-weather',
    image: '/images/tyre-pressure-cold-weather.webp',
    imageAlt: 'Tyre pressure gauge held against a car tyre on a snowy road',
    readTime: '5 min read',
    date: '2026-10-22',
    published: '22 October 2026',
    category: 'Winter Driving',
  },
  {
    title: 'Tyre Safety Tips for Drivers: August Weather Guide',
    desc: "Changeable August weather is on the way — how to check your tyres before travelling and avoid a breakdown on wet or dry roads.",
    href: '/guides/tyre-safety-tips-greater-manchester-august-weather-guide',
    image: '/images/tyre-fitting-in-emergency.webp',
    imageAlt: 'Mobile tyre technician checking a car tyre at the roadside',
    readTime: '5 min read',
    date: '2026-08-05',
    published: '5 August 2026',
    category: 'Tyre Safety',
  },
  {
    title: 'Met Office Forecast: Mixed August Weather Means Drivers Should Check Their Tyres Now',
    desc: 'Sunshine, showers and rising temperatures all in the same month — why changeable weather makes this the right time for a tyre check.',
    href: '/guides/met-office-august-weather-check-your-tyres',
    image: '/images/mobile-tyre-fitting-manchester.webp',
    imageAlt: 'Mobile tyre fitting in Manchester',
    readTime: '6 min read',
    date: '2026-08-04',
    published: '4 August 2026',
    category: 'Tyre Safety',
  },
  {
    title: 'Run-Flat vs Normal Tyres: What Drivers Need to Know Before Replacing Theirs',
    desc: 'The real difference between run-flat and normal tyres, whether you can mix them, and what it costs to switch — explained without the jargon.',
    href: '/guides/run-flat-vs-normal-tyres-manchester',
    image: '/images/mobile-tyre-fitting-service.webp',
    imageAlt: 'Mobile tyre fitting technician replacing a tyre',
    readTime: '7 min read',
    date: '2026-07-23',
    published: '23 July 2026',
    category: 'Buying Guide',
  },
  {
    title: 'What to Do If You Get a Flat Tyre on the M60 (or Any Motorway)',
    desc: 'A step-by-step safety guide for motorway punctures and blowouts — where to stop, who to call, and how to get moving again without a tow truck.',
    href: '/guides/what-to-do-flat-tyre-m60-manchester-motorway',
    image: '/images/tyre-fitting-in-emergency.webp',
    imageAlt: 'Emergency mobile tyre fitting at the roadside',
    readTime: '9 min read',
    date: '2026-07-19',
    published: '19 July 2026',
    category: 'Safety Guide',
  },
  {
    title: 'How to Tell If Your Tyre Can Be Repaired or Needs Replacing',
    desc: 'A practical, safety-first checklist covering puncture location, size, tread depth and the warning signs that mean a tyre must be replaced.',
    href: '/guides/how-to-tell-if-your-tyre-can-be-repaired-or-needs-replacing',
    image: '/images/tyre-fitting-in-emergency.webp',
    imageAlt: 'Technician inspecting a punctured tyre',
    readTime: '8 min read',
    date: '2026-07-19',
    published: '19 July 2026',
    category: 'Safety Guide',
  },
]

/** All guides, newest first. */
export function getGuides(): GuideSummary[] {
  return [...GUIDES].sort((a, b) => b.date.localeCompare(a.date))
}
