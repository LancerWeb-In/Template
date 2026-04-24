# PROJECT INITIALIZATION PROTOCOL (v2)

**STRICTLY ENFORCE ALL PHASES. DEVIATION IS AN ARCHITECTURAL BREACH.**

**Pre-requisite**: You MUST read and internalize `context.md` before this document. Both are binding.

## I. Rapid Initialization (Quick Start)

**BEFORE ACTING IN A NEW SESSION, YOU MUST:**

1.  **Ingest Context** (In Order):
    - `builder/reason.txt` — Project purpose, goals, rationale.
    - `builder/stitch.txt` — UI/UX design and stitch instructions.
    - `src/app/layout.tsx` — Existing Next.js root layout.
    - `public/manifest.json` — Site metadata and PWA configuration.
2.  **Activate Core Skills**:
    - `activate_skill("ground-truth-memory")`
    - `activate_skill("frontend-design")`
    - `activate_skill("brand-guidelines")`
    - `activate_skill("cinematic-components")`
3.  **Execute Protocol**: Follow the 6-Phase Lifecycle (Clarify → Research → Plan → Implement → Test → Persist).

## II. Execution Phases (Strategic Workflow)

### Phase 1: Lead Architect (Strategic Planning)
**Goal**: Establish brand identity and architectural blueprint.
1.  **Analyze Context**: Use `read_file` to ingest all `builder/` and root configuration files.
2.  **Initialize Memory**: Use `MEMORY.md` to `create_entities` for core goals and tech stack.
3.  **Strategic Research**: Use `deepwiki_ask_question` if external patterns are required.
4.  **Blueprint Creation**: Use `complex-plans_createPlan` to document a comprehensive implementation blueprint.
5.  **Requirement Discovery**: Use `question` to clarify target audience and conversion goals.

### Phase 2: UI Designer (Visual Prototype)
**Goal**: Generate and refine UI/UX prototype using external generation tools.
1.  **Manual Stitch Generation**: Inform the user to carry out UI design via <https://stitch.google.com>.
2.  **Asset Staging**: Download/copy generated HTML outputs into the `builder/html` folder.
3.  **Iterative Loop**: Use `question` to confirm user satisfaction. DO NOT proceed to Phase 3 without explicit design approval.

### Phase 3: React Integrator (Production Translation)
**Goal**: Translate approved designs into Next.js/React components with Tailwind CSS v4.
1.  **Component Porting**: Use approved `builder/html` artifacts as the foundation.
2.  **Specialized Styling**: Use `@theme inline {}` in `globals.css`. ZERO `tailwind.config.*` files allowed.
3.  **Technical Stack**: Integrate shadcn/ui, Radix, and GSAP for premium component behavior.
4.  **Mobile-First Implementation**: Ensure unprefixed classes target ALL screens.

### Phase 4: UX/Motion Engineer (Premium Enhancement)
**Goal**: Make the interface feel alive and deeply engaging.
1.  **Animation Injection**: Use GSAP for scroll-based reveals, parallax, and micro-interactions.
2.  **Smooth Flow**: Integrate `lenis` for smooth scrolling and `embla-carousel-react` for interactive sliders.
3.  **Optimization**: Animate `transform` and `autoAlpha` only. Respect `prefers-reduced-motion` settings.

### Phase 5: QA Inspector (Final Validation)
**Goal**: Validate build against the Premium Design Checklist.
1.  **Runtime Diagnostics**: Use `next-devtools_nextjs_call` to check for server-side errors and logs.
2.  **UI Automation**: Use `next-devtools_browser_eval` for focused Playwright validation.
3.  **Build Integrity**: Execute `build` and `lint` commands. No claims of completion without a 100% success record.

## III. Technical Constraints (Iron Laws)

- **Next.js 16 Readiness**: Proactively assist in applying `use cache` directives and Next.js 16 Cache Components.
- **Structured Plan Management**: Use `complex-plans_updatePlan` to track progress after every atomic implementation step.
- **Patience Protocol**: Invoke **one tool at a time**. Wait for full response. Never skip.
- **Validation Only**: `npm run dev` is FORBIDDEN. Only `build` and `lint` are permitted for verification.

## IV. Command Priority Mapping

| Task Category | Mandated Tools |
| :--- | :--- |
| **Research/Docs** | `deepwiki_ask_question`, `rg`, `fetch_fetch_readable` |
| **Architectural Planning** | `complex-plans_createPlan`, `complex-plans_sequentialThinking` |
| **Development/Fixes** | `next-devtools_enable_cache_components`, `replace`, `fix` |
| **Validation/QA** | `next-devtools_browser_eval`, `next-devtools_nextjs_call`, `build/lint` |

## V. Confirmation Protocol

**BEFORE PROCEEDING, YOU MUST ACKNOWLEDGE:**
1. Read project context and activated core skills.
2. Will follow 5-phase order without bypass.
3. Will prioritize `complex-plans` and `next-devtools` for all relevant tasks.
4. **WILL THINK CAREFULLY BEFORE AND AFTER EVERY ACTION.**

**Reply with "CONFIRMED" to authorize initialization.**
