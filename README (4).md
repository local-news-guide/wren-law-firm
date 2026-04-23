# Wren Law Firm — Brand & Design System Audit

**Handoff package for design, development, and agency teams.**

- **Site audited:** <https://wrenlawfirm.com/>
- **Date of audit:** April 22, 2026
- **Audit depth:** Source HTML + full CSS corpus (12 files) + rendered markup (9 templates) + visual inspection of 10 image assets + inline SVG symbol library + JSON-LD structured data.
- **Environment limitations:** Static HTML/CSS analysis only. Runtime-injected styles (UserWay, Gravity Forms JS), keyboard focus rings, and interaction timings require a browser-automation pass (see §11).

---

## Contents

1. [TL;DR — the one-pager](#1-tldr--the-one-pager)
2. [How to read this document](#2-how-to-read-this-document)
3. [The brand in 30 seconds](#3-the-brand-in-30-seconds)
4. [Design system](#4-design-system)
   - 4.1 Color
   - 4.2 Typography
   - 4.3 Spacing & layout
   - 4.4 Elevation, radius, motion
5. [Component catalog](#5-component-catalog)
6. [Asset inventory](#6-asset-inventory)
7. [Page template catalog](#7-page-template-catalog)
8. [Technical profile](#8-technical-profile)
9. [Content & business data](#9-content--business-data)
10. [Issues log](#10-issues-log)
11. [Coverage & methodology](#11-coverage--methodology)
12. [Token export (JSON)](#12-token-export-json)
13. [**Open questions — scoping conversations needed before design work begins**](#13-open-questions--scoping-conversations-needed-before-design-work-begins)

---

## 1. TL;DR — the one-pager

Wren Law Firm runs a **traditional, trust-first attorney brand** on WordPress 6.9.4 + Oxygen Builder 4.6.2. Two core colors (**navy `#19283f` + gold `#b69d74`**), two fonts (**Playfair Display display + Open Sans body**), and a classical courthouse/pediment logo do almost all the brand work. The identity is coherent and recognizable.

**The system is fragile under the hood.** Design tokens are scattered across 12 Oxygen per-page CSS files with no central token layer. Eight different navy overlay opacities, three card-shadow variants, two ivory-surface colors differing by one digit. Three Lorem Ipsum blocks on the production homepage. A mailto bug on a staff card, a broken `Español?` link, a `display:none` second-attorney card, and a content inconsistency (About claims 14 staff, directory shows 7).

**The right first move before any redesign is a tokenization + content-hygiene pass.** The brand assets are strong enough to preserve; the scaffolding is what needs work. A full redesign without that hygiene pass will carry the drift forward.

**Critical scoping questions before design work starts** are in §13. The single most important one: is this a *refresh* (keep the brand, fix the system), a *redesign* (new brand, same business), or a *rebuild* (replatform off Oxygen entirely)? Those three paths have very different scopes and the site doesn't tell you which one the firm wants.

---

## 2. How to read this document

- **If you're the decision-maker:** §1 and §13 are the whole document. Everything between is evidence.
- **If you're the designer:** §3 → §5 is your baseline. §10 is the bug backlog. §13 is the brief you don't yet have.
- **If you're the developer:** §4, §8, and §12 are your reference. §6 is the asset map.
- **If you're the PM running discovery:** §9, §10, and §13 are the talking points for the kick-off call.
- **If you're the content/SEO person:** §9 and §10 (content inconsistencies, structured data gaps).

Every claim in §3–§10 is grounded in specific CSS selectors, URLs, or rendered HTML and is labeled when it isn't. Values marked *inferred* or *drift* are flagged explicitly. Items that could not be confirmed are in §11.

---

## 3. The brand in 30 seconds

| | |
|---|---|
| **Firm** | Wren Law Firm, Little Rock, AR |
| **Founded** | January 1, 1997 |
| **Practice areas** | Personal Injury, Workers' Compensation, Social Security Disability, Employment Law |
| **Attorneys** | Daniel E. Wren (founder), M. Keith Wren |
| **Total staff listed** | 7 (About page text claims 14 — see §10) |
| **Voice** | Conservative, credibility-first. Representative quote: *"We handle your claim so that you can focus on getting better."* — Dan Wren |
| **Visual posture** | Classical / editorial / desktop-first. Columns, library photography, Arkansas Supreme Court seal, NOSSCR credential, "since 1997" prominence. Feels law-firm-traditional — not modern-legal-brand. |
| **Identity mark** | Triangular pediment ("courthouse") with WREN wordmark and a W monogram in the tympanum, URL wordmark as plinth. Monochrome white PNG only — no SVG, no color variants, no alternative lockups. |

---

## 4. Design system

This section is the **single source of truth for tokens**. Where the rendered site uses drift values, I name the canonical token and the drift value side by side.

### 4.1 Color

#### Core brand — authoritative
| Token | Hex | RGB | Role | Evidence |
|---|---|---|---|---|
| `--color-navy` | `#19283f` | `25, 40, 63` | Primary brand. Footer, mobile nav, form submit, headings on light. | 41 declarations across 12 CSS files (most-used color on the site) |
| `--color-gold` | `#b69d74` | `182, 157, 116` | Primary accent. Hero CTA, sticky FABs, active nav, eyebrow headings, "Learn more" italic, icons. | 39 declarations |

These two colors do the heavy lifting. Everything else supports them.

#### Neutrals — authoritative
| Token | Hex | Role |
|---|---|---|
| `--color-surface-light` | `#fefffe` | Off-white body on dark, primary light surface (36 declarations) |
| `--color-surface-white` | `#ffffff` | Pure white — hamburger lines, form reset borders |
| `--color-surface-ivory` | `#faf8f7` | Ivory card surface (sidebar forms, modal, blog sidebar) |
| `--color-surface-muted` | `#e8e9eb` | Cool light gray section background (used only on About "Meet Our Attorneys") |
| `--color-text-primary` | `#404040` | Default body text |
| `--color-text-featured` | `#333333` | Emphasized body blocks (featured sections) |
| `--color-text-deep` | `#001514` | Near-black icon-box text |
| `--color-text-meta` | `#8f8f91` | Metadata, secondary-nav default state |
| `--color-divider` | `#eeeeee` | Submenu background, hover fill |

#### Link colors — authoritative
| Token | Hex | Role |
|---|---|---|
| `--color-link` | `#546e95` | Sidebar and blog body links (the real brand link color) |
| `--color-link-hover` | `#b69d74` | Link hover (resolves to `--color-gold`) |

A `#0074db` anchor default is declared globally (Oxygen default) but rarely renders — everywhere a link actually appears, one of the colors above takes over. Treat `#0074db` as drift.

#### Navy overlay system — **needs consolidation**
The rendered site uses **eight different navy opacities** to tint photography. They should collapse to three steps:

| Recommended token | Value | Replaces on live site |
|---|---|---|
| `--overlay-subtle` | `rgba(25,40,63, 0.22)` | `0.1`, `0.22` (2 templates) |
| `--overlay-base` | `rgba(25,40,63, 0.6)` | `0.6`, `0.66`, `0.72` (homepage, About, areas index) |
| `--overlay-strong` | `rgba(25,40,63, 0.85)` | `0.8`, `0.83`, `0.9` (About hero, contact, blog index) |

This is the single highest-value tokenization win.

#### Elevation — **needs consolidation**
Three card-shadow values exist; two are enough:

| Recommended token | Value | Notes |
|---|---|---|
| `--shadow-card` | `0 0 15px 1px rgba(0,0,0,0.19)` | Subtle card (expertise block) |
| `--shadow-elevated` | `2px 2px 15px 2px rgba(0,0,0,0.24)` | Hero overlay card and attorney card — retire the stray `0.23` variant |
| `--shadow-sticky-header` | `0 0 10px rgba(0,0,0,0.3)` | Sticky header on scroll (keep separate) |

#### Semantic state colors — **not defined**
The rendered CSS has no explicit `--color-success`, `--color-error`, `--color-warning`, or `--color-info`. Gravity Forms renders its own plugin defaults for validation, unstyled to match the brand. This is a gap to fill before any new form or transactional UI is built.

#### Drift / dead declarations — **delete on cleanup**
| Value | Why it exists | Recommendation |
|---|---|---|
| `#1e73be` | Oxygen default `.ct-link-button` background | Override in universal.css to `--color-gold` or `--color-navy` |
| `#ff0000` | Declared on `#div_block-49-8` with `border-style: none` | Remove declaration |
| `#faf9f7` | Second ivory variant (differs by 1 in green channel) | Merge into `--color-surface-ivory` |
| `#4831B0` | `--oxynav-brand-color` on an unused Oxygen nav component | Remove component |
| `#EFEDF4` | `--oxynav-activehover-color`, unused | Remove |
| `#66aaff` | `.oxy-progress-bar` default, no instance rendered | Remove |
| `black` | Blog-archive "Read more" button background | Replace with `--color-navy` to match blog-index button |

### 4.2 Typography

#### Families (Google Fonts, loaded in one blocking request)
```
https://fonts.googleapis.com/css?family=Open+Sans:100,200,300,400,500,600,700,800,900|Playfair+Display:100,200,300,400,500,600,700,800,900
```

- **`--font-body`: `'Open Sans'`**, weights 100–900 loaded (only 400 and italic actually used).
- **`--font-display`: `'Playfair Display'`**, weights 100–900 loaded (only 300, 400, and italic actually used).

All 18 weight files are pulled for only three to four rendered weights — a performance win is available here.

#### Base
- `16px / 1.6` · weight `400` · color `--color-text-primary` (`#404040`).

#### Scale (desktop)
| Token | Size | Weight | Family | Notes |
|---|---|---|---|---|
| `--type-display-xl` | 57–61px | 300 | Playfair | Blog hero `#headline-36-174` (61), blog post hero `#headline-3-180` (57), practice-detail hero `#headline-35-65` (56) |
| `--type-display-lg` | 42–46px | 300 | Playfair | Lawyer-name `.lawyer-name` (42), display callout `#headline-251-8` (46), About H1 `#headline-30-10` (40), staff hero `#headline-9-155` (55) |
| `--type-display` | 36px | 300 | Playfair | Default `<h1>`, homepage hero `#headline-5-8`, featured-block H2 `#text_block-13-65 h2` |
| `--type-h2` | 30px | 300 | Playfair | Default `<h2>` |
| `--type-h3` | 24–28px | 300 | Playfair | `.area-title` (28), `#text_block-13-65 h3` (28), default `<h3>` (24) |
| `--type-h4` | 20–22px | 300 | Playfair | Default `<h4>` (20), `.expertise-text heading` (22) |
| `--type-eyebrow` | 24px | 300 | Playfair | Gold kicker above hero H1 `#headline-3-8` |
| `--type-feature-title` | 26px | 300 | Playfair | `.choose-us-mini-title` (gold) |
| `--type-body-lg` | 20px | 400 | Open Sans | Featured body with 1.7 leading + 1px letter-spacing |
| `--type-body` | 16–18px | 400 | Open Sans | Default body (16), hero lede (18) |
| `--type-accent-italic` | 18px | 300 italic | Playfair / Open Sans italic | "Learn more" links, phone number accents |
| `--type-meta` | 12px | 400 | Open Sans | Footer designer credit |

#### Mobile scale (≤767px)
H1 36→30, display 46→35, H3 28→20, body-lg 20→16, `.choose-us-mini-text` 18→16. Confirmed across `universal.css`, `8.css`, `10.css`, `12.css`, `17.css`, `65.css`, `174.css`.

#### Text treatments
- **`font-variant: small-caps`** — `.lawyer-title` only.
- **`letter-spacing: 1px`** — body emphasis blocks only (featured content, "Why Choose Us" mini-text).
- **`line-height: 1.7`** — featured body blocks (defaults elsewhere to 1.6).
- **No `text-transform: uppercase`** utility anywhere.

### 4.3 Spacing & layout

- **Container:** `1150px` max-width (`.ct-section-inner-wrap`, `.oxy-header-container`).
- **Section padding:** `75px` top/bottom, `20px` left/right by default. Heroes override (123/56 on home, 247/224 on About, 241/222 on blog, 238 top on contact, 271/241 on blog post).
- **Column gutter:** `20px` via `.ct-new-columns > .ct-div-block` padding.
- **Card padding:** `25px` all sides (used consistently on ivory-card and attorney-card components).

#### Breakpoints
| Breakpoint | Behavior |
|---|---|
| `max-width: 479px` | Extra-small mobile — hero paddings increase, FAB positions adjust |
| `max-width: 767px` | Mobile — type scale steps down, columns collapse |
| `max-width: 991px` | Tablet — primary nav collapses to hamburger; column widths force to 100% |
| `min-width: 992px` | Desktop — full primary nav, sticky header active |
| `max-width: 1120px` | Blog post meta row hides |
| `max-width: 1150px` | Practice-tile `.area-link` switches from hover-reveal to always-visible |

#### Sticky offsets — **needs consolidation**
- Template 65 (practice detail): `top: 125px`
- Template 12 (areas index): `top: 150px`

Standardize to one `--sticky-offset` value and reuse.

#### Layout patterns
- **Flexbox only** — no CSS Grid in the extracted source.
- **Homepage hero:** Overlay card over background photo (no parallax).
- **"Why Choose Us" section (homepage):** `background-attachment: fixed` parallax.
- **Practice detail / areas index:** 70/30 split with sticky sidebar.
- **Contact:** 40/60 split, reverses to `column-reverse` on mobile (form appears first).
- **Blog index:** 2-column posts grid → 50% → 100% at breakpoints.
- **Blog archive (template 180):** 3-column posts grid → 50% → 100%.

### 4.4 Elevation, radius, motion

- **Border radius:** `3px` on buttons and inputs only. Everything else is square. **No pill shapes anywhere on the site.**
- **Circular treatment:** Attorney-portrait treatment `border-radius: 100px` + `filter: grayscale(100%)` (About page only).
- **Transitions:** `0.2s` on hover states (buttons, tiles, links); `0.5s` on practice-tile translateY reveal; `0.4s` on mobile nav icons.
- **Transform:** `scale(1.03)` on practice-tile hover; `translateY(-10px)` on title/link reveal.
- **No keyframe animations** detected other than the Oxygen-default progress-bar stripe (unused).

---

## 5. Component catalog

Each component is documented with its live ID/class, visual description, and interaction. Assume the tokens from §4 apply unless noted.

### Header
- **Desktop:** Oxygen overlay header, positioned absolutely over hero, transparent until sticky.
- **Sticky (≥992px):** Fills with `rgba(0,0,0,0.67)` and gains `--shadow-sticky-header`. Primary row (125px) persists; secondary row (75px) hides.
- **Mobile (≤991px):** Hamburger replaces nav. 40×40 tap target, 6px-thick `#ffffff` lines that transform into a cross on open. Hover lightens to `#d3d3d3`.
- **Mobile menu panel:** `#19283f` background, `#b69d74` menu links, 20px padding, 49%-alpha gold on hover.

### Primary navigation
Items: Home · Areas of Practice (3 children) · About Us (2 children) · Blog · Contact Us. Desktop dropdowns appear with `rgba(250,249,247, 0.8)` or `rgba(255,255,255, 0.79)` backgrounds (two variants — choose one).

### Secondary vertical navigation (practice detail + areas index)
- Vertical list, default `#8f8f91`, current-item `#19283f`, hover `#b69d74`.
- **Signature interaction:** 3px left-border accent + 17px indent shift on hover. This is the most polished interaction on the site.
- Lives in a sticky ivory card at `top: 125–150px` (standardize per §4.3).

### Hero (homepage)
- Background: Alex Block Trinity College library photo, tinted `--overlay-base`.
- Eyebrow (gold 24px) → H1 (white 36px) → lede (18px) → CTA pair (gold filled button + `tel:` text link).
- White overlay card (`--shadow-elevated`, 50px padding → 25px → 10px responsive) contains the Daniel Wren portrait and attorney titles.

### Buttons
| Variant | Background | Text | Usage |
|---|---|---|---|
| Primary gold | `--color-gold` | `--color-navy` | Hero CTA, sticky "Free Consultation" |
| Primary navy (white text) | `--color-navy` | `#ffffff` / `--color-surface-light` | Most Gravity Forms submits |
| Primary navy (gold text) | `--color-navy` | `--color-gold` | Footer/newsletter form submit `#gform_submit_button_7` |
| Blog "Read more" (canonical) | `--color-navy` | white | Blog index |
| Blog "Read more" (drift) | `black` | white | Blog archive — **fix to `--color-navy`** |

All use `3px` border-radius, `1px` solid same-as-bg border, and `0.2s` hover transition. Gold button hover resolves to `rgba(182,157,116, 0.82)`.

### Floating CTAs (all pages)
- **Phone FAB** `#fancy_icon-64-7` — gold circle, 35×35 icon, `position: fixed; bottom: 25px; right: 25px` (mobile: 10/10).
- **Email FAB** `#fancy_icon-65-7` — same treatment, 65px offset to the left.
- Icons from inline FontAwesome SVG symbols.

### Practice-area tile (homepage)
- Photo with `rgba(0,0,0, 0.48)` scrim, centered gold 55px SVG icon, white 28px title, gold-italic "Learn more" link hidden below 1150px and revealed via `opacity: 0 → 1` + `translateY` on hover.
- Hover: `scale(1.03)` over 0.2s; title lifts 10px over 0.5s.

### Expertise icon-box (homepage + shared §53 template)
- White card, 25px padding, `--shadow-card`, gold 70px SVG icon top-right, 22px heading + near-black body, text right-aligned.

### "Why Choose Us" quad (reusable §53 block)
- 2×2 grid of title + body pairs, no icons. Title: `--color-gold` 26px. Sits over parallax photo with `--overlay-base`.
- Shared across homepage, About, and all three practice detail pages — the **most reused content module on the site.**

### Attorney card (About page)
- Horizontal card. 40% navy panel + 60% white panel. 25px padding, `--shadow-elevated`.
- Portrait: `width: 50%`, `border-radius: 100px` (circular at typical sizes), `filter: grayscale(100%)`. All attorney photos on About are forced B&W.
- **Known issue:** Second card (`#div_block-111-10`, Keith Wren) has `display: none` — needs escalation (§10).

### Staff card (Staff directory)
- Centered text, 2- and 3-column grids. Hero section uses solid navy `--color-navy` (no photo) — unique on the site. 55px headline.

### Sidebar consultation form
- Ivory card (`--color-surface-ivory`), 25px padding, labelless borderless inputs (40px height, 100% width, 100px textarea), placeholder "How Can We Help?", navy submit, honeypot + reCAPTCHA v2.
- **Known accessibility issue:** Labels set to `display: none` (§10).

### Contact map
- `#_map-30-17` — Google Maps embed, 100% × 100% desktop, 250px on mobile. First and only map on the site.

### Modal consultation popup
- `#modal-66-7` — ivory background, 70% width (90% on mobile), 25px padding, `Lineariconsicon-cross` at absolute top-right. Contains embedded Gravity Form.

### Footer
- `#section-102-7`. Navy background, 3-column (25/50/25) → single column below 991px. Gold section headings, off-white body text. 12px "Designed by Chris Wendel" credit in `rgba(249,249,249, 0.8)`.

### Blog index posts grid
- 2-column, 50% posts, collapses at 767px. Placeholder image fallback: diagonal hatch `repeating-linear-gradient(45deg, #eee 0 10px, #ddd 10px 20px)`. Date chip top-right: `rgba(0,0,0, 0.5)` bg, white text, 0.7em size. Meta row separator: `·` (U+00B7), hidden below 1120px.

### Inline quote (About)
*"We handle your claim so that you can focus on getting better." — Dan Wren*
Rendered as an H3, not a semantic `<blockquote>`. No dedicated testimonial component exists on the site.

### Not implemented (inventory of what's absent)
- **Testimonials / reviews / ratings** — `.oxy-testimonial` styles are declared in universal.css (125×125 photo, 21px text, 18px author, 12px meta) but never instantiated on any audited template.
- **Case results / settlement amounts** — industry-standard for personal injury firms, not present.
- **Carousels, galleries, sliders** — `.ct-slider` styles exist but no instance rendered.
- **FAQ / accordion** — `.toggle-*` classes exist but no instance rendered.
- **Spanish-language content** — `Español?` footer link points to `http://` (broken); Blanca Baker on staff is listed as Spanish Interpreter.
- **Client portal / case status login** — not present.

---

## 6. Asset inventory

### Logos and marks
| File | URL | Dimensions | Format | Role |
|---|---|---|---|---|
| `Asset-1.png` | `/wp-content/uploads/2019/10/Asset-1.png` | 672×512 | PNG-8, transparent | **Primary logo** — used in header, footer, sticky, modal. Monochrome white on transparency. Only one color variant exists. **No SVG available.** |
| `favicon.png` | `/wp-content/uploads/2020/01/favicon.png` | 513×512 | PNG | Referenced by JSON-LD `Organization.logo`. Separate from the cropped favicons. |

### Favicons
| File | Dimensions | Role |
|---|---|---|
| `cropped-favicon-32x32.png` | 32×32 | Browser tab |
| `cropped-favicon-180x180.png` | 180×180 | `apple-touch-icon` |
| `cropped-favicon-192x192.png` | 192×192 | Android icon |
| `cropped-favicon-270x270.png` | 270×270 | `msapplication-TileImage` |

### Social share
| File | Dimensions | Role |
|---|---|---|
| `Untitled-2.png` | 1080×1080 | `og:image` + Twitter card — logo composited over library photo with navy overlay. **Filename is generic/placeholder.** |

### Hero photography (audited live)
| File | Dimensions | Source | Where |
|---|---|---|---|
| `alex-block-PdDBTrkGYLo-unsplash*.jpg` | 1920×1275 | Unsplash (Alex Block) | Homepage hero (Trinity College Old Library, navy-toned) |
| `nik-macmillan-YXemfQiPR_E-unsplash.jpg` | 1000×667 | Unsplash (Nik MacMillan) | "Why Choose Us" parallax (homepage, About, all practice detail), PI section |
| `patrick-fore-H5Lf0nGyetk-unsplash.jpg` | 1000×667 | Unsplash (Patrick Fore) | Areas of Practice index hero (classical columns interior) |
| `zac-nielson-s4vuMuapk4Y-unsplash.jpg` | 1000×750 | Unsplash (Zac Nielson) | Contact page hero |
| `Webp.net-resizeimage-1.jpg` | 2000×1000 | Unknown (stock) | Blog index + blog archive heroes (grayscale carved-stone "LAW" text) |

### Attorney / staff photography
| File | Dimensions | Role |
|---|---|---|
| `rsz_mfp_7894-1-731x1024.jpg` | 731×1024 | Daniel E. Wren — homepage overlay card |
| `rsz_mfp_7894-1-214x300.jpg` | 214×300 | Dan Wren — mobile srcset |
| `MFP_8074resized.jpg` | unknown | Attorney portrait on About page |
| `MFP_7932resized.jpg` | unknown | Attorney portrait on About page |

### Editorial stock (secondary, across sub-pages and blog)
`clarisse-meyer-jKU2NneZAbI-unsplash.jpg`, `j-zamora-GWOTvo3qq7U-unsplash.jpg`, `jj-ying-WmnsGyaFnCQ-unsplash.jpg`, `zac-nielson-s4vuMuapk4Y-unsplash.jpg` (also hero), `neonbrand-AOJGuIJkoBc-unsplash.jpg`, `james-hose-jr-6D58t6uZT5M-unsplash-scaled.jpg`, `AdobeStock_142533022.jpg`, `AdobeStock_269901828.jpg`, `AdobeStock_243710890-scaled.jpeg`, `AdobeStock_37675830-scaled.jpeg`.

### Credibility badges (About page)
| File | Identified source | Status |
|---|---|---|
| `2000px-Seal_of_the_Supreme_Court_of_Arkansas.svg_.png` | Supreme Court of Arkansas seal | Verified |
| `NOSSCRLogo.png` | National Organization of Social Security Claimants' Representatives | Verified |
| `download.png` | Unknown | **Unverified — generic filename** |
| `2bi2cxtevb0cqi50mge6_400x400.png` | Unknown | **Unverified — hash-like filename** |

### SVG icon library (inline `<symbol>` definitions in HTML)
| Symbol ID | Family | Usage |
|---|---|---|
| `FontAwesomeicon-envelope-o` | FontAwesome | Email FAB |
| `FontAwesomeicon-phone` | FontAwesome | Phone FAB |
| `Lineariconsicon-cross` | Linearicons | Modal close |
| `WrenLawFirmicon-car-crash` | Custom Wren set | Practice tile — auto accident |
| `WrenLawFirmicon-crash` | Custom Wren set | Practice tile — collision |
| `WrenLawFirmicon-motorbike` | Custom Wren set | Practice tile — motorcycle |
| `WrenLawFirmicon-authorization` | Custom Wren set | Practice tile — authorization |
| `WrenLawFirmicon-document` | Custom Wren set | Practice tile — document |
| `WrenLawFirmicon-accident` | Custom Wren set | Practice tile — accident |
| `WrenLawFirmicon-chiropractic` | Custom Wren set | Practice tile — chiropractic |

All render at 55×55 on practice tiles, 70×70 in `.expertise-icon` boxes, or 35×35 in FABs.

### Downloads / PDFs / media
**None found** on any audited template. No PDF client forms, no video embeds, no audio, no podcasts.

---

## 7. Page template catalog

All pages share the same `7.css` header/footer and `universal.css` global tokens.

| Path | Template ID(s) | Distinct features |
|---|---|---|
| `/` | `8.css` + `53.css` | Hero overlay card, practice tiles, PI/SSD/WC content sections, expertise quad, "Why Choose Us" parallax |
| `/about/` | `10.css` + `100.css` + `53.css` | Hero (247/224 padding), firm-intro quote, attorney cards (grayscale circular portraits), credibility badge bar. **Second attorney card `display: none`** |
| `/our-professional-staff/` | `155.css` | Solid navy hero (no photo), 55px headline, 2-col → 3-col staff grid |
| `/areas-of-practice/` | `12.css` + `53.css` | Hero (patrick-fore columns), practice tile grid, 70/30 with sticky secondary nav at `top: 150px` |
| `/area-of-practice/*/` | `65.css` + `53.css` | 70/30 layout, sticky secondary nav at `top: 125px`, 56px hero headline, dual sidebar (info card + sticky form) |
| `/law-blog/` | `174.css` + `53.css` | 61px white hero, 2-col posts grid, date-chip, sidebar with search/categories |
| Blog archive | `180.css` | 57px hero with navy gradient, 3-col posts grid, **"Read more" uses `black` (drift)** |
| `/wren-law-firm-contact/` | `17.css` | 40/60 contact split, Google Maps embed, translucent ivory card over hero |
| `/wpautoterms/terms-and-conditions/` | Not fetched | wpautoterms plugin auto-generated (see §11) |
| `/wpautoterms/privacy-policy/` | Not fetched | wpautoterms plugin auto-generated |

---

## 8. Technical profile

### Stack
- **CMS:** WordPress 6.9.4
- **Page builder:** Oxygen Builder 4.6.2 — implication: tokens live per-page in admin UI, compile to `/wp-content/uploads/oxygen/css/*.css`. No central token file.
- **Forms:** Gravity Forms 2.7.17 (legacy CSS enabled)
- **jQuery:** 3.7.1
- **No modern framework** — no Tailwind, Bootstrap, React, Vue, CSS custom properties (except unused Oxygen nav vars)

### Plugins evidenced by loaded assets
- `oxygen/component-framework/oxygen.css` (4.6.2)
- `Oxygen-Mobile-Sub-Menu-master` (1.1.0)
- `auto-terms-of-service-and-privacy-policy` (2.5.0) — auto-generates /wpautoterms/ pages
- `duracelltomi-google-tag-manager` (1.16.2) — "GTM4WP"
- `gravityforms` (2.7.17) + legacy CSS pack
- Yoast SEO (inferred from meta/schema)

### CSS files loaded (12 total)
`oxygen.css` + `universal.css` + 11 per-page: `7`, `8`, `10`, `12`, `17`, `53`, `65`, `100`, `155`, `174`, `180`. Plus Gravity Forms' 4 legacy stylesheets and plugin CSS.

### Tracking and third-party
- **Google Tag Manager:** container `GTM-TP53CG7`
- **Meta Pixel:** `545493072912557` — includes `openbridge` variant for iOS ATT
- **Google reCAPTCHA v2:** site key `6LeLKM0UAAAAAJMukwXBbArJVL29imgf9oykzAcf`
- **UserWay accessibility widget:** account `Sq2MuDdVOi`, script from `cdn.userway.org/widget.js`
- **No Google Analytics 4** tag directly — presumably fired through GTM (unverified)
- **No chat widget, no CRM pixel, no A/B test harness, no heatmap tool** detected

### Structured data (JSON-LD on every page)
```json
{
  "@type": "Organization",
  "@id": "https://wrenlawfirm.com#organization",
  "name": "Wren Law Firm",
  "url": "https://wrenlawfirm.com",
  "logo": { "url": ".../2020/01/favicon.png", "width": 513, "height": 512 },
  "sameAs": ["https://www.facebook.com/wrenlawfirm/?rf=162567297113673"]
}
```
Plus a `WebSite` type with a `SearchAction`. **Missing:** `LegalService` / `Attorney` subtype, `address`, `telephone`, `openingHours`, `areaServed`, `priceRange`, `review`, `sameAs` links to LinkedIn / Google Business Profile / Justia / Avvo.

### Performance observations
- Google Fonts: 18 weight-files loaded for 3–4 rendered weights. Render-blocking `<link>` with no `preconnect`.
- 12 separate Oxygen CSS files loaded per page (no bundling at the plugin level).
- Hero photography served uncompressed at up to 1920×1275 — mobile devices receive the desktop asset.
- No `lazy` loading attribute observed on hero imagery.

---

## 9. Content & business data

### Firm
- **Name:** Wren Law Firm
- **Address:** 11300 Executive Center Dr., Suite A, Little Rock, AR 72211
- **Phone direct:** 501-523-1000
- **Toll free:** 800-300-1775
- **Fax:** 501-223-5309
- **Hours:** 24/7 (advertised phone availability)
- **Founded:** January 1, 1997
- **Social:** Facebook only — `facebook.com/wrenlawfirm` (referenced in JSON-LD `sameAs`)

### Staff roster (as listed on /our-professional-staff/)
| Name | Title | Email (visible) | Email (mailto href) |
|---|---|---|---|
| Daniel E. Wren | Owner / Attorney at Law — Workers' Comp, Social Security, Personal Injury | dwren@wrenlawfirm.com | dwren@wrenlawfirm.com ✓ |
| M. Keith Wren | Attorney at Law — Employment Law | mkwren@wrenlawfirm.com | mkwren@wrenlawfirm.com ✓ |
| Brian Stiefvater | Workers' Compensation Manager | bstiefvater@wrenlawfirm.com | bstiefvater@wrenlawfirm.com ✓ |
| Mandee Kirkpatrick | Personal Injury Paralegal | mkirkpatrick@wrenlawfirm.com | mkirkpatrick@wrenlawfirm.com ✓ |
| Steve Reed | Investigator | sreed@wrenlawfirm.com | sreed@wrenlawfirm.com ✓ |
| Suzanne Wren | Social Security + Workers' Comp Paralegal | swren@wrenlawfirm.com | swren@wrenlawfirm.com ✓ |
| Blanca Baker | Spanish Interpreter / Office Coordinator | bbaker@wrenlawfirm.com | **dan@wrenlawfirm.com ✗ (bug)** |

### Attorney tenure (from About bios)
- **Dan Wren:** J.D. UALR Law 1990, admitted 1990, founded Wren Law Firm January 1, 1997. ~36 years at bar.
- **Keith Wren:** B.S. UALR Accounting 1991, J.D. UALR 1994. Licensed through 8th Circuit and US Supreme Court. Two-time Chairperson of Arkansas Bar Association's Workers' Compensation Section. ~32 years at bar.

### Practice areas (as stated on site)
Homepage lead: *"Wren Law Firm focuses on four main areas of law: Social Security, Personal Injury, Workers' Compensation, and Employment Law."* But only three are surfaced in the primary nav (no Employment Law nav item).

### Content coverage gaps
- **Lorem Ipsum placeholders** on homepage: "Vehicle Injury" and "18 Wheeler Accident" tile bodies.
- **Duplicated copy** on homepage: "Motorcycle injuries can be very serious…" reused verbatim four times across unrelated tiles (Vehicle Injury, 18 Wheeler, SSDI, SSI, Work Related Injuries — all share the same sentence).
- **Typo** on Daniel Wren's staff card: "Workers' *Compesation*" (missing "n").
- **Count inconsistency:** About says *"four attorneys and a total staff of fourteen people"*; staff directory lists 7.
- **No testimonials, no case results, no settlement amounts** surfaced anywhere.
- **Blog cadence** not audited — needs inspection in a browser pass to confirm last-post date and posting frequency.

---

## 10. Issues log

Prioritized by user-visible impact.

### Critical (user-visible bug or compliance risk)
1. **Mailto bug on Blanca Baker's staff card** — visible email is `bbaker@wrenlawfirm.com`, but the `mailto:` href routes to `dan@wrenlawfirm.com`. User contact intended for Blanca goes to Dan.
2. **Typo on Dan Wren's staff card:** "Workers' Compesation" (missing "n").
3. **Broken "Español?" link** in footer — href is `http://` (empty scheme). Given Blanca Baker's role as Spanish Interpreter, this may indicate an abandoned Spanish-language plan.
4. **Form labels hidden via `display: none`** on every Gravity Form instance. WCAG 2.1 SC 3.3.2 risk. Labels exist in DOM for screen readers but sighted users lose orientation when placeholders clear.
5. **Keith Wren attorney card set to `display: none`** (`#div_block-111-10`). Keith's bio text is present in DOM but the card chrome is hidden. Needs escalation — intentional or accidental?

### High (credibility / content)
6. **Three Lorem Ipsum blocks** on homepage ("Vehicle Injury", "18 Wheeler Accident" bodies).
7. **Duplicate copy** across four+ homepage tiles ("Motorcycle injuries can be very serious…").
8. **Staff count inconsistency** — About claims 14, directory shows 7.
9. **Unverified credibility badges** — `download.png` and `2bi2cxtevb0cqi50mge6_400x400.png` have opaque filenames and no visible caption. Source attribution unverified.
10. **No testimonials / case results / settlements** — industry-standard trust signals for a PI firm are absent.

### Medium (design-system hygiene)
11. **Navy overlay drift** — 8 different opacities in use (see §4.1). Collapse to 3 tokens.
12. **Shadow drift** — 3 card-shadow variants (0.19, 0.23, 0.24). Collapse to 2.
13. **Ivory surface drift** — `#faf8f7` and `#faf9f7` used interchangeably. Merge.
14. **Sticky offset drift** — 125px vs. 150px between practice detail and areas index.
15. **Blog archive "Read more" button uses `black`** instead of `--color-navy`.
16. **Two primary-nav dropdown background variants** — `rgba(250,249,247, 0.8)` and `rgba(255,255,255, 0.79)`. Pick one.
17. **Dead color declarations** — `#1e73be`, `#ff0000`, `#4831B0`, `#EFEDF4`, `#66aaff`.

### Medium (technical)
18. **No SVG logo** — only a 672×512 PNG. Retina sharpness depends on browser bitmap scaling. Also no color or alternative lockup variants.
19. **`Untitled-2.png`** — og:image filename is placeholder-named.
20. **18 font weight files loaded** for 3–4 rendered weights — performance waste.
21. **No `preconnect` to `fonts.googleapis.com`** — missed perf win.
22. **Hero imagery unbounded** — 1920px images served to mobile devices.
23. **Schema.org `Organization` type** should be `LegalService` or `Attorney`; missing `address`, `telephone`, `openingHours`, `areaServed`.

### Low (cleanup)
24. **Unused Oxygen components** — `.oxy-testimonial`, `.oxy-progress-bar`, `.ct-slider`, `.toggle-*` all have declared styles and no rendered instance.
25. **Legacy Gravity Forms CSS pack** — 4 separate stylesheets loaded; newer Gravity Forms stylesheet strategy exists.

---

## 11. Coverage & methodology

### What was verified how
- **Authoritative (direct CSS source):** All colors, typography, spacing, breakpoints, shadows, border-radius, transitions — pulled from the 12 Oxygen CSS files.
- **Authoritative (rendered HTML + source):** All components, page structure, form field definitions, staff roster, attorney bios, structured data.
- **Visually verified:** Logo (composited on navy to reveal its form), favicon, OG image, homepage hero, Why Choose Us background, Dan Wren portrait, blog hero, areas of practice hero, contact hero.
- **Inferred:** Practice-area icon usage mapping to tile context (not every tile's icon ID is spelled out in the markdown render).

### What was NOT verified and needs a browser pass
- **Runtime-injected styles** from UserWay and Gravity Forms JS.
- **Keyboard focus rings** — no `:focus-visible` or `:focus` rules declared in source CSS; may rely on browser defaults.
- **Exact interaction timings** for desktop dropdowns, modal open/close, mobile hamburger animation.
- **Device-viewport screenshots** at 479 / 767 / 991 / 1150px.
- **Whether Keith Wren's attorney card actually renders** despite `display: none` in compiled CSS (could be overridden by instance CSS or JS).
- **Wpautoterms plugin styling** for Terms and Privacy pages — fetched URL discovered, CSS not parsed.
- **Blog post detail template** — fetched index and archive only. Individual post detail page not rendered.
- **GA4 / Analytics** fired via GTM — requires GTM container inspection or network tracing.

**Recommended close-out:** Run this same audit in Playwright/Chromium with device emulation at each breakpoint, capture full-page screenshots, record DOM computed styles, and run axe-core + Lighthouse on the primary templates. Time: ~2 hours of setup and ~2 hours of analysis.

---

## 12. Token export (JSON)

Ready to drop into a tokens file or Style Dictionary input:

```json
{
  "color": {
    "brand": {
      "navy": "#19283f",
      "gold": "#b69d74"
    },
    "surface": {
      "light": "#fefffe",
      "white": "#ffffff",
      "ivory": "#faf8f7",
      "muted": "#e8e9eb"
    },
    "text": {
      "primary": "#404040",
      "featured": "#333333",
      "deep": "#001514",
      "meta": "#8f8f91"
    },
    "divider": "#eeeeee",
    "link": {
      "default": "#546e95",
      "hover": "#b69d74"
    },
    "overlay": {
      "subtle": "rgba(25,40,63,0.22)",
      "base":   "rgba(25,40,63,0.60)",
      "strong": "rgba(25,40,63,0.85)"
    }
  },
  "shadow": {
    "card":           "0 0 15px 1px rgba(0,0,0,0.19)",
    "elevated":       "2px 2px 15px 2px rgba(0,0,0,0.24)",
    "sticky_header":  "0 0 10px rgba(0,0,0,0.30)"
  },
  "radius": { "sm": "3px", "round": "100px" },
  "font": {
    "display": "'Playfair Display', serif",
    "body":    "'Open Sans', sans-serif"
  },
  "type": {
    "base":         { "size": "16px", "line_height": "1.6",  "weight": 400 },
    "body_lg":      { "size": "20px", "line_height": "1.7",  "letter_spacing": "1px" },
    "eyebrow":      { "size": "24px", "family": "display", "weight": 300 },
    "h4":           { "size": "20px", "family": "display", "weight": 300 },
    "h3":           { "size": "24px", "family": "display", "weight": 300 },
    "h2":           { "size": "30px", "family": "display", "weight": 300 },
    "display":      { "size": "36px", "family": "display", "weight": 300 },
    "display_lg":   { "size": "42px", "family": "display", "weight": 300 },
    "display_xl":   { "size": "57px", "family": "display", "weight": 300 }
  },
  "space": {
    "section_y":    "75px",
    "section_x":    "20px",
    "card":         "25px",
    "gutter":       "20px",
    "container_max":"1150px"
  },
  "breakpoint": {
    "xs": "479px",
    "sm": "767px",
    "md": "991px",
    "lg": "1150px"
  },
  "motion": {
    "hover":         "0.2s",
    "reveal":        "0.5s",
    "icon":          "0.4s"
  },
  "sticky_offset": "125px"
}
```

---

## 13. Open questions — scoping conversations needed before design work begins

These are **not bug fixes** — they are decisions the firm (not the designer) must make. Sending a design brief that assumes any of these without asking will produce wrong work. Group them and send as a kickoff questionnaire.

### 13.1 Scope of engagement
- **Is this a refresh, a redesign, or a rebuild?**
  - *Refresh:* preserve the brand, tokenize the system, fix the bugs. Low cost, low risk.
  - *Redesign:* new visual identity but keep the business structure and platform. Medium cost, medium risk. Needs a new logo at minimum — the current one only exists as a 672×512 PNG.
  - *Rebuild:* replatform off Oxygen (which is a declining product with uncertain maintenance future) to modern WordPress, Webflow, or headless. High cost, high opportunity — all accumulated drift gets wiped.
- **If rebuild, is there appetite to move off WordPress entirely**, or is the constraint "keep WordPress, change the builder"?

### 13.2 Brand direction
- **Is the traditional courthouse aesthetic working, or has it been identified as a constraint?** A 1997-founded firm with a pediment logo and Trinity College library photos reads as credible-but-old-school. Younger prospects looking for legal help on mobile may route to a firm with a modern digital experience (e.g., Morgan & Morgan, Lawyers.com-aggregated leads). The traditional brand converts a certain audience and repels another.
- **Whose brand is this?** The firm's, or Dan Wren's personally? The homepage centers Dan, the About page does too. If a succession plan is relevant, the brand structure needs to support more than one named principal.
- **Should the site lead with "since 1997 / 20+ years" or with a more specific outcome claim** (settlement amounts, cases won, client testimonials)? Personal injury marketing is moving toward specific outcome data.

### 13.3 Audience and conversion
- **Who is the primary audience** — new prospects searching "Little Rock personal injury lawyer," existing clients checking case status, or referral partners (other attorneys)? The site currently optimizes for "new prospect via search" but without any measurable conversion funnel beyond "call the phone number."
- **Is there a desired CTA hierarchy?** Currently the hero offers both a consultation form and a `tel:` link; floating FABs repeat phone and email; the footer form adds a third contact path. Which is the *primary* action you want measured?
- **What does success look like?** Call volume? Consultation-form submissions? Qualified cases signed? This determines whether the redesign prioritizes SEO, phone prominence, form conversion, or credibility.

### 13.4 Content
- **Who rewrites the Lorem Ipsum and duplicated placeholder copy?** The firm's people (domain expertise, slow) or an outside legal copywriter (fast, needs review)?
- **Are there real testimonials / case results / settlement figures** the firm can surface? State bar rules in Arkansas constrain how these are shown — the firm's compliance advisor needs to sign off on format before design begins.
- **Is the "four attorneys, fourteen staff" figure on About accurate, or is the staff directory (7 people) the truth?** If there are attorneys/staff not yet on the site, get the list and photography plan before designing the staff page.
- **Are there more practice areas to surface?** Site text mentions Employment Law as a fourth area but there's no practice page for it.

### 13.5 Accessibility
- **Is the UserWay overlay the intended accessibility strategy, or is it a placeholder?** Overlay widgets are increasingly viewed as insufficient for WCAG compliance (and have been the subject of ADA lawsuits themselves). Real remediation — visible labels, focus rings, semantic markup, color contrast audit — is a separate, larger scope. The decision about which path to take is strategic, not technical.
- **Is Spanish-language support a real priority?** Blanca Baker is on staff as a Spanish Interpreter and the footer has an `Español?` link, but the link is broken and no Spanish content exists. If Spanish-speaking clients are a real segment, that's a full content and translation workstream, not a menu item.

### 13.6 Platform and engineering
- **Will Oxygen Builder be maintained?** The product has had leadership/ownership changes and questions about its long-term roadmap. Any significant redesign that stays on Oxygen should verify current maintenance posture before committing.
- **Who owns the site day-to-day after launch?** The current footer credits "Chris Wendel" as designer — is he still the maintainer, or is there a handoff needed?
- **Is there a privacy/tracking policy call to make?** Meta Pixel is installed; post-iOS ATT its value for a local service business is limited, but it still collects user data. Some firms are choosing to remove third-party tracking entirely for legal-services sites. GTM makes removal easy; the decision is editorial.

### 13.7 Assets and production
- **Photography budget.** New custom photography of the attorneys, staff, and office? Or continue with Unsplash / Adobe Stock? The site's look depends heavily on two photos (the Alex Block library image and the Nik MacMillan consultation shot) that any law firm can license — differentiation via custom photography is possible.
- **Logo in SVG + color variants.** The current PNG only works on light backgrounds inverted, or on dark backgrounds as-is. No color version, no horizontal lockup, no icon-only mark. Commissioning these is a small line item but needs to be flagged.
- **Do any case-results / credentials PDFs exist** that clients download? None were found — but the firm may have attorney CVs, fee agreements, or intake forms that belong on the site.

### 13.8 Launch and migration
- **If this is a rebuild, what's the URL/redirect plan?** The current site has active blog posts and practice pages that rank for local search terms. Any URL structure change needs a 301-redirect map.
- **Is the existing Gravity Forms data valuable** (leads database)? If so, the form-platform choice on the new site needs to either stay Gravity Forms or include a migration.
- **Launch timing constraint?** Any regulatory change, advertising commitment, or seasonal business driver (late summer is peak for personal injury advertising) that pins the launch date?

---

*End of handoff package. Source artifacts — raw HTML captures of all 9 templates, all 12 compiled CSS files, image downloads, and this README — are in the project directory.*
