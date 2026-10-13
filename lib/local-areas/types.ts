/** Hand-written local detail for one area page — used by <LocalAreaInfo />. */
export interface LocalArea {
  /** Display name, only needed when the area isn't listed in lib/locations.ts. */
  name?: string
  /** Postcode districts covered, e.g. ['M14']. */
  pc: string[]
  /** Main roads / junctions our technicians regularly attend in the area. */
  roads: string[]
  /** Neighbouring areas by display name — linked automatically when we have a page for them. */
  near: string[]
  /** One or two sentences of genuinely local copy. */
  note: string
}
