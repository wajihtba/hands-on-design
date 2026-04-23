// Final CTA + footer — i18n-driven, matches real Hands-On copy.
function CtaFooter() {
  const { t } = window.useI18n();
  const cta = t('cta');
  const f   = t('footer');

  return (
    <>
      <section className="cta-section">
        <div className="container cta-inner">
          <span className="mono small eyebrow">{cta.eyebrow}</span>
          <h2 className="h2 cta-h">
            {cta.h2_1}<br />
            <span className="h2-accent">{cta.h2_2}</span>
          </h2>
          <p className="section-lede">{cta.lede}</p>
          <div className="cta-buttons">
            <a href="#" className="btn btn-primary btn-lg">
              <span>{cta.button}</span>
              <svg className="btn-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
            </a>
          </div>
          <div className="cta-micro mono small">{cta.micro}</div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-inner">
          <div className="footer-brand">
            <Logo style={{ width: 160, height: 'auto' }} />
            <p className="footer-tag mono small">{f.tag}</p>
          </div>
          <div className="footer-cols">
            <div>
              <div className="footer-h mono small">{f.productH}</div>
              {f.product.map((l, i) => <a key={i} href="#">{l}</a>)}
            </div>
            <div>
              <div className="footer-h mono small">{f.companyH}</div>
              {f.company.map((l, i) => <a key={i} href={i === f.company.length - 1 ? 'mailto:hello@handson.dev' : '#'}>{l}</a>)}
            </div>
            <div>
              <div className="footer-h mono small">{f.legalH}</div>
              {f.legal.map((l, i) => <a key={i} href="#">{l}</a>)}
            </div>
          </div>
        </div>
        <div className="container footer-bottom mono small">
          <span>{f.copy}</span>
          <a href="mailto:hello@handson.dev" className="footer-email">{f.by}</a>
        </div>
      </footer>
    </>
  );
}

window.CtaFooter = CtaFooter;
