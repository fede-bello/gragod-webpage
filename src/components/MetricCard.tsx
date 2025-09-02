import React from "react";
import type { MetricItem } from "../types";

interface Props {
  metric: MetricItem;
}

export function MetricCard({ metric }: Props) {
  return (
    <div
      className="card"
      role="figure"
      aria-label={`${metric.label} ${metric.value}`}
      style={{ display: "grid", gap: "0.25rem" }}
    >
      <div style={{ fontSize: "0.875rem", color: "var(--muted)" }}>
        {metric.label}
      </div>
      <div
        style={{
          fontSize: "1.75rem",
          fontWeight: 800,
          letterSpacing: "-0.01em",
        }}
      >
        {metric.value}
      </div>
      {metric.note ? (
        <div className="muted" style={{ fontSize: "0.875rem" }}>
          {metric.note}
        </div>
      ) : null}
    </div>
  );
}

export default MetricCard;
