import AdsLandingPage, { type LandingCard, type LandingFaq, type LandingFeature, type LandingReview } from '@/components/AdsLandingPage'
import { GOOGLE_REVIEWS_URL, MOTORWAY_TYRE_REPLACEMENT_PATH } from '@/lib/constants'
import { buildMetadata } from '@/lib/seo'

/** Google Ads / SEO landing page for "motorway blowout / motorway tyre replacement".
 *  Layout lives in components/AdsLandingPage.tsx. Safety copy follows UK guidance: no tyre changes
 *  on the hard shoulder or live lanes — we attend once the vehicle is somewhere safe. */

export const metadata = buildMetadata({
  title: 'Motorway Tyre Service Near You | 24/7 Tyre Replacement',
  description:
    'Tyre blowout on the motorway? 24/7 motorway tyre replacement once you are safely off the carriageway — services, junctions or recovery points. Call now.',
  path: MOTORWAY_TYRE_REPLACEMENT_PATH,
})

const trustBadges = [
  { icon: 'star', iconClass: 'text-yellow-400', text: '5.0 Stars Throughout (1,200+ Driver Reviews)', href: GOOGLE_REVIEWS_URL },
  { icon: 'timer', iconClass: 'text-[#FF4444]', text: '20–30 Minute Rapid Arrival' },
  { icon: 'route', iconClass: 'text-[#FF4444]', text: 'M60 · M62 · M6 · M61 · M56 · M66 & More' },
]

const services: LandingCard[] = [
  {
    img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Emergency%20Tyre%20Fitting%20one%20Stop-airanko-gsjvsGamoet8drKwCMHYr6LH5Ni6ZI.webp',
    title: '1. Motorway Blowout Tyre Replacement',
    desc: 'A blown or shredded tyre cannot be repaired. We bring a new tyre in your size and fit it once you are safely off the carriageway.',
  },
  {
    img: '/images/tyre-fitting-in-emergency.webp',
    title: '2. Flat Tyre After the Motorway',
    desc: 'Limped off at the next junction or into motorway services on a flat? Tell us exactly where you are and we come straight to you.',
  },
  {
    img: '/images/professional-mobile-tyre-fitting.webp',
    title: '3. Tyre Fitting After Recovery',
    desc: 'If your vehicle has been recovered from the motorway to a safe location, we can meet you there and fit the replacement tyre.',
  },
]

const features: LandingFeature[] = [
  {
    icon: 'schedule',
    title: '24/7 Motorway Tyre Response',
    desc: 'Blowouts do not keep office hours. Our line is answered 24 hours a day, 365 days a year, including nights and bank holidays.',
  },
  {
    icon: 'verified_user',
    title: 'Safety First, Every Time',
    desc: 'We never work on the hard shoulder or in live lanes. We fit your tyre at services, a safe lay-by off the motorway or wherever you have been recovered to.',
  },
  {
    icon: 'tire_repair',
    title: 'Replacement Tyres in Stock',
    desc: 'Common car, SUV and van sizes carried in budget, mid-range and premium brands, so a blowout does not mean a long wait for parts.',
  },
  {
    icon: 'receipt_long',
    title: 'Fixed Upfront Quote',
    desc: 'One clear price for the tyre and fitting, confirmed over the phone before the van leaves.',
  },
]

const reviews: LandingReview[] = [
  {
    initials: 'DM',
    name: 'Dave M.',
    text: 'Blew a tyre late at night on a quiet road. The mobile tyre fitter arrived in 25 minutes and swapped it fast. Incredible emergency service!',
  },
  {
    initials: 'JT',
    name: 'James T.',
    text: 'Transparent upfront pricing over the phone with no hidden costs. The technician arrived quickly and was very professional. Highly recommend!',
  },
  {
    initials: 'SK',
    name: 'Sarah K.',
    text: 'Stuck on my driveway in town before work with a flat tyre. They came out fast, replaced the tyre on-site, and got me to work on time. 5-star service!',
  },
]

const faqs: LandingFaq[] = [
  {
    q: 'What should I do if a tyre blows out on the motorway?',
    a: 'Keep a firm grip on the wheel, do not brake hard, and let the car slow down gradually. If you can, leave at the next exit or pull into services. If you have to stop on the hard shoulder or in an emergency area, put your hazard lights on, get everyone out of the passenger side and wait behind the barrier.',
  },
  {
    q: 'Will you change my tyre on the hard shoulder?',
    a: 'No. Changing a tyre on the hard shoulder or in a live lane is extremely dangerous. If you are stopped on the motorway, contact National Highways (0300 123 5000) or your breakdown provider, and call 999 if you are in danger. Once your vehicle is somewhere safe, we will come and fit the replacement tyre.',
  },
  {
    q: 'Where can you fit my tyre after a motorway blowout?',
    a: 'At motorway services, a safe lay-by or car park after the junction, or wherever your vehicle has been recovered to. Tell us the motorway, junction number or send a WhatsApp location pin.',
  },
  {
    q: 'Can a blown tyre be repaired?',
    a: 'No. A blowout destroys the tyre structure, so it always needs replacing. We bring a new tyre in your size and fit it on site.',
  },
  {
    q: 'Which motorways do you cover?',
    a: 'We regularly attend drivers coming off the M60, M62, M6, M61, M56, M66, M602, M67 and A627(M), and further afield. Call us with your location and we will confirm how quickly we can reach you.',
  },
  {
    q: 'How quickly can you get to me?',
    a: 'Our average arrival time is 20 to 30 minutes. The exact time depends on where you are, traffic and the tyre size you need, and we will give you an estimate when you call.',
  },
  {
    q: 'What details do I need when I call?',
    a: 'The motorway and nearest junction or services, your vehicle registration or tyre size, and whether you have your locking wheel nut key.',
  },
]

export default function MotorwayTyreReplacementPage() {
  return (
    <AdsLandingPage
      slug={MOTORWAY_TYRE_REPLACEMENT_PATH.slice(1)}
      h1="Motorway Tyre Service Near You"
      heroBadge="Motorway Tyre Fitters Available Now"
      intro={
        <>
          Tyre blowout or flat on the motorway? Once you are safely off the carriageway — at services, a junction or
          wherever you have been recovered to — our mobile fitters bring a new tyre to you in{' '}
          <strong>20–30 minutes</strong>, 24/7.
        </>
      }
      ctaLabel="CALL NOW FOR MOTORWAY TYRE HELP"
      trustBadges={trustBadges}
      quoteArea="Motorway Tyre Replacement landing page"
      servicesHeading="Motorway Tyre Replacement When You Need It"
      servicesIntro="A motorway blowout is frightening. Get to safety first — then let our mobile tyre fitters bring the replacement tyre to you."
      services={services}
      featuresHeading="Why Drivers Trust Us After a Motorway Blowout"
      features={features}
      reviews={reviews}
      stepsHeading="4 Steps to Get Back on the Motorway"
      faqs={faqs}
      schema={{
        name: 'Motorway Tyre Service',
        serviceType: 'Motorway Tyre Replacement',
        description:
          '24/7 motorway blowout tyre replacement. A mobile fitter brings a new tyre and fits it once the vehicle is safely off the carriageway, at services, a junction or a recovery location.',
      }}
    />
  )
}
