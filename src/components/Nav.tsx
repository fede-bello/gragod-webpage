import React from "react";
import type { LinkItem } from "../types";
import ThemeToggle from "./ThemeToggle";

interface Props {
  links: LinkItem[];
}

export function Nav({ links }: Props) {
  const [active, setActive] = React.useState<string | null>(null);
  const [progress, setProgress] = React.useState<number>(0);
  const [hidden, setHidden] = React.useState<boolean>(false);
  const lastYRef = React.useRef<number>(0);
  const suppressHideUntilRef = React.useRef<number>(0);

  function handleLinkClick(targetId?: string) {
    suppressHideUntilRef.current = Date.now() + 1200; // suppress during smooth scroll
    setHidden(false);
    if (targetId) setActive(targetId);
  }

  React.useEffect(() => {
    const sectionIds = links
      .map((l) => (l.href.startsWith("#") ? l.href.slice(1) : null))
      .filter(Boolean) as string[];
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (sections.length === 0) return;

    function getOffset() {
      const nav = document.querySelector(".nav-wrap") as HTMLElement | null;
      return nav ? nav.offsetHeight + 8 : 64;
    }
    function setActiveByScroll() {
      if (sections.length === 0) return;
      const offset = getOffset();
      const viewportTop = offset;
      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 1;

      // Determine which section crosses the viewportTop line
      let currentId = sections[0].id;
      for (let i = sections.length - 1; i >= 0; i--) {
        const rect = sections[i].getBoundingClientRect();
        if (rect.top <= viewportTop) {
          currentId = sections[i].id;
          break;
        }
      }

      // If at the bottom of the page, force last section
      if (atBottom) {
        currentId = sections[sections.length - 1].id;
      }
      setActive(currentId);
    }

    setActiveByScroll();
    window.addEventListener("scroll", setActiveByScroll, { passive: true });
    function onHash() {
      suppressHideUntilRef.current = Date.now() + 1200;
      setHidden(false);
      setActiveByScroll();
    }
    window.addEventListener("hashchange", onHash);
    window.addEventListener("resize", setActiveByScroll);
    return () => {
      window.removeEventListener("scroll", setActiveByScroll as any);
      window.removeEventListener("hashchange", onHash as any);
      window.removeEventListener("resize", setActiveByScroll as any);
    };
  }, [links]);

  React.useEffect(() => {
    function onScroll() {
      const doc = document.documentElement;
      const scrolled = doc.scrollTop;
      const height = doc.scrollHeight - doc.clientHeight;
      const pct = height > 0 ? (scrolled / height) * 100 : 0;
      setProgress(Math.max(0, Math.min(100, pct)));
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  React.useEffect(() => {
    const THRESHOLD = 6; // px to avoid jitter
    function handleHideOnScroll() {
      const y = window.scrollY;
      const now = Date.now();
      if (now < suppressHideUntilRef.current) {
        lastYRef.current = y;
        return;
      }
      const lastY = lastYRef.current;
      if (y <= 0) {
        setHidden(false);
      } else if (y > lastY + THRESHOLD) {
        // scrolling down
        setHidden(true);
      } else if (y < lastY - THRESHOLD) {
        // scrolling up
        setHidden(false);
      }
      lastYRef.current = y;
    }
    lastYRef.current = window.scrollY;
    window.addEventListener("scroll", handleHideOnScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleHideOnScroll);
  }, []);

  return (
    <div className={`nav-wrap${hidden ? " hidden" : ""}`}>
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
                onClick={() => handleLinkClick(id)}
              >
                {l.label}
              </a>
            );
          })}
        </div>
        <ThemeToggle />
      </nav>
      <div className="progress" aria-hidden>
        <div className="progress-bar" style={{ width: `${progress}%` }} />
      </div>
    </div>
  );
}

export default Nav;
