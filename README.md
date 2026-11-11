# DDTech

Single-page website for **DDTech** — a software engineering studio.
Restrained dark technical identity, bilingual (LT / EN), Vite + React + TypeScript.

Monochrome on near-black (`#0b0b0c`) with one quiet accent (`#5a6cff`), flat
surfaces and a hairline grid. No neon, no gradients, no scroll animations —
the work is carried by typography (Satoshi), spacing and honest copy.

## Run

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build → dist/
npm run preview  # preview the production build
```

## Structure

```
src/
  i18n.tsx              All copy (LT + EN) + language context + tech list
  styles.css            Design system (tokens, hairline grid, responsive)
  hooks.ts              Scroll-state hook for the nav
  components/
    Nav.tsx             Fixed nav, LT/EN toggle, mobile menu
    Hero.tsx            Type-led headline + two actions
    Services.tsx        6 services as a hairline-divided spec grid
    Process.tsx         4-step process (a real sequence)
    Principles.tsx      Honest commitments (how we work)
    Stack.tsx           Technology list (mono)
    Contact.tsx         Contact form — opens the visitor's email via mailto
    Footer.tsx
    icons.tsx           Service icons + arrow
```

## Editing content

All text lives in [`src/i18n.tsx`](src/i18n.tsx) under `CONTENT.lt` and `CONTENT.en`.
Change the email in `contact.email` for both languages. The contact form opens
the visitor's email client (`mailto:`) — swap it for a real backend or a form
service (e.g. Formspree) when you want to collect submissions server-side.

The numbers are deliberately left out: the copy makes honest claims, not invented
metrics. Add real figures only once you can stand behind them.

Respects `prefers-reduced-motion`, keyboard focus is visible, and the layout works
down to mobile.
