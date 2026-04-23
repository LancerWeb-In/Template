# AGENT SKILLS & TOOLS REFERENCE

**STRICTLY ENFORCE ALL RULES IN THIS DOCUMENT. DEVIATION IS NOT PERMITTED.**

## Available Skills

**YOU MUST use `activate_skill("skill-name")` for the appropriate skill before any task.**

### Core Workflow Skills

**MUST use before starting any implementation task:**

- `activate_skill("ground-truth-memory")` — Mandates recording a high-signal technical rationale in `MEMORY.md` before every major or minor decision/task. Enforces the "Senior Developer Ground Truth" protocol to ensure no decision is forgotten or undocumented.
- `activate_skill("dispatching-parallel-agents")` — Enables concurrent investigation of independent failures. When facing 3+ test files failing with different root causes, or multiple subsystems broken independently, it dispatches one agent per problem domain for parallel resolution. Provides the decision tree for when to use parallel dispatch (failures independent? no shared state? can work concurrently?), creates focused agent tasks with specific scope and clear goals, and integrates results after parallel completion.
- `activate_skill("executing-plans")` — Loads and executes written implementation plans in a separate session with review checkpoints. Steps: load and review plan (raise concerns before starting), execute tasks (follow each step exactly, run verifications), complete development (use finishing-a-development-branch skill). Emphasizes reviewing plan critically first, following steps exactly without skipping verifications, stopping when blocked rather than guessing.
- `activate_skill("finishing-a-development-branch")` — Guides completion of development work by presenting structured options for merge, PR, or cleanup. Enforces verifying tests pass before presenting options, then presents exactly four choices: merge locally, push and create PR, keep branch as-is, or discard. Provides detailed execution for each choice including worktree cleanup.
- `activate_skill("receiving-code-review")` — Provides a framework for evaluating code review feedback with technical rigor rather than performative agreement. Forbids responses like "You're absolutely right!" or "Great point!"—instead requiring technical acknowledgment, clarification questions, or reasoned pushback. Emphasizes: verify, question, then implement—no performative agreement, technical rigor always.
- `activate_skill("requesting-code-review")` — Dispatches code-reviewer subagents to catch issues before they cascade. Provides mandatory review points: after each task in subagent-driven development, after completing major feature, and before merge to main. Guides getting git SHAs, dispatching the reviewer with precisely crafted context, and acting on feedback.
- `activate_skill("subagent-driven-development")` — Enables executing implementation plans by dispatching fresh subagent per task with two-stage review: spec compliance review first, then code quality review. Provides the complete workflow—dispatch implementer subagent, handle questions, implement with TDD, dispatch spec reviewer, fix gaps, dispatch code quality reviewer, fix issues, mark complete.
- `activate_skill("systematic-debugging")` — Enforces a rigorous four-phase approach to debugging: Root Cause Investigation (read errors, reproduce consistently, check recent changes, gather evidence), Pattern Analysis (find working examples, compare against references, identify differences), Hypothesis and Testing (form single hypothesis, test minimally), and Implementation (create failing test case, fix root cause, verify). Establishes the Iron Law: no fixes without root cause investigation first.
- `activate_skill("test-driven-development")` — Implements the RED-GREEN-REFACTOR cycle for all implementation work. Enforces writing the test first, watching it fail (proving it tests the right thing), writing minimal code to pass, then refactoring. Establishes the Iron Law: no production code without a failing test first.
- `activate_skill("using-git-worktrees")` — Use isolated worktrees for feature branches to enable safe, parallel execution across multiple branches or repositories.
- `activate_skill("verification-before-completion")` — Enforces the critical discipline of running verification commands and confirming output before claiming work is complete. Establishes the Iron Law: no completion claims without fresh verification evidence. Provides a structured gate function—IDENTIFY the proof command, RUN it, READ the output, VERIFY it matches the claim, THEN make the claim.
- `activate_skill("writing-plans")` — Guides in creating comprehensive implementation plans for multi-step tasks. Emphasizes bite-sized task granularity (2-5 minutes each), exact file paths, complete code examples in every step, and avoiding placeholders like "TBD" or "implement later". Enforces a strict process: announce at start, save plans to docs/superpowers/plans/, provide complete code in each step.
- `activate_skill("writing-skills")` — Equips with a test-driven development approach for creating, editing, and verifying reusable skills. Emphasizes the core principle that skills should only be written after observing an agent fail without them—ensuring each skill teaches the right behaviors. Covers skill types (technique, pattern, reference), proper YAML frontmatter formatting, and the complete RED-GREEN-REFACTOR methodology.
- `activate_skill("ground-truth-memory")` — Mandates recording a high-signal technical rationale in `MEMORY.md` before every major or minor decision/task. Enforces the "Senior Developer Ground Truth" protocol to ensure no decision is forgotten or undocumented.

### Visual & Frontend Skills

**MUST use for UI/UX and design work:**

- `activate_skill("frontend-design")` — Creates distinctive, production-grade frontend interfaces avoiding generic AI aesthetics. Before coding, requires committing to a bold aesthetic direction—pick an extreme: brutal minimalism, maximalist chaos, retro-futuristic, organic/natural, luxury/refined, playful, editorial, brutalist, art deco, soft/pastel, or industrial. Emphasizes typography (unique, characterful fonts), color commitment, motion (CSS-only or Motion library), spatial composition (asymmetry, overlap, diagonal flow), and backgrounds/visual details.
- `activate_skill("theme-factory")` — Provides 10 pre-set professional themes for styling artifacts like slides, docs, and HTML landing pages. Themes include Ocean Depths, Sunset Boulevard, Forest Canopy, Modern Minimalist, Golden Hour, Arctic Frost, Desert Rose, Tech Innovation, Botanical Garden, and Midnight Galaxy. Each theme has cohesive color palettes with hex codes and complementary font pairings.
- `activate_skill("cinematic-components")` — Provides 30+ modular premium website components for GSAP animations, scroll effects, cursor interactions, and ambient backgrounds. Components use vanilla HTML/CSS/GSAP/ScrollTrigger as reference implementations to translate into Next.js/React with Tailwind CSS. Categories include Scroll-Driven Effects (parallax, text masks), Cursor & Hover Interactions (magnetic buttons, 3D tilts), Click & Tap Actions (particles, view transitions), and Ambient & Auto Backgrounds (mesh gradients, marquees).
- `activate_skill("web-artifacts-builder")` — Build complex multi-component web artifacts.
- `activate_skill("algorithmic-art")` — Creates generative art using p5.js with seeded randomness and interactive parameter exploration. Follows a two-step process: first create an algorithmic philosophy (4-6 paragraphs expressing computational aesthetic movement), then express it in code. Emphasizes algorithmic expression over static images, process over product, and parametric control—seed navigation, parameter sliders, color pickers.
- `activate_skill("brand-guidelines")` — Applies Anthropic's official brand colors and typography to artifacts. Main colors: Dark #141413, Light #faf9f5, Mid Gray #b0aea5, Light Gray #e8e6dc. Accents: Orange #d97757, Blue #6a9bcc, Green #788c5d. Typography: Poppins for headings (24pt+), Lora for body text. Provides smart font application with Arial/Georgia fallbacks, automatic color selection based on background, and maintains text hierarchy.
- `activate_skill("tailwindcss-fundamentals-v4")` — Equips with specialized knowledge for Tailwind CSS v4, focusing on the framework's shift toward a CSS-centric configuration model and superior performance. Provides deep guidance on replacing legacy JavaScript configuration with the @theme directive, implementing perceptually uniform OKLCH color systems, and building fluid typography and spacing systems.
- `activate_skill("frontend-patterns")` — Provides a comprehensive library of best practices and implementation strategies for modern web development. Equips with the ability to generate advanced component architectures such as compound components and render props, alongside efficient state management patterns using Context and Reducers. Focuses on performance optimization through memoization and virtualization.
- `activate_skill("frontend-testing")` — Empowers to act as a specialized frontend QA expert, streamlining the creation and review of unit and integration tests. Strictly adheres to testing specifications, utilizing a structured, incremental workflow to ensure high code coverage and stability. Leverages Vitest, React Testing Library, and the AAA (Arrange-Act-Assert) pattern.
- `activate_skill("cache-components")` — Provides specialized guidance for Next.js Cache Components and Partial Prerendering (PPR), shifting from deprecated segment configurations to granular code-level caching. Proactively assists applying 'use cache' directive, managing cache lifetimes with cacheLife, implementing invalidation with cacheTag and updateTag. By analyzing project configurations, ensures optimal performance through strategic separation of static shells and dynamic streaming content. Helps navigate Next.js architectural patterns with build-time feedback, covering Suspense boundaries, draft mode, and cache tag invalidation strategies for production applications.

### Backend & Architecture Skills

**MUST use for server-side development:**

- `activate_skill("api-design")` — Provides a comprehensive framework for designing consistent, developer-friendly REST APIs. Guides in creating resource-oriented URL structures, selecting correct HTTP status codes, and implementing robust features like cursor-based pagination, complex filtering, and sparse fieldsets. Ensures backend services are scalable, maintainable, and provide superior developer experience through predictable error handling and versioning strategies.
- `activate_skill("backend-patterns")` — Provides deep expertise in backend engineering, focusing on the architectural patterns required for scalable server-side applications. Offers standardized templates and logic for RESTful API design, repository and service layer abstractions, and advanced database optimization techniques like N+1 prevention. Covers critical production concerns such as Redis caching, centralized error handling, JWT-based authentication, and background job processing.
- `activate_skill("docker-patterns")` — Equips with specialized knowledge for architecting, debugging, and securing containerized applications using Docker and Docker Compose. Provides domain-specific guidance for creating multi-stage Dockerfiles, managing complex service orchestration, and implementing robust network and volume strategies. Ensures configurations follow security best practices and performance optimization patterns.
- `activate_skill("drizzle")` — Equips with deep technical knowledge of Drizzle ORM, the TypeScript-first database toolkit. Enables generation of type-safe SQL, management of complex database migrations, and implementation of advanced CRUD operations across various environments including PostgreSQL, MySQL, and SQLite. Includes over 101 specialized topics, with specific integrations for serverless platforms like Neon, PlanetScale, and Cloudflare D1.
- `activate_skill("postgres-patterns")` — Provides a comprehensive toolkit for PostgreSQL database management, focusing on high-performance schema design and query optimization. Equips with specialized knowledge for selecting the right index types, implementing advanced SQL patterns like UPSERT and cursor-based pagination, and hardening security through optimized Row-Level Security (RLS) policies. Helps developers avoid common anti-patterns such as unindexed foreign keys and table bloat.
- `activate_skill("python-patterns")` — Equips with a deep understanding of Pythonic idioms and professional engineering standards. Provides structural guidance for writing clean, readable code using the 'Explicit is better than implicit' philosophy and EAFP error handling. Covers architecting new packages, refactoring legacy scripts, and implementing complex concurrency models with Asyncio or Multiprocessing, adhering to modern best practices including Python 3.9+ type hinting.
- `activate_skill("security-review")` — Provides a robust framework for identifying vulnerabilities and enforcing security best practices across the entire development lifecycle. Equips with detailed checklists and implementation patterns for critical areas including secrets management, input validation with Zod, SQL injection prevention, and secure authentication flows. Following industry-standard protocols like the OWASP Top 10, helps secure API endpoints, manage sensitive data exposure, and ensure production-grade safety.

### Process & Validation Skills

**MUST use for quality and communication:**

- `activate_skill("fix")` — A specialized utility designed to streamline the development workflow by automating code style enforcement and linting. By running repository-specific commands like 'yarn prettier' and 'yarn linc', ensures that changed files adhere to project standards and are ready for continuous integration. Essential for catching stylistic errors and linting violations early, reducing the feedback loop during code reviews.
- `activate_skill("internal-comms")` — Provides resources for writing company internal communications in preferred formats. Covers 3P updates (Progress, Plans, Problems), company newsletters, FAQ responses, status reports, leadership updates, project updates, and incident reports. Loads appropriate guideline files from the examples/ directory based on communication type and follows specific formatting, tone, and content gathering instructions.
- `activate_skill("webapp-testing")` — Provides a toolkit for testing local web applications using Chrome DevTools MCP. Includes decision trees for choosing approaches: static HTML vs dynamic webapp, and reconnaissance-then-action patterns using accessibility snapshots and UIDs. Emphasizes finding stable element identifiers and interacting directly with the browser session.

### Code Quality & Standards Skills

**MUST use for maintaining code quality:**

- `activate_skill("coding-standards")` — Provides a comprehensive framework for maintaining high-quality, readable, and performant codebases. Serves as an automated guide for core engineering principles like DRY, KISS, and YAGNI, offering specific implementation patterns for immutability, type safety, and efficient API design. Ensures consistent naming conventions, optimal file organization, and robust error handling to improve long-term maintainability and streamline team collaboration.
- `activate_skill("python-testing")` — Equips with specialized knowledge to architect and execute comprehensive testing strategies for Python applications. By integrating Test-Driven Development (TDD) principles, ensures that features are defined by their tests through the Red-Green-Refactor cycle. Covers complex fixture management, data-driven parametrization, asynchronous code testing with pytest-asyncio, and sophisticated dependency mocking. Particularly useful for achieving 80%+ code coverage.
- `activate_skill("search-first")` — Implements a systematic research-before-coding workflow, investigating existing packages (npm, PyPI), MCP servers, and GitHub patterns before writing custom solutions. By enforcing a structured evaluation process—Analysis, Search, Evaluation, and Decision—streamlines development, reduces code bloat, and ensures that implementations leverage proven, maintained open-source solutions.

### GitHub & Automation Skills

**MUST use for repository management and automation:**

- `activate_skill("github")` — Empowers to handle the full lifecycle of repository management by leveraging the power of the gh CLI. Streamlines development workflows by allowing users to create and review pull requests, triage issues, monitor CI/Workflow runs, and perform complex API queries without leaving the terminal environment. Provides a robust interface for repository maintenance and automated status checks.
- `activate_skill("gh-issues")` — Empowers to act as an autonomous project maintainer by orchestrating a sophisticated 6-phase workflow for repository management. Intelligently filters GitHub issues by labels or milestones, performs pre-flight safety checks on local and remote branches, and spawns parallel sub-agents to develop fixes. Beyond initial implementation, monitors pull requests for human feedback and automatically addresses review comments.
- `activate_skill("coding-agent")` — Empowers users to offload intensive development work—such as building new features, performing large-scale refactors, or conducting batch PR reviews—to specialized AI agents running in the background. By utilizing pseudo-terminal (PTY) support and isolated working directories, ensures interactive CLI agents function correctly while allowing the primary user to maintain their workflow. Excels at managing long-running tasks across multiple branches or repositories using git worktrees.

## MCP Tools Catalog

**USE ONLY TOOLS LISTED BELOW. DO NOT USE UNLISTED TOOLS.**

### GitHub — CLI Operations (gh)

**USE `gh` CLI via `run_shell_command` for all GitHub operations. `gh` is installed system-wide.**

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
| Research  | Gather current context                            | **Think carefully**, `gh search issues`, `fetch_*`, `context7_query-docs`                        | All research gathered         |
| Plan      | Break into 2-5 min tasks                          | `activate_skill("writing-plans")`, **Think carefully**                                           | Plan written to file          |
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

**You MUST think carefully at these checkpoints:**

1. ✓ Task received — Analyze what needs to be done
2. ✓ Before research — Plan what to look for
3. ✓ After research — Synthesize findings
4. ✓ Before planning — Structure the approach
5. ✓ After planning — Verify the plan is complete
6. ✓ Before implementation — Think through edge cases
7. ✓ After each logical unit — Verify correctness
8. ✓ Before testing — Identify what to test
9. ✓ After testing — Analyze results
10. ✓ Before commit — Review completeness
11. ✓ After commit — Plan next steps

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
1. **Every task** must start with deliberate thinking
2. **Every implementation** must use TDD (Red-Green-Refactor)
3. **Every code change** must be committed immediately after passing tests
4. **Every design task** must use `using-superpowers` skill first
5. **Every debugging** must use `systematic-debugging` skill
6. **Every completion** must use `verification-before-completion`
7. **NEVER run the dev server.** You are ONLY allowed to run build and lint.

**Rule #0 means: Before you read a file, think. Before you write code, think. Before you run a command, think. After you get output, think. ALWAYS THINK FIRST. ALWAYS THINK CAREFULLY.**

**DEVIATION FROM THESE RULES IS NOT PERMITTED. ANY DEVIATION IS A VIOLATION.**
