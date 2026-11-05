# Mindful

A short, 2-minute reflection experience that helps people pause and notice what has been taking up space in their minds. Users choose topics, arrange them around Mooca, and reflect on what feels hardest about the topic closest to them.

[Live demo](https://punnapatkh191.github.io/mindful/) · [Problem & Approach in Figma](https://www.figma.com/design/4OkxtJ5PIpGDq1mHwfvZaL/Ooca_Assignment_Punnapat?node-id=33-15990) · [User Flow in Figma](https://www.figma.com/design/4OkxtJ5PIpGDq1mHwfvZaL/Ooca_Assignment_Punnapat?node-id=35-16247)

## Problem & approach

Every day, work, relationships, money, family, and the future compete for our attention. We may not get a moment to notice which of these is taking up the most space in our minds.

The design challenge is to make that moment of reflection approachable without making it feel like a test or evaluation. Mindful uses three steps:

- **Notice:** Choose what has been on your mind, rather than rate how stressed you feel.
- **Weigh:** Move topics closer to or farther from yourself. Distance expresses what feels heavier without assigning a score.
- **Focus:** Reflect on the closest topic through a short question, then see your own choices reflected back in a gentle reframe.

The experience does not score, diagnose, or classify the user. Its purpose is to help people pause and notice, rather than solve everything within two minutes.

## Design principles

- **No judgment:** No right or wrong answers and no evaluation of the user.
- **Do not try to fix everything:** A brief pause can be useful without producing a solution.
- **Let users define the meaning:** The person decides which topics matter and how heavy they feel.
- **Keep reflection simple:** Select, drag, and answer a short question instead of completing a long form.

Mooca serves as a visual companion and spatial anchor throughout the experience.

## User flow

`Intro → Notice → Weigh → Focus → Insight → Complete`

| Step | What happens |
| --- | --- |
| Intro | Introduces the reflection and invites the user to begin. |
| Notice | Select one or more topics. Something else opens a required text field for one custom topic. |
| Weigh | Drag topics around Mooca, or use the arrow keys on a focused chip. Closer means more present or heavier. |
| Focus | The closest topic determines four specific reasons plus “I’m not sure.” Select one reason to continue. |
| Insight | Shows a reframe and a summary based on the selected topic and reason. |
| Complete | Closes the reflection and offers Start again. |

The current implementation has 11 topic choices: Work, Relationships, Money, Family, Future, Myself, Health, Studies, Loneliness, Life changes, and Something else. Users can select all available choices; there is no six-topic limit. A custom topic is limited to 60 characters.

Back navigation retains selections and placements. If the closest topic changes, its previous reason is cleared. Start again clears the reflection. Answers live only in browser memory and are not sent to a server or saved; refreshing the page also clears them.

The Figma links document the design rationale and flow. The description above reflects the behavior of the current code.

## Run locally

Use **Node.js 24** and npm.

```sh
git clone https://github.com/Punnapatkh191/mindful.git
cd mindful
npm ci
npm start
```

Open the local URL printed by Vite, usually `http://127.0.0.1:5173/`. If that port is occupied, Vite may select another one. To request a specific port:

```sh
npm start -- --port 5175 --strictPort
```

Stop the server with `Ctrl+C`. No backend, account, API key, or environment file is required.

## Commands

| Command | Purpose |
| --- | --- |
| `npm start` | Start the local development server. |
| `npm run dev` | Alias for the same development server. |
| `npm run typecheck` | Check TypeScript without generating files. |
| `npm run build` | Create the production website in `dist/`. |
| `npm run preview` | Serve an existing production build locally. |

For a production check:

```sh
npm run typecheck
npm run build
npm run preview
```

The app is hosted on GitHub Pages. Every push to `main` runs `.github/workflows/deploy.yml`, installs dependencies, checks TypeScript, builds the site, and publishes `dist/`. The workflow can also be run manually from GitHub Actions. In repository Settings → Pages, the build source must be **GitHub Actions**. Vite uses relative asset paths so the website and fonts work under `/mindful/`.

## Tech stack

React 18, TypeScript, Vite, Tailwind CSS, Motion, and Lucide React.

## Source layout

```text
src/
  app/
    App.tsx          Shared state and screen transitions
    screens.tsx      The six screens
    content.ts       Topics, topic-specific reasons, and insight copy
    spatial.ts       Position, bounds, and layout calculations
    MentalSpace.tsx  Dragging, keyboard movement, and spatial rendering
    Mooca.tsx        Artwork fitting and motion
    ui.tsx           Logo, shared buttons, and progress dots
  imports/
    logoPaths.ts     Original logo geometry
    Mooca/           Geometry for the three mascot poses used by the app
  main.tsx           React entry point
  styles.css         Fonts, brand tokens, and shared responsive styles
public/fonts/        The fonts used by the app and their OFL licenses
.github/workflows/   The workflow required to publish on GitHub Pages
```

`package-lock.json` is included for reproducible installation. Generated output, installed dependencies, editor files, and local environment files are ignored by Git.

## Editing content and artwork

- Edit `TOPICS` and `TOPIC_REASONS` in `src/app/content.ts`. Each reason contains its own two-line insight, so the Focus screen and result stay connected.
- Keep topic and reason IDs stable when changing labels.
- Change shared controls in `src/app/ui.tsx` and shared styles in `src/styles.css`.
- Preserve SVG paths, viewBox values, and internal artwork coordinates at their original precision. Rounding vector coordinates damages curves and alignment.

## Accessibility and fonts

The interface includes labeled inputs, keyboard selection, arrow-key topic movement, focus indicators, a skip link, and support for reduced motion. Nunito is used for Latin text and Prompt for Thai text; both are self-hosted. Their license files are included under `public/fonts/`.

The original brand palette is preserved. Some text and focus-color combinations have insufficient contrast for WCAG AA, so this project does not claim full WCAG AA conformance.
