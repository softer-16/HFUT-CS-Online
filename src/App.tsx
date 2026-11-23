import { lazy, Suspense } from 'react';
import { Navigate, Route, Routes, useParams } from 'react-router-dom';
import CourseHubPage from './pages/CourseHubPage';
import CourseStubPage from './pages/CourseStubPage';
import { ALGO_BASE, OS_BASE, NET_BASE, PAT_BASE, AI_BASE, SA_BASE, PHYS_BASE, CA_BASE, MATH_BASE, PD_BASE, NCD_BASE, NAP_BASE, HD_BASE, MC_BASE, NLU_BASE, OSCD_BASE, CPD_BASE, NTR_BASE, CV_BASE, SPM_BASE, BD_BASE, CAP_BASE, AIE_BASE, SEC_BASE, DB_BASE, SE_BASE, ST_BASE, DP_BASE, SWT_BASE, DSD_BASE, IP_BASE } from './courses/registry';
import { DS_BASE } from './courses/registry';
import { ErrataProvider } from './lib/errata/context';

/** 课程按需加载：首屏只载首页，进入课程时再拉取课程包 */
const AlgorithmCourse = lazy(() => import('./courses/AlgorithmCourse'));
const OsCourse = lazy(() => import('./courses/OsCourse'));
const NetworkCourse = lazy(() => import('./courses/NetworkCourse'));
const PatCourse = lazy(() => import('./courses/PatCourse'));
const AiCourse = lazy(() => import('./courses/AiCourse'));
const SaCourse = lazy(() => import('./courses/SaCourse'));
const PhysCourse = lazy(() => import('./courses/PhysCourse'));
const CaCourse = lazy(() => import('./courses/CaCourse'));
const MathCourse = lazy(() => import('./courses/MathCourse'));
const PdCourse = lazy(() => import('./courses/PdCourse'));
const NcdCourse = lazy(() => import('./courses/NcdCourse'));
const NapCourse = lazy(() => import('./courses/NapCourse'));
const HdCourse = lazy(() => import('./courses/HdCourse'));
const McCourse = lazy(() => import('./courses/McCourse'));
const NluCourse = lazy(() => import('./courses/NluCourse'));
const OscdCourse = lazy(() => import('./courses/OscdCourse'));
const CpdCourse = lazy(() => import('./courses/CpdCourse'));
const NtrCourse = lazy(() => import('./courses/NtrCourse'));
const CvCourse = lazy(() => import('./courses/CvCourse'));
const SpmCourse = lazy(() => import('./courses/SpmCourse'));
const BdCourse = lazy(() => import('./courses/BdCourse'));
const CapCourse = lazy(() => import('./courses/CapCourse'));
const AieCourse = lazy(() => import('./courses/AieCourse'));
const SecCourse = lazy(() => import('./courses/SecCourse'));
const DbCourse = lazy(() => import('./courses/DbCourse'));
const SeCourse = lazy(() => import('./courses/SeCourse'));
const StCourse = lazy(() => import('./courses/StCourse'));
const DpCourse = lazy(() => import('./courses/DpCourse'));
const SwtCourse = lazy(() => import('./courses/SwtCourse'));
const DsdCourse = lazy(() => import('./courses/DsdCourse'));
const DsCourse = lazy(() => import('./courses/DsCourse'));
const IpCourse = lazy(() => import('./courses/IpCourse'));

/** 旧版单课程链接 → /algo/*（历史收藏与外链不失效） */
function LegacyDeckRedirect() {
  const { deckId } = useParams();
  return <Navigate to={`${ALGO_BASE}/deck/${deckId}`} replace />;
}

/**
 * 站点层路由：只做「首页 + 各课程前缀 → 课程根组件 + 旧链接重定向」。
 * 每门课程是自包含布局（自带导航栏），在这里以一条 Route 接入。
 */
export default function App() {
  return (
    <>
      {/* 双色光晕背景：全站最底层，首页/课程页共用（CSS 在 base.css） */}
      <div className="bg-aura" aria-hidden="true" />
      <Suspense fallback={null}>
      <ErrataProvider>
      <Routes>
        <Route path="/" element={<CourseHubPage />} />
        <Route path={`${ALGO_BASE}/*`} element={<AlgorithmCourse />} />
        <Route path={`${OS_BASE}/*`} element={<OsCourse />} />
        <Route path={`${NET_BASE}/*`} element={<NetworkCourse />} />
        <Route path={`${PAT_BASE}/*`} element={<PatCourse />} />
        <Route path={`${AI_BASE}/*`} element={<AiCourse />} />
        <Route path={`${SA_BASE}/*`} element={<SaCourse />} />
        <Route path={`${PHYS_BASE}/*`} element={<PhysCourse />} />
        <Route path={`${CA_BASE}/*`} element={<CaCourse />} />
        <Route path={`${MATH_BASE}/*`} element={<MathCourse />} />
        <Route path={`${PD_BASE}/*`} element={<PdCourse />} />
        <Route path={`${NCD_BASE}/*`} element={<NcdCourse />} />
        <Route path={`${NAP_BASE}/*`} element={<NapCourse />} />
        <Route path={`${HD_BASE}/*`} element={<HdCourse />} />
        <Route path={`${MC_BASE}/*`} element={<McCourse />} />
        <Route path={`${NLU_BASE}/*`} element={<NluCourse />} />
        <Route path={`${OSCD_BASE}/*`} element={<OscdCourse />} />
        <Route path={`${CPD_BASE}/*`} element={<CpdCourse />} />
        <Route path={`${NTR_BASE}/*`} element={<NtrCourse />} />
        <Route path={`${CV_BASE}/*`} element={<CvCourse />} />
        <Route path={`${SPM_BASE}/*`} element={<SpmCourse />} />
        <Route path={`${BD_BASE}/*`} element={<BdCourse />} />
        <Route path={`${CAP_BASE}/*`} element={<CapCourse />} />
        <Route path={`${AIE_BASE}/*`} element={<AieCourse />} />
        <Route path={`${SEC_BASE}/*`} element={<SecCourse />} />
        <Route path={`${DB_BASE}/*`} element={<DbCourse />} />
        <Route path={`${SE_BASE}/*`} element={<SeCourse />} />
        <Route path={`${ST_BASE}/*`} element={<StCourse />} />
        <Route path={`${DP_BASE}/*`} element={<DpCourse />} />
        <Route path={`${SWT_BASE}/*`} element={<SwtCourse />} />
        <Route path={`${DSD_BASE}/*`} element={<DsdCourse />} />
        <Route path={`${IP_BASE}/*`} element={<IpCourse />} />
        <Route path={`${DS_BASE}/*`} element={<DsCourse />} />
        <Route path="/course/:name/*" element={<CourseStubPage />} />
        <Route path="/deck/:deckId" element={<LegacyDeckRedirect />} />
        <Route path="/practice" element={<Navigate to={`${ALGO_BASE}/practice`} replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      </ErrataProvider>
      </Suspense>
    </>
  );
}
