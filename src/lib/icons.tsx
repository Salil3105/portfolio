import type { ReactNode } from "react";

// ---- UI icons ----
export const ArrowRight = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14m0 0-6-6m6 6-6 6" /></svg>
);
export const Download = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v12m0 0 4-4m-4 4-4-4M5 21h14" /></svg>
);
export const External = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17 17 7M9 7h8v8" /></svg>
);
export const Send = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 2 11 13M22 2l-7 20-4-9-9-4 20-7Z" /></svg>
);
export const MenuIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M4 7h16M4 12h16M4 17h16" /></svg>
);
export const CloseIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M6 6l12 12M18 6 6 18" /></svg>
);
export const SunIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><circle cx="12" cy="12" r="4.2" /><path d="M12 2.5v2.4M12 19.1v2.4M4.9 4.9l1.7 1.7M17.4 17.4l1.7 1.7M2.5 12h2.4M19.1 12h2.4M4.9 19.1l1.7-1.7M17.4 6.6l1.7-1.7" /></svg>
);
export const MoonIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M20.8 14.3A8.5 8.5 0 1 1 9.7 3.2a6.8 6.8 0 0 0 11.1 11.1Z" /></svg>
);

// ---- social icons ----
export const GithubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49 0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.55-1.14-4.55-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05a9.4 9.4 0 0 1 5 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.79-4.57 5.05.36.32.68.94.68 1.9 0 1.37-.01 2.48-.01 2.82 0 .27.18.6.69.49A10.03 10.03 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z" /></svg>
);
export const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M6.94 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM3.2 8.5h3.5V21H3.2V8.5Zm5.5 0h3.35v1.7h.05c.47-.85 1.6-1.75 3.3-1.75 3.53 0 4.18 2.2 4.18 5.05V21h-3.5v-5.55c0-1.32-.02-3.02-1.84-3.02-1.85 0-2.13 1.44-2.13 2.92V21H8.7V8.5Z" /></svg>
);
export const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.5 3h3.2l-7 8 8.2 10h-6.4l-5-6.1L8.5 21H3.3l7.5-8.6L3 3h6.6l4.5 5.6L17.5 3Zm-1.1 16h1.8L7.7 4.9H5.8L16.4 19Z" /></svg>
);
export const PinIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z" /><circle cx="12" cy="10" r="2.6" /></svg>
);
export const MailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="5" width="18" height="14" rx="2.5" /><path d="m4 7 8 6 8-6" /></svg>
);

// ---- feature icons ----
export const featureIcons: Record<string, ReactNode> = {
  engineer: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="m8 6-6 6 6 6M16 6l6 6-6 6" /></svg>,
  learner: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M4 19V6a2 2 0 0 1 2-2h10l4 4v11" /><path d="M8 4v6h8" /></svg>,
  builder: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 2v3M12 19v3M2 12h3M19 12h3" /><circle cx="12" cy="12" r="4" /></svg>,
  solver: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" /></svg>,
  cloud: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M6.5 18a4 4 0 0 1 .6-8 5.5 5.5 0 0 1 10.6 1.2A3.6 3.6 0 0 1 18 18H6.5Z" /></svg>,
};

// ---- project artworks ----
export const projectArt: Record<string, ReactNode> = {
  "art-rasa": (
    <svg viewBox="0 0 400 250" preserveAspectRatio="xMidYMid slice"><g fill="none" stroke="var(--text)" strokeOpacity=".16"><rect x="60" y="70" width="120" height="150" rx="10" /><rect x="150" y="50" width="120" height="170" rx="10" stroke="var(--text)" strokeOpacity=".28" /><rect x="240" y="80" width="110" height="140" rx="10" /></g><g stroke="rgba(124,92,255,.5)"><line x1="170" y1="90" x2="250" y2="90" /><line x1="170" y1="110" x2="240" y2="110" /><line x1="170" y1="130" x2="255" y2="130" /></g></svg>
  ),
  "art-resume": (
    <svg viewBox="0 0 400 250" preserveAspectRatio="xMidYMid slice"><g fill="none" stroke="var(--text)" strokeOpacity=".2"><rect x="120" y="40" width="160" height="180" rx="12" /></g><g stroke="var(--text)" strokeOpacity=".14"><line x1="140" y1="70" x2="230" y2="70" /><line x1="140" y1="92" x2="260" y2="92" /><line x1="140" y1="114" x2="245" y2="114" /><line x1="140" y1="136" x2="260" y2="136" /></g><circle cx="255" cy="175" r="34" fill="none" stroke="rgba(110,168,254,.6)" strokeWidth="2" /><path d="M242 175l9 9 17-18" fill="none" stroke="rgba(110,168,254,.9)" strokeWidth="2.5" /></svg>
  ),
  "art-finance": (
    <svg viewBox="0 0 400 250" preserveAspectRatio="xMidYMid slice"><g stroke="var(--text)" strokeOpacity=".12"><line x1="60" y1="200" x2="340" y2="200" /></g><polyline points="60,180 110,150 160,165 210,110 260,130 310,70 340,80" fill="none" stroke="rgba(124,92,255,.8)" strokeWidth="2.5" /><g fill="var(--text)" fillOpacity=".5"><circle cx="110" cy="150" r="3" /><circle cx="210" cy="110" r="3" /><circle cx="310" cy="70" r="3.5" /></g></svg>
  ),
};
