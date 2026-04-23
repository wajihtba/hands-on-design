// "6 months to [rotating word] is a myth." — with 3 format cards below.
// Replaces the previous "Méthode" section with the inspiration's real copy.

const { useState: useMeState, useEffect: useMeEffect } = React;

function Method() {
  const { t, lang } = window.useI18n();
  const words = t('myth.rotating') || [];
  const cards = t('myth.cards') || [];
  const [idx, setIdx] = useMeState(0);

  useMeEffect(() => {
    if (!words.length) return;
    const id = setInterval(() => setIdx((i) => (i + 1) % words.length), 2200);
    return () => clearInterval(id);
  }, [words.length]);

  return (
    <section id="method" className="myth-section">
      <div className="container">
        <div className="section-head">
          <span className="mono small eyebrow">{t('myth.eyebrow')}</span>
          <h2 className="h2 myth-headline">
            <span>{t('myth.pre')} </span>
            <span className="myth-word-wrap">
              {words.map((w, i) => (
                <span
                  key={i}
                  className={'myth-word' + (i === idx ? ' is-active' : '')}
                  aria-hidden={i !== idx}
                >{w}</span>
              ))}
            </span>
            <br />
            <span className="h2-accent">{t('myth.post')}</span>
          </h2>
          <p className="section-lede">{t('myth.lede')}</p>
        </div>

        <div className="myth-grid">
          {cards.map((c, i) => (
            <article key={i} className="myth-card">
              <div className="myth-num mono">[ 0{i + 1} ]</div>
              <h3 className="myth-card-title">{c.title}</h3>
              <p className="myth-card-body">{c.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

window.Method = Method;
