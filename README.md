# Kirtimaan Vishwakarma — Portfolio

A premium, animated developer portfolio built with **Next.js · TypeScript · Framer Motion · Lenis**.
Features a boot-sequence loader, glassmorphism UI, responsive bento grid, smooth scroll, custom cursor, magnetic buttons, command palette (`Cmd+K` / `Ctrl+K`), and scroll-driven reveal animations.

---

## 👤 About

| | |
|---|---|
| **Role** | Frontend Developer (React.js / Next.js) · Full-Stack Developer (MERN) |
| **Experience** | 5+ years |
| **Location** | Gurugram / Noida / Delhi, India |
| **Email** | vishwakarma.kirtimaan@gmail.com |
| **GitHub** | [KirtimaanVishwakarma](https://github.com/KirtimaanVishwakarma) |
| **LinkedIn** | [kirtimaan-vishwakarma](https://linkedin.com/in/kirtimaan-vishwakarma) |

---

## ⚡ Tech Stack

| Layer | Technologies |
|---|---|
| **Frontend** | React.js, Next.js, TypeScript, Redux Toolkit, TanStack Query, Material UI, Tailwind CSS |
| **Backend** | Node.js, Express.js, NestJS, REST API Design |
| **Database** | MongoDB, MySQL |
| **Testing** | Jest, React Testing Library (RTL) |
| **DevOps / Tools** | Git, GitHub, Docker, Kubernetes, CI/CD, Jira, Figma |
| **Portfolio UI** | Next.js, Framer Motion, Lenis, Lucide React, react-icons |

---

## 🚀 Run Locally

```bash
npm install
npm run dev      # http://localhost:3000
```

> Add `?nointro` to the URL to skip the boot-sequence loader: `http://localhost:3000/?nointro`

---

## 🏗️ Build & Deploy

### Static Export (GitHub Pages)

This project uses `output: "export"` in `next.config.mjs`, producing a fully static site in `./out`.

```bash
npm run build    # outputs to ./out
```

Deployment is automated via **GitHub Actions** on every push to `main`:
1. **build** job — installs deps, runs `npm run build`, creates `.nojekyll`, uploads artifact
2. **deploy** job — publishes to GitHub Pages via `actions/deploy-pages`

See [`.github/workflows/push.yml`](.github/workflows/push.yml).

### Vercel (alternative)

The project is also linked to Vercel (`vercel link`). Deploy instantly with:

```bash
npx vercel
```

---

## 🗂️ Project Structure

```
app/
  layout.tsx          # metadata, fonts, global providers, JSON-LD schema
  page.tsx            # homepage — composes all section components
  globals.css         # design system variables & component styles

components/
  Loader.tsx          # boot / "initializing sequence" preloader
  Background.tsx      # ambient glow blobs, grid, cursor spotlight, noise overlay
  Cursor.tsx          # custom dot + lagging ring cursor
  SmoothScroll.tsx    # Lenis smooth scroll + anchor handling
  Nav.tsx             # sticky glass navigation bar
  ScrollProgress.tsx  # scroll progress indicator
  CommandPalette.tsx  # Cmd+K command palette (section navigation)
  Hero.tsx            # parallax hero, typing role, magnetic CTA buttons, stat counters
  FloatingIcons.tsx   # ambient floating tech icons in hero
  TechMarquee.tsx     # infinite scrolling tech-stack marquee
  Experience.tsx      # scroll-linked professional timeline
  Projects.tsx        # bento grid of featured projects
  TiltCard.tsx        # 3D mouse-tilt glass card used in projects grid
  LivePreview.tsx     # project live-preview overlay
  Skills.tsx          # "Arsenal" categorized tech skill chips
  About.tsx           # engineering practices & education
  Footer.tsx          # footer CTA & social links
  Reveal.tsx          # scroll-reveal animation wrapper
  MagneticButton.tsx  # magnetic hover-effect button
  Counter.tsx         # animated number counter
  BackToTop.tsx       # back-to-top floating button
  Toast.tsx           # toast notification component

lib/
  data.ts             # ALL content — profile, experience, projects, skills, education
  icons.tsx           # tech stack brand icons & Lucide icons mapping

public/
  resume.pdf          # downloadable resume
```

> **To update site content** (bio, roles, experience bullets, projects, skills, education) — edit **`lib/data.ts`** only. No component changes needed.

---

## 🔑 Key Features

- **Boot Loader** — terminal-style "initializing" sequence on first visit
- **Custom Cursor** — dot + lagging ring that reacts to hover targets
- **Command Palette** — `Cmd+K` / `Ctrl+K` for keyboard-driven section navigation
- **Smooth Scroll** — Lenis-powered buttery scroll with anchor support
- **Bento Grid** — 3D-tilt glass project cards with live preview overlays
- **Scroll Animations** — Framer Motion `Reveal` wrappers on every section
- **Floating Icons** — ambient animated tech icons in the hero
- **Tech Marquee** — infinite horizontal scrolling tech band
- **Stats Counter** — animated numbers: 5+ yrs · 1M+ orders · 1,000+ providers · 4 companies
- **Reduced Motion** — respects `prefers-reduced-motion` (disables intro, blobs, smooth scroll)

---

## 📁 Content Overview (`lib/data.ts`)

### Experience
| Period | Role | Company |
|---|---|---|
| Oct 2025 – Mar 2026 | Senior Software Engineer | AI-Thinkers |
| Jun 2023 – Aug 2025 | Frontend Engineer | Kredmint Technology Pvt Ltd |
| Sep 2022 – Mar 2023 | Software Developer | Eron Micro |
| Nov 2019 – Jun 2022 | Software Developer | Softintra Technology Pvt Ltd |

### Featured Projects
| Project | Highlight |
|---|---|
| E360+ Patient & Provider Portal | 1,000+ healthcare providers, Atomic Design, App Router migration |
| Order Management System | 1M+ orders/month, 20,000+ retailers, Firebase push notifications |
| Employee Attendance & Admin Panel | 70+ employees, automated attendance, leave tracking |
| Full-Stack MERN & NestJS Platform | JWT auth, REST APIs, React dashboards |
| Atomic Component Design System | MUI + Tailwind, Atomic Design, TypeScript |
| Real-time Mobile Layout & Push Engine | React Native, Firebase, TanStack Query |

---

## 🛠️ Scripts

```bash
npm run dev      # start development server (http://localhost:3000)
npm run build    # static export to ./out
npm run lint     # ESLint
```

---

## 📄 License

Personal portfolio — all rights reserved © Kirtimaan Vishwakarma.
