## Ecomedic Squad — Research Intro Website

A 4-page introduction site styled exactly like the uploaded mockups: dark navy background, neon pink/cyan/purple accents, glowing pill capsule + DNA/molecule visuals, gradient logo, rounded buttons with pink→cyan gradients.

### Design system (from your uploads)
- **Background**: deep dark navy/black with subtle molecule/DNA glow imagery
- **Accents**: neon pink (#ff3ea5), cyan (#3ee0ff), purple (#9b5cff) gradients
- **Typography**: large bold white headlines, soft gray body text, small teal eyebrow labels ("ABOUT US", "OUR RESEARCH AREAS")
- **Components**: pill-shaped gradient CTA buttons, outlined "Contact Us" button, rounded stat/feature cards with thin neon borders, gradient icon outlines
- **Footer band**: dark bar with microscope icon, "Collaborate. Innovate. Save Lives." tagline, gradient "Get in Touch" button

### Pages & navigation

Top navigation (sticky, on every page): **Home · About Us · Privacy Policy · Terms & Conditions** with the Ecomedic Squad gradient logo on the left and a "Contact Us" outlined pill on the right.

**1. Home (`/`)** — uses the *first uploaded image* (pink/blue capsule + molecules) as the hero visual on the right
- Eyebrow chip: "Research for Better Tomorrow"
- Headline: "Expanding Scientific Frontiers. Leading New Healthcare Solutions."
- Intro paragraph about Ecomedic Squad's mission
- **Primary CTA: "Start" button** (gradient pill) → opens `https://ecomedicblogs.codebreakers.uk` in a **new tab**
- Secondary "Learn More" link
- Stats strip: 150+ Studies · 65+ Drugs Analyzed · 35+ Diseases · 30+ Partners
- "Science. Innovation. Impact." mini about block
- "Our Research Areas" 5-card row: Drug Discovery, Disease Mechanisms, Preclinical Studies, Therapeutic Validation, Data & Bioinformatics
- Footer band

**2. About Us (`/about`)** — uses the *second uploaded image* (research team at monitors) as the section visual on the right
- Eyebrow: "ABOUT US"
- Headline: "Meet the Minds and the Mission of Ecomedic Squad"
- Sections: The Ecomedic Vision · Our Specialized Methodology · Community & Ethics
- "Our Core Values" 4-card row: Innovation, Collaboration, Integrity, Impact (gradient outline icons)
- Footer band

**3. Privacy Policy (`/privacy-policy`)** — same dark styling, readable long-form layout
- Generic placeholder policy covering: information collected, how it's used, cookies, third-party services, data retention, user rights, contact info

**4. Terms & Conditions (`/terms`)** — same styling
- Generic boilerplate: acceptance of terms, use of site, intellectual property, research disclaimer (educational/informational only, not medical advice), limitation of liability, governing law, changes to terms, contact

### Technical setup
- Separate TanStack route file per page (`index.tsx`, `about.tsx`, `privacy-policy.tsx`, `terms.tsx`) with unique `head()` meta (title, description, og tags) per page
- Both uploaded images copied into `src/assets/` and imported as ES modules; hero image also wired into the home route's og:image, team image into about's og:image
- Shared `<SiteHeader />` and `<SiteFooter />` components used across all pages
- Tailwind theme tokens updated in `src/styles.css` to the dark neon palette (oklch values for navy bg, neon pink/cyan/purple accents)
- Start button uses `<a href="https://ecomedicblogs.codebreakers.uk" target="_blank" rel="noopener noreferrer">`
- Fully responsive (stacks hero text above image on mobile, nav collapses to a menu on small screens)
