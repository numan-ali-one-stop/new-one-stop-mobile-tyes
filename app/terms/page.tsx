import JsonLd from '@/components/JsonLd'
import { breadcrumbSchema, SITE_URL } from '@/lib/schema'
import { buildMetadata } from '@/lib/seo'

export const metadata = buildMetadata({
  title: 'Terms & Conditions | One Stop Mobile Tyres 24/7',
  description:
    'Terms and conditions for One Stop Mobile Tyres 24/7 mobile tyre fitting services across Manchester.',
  path: '/terms',
})

const _breadcrumbSchema = breadcrumbSchema([
  { name: 'Home', item: SITE_URL },
  { name: 'Terms & Conditions', item: `${SITE_URL}/terms` },
])

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section className="mb-10">
    <h2 className="text-xl font-bold text-[#0f172a] mb-4 pb-2 border-b border-slate-200">
      {title}
    </h2>
    <div className="space-y-3 text-slate-600 leading-relaxed text-base">{children}</div>
  </section>
)

export default function TermsPage() {
  return (
    <main className="bg-white min-h-screen">
      <JsonLd data={_breadcrumbSchema} />
      {/* Hero */}
      <div className="bg-[#0f172a] py-14 sm:py-20 px-4 sm:px-6 text-white text-center">
        <h1
          className="text-3xl sm:text-4xl font-bold mb-3"
          style={{ fontFamily: 'var(--font-work-sans)' }}
        >
          Terms &amp; Conditions
        </h1>
        <p className="text-slate-400 text-base">Last updated: 21 June 2026</p>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <p className="text-slate-500 text-sm mb-10 p-4 bg-slate-50 rounded-xl border border-slate-200">
          Please read these Terms &amp; Conditions carefully before using our services. By engaging
          One Stop Mobile Tyres 24/7, you agree to be bound by these terms.
        </p>

        <Section title="1. About Us">
          <p>
            One Stop Mobile Tyres 24/7 (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;,
            &quot;the Company&quot;) provides mobile tyre fitting, puncture repair, jump start, TPMS
            reset, and locking wheel nut removal services across Greater Manchester, UK.
          </p>
          <p>
            <strong>Contact:</strong>{' '}
            <a href="mailto:info@onestoptyres247.co.uk" className="text-[#b70011] hover:underline">
              info@onestoptyres247.co.uk
            </a>{' '}
            &nbsp;|&nbsp;{' '}
            <a href="tel:07759708646" className="text-[#b70011] hover:underline">
              07759 708 646
            </a>
          </p>
        </Section>

        <Section title="2. Services">
          <p>
            We offer the following services (each a &quot;Service&quot;):
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Mobile tyre fitting and replacement</li>
            <li>Emergency puncture repair</li>
            <li>Home tyre fitting</li>
            <li>Jump start assistance</li>
            <li>TPMS sensor reset and replacement</li>
            <li>Locking wheel nut removal</li>
          </ul>
          <p>
            We reserve the right to refuse any service where it is not safe or technically feasible
            to proceed, at the discretion of our technician.
          </p>
        </Section>

        <Section title="3. Bookings & Enquiries">
          <p>
            Bookings and enquiries are accepted by telephone, WhatsApp, or via our website contact
            form. A booking is confirmed only when we have acknowledged receipt and agreed an
            appointment time with you.
          </p>
          <p>
            Estimated arrival times are provided in good faith but are subject to traffic conditions,
            demand, and technician availability. We are not liable for delays beyond our reasonable
            control.
          </p>
        </Section>

        <Section title="4. Pricing & Payment">
          <p>
            All prices are quoted inclusive of labour. Tyre prices depend on the size, brand, and
            availability at the time of booking. We will provide a quote before commencing work; by
            authorising us to proceed, you agree to pay the quoted price.
          </p>
          <p>
            Payment is due on completion of the Service. We accept all major debit and credit cards,
            contactless payments, and cash. We do not offer credit terms.
          </p>
          <p>
            We reserve the right to amend pricing for additional work discovered during the Service
            (e.g. additional damaged components), subject to your prior approval.
          </p>
        </Section>

        <Section title="5. Cancellation">
          <p>
            You may cancel a booking at any time before our technician departs for your location
            free of charge. If a technician has already been dispatched and is en route, a call-out
            fee may apply.
          </p>
          <p>
            We reserve the right to cancel or reschedule any appointment due to unforeseen
            circumstances, including but not limited to severe weather, technical failure, or staff
            shortage. We will provide as much notice as possible in such cases.
          </p>
        </Section>

        <Section title="6. Your Responsibilities">
          <p>To enable us to carry out the Service safely, you agree to:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              Ensure the vehicle is in a safe and accessible location with sufficient space for our
              technician to work
            </li>
            <li>
              Provide accurate information about your vehicle, tyre size, and location
            </li>
            <li>
              Inform us of any known vehicle defects that may affect the safe completion of the
              Service
            </li>
            <li>
              Provide your locking wheel nut key if applicable (our technicians carry specialist
              removal tools but the key assists in most cases)
            </li>
          </ul>
        </Section>

        <Section title="7. Warranties & Guarantees">
          <p>
            New tyres are supplied with the manufacturer&apos;s standard warranty. Our workmanship
            is guaranteed for 30 days from the date of fitting under normal use.
          </p>
          <p>
            Puncture repairs are carried out in accordance with British Standard BS AU 159. We will
            only carry out a puncture repair where it is safe and within industry guidelines to do
            so. Where a tyre cannot be safely repaired, we will advise replacement.
          </p>
        </Section>

        <Section title="8. Limitation of Liability">
          <p>
            We accept liability for death or personal injury caused by our negligence, and for
            fraudulent misrepresentation. Nothing in these Terms limits or excludes our liability in
            such cases.
          </p>
          <p>
            Subject to the above, our total liability to you for any loss or damage arising under or
            in connection with the Service shall not exceed the total price paid for the specific
            Service giving rise to the claim.
          </p>
          <p>
            We are not liable for indirect or consequential losses including loss of profits, loss of
            earnings, or damage to third-party property unless caused by our negligence.
          </p>
        </Section>

        <Section title="9. Intellectual Property">
          <p>
            All content on our website, including text, images, logos, and design, is the property
            of One Stop Mobile Tyres 24/7 or its licensors. You may not reproduce, distribute, or
            use any content without our prior written permission.
          </p>
        </Section>

        <Section title="10. Privacy">
          <p>
            Your use of our website and services is also governed by our{' '}
            <a href="/privacy-policy" className="text-[#b70011] hover:underline font-semibold">
              Privacy Policy
            </a>{' '}
            and{' '}
            <a href="/cookie-policy" className="text-[#b70011] hover:underline font-semibold">
              Cookie Policy
            </a>
            , which are incorporated into these Terms by reference.
          </p>
        </Section>

        <Section title="11. Governing Law">
          <p>
            These Terms &amp; Conditions are governed by and construed in accordance with the laws
            of England and Wales. Any dispute arising under these Terms shall be subject to the
            exclusive jurisdiction of the courts of England and Wales.
          </p>
        </Section>

        <Section title="12. Changes to These Terms">
          <p>
            We reserve the right to update these Terms at any time. The &quot;last updated&quot;
            date at the top of this page will reflect any changes. Continued use of our services
            after changes are posted constitutes acceptance of the updated Terms.
          </p>
        </Section>

        <Section title="13. Contact Us">
          <p>
            For any questions about these Terms &amp; Conditions, please contact us at{' '}
            <a href="mailto:info@onestoptyres247.co.uk" className="text-[#b70011] hover:underline">
              info@onestoptyres247.co.uk
            </a>{' '}
            or call{' '}
            <a href="tel:07759708646" className="text-[#b70011] hover:underline">
              07759 708 646
            </a>
            .
          </p>
        </Section>
      </div>
    </main>
  )
}
