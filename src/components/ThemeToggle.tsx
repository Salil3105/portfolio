"use client";

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
 */
export default function ThemeToggle() {
  function toggle() {
    const html = document.documentElement;
    const next = html.getAttribute("data-theme") === "light" ? "dark" : "light";
    html.setAttribute("data-theme", next);
    try {
      window.localStorage.setItem("theme", next);
    } catch {
      // private browsing / storage disabled — theme just won't persist
    }
  }

  return (
    <button type="button" className="theme-toggle" onClick={toggle} aria-label="Toggle theme">
      <SunIcon className="tt-icon tt-sun" />
      <MoonIcon className="tt-icon tt-moon" />
    </button>
  );
}
