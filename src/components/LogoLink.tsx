"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/components/Logo";

/**
 * The mark always goes home. When we're already on the home page a route change
 * would be a no-op, so it rides back to the top instead.
 */
export default function LogoLink({ className = "" }: { className?: string }) {
  const pathname = usePathname();

  function onClick(e: React.MouseEvent<HTMLAnchorElement>) {
    // leave cmd/ctrl/shift-click alone so "open in new tab" still works
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
    if (pathname !== "/") return;

    e.preventDefault();
    const smooth = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: smooth ? "smooth" : "auto" });
  }

  return (
    <Link
      href="/"
      aria-label="Home"
      className={`logo-link${className ? ` ${className}` : ""}`}
      onClick={onClick}
    >
      <Logo />
    </Link>
  );
}
