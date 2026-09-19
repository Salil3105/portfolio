import Link from "next/link";
import { navLinks } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="foot">
      <div className="wrap foot-inner">
        <Link href="/" className="logo"><b>SC</b><i>.</i></Link>
        <nav className="foot-nav" aria-label="Footer">
          {navLinks.map((l) => (
            <Link key={l.href} href={l.href}>{l.label}</Link>
          ))}
        </nav>
        <div className="copy">© {new Date().getFullYear()} Salil Chandwadkar · Building software that scales.</div>
      </div>
    </footer>
  );
}
