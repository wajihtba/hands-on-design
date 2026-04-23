// Lab status strip — replaces the tech-stack marquee.
// Presents the platform as a live system: current regions, latency, uptime,
// mentor presence. Columns rotate subtly so it feels alive without scrolling.

const { useState: useLSState, useEffect: useLSEffect } = React;

function Marquee() {
  const [tick, setTick] = useLSState(0);

  useLSEffect(() => {
    const id = setInterval(() => setTick((t) => t + 1), 2400);
    return () => clearInterval(id);
  }, []);

  // Small numeric jitter so a few cells "feel" live
  const jit = (base, spread, i) => {
    const seed = (tick + i * 7) % 5;
    return +(base + (seed - 2) * spread).toFixed(base < 10 ? 2 : 0);
  };

  const cells = [
    { label: 'REGION',  value: 'eu-west-3',        sub: 'paris · zone-a' },
    { label: 'UPTIME',  value: '99.98%',           sub: 'last 90 days' },
    { label: 'LATENCY', value: `${jit(42, 2, 0)}ms`, sub: 'p99 runner', live: true },
    { label: 'LABS',    value: '142',              sub: 'production-grade' },
    { label: 'MENTORS', value: `${jit(27, 2, 1)} online`, sub: 'avg reply 14m', live: true },
    { label: 'STACK',   value: 'k8s · rust · pg',  sub: 'reviewed weekly' },
  ];

  return (
    <section className="status-strip" aria-label="État de la plateforme">
      <div className="container status-inner">
        <div className="status-lead mono small">
          <span className="status-pulse" />
          <span>LIVE · plateforme</span>
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
