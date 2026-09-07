import dayanandSagarLogo from '../assets/college-logos/Dayanand Sagar University, Bangalore/Dayananda_Sagar_University.webp'
import dhanalakshmiSrinivasanLogo from '../assets/college-logos/Dhanalakshmi Srinivasan University, Trichy/Dhanalakshmi_Srinivasan_University.webp'
import ganadipathyTulsisJainLogo from '../assets/college-logos/Ganadipathy Tulsi’s Jain Engineering College, Vellore/images.jpeg'
import jainUniversityLogo from '../assets/college-logos/JAIN University, Bangalore/JAIN.png'
import lpuLogo from '../assets/college-logos/Lovely Profesional University, Punjab/LPU.png'
import mahendraEngineeringLogo from '../assets/college-logos/Mahendra Engineering College, Salem/4690.jpg'
import muthayammalEngineeringLogo from '../assets/college-logos/Muthayammal Engineering College, Salem/MTEC.jpg'
import parkCollegeLogo from '../assets/college-logos/PARK College of Engineering and Technology, Coimbatore/images (1).jpeg'
import psgLogo from '../assets/college-logos/PSG, Coimbatore/PSG.jpg'
import psnaCollegeLogo from '../assets/college-logos/PSNA College of Engineering and Technology, Dindugal/PSNA.png'
import rathinamCampusLogo from '../assets/college-logos/Rathinam Technical Campus, Coimbatore/RTC.jpeg'
import srmUniversityLogo from '../assets/college-logos/SRM University, Andhra Pradesh/SRM-University.avif'
import shriNehruLogo from '../assets/college-logos/Shri Nehru Maha Vidyalaya College of Arts and Science/SNMV.png'
import sreeSaraswathiLogo from '../assets/college-logos/Sree Saraswathi Thiyagaraja College, Pollachi/images (2).jpeg'
import sriRamakrishnaLogo from '../assets/college-logos/Sri Ramakrishna Engineering College, Coimbatore/srec.png'
import stJosephsLogo from '../assets/college-logos/St. Joseph’s College of Engineering, Chennai/SJ.png'
import takshashilaUniversityLogo from '../assets/college-logos/Takshashila University, Tindivanam/TU.jpeg'
import tamilNaduCollegeLogo from '../assets/college-logos/Tamil Nadu College of Engineering, Coimbatore/TN.jpg'
import velsUniversityLogo from '../assets/college-logos/VELS University, Chennai/VELS.png'
import vsbCollegeLogo from '../assets/college-logos/VSB College of Engineering, Coimbatore/images (3).jpeg'
// Photo-to-name mapping is an assumption (see Founder type below) — both files are generic,
// unlabeled WhatsApp exports with no way to confirm identity from the image itself.
import raghulPhoto from '../assets/founders/WhatsApp Image 2026-09-06 at 11.11.35 PM.jpeg'
import sivaPhoto from '../assets/founders/WhatsApp Image 2026-09-06 at 11.12.47 PM.jpeg'

export const homeHero = {
  taglineLine1: 'I Learn,',
  taglineLine2: 'I Earn',
  subheadline: 'Empowering Lives Through Essential Skills',
  supportingLine:
    'Because when you Learn with Purpose, you Earn with Confidence.',
  // Draft copy (Psiog-style badge row) — qualitative claims grounded in sourced content
  // (trainer bios' years/certifications, the 5 audience categories, testimonial themes),
  // deliberately excludes numeric stats already shown in the Stats strip below.
  badges: [
    'Practice-First Training Approach',
    'Experienced, Certified Trainers',
    'Multi-City Training Reach',
    'Programs For Every Audience',
    'Placement-Focused Skill Development',
  ],
}

export interface StatItem {
  id: string
  target: number
  suffix: string
  label: string
}

export const homeStats: StatItem[] = [
  { id: 'year', target: 1, suffix: '', label: 'Year in Operation' },
  { id: 'students', target: 150000, suffix: '+', label: 'Students/Professionals Trained' },
  { id: 'institutions', target: 25, suffix: '+', label: 'Institutions' },
  { id: 'corporate', target: 10, suffix: '+', label: 'Corporate Partners' },
  { id: 'trainers', target: 400, suffix: '+', label: 'Trainers' },
  { id: 'cities', target: 35, suffix: '', label: 'Cities Served' },
  // TODO: replace with real figure — not in client-sourced content, placeholder for layout only
  { id: 'courses', target: 50, suffix: '+', label: 'Courses & Programs' },
  // TODO: replace with real figure — not in client-sourced content, placeholder for layout only
  { id: 'satisfaction', target: 95, suffix: '%', label: 'Learner Satisfaction' },
]

export type BentoIcon =
  | 'academic-cap'
  | 'building'
  | 'briefcase'
  | 'user-group'
  | 'calendar'
  | 'book'
  | 'star'

export interface BentoTile {
  id: string
  /** grid-area name, matches the desktop grid-template-areas layout */
  area: string
  /** key into homeStats — omit for non-numeric tiles (map, partners) */
  statId?: string
  /** static label for non-numeric tiles */
  label?: string
  bg: string
  numberColor: string
  labelColor: string
  icon?: BentoIcon
  iconTreatment: 'corner' | 'watermark' | 'none'
  rounded: 'tl-br' | 'tr-bl'
}

// Desktop layout (12-col x 2-row grid-template-areas, see Recognitions.tsx):
//   trained trained map map map map inst inst partners partners trainers trainers
//   trained trained map map map map corp corp year year courses satisfaction
export const bentoTiles: BentoTile[] = [
  {
    id: 'trained',
    area: 'trained',
    statId: 'students',
    bg: 'bg-navy',
    numberColor: 'text-white',
    labelColor: 'text-white/80',
    icon: 'academic-cap',
    iconTreatment: 'watermark',
    rounded: 'tl-br',
  },
  {
    id: 'map',
    area: 'map',
    statId: 'cities',
    bg: 'bg-gold',
    numberColor: 'text-navy',
    labelColor: 'text-navy/70',
    iconTreatment: 'none',
    rounded: 'tr-bl',
  },
  {
    id: 'inst',
    area: 'inst',
    statId: 'institutions',
    bg: 'bg-white border border-navy/10 shadow-md',
    numberColor: 'text-navy',
    labelColor: 'text-pale-blue-text',
    icon: 'building',
    iconTreatment: 'corner',
    rounded: 'tl-br',
  },
  {
    id: 'partners',
    area: 'partners',
    label: 'Our Partners',
    bg: 'bg-navy',
    numberColor: 'text-white',
    labelColor: 'text-white/80',
    iconTreatment: 'none',
    rounded: 'tr-bl',
  },
  {
    id: 'trainers',
    area: 'trainers',
    statId: 'trainers',
    bg: 'bg-navy',
    numberColor: 'text-white',
    labelColor: 'text-white/80',
    icon: 'user-group',
    iconTreatment: 'corner',
    rounded: 'tl-br',
  },
  {
    id: 'corp',
    area: 'corp',
    statId: 'corporate',
    bg: 'bg-pale-blue-bg',
    numberColor: 'text-navy',
    labelColor: 'text-pale-blue-text',
    icon: 'briefcase',
    iconTreatment: 'corner',
    rounded: 'tr-bl',
  },
  {
    id: 'year',
    area: 'year',
    statId: 'year',
    bg: 'bg-gold',
    numberColor: 'text-navy',
    labelColor: 'text-navy/70',
    icon: 'calendar',
    iconTreatment: 'corner',
    rounded: 'tl-br',
  },
  {
    id: 'courses',
    area: 'courses',
    statId: 'courses',
    bg: 'bg-white border border-navy/10 shadow-md',
    numberColor: 'text-navy',
    labelColor: 'text-pale-blue-text',
    icon: 'book',
    iconTreatment: 'corner',
    rounded: 'tr-bl',
  },
  {
    id: 'satisfaction',
    area: 'satisfaction',
    statId: 'satisfaction',
    bg: 'bg-pale-blue-bg',
    numberColor: 'text-navy',
    labelColor: 'text-pale-blue-text',
    icon: 'star',
    iconTreatment: 'corner',
    rounded: 'tl-br',
  },
]

export interface ServiceCategory {
  id: string
  label: string
  description: string
  programs: string[]
}

// Audience-first taxonomy per CLAUDE.md "Service category programs" — program names are
// verbatim from the client; descriptions are draft copy pending client review (no old-site
// service descriptions exist to reuse), same unresolved-taxonomy caveat as CLAUDE.md item #1.
export const serviceCategories: ServiceCategory[] = [
  {
    id: 'universities',
    label: 'For Universities',
    description:
      'Placement-ready skills and career development programs built for university students, from campus to career.',
    programs: [
      'Placement & Career Readiness Program',
      'Professional & Workplace Skills Program',
      'Entrepreneurship & Innovation Program',
      'Digital & Industry Skills Program',
      'Competitive Exams & Higher Education Program',
    ],
  },
  {
    id: 'corporates',
    label: 'For Corporates',
    description:
      'Leadership, communication, and performance programs that help teams and organizations perform at their best.',
    programs: [
      'Leadership & Managerial Excellence',
      'Communication & Workplace Excellence',
      'Sales & Customer Excellence',
      'Productivity & Performance Enhancement',
      'AI, Digital & Future Skills',
    ],
  },
  {
    id: 'startups',
    label: 'For Startups',
    description:
      'Foundational business, leadership, and growth programs for founders and early teams building from the ground up.',
    programs: [
      'Entrepreneurship Essentials',
      'Leadership Development',
      'Sales, Marketing & Business Growth',
      'Finance & Business Management',
      'Innovation, AI & Digital Transformation',
    ],
  },
  {
    id: 'schools',
    label: 'For Schools',
    description:
      'Personality, communication, and academic programs that prepare school students for what comes next.',
    programs: [
      'Personality Development',
      'Public Speaking',
      'Academic Excellence & Study Skills',
      'Career Awareness & Future Readiness',
      'Innovation & Creativity',
    ],
  },
  {
    id: 'professionals',
    label: 'For Professionals',
    description:
      'Advanced leadership, communication, and digital skills programs for working professionals looking to grow further.',
    programs: [
      'Leadership & People Management',
      'Advanced Communication & Executive Presence',
      'Productivity & Performance Excellence',
      'AI & Digital Workplace Skills',
      'Sales, Negotiation & Customer Management',
    ],
  },
]

export interface CollegeLogo {
  name: string
  src: string
}

// All 20 college-logo folders currently in the asset export (CLAUDE.md's asset inventory
// says 18 — the folder has grown since that count was written; using every one provided
// rather than picking a subset. Two obvious folder-name typos corrected in the display name
// only (Profesional -> Professional, Dindugal -> Dindigul); file paths are untouched.
export const collegeLogos: CollegeLogo[] = [
  { name: 'Dayanand Sagar University, Bangalore', src: dayanandSagarLogo },
  {
    name: 'Dhanalakshmi Srinivasan University, Trichy',
    src: dhanalakshmiSrinivasanLogo,
  },
  {
    name: 'Ganadipathy Tulsi’s Jain Engineering College, Vellore',
    src: ganadipathyTulsisJainLogo,
  },
  { name: 'JAIN University, Bangalore', src: jainUniversityLogo },
  { name: 'Lovely Professional University, Punjab', src: lpuLogo },
  { name: 'Mahendra Engineering College, Salem', src: mahendraEngineeringLogo },
  {
    name: 'Muthayammal Engineering College, Salem',
    src: muthayammalEngineeringLogo,
  },
  {
    name: 'PARK College of Engineering and Technology, Coimbatore',
    src: parkCollegeLogo,
  },
  { name: 'PSG, Coimbatore', src: psgLogo },
  {
    name: 'PSNA College of Engineering and Technology, Dindigul',
    src: psnaCollegeLogo,
  },
  { name: 'Rathinam Technical Campus, Coimbatore', src: rathinamCampusLogo },
  { name: 'SRM University, Andhra Pradesh', src: srmUniversityLogo },
  {
    name: 'Shri Nehru Maha Vidyalaya College of Arts and Science',
    src: shriNehruLogo,
  },
  {
    name: 'Sree Saraswathi Thiyagaraja College, Pollachi',
    src: sreeSaraswathiLogo,
  },
  {
    name: 'Sri Ramakrishna Engineering College, Coimbatore',
    src: sriRamakrishnaLogo,
  },
  { name: 'St. Joseph’s College of Engineering, Chennai', src: stJosephsLogo },
  { name: 'Takshashila University, Tindivanam', src: takshashilaUniversityLogo },
  {
    name: 'Tamil Nadu College of Engineering, Coimbatore',
    src: tamilNaduCollegeLogo,
  },
  { name: 'VELS University, Chennai', src: velsUniversityLogo },
  { name: 'VSB College of Engineering, Coimbatore', src: vsbCollegeLogo },
]

// Draft copy synthesized from sourced About/Founder material (audience categories, the
// co-founder's "closing the gap between education and employability" mission) — not a
// verbatim CLAUDE.md quote, no new stats or claims introduced. Pending client review.
// Headline is flagged in CLAUDE.md as draft copy too — swap if the client sends preferred
// wording. Closing line reuses homeHero.supportingLine verbatim (real sourced mission copy).
export const whoWeServe = {
  label: 'Who We Serve',
  headline: {
    lead: 'We Believe Every Learner Deserves a ',
    emphasis: 'Path to Employability',
    trail: '.',
  },
  paragraph:
    'JCS iLearn trains learners at every stage — university students preparing for placements, professionals and corporate teams sharpening their skills, startups building strong foundations, and schools shaping young minds early. Across every audience, our mission stays the same: closing the gap between education and employability, one classroom at a time.',
  closingLine: homeHero.supportingLine,
}

export const philosophy = {
  heading: 'Our Philosophy',
  quote: homeHero.supportingLine,
}

// Positioning section (hero) of the consolidated /about page. Label/headline/subheading sit
// on the hero photo, sourced verbatim from CLAUDE.md's Vision headline / mission line.
export const positioning = {
  label: 'About Us',
  headline: 'I Learn, I Earn',
  subheading: 'Empowering Lives Through Essential Skills.',
}

// "Our Story" section, directly below the hero — client-provided final copy (verbatim, not
// draft), per CLAUDE.md's "Positioning section — Our Story". Two-column layout: this copy on
// the left (no section heading — client removed it to match Psiog's proportions), a single
// pre-composited image (gear graphic + quote card baked together) on the right. quoteCardText
// is the copy baked into that image, kept here only to build descriptive alt text for it since
// the baked-in text isn't otherwise readable by screen readers/SEO.
export const ourStory = {
  paragraphs: [
    'Every great journey begins with a belief. Ours began with a belief that education should transform lives, not simply award certificates.',
    'JCS iLearn was created to bridge the gap between what people learn and what the world expects, turning knowledge into skills, confidence into capability, and ambition into achievement. We are building a learning ecosystem where every learner is empowered to discover their potential, embrace opportunities, and create a future they can be proud of.',
  ],
  closingLine: "We don't just build skills. We build possibilities.",
  quoteCardText:
    'Empowering learners today for brighter tomorrows. At JCS iLearn, we bridge education and opportunities to help individuals build skills, confidence, and successful careers.',
}

export interface ModelPillar {
  stage: string
  title: string
  description: string
}

// Our Model section of the consolidated /about page. Pillar titles (Industry-Relevant
// Curriculum / Expert Trainers / Proven Results) are sourced verbatim from the old site's
// "Why Choose Our Training Services" ("already sourced" per CLAUDE.md, though no body copy
// for each ever made it into the handoff — descriptions below are draft synthesis grounded
// only in stats/facts already established elsewhere in this file, not new claims).
// Design choice: since both this pillar list and the Journey content's narrative arc are
// three items, the arc's own stage names (Spark/Vision/Impact) are used as labels for the
// three pillars in order, rather than building a separate unrelated 3-step structure —
// this is how "map the Why Choose content" and "use the Spark -> Vision -> Impact arc as
// the section's story structure" combine into one thing instead of two.
export const ourModel = {
  intro:
    'JCS iLearn was born from a classroom moment—but built on years of passion, purpose, and belief in the power of education.',
  pillars: [
    {
      stage: 'Spark',
      title: 'Industry-Relevant Curriculum',
      description:
        'Every program starts with what industries and institutions actually need — practice-first content, not theory for its own sake.',
    },
    {
      stage: 'Vision',
      title: 'Expert Trainers',
      description:
        'Carried into the classroom by a network of 400+ trainers, many certified specialists in their domain.',
    },
    {
      stage: 'Impact',
      title: 'Proven Results',
      description:
        '1,50,000+ students and professionals trained across 25+ institutions and 35 cities so far.',
    },
  ] satisfies ModelPillar[],
}

export interface Recognition {
  trainerName: string
  title: string
  organization: string
  period: string
}

// CLAUDE.md's Awards section does NOT name the recipient — it explicitly says "once the
// recipient's name is confirmed," so the name itself, not just its placement, is still open.
// Placeholder until the client confirms who this is; do not replace with a guessed name.
export const recognitions: Recognition[] = [
  {
    trainerName: '[Trainer name pending confirmation]',
    title: 'Best Trainer of the Year',
    organization: 'Alliance University, Bangalore',
    period: '2024–25',
  },
]

export interface Founder {
  id: string
  name: string
  title: string
  credentials: string
  linkedIn: string
  bio: string
  signOff: string
  photo: string
}

// Bios are verbatim from CLAUDE.md's "From the Founder's Desk" / "Message from the
// Co-Founder" copy — do not summarize, paraphrase, or edit the wording.
// Photo assignment is still an open item pending client confirmation (see CLAUDE.md) —
// left exactly as-is, do not change which photo maps to which founder.
export const founders: Founder[] = [
  {
    id: 'raghul-j-c',
    name: 'Raghul J C',
    title: 'Founder & CEO',
    credentials:
      'B.Tech (Biotechnology), Tamil Nadu Agricultural University · M.A., IGNOU',
    linkedIn: 'https://www.linkedin.com/in/raghul-j-c-617818221/',
    bio: `The spark for JCS iLearn was ignited during one of my entrepreneurship workshops. A curious student asked: "You speak so passionately about entrepreneurship—why haven't you started your own company?" That question hit home. It wasn't just a passing thought—it was a powerful reflection. If I truly believed in entrepreneurship, why not live it? That moment became my turning point. Fueled by a deep passion for teaching and a desire to create meaningful impact, I founded JCS iLearn—a platform where education is not just shared, but experienced, and where learning opens doors to real opportunity. Our tagline, "I Learn, I Earn," isn't just a slogan—it's our philosophy. We believe education should lead to empowerment, and knowledge should create opportunities for growth and success. This company is my answer to that student's question—and proof that with the right support, learning becomes a launchpad for life.`,
    signOff: '— Raghul J C, Founder & CEO',
    photo: raghulPhoto,
  },
  {
    id: 'siva-harish-m',
    name: 'Siva Harish M',
    title: 'Co-Founder & VP',
    credentials: 'B.Tech (Food Technology), Paavai Engineering College',
    linkedIn: 'https://www.linkedin.com/in/siva-harish-m-056617223/',
    bio: `At JCS iLearn, we believe that skill is the foundation of transformation—not just for individuals, but for industries, communities, and the future. Our vision is to close the gap between education and employability by equipping learners with practical, future-ready skills. We're committed to building high-impact, accessible learning experiences that go beyond upskilling—they inspire growth, confidence, and clarity. As Co-Founder, I assure you that our mission is personal. Every program we design is created with care, relevance, and a deep understanding of the challenges today's learners face. Thank you for trusting us. Together, let's unlock potential—and build a skilled, forward-thinking generation.`,
    signOff: '— Siva Harish M, Co-Founder & VP',
    photo: sivaPhoto,
  },
]

export interface LeadershipValue {
  title: string
  description: string
}

// Verbatim from CLAUDE.md's "Our Leadership Values" (old site content, reused as-is).
export const leadershipValues: LeadershipValue[] = [
  {
    title: 'Purpose-Driven',
    description: 'Every decision is guided by our mission to empower learners',
  },
  {
    title: 'Innovation',
    description: 'Continuously evolving our approach to meet changing needs',
  },
  {
    title: 'Collaboration',
    description: 'Working together to achieve greater impact',
  },
  {
    title: 'Excellence',
    description: 'Striving for the highest quality in everything we do',
  },
]

export const contactInfo = {
  address:
    'No.10, Udayampalayam Main Road, Sowripalayam, Coimbatore, Tamil Nadu, India – 641028',
  phone: '+91 75984 98451',
  phoneHref: '+917598498451',
  emails: ['info@jcsilearn.com', 'jcsilearn@gmail.com'],
  hours: ['Mon–Fri 9:00 AM–5:00 PM', 'Sat 9:00 AM–1:00 PM'],
}
