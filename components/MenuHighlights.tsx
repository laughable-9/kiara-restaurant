"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { EASE_KIARA } from "./motion";
import { menuSections } from "./menuData";

export function MenuHighlights() {
  const [activeId, setActiveId] = useState(menuSections[0].id);
  const active =
    menuSections.find((s) => s.id === activeId) ?? menuSections[0];

  return (
    <section
      id="menu"
      className="relative bg-kiara-burgundy px-6 py-28 text-kiara-cream sm:py-40"
    >
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <Reveal>
            <p className="font-body text-xs tracking-[0.4em] text-kiara-cream/60 uppercase">
              A taste of what is on the table
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 font-display text-4xl leading-tight font-light italic sm:text-5xl md:text-6xl">
              From the kitchen, with love.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mx-auto mt-6 max-w-xl font-body text-lg text-kiara-cream/75 sm:text-xl">
              The menu grows and changes with the season, the mood, and
              whatever tita is craving that week. Pick a corner of the house
              to peek into.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.25}>
          <div
            role="tablist"
            aria-label="Menu categories"
            className="mt-16 -mx-6 flex snap-x gap-3 overflow-x-auto px-6 pb-2 sm:mx-0 sm:flex-wrap sm:justify-center sm:px-0"
          >
            {menuSections.map((section) => {
              const isActive = section.id === activeId;
              return (
                <button
                  key={section.id}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`menu-panel-${section.id}`}
                  id={`menu-tab-${section.id}`}
                  onClick={() => setActiveId(section.id)}
                  className={`relative snap-start shrink-0 rounded-full border px-5 py-2 font-body text-sm tracking-wide whitespace-nowrap transition-colors duration-500 sm:text-base ${
                    isActive
                      ? "border-kiara-cream bg-kiara-cream text-kiara-burgundy"
                      : "border-kiara-cream/30 text-kiara-cream/75 hover:border-kiara-cream/60 hover:text-kiara-cream"
                  }`}
                >
                  {section.title}
                </button>
              );
            })}
          </div>
        </Reveal>

        <div
          role="tabpanel"
          id={`menu-panel-${active.id}`}
          aria-labelledby={`menu-tab-${active.id}`}
          className="mt-14 min-h-[22rem]"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.6, ease: EASE_KIARA }}
            >
              <div className="mx-auto max-w-2xl text-center">
                <p className="font-body text-xs tracking-[0.35em] text-kiara-cream/55 uppercase">
                  {active.subtitle}
                </p>
                <h3 className="mt-3 font-display text-3xl italic sm:text-4xl">
                  {active.title}
                </h3>
              </div>

              <ul className="mx-auto mt-10 max-w-xl divide-y divide-kiara-cream/10">
                {active.items.map((item, i) => (
                  <motion.li
                    key={item.name}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.55,
                      delay: 0.05 * i,
                      ease: EASE_KIARA,
                    }}
                    className="flex items-baseline justify-between gap-6 py-5"
                  >
                    <div>
                      <p className="font-display text-lg sm:text-xl">
                        {item.name}
                      </p>
                      {item.note && (
                        <p className="mt-1 font-body text-sm text-kiara-cream/60 italic">
                          {item.note}
                        </p>
                      )}
                    </div>
                    <span className="shrink-0 font-body text-sm tracking-widest text-kiara-cream/75">
                      {item.price}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>
        </div>

        <Reveal delay={0.15}>
          <div className="mt-20 flex flex-col items-center gap-4 text-center">
            <a
              href="/menu.html"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border border-kiara-cream/40 px-7 py-3 font-body text-sm tracking-[0.25em] uppercase transition-colors hover:border-kiara-cream hover:bg-kiara-cream hover:text-kiara-burgundy"
            >
              See the full menu
              <ArrowUpRight
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                strokeWidth={1.5}
                aria-hidden
              />
            </a>
            <p className="font-body text-sm text-kiara-cream/60 italic">
              Or come by. Everything is better when tita serves it.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
