"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { EASE_KIARA } from "./motion";

type HeroProps = {
  logo: ReactNode;
};

export function Hero({ logo }: HeroProps) {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-kiara-burgundy px-6 py-20 text-kiara-cream sm:py-24"
    >
      <div className="pointer-events-none absolute inset-0 opacity-[0.06] [background-image:radial-gradient(circle_at_20%_20%,#fff6e2_0,transparent_40%),radial-gradient(circle_at_80%_70%,#fff6e2_0,transparent_35%)]" />

      <div className="relative flex w-full max-w-3xl flex-col items-center text-center">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.4, ease: EASE_KIARA }}
          className="font-body text-[0.65rem] tracking-[0.38em] text-kiara-cream/70 uppercase sm:text-sm"
        >
          Catering · Restaurant · Cafe
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.1, ease: EASE_KIARA }}
          className="mt-10 block w-[min(80vw,480px)] text-kiara-cream sm:mt-12 [&_svg]:h-auto [&_svg]:w-full"
        >
          {logo}
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.85, ease: EASE_KIARA }}
          className="mt-10 max-w-md font-body text-base leading-relaxed text-kiara-cream/80 sm:mt-12 sm:text-lg md:text-xl"
        >
          A family home in Antipolo, opened up for gathering, kain, and
          unhurried afternoons.
        </motion.p>

        <motion.a
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.8, ease: EASE_KIARA }}
          href="#about"
          aria-label="Scroll to about section"
          className="mt-20 hidden flex-col items-center gap-3 text-xs tracking-[0.3em] text-kiara-cream/55 uppercase transition-colors hover:text-kiara-cream sm:flex"
        >
          <span>Come in</span>
          <span aria-hidden className="block h-10 w-px bg-kiara-cream/25" />
        </motion.a>
      </div>
    </section>
  );
}
