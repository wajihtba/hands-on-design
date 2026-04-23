// "Built for the long run" — comparison list (short-term vs long-term).
// Replaces the previous Tracks section. Uses window.Tracks name for drop-in compatibility.

function Tracks() {
  const { t } = window.useI18n();
  const rows = t('longRun.rows') || [];

  return (
    <section id="longrun" className="longrun-section">
      <div className="container">
        <div className="section-head">
          <span className="mono small eyebrow">{t('longRun.eyebrow')}</span>
          <h2 className="h2">
            {t('longRun.h2_1')}<br />
            <span className="h2-accent">{t('longRun.h2_2')}</span>
          </h2>
          <p className="section-lede">{t('longRun.lede')}</p>
        </div>

        <div className="longrun-compare">
          <div className="longrun-head mono small">
            <div className="longrun-head-l">{t('longRun.left')}</div>
            <div className="longrun-head-r">{t('longRun.right')}</div>
          </div>
          {rows.map((r, i) => (
            <div key={i} className="longrun-row">
              <div className="longrun-cell longrun-bad">
                <span className="longrun-icon longrun-icon-x" aria-hidden="true">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>
                </span>
                <span className="longrun-text">{r.bad}</span>
              </div>
              <div className="longrun-cell longrun-good">
                <span className="longrun-icon longrun-icon-check" aria-hidden="true">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12l5 5L20 6"/></svg>
                </span>
                <span className="longrun-text">{r.good}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

window.Tracks = Tracks;
