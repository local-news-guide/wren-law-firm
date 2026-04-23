// Wren Law Firm — Main app (single-page, client-side routed)
const TWEAKS = /*EDITMODE-BEGIN*/{
  "heroVariant": "heroCredibility",
  "showAnnotations": false
}/*EDITMODE-END*/;

// hooks via React.*
function WrenApp({ initialLang = "en", initialPage = "home", forceMobile = false, heroVariantOverride = null }) {
  const [lang, setLang] = React.useState(initialLang);
  const [page, setPage] = React.useState(initialPage);
  const [heroVariant, setHeroVariant] = React.useState(heroVariantOverride || TWEAKS.heroVariant);
  const [tweaksOpen, setTweaksOpen] = React.useState(false);

  const copy = window.WREN_COPY[lang];
  window.wrenNav = (p) => setPage(p);

  // Tweaks wiring
  React.useEffect(() => {
    const onMsg = (e) => {
      if (e.data?.type === "__activate_edit_mode") setTweaksOpen(true);
      if (e.data?.type === "__deactivate_edit_mode") setTweaksOpen(false);
    };
    window.addEventListener("message", onMsg);
    window.parent.postMessage({ type: "__edit_mode_available" }, "*");
    return () => window.removeEventListener("message", onMsg);
  }, []);

  const onNav = (p) => {
    setPage(p);
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  const onLangToggle = () => setLang(lang === "en" ? "es" : "en");

  const setVariant = (v) => {
    setHeroVariant(v);
    window.parent.postMessage({ type: "__edit_mode_set_keys", edits: { heroVariant: v } }, "*");
  };

  let content;
  if (page === "home") content = <HomePage copy={copy} onNav={onNav} heroVariant={heroVariantOverride || heroVariant} />;
  else if (page === "about") content = <AboutPage copy={copy} />;
  else if (page === "practice") content = <PracticeIndex copy={copy} onNav={onNav} />;
  else if (page === "pi") content = <PracticeDetail copy={copy} kind="pi" onNav={onNav} lang={lang} />;
  else if (page === "wc") content = <PracticeDetail copy={copy} kind="wc" onNav={onNav} lang={lang} />;
  else if (page === "ssd") content = <PracticeDetail copy={copy} kind="ssd" onNav={onNav} lang={lang} />;
  else if (page === "team") content = <TeamPage copy={copy} lang={lang} />;
  else if (page === "blog") content = <BlogPage copy={copy} lang={lang} onPost={(s) => onNav("post:" + s)} />;
  else if (page === "contact") content = <ContactPage copy={copy} />;
  else if (page === "privacy") content = <LegalPage copy={copy} kind="privacy" lang={lang} />;
  else if (page === "terms") content = <LegalPage copy={copy} kind="terms" lang={lang} />;
  else if (page.startsWith("post:")) content = <BlogPost copy={copy} lang={lang} slug={page.slice(5)} onNav={onNav} />;
  else content = <HomePage copy={copy} onNav={onNav} heroVariant={heroVariant} />;

  return (
    <div className={`wl-app ${forceMobile ? "wl-device-mobile" : ""}`}>
      <Header copy={copy} lang={lang} onLangToggle={onLangToggle} page={page} onNav={onNav} />
      <main>{content}</main>
      <Footer copy={copy} onNav={onNav} />
      <Fab copy={copy} />
      {tweaksOpen && (
        <div className="wl-tweaks-panel visible">
          <h5>Hero headline</h5>
          {[
            { k: "heroCredibility", l: lang === "es" ? "Credibilidad (29 años)" : "Credibility (29-year)" },
            { k: "heroOffer", l: lang === "es" ? "Oferta (25% vs 40%)" : "Offer (25% vs 40%)" },
            { k: "heroHuman", l: lang === "es" ? "Humano (de Dan)" : "Human (from Dan)" },
            { k: "heroUrgent", l: lang === "es" ? "Urgente (24/7)" : "Urgent (24/7)" },
          ].map(o => (
            <label key={o.k} className={heroVariant === o.k ? "selected" : ""}>
              <input type="radio" name="heroVariant" checked={heroVariant === o.k} onChange={() => setVariant(o.k)} />
              {o.l}
            </label>
          ))}
        </div>
      )}
    </div>
  );
}

Object.assign(window, { WrenApp, TWEAKS });
