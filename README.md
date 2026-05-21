# ConneqtAI — Website

Premium AI startup website for ConneqtAI.

## Stack
- Next.js 14 (App Router)
- React 18
- TypeScript
- Tailwind CSS
- Vercel (deployment)

## Getting Started

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Deploy
```bash
# Install Vercel CLI
npm i -g vercel
vercel
```

## Project Structure
```
conneqtai/
├── app/
│   ├── layout.tsx      # Root layout + metadata
│   ├── page.tsx        # Home page
│   └── globals.css     # Global styles + CSS variables
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   └── sections/
│       ├── Hero.tsx
│       ├── TrustStrip.tsx
│       ├── Services.tsx
│       ├── HowItWorks.tsx
│       ├── DemoSection.tsx
│       ├── WhyConneqtAI.tsx
│       └── CTASection.tsx
└── lib/
    └── useScrollReveal.ts
```

## Customisation
- Brand colors → app/globals.css (:root variables)
- Content → edit each section component
- Fonts → globals.css @import + tailwind.config.ts
