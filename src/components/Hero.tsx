import React from "react";
import LinkButton from "./LinkButton";
import GraphArt from "./GraphArt";

interface Props {
  title: string;
  subtitle: string;
  ctas: { label: string; href: string }[];
}

export function Hero({ title, subtitle, ctas }: Props) {
  return (
    <header className="hero" role="banner">
      <div className="container hero-grid">
        <div className="hero-copy">
          <h1
            className="title gradient-text"
            style={{ fontSize: "2.25rem", letterSpacing: "-0.02em" }}
          >
            {title}
          </h1>
          <p
            className="subtitle"
            style={{ fontSize: "1.05rem", marginTop: "0.5rem" }}
          >
            {subtitle}
          </p>
          <div className="actions" role="navigation" aria-label="Primary">
            {ctas.map((c, i) => (
              <LinkButton
                key={c.href}
                href={c.href}
                variant={i === 0 ? "primary" : "default"}
                icon={i === 0 ? "↗" : "↗"}
              >
                {c.label}
              </LinkButton>
            ))}
          </div>
        </div>
        <GraphArt className="hero-art" />
      </div>
    </header>
  );
}

export default Hero;
