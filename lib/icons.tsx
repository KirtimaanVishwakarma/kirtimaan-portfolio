import type { IconType } from "react-icons";
import {
  SiTypescript, SiJavascript, SiPython, SiDart,
  SiReact, SiNextdotjs, SiSolid, SiVite, SiRedux, SiTailwindcss, SiShadcnui, SiReactquery,
  SiNestjs, SiNodedotjs, SiExpress, SiFastapi, SiTypeorm, SiSocketdotio,
  SiServerless, SiDocker, SiMysql, SiPrisma, SiRedis, SiFirebase,
  SiOpenai, SiAnthropic, SiElevenlabs, SiClaude,
  SiFlutter, SiElectron, SiSwift, SiGraphql,
  SiShopify, SiSelenium, SiAuth0, SiApple, SiReactrouter,
  SiMongodb, SiMui, SiJest, SiTestinglibrary, SiGit, SiGitlab, SiKubernetes,
  SiJira, SiFigma, SiHtml5, SiCss, SiBootstrap, SiSwr, SiReacthookform, SiAxios,
  SiGooglemaps,
} from "react-icons/si";
import { FaAws, FaDatabase, FaTerminal, FaCode, FaCheckDouble, FaUsers, FaLayerGroup, FaRocket, FaBug } from "react-icons/fa6";
import {
  LuMic, LuLayoutDashboard, LuSquareTerminal, LuTrendingUp, LuFileText,
  LuShoppingCart, LuBrainCircuit, LuBot, LuClapperboard, LuTerminal,
} from "react-icons/lu";

export type IconDef = { Icon: IconType; color: string };
export type TechItem = { name: string; Icon: IconType; color: string };

const FALLBACK: IconDef = { Icon: FaTerminal, color: "#18d6c4" };

export const iconMap: Record<string, IconDef> = {
  // Languages & Core
  TypeScript: { Icon: SiTypescript, color: "#3B82F6" },
  JavaScript: { Icon: SiJavascript, color: "#F7DF1E" },
  "JavaScript (ES6+)": { Icon: SiJavascript, color: "#F7DF1E" },
  HTML5: { Icon: SiHtml5, color: "#E34F26" },
  CSS3: { Icon: SiCss, color: "#1572B6" },
  Python: { Icon: SiPython, color: "#5B9BD5" },
  Dart: { Icon: SiDart, color: "#34B4F5" },
  SQL: { Icon: FaDatabase, color: "#8AA0C0" },

  // MERN & Frontend
  "React.js": { Icon: SiReact, color: "#61DAFB" },
  React: { Icon: SiReact, color: "#61DAFB" },
  "Next.js": { Icon: SiNextdotjs, color: "#FFFFFF" },
  "React Native": { Icon: SiReact, color: "#61DAFB" },
  "Redux Toolkit": { Icon: SiRedux, color: "#764ABC" },
  Redux: { Icon: SiRedux, color: "#764ABC" },
  "Tailwind CSS": { Icon: SiTailwindcss, color: "#06B6D4" },
  Tailwind: { Icon: SiTailwindcss, color: "#06B6D4" },
  Bootstrap: { Icon: SiBootstrap, color: "#7952B3" },
  "Material UI": { Icon: SiMui, color: "#007FFF" },
  "TanStack Query": { Icon: SiReactquery, color: "#FF4154" },
  TanStack: { Icon: SiReactquery, color: "#FF4154" },
  Vite: { Icon: SiVite, color: "#A07CFF" },
  "shadcn/ui": { Icon: SiShadcnui, color: "#FFFFFF" },
  SolidJS: { Icon: SiSolid, color: "#4D80C9" },

  // Backend & Database
  "Express.js": { Icon: SiExpress, color: "#E6E6E6" },
  Express: { Icon: SiExpress, color: "#E6E6E6" },
  "Node.js": { Icon: SiNodedotjs, color: "#5FA04E" },
  MongoDB: { Icon: SiMongodb, color: "#47A248" },
  MySQL: { Icon: SiMysql, color: "#5B92C4" },
  NestJS: { Icon: SiNestjs, color: "#E0234E" },
  FastAPI: { Icon: SiFastapi, color: "#05B6A2" },
  TypeORM: { Icon: SiTypeorm, color: "#FF7A7A" },
  "REST API": { Icon: FaCode, color: "#18d6c4" },
  "REST API Design & Integration": { Icon: FaCode, color: "#18d6c4" },

  // Libraries & Integrations
  SWR: { Icon: SiSwr, color: "#FFFFFF" },
  Axios: { Icon: SiAxios, color: "#5A29E4" },
  "React-Hook-Form": { Icon: SiReacthookform, color: "#EC5990" },
  "React Google Maps": { Icon: SiGooglemaps, color: "#4285F4" },
  Firebase: { Icon: SiFirebase, color: "#FFCA28" },

  // Testing
  Jest: { Icon: SiJest, color: "#C21325" },
  "React Testing Library (RTL)": { Icon: SiTestinglibrary, color: "#E33332" },
  "Unit Testing": { Icon: FaCheckDouble, color: "#10B981" },
  "Component-Level Testing": { Icon: FaCheckDouble, color: "#10B981" },

  // Tools & DevOps
  Git: { Icon: SiGit, color: "#F05032" },
  GitHub: { Icon: SiApple, color: "#FFFFFF" },
  GitLab: { Icon: SiGitlab, color: "#FC6D26" },
  Docker: { Icon: SiDocker, color: "#2496ED" },
  Kubernetes: { Icon: SiKubernetes, color: "#326CE5" },
  Jira: { Icon: SiJira, color: "#0052CC" },
  Figma: { Icon: SiFigma, color: "#F24E1E" },
  "CI/CD": { Icon: FaRocket, color: "#38BDF8" },

  // Practices
  "Agile/Scrum": { Icon: FaUsers, color: "#F59E0B" },
  "Atomic Design": { Icon: FaLayerGroup, color: "#EC4899" },
  "Code Review": { Icon: FaBug, color: "#8B5CF6" },
  "Performance Optimization": { Icon: LuTrendingUp, color: "#10B981" },
  "Cross-Browser Compatibility": { Icon: FaCode, color: "#3B82F6" },
  Mentoring: { Icon: FaUsers, color: "#F59E0B" },
};

export function getIcon(label: string): IconDef {
  return iconMap[label] ?? FALLBACK;
}

export function getBrandIcon(label: string): IconDef | null {
  return label in iconMap ? iconMap[label] : null;
}

export const projectIcons: Record<string, IconType> = {
  mic: LuMic,
  dashboard: LuLayoutDashboard,
  terminal: LuSquareTerminal,
  chart: LuTrendingUp,
  file: LuFileText,
  cart: LuShoppingCart,
  brain: LuBrainCircuit,
  bot: LuBot,
  clapper: LuClapperboard,
};

export function getProjectIcon(slug: string): IconType {
  return projectIcons[slug] ?? LuTerminal;
}

export const marqueeRowA: TechItem[] = [
  { name: "React.js", Icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", Icon: SiNextdotjs, color: "#FFFFFF" },
  { name: "Node.js", Icon: SiNodedotjs, color: "#5FA04E" },
  { name: "Express.js", Icon: SiExpress, color: "#E6E6E6" },
  { name: "NestJS", Icon: SiNestjs, color: "#E0234E" },
  { name: "MongoDB", Icon: SiMongodb, color: "#47A248" },
  { name: "MySQL", Icon: SiMysql, color: "#5B92C4" },
  { name: "TypeScript", Icon: SiTypescript, color: "#3B82F6" },
  { name: "Redux Toolkit", Icon: SiRedux, color: "#764ABC" },
  { name: "Material UI", Icon: SiMui, color: "#007FFF" },
  { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Jest", Icon: SiJest, color: "#C21325" },
  { name: "RTL", Icon: SiTestinglibrary, color: "#E33332" },
  { name: "Git", Icon: SiGit, color: "#F05032" },
];

export const marqueeRowB: TechItem[] = [
  { name: "Docker", Icon: SiDocker, color: "#2496ED" },
  { name: "Kubernetes", Icon: SiKubernetes, color: "#326CE5" },
  { name: "Firebase", Icon: SiFirebase, color: "#FFCA28" },
  { name: "SWR", Icon: SiSwr, color: "#FFFFFF" },
  { name: "Axios", Icon: SiAxios, color: "#5A29E4" },
  { name: "React Hook Form", Icon: SiReacthookform, color: "#EC5990" },
  { name: "TanStack", Icon: SiReactquery, color: "#FF4154" },
  { name: "React Native", Icon: SiReact, color: "#61DAFB" },
  { name: "Bootstrap", Icon: SiBootstrap, color: "#7952B3" },
  { name: "GitLab", Icon: SiGitlab, color: "#FC6D26" },
  { name: "Jira", Icon: SiJira, color: "#0052CC" },
  { name: "Figma", Icon: SiFigma, color: "#F24E1E" },
];
