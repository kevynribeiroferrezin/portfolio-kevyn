import { Taskbar } from "./components/layout/Taskbar";
import { AboutSection } from "./components/sections/AboutSection";
import { ContactSection } from "./components/sections/ContactSection";
import { HeroSection } from "./components/sections/HeroSection";
import { projectsSection } from "./components/sections/Projects";
import { ProjectsShowcase } from "./components/sections/ProjectsShowcase";
import { StacksSection } from "./components/sections/StacksSection";
import { ui } from "./components/ui/styles";

export default function Home() {
  return (
    <main className={ui.page}>
      <Taskbar />
      <HeroSection />
      <AboutSection />
      <StacksSection />
      <ProjectsShowcase section={projectsSection} />
      <ContactSection />
    </main>
  );
}
