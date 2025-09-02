import React from "react";

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
      className="container"
      style={{ marginTop: "1.5rem" }}
    >
      <h2 id={`${id}-title`}>{title}</h2>
      <div className="card" style={{ marginTop: "0.75rem" }}>
        {children}
      </div>
    </section>
  );
}

export default Section;
