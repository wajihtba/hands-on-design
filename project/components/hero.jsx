// Hero — no animations on content; just typed terminal.
const { useState, useEffect } = React;

function Hero() {
  const [typedLine, setTypedLine] = useState('');
  const fullLine = 'terraform apply --auto-approve';
  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      i++;
      setTypedLine(fullLine.slice(0, i));
      if (i >= fullLine.length) clearInterval(id);
    }, 32);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="hero">
      <div className="hero-bg" aria-hidden="true" />
      <pre className="hero-code" aria-hidden="true" dangerouslySetInnerHTML={{__html: `$ <span class="c-k">kubectl</span> apply -f lab-142.yaml
<span class="c-c"># deployment.apps/runner configured</span>
<span class="c-c"># service/mentor-bridge created</span>
$ <span class="c-k">docker</span> compose up -d
<span class="c-c">  ✓ sandbox       Started</span>
<span class="c-c">  ✓ db-postgres   Healthy</span>
<span class="c-c">  ✓ runner        Ready</span>
$ <span class="c-k">lab</span> status --all
<span class="c-c">  uptime   99.98%</span>
<span class="c-c">  region   eu-west-3</span>`}} />
      <span className="hero-coord tl" aria-hidden="true">LAB.142 · v4.2</span>
      <span className="hero-coord tr" aria-hidden="true">eu-west-3 / zone-a</span>
      <span className="hero-coord bl" aria-hidden="true">uptime 99.98%</span>
      <span className="hero-coord br" aria-hidden="true">● runtime ready</span>
      <div className="hero-inner container">
        <div className="hero-grid-layout">
          <div className="hero-left">
            <div className="hero-eyebrow">
              <span className="tag-dot" />
              <span className="mono small">// Engineering Education, Reimagined</span>
            </div>

            <h1 className="display">
              Devenez<br />
              <span className="display-accent">ingénieur logiciel.</span>
            </h1>

            <p className="hero-lede">
              Labs pratiques, ateliers en direct et projets réels pour maîtriser
              le débogage, la conception système et l'architecture — directement
              dans votre navigateur.
            </p>

            <div className="hero-cta">
              <Magnetic>
                <a href="#" className="btn btn-primary">
                  <span>Commencer gratuitement</span>
                  <svg className="btn-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
                </a>
              </Magnetic>
              <Magnetic>
                <a href="#methode" className="btn btn-ghost">
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
                  <span>Voir la méthode</span>
                </a>
              </Magnetic>
            </div>

            <div className="hero-stats">
              <Stat n="12K+" l="ingénieurs formés" />
              <Stat n="400+" l="projets réels" />
              <Stat n="94%" l="embauchés en 6 mois" />
              <Stat n="4.9" l="note moyenne" />
            </div>
          </div>

          <div className="hero-right">
            <div className="lab-panel">
              <div className="lab-bar">
                <div className="lab-bar-left">
                  <span className="dot red" />
                  <span className="dot yellow" />
                  <span className="dot green" />
                </div>
                <div className="lab-tabs mono small">
                  <span className="lab-tab is-active">main.tf</span>
                  <span className="lab-tab">variables.tf</span>
                  <span className="lab-tab">README.md</span>
                </div>
                <span className="lab-badge mono small"><span className="lab-badge-dot" /> Lab #142</span>
              </div>

              <div className="lab-body">
                <div className="lab-editor mono">
                  <div className="code-line"><span className="ln">1</span><span className="kw">resource</span> <span className="str">"kubernetes_deployment"</span> <span className="str">"api"</span> {'{'}</div>
                  <div className="code-line"><span className="ln">2</span>  metadata {'{'} name = <span className="str">"api-gateway"</span> {'}'}</div>
                  <div className="code-line"><span className="ln">3</span>  spec {'{'}</div>
                  <div className="code-line diff-minus"><span className="ln">4</span>    replicas = <span className="num">2</span></div>
                  <div className="code-line diff-plus"><span className="ln">5</span>    replicas = <span className="num">6</span></div>
                  <div className="code-line"><span className="ln">6</span>    strategy {'{'} type = <span className="str">"RollingUpdate"</span> {'}'}</div>
                  <div className="code-line"><span className="ln">7</span>  {'}'}<span className="cursor">▌</span></div>
                </div>

                <div className="lab-console">
                  <div className="lab-console-head mono small">
                    <span className="console-tab is-active">Runner</span>
                    <span className="console-tab">Plan</span>
                    <span className="console-tab">Apply</span>
                  </div>
                  <div className="lab-console-body mono">
                    <div className="term-line"><span className="term-prompt">$</span> <span className="term-cmd">{typedLine}</span></div>
                    <div className="term-line muted">→ terraform apply · scaling deployment/api-gateway</div>
                    <div className="term-line"><span className="term-ok">✓</span> 6/6 pods ready · <span className="metric-good">p99 41ms</span> <span className="muted">(was 218ms)</span></div>
                    <div className="term-line"><span className="term-ok">✓</span> rollout healthy · zero downtime</div>
                    <div className="term-line mentor-line"><span className="mentor-tag">MENTOR</span> Bien — horizontal scale ≫ vertical ici.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
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
