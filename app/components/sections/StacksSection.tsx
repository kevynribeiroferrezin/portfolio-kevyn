"use client";

import { motion } from "framer-motion";
import { stackInitials, ui } from "../ui/styles";
import { stacksSection } from "./Stacks";

export function StacksSection() {
  return (
    <section
      className="grid min-h-0 w-full scroll-mt-24 place-items-center px-6 py-16 sm:min-h-[860px] sm:px-8 sm:py-24 lg:px-12"
      id="stacks"
    >
      <div className="mx-auto flex w-full max-w-[1120px] flex-col items-center text-center">
        <div className="mb-14 flex w-full flex-col items-center text-center">
          <span className="text-[11px] font-bold uppercase leading-none tracking-[0.22em] text-[#EAB308]">
            {stacksSection.eyebrow}
          </span>

          <h2 className="mt-5 w-full text-center text-4xl font-bold leading-tight sm:text-[56px]">
            {stacksSection.title}
          </h2>

          <p className="mt-5 max-w-2xl text-center text-sm leading-7 text-zinc-400 sm:text-base">
            {stacksSection.description}
          </p>
        </div>

        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {stacksSection.items.map((stack) => (
            <motion.article
              className={`${ui.card} skill-card flex min-h-44 flex-col items-center justify-center px-6 py-8 text-center transition-colors hover:border-[#EAB308]/65 sm:min-h-52 sm:px-8 sm:py-9`}
              key={stack.name}
              transition={{ duration: 0.22, ease: "easeOut" }}
              whileHover={{ y: -7 }}
            >
              <div className="skill-card-mark mb-6 flex items-center justify-center">
                {stackInitials[stack.name] ?? stack.name.slice(0, 2)}
              </div>

              <h3 className="text-[23px] font-bold leading-tight text-white">
                {stack.name}
              </h3>
              <p className="mt-4 max-w-[260px] text-[15px] leading-8 text-zinc-400">
                {stack.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
