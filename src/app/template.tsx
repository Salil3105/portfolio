"use client";

import { useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";

/** Re-mounts on every navigation, so each route eases in rather than snapping. */
export default function Template({ children }: { children: React.ReactNode }) {
  const reduce = useReducedMotion();

  useEffect(() => {
    // Next restores the scroll position itself, but the entry transform below
    // shifts the document while it does, so routes were opening ~80px down with
    // their first heading tucked under the header. Pin every route to the top.
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  if (reduce) return <>{children}</>;

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.2, 0.7, 0.2, 1] }}
    >
      {children}
    </motion.div>
  );
}
