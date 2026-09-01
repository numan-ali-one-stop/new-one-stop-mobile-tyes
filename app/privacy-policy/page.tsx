import JsonLd from '@/components/JsonLd'
import { breadcrumbSchema, SITE_URL } from '@/lib/schema'
import { buildMetadata } from '@/lib/seo'

export const metadata = buildMetadata({
  title: 'Privacy Policy | One Stop Mobile Tyres 24/7',
  description:
    'How One Stop Mobile Tyres 24/7 collects, uses and protects your personal data when you visit us.',
  path: '/privacy-policy',
})

const _breadcrumbSchema = breadcrumbSchema([
  { name: 'Home', item: SITE_URL },
  { name: 'Privacy Policy', item: `${SITE_URL}/privacy-policy` },
])

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section className="mb-10">
    <h2 className="text-xl font-bold text-[#0f172a] mb-4 pb-2 border-b border-slate-200">
      {title}
    </h2>
    <div className="space-y-3 text-slate-600 leading-relaxed text-base">{children}</div>
  </section>
)

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-white min-h-screen">
      <JsonLd data={_breadcrumbSchema} />
      {/* Hero */}
      <div className="bg-[#0f172a] py-14 sm:py-20 px-4 sm:px-6 text-white text-center">
        <h1
          className="text-3xl sm:text-4xl font-bold mb-3"
          style={{ fontFamily: 'var(--font-work-sans)' }}
        >
          Privacy Policy
        </h1>
        <p className="text-slate-400 text-base">Last updated: 21 June 2026</p>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <Section title="1. Who We Are">
          <p>
            One Stop Mobile Tyres 24/7 (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) is a mobile
            tyre fitting and roadside assistance service operating across Greater Manchester, UK.
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
          <p>
            We are committed to protecting your personal data and complying with the UK General Data
            Protection Regulation (UK GDPR) and the Data Protection Act 2018.
          </p>
        </Section>

        <Section title="2. Data We Collect">
          <p>We may collect the following personal data when you contact us or use our services:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Name</li>
            <li>Phone number</li>
            <li>Email address</li>
            <li>Vehicle location (for emergency dispatch)</li>
            <li>Vehicle details (make, model, tyre size)</li>
            <li>Technical data: IP address, browser type, pages visited (via Google Analytics)</li>
          </ul>
          <p>
            We do not collect sensitive personal data (e.g. health information, payment card details
            — card payments are processed by third-party terminal providers on-site).
          </p>
        </Section>

        <Section title="3. How We Use Your Data">
          <p>We use your personal data for the following purposes:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Providing mobile tyre fitting and roadside assistance services you have requested</li>
            <li>Responding to enquiries submitted via phone, WhatsApp, or our contact form</li>
            <li>Dispatching a technician to your location</li>
            <li>Sending a quote or booking confirmation</li>
            <li>Analysing website usage to improve our service (anonymised analytics data)</li>
          </ul>
        </Section>

        <Section title="4. Legal Basis for Processing">
          <p>We process your personal data on the following legal grounds:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              <strong>Performance of a contract</strong> — to fulfil the tyre fitting or breakdown
              service you have booked
            </li>
            <li>
              <strong>Legitimate interests</strong> — to respond to enquiries, improve our website,
              and operate our business efficiently
            </li>
            <li>
              <strong>Consent</strong> — for non-essential cookies (analytics). You may withdraw
              consent at any time via your browser settings
            </li>
          </ul>
        </Section>

        <Section title="5. Third Parties We Share Data With">
          <p>We may share your data with the following trusted third parties:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              <strong>Google Analytics (via Google Tag Manager)</strong> — anonymised website usage
              data to help us understand how visitors use our site
            </li>
            <li>
              <strong>Google Maps</strong> — to display our service area and assist with technician
              routing
            </li>
            <li>
              <strong>WhatsApp (Meta Platforms)</strong> — if you contact us via WhatsApp, your
              message is subject to Meta&apos;s privacy policy
            </li>
          </ul>
          <p>We do not sell your personal data to any third party.</p>
        </Section>

        <Section title="6. Data Retention">
          <p>
            We retain personal data only as long as necessary for the purpose it was collected.
            Enquiry and booking records are kept for up to 2 years for customer service and
            accounting purposes. Analytics data is retained as per Google&apos;s default settings
            (14 months).
          </p>
        </Section>

        <Section title="7. Your Rights Under UK GDPR">
          <p>You have the following rights regarding your personal data:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              <strong>Right of access</strong> — request a copy of the data we hold about you
            </li>
            <li>
              <strong>Right to rectification</strong> — request correction of inaccurate data
            </li>
            <li>
              <strong>Right to erasure</strong> — request deletion of your data (&quot;right to be
              forgotten&quot;)
            </li>
            <li>
              <strong>Right to restriction</strong> — request that we limit how we use your data
            </li>
            <li>
              <strong>Right to data portability</strong> — receive your data in a structured,
              machine-readable format
            </li>
            <li>
              <strong>Right to object</strong> — object to processing based on legitimate interests
            </li>
          </ul>
          <p>
            To exercise any of these rights, email us at{' '}
            <a href="mailto:info@onestoptyres247.co.uk" className="text-[#b70011] hover:underline">
              info@onestoptyres247.co.uk
            </a>
            . We will respond within 30 days.
          </p>
        </Section>

        <Section title="8. Cookies">
          <p>
            Our website uses cookies. For full details of the cookies we use and how to control
            them, please see our{' '}
            <a href="/cookie-policy" className="text-[#b70011] hover:underline font-semibold">
              Cookie Policy
            </a>
            .
          </p>
        </Section>

        <Section title="9. Complaints">
          <p>
            If you are unhappy with how we have handled your personal data, you have the right to
            lodge a complaint with the UK Information Commissioner&apos;s Office (ICO):
          </p>
          <p>
            <strong>ICO:</strong>{' '}
            <a
              href="https://ico.org.uk/make-a-complaint"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#b70011] hover:underline"
            >
              ico.org.uk/make-a-complaint
            </a>{' '}
            &nbsp;|&nbsp; 0303 123 1113
          </p>
        </Section>

        <Section title="10. Changes to This Policy">
          <p>
            We may update this Privacy Policy from time to time. The &quot;last updated&quot; date
            at the top of this page will reflect any changes. Continued use of our website after
            changes constitutes acceptance of the updated policy.
          </p>
        </Section>
      </div>
    </main>
  )
}
