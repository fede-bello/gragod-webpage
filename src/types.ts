export interface LinkItem {
  label: string;
  href: string;
}

export interface MetricItem {
  label: string;
  value: string;
  note?: string;
}

export interface DatasetInfo {
  name: string;
  description: string;
}

export interface Content {
  metaTitle: string;
  metaDescription: string;
  title: string;
  subtitle: string;
  authors: string;
  affiliation?: string;
  ctas: LinkItem[];
  tldr: string[];
  why: string[];
  method: string[];
  resultsHighlights: string[];
  contributions: string[];
  links: LinkItem[];
  citation?: string; // BibTeX or plain text
  contacts?: string[];
}
