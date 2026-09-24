"use client";

import type { MouseEvent } from "react";
import { SunIcon, MoonIcon } from "@/lib/icons";

/**
 * Both icons always render — which theme is "on" is decided purely by CSS
 * ([data-theme] selectors in globals.css), so this component's markup never
 * differs between the server render and the client's first render. Branching
 * the icon in JS instead (reading data-theme into useState) is what actually
 * broke this earlier: the server has no `document` and always guesses dark,
 * so the client's very first render swapped in a whole different <svg> tree
 * for the real theme, and React's hydration diff doesn't tolerate that
 * (suppressHydrationWarning only papers over mismatched text/attributes on
 * one element, not a different set of child nodes).
 *
 * The switch itself runs inside a View Transition: the browser snapshots the
 * old theme, we flip data-theme, and the new theme is revealed as a circle
 * growing out of this button. Every token changes at once underneath, so it's
 * one clean wipe instead of dozens of elements each easing their own colour
 * on their own timing. Browsers without the API, and anyone with reduced
 * motion set, get the instant swap.
 */
export default function ThemeToggle() {
  function toggle(e: MouseEvent<HTMLButtonElement>) {
    const html = document.documentElement;
    const next = html.getAttribute("data-theme") === "light" ? "dark" : "light";
    const apply = () => {
      html.setAttribute("data-theme", next);
      try {
        window.localStorage.setItem("theme", next);
      } catch {
        // private browsing / storage disabled — theme just won't persist
      }
    };

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || typeof document.startViewTransition !== "function") {
      apply();
      return;
    }

    const r = e.currentTarget.getBoundingClientRect();
    const x = r.left + r.width / 2;
    const y = r.top + r.height / 2;
    const radius = Math.hypot(Math.max(x, window.innerWidth - x), Math.max(y, window.innerHeight - y));

    // per-element colour transitions would fight the wipe (and the about
    // portrait would cross-fade inside it) — the wipe *is* the transition
    html.setAttribute("data-theme-switching", "");
    const transition = document.startViewTransition(apply);
    transition.ready
      .then(() => {
        html.animate(
          { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`] },
          { duration: 700, easing: "cubic-bezier(.22,.8,.26,1)", pseudoElement: "::view-transition-new(root)" },
        );
      })
      .catch(() => {});
    transition.finished.finally(() => html.removeAttribute("data-theme-switching"));
  }

  return (
    <button type="button" className="theme-toggle" onClick={toggle} aria-label="Toggle theme">
      <SunIcon className="tt-icon tt-sun" />
      <MoonIcon className="tt-icon tt-moon" />
    </button>
  );
}
