# PROJECT STARTUP DIRECTIVE

**STRICTLY ENFORCE ALL RULES IN THIS DOCUMENT. DEVIATION IS NOT PERMITTED.**

**You MUST read context.md BEFORE this document. Both documents are binding.**

## Task Type Detection — AUTO-BYPASS (CRITICAL)

**BEFORE reading any context files, detect the task type and adjust workflow accordingly:**

| Task Type         | Indicators                                                           | Workflow     | Phases to Execute        |
| ----------------- | -------------------------------------------------------------------- | ------------ | ------------------------ |
| **new_project**   | `builder/reason.txt` doesn't exist, empty, or says "new project"     | Full 5-phase | ALL 5 phases             |
| **overhaul**      | "overhaul", "rebuild", "redesign", "complete rewrite" in request     | Full 5-phase | ALL 5 phases             |
| **feature**       | "add", "implement", "create", "build" + feature name (not UI design) | Abbreviated  | Skip Phases 1-2, run 3-5 |
| **bug_fix**       | "fix", "bug", "error", "issue", "crash", "broken" in request         | Minimal      | Clarify → Fix → Phase 5  |
| **refactor**      | "refactor", "clean up", "restructure", "improve" in request          | Minimal      | Implement + Test only    |
| **test**          | "test", "write tests", "add tests", "coverage" in request            | Minimal      | Phase 3 + Phase 5        |
| **documentation** | "document", "readme", "comment", "docs" in request                   | Minimal      | Phase 3 only             |

**AUTO-DETECTION LOGIC:**

```

```

IF task contains: "fix", "bug fix", "error", "crash", "broken" → bug_fix workflow
ELSE IF task contains: "add", "implement", "create feature", "new page", "new component" → feature workflow
ELSE IF task contains: "test", "write tests", "add tests", "coverage" → test workflow
ELSE IF task contains: "refactor", "clean up", "restructure" → refactor workflow
ELSE IF task contains: "document", "readme", "comment", "docs" → documentation workflow
ELSE IF builder/reason.txt missing/empty → new_project workflow
ELSE IF task contains: "overhaul", "rebuild", "redesign", "rewrite" → overhaul workflow
ELSE → full 5-phase workflow

````

**SKIP RULE:** When a phase is skipped, acknowledge it briefly and proceed. Do NOT run skipped phases.

## Quick Start

**BEFORE ANY OTHER ACTION IN A NEW SESSION, YOU MUST:**

1. **Detect Task Type** (see above table)
2. **Read Project Context Files** (only if `new_project` or `overhaul`):
   - `builder/reason.txt` — Project purpose, goals, rationale
   - `builder/stitch.txt` — UI/UX design and stitch instructions
   - `src/app/layout.tsx` — Existing Next.js root layout
   - `public/manifest.json` — Site metadata and PWA config
3. **Activate Essential Skills** (based on task type):

   ```python
   activate_skill("ground-truth-memory")
   activate_skill("tdd")
   activate_skill("coding-standards")
````

**Additional skills by task type:**

- **new_project/overhaul:** `frontend-design`, `brand-guidelines`, `cinematic-components`, `gsap-animation-best-practices`, `nextjs-16`
- **feature:** `nextjs-16`, relevant domain skill (e.g., `api-routes`, `server-components`)
- **bug_fix:** `playwright-expert`, `security-review`
- **refactor:** `coding-standards`

4. **Run Workflow:** Clarify → Research → Plan → Implement → Test → Persist
   (Use `complex-plans` MCP tools for structured planning in the Plan phase)

**DO NOT PROCEED until ALL initialization steps are complete. Violation is not permitted.**

## RULE: Tool Execution Patience (STRICTLY ENFORCED)

Every tool call takes time. You MUST:

- Invoke **one tool at a time only**
- **Wait for full response** before proceeding
- **Never** exit, close, retry, or skip ahead
- Remain patient during processing
- Only proceed after complete output

**DEVIATION IS NOT PERMITTED.**

## SECTION 1: Phase 1 — Lead Architect (Planning)

**⚡ SKIP THIS PHASE IF task-type is: feature, bug_fix, refactor, documentation**

**MANDATORY PHASE FOR: new_project, overhaul**

**Mindset:** Strategic, brand-focused, structural

**Goal:** Understand project purpose, establish brand identity, create design specification

### Phase 1 Actions Required (ALL MANDATORY)

**IRON LAW: THINK CAREFULLY BEFORE each numbered step and AFTER completing it.**

1. **Analyze Context (THINK FIRST):**
   Think carefully about what to look for, then:
   Use `read_file` to load (IN THIS ORDER):
   - `builder/reason.txt` — Why this project exists
   - `builder/stitch.txt` — UI/UX design instructions
   - `src/app/layout.tsx` — Existing structure
   - `public/manifest.json` — Site metadata

2. **Initialize Project Memory (THINK FIRST):**
   Think carefully about the "Ground Truth" structure, then:
   - Initialize `MEMORY.md` at the project root if it doesn't exist.
   - Use the `memory` tool to `create_entities` for the core project goals, tech stack, and primary modules found in research.
   - Document this initialization as the first entry in `MEMORY.md`.

3. **Inspect Codebase (THINK FIRST):**
   Think carefully about inspection strategy, then:
   - Check `package.json` for dependencies
   - Find existing components in `src/components/`
   - Understand project structure

4. **Interactive Requirements Discovery (THINK FIRST):**
   Think carefully to identify what to ask, then:
   - Ask questions about target audience
   - Clarify key conversion goals
   - Discover brand personality
   - Understand content priorities

5. **Strategic Planning (THINK FIRST):**
   Think carefully for implementation plan:
   - Analyze all gathered information
   - Identify key constraints and opportunities
   - Map out the approach

6. **Design Specification:**
   Draft comprehensive specification including:
   - Context & User: Who is this for
   - Screen Goal: What action users take
   - Layout & Hierarchy: Visual structure
   - Components: UI/UX terminology
   - Visual Direction: Design tokens
   - Constraints: Responsive behavior

7. **Desktop-First Layout:**
   Map desktop layout first, then adapt for mobile/tablet

8. **Asset Prompts:**
   Generate AI prompts for images:

   ```txt
   ratio: [16:9|9:16|1:1]
   filename: [kebab-case-name]
   prompts: [Description with hex codes]
   ```

9. **Prepare UI Generation Prompts:**
   Draft prompts based on the design specification for the Stitch web interface.

**YOU MAY NOT PROCEED TO PHASE 2 UNTIL PHASE 1 IS COMPLETE.**

## SECTION 2: Phase 2 — UI Designer (Stitch Generation)

**⚡ SKIP THIS PHASE IF task-type is: feature, bug_fix, refactor, documentation**

**MANDATORY PHASE FOR: new_project, overhaul**

**Mindset:** Creative, visual, interactive

**Goal:** Generate and refine UI/UX prototype using Stitch web interface until user is fully satisfied.

### Phase 2 Actions Required (ALL MANDATORY)

**IRON LAW: THINK CAREFULLY BEFORE each numbered step and AFTER completing it.**

1. **Analyze Design Context (THINK FIRST):**
   Think carefully about design approach based on `builder/reason.txt` and `builder/stitch.txt`.

2. **Manual Stitch Generation (THINK FIRST):**
   Think carefully to prepare the instruction for the user, then:
   - Inform the user to carry out the UI design and generation using the Stitch web interface (<https://stitch.google.com>).
   - Once the user is satisfied with the design, they MUST download/copy the generated HTML outputs and save them inside the `builder/html` folder.
   - You MUST wait for the user to confirm they have saved the files in `builder/html`.

3. **Iterative User Review Loop (THINK FIRST, MANDATORY):**
   Think carefully before asking the user:
   - Inform the user to verify the content in `builder/html`.
   - Provide the user with a question/answer prompt asking if they are satisfied with the current design in `builder/html`.
   - If they want to tweak it, they should return to the Stitch web interface and update the files in `builder/html`.
   - **DO NOT PROCEED to Phase 3 until the user explicitly states they are satisfied and the files are ready in `builder/html`.**

**YOU MAY NOT PROCEED TO PHASE 3 UNTIL USER APPROVES THE DESIGN.**

## SECTION 3: Phase 3 — React Integrator (Translation)

**⚡ SKIP THIS PHASE IF task-type is: documentation**

**MANDATORY PHASE FOR: new_project, overhaul, feature, refactor**

**Mindset:** Component-driven, clean coder, semantic, responsive

**Goal:** Translate approved design into production Next.js/React components with Tailwind CSS v4

### Phase 3 Actions Required (ALL MANDATORY)

**IRON LAW: THINK CAREFULLY BEFORE each numbered step and AFTER completing it.**

1. **Scan Codebase (THINK FIRST):**
   Think carefully about what to look for, then:
   - Use `read_file` on `package.json`
   - Use `glob` to find components
   - Use `run_shell_command("rg ...")` to find patterns

2. **Port to Next.js Stack (THINK FIRST):**
   Think carefully about component architecture, then:
   - Use the approved content in `builder/html` strictly as a STARTER part.
   - Port the design to Next.js, Tailwind CSS v4, shadcn, Radix, and GSAP.
   - Use your skills and imagination to make the UI/UX EVEN BETTER than the starter designs.
   - Actively apply `frontend-design`, `brand-guidelines`, and `cinematic-components` patterns during porting.

3. **Tailwind CSS v4 (THINK FIRST, STRICT RULES):**
   Think carefully to verify approach, then:
   - Use `@theme inline {}` in `globals.css`
   - **NO** `tailwind.config.*` files allowed

4. **Responsive Implementation (STRICT RULES):**

   **Mobile-First Rules:**
   - Unprefixed = ALL screen sizes
   - Prefixed (`md:`, `lg:`) = breakpoint + ABOVE

   **Breakpoints:** sm: 640px, md: 768px, lg: 1024px, xl: 1280px, 2xl: 1536px

   **Touch & Hover:**
   - Use `pointer-coarse:` for touchscreens
   - CTAs **always visible** on mobile
   - **No hover-only reveals allowed**

   **Responsive Typography:**
   - Hero: mobile text-4xl, desktop text-9xl
   - Section: mobile text-3xl, desktop text-6xl
   - Body: mobile text-base, desktop text-lg

   **Layouts:**
   - Grid: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
   - Flex: flex flex-col md:flex-row
   - Nav: hidden md:flex

   **Overflow:**
   - overflow-x-hidden max-w-full on containers

5. **Use ShadCN Components:**
   Use pre-built components from `src/components/ui/`

6. **Semantic HTML:**
   - Proper heading hierarchy
   - One `<h1>` per page
   - ARIA labels on interactive elements

7. **Version Control:**
   Commit after **each logical unit** (NOT in bulk)

**STRICTLY FOLLOW ALL RULES IN THIS PHASE.**

## SECTION 4: Phase 4 — UX/Motion Engineer (Enhancement)

**⚡ SKIP THIS PHASE IF task-type is: bug_fix, refactor, documentation**

**MANDATORY PHASE FOR: new_project, overhaul, feature**

**Mindset:** Interactive, premium, bold, immersive

**Goal:** Make website feel alive and deeply engaging

### Phase 4 Actions Required (ALL MANDATORY)

**IRON LAW: THINK CAREFULLY BEFORE each numbered step and AFTER completing it.**

1. **Activate Skills (THINK FIRST):**
   Think carefully about animation strategy, then:

   ```python
   activate_skill("cinematic-components")
   activate_skill("gsap-animation-expert")
   activate_skill("gsap-animation-best-practices")
   ```

2. **Inject GSAP Animations (THINK FIRST):**
   Think carefully about animation implementation:
   - Scroll-based reveals
   - Parallax effects
   - Micro-interactions

3. **Add Smooth Scrolling (THINK FIRST):**
   Think carefully to verify approach, then:
   Use `lenis` for smooth scrolling

4. **Add Carousels (THINK FIRST):**
   Think carefully about carousel architecture, then:
   Use `embla-carousel-react`

5. **Icons (THINK FIRST):**
   Think carefully to identify which icons are needed, then:
   Use `lucide-react`

6. **Performance (STRICT RULES):**
   - Animate **transform and opacity only**
   - Use **autoAlpha** instead of opacity
   - **Respect prefers-reduced-motion**

7. **Mobile Limits (STRICT RULES):**
   - Reduce particles (30-80 mobile vs 100-200 desktop)
   - **Disable heavy scroll triggers on mobile**

## SECTION 5: Phase 5 — QA Inspector (Validation)

**⚡ ALWAYS REQUIRED FOR: new_project, overhaul, feature, bug_fix, refactor, test**

**⚡ OPTIONAL FOR: documentation** (skip if only writing docs)

**Mindset:** Critical, user-centric, uncompromising

**Goal:** Validate final build against Premium Design Checklist

### Phase 5 Actions Required (ALL MANDATORY)

**IRON LAW: THINK CAREFULLY BEFORE each numbered step and AFTER completing it.**

1. **Error Recovery (THINK FIRST):**
   Think carefully to analyze errors before fixing:
   - Capture exact error message
   - Use `webfetch` or `codesearch`
   - Use `activate_skill("security-review")` and `activate_skill("tdd")`
   - **If built-in tools fail (timeout, error, unavailability), fall back to `filesystem_*` tools from `@modelcontextprotocol/server-filesystem`** (e.g., `filesystem_read_file` instead of `read_file`, `filesystem_write_file` instead of `write_file`, `filesystem_edit_file` instead of `replace`, `filesystem_search_files` instead of `glob`)

2. **Browser Testing & Debugging (THINK FIRST):**
   Think carefully about validation strategy, then:
   - **E2E Testing (use Playwright MCP):** `browser_navigate`, `browser_click`, `browser_fill`, `browser_snapshot`, `browser_screenshot`
   - **Debugging (use Chrome DevTools MCP):** `chrome-devtools_take_snapshot`, `chrome-devtools_list_console_messages`, `chrome-devtools_performance_start_trace`
   - **Best Practice:** Start with Playwright MCP for automated user-flow testing. Escalate to Chrome DevTools MCP when you need to debug WHY something fails.

3. **Checklist (THINK FIRST, ALL MUST PASS):**
   Think carefully to verify each item:
   - [ ] Prominent CTAs above fold
   - [ ] Core Web Vitals optimized
   - [ ] SEO meta tags configured
   - [ ] WCAG 2.1 AA contrast
   - [ ] Social proof visible
   - [ ] Social platform links
   - [ ] Branded Hero section
   - [ ] Premium animations
   - [ ] Full responsiveness

## Responsive Design Rules (STRICTLY ENFORCED)

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

## Project Structure (STRICT ADHERENCE)

```txt
builder/
├── design.md             # Design reference (optional, from DESIGN.md collection)
├── reason.txt          # Project purpose (READ FIRST)
prompts/                 # Image prompts
public/images/           # Generated assets
src/
├── app/                 # Next.js App Router
│   ├── layout.tsx      # Root layout
│   ├── page.tsx       # Main page
│   └── globals.css   # Tailwind v4 config (NO tailwind.config.*)
├── components/
│   ├── ui/             # ShadCN components (USE THESE)
│   └── *.tsx           # Custom components (create as needed)
```

## Skills Mapping (MANDATORY USAGE)

| Task             | Skills to Activate                                                               | MCP Tools                       |
| ---------------- | -------------------------------------------------------------------------------- | ------------------------------- |
| Initial planning | `ground-truth-memory`                                                            | `complex-plans`                 |
| Design           | `frontend-design`, `brand-guidelines`, `cinematic-components`                    | —                               |
| Implementation   | `nextjs-16`, `tailwind-v4`, `tailwind-v4-shadcn`, `react-best-practices`         | `next-devtools`                 |
| Motion           | `cinematic-components`, `gsap-animation-expert`, `gsap-animation-best-practices` | —                               |
| Debugging        | `security-review`, `webapp-testing`                                              | `chrome-devtools`               |
| Code quality     | `coding-standards`, `tdd`                                                        | —                               |
| Testing          | `frontend-testing`, `webapp-testing`, `playwright-expert`                        | `playwright`, `chrome-devtools` |
| Database         | `drizzle-orm-workflow-manager`, `supabase-postgres-best-practices`               | `deepwiki`, `context7`          |
| Auth             | `next-js-authentication-auth-js`                                                 | `deepwiki`, `context7`          |
| State            | `zustand-middleware-specialist`, `tanstack-router-query-integration`             | `deepwiki`                      |
| Validation       | `zod-validation-schema-design`                                                   | —                               |
| Runtime          | `bun-runtime-toolkit`, `bun-development-toolkit`                                 | —                               |
| PWA              | `next-js-pwa`                                                                    | —                               |
| API routes       | `api-routes`, `backend-patterns`                                                 | —                               |
| Docker/Infra     | `docker-patterns`, `docker-compose`, `container-expert`                          | —                               |
| Security         | `security-review`, `nextjs-middleware`                                           | `chrome-devtools`               |

**YOU MUST use the correct skill for each task. No exceptions.**

## Tools by Task (MANDATORY USAGE)

### PRIMARY REASONING DISCIPLINE (ENFORCE BEFORE EVERY ACTION)

- **THINK CAREFULLY** — **MANDATORY BEFORE EVERY ACTION** — Analyze, plan, verify, and think deeply before acting. No tool call, code change, or command should be made without prior deliberate thought.

### Design & Components

- `write_file` — Create components in `src/components/`
- `edit` — Modify existing components
- `question` — Get user feedback
- **Stitch Web Interface** — Use for initial UI design and generation

### Research & Planning

- `context7_query-docs` — Look up API docs
- `fetch_fetch_readable` — Research web content
- `run_shell_command("rg ...")` — **USE THIS** for code search (NOT grep_search or bash grep)

### Build & Development

- `run_shell_command` — Run yarn commands
- `read_file` — Read project files
- `glob` — Find files by pattern
- **Fallback:** If any built-in tool fails, use `filesystem_*` tools from `@modelcontextprotocol/server-filesystem` (e.g., `filesystem_read_file`, `filesystem_write_file`, `filesystem_list_directory`, `filesystem_search_files`, `filesystem_edit_file`)

### Testing & Debugging

#### E2E Testing (Playwright MCP)

- `browser_navigate` — Navigate to URL
- `browser_click` — Click element
- `browser_fill` — Fill input field
- `browser_snapshot` — Capture accessibility tree
- `browser_screenshot` — Take visual screenshot
- `browser_evaluate` — Execute JavaScript
- `browser_wait_for_selector` — Wait for element
- `browser_close` — Close browser

**Use Playwright MCP for automated user-flow testing (form submissions, navigation, interactions).**

#### Debugging (Chrome DevTools MCP)

- `chrome-devtools_navigate_page` — Load page
- `chrome-devtools_take_snapshot` — Accessibility check
- `chrome-devtools_list_console_messages` — Check errors
- `chrome-devtools_*` — Browser debugging

**Use Chrome DevTools MCP for debugging (performance, network, console errors, memory leaks).**

**Best Practice: Start with Playwright MCP for testing. Escalate to Chrome DevTools MCP for debugging failures.**

### Version Control

- `run_shell_command` — Use for **ALL** git operations (add, commit, branch, worktree, push).
- **Mandatory**: Commit after **each logical unit** (NOT in bulk).
- **Direct CLI**: Use native `git` commands directly via shell.

## Development Environment Rules (STRICTLY ENFORCED)

1. **NO DEV SERVER ALLOWED:** You are STRICTLY FORBIDDEN from running the development server (e.g., `npm run dev`, `yarn dev`, `bun run dev`).
2. **VERIFICATION ONLY:** To ensure the codebase is 100% issue-free, you are ONLY allowed to run the `build` and `lint` commands.

## Phase Execution Order (CONDITIONAL)

**EXECUTE PHASES BASED ON TASK TYPE. Order matters within each task type.**

### new_project / overhaul (ALL 5 phases):

1. **Phase 1: Lead Architect** → Complete all 8 steps
2. **Phase 2: UI Designer** → Get user approval
3. **Phase 3: React Integrator** → Port to Next.js
4. **Phase 4: UX/Motion Engineer** → Add animations
5. **Phase 5: QA Inspector** → Validate and test

### feature (Phases 3 → 4 → 5):

1. **Phase 3: React Integrator** → Implement feature
2. **Phase 4: UX/Motion Engineer** → Add animations (if applicable)
3. **Phase 5: QA Inspector** → Validate and test

### bug_fix (Research → Targeted Fix → Phase 5):

1. **Clarify** → Use Playwright/Chrome DevTools to diagnose root cause
2. **Targeted Fix** → Implement minimal fix (TDD: write test first)
3. **Phase 5: QA Inspector** → Verify fix and validate

### refactor (Phase 3 → Phase 5):

1. **Phase 3: React Integrator** → Refactor code
2. **Phase 5: QA Inspector** → Validate

### test (Phase 3 → Phase 5):

1. **Phase 3: React Integrator** → Write/update tests
2. **Phase 5: QA Inspector** → Validate test coverage

### documentation (Phase 3 only):

1. **Phase 3: React Integrator** → Write docs

**Within each task type, phases must be executed in order. Skipping phases outside your task type is REQUIRED, not optional.**

## Confirmation

**BEFORE PROCEEDING, YOU MUST CONFIRM:**

1. [ ] Detected task type and identified which phases to execute
2. [ ] Activated skills for detected task type (see Quick Start section above)
3. [ ] Read context files only if required by task type
4. [ ] Understood conditional phase workflow
5. [ ] Will execute phases in order for your task type
6. [ ] Will use mandatory skills for each task
7. [ ] Will commit after each logical unit
8. [ ] **WILL THINK CAREFULLY BEFORE EVERY ACTION AND AFTER EVERY ACTION WITHOUT EXCEPTION**

**Reply with "CONFIRMED" to proceed. Any other response is not permitted.**
