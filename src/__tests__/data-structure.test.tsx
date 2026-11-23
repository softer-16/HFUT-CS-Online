// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from 'vitest';
import { mountSimulator } from '../components/data-structure/runtime.js';
import template from '../components/data-structure/template.html?raw';
import { courses } from '../courses/registry';

const ALGORITHM_IDS = [
  "complexityLoop",
  "linearInsertDelete",
  "linkedDedup",
  "orderedIntersection",
  "linkedSplit",
  "linkedInsertionSort",
  "doubleListDelete",
  "linkedQueueEnqueue",
  "stackSequence",
  "circularQueue",
  "stringSubstrings",
  "arrayAddress",
  "sparseMatrix",
  "generalizedList",
  "arrayPartition",
  "fact",
  "hanoi",
  "preorderTraversal",
  "inorderTraversal",
  "postorderTraversal",
  "heightCount",
  "restoreTree",
  "threadedTree",
  "forestTransform",
  "huffman",
  "nonRecursivePreorder",
  "deleteSubtree",
  "swapChildren",
  "levelOrderLeaves",
  "buildTree",
  "treeArray",
  "relation",
  "lca",
  "leafPath",
  "childSibling",
  "matrix",
  "adjList",
  "dfs",
  "bfs",
  "prim",
  "kruskal",
  "topo",
  "connectedComponents",
  "matrixToList",
  "deleteVertexConnectivity",
  "aoeCritical",
  "dijkstra",
  "floyd",
  "sequential",
  "sequentialAsl",
  "binaryDecisionTree",
  "bstDelete",
  "bstAsl",
  "hashAsl",
  "binary",
  "block",
  "bst",
  "avl",
  "hash",
  "insertion",
  "shell",
  "bubble",
  "quick",
  "selection",
  "heap",
  "merge",
  "counting",
  "radix",
  "bucket"
];

let dispose: (() => void) | undefined;
afterEach(() => {
  dispose?.();
  document.body.replaceChildren();
  vi.useRealTimers();
});

function mount() {
  const host = document.createElement('div');
  document.body.append(host);
  const root = host.attachShadow({ mode: 'open' });
  root.innerHTML = template;
  dispose = mountSimulator(root);
  return root;
}

describe('数据结构模拟器', () => {
  it('注册课程并保留完整演示目录', () => {
    expect(courses.find(c => c.name === '数据结构')?.base).toBe('/ds');
    const root = mount();
    const ids = [...root.querySelectorAll<HTMLButtonElement>('.algoBtn')].map(b => b.dataset.id);
    expect(ids).toEqual(ALGORITHM_IDS);
    expect(new Set(ids).size).toBe(69);
  });

  it.each(ALGORITHM_IDS)('%s 的全部步骤均可渲染', (id) => {
    const root = mount();
    (root.querySelector(`[data-id="${id}"]`) as HTMLButtonElement).click();
    const next = root.getElementById('nextBtn') as HTMLButtonElement;
    const total = Number(root.getElementById('stepCount')!.textContent!.split('/')[1]);
    expect(total).toBeGreaterThan(0);
    for (let i = 1; i <= total; i++) {
      expect(root.getElementById('visual')!.innerHTML).not.toBe('');
      expect(root.getElementById('stepText')!.textContent).not.toBe('');
      next.click();
    }
    (root.getElementById('resetBtn') as HTMLButtonElement).click();
    expect(root.getElementById('stepCount')!.textContent).toMatch(/^1 \/ /);
  }, 30000);

  it('排序参数支持空数组、重复值和负数，直接主题链接正常', () => {
    const root = mount();
    (root.querySelector('[data-id="insertion"]') as HTMLButtonElement).click();
    for (const value of ['', '3,3,-2,0', '5']) {
      const input = root.getElementById('arrayParam') as HTMLInputElement;
      input.value = value;
      (root.getElementById('arrayApply') as HTMLButtonElement).click();
      expect(root.getElementById('stepCount')!.textContent).not.toContain('/ 0');
      expect(root.getElementById('visual')!.innerHTML).not.toBe('');
    }
    dispose!();
    root.innerHTML = template;
    dispose = mountSimulator(root, 'linkedQueueEnqueue');
    expect(root.getElementById('title')!.textContent).toBe('链队入队');
  });

  it('搜索和自动播放可用，卸载停止计时器', () => {
    vi.useFakeTimers();
    const root = mount();
    const filter = root.getElementById('filterInput') as HTMLInputElement;
    filter.value = '链队';
    filter.dispatchEvent(new Event('input'));
    expect([...root.querySelectorAll<HTMLElement>('.algoBtn')].filter(b => b.style.display !== 'none')).toHaveLength(1);
    (root.querySelector('[data-id="linkedQueueEnqueue"]') as HTMLButtonElement).click();
    (root.getElementById('playBtn') as HTMLButtonElement).click();
    vi.advanceTimersByTime(900);
    expect(root.getElementById('stepCount')!.textContent).toMatch(/^2 \/ /);
    dispose!();
    expect(vi.getTimerCount()).toBe(0);
  });
});
