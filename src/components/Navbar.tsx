"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { navLinks, profile } from "@/lib/data";
import { ArrowRight, MenuIcon, CloseIcon } from "@/lib/icons";
import Logo from "@/components/Logo";

export default function Navbar() {
  const pathname = usePathname();
  const reduce = useReducedMotion();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav${scrolled ? " scrolled" : ""}`}>
      <div className="wrap nav-inner">
        <Link href="/" aria-label="Home"><Logo /></Link>

        <nav className="nav-links" aria-label="Primary">
          {navLinks.map((l) => {
            const active = pathname === l.href;
            return (
              <Link key={l.href} href={l.href} className={active ? "active" : ""}>
                {active && (
                  <motion.span
                    className="nav-pill"
                    layoutId={reduce ? undefined : "nav-pill"}
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                <span className="nav-label">{l.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="nav-cta">
          <Link href="/contact" className="btn sm ghost">Let&apos;s talk</Link>
          <a href={profile.resumeUrl} className="btn sm primary" download>
            Résumé <ArrowRight />
          </a>
          <button
            className="menu-btn"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {open && (
        <div className="mobile-menu wrap" style={{ paddingBottom: 20, gap: 4 }}>
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`btn ghost${pathname === l.href ? " primary" : ""}`}
              style={{ justifyContent: "flex-start" }}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
