// Tech-stack pills — "Labs for every stack"
// Replaces the off-brand server-metrics strip.
// Marquee of chips: Frontend, React, SQL, Node.js, Terminal, Linux, Docker, Python, Go, TypeScript
// Direction flips in RTL automatically via dir inheritance; animation kept LTR for the tech names.

function Marquee() {
  const { t } = window.useI18n();
  const pills = t('stack.pills') || [];
  const row = [...pills, ...pills];

  return (
    <section className="stack-strip" aria-label={t('stack.eyebrow')}>
      <div className="container stack-head">
        <span className="mono small eyebrow">{t('stack.eyebrow')}</span>
      </div>
      <div className="stack-marquee" dir="ltr">
        <div className="stack-track">
          {row.map((p, i) => (
            <span key={i} className="stack-pill">
              <span className="stack-pill-dot" />
              <span className="mono">{p}</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

window.Marquee = Marquee;
