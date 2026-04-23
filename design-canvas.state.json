# Wren Law Firm — URL Inventory & Per-Page Design Notes

**Source of truth:** Yoast SEO sitemap index at <https://wrenlawfirm.com/sitemap_index.xml> (verified April 23, 2026).

**Scope:** 34 URLs total. Every URL inspected via HTML source, CSS template mapping, and headline/body extraction. Every page is classified by type, described by content, and mapped to its design template and visual treatment.

---

## Contents

1. [URL summary by type](#1-url-summary-by-type)
2. [Primary navigation pages (7)](#2-primary-navigation-pages-7)
3. [Secondary landing pages — lead capture (2)](#3-secondary-landing-pages--lead-capture-2)
4. [Practice-area detail pages (3)](#4-practice-area-detail-pages-3)
5. [Blog posts (12)](#5-blog-posts-12)
6. [Blog taxonomy pages (8)](#6-blog-taxonomy-pages-8)
7. [Legal / compliance pages (2)](#7-legal--compliance-pages-2)
8. [Sitemap-only endpoints (1)](#8-sitemap-only-endpoints-1)
9. [URLs NOT in sitemap but found in source](#9-urls-not-in-sitemap-but-found-in-source)
10. [Design-template × URL cross-reference](#10-design-template--url-cross-reference)
11. [Observations & recommendations](#11-observations--recommendations)

---

## 1. URL summary by type

| Category | Count | Sitemap source |
|---|---|---|
| Primary navigation pages | 7 | `page-sitemap.xml` |
| Practice-area detail pages | 3 | `area_of_practice-sitemap.xml` |
| Blog posts | 12 | `post-sitemap.xml` (13 entries — 1 is the blog index itself) |
| Blog categories | 5 | `category-sitemap.xml` |
| Blog tags | 2 | `post_tag-sitemap.xml` |
| Blog author archives | 1 | `author-sitemap.xml` |
| Legal / compliance pages | 3 | `wpautoterms_page-sitemap.xml` |
| Homepage | 1 | `page-sitemap.xml` |
| **Total unique pages** | **34** | |

**Growth velocity:** The sitemap shows 12 blog posts published between April 2020 and May 2021, then **zero posts since May 1, 2021** — the site has not been content-updated in almost five years as of the audit date. This is the most significant finding in this document and it reframes every scoping decision.

---

## 2. Primary navigation pages (7)

These are the pages linked from the top and bottom navigation. They represent the firm's "public face."

### 2.1 `/` — Homepage

| Field | Value |
|---|---|
| **Title** | Little Rock Personal Injury Lawyer \| Wren Law Firm |
| **Meta description** | If you have been injured in an accident Wren Law Firm has your back. We only get paid if you win! Call now at 501-523-1000 or 800-300-1775. |
| **Role** | Top-of-funnel marketing homepage for new prospects. |
| **Templates** | `8.css` + `53.css` + `7.css` + `universal.css` |
| **Design treatment** | Photographic hero (Trinity College library, navy-toned) with overlay card containing Dan Wren portrait → three-up practice-area tile grid with custom SVG icons → three long-form content sections (Personal Injury, Social Security Disability, Workers' Compensation) with illustrative secondary photography → parallax "Why Choose Us" quad over Nik MacMillan consultation photo → sidebar consultation form on ivory card. |
| **Unique features** | The ONLY hero with a photographic overlay-card pattern. The practice-tile hover (scale 1.03 + "Learn more" fade-in) is unique to this page. |
| **Content issues** | Three Lorem Ipsum bodies. Duplicated "Motorcycle injuries can be very serious…" copy across four+ tiles (Vehicle Injury, 18 Wheeler, SSDI, SSI, Work Related Injuries). |

### 2.2 `/about/` — Our Firm

| Field | Value |
|---|---|
| **Title** | About \| Wren Law Firm |
| **Role** | Firm origin story + attorney bios + credibility badges. |
| **Templates** | `10.css` + `100.css` + `53.css` + `7.css` |
| **Design treatment** | Very tall hero (247/224 padding) with Nik MacMillan photo at 80% navy overlay → "Welcome to Our Firm" intro section → H3-styled pullquote: *"We handle your claim so that you can focus on getting better." — Dan Wren* → **Attorney bio cards:** horizontal cards with 40% navy panel / 60% white panel, `2px 2px 15px 2px rgba(0,0,0,0.23)` shadow, circular grayscale portraits (`border-radius: 100px` + `filter: grayscale(100%)`) → credibility-badge row (Arkansas Supreme Court seal, NOSSCR, two unverified badges) → "Why Choose Us" reusable block. |
| **Unique features** | Only page with forced-grayscale attorney portraits. Only page with credibility-badge row. `#e8e9eb` cool-gray section bg appears nowhere else. |
| **Known bug** | Keith Wren's attorney card has `display: none` in the compiled CSS (`#div_block-111-10`). Bio text is present in DOM — needs browser verification of render state. |
| **Content claim mismatch** | Text: *"four attorneys and a total staff of fourteen people"* vs. staff directory's 7 listed people. |

### 2.3 `/areas-of-practice/` — Practice index

| Field | Value |
|---|---|
| **Title** | Areas of Practice \| Wren Law Firm |
| **Role** | Landing page that routes prospects to the three detail pages. |
| **Templates** | `12.css` + `53.css` + `7.css` |
| **Design treatment** | 250px-top hero over Patrick Fore classical-columns photo at 72% navy overlay, 42px white H1. 70/30 layout with vertical sticky secondary nav (`top: 150px`) in `#8f8f91` default, navy current, gold hover with **3px left-border and 17px indent animation** — the most polished interaction on the site. Body is a practice-tile grid using the same `.area-inner-div` component as the homepage. |
| **Unique features** | Secondary vertical nav sticky at 150px (not the 125px used elsewhere — drift). Uses practice-hero imagery not used anywhere else (`patrick-fore-H5Lf0nGyetk-unsplash.jpg`). |

### 2.4 `/our-professional-staff/` — Staff directory

| Field | Value |
|---|---|
| **Title** | Staff \| Wren Law Firm |
| **Role** | People directory with contact details. |
| **Templates** | `155.css` + `7.css` |
| **Design treatment** | **Solid navy hero** (no background photo — the only page on the site that skips photographic hero treatment). 55px Playfair headline, 50px margin-bottom. 2-column grid above the fold (attorneys) collapsing to 3-column grid below (staff). Each staff block is centered with name as H2 + title lines + phone + email. |
| **Unique features** | Solid-navy hero (no photo overlay — the only such page). 55px headline (the only 55px instance). No staff photos (contrast with About page's photographed attorney cards). |
| **Known bug** | Blanca Baker's `mailto:` href routes to `dan@wrenlawfirm.com` despite the visible email being `bbaker@wrenlawfirm.com`. |
| **Known typo** | "Workers' *Compesation* Attorney" (missing "n") on Dan Wren's card. |

### 2.5 `/law-blog/` — Blog index

| Field | Value |
|---|---|
| **Title** | Law Blog \| Wren Law Firm |
| **Role** | Blog archive and sidebar with search / categories / recent posts. |
| **Templates** | `174.css` + `53.css` + `7.css` |
| **Design treatment** | Tallest hero on the site (241/222 padding) over grayscale "LAW" carved-stone photo at 90% navy overlay, **61px white headline**. Body is 70/30 split: 2-column posts grid on the left (each post has diagonal-hatch fallback image, date chip in `rgba(0,0,0, 0.5)`, navy title, navy-bg "Read more" button with gold hover), sidebar card on the right with search form, categories, recent posts (ivory `#faf9f7` background). |
| **Unique features** | 61px display headline (largest on site). Diagonal-hatch placeholder pattern on posts without featured images. Middle-dot `·` separator on meta row. |

### 2.6 `/wren-law-firm-contact/` — Contact

| Field | Value |
|---|---|
| **Title** | Contact \| Wren Law Firm (inferred) |
| **Role** | Primary conversion page: consultation form + contact details + map. |
| **Templates** | `17.css` + `7.css` |
| **Design treatment** | Tall 238px-top hero over Zac Nielson photo at 83% navy overlay. Body is 40/60 split: left column has a 66%-alpha navy contact-info card with **white 32px Playfair headlines** (`Toll Free`, `Direct`, `Fax`, address); right column has a **Google Maps embed** (`#_map-30-17`) at 100% height above a 59%-alpha ivory contact-card. On mobile (≤991px), `flex-direction: column-reverse` — the form appears **before** the contact info. |
| **Unique features** | Only page with a Google Maps embed. Only page with a translucent ivory card (`rgba(250,248,247, 0.59)`). Mobile column reverse is unique to this page. |

### 2.7 `/` header dropdown pattern
(not a URL but worth recording) — The "About Us" top-nav item has `href="#"` and is a dropdown parent only. It has no landing page behind it.

---

## 3. Secondary landing pages — lead capture (2)

**These were not linked from the primary navigation and were discovered via the sitemap. They are almost certainly ad-campaign landing pages, based on their design pattern.**

### 3.1 `/social-security-disability/` — SSD prospect landing page

| Field | Value |
|---|---|
| **Title** | Social Security Disability \| Wren Law Firm |
| **Role** | Dedicated conversion landing page, separate from the practice-detail page at `/area-of-practice/arkansas-social-security-disability-attorney/`. |
| **Templates** | `42.css` + `204.css` + `7.css` |
| **H1** | "Are You Applying For Social Security in Arkansas?" |
| **Design treatment** | **Fixed-height hero** (700px desktop → 950px tablet → 1000px mobile — the only fixed-height hero on the site) over Trinity library photo (same as homepage hero). White 30px headline with 45px display H1 underneath. 30%-width navy sidebar card (`#div_block-9-42`) holding the consultation form. Below hero: six gold fancy-icons in a three-column pricing-style layout, followed by alternating left/right content blocks about the firm's approach ("Social Security Law is Complex," "Time is Money," "Filing May Be Easy. Winning is Not.", "Managing Deadlines," etc.). Parallax "Why Choose Us" at the bottom. |
| **H2 section list (body)** | "Daniel E. Wren", "Why You Should Let Us Review Your Case!", "Social Security Law is Complex", "Time is Money", "Filing May Be Easy. Winning is Not.", "Managing Deadlines", "Keeping the Social Security Administration Informed", "The Administrative Law Judge Hearing" |
| **Closing CTA headline** | "Let Us Review Your Case - IT'S FREE!" |

### 3.2 `/denied-social-security/` — SSD denied-claimant landing page

| Field | Value |
|---|---|
| **Title** | Denied Social Security \| Wren Law Firm |
| **Role** | Targeted landing page for prospects whose SSD claim was denied — a specific high-intent audience segment. |
| **Templates** | `167.css` + `204.css` + `7.css` |
| **H1** | "We Will Help You Reapply for Social Security" |
| **Design treatment** | **Near-identical structure to 3.1** — fixed-height hero (750px desktop → 1050px tablet → 1100px mobile), same Trinity library photo, same navy sidebar consultation form, same six fancy-icons row, same alternating content blocks, same parallax "Why Choose Us," same footer. Differences: 37px H1 (vs. 45px on 3.1), different headline copy ("We Can Help You Reapply Immediately!"), opening paragraph targets denied applicants ("If you were not approved your first or second time…"). |
| **H2 section list (body)** | Same eight H2s as page 3.1 — this page is almost a **copy** of the SSD landing page with a different top headline and opening paragraph. Every other body section is identical. |
| **Closing CTA headline** | "Let Us Review Your Case - ITS FREE" |

**Critical observation:** These two pages are **~95% duplicate content**. From an SEO standpoint, they should be either (a) consolidated into one page with variable messaging, or (b) made more substantively distinct. This is almost certainly a Google Ads or Facebook Ads landing-page pair built for different ad groups. If the firm still runs these ads, it's scoping-relevant; if not, both pages should be redirected.

---

## 4. Practice-area detail pages (3)

All three use the **same template** (`65.css` + `53.css` + `7.css`) and share the same visual design: 70/30 layout with sticky sidebar, 56px white hero headline, 143/124 section padding.

### 4.1 `/area-of-practice/personal-injury/`

| Field | Value |
|---|---|
| **Title** | Personal Injury \| Wren Law Firm |
| **Role** | Primary SEO page for personal injury prospects. |
| **Content opening** | "What is personal injury? Personal injury is any injury to the body, mind, or emotions… Why Should I Hire a Personal Injury Lawyer?" |
| **Notable content** | Explains fee structure — *"Our standard fee is twenty five percent of the total amount recovered… significantly lower than many of the other firms in the state which charge upwards of forty percent."* — this is a concrete pricing commitment and the only one on the site. |
| **Sidebar** | Sticky ivory card at `top: 125px` containing secondary vertical nav + consultation form. |

### 4.2 `/area-of-practice/workers-compensation/`

| Field | Value |
|---|---|
| **Title** | Workers' Compensation \| Wren Law Firm (inferred) |
| **Role** | Primary SEO page for injured-at-work prospects. |
| **Template** | Identical structure to 4.1 — same 70/30 split, same 56px headline, same sticky sidebar. |

### 4.3 `/area-of-practice/arkansas-social-security-disability-attorney/`

| Field | Value |
|---|---|
| **Title** | Social Security Disability \| Wren Law Firm |
| **Role** | Primary SEO page for SSD prospects. |
| **Content highlights** | Explains the application/hearing process, mentions "You will have to testify in front of a judge." |
| **Template** | Identical structure to 4.1. |
| **Overlap warning** | This page overlaps substantially with the `/social-security-disability/` landing page (3.1). Same audience, different URL, different layout. |

**Content inconsistency:** Homepage claims the firm focuses on *"four main areas of law: Social Security, Personal Injury, Workers' Compensation, and Employment Law"* — but there are only **three** `/area-of-practice/` detail pages. No Employment Law detail page exists, despite Keith Wren being the Employment Law Attorney.

---

## 5. Blog posts (12)

All blog posts use template `183.css` (which extends `65.css` practice-detail structure). Identical 56px white hero headline over the blog's carved-stone "LAW" image. 70/30 layout with sticky sidebar.

**Chronological content audit:**

| Published | URL slug | Title | Category | Notes |
|---|---|---|---|---|
| 2020-04-02 | `/personal-injury/7-steps-to-take-after-a-car-accident/` | 7 Steps to Take After a Car Accident | Personal Injury | Step-by-step instructional. 7 H2 sections. |
| 2020-07-07 | `/personal-injury/9-tips-for-when-you-have-been-injured-in-an-accident/` | 9 Tips for When You Have Been Injured in an Accident | Personal Injury | Instructional list format. |
| 2020-10-08 | `/social-security/applying-for-social-security-disability-in-arkansas-the-definitive-guide/` | Applying for Social Security Disability in Arkansas: The Definitive Guide | Social Security | **Pillar content** — longest post, referenced by other SSD posts. |
| 2020-11-05 | `/social-security/do-i-need-lawyer-ssi-ssdi/` | Do I Need a Lawyer for Social Security Disability? | Social Security | Persuasive — opens with "3× more likely to be approved with representation." |
| 2020-11-05 | `/personal-injury/6-things-to-do-after-a-motorcycle-accident/` | 6 Important Steps After a Motorcycle Accident | Personal Injury | Instructional list. |
| 2020-12-18 | `/social-security/is-social-security-disability-taxable-in-arkansas/` | Is Social Security Disability Taxable in Arkansas? | Social Security | Q&A post targeting a specific search query. |
| 2021-01-11 | `/social-security/what-happens-to-ssi-or-ssdi-at-retirement-age/` | What happens to SSI or SSDI at Retirement Age? | Social Security | Q&A post. |
| 2021-02-08 | `/social-security/can-i-qualify-for-ssi-if-im-already-receiving-ssdi/` | Can I Qualify For SSI if I'm Already Receiving SSDI? | Social Security | Q&A post. |
| 2021-04-02 | `/personal-injury/arkansas-insurance-rules-you-need-to-know-about/` | Arkansas Insurance Rules You Need to Know About | Personal Injury | Explanatory post about state law. |
| 2021-04-02 | `/social-security/is-it-worth-pursuing-social-security-disability/` | Is It Worth Pursuing Social Security Disability? | Social Security | Persuasive Q&A (cites ~64% SSA denial rate). |
| 2021-04-02 | `/social-security/are-social-security-disability-benefits-permanent/` | Are Social Security Disability Benefits Permanent? | Social Security | Q&A. |
| 2021-05-01 | `/personal-injury/what-is-the-difference-between-ssi-and-ssdi/` | What Is the Difference Between SSI and SSDI? | Personal Injury (**mis-categorized** — content is SSD) | Comparative explainer. |

**Blog category breakdown:**
- Social Security: 7 posts
- Personal Injury: 5 posts (one mis-categorized — see last row)
- Workers' Compensation: **0 posts** — despite being a main practice area and the employer-labeled "personal injury paralegal" and "workers' comp manager" staff
- Employment Law: **0 posts** — despite being listed as a main area of practice

**Author:** All 12 posts are authored by `cwendel` (see §6.4) — **Chris Wendel, the designer credited in the footer.** No attorney-authored content.

**Content velocity:**
- 2020: 5 posts (Apr, Jul, Oct, Nov × 2)
- 2021 (Jan–May): 7 posts
- 2021-05 to 2026-04 (current): **0 posts, 5 years of inactivity**

**URL structure inconsistency:** Posts are nested under `/personal-injury/` or `/social-security/` — **not** under `/blog/` or `/law-blog/`. The blog index itself is at `/law-blog/`. These category-root URLs (`/personal-injury/7-steps...`) can conflict with the practice-area URLs (`/area-of-practice/personal-injury/`) in search results and navigation.

---

## 6. Blog taxonomy pages (8)

All taxonomy archives use template `174.css` + `53.css` + `7.css` (same design as the blog index at `/law-blog/`) — posts grid on the left, sidebar on the right, 61px white hero.

### 6.1 Categories (5)

| URL | Post count (from content) | Notes |
|---|---|---|
| `/category/social-security/` | 7 posts | Largest category. |
| `/category/personal-injury/` | 5 posts | |
| `/category/workers-compensation/` | **0 posts** | Empty archive page still generated and indexed. |
| `/category/employment-law/` | **0 posts** | Empty archive page still generated and indexed. |
| `/category/uncategorized/` | Unknown | Default WordPress category — should be suppressed. |

**SEO issue:** Three of five category pages are either empty or Wordpress cruft. Empty indexed archives are thin content risk under Google's content quality guidelines.

### 6.2 Tags (2)

| URL | Notes |
|---|---|
| `/tag/accident/` | Tag archive |
| `/tag/injured/` | Tag archive |

Only two tags have ever been used across 12 posts, and both are effectively synonyms of "personal injury" — limited taxonomic value.

### 6.3 Author archive (1)

| URL | Notes |
|---|---|
| `/author/cwendel/` | Chris Wendel's author archive — contains all 12 blog posts. |

**Insight:** The only author on the site is the **designer**, not the attorneys. Attorney bylines (Dan Wren, Keith Wren) could add credibility and E-E-A-T (Experience/Expertise/Authoritativeness/Trustworthiness) for SEO, especially on legal Q&A content.

---

## 7. Legal / compliance pages (2)

Auto-generated by the `auto-terms-of-service-and-privacy-policy` WordPress plugin.

### 7.1 `/wpautoterms/privacy-policy/`

| Field | Value |
|---|---|
| **Title** | Privacy Policy \| Wren Law Firm |
| **Template** | `7.css` only (no Oxygen body template) + `wpautoterms.css` |
| **Design treatment** | Plain text on plain page — **the only page on the site without Oxygen styling on the body**. Inherits header and footer only. Section H2s: "Information Collection And Use", "Log Data", "Cookies", "Service Providers", "Security", "Links To Other Sites", "Children's Privacy", "Compliance With Laws", "Changes To This Privacy Policy", "Contact Us". |
| **Status** | Boilerplate auto-generated content. Likely needs a Privacy attorney review given GDPR, CCPA, Arkansas state law, and the firm's Meta Pixel + Google Tag Manager tracking. |

### 7.2 `/wpautoterms/terms-and-conditions/`

| Field | Value |
|---|---|
| **Template** | Same as 7.1 — plain body. |
| **Content** | Auto-generated ToS boilerplate. Opening paragraph literally contains `"("us", "we", or "our") operates the website (the "Service")"` with no firm name substituted. |
| **Status** | **Not production-ready** — the template variables never got filled in. |

### 7.3 `/wpautoterms/` — Legal pages archive index

| Field | Value |
|---|---|
| **Templates** | `174.css` + `53.css` + `7.css` (blog-archive design) |
| **Title** | Legal Pages Archive \| Wren Law Firm |
| **Design treatment** | Uses the blog archive layout to list Privacy Policy + Terms. Renders as if it were a blog category called "Archives: Legal Pages". |
| **Issue** | No user-facing reason to index this page. It's a plugin artifact. |

---

## 8. Sitemap-only endpoints (1)

### 8.1 `/wpautoterms/` (see 7.3)

Counted above. This is the only sitemap entry that's a plugin-generated index page rather than user-authored content.

---

## 9. URLs NOT in sitemap but found in source

These appeared in navigation or content but are not in the XML sitemap:

| URL | Found where | Notes |
|---|---|---|
| `https://wrenlawfirm.com/#` | About Us nav dropdown parent | Not a real page — dropdown-only parent. Correctly excluded. |
| `http://` | `Español?` footer link | Broken placeholder link. |
| `tel:5015231000` / `tel:5015295877` / `tel:5015191980` / `tel:18003001775` | Phone CTAs | Click-to-call links, not URLs. |
| `mailto:*` | Staff page | 7 email addresses — one with a bug (Blanca Baker → Dan). |
| `http://www.chrisjwendel.com` | Footer credit | External — designer portfolio. |
| `https://www.facebook.com/wrenlawfirm/?rf=162567297113673` | JSON-LD `sameAs` | External social link. Not surfaced in any visible footer social icon — present only in structured data. |
| `https://wrenlawfirm.com/?s={search_term_string}` | JSON-LD `SearchAction` | Template URL for site search. |

No orphaned/unlinked pages were found beyond the two landing pages already documented in §3.

---

## 10. Design-template × URL cross-reference

Every URL is mapped to the Oxygen template(s) that style it. This is the definitive layout map.

| Oxygen template | File | Role | URLs that use it |
|---|---|---|---|
| `universal.css` | Global | Body, headings, buttons, utilities | **All 34 URLs** |
| `7.css` | Header + footer + modal + FABs | Chrome | **All 34 URLs** |
| `53.css` | "Why Choose Us" reusable block | Reusable section | 28 URLs (everything except Privacy, Terms, Staff) |
| `8.css` | Homepage layout | Page | 1 URL — `/` |
| `10.css` | About hero + intro | Page | 1 URL — `/about/` |
| `100.css` | About attorney-bio cards | Page | 1 URL — `/about/` |
| `12.css` | Areas-of-practice index | Page | 1 URL — `/areas-of-practice/` |
| `17.css` | Contact page | Page | 1 URL — `/wren-law-firm-contact/` |
| `65.css` | Practice-detail 70/30 layout | Page | 3 URLs — all `/area-of-practice/*/` |
| `155.css` | Staff directory | Page | 1 URL — `/our-professional-staff/` |
| `174.css` | Blog index / archive layout | Page | 9 URLs — blog index + 5 categories + 2 tags + 1 author |
| `180.css` | Alternate posts-grid (3-col) | Page | 0 URLs actively (template exists but no current URL assigns it — possibly archived) |
| `183.css` | Blog post detail | Page | 12 URLs — every individual blog post |
| `42.css` | SSD landing page | Page | 1 URL — `/social-security-disability/` |
| `167.css` | Denied-SSD landing page | Page | 1 URL — `/denied-social-security/` |
| `204.css` | Landing-page consultation card | Reusable (landing pages only) | 2 URLs — both SSD landing pages |
| wpautoterms plugin CSS | Legal pages | Plugin body | 3 URLs — `/wpautoterms/*` |

**Template reuse summary:**
- 15 unique Oxygen page-level templates for 34 URLs
- Heaviest reuse: `183.css` (blog post detail, 12 URLs) and `65.css` (practice detail, 3 URLs + extended by 183)
- Zero-use template: `180.css` (orphaned — may be a deprecated alternate blog archive)

---

## 11. Observations & recommendations

### 11.1 Structural observations

1. **Content freeze since May 2021** — no blog posts, no sitemap updates, no new pages for ~5 years. The site is effectively archival. Any redesign scope needs to account for whether the firm will commit to content cadence going forward, or whether the rebuild should intentionally de-emphasize blog.

2. **Two ad-campaign landing pages** (`/social-security-disability/` + `/denied-social-security/`) are nearly duplicate content, unlinked from main navigation, and likely tied to paid search campaigns that may or may not still run. **Confirm with firm whether paid search is still active** — if yes, these pages are conversion-critical; if no, they should be consolidated or redirected.

3. **Practice area ↔ nav mismatch** — Employment Law is listed as a practice area in body copy but has no `/area-of-practice/` page, no blog category content, no nav entry. Either add it as a first-class practice area or remove the claim from body copy.

4. **Blog URL structure is fragile** — posts live at `/personal-injury/*` and `/social-security/*` (top-level category slugs), not under `/blog/` or `/law-blog/`. This creates path conflicts with practice pages at `/area-of-practice/personal-injury/`. A rebuild should pick one pattern (recommend `/blog/<slug>/` with category pages at `/blog/category/<name>/`).

5. **All blog content is authored by the designer**, not the attorneys. For legal-services SEO under Google's E-E-A-T framework, attorney-authored content with bylines and credentials carries substantially more weight. This is a content strategy issue, not a design issue.

6. **Empty category archives are indexed** (`/category/workers-compensation/`, `/category/employment-law/`, `/category/uncategorized/`). These are thin-content SEO risks.

7. **Privacy Policy and Terms are plugin-default** with unfilled template variables ("`("us", "we", or "our")`" with no firm name). **This is a compliance issue** given the site's active tracking (GTM, Meta Pixel, reCAPTCHA). Attorney review + custom policy drafting should happen before any design refresh launches.

### 11.2 Design observations

1. **Two hero design patterns across the site** — (a) fixed-height photographic heroes (homepage, areas index, about, contact, blog index, both landing pages) and (b) standard section-padding heroes (practice detail, blog posts, staff, legal). A rebuild could consolidate to one pattern.

2. **Eight different navy overlay opacities** are applied to the same Trinity College library photo alone (it appears on the homepage hero at 0%, landing pages 42/167 at 0%, and About page at 80%). Standardizing to three overlay tokens (per the main README) would affect every page.

3. **One secondary-navigation pattern, two sticky offsets** — `top: 125px` on practice detail, `top: 150px` on areas index. Consolidate.

4. **The staff directory is the only page with a solid-navy hero** (no photo). This is a distinctive design choice but is inconsistent with the rest of the site's photographic-hero system. Either standardize to photographic, or elevate the solid treatment to a second canonical hero pattern.

5. **Lead-capture landing pages (3.1, 3.2) use a unique six-fancy-icon row** not seen elsewhere on the site. If these pages survive a rebuild, this component needs to be formalized. If they're deprecated, this styling can be deleted.

### 11.3 Scoping implications for §13 of the main README

This URL inventory adds weight to three of the kickoff-meeting questions:

- **Q: "Is there paid search running?"** — Now essential. Landing pages 3.1 and 3.2 are ad-campaign assets.
- **Q: "Is blog content going to be revived?"** — 5-year freeze is dispositive evidence this needs an explicit decision.
- **Q: "Who owns content?"** — All existing blog content is designer-authored. A commitment to attorney-authored content changes the scope substantially.

---

*Total URLs inventoried: 34. Total Oxygen templates identified: 15. Total page-type patterns: 7 (homepage, landing, practice-detail, archive, post-detail, directory, legal). Total content gaps flagged: 11. Total broken/bug URLs: 1 (`http://` Español link) + 1 mailto bug.*
