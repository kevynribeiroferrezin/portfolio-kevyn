import { Mail } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "../ui/SocialIcons";
import { contact } from "./Contact";

export function ContactSection() {
  return (
    <section
      className="grid min-h-[520px] w-full scroll-mt-24 place-items-center px-6 py-16 sm:min-h-[600px] sm:px-8 sm:py-24 lg:px-12"
      id="contact"
    >
      <div className="mx-auto flex w-full max-w-[760px] flex-col items-center justify-center text-center">
        <span className="text-[11px] font-bold uppercase leading-none tracking-[0.22em] text-[#EAB308]">
          {contact.eyebrow}
        </span>

        <h2 className="mx-auto mt-4 w-full text-center text-3xl font-bold leading-tight sm:text-[44px]">
          {contact.title}
        </h2>

        <p className="mx-auto mt-4 w-full max-w-xl text-center text-sm leading-7 text-zinc-400">
          {contact.description}
        </p>

        <div className="mx-auto mt-10 grid w-full max-w-[640px] grid-cols-1 gap-4 sm:grid-cols-3">
          <a
            className="contact-link flex min-h-16 w-full items-center justify-center gap-2 rounded-xl border border-[#EAB308]/70 bg-[#EAB308] px-5 py-4 text-sm font-bold text-black transition hover:bg-[#FACC15]"
            href={contact.email.href}
          >
            <Mail size={18} />
            {contact.email.label}
          </a>

          {contact.socials.map((social) => (
            <a
              className="contact-link flex min-h-16 w-full items-center justify-center gap-2 rounded-xl border border-zinc-700 bg-[#111827] px-5 py-4 text-sm font-semibold text-zinc-100 transition hover:border-[#EAB308] hover:text-[#EAB308]"
              href={social.href}
              key={social.label}
              rel="noopener noreferrer"
              target="_blank"
            >
              {social.label === "GitHub" ? <GitHubIcon /> : <LinkedInIcon />}
              {social.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
