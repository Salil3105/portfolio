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
      <EventStreams />
      <div className="bd-spot" />
      <div className="bd-grain" />
    </div>
  );
}

/**
 * Kafka-style event streams: faint topic lanes with messages flowing
 * left to right past service nodes. Animated with transform/opacity only,
 * so it runs on the compositor rather than the main thread.
 */
const LANES = [
  { top: 13, dur: 19, nodes: [28, 72] },
  { top: 27, dur: 26, nodes: [46] },
  { top: 41, dur: 22, nodes: [18, 64] },
  { top: 58, dur: 30, nodes: [38, 82] },
  { top: 72, dur: 24, nodes: [56] },
  { top: 87, dur: 33, nodes: [26, 68] },
];

const EVENTS_PER_LANE = 3;

function EventStreams() {
  return (
    <div className="bd-streams">
      {LANES.map((lane, i) => (
        <div className="bd-lane" key={i} style={{ top: `${lane.top}%` }}>
          {lane.nodes.map((left) => (
            <span className="bd-node" key={left} style={{ left: `${left}%` }} />
          ))}
          {Array.from({ length: EVENTS_PER_LANE }).map((_, j) => (
            <span
              className={`bd-evt${j % 2 ? " alt" : ""}`}
              key={j}
              style={
                {
                  "--dur": `${lane.dur + j * 4}s`,
                  "--delay": `${-((lane.dur / EVENTS_PER_LANE) * j + i * 2.5)}s`,
                } as React.CSSProperties
              }
            />
          ))}
        </div>
      ))}
    </div>
  );
}
