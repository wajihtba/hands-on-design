// Tweaks panel — theme + hero variant
function Tweaks({ defaults, onChange }) {
  const [state, setState] = React.useState(defaults);
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const onMsg = (e) => {
      const d = e.data || {};
      if (d.type === '__activate_edit_mode') setVisible(true);
      else if (d.type === '__deactivate_edit_mode') setVisible(false);
    };
    window.addEventListener('message', onMsg);
    window.parent.postMessage({ type: '__edit_mode_available' }, '*');
    return () => window.removeEventListener('message', onMsg);
  }, []);

  const apply = (patch) => {
    const next = { ...state, ...patch };
    setState(next);
    onChange(next);
    window.parent.postMessage({ type: '__edit_mode_set_keys', edits: patch }, '*');
  };

  if (!visible) return null;

  const themes = [
    { k: 'ink', l: 'Ink' },
    { k: 'noir', l: 'Noir' },
    { k: 'violet', l: 'Violet' },
    { k: 'lavande', l: 'Lavande' },
  ];
  const accents = [
    { k: '#A855F7', l: 'Purple' },
    { k: '#8B5CF6', l: 'Violet' },
    { k: '#6D4AFF', l: 'Electric' },
    { k: '#C084FC', l: 'Lilac' },
  ];

  return (
    <aside className="tweaks-panel">
      <h4>// Tweaks</h4>

      <div className="tweaks-row">
        <div className="tweaks-label">Thème</div>
        <div className="tweaks-opts">
          {themes.map((t) => (
            <button
              key={t.k}
              className={'tweaks-opt' + (state.theme === t.k ? ' is-active' : '')}
              onClick={() => apply({ theme: t.k })}
            >
              {t.l}
            </button>
          ))}
        </div>
      </div>

      <div className="tweaks-row">
        <div className="tweaks-label">Accent</div>
        <div className="tweaks-opts">
          {accents.map((a) => (
            <button
              key={a.k}
              className={'tweaks-opt' + (state.accent === a.k ? ' is-active' : '')}
              onClick={() => apply({ accent: a.k })}
              style={{ borderColor: state.accent === a.k ? a.k : undefined, background: state.accent === a.k ? a.k : undefined }}
            >
              <span style={{ display: 'inline-block', width: 8, height: 8, borderRadius: '50%', background: a.k, marginRight: 6, verticalAlign: 'middle' }} />
              {a.l}
            </button>
          ))}
        </div>
      </div>

      <div className="tweaks-row">
        <div className="tweaks-label">Typographie</div>
        <div className="tweaks-opts">
          {[
            { k: 'geist', l: 'Geist' },
            { k: 'tight', l: 'Inter Tight' },
            { k: 'plex', l: 'IBM Plex' },
            { k: 'grotesk', l: 'Space Grotesk' },
          ].map((f) => (
            <button
              key={f.k}
              className={'tweaks-opt' + (state.font === f.k ? ' is-active' : '')}
              onClick={() => apply({ font: f.k })}
            >
              {f.l}
            </button>
          ))}
        </div>
      </div>

      <div className="tweaks-row">
        <div className="tweaks-label">Grille hero</div>
        <div className="tweaks-opts">
          {['on', 'off'].map((v) => (
            <button
              key={v}
              className={'tweaks-opt' + (state.grid === v ? ' is-active' : '')}
              onClick={() => apply({ grid: v })}
            >
              {v === 'on' ? 'Visible' : 'Masquée'}
            </button>
          ))}
        </div>
      </div>

    </aside>
  );
}

window.Tweaks = Tweaks;
