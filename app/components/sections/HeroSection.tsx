import { Download } from "lucide-react";
import Image from "next/image";
import { Container } from "../layout/PageSection";
import { GitHubIcon, LinkedInIcon, WhatsAppIcon } from "../ui/SocialIcons";
import { hero } from "./Hero";

export function HeroSection() {
  return (
    <section
      className="flex min-h-[calc(100svh-4rem)] w-full scroll-mt-16 items-center justify-center py-10 sm:py-14 lg:min-h-[calc(100vh-4rem)] lg:py-16"
      id="home"
    >
      <Container>
        <div className="grid w-full items-center gap-9 sm:gap-12 lg:grid-cols-[380px_minmax(420px,560px)_320px] lg:justify-between">
          <div className="content-rise order-2 flex min-w-0 flex-col items-center justify-self-center text-center lg:order-none lg:items-start lg:justify-self-start lg:text-left">
            <span className="rounded-md bg-[#EAB308]/15 px-3 py-1.5 text-sm font-bold leading-none text-[#EAB308]">
              {hero.badge}
            </span>

            <h1 className="mt-6 max-w-[330px] text-[44px] font-bold leading-[0.96] sm:max-w-[380px] sm:text-[64px]">
              {hero.name}
            </h1>

            <p className="mt-6 text-base leading-none text-zinc-500">
              {hero.role}
            </p>

            <div className="mt-8 flex items-center gap-4">
              <a
                aria-label="LinkedIn"
                className="text-zinc-500 transition hover:text-[#EAB308]"
                href={hero.socials.linkedin}
                rel="noopener noreferrer"
                target="_blank"
              >
                <LinkedInIcon />
              </a>
              <a
                aria-label="GitHub"
                className="text-zinc-500 transition hover:text-[#EAB308]"
                href={hero.socials.github}
                rel="noopener noreferrer"
                target="_blank"
              >
                <GitHubIcon />
              </a>
            </div>
          </div>

          <div className="hero-wave-zone group relative order-1 mx-auto flex h-[300px] w-[300px] cursor-pointer items-center justify-center sm:h-[360px] sm:w-[360px] lg:order-none lg:h-[520px] lg:w-[520px]">
            <div className="ambient-glow absolute h-full w-full rounded-full bg-[#EAB308]/35 blur-2xl" />
            <div className="relative h-[260px] w-[260px] overflow-hidden rounded-full bg-[#8A7208]/80 shadow-[0_0_90px_rgba(234,179,8,0.18)] sm:h-[310px] sm:w-[310px] lg:h-[460px] lg:w-[460px]">
              <div className="hero-portrait-shell absolute left-1/2 top-1/2 h-[132%] w-[104%]">
                <div className="relative h-full w-full">
                  <div className="hero-portrait-image relative h-full w-full">
                    <Image
                      alt="Kevyn Ribeiro acenando"
                      className="hero-portrait-img object-contain object-center"
                      fill
                      priority
                      quality={96}
                      sizes="(min-width: 1024px) 720px, 440px"
                      src="/kevyn-hero-wave.png"
                    />
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-[#8A7208]/75 to-transparent" />
                  </div>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-[#EAB308]/10" />
            </div>
          </div>

          <div className="content-rise order-3 flex min-w-0 flex-col items-center gap-4 justify-self-center text-sm leading-none text-[#EAB308] lg:order-none lg:items-end lg:justify-self-end">
            <a
              className="inline-flex items-center gap-1.5 whitespace-nowrap px-1 py-1 transition hover:-translate-y-0.5 hover:text-[#FACC15]"
              download={hero.actions.cv.download}
              href={hero.actions.cv.href}
            >
              {hero.actions.cv.label}
              <Download size={12} />
            </a>

            <a
              className="inline-flex min-h-11 items-center gap-2.5 whitespace-nowrap rounded-full border border-[#EAB308]/55 bg-[#EAB308]/5 px-5 py-3 text-sm font-semibold leading-none transition hover:-translate-y-0.5 hover:border-[#EAB308] hover:bg-[#EAB308] hover:text-black hover:shadow-[0_0_28px_rgba(234,179,8,0.2)]"
              href={hero.actions.contact.href}
              rel="noopener noreferrer"
              target="_blank"
            >
              <WhatsAppIcon className="h-4.5 w-4.5" />
              {hero.actions.contact.label}
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
