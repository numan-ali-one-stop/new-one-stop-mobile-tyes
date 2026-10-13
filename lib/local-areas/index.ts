import { BOROUGHS, nearbyAreas, type LocationArea } from '@/lib/locations'
import type { LocalArea } from './types'
import { BURY_BOLTON } from './bury-bolton'
import { MANCHESTER } from './manchester'
import { OLDHAM_ROCHDALE } from './oldham-rochdale'
import { SALFORD_STOCKPORT } from './salford-stockport'
import { TAMESIDE_TRAFFORD } from './tameside-trafford'
import { WIGAN_NATIONAL } from './wigan-national'

export type { LocalArea }

/** Local detail for each area page, keyed by location slug. Motorway pages have their own junction content. */
export const LOCAL_AREAS: Record<string, LocalArea> = {
  ...BURY_BOLTON,
  ...MANCHESTER,
  ...OLDHAM_ROCHDALE,
  ...SALFORD_STOCKPORT,
  ...TAMESIDE_TRAFFORD,
  ...WIGAN_NATIONAL,
}

const normalise = (s: string) => s.toLowerCase().replace(/[^a-z0-9]/g, '')

const SLUG_BY_NAME = new Map<string, string>()
const NAME_BY_SLUG = new Map<string, string>()
for (const borough of BOROUGHS) {
  if (borough.slug) {
    SLUG_BY_NAME.set(normalise(borough.name), borough.slug)
    NAME_BY_SLUG.set(borough.slug, borough.name)
  }
  for (const town of borough.towns) {
    SLUG_BY_NAME.set(normalise(town.name), town.slug)
    NAME_BY_SLUG.set(town.slug, town.name)
  }
}
for (const [slug, area] of Object.entries(LOCAL_AREAS)) {
  if (area.name) {
    SLUG_BY_NAME.set(normalise(area.name), slug)
    NAME_BY_SLUG.set(slug, area.name)
  }
}

/** Display name for an area page slug, e.g. "chorlton-cum-hardy" → "Chorlton-cum-Hardy". */
export function areaName(slug: string): string | undefined {
  return NAME_BY_SLUG.get(slug)
}

/**
 * Up to `max` linked areas closest to `slug`: its hand-listed neighbours first (in proximity
 * order), topped up from the same borough so there are always at least `min` where possible.
 */
export function closestAreas(slug: string, min = 4, max = 6): LocationArea[] {
  const result: LocationArea[] = []
  const add = (s: string | undefined) => {
    if (!s || s === slug || result.some((a) => a.slug === s) || result.length >= max) return
    const name = NAME_BY_SLUG.get(s)
    if (name) result.push({ name, slug: s })
  }
  for (const n of LOCAL_AREAS[slug]?.near ?? []) add(SLUG_BY_NAME.get(normalise(n)))
  for (const a of nearbyAreas(slug)) {
    if (result.length >= min) break
    add(a.slug)
  }
  return result
}
