# AGENT SKILLS & TOOLS REFERENCE

**STRICTLY ENFORCE ALL RULES IN THIS DOCUMENT. DEVIATION IS NOT PERMITTED.**

## Available Skills

**YOU MUST use `activate_skill("skill-name")` for the appropriate skill before any task.**

### Core Workflow Skills

#### MUST use before starting any implementation task

- `activate_skill("ground-truth-memory")` — Records technical rationale in `MEMORY.md` before every decision. Maintains dual-layer memory: human-readable file + Knowledge Graph.

### Next.js & React Skills

#### MUST use for Next.js/React development

- `activate_skill("nextjs-16")` — Expert Next.js 16 with Turbopack, App Router, Cache Components, proxy.ts, React 19. Covers breaking changes from v15, SOLID architecture, core concepts (Server Components, caching strategy, data fetching), and production best practices.
- `activate_skill("nextjs-middleware")` — Middleware system (Edge + Node.js proxy.ts): matcher config, auth protection, RBAC, redirects/rewrites, i18n, security headers (CSP, CORS), geolocation routing, bot detection, rate limiting.
- `activate_skill("nextjs-performance")` — Optimizations: next/image, next/font, dynamic imports, caching, bundle optimization, Core Web Vitals (LCP, FID, CLS).
- `activate_skill("api-routes")` — Next.js API Routes - Route handlers, middleware, edge runtime. Covers app/api/route.ts files, HTTP methods (GET, POST, PUT, DELETE, PATCH), Web API standard Request/Response, and dynamic route patterns.
- `activate_skill("server-components")` — React Server Components in Next.js. Covers server vs client components, the 'use client' directive, composition patterns (Server Data → Client Interactivity, children as Server Components, slots), async data fetching, parallel fetching, streaming with Suspense, and the decision guide for when to use each.
- `activate_skill("cache-components")` — Next.js Cache Components and Partial Prerendering (PPR). Covers the 'use cache' directive, cacheLife() for duration control, cacheTag() for tagging, updateTag()/revalidateTag() for invalidation, static shells with dynamic streaming, build-time feedback, and proactive application when cacheComponents is enabled.
- `activate_skill("react-best-practices")` — 70 optimization rules across 8 categories: Waterfalls (CRITICAL), Bundle Size (CRITICAL), Server Perf (HIGH), Client Data Fetching (MEDIUM-HIGH), Re-render (MEDIUM), Rendering (MEDIUM), JS Perf (LOW-MEDIUM), Advanced (LOW).

### Visual & Frontend Skills

#### MUST use for UI/UX and design work

- `activate_skill("cinematic-components")` — 30+ modular components for GSAP animations, scroll effects, cursor interactions, ambient backgrounds. Vanilla HTML/CSS/GSAP reference → Next.js/React/Tailwind translation.
- `activate_skill("gsap-animation-best-practices")` — Web animation best practices: scroll triggers, performance budgets, reduced-motion support, ScrollTrigger efficiency, accessibility.
- `activate_skill("gsap-animation-expert")` — Expert GSAP: complex timelines, ScrollTrigger, SVG/canvas animations, timeline composition, BlendMode, FlipPlugin, MotionPathPlugin, advanced easing.
- `activate_skill("brand-guidelines")` — Applies consistent corporate branding and styling to all generated documents including colors, fonts, layouts, and messaging. Covers visual standards (color palette, typography, logo usage), document standards (presentations, spreadsheets, PDFs), content guidelines, and quality standards.
- `activate_skill("frontend-testing")` — Comprehensive frontend testing patterns for React/Next.js including component tests (Jest/Vitest + React Testing Library), visual regression (Playwright), accessibility (axe-core), and performance (Lighthouse) testing. Covers test infrastructure setup, coverage analysis, and CI/CD integration.
- `activate_skill("tailwind-v4")` — Tailwind CSS v4 patterns and new features including CSS-first configuration, @theme directive, container queries, and modern utilities. Covers @theme namespaces, custom colors/typography/spacing/animations/shadows, container queries, new utilities (text-balance, logical properties, subgrid), dark mode, custom @utility definitions, and migration from v3.
- `activate_skill("tailwind-v4-shadcn")` — v4 + shadcn/ui + Vite setup: CSS variables → @theme inline → base styles → auto dark mode, ThemeProvider, file templates, @plugin directive.
- `activate_skill("tailwindcss-v4")` — v4.1 core: @theme directive, @utility/@variant/@custom-variant, migration from v3, renamed/removed utilities, installation.

### Backend & Architecture Skills

#### MUST use for server-side development

- `activate_skill("backend-patterns")` — Backend architecture: RESTful API, repository/service/middleware patterns, query optimization, N+1 prevention, Redis caching, error handling, JWT auth, RBAC, rate limiting, background jobs, structured logging.
- `activate_skill("python-patterns")` — Python-specific design patterns and best practices including protocols (structural subtyping), dataclasses as DTOs, context managers, generators, decorators, async/await, advanced type hints (TypeVar, Generic, ParamSpec), dependency injection, package organization, error handling, and functional programming.
- `activate_skill("security-review")` — Vulnerability identification and security best practices: secrets management, input validation (Zod), SQL injection prevention, auth (JWT, RLS), XSS/CSRF protection, rate limiting, dependency security.

### Database & ORM Skills

#### MUST use for database and ORM work

- `activate_skill("drizzle-orm-workflow-manager")` — Manages Drizzle ORM workflows including schema generation, pushing migrations, introspection, and reset flows. Covers drizzle-kit CLI commands, schema design patterns (relations, indexes, enums), migration strategies, and multi-driver support (PostgreSQL, SQLite, MySQL).
- `activate_skill("supabase-postgres-best-practices")` — Postgres performance optimization and best practices from Supabase. Contains rules across 8 categories prioritized by impact: Query Performance (CRITICAL), Connection Management (CRITICAL), Security & RLS (CRITICAL), Schema Design (HIGH), Concurrency & Locking (MEDIUM-HIGH), Data Access Patterns (MEDIUM), Monitoring & Diagnostics (LOW-MEDIUM), Advanced Features (LOW).

### Validation, State & Auth Skills

#### MUST use for validation, state management, and authentication

- `activate_skill("zod-validation-schema-design")` — Specializes in Zod-based runtime validation, schema definition, and TypeScript type inference for APIs, forms, and domains. Covers schema composition, `.transform()`, `.discriminatedUnion()`, `.optional()` vs `.nullable()`, error handling, and Zod↔TypeScript inference patterns.
- `activate_skill("zustand-middleware-specialist")` — Zustand middleware for persistence, dev tools, immutability (Immer), and enhanced store functionality. Covers `persist` middleware (localStorage, IndexedDB), `devtools` integration, `immer` for immutable updates, `subscribeWithSelector`, and store composition patterns.
- `activate_skill("next-js-authentication-auth-js")` — Complete Next.js authentication system with Auth.js (next-auth v5). Covers OAuth providers, credential auth, session management (JWT + database), protected routes, role-based access control (RBAC), Drizzle adapter, middleware integration, and CSRF protection.

### Data Fetching & Routing Skills

#### MUST use for data fetching and routing

- `activate_skill("tanstack-router-query-integration")` — Integrates TanStack Router with TanStack Query for optimal data fetching, prefetching, and navigation performance. Covers route loaders, search params, prefetching strategies, stale-while-revalidate patterns, and SSR data hydration.

### Container & Infrastructure Skills

#### MUST use for containerization and orchestration

- `activate_skill("docker-patterns")` — Multi-stage builds, distroless images, Docker Compose, health checks, security best practices.
- `activate_skill("docker-compose")` — Multi-container apps, service definition, networking, volumes, CLI commands, environment management.
- `activate_skill("container-expert")` — Docker, Kubernetes, Helm, service mesh. Iron Laws: never run as root, never store secrets in images, always set resource limits, always add health probes, never use deprecated docker-compose v1.

### Testing & Quality Skills

#### MUST use for testing and code quality

- `activate_skill("tdd")` — Red-Green-Refactor: failing test → minimal code → refactor. No production code without failing test first.
- `activate_skill("playwright-expert")` — Cross-browser testing (Chrome, Firefox, Safari), auto-waiting, visual regression, mobile emulation, Page Object Model, screenshots, MCP integration.
- `activate_skill("playwright-patterns")` — Selector priority (role → test IDs → CSS), auto-waiting, web-first assertions, data extraction, error handling, form interactions.
- `activate_skill("coding-standards")` — Clean code: DRY, SOLID, Composition Over Inheritance, YAGNI, KISS, naming conventions, function design, error handling, self-review checklists.

### Bun Runtime Skills

#### MUST use when working with Bun

- `activate_skill("bun-runtime-toolkit")` — `bun` commands, `bunx`, shell scripts, `bun.lock`, `bun test`, Bun APIs (`Bun.file()`, `Bun.serve()`, `Bun.spawn()`), Node.js compatibility differences.
- `activate_skill("bun-development-toolkit")` — Package management, bundling, testing, migration from Node.js to Bun.
- `activate_skill("bun-bundler")` — Targets, tree-shaking, code splitting, minification, optimization.
- `activate_skill("bun-testing-suite")` — Test organization, assertions, mocking, snapshot testing, coverage.

### PWA Skills

#### MUST use for Progressive Web App features

- `activate_skill("next-js-pwa")` — Sets up PWA support using Serwist for Next.js. Covers offline support, precaching, runtime caching strategies, service worker configuration, and manifest generation.

### GitHub Skills

#### MUST use for repository management

- `activate_skill("github")` — Interact with GitHub repositories, issues, pull requests, and code via the GitHub MCP server. Covers repository operations (create, fork, search), file operations (get contents, create/update, push), branch operations, issue operations, pull request operations, and search operations (repos, code, issues, users).

## MCP Tools Catalog

USE ONLY TOOLS LISTED BELOW. DO NOT USE UNLISTED TOOLS.

### GitHub — CLI Operations (gh)

USE `gh` CLI via `run_shell_command` for all GitHub operations. `gh` is installed system-wide.

| Former MCP Tool                     | gh CLI Equivalent                                    |
| ----------------------------------- | ---------------------------------------------------- |
| `github_create_or_update_file`      | `gh api -X PUT repos/{owner}/{repo}/contents/{path}` |
| `github_search_repositories`        | `gh search repos {query}`                            |
| `github_create_repository`          | `gh repo create {name}`                              |
| `github_get_file_contents`          | `gh api repos/{owner}/{repo}/contents/{path}`        |
| `github_push_files`                 | Use `git add + git commit + git push`                |
| `github_create_issue`               | `gh issue create`                                    |
| `github_create_pull_request`        | `gh pr create`                                       |
| `github_fork_repository`            | `gh repo fork {repo}`                                |
| `github_create_branch`              | `gh api -X POST repos/{owner}/{repo}/git/refs`       |
| `github_list_commits`               | `gh api repos/{owner}/{repo}/commits`                |
| `github_list_issues`                | `gh issue list`                                      |
| `github_update_issue`               | `gh issue edit {number}`                             |
| `github_add_issue_comment`          | `gh issue comment {number}`                          |
| `github_search_code`                | `gh search code {query}`                             |
| `github_search_issues`              | `gh search issues {query}`                           |
| `github_search_users`               | `gh search users {query}`                            |
| `github_get_issue`                  | `gh issue view {number}`                             |
| `github_get_pull_request`           | `gh pr view {number}`                                |
| `github_list_pull_requests`         | `gh pr list`                                         |
| `github_create_pull_request_review` | `gh pr review {number}`                              |
| `github_merge_pull_request`         | `gh pr merge {number}`                               |
| `github_get_pull_request_files`     | `gh pr diff {number}`                                |
| `github_get_pull_request_status`    | `gh pr checks {number}`                              |
| `github_update_pull_request_branch` | `gh pr update {number}`                              |
| `github_get_pull_request_comments`  | `gh pr view {number} --comments`                     |
| `github_get_pull_request_reviews`   | `gh api repos/{owner}/{repo}/pulls/{number}/reviews` |

### Playwright — Browser Automation & E2E Testing

**For Next.js projects: Use Playwright MCP for user-flow testing and Chrome DevTools MCP for debugging/inspection. They complement each other.**

| Tool                          | Description                                       |
| ----------------------------- | ------------------------------------------------- |
| `browser_navigate`            | Navigate to a URL                                 |
| `browser_click`               | Click an element                                  |
| `browser_fill`                | Fill an input field                               |
| `browser_select_option`       | Select an option in a dropdown                    |
| `browser_hover`               | Hover over an element                             |
| `browser_press_key`           | Press a keyboard key                              |
| `browser_snapshot`            | Capture accessibility tree (for AI comprehension) |
| `browser_screenshot`          | Take a visual screenshot                          |
| `browser_evaluate`            | Execute JavaScript in the browser                 |
| `browser_wait_for_selector`   | Wait for an element to appear                     |
| `browser_wait_for_load_state` | Wait for page load state                          |
| `browser_get_text`            | Extract text content from the page                |
| `browser_scroll`              | Scroll the page                                   |
| `browser_open_tab`            | Open a new browser tab                            |
| `browser_switch_tab`          | Switch between open tabs                          |
| `browser_close`               | Close the browser/tab                             |

**When to use Playwright MCP vs Chrome DevTools MCP:**

| Use Case                        | Use This MCP      | Why                                                      |
| ------------------------------- | ----------------- | -------------------------------------------------------- |
| E2E user-flow validation        | `playwright`      | Simulates real user interactions (click, type, navigate) |
| Form submission testing         | `playwright`      | Automates fill → click → verify workflows                |
| Navigation/routing verification | `playwright`      | Navigates between pages and checks results               |
| Component interaction testing   | `playwright`      | Clicks, hovers, types on UI elements                     |
| Accessibility tree inspection   | `playwright`      | `browser_snapshot` gives structured accessibility tree   |
| Visual regression screenshots   | `playwright`      | `browser_screenshot` for automated visual checks         |
| Performance profiling           | `chrome-devtools` | Traces, Lighthouse audits, performance analysis          |
| Network request debugging       | `chrome-devtools` | Inspect request/response bodies, headers, status codes   |
| Console error investigation     | `chrome-devtools` | Read console messages, JS errors, warnings               |
| Memory leak detection           | `chrome-devtools` | Heap snapshots, memory analysis                          |
| CSS/layout debugging            | `chrome-devtools` | Inspect DOM, computed styles, box model                  |
| Next.js caching analysis        | `chrome-devtools` | Network + cache headers inspection                       |

**Best Practice: Start with Playwright MCP for automated testing flows. Escalate to Chrome DevTools MCP when you need to debug WHY something fails.**

### Chrome DevTools — Browser Inspection

| Tool                                          | Description                        |
| --------------------------------------------- | ---------------------------------- |
| `chrome-devtools_click`                       | Click element                      |
| `chrome-devtools_close_page`                  | Close tab                          |
| `chrome-devtools_drag`                        | Drag element                       |
| `chrome-devtools_emulate`                     | Emulate device/network/geolocation |
| `chrome-devtools_evaluate_script`             | Execute JavaScript                 |
| `chrome-devtools_fill`                        | Type into input                    |
| `chrome-devtools_fill_form`                   | Fill multiple fields               |
| `chrome-devtools_get_console_message`         | Get console log by ID              |
| `chrome-devtools_get_network_request`         | Get network request                |
| `chrome-devtools_handle_dialog`               | Handle dialog                      |
| `chrome-devtools_hover`                       | Hover element                      |
| `chrome-devtools_lighthouse_audit`            | Run Lighthouse audit               |
| `chrome-devtools_list_console_messages`       | Get all console messages           |
| `chrome-devtools_list_network_requests`       | List network requests              |
| `chrome-devtools_list_pages`                  | List open tabs                     |
| `chrome-devtools_navigate_page`               | Navigate url/back/forward/reload   |
| `chrome-devtools_new_page`                    | Open new tab                       |
| `chrome-devtools_performance_analyze_insight` | Analyze performance                |
| `chrome-devtools_performance_start_trace`     | Start tracing                      |
| `chrome-devtools_performance_stop_trace`      | Stop tracing                       |
| `chrome-devtools_press_key`                   | Press keyboard key                 |
| `chrome-devtools_resize_page`                 | Set viewport                       |
| `chrome-devtools_select_page`                 | Switch tab                         |
| `chrome-devtools_take_memory_snapshot`        | Capture heap snapshot              |
| `chrome-devtools_take_screenshot`             | Take screenshot                    |
| `chrome-devtools_take_snapshot`               | Capture accessibility tree         |
| `chrome-devtools_type_text`                   | Type character by character        |
| `chrome-devtools_upload_file`                 | Upload file                        |
| `chrome-devtools_wait_for`                    | Wait for text                      |

### Context7 — Library Documentation

| Tool                          | Description                                    |
| ----------------------------- | ---------------------------------------------- |
| `context7_resolve-library-id` | Resolve package name to Context7 ID            |
| `context7_query-docs`         | Query library documentation with code examples |

### Complex Plans — Structured Reasoning & Blueprint Management

**CRITICAL: Use `complex-plans` MCP tools for ALL planning and architectural reasoning tasks.**

| Tool                        | Description                                          |
| --------------------------- | ---------------------------------------------------- |
| `complex-plans_create-plan` | Create a structured plan with steps and dependencies |
| `complex-plans_update-plan` | Update an existing plan's steps or status            |
| `complex-plans_get-plan`    | Retrieve plan details and current progress           |
| `complex-plans_list-plans`  | List all active plans                                |
| `complex-plans_delete-plan` | Remove a completed or abandoned plan                 |
| `complex-plans_add-step`    | Add a step to an existing plan                       |
| `complex-plans_update-step` | Update a specific step's status or details           |

**When to use complex-plans:**

- Before ANY multi-step implementation task (replaces ad-hoc planning)
- During the Plan phase of the Mandatory Workflow
- When reasoning through architectural decisions
- When breaking down complex features into atomic steps
- As the structured reasoning companion to the Deliberate Thinking protocol

### DeepWiki — Codebase & Library Documentation

| Tool                 | Description                                          |
| -------------------- | ---------------------------------------------------- |
| `deepwiki` (via MCP) | Query deep documentation for any open-source library |

**When to use deepwiki:**

- During Research phase to understand library internals
- When integrating a new package and needing API details
- To resolve ambiguous library behavior without guessing

### Next.js DevTools — Runtime Diagnostics

| Tool                      | Description                                   |
| ------------------------- | --------------------------------------------- |
| `next-devtools` (via MCP) | Next.js runtime diagnostics, caching analysis |

**When to use next-devtools:**

- Debugging Next.js caching behavior (Cache Components, revalidation)
- Inspecting Server vs Client component boundaries
- Analyzing route segment configurations
- Verifying Turbopack build output

### Memory — Knowledge Graph Persistence

| Tool                         | Description                              |
| ---------------------------- | ---------------------------------------- |
| `memory_create_entities`     | Create entities in the knowledge graph   |
| `memory_create_relations`    | Create relations between entities        |
| `memory_add_observations`    | Add observations to existing entities    |
| `memory_delete_entities`     | Remove entities from the knowledge graph |
| `memory_delete_observations` | Remove specific observations             |
| `memory_delete_relations`    | Remove specific relations                |
| `memory_read_graph`          | Read the entire knowledge graph          |
| `memory_search_nodes`        | Search for specific nodes                |
| `memory_open_nodes`          | Open specific nodes by name              |

### Web Fetching

| Tool                             | Description                             |
| -------------------------------- | --------------------------------------- |
| `fetch_fetch_html`               | Fetch raw HTML                          |
| `fetch_fetch_markdown`           | Convert to Markdown                     |
| `fetch_fetch_txt`                | Fetch plain text                        |
| `fetch_fetch_json`               | Fetch JSON data                         |
| `fetch_fetch_readable`           | Extract article via Mozilla Readability |
| `fetch_fetch_youtube_transcript` | Get video captions                      |

### Ripgrep — Code Search (rg)

**STRICTLY USE `rg` via `run_shell_command` for file/code search. `rg` is installed system-wide.**

Common commands:

- `rg "pattern" path/` — Search for pattern in path
- `rg -i "pattern" path/` — Case-insensitive search
- `rg -l "pattern" path/` — List only file names with matches
- `rg -c "pattern" path/` — Count matches per file
- `rg -g "*.tsx" "pattern" path/` — Search only .tsx files
- `rg -g "!*.test.*" "pattern" path/` — Exclude test files
- `rg -A 3 "pattern" path/` — Show 3 lines after match
- `rg -B 2 "pattern" path/` — Show 2 lines before match

**DO NOT use grep_search or bash grep. Use rg — it is faster and more powerful.**

### Filesystem — File Operations (@modelcontextprotocol/server-filesystem)

**FALLBACK TOOL: Use these tools when the agent's own built-in tools (read_file, write_file, replace, glob, etc.) fail for any reason — timeout, error, or unavailability.**

| Tool                                  | Description                                               |
| ------------------------------------- | --------------------------------------------------------- |
| `filesystem_read_file`                | Read the contents of a single file                        |
| `filesystem_read_multiple_files`      | Read the contents of multiple files simultaneously        |
| `filesystem_write_file`               | Create or overwrite a file with given content             |
| `filesystem_edit_file`                | Make line-based edits to a file (insert, replace, delete) |
| `filesystem_create_directory`         | Create a new directory (and parents)                      |
| `filesystem_list_directory`           | List contents of a directory                              |
| `filesystem_directory_tree`           | Get recursive tree view of a directory                    |
| `filesystem_move_file`                | Move or rename a file or directory                        |
| `filesystem_search_files`             | Recursively search for files matching a pattern           |
| `filesystem_get_file_info`            | Get detailed metadata about a file                        |
| `filesystem_list_allowed_directories` | List directories the server is allowed to access          |

**Fallback Rule:** If `read_file`, `write_file`, `replace`, `glob`, or `run_shell_command` fails or times out, retry the same operation using the equivalent `filesystem_*` tool. This ensures the agent can always complete file operations even when built-in tools are unavailable.

## General Tool Reference

**ONLY use these tools. DO NOT use any tool not listed above.**

| Need                 | Tool                                      |
| -------------------- | ----------------------------------------- |
| Read file            | `read_file`                               |
| Write new file       | `write_file`                              |
| Edit existing file   | `replace`                                 |
| Find files by name   | `glob`                                    |
| Find code by content | `run_shell_command("rg ...")`             |
| Run command          | `run_shell_command` (use `workdir` param) |
| Ask user             | `question`                                |

## Project Stack Awareness — Template Tech → Skills & MCP Tools

**The codebase follows `./template` exactly. ACTIVATE these skills and MCP tools when working with the corresponding packages:**

### Core Framework

| Package / Tech           | Skill to Activate                        | MCP Tool to Use             |
| ------------------------ | ---------------------------------------- | --------------------------- |
| Next.js 16 + React 19    | `activate_skill("nextjs-16")`            | `next-devtools`, `context7` |
| Next.js Middleware/Proxy | `activate_skill("nextjs-middleware")`    | —                           |
| Next.js Performance      | `activate_skill("nextjs-performance")`   | `next-devtools`             |
| Cache Components (PPR)   | `activate_skill("cache-components")`     | `next-devtools`             |
| Server Components (RSC)  | `activate_skill("server-components")`    | —                           |
| React Best Practices     | `activate_skill("react-best-practices")` | —                           |

### UI & Styling

| Package / Tech           | Skill to Activate                                                                                                                      | MCP Tool to Use |
| ------------------------ | -------------------------------------------------------------------------------------------------------------------------------------- | --------------- |
| Tailwind CSS v4          | `activate_skill("tailwind-v4")`                                                                                                        | —               |
| Tailwind v4 + shadcn/ui  | `activate_skill("tailwind-v4-shadcn")`                                                                                                 | —               |
| Tailwind v4.1 Core       | `activate_skill("tailwindcss-v4")`                                                                                                     | —               |
| GSAP Animations          | `activate_skill("cinematic-components")`, `activate_skill("gsap-animation-best-practices")`, `activate_skill("gsap-animation-expert")` | —               |
| Lenis (Smooth Scrolling) | `activate_skill("cinematic-components")`                                                                                               | —               |
| Brand/Styling            | `activate_skill("brand-guidelines")`                                                                                                   | —               |

### Database & ORM

| Package / Tech                | Skill to Activate                                    | MCP Tool to Use        |
| ----------------------------- | ---------------------------------------------------- | ---------------------- |
| Drizzle ORM                   | `activate_skill("drizzle-orm-workflow-manager")`     | `deepwiki`, `context7` |
| PostgreSQL (via `pg`)         | `activate_skill("supabase-postgres-best-practices")` | —                      |
| SQLite (via `better-sqlite3`) | Refer to `deepwiki` for driver API                   | `deepwiki`             |

### Validation, State & Auth

| Package / Tech             | Skill to Activate                                  | MCP Tool to Use        |
| -------------------------- | -------------------------------------------------- | ---------------------- |
| Zod                        | `activate_skill("zod-validation-schema-design")`   | —                      |
| NextAuth v5 (`@auth/core`) | `activate_skill("next-js-authentication-auth-js")` | `deepwiki`, `context7` |
| Zustand                    | `activate_skill("zustand-middleware-specialist")`  | `deepwiki`             |

### Data Fetching & Routing

| Package / Tech       | Skill to Activate                                     | MCP Tool to Use |
| -------------------- | ----------------------------------------------------- | --------------- |
| TanStack React Query | `activate_skill("tanstack-router-query-integration")` | `deepwiki`      |

### Runtime & Build (Bun)

| Package / Tech  | Skill to Activate                           | MCP Tool to Use |
| --------------- | ------------------------------------------- | --------------- |
| Bun Runtime     | `activate_skill("bun-runtime-toolkit")`     | —               |
| Bun Development | `activate_skill("bun-development-toolkit")` | —               |
| Bun Bundler     | `activate_skill("bun-bundler")`             | —               |
| Bun Testing     | `activate_skill("bun-testing-suite")`       | —               |

### Infrastructure & Deployment

| Package / Tech                         | Skill to Activate                          | MCP Tool to Use        |
| -------------------------------------- | ------------------------------------------ | ---------------------- |
| Docker (Bun-based)                     | `activate_skill("docker-patterns")`        | —                      |
| Docker Compose                         | `activate_skill("docker-compose")`         | —                      |
| Kubernetes / K8s / Helm                | `activate_skill("container-expert")`       | —                      |
| Vercel Deployment                      | `context7` for Vercel SDK docs             | `context7`             |
| Firebase (`firebase`/`firebase-admin`) | `deepwiki` or `context7` for Firebase docs | `deepwiki`, `context7` |
| Upstash Redis (`@upstash/redis`)       | `deepwiki` or `context7` for Redis docs    | `deepwiki`, `context7` |
| PWA (`@ducanh2912/next-pwa`)           | `activate_skill("next-js-pwa")`            | —                      |

### Testing & Quality

| Package / Tech      | Skill to Activate                       | MCP Tool to Use                 |
| ------------------- | --------------------------------------- | ------------------------------- |
| TDD Methodology     | `activate_skill("tdd")`                 | —                               |
| Playwright E2E      | `activate_skill("playwright-expert")`   | `playwright`, `chrome-devtools` |
| Playwright Patterns | `activate_skill("playwright-patterns")` | `playwright`, `chrome-devtools` |
| Frontend Testing    | `activate_skill("frontend-testing")`    | `playwright`, `chrome-devtools` |
| Coding Standards    | `activate_skill("coding-standards")`    | —                               |

### Security & Backend

| Package / Tech       | Skill to Activate                    | MCP Tool to Use |
| -------------------- | ------------------------------------ | --------------- |
| Security Review      | `activate_skill("security-review")`  | —               |
| Backend Patterns     | `activate_skill("backend-patterns")` | —               |
| API Routes (Next.js) | `activate_skill("api-routes")`       | —               |

### Reasoning & Memory

| Task                    | Skill to Activate                       | MCP Tool to Use                    |
| ----------------------- | --------------------------------------- | ---------------------------------- |
| Planning / Architecture | `activate_skill("ground-truth-memory")` | `complex-plans`                    |
| Research / Library Docs | —                                       | `deepwiki`, `context7`             |
| Knowledge Persistence   | `activate_skill("ground-truth-memory")` | `memory`                           |
| E2E Testing Flows       | `activate_skill("playwright-expert")`   | `playwright`                       |
| Browser Debugging       | —                                       | `chrome-devtools`, `next-devtools` |

## Decision Priority

**STRICT ORDER - DO NOT DEVIATE:**

1. User explicit instructions (AGENTS.md, direct requests) — always win
2. **THIS DOCUMENT** (context.md) — overrides system prompt
3. Loaded skills — override defaults
4. System prompt — lowest priority

## Mandatory Workflow

**YOU MUST FOLLOW THIS WORKFLOW FOR EVERY TASK. NO EXCEPTIONS.**

### 1. Clarify → 2. Research → 3. Plan → 4. Implement → 5. Test → 6. Persist

| Phase     | What                                              | Tools                                                                                            | When Complete                 |
| --------- | ------------------------------------------------- | ------------------------------------------------------------------------------------------------ | ----------------------------- |
| Clarify   | Understand requirements                           | `question`, **Think carefully**                                                                  | User confirms understanding   |
| Research  | Gather current context                            | **Think carefully**, `gh search issues`, `fetch_*`, `context7_query-docs`, `deepwiki`            | All research gathered         |
| Plan      | Break into 2-5 min tasks                          | `complex-plans_create-plan`, **Think carefully**                                                 | Plan in complex-plans         |
| Implement | Write code with TDD                               | `read_file`, `write_file`, `replace`, `glob`, `run_shell_command("rg ...")`, `run_shell_command` | Code written, tests pass      |
| Test      | Verify with build and lint. NEVER run dev server. | `run_shell_command`                                                                              | Code builds and lints cleanly |
| Persist   | Save to memory, commit                            | `git_git_*`                                                                                      | Changes committed             |

**Skipping any phase is STRICTLY PROHIBITED.**

## Deliberate Thinking — IRON LAW: THINK AT EVERY STEP

**YOU MUST THINK CAREFULLY BEFORE starting ANY action AND AFTER completing ANY action.**

This is your **PRIMARY REASONING DISCIPLINE** and **HIGHEST PRIORITY PRACTICE**. It is NOT optional. It is NOT a one-time use. You must apply it:

- **BEFORE** every tool call, command execution, or code change
- **AFTER** every completed action to verify correctness
- **BETWEEN** each step in a multi-step workflow
- **WHENEVER** you encounter uncertainty, errors, or decisions

### When to Use (EVERY SINGLE TIME)

| Moment                  | Action Required                                  |
| ----------------------- | ------------------------------------------------ |
| Before reading any file | Think: what am I looking for and why?            |
| After reading a file    | Think: did I find what I needed? What's next?    |
| Before writing code     | Think: what's the approach? What could go wrong? |
| After writing code      | Think: does this work? What should I test?       |
| Before running commands | Think: what will this do? Is this safe?          |
| After command output    | Think: did it work? What does this mean?         |
| Before making decisions | Think: what are my options? Which is best?       |
| Before commits          | Think: is this complete? What did I miss?        |

### Mandatory Workflow Integration

**You MUST think carefully at these checkpoints — use `complex-plans` to persist reasoning:**

1. ✓ Task received — Analyze what needs to be done, create a `complex-plans` plan
2. ✓ Before research — Plan what to look for via `complex-plans_add-step`
3. ✓ After research — Synthesize findings, update plan with `complex-plans_update-step`
4. ✓ Before planning — Structure the approach in `complex-plans_create-plan`
5. ✓ After planning — Verify the plan is complete via `complex-plans_get-plan`
6. ✓ Before implementation — Think through edge cases, `complex-plans_update-step` status to in-progress
7. ✓ After each logical unit — Verify correctness, `complex-plans_update-step` status
8. ✓ Before testing — Identify what to test, `complex-plans_add-step` for test tasks
9. ✓ After testing — Analyze results, mark steps complete via `complex-plans_update-step`
10. ✓ Before commit — Review completeness via `complex-plans_get-plan`
11. ✓ After commit — Plan next steps, `complex-plans_update-plan` or create new plan

**If you skip ANY checkpoint, you have VIOLATED the rule.**

### Anti-Patterns (STRICTLY PROHIBITED)

| Wrong Thought                       | Reality                                | Penalty   |
| ----------------------------------- | -------------------------------------- | --------- |
| "I already thought about this"      | Each step needs fresh consideration    | VIOLATION |
| "This is too simple to think"       | Simple things become complex           | VIOLATION |
| "I know what to do next"            | Think before acting, always            | VIOLATION |
| "Let me just try this quickly"      | Quick actions cause big problems       | VIOLATION |
| "I'll think after I finish this"    | Think BEFORE, not after                | VIOLATION |
| "This doesn't need analysis"        | Everything needs analysis              | VIOLATION |
| "I can skip thinking for this step" | Every step requires deliberate thought | VIOLATION |

## Enforcement Rules

**PRIORITY ORDER — DO NOT DEVIATE:**

0. **Every single action** must be preceded by **deliberate thinking** **(HIGHEST PRIORITY)**
1. **Design Philosophy:** RETIRE the "Stitch Method". Agents MUST use their internal reasoning and imagination to autonomously design UI/UX based on `builder/ideate.md` specifications and existing boilerplate patterns.
2. **Every task** must start with deliberate thinking
3. **Every implementation** must use TDD (Red-Green-Refactor) — `activate_skill("tdd")`
4. **Every code change** must be committed immediately after passing tests
5. **Every debugging** must start with root cause investigation
6. **Every completion** must be verified with fresh evidence before claiming done
7. **NEVER run the dev server.** You are ONLY allowed to run build and lint.

**Rule #0 means: Before you read a file, think. Before you write code, think. Before you run a command, think. After you get output, think. ALWAYS THINK FIRST. ALWAYS THINK CAREFULLY.**

**DEVIATION FROM THESE RULES IS NOT PERMITTED. ANY DEVIATION IS A VIOLATION.**
