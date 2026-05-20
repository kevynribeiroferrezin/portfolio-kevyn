import Image from "next/image";
import { PageSection } from "../layout/PageSection";
import { ui } from "../ui/styles";
import { about } from "./About";

export function AboutSection() {
  return (
    <PageSection
      className="min-h-0 scroll-mt-24 pb-16 pt-16 sm:min-h-[720px] sm:pb-24 sm:pt-24"
      id="about"
    >
      <div className="grid min-h-0 items-center gap-12 text-center sm:gap-16 lg:min-h-[460px] lg:grid-cols-[520px_minmax(0,1fr)] lg:gap-28 lg:text-left">
        <div className="flex justify-center lg:justify-start">
          <div className="about-avatar relative h-60 w-60 overflow-hidden rounded-full bg-zinc-50 shadow-[0_0_90px_rgba(255,255,255,0.08)] sm:h-96 sm:w-96 lg:h-[460px] lg:w-[460px]">
            <Image
              alt="Foto de Kevyn Ribeiro Ferrezin"
              className="object-cover object-[58%_42%]"
              fill
              quality={95}
              sizes="(min-width: 1024px) 460px, (min-width: 640px) 384px, 240px"
              src="/kevyn-about-photo-20260520.png"
            />
          </div>
        </div>

        <div className="mx-auto max-w-[760px] lg:mx-0">
          <span className={ui.eyebrow}>{about.eyebrow}</span>

          <h2 className="mx-auto mt-6 max-w-xl text-4xl font-bold leading-[1.08] sm:text-6xl lg:mx-0">
            {about.title}
          </h2>

          <div className="mt-7 space-y-4">
            {about.lines.map((line) => (
              <p
                className="flex gap-3 text-left text-sm leading-7 text-zinc-500 sm:text-base"
                key={line.text}
              >
                <span className="mt-0.5 shrink-0 text-sm">{line.icon}</span>
                <span>{line.text}</span>
              </p>
            ))}
          </div>
        </div>
      </div>
    </PageSection>
  );
}
