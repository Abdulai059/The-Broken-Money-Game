<!-- BEGIN:nextjs-agent-rules -->

# ⚠️ This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

---

# 🧠 Core Agent Behavior Rules

## 1. Never Assume Stability
- Do not assume any Next.js API, folder structure, or behavior is standard.
- Always verify against local `/node_modules/next/dist/docs/`.
- If uncertain, prefer reading docs over guessing.

---

## 2. No Hallucinated APIs
- Never invent Next.js functions, hooks, or config fields.
- If something is unknown, explicitly flag it as:
  > "requires documentation verification"

---

## 3. File System Awareness
- Always respect the actual project structure.
- Do not assume `/app`, `/pages`, or `/src` exists unless verified.
- If structure is unclear, request or inspect it first.

---

## 4. App Router / Pages Router Confusion Rule
- Do NOT assume App Router is enabled.
- Do NOT assume Pages Router is enabled.
- Detect routing system before writing code.

---

## 5. Server vs Client Discipline
- Never assume a file is a client component.
- Only use `"use client"` when interaction is confirmed.
- Default to server-first architecture unless explicitly required.

---

## 6. Dependency Safety Rule
- If importing a library:
  - verify it exists in `package.json`
  - do not assume version compatibility
- Avoid recommending packages unless necessary

---

## 7. No Overengineering Rule
- Do not introduce unnecessary architecture layers.
- Avoid:
  - microservices
  - abstractions
  - wrappers
  unless explicitly requested

---

## 8. Strict Minimal Output Principle
- Prefer smallest working implementation
- Avoid adding features not requested
- Do not "improve" requirements silently

---

## 9. Documentation First Rule
Before writing code:
- check `/node_modules/next/dist/docs/`
- check local project patterns
- check existing components

If not checked → do not proceed

---

## 10. UI Consistency Rule
- Match existing UI patterns in the codebase
- Do not introduce new design systems silently
- Reuse components where possible

---

## 11. State Management Discipline
- Do not introduce global state unless required
- Prefer local state first
- Only escalate to context/store when justified

---

## 12. Performance Awareness Rule
- Avoid unnecessary re-renders
- Avoid heavy client components by default
- Prefer server components for static content

---

## 13. Security Rule
- Never expose secrets in client components
- Never assume environment variables exist
- Validate all external inputs

---

## 14. Debugging Rule
If something breaks:
- do not rewrite immediately
- inspect cause first
- isolate minimal failing case

---

## 15. Communication Rule
When uncertain:
- say what is unknown
- state what must be verified
- do NOT guess silently

---

# 🚨 Hard Constraint

If documentation contradicts training knowledge:

> ALWAYS trust local project documentation over model memory.

---

<!-- END:nextjs-agent-rules -->