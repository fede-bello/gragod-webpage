import React from "react";

type Theme = "light" | "dark" | "system";

function getSystemTheme(): "light" | "dark" {
  return window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function applyTheme(theme: Theme) {
  const root = document.documentElement;
  if (theme === "system") {
    root.removeAttribute("data-theme");
  } else {
    root.setAttribute("data-theme", theme);
  }
}

export function ThemeToggle() {
  const [theme, setTheme] = React.useState<Theme>(() => {
    const saved = localStorage.getItem("theme") as Theme | null;
    return saved ?? "system";
  });

  React.useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  function cycleTheme() {
    const next: Theme =
      theme === "system"
        ? getSystemTheme() === "dark"
          ? "light"
          : "dark"
        : theme === "dark"
        ? "light"
        : "dark";
    const toStore: Theme = next;
    setTheme(toStore);
    localStorage.setItem("theme", toStore);
  }

  const label = `Toggle theme (current: ${theme})`;

  return (
    <button
      className="btn"
      onClick={cycleTheme}
      aria-label={label}
      title={label}
    >
      {/* Simple icon-like text to avoid extra assets */}
      🌓{" "}
      <span className="muted" style={{ fontSize: "0.875rem" }}>
        {theme}
      </span>
    </button>
  );
}

export default ThemeToggle;
