import React from "react";

interface Props {
  className?: string;
}

export function GraphArt({ className }: Props) {
  return (
    <div className={className} aria-hidden="true">
      <svg
        viewBox="0 0 600 400"
        role="img"
        aria-label=""
        focusable="false"
        style={{ width: "100%", height: "auto", display: "block" }}
      >
        <defs>
          <linearGradient id="edge" x1="0" x2="1">
            <stop
              offset="0%"
              stopColor="var(--edge-from, rgba(15,118,110,0.25))"
            />
            <stop
              offset="100%"
              stopColor="var(--edge-to, rgba(245,158,11,0.35))"
            />
          </linearGradient>
          <radialGradient id="node" cx="50%" cy="50%" r="50%">
            <stop
              offset="0%"
              stopColor="var(--node-core, rgba(255,255,255,0.95))"
            />
            <stop
              offset="100%"
              stopColor="var(--node-outer, rgba(255,255,255,0.15))"
            />
          </radialGradient>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="glow" />
            <feMerge>
              <feMergeNode in="glow" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        {/* Ring graph */}
        {(() => {
          const cx = 300;
          const cy = 200;
          const r = 120;
          const count = 12;
          const nodes = Array.from({ length: count }, (_, i) => {
            const angle = (i / count) * Math.PI * 2 - Math.PI / 2;
            return { x: cx + r * Math.cos(angle), y: cy + r * Math.sin(angle) };
          });
          return (
            <g>
              {/* Edges: ring and a few chords */}
              <g stroke="url(#edge)" strokeWidth="1.25" fill="none">
                {nodes.map((n, i) => {
                  const next = nodes[(i + 1) % count];
                  return (
                    <line
                      key={`e-${i}`}
                      x1={n.x}
                      y1={n.y}
                      x2={next.x}
                      y2={next.y}
                    />
                  );
                })}
                {nodes.map((n, i) => {
                  const target = nodes[(i + 3) % count];
                  return (
                    <line
                      key={`c-${i}`}
                      x1={n.x}
                      y1={n.y}
                      x2={target.x}
                      y2={target.y}
                      opacity={0.5}
                    />
                  );
                })}
              </g>
              {/* Nodes */}
              <g>
                {nodes.map((n, i) => (
                  <g key={i} filter="url(#glow)">
                    <circle cx={n.x} cy={n.y} r="6" fill="url(#node)" />
                    <circle
                      cx={n.x}
                      cy={n.y}
                      r="10"
                      fill="transparent"
                      stroke="var(--node-ring, rgba(15,118,110,0.35))"
                      strokeWidth="0.75"
                    />
                  </g>
                ))}
              </g>
            </g>
          );
        })()}
      </svg>
    </div>
  );
}

export default GraphArt;
