import React from "react";
import type { MetricItem } from "../types";

interface Props {
  metric: MetricItem;
}

export function MetricCard({ metric }: Props) {
  return (
    <figure
      className="metric"
      role="figure"
      aria-label={`${metric.label} ${metric.value}`}
    >
      <figcaption className="metric-label">{metric.label}</figcaption>
      <div className="metric-value">{metric.value}</div>
      {metric.note ? <div className="metric-note">{metric.note}</div> : null}
    </figure>
  );
}

export default MetricCard;
