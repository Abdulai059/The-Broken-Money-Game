# Requirements: Landing Page

## Overview

Add a public-facing landing page (Duolingo-style) to The Hustle game. Unauthenticated visitors land on a marketing page. Authenticated users (Privy) are redirected straight to the dashboard (`/`).

The current flow is: `/ → /onboarding → /` (game). The new flow adds a layer before that:
- **Unauthenticated**: `/ → /landing` (new marketing page)
- **Authenticated + onboarding complete**: `/ → /` (game, as today)
- **Authenticated + onboarding incomplete**: `/ → /onboarding` (as today)

---

## Requirements

### R1 — Landing Route
The app must serve a landing page at `/landing`. This route must be excluded from the shell chrome (no Navbar, no Sidebar, no BottomNav) by adding `/landing` to `SHELL_EXCLUDED` in `ShellLayout`.

### R2 — Landing Page Content
The landing page at `/landing` must render:
- **Nav bar**: App logo (tree/coin SVG or text mark) + "Get started" button (links to Privy login flow)
- **Hero section**: Illustrative mascot/graphic + headline text ("The free, fun, and effective way to build wealth!") + two CTA buttons:
  - "Get started" — triggers Privy login
  - "I already have an account" — triggers Privy login
- **Category footer strip**: Scrollable row of game world tiles (e.g. 🏘️ The Leaking Village, 🌳 The Seed Forest, ⛰️ Debt Mountain, etc.) matching the worlds defined in the PRD

### R3 — Auth-Aware Root Redirect
`/` (`src/app/page.tsx`) must check Privy authentication state in addition to onboarding state:
- If **not authenticated**: redirect to `/landing`
- If **authenticated + onboarding incomplete**: redirect to `/onboarding` (existing behavior)
- If **authenticated + onboarding complete**: render `<HomePage />` (existing behavior)

### R4 — Post-Login Redirect
After a user logs in via Privy on the landing page, they must be redirected to `/` (root), which then applies R3 logic to route them correctly (to `/onboarding` or the game).

### R5 — Already-Logged-In Guard
If an authenticated user navigates directly to `/landing`, they must be redirected to `/` immediately.

### R6 — Shell Exclusion
`/landing` must not render the game shell (no Navbar, Nav, SidebarLeft, SidebarRight, BottomNav). This is done by adding `"/landing"` to the `SHELL_EXCLUDED` array in `ShellLayout.tsx`.

### R7 — Privy Login Integration
The landing page must use `usePrivy` from `@privy-io/react-auth` (already in `package.json`) to call `login()` when CTA buttons are clicked. No new auth packages may be introduced.

### R8 — Static Server-Compatible Component
The landing page component itself must be a `"use client"` component only because it calls `usePrivy` (interactive login trigger). The page structure (nav, hero, footer) is otherwise static markup — no global state, no stores.

### R9 — Tailwind Styling Consistency
Styling must use Tailwind CSS v4 classes consistent with the rest of the codebase. No new CSS files, no inline `style` props beyond what Tailwind cannot express. Dark theme (`bg-[#1a1d27]` range) matching the app's existing dark palette.
