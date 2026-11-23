import { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { mountSimulator } from './data-structure/runtime.js';
import template from './data-structure/template.html?raw';
import styles from './data-structure/simulator.css?raw';

export default function DataStructureSimulator() {
  const host = useRef<HTMLDivElement>(null);
  const { algorithmId } = useParams();

  useEffect(() => {
    const root = host.current!.shadowRoot ?? host.current!.attachShadow({ mode: 'open' });
    root.innerHTML = `<style>${styles}</style>${template}`;
    const stop = mountSimulator(root, algorithmId);
    return () => {
      stop();
      root.replaceChildren();
    };
  }, [algorithmId]);

  return <div ref={host} aria-label="数据结构算法可视化交互模拟器" />;
}
