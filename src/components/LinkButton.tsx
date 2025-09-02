import React from "react";

interface Props {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "default";
  ariaLabel?: string;
}

export function LinkButton({
  href,
  children,
  variant = "default",
  ariaLabel,
}: Props) {
  return (
    <a
      className={`btn ${variant === "primary" ? "primary" : ""}`}
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={ariaLabel}
    >
      {children}
    </a>
  );
}

export default LinkButton;
