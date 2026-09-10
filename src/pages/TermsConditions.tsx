import LegalPageLayout, {
  LegalSection,
  LegalParagraph,
  LegalList,
} from '../components/LegalPageLayout'

export default function TermsConditions() {
  return (
    <LegalPageLayout title="Terms &amp; Conditions" lastUpdated="10 September 2026">
      <LegalParagraph>
        Welcome to JCS iLEARN, operated by JCS Institute of Lifeskills
        Education And Recruitment Network LLP (&ldquo;JCS iLEARN&rdquo;,
        &ldquo;JCS&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or
        &ldquo;our&rdquo;).
      </LegalParagraph>
      <LegalParagraph>
        These Terms &amp; Conditions (&ldquo;Terms&rdquo;) govern your
        access to and use of the JCS iLEARN website, learning and training
        services, assessment portal, online assessments, career and
        placement services, certification services, and other related
        services provided by us.
      </LegalParagraph>
      <LegalParagraph>
        By accessing our website, registering for a program, creating an
        account, participating in a training program or assessment,
        submitting information, or using any of our services, you
        acknowledge that you have read, understood, and agree to be bound by
        these Terms and our Privacy Policy.
      </LegalParagraph>
      <LegalParagraph>
        If you do not agree with these Terms, please do not use our website
        or services.
      </LegalParagraph>

      <LegalSection title="1. About JCS iLEARN">
        <LegalParagraph>
          JCS iLEARN is an education, skill development, training,
          assessment, career development, and placement-readiness
          organization providing services to students, educational
          institutions, universities, corporate organizations, recruiters,
          and other authorized participants.
        </LegalParagraph>
        <LegalParagraph>Our services may include:</LegalParagraph>
        <LegalList
          items={[
            'Skill development and training programs',
            'Workshops and seminars',
            'Soft skills and communication training',
            'Aptitude and reasoning training',
            'Technical skill development',
            'Placement preparation and recruitment readiness',
            'Online assessments, tests, quizzes, and evaluations',
            'Career guidance and counselling',
            'Resume and profile development',
            'Mock interviews and interview preparation',
            'Certification and completion recognition',
            'Campus-to-corporate programs',
            'Corporate training and learning programs',
            'Other educational and professional development services introduced from time to time',
          ]}
        />
        <LegalParagraph>
          The exact scope, duration, deliverables, eligibility requirements,
          fees, and other commercial terms may vary by program or
          engagement.
        </LegalParagraph>
      </LegalSection>

      <LegalSection title="2. Scope and Applicability">
        <LegalParagraph>These Terms apply to users who:</LegalParagraph>
        <LegalList
          items={[
            'Visit or browse the JCS iLEARN website;',
            'Register for or participate in a program;',
            'Access the JCS iLEARN assessment portal;',
            'Take an online assessment, test, quiz, or evaluation;',
            'Access or use learning materials or digital resources;',
            'Participate in career, placement, or recruitment-related activities;',
            'Apply for training, internship, assessment, or other opportunities;',
            'Interact with JCS iLEARN through forms, email, WhatsApp, telephone, or other communication channels; or',
            'Use any other service provided through or in connection with JCS iLEARN.',
          ]}
        />
        <LegalParagraph>
          Certain services may be subject to additional terms, guidelines,
          policies, proposals, agreements, or instructions applicable to
          that particular service.
        </LegalParagraph>
      </LegalSection>

      <LegalSection title="3. Eligibility">
        <LegalParagraph>
          Eligibility for a particular program, assessment, training, or
          service may depend on the requirements specified for that
          service.
        </LegalParagraph>
        <LegalParagraph>You agree that:</LegalParagraph>
        <LegalList
          items={[
            'The information provided by you is accurate, complete, and current;',
            'You meet the eligibility requirements applicable to the relevant service;',
            'You will update your information when necessary;',
            'You will use our services only for lawful and legitimate purposes; and',
            'You will comply with all applicable laws, regulations, institutional rules, and program-specific requirements.',
          ]}
        />
        <LegalParagraph>
          Where participation is arranged through a college, university,
          corporate organization, recruiter, or other institution,
          additional eligibility requirements or instructions may apply.
        </LegalParagraph>
      </LegalSection>

      <LegalSection title="4. Registration and User Information">
        <LegalParagraph>
          Certain services may require you to register or provide
          information through our website, forms, assessment systems, or
          other authorized platforms.
        </LegalParagraph>
        <LegalParagraph>
          You are responsible for ensuring that the information you provide
          is accurate and belongs to you.
        </LegalParagraph>
        <LegalParagraph>You must not:</LegalParagraph>
        <LegalList
          items={[
            'Provide false, misleading, or fraudulent information;',
            "Register using another person's identity;",
            'Create an account or profile for another person without authorization;',
            'Misrepresent your academic, professional, assessment, or employment credentials; or',
            "Use another participant's account or access credentials.",
          ]}
        />
        <LegalParagraph>
          JCS iLEARN reserves the right to restrict, suspend, or terminate
          access where information is found to be false, misleading,
          fraudulent, or otherwise inconsistent with these Terms.
        </LegalParagraph>
      </LegalSection>

      <LegalSection title="5. User Accounts and Access">
        <LegalParagraph>
          Where an account is provided, access credentials are intended for
          the registered user only.
        </LegalParagraph>
        <LegalParagraph>You are responsible for:</LegalParagraph>
        <LegalList
          items={[
            'Maintaining the confidentiality of your login credentials;',
            'Not sharing your username, password, OTP, access link, or other authentication information;',
            'Immediately informing JCS iLEARN if you suspect unauthorized access; and',
            'All activities carried out through your account, subject to applicable law.',
          ]}
        />
        <LegalParagraph>
          Access to programs, assessments, learning resources, and other
          services may be restricted, suspended, or withdrawn if the account
          is misused or these Terms are violated.
        </LegalParagraph>
      </LegalSection>

      <LegalSection title="6. Programs, Training and Services">
        <LegalParagraph>
          JCS iLEARN may provide services through online, offline, hybrid,
          institutional, corporate, or other delivery formats.
        </LegalParagraph>
        <LegalParagraph>Program details such as:</LegalParagraph>
        <LegalList
          items={[
            'Duration',
            'Schedule',
            'Batch size',
            'Mode of delivery',
            'Trainer or mentor allocation',
            'Curriculum',
            'Assessments',
            'Attendance requirements',
            'Deliverables',
            'Completion criteria',
            'Fees',
            'Payment terms',
            'Cancellation terms',
            'Certification requirements',
          ]}
        />
        <LegalParagraph>
          may vary depending on the specific program or engagement.
        </LegalParagraph>
        <LegalParagraph>
          JCS iLEARN reserves the right to make reasonable changes to
          trainers, schedules, content, delivery methods, platforms, or
          program structure where necessary for operational, academic,
          technical, or quality-related reasons.
        </LegalParagraph>
      </LegalSection>

      <LegalSection title="7. Fees and Payment Terms">
        <LegalParagraph>
          Where fees apply, the applicable fees and payment terms will be
          communicated through the relevant:
        </LegalParagraph>
        <LegalList
          items={[
            'Proposal;',
            'Quotation;',
            'Work Order;',
            'Purchase Order;',
            'Invoice;',
            'Service Agreement;',
            'Program-specific terms; or',
            'Other written commercial arrangement.',
          ]}
        />
        <LegalParagraph>
          JCS iLEARN&rsquo;s website and assessment portal do not
          necessarily process payments directly for all services.
        </LegalParagraph>
        <LegalParagraph>
          Any applicable cancellation, refund, rescheduling, advance
          payment, balance payment, credit, or other financial terms shall
          be governed by the specific commercial arrangement applicable to
          the relevant service.
        </LegalParagraph>
        <LegalParagraph>
          Where a separate written agreement exists, its applicable payment
          and commercial provisions shall prevail over these general Terms
          to the extent of any inconsistency.
        </LegalParagraph>
      </LegalSection>

      <LegalSection title="8. Attendance and Participation">
        <LegalParagraph>
          Participants are expected to attend and actively participate in
          programs for which they are registered.
        </LegalParagraph>
        <LegalParagraph>
          Attendance requirements may vary depending on the program or
          institutional requirements.
        </LegalParagraph>
        <LegalParagraph>Failure to:</LegalParagraph>
        <LegalList
          items={[
            'Attend required sessions;',
            'Complete mandatory activities;',
            'Participate in assessments;',
            'Meet deadlines; or',
            'Fulfil program requirements',
          ]}
        />
        <LegalParagraph>
          may affect eligibility for completion recognition, certification,
          assessment results, or other program benefits.
        </LegalParagraph>
        <LegalParagraph>
          JCS iLEARN may determine reasonable participation and completion
          criteria for each program.
        </LegalParagraph>
      </LegalSection>

      <LegalSection title="9. Assessment and Examination Rules">
        <LegalParagraph>
          JCS iLEARN may conduct online or offline assessments, tests,
          quizzes, evaluations, mock tests, examinations, skill assessments,
          or other forms of performance evaluation.
        </LegalParagraph>
        <LegalParagraph>
          Participants must follow all instructions communicated before or
          during an assessment.
        </LegalParagraph>
        <LegalParagraph>
          Unless expressly permitted, participants must not:
        </LegalParagraph>
        <LegalList
          items={[
            'Receive unauthorized assistance;',
            'Use unauthorized books, websites, applications, devices, notes, or other resources;',
            'Communicate with another person during an assessment;',
            'Allow another person to take an assessment on their behalf;',
            'Impersonate another participant;',
            'Attempt to manipulate assessment results;',
            'Share assessment questions or answers;',
            'Record, reproduce, photograph, or distribute assessment content;',
            'Attempt to bypass technical, security, or authentication controls; or',
            'Engage in any other activity that compromises assessment integrity.',
          ]}
        />
        <LegalParagraph>
          JCS iLEARN may invalidate an assessment, withhold results,
          restrict further attempts, deny certification, suspend access, or
          take other appropriate action where assessment integrity is
          reasonably believed to have been compromised.
        </LegalParagraph>
      </LegalSection>

      <LegalSection title="10. Online Assessment, Monitoring and Proctoring">
        <LegalParagraph>
          For certain assessments, JCS iLEARN or its authorized technology
          providers may use monitoring or proctoring mechanisms to maintain
          assessment integrity.
        </LegalParagraph>
        <LegalParagraph>
          Depending on the assessment and technology being used, such
          mechanisms may include:
        </LegalParagraph>
        <LegalList
          items={[
            'Identity verification;',
            'Webcam or video monitoring;',
            'Microphone or audio monitoring;',
            'Photographs or snapshots;',
            'Screen activity monitoring or recording;',
            'Browser or device information;',
            'Session and activity logs; and',
            'Other technical integrity checks.',
          ]}
        />
        <LegalParagraph>
          The specific monitoring mechanisms applicable to an assessment
          will depend on the assessment requirements and technology used.
        </LegalParagraph>
        <LegalParagraph>
          Participants are responsible for ensuring that their device,
          browser, internet connection, camera, microphone, and other
          required technical components meet the stated assessment
          requirements.
        </LegalParagraph>
        <LegalParagraph>
          Information collected through assessment monitoring and proctoring
          will be handled in accordance with our Privacy Policy and
          applicable law.
        </LegalParagraph>
      </LegalSection>

      <LegalSection title="11. Academic and Assessment Integrity">
        <LegalParagraph>
          JCS iLEARN expects all participants to maintain academic and
          professional integrity.
        </LegalParagraph>
        <LegalParagraph>
          Prohibited conduct includes, but is not limited to:
        </LegalParagraph>
        <LegalList
          items={[
            'Cheating;',
            'Plagiarism;',
            'Impersonation;',
            'Unauthorized collaboration;',
            "Submission of another person's work as one's own;",
            'Use of unauthorized AI or automated assistance where prohibited;',
            'Manipulation or falsification of assessment information;',
            'Unauthorized access to assessment content;',
            'Sharing questions, answers, credentials, or restricted resources; and',
            'Any attempt to obtain an unfair advantage.',
          ]}
        />
        <LegalParagraph>
          Where a violation is identified or reasonably suspected, JCS
          iLEARN may take appropriate action, including cancellation of
          results, denial of certification, suspension, termination of
          access, or other action permitted under the applicable program
          terms.
        </LegalParagraph>
      </LegalSection>

      <LegalSection title="12. Certification">
        <LegalParagraph>
          Where a program provides a certificate or other form of
          completion recognition, eligibility will depend on the applicable
          program requirements.
        </LegalParagraph>
        <LegalParagraph>These requirements may include:</LegalParagraph>
        <LegalList
          items={[
            'Minimum attendance;',
            'Completion of required modules;',
            'Completion of assignments or activities;',
            'Assessment performance;',
            'Participation requirements;',
            'Successful completion of evaluations; and',
            'Compliance with program rules.',
          ]}
        />
        <LegalParagraph>
          Certificates may be withheld, cancelled, or invalidated where a
          participant fails to meet the applicable requirements or is found
          to have violated these Terms or assessment integrity
          requirements.
        </LegalParagraph>
        <LegalParagraph>
          A certificate or completion recognition confirms participation or
          completion of the applicable JCS iLEARN program and does not, by
          itself, constitute a guarantee of employment, placement,
          promotion, salary, internship, admission, or any other career
          outcome.
        </LegalParagraph>
      </LegalSection>

      <LegalSection title="13. Placement, Recruitment and Career Services">
        <LegalParagraph>
          JCS iLEARN may provide career guidance, placement preparation,
          recruitment support, interview opportunities, employer
          interactions, profile sharing, or related services.
        </LegalParagraph>
        <LegalParagraph>
          Where applicable, participants may be required to provide
          information such as:
        </LegalParagraph>
        <LegalList
          items={[
            'Resume/CV;',
            'Academic qualifications;',
            'Skills;',
            'Certifications;',
            'Assessment results;',
            'Training records;',
            'Career interests;',
            'Professional experience; and',
            'Other relevant placement information.',
          ]}
        />
        <LegalParagraph>
          Where authorized and applicable to a program, such information may
          be shared with participating educational institutions, employers,
          recruiters, corporate clients, or other authorized placement
          partners.
        </LegalParagraph>
        <LegalParagraph>
          JCS iLEARN does not <strong className="font-semibold text-navy">guarantee</strong>:
        </LegalParagraph>
        <LegalList
          items={[
            'Employment;',
            'Placement;',
            'Internship;',
            'Interview selection;',
            'Job offers;',
            'Salary levels;',
            'Promotions;',
            'Employer selection; or',
            'Any specific career outcome.',
          ]}
        />
        <LegalParagraph>
          Final recruitment and employment decisions are solely made by the
          relevant employer or organization.
        </LegalParagraph>
      </LegalSection>

      <LegalSection title="14. Intellectual Property Rights">
        <LegalParagraph>
          All intellectual property associated with JCS iLEARN, including
          but not limited to:
        </LegalParagraph>
        <LegalList
          items={[
            'Website content;',
            'Text;',
            'Graphics;',
            'Images;',
            'Videos;',
            'Presentations;',
            'Training materials;',
            'Course structures;',
            'Learning resources;',
            'Assessment questions;',
            'Question banks;',
            'Evaluation frameworks;',
            'Reports and templates;',
            'Software and platform elements;',
            'Product names;',
            'Logos;',
            'Trademarks;',
            'Service marks;',
            'Brand elements; and',
            'Other proprietary materials',
          ]}
        />
        <LegalParagraph>
          is owned by JCS iLEARN or its respective licensors, unless
          otherwise stated.
        </LegalParagraph>
        <LegalParagraph>
          Nothing in these Terms transfers ownership of any intellectual
          property to a user.
        </LegalParagraph>
      </LegalSection>

      <LegalSection title="15. Permitted Use of Learning Materials">
        <LegalParagraph>
          Subject to the applicable program terms, JCS iLEARN may provide
          participants with access to learning materials solely for their
          intended educational or professional use.
        </LegalParagraph>
        <LegalParagraph>
          Unless expressly authorized in writing, you must not:
        </LegalParagraph>
        <LegalList
          items={[
            'Copy or reproduce substantial portions of the materials;',
            'Republish or distribute materials;',
            'Sell, sublicense, or commercially exploit materials;',
            'Upload materials to public websites or repositories;',
            'Share restricted materials with unauthorized persons;',
            'Record training sessions where recording is prohibited;',
            'Remove copyright, ownership, or proprietary notices;',
            'Modify materials for redistribution; or',
            'Use JCS iLEARN materials to provide competing commercial training.',
          ]}
        />
        <LegalParagraph>
          Unauthorized use may result in withdrawal of access and may lead
          to further legal action where appropriate.
        </LegalParagraph>
      </LegalSection>

      <LegalSection title="16. JCS iLEARN Brand and Trademarks">
        <LegalParagraph>
          The JCS iLEARN name, logo, brand identity, product names,
          taglines, trademarks, service marks, and other brand assets are
          owned by or licensed to JCS iLEARN.
        </LegalParagraph>
        <LegalParagraph>
          No user may use, reproduce, modify, or commercially exploit these
          assets without prior written authorization.
        </LegalParagraph>
        <LegalParagraph>
          Nothing in these Terms grants a license to use the JCS iLEARN
          brand or trademarks.
        </LegalParagraph>
      </LegalSection>

      <LegalSection title="17. User-Submitted Content">
        <LegalParagraph>
          Users may, where permitted, submit information, documents,
          assignments, resumes, feedback, responses, reviews, photographs,
          or other content in connection with our services.
        </LegalParagraph>
        <LegalParagraph>You represent that:</LegalParagraph>
        <LegalList
          items={[
            'You have the necessary rights to submit such content;',
            'The content is accurate to the best of your knowledge;',
            "The content does not unlawfully infringe the rights of another person; and",
            'The content does not contain unlawful, malicious, defamatory, or otherwise prohibited material.',
          ]}
        />
        <LegalParagraph>
          JCS iLEARN may use such content for legitimate program
          administration, assessment, evaluation, support, reporting,
          quality improvement, or other purposes consistent with the
          applicable service and Privacy Policy.
        </LegalParagraph>
      </LegalSection>

      <LegalSection title="18. Acceptable Use and Prohibited Activities">
        <LegalParagraph>
          You must use the JCS iLEARN website and services only for lawful
          purposes.
        </LegalParagraph>
        <LegalParagraph>You must not:</LegalParagraph>
        <LegalList
          items={[
            'Attempt unauthorized access to our systems or accounts;',
            'Circumvent authentication or security mechanisms;',
            'Introduce viruses, malware, malicious code, or harmful material;',
            'Interfere with the operation of the website or assessment platform;',
            'Conduct unauthorized vulnerability testing;',
            'Scrape, crawl, copy, or systematically extract website or platform content without authorization;',
            'Reverse engineer or attempt to obtain source code where prohibited by law;',
            'Use automated methods to interfere with platform operations;',
            'Impersonate JCS iLEARN, its employees, trainers, representatives, partners, or another user;',
            'Send spam or unauthorized promotional communications;',
            'Upload unlawful, abusive, threatening, defamatory, hateful, obscene, or harmful material;',
            "Violate another person's privacy or intellectual property rights;",
            'Attempt to manipulate assessment or program results; or',
            'Use the services for any unlawful, fraudulent, abusive, or unauthorized purpose.',
          ]}
        />
      </LegalSection>

      <LegalSection title="19. Third-Party Platforms and Services">
        <LegalParagraph>
          Certain JCS iLEARN services may rely on third-party platforms,
          applications, communication tools, assessment technologies,
          hosting providers, forms, email services, messaging services,
          video-conferencing tools, or other technology providers.
        </LegalParagraph>
        <LegalParagraph>
          Your use of such third-party services may also be subject to the
          relevant third party&rsquo;s terms and privacy policies.
        </LegalParagraph>
        <LegalParagraph>
          JCS iLEARN does not control third-party platforms and is not
          responsible for their independent operation, availability,
          policies, content, or practices, except to the extent required by
          applicable law or expressly agreed otherwise.
        </LegalParagraph>
      </LegalSection>

      <LegalSection title="20. External Links">
        <LegalParagraph>
          The JCS iLEARN website or services may contain links to
          third-party websites or resources.
        </LegalParagraph>
        <LegalParagraph>
          Such links may be provided for convenience, information, learning,
          recruitment, or other legitimate purposes.
        </LegalParagraph>
        <LegalParagraph>
          JCS iLEARN does not necessarily endorse or control third-party
          websites and is not responsible for their:
        </LegalParagraph>
        <LegalList
          items={[
            'Content;',
            'Accuracy;',
            'Availability;',
            'Security;',
            'Services;',
            'Terms; or',
            'Privacy practices.',
          ]}
        />
        <LegalParagraph>
          Users access third-party websites at their own discretion.
        </LegalParagraph>
      </LegalSection>

      <LegalSection title="21. Service Availability and Technical Issues">
        <LegalParagraph>
          We make reasonable efforts to keep our website, learning services,
          and assessment platforms available and functional.
        </LegalParagraph>
        <LegalParagraph>
          However, we do not guarantee that the services will always be:
        </LegalParagraph>
        <LegalList
          items={[
            'Available without interruption;',
            'Free from technical errors;',
            'Compatible with every device or browser;',
            'Free from delays;',
            'Completely secure against all possible threats; or',
            'Available at all times.',
          ]}
        />
        <LegalParagraph>
          Service interruptions may occur due to maintenance, upgrades,
          technical failures, internet or telecommunications issues,
          third-party service failures, security incidents, force majeure
          events, or circumstances beyond our reasonable control.
        </LegalParagraph>
        <LegalParagraph>
          Where appropriate, JCS iLEARN may reschedule, reopen, extend, or
          otherwise modify access to an assessment or program due to
          significant technical or operational issues.
        </LegalParagraph>
      </LegalSection>

      <LegalSection title="22. Educational and Career Disclaimer">
        <LegalParagraph>
          JCS iLEARN provides educational, training, skill-development,
          assessment, career guidance, and placement-readiness services.
        </LegalParagraph>
        <LegalParagraph>
          Participation in our services does not guarantee any particular
          academic, professional, employment, salary, placement, internship,
          or career result.
        </LegalParagraph>
        <LegalParagraph>
          Individual outcomes depend on several factors, including
          participant effort, skills, academic performance, assessment
          performance, market conditions, employer requirements,
          eligibility criteria, competition, and decisions made by third
          parties.
        </LegalParagraph>
        <LegalParagraph>
          Information provided through our website, training sessions,
          career resources, or other services should not be treated as a
          guarantee of any specific outcome.
        </LegalParagraph>
      </LegalSection>

      <LegalSection title="23. Disclaimer of Warranties">
        <LegalParagraph>
          To the maximum extent permitted by applicable law, the website and
          services are provided on an &ldquo;as is&rdquo; and &ldquo;as
          available&rdquo; basis.
        </LegalParagraph>
        <LegalParagraph>JCS iLEARN does not warrant that:</LegalParagraph>
        <LegalList
          items={[
            'The website or services will always be uninterrupted or error-free;',
            'All information will always be complete, accurate, or current;',
            "Every program or service will meet every user's individual expectations;",
            'Third-party services will remain continuously available; or',
            'Participation in any service will result in a particular academic or career outcome.',
          ]}
        />
        <LegalParagraph>
          Nothing in these Terms excludes any right or protection that
          cannot lawfully be excluded under applicable law.
        </LegalParagraph>
      </LegalSection>

      <LegalSection title="24. Limitation of Liability">
        <LegalParagraph>
          To the maximum extent permitted by applicable law, JCS iLEARN, its
          partners, employees, trainers, consultants, representatives,
          service providers, and affiliates shall not be liable for
          indirect, incidental, special, consequential, exemplary, or
          punitive losses arising from or related to the use of our website
          or services.
        </LegalParagraph>
        <LegalParagraph>
          This may include, to the extent legally permissible, losses
          arising from:
        </LegalParagraph>
        <LegalList
          items={[
            'Temporary service interruption;',
            'Internet or connectivity failures;',
            'Third-party platform failures;',
            'User device or software problems;',
            'Failure to meet personal expectations;',
            'Failure to achieve a particular academic or career outcome;',
            'Employer or recruiter decisions; or',
            'Unauthorized acts of third parties.',
          ]}
        />
        <LegalParagraph>
          Nothing in these Terms shall exclude or limit liability that
          cannot lawfully be excluded or limited under applicable law.
        </LegalParagraph>
      </LegalSection>

      <LegalSection title="25. Indemnification">
        <LegalParagraph>
          To the extent permitted by applicable law, you agree to indemnify
          and hold harmless JCS iLEARN, its partners, employees, trainers,
          consultants, representatives, and service providers from claims,
          losses, liabilities, damages, costs, and reasonable expenses
          arising from:
        </LegalParagraph>
        <LegalList
          items={[
            'Your violation of these Terms;',
            'Your unlawful or unauthorized use of our services;',
            "Your infringement of another person's rights;",
            'Your submission of unauthorized or unlawful content;',
            'Fraudulent or misleading information provided by you; or',
            'Your violation of applicable laws or regulations.',
          ]}
        />
      </LegalSection>

      <LegalSection title="26. Suspension and Termination">
        <LegalParagraph>
          JCS iLEARN may suspend or terminate access to any service,
          account, program, assessment, or learning resource where
          reasonably necessary, including where:
        </LegalParagraph>
        <LegalList
          items={[
            'These Terms are violated;',
            'Fraudulent or unauthorized activity is suspected;',
            'Assessment integrity is compromised;',
            'User information is materially false or misleading;',
            'Intellectual property is misused;',
            'Platform security is threatened;',
            'A user engages in serious misconduct; or',
            'Access is otherwise required to be restricted for legal, operational, or security reasons.',
          ]}
        />
        <LegalParagraph>
          Where appropriate, JCS iLEARN may provide notice or an opportunity
          to address the issue. However, immediate restriction may be
          applied where necessary to protect users, systems, assessments,
          intellectual property, or legal interests.
        </LegalParagraph>
        <LegalParagraph>
          Termination or suspension does not affect rights or obligations
          that by their nature should continue after termination.
        </LegalParagraph>
      </LegalSection>

      <LegalSection title="27. Privacy">
        <LegalParagraph>
          Your use of JCS iLEARN services may involve the collection and
          processing of personal information.
        </LegalParagraph>
        <LegalParagraph>
          Such information is handled in accordance with our Privacy
          Policy, which forms part of these Terms.
        </LegalParagraph>
        <LegalParagraph>
          Our Privacy Policy explains the categories of information we may
          collect, how information may be used, assessment and proctoring
          data practices, placement-related data sharing, retention,
          rights, and other privacy matters.
        </LegalParagraph>
      </LegalSection>

      <LegalSection title="28. Institutional and Corporate Agreements">
        <LegalParagraph>
          JCS iLEARN may enter into separate agreements with:
        </LegalParagraph>
        <LegalList
          items={[
            'Colleges;',
            'Universities;',
            'Educational institutions;',
            'Corporate organizations;',
            'Recruiters;',
            'Training partners;',
            'Clients; and',
            'Other organizations.',
          ]}
        />
        <LegalParagraph>
          Such agreements may include specific commercial, operational,
          training, payment, confidentiality, intellectual property,
          service-level, data-processing, or other provisions.
        </LegalParagraph>
        <LegalParagraph>
          Where JCS iLEARN enters into a separate written agreement,
          proposal, work order, purchase order, service agreement, or other
          contractual arrangement with an organization, the terms of that
          specific arrangement shall prevail over these Terms to the extent
          of any inconsistency.
        </LegalParagraph>
      </LegalSection>

      <LegalSection title="29. Changes to Services and Terms">
        <LegalParagraph>
          JCS iLEARN may update, modify, expand, suspend, or discontinue any
          part of its website or services from time to time.
        </LegalParagraph>
        <LegalParagraph>
          We may also update these Terms to reflect changes in:
        </LegalParagraph>
        <LegalList
          items={[
            'Services;',
            'Technology;',
            'Business practices;',
            'Legal or regulatory requirements;',
            'Security measures; or',
            'Operational requirements.',
          ]}
        />
        <LegalParagraph>
          The &ldquo;Last Updated&rdquo; date indicates the date on which
          the current version was last updated.
        </LegalParagraph>
        <LegalParagraph>
          Your continued use of the website or services after updated Terms
          become effective constitutes acceptance of the revised Terms, to
          the extent permitted by applicable law.
        </LegalParagraph>
      </LegalSection>

      <LegalSection title="30. Force Majeure">
        <LegalParagraph>
          JCS iLEARN shall not be responsible for delays or failures in
          performance caused by circumstances beyond its reasonable
          control, including but not limited to:
        </LegalParagraph>
        <LegalList
          items={[
            'Natural disasters;',
            'Floods, fire, or severe weather;',
            'Epidemics or pandemics;',
            'War or civil unrest;',
            'Government restrictions or orders;',
            'Strikes or industrial disputes;',
            'Internet or telecommunications failures;',
            'Power failures;',
            'Cyber incidents or widespread technical failures;',
            'Third-party service disruptions; or',
            'Other events beyond reasonable control.',
          ]}
        />
        <LegalParagraph>
          Where reasonably possible, JCS iLEARN may take appropriate steps
          to minimize the impact of such events.
        </LegalParagraph>
      </LegalSection>

      <LegalSection title="31. No Agency or Partnership">
        <LegalParagraph>
          Use of the JCS iLEARN website or services does not create any
          agency, partnership, joint venture, employment, franchise, or
          other formal business relationship between a user and JCS iLEARN
          unless expressly established through a separate written
          agreement.
        </LegalParagraph>
      </LegalSection>

      <LegalSection title="32. Severability">
        <LegalParagraph>
          If any provision of these Terms is determined to be unlawful,
          invalid, or unenforceable, that provision shall be interpreted or
          modified to the extent necessary to make it enforceable, where
          legally permitted.
        </LegalParagraph>
        <LegalParagraph>
          The remaining provisions shall continue in full force and effect.
        </LegalParagraph>
      </LegalSection>

      <LegalSection title="33. Waiver">
        <LegalParagraph>
          Failure by JCS iLEARN to enforce any provision of these Terms at
          any particular time shall not constitute a waiver of its right to
          enforce that provision or any other provision in the future.
        </LegalParagraph>
      </LegalSection>

      <LegalSection title="34. Entire Agreement">
        <LegalParagraph>
          These Terms, together with the Privacy Policy and any applicable
          program-specific terms or separate written agreements, constitute
          the applicable understanding between JCS iLEARN and the user
          concerning the use of the relevant services.
        </LegalParagraph>
        <LegalParagraph>
          Where a separate written agreement applies, the specific
          agreement shall prevail to the extent stated in these Terms.
        </LegalParagraph>
      </LegalSection>

      <LegalSection title="35. Governing Law and Jurisdiction">
        <LegalParagraph>
          These Terms shall be governed by and interpreted in accordance
          with the laws of India.
        </LegalParagraph>
        <LegalParagraph>
          Subject to applicable law and any dispute-resolution mechanism
          contained in a separate written agreement, disputes arising out
          of or relating to these Terms or the use of JCS iLEARN services
          shall be subject to the exclusive jurisdiction of the competent
          courts at Coimbatore, Tamil Nadu, India.
        </LegalParagraph>
      </LegalSection>

      <LegalSection title="36. Contact Us">
        <LegalParagraph>
          For questions, concerns, or communications regarding these Terms
          &amp; Conditions, you may contact us at:
        </LegalParagraph>
        <LegalParagraph>
          <strong className="font-semibold text-navy">
            JCS Institute of Lifeskills Education And Recruitment Network
            LLP
          </strong>
          <br />
          <strong className="font-semibold text-navy">JCS iLEARN</strong>
          <br />
          <strong className="font-semibold text-navy">Email:</strong>{' '}
          info@jcsilearn.com
          <br />
          <strong className="font-semibold text-navy">Website:</strong>{' '}
          jcsilearn.com
        </LegalParagraph>
        <LegalParagraph>
          <strong className="font-semibold text-navy">
            By accessing the JCS iLEARN website, registering for a program,
            participating in an assessment or training program, or using
            our services, you acknowledge that you have read, understood,
            and agreed to these Terms &amp; Conditions.
          </strong>
        </LegalParagraph>
      </LegalSection>
    </LegalPageLayout>
  )
}
