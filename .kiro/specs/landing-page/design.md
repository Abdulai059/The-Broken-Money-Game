# Design: Landing Page

## Routing

App Router is confirmed active (`src/app/` directory exists). The new route is:

```
src/app/landing/
  page.tsx          ← LandingPage component (client, uses usePrivy)
```

## Component Structure

```
LandingPage (client)
  ├── <LandingNav />        — logo + "Get started" button
  ├── <LandingHero />       — mascot graphic + headline + CTA buttons
  └── <LandingWorldsBar />  — scrollable worlds strip (footer)
```

All three sub-components live inside `src/app/landing/_components/` to follow the project's `_components` colocation pattern.

## Auth Flow Changes

### `src/app/page.tsx` (modified)
Add `usePrivy` hook alongside existing `useOnboardingStore`:

```
authenticated? → NO  → redirect("/landing")
authenticated? → YES → onboardingComplete? → NO  → redirect("/onboarding")
                                            → YES → render <HomePage />
```

### `src/app/landing/page.tsx` (new)
Add reverse guard: if authenticated → redirect("/").

## ShellLayout Change

Add `"/landing"` to `SHELL_EXCLUDED`:

```ts
const SHELL_EXCLUDED = ["/onboarding", "/landing"];
```

## Privy Usage

`usePrivy` is imported from `@privy-io/react-auth`. Relevant fields:
- `authenticated` — boolean, used for guards
- `login()` — called on CTA button click, opens Privy modal
- `ready` — used to avoid flash before Privy initialises

## Visual Design

Dark theme matching app palette:
- Background: `bg-[#13161f]`
- Nav: `bg-[#1a1d27] border-b border-[#2a2f3d]`
- Primary button: `bg-[#58cc02] hover:bg-[#62d900] border-b-4 border-[#46a302]` (Duolingo green, as provided in reference design)
- Secondary button: `border-2 border-[#2a2f3d] text-[#1cb0f6]`
- Text: `text-white` / `text-[#9198ae]`

## Worlds Data

Defined as a static array (no store needed):

```ts
const WORLDS = [
  { emoji: "🏘️", label: "Leaking Village" },
  { emoji: "🌳", label: "Seed Forest" },
  { emoji: "⛰️", label: "Debt Mountain" },
  { emoji: "🌪️", label: "Market Storm" },
  { emoji: "🏙️", label: "Business City" },
  { emoji: "🏠", label: "Real Estate" },
  { emoji: "🌍", label: "Global Markets" },
  { emoji: "₿",  label: "Crypto Kingdom" },
  { emoji: "🏝️", label: "Legacy Island" },
];
```
