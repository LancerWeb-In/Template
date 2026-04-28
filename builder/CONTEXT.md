# AGENT SKILLS & TOOLS REFERENCE

**STRICTLY ENFORCE ALL RULES IN THIS DOCUMENT. DEVIATION IS NOT PERMITTED.**

## Quick Reference: Skills Matrix

**YOU MUST use `activate_skill()` for the appropriate skill before any task.**

---

## Session Start Workflow

**Read documents in this order:**

1. **IGNITE.md first** — Project context, task directives, phase workflows
2. **CONTEXT.md second** — Universal patterns, reasoning protocol, skills catalog
3. **Activate required skills** based on task type
4. **Execute** with both documents providing complementary guidance

```txt
Session Start
    ↓
IGNITE.md (project context, task directives)
    ↓
CONTEXT.md (universal patterns, reasoning protocol)
    ↓
Skills + MCP Tools (activated on demand)
    ↓
Agent Execution
```

**Mid-Session Task Switching:**
When switching between tasks of different types:

- Re-evaluate task type detection for new task
- Adjust workflow phases accordingly
- No need to re-read documents unless explicitly requested

---

## Document Interaction Model

### Priority Resolution & Tie-Breaking

**Conflict Resolution:**

- **More specific rule wins** regardless of which document it's in
- CONTEXT.md provides foundational layer; IGNITE.md provides project context

**Tie-Breaking (when rules have equal specificity):**

1. IGNITE.md wins for project-specific decisions
2. CONTEXT.md wins for universal patterns
3. Most recently added rule wins (for version-timeline rules)
4. User clarification required if still unresolved

---

| Category       | Task                  | Skills to Activate                                                                   | MCP Tools                       |
| -------------- | --------------------- | ------------------------------------------------------------------------------------ | ------------------------------- |
| **Core**       | Any implementation    | `ground-truth-memory`                                                                | `sequential-thinking`           |
| **Core**       | Any code task         | `tdd`, `coding-standards`                                                            | —                               |
| **Next.js**    | React 19 + Next.js 16 | `nextjs-16`, `react-best-practices`                                                  | `context7`, `deepwiki`          |
| **Next.js**    | Middleware/Proxy      | `nextjs-middleware`                                                                  | —                               |
| **Next.js**    | Caching/PPR           | `cache-components`, `server-components`                                              | `next-devtools`                 |
| **Next.js**    | Performance           | `nextjs-performance`                                                                 | —                               |
| **Next.js**    | PWA                   | `next-js-pwa`                                                                        | —                               |
| **UI**         | Tailwind v4           | `tailwind-v4`, `tailwindcss-v4`                                                      | —                               |
| **UI**         | Tailwind + ShadCN     | `tailwind-v4-shadcn`                                                                 | —                               |
| **UI**         | UI Design             | `cinematic-components`, `brand-guidelines`, `frontend-design`                        | —                               |
| **Animation**  | GSAP                  | `gsap-animation-expert`, `gsap-animation-best-practices`                             | —                               |
| **Backend**    | API/Server            | `backend-patterns`, `api-routes`                                                     | —                               |
| **Database**   | Drizzle ORM           | `drizzle-orm-workflow-manager`                                                       | `deepwiki`, `context7`          |
| **Database**   | Postgres/Supabase     | `supabase-postgres-best-practices`                                                   | `deepwiki`                      |
| **Auth**       | NextAuth v5           | `next-js-authentication-auth-js`                                                     | `deepwiki`, `context7`          |
| **State**      | Zustand               | `zustand-middleware-specialist`                                                      | `deepwiki`                      |
| **State**      | TanStack              | `tanstack-router-query-integration`                                                  | `deepwiki`                      |
| **Validation** | Zod                   | `zod-validation-schema-design`                                                       | —                               |
| **Testing**    | E2E/Playwright        | `playwright-expert`, `playwright-patterns`, `frontend-testing`                       | `playwright`, `chrome-devtools` |
| **Testing**    | Visual                | `webapp-testing`                                                                     | —                               |
| **Runtime**    | Bun                   | `bun-runtime-toolkit`, `bun-development-toolkit`, `bun-bundler`, `bun-testing-suite` | —                               |
| **Infra**      | Docker                | `docker-patterns`, `docker-compose`, `container-expert`                              | —                               |
| **Code**       | Python                | `python-patterns`                                                                    | —                               |
| **Security**   | Security              | `security-review`                                                                    | —                               |
| **GitHub**     | GitHub                | `github`                                                                             | —                               |
| **MCP**        | MCP Builder           | `mcp-builder`                                                                        | —                               |
| **Meta**       | Skills                | `skill-creator`                                                                      | —                               |
| **Styling**    | Themes                | `theme-factory`                                                                      | —                               |

---

## 1. ARCHITECTURE

### 1.1 Design Principles

**SOLID Principles — Foundation of Maintainable Code**

| Principle                 | What It Means                                  | Violation Example                                   |
| ------------------------- | ---------------------------------------------- | --------------------------------------------------- |
| **S**ingle Responsibility | One class, one reason to change                | `UserManager` that does auth + email + reporting    |
| **O**pen/Closed           | Open for extension, closed for modification    | Adding `if/else` chains instead of polymorphism     |
| **L**iskov Substitution   | Subtypes must be substitutable for base types  | Throwing exceptions in overridden methods           |
| **I**nterface Segregation | Many specific interfaces > one giant interface | Forcing clients to implement unused methods         |
| **D**ependency Inversion  | Depend on abstractions, not concretions        | Direct instantiation: `const db = new PostgresDB()` |

**Other Core Principles:**

- **DRY (Don't Repeat Yourself):** Every piece of knowledge has one authoritative representation
- **KISS (Keep It Simple, Stupid):** Prefer simple solutions over complex ones
- **YAGNI (You Aren't Gonna Need It):** Don't add functionality until necessary
- **Composition Over Inheritance:** Prefer `has-a` over `is-a` relationships
- **Law of Demeter:** Object should only talk to immediate friends

### 1.2 Component Architecture

**React Component Patterns:**

| Pattern                       | When to Use                                  | Key Implementation                        |
| ----------------------------- | -------------------------------------------- | ----------------------------------------- |
| Container/Presentational      | Separate data fetching from rendering        | Presentational = pure function of props   |
| Compound Components           | Related components that share implicit state | `children` + context pattern              |
| Higher-Order Components (HOC) | Cross-cutting behavior injection             | `withAuth(Component)` → wrapped component |
| Render Props                  | Share stateful logic without composition     | `<DataFetcher render={(data) => ...} />`  |
| Custom Hooks                  | Extract and reuse stateful logic             | `useAuth()` → `{ user, login, logout }`   |
| Provider Pattern              | Global state or configuration                | React Context + `useContext()`            |

**Server vs Client Component Boundary:**

```txt
Server Components (default, no 'use client'):
  ✓ Data fetching, database queries
  ✓ Access to backend resources
  ✓ Security-sensitive operations
  ✓ Static content rendering
  ✗ User interactions, event handlers
  ✗ useState, useEffect, refs
  ✗ Browser-only APIs

Client Components ('use client' directive):
  ✓ Interactive UI, event handlers
  ✓ useState, useEffect, refs
  ✓ Browser APIs, localStorage
  ✓ Real-time updates, websockets
  ✗ Direct database access
  ✗ Server-side secrets
```

### 1.3 State Management Patterns

| State Type           | Where to Store            | Pattern                               |
| -------------------- | ------------------------- | ------------------------------------- |
| Server state (async) | Server component / fetch  | Direct fetch, no caching layer needed |
| URL state            | URL params/search         | `useSearchParams()`, `useRouter()`    |
| Form state           | Local component           | `useState` or uncontrolled with refs  |
| Global UI state      | Zustand / Context         | `persist` middleware for localStorage |
| Server cache         | React Query / fetch cache | Revalidation on mutation              |

**State Management Decision Tree:**

```txt
Does it need to persist across sessions?
  YES → Zustand with `persist` middleware (localStorage/IndexedDB)
  NO → Does it come from the server?
    YES → Server component fetch or React Query
    NO → Local useState or URL params
```

### 1.4 API Design Patterns

**RESTful Conventions:**

| Endpoint Pattern | HTTP Method | Purpose                |
| ---------------- | ----------- | ---------------------- |
| `/users`         | GET         | List users (paginated) |
| `/users`         | POST        | Create user            |
| `/users/:id`     | GET         | Get single user        |
| `/users/:id`     | PUT/PATCH   | Update user            |
| `/users/:id`     | DELETE      | Delete user            |

**Error Response Schema:**

```json
{
  {
    success: false,
    error: {
      code: 400,
      message: 'Validation failed',
      details: [{ field: 'email', issue: 'Invalid format' }]
    }
  }
}
```

**Rate Limiting Headers:**

- `X-RateLimit-Limit: 100`
- `X-RateLimit-Remaining: 95`
- `X-RateLimit-Reset: 1640000000`

---

## 2. CODE

### 2.1 Coding Standards

**TypeScript Best Practices:**

| Rule                                  | Why                           | Anti-Pattern                           |
| ------------------------------------- | ----------------------------- | -------------------------------------- |
| Avoid `any` type                      | Defeats type safety           | `const data: any = ...`                |
| Use explicit return types for exports | Documentation, catches errors | Omit return type on exported functions |
| Prefer `interface` for object shapes  | Declaration merging, extends  | `type T = { ... }` for simple shapes   |
| Use `type` for unions/intersections   | More expressive               | Interface for union types              |
| Strict null checks                    | Prevents runtime errors       | `value                                 |

**Naming Conventions:**

| Element          | Convention              | Example            |
| ---------------- | ----------------------- | ------------------ |
| Components       | PascalCase              | `UserProfile.tsx`  |
| Hooks            | camelCase, `use` prefix | `useAuth()`        |
| Utilities        | camelCase               | `formatDate()`     |
| Constants        | SCREAMING_SNAKE         | `MAX_RETRIES`      |
| Types/Interfaces | PascalCase              | `UserData`         |
| Files            | kebab-case              | `user-profile.tsx` |
| CSS classes      | kebab-case              | `btn-primary`      |

### 2.2 Clean Code Rules

**Function Design:**

| Rule                  | Implementation                                 |
| --------------------- | ---------------------------------------------- |
| Single responsibility | Function does one thing well (max 20-30 lines) |
| Few parameters        | Prefer 0-2 params; use options object for 3+   |
| No side effects       | Pure functions when possible                   |
| Early returns         | `if (error) return early` reduces nesting      |
| Descriptive names     | `calculateTotalPrice()` > `calc()`             |

**Error Handling:**

| Pattern                 | When to Use                                   |
| ----------------------- | --------------------------------------------- |
| Try/catch with fallback | External API calls, file operations           |
| Result/Either pattern   | Operations that can fail but are expected     |
| Custom error classes    | Differentiate error types for handling        |
| Error boundaries        | React component errors, prevent white screens |

### 2.3 TypeScript Patterns

**Generic Constraints:**

```typescript
// Constrain to object types
function pick<T extends object, K extends keyof T>(obj: T, keys: K[]): Pick<T, K> {
  // implementation
}

// Constrain to primitives
function identity<T extends string | number>(value: T): T {
  return value;
}
```

**Utility Types Mastery:**

| Type            | Use Case                      |
| --------------- | ----------------------------- |
| `Partial<T>`    | All properties optional       |
| `Required<T>`   | All properties required       |
| `Pick<T, K>`    | Subset of properties          |
| `Omit<T, K>`    | All except certain properties |
| `Record<K, V>`  | Key-value map                 |
| `ReturnType<F>` | Extract function return type  |
| `Parameters<F>` | Extract function params       |
| `Awaited<T>`    | Unwrap Promise type           |

### 2.4 Python Patterns

**Protocol (Duck Typing):**

```python
from typing import Protocol

class Repository(Protocol):
    def find_by_id(self, id: str) -> dict | None: ...
    def save(self, entity: dict) -> dict: ...
```

**Dataclasses as DTOs:**

```python
from dataclasses import dataclass, field

@dataclass
class CreateUserRequest:
    name: str
    email: str
    age: int | None = None
    tags: list[str] = field(default_factory=list)
```

**Context Managers:**

```python
from contextlib import contextmanager

@contextmanager
def database_transaction(db):
    try:
        yield
        db.commit()
    except Exception:
        db.rollback()
        raise
```

### 2.5 Refactoring Patterns

**Extract Method/Function:**

```typescript
// BEFORE: Long function with multiple responsibilities
function processOrder(order) {
  // validation
  if (!order.items || order.items.length === 0) throw new Error('Empty order');
  // pricing
  const subtotal = order.items.reduce((sum, item) => sum + item.price * item.qty, 0);
  const tax = subtotal * 0.08;
  // shipping
  const shipping = subtotal > 100 ? 0 : 10;
  // confirmation
  return { orderId: order.id, total: subtotal + tax + shipping };
}

// AFTER: Composed from small, focused functions
function processOrder(order) {
  validateOrder(order);
  const pricing = calculatePricing(order.items);
  const shipping = determineShipping(order.items);
  return createOrderConfirmation(order.id, pricing, shipping);
}
```

**Replace Conditional with Polymorphism:**

```typescript
// BEFORE: Type-checking chains
function area(shape: Shape) {
  if (shape.type === 'circle') {
    return Math.PI * shape.radius ** 2;
  } else if (shape.type === 'rectangle') {
    return shape.width * shape.height;
  }
  // ... more types
}

// AFTER: Method on each class
interface Shape {
  area(): number;
}
class Circle implements Shape {
  area() { return Math.PI * this.radius ** 2; }
}
```

### 2.5 Anti-Patterns

| Anti-Pattern    | Problem                                 | Solution                                |
| --------------- | --------------------------------------- | --------------------------------------- |
| God Object      | Single class/module doing too much      | Split into focused modules              |
| Callback Hell   | Nested callbacks                        | Promises, async/await, or composition   |
| Magic Numbers   | Unnamed constants                       | Named constants with descriptive names  |
| Shotgun Surgery | One change requires many edits          | Cohesive modules, single responsibility |
| Feature Envy    | Class uses more of another class's data | Move methods closer to data             |
| Data Clumps     | Groups of values always together        | Extract into own class/type             |

---

## 3. TESTING

### 3.1 Test Strategy

**The Testing Pyramid:**

```txt
        /   E2E   \          <-- (Few, expensive)
       /-----------\
      /             \
     /  Integration  \
    /-----------------\
   /                   \
  /     Unit Tests      \    <-- (Many, fast, isolated)
 -------------------------

**What to Test (Priority Order):**

| Priority | What                            | Why                    |
| -------- | ------------------------------- | ---------------------- |
| 1        | Business logic, calculations    | Core functionality     |
| 2        | Critical paths (auth, payments) | High-stakes operations |
| 3        | Integration points (APIs, DB)   | Where systems meet     |
| 4        | Complex components              | Easier to break        |
| 5        | Utility functions               | Reused everywhere      |

**What NOT to Test:**

| Skip                           | Reason                      |
| ------------------------------ | --------------------------- |
| Trivial code (getters/setters) | No logic to verify          |
| Third-party libraries          | Already tested              |
| Configuration files            | No behavior                 |
| Implementation details         | Fragile, doesn't test value |

### 3.2 Unit Testing Patterns

**Arrange-Act-Assert (AAA):**

```typescript
describe('calculateTotalPrice', () => {
  it('applies discount when total exceeds threshold', () => {
    // Arrange
    const cart = { items: [{ price: 50, qty: 3 }], discountCode: 'SAVE10' };
    // Act
    const total = calculateTotalPrice(cart);
    // Assert
    expect(total).toBe(135); // 150 - 10% discount
  });
});
```

**Test Behavior, Not Implementation:**

```typescript
// ❌ BAD: Tests implementation detail
it('calls useAuth hook', () => {
  const hook = useAuth();
  expect(hook).toBeDefined();
});

// ✅ GOOD: Tests observable behavior
it('redirects unauthenticated users to login', () => {
  render(<ProtectedRoute />);
  expect(screen.getByText('Login')).toBeInTheDocument();
});
```

### 3.3 E2E Testing Patterns

**Playwright Best Practices:**

| Practice                      | Implementation                               |
| ----------------------------- | -------------------------------------------- |
| Use `data-testid` as fallback | Primary: semantic locators (role, label)     |
| Wait for async operations     | `await page.waitForSelector()`               |
| Each test independent         | No shared state between tests                |
| Descriptive test names        | `should display error when email is invalid` |
| Screenshot on failure         | Debugging aid for CI                         |

**User Flow Testing:**

```typescript
test('user can complete purchase flow', async ({ page }) => {
  await page.goto('/products');
  await page.click('[data-testid^=product-card]');
  await page.click('button:has-text(\"Add to Cart\")');
  await page.click('a:has-text(\"Checkout\")');
  await page.fill('[name=email]', 'user@example.com');
  await page.fill('[name=cardNumber]', '4242424242424242');
  await page.click('button:has-text(\"Pay Now\")');
  await expect(page.locator('text=Order Confirmed')).toBeVisible();
});
```

### 3.4 Accessibility Testing

**WCAG 2.1 AA Requirements:**

| Rule                         | Test Method                      |
| ---------------------------- | -------------------------------- |
| Color contrast ≥ 4.5:1       | `axe-core` or manual check       |
| Focus indicators visible     | Tab through interactive elements |
| ARIA labels on icons/buttons | Check `aria-label` attributes    |
| Semantic HTML                | h1-h6 hierarchy, landmarks       |
| Keyboard navigation          | No mouse-only interactions       |

### 3.5 Performance Testing

**Core Web Vitals Thresholds:**

| Metric                         | Good   | Needs Work | Poor   |
| ------------------------------ | ------ | ---------- | ------ |
| LCP (Largest Contentful Paint) | ≤2.5s  | 2.5-4s     | >4s    |
| FID (First Input Delay)        | ≤100ms | 100-300ms  | >300ms |
| CLS (Cumulative Layout Shift)  | ≤0.1   | 0.1-0.25   | >0.25  |

**Bundle Size Budget:**

- Initial JS: <200KB (gzipped)
- Per-route JS: <100KB (gzipped)
- Images: lazy load below fold

---

## 4. DEPLOYMENT

### 4.1 CI/CD Patterns

**GitHub Actions Workflow:**

```yaml
name: CI
on: [push, pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
      - run: npm ci
      - run: npm run lint
      - run: npm run build
      - run: npm test
```

**Branch Protection Rules:**

- Require PR reviews
- Require status checks to pass
- Include meaningful PR descriptions
- Linear history (squash merge)

### 4.2 Environment Configuration

**Environment Variables Strategy:**

| Variable Type          | Where Defined             | Example                |
| ---------------------- | ------------------------- | ---------------------- |
| Public (non-sensitive) | `.env` (committed)        | `NEXT_PUBLIC_APP_NAME` |
| Private (sensitive)    | `.env.local` (gitignored) | `DATABASE_URL`         |
| Secrets                | CI/CD secrets             | `STRIPE_SECRET_KEY`    |
| Build-time             | `.env.production`         | `NEXT_PUBLIC_API_URL`  |

**Never Expose:**

- Database connection strings
- API keys (except public)
- Session secrets
- Admin credentials

### 4.3 Monitoring Patterns

**What to Monitor:**

| Category       | Metrics                      |
| -------------- | ---------------------------- |
| Performance    | Apdex score, page load times |
| Errors         | Error rate, stack traces     |
| Usage          | DAU/MAU, feature usage       |
| Infrastructure | CPU, memory, disk            |

**Alerting Thresholds:**

- Error rate > 1% → Warning
- Error rate > 5% → Critical
- P95 latency > 2s → Warning
- P99 latency > 5s → Critical

### 4.4 Rollback Strategies

**Blue-Green Deployment:**

```txt
[Green v1] ← Live Traffic
[Blue v2] ← Staging/Testing

On promotion:
1. Deploy v2 to Blue
2. Run smoke tests
3. Switch traffic: Blue ← v2
4. Keep Green v1 ready for 15 min
5. If issues: instant switch back to Green
6. After confidence: decommission Green
```

**Canary Deployment:**

```txt
1. Deploy to 5% of servers
2. Monitor error rates, latency
3. If healthy: scale to 25%, 50%, 100%
4. If issues: rollback 5% immediately
```

**Database Migration Safety:**

| Strategy                       | When                                       |
| ------------------------------ | ------------------------------------------ |
| Expand-Contract                | Add column, update code, remove old column |
| Backward-compatible migrations | New code works with old schema             |
| Feature flags                  | Toggle new behavior on/off                 |

---

## Research Methodology

### Decision Tree: Topic → Tool Selection

```txt
Is the topic about a library/framework API or usage pattern?
  YES → Is it a common library (React, Next.js, Tailwind)?
    YES → Use `context7_query-docs`
    NO → Use `deepwiki`
  NO → Is it about an unknown library or package?
    YES → Use `context7_resolve-library-id` to find ID, then `context7_query-docs`
  NO → Is it about debugging or inspecting browser behavior?
    YES → Use `chrome-devtools_*` tools
  NO → Is it about understanding repository/issue history?
    YES → Use `gh` CLI commands
  NO → Is it about documentation or reading web content?
    YES → Use `fetch_*` tools
```

### Specific Triggers

| Situation                  | Tool                                                  | Why                         |
| -------------------------- | ----------------------------------------------------- | --------------------------- |
| Unknown library            | `context7_resolve-library-id` → `context7_query-docs` | Official docs with examples |
| API unclear                | `deepwiki`                                            | Deep library internals      |
| Library not in Context7    | `fetch_fetch_readable`                                | Web research                |
| Browser debugging          | `chrome-devtools_*`                                   | Runtime inspection          |
| Test failure investigation | `playwright`                                          | Reproduce user flows        |
| Web content research       | `fetch_fetch_markdown`                                | Convert to readable format  |
| Repository operations      | `gh` CLI                                              | GitHub API access           |

### Tool-Specific Usage

**Context7:**

```txt
1. Resolve library ID: context7_resolve-library-id(package_name)
2. Query docs: context7_query-docs(library_id, query)
3. Use returned markdown for implementation
```

**DeepWiki:**

```txt
1. deepwiki query for library internals
2. Get deeper understanding of how library works
3. Combine with Context7 for implementation details
```

**Chrome DevTools:**

```txt
1. Performance: performance_start_trace → reproduce → performance_stop_trace → performance_analyze_insight
2. Console: list_console_messages to find errors
3. Network: list_network_requests to debug API calls
4. Accessibility: take_snapshot for accessibility tree
```

---

## Agent Reasoning Protocol

### Deliberate Thinking — IRON LAW

**YOU MUST THINK CAREFULLY BEFORE starting ANY action AND AFTER completing ANY action.**

| Moment                  | Required Action                                  |
| ----------------------- | ------------------------------------------------ |
| Before reading any file | Think: what am I looking for and why?            |
| After reading a file    | Think: did I find what I needed? What's next?    |
| Before writing code     | Think: what's the approach? What could go wrong? |
| After writing code      | Think: does this work? What should I test?       |
| Before running commands | Think: what will this do? Is this safe?          |
| After command output    | Think: did it work? What does this mean?         |
| Before making decisions | Think: what are my options? Which is best?       |
| Before commits          | Think: is this complete? What did I miss?        |

### Tool Execution Patience

| Rule                       | Enforcement                              |
| -------------------------- | ---------------------------------------- |
| One tool at a time         | Wait for full response before proceeding |
| No exit/close/retry        | Complete each operation fully            |
| Patience during processing | Let tools complete their work            |
| Proceed only after output  | No skipping ahead                        |

### Decision Priority Hierarchy

| Priority | Source                     | When It Wins                        |
| -------- | -------------------------- | ----------------------------------- |
| 1        | User explicit instructions | Always — direct requests, AGENTS.md |
| 2        | This document (context.md) | Overrides system prompt             |
| 3        | Loaded skills              | Override defaults                   |
| 4        | System prompt              | Lowest priority                     |

### More Specific Wins

When rules conflict across documents:

- **More specific rule wins** regardless of document origin
- CONTEXT.md provides foundational layer
- IGNITE.md provides project context
- Most recently added rule wins (timeline rules)
- User clarification required if still unresolved

---

## MCP Tools Catalog

USE ONLY TOOLS LISTED BELOW. DO NOT USE UNLISTED TOOLS.

### Playwright — Browser Automation & E2E Testing

**For Next.js projects: Use Playwright MCP for user-flow testing and Chrome DevTools MCP for debugging/inspection. They complement each other.**

| Tool                          | Description                       |
| ----------------------------- | --------------------------------- |
| `browser_navigate`            | Navigate to a URL                 |
| `browser_click`               | Click an element                  |
| `browser_fill`                | Fill an input field               |
| `browser_select_option`       | Select an option in a dropdown    |
| `browser_hover`               | Hover over an element             |
| `browser_press_key`           | Press a keyboard key              |
| `browser_snapshot`            | Capture accessibility tree        |
| `browser_screenshot`          | Take a visual screenshot          |
| `browser_evaluate`            | Execute JavaScript in the browser |
| `browser_wait_for_selector`   | Wait for element to appear        |
| `browser_wait_for_load_state` | Wait for page load state          |
| `browser_get_text`            | Extract text content              |
| `browser_scroll`              | Scroll the page                   |
| `browser_open_tab`            | Open a new browser tab            |
| `browser_switch_tab`          | Switch between tabs               |
| `browser_close`               | Close browser/tab                 |

### Chrome DevTools — Browser Inspection

| Tool                                          | Description                        |
| --------------------------------------------- | ---------------------------------- |
| `chrome-devtools_take_snapshot`               | Capture accessibility tree         |
| `chrome-devtools_take_screenshot`             | Take screenshot                    |
| `chrome-devtools_list_console_messages`       | Get console messages               |
| `chrome-devtools_navigate_page`               | Navigate (back/forward/reload)     |
| `chrome-devtools_evaluate_script`             | Execute JavaScript                 |
| `chrome-devtools_performance_start_trace`     | Start tracing                      |
| `chrome-devtools_performance_stop_trace`      | Stop tracing                       |
| `chrome-devtools_performance_analyze_insight` | Analyze performance                |
| `chrome-devtools_lighthouse_audit`            | Run Lighthouse audit               |
| `chrome-devtools_list_network_requests`       | List network requests              |
| `chrome-devtools_emulate`                     | Emulate device/network/geolocation |

### Context7 — Library Documentation

| Tool                          | Description                                    |
| ----------------------------- | ---------------------------------------------- |
| `context7_resolve-library-id` | Resolve package name to Context7 ID            |
| `context7_query-docs`         | Query library documentation with code examples |

### DeepWiki — Codebase & Library Documentation

| Tool                 | Description                                          |
| -------------------- | ---------------------------------------------------- |
| `deepwiki` (via MCP) | Query deep documentation for any open-source library |

### Next.js DevTools — Runtime Diagnostics

| Tool                      | Description                                   |
| ------------------------- | --------------------------------------------- |
| `next-devtools` (via MCP) | Next.js runtime diagnostics, caching analysis |

### Memory — File-Based Persistence

For persistent memory, use `MEMORY.md` at the project root:

- Document all technical decisions with rationale
- Include dates and status (Active/Completed/Deferred)
- Cross-reference related decisions

### Web Fetching

| Tool                             | Description                     |
| -------------------------------- | ------------------------------- |
| `fetch_fetch_html`               | Fetch raw HTML                  |
| `fetch_fetch_markdown`           | Convert to Markdown             |
| `fetch_fetch_readable`           | Extract article via Readability |
| `fetch_fetch_json`               | Fetch JSON data                 |
| `fetch_fetch_youtube_transcript` | Get video captions              |

### GitHub — CLI Operations (gh)

USE `gh` CLI via `run_shell_command` for all GitHub operations.

| Operation    | Command                                       |
| ------------ | --------------------------------------------- |
| List repos   | `gh search repos {query}`                     |
| Get file     | `gh api repos/{owner}/{repo}/contents/{path}` |
| Create issue | `gh issue create`                             |
| Create PR    | `gh pr create`                                |
| List issues  | `gh issue list`                               |
| View PR      | `gh pr view {number}`                         |

### Filesystem — Fallback Tool

**USE ONLY WHEN BUILT-IN TOOLS FAIL (timeout, error, unavailability)**

| Tool                          | Description              |
| ----------------------------- | ------------------------ |
| `filesystem_read_file`        | Read file contents       |
| `filesystem_write_file`       | Create or overwrite file |
| `filesystem_edit_file`        | Line-based edits         |
| `filesystem_list_directory`   | List directory contents  |
| `filesystem_search_files`     | Search for files         |
| `filesystem_create_directory` | Create directory         |

---

## Version Handling

### Timeline Approach for Version-Specific Rules

**Format:**

```txt
Until v14: Use [old approach]
From v15: Use [new approach]
From v16: Use [latest approach]
```

**Migration Path Example (Next.js):**

```txt
Until v14: Use pages router
From v15: Migrate to app router (gradual)
From v16: App router is default, pages router legacy
```

### Version Markers

All version-gated content must have clear markers:

- `Until vX` / `From vX` / `Until vX, From vY`
- Document migration paths
- Breaking change warnings

---

## Error Handling

### Missing or Corrupted Documents

| Situation          | Action                                            |
| ------------------ | ------------------------------------------------- |
| IGNITE.md missing  | Request user to provide or restore                |
| CONTEXT.md missing | Operate with IGNITE.md alone (reduced capability) |
| Both missing       | Request document restoration before proceeding    |

### Internal Contradictions

| Location          | Resolution                                       |
| ----------------- | ------------------------------------------------ |
| Within IGNITE.md  | Report contradiction, use more recent rule       |
| Within CONTEXT.md | Report contradiction, use foundational principle |
| Cross-document    | Apply priority/tie-breaking rules                |

### Agent Disagreement

- If agent has strong reasoning against a directive → Present concern to user via `ask_user` tool
- Agent may request clarification before proceeding

---

## Skills Detail Reference

### Core Workflow Skills

**ground-truth-memory** — Records technical rationale in `MEMORY.md` before every decision. Maintains single source of truth: human-readable MEMORY.md file at project root.

**tdd** — Red-Green-Refactor methodology:

1. Write failing test
2. Write minimal code to pass
3. Refactor
4. Never write production code without failing test first

**coding-standards** — Clean code enforcement: DRY, SOLID, Composition Over Inheritance, YAGNI, KISS, naming conventions, function design, error handling.

### Next.js & React Skills

**nextjs-16** — Expert Next.js 16 with Turbopack, App Router, Cache Components, proxy.ts, React 19. Covers breaking changes from v15, SOLID architecture, core concepts.

**nextjs-middleware** — Middleware system: matcher config, auth protection, RBAC, redirects/rewrites, i18n, security headers (CSP, CORS), geolocation routing.

**nextjs-performance** — Optimizations: next/image, next/font, dynamic imports, caching, bundle optimization, Core Web Vitals (LCP, FID, CLS).

**next-js-pwa** — Progressive Web App implementation: service workers, manifest.json, offline support, push notifications, install prompt, cache strategies.

**cache-components** — Next.js Cache Components and PPR: 'use cache' directive, cacheLife(), cacheTag(), updateTag()/revalidateTag(), static shells with dynamic streaming.

**server-components** — React Server Components: server vs client components, 'use client' directive, composition patterns, async data fetching, streaming with Suspense.

**react-best-practices** — 70 optimization rules across 8 categories: Waterfalls (CRITICAL), Bundle Size (CRITICAL), Server Perf (HIGH), Client Data Fetching (MEDIUM-HIGH), Re-render (MEDIUM), Rendering (MEDIUM), JavaScript Perf (LOW-MEDIUM), Advanced Patterns (LOW).

### UI & Animation Skills

**cinematic-components** — 30+ modular components for GSAP animations, scroll effects, cursor interactions, ambient backgrounds. Vanilla HTML/CSS/GSAP → Next.js/React/Tailwind translation.

**gsap-animation-expert** — Complex timelines, ScrollTrigger, SVG/canvas animations, timeline composition, BlendMode, FlipPlugin, MotionPathPlugin, advanced easing.

**gsap-animation-best-practices** — Scroll triggers, performance budgets, reduced-motion support, ScrollTrigger efficiency, accessibility, mobile optimization.

**tailwind-v4** — CSS-first configuration, @theme directive, container queries, new utilities (text-balance, logical properties, subgrid), dark mode, custom @utility definitions.

**tailwindcss-v4** — v4.1 core: @theme directive, @utility/@variant/@custom-variant, migration from v3, renamed/removed utilities, --alpha() and --spacing() functions.

**tailwind-v4-shadcn** — ShadCN integration with Tailwind v4: component styling, dark mode, theming, customization patterns.

**frontend-design** — Design principles, color theory, typography, spacing, layout patterns, responsive design, accessibility fundamentals.

### Backend & Database Skills

**backend-patterns** — RESTful API, repository/service/middleware patterns, query optimization, N+1 prevention, Redis caching, error handling, JWT auth, RBAC, rate limiting.

**api-routes** — Next.js API Routes and Route Handlers: HTTP methods, dynamic routes, middleware integration, edge runtime, request/response handling.

**drizzle-orm-workflow-manager** — Schema generation, migration pushing, introspection, reset flows. drizzle-kit CLI, schema design patterns, multi-driver support.

**supabase-postgres-best-practices** — Postgres optimization: Query Performance (CRITICAL), Connection Management (CRITICAL), Security & RLS (CRITICAL), Schema Design (HIGH).

**python-patterns** — Protocols, dataclasses as DTOs, context managers, generators, decorators, async/await, advanced type hints, dependency injection, error handling, package organization.

### GitHub & MCP Skills

**github** — GitHub CLI operations: repo management, issues, PRs, actions, releases, code search.

**mcp-builder** — Model Context Protocol builder: tool definition, resource handling, prompt templates, server implementation.

**skill-creator** — Creating new skills following market standards: SKILL.md format, agent structure, references, examples.

### Styling & Theme Skills

**theme-factory** — Styling artifacts with a theme. 10 pre-set themes with colors/fonts. Theme showcase, application process, custom theme creation.

---

## Extended Reference

### Python Patterns (Async & Advanced)

**Async/Await Patterns:**

```python
import asyncio
from typing import List

async def fetch_user(user_id: str) -> dict:
    await asyncio.sleep(0.1)
    return {"id": user_id, "name": "Alice"}

async def fetch_all_users(user_ids: List[str]) -> List[dict]:
    tasks = [fetch_user(uid) for uid in user_ids]
    return await asyncio.gather(*tasks)
```

**Decorators:**

```python
from functools import wraps
import time

def timing(func):
    @wraps(func)
    def wrapper(*args, **kwargs):
        start = time.time()
        result = func(*args, **kwargs)
        print(f"{func.__name__} took {time.time() - start:.2f}s")
        return result
    return wrapper
```

### Testing Patterns (Advanced)

**Mocking:**

```typescript
const mockFetch = vi.fn().mockResolvedValue({ data: 'test' });
vi.useFakeTimers();
vi.advanceTimersByTime(1000);
```

### Security Best Practices

| Practice         | Implementation                                      |
| ---------------- | --------------------------------------------------- |
| Input validation | Sanitize all user input, use parameterized queries  |
| Authentication   | Hash passwords with bcrypt, use JWT with expiration |
| Authorization    | Implement RBAC, check permissions on every request  |
| HTTPS            | Enforce TLS, set secure cookies                     |
| Headers          | CSP, X-Frame-Options, HSTS                          |

### Performance Optimization

- Use `next/image` for automatic optimization
- Use `priority` for above-fold images
- Dynamic imports for heavy components
- Bundle analysis with next bundle analyze
- Monitor Core Web Vitals regularly

---

**DOCUMENT VERSION: 2.0**
**Last Updated: Per DOCUMENTATION-SPEC.md**
**Word Count Target: 5,000-10,000 words**
**Total Skills in Market: 43**

---

**DOCUMENT VERSION: 2.0**
**Last Updated: Per DOCUMENTATION-SPEC.md**
**Word Count Target: 5,000-10,000 words**
**Total Skills in Market: 43**

**zod-validation-schema-design** — Runtime validation, schema definition, TypeScript type inference. Schema composition, .transform(), .discriminatedUnion(), error handling.

**zustand-middleware-specialist** — `persist` middleware (localStorage, IndexedDB), `devtools` integration, `immer` for immutable updates, `subscribeWithSelector`, store composition, custom middleware patterns.

**tanstack-router-query-integration** — TanStack Router and TanStack Query integration: route loading, data fetching, mutations, cache management, optimistic updates.

**next-js-authentication-auth-js** — OAuth providers, credential auth, session management (JWT + database), protected routes, RBAC, Drizzle adapter, middleware integration.

### Testing & Quality Skills

**playwright-expert** — Cross-browser testing, auto-waiting, visual regression, mobile emulation, Page Object Model, screenshots, MCP integration.

**playwright-patterns** — Selector priority (role → test IDs → CSS), auto-waiting, web-first assertions, data extraction, error handling, form interactions.

**frontend-testing** — Component tests (Jest/Vitest + RTL), visual regression (Playwright), accessibility (axe-core), performance (Lighthouse), mocking strategies.

**webapp-testing** — Web application testing toolkit using Playwright. Decision tree for static vs dynamic content, with_server.py for server lifecycle management, reconnaissance-then-action pattern.

**security-review** — Security vulnerability identification, OWASP Top 10, common attack vectors, secure coding practices, authentication/authorization testing.

### Runtime & Infrastructure Skills

**bun-runtime-toolkit** — `bun` commands, `bunx`, shell scripts, `bun.lock`, `bun test`, Bun APIs (Bun.file(), Bun.serve(), Bun.spawn()), Node.js differences, performance tips.

**bun-development-toolkit** — Modern JavaScript/TypeScript development with Bun. Package management, bundling, testing, migration from Node.js, built-in APIs.

**bun-bundler** — Bun bundler: building for different targets, tree-shaking, code splitting, optimization strategies, plugin system.

**bun-testing-suite** — Bun test runner: describe/it blocks, matchers, mocking, coverage, watch mode.

**docker-patterns** — Multi-stage builds, distroless images, Docker Compose, health checks, security best practices.

**docker-compose** — Multi-container apps, service definition, networking, volumes, CLI commands, environment management.

**container-expert** — Docker, Kubernetes, Helm, service mesh. Iron Laws: never run as root, never store secrets, always set resource limits, always add health probes.
