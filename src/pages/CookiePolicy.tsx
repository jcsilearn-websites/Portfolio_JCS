import LegalPageLayout, {
  LegalSection,
  LegalSubheading,
  LegalParagraph,
  LegalList,
} from '../components/LegalPageLayout'

export default function CookiePolicy() {
  return (
    <LegalPageLayout title="JCS iLEARN &ndash; Cookie Policy" lastUpdated="10 September 2026">
      <LegalParagraph>
        JCS Institute of Lifeskills Education And Recruitment Network LLP,
        operating under the brand JCS iLEARN (&ldquo;JCS iLEARN&rdquo;,
        &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;), uses
        cookies and similar technologies on www.jcsilearn.com and related
        online platforms to provide secure, reliable, and improved digital
        services.
      </LegalParagraph>
      <LegalParagraph>
        This Cookie Policy explains how and why we use cookies and how you
        can manage them. It should be read together with our Privacy Policy
        and Terms &amp; Conditions.
      </LegalParagraph>

      <LegalSection title="1. What Are Cookies?">
        <LegalParagraph>
          Cookies are small text files stored on your device when you visit
          a website. They help websites recognise your device, remember
          preferences, maintain sessions, improve functionality, and
          understand website usage.
        </LegalParagraph>
        <LegalParagraph>
          We may also use similar technologies such as pixels, tags,
          scripts, or local storage.
        </LegalParagraph>
      </LegalSection>

      <LegalSection title="2. How We Use Cookies">
        <LegalParagraph>
          JCS iLEARN may use cookies and similar technologies to:
        </LegalParagraph>
        <LegalList
          items={[
            'Enable essential website and platform functionality.',
            'Maintain secure sessions and account access.',
            'Remember preferences and settings.',
            'Improve website performance and user experience.',
            'Understand website usage and identify technical issues.',
            'Support forms, assessments, learning services, and other online features.',
            'Support communications or marketing activities where applicable.',
          ]}
        />
      </LegalSection>

      <LegalSection title="3. Types of Cookies">
        <LegalSubheading>Essential Cookies</LegalSubheading>
        <LegalParagraph>
          These are necessary for the website and essential services to
          function properly, including security, authentication, sessions,
          and basic navigation.
        </LegalParagraph>

        <LegalSubheading>Functional Cookies</LegalSubheading>
        <LegalParagraph>
          These help remember user preferences and settings and provide
          enhanced functionality.
        </LegalParagraph>

        <LegalSubheading>Analytics and Performance Cookies</LegalSubheading>
        <LegalParagraph>
          Where enabled, these help us understand how visitors use our
          website, such as pages visited, usage patterns, and technical
          performance, so that we can improve our services.
        </LegalParagraph>

        <LegalSubheading>Security Cookies</LegalSubheading>
        <LegalParagraph>
          These may be used to protect our website, platforms, assessments,
          and users from unauthorised access, fraud, abuse, and other
          security risks.
        </LegalParagraph>

        <LegalSubheading>Third-Party Cookies</LegalSubheading>
        <LegalParagraph>
          Certain third-party services integrated into our website may use
          their own cookies or similar technologies. Their use is governed
          by the respective third party&rsquo;s privacy and cookie
          policies.
        </LegalParagraph>
      </LegalSection>

      <LegalSection title="4. First-Party and Third-Party Cookies">
        <LegalParagraph>
          <strong className="font-semibold text-navy">
            First-party cookies
          </strong>{' '}
          are placed by JCS iLEARN or service providers acting on our
          behalf.
        </LegalParagraph>
        <LegalParagraph>
          <strong className="font-semibold text-navy">
            Third-party cookies
          </strong>{' '}
          are placed by external service providers whose technologies or
          services are integrated into our website.
        </LegalParagraph>
        <LegalParagraph>
          The specific third-party technologies used may change as our
          website and services evolve.
        </LegalParagraph>
      </LegalSection>

      <LegalSection title="5. Cookie Duration">
        <LegalParagraph>Cookies may be:</LegalParagraph>
        <LegalList
          items={[
            'Session cookies, which are generally removed when your browsing session ends; or',
            'Persistent cookies, which remain for a defined period or until deleted.',
          ]}
        />
        <LegalParagraph>
          The duration depends on the purpose and technology involved.
        </LegalParagraph>
      </LegalSection>

      <LegalSection title="6. Managing Cookies">
        <LegalParagraph>
          Where applicable, our website may provide options to manage
          non-essential cookie preferences.
        </LegalParagraph>
        <LegalParagraph>
          You can also manage or delete cookies through your browser
          settings. Blocking or deleting certain cookies may affect website
          functionality, account access, assessments, forms, or other
          services.
        </LegalParagraph>
        <LegalParagraph>
          Where consent is required for non-essential cookies, we will
          obtain consent through an appropriate mechanism, as applicable.
        </LegalParagraph>
      </LegalSection>

      <LegalSection title="7. Cookies and Personal Information">
        <LegalParagraph>
          Some cookies or similar technologies may collect information that
          can be associated with an individual. Where such information
          constitutes personal data, it will be handled in accordance with
          our Privacy Policy and applicable data protection requirements.
        </LegalParagraph>
        <LegalParagraph>
          JCS iLEARN does not use cookies for the purpose of selling
          personal information to third parties.
        </LegalParagraph>
      </LegalSection>

      <LegalSection title="8. Changes to This Policy">
        <LegalParagraph>
          We may update this Cookie Policy when our website, platforms,
          technologies, or services change. Updates will be reflected by
          revising the &ldquo;Last Updated&rdquo; date above.
        </LegalParagraph>
        <LegalParagraph>
          We encourage users to review this policy periodically.
        </LegalParagraph>
      </LegalSection>

      <LegalSection title="9. Contact Us">
        <LegalParagraph>
          For questions or concerns regarding our use of cookies or privacy
          practices, please contact:
        </LegalParagraph>
        <LegalParagraph>
          <strong className="font-semibold text-navy">
            JCS Institute of Lifeskills Education And Recruitment Network
            LLP
          </strong>
          <br />
          <strong className="font-semibold text-navy">Brand:</strong> JCS
          iLEARN
          <br />
          <strong className="font-semibold text-navy">Website:</strong>{' '}
          www.jcsilearn.com
          <br />
          <strong className="font-semibold text-navy">Email:</strong>{' '}
          info@jcsilearn.com
          <br />
          <strong className="font-semibold text-navy">Location:</strong>{' '}
          Coimbatore, Tamil Nadu, India
        </LegalParagraph>
        <LegalParagraph>
          This Cookie Policy is intended to provide transparency regarding
          our use of cookies and similar technologies and should be read
          together with our Privacy Policy and Terms &amp; Conditions.
        </LegalParagraph>
      </LegalSection>
    </LegalPageLayout>
  )
}
