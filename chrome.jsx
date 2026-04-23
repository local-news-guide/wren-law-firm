// Wren Law Firm — Shared components (logo, icons, chrome)

// useState/useEffect/useRef accessed via React.* to avoid collisions across babel scripts

function WrenMark({ size = 38, color = "var(--navy)", accent = "var(--gold)" }) {
  // Pediment / courthouse mark — stylized W within a triangular crest
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" style={{ display: "block" }}>
      <path d="M4 36 L24 8 L44 36" stroke={color} strokeWidth="1.5" fill="none" />
      <path d="M8 36 L40 36" stroke={color} strokeWidth="1.5" />
      <path d="M8 40 L40 40" stroke={color} strokeWidth="1" />
      <path d="M14 36 L14 22 M20 22 L24 30 L28 22 M34 36 L34 22" stroke={accent} strokeWidth="1.5" fill="none" strokeLinecap="square" />
      <circle cx="24" cy="14" r="1.5" fill={accent} />
    </svg>
  );
}

function Logo({ inverted = false, sub }) {
  return (
    <a href="#" className="wl-logo" onClick={(e) => { e.preventDefault(); window.wrenNav && window.wrenNav("home"); }}>
      <WrenMark color={inverted ? "var(--paper)" : "var(--navy)"} accent={inverted ? "var(--gold)" : "var(--gold)"} />
      <div>
        <div className="wl-logo-text" style={inverted ? { color: "var(--paper)" } : {}}>WREN LAW FIRM</div>
        {sub && <div className="wl-logo-sub">{sub}</div>}
      </div>
    </a>
  );
}

// Abstract architecture SVG (no faces) — classical columns + light
function ArchitectureArt() {
  return (
    <svg viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="lightGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#2b3a52" />
          <stop offset="0.5" stopColor="#19283f" />
          <stop offset="1" stopColor="#0f1a2b" />
        </linearGradient>
        <linearGradient id="colLight" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#3a4a65" />
          <stop offset="0.5" stopColor="#b69d74" stopOpacity="0.25" />
          <stop offset="1" stopColor="#2a3850" />
        </linearGradient>
        <linearGradient id="shaft" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#1a2640" />
          <stop offset="0.3" stopColor="#3d4c66" />
          <stop offset="0.55" stopColor="#c4ab83" />
          <stop offset="0.75" stopColor="#3d4c66" />
          <stop offset="1" stopColor="#1a2640" />
        </linearGradient>
      </defs>
      <rect width="400" height="500" fill="url(#lightGrad)" />
      {/* Slanting light from upper right */}
      <polygon points="250,0 400,0 400,220 310,500 120,500" fill="#b69d74" opacity="0.06" />
      <polygon points="290,0 400,0 400,180 340,400 220,500" fill="#b69d74" opacity="0.05" />
      {/* Pediment */}
      <polygon points="80,120 200,60 320,120" fill="none" stroke="#b69d74" strokeWidth="1" opacity="0.5" />
      <line x1="70" y1="125" x2="330" y2="125" stroke="#b69d74" strokeWidth="1" opacity="0.6" />
      <line x1="70" y1="132" x2="330" y2="132" stroke="#b69d74" strokeWidth="0.5" opacity="0.4" />
      {/* Columns */}
      {[90, 160, 230, 300].map((x, i) => (
        <g key={i}>
          <rect x={x - 10} y="132" width="20" height="12" fill="#2a3850" stroke="#b69d74" strokeWidth="0.5" opacity="0.5" />
          <rect x={x - 8} y="144" width="16" height="310" fill="url(#shaft)" opacity="0.8" />
          {/* Fluting */}
          {[-5, -2, 1, 4].map(o => (
            <line key={o} x1={x + o} y1="144" x2={x + o} y2="454" stroke="#0f1a2b" strokeWidth="0.3" opacity="0.6" />
          ))}
          <rect x={x - 12} y="454" width="24" height="8" fill="#2a3850" stroke="#b69d74" strokeWidth="0.5" opacity="0.4" />
        </g>
      ))}
      {/* Floor */}
      <rect x="0" y="462" width="400" height="38" fill="#0a1322" />
      <line x1="0" y1="462" x2="400" y2="462" stroke="#b69d74" strokeWidth="0.5" opacity="0.3" />
      {/* Soft vignette */}
      <rect width="400" height="500" fill="url(#lightGrad)" opacity="0.15" />
    </svg>
  );
}

function Header({ copy, lang, onLangToggle, page, onNav }) {
  const [scrolled, setScrolled] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const nav = copy.nav;
  const items = [
    { k: "about", l: nav.about },
    { k: "practice", l: nav.practice },
    { k: "team", l: nav.team },
    { k: "blog", l: nav.blog },
    { k: "contact", l: nav.contact },
  ];
  return (
    <>
      <header className={`wl-header ${scrolled ? "is-scrolled" : ""}`}>
        <div className="wl-header-inner">
          <Logo sub={copy.headerTagline.split(" · ")[0]} />
          <nav className="wl-nav" aria-label="Primary">
            {items.map(i => (
              <a key={i.k} className={page === i.k ? "active" : ""}
                 onClick={(e) => { e.preventDefault(); onNav(i.k); }} href="#">{i.l}</a>
            ))}
          </nav>
          <div className="wl-header-right">
            <button className="wl-lang" onClick={onLangToggle} aria-label="Switch language">
              <span className="dot" /> {copy.langSwitch}
            </button>
            <a className="btn btn-primary" href="#" onClick={(e) => { e.preventDefault(); onNav("contact"); }}
               style={{ padding: "10px 16px", fontSize: 13 }}>{nav.consult}</a>
            <button className="wl-burger" aria-label="Menu" onClick={() => setMenuOpen(true)}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 6h18M3 12h18M3 18h18" /></svg>
            </button>
          </div>
        </div>
      </header>
      <div className={`wl-mobile-menu ${menuOpen ? "open" : ""}`}>
        <div className="wl-mobile-menu-top">
          <Logo inverted />
          <button className="wl-mobile-close" onClick={() => setMenuOpen(false)} aria-label="Close">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M6 6l12 12M6 18L18 6" /></svg>
          </button>
        </div>
        {items.map(i => (
          <a key={i.k} onClick={(e) => { e.preventDefault(); onNav(i.k); setMenuOpen(false); }} href="#">{i.l}</a>
        ))}
        <div className="wl-mobile-foot">
          <a onClick={(e) => { e.preventDefault(); onLangToggle(); }} href="#" style={{ color: "var(--gold)", fontFamily: "var(--font-body)", fontSize: 14, letterSpacing: "0.12em", textTransform: "uppercase" }}>
            {copy.langSwitch}
          </a>
          <div style={{ marginTop: 16 }}>{copy.phone} · {copy.tollFree}</div>
        </div>
      </div>
    </>
  );
}

function Footer({ copy, onNav }) {
  return (
    <footer className="wl-footer">
      <div className="wl-footer-inner">
        <div className="wl-footer-top">
          <div>
            <div className="wl-footer-tag">{copy.footerTag}</div>
            <div className="wl-footer-address">{copy.footerAddress}</div>
            <div className="wl-footer-address" style={{ marginTop: 8 }}>
              {copy.phoneLabel}: <a href={`tel:5015231000`}>{copy.phone}</a> · {copy.tollLabel}: <a href={`tel:18003001775`}>{copy.tollFree}</a>
            </div>
          </div>
          <div>
            <h4>{copy.nav.practice}</h4>
            {copy.practices.map(p => (
              <a key={p.slug} href="#" onClick={(e) => { e.preventDefault(); onNav(p.slug === "personal-injury" || p.slug === "lesiones-personales" ? "pi" : p.slug === "workers-compensation" || p.slug === "compensacion-laboral" ? "wc" : "ssd"); }}>{p.label}</a>
            ))}
          </div>
          <div>
            <h4>Wren Law Firm</h4>
            <a href="#" onClick={(e) => { e.preventDefault(); onNav("about"); }}>{copy.nav.about}</a>
            <a href="#" onClick={(e) => { e.preventDefault(); onNav("team"); }}>{copy.nav.team}</a>
            <a href="#" onClick={(e) => { e.preventDefault(); onNav("blog"); }}>{copy.nav.blog}</a>
            <a href="#" onClick={(e) => { e.preventDefault(); onNav("contact"); }}>{copy.nav.contact}</a>
          </div>
          <div>
            <h4>Legal</h4>
            <a href="#" onClick={(e) => { e.preventDefault(); onNav("privacy"); }}>{copy.privacyTitle.replace(".", "")}</a>
            <a href="#" onClick={(e) => { e.preventDefault(); onNav("terms"); }}>{copy.termsTitle.replace(".", "")}</a>
          </div>
        </div>
        <div className="wl-footer-bottom">
          <div className="wl-footer-legal">{copy.footerLegal}</div>
          <div style={{ fontSize: 11, color: "rgba(247,243,236,0.5)", letterSpacing: "0.18em", textTransform: "uppercase" }}>
            Little Rock · Arkansas
          </div>
        </div>
      </div>
    </footer>
  );
}

function Fab({ copy }) {
  const [open, setOpen] = React.useState(false);
  return (
    <div className={`wl-fab ${open ? "open" : ""}`}>
      <div className="wl-fab-items">
        <a className="wl-fab-item" href="tel:5015231000">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" /></svg>
          {copy.phone}
        </a>
        <a className="wl-fab-item" href="mailto:info@wrenlawfirm.com">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="M2 7l10 6 10-6" /></svg>
          Email
        </a>
        <a className="wl-fab-item" href="sms:5015231000">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" /></svg>
          SMS
        </a>
      </div>
      <button className="wl-fab-toggle" aria-label={open ? "Close" : "Contact"} onClick={() => setOpen(!open)}>
        {open ? (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M6 6l12 12M6 18L18 6" /></svg>
        ) : (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" /></svg>
        )}
      </button>
    </div>
  );
}

Object.assign(window, { WrenMark, Logo, ArchitectureArt, Header, Footer, Fab });
