export default function DataStructureResource() {
  return (
    <section aria-label="数据结构交互学习资源">
      <h2>数据结构可视化动画</h2>
      <p>
        <a href="https://softer-16.github.io/data-structure-simulator/" target="_blank" rel="noreferrer">
          数据结构算法可视化交互模拟器
        </a>
        {' · '}Cynthia Wang
      </p>
      <p>按步骤观察线性表、栈与队列、递归、树、图、查找和排序，配合变量状态与知识点说明学习。</p>
      <p>
        <a href={`${import.meta.env.BASE_URL}guides/data-structure/数据结构可视化模拟器使用指南.pdf`} target="_blank" rel="noreferrer">使用指南（PDF）</a>
      </p>
    </section>
  );
}
