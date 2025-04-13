'use client';

import { useEffect, useRef } from 'react';
import mermaid from 'mermaid';

mermaid.initialize({
  startOnLoad: true,
  theme: 'default',
  securityLevel: 'loose',
  fontFamily: 'sans-serif',
});

interface MermaidDiagramProps {
  chart: string;
  className?: string;
}

export function MermaidDiagram({ chart, className = '' }: MermaidDiagramProps) {
  const mermaidRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (mermaidRef.current) {
      mermaidRef.current.innerHTML = '';
      
      const tempId = `mermaid-${Math.random().toString(36).substring(2, 12)}`;
      mermaidRef.current.innerHTML = `<div class="mermaid" id="${tempId}">${chart}</div>`;

      mermaid.run({
        nodes: [mermaidRef.current.querySelector('.mermaid')!],
      });
    }
  }, [chart]);

  return <div ref={mermaidRef} className={className} />;
}