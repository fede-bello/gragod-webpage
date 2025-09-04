import React from "react";

interface Props {
  text: string;
}

export default function Highlight({ text }: Props) {
  // Split on Markdown bold segments **...** (non-greedy)
  const parts = text.split(/(\*\*.+?\*\*)/g);
  return (
    <>
      {parts.map((part, i) => {
        if (/^\*\*.+\*\*$/.test(part)) {
          const inner = part.slice(2, -2);
          return (
            <strong key={i} className="hl">
              {inner}
            </strong>
          );
        }
        return <React.Fragment key={i}>{part}</React.Fragment>;
      })}
    </>
  );
}
