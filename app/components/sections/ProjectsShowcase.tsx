"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import type { ProjectImage, ProjectsSection } from "../../data/types";

type ProjectsShowcaseProps = {
  section: ProjectsSection;
};

function ProjectLogo({ stack }: { stack: string }) {
  if (stack === "Python") {
    return (
      <svg aria-hidden="true" className="h-28 w-28 sm:h-36 sm:w-36" viewBox="0 0 120 120">
        <path
          d="M58 10c-20 0-25 9-25 20v11h29v7H20c-11 0-18 8-18 24s7 24 18 24h14V81c0-12 9-21 21-21h25c10 0 18-8 18-18V30c0-11-9-20-40-20Zm-16 15a6 6 0 1 1 0 12 6 6 0 0 1 0-12Z"
          fill="currentColor"
          opacity="0.95"
        />
        <path
          d="M62 110c20 0 25-9 25-20V79H58v-7h42c11 0 18-8 18-24s-7-24-18-24H86v15c0 12-9 21-21 21H40c-10 0-18 8-18 18v12c0 11 9 20 40 20Zm16-15a6 6 0 1 1 0-12 6 6 0 0 1 0 12Z"
          fill="currentColor"
          opacity="0.62"
        />
      </svg>
    );
  }

  if (stack === "Power BI") {
    return (
      <svg aria-hidden="true" className="h-28 w-28 sm:h-36 sm:w-36" viewBox="0 0 120 120">
        <rect height="82" rx="10" width="22" x="20" y="28" fill="currentColor" opacity="0.5" />
        <rect height="104" rx="10" width="22" x="49" y="6" fill="currentColor" opacity="0.95" />
        <rect height="62" rx="10" width="22" x="78" y="48" fill="currentColor" opacity="0.72" />
      </svg>
    );
  }

  if (stack === "Next.js") {
    return (
      <svg aria-hidden="true" className="h-28 w-28 sm:h-36 sm:w-36" viewBox="0 0 120 120">
        <circle cx="60" cy="60" fill="none" r="48" stroke="currentColor" strokeWidth="10" />
        <path d="M38 82V38h9l36 44h-9L38 38v44h-9Z" fill="currentColor" />
      </svg>
    );
  }

  return (
    <span className="text-6xl font-black tracking-tight sm:text-7xl">
      {stack
        .split(" ")
        .map((word) => word[0])
        .join("")}
    </span>
  );
}

export function ProjectsShowcase({ section }: ProjectsShowcaseProps) {
  const [active, setActive] = useState(0);
  const [selectedImage, setSelectedImage] = useState<ProjectImage | null>(null);
  const project = section.items[active];

  const nextProject = () => {
    setActive((prev) => (prev + 1) % section.items.length);
  };

  const prevProject = () => {
    setActive((prev) => (prev - 1 + section.items.length) % section.items.length);
  };

  return (
    <section
      className="grid min-h-0 w-full scroll-mt-24 place-items-center px-4 py-16 sm:min-h-[920px] sm:px-8 sm:py-24 lg:px-12"
      id="projects"
    >
      <div className="mx-auto flex w-full max-w-[1120px] flex-col items-center text-center">
        <div className="mb-12 flex w-full flex-col items-center text-center">
          <span className="text-[11px] font-bold uppercase leading-none tracking-[0.22em] text-[#EAB308]">
            {section.eyebrow}
          </span>

          <h2 className="mt-5 w-full text-center text-4xl font-bold leading-tight sm:text-[56px]">
            {section.title}
          </h2>

          <p className="mt-5 max-w-2xl text-center text-sm leading-7 text-zinc-400 sm:text-base">
            {section.description}
          </p>
        </div>

        <div className="showcase-card project-card relative mx-auto w-full rounded-lg border border-zinc-800 bg-[#111827] p-3 sm:p-8">
          <div className="pointer-events-none absolute inset-0 z-0 bg-[#EAB308]/5 blur-3xl" />

          <div className="project-stage relative z-10 mx-auto w-full text-center">
            <button
              aria-label="Projeto anterior"
              className="project-nav-button project-nav-prev"
              onClick={prevProject}
              type="button"
            >
              <ChevronLeft size={26} strokeWidth={1.9} />
            </button>

            <div className="project-showcase-content flex min-h-[380px] w-full flex-col items-center justify-center px-16 sm:px-20">
              <div className="project-logo-row flex w-full items-center justify-center">
                {section.items.map((item, index) => {
                  const isActive = index === active;

                  return (
                    <button
                      aria-label={`Selecionar projeto de ${item.stack}`}
                      className={`project-logo-card ${isActive ? "project-logo-card-active" : ""}`}
                      key={item.stack}
                      onClick={() => setActive(index)}
                      type="button"
                    >
                      <ProjectLogo stack={item.stack} />
                    </button>
                  );
                })}
              </div>
            </div>

            <button
              aria-label="Próximo projeto"
              className="project-nav-button project-nav-next"
              onClick={nextProject}
              type="button"
            >
              <ChevronRight size={26} strokeWidth={1.9} />
            </button>
          </div>

          <details className="project-details relative z-10 mt-6 w-full">
            <summary className="project-view-button mx-auto">
              <span className="project-view-label-closed">Ver projeto</span>
              <span className="project-view-label-open">Ocultar projeto</span>
            </summary>

            <div
              className="project-expanded-shell project-expanded-shell-open relative z-10"
              id="project-expanded-content"
              key={project.stack}
            >
              <div className="project-expanded w-full p-8 text-left sm:p-10 lg:p-12">
                <div className="project-expanded-content grid gap-8 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-start">
                  <div className="project-copy-card">
                    <h3 className="text-3xl font-bold leading-tight sm:text-4xl">
                      {project.title}
                    </h3>

                    <p className="mt-7 max-w-2xl text-[15px] leading-9 text-zinc-400">
                      {project.summary ?? project.description}
                    </p>

                    <p className="mt-6 max-w-2xl text-[15px] leading-9 text-zinc-400">
                      {project.technical ?? project.description}
                    </p>

                    <div className="mt-10 flex flex-wrap gap-3">
                      {project.techs.map((tech) => (
                        <span className="project-tech-chip" key={tech}>
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="project-open-action">
                      <a
                        className="project-open-link"
                        href={project.href}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        Abrir aplicação
                      </a>
                    </div>
                  </div>

                  <div className="project-analysis-card">
                    <h4 className="text-xl font-bold text-white">Leitura técnica</h4>
                    <ul className="mt-6 space-y-5">
                      {(project.highlights ?? []).map((item) => (
                        <li className="project-highlight-item" key={item}>
                          <span aria-hidden="true" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {project.images?.length ? (
                  <div className="project-gallery mt-10 grid gap-6 lg:grid-cols-2">
                    {project.images.map((image, index) => (
                      <button
                        aria-label={`Abrir imagem ${index + 1} do projeto em tamanho completo`}
                        className={`project-shot ${index === 0 ? "lg:col-span-2" : ""}`}
                        key={image.src}
                        onClick={() => setSelectedImage(image)}
                        type="button"
                      >
                        <Image
                          alt={image.alt}
                          className="object-cover object-top"
                          fill
                          quality={92}
                          sizes={
                            index === 0
                              ? "(min-width: 1024px) 1120px, 100vw"
                              : "(min-width: 1024px) 540px, 100vw"
                          }
                          src={image.src}
                        />
                      </button>
                    ))}
                  </div>
                ) : (
                  <div className="mt-8 rounded-2xl border border-dashed border-zinc-800 bg-[#0B0F14]/50 p-8 text-center text-sm leading-7 text-zinc-500">
                    O conteúdo visual deste projeto ainda está em preparação.
                  </div>
                )}
              </div>
            </div>
          </details>
        </div>
      </div>

      {selectedImage ? (
        <div
          aria-modal="true"
          className="image-modal fixed inset-0 z-[80] flex items-center justify-center p-4 sm:p-8"
          role="dialog"
        >
          <button
            aria-label="Fechar imagem ampliada"
            className="image-modal-backdrop absolute inset-0"
            onClick={() => setSelectedImage(null)}
            type="button"
          />

          <div className="image-modal-panel relative z-10 w-full max-w-6xl">
            <button
              aria-label="Fechar imagem ampliada"
              className="image-modal-close"
              onClick={() => setSelectedImage(null)}
              type="button"
            >
              Fechar
            </button>

            <div className="relative h-[78vh] w-full overflow-hidden rounded-2xl">
              <Image
                alt={selectedImage.alt}
                className="object-contain"
                fill
                quality={96}
                sizes="100vw"
                src={selectedImage.src}
              />
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
