// Bigger cursor: white-outline square ring + purple dot.
const { useEffect: useCurEffect, useRef: useCurRef } = React;

function Cursor() {
  const dotRef = useCurRef(null);
  const ringRef = useCurRef(null);
  const pos = useCurRef({ x: -200, y: -200 });
  const dot = useCurRef({ x: -200, y: -200 });
  const ring = useCurRef({ x: -200, y: -200 });
  const hovered = useCurRef(false);

  useCurEffect(() => {
    if (matchMedia('(pointer: coarse)').matches) return;
    document.documentElement.classList.add('has-custom-cursor');

    const onMove = (e) => { pos.current = { x: e.clientX, y: e.clientY }; };
    const onDown = () => ringRef.current?.classList.add('is-down');
    const onUp = () => ringRef.current?.classList.remove('is-down');
    const onOver = (e) => {
      const t = e.target.closest('a, button, .track-card, .story-card, .tweaks-opt, [data-cursor="hover"]');
      if (t && !hovered.current) {
        hovered.current = true;
        ringRef.current?.classList.add('is-hover');
        dotRef.current?.classList.add('is-hover');
      } else if (!t && hovered.current) {
        hovered.current = false;
        ringRef.current?.classList.remove('is-hover');
        dotRef.current?.classList.remove('is-hover');
      }
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    window.addEventListener('mousedown', onDown);
    window.addEventListener('mouseup', onUp);
    window.addEventListener('mouseover', onOver);

    let raf;
    const tick = () => {
      // Dot: 1:1 with pointer, no lag
      dot.current.x = pos.current.x;
      dot.current.y = pos.current.y;
      // Ring: gentle trail
      ring.current.x += (pos.current.x - ring.current.x) * 0.28;
      ring.current.y += (pos.current.y - ring.current.y) * 0.28;
      if (dotRef.current) dotRef.current.style.transform = `translate3d(${dot.current.x}px, ${dot.current.y}px, 0) translate(-50%, -50%)`;
      if (ringRef.current) ringRef.current.style.transform = `translate3d(${ring.current.x}px, ${ring.current.y}px, 0) translate(-50%, -50%)`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      document.documentElement.classList.remove('has-custom-cursor');
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mousedown', onDown);
      window.removeEventListener('mouseup', onUp);
      window.removeEventListener('mouseover', onOver);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
    </>
  );
}

window.Cursor = Cursor;
