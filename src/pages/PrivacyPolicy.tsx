import LegalPageLayout, {
  LegalSection,
  LegalSubheading,
  LegalParagraph,
  LegalList,
  LegalCallout,
} from '../components/LegalPageLayout'

export default function PrivacyPolicy() {
  return (
    <LegalPageLayout title="Privacy Policy" lastUpdated="10 September 2026">
      <LegalParagraph>
        JCS iLEARN, operated by JCS Institute of Lifeskills Education And
        Recruitment Network LLP (&ldquo;JCS iLEARN&rdquo;, &ldquo;we&rdquo;,
        &ldquo;us&rdquo;, or &ldquo;our&rdquo;), is committed to protecting
        the privacy and security of the personal information entrusted to
        us.
      </LegalParagraph>
      <LegalParagraph>
        This Privacy Policy explains how we collect, use, process, store,
        share, and protect personal information when you access or use our
        website, assessment portal, training and learning services, career
        and placement services, forms, programs, and other services provided
        by JCS iLEARN (collectively, the &ldquo;Services&rdquo;).
      </LegalParagraph>
      <LegalParagraph>
        By accessing or using our Services, you acknowledge that you have
        read and understood this Privacy Policy. Where consent is required
        by applicable law, we will seek your consent before processing your
        personal information for the relevant purpose.
      </LegalParagraph>

      <LegalSection title="1. Scope of This Privacy Policy">
        <LegalParagraph>
          This Privacy Policy applies to information collected through:
        </LegalParagraph>
        <LegalList
          items={[
            'The JCS iLEARN website and related webpages;',
            'Online registration and enquiry forms;',
            'Training and learning programs;',
            'The JCS iLEARN assessment portal;',
            'Online assessments, tests, quizzes, and evaluation activities;',
            'Career guidance and placement-related services;',
            'Resume and profile submission facilities;',
            'Certification-related activities;',
            'Communication through email, WhatsApp, telephone, SMS, or other approved communication channels;',
            'Services delivered in association with colleges, universities, educational institutions, corporate clients, recruiters, and other business partners.',
          ]}
        />
        <LegalParagraph>
          This Policy does not apply to third-party websites, applications,
          platforms, or services that may be linked to or accessed through
          our Services. Such third parties may have their own privacy
          policies.
        </LegalParagraph>
      </LegalSection>

      <LegalSection title="2. Information We Collect">
        <LegalParagraph>
          Depending on the Services you use, we may collect the following
          categories of information.
        </LegalParagraph>

        <LegalSubheading>2.1 Personal Information</LegalSubheading>
        <LegalParagraph>This may include:</LegalParagraph>
        <LegalList
          items={[
            'Full name;',
            'Email address;',
            'Mobile or contact number;',
            'Residential or communication address, where required;',
            'Date of birth or age, where required for a specific program or verification;',
            'Gender, where required for a specific program or institutional requirement;',
            'Profile photograph, where required;',
            'Other information voluntarily provided by you through our forms or Services.',
          ]}
        />

        <LegalSubheading>
          2.2 Educational and Professional Information
        </LegalSubheading>
        <LegalParagraph>
          For training, assessment, career, and placement-related services,
          we may collect:
        </LegalParagraph>
        <LegalList
          items={[
            'College or university name;',
            'Course, degree, branch, department, and year of study;',
            'Academic qualifications and relevant academic information;',
            'Skills and areas of interest;',
            'Employment or professional information, where applicable;',
            'Resume/CV and career profile information;',
            'Placement-related information;',
            'Training participation and completion information.',
          ]}
        />

        <LegalSubheading>2.3 Account and Platform Information</LegalSubheading>
        <LegalParagraph>
          Where an account or login is provided, we may collect:
        </LegalParagraph>
        <LegalList
          items={[
            'Username or registered email/mobile number;',
            'Login and authentication information;',
            'Account-related details;',
            'Course or program participation;',
            'Activity and interaction records;',
            'Access dates and times;',
            'Platform usage information.',
          ]}
        />
        <LegalParagraph>
          We do not intend to collect or retain passwords in plain-text
          form.
        </LegalParagraph>

        <LegalSubheading>2.4 Assessment Information</LegalSubheading>
        <LegalParagraph>
          When you participate in an assessment through the JCS iLEARN
          assessment portal, we may collect and process:
        </LegalParagraph>
        <LegalList
          items={[
            'Assessment registration information;',
            'Assessment attempts;',
            'Questions presented and responses submitted;',
            'Scores, marks, grades, and assessment results;',
            'Time taken and assessment completion information;',
            'Test progress and activity logs;',
            'Performance and evaluation data;',
            'Assessment-related feedback;',
            'Information required to verify assessment participation or integrity.',
          ]}
        />
        <LegalParagraph>
          Assessment information may be used to evaluate skills, generate
          reports, provide feedback, support training decisions, and fulfil
          requirements agreed with educational institutions, corporate
          clients, recruiters, or other authorized organizations.
        </LegalParagraph>

        <LegalSubheading>
          2.5 Assessment Monitoring and Proctoring Information
        </LegalSubheading>
        <LegalParagraph>
          Where an assessment requires monitoring, verification, or
          proctoring, the assessment portal may collect information such as:
        </LegalParagraph>
        <LegalList
          items={[
            'Webcam/video information;',
            'Microphone/audio information;',
            'Photographs or snapshots captured during an assessment;',
            'Screen activity or screen recording, where enabled;',
            'Browser, device, or session information;',
            'Other technical information necessary to monitor assessment integrity.',
          ]}
        />
        <LegalParagraph>
          Such information will be collected only where the relevant
          assessment requires these features and will be used for purposes
          such as identity/participation verification, assessment
          integrity, prevention of malpractice, security, and evaluation.
        </LegalParagraph>

        <LegalSubheading>2.6 Certification Information</LegalSubheading>
        <LegalParagraph>
          We may maintain information relating to certificates issued or
          associated with our programs, including:
        </LegalParagraph>
        <LegalList
          items={[
            'Participant name;',
            'Program/course name;',
            'Completion information;',
            'Certificate number or identification details;',
            'Date of issue;',
            'Other information necessary to verify certification.',
          ]}
        />

        <LegalSubheading>2.7 Technical and Usage Information</LegalSubheading>
        <LegalParagraph>
          When you access our website or digital platforms, certain
          information may be collected automatically, including:
        </LegalParagraph>
        <LegalList
          items={[
            'IP address;',
            'Browser type and version;',
            'Device type;',
            'Operating system;',
            'Pages or features accessed;',
            'Date and time of access;',
            'Referring pages or URLs;',
            'Session and usage information;',
            'Cookies and similar technologies;',
            'Technical logs and diagnostic information.',
          ]}
        />
        <LegalParagraph>
          This information helps us maintain security, troubleshoot issues,
          understand usage patterns, and improve our Services.
        </LegalParagraph>
      </LegalSection>

      <LegalSection title="3. Information Collected Through Forms">
        <LegalParagraph>
          When you submit an enquiry, registration form, application,
          feedback form, contact form, or other online form, we collect the
          information you choose to provide.
        </LegalParagraph>
        <LegalParagraph>
          This may include your name, contact details, educational or
          professional information, resume/CV, requirements, and other
          information relevant to the purpose of the form.
        </LegalParagraph>
        <LegalParagraph>
          We may use third-party form and productivity services, including
          Google Forms and related Google services, to collect or process
          information. Information submitted through such services may also
          be subject to the applicable privacy terms of those service
          providers.
        </LegalParagraph>
      </LegalSection>

      <LegalSection title="4. How We Use Your Information">
        <LegalParagraph>
          We may use personal information for the following purposes:
        </LegalParagraph>
        <LegalList
          items={[
            'To provide and administer training and learning programs;',
            'To register participants for programs, assessments, workshops, and events;',
            'To provide access to our assessment portal and other digital services;',
            'To conduct assessments and evaluate performance;',
            'To generate assessment reports and feedback;',
            'To monitor assessment integrity where applicable;',
            'To provide career guidance and placement-related services;',
            'To process and maintain resumes and professional profiles;',
            'To support placement and recruitment activities;',
            'To generate and verify certificates;',
            'To communicate program updates, schedules, instructions, and important notices;',
            'To respond to enquiries and requests;',
            'To provide customer and technical support;',
            'To improve our website, assessment portal, programs, and Services;',
            'To maintain security and prevent fraud, misuse, unauthorized access, or other prohibited activities;',
            'To maintain operational and administrative records;',
            'To comply with applicable legal and regulatory requirements;',
            'To enforce our agreements, policies, and terms;',
            'To protect the rights, safety, and property of JCS iLEARN, our users, clients, and other stakeholders.',
          ]}
        />
        <LegalParagraph>
          Where permitted by applicable law, we may also use contact
          information to communicate relevant information about our
          programs, services, workshops, and offerings. Users may opt out of
          promotional communications where applicable.
        </LegalParagraph>
      </LegalSection>

      <LegalSection title="5. Assessment and Learning Data">
        <LegalParagraph>
          Assessment results and learning-related information may be
          processed as part of the Services provided to students,
          institutions, organizations, and corporate clients.
        </LegalParagraph>
        <LegalParagraph>
          Depending on the arrangement under which the assessment or
          training is provided, assessment and performance information may
          be accessible to authorized representatives of:
        </LegalParagraph>
        <LegalList
          items={[
            'The participant;',
            'JCS iLEARN;',
            "The participant's college, university, or educational institution;",
            'An authorized corporate client;',
            'A recruiter or placement partner, where applicable;',
            'Other authorized parties involved in delivering the relevant Service.',
          ]}
        />
        <LegalParagraph>
          The access provided will depend on the purpose of the assessment,
          the applicable service arrangement, and the permissions or
          requirements associated with the program.
        </LegalParagraph>
        <LegalParagraph>
          We do not publicly publish individual assessment scores or
          personal performance information without an appropriate purpose or
          authorization.
        </LegalParagraph>
      </LegalSection>

      <LegalSection title="6. Placement and Recruitment Information">
        <LegalParagraph>
          Where you voluntarily participate in placement, recruitment, or
          career-related services, we may collect and process information
          such as:
        </LegalParagraph>
        <LegalList
          items={[
            'Resume/CV;',
            'Educational qualifications;',
            'Skills and certifications;',
            'Career interests;',
            'Academic information;',
            'Professional experience;',
            'Assessment and training performance, where relevant;',
            'Contact information;',
            'Other information necessary for placement or recruitment activities.',
          ]}
        />
        <LegalParagraph>
          Where appropriate and authorized, such information may be shared
          with participating colleges, educational institutions, employers,
          recruiters, or corporate clients for legitimate placement,
          recruitment, or career-development purposes.
        </LegalParagraph>
      </LegalSection>

      <LegalSection title="7. Cookies and Similar Technologies">
        <LegalParagraph>
          We may use cookies and similar technologies to:
        </LegalParagraph>
        <LegalList
          items={[
            'Enable essential website and platform functionality;',
            'Maintain login and session information;',
            'Remember user preferences;',
            'Understand website usage;',
            'Improve website performance;',
            'Support security and fraud prevention;',
            'Analyze traffic and user interactions, where applicable.',
          ]}
        />
        <LegalParagraph>
          You may manage or disable cookies through your browser settings.
          Some features of our website or assessment portal may not
          function properly if certain cookies are disabled.
        </LegalParagraph>
        <LegalParagraph>
          If analytics, advertising, or other third-party technologies are
          introduced in the future, this Privacy Policy may be updated
          accordingly.
        </LegalParagraph>
      </LegalSection>

      <LegalSection title="8. Third-Party Service Providers">
        <LegalParagraph>
          We may use trusted third-party service providers to support the
          operation and delivery of our Services.
        </LegalParagraph>
        <LegalParagraph>These may include providers for:</LegalParagraph>
        <LegalList
          items={[
            'Cloud hosting and infrastructure;',
            'Assessment and examination technology;',
            'Email communication;',
            'SMS communication;',
            'WhatsApp or messaging services;',
            'Online forms and productivity tools;',
            'Video conferencing and virtual training;',
            'Website analytics and technical services;',
            'Data storage, security, and system maintenance.',
          ]}
        />
        <LegalParagraph>
          We share information with service providers only to the extent
          reasonably necessary for them to perform the services they
          provide to us.
        </LegalParagraph>
        <LegalParagraph>
          Third-party service providers may process information in
          accordance with their own applicable privacy policies and
          contractual obligations.
        </LegalParagraph>
      </LegalSection>

      <LegalSection title="9. Sharing and Disclosure of Information">
        <LegalParagraph>
          We do not sell personal information to third parties.
        </LegalParagraph>
        <LegalParagraph>
          We may share personal information where reasonably necessary
          with:
        </LegalParagraph>
        <LegalList
          items={[
            'Educational institutions and colleges associated with a program;',
            'Corporate clients and authorized organizations;',
            'Placement and recruitment partners;',
            'Trainers, consultants, or service providers involved in delivering the relevant Services;',
            'Technology and infrastructure service providers;',
            'Communication service providers;',
            'Professional advisors, auditors, or consultants;',
            'Government, regulatory, law-enforcement, or judicial authorities where required or permitted by law.',
          ]}
        />
        <LegalParagraph>
          We may also disclose information where necessary to protect our
          legal rights, investigate misuse or security incidents, enforce
          our agreements, or protect the safety of our users and Services.
        </LegalParagraph>
      </LegalSection>

      <LegalSection title="10. Data Security">
        <LegalParagraph>
          We take reasonable and appropriate measures to protect personal
          information against unauthorized access, alteration, disclosure,
          misuse, loss, or destruction.
        </LegalParagraph>
        <LegalParagraph>
          Depending on the nature of the information and the Services
          involved, security measures may include:
        </LegalParagraph>
        <LegalList
          items={[
            'Secure communication protocols;',
            'Access controls;',
            'Authentication mechanisms;',
            'Restricted access to personal information;',
            'Technical monitoring and security measures;',
            'Secure data storage and infrastructure;',
            'Internal controls relating to access and processing.',
          ]}
        />
        <LegalParagraph>
          However, no internet-based system or method of electronic
          transmission can be guaranteed to be completely secure. We
          therefore cannot guarantee absolute security of information
          transmitted through the internet.
        </LegalParagraph>
      </LegalSection>

      <LegalSection title="11. Data Retention">
        <LegalParagraph>
          We retain personal information only for as long as reasonably
          necessary to fulfil the purposes for which it was collected,
          provide the relevant Services, maintain appropriate records,
          comply with legal or contractual obligations, resolve disputes,
          and protect our legitimate business interests.
        </LegalParagraph>
        <LegalParagraph>
          For students participating in ongoing college-based training,
          assessment, career, or placement programs, relevant information
          may generally be retained during the period in which the student
          remains associated with the applicable institution or program,
          subject to applicable contractual, operational, and legal
          requirements.
        </LegalParagraph>
        <LegalParagraph>
          Assessment records, certification information, placement records,
          and other operational records may be retained for appropriate
          periods where necessary for verification, reporting, compliance,
          dispute resolution, or legitimate business purposes.
        </LegalParagraph>
        <LegalParagraph>
          When information is no longer required, we may delete, anonymize,
          or securely dispose of it in accordance with applicable
          requirements.
        </LegalParagraph>
      </LegalSection>

      <LegalSection title="12. Your Rights and Choices">
        <LegalParagraph>
          Subject to applicable law, you may have rights relating to your
          personal information, including the ability to:
        </LegalParagraph>
        <LegalList
          items={[
            'Request information about personal data held about you;',
            'Request correction or updating of inaccurate information;',
            'Request deletion of personal information where applicable;',
            'Withdraw consent where processing is based on consent;',
            'Request cessation of certain communications;',
            'Raise a complaint regarding the handling of your personal information.',
          ]}
        />
        <LegalParagraph>
          Some information may need to be retained where required by law,
          contractual obligations, security requirements, or legitimate
          business purposes.
        </LegalParagraph>
        <LegalParagraph>
          To exercise your rights or raise a privacy-related concern,
          contact us at:
        </LegalParagraph>
        <LegalParagraph>
          <strong className="font-semibold text-navy">Email:</strong>{' '}
          info@jcsilearn.com
        </LegalParagraph>
        <LegalParagraph>
          We may need to verify your identity or request additional
          information before processing certain requests.
        </LegalParagraph>
      </LegalSection>

      <LegalSection title="13. Children and Minors">
        <LegalParagraph>
          Our assessment services are not intended for individuals below 18
          years of age.
        </LegalParagraph>
        <LegalParagraph>
          We do not knowingly conduct assessments for children below 18
          through our assessment portal.
        </LegalParagraph>
        <LegalParagraph>
          If a parent or guardian believes that personal information
          relating to a minor has been submitted to us improperly, they may
          contact us at info@jcsilearn.com so that we can review the matter
          and take appropriate action.
        </LegalParagraph>
        <LegalParagraph>
          Where JCS iLEARN conducts any future program involving minors, the
          applicable consent and data-protection requirements will be
          addressed separately.
        </LegalParagraph>
      </LegalSection>

      <LegalSection title="14. External Websites and Third-Party Platforms">
        <LegalParagraph>
          Our website or Services may contain links to third-party
          websites, applications, platforms, or services.
        </LegalParagraph>
        <LegalParagraph>
          We are not responsible for the privacy practices, security,
          content, or policies of third-party platforms. Users are
          encouraged to review the privacy policies of such third parties
          before providing personal information.
        </LegalParagraph>
        <LegalParagraph>
          Where our Services are integrated with third-party assessment,
          communication, video-conferencing, cloud, or other technology
          platforms, the processing of information may also be subject to
          those platforms&rsquo; applicable terms and privacy policies.
        </LegalParagraph>
      </LegalSection>

      <LegalSection title="15. Changes to This Privacy Policy">
        <LegalParagraph>
          We may update this Privacy Policy from time to time to reflect
          changes in our Services, technology, business practices, legal
          requirements, or applicable data-protection regulations.
        </LegalParagraph>
        <LegalParagraph>
          The latest version will be published on this page with the
          updated &ldquo;Last Updated&rdquo; date.
        </LegalParagraph>
        <LegalParagraph>
          Where required by applicable law, we may provide additional
          notice regarding material changes.
        </LegalParagraph>
      </LegalSection>

      <LegalSection title="16. Contact Us">
        <LegalParagraph>
          If you have questions, requests, concerns, or complaints relating
          to this Privacy Policy or the way JCS iLEARN handles personal
          information, please contact:
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
          <strong className="font-semibold text-navy">Email:</strong>{' '}
          info@jcsilearn.com
          <br />
          <strong className="font-semibold text-navy">Website:</strong>{' '}
          jcsilearn.com
        </LegalParagraph>
        <LegalParagraph>
          For privacy-related requests, please mention &ldquo;Privacy
          Request&rdquo; in the subject line of your email.
        </LegalParagraph>
      </LegalSection>

      <div className="mt-10">
        <LegalCallout>
          Important: This Privacy Policy is intended to provide transparency
          regarding JCS iLEARN&rsquo;s data practices. It should be reviewed
          and approved by JCS iLEARN&rsquo;s legal advisor before
          publication, particularly in relation to applicable provisions of
          India&rsquo;s Digital Personal Data Protection Act, 2023 and the
          Digital Personal Data Protection Rules, 2025.
        </LegalCallout>
      </div>
    </LegalPageLayout>
  )
}
