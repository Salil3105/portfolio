"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "@/lib/icons";

/**
 * The hero's hello: the portrait waves, introduces itself and points at the
 * work. Swaps in `public/greeting.gif` when that file exists, so a real
 * animated clip can replace the still crop without touching this component.
 */
export default function Greeter() {
  const reduce = useReducedMotion();
  const [gif, setGif] = useState(false);

  useEffect(() => {
    const im = new window.Image();
    im.onload = () => setGif(true);
    im.src = "/greeting.gif";
  }, []);

  const entrance = reduce
    ? {}
    : {
        initial: { opacity: 0, y: 16, scale: 0.92 },
        animate: { opacity: 1, y: 0, scale: 1 },
        transition: { delay: 1.1, duration: 0.55, ease: [0.2, 0.9, 0.3, 1] as const },
      };

  return (
    <motion.div className="greeter" {...entrance}>
      <Link href="/projects" className="greeter-card">
        <span className="greeter-face">
          <img src={gif ? "/greeting.gif" : "/greeting.png"} alt="" width={240} height={240} />
          <span className="greeter-dot" aria-hidden="true" />
        </span>

        <span className="greeter-copy">
          <span className="greeter-hi">
            Hi, I&apos;m Salil <span className="greeter-wave" aria-hidden="true">👋</span>
          </span>
          <span className="greeter-sub">
            Welcome in — have a look around <ArrowRight />
          </span>
        </span>
      </Link>
    </motion.div>
  );
}
