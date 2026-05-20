import type { ReactNode } from "react";
import { ui } from "../ui/styles";

export function Container({ children }: { children: ReactNode }) {
  return <div className={ui.inner}>{children}</div>;
}

type PageSectionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
};

export function PageSection({
  children,
  className = "",
  id,
}: PageSectionProps) {
  return (
    <section className={`${ui.section} ${className}`} id={id}>
      <Container>{children}</Container>
    </section>
  );
}
