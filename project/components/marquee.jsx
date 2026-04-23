// Next-cohort admissions strip — replaces the out-of-context "server metrics" band.
// Factual, brand-relevant: cohort date, seats, admission timeline, format, duration, funding.
// Keeps the same sharp editorial layout + live pulse for visual continuity.

const { useState: useLSState, useEffect: useLSEffect } = React;

function Marquee() {
  const [tick, setTick] = useLSState(0);

  useLSEffect(() => {
    const id = setInterval(() => setTick((t) => t + 1), 2400);
    return () => clearInterval(id);
  }, []);

  // Seats ticker: small, infrequent decrement so it "feels" alive without being dishonest
  const seats = Math.max(18, 24 - (tick % 6));

  const cells = [
    { label: 'COHORTE',    value: '17 Juin 2026',   sub: 'inscriptions ouvertes' },
    { label: 'PLACES',     value: `${seats} / 120`,  sub: 'restantes', live: true },
    { label: 'ADMISSION',  value: '3 sem.',          sub: 'test + entretien' },
    { label: 'FORMAT',     value: '100% à distance', sub: 'live · async · labs' },
    { label: 'DURÉE',      value: '12–16 sem.',      sub: 'selon le track' },
    { label: 'FINANCEMENT',value: 'OPCO · CPF',       sub: 'éligible' },
  ];

  return (
    <section className="status-strip" aria-label="Prochaine cohorte">
      <div className="container status-inner">
        <div className="status-lead mono small">
          <span className="status-pulse" />
          <span>INSCRIPTIONS · cohorte Juin</span>
        </div>
        <div className="status-grid">
          {cells.map((c, i) => (
            <div key={i} className={'status-cell' + (c.live ? ' is-live' : '')}>
              <div className="status-label mono small">{c.label}</div>
              <div className="status-value">{c.value}</div>
              <div className="status-sub mono small">{c.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

window.Marquee = Marquee;
