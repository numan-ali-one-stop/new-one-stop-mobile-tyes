'use client'

import { useState } from 'react'
import { BOROUGHS } from '@/lib/locations'

interface AreaCardData {
  name: string
  boroughKey: string
  href: string
  icon: string
  postcodes: string
  desc: string
}

interface RoadCardData {
  name: string
  href: string
  junctions: string
  desc: string
}

export interface ServiceAreaRegion {
  name: string
  label: string
  heading: string
  description: string
  areas: AreaCardData[]
  roadsHeading?: string
  roads?: RoadCardData[]
}

/** One borough/city card — hub link, postcode badge, "Also Covering" town chips, and a footer link. */
function AreaCard({ area }: { area: AreaCardData }) {
  const towns = BOROUGHS.find((b) => b.name === area.boroughKey)?.towns ?? []
  return (
    <div className="group flex flex-col bg-white rounded-2xl border-2 border-slate-100 shadow-md hover:shadow-2xl hover:border-primary hover:-translate-y-1 transition-all duration-300 overflow-hidden">
      <div className="h-1.5 bg-primary" />
      <a href={area.href} className="flex items-center gap-4 px-5 pt-5 pb-3">
        <div className="bg-primary p-3.5 rounded-2xl shrink-0 shadow-md shadow-primary/30">
          <span aria-hidden="true" data-nosnippet className="material-symbols-outlined text-white text-[28px]">
            {area.icon}
          </span>
        </div>
        <div className="min-w-0">
          <h3 className="text-xl sm:text-2xl font-extrabold text-[#0f172a] leading-snug" style={{ fontFamily: 'var(--font-work-sans)' }}>
            {area.name}
          </h3>
          <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full">
            {area.postcodes}
          </span>
        </div>
      </a>
      <a href={area.href} className="px-5 pb-4 block">
        <p className="font-body-md text-body-md text-on-surface-variant text-base leading-relaxed">
          {area.desc}
        </p>
      </a>
      {towns.length > 0 && (
        <div className="px-5 pb-5">
          <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-2 block">
            Also Covering
          </span>
          <div className="flex flex-wrap gap-2">
            {towns.map((town) => (
              <a
                key={town.slug}
                href={`/mobile-tyre-fitting-${town.slug}`}
                className="text-xs font-bold text-primary bg-primary/5 hover:bg-primary hover:text-white border-2 border-primary/20 hover:border-primary px-3 py-1.5 rounded-full transition-colors"
              >
                {town.name}
              </a>
            ))}
          </div>
        </div>
      )}
      <a
        href={area.href}
        className="mt-auto bg-primary hover:bg-[#dc2626] text-white px-5 py-3.5 flex items-center justify-between font-bold text-sm uppercase tracking-wide transition-colors"
      >
        View {area.name} Coverage
        <span aria-hidden="true" data-nosnippet className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">
          arrow_forward
        </span>
      </a>
    </div>
  )
}

/** One motorway/road card. */
function RoadCard({ road }: { road: RoadCardData }) {
  return (
    <a
      href={road.href}
      className="group bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-primary/30 transition-all p-5 flex flex-col gap-3"
    >
      <div className="flex items-center justify-between">
        <span className="bg-secondary text-white font-black text-base px-3 py-1 rounded-lg tracking-wide">
          {road.name}
        </span>
        <span aria-hidden="true" data-nosnippet className="material-symbols-outlined text-primary group-hover:translate-x-0.5 transition-transform">
          arrow_forward
        </span>
      </div>
      <div className="flex items-center gap-1.5 text-xs text-on-surface-variant font-semibold">
        <span aria-hidden="true" data-nosnippet className="material-symbols-outlined text-sm text-primary">route</span>
        {road.junctions}
      </div>
      <p className="text-sm text-on-surface-variant leading-relaxed flex-1">{road.desc}</p>
      <span className="text-xs font-bold text-primary uppercase tracking-wide">
        View coverage
      </span>
    </a>
  )
}

/**
 * Region-level accordion — collapsed by default so mobile visitors see just the
 * three region names first, and only load/see a region's boroughs/towns after
 * tapping it.
 */
export default function ServiceAreaRegions({ regions }: { regions: ServiceAreaRegion[] }) {
  const [expanded, setExpanded] = useState<Set<string>>(new Set())

  function toggleRegion(name: string) {
    setExpanded((prev) => {
      const next = new Set(prev)
      if (next.has(name)) next.delete(name)
      else next.add(name)
      return next
    })
  }

  return (
    <div className="py-12 sm:py-16 px-4 sm:px-5 max-w-7xl mx-auto space-y-4 sm:space-y-5">
      {regions.map((region) => {
        const isOpen = expanded.has(region.name)
        return (
          <div key={region.name} className="rounded-2xl border-2 border-slate-100 bg-white shadow-sm overflow-hidden">
            <button
              type="button"
              onClick={() => toggleRegion(region.name)}
              aria-expanded={isOpen}
              className="w-full flex items-center justify-between gap-4 px-5 sm:px-8 py-5 sm:py-7 text-left"
            >
              <div className="min-w-0">
                <span className="text-primary font-bold uppercase tracking-widest text-xs sm:text-sm mb-1 block">
                  {region.label}
                </span>
                <h2 className="font-h2 text-lg sm:text-2xl lg:text-h2 text-secondary text-balance leading-tight">
                  {region.heading}
                </h2>
                <p className="font-body-md text-xs sm:text-sm text-on-surface-variant mt-1.5 max-w-xl text-pretty">
                  {region.description}
                </p>
              </div>
              <span
                aria-hidden="true"
                data-nosnippet
                className={`material-symbols-outlined text-primary text-2xl sm:text-3xl shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
              >
                expand_more
              </span>
            </button>

            {isOpen && (
              <div className="px-5 sm:px-8 pb-6 sm:pb-8 border-t border-slate-100 pt-6 sm:pt-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
                  {region.areas.map((area) => (
                    <AreaCard key={area.name} area={area} />
                  ))}
                </div>

                {region.roads && region.roads.length > 0 && (
                  <div className="mt-8 sm:mt-10">
                    {region.roadsHeading && (
                      <h3 className="font-h3 text-sm sm:text-base text-secondary font-bold uppercase tracking-wide mb-4">
                        {region.roadsHeading}
                      </h3>
                    )}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                      {region.roads.map((road) => (
                        <RoadCard key={road.name} road={road} />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
