"use client";

import { useEffect, useRef } from "react";

/**
 * Ambient page backdrop: drifting aurora glows, a faint infrastructure grid,
 * a cursor spotlight and a touch of grain. Pure CSS animation (transform /
 * opacity only) so it stays cheap; the spotlight is the only JS and is
 * rAF-throttled, skipped on touch devices and when reduced motion is set.
 */
export default function Backdrop() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;

    let raf = 0;
    let x = 0;
    let y = 0;

    const onMove = (e: PointerEvent) => {
      x = e.clientX;
      y = e.clientY;
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        el.style.setProperty("--mx", `${x}px`);
        el.style.setProperty("--my", `${y}px`);
      });
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="backdrop" ref={ref} aria-hidden="true">
      <div className="bd-grid" />
      <div className="bd-aurora bd-a1" />
      <div className="bd-aurora bd-a2" />
      <div className="bd-aurora bd-a3" />
      <div className="bd-spot" />
      <div className="bd-grain" />
    </div>
  );
}
