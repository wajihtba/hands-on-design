// Method section — how it works
function Method() {
  const steps = [
    {
      n: '01',
      title: 'Codebases de production,\ndès le J1',
      body: 'Pas de to-do apps. Vous clonez, lisez et shippez sur de vrais dépôts — même dette technique, même tooling, même CI.',
    },
    {
      n: '02',
      title: 'Revue de code\npar des seniors',
      body: 'Chaque PR est relue ligne par ligne par un ingénieur en poste. Le commentaire remplace le cours magistral.',
    },
    {
      n: '03',
      title: 'Mentorat\nasynchrone',
      body: 'Des experts dans votre flow, pas dans votre agenda. Feedback structuré sous 24h — jamais de Zoom obligatoire.',
    },
    {
      n: '04',
      title: 'Portfolio\nqui tourne en prod',
      body: 'Chaque projet est public, déployé, monitoré. Votre GitHub devient un CV que les recruteurs peuvent cloner.',
    },
    {
      n: '05',
      title: 'Signal mesurable\npour l\u2019embauche',
      body: 'Vélocité, qualité de code, résolution d\u2019incidents : des métriques, pas des badges. Les hiring managers voient du travail, pas un diplôme.',
    },
  ];

  return (
    <section id="methode" className="method-section">
      <div className="container">
        <div className="section-head">
          <span className="mono small eyebrow">// 02 — La méthode</span>
          <h2 className="h2">
            On n'enseigne pas<br />
            <span className="h2-accent">le métier. On le fait.</span>
          </h2>
          <p className="section-lede">
            Pendant que d'autres écoles alignent des slides, vous poussez du
            code en revue. Notre pipeline reproduit le cycle réel d'une équipe
            produit — du ticket au déploiement — avec l'infra et les mentors
            qui vont avec.
          </p>
        </div>

        <div className="method-panel">
          <div className="lab-bar">
            <div className="lab-bar-left">
              <span className="dot red" />
              <span className="dot yellow" />
              <span className="dot green" />
            </div>
            <div className="lab-tabs mono small">
              <span className="lab-tab is-active">onboarding.ts</span>
              <span className="lab-tab">pipeline.yml</span>
              <span className="lab-tab">mentor.md</span>
            </div>
            <span className="lab-badge mono small"><span className="lab-badge-dot" /> day 01</span>
          </div>
          <div className="lab-editor mono method-editor">
            <div className="code-line"><span className="ln">1</span><span className="cm">// Votre J1 ressemble à ça — pas à un cours.</span></div>
            <div className="code-line"><span className="ln">2</span><span className="kw">async function</span> <span className="fn">onboard</span>(<span className="vr">engineer</span>) {'{'}</div>
            <div className="code-line"><span className="ln">3</span>  <span className="kw">const</span> <span className="vr">repo</span> = <span className="kw">await</span> <span className="fn">clone</span>(<span className="str">"prod/api-gateway"</span>)</div>
            <div className="code-line"><span className="ln">4</span>  <span className="kw">const</span> <span className="vr">task</span> = <span className="fn">assignIssue</span>(<span className="vr">engineer</span>, <span className="str">"first-pr"</span>)</div>
            <div className="code-line"><span className="ln">5</span>  <span className="kw">const</span> <span className="vr">review</span> = <span className="kw">await</span> <span className="fn">mentorReview</span>(<span className="vr">task</span>)</div>
            <div className="code-line"><span className="ln">6</span>  <span className="kw">return</span> <span className="fn">ship</span>(<span className="vr">review</span>) <span className="cm">// en prod, pas en staging</span></div>
            <div className="code-line"><span className="ln">7</span>{'}'}</div>
          </div>
        </div>

        <div className="method-grid">
          {steps.map((s) => (
            <article key={s.n} className="method-card">
              <div className="method-num mono">[ {s.n} ]</div>
              <h3 className="method-title">{s.title}</h3>
              <p className="method-body">{s.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

window.Method = Method;
