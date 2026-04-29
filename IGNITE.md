# PROJECT STARTUP DIRECTIVE

**STRICTLY ENFORCE ALL RULES IN THIS DOCUMENT. DEVIATION IS NOT PERMITTED.**

---

## Quick Reference: Task Type → Phase Mapping

```txt
TASK TYPE          → PHASES TO EXECUTE
────────────────────────────────────────────────────────
new_project         → Phase 1 → 2 → 3 → 4 → 5 (ALL)
overhaul            → Phase 1 → 2 → 3 → 4 → 5 (ALL)
feature             → Phase 3 → 4 → 5
bug_fix             → Clarify → Fix → Phase 5
refactor            → Phase 3 → Phase 5
test                → Phase 3 → Phase 5
documentation       → Phase 3 only
```

**Detection Keywords:**

| Task Type     | Keywords                                              |
| ------------- | ----------------------------------------------------- |
| new_project   | `builder/reason.txt` missing/empty                    |
| overhaul      | `overhaul`, `rebuild`, `redesign`, `rewrite`          |
| feature       | `add`, `implement`, `create`, `build` (not UI design) |
| bug_fix       | `fix`, `bug`, `error`, `issue`, `crash`, `broken`     |
| refactor      | `refactor`, `clean up`, `restructure`, `improve`      |
| test          | `test`, `write tests`, `add tests`, `coverage`        |
| documentation | `document`, `readme`, `comment`, `docs`               |

---

## 1. Project Tech Stack

**Package names and versions only:**

| Category   | Package               |
| ---------- | --------------------- |
| Framework  | Next.js 16            |
| UI Library | React 19              |
| Styling    | Tailwind CSS v4       |
| Animation  | GSAP                  |
| Scrolling  | Lenis                 |
| ORM        | Drizzle ORM           |
| Auth       | Auth.js (NextAuth v5) |
| State      | Zustand               |
| Runtime    | Bun                   |

---

## 2. Task Detection Logic

### Auto-Detection Flow

```python
if task contains: `fix`, `bug fix`, `error`, `crash`, `broken`
  → bug_fix workflow

else if task contains: `add`, `implement`, `create feature`, `new page`
  → feature workflow

else if task contains: `test`, `write tests`, `add tests`, `coverage`
  → test workflow

else if task contains: `refactor`, `clean up`, `restructure`
  → refactor workflow

else if task contains: `document`, `readme`, `comment`, `docs`
  → documentation workflow

else if builder/reason.txt missing/empty
  → new_project workflow

else if task contains: `overhaul`, `rebuild`, `redesign`, `rewrite`
  → overhaul workflow

else
  → Catch-all: minimal workflow (Phase 3 + Phase 5)
```

**Rule:** Agent infers from absence of match. Default to minimal workflow.

---

## 3. Phase Workflows

### Phase 1: Lead Architect (Planning)

**SKIP IF:** feature, bug_fix, refactor, documentation

**MANDATORY FOR:** new_project, overhaul

**Actions:**

1. Read `builder/reason.txt`, `builder/ideate.md`, `src/app/layout.tsx`, `public/manifest.json`
2. Initialize `MEMORY.md` with project goals and tech stack
3. Inspect `package.json` and `src/components/`
4. Ask questions about target audience and brand personality
5. Draft design specification with layout, components, visual direction
6. Source placeholder assets (images/videos) via Pexels MCP or generate asset prompts

---

### Phase 2: AI UI Designer

**SKIP IF:** feature, bug_fix, refactor, documentation

**MANDATORY FOR:** new_project, overhaul

**Actions:**

1. Analyze design specifications from Phase 1
2. Propose UI/UX architecture (page layouts, component hierarchy, interactions)
3. Present proposal to user for feedback
4. **DO NOT PROCEED to Phase 3 until user approves design**

---

### Phase 3: React Integrator

**SKIP IF:** documentation

**MANDATORY FOR:** new_project, overhaul, feature, refactor

**Actions:**

1. Scan `package.json` and existing components with `glob`
2. Port design to Next.js with Tailwind CSS v4
3. **Use `@theme inline {}`** in `globals.css` — NO `tailwind.config.*`
4. Implement responsive layout (mobile-first)
5. Use ShadCN components from `src/components/ui/`
6. Write semantic HTML with proper heading hierarchy
7. **Commit after each logical unit**

**Tailwind v4 Rules:**

- Mobile-first: unprefixed = all, prefixed = breakpoint + above
- Breakpoints: sm:640px, md:768px, lg:1024px, xl:1280px, 2xl:1536px

---

### Phase 4: UX/Motion Engineer

**SKIP IF:** bug_fix, refactor, documentation

**MANDATORY FOR:** new_project, overhaul, feature

**Actions:**

1. Activate GSAP animation skills
2. Add scroll-based reveals, parallax effects, micro-interactions
3. Integrate Lenis for smooth scrolling
4. Use `embla-carousel-react` for carousels
5. Use `lucide-react` for icons

**Performance Rules:**

- Animate **transform and opacity only**
- Use **autoAlpha** instead of opacity
- **Respect prefers-reduced-motion**
- Reduce particle count on mobile (30-80 vs 100-200 desktop)
- **Disable heavy scroll triggers on mobile**

---

### Phase 5: QA Inspector

**ALWAYS REQUIRED** for: new_project, overhaul, feature, bug_fix, refactor, test

**MANDATORY FOR:** documentation (optional)

**Actions:**

1. Debug errors with Playwright/Chrome DevTools MCP
2. Run E2E user-flow testing with Playwright
3. Validate against Premium Design Checklist:
   - [ ] Prominent CTAs above fold
   - [ ] Core Web Vitals optimized
   - [ ] SEO meta tags configured
   - [ ] WCAG 2.1 AA contrast
   - [ ] Social proof visible
   - [ ] Branded Hero section
   - [ ] Premium animations
   - [ ] Full responsiveness

---

## 4. Responsive Design Rules

### Tailwind CSS v4 Breakpoints

```txt
Mobile-First: Unprefixed = ALL, Prefixed = that breakpoint + ABOVE
sm: 640px  | md: 768px  | lg: 1024px  | xl: 1280px  | 2xl: 1536px
```

### Responsive Typography

| Element | Mobile    | Desktop  |
| ------- | --------- | -------- |
| Hero    | text-4xl  | text-9xl |
| Section | text-3xl  | text-6xl |
| Body    | text-base | text-lg  |

### Touch Targets (MANDATORY)

- Minimum: **44x44px**
- Use **p-3** or larger
- focus-visible:ring-2

### Anti-Patterns (STRICTLY PROHIBITED)

- Fixed width > 320px on mobile
- Large padding on mobile
- Text too large on mobile
- No mobile navigation
- **Hover-only CTAs**
- Heavy mobile animations

---

## 5. Development Constraints

**Performance Budgets:**

| Metric     | Target         | Enforcement             |
| ---------- | -------------- | ----------------------- |
| Initial JS | <200KB gzipped | Build fails if exceeded |
| LCP        | <2.5s          | Lighthouse audit        |
| FID        | <100ms         | Core Web Vitals         |
| CLS        | <0.1           | Core Web Vitals         |

**Animation Performance Rules:**

- Animate transform/opacity only
- Use will-change sparingly
- Disable heavy animations on mobile
- Respect prefers-reduced-motion

| Rule                    | Enforcement                                               |
| ----------------------- | --------------------------------------------------------- |
| NO DEV SERVER           | Forbidden to run `npm run dev`, `yarn dev`, `bun run dev` |
| BUILD + LINT ONLY       | Allowed operations: build, lint                           |
| TDD                     | Write failing test before production code                 |
| Commit per logical unit | NOT in bulk                                               |
| THINK CAREFULLY         | Before EVERY action and AFTER EVERY action                |

---

## 6. Phase Execution Order

### new_project / overhaul (ALL 5 phases)

```txt
1. Phase 1: Lead Architect → Complete all steps
2. Phase 2: AI UI Designer → Get user approval
3. Phase 3: React Integrator → Port to Next.js
4. Phase 4: UX/Motion Engineer → Add animations
5. Phase 5: QA Inspector → Validate and test
```

### feature (Phases 3 → 4 → 5)

```txt
1. Phase 3: React Integrator → Implement feature
2. Phase 4: UX/Motion Engineer → Add animations (if applicable)
3. Phase 5: QA Inspector → Validate and test
```

### bug_fix (Clarify → Targeted Fix → Phase 5)

```txt
1. Clarify → Use Playwright/Chrome DevTools to diagnose root cause
2. Targeted Fix → Implement minimal fix
3. Phase 5: QA Inspector → Verify fix
```

### refactor (Phase 3 → Phase 5)

```txt
1. Phase 3: React Integrator → Refactor code
2. Phase 5: QA Inspector → Validate
```

### test (Phase 3 → Phase 5)

```txt
1. Phase 3: React Integrator → Write/update tests
2. Phase 5: QA Inspector → Validate test coverage
```

### documentation (Phase 3 only)

```txt
1. Phase 3: React Integrator → Write docs
```

---

## 7. Skills Mapping

| Task                    | Skills                                                                               |
| ----------------------- | ------------------------------------------------------------------------------------ |
| **Initial planning**    | `ground-truth-memory`                                                                |
| **Design**              | `cinematic-components`, `brand-guidelines`, `frontend-design`, `pexels`              |
| **Next.js Core**        | `nextjs-16`, `react-best-practices`                                                  |
| **Next.js Middleware**  | `nextjs-middleware`                                                                  |
| **Next.js Performance** | `nextjs-performance`, `cache-components`, `server-components`                        |
| **Next.js PWA**         | `next-js-pwa`                                                                        |
| **UI/Tailwind**         | `tailwind-v4`, `tailwindcss-v4`, `tailwind-v4-shadcn`                                |
| **Motion/GSAP**         | `gsap-animation-expert`, `gsap-animation-best-practices`                             |
| **Backend**             | `backend-patterns`, `api-routes`                                                     |
| **Database**            | `drizzle-orm-workflow-manager`, `supabase-postgres-best-practices`                   |
| **Auth**                | `next-js-authentication-auth-js`                                                     |
| **State**               | `zustand-middleware-specialist`, `tanstack-router-query-integration`                 |
| **Validation**          | `zod-validation-schema-design`                                                       |
| **Testing**             | `playwright-expert`, `playwright-patterns`, `frontend-testing`, `webapp-testing`     |
| **Code quality**        | `tdd`, `coding-standards`                                                            |
| **Runtime**             | `bun-runtime-toolkit`, `bun-development-toolkit`, `bun-bundler`, `bun-testing-suite` |
| **Infra**               | `docker-patterns`, `docker-compose`, `container-expert`                              |
| **Python**              | `python-patterns`                                                                    |
| **Security**            | `security-review`                                                                    |
| **GitHub**              | `github`                                                                             |
| **MCP**                 | `mcp-builder`                                                                        |
| **Meta**                | `skill-creator`                                                                      |
| **Styling**             | `theme-factory`                                                                      |

---

## 8. Project Structure

```txt
builder/
├── design.md           # Design reference (optional)
├── reason.txt          # Project purpose (READ FIRST)
prompts/                 # Image prompts
public/images/           # Generated assets
src/
├── app/                 # Next.js App Router
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Main page
│   └── globals.css     # Tailwind v4 (NO tailwind.config.*)
├── components/
│   ├── ui/             # ShadCN components (USE THESE)
│   └── *.tsx           # Custom components
```

---

**BEFORE PROCEEDING, YOU MUST CONFIRM:**

1. [ ] Detected task type and identified phases to execute
2. [ ] Activated skills for detected task type
3. [ ] Read agent files only if required
4. [ ] Understood conditional phase workflow
5. [ ] Will execute phases in order
6. [ ] Will commit after each logical unit
7. [ ] **WILL THINK CAREFULLY BEFORE EVERY ACTION AND AFTER EVERY ACTION**

**Reply with CONFIRMED to proceed.**

---
