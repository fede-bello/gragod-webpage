import React from "react";
import LinkButton from "./LinkButton";

interface Props {
  title: string;
  subtitle: string;
  ctas: { label: string; href: string }[];
}

export function Hero({ title, subtitle, ctas }: Props) {
  return (
    <header className="hero" role="banner">
      <div className="container">
        <h1
          className="title"
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
            >
              {c.label}
            </LinkButton>
          ))}
        </div>
      </div>
    </header>
  );
}

export default Hero;
