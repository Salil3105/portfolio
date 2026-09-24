import type { ReactNode } from "react";
import {
  siApachekafka,
  siDocker,
  siGit,
  siKubernetes,
  siMongodb,
  siNodedotjs,
  siPostgresql,
  siReact,
  siRedis,
  siSpringboot,
  type SimpleIcon,
} from "simple-icons";

/**
 * Tech-stack logos in their own brand colours, from simple-icons (CC0).
 *
 * Kept out of lib/icons.tsx on purpose: that file is imported by client
 * components (the navbar), and simple-icons exports ~3,000 logos. Only the
 * TechStack section — a server component — imports this, so none of it
 * reaches the browser as JS; the SVGs arrive as markup.
 *
 * Kafka's mark is near-black (#231F20) and would vanish on the dark theme,
 * so it takes the theme's text colour instead — the brand itself is
 * monochrome, so that's the faithful rendering in both themes.
 */
function brand(icon: SimpleIcon, fill = `#${icon.hex}`) {
  return (
    <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
      <path d={icon.path} fill={fill} />
    </svg>
  );
}

export const techIcons: Record<string, ReactNode> = {
  // simple-icons dropped Java's cup (Oracle) and AWS (Amazon) at the owners'
  // request, so these two stay hand-drawn, just in their brand colours
  java: (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6" strokeLinecap="round" aria-hidden="true">
      <path d="M8 3c-1.5 2 2 3 2 4.5S8.5 9 8.5 9M13 2c-2 2.5 2.5 3.5 2.5 5.5" stroke="#E76F00" />
      <path d="M6 13.5c4 1.5 8 1.5 12 0M7 16.5c3 1 7 1 10 0M6.5 19c3.5 1.5 8 1.3 11-.2M17 11.5c2 .5 3 1.7 1.5 3" stroke="#5382A1" />
    </svg>
  ),
  aws: (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6" strokeLinecap="round" aria-hidden="true">
      <path d="M6 13a4 4 0 0 1 .5-8 5.5 5.5 0 0 1 10.5 1.2A3.6 3.6 0 0 1 18 13H6Z" stroke="var(--text)" strokeOpacity=".75" />
      <path d="M4 17c5 2.5 11 2.5 16 0M17.5 15.6l2.6 1.3-1.2 2.5" stroke="#FF9900" />
    </svg>
  ),
  spring: brand(siSpringboot),
  kafka: brand(siApachekafka, "var(--text)"),
  node: brand(siNodedotjs),
  react: brand(siReact),
  postgres: brand(siPostgresql),
  mongodb: brand(siMongodb),
  redis: brand(siRedis),
  docker: brand(siDocker),
  kubernetes: brand(siKubernetes),
  git: brand(siGit),
};
