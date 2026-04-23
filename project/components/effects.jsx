// Scramble-text hook & magnetic button wrapper used in hero.
// Scramble: pass-over reveal where non-revealed chars show random glyphs.
function useScramble(ref, finalText, opts = {}) {
  const { duration = 1400, delay = 300 } = opts;
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ!<>-_\\/[]{}—=+*^?#________';
    let t0 = null;
    let raf;
    const step = (t) => {
      if (!t0) t0 = t + delay;
      const p = Math.max(0, Math.min(1, (t - t0) / duration));
      const reveal = Math.floor(p * finalText.length);
      let out = '';
      for (let i = 0; i < finalText.length; i++) {
        if (i < reveal) out += finalText[i];
        else if (finalText[i] === ' ' || finalText[i] === '\n') out += finalText[i];
        else out += chars[(Math.random() * chars.length) | 0];
      }
      el.textContent = out;
      if (p < 1) raf = requestAnimationFrame(step);
      else el.textContent = finalText;
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [finalText]);
}

// Magnetic button: shifts content toward cursor within bounds
function Magnetic({ children, strength = 0.35, className = '' }) {
  const ref = React.useRef(null);
  const inner = React.useRef(null);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf;
    let tx = 0, ty = 0, cx = 0, cy = 0;
    const onMove = (e) => {
      const r = el.getBoundingClientRect();
      tx = (e.clientX - (r.left + r.width / 2)) * strength;
      ty = (e.clientY - (r.top + r.height / 2)) * strength;
    };
    const onLeave = () => { tx = 0; ty = 0; };
    const tick = () => {
      cx += (tx - cx) * 0.18;
      cy += (ty - cy) * 0.18;
      if (inner.current) inner.current.style.transform = `translate3d(${cx}px, ${cy}px, 0)`;
      raf = requestAnimationFrame(tick);
    };
    el.addEventListener('mousemove', onMove);
    el.addEventListener('mouseleave', onLeave);
    raf = requestAnimationFrame(tick);
    return () => {
      el.removeEventListener('mousemove', onMove);
      el.removeEventListener('mouseleave', onLeave);
      cancelAnimationFrame(raf);
    };
  }, [strength]);
  return (
    <span ref={ref} className={'magnetic ' + className}>
      <span ref={inner} className="magnetic-inner">{children}</span>
    </span>
  );
}

// Reveal on scroll — adds .is-in when element enters viewport
function useReveal() {
  React.useEffect(() => {
    const attach = () => {
      const els = document.querySelectorAll('[data-reveal]:not(.is-in)');
      const io = new IntersectionObserver((entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-in');
            io.unobserve(e.target);
          }
        });
      }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
      els.forEach((el) => {
        const r = el.getBoundingClientRect();
        // If already in viewport at mount, reveal immediately
        if (r.top < window.innerHeight && r.bottom > 0) {
          el.classList.add('is-in');
        } else {
          io.observe(el);
        }
      });
      return io;
    };
    // Wait one frame so all children have mounted
    let io;
    const raf = requestAnimationFrame(() => { io = attach(); });
    // Safety net: reveal everything after 1.5s no matter what
    const to = setTimeout(() => {
      document.querySelectorAll('[data-reveal]').forEach((el) => el.classList.add('is-in'));
    }, 1500);
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(to);
      if (io) io.disconnect();
    };
  }, []);
}

window.useScramble = useScramble;
window.Magnetic = Magnetic;
window.useReveal = useReveal;
