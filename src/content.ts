import type { Content } from "./types";

// Source references:
// - Thesis: tesis.md (local)
// - Repo: https://github.com/GraGODs/GraGOD?tab=readme-ov-file

export const content: Content = {
  metaTitle: "GraGOD — Graph-based TS Anomaly Detection",
  metaDescription:
    "Using graphs and neural networks to spot anomalies in time series data. We tested our approach on industrial and telecom datasets.",
  title: "GraGOD: Using graphs to find anomalies in time series data",
  subtitle: "How we used Graph Neural Networks to detect weird stuff in data",
  authors: "Federico Bello, Gonzalo Chiarlone",
  affiliation: "Facultad de Ingeniería, Universidad de la República",
  ctas: [
    {
      label: "Read the Thesis",
      href: "https://drive.google.com/file/d/1KDqJ-Aj0I6j4H31yq5r8k8wANs7Fj4D2/view",
    },
    {
      label: "View the Code",
      href: "https://github.com/GraGODs/GraGOD?tab=readme-ov-file",
    },
  ],
  objectives: [
    "Turn **time series** data into **graphs** where connections show how variables relate to each other.",
    "Test **different models** (some with graphs, some without) to see what **works best**.",
    "Make a **careful analysis** of the current **state of the art** in time series anomaly detection.",
  ],
  why: [
    "Finding **anomalies is important** in several domains, such as health, industrial systems, cybersecurity, and telecom.",
    "Traditional methods can be misleading, especially with noisy data and long time periods.",
    "**Graphs** can capture how sensors and data streams relate to each other, making detection more **reliable** by using the knowledge of the system.",
  ],
  method: [
    "We model each time series as a node in a graph. We connect them based on known or learned relationships.",
    "Once we have the graph, we use a **GNN** or any other predictive model a characteristic of the time series (e.g. a future value).",
    "We then calculate the **anomaly score** for each series based on the difference between the predicted and actual value.",
    "We then use a **threshold** to decide if the series is anomalous or not.",
  ],
  conclusions: [
    "The **TSAD** area is still in its early stages, and there is much to be explored. Limitations like untrustful metrics and datasets make it hard to easily assess the performance of the models.",
    "For SWaT, using the real system structure really helped. GNN models performed better than the other models. For TELCO, graphs didn't help much.",
    "The **current framework is suboptimal**: predicting a future value does not necessarily align with the objective of detecting anomalies.",
  ],
  contributions: [
    "Built **GraGOD**: a clean, reusable framework for testing graph-based anomaly detection.",
    "Studied how **different graph structures affect anomaly detection performance.**",
    "Showed why some evaluation metrics are misleading and proposed better ways to measure success.",
  ],
  links: [
    {
      label: "GitHub Repository",
      href: "https://github.com/GraGODs/GraGOD?tab=readme-ov-file",
    },
  ],
  citation: undefined,
  contacts: ["fedebello13@gmail.com", "gonzalochiarlone@gmail.com"],
};
