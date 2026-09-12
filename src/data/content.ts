import dayanandSagarLogo from '../assets/college-logos/Dayanand Sagar University, Bangalore/Dayananda_Sagar_University.webp'
import dhanalakshmiSrinivasanLogo from '../assets/college-logos/Dhanalakshmi Srinivasan University, Trichy/Dhanalakshmi_Srinivasan_University.webp'
import ganadipathyTulsisJainLogo from '../assets/college-logos/Ganadipathy Tulsi’s Jain Engineering College, Vellore/images.jpeg'
import idhayaEngineeringLogo from '../assets/college-logos/Idhaya/ChatGPT Image Sep 12, 2026, 09_22_43 AM.png'
import jainUniversityLogo from '../assets/college-logos/JAIN University, Bangalore/JAIN.png'
import lpuLogo from '../assets/college-logos/Lovely Profesional University, Punjab/LPU.png'
import mahendraEngineeringLogo from '../assets/college-logos/Mahendra Engineering College, Salem/4690.jpg'
import muthayammalEngineeringLogo from '../assets/college-logos/Muthayammal Engineering College, Salem/MTEC.jpg'
import parkCollegeLogo from '../assets/college-logos/PARK College of Engineering and Technology, Coimbatore/images (1).jpeg'
import parkSlideshowPhoto1 from '../assets/slideshow/PARK Engineering College, Coimbatore/ChatGPT Image Sep 12, 2026, 09_42_20 AM.png'
import parkSlideshowPhoto2 from '../assets/slideshow/PARK Engineering College, Coimbatore/ChatGPT Image Sep 12, 2026, 09_44_31 AM.png'
import parkSlideshowPhoto3 from '../assets/slideshow/PARK Engineering College, Coimbatore/ChatGPT Image Sep 12, 2026, 09_46_47 AM.png'
import psgLogo from '../assets/college-logos/PSG, Coimbatore/PSG.jpg'
import psnaCollegeLogo from '../assets/college-logos/PSNA College of Engineering and Technology, Dindugal/PSNA.png'
import rathinamCampusLogo from '../assets/college-logos/Rathinam Technical Campus, Coimbatore/RTC.jpeg'
import sriManakulaVinayagarLogo from '../assets/college-logos/Manakula/ChatGPT Image Sep 12, 2026, 09_26_53 AM.png'
import srmUniversityLogo from '../assets/college-logos/SRM University, Andhra Pradesh/SRM-University.avif'
import shriNehruLogo from '../assets/college-logos/Shri Nehru Maha Vidyalaya College of Arts and Science/SNMV.png'
import sreeSaraswathiLogo from '../assets/college-logos/Sree Saraswathi Thiyagaraja College, Pollachi/images (2).jpeg'
import sriRamakrishnaLogo from '../assets/college-logos/Sri Ramakrishna Engineering College, Coimbatore/srec.png'
import stJosephsLogo from '../assets/college-logos/St. Joseph’s College of Engineering, Chennai/SJ.png'
import takshashilaUniversityLogo from '../assets/college-logos/Takshashila University, Tindivanam/TU.jpeg'
import tamilNaduCollegeLogo from '../assets/college-logos/Tamil Nadu College of Engineering, Coimbatore/TN.jpg'
import velsUniversityLogo from '../assets/college-logos/VELS University, Chennai/VELS.png'
import vsbCollegeLogo from '../assets/college-logos/VSB College of Engineering, Coimbatore/images (3).jpeg'
// Pre-composited card-face images (photo + gradient background + name/title baked in) —
// replaces the earlier plain WhatsApp headshots. Photo-to-name mapping is client-confirmed
// (see Founder type below / CLAUDE.md).
import raghulPhoto from '../assets/About-page/about-ceo.png'
import sivaPhoto from '../assets/About-page/about-vp.png'
// Separate modal-only photos — no baked-in name/title (unlike the card-face images above),
// so the modal's coded name/title/LinkedIn header isn't duplicating text already in the image.
import raghulModalPhoto from '../assets/About-page/Inside-card-coe.png'
import sivaModalPhoto from '../assets/About-page/inside-card-vp.png'
// Team department card-face images — name/title baked in, same pre-composited style as the
// founder card-face images above. No modal-only counterpart: these cards are static, no
// click-to-expand behavior. Organized by department per CLAUDE.md's team restructure.
import nishanthPhoto from '../assets/About-page/Business-Development/Nishanth-Kumar-V.png'
import sharavananPhoto from '../assets/About-page/Business-Development/Sharavanan-A-K.png'
import krithikaPhoto from '../assets/About-page/Business-Development/Krithika-T.png'
import andrewPhoto from '../assets/About-page/Business-Development/Andrew-Ponnarasan-M-S.png'
import kirubaliniPhoto from '../assets/About-page/Program-delivery/Kirubalini-J.png'
import kavyaPhoto from '../assets/About-page/Program-delivery/Kavya-S.png'
// NOTE: filename on disk is "Ajay-T.png" (asset export spelling) — the card's own baked-in
// caption reads "Ajai T", matching the client document's spelling used in the data below.
import ajaiPhoto from '../assets/About-page/Program-delivery/Ajay-T.png'
import shibirajPhoto from '../assets/About-page/Program-delivery/Shibiraj-S.png'
import gowthamPhoto from '../assets/About-page/Finance-Administration/Gowtham-J.png'
import sanjeevPhoto from '../assets/About-page/Finance-Administration/Sanjeev-D.png'
// NOTE: filename on disk is "Siddharth-J-C.png", and that card's own baked-in caption reads
// "Siddharth J" (no "C") — neither matches the client document's "Siddarth J C" spelling used
// in the data below. Flagged back to the client; a corrected asset may be needed.
import siddarthPhoto from '../assets/About-page/Finance-Administration/Siddharth-J-C.png'
import yuvaraniPhoto from '../assets/About-page/Finance-Administration/Yuvarani-S.png'
import sanjayPhoto from '../assets/About-page/Tech-Support-Team/sanjay-j.png'
import tharunPhoto from '../assets/About-page/Tech-Support-Team/tharun-balaji-s.png'
import hariramjiPhoto from '../assets/About-page/Tech-Support-Team/Hariramji-H.png'
import infantAshilPhoto from '../assets/About-page/Tech-Support-Team/Infant-Ashil-A.png'
// Homepage testimonials carousel — generic stand-in headshots reused from the testimonial
// photo set (see CLAUDE.md asset inventory); these 3 people/quotes are separate from the
// draft testimonial quotes already documented in CLAUDE.md and don't need to match by name.
import testimonialSnehaPhoto from '../assets/testimonials/Arun-Kumar.jpg'
import testimonialArvindPhoto from '../assets/testimonials/Esu-Kumar.png'
import testimonialMeenaPhoto from '../assets/testimonials/Heera-Patey.png'
import testimonialRahulPhoto from '../assets/testimonials/Poovarasan.jpg'
import testimonialPriyaPhoto from '../assets/testimonials/Sanjeev.png'
import testimonialKarthikPhoto from '../assets/testimonials/Sanjushree-Venkat.png'
// 7th testimonial repeats an already-used photo — only 6 stand-in images are available.
import testimonialAnithaPhoto from '../assets/testimonials/Poovarasan.jpg'

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

// Hero (label + headline + subheading) for the /services page — same three-tier pattern as
// the About page's `positioning`. Headline is draft copy (unlike the label and subheading,
// which reuse the page's existing sourced content), echoing the "I Learn, I Earn" tagline's
// short parallel-clause rhythm.
export const servicesHero = {
  label: 'Our Services',
  headline: 'Train Your People. Power Your Growth.',
  subheading:
    'Programs designed for Universities, Corporates, Startups, Schools, and Professionals.',
}

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

// Draft copy structurally mirroring Psiog's philosophy-section pattern in JCS's own
// training-domain language (see CLAUDE.md row 6) — not a sourced/verbatim client claim,
// no new stats or promises introduced. Pending client review, same as whoWeServe above.
export const philosophy = {
  label: 'Our Philosophy',
  headline: {
    lead: 'We listen to every learner ',
    emphasis: 'before we design a program',
    trail: '.',
  },
  paragraphs: [
    'Most training providers arrive with a fixed curriculum. We arrive with questions.',
    "Our trainers spend time understanding what your students or teams actually struggle with — the skill gaps, the confidence gaps, the specific outcomes you need — before a single session is planned. That's what makes a program land, not just get delivered.",
  ],
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

// Vision section, inserted between Our Story and Our Model (Psiog equivalent: "Mid-Market
// Focus" -> "Addressing the often overlooked"). Draft copy, flagged pending client review —
// built from concepts already established elsewhere in this file, no new stats/claims
// invented. Right column is a single pre-composited image (src/assets/About-page/vision.png).
export const vision = {
  label: 'Vision',
  headline: {
    lead: 'Building a Future Where ',
    emphasis: 'Every Learner Thrives',
    trail: '.',
  },
  paragraphs: [
    "Education alone isn't enough. What matters is whether that education translates into real opportunity — a job, a promotion, a business, a career someone is proud of.",
    "We're building JCS iLearn to be that bridge at scale — reaching more students, more institutions, more professionals, without losing the practice-first, relationship-driven approach that got us here.",
    "Our vision is simple: a growing network of trainers, a widening reach across cities and institutions, and a generation of learners who don't just complete a program — they walk away genuinely more employable, more confident, and more capable than when they started.",
  ],
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
  linkedIn: string
  bio: string[]
  photo: string
  modalPhoto: string
}

// Bios are verbatim from CLAUDE.md's new professional/credentials-focused copy, written
// specifically for the card+expand Leadership component — preserve each one's own voice
// exactly as given (Raghul's is third-person, Siva Harish's is first-person); don't
// normalize them to match each other. Photo assignment is client-confirmed (see CLAUDE.md).
export const founders: Founder[] = [
  {
    id: 'raghul-j-c',
    name: 'Raghul J C',
    title: 'Founder & CEO',
    linkedIn: 'https://www.linkedin.com/in/raghul-j-c-617818221/',
    bio: [
      "Raghul J C is the Founder & CEO of JCS iLEARN, an organisation established to bridge the gap between education and industry through practical, industry-aligned learning and career development. With over 5 years of corporate experience, he brings expertise in institutional engagement, professional development, and operational leadership. He holds a B.Tech in Biotechnology from Tamil Nadu Agricultural University and has completed his M.A. in Public Administration from Indira Gandhi National Open University.",
      'Raghul has personally delivered 500+ training programs and trained over 1,00,000 students across 50+ universities and colleges, schools, and corporate organisations. His portfolio encompasses employability, communication, placement readiness, interview preparation, leadership, entrepreneurship, and workplace skills.',
      'Under his leadership, JCS iLEARN delivers customised learning solutions aligned with institutional and corporate requirements. His responsibilities span strategic direction, client delivery, operations, finance, and talent acquisition, ensuring engagements are supported by structured planning, capable trainers, and consistent execution.',
      "His leadership philosophy combines strategic vision, operational discipline, and a learner-centric approach, strengthening JCS iLEARN's mission of empowering students and professionals with the competencies required for long-term career success.",
    ],
    photo: raghulPhoto,
    modalPhoto: raghulModalPhoto,
  },
  {
    id: 'siva-harish-m',
    name: 'Siva Harish M',
    title: 'Co-Founder & Vice President',
    linkedIn: 'https://www.linkedin.com/in/siva-harish-m-056617223/',
    bio: [
      'With experience in Aptitude, Skill Development, Communication, and Interpersonal Skills, I have trained 70,000+ students across 35+ institutions throughout India and have been part of 350+ training programs, gaining exposure to diverse students, institutions, and learning environments. I served as a Senior Aptitude Mentor at Alliance University, where I was involved in academic training, content creation, and content delivery. With a vision to create a greater impact in the education and employability sector, I co-founded JCS iLearn, where I currently serve as Co-Founder & Vice President – Business Development & Human Resources, handling institutional partnerships, business development, client relationships, talent acquisition, team management, HR operations, and organizational growth. I also continue to contribute to training, skill development, and employability initiatives. I hold a Bachelor of Technology (B.Tech) degree from Paavai Engineering College, Namakkal, which has strengthened my foundation in analytical thinking, problem-solving, and technology-driven learning.',
    ],
    photo: sivaPhoto,
    modalPhoto: sivaModalPhoto,
  },
]

export interface StatCalloutPart {
  text: string
  bold?: boolean
}

// Stat-callout block directly below the Founding Team cards (Psiog equivalent: "Young
// leadership. Deep expertise." block). Numbers are simple addition of figures already stated
// in each founder's own bio above — 850 = 500 (Raghul) + 350 (Siva Harish) training programs;
// 1,70,000 = 1,00,000 + 70,000 students/professionals — not new claims, per CLAUDE.md.
export const founderStatCallout = {
  headline: {
    lead: 'Founders. ',
    emphasis: 'Deep Experience.',
    trail: '',
  },
  sentence: [
    { text: 'Together, Raghul and Siva Harish have delivered ' },
    { text: '850+ training programs', bold: true },
    { text: ' and reached over ' },
    { text: '1,70,000 students and professionals', bold: true },
    { text: ' across India.' },
  ] satisfies StatCalloutPart[],
}

// Closing stat-callout after all team department grids, before the footer — same style/
// pattern as founderStatCallout above (headline with one italicized phrase, one centered
// sentence with bolded numbers). Figures are the existing 400+ Trainers / 1,50,000+ Students
// Trained stats from the Home stats strip, not new claims.
export const teamStatCallout = {
  headline: {
    lead: 'One Team. ',
    emphasis: 'One Mission.',
    trail: '',
  },
  sentence: [
    { text: 'From leadership to delivery, this is the team behind ' },
    { text: '400+ trainers', bold: true },
    { text: ' and ' },
    { text: '1,50,000+ students trained', bold: true },
    { text: ' across India.' },
  ] satisfies StatCalloutPart[],
}

export interface TeamMember {
  id: string
  name: string
  title: string
  photo: string
}

export interface TeamDepartment {
  heading: string
  members: TeamMember[]
}

// A "row" is either a single full department (4 cards, one heading spanning the row) or a
// paired row of two 2-card departments sharing one combined 4-card row, each with its own
// heading centered above its own pair — see CLAUDE.md's "CORRECTED LAYOUT" note.
export type TeamRow =
  | { type: 'single'; department: TeamDepartment }
  | { type: 'paired'; departments: [TeamDepartment, TeamDepartment] }

// Restructured from the old flat "Support Team" 4-card section into department rows
// (client-provided org breakdown, see CLAUDE.md). Each heading gets the same visual treatment
// as "Founding Team" above (Psiog equivalent: "Leading The Way"), followed by a static card
// grid — no click-to-expand modal, name/title are baked into each card-face image itself, same
// pre-composited style as the founder cards (the `title` field here is used for alt text only).
export const teamRows: TeamRow[] = [
  {
    type: 'single',
    department: {
      heading: 'Business Development',
      members: [
        {
          id: 'nishanth-kumar-v',
          name: 'Nishanth Kumar V',
          title: 'Business Development Manager - Institutional Partnerships',
          photo: nishanthPhoto,
        },
        {
          id: 'sharavanan-a-k',
          name: 'Sharavanan A K',
          title: 'Business Development Executive - Institutional Partnerships',
          photo: sharavananPhoto,
        },
        {
          id: 'krithika-t',
          name: 'Krithika T',
          title: 'Business Development Manager - Corporate Relations',
          photo: krithikaPhoto,
        },
        {
          id: 'andrew-ponnarasan-m-s',
          name: 'Andrew Ponnarasan M S',
          title: 'Marketing Manager',
          photo: andrewPhoto,
        },
      ],
    },
  },
  {
    type: 'single',
    department: {
      heading: 'Program Delivery & Learning',
      members: [
        {
          id: 'kirubalini-j',
          name: 'Kirubalini J',
          title: 'Learning and Development Manager',
          photo: kirubaliniPhoto,
        },
        {
          id: 'kavya-s',
          name: 'Kavya S',
          title: 'Senior Program Coordinator',
          photo: kavyaPhoto,
        },
        {
          id: 'ajai-t',
          name: 'Ajai T',
          title: 'Senior Program Executive',
          photo: ajaiPhoto,
        },
        {
          id: 'shibiraj-s',
          name: 'Shibiraj S',
          title: 'Senior Content & Social Media Executive',
          photo: shibirajPhoto,
        },
      ],
    },
  },
  {
    type: 'paired',
    departments: [
      {
        heading: 'Finance & Accounts',
        members: [
          {
            id: 'gowtham-j',
            name: 'Gowtham J',
            title: 'Senior Accounts Manager',
            photo: gowthamPhoto,
          },
          {
            id: 'sanjeev-d',
            name: 'Sanjeev D',
            title: 'Finance Associate',
            photo: sanjeevPhoto,
          },
        ],
      },
      {
        heading: 'People & Talent',
        members: [
          {
            id: 'siddarth-j-c',
            name: 'Siddarth J C',
            title: 'Talent Acquisition Specialist',
            photo: siddarthPhoto,
          },
          {
            id: 'yuvarani-s',
            name: 'Yuvarani S',
            title: 'Human Resources Manager',
            photo: yuvaraniPhoto,
          },
        ],
      },
    ],
  },
  {
    type: 'paired',
    departments: [
      {
        heading: 'Technology & Digital',
        members: [
          {
            id: 'sanjay-j',
            name: 'Sanjay J',
            title: 'Software Developer',
            photo: sanjayPhoto,
          },
          {
            id: 'tharun-balaji-s',
            name: 'Tharun Balaji S',
            title: 'Software Developer',
            photo: tharunPhoto,
          },
        ],
      },
      {
        heading: 'Design & Creative',
        members: [
          {
            id: 'hariramji-h',
            name: 'Hariramji H',
            title: 'Graphic Designer',
            photo: hariramjiPhoto,
          },
          {
            id: 'infant-ashil-a',
            name: 'Infant Ashil A',
            title: 'UI/UX Designer',
            photo: infantAshilPhoto,
          },
        ],
      },
    ],
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

export interface ProgramDescriptionSegment {
  text: string
  emphasis?: 'bold' | 'italic'
}

export interface ProgramTopic {
  label: string
  slug: string
  /** Inline-emphasis segments — join in order to read as one flowing paragraph. */
  description: ProgramDescriptionSegment[]
  /** Short, punchy pull-quote in the program's own voice, distinct from the paragraph. */
  quote: string
  /** 2-3 concrete highlights, rendered as a checkmark list. */
  bullets: string[]
}

// Program images are dropped into src/assets/programs-images/ named after the topic's
// slug (e.g. soft-skills.png) — no code changes needed to wire a new one up. Glob keys
// look like '../assets/programs-images/soft-skills.png'; strip the path/extension to get
// the slug, then key the resulting map by slug for a simple lookup in Programs.tsx.
const programImageModules = import.meta.glob<{ default: string }>(
  '../assets/programs-images/*.{png,jpg,jpeg}',
  { eager: true }
)

export const programImages: Record<string, string> = Object.fromEntries(
  Object.entries(programImageModules).map(([path, module]) => {
    const slug = path.split('/').pop()!.replace(/\.(png|jpe?g)$/i, '')
    return [slug, module.default]
  })
)

// Hero (eyebrow label) for the /programs page — same label+gold-underline pattern as
// the About page's `positioning`.
export const programsHero = {
  label: 'Our Programs',
}

// Single source of truth for both the Header "Our Programs" dropdown and the /programs
// page — shared by label+slug so the two never drift out of sync. Copy (description,
// quote, bullets) is draft, topic-level content (not sourced from the client's 23-program
// branded taxonomy — see CLAUDE.md's open programs-vs-services-taxonomy item).
export const programTopics: ProgramTopic[] = [
  {
    label: 'Soft Skills',
    slug: 'soft-skills',
    description: [
      { text: 'From ' },
      { text: 'confident communication', emphasis: 'bold' },
      {
        text: ' to teamwork and interview presence, this track builds the everyday skills that shape how learners carry themselves in a room, a group discussion, or a panel interview. It’s ',
      },
      { text: 'practice-first, not lecture-first', emphasis: 'italic' },
      { text: ' — learners rehearse the moments that actually matter.' },
    ],
    quote: 'Confidence isn’t taught in theory — it’s built one conversation at a time.',
    bullets: [
      'Mock interviews and group discussions',
      'Communication and body language coaching',
      'Real-time feedback from certified trainers',
    ],
  },
  {
    label: 'Technical Skills',
    slug: 'technical-skills',
    description: [
      { text: 'Hands-on training in coding, tools, and domain-specific technical ability, built to ' },
      { text: 'close the gap between classroom theory and industry expectation', emphasis: 'bold' },
      { text: '. Sessions are structured around ' },
      { text: 'real problems, not just syntax', emphasis: 'italic' },
      { text: ' — so learners leave with something they can actually build.' },
    ],
    quote: 'We don’t teach code. We teach how to think like a builder.',
    bullets: [
      'Hands-on coding labs and live projects',
      'Industry-aligned tools and frameworks',
      'Peer code reviews and mentor guidance',
    ],
  },
  {
    label: 'Aptitude & Reasoning',
    slug: 'aptitude-reasoning',
    description: [
      { text: 'Structured quantitative, logical, and verbal reasoning prep for the tests that stand between learners and their next opportunity. We break difficult concepts into ' },
      { text: 'simple, repeatable techniques', emphasis: 'bold' },
      { text: ' learners can rely on under pressure, with ' },
      { text: 'timed practice that mirrors the real exam', emphasis: 'italic' },
      { text: '.' },
    ],
    quote: 'Speed comes from method, not memorisation.',
    bullets: [
      'Topic-wise concept building and shortcuts',
      'Timed mock tests with detailed analysis',
      'Personalised weak-area tracking',
    ],
  },
  {
    label: 'Placement & Recruitment',
    slug: 'placement-recruitment',
    description: [
      { text: 'End-to-end support for campus placement season — ' },
      { text: 'mock interviews, resume readiness, and recruiter-facing conduct', emphasis: 'bold' },
      { text: ' — so learners walk into a hiring drive prepared instead of anxious. It’s ' },
      { text: 'built around what recruiters actually screen for', emphasis: 'italic' },
      { text: ', not generic advice.' },
    ],
    quote: 'Preparation is the difference between nervous and ready.',
    bullets: [
      'One-on-one mock interview sessions',
      'Resume and LinkedIn profile building',
      'Group discussion and panel simulations',
    ],
  },
  {
    label: 'Career Planning',
    slug: 'career-planning',
    description: [
      { text: 'Guidance for learners figuring out what comes next: ' },
      { text: 'goal-setting and career-path clarity', emphasis: 'bold' },
      { text: ' built one honest conversation at a time. This is ' },
      { text: 'advice grounded in the learner’s own strengths', emphasis: 'italic' },
      { text: ', not a one-size-fits-all roadmap.' },
    ],
    quote: 'A clear direction beats a hundred open options.',
    bullets: [
      'One-on-one career counselling sessions',
      'Skill-gap and strength assessments',
      'Personalised short- and long-term roadmaps',
    ],
  },
  {
    label: 'Corporate Readiness',
    slug: 'corporate-readiness',
    description: [
      { text: 'Workplace conduct, professional grooming, and the unwritten rules of a corporate environment — preparing learners not just to ' },
      { text: 'get hired, but to succeed once they’re in the room', emphasis: 'bold' },
      { text: '. It’s ' },
      { text: 'the polish that experience usually teaches the hard way', emphasis: 'italic' },
      { text: ', taught early instead.' },
    ],
    quote: 'Getting the offer is step one. Fitting in is step two.',
    bullets: [
      'Corporate etiquette and email communication',
      'Workplace grooming and professional presence',
      'Cross-team collaboration simulations',
    ],
  },
  {
    label: 'School Enrichment',
    slug: 'school-enrichment',
    description: [
      { text: 'Early, foundational skill-building for school students — communication, confidence, and curiosity — designed to plant the habits that make ' },
      { text: 'every later stage of learning easier', emphasis: 'bold' },
      { text: '. It’s ' },
      { text: 'skill-building disguised as fun', emphasis: 'italic' },
      { text: ', not another classroom lecture.' },
    ],
    quote: 'The habits students build young are the ones that stay.',
    bullets: [
      'Interactive communication and confidence workshops',
      'Age-appropriate life-skills activities',
      'Encouraging curiosity through real-world tasks',
    ],
  },
]

export interface Testimonial {
  id: string
  quote: string
  name: string
  role: string
  organization: string
  rating: number
  photo: string
}

// Homepage testimonials carousel content — distinct from the draft testimonial quotes
// already documented in CLAUDE.md (Arun Kumar, Esu Kumar, etc.); photos here are generic
// stand-ins reused from the same testimonial photo set, not matched to these names.
// Entries 4-7 are temporary/placeholder content added to give the carousel enough cards
// to peek — swap for real testimonials once the client sends more.
export const testimonials: Testimonial[] = [
  {
    id: 't1',
    quote:
      'JCS iLearn helped me bridge the gap between academics and the industry. The training and guidance gave me the confidence to start my career with clarity.',
    name: 'Sneha R',
    role: 'B.Tech Student',
    organization: 'Anna University',
    rating: 5,
    photo: testimonialSnehaPhoto,
  },
  {
    id: 't2',
    quote:
      'Our collaboration with JCS iLearn has been highly valuable. Their well-structured programs and professional approach have consistently delivered skilled and confident talent.',
    name: 'Arvind Kumar',
    role: 'HR Manager',
    organization: 'Zoho Corporation',
    rating: 5,
    photo: testimonialArvindPhoto,
  },
  {
    id: 't3',
    quote:
      "JCS iLearn's programs are practical, relevant, and impactful. They truly prepare students for real-world challenges and future opportunities.",
    name: 'Dr. Meena S',
    role: 'Faculty Member',
    organization: 'PSG College of Technology',
    rating: 5,
    photo: testimonialMeenaPhoto,
  },
  {
    id: 't4',
    quote:
      'The mock interviews and aptitude sessions were exactly what I needed. I walked into my placement drive feeling prepared instead of anxious.',
    name: 'Rahul Varma',
    role: 'Final Year Student',
    organization: 'SRM University',
    rating: 5,
    photo: testimonialRahulPhoto,
  },
  {
    id: 't5',
    quote:
      "Partnering with JCS iLearn gave our team practical, job-ready skills in a fraction of the time we expected. Their trainers really understand industry needs.",
    name: 'Priya Nair',
    role: 'Talent Development Lead',
    organization: 'Freshworks',
    rating: 5,
    photo: testimonialPriyaPhoto,
  },
  {
    id: 't6',
    quote:
      'What impressed me most was how personalized the sessions felt, even in a large batch. Every trainer took time to address individual doubts.',
    name: 'Karthik S',
    role: 'MBA Student',
    organization: 'Bharathiar University',
    rating: 5,
    photo: testimonialKarthikPhoto,
  },
  {
    id: 't7',
    quote:
      'Our students consistently rate the JCS iLearn workshops as the most useful part of their placement preparation. A dependable training partner.',
    name: 'Anitha Raghavan',
    role: 'Placement Officer',
    organization: 'Rathinam Technical Campus',
    rating: 5,
    photo: testimonialAnithaPhoto,
  },
]

export interface TrainingFootprint {
  dateRange: string
  programName: string
  collegeName: string
  logo?: string
  // Photo slideshow test case — only PARK Engineering College has a photo folder so far (see
  // src/assets/slideshow/). Every other entry leaves this undefined and keeps the blank
  // placeholder box until the client sends more slideshow photos.
  photos?: string[]
}

// "Training Footprints" timeline on /trainers, below the trainer profile grid — all 17 real
// entries from the client's Training Footprints PDF, in the exact order given. Idhaya
// Engineering College and Sri Manakula Vinayagar Engineering College initially shipped with
// no logo (no folder existed for either in the asset export); both logos were supplied
// afterward and are wired in below. PSG College of Arts and Science appears 4 times with
// different dates/engagements — that's real, not a duplicate.
export const trainingFootprints: TrainingFootprint[] = [
  {
    dateRange: '1st Sept 2026 to 3rd Sept 2026',
    programName: 'Soft Skills Induction Program',
    collegeName: 'PARK Engineering College, Coimbatore',
    logo: parkCollegeLogo,
    photos: [parkSlideshowPhoto1, parkSlideshowPhoto2, parkSlideshowPhoto3],
  },
  {
    dateRange: '1st Sept 2026 to 3rd Sept 2026',
    programName: 'Freshmen Induction Program',
    collegeName: 'Tamil Nadu College of Engineering, Coimbatore',
    logo: tamilNaduCollegeLogo,
  },
  {
    dateRange: '13th & 14th Oct 2026',
    programName: 'Pre Placement Preparation Program',
    collegeName: 'Idhaya Engineering College for Women, Chinnasalem',
    logo: idhayaEngineeringLogo,
  },
  {
    dateRange: '4th Nov to 10th Nov 2026',
    programName: 'Placement Readiness Program',
    collegeName: 'Dhanalakshmi Srinivasan University, Trichy',
    logo: dhanalakshmiSrinivasanLogo,
  },
  {
    dateRange: '3rd Nov to 27th Nov 2026',
    programName: 'Communication Skills Training',
    collegeName: 'VSB Engineering College, Coimbatore',
    logo: vsbCollegeLogo,
  },
  {
    dateRange: '27th Nov to 30th Nov 2026',
    programName: 'Block Training',
    collegeName: 'PSG College of Arts and Science, Coimbatore',
    logo: psgLogo,
  },
  {
    dateRange: '6th Jan to 10th Jan 2026',
    programName: 'Aptitude Training',
    collegeName: "Ganadipathy Tulsi's Jain Engineering College, Vellore",
    logo: ganadipathyTulsisJainLogo,
  },
  {
    dateRange: '20th Jan to 22nd Apr 2026',
    programName: 'Technical - Capgemini Python',
    collegeName: 'Dayanand Sagar University, Bangalore',
    logo: dayanandSagarLogo,
  },
  {
    dateRange: '2nd Feb to 26th Apr 2026',
    programName: 'Continuous Aptitude Training',
    collegeName: 'Rathinam Technical Campus, Coimbatore',
    logo: rathinamCampusLogo,
  },
  {
    dateRange: '3rd Feb to 14th Feb 2026',
    programName: 'Placement Training',
    collegeName: 'Sri Manakula Vinayagar Engineering College, Puducherry',
    logo: sriManakulaVinayagarLogo,
  },
  {
    dateRange: '19th Feb to 22nd Feb 2026',
    programName: 'Block Training',
    collegeName: 'PSG College of Arts and Science, Coimbatore',
    logo: psgLogo,
  },
  {
    dateRange: '1st June to 10th July 2026',
    programName: 'Soft Skills Program',
    collegeName: 'JAIN University, Bangalore',
    logo: jainUniversityLogo,
  },
  {
    dateRange: '8th June to 12th June 2026',
    programName: 'Block Training',
    collegeName: 'PSG College of Arts and Science, Coimbatore',
    logo: psgLogo,
  },
  {
    dateRange: '17th July to 24th July 2026',
    programName: 'Soft Skills & Aptitude Training MBA',
    collegeName: 'VELS University, Chennai',
    logo: velsUniversityLogo,
  },
  {
    dateRange: '4th Aug to 8th Aug',
    programName: 'Aptitude Training',
    collegeName: 'PSNA College of Engineering and Technology, Dindugal',
    logo: psnaCollegeLogo,
  },
  {
    dateRange: '10th Aug to 30th Nov 2026',
    programName: 'CAT Specified Aptitude Training Program',
    collegeName: 'SRM University, Andhra Pradesh',
    logo: srmUniversityLogo,
  },
  {
    dateRange: '27th Aug to 30th Aug',
    programName: 'Block Training',
    collegeName: 'PSG College of Arts and Science, Coimbatore',
    logo: psgLogo,
  },
]
