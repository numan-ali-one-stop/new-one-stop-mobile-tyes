import { BOROUGHS, nearbyAreas, type LocationArea } from '@/lib/locations'
import type { LocalArea, LocalDetail } from './types'
import { DETAILS_BURY_BOLTON } from './details-bury-bolton'
import { DETAILS_MANCHESTER } from './details-manchester'
import { DETAILS_OLDHAM_ROCHDALE } from './details-oldham-rochdale'
import { DETAILS_SALFORD_STOCKPORT } from './details-salford-stockport'
import { DETAILS_TAMESIDE_TRAFFORD } from './details-tameside-trafford'
import { DETAILS_WIGAN_NATIONAL } from './details-wigan-national'
import { EXTRA_1 } from './extra-1'
import { EXTRA_2 } from './extra-2'
import { EXTRA_3 } from './extra-3'
import { EXTRA_4 } from './extra-4'
import { BURY_BOLTON } from './bury-bolton'
import { MANCHESTER } from './manchester'
import { OLDHAM_ROCHDALE } from './oldham-rochdale'
import { SALFORD_STOCKPORT } from './salford-stockport'
import { TAMESIDE_TRAFFORD } from './tameside-trafford'
import { WIGAN_NATIONAL } from './wigan-national'

export type { LocalArea, LocalDetail }

/** Local detail for each area page, keyed by location slug. Motorway pages have their own junction content. */
export const LOCAL_AREAS: Record<string, LocalArea> = {
  ...BURY_BOLTON,
  ...MANCHESTER,
  ...OLDHAM_ROCHDALE,
  ...SALFORD_STOCKPORT,
  ...TAMESIDE_TRAFFORD,
  ...WIGAN_NATIONAL,
}

/** Extra local copy (common call-outs, parking/access) for each area page, keyed by location slug. */
export const LOCAL_DETAILS: Record<string, LocalDetail> = {
  ...DETAILS_BURY_BOLTON,
  ...DETAILS_MANCHESTER,
  ...DETAILS_OLDHAM_ROCHDALE,
  ...DETAILS_SALFORD_STOCKPORT,
  ...DETAILS_TAMESIDE_TRAFFORD,
  ...DETAILS_WIGAN_NATIONAL,
}

/** "Before we arrive" — practical, area-specific advice for each area page, keyed by location slug. */
export const LOCAL_EXTRA: Record<string, string> = { ...EXTRA_1, ...EXTRA_2, ...EXTRA_3, ...EXTRA_4 }

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
