// Learning tracks grid
function Tracks() {
  const tracks = [
    {
      id: '01',
      cat: 'Backend',
      title: 'Systèmes distribués',
      body: 'Systèmes distribués, queues, caches, bases de données from scratch. Apprenez les internals qui font tourner l\u2019échelle.',
      weeks: 16, projects: 24, level: 'Avancé',
    },
    {
      id: '02',
      cat: 'Infrastructure',
      title: 'Platform Engineering',
      body: 'Kubernetes, Terraform, pipelines CI/CD. Shippez de l\u2019infrastructure as code et gérez la prod à grande échelle.',
      weeks: 12, projects: 18, level: 'Intermédiaire',
    },
    {
      id: '03',
      cat: 'Frontend',
      title: 'Product Engineering',
      body: 'React, TypeScript, performance et architecture. Construisez des interfaces que les utilisateurs aiment.',
      weeks: 12, projects: 20, level: 'Intermédiaire',
    },
    {
      id: '04',
      cat: 'Data',
      title: 'Data Engineering',
      body: 'Pipelines, entrepôts, streaming. Bâtissez l\u2019infra qui transforme les events bruts en insights business.',
      weeks: 14, projects: 16, level: 'Intermédiaire',
    },
    {
      id: '05',
      cat: 'Security',
      title: 'Security Engineering',
      body: 'Threat modeling, architecture sécurisée, pen-testing. Shippez du code qui ne fait pas la une des journaux.',
      weeks: 10, projects: 14, level: 'Avancé',
    },
    {
      id: '06',
      cat: 'IA',
      title: 'ML Engineering',
      body: 'Pipelines d\u2019entraînement, infrastructure de serving. Des systèmes d\u2019IA end-to-end en production.',
      weeks: 16, projects: 22, level: 'Avancé',
    },
  ];

  return (
    <section id="tracks" className="tracks-section">
      <div className="container">
        <div className="section-head">
          <span className="mono small eyebrow">// Tracks d'apprentissage</span>
          <h2 className="h2">
            Choisissez votre stack.<br />
            <span className="h2-accent">Construisez tout.</span>
          </h2>
          <p className="section-lede">
            Six tracks pensés avec des ingénieurs d'équipes tech reconnues.
            Choisissez un chemin, puis maîtrisez-le.
          </p>
        </div>

        <div className="tracks-grid">
          {tracks.map((t) => (
            <article key={t.id} className="track-card">
              <div className="track-head">
                <span className="mono small track-id">Track {t.id} / {t.cat}</span>
                <span className="track-arrow" aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7M8 7h9v9"/></svg>
                </span>
              </div>
              <h3 className="track-title">{t.title}</h3>
              <p className="track-body">{t.body}</p>
              <div className="track-meta mono small">
                <div><span className="meta-k">Durée</span><span className="meta-v">{t.weeks} sem.</span></div>
                <div><span className="meta-k">Projets</span><span className="meta-v">{t.projects}</span></div>
                <div><span className="meta-k">Niveau</span><span className="meta-v">{t.level}</span></div>
              </div>
              <span className="track-index-pill">[ {t.id} / 06 ]</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

window.Tracks = Tracks;
