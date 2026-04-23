// Commit-log style testimonials
function Stories() {
  const stories = [
    {
      hash: 'a3f9c21', author: 'maya.chen', when: 'il y a 3 mois',
      quote: "Six mois chez Hands-On et j'avais un portfolio de system design qui m'a permis de décrocher 4 offres senior. La culture de code review à elle seule vaut l'investissement — j'ai appris plus en une semaine de feedback qu'en un an de bootcamp.",
      who: 'Maya Chen', role: 'Senior SWE', initials: 'MC',
    },
    {
      hash: '7b2d891', author: 'alex.kovacs', when: 'il y a 5 mois',
      quote: "Le track Platform Engineering m'a fait arrêter d'avoir peur de l'infra. J'ai déployé mon premier cluster k8s en prod en semaine deux. C'était flippant. Ça a marché. J'ai eu 40% d'augmentation.",
      who: 'Alex Kovacs', role: 'Platform Engineer', initials: 'AK',
    },
    {
      hash: 'c5e1047', author: 'priya.narayan', when: 'il y a 7 mois',
      quote: "Je venais d'un background CRUD. Le track Systèmes m'a retourné le cerveau dans le bon sens. Je conçois maintenant des systèmes distribués au quotidien dans une équipe qui construit de l'infra pour 80M d'utilisateurs.",
      who: 'Priya Narayan', role: 'Staff Engineer', initials: 'PN',
    },
  ];

  return (
    <section id="stories" className="stories-section">
      <div className="container">
        <div className="section-head">
          <span className="mono small eyebrow">// Commit Log</span>
          <h2 className="h2">
            Les ingénieurs<br />
            <span className="h2-accent">qui ont shippé.</span>
          </h2>
          <p className="section-lede">
            Ne nous croyez pas sur parole. Lisez les messages de commit
            d'ingénieurs qui sont passés de coincés à shipping en production.
          </p>
        </div>

        <div className="stories-list">
          {stories.map((s) => (
            <article key={s.hash} className="story-card">
              <div className="story-meta mono small">
                <span className="story-hash">{s.hash}</span>
                <span className="story-sep">·</span>
                <span>{s.author}</span>
                <span className="story-sep">·</span>
                <span className="story-when">{s.when}</span>
              </div>
              <blockquote className="story-quote">
                <span className="story-mark">"</span>{s.quote}
              </blockquote>
              <div className="story-author">
                <div className="avatar">{s.initials}</div>
                <div>
                  <div className="author-name">{s.who}</div>
                  <div className="author-role mono small">{s.role}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

window.Stories = Stories;
