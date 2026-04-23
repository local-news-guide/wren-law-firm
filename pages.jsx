// Wren Law Firm — Page components (home, practice, team, about, contact, blog, legal)
// hooks accessed via React.* to avoid collisions

function HeroCredibility({ copy, variant, onNav }) {
  const v = copy[variant] || copy.heroCredibility;
  return (
    <section className="wl-hero">
      <div className="container">
        <div className="wl-hero-grid">
          <div>
            <div className="wl-hero-kicker"><span className="wl-hero-kicker-text">{v.kicker}</span></div>
            <h1>
              {v.h1Line1}<br />
              {v.h1Line2}<br />
              <em>{v.h1Emph}</em>
            </h1>
            <p className="wl-hero-lede">{v.lede}</p>
            <div className="wl-hero-ctas">
              <a href="#" className="btn btn-primary" onClick={(e) => { e.preventDefault(); onNav("contact"); }}>
                {copy.ctaPrimary}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
              </a>
              <a href="tel:5015231000" className="phone-inline">{copy.phone}</a>
            </div>
          </div>
          <div className="wl-hero-art">
            <ArchitectureArt />
            <div className="wl-hero-art-caption">Pulaski County Courthouse · Little Rock</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustStrip({ items }) {
  return (
    <section className="wl-trust">
      <div className="wl-trust-inner">
        {items.map((it, i) => (
          <div className="wl-trust-item" key={i}>
            <span className="k">{it.k}</span>
            <div className="v">{it.v}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function PracticeGrid({ copy, onNav }) {
  const map = { "personal-injury": "pi", "lesiones-personales": "pi", "workers-compensation": "wc", "compensacion-laboral": "wc", "social-security-disability": "ssd", "seguro-social-por-incapacidad": "ssd" };
  return (
    <section className="wl-section">
      <div className="container">
        <div className="wl-section-head">
          <div className="eyebrow-line"><span className="eyebrow">{copy.practiceEyebrow}</span></div>
          <h2>{copy.practiceTitle}</h2>
        </div>
        <div className="wl-practice-grid">
          {copy.practices.map((p, i) => (
            <button key={p.slug} className="wl-practice-card" onClick={() => onNav(map[p.slug])}>
              <div className="num">0{i + 1} / 03</div>
              <h3>{p.label}</h3>
              <div className="short">{p.short}</div>
              <div className="body">{p.body}</div>
              <div className="more">{p.cta}</div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

function DanBlock({ copy }) {
  return (
    <section className="wl-section alt">
      <div className="container">
        <div className="wl-dan">
          <div className="wl-dan-portrait">
            <div className="wl-dan-portrait-tag">Founder · 1997</div>
            <div className="wl-dan-initials">DW</div>
          </div>
          <div>
            <div className="eyebrow-line" style={{ marginBottom: 16 }}><span className="eyebrow">{copy.danEyebrow}</span></div>
            <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 300, fontSize: "var(--t-display)" }}>{copy.danTitle}</h2>
            <div className="role" style={{ fontSize: 13, letterSpacing: "0.04em", color: "var(--gold-deep)", margin: "8px 0 24px", textTransform: "uppercase" }}>{copy.danRole}</div>
            <p>{copy.danBio}</p>
            <div className="wl-dan-creds">
              <ul>{copy.danCreds.map((c, i) => <li key={i}>{c}</li>)}</ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyBlock({ copy }) {
  return (
    <section className="wl-section dark">
      <div className="container">
        <div className="wl-section-head">
          <div className="eyebrow-line"><span className="eyebrow">{copy.whyEyebrow}</span></div>
          <h2 style={{ color: "var(--paper)" }}>{copy.whyTitle}</h2>
        </div>
        <div className="wl-why-grid">
          {copy.why.map((w, i) => (
            <div className="wl-why-item" key={i}>
              <span className="k">{w.k}</span>
              <h3>{w.t}</h3>
              <p>{w.b}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials({ copy }) {
  return (
    <section className="wl-section">
      <div className="container">
        <div className="wl-section-head">
          <div className="eyebrow-line"><span className="eyebrow">{copy.testEyebrow}</span></div>
          <h2>{copy.testTitle}</h2>
        </div>
        <div className="wl-test-grid">
          {copy.testimonials.map((t, i) => (
            <div className="wl-test-card" key={i}>
              <div className="mark">"</div>
              <q>{t.q}</q>
              <div className="attr">
                <span className="name">{t.a}</span>
                <span>{t.c}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="wl-test-disclaimer">{copy.testDisclaimer}</div>
      </div>
    </section>
  );
}

function ConsultForm({ copy, compact }) {
  return (
    <form className="wl-form" onSubmit={(e) => e.preventDefault()}>
      <h3>{copy.formTitle}</h3>
      <p className="lede">{copy.formLede}</p>
      <div className="wl-field"><label>{copy.formName}</label><input type="text" placeholder="" /></div>
      <div className="wl-field"><label>{copy.formEmail}</label><input type="email" /></div>
      <div className="wl-field"><label>{copy.formPhone}</label><input type="tel" /></div>
      <div className="wl-field"><label>{copy.formMatter}</label>
        <select><option></option>{copy.formMatters.map((m, i) => <option key={i}>{m}</option>)}</select>
      </div>
      {!compact && (
        <div className="wl-field"><label>{copy.formMessage}</label><textarea></textarea></div>
      )}
      <button type="submit" className="btn btn-primary">
        {copy.formSubmit}
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
      </button>
      <div className="footnote">{copy.formFootnote}</div>
    </form>
  );
}

function ContactBlock({ copy }) {
  return (
    <section className="wl-section bone">
      <div className="container">
        <div className="wl-contact-grid">
          <div className="wl-contact-info">
            <div className="eyebrow-line" style={{ marginBottom: 16 }}><span className="eyebrow">{copy.contactEyebrow}</span></div>
            <h2>{copy.contactTitle}</h2>
            <p className="lede">{copy.contactLede}</p>
            <ul className="wl-contact-list">
              <li><span className="lbl">{copy.phoneLabel}</span><span className="val"><strong>{copy.phone}</strong></span></li>
              <li><span className="lbl">{copy.tollLabel}</span><span className="val"><strong>{copy.tollFree}</strong></span></li>
              <li><span className="lbl">{copy.officeLabel}</span><span className="val">{copy.officeLine1}<br />{copy.officeLine2}</span></li>
              <li><span className="lbl">{copy.hoursLabel}</span><span className="val">{copy.hoursValue}</span></li>
              <li><span className="lbl">{copy.faxLabel}</span><span className="val">{copy.faxNumber}</span></li>
            </ul>
            <div className="wl-contact-spanish-note">{copy.spanishNote}</div>
          </div>
          <div><ConsultForm copy={copy} /></div>
        </div>
      </div>
    </section>
  );
}

function HomePage({ copy, onNav, heroVariant }) {
  return (
    <>
      <HeroCredibility copy={copy} variant={heroVariant} onNav={onNav} />
      <TrustStrip items={copy.trustStrip} />
      <PracticeGrid copy={copy} onNav={onNav} />
      <DanBlock copy={copy} />
      <WhyBlock copy={copy} />
      <Testimonials copy={copy} />
      <ContactBlock copy={copy} />
    </>
  );
}

// --- Inner pages ---

function InnerHero({ eyebrow, title, lede }) {
  return (
    <section className="wl-inner-hero">
      <div className="container">
        <div className="eyebrow-line" style={{ marginBottom: 16 }}><span className="eyebrow">{eyebrow}</span></div>
        <h1>{title}</h1>
        {lede && <p className="lede">{lede}</p>}
      </div>
    </section>
  );
}

function SideNav({ copy, active, onNav }) {
  const map = { "personal-injury": "pi", "lesiones-personales": "pi", "workers-compensation": "wc", "compensacion-laboral": "wc", "social-security-disability": "ssd", "seguro-social-por-incapacidad": "ssd" };
  return (
    <aside className="wl-side-nav">
      <h4>{copy.nav.practice}</h4>
      <ul>
        {copy.practices.map(p => (
          <li key={p.slug}><a href="#" onClick={(e) => { e.preventDefault(); onNav(map[p.slug]); }} className={map[p.slug] === active ? "active" : ""}>{p.label}</a></li>
        ))}
      </ul>
    </aside>
  );
}

function PracticeDetail({ copy, kind, onNav, lang }) {
  const info = {
    pi: {
      title: copy.piTitle, eyebrow: copy.piEyebrow, lede: copy.piLede,
      body_en: (<>
        <h2>What is personal injury?</h2>
        <p>Personal injury is any injury to the body, mind, or emotions caused by another person's negligence or wrongful act. The most common cases we see at Wren Law Firm are motor vehicle accidents — cars, trucks, motorcycles, and 18-wheelers — but the umbrella is broader than that.</p>
        <p>If you've been hurt and someone else is responsible, you have a case worth discussing.</p>
        <h2>Why hire a personal injury lawyer?</h2>
        <p>The opposing driver's insurance carrier has one job: settle your claim for as little as possible. Without representation, you are negotiating against trained adjusters whose compensation is tied to closing claims at the lowest cost. With representation, the balance shifts.</p>
        <p>We handle liability assessment, evidence preservation, witness statements, medical-bill coordination, and all communication with the opposing carrier — so you can focus on recovery.</p>
        <h2>Our fee: 25%, not 40%.</h2>
        <p><strong>Our standard personal injury fee is 25% of the total amount recovered.</strong> This is significantly lower than the 40%+ charged by many firms in Arkansas. We work on a contingency basis — you owe nothing unless we recover for you.</p>
        <h2>What we handle</h2>
        <ul>
          <li>Automobile accidents — cars, SUVs, trucks</li>
          <li>Motorcycle accidents — including claims complicated by rider bias</li>
          <li>Commercial vehicle and 18-wheeler collisions</li>
          <li>Pedestrian and bicycle injuries</li>
          <li>Uninsured and underinsured motorist claims (UM / UIM)</li>
          <li>Medical-pay coordination and subrogation</li>
        </ul>
        <h2>What to do right now</h2>
        <p>If the accident just happened: get medical attention, photograph the scene and all vehicles, exchange insurance information, get the responding officer's report number, and do not give a recorded statement to the opposing insurance company until you've spoken with an attorney. Then call us.</p>
      </>),
      body_es: (<>
        <h2>¿Qué son las lesiones personales?</h2>
        <p>Lesiones personales son cualquier daño al cuerpo, mente o emociones causado por la negligencia o acto ilícito de otra persona. Los casos más comunes que vemos en Wren Law Firm son accidentes de vehículos — autos, camiones, motocicletas y tráilers — pero la categoría es más amplia.</p>
        <p>Si usted fue lesionado y alguien más es responsable, vale la pena hablar de su caso.</p>
        <h2>¿Por qué contratar un abogado?</h2>
        <p>La aseguradora del conductor contrario tiene un solo trabajo: resolver su reclamo por lo menos posible. Sin representación, usted está negociando contra ajustadores entrenados cuya compensación está ligada a cerrar reclamos al costo más bajo. Con representación, el balance cambia.</p>
        <p>Manejamos la evaluación de responsabilidad, preservación de evidencia, declaraciones de testigos, coordinación de facturas médicas, y toda comunicación con la aseguradora contraria — para que usted pueda enfocarse en recuperarse.</p>
        <h2>Nuestro honorario: 25%, no 40%.</h2>
        <p><strong>Nuestra tarifa estándar en lesiones personales es el 25% de la recuperación total.</strong> Esto es notablemente menor que el 40%+ que cobran muchas firmas en Arkansas. Trabajamos por contingencia — usted no debe nada a menos que recuperemos para usted.</p>
        <h2>Lo que manejamos</h2>
        <ul>
          <li>Accidentes automovilísticos — autos, SUVs, camionetas</li>
          <li>Accidentes de motocicleta — incluyendo reclamos complicados por prejuicio contra motociclistas</li>
          <li>Colisiones con vehículos comerciales y tráilers</li>
          <li>Lesiones a peatones y ciclistas</li>
          <li>Reclamos de motorista sin seguro o con seguro insuficiente (UM / UIM)</li>
          <li>Coordinación de pago médico y subrogación</li>
        </ul>
        <h2>Qué hacer ahora</h2>
        <p>Si el accidente acaba de ocurrir: busque atención médica, fotografíe la escena y todos los vehículos, intercambie información del seguro, obtenga el número de reporte del oficial, y no dé una declaración grabada a la aseguradora contraria hasta que haya hablado con un abogado. Luego llámenos.</p>
      </>)
    },
    wc: {
      title: copy.wcTitle, eyebrow: copy.wcEyebrow, lede: copy.wcLede,
      body_en: (<>
        <h2>Injured at work in Arkansas?</h2>
        <p>If you were hurt on the job, you are entitled to medical care, temporary total disability benefits while you can't work, and permanent benefits if your injury is lasting. That's the law. The reality is that insurance carriers — who pay those benefits — have a financial interest in paying less.</p>
        <h2>How the carriers pay less</h2>
        <p>They direct you to their doctors. They dispute whether your injury is work-related. They cut off benefits when you're still in treatment. They pressure you back to light duty before you're ready. They lowball settlements.</p>
        <p>We see the same playbook run against unrepresented workers every week. And we push back.</p>
        <h2>What we handle</h2>
        <ul>
          <li>Initial claim filing with the Arkansas Workers' Compensation Commission</li>
          <li>Disputed-claim hearings and appeals</li>
          <li>Permanent-impairment rating disputes</li>
          <li>Second Injury Fund claims</li>
          <li>Settlement negotiation and lump-sum structures</li>
          <li>Third-party claims (when someone other than your employer caused the injury)</li>
        </ul>
        <h2>Our fee</h2>
        <p>Arkansas law caps attorney fees in workers' comp cases, and our fee is paid out of benefits only when and if we recover for you. There is no out-of-pocket cost to speak with us.</p>
      </>),
      body_es: (<>
        <h2>¿Lesionado en el trabajo en Arkansas?</h2>
        <p>Si fue lesionado en el trabajo, tiene derecho a atención médica, beneficios temporales por incapacidad mientras no pueda trabajar, y beneficios permanentes si su lesión es duradera. Esa es la ley. La realidad es que las aseguradoras — que pagan esos beneficios — tienen un interés financiero en pagar menos.</p>
        <h2>Cómo las aseguradoras pagan menos</h2>
        <p>Lo dirigen a sus médicos. Disputan si su lesión está relacionada al trabajo. Cortan los beneficios mientras usted aún está en tratamiento. Lo presionan a regresar a trabajo liviano antes de estar listo. Ofrecen acuerdos insuficientes.</p>
        <p>Vemos este mismo patrón usado contra trabajadores sin representación cada semana. Y nosotros respondemos.</p>
        <h2>Lo que manejamos</h2>
        <ul>
          <li>Presentación inicial de reclamo ante la Comisión de Comp. Laboral de Arkansas</li>
          <li>Audiencias de reclamos disputados y apelaciones</li>
          <li>Disputas de calificación de impedimento permanente</li>
          <li>Reclamos del Fondo de Segunda Lesión</li>
          <li>Negociación de acuerdos y estructuras de suma global</li>
          <li>Reclamos contra terceros (cuando alguien que no es su empleador causó la lesión)</li>
        </ul>
        <h2>Nuestro honorario</h2>
        <p>La ley de Arkansas limita los honorarios de abogados en casos de comp. laboral, y nuestro honorario se paga de los beneficios solamente cuando y si recuperamos para usted. No hay costo de bolsillo por hablar con nosotros.</p>
      </>)
    },
    ssd: {
      title: copy.ssdTitle, eyebrow: copy.ssdEyebrow, lede: copy.ssdLede,
      body_en: (<>
        <h2>Social Security disability is complex.</h2>
        <p>The SSA denies roughly 64% of initial claims. That number is not because most applicants are undeserving — it's because the process is adversarial, paperwork-heavy, and unforgiving of small mistakes. Representation meaningfully improves approval odds.</p>
        <h2>What we handle</h2>
        <ul>
          <li>SSDI (Social Security Disability Insurance) applications</li>
          <li>SSI (Supplemental Security Income) applications</li>
          <li>Reapplications after denial</li>
          <li>Administrative Law Judge hearings</li>
          <li>Appeals Council review and federal court appeals</li>
          <li>Concurrent SSDI / SSI claims</li>
        </ul>
        <h2>The hearing</h2>
        <p>If your claim is denied, your case will eventually reach an Administrative Law Judge hearing. You will testify. A vocational expert and a medical expert may also testify. The hearing record is the basis of the judge's decision, and in most cases it is the single most important hour of your case.</p>
        <p>We prepare you thoroughly: what to expect, what questions will be asked, how to answer directly, what documents the judge needs to see. You will not walk into that hearing cold.</p>
        <h2>Our fee</h2>
        <p>SSA regulates attorney fees in SSD cases. Our fee is a percentage of back benefits, capped by federal regulation, and paid only when you win. There is no cost to apply or consult.</p>
      </>),
      body_es: (<>
        <h2>El Seguro Social por incapacidad es complejo.</h2>
        <p>El SSA niega aproximadamente el 64% de los reclamos iniciales. Ese número no es porque la mayoría de los solicitantes no merezcan — es porque el proceso es adversarial, lleno de papeleo, e implacable con errores pequeños. La representación mejora significativamente las probabilidades de aprobación.</p>
        <h2>Lo que manejamos</h2>
        <ul>
          <li>Solicitudes de SSDI (Seguro Social por Incapacidad)</li>
          <li>Solicitudes de SSI (Seguridad de Ingreso Suplementario)</li>
          <li>Re-solicitudes después de una denegación</li>
          <li>Audiencias ante el Juez de Derecho Administrativo</li>
          <li>Revisión del Consejo de Apelaciones y apelaciones en corte federal</li>
          <li>Reclamos concurrentes de SSDI / SSI</li>
        </ul>
        <h2>La audiencia</h2>
        <p>Si su reclamo es denegado, su caso eventualmente llegará a una audiencia ante un Juez Administrativo. Usted testificará. Un experto vocacional y un experto médico también pueden testificar. El registro de la audiencia es la base de la decisión del juez, y en la mayoría de los casos es la hora más importante de su caso.</p>
        <p>Lo preparamos minuciosamente: qué esperar, qué preguntas le harán, cómo responder directamente, qué documentos necesita ver el juez. Usted no entrará a esa audiencia sin preparación.</p>
        <h2>Nuestro honorario</h2>
        <p>El SSA regula los honorarios de abogados en casos de SSD. Nuestro honorario es un porcentaje de los beneficios retroactivos, limitado por regulación federal, y se paga solo cuando usted gana. No hay costo por solicitar o consultar.</p>
      </>)
    }
  };
  const d = info[kind];
  return (
    <>
      <InnerHero eyebrow={d.eyebrow} title={d.title} lede={d.lede} />
      <section className="wl-section">
        <div className="container">
          <div className="wl-practice-layout">
            <SideNav copy={copy} active={kind} onNav={onNav} />
            <div className="prose">{lang === "es" ? d.body_es : d.body_en}</div>
          </div>
        </div>
      </section>
      <ContactBlock copy={copy} />
    </>
  );
}

function PracticeIndex({ copy, onNav }) {
  return (
    <>
      <InnerHero eyebrow={copy.practiceIndexEyebrow} title={copy.practiceIndexTitle} lede={copy.practiceTitle} />
      <PracticeGrid copy={copy} onNav={onNav} />
      <WhyBlock copy={copy} />
    </>
  );
}

function TeamPage({ copy, lang }) {
  const team = window.WREN_TEAM;
  return (
    <>
      <InnerHero eyebrow={copy.teamEyebrow} title={copy.teamTitle} lede={copy.teamLede} />
      <section className="wl-section">
        <div className="container">
          <div className="wl-team-grid">
            {team.map((p, i) => (
              <div className="wl-team-card" key={i}>
                <div className="wl-team-portrait">{p.initials}</div>
                <div className="wl-team-name">{p.name}</div>
                <div className="wl-team-role">{lang === "es" ? p.role_es : p.role_en}</div>
                <div className="wl-team-spec">{lang === "es" ? p.specialty_es : p.specialty_en}</div>
                <a href={`mailto:${p.email}`} className="wl-team-email">{p.email}</a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function AboutPage({ copy }) {
  return (
    <>
      <InnerHero eyebrow={copy.aboutEyebrow} title={copy.aboutTitle} lede={copy.aboutLede} />
      <DanBlock copy={copy} />
      <WhyBlock copy={copy} />
      <Testimonials copy={copy} />
    </>
  );
}

function ContactPage({ copy }) {
  return (
    <>
      <InnerHero eyebrow={copy.contactPageEyebrow} title={copy.contactPageTitle} lede={copy.contactLede} />
      <ContactBlock copy={copy} />
    </>
  );
}

function BlogPage({ copy, lang, onPost }) {
  const posts = window.WREN_POSTS;
  return (
    <>
      <InnerHero eyebrow={copy.blogEyebrow} title={copy.blogTitle} lede={copy.blogLede} />
      <section className="wl-section">
        <div className="container">
          <div className="wl-posts-grid">
            {posts.map((p, i) => (
              <button key={p.slug} className="wl-post-card" onClick={() => onPost(p.slug)}>
                <div className="wl-post-meta">
                  <span>{lang === "es" ? p.cat_es : p.cat_en}</span>
                  <span className="sep">·</span>
                  <span>{lang === "es" ? p.date_es : p.date_en}</span>
                </div>
                <h3>{lang === "es" ? p.title_es : p.title_en}</h3>
                <div className="dek">{lang === "es" ? p.dek_es : p.dek_en}</div>
                <div className="more">{lang === "es" ? "Leer artículo →" : "Read article →"}</div>
              </button>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function BlogPost({ copy, lang, slug, onNav }) {
  const p = window.WREN_POSTS.find(x => x.slug === slug) || window.WREN_POSTS[0];
  return (
    <>
      <InnerHero
        eyebrow={lang === "es" ? p.cat_es : p.cat_en}
        title={lang === "es" ? p.title_es : p.title_en}
        lede={lang === "es" ? p.dek_es : p.dek_en}
      />
      <section className="wl-section">
        <div className="container">
          <div className="wl-practice-layout">
            <aside className="wl-side-nav">
              <h4>{lang === "es" ? "Más artículos" : "More articles"}</h4>
              <ul>
                {window.WREN_POSTS.filter(x => x.slug !== p.slug).slice(0, 5).map(x => (
                  <li key={x.slug}><a href="#" onClick={(e) => { e.preventDefault(); onNav("post:" + x.slug); }}>{lang === "es" ? x.title_es : x.title_en}</a></li>
                ))}
              </ul>
            </aside>
            <div className="prose">
              <p style={{ fontSize: 19, color: "var(--navy)", fontFamily: "var(--font-display)", fontStyle: "italic", fontWeight: 400 }}>
                {lang === "es" ? p.dek_es : p.dek_en}
              </p>
              <p>{lang === "es"
                ? "Este es un artículo informativo general escrito por Wren Law Firm. No constituye asesoramiento legal específico para su situación. Si usted ha sido lesionado, llámenos directamente y podemos hablar sobre su caso."
                : "This is a general informational article written by Wren Law Firm. It does not constitute specific legal advice for your situation. If you have been injured, call us directly and we can talk about your case."}
              </p>
              <h2>{lang === "es" ? "Qué hacer primero" : "What to do first"}</h2>
              <p>{lang === "es"
                ? "Lo primero y más importante: obtenga atención médica. Su salud es más importante que su caso. Todo lo demás se puede manejar después."
                : "The first and most important thing: get medical attention. Your health matters more than your case. Everything else can be managed afterward."}
              </p>
              <p>{lang === "es"
                ? "Una vez que esté estable, los próximos pasos importan. Documentación, comunicación cuidadosa con las aseguradoras, y preservación de evidencia pueden todos afectar el resultado de un reclamo de manera que no es obvia en el momento."
                : "Once you are stable, the next steps matter. Documentation, careful communication with insurance carriers, and preservation of evidence can all affect the outcome of a claim in ways that are not obvious in the moment."}
              </p>
              <h2>{lang === "es" ? "Por qué esto importa" : "Why this matters"}</h2>
              <p>{lang === "es"
                ? "Arkansas sigue un sistema de culpa comparativa modificada. Esto significa que si usted tiene parte de la culpa, su recuperación se reduce por ese porcentaje — y si es más del 50%, usted no recupera nada. Pequeños detalles sobre cómo se documenta un accidente pueden mover ese número de manera significativa."
                : "Arkansas follows a modified comparative fault system. This means if you are partly at fault, your recovery is reduced by that percentage — and if you are more than 50% at fault, you recover nothing. Small details about how an accident is documented can move that number significantly."}
              </p>
              <h2>{lang === "es" ? "Cuándo llamarnos" : "When to call us"}</h2>
              <p>{lang === "es"
                ? "Si fue lesionado por negligencia de otra persona, llámenos. La primera consulta es gratuita. Nuestra línea se contesta 24 horas al día, 7 días a la semana."
                : "If you've been injured by someone else's negligence, call us. The first consultation is free. Our line is answered 24 hours a day, 7 days a week."}
              </p>
              <hr className="hairline" style={{ margin: "32px 0" }} />
              <p style={{ fontSize: 14, color: "var(--ink-3)", fontStyle: "italic" }}>
                {lang === "es" ? "Publicado " : "Published "}{lang === "es" ? p.date_es : p.date_en} · Wren Law Firm
              </p>
            </div>
          </div>
        </div>
      </section>
      <ContactBlock copy={copy} />
    </>
  );
}

function LegalPage({ copy, kind, lang }) {
  const title = kind === "privacy" ? copy.privacyTitle : copy.termsTitle;
  return (
    <>
      <InnerHero
        eyebrow={lang === "es" ? "Legal" : "Legal"}
        title={title}
        lede={lang === "es"
          ? "Información legal sobre el uso de este sitio web."
          : "Legal information about the use of this website."}
      />
      <section className="wl-section">
        <div className="container-reading">
          <div className="prose">
            {kind === "privacy" ? (lang === "es" ? (<>
              <p><strong>Última actualización:</strong> 23 de abril de 2026.</p>
              <h2>Información que recopilamos</h2>
              <p>Wren Law Firm recopila información que usted proporciona voluntariamente a través del formulario de consulta — nombre, teléfono, correo electrónico, y una breve descripción de su asunto. También registramos datos técnicos básicos (dirección IP, tipo de navegador) para operar el sitio.</p>
              <h2>Cómo usamos su información</h2>
              <p>Usamos su información únicamente para responder a su consulta y, si procedemos, para representarlo. No vendemos ni alquilamos su información a terceros.</p>
              <h2>Cookies y seguimiento</h2>
              <p>Este sitio usa cookies técnicas necesarias para su funcionamiento. No usamos cookies de seguimiento publicitario ni píxeles de terceros.</p>
              <h2>Seguridad</h2>
              <p>Tomamos medidas razonables para proteger la información que nos envía. Sin embargo, ninguna transmisión por internet es completamente segura.</p>
              <h2>Contáctenos</h2>
              <p>Si tiene preguntas sobre esta política, escriba a info@wrenlawfirm.com.</p>
            </>) : (<>
              <p><strong>Last updated:</strong> April 23, 2026.</p>
              <h2>Information we collect</h2>
              <p>Wren Law Firm collects information you voluntarily provide through the consultation form — name, phone, email, and a brief description of your matter. We also log basic technical data (IP address, browser type) to operate the site.</p>
              <h2>How we use your information</h2>
              <p>We use your information solely to respond to your inquiry and, if engaged, to represent you. We do not sell or rent your information to third parties.</p>
              <h2>Cookies and tracking</h2>
              <p>This site uses technical cookies necessary for its operation. We do not use third-party advertising-tracking cookies or pixels.</p>
              <h2>Security</h2>
              <p>We take reasonable measures to protect information you send us. However, no internet transmission is completely secure.</p>
              <h2>Contact us</h2>
              <p>If you have questions about this policy, email info@wrenlawfirm.com.</p>
            </>)) : (lang === "es" ? (<>
              <p><strong>Última actualización:</strong> 23 de abril de 2026.</p>
              <h2>Aceptación de términos</h2>
              <p>Al usar wrenlawfirm.com, usted acepta estos términos. Si no está de acuerdo, por favor no use el sitio.</p>
              <h2>No es asesoramiento legal</h2>
              <p>La información en este sitio es solo para propósitos informativos generales. No constituye asesoramiento legal ni crea una relación abogado-cliente. Los resultados legales dependen de los hechos específicos de cada caso.</p>
              <h2>Sin garantías</h2>
              <p>Resultados anteriores no garantizan un resultado similar. Los testimonios publicados no son una garantía del resultado de su caso.</p>
              <h2>Comunicación</h2>
              <p>Enviar el formulario de consulta o enviar un correo electrónico no crea una relación abogado-cliente. Una relación abogado-cliente se forma solo después de un acuerdo escrito de representación.</p>
              <h2>Jurisdicción</h2>
              <p>Estos términos se rigen por las leyes del Estado de Arkansas.</p>
            </>) : (<>
              <p><strong>Last updated:</strong> April 23, 2026.</p>
              <h2>Acceptance of terms</h2>
              <p>By using wrenlawfirm.com, you agree to these terms. If you do not agree, please do not use the site.</p>
              <h2>Not legal advice</h2>
              <p>Information on this site is for general informational purposes only. It does not constitute legal advice and does not create an attorney-client relationship. Legal outcomes depend on the specific facts of each case.</p>
              <h2>No guarantees</h2>
              <p>Prior results do not guarantee a similar outcome. Published testimonials are not a guarantee of the outcome of your case.</p>
              <h2>Communication</h2>
              <p>Submitting the consultation form or sending an email does not create an attorney-client relationship. An attorney-client relationship forms only after a written engagement agreement.</p>
              <h2>Jurisdiction</h2>
              <p>These terms are governed by the laws of the State of Arkansas.</p>
            </>))}
          </div>
        </div>
      </section>
    </>
  );
}

Object.assign(window, {
  HomePage, PracticeDetail, PracticeIndex, TeamPage, AboutPage,
  ContactPage, BlogPage, BlogPost, LegalPage, InnerHero, ContactBlock
});
