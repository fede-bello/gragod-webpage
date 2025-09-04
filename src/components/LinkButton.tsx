import React from "react";

interface Props {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "default";
  ariaLabel?: string;
  icon?: React.ReactNode;
}

export function LinkButton({
  href,
  children,
  variant = "default",
  ariaLabel,
  icon,
}: Props) {
  return (
    <a
      className={`btn ${variant === "primary" ? "primary" : ""}`}
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={ariaLabel}
    >
      {icon ? (
        <span className="btn-icon" aria-hidden>
          {icon}
        </span>
      ) : null}
      <span>{children}</span>
    </a>
  );
}

export default LinkButton;
