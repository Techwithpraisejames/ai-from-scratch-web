# AI From Scratch — Interactive learning website

A playful, editorial learning platform by Praise James. Learn AI concepts through bite-sized explanations, interactive browser experiments, quizzes, and video lessons.

**Live website:** https://ai-from-scratch-web-sand.vercel.app/

**Status:** First working prototype. Episodes 1–3 are available. Episode 4 is marked *Coming soon*. The AI Bible is intentionally out of scope.

## Run locally

Requires Node.js 20.9+.

```bash
npm install
npm run dev
```

Open http://localhost:3000.

To validate a production build:

```bash
npm run lint
npm run build
```

## Live deployment

The production deployment is connected to Vercel. The verified project domain is [ai-from-scratch-web-sand.vercel.app](https://ai-from-scratch-web-sand.vercel.app/). Vercel also lists project-generated aliases; deployment-specific preview URLs may change after each build.

## Deploy to Vercel

1. Import `Techwithpraisejames/ai-from-scratch-web` in Vercel.
2. Select the **Next.js** framework preset and keep the repository root as the root directory.
3. Deploy. No environment variables are required for the prototype.
4. Connect a custom domain later under Project Settings → Domains.

## Pages

- `/` — Home with a live spam-filter experiment
- `/learn` — Course path with three available lessons and Episode 4 preview
- `/learn/[slug]` — Video, explanation, experiment, knowledge checks, completion state
- `/playground` — Keyword spam filter and interactive next-token temperature simulation
- `/about` — Creator story

Progress is stored in the user's browser via `localStorage`, without requiring an account. Progress isn't synchronized between devices. The playground's token scores are illustrative rather than output from a live language model. Keyword filtering is rule-based, **not** machine learning. Neither experiment executes remote Python code.

## Design

Playful Editorial: off-white background, near-black typography, pastel pink and lavender with a yellow accent. Headings use Chakra Petch; the body and UI use Space Grotesk. Responsive for mobile and desktop, with keyboard-operable controls and focus indicators.

## Source course materials

[AI From Scratch Python lessons](https://github.com/Techwithpraisejames/ai-from-scratch)

## Next milestones

Expand Episodes 2–3 with their own topic-specific activities, validate usability on real phones, improve the feedback and progress experience, publish Episode 4 when its video is released, and commission original learning illustrations. No AI Bible features are included in this release.
