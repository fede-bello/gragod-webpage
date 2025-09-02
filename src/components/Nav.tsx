import React from "react";
import type { LinkItem } from "../types";
import ThemeToggle from "./ThemeToggle";

interface Props {
  links: LinkItem[];
}

export function Nav({ links }: Props) {
  const [active, setActive] = React.useState<string | null>(null);

  React.useEffect(() => {
    const sectionIds = links
      .map((l) => (l.href.startsWith("#") ? l.href.slice(1) : null))
      .filter(Boolean) as string[];
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) {
          setActive(visible[0].target.id);
        }
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [links]);

  return (
    <div className="nav-wrap">
      <nav className="container nav" role="navigation" aria-label="Sections">
        <a href="#main" className="brand" aria-label="Skip to main">
          GraGOD
        </a>
        <div className="nav-links">
          {links.map((l) => {
            const id = l.href.startsWith("#") ? l.href.slice(1) : undefined;
            const isActive = id && active === id;
            return (
              <a
                key={l.href}
                href={l.href}
                className={`nav-link${isActive ? " active" : ""}`}
              >
                {l.label}
              </a>
            );
          })}
        </div>
        <ThemeToggle />
      </nav>
    </div>
  );
}

export default Nav;
