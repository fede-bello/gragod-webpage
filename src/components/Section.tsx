import React from "react";
import Highlight from "./Highlight";

interface Props {
  id?: string;
  title: string;
  children: React.ReactNode;
}

export function Section({ id, title, children }: Props) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className="container section"
    >
      <h2 id={`${id}-title`} className="section-title">
        <span className="section-emoji" aria-hidden>
          {(() => {
            switch (id) {
              case "objectives":
                return "🎯";
              case "why":
                return "💡";
              case "method":
                return "🧠";
              case "conclusions":
                return "📊";
              case "contributions":
                return "🧩";
              case "authors":
                return "👥";
              default:
                return "📌";
            }
          })()}
        </span>
        <Highlight text={title} />
      </h2>
      <div className="section-content">{children}</div>
    </section>
  );
}

export default Section;
