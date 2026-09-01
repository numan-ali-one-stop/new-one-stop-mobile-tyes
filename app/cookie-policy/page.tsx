import JsonLd from '@/components/JsonLd'
import { breadcrumbSchema, SITE_URL } from '@/lib/schema'
import { buildMetadata } from '@/lib/seo'

export const metadata = buildMetadata({
  title: 'Cookie Policy | One Stop Mobile Tyres 24/7',
  description:
    'How One Stop Mobile Tyres 24/7 uses cookies and analytics, and how to manage your preferences here.',
  path: '/cookie-policy',
})

const _breadcrumbSchema = breadcrumbSchema([
  { name: 'Home', item: SITE_URL },
  { name: 'Cookie Policy', item: `${SITE_URL}/cookie-policy` },
])

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section className="mb-10">
    <h2 className="text-xl font-bold text-[#0f172a] mb-4 pb-2 border-b border-slate-200">
      {title}
    </h2>
    <div className="space-y-3 text-slate-600 leading-relaxed text-base">{children}</div>
  </section>
)

const cookieRows = [
  {
    name: '_ga',
    provider: 'Google Analytics',
    purpose: 'Distinguishes unique users by assigning a randomly generated number as a client identifier.',
    type: 'Analytics',
    duration: '2 years',
  },
  {
    name: '_ga_*',
    provider: 'Google Analytics',
    purpose: 'Used to persist session state for GA4.',
    type: 'Analytics',
    duration: '2 years',
  },
  {
    name: '_gid',
    provider: 'Google Analytics',
    purpose: 'Stores and updates a unique value for each page visited.',
    type: 'Analytics',
    duration: '24 hours',
  },
  {
    name: '_gat',
    provider: 'Google Analytics',
    purpose: 'Used to throttle request rate.',
    type: 'Analytics',
    duration: '1 minute',
  },
  {
    name: '_gtm_*',
    provider: 'Google Tag Manager',
    purpose: 'Container cookies set by GTM to manage tag firing.',
    type: 'Functional',
    duration: 'Session',
  },
]

export default function CookiePolicyPage() {
  return (
    <main className="bg-white min-h-screen">
      <JsonLd data={_breadcrumbSchema} />
      {/* Hero */}
      <div className="bg-[#0f172a] py-14 sm:py-20 px-4 sm:px-6 text-white text-center">
        <h1
          className="text-3xl sm:text-4xl font-bold mb-3"
          style={{ fontFamily: 'var(--font-work-sans)' }}
        >
          Cookie Policy
        </h1>
        <p className="text-slate-400 text-base">Last updated: 21 June 2026</p>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <Section title="1. What Are Cookies?">
          <p>
            Cookies are small text files placed on your device when you visit a website. They are
            widely used to make websites work efficiently, to remember your preferences, and to
            provide information to website owners.
          </p>
          <p>
            This policy explains what cookies we use on{' '}
            <strong>onestoptyres247.co.uk</strong>, why we use them, and how you can control them.
          </p>
        </Section>

        <Section title="2. Cookies We Use">
          <p>We use the following categories of cookies:</p>

          <div className="mt-4 space-y-4">
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-5">
              <h3 className="font-bold text-[#0f172a] mb-1">Strictly Necessary</h3>
              <p className="text-sm text-slate-500">
                Essential for the website to function. They cannot be switched off. No personal
                information is stored. These are set in response to actions you take such as setting
                your privacy preferences.
              </p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-5">
              <h3 className="font-bold text-[#0f172a] mb-1">Analytics (Google Analytics / GA4)</h3>
              <p className="text-sm text-slate-500">
                Help us understand how visitors interact with our website by collecting and reporting
                information anonymously. We use Google Analytics 4 via Google Tag Manager. IP
                addresses are anonymised before processing.
              </p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-5">
              <h3 className="font-bold text-[#0f172a] mb-1">Functional (Google Tag Manager)</h3>
              <p className="text-sm text-slate-500">
                Google Tag Manager itself does not set cookies, but it fires tags that may set
                cookies. We use GTM to deploy analytics and marketing tags without modifying site
                code directly.
              </p>
            </div>
          </div>
        </Section>

        <Section title="3. Cookie Details">
          <div className="overflow-x-auto -mx-4 sm:mx-0">
            <table className="w-full text-sm border-collapse min-w-[560px]">
              <thead>
                <tr className="bg-[#0f172a] text-white">
                  <th className="text-left px-3 py-2 font-semibold rounded-tl-lg">Cookie</th>
                  <th className="text-left px-3 py-2 font-semibold">Provider</th>
                  <th className="text-left px-3 py-2 font-semibold">Purpose</th>
                  <th className="text-left px-3 py-2 font-semibold">Type</th>
                  <th className="text-left px-3 py-2 font-semibold rounded-tr-lg">Duration</th>
                </tr>
              </thead>
              <tbody>
                {cookieRows.map((row, i) => (
                  <tr
                    key={row.name}
                    className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}
                  >
                    <td className="px-3 py-2 font-mono text-[#b70011] font-semibold whitespace-nowrap">
                      {row.name}
                    </td>
                    <td className="px-3 py-2 whitespace-nowrap">{row.provider}</td>
                    <td className="px-3 py-2 text-slate-500">{row.purpose}</td>
                    <td className="px-3 py-2 whitespace-nowrap">{row.type}</td>
                    <td className="px-3 py-2 whitespace-nowrap">{row.duration}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        <Section title="4. Third-Party Cookies">
          <p>
            Google Analytics and Google Tag Manager are services provided by Google LLC. Data
            collected may be transferred to and stored on servers in the United States. Google is
            certified under the EU–US Data Privacy Framework, providing appropriate safeguards.
          </p>
          <p>
            For more information, see{' '}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#b70011] hover:underline"
            >
              Google&apos;s Privacy Policy
            </a>
            .
          </p>
        </Section>

        <Section title="5. How to Control Cookies">
          <p>You can control and/or delete cookies as you wish. You can:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              <strong>Browser settings</strong> — most browsers allow you to refuse or delete
              cookies. See your browser&apos;s help documentation for instructions.
            </li>
            <li>
              <strong>Google Analytics opt-out</strong> — install the{' '}
              <a
                href="https://tools.google.com/dlpage/gaoptout"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#b70011] hover:underline"
              >
                Google Analytics Opt-out Browser Add-on
              </a>
              .
            </li>
            <li>
              <strong>Google Ads settings</strong> — manage preferences at{' '}
              <a
                href="https://adssettings.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#b70011] hover:underline"
              >
                adssettings.google.com
              </a>
              .
            </li>
          </ul>
          <p>
            Please note: disabling cookies may affect the functionality of our website and some
            features may not work correctly.
          </p>
        </Section>

        <Section title="6. Changes to This Policy">
          <p>
            We may update this Cookie Policy from time to time. The &quot;last updated&quot; date at
            the top of this page reflects the most recent revision. We encourage you to review this
            policy periodically.
          </p>
        </Section>

        <Section title="7. Contact Us">
          <p>
            If you have any questions about our use of cookies, please contact us at{' '}
            <a href="mailto:info@onestoptyres247.co.uk" className="text-[#b70011] hover:underline">
              info@onestoptyres247.co.uk
            </a>{' '}
            or by phone on{' '}
            <a href="tel:07759708646" className="text-[#b70011] hover:underline">
              07759 708 646
            </a>
            .
          </p>
          <p>
            For more information on how we handle your personal data, please see our{' '}
            <a href="/privacy-policy" className="text-[#b70011] hover:underline font-semibold">
              Privacy Policy
            </a>
            .
          </p>
        </Section>
      </div>
    </main>
  )
}
