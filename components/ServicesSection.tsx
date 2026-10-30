import { PHONE, PHONE_TEL } from '@/lib/constants'

const SERVICES = [
  {
    img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Emergency%20Tyre%20Fitting%20one%20Stop-airanko-gsjvsGamoet8drKwCMHYr6LH5Ni6ZI.webp',
    title: 'Mobile Tyre Fitting',
    desc: 'Emergency mobile tyre fitting at your home, work or roadside location, typically within 20–30 minutes.',
    badge: 'FAST RESPONSE',
    href: '/mobile-tyre-fitting',
  },
  {
    img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Home%20Tyre%20Fitting%20One%20Stop-airanko-kPAsyn08SjxXwLwCVhxre5zM9jWBTs.webp',
    title: 'Home Tyre Fitting',
    desc: 'Same day tyre fitting at home while you get on with your day — no garage visit required.',
    badge: 'AT YOUR DOOR',
    href: '/home-tyre-fitting',
  },
  {
    img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Puncture%20Repair%20One%20Stop-airanko-sfmhLvDbSYmhoMprTVOHCcIWEgJvHf.webp',
    title: 'Emergency Puncture Repair',
    desc: 'Certified, BS AU 159 compliant plug-and-patch puncture repair, fitted on-site.',
    badge: 'CERTIFIED REPAIR',
    href: '/puncture-repair-Greater-manchester',
  },
  {
    img: '/images/professional-mobile-tyre-fitting.webp',
    title: 'Roadside Assistance',
    desc: 'Emergency roadside support for tyre and vehicle problems, wherever you get stranded.',
    badge: '24/7 SUPPORT',
    href: '/roadside-assistance',
  },
  {
    img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/One%20Stop%20Jumpstart%20image-airanko-cXmOrXcdtaIBMNQOMCIOiPj1C290RG.webp',
    title: 'Jump Start',
    desc: "Flat battery as well as a flat tyre? We'll get your car started again in minutes.",
    badge: '24/7 SERVICE',
    href: '/jump-start',
  },
  {
    img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Tyre%20pressure%20monitor-airanko-sjz7PL2Pv4N9jlPWtz5Wa1q8XO0FgP.webp',
    title: 'TPMS Reset',
    desc: 'Tyre pressure monitoring system reset and diagnostics after every fitting or repair.',
    badge: 'ALL VEHICLES',
    href: '/tpms-reset',
  },
  {
    img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Locking%20nut%20removal-airanko%20%281%29-ONBmqaZHMozU0jjrxbPe5J7C4zRQkS.webp',
    title: 'Locking Nut Removal',
    desc: 'Damage-free removal of lost or seized locking wheel nuts using specialist tools.',
    badge: 'DAMAGE FREE',
    href: '/locking-nut-removal',
  },
]

/** "Our Services" card grid + call strip. Used on the homepage and the main service pages.
 *  `exclude` hides the card for the page it's rendered on; `cta={false}` drops the call strip
 *  where a final CTA section already follows; `heading` overrides the H2. */
export default function ServicesSection({
  exclude,
  bg = 'bg-slate-50',
  cta = true,
  heading,
}: {
  exclude?: string
  bg?: string
  cta?: boolean
  heading?: string
}) {
  const cards = SERVICES.filter((card) => card.href !== exclude)
  return (
    <section className={`py-16 sm:py-24 px-4 sm:px-6 ${bg}`}>
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-10 sm:mb-16">
          <span className="text-[#b70011] font-bold uppercase tracking-widest text-sm mb-2 block">
            Our Services
          </span>
          <h2
            className="text-2xl sm:text-[32px] font-bold text-slate-900 mb-3 leading-tight"
            style={{ fontFamily: 'var(--font-work-sans)', letterSpacing: '-0.01em' }}
          >
            {heading ?? (exclude ? 'Our Other Tyre Services Near You' : 'Our Tyre Services Near You')}
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-base">
            From emergency tyre problems to planned tyre fitting, our mobile team provides practical
            tyre services at your location.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {cards.map((card) => (
            <a
              key={card.title}
              href={card.href}
              className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all overflow-hidden border-b-4 border-[#b70011] cursor-pointer"
            >
              <div className="relative h-44 sm:h-52 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  width={600}
                  height={400}
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <span className="absolute top-3 left-3 text-xs font-bold text-white bg-[#b70011] px-3 py-1 rounded-full">
                  {card.badge}
                </span>
              </div>
              <div className="p-5 sm:p-6">
                <h3
                  className="text-base sm:text-lg font-semibold mb-2 text-[#0f172a]"
                  style={{ fontFamily: 'var(--font-work-sans)' }}
                >
                  {card.title}
                </h3>
                <p className="text-slate-600 text-base leading-relaxed mb-3">{card.desc}</p>
                <div className="flex items-center justify-end">
                  <span aria-hidden="true" data-nosnippet className="material-symbols-outlined text-slate-400 group-hover:text-[#b70011] group-hover:translate-x-1 transition-all">
                    arrow_forward
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* CTA strip */}
        {cta && <div className="mt-10 sm:mt-12 bg-[#0f172a] rounded-2xl sm:rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-5 shadow-2xl text-center sm:text-left">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">Need Immediate Assistance?</h3>
            <p className="text-slate-400 text-base">
              Speak directly to a technician for an instant quote and arrival time.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto">
            <a
              href={`tel:${PHONE_TEL}`}
              className="bg-[#dc2626] text-white font-black px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-lg sm:text-2xl hover:scale-105 transition-transform shadow-lg shadow-red-900/20 whitespace-nowrap w-full sm:w-auto text-center"
              style={{ fontFamily: 'var(--font-work-sans)' }}
            >
              {PHONE}
            </a>
          </div>
        </div>}
      </div>
    </section>
  )
}
