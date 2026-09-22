"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navLinks, profile } from "@/lib/data";
import { ArrowRight, MenuIcon, CloseIcon } from "@/lib/icons";

export default function Navbar() {
  const pathname = usePathname();
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
        <Link href="/" className="logo" aria-label="Home">
          <b>SC</b><i>.</i>
        </Link>

        <nav className="nav-links" aria-label="Primary">
          {navLinks.map((l) => (
            <Link key={l.href} href={l.href} className={pathname === l.href ? "active" : ""}>
              {l.label}
            </Link>
          ))}
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
