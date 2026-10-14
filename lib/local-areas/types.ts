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
  /** Local landmarks to name on the page (Area Audit: "Local anchors to add on page"). */
  landmarks?: string[]
  /** One or two sentences of genuinely local copy. */
  note: string
}

/** Extra hand-written local copy for an area page (issue 24: 150–250 local words per page). */
export interface LocalDetail {
  /** The situations we are most often called out for in this area. */
  scenarios: string
  /** What parking / access is like, and how we work around it. */
  parking: string
}
