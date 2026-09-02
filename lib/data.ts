export const profile = {
  name: "Kirtimaan Vishwakarma",
  firstName: "Kirtimaan",
  lastName: "Vishwakarma",
  role: "Frontend Developer (React.js / Next.js) | Full-Stack Developer (MERN)",
  company: "AI-Thinkers",
  location: "Gurugram, Noida, Delhi / India",
  email: "vishwakarma.kirtimaan@gmail.com",
  phone: "+91 7985036925",
  github: "https://github.com/KirtimaanVishwakarma",
  linkedin: "https://linkedin.com/in/kirtimaan-vishwakarma",
  resumePdf: "/resume.pdf",
  tagline:
    "Frontend Developer and Full-Stack (MERN) Developer with 5+ years of experience designing and building scalable, high-performance web applications using React.js, Next.js, Node.js, Express.js, and MongoDB.",
  roleWords: [
    "React.js & Next.js",
    "Full-Stack MERN",
    "Scalable Healthcare Portals",
    "Order Management Systems",
    "Atomic Design & App Router",
  ],
};

export const stats = [
  { num: "5+", label: "years experience" },
  { num: "1M+", label: "orders processed / month" },
  { num: "1,000+", label: "healthcare providers" },
  { num: "4", label: "companies & products" },
];

export type Experience = {
  role: string;
  company: string;
  location: string;
  period: string;
  bullets: string[];
};

export const experience: Experience[] = [
  {
    role: "Senior Software Engineer",
    company: "AI-Thinkers",
    location: "Telangana, India",
    period: "Oct 2025 – Mar 2026",
    bullets: [
      "Engineered a scalable healthcare portal (**E360+ Patient & Provider Portal**) used by **1,000+ healthcare providers**, managing data for millions of patients nationwide, as part of a cross-functional engineering team of 30+.",
      "Architected a reusable, responsive component library using **React, Next.js, and Material UI under Atomic Design principles**, streamlining new-feature development across the product.",
      "Led migration from **Next.js Pages Router to App Router**, leveraging Server Components and optimized data fetching to improve initial page load speed and reduce client-side JavaScript, backed by **Jest and React Testing Library (RTL)** component-level test coverage to safeguard existing functionality.",
    ],
  },
  {
    role: "Frontend Engineer",
    company: "Kredmint Technology Pvt Ltd",
    location: "Noida, Uttar Pradesh, India",
    period: "Jun 2023 – Aug 2025",
    bullets: [
      "Built a scalable **Order Management System** web application processing **1,000,000+ orders monthly** across **20,000+ retailers and 100+ warehouses**, with full order lifecycle tracking from central warehouse to retailer level.",
      "Shipped real-time features including dynamic mobile layout control, coupon creation, and **Firebase push notifications** to strengthen user engagement and streamline operations.",
      "Led feature development and mentored junior developers, resolving critical performance issues and shipping reliable releases across staging and production environments.",
    ],
  },
  {
    role: "Software Developer",
    company: "Eron Micro",
    location: "Delhi, India",
    period: "Sep 2022 – Mar 2023",
    bullets: [
      "Built an **attendance management module** used by **70+ employees**, automating attendance calculations, leave tracking, and working-hour records through a structured web interface.",
      "Reduced manual errors and eliminated dependency on Excel-based calculations by implementing validations that prevented duplicate and incorrect attendance entries, improving overall data accuracy.",
      "Partnered with cross-functional teams to maintain code quality and ensure seamless integration with backend services, strengthening overall system reliability.",
    ],
  },
  {
    role: "Software Developer",
    company: "Softintra Technology Pvt Ltd",
    location: "Gorakhpur, Uttar Pradesh, India",
    period: "Nov 2019 – Jun 2022",
    bullets: [
      "Delivered responsive web application features using **React.js and JavaScript**, collaborating closely with designers and backend engineers to ship production-ready UI components on schedule.",
      "Improved code reliability through systematic code reviews, debugging, and testing, strengthening maintainability and reducing defects across projects.",
    ],
  },
];

export type Project = {
  name: string;
  flag: string;
  blurb: string;
  stack: string[];
  icon: string;
  span: "lg" | "md" | "sm";
  featured?: boolean;
  image?: string;
};

export const projects: Project[] = [
  {
    name: "E360+ Patient & Provider Portal",
    flag: "healthcare · flagship portal",
    blurb:
      "Scalable healthcare portal used by 1,000+ healthcare providers managing data for millions of patients nationwide. Built with Atomic Design component architecture, SWR data fetching, and Next.js App Router migration.",
    stack: ["React.js", "Next.js", "Redux Toolkit", "Material UI", "SWR", "React-Hook-Form", "Jest"],
    icon: "dashboard",
    span: "lg",
    featured: true,
  },
  {
    name: "Order Management System",
    flag: "fintech & logistics · high-scale",
    blurb:
      "Order management web application processing 1,000,000+ orders monthly across 20,000+ retailers and 100+ warehouses with complete lifecycle tracking and Firebase push notifications.",
    stack: ["React.js", "Next.js", "Tailwind CSS", "React-Hook-Form", "TanStack", "React Google Maps", "Firebase"],
    icon: "cart",
    span: "md",
    featured: true,
  },
  {
    name: "Employee Attendance & Admin Panel",
    flag: "enterprise · workforce automation",
    blurb:
      "Automated attendance management module for 70+ employees tracking working hours, leave requests, and data validation rules to eliminate manual Excel entry errors.",
    stack: ["React.js", "Redux", "Redux Thunk", "Material UI", "React-Hook-Form"],
    icon: "file",
    span: "md",
  },
  {
    name: "Full-Stack MERN & NestJS Platform",
    flag: "full-stack · mern & nestjs",
    blurb:
      "Production web architecture with MongoDB & MySQL database modeling, Express.js & NestJS REST API endpoints, JWT authorization, and interactive React client dashboards.",
    stack: ["MongoDB", "MySQL", "Express.js", "NestJS", "React.js", "Node.js", "Redux Toolkit"],
    icon: "terminal",
    span: "sm",
  },
  {
    name: "Atomic Component Design System",
    flag: "ui/ux · component library",
    blurb:
      "Reusable, accessible component design system built with React, Next.js, and Material UI under Atomic Design principles, streamlining feature development across engineering teams.",
    stack: ["React.js", "Next.js", "Material UI", "Tailwind CSS", "TypeScript"],
    icon: "brain",
    span: "sm",
  },
  {
    name: "Real-time Mobile Layout & Push Engine",
    flag: "mobile & real-time",
    blurb:
      "Dynamic mobile UI layout controller and notification system delivering targeted promotion features, coupon creation, and real-time Firebase push notifications.",
    stack: ["React Native", "Firebase", "Node.js", "TanStack Query"],
    icon: "bot",
    span: "sm",
  },
];

export const skills: { group: string; items: string[] }[] = [
  { group: "full-stack (mern)", items: ["MongoDB", "Express.js", "React.js", "Node.js"] },
  {
    group: "frontend",
    items: [
      "React.js",
      "Next.js",
      "React Native",
      "Redux Toolkit",
      "Redux",
      "JavaScript (ES6+)",
      "TypeScript",
      "HTML5",
      "CSS3",
      "Bootstrap",
      "Tailwind CSS",
      "TanStack Query",
      "Material UI",
    ],
  },
  { group: "backend", items: ["Node.js", "Express.js", "NestJS", "REST API Design & Integration"] },
  { group: "testing", items: ["Jest", "React Testing Library (RTL)", "Unit Testing", "Component-Level Testing"] },
  { group: "database", items: ["MongoDB", "MySQL"] },
  { group: "tools & devops", items: ["Git", "GitHub", "GitLab", "Docker", "Kubernetes", "Jira", "Figma", "CI/CD"] },
  {
    group: "practices",
    items: [
      "Agile/Scrum",
      "Atomic Design",
      "Unit Testing",
      "Code Review",
      "Performance Optimization",
      "Cross-Browser Compatibility",
      "Mentoring",
    ],
  },
];

export const practices = [
  { title: "Atomic Design", desc: "Modular, reusable component architecture" },
  { title: "App Router Migration", desc: "Pages Router to App Router with Server Components" },
  { title: "Performance Optimization", desc: "Reduced JS bundles, optimized data fetching & fast page loads" },
  { title: "Unit & Component Testing", desc: "Jest & React Testing Library (RTL) coverage" },
  { title: "Cross-Browser & Responsive UI", desc: "Tailwind CSS, Bootstrap, Material UI across all viewports" },
  { title: "Mentorship & Leadership", desc: "Code reviews, mentoring junior engineers & agile collaboration" },
];

export const education = [
  {
    degree: "B.Tech",
    place: "Madan Mohan Malaviya University of Technology — Gorakhpur, UP",
    year: "Jul 2016 – Jun 2019",
  },
  {
    degree: "Diploma",
    place: "Board of Technical Education — Lucknow, UP",
    year: "Jun 2012 – Jul 2015",
  },
];

export const languages = ["English", "Hindi"];
