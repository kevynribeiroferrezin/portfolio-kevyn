export type ProjectImage = {
  alt: string;
  src: string;
};

export type Project = {
  description: string;
  highlights?: string[];
  href: string;
  icon?: string;
  images?: ProjectImage[];
  stack: string;
  summary?: string;
  technical?: string;
  techs: string[];
  title: string;
};

export type ProjectsSection = {
  description: string;
  eyebrow: string;
  items: Project[];
  title: string;
};
