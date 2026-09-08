# JCS iLearn — Website Redesign

## Project summary
Full redesign of jcsilearn.com (client: JCS iLearn LLP, Coimbatore) for a training/skill-development
company. Goal: same visual language, transitions, and card-design feel as **psiog.com**
(dark hero, animated stat counters, bento-style cards, tabbed services), re-skinned in JCS's
own navy/gold palette and populated with JCS's real content. This is NOT a copy of Psiog's
business content — only the UI patterns, motion, and structure are being replicated.

Old codebase (Next.js) is being retired — do not port its components directly. Its content
has been extracted and is inlined below as the source of truth. Treat this file as the
single source of truth for content; do not invent stats, names, or claims not listed here.

## Tech stack
- **Vite + React 19 + TypeScript** — no Next.js, no App Router, no server components.
- **react-router-dom v6** for client-side routing (multi-page site, not a SPA-with-anchors-only).
- **Tailwind CSS v4**
- **Framer Motion** for scroll/hover/tab transitions (matches Psiog's animation feel)
- **react-icons** (already used in old repo content) — fine to keep, or swap to `lucide-react` if preferred for a cleaner icon set.
- **pnpm** exclusively — never npm/yarn commands or lockfiles.
- Deployment target: **Vercel** (same as old site; domain `jcsilearn.com` is on Hostinger, DNS pointed at Vercel).
- No backend needed. Contact form uses **EmailJS** (`@emailjs/browser`) client-side, same as the old repo — needs three env vars: `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`, `VITE_EMAILJS_PUBLIC_KEY` (client will need to supply these; old repo's `.env` was not included in the handoff zip).

## Setup
```bash
pnpm create vite@latest jcs-ilearn-redesign -- --template react-ts
cd jcs-ilearn-redesign
pnpm add react-router-dom framer-motion react-icons @emailjs/browser
pnpm add -D tailwindcss @tailwindcss/postcss postcss autoprefixer
pnpm dlx tailwindcss init -p
pnpm dev
```

Recommended folder structure:
```
src/
  components/       # shared: Header, Footer, Card, StatCounter, TabbedPanel, SectionWrapper
  pages/            # Home, About, Programs, Services, Trainers, Contact, Careers
  sections/         # homepage-only sections (Hero, StatsStrip, ServicesTabs, Testimonials, CTA)
  data/             # content.ts — all copy/stats/programs as typed constants (see Content section below)
  assets/           # images, logos (see Asset Inventory below)
```

## Design system

**Typeface:** Plus Jakarta Sans (Google Fonts, variable weight 200-800, italic included). Not
an arbitrary pick — Psiog's own stylesheet declares `"Google Sans", sans-serif`, but Google
Sans is Google's proprietary internal font, not licensable/usable outside Google's own
products; for most visitors without local access to it, Psiog's site silently falls back to
plain system sans-serif. Plus Jakarta Sans was chosen as a close, actually-usable visual
substitute (similar geometric structure, rounded terminals) rather than copying a font that
doesn't really work for outside visitors either. Loaded via Google Fonts `<link>` in
`index.html`, wired to `--font-sans` in the Tailwind `@theme` block. Headings at weight
600-700, body/nav at 400-500, matching the weight contrast on the reference site. Do not
re-investigate "Google Sans" further — this is settled.

**Locked palette:**
| Token | Hex | Use |
|---|---|---|
| `navy` (primary) | `#0A0B68` | headers, primary backgrounds, CTA buttons |
| `gold` (accent) | `#F4B400` | hover states, active nav, highlights, badges — replaces the old site's pink/purple accent everywhere |
| `pale-blue-bg` | `#DCE6FF` | soft section backgrounds (bento cards) |
| `pale-blue-text` | `#1E3A8A` | text on pale-blue-bg |

Do **not** carry over the old repo's `pink-600` hover states or purple/pink decorative blur shapes — those get replaced with gold accents and navy/gold blurs.

**Card style:** replicate Psiog's card treatment — soft shadow, generous padding, rounded-2xl/3xl corners, subtle hover lift (`translateY(-4px)` + shadow increase), not the old site's `scale-110` active-card jump.

**Motion:** replicate Psiog's feel — fade+slide-up on scroll into view (`IntersectionObserver` or Framer's `whileInView`), staggered children for grids, smooth tab-panel crossfade for the services/programs tabs. Keep transitions in the 200–400ms range, `ease-out`.

**Stats counters:** animate 0 → target on scroll into view (`useCountUp` hook), matching Psiog's homepage stat strip.

## Psiog reference structure (literal — do not deviate without flagging)

This is the actual current structure of psiog.com, pulled directly from the live site. Earlier
guidance described Psiog's "feel" (bento cards, tabbed services) which is too loose and led to
generic-SaaS-template drift. Treat the section order and interaction pattern below as literal
ground truth for the Home page — only the copy/data changes, not the pattern.

| # | Section | Pattern (copy this exactly) |
|---|---|---|
| 1 | Header (nav) | White background, navy text nav links, gold underline beneath the active/hovered link. **Nav order: Home / About Us / Our Programs / Our Services / Trainers**, then the gold "Get Started" pill button. **About Us is a single plain link to `/about` — NOT a dropdown** (corrected: matches Psiog's real nav, which has no dropdown on About since it's one page with anchors, not sub-pages). Home links to `/`, same font-size/weight/hover treatment as its siblings. Logo sits left, links center-right, CTA button far right. |
| 2 | Hero | Full-bleed looping video background (`autoplay muted loop playsInline`, `object-cover`), pulling brand navy from the Tailwind theme token, not a hardcoded hex. **Overlay gradient (corrected — softer/longer than the first pass):** left-side navy overlay at ~80-85% opacity (not fully solid — faint video texture should bleed through even behind the text), holding that opacity until roughly 30% width, then fading gradually to transparent by ~85-90% width (not a fast cutoff). Mobile/tablet: flatter near-solid navy wash across the whole video for readability, no gradient at narrow widths. Text content (headline, subhead, two CTAs, differentiator badge row) unchanged — this row only governs the background treatment. Poster frame + `prefers-reduced-motion` fallback to a static image. |
| 3 | Recognitions | Row of circular badge icons + title + date, centered heading above ("Recognized for our Differentiators" style). JCS currently has exactly ONE real, confirmed item: "Best Trainer of the Year 2024–25" (Alliance University) — this belongs to a specific trainer, not the company, so the card should read as a trainer credential (e.g. "[Trainer Name] — Best Trainer of the Year, Alliance University, 2024–25") not a generic company award. Build the row to support 1-3 cards visually (don't stretch one card to fill a 3-card-wide row awkwardly) and leave it structured so more can be added later. **Do not fabricate additional awards** to fill the row. |
| 4 | Stats + Map + Partnerships (bento grid) | This is a specific **asymmetric grid**, not a flat row — replicate the exact shape below, sized to JCS's 6 real stats (not Psiog's 8+1, so the grid is smaller — don't pad with invented stats): <br><br>**Layout (5 columns × 3 rows on desktop):**<br>- Col 1, Row 1: `1,50,000+ Students/Professionals Trained` (white card)<br>- Col 1, Row 2-3 (tall card, spans 2 rows): `1 Year in Operation` (gold-accent card)<br>- Col 2-3, Row 1-2 (large card, spans 2 cols × 2 rows): the **map/highlight cell** — `35 Cities Served`, large number on a bold navy or gold background. Use a simple stylized India outline graphic if one exists in assets; if not, style this as a bold highlight card WITHOUT a fabricated map graphic (large number + label is enough — don't invent or approximate a map SVG that isn't accurate) <br>- Col 4, Row 1: `400+ Trainers` (navy card)<br>- Col 4, Row 2: `25+ Institutions` (white card)<br>- Col 2-4, Row 3 (wide card, spans 3 cols): `10+ Corporate Partners` (navy card)<br>- Col 5, Row 1-3 (tall card, spans full height): **Partnerships/"Trusted by" cell** — use the real college logos (rotate through 4-6 of them, small logo grid or fade carousel), labeled "Trusted by" or "Our Partner Institutions"<br><br>On mobile: collapse to a single column, stacked in the same top-to-bottom reading order (students → year → cities → trainers → institutions → corporate partners → trusted-by logos). <br><br>Card color rule: alternate white / navy / gold-accent cards for visual rhythm like Psiog does (not all one color) — but stay within the locked 4-token palette, don't introduce Psiog's teal/lime. |
| 5 | Who We Serve | **Exact Psiog layout — two-column, not centered plain text (supersedes the current centered version, which needs a full rebuild):**<br><br>**Left column:**<br>- Small label above the headline: "Who We Serve" in gold/navy with a short gold underline beneath it (matches the label+underline treatment used elsewhere already, e.g. "Recognitions").<br>- Headline: 2-3 lines, bold, with ONE key phrase italicized for emphasis (Psiog: "We believe in catering to the *Underserved Mid-Market*."). JCS draft (flagged as draft copy, not sourced verbatim): "We Believe Every Learner Deserves a *Path to Employability*." — replace if the client sends preferred wording.<br>- Body paragraph: reuse the already-written "JCS iLearn trains learners at every stage..." paragraph currently in the centered version — this copy is good, just needs to move into this left column, left-aligned, not centered.<br>- Closing italic pull-quote line, smaller/lighter than the headline (Psiog: "Psiog operates in this white space. We focus where others don't."): use the existing sourced mission line **verbatim** — "Because when you Learn with Purpose, you Earn with Confidence." — do not draft a new one, this is already real content.<br><br>**Right column — floating badge graphic:**<br>- A simple, clean India outline (decorative, not survey-accurate — no accurate asset exists yet, use any clean public-style outline) in a pale/muted tone (pale-blue-bg or navy/10).<br>- Floating circular badges scattered loosely around/above the outline (not pinned to precise real coordinates — Psiog's own placement is loose/decorative too), each containing a **real college logo** (rotate through a subset of the 18 available, e.g. 8-10 at a time). Mix in a few smaller plain colored dots (gold/navy, no logo) between them purely for visual rhythm, matching Psiog's mix of logo-circles and plain accent-color dots.<br>- Thin dashed connector lines from a few badges down toward the map outline, decorative only.<br>- **Animation**: continuous gentle vertical float on each badge (translateY oscillating a few px, 3-4s ease-in-out loop, staggered start delay per badge so they don't move in sync) — this is the "exact Psiog animation" being asked for. No hover-triggered animation needed; it should already be gently moving on load. |
| 6 | Our Philosophy | **Left column: single pre-composited image asset** at `src/assets/front-page/ChatGPT Image Sep 8, 2026, 03_52_11 PM.png` — client-designed, replacing the earlier "two live photos + coded quote card" approach (same pattern as the About page's Our Story image). **Unknown/unverified: whether this image already has text/a quote baked into it** (like Our Story's image did) — Claude Code should inspect the actual image before deciding whether to also render a separate live quote card on top of it; if the image is photo-only with no baked text, a navy quote card with gold quote marks reading "Skill is the foundation of transformation — for individuals, for industries, for the future." can still be added as a separate coded overlay element, matching the Our Story treatment. If it already has text baked in, don't duplicate. Right column: "OUR PHILOSOPHY" label with gold underline, headline "We listen to every learner *before we design a program.*" (one phrase italicized), two paragraphs — "Most training providers arrive with a fixed curriculum. We arrive with questions." and "Our trainers spend time understanding what your students or teams actually struggle with — the skill gaps, the confidence gaps, the specific outcomes you need — before a single session is planned. That's what makes a program land, not just get delivered." — then a full-width italic pull-quote below both columns: "We understand the learner first. Then we design the program." (draft copy, structurally mirrors Psiog's philosophy section pattern in JCS's own training-domain language — flagged draft per house convention, not a sourced/verbatim claim). **Styling correction (measured against real Psiog 100%-zoom screenshots):** section background is plain white, NOT cream/off-white — no decorative background swirl behind the image. The image sits flush directly on the white background with NO card/panel wrapper and NO drop shadow around it (an earlier build added a cream rounded-corner card + shadow around the image block — remove that entirely). **Text color exception — black, not navy, for this section only:** headline and body paragraph text render in black, matching Psiog exactly — this deliberately overrides the site's general navy-text convention for this one section, don't "correct" it back to navy in a future pass. |
| 7 | Our Services | **On the homepage this is a flat row of cards — heading + 1-line description + "Explore" link. It is NOT interactive tabs on the homepage.** The tabbed click-to-expand interaction only exists on Psiog's dedicated `/our-services` page, where each card's link jumps to that tab. **This means ServicesTabs as currently built (interactive tabs on Home) needs to change**: Home should show 5 flat cards (one per audience) linking to `/services#<audience-id>`, and the interactive tab behavior stays only on the `/services` page itself. |
| 8 | Culture | Photo collage grid, varied image sizes, hover zoom, no captions. JCS equivalent: use the training-session photos and team photos here — this is the section where the 20 real classroom photos and 3 team photos belong. |
| 9 | Footer | Multi-column: brand blurb, Services links (repeats the 5 tab names), a second nav column, Connect/social icons, legal line. Already roughly matches what a standard footer should do — just confirm JCS's footer mirrors this column structure rather than the old site's footer layout. |

Typography/spacing note: Psiog's sections read as calm and spacious, not dense — generous
vertical padding between sections (roughly 80-120px equivalent), restrained color use per
section (mostly one accent color per section, not everything gold+navy+pale-blue at once),
and no more than one card style per section. If a section is starting to look busy, that's a
signal to simplify, not add more visual elements.

## About & Contact page specs (from a full Psiog clone-spec doc, scoped down to JCS)

A separate, more exhaustive Psiog structure doc surfaced two patterns worth adopting as-is,
sized to JCS's actual content — not Psiog's enterprise scale. Everything else in that source
doc (Articles/News/Case-Studies/Whitepapers blog infrastructure, multi-tier leadership grids,
Advisory Board, heavy Careers-page onboarding/resume-upload machinery, separate job-board page)
does **not** apply here and should not be built — JCS has 2 founders and no blog, don't
manufacture sections looking for content to fill.

### About page — CONSOLIDATED single page (supersedes the earlier multi-page decision)

**Correction — this was previously locked as 5 separate routes (`/about`, `/about/journey`,
`/about/founders`, `/about/vision`, `/about/identity`). Client has now explicitly reversed
that decision** and wants the true Psiog "ditto": one single `/about` page with anchored
sections in Psiog's exact order — Positioning → Our Model → Leadership. Fold the existing
Journey/Vision/Identity content into this structure as sections, not routes. Remove the old
sub-routes.

**1. Positioning section — "Our Story"** (Psiog: company identity — who they are; matches
Psiog's two-column layout, text left / image right). Directly below the hero, real final copy
from the client (verbatim, not draft):

**No visible "Our Story" heading** — go straight into the body paragraphs, left-aligned, no
section title above them (client explicitly removed it to match Psiog's own proportions/scale
more closely).

Left column, verbatim:

> Every great journey begins with a belief. Ours began with a belief that education should
> transform lives, not simply award certificates.
>
> JCS iLearn was created to bridge the gap between what people learn and what the world
> expects, turning knowledge into skills, confidence into capability, and ambition into
> achievement. We are building a learning ecosystem where every learner is empowered to
> discover their potential, embrace opportunities, and create a future they can be proud of.
>
> **We don't just build skills. We build possibilities.**

Right column: a single pre-composited image at
`src/assets/About-page/ChatGPT Image Sep 7, 2026, 11_12_22 PM.png` — this ONE file already
contains both the gear/checkmark graphic AND the navy quote card ("Empowering learners today
for brighter tomorrows...") baked together in one image, matching Psiog's plaque-photo layout
exactly. Do not render a separate live quote card or a separate gear image — this single
asset replaces both.

**Scale — CORRECTED, be concrete this time:** the image is currently rendering far too small
with excess empty space around it in its column. Fix: the image should fill its entire
column width (`w-full`), height scaled proportionally to its own aspect ratio — no fixed
small max-width/max-height constraining it artificially. It should be the dominant visual
element on that side of the section, comparable to how large Psiog's plaque photo reads
relative to its column. Left-column body text sized/line-length comparable to Psiog's
paragraph column.

The image has text baked in — add descriptive alt text since it won't be readable by screen
readers/SEO otherwise.

**1b. Vision section — NEW, inserted between Our Story and Our Model** (Psiog equivalent:
"Mid-Market Focus" → "Addressing the often overlooked"). Left column: "VISION" label with
gold underline, headline with one italicized phrase — "Building a Future Where *Every Learner
Thrives*." — followed by three paragraphs (draft copy, flagged pending client review, built
from concepts already established elsewhere in this file — no new stats/claims invented):

> Education alone isn't enough. What matters is whether that education translates into real
> opportunity — a job, a promotion, a business, a career someone is proud of.
>
> We're building JCS iLearn to be that bridge at scale — reaching more students, more
> institutions, more professionals, without losing the practice-first, relationship-driven
> approach that got us here.
>
> Our vision is simple: a growing network of trainers, a widening reach across cities and
> institutions, and a generation of learners who don't just complete a program — they walk
> away genuinely more employable, more confident, and more capable than when they started.

Right column: single pre-composited image asset at `src/assets/About-page/vision.png` —
client-designed (check actual content when implementing, same as other About-page image
assets in this project). Match Psiog's reference proportions exactly: same relative size/
shape, same text sizing and alignment pattern already established for this page's other
sections (label+underline size, headline size with italic phrase, paragraph sizing/line-length
comparable to the reference).

**2. Our Model section** (Psiog: how they work/their methodology): map the existing "Why
Choose Our Training Services" content here — Industry-Relevant Curriculum, Expert Trainers,
Proven Results (already sourced, from the old site's services page) — plus the Journey
content's Spark → Vision → Impact narrative arc as the section's story structure. This is
where JCS's approach/methodology lives, matching what Psiog's "Our Model" section does for
their business.

**Card styling — CORRECTED** (supersedes the earlier pale-blue-bg card treatment): each of
the 3 cards is white background with a black outline border (not filled pale-blue). Shape
matches the exact pill/rounded silhouette defined in `src/assets/cards-svg/button-pill.svg` —
use that SVG's shape for the card container, not a generic rounded-rectangle. On click, the
card's background transitions to navy (`#0A0B68`) — smooth transition, not an abrupt snap.
Add a sensible hover effect (e.g. subtle lift + border color shift) leading into the click
state, Claude Code's judgment on exact treatment as long as it feels intentional and matches
the site's existing interaction quality elsewhere (buttons, leadership cards).

**3. Leadership section — header styling:** white background for this entire section (not
pale-blue-bg). Above the card grid: "Leadership" small label with gold underline, then a large
headline "Founding Team" below it — both in BLACK text (not navy), sized to match Psiog's
reference proportions exactly (the "Founding Team" headline reads large/bold, comparable
scale to other major section headlines already built elsewhere on the site).

**3a. Leadership section — CORRECTED interaction pattern (third revision — this is the final,
confirmed behavior)**: a grid of cards (photo, name, title), each with a circular "+" icon in
the top-right corner. Two earlier versions were wrong: first an off-canvas side drawer, then
an inline panel pushing content down. Confirmed from real Psiog screenshots: it's actually a
**centered modal overlay** —
- The "+" icon rotates (becomes visually an "×") and its circular background fills gold.
- A dark semi-transparent backdrop dims the entire page behind it.
- A centered modal card appears on top (navy background, matching Psiog's teal): the
  founder's photo on the left, full bio text on the right, close "×" button in the modal's
  top-right corner.
- Clicking the "×", clicking the backdrop, or pressing Escape closes the modal and un-rotates
  the icon.
- Use a proper modal/dialog pattern (portal to body, focus trap, scroll-lock on the page
  behind it while open) — not a positioned-absolute element that could get clipped by a
  parent's overflow.

Only 2 cards — Raghul J C, Siva Harish M. **Card face images — NEW assets, replacing the
plain WhatsApp headshots used before:** `src/assets/About-page/about-ceo.png` = Raghul J C,
`src/assets/About-page/about-vp.png` = Siva Harish M. These are client-designed card images
(check actual content/styling when implementing — likely already have a background treatment
baked in, similar to how other About-page assets in this project were pre-composited; adapt
the card wrapper accordingly rather than assuming a plain headshot that needs additional
background styling on top).

**Bios — NEW, supersedes the old "From the Founder's Desk"/"Message from the Co-Founder"
narrative copy for this card component** (that older copy was written for the earlier
off-canvas drawer version; the client has now supplied new, more professional/credentials-
focused bios specifically for this card+expand pattern — use these instead, verbatim,
preserving each one's own voice exactly as given, including that Raghul's is third-person and
Siva Harish's is first-person — don't normalize them to match each other):

**Raghul J C — Founder & CEO** (LinkedIn: `raghul-j-c-617818221`, reconfirmed current):

> Raghul J C is the Founder & CEO of JCS iLEARN, an organisation established to bridge the gap
> between education and industry through practical, industry-aligned learning and career
> development. With over 5 years of corporate experience, he brings expertise in
> institutional engagement, professional development, and operational leadership. He holds a
> B.Tech in Biotechnology from Tamil Nadu Agricultural University and has completed his M.A.
> in Public Administration from Indira Gandhi National Open University.
>
> Raghul has personally delivered 500+ training programs and trained over 1,00,000 students
> across 50+ universities and colleges, schools, and corporate organisations. His portfolio
> encompasses employability, communication, placement readiness, interview preparation,
> leadership, entrepreneurship, and workplace skills.
>
> Under his leadership, JCS iLEARN delivers customised learning solutions aligned with
> institutional and corporate requirements. His responsibilities span strategic direction,
> client delivery, operations, finance, and talent acquisition, ensuring engagements are
> supported by structured planning, capable trainers, and consistent execution.
>
> His leadership philosophy combines strategic vision, operational discipline, and a
> learner-centric approach, strengthening JCS iLEARN's mission of empowering students and
> professionals with the competencies required for long-term career success.

**Siva Harish M — Co-Founder & Vice President** (LinkedIn: `siva-harish-m-056617223`,
reconfirmed current):

> With experience in Aptitude, Skill Development, Communication, and Interpersonal Skills, I
> have trained 70,000+ students across 35+ institutions throughout India and have been part of
> 350+ training programs, gaining exposure to diverse students, institutions, and learning
> environments. I served as a Senior Aptitude Mentor at Alliance University, where I was
> involved in academic training, content creation, and content delivery. With a vision to
> create a greater impact in the education and employability sector, I co-founded JCS iLearn,
> where I currently serve as Co-Founder & Vice President – Business Development & Human
> Resources, handling institutional partnerships, business development, client relationships,
> talent acquisition, team management, HR operations, and organizational growth. I also
> continue to contribute to training, skill development, and employability initiatives. I
> hold a Bachelor of Technology (B.Tech) degree from Paavai Engineering College, Namakkal,
> which has strengthened my foundation in analytical thinking, problem-solving, and
> technology-driven learning.

**Removed per explicit client request**: the "Our Leadership Values" 4-item grid that used to
follow this card+modal section has been removed entirely from the live page (see the
Conventions/open-items note below — the content stays documented for history but is not
rendered anywhere).

**Identity page content**: never actually sourced/extracted (it existed in the old repo but
wasn't linked in the old site's own nav either) — do not fabricate content for it. If nothing
salvageable exists, it's fine for this page to simply not have an "Identity" section at all.

**Header nav correction**: Psiog's own nav has NO dropdown on "About Us" — it's a single
plain link, because their About is one page with in-page anchors, not sub-pages. Remove the
JCS header's About Us dropdown (previously: About/Journey/Founders/Vision) and replace with a
single "About Us" link pointing to `/about`.

### Contact page (`/contact`) — new structure
Current `/contact` is a thin wrapper around the homepage's ContactUs section. Rebuild as its
own fuller page:
1. **Hero/intro**: short headline + 1-2 sentence body, contact form (Name, Email, Phone,
   Message, Submit) — reuse existing EmailJS wiring from the current ContactUs section, don't
   rebuild the submission logic.
2. **Fast-track callout** (JCS equivalent of Psiog's "Enterprise Inquiries"): a short block for
   institutions/corporates specifically — "Looking to train your students or team? [Get in
   touch / Book a call]" — 1-2 sentences, one CTA. Don't invent a response-time SLA commitment
   ("within one business day") — that's not a claim we have from the client.
3. **Location section**: embedded Google Map iframe pinned to the real address (No.10,
   Udayampalayam Main Road, Sowripalayam, Coimbatore, Tamil Nadu – 641028), plus a 3-column
   info block below/beside it: Office Address / Call Us (tel: link) / Email Us (mailto: link) —
   use the real contact info from the Content section above.
4. Do NOT add an awards-strip repeat on this page — JCS's one real award belongs on the
   trainer's profile, not repeated site-wide the way Psiog does with its company awards.

## Site structure (routes)

- `/` — Home: Hero → Stats strip → About teaser → Services (tabbed, audience-based) → Programs teaser → Trainers teaser → Testimonials → CTA → Footer
- `/about` — **Single consolidated page**: Hero → Our Story (Positioning) → Vision (new) → Our Model → Leadership (card+modal) sections, all on one page, matching Psiog's structure. No sub-routes.
- `/programs` — full programs grid/tabs (see Programs data below)
- `/services` — audience-based service cards (Universities/Corporates/Startups/Schools/Professionals)
- `/trainers` — **new page, not in the old site** — trainer profile grid (content exists, see below; justified by the depth of the trainers deck the client provided)
- `/contact`
- `/careers`

⚠️ **Open decision, do not resolve silently:** the client sent a *second* taxonomy — 5 named
programs under each of the 5 audience categories (see "Service category programs" below) —
that doesn't match the old repo's 23 branded program names (Skillora, AptEdge, Byte, etc., see
Programs data below). Do not merge or pick one silently. Flag it back to the user in-chat if
you reach the point of building `/programs` or `/services` and it isn't resolved yet.

## Content — source of truth

### Brand
- Logo: **no clean asset exists yet.** Client sent 3 files, all unusable as final: one has
  transparency flattened to a black box, one is a low-res flattened PDF export, one is an
  off-brand purple circular badge reading "JCS Institute of LEARN" (likely a typo, different
  color system). Use the cleanest one as a placeholder (`jcs logo final_page-0001.jpg`, navy
  on white) until the client sends a proper transparent PNG or SVG.
- Tagline: **"I Learn, I Earn"**

### Contact
- Address: No.10, Udayampalayam Main Road, Sowripalayam, Coimbatore, Tamil Nadu, India – 641028
- Phone: +91 75984 98451
- Email: info@jcsilearn.com, jcsilearn@gmail.com
- Hours: Mon–Fri 9:00 AM–5:00 PM, Sat 9:00 AM–1:00 PM
- Instagram: https://www.instagram.com/jcs_ilearn
- YouTube: https://www.youtube.com/@JCSiLearn
- LinkedIn/Facebook: not yet provided (company-level) — placeholder link, swap when client sends it

### Stats (for the homepage stat strip)
- 1 year in operation (incorporated ~Sep 2025, first training Sep 2025)
- 1,50,000+ students/professionals trained
- 25+ institutions, 10+ corporate partners
- 400+ trainers
- 35 cities served
- Placement rate: client sent "0.83" — **confirm exact phrasing before publishing** (likely 83%, unconfirmed)

### Founders (from old site — SUPERSEDED for the Leadership card+expand component, see the
new professional bios in the "About & Contact page specs" section above. These older personal-
narrative bios are kept here for reference only, in case a future "founder's letter" style
feature wants them — not currently used anywhere in the live site)

**Raghul J C — Founder & CEO**
- B.Tech (Biotechnology), Tamil Nadu Agricultural University; M.A., IGNOU
- LinkedIn: https://www.linkedin.com/in/raghul-j-c-617818221/
- **Full bio, verbatim from the old site's "From the Founder's Desk" — use exactly as written, do not summarize or paraphrase:**

  > The spark for JCS iLearn was ignited during one of my entrepreneurship workshops. A curious
  > student asked: "You speak so passionately about entrepreneurship—why haven't you started
  > your own company?" That question hit home. It wasn't just a passing thought—it was a
  > powerful reflection. If I truly believed in entrepreneurship, why not live it? That moment
  > became my turning point. Fueled by a deep passion for teaching and a desire to create
  > meaningful impact, I founded JCS iLearn—a platform where education is not just shared, but
  > experienced, and where learning opens doors to real opportunity. Our tagline, "I Learn, I
  > Earn," isn't just a slogan—it's our philosophy. We believe education should lead to
  > empowerment, and knowledge should create opportunities for growth and success. This company
  > is my answer to that student's question—and proof that with the right support, learning
  > becomes a launchpad for life.
  >
  > — Raghul J C, Founder & CEO

**Siva Harish M — Co-Founder & VP**
- B.Tech (Food Technology), Paavai Engineering College
- LinkedIn: https://www.linkedin.com/in/siva-harish-m-056617223/
- **Full bio, verbatim from the old site's "Message from the Co-Founder" — use exactly as written, do not summarize or paraphrase:**

  > At JCS iLearn, we believe that skill is the foundation of transformation—not just for
  > individuals, but for industries, communities, and the future. Our vision is to close the
  > gap between education and employability by equipping learners with practical, future-ready
  > skills. We're committed to building high-impact, accessible learning experiences that go
  > beyond upskilling—they inspire growth, confidence, and clarity. As Co-Founder, I assure you
  > that our mission is personal. Every program we design is created with care, relevance, and
  > a deep understanding of the challenges today's learners face. Thank you for trusting us.
  > Together, let's unlock potential—and build a skilled, forward-thinking generation.
  >
  > — Siva Harish M, Co-Founder & VP

### Our Leadership Values (4-item grid — REMOVED from the live page per explicit client
request. Content kept here for history only, not rendered anywhere on the site)
From the old site, reuse verbatim:
1. **Purpose-Driven** — "Every decision is guided by our mission to empower learners"
2. **Innovation** — "Continuously evolving our approach to meet changing needs"
3. **Collaboration** — "Working together to achieve greater impact"
4. **Excellence** — "Striving for the highest quality in everything we do"

### About / Journey / Vision copy (from old site, reusable)
- **Journey**: "JCS iLearn was born from a classroom moment—but built on years of passion,
  purpose, and belief in the power of education." Structured as Spark → Vision → Impact.
- **Vision headline**: `"I Learn, I Earn" — Empowering Lives Through Essential Skills`
- **Mission line**: "Because when you Learn with Purpose, you Earn with Confidence."

### Programs (old repo — 23 programs across 7 categories; matches Psiog's 7-tab pattern well)
Categories: Soft Skills · Aptitude & Reasoning · Technical Skills · Placement & Recruitment ·
Career Planning · Corporate Readiness · School Enrichment

Program names by category (title — one-line description already exists in old repo's
`programs/page.tsx`, pull full descriptions/topic lists from there if rebuilding this page):
- Soft Skills: Skillora, TalkPro, Voicely, SpeakUp, Elevate
- Aptitude & Reasoning: AptEdge, CrackIt, Ace, Examly, AssessIQ
- Technical Skills: Byte, Codevita, CodePro, Stack, Codegenix
- Placement & Recruitment: Prime, MockUp, PitchPro, PlacEdge, Persona
- Career Planning: Innovate, Careerly
- Corporate Readiness: Inspire, Corp
- School Enrichment: Pathcraft

### Service category programs (NEW — from client, audience-first structure)
⚠️ Conflicts with the branded program list above — see open decision note. Kept here verbatim
in case the client confirms this replaces the old taxonomy:

**For Universities:** Placement & Career Readiness Program · Professional & Workplace Skills
Program · Entrepreneurship & Innovation Program · Digital & Industry Skills Program ·
Competitive Exams & Higher Education Program

**For Corporates:** Leadership & Managerial Excellence · Communication & Workplace Excellence ·
Sales & Customer Excellence · Productivity & Performance Enhancement · AI, Digital & Future
Skills

**For Startups:** Entrepreneurship Essentials · Leadership Development · Sales, Marketing &
Business Growth · Finance & Business Management · Innovation, AI & Digital Transformation

**For Schools:** Personality Development · Public Speaking · Academic Excellence & Study
Skills · Career Awareness & Future Readiness · Innovation & Creativity

**For Professionals:** Leadership & People Management · Advanced Communication & Executive
Presence · Productivity & Performance Excellence · AI & Digital Workplace Skills · Sales,
Negotiation & Customer Management

### Trainers (new `/trainers` page — full content from client's PPTX, 13 profiles)
Each has: name, domain, years of experience, 3 highlight bullets. Photos available for 12 of
13 (see Asset Inventory — **Soundariya T has no photo yet**, use an icon/initial placeholder).

1. **Santhosh Kumar** — Learning, Development & Professional Excellence Trainer — 10+ yrs
2. **DivyaPrasanth R** — Life & Career Skills Trainer / Corporate L&D Specialist — 5+ yrs
3. **Soundariya T** — Aptitude, Quantitative Ability & Logical Reasoning — 8+ yrs (no photo yet)
4. **Sindhuja Velusamy** — Certified Master & Soft Skills Trainer — 11+ yrs
5. **Sharmila Banu** — Aptitude, Quantitative Ability & Logical Reasoning — 8+ yrs
6. **Jebrine Melco R** — Certified Personality Development Trainer & Placement Mentor — 10+ yrs
7. **Loknath** — Communication Skills, Soft Skills & AI-Enabled Learning — 6+ yrs
8. **Anuraga M** — Verbal & Communication Trainer — 6+ yrs
9. **Shreya Kumar** — Aptitude, Logical & Communication Mentor — 5+ yrs
10. **Arul Murugan L** — Verbal Communication & Personality Development Trainer — 6+ yrs
11. **Karthickraja S** — Life Skills Trainer & Communication Mentor — 7+ yrs
12. **Suhita S** — Certified English Language Trainer — 9+ yrs
13. **Santhiya M** — Language and Soft Skills Trainer — 5+ yrs

Full highlight bullets for each are in the source PPTX (`JCSiLearn_TrainersProfile.pptx`) —
pull verbatim when building the page rather than summarizing further.

### Testimonials (DRAFT copy — client sent real photos but no quotes; these are placeholders for client review, not final copy)

> Client instruction: draft the best-fitting quotes using the real names provided; client
> will review/replace in the next round. **Mark these as draft/pending approval in any PR or
> handoff note — do not treat as final.**

- **Arun Kumar** — *"The placement training gave me a clear roadmap — from mock interviews to
  aptitude prep, I finally walked into interviews with confidence instead of anxiety."*
- **Esu Kumar** — *"What stood out was how practical everything was. The trainers didn't just
  teach theory — they made us practice until it became second nature."*
- **Heera Patey** — *"I came in nervous about group discussions and left being able to lead
  one. The soft skills sessions genuinely changed how I carry myself."*
- **Poovarasan** — *"The aptitude training broke down concepts I'd struggled with for years
  into simple, repeatable techniques. My test scores improved almost immediately."*
- **Sanjeev** — *"As someone from a non-circuit branch, I was worried about technical rounds.
  The technical skills program closed that gap faster than I expected."*
- **Sanjushree Venkat** — *"JCS iLearn didn't just prepare me for placements — it changed how
  I think about my own growth. The mentorship felt personal, not generic."*

### Awards
- "Best Trainer of the Year 2024–25" — awarded by Alliance University, Bangalore, to one of
  JCS's trainers. **This is an individual trainer credential, not a company award** — display
  it on that trainer's profile card once the recipient's name is confirmed, not in a
  company-wide awards/recognition section (unless the client says otherwise).

## Asset inventory (from client's Google Drive export)
```
Jcs/
  College Logos/          18 folders, one logo each — client claims 25+ institutions,
                           so this is a partial set. Several files are low-res screenshots
                           (images.jpeg, images (1).jpeg) — flag for re-sourcing, don't
                           upscale/use as-is if avoidable.
  Logo files/              3 files, none production-ready (see Brand section above)
  Photography/
    Classroom - training session photos/   20 real photos — usable for hero/program sections
    Founder headshots/                     2 clean studio portraits — usable as-is
    Team - trainer photos/                 12 individual + 3 group shots — Soundariya T missing
  Testimonial photos/      6 real photos (Arun Kumar, Esu Kumar, Heera Patey, Poovarasan,
                           Sanjeev, Sanjushree Venkat) — usable as-is
```

## Known open items (do not silently resolve — flag back to the user)
1. Programs vs. service-category taxonomy conflict (see above)
2. Final logo asset (transparent PNG or SVG) — using placeholder raster for now
3. Corporate/company partner logos — none received yet (only college logos)
4. Missing photo for trainer Soundariya T
5. ~~Founder LinkedIn URLs~~ — RESOLVED: client resent both, they match what was already on
   file, confirmed current.
6. Company-level LinkedIn/Facebook link — not yet provided
7. Placement rate phrasing ("0.83") — unconfirmed
8. Testimonial quotes above are drafts pending client sign-off
9. Awards section placement (individual vs. company) — unconfirmed
10. ~~Founder photo identity unconfirmed~~ — RESOLVED: client confirmed exact filenames —
    `WhatsApp Image 2026-09-06 at 11.11.35 PM.jpeg` = Raghul J C, `WhatsApp Image 2026-09-06
    at 11.12.47 PM.jpeg` = Siva Harish M.
11. Contact form won't send mail until a real .env with EmailJS service/template/public key
    IDs is added locally (see .env.example) — get these from the client or a fresh EmailJS
    account before this page goes live.

## Conventions
- **Site-wide layout container — CORRECTED with measured value.** Psiog maintains one
  consistent left/right content margin across every section on every page — logo, nav, hero
  text, paragraphs, diagrams, and founder cards all align to the same horizontal edges
  throughout, not per-section custom padding. Client measured this directly against real
  100%-zoom screenshots (Who We Serve, Our Philosophy, Our Services — three different section
  types, same margins every time): content area is consistently centered with a max-width of
  **1536px** (`max-w-screen-2xl` in Tailwind, NOT the earlier placeholder guess of `max-w-7xl`
  /1280px — that was too narrow and has been superseded). Use `max-w-screen-2xl mx-auto px-6
  lg:px-8` (or a `<Container>` component wrapping that exact combo) as the ONE shared layout
  wrapper everywhere — every section must use it, not invent its own padding/max-width.
  Sections built in earlier isolated prompts need re-auditing against this corrected value.
- **Navbar is genuinely static (CSS `position: static`/`relative`), NOT fixed, NOT sticky —
  this is the final, confirmed behavior (site-wide, every page).** Two earlier versions of
  this convention were wrong: first "hide on scroll down," then "always pinned/fixed
  visible." Neither is correct. Confirmed against real Psiog screenshots: their nav is part of
  normal page flow — it scrolls away with the page like any other content and is NOT visible
  once you've scrolled down into the page; it only reappears if you scroll back up to the very
  top. Do not use `position: fixed` or `sticky` on the header at all. Back-to-top button is
  unaffected: a circular floating "scroll to top" button (chevron-up icon, navy background)
  still appears in the bottom-right corner once scrolled down a bit, smooth-scrolls to top on
  click — that part stays exactly as-is. Implement once at the layout/App level, not per-page.
- All copy/stats/program data lives in typed `src/data/content.ts` — components read from
  there, never hardcode client-specific strings inline, so future data updates (e.g. real
  testimonial quotes replacing drafts) are single-file edits.
- Every stat, name, and claim in this file is either sourced from the client's own
  submissions or explicitly marked DRAFT — do not add new numbers or claims not listed here.
- Image assets: keep the client's original filenames' intent but rename to kebab-case on
  import (e.g. `santhosh-kumar.png`) — the Drive export names are inconsistent (`ChatGPT
  Image Sep 6, 2026...png`, `WhatsApp Image...jpeg`).