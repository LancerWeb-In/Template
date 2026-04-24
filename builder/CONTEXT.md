# AGENT OPERATIONAL FRAMEWORK & SKILLS REFERENCE

**STRICTLY ENFORCE ALL PROTOCOLS. THIS DOCUMENT IS THE SUPREME AUTHORITY ON AGENT BEHAVIOR.**

## I. Core Mandates & Rules of Engagement

1.  **FOUNDATIONAL AXIOM: DELIBERATE THOUGHT**: You MUST apply rigorous reasoning BEFORE and AFTER every tool call, code change, or strategic decision. Generic thinking is prohibited; use the `complex-plans_sequentialThinking` tool for deep logic and the `complex-plans_createPlan` tool for architectural mapping.
2.  **STRUCTURED REASONING**: DO NOT use generic prose for complex planning. You MUST use the `complex-plans` MCP suite to manage task states, update logic paths, and maintain an immutable record of technical rationale.
3.  **NEXT.JS & REACT SPECIALIZATION**: As this is a Next.js/React codebase, you MUST prioritize `next-devtools` over generic tools. Use `next-devtools_nextjs_call` for runtime diagnostics and `next-devtools_browser_eval` for focused UI automation.
4.  **KNOWLEDGE ACQUISITION**: Use `deepwiki_ask_question` to map external repository context and documentation before attempting to integrate or refactor complex dependencies.
5.  **ATOMIC VERSIONING**: Commit changes after every atomic unit of work. Never batch unrelated features or fixes into a single commit.

## II. Mandatory Operational Lifecycle

| Phase | Objective | Tools & Protocols | Completion Criteria |
| :--- | :--- | :--- | :--- |
| **1. Clarify** | Requirement Alignment | `question`, Deep Logic Analysis | Written confirmation of user intent |
| **2. Research** | Context Mapping | `deepwiki_ask_question`, `rg`, `fetch_*`, `context7` | Zero technical unknowns remaining |
| **3. Plan** | Architectural Blueprint | `complex-plans_createPlan`, `activate_skill("writing-plans")` | Validated plan saved to project root |
| **4. Implement** | Code Execution | `read_file`, `write_file`, `replace`, `glob`, TDD | Logic passes all local unit tests |
| **5. Test** | Holistic Validation | `next-devtools_*`, Build, Lint, Chrome DevTools | 100% clean build/lint artifacts |
| **6. Persist** | State Security | `git_git_*`, `MEMORY.md` update | Changes committed and rationale logged |

## III. Available Skills

**YOU MUST use `activate_skill("skill-name")` for the appropriate domain before initiating any task.**

### Core Workflow Skills
- `activate_skill("ground-truth-memory")` — Mandates recording a high-signal technical rationale in `MEMORY.md` before every decision. Enforces the "Senior Developer Ground Truth" protocol.
- `activate_skill("dispatching-parallel-agents")` — Enables concurrent investigation of independent failures. Dispatches focused sub-agents for parallel resolution of multiple subsystems.
- `activate_skill("executing-plans")` — Loads and executes written plans with review checkpoints. Enforces strict adherence to the blueprint and verification at every step.
- `activate_skill("systematic-debugging")` — Enforces a four-phase approach: Root Cause Investigation, Pattern Analysis, Hypothesis Testing, and Implementation.
- `activate_skill("test-driven-development")` — Implements the RED-GREEN-REFACTOR cycle. No production code without a failing test first.
- `activate_skill("verification-before-completion")` — Gates all completion claims behind fresh, empirical verification evidence.

### Visual & Frontend Skills (Next.js/React Focused)
- `activate_skill("frontend-design")` — Creates distinctive, production-grade interfaces. Requires committing to a bold aesthetic (e.g., Brutalist, Luxury, Minimalist) before coding.
- `activate_skill("cinematic-components")` — Modular premium components for GSAP animations, scroll effects, and ambient backgrounds.
- `activate_skill("tailwindcss-fundamentals-v4")` — Specialized knowledge for Tailwind v4's CSS-centric configuration and OKLCH color systems.
- `activate_skill("cache-components")` — Advanced guidance for Next.js 16 Cache Components, `use cache` directives, and Partial Prerendering (PPR).

### Backend & Architecture Skills
- `activate_skill("api-design")` — Framework for resource-oriented REST APIs, cursor-based pagination, and robust error handling.
- `activate_skill("postgres-patterns")` — High-performance schema design, indexing strategies, and Row-Level Security (RLS) policies.
- `activate_skill("security-review")` — Checks for OWASP Top 10 vulnerabilities, Zod validation, and secure secrets management.

## IV. MCP Tools Catalog (Strategic Registry)

### Next.js DevTools (Runtime Specialist)
| Tool | Function |
| :--- | :--- |
| `next-devtools_init` | Initialize DevTools context for the current Next.js application |
| `next-devtools_nextjs_docs` | Search official Next.js documentation for specific API patterns |
| `next-devtools_browser_eval` | Execute Playwright scripts for automated UI/UX testing |
| `next-devtools_nextjs_call` | Invoke runtime tools (get_errors, get_logs, get_state) from dev server |
| `next-devtools_upgrade_nextjs_16` | Automated migration tool for Next.js v16 standards |
| `next-devtools_enable_cache_components` | Setup and configure Next.js 16 Cache Components |

### Complex Plans (Reasoning Engine)
| Tool | Function |
| :--- | :--- |
| `complex-plans_createPlan` | Create a detailed, multi-step execution blueprint with dependencies |
| `complex-plans_updatePlan` | Modify existing plans to reflect architectural shifts or progress |
| `complex-plans_deletePlan` | Remove obsolete or completed plan artifacts |
| `complex-plans_listPlans` | Discover all active planning documents in the current project |
| `complex-plans_sequentialThinking` | Engage in deep, multi-step logical reasoning for complex problem-solving |

### DeepWiki & Research
| Tool | Function |
| :--- | :--- |
| `deepwiki_read_wiki_structure` | Map the documentation hierarchy of a public GitHub repository |
| `deepwiki_read_wiki_contents` | Fetch the full markdown content of documentation for specific topics |
| `deepwiki_ask_question` | Ask context-grounded technical questions about a specific codebase |
| `context7_query-docs` | Query third-party library documentation with code example generation |

### Chrome DevTools (General Browser FALLBACK)
| Tool | Function |
| :--- | :--- |
| `chrome-devtools_take_snapshot` | Capture accessibility trees and DOM states (use for non-React apps) |
| `chrome-devtools_performance_*` | Profile page loads and trace performance bottlenecks |

## V. Decision Priority & Hierarchy

1.  **User Explicit Instructions**: (AGENTS.md or direct chat prompts) — Overrides everything.
2.  **This Operational Framework**: (CONTEXT.md) — Fundamental behavioral logic.
3.  **Loaded Skills**: Instructions returned via `activate_skill`.
4.  **System Prompt**: Default environment instructions (Lowest Priority).

**DEVIATION FROM THESE PROTOCOLS IS NOT PERMITTED.**
