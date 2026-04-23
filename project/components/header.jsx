// Sticky header with logo + nav + language switcher + theme toggle.
const { useState: useHState, useEffect: useHEffect } = React;

function Header() {
  const { t, lang, setLang } = window.useI18n();
  const [scrolled, setScrolled] = useHState(false);
  const [open, setOpen] = useHState(false);
  const [theme, setTheme] = useHState(() => document.documentElement.getAttribute('data-theme') || 'ink');

  useHEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    const mo = new MutationObserver(() => {
      const t = document.documentElement.getAttribute('data-theme') || 'ink';
      setTheme(t);
    });
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
    return () => { window.removeEventListener('scroll', onScroll); mo.disconnect(); };
  }, []);

  useHEffect(() => {
    document.documentElement.style.overflow = open ? 'hidden' : '';
    return () => { document.documentElement.style.overflow = ''; };
  }, [open]);

  const toggleTheme = () => {
    const isLight = theme === 'lavande';
    const next = isLight ? 'ink' : 'lavande';
    document.documentElement.setAttribute('data-theme', next);
    setTheme(next);
    try { window.parent.postMessage({ type: '__edit_mode_set_keys', edits: { theme: next } }, '*'); } catch (e) {}
  };

  const isLight = theme === 'lavande';
  const close = () => setOpen(false);
  const langs = [
    { k: 'en', l: 'EN' },
    { k: 'fr', l: 'FR' },
    { k: 'ar', l: 'ع' },
  ];

  return (
    <>
    <header className={'site-header' + (scrolled ? ' is-scrolled' : '')}>
      <div className="container header-inner">
        <a href="#" className="logo-link" aria-label="Hands-On">
          <Logo />
        </a>
        <nav className="nav" aria-label="Primary">
          <a href="#labs">{t('nav.labs')}</a>
          <a href="#method">{t('nav.method')}</a>
          <a href="#longrun">{t('nav.about')}</a>
        </nav>
        <div className="header-right">
          <div className="lang mono small">
            {langs.map((L, i) => (
              <React.Fragment key={L.k}>
                {i > 0 && <span className="lang-sep">·</span>}
                <button
                  type="button"
                  className={'lang-btn' + (lang === L.k ? ' is-active' : '')}
                  onClick={() => setLang(L.k)}
                  aria-label={L.l}
                >{L.l}</button>
              </React.Fragment>
            ))}
          </div>
          <button
            type="button"
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={isLight ? 'Dark mode' : 'Light mode'}
            title={isLight ? 'Dark mode' : 'Light mode'}
          >
            {isLight ? (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>
            )}
          </button>
          <a href="#" className="btn btn-sm btn-ghost header-signin">{t('header.signin')}</a>
          <a href="#" className="btn btn-sm btn-primary header-cta">
            <span>{t('header.cta')}</span>
            <svg className="btn-arrow" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
          </a>
          <button
            type="button"
            className={'nav-burger' + (open ? ' is-open' : '')}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span /><span /><span />
          </button>
        </div>
      </div>
    </header>
    <div className={'mobile-menu' + (open ? ' is-open' : '')} aria-hidden={!open}>
      <nav className="mobile-nav" aria-label="Mobile">
        <a href="#labs" onClick={close}><span className="mono small">01</span><span>{t('nav.labs')}</span></a>
        <a href="#method" onClick={close}><span className="mono small">02</span><span>{t('nav.method')}</span></a>
        <a href="#longrun" onClick={close}><span className="mono small">03</span><span>{t('nav.about')}</span></a>
      </nav>
      <div className="mobile-menu-foot">
        <a href="#" className="btn btn-ghost" onClick={close}>{t('header.signin')}</a>
        <a href="#" className="btn btn-primary" onClick={close}>
          <span>{t('header.cta')}</span>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
        </a>
      </div>
      <div className="mobile-menu-lang mono small">
        {langs.map((L, i) => (
          <React.Fragment key={L.k}>
            {i > 0 && <span className="lang-sep">·</span>}
            <button
              type="button"
              className={'lang-btn' + (lang === L.k ? ' is-active' : '')}
              onClick={() => { setLang(L.k); close(); }}
            >{L.l}</button>
          </React.Fragment>
        ))}
      </div>
    </div>
    </>
  );
}

window.Header = Header;
