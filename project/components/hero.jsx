// Hero — real Hands-On content: PostgreSQL Performance lab on the right,
// i18n-driven copy on the left. No Terraform / K8s vocabulary.
const { useState: useHeState, useEffect: useHeEffect } = React;

function Hero() {
  const { t, lang } = window.useI18n();
  const stats = t('hero.stats');
  const lab   = t('hero.lab');

  return (
    <section className="hero">
      <div className="hero-bg" aria-hidden="true" />
      <div className="hero-inner container">
        <div className="hero-grid-layout">
          <div className="hero-left">
            <div className="hero-eyebrow">
              <span className="tag-dot" />
              <span className="mono small">{t('hero.eyebrow')}</span>
            </div>

            <h1 className="display">
              {t('hero.h1_1')}<br />
              <span className="display-accent">{t('hero.h1_2')}</span>
            </h1>

            <p className="hero-lede">{t('hero.lede')}</p>

            <div className="hero-cta">
              <Magnetic>
                <a href="#labs" className="btn btn-primary">
                  <span>{t('hero.cta_primary')}</span>
                  <svg className="btn-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
                </a>
              </Magnetic>
              <Magnetic>
                <a href="#method" className="btn btn-ghost">
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
                  <span>{t('hero.cta_secondary')}</span>
                </a>
              </Magnetic>
            </div>

            <div className="hero-stats">
              {Array.isArray(stats) && stats.map((s, i) => (
                <Stat key={i} n={s.n} l={s.l} />
              ))}
            </div>
          </div>

          <div className="hero-right">
            <LabPanel t={t} lab={lab} lang={lang} />
          </div>
        </div>
      </div>
    </section>
  );
}

function LabPanel({ t, lab, lang }) {
  const [view, setView] = useHeState('editor'); // editor | results

  return (
    <div className="lab-panel">
      {/* Lab header — title + progress */}
      <div className="lab-header">
        <div className="lab-header-left">
          <div className="lab-kicker mono small">{lab.kicker}</div>
          <div className="lab-title">{lab.title}</div>
        </div>
        <div className="lab-progress mono small">
          <span className="lab-progress-num">{lab.progress}</span>
          <span className="lab-progress-label">STEPS</span>
        </div>
      </div>

      {/* Step strip */}
      <div className="lab-step">
        <span className="lab-step-dot" />
        <span className="lab-step-text">{lab.step_active}</span>
      </div>

      {/* Editor tabs */}
      <div className="lab-bar">
        <div className="lab-bar-left">
          <span className="dot red" />
          <span className="dot yellow" />
          <span className="dot green" />
        </div>
        <div className="lab-tabs mono small" dir="ltr">
          <span
            className={'lab-tab' + (view === 'editor' ? ' is-active' : '')}
            onClick={() => setView('editor')}
          >{lab.filename}</span>
          <span
            className={'lab-tab' + (view === 'results' ? ' is-active' : '')}
            onClick={() => setView('results')}
          >{lab.results}</span>
        </div>
        <span className="lab-badge mono small"><span className="lab-badge-dot" /> PGlite</span>
      </div>

      <div className="lab-body">
        {view === 'editor' ? (
          <div className="lab-editor mono" dir="ltr">
            <div className="code-line"><span className="ln">1</span><span className="kw">SELECT</span> <span className="vr">c</span>.<span className="vr">name</span>,</div>
            <div className="code-line"><span className="ln">2</span>       <span className="vr">c</span>.<span className="vr">plan</span>,</div>
            <div className="code-line"><span className="ln">3</span>       <span className="fn">COUNT</span>(<span className="vr">o</span>.<span className="vr">id</span>) <span className="kw">AS</span> <span className="vr">orders</span>,</div>
            <div className="code-line"><span className="ln">4</span>       <span className="fn">SUM</span>(<span className="vr">oi</span>.<span className="vr">price</span> * <span className="vr">oi</span>.<span className="vr">qty</span>) <span className="kw">AS</span> <span className="vr">revenue</span></div>
            <div className="code-line"><span className="ln">5</span><span className="kw">FROM</span>   <span className="vr">customers</span>   <span className="vr">c</span></div>
            <div className="code-line"><span className="ln">6</span><span className="kw">JOIN</span>   <span className="vr">orders</span>      <span className="vr">o</span>  <span className="kw">ON</span> <span className="vr">o</span>.<span className="vr">customer_id</span> = <span className="vr">c</span>.<span className="vr">id</span></div>
            <div className="code-line"><span className="ln">7</span><span className="kw">JOIN</span>   <span className="vr">order_items</span> <span className="vr">oi</span> <span className="kw">ON</span> <span className="vr">oi</span>.<span className="vr">order_id</span> = <span className="vr">o</span>.<span className="vr">id</span></div>
            <div className="code-line"><span className="ln">8</span><span className="kw">JOIN</span>   <span className="vr">products</span>    <span className="vr">p</span>  <span className="kw">ON</span> <span className="vr">p</span>.<span className="vr">id</span> = <span className="vr">oi</span>.<span className="vr">product_id</span></div>
            <div className="code-line"><span className="ln">9</span><span className="kw">WHERE</span>  <span className="vr">o</span>.<span className="vr">status</span> = <span className="str">'completed'</span></div>
            <div className="code-line"><span className="ln">10</span><span className="kw">GROUP BY</span> <span className="vr">c</span>.<span className="vr">id</span></div>
            <div className="code-line"><span className="ln">11</span><span className="kw">ORDER BY</span> <span className="vr">revenue</span> <span className="kw">DESC</span></div>
            <div className="code-line"><span className="ln">12</span><span className="kw">LIMIT</span>  <span className="num">6</span>;<span className="cursor">▌</span></div>
          </div>
        ) : (
          <div className="lab-results" dir="ltr">
            <div className="lab-results-meta mono small">{lab.meta}</div>
            <table className="lab-table mono small">
              <thead>
                <tr>
                  {lab.cols.map((c, i) => <th key={i}>{c}</th>)}
                </tr>
              </thead>
              <tbody>
                {lab.rows.map((row, i) => (
                  <tr key={i}>
                    {row.map((cell, j) => (
                      <td key={j} className={j === 3 ? 'num-col' : ''}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Description footer */}
      <div className="lab-desc">
        {lab.description}
      </div>

      {/* Mark complete CTA */}
      <div className="lab-foot">
        <button className="lab-mark" type="button">
          <span>{lab.mark}</span>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
        </button>
      </div>
    </div>
  );
}

function Stat({ n, l }) {
  return (
    <div className="stat">
      <div className="stat-n">{n}</div>
      <div className="stat-l mono small">{l}</div>
    </div>
  );
}

window.Hero = Hero;
