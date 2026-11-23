/* 课程注册表 —— 站点里"哪些课已上线、挂在哪个路由"的唯一事实源。
 * name 与 课件与期末题整理/ 里的课程目录名一致时，首页卡片自动标记「已上线」并链接 base；
 * 不在目录中（资料来自本仓库自建内容）的课程，首页按 semester 注入虚拟卡片。 */
export interface CourseEntry {
  /** URL 段内的课程 id（稳定不变，改名不影响路由） */
  id: string;
  /** 课程显示名（与 catalog.name 对齐） */
  name: string;
  /** 所属学期文件夹名 */
  semester: string;
  /** 课程路由前缀；课程内部路由一律相对 */
  base: string;
  ready: boolean;
  /** 一句话来源说明（首页卡片副标） */
  source: string;
}

export const courses: readonly CourseEntry[] = [
  {
    id: 'algorithm-design',
    name: '算法设计与分析',
    semester: '大三上',
    base: '/algo',
    ready: true,
    source: '八讲考点手册 · 24 个交互式动画 · 420 题在线练习',
  },
  {
    id: 'os',
    name: '操作系统',
    semester: '大三上',
    base: '/os',
    ready: true,
    source: '七章课件精讲 · 期末大题精讲 · 4 份试卷在线练习',
  },
  {
    id: 'computer-network',
    name: '计算机网络',
    semester: '大三上',
    base: '/net',
    ready: true,
    source: '七章课件讲义 · 3 套期末试卷在线练习',
  },
  {
    id: 'program-design-art',
    name: '程序设计艺术与方法',
    semester: '大二上',
    base: '/pat',
    ready: true,
    source: '三讲课件精讲 · ICPC 讲义六章 · 省赛真题在线练习',
  },
  {
    id: 'artificial-intelligence',
    name: '人工智能原理',
    semester: '大三上',
    base: '/ai',
    ready: true,
    source: '设计报告题库整理 · 15 个选题在线练习（课件未收录）',
  },
  {
    id: 'software-architecture',
    name: '软件体系结构',
    semester: '大三上',
    base: '/sa',
    ready: true,
    source: '四章课件讲义（第4/5/7章 + RSA 建模教程专题）· 试题暂未收录',
  },
  {
    id: 'university-physics',
    name: '大学物理',
    semester: '大二上',
    base: '/phys',
    ready: true,
    source: '十二章课件精讲（力学·热学·电磁学·光学）· 4 份期末试卷在线练习',
  },
  {
    id: 'computer-architecture',
    name: '计算机体系结构',
    semester: '大三上',
    base: '/ca',
    ready: true,
    source: '十三讲课件精讲（第 2～14 讲）· 3 份试题在线练习',
  },
  {
    id: 'advanced-mathematics',
    name: '高等数学',
    semester: '大一上',
    base: '/math',
    ready: true,
    source: '六章课件精讲（第 8～13 章）· 12 份试卷在线练习',
  },
  {
    id: 'program-design-fundamentals',
    name: '程序设计基础',
    semester: '大一上',
    base: '/pd',
    ready: true,
    source: '十一章课件精讲（C 语言 + C++ 基础）· 试题未收录',
  },
  {
    id: 'computer-network-course-design',
    name: '计算机网络课程设计',
    semester: '大三上',
    base: '/ncd',
    ready: true,
    source: '课程设计报告 + 图书管理系统项目源码 · 课件与试题未收录',
  },
  {
    id: 'network-attack-practice',
    name: '网络攻防实践',
    semester: '大三上',
    base: '/nap',
    ready: true,
    source: '项目实践报告（项目二/四）· 课件与试题未收录',
  },
  {
    id: 'system-hardware-design',
    name: '系统硬件综合设计',
    semester: '大三上',
    base: '/hd',
    ready: true,
    source: '四讲 CPU 设计课件精讲（RISC-V 流水线 / MIPS32 单周期）· 试题未收录',
  },
  {
    id: 'mobile-computing-development',
    name: '移动计算与应用开发',
    semester: '大三上',
    base: '/mc',
    ready: true,
    source: '移动计算实验报告 + 实验二/三/四代码 · 课件未收录',
  },
  {
    id: 'natural-language-understanding',
    name: '自然语言理解',
    semester: '大三上',
    base: '/nlu',
    ready: true,
    source: '分词系统讲解课件（FMM 与 BMM）+ 实验报告与代码 · 试题未收录',
  },
  {
    id: 'operating-system-course-design',
    name: '操作系统课程设计',
    semester: '大三上',
    base: '/oscd',
    ready: true,
    source: '系统软件综合设计报告 · 课件与试题未收录',
  },
  {
    id: 'compiler-principles-course-design',
    name: '编译原理课程设计',
    semester: '大三下',
    base: '/cpd',
    ready: true,
    source: '课程设计报告与指导书 · 课件与试题未收录',
  },
  {
    id: 'network-engineer-training',
    name: '网络工程师综合实训',
    semester: '大三下',
    base: '/ntr',
    ready: true,
    source: '实训题目、实验指导与实训报告 · 课件与试题未收录',
  },
  {
    id: 'computer-vision-deep-learning',
    name: '计算机视觉与深度学习',
    semester: '大三上',
    base: '/cv',
    ready: true,
    source: '图像与视频信息处理实验报告 · 课件与试题未收录',
  },
  {
    id: 'software-project-management',
    name: '软件项目管理',
    semester: '大三下',
    base: '/spm',
    ready: true,
    source: '结课论文 · 课件与试题未收录',
  },
  {
    id: 'big-data-processing',
    name: '大数据处理技术',
    semester: '大三下',
    base: '/bd',
    ready: true,
    source: '作业课件 + 综合设计报告与系列实验 · 试题未收录',
  },
  {
    id: 'computer-application-project-training',
    name: '计算机应用项目实训',
    semester: '大三下',
    base: '/cap',
    ready: true,
    source: '无人机系统答辩课件 + 实训分章文档 · 试题未收录',
  },
  {
    id: 'ai-economics',
    name: '人工智能经济学',
    semester: '大三下',
    base: '/aie',
    ready: true,
    source: '八章课件精讲 · 试题未收录',
  },
  {
    id: 'information-security-technology',
    name: '信息安全技术',
    semester: '大三下',
    base: '/sec',
    ready: true,
    source: '六章课件精讲 + 网络安全补充 · 试题未收录',
  },
  {
    id: 'database-systems',
    name: '数据库系统',
    semester: '大三下',
    base: '/db',
    ready: true,
    source: '九章课件精讲 + 实验环境搭建 · 5 份试卷在线练习',
  },
  {
    id: 'software-engineering',
    name: '软件工程',
    semester: '大三下',
    base: '/se',
    ready: true,
    source: '十三章课件精讲 + 课程设计 · 2 份试卷在线练习',
  },
  {
    id: 'software-testing',
    name: '软件测试',
    semester: '大三下',
    base: '/st',
    ready: true,
    source: '九章课件精讲 + 作业讲解 · 1 份试卷在线练习',
  },
  {
    id: 'distributed-programming',
    name: '分布式程序设计',
    semester: '大四上',
    base: '/dp',
    ready: true,
    source: '实践代码与课后作业、实验/设计/期末报告 · 课件与试题未收录',
  },
  {
    id: 'software-engineer-training',
    name: '软件工程师综合训练',
    semester: '大四上',
    base: '/swt',
    ready: true,
    source: '实习实训报告 + 订单系统源码与数据库备份 · 课件与试题未收录',
  },
  {
    id: 'domain-direction-design',
    name: '领域方向综合设计',
    semester: '大四上',
    base: '/dsd',
    ready: true,
    source: '综合设计报告（含模板）+ 校园巴士系统源码 · 课件与试题未收录',
  },
  {
    id: 'innovation-practice',
    name: '创新实践',
    semester: '大四下',
    base: '/ip',
    ready: true,
    source: '创新实践结课报告 · 课件与试题未收录',
  },
  {
    id: 'data-structures',
    name: '数据结构',
    semester: '大一下',
    base: '/ds',
    ready: true,
    source: '69 个交互演示 · Cynthia Wang',
  },
];

/** 首页/占位页用的未上线课程路由前缀 */
export const STUB_BASE = '/course';

/** 算法课路由前缀 —— 算法课内部组件（TopBar/Sidebar/各页）统一引用此常量，
 * 课程整体换前缀只改 courses[0].base 与此处的对应关系。 */
export const ALGO_BASE = courses[0].base;

/** 操作系统课路由前缀（同上约定） */
export const OS_BASE = courses[1].base;

/** 计算机网络课路由前缀（同上约定） */
export const NET_BASE = courses[2].base;

/** 程序设计艺术与方法课路由前缀（同上约定） */
export const PAT_BASE = courses[3].base;

/** 人工智能原理课路由前缀（同上约定） */
export const AI_BASE = courses[4].base;

/** 软件体系结构课路由前缀（同上约定） */
export const SA_BASE = courses[5].base;

/** 大学物理课路由前缀（同上约定） */
export const PHYS_BASE = courses[6].base;

/** 计算机体系结构课路由前缀（同上约定） */
export const CA_BASE = courses[7].base;

/** 高等数学课路由前缀（同上约定） */
export const MATH_BASE = courses[8].base;

/** 程序设计基础课路由前缀（同上约定） */
export const PD_BASE = courses[9].base;

/** 计算机网络课程设计课路由前缀（同上约定） */
export const NCD_BASE = courses[10].base;

/** 网络攻防实践课路由前缀（同上约定） */
export const NAP_BASE = courses[11].base;

/** 系统硬件综合设计课路由前缀（同上约定） */
export const HD_BASE = courses[12].base;

/** 移动计算与应用开发课路由前缀（同上约定） */
export const MC_BASE = courses[13].base;

/** 自然语言理解课路由前缀（同上约定） */
export const NLU_BASE = courses[14].base;

/** 操作系统课程设计课路由前缀（同上约定） */
export const OSCD_BASE = courses[15].base;

/** 编译原理课程设计课路由前缀（同上约定） */
export const CPD_BASE = courses[16].base;

/** 网络工程师综合实训课路由前缀（同上约定） */
export const NTR_BASE = courses[17].base;

/** 计算机视觉与深度学习课路由前缀（同上约定） */
export const CV_BASE = courses[18].base;

/** 软件项目管理课路由前缀（同上约定） */
export const SPM_BASE = courses[19].base;

/** 大数据处理技术课路由前缀（同上约定） */
export const BD_BASE = courses[20].base;

/** 计算机应用项目实训课路由前缀（同上约定） */
export const CAP_BASE = courses[21].base;

/** 人工智能经济学课路由前缀（同上约定） */
export const AIE_BASE = courses[22].base;

/** 信息安全技术课路由前缀（同上约定） */
export const SEC_BASE = courses[23].base;

/** 数据库系统课路由前缀（同上约定） */
export const DB_BASE = courses[24].base;

/** 软件工程课路由前缀（同上约定） */
export const SE_BASE = courses[25].base;

/** 软件测试课路由前缀（同上约定） */
export const ST_BASE = courses[26].base;

/** 分布式程序设计课路由前缀（同上约定） */
export const DP_BASE = courses[27].base;

/** 软件工程师综合训练课路由前缀（同上约定） */
export const SWT_BASE = courses[28].base;

/** 领域方向综合设计课路由前缀（同上约定） */
export const DSD_BASE = courses[29].base;

/** 创新实践课路由前缀（同上约定） */
export const IP_BASE = courses[30].base;

export const DS_BASE = '/ds';

export function findCourseByName(name: string): CourseEntry | undefined {
  return courses.find((c) => c.name === name);
}

export function findCourseByBase(base: string): CourseEntry | undefined {
  return courses.find((c) => c.base === base);
}
