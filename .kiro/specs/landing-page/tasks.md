# Tasks: Landing Page

## Task List

- [x] 1. Exclude `/landing` from shell chrome
  - Edit `src/components/shell/ShellLayout.tsx`
  - Add `"/landing"` to the `SHELL_EXCLUDED` array so the landing page renders without Navbar, Sidebars, and BottomNav
  - `const SHELL_EXCLUDED = ["/onboarding", "/landing"];`
  - **Requirements:** R1, R6

- [x] 2. Build the landing page component
  - Create `src/app/landing/page.tsx` — `"use client"`, imports `usePrivy` from `@privy-io/react-auth`, redirects to `/` if `authenticated` is true, returns `null` while `!ready`
  - Create `src/app/landing/_components/LandingNav.tsx` — logo mark left, "Get started" button right (calls `login()`)
  - Create `src/app/landing/_components/LandingHero.tsx` — mascot SVG + headline "The free, fun, and effective way to build wealth!" + primary CTA "Get started" (calls `login()`) + secondary CTA "I already have an account" (calls `login()`)
  - Create `src/app/landing/_components/LandingWorldsBar.tsx` — scrollable horizontal strip rendering 9 game worlds: 🏘️ Leaking Village, 🌳 Seed Forest, ⛰️ Debt Mountain, 🌪️ Market Storm, 🏙️ Business City, 🏠 Real Estate, 🌍 Global Markets, ₿ Crypto Kingdom, 🏝️ Legacy Island
  - Dark theme: `bg-[#13161f]`, Tailwind v4 classes only, no new CSS files
  - **Requirements:** R2, R5, R7, R8, R9

- [x] 3. Update root page to redirect unauthenticated users to `/landing`
  - Edit `src/app/page.tsx`
  - Add `usePrivy` import from `@privy-io/react-auth`
  - New logic: if `!ready` return null; if `!authenticated` redirect to `/landing`; if `!onboardingComplete` redirect to `/onboarding`; else render `<HomePage />`
  - Keep existing `useOnboardingStore` logic intact
  - **Requirements:** R3, R4
