import { useEffect } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import ThemeToggle from '../components/ThemeToggle';
import DataStructureResource from '../components/DataStructureResource';
import DataStructureSimulator from '../components/DataStructureSimulator';
import CourseAttachmentsPage from '../pages/CourseAttachmentsPage';
import { recordCourseView } from '../lib/recentCourses';
import { useToc } from '../lib/toc';
import { DS_BASE } from './registry';

export default function DsCourse() {
  const toc = useToc();
  useEffect(() => {
    recordCourseView('数据结构');
    toc.report([], () => {});
    return () => toc.report([], () => {});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="hub-shell">
      <header className="hub-topbar">
        <div className="hub-nav-left"><span className="hub-brand">数据结构</span></div>
        <nav className="hub-topbar-right" aria-label="数据结构课程导航">
          <Link className="hub-toplink" to="/">课程目录</Link>
          <Link className="hub-toplink" to={DS_BASE}>动画</Link>
          <Link className="hub-toplink" to={`${DS_BASE}/attachments`}>附件</Link>
          <Link className="hub-toplink" to={`${DS_BASE}/resources`}>学习资源</Link>
          <a className="hub-toplink" href={`${import.meta.env.BASE_URL}guides/data-structure/数据结构可视化模拟器使用指南.pdf`} target="_blank" rel="noreferrer">使用指南</a>
          <ThemeToggle />
        </nav>
      </header>
      <Routes>
        <Route path="attachments" element={<CourseAttachmentsPage />} />
        <Route path="resources" element={<main className="hub-main"><DataStructureResource /></main>} />
        <Route path=":algorithmId?" element={<DataStructureSimulator />} />
      </Routes>
    </div>
  );
}
