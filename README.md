# Cogniq AI Homepage - 2hr Speed Assessment

A high-fidelity clone of the Cogniq AI homepage, developed as part of a 2-hour technical assessment.

## Project Scope
- **Timeframe**: 2 Hours (Fixed)
- **Objective**: Clone the target homepage with maximum visual accuracy using React/Next.js.
- **Tech Stack**: Next.js 16 (App Router), React 19, Framer Motion, Lucide React, CSS Modules.

## Development Strategy
Given the 2-hour limit, the following development strategy was adopted:
1. **Consolidated Styling**: Component styles are centralized in `Layout.module.css` to reduce file overhead and maximize development speed.
2. **Prioritized Layout**: Focus was placed on the complex 2x2 grid structures and responsive navigation.
3. **Motion Assets**: Used `framer-motion` for reveal effects to match the premium "feel" of the original site without custom keyframe overhead.

## Key Features
- **Sticky Glassmorphism Navbar**: Responsive with mobile toggle support.
- **Dynamic 2x2 Grids**: Custom implementations for Services, Why Choose Us, and the Process sections.
- **Animated Hero**: Floating elements and staggered text reveal.
- **Dark-Themed Footer**: Fully structured navigational hierarchy.

## How to Run
```bash
npm install
npm run dev
```

*Note: This project is a time-boxed assessment and focuses on frontend fidelity and component structure.*
