/* ─── Shared "Why Choose Us" section (Bolton design) ─────── */

function FeatureItem({
  icon,
  title,
  desc,
  bg,
  iconColor,
}: {
  icon: string
  title: string
  desc: string
  bg: string
  iconColor: string
}) {
  return (
    <div className="flex gap-3 sm:gap-4">
      <div className={`${bg} w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center shrink-0`}>
        <span className={`material-symbols-outlined ${iconColor} text-xl sm:text-2xl`}>{icon}</span>
      </div>
      <div>
        <h4 className="font-bold text-base sm:text-lg mb-1 sm:mb-2 text-[#0f172a]">{title}</h4>
        <p className="text-[#5c403c] leading-relaxed text-base">{desc}</p>
      </div>
    </div>
  )
}

interface WhyChooseUsProps {
  city: string
  image?: string
  /** 'road' fixes the grammar for motorway/road pages ("on the M60" instead of "in M60"). Defaults to 'city'. */
  locationType?: 'city' | 'road'
  /** Overrides the response-time feature title/description — for pages outside the 20-30 min Greater Manchester radius. */
  responseTitle?: string
  responseDesc?: string
  /** Full heading override, e.g. "Why Oldham Drivers Choose One Stop Mobile Tyres 24/7" — bypasses the "?" auto-append. */
  heading?: string
  callOutTitle?: string
  callOutDesc?: string
  certifiedTitle?: string
  certifiedDesc?: string
}

export default function WhyChooseUs({
  city,
  image,
  locationType = 'city',
  responseTitle: responseTitleOverride,
  responseDesc,
  heading: headingOverride,
  callOutTitle,
  callOutDesc,
  certifiedTitle,
  certifiedDesc,
}: WhyChooseUsProps) {
  const imgSrc = image ?? "/images/mobile-tyre-fitting-service.webp"
  const heading = headingOverride ?? (locationType === 'road' ? `Why Drivers Choose Us on the ${city}?` : `Why ${city} Drivers Choose Us?`)
  const responseTitle = responseTitleOverride ?? (locationType === 'road' ? `Fastest Response on the ${city}` : `Fastest Response in ${city}`)
  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        {/* Image */}
        <div className="order-2 lg:order-1">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="rounded-2xl shadow-xl w-full object-cover h-[250px] sm:h-[350px] lg:h-auto"
            src={imgSrc}
            alt="Mobile tyre fitting service"
            width={800}
            height={600}
            loading="lazy"
            decoding="async"
          />
        </div>

        {/* Content */}
        <div className="order-1 lg:order-2">
          <span className="text-[#b70011] font-bold uppercase tracking-widest text-xs sm:text-sm mb-2 sm:mb-3 block">
            The Best Choice
          </span>
          <h2
            className="text-xl sm:text-2xl lg:text-4xl font-bold text-[#0f172a] mb-4 sm:mb-6 leading-tight"
            style={{ fontFamily: 'var(--font-work-sans)' }}
          >
            {heading}
          </h2>
          <div className="space-y-5 sm:space-y-6 lg:space-y-8">
            <FeatureItem
              icon="speed"
              title={responseTitle}
              desc={responseDesc ?? "Strategically based to reach you within 20-30 minutes — at home, work, or roadside."}
              bg="bg-[#ffdad6]"
              iconColor="text-[#410002]"
            />
            <FeatureItem
              icon="sell"
              title={callOutTitle ?? "No Hidden Call-out Fees"}
              desc={callOutDesc ?? "Transparent pricing given upfront. The price we quote over the phone is the price you pay on-site."}
              bg="bg-[#c8e6ff]"
              iconColor="text-[#001e2e]"
            />
            <FeatureItem
              icon="verified_user"
              title={certifiedTitle ?? "Fully Certified Technicians"}
              desc={certifiedDesc ?? "All our fitters are IMI certified and insured to work on everything from family hatchbacks to prestige electric vehicles."}
              bg="bg-[#d7e2ff]"
              iconColor="text-[#001b3f]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
