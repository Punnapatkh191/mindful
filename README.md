# Mindful

A short 2-minute reflection experience designed to help users notice what has been taking up space in their minds.

The experience does not score, diagnose, or classify the user. Instead, it gives users a simple way to pause, identify what is present, and reflect on what feels most difficult right now.

---

## Problem & Approach

### Problem

Every day, we have many things to think about — work, relationships, money, family, or the future. Sometimes we don't even realize which one is taking up the most space in our minds.

Many mental health experiences rely on questions, scores, or assessments to help users understand how they feel. While these approaches can be useful, they can also make a simple moment of self-reflection feel like a test or evaluation.

For this experience, I wanted to create something lighter and more approachable — a short moment where users can simply notice what they are carrying without needing to know exactly what is wrong or what they should do about it.

### Design Challenge

How might we create a short experience that helps people notice what is currently taking up space in their minds, without making them feel like they are taking a test or being evaluated?

### Approach

#### Notice

Let users choose the things that are currently on their mind from a set of predefined options.

Users can select multiple topics, with a maximum of six choices. If what they are carrying does not fit the available options, they can choose "Something else" and describe it themselves.

The goal is to let users start by simply recognizing what is present in their mind.

#### Weigh

After choosing the topics, users are asked to arrange them spatially.

They can move each topic closer to or further away from themselves until the placement feels right.

The interaction gives users a simple way to express which things feel more present or heavier without asking them to assign a number or score.

#### Focus

The topic that the user places closest to themselves becomes the focus of the next step.

The experience then asks a simple question about that topic to help the user reflect on what feels hardest about it.

#### Insight

The experience reflects the user's own choices back to them.

Rather than providing a score, diagnosis, or evaluation, the insight is presented as a gentle reframe based on what the user selected.

The goal is not to solve the problem, but to help the user notice what they may be carrying.

---

## Design Principles

### No Judgment

No scores, no right or wrong answers, and no results that tell users what they are.

### Don't Try to Fix Everything

The purpose of this experience is simply to help users pause and notice what they are carrying within two minutes.

It is not designed to solve every problem.

### Let Users Define Their Own Meaning

The experience does not interpret what users should feel.

Instead, it reflects the choices users make and lets them decide what those choices mean to them.

### Make Self-Reflection Simple

Use simple choices, spatial interaction, and short questions instead of asking users to provide a lot of information.

---

## User Flow

The experience follows a short reflection journey from noticing what is present, to identifying what feels most significant, and finally reflecting on it.

### 1. Intro

The user enters the experience and is introduced to the 2-minute reflection.

**Action:** Start the experience.

↓

### 2. Notice

The user is asked to choose what has been taking up space in their mind.

The user can choose from the available topics.

↓

### 3. Check Selected Topics

The experience checks whether the user is choosing from the available options.

**Yes — selecting from the available options**

The user can select up to a maximum of 6 topics.

↓

### 4. Choose More

After selecting a topic, the user decides whether they want to choose another one.

**Yes:** Return to the available topic options and continue selecting.

**No:** Finish selecting topics and continue to Weigh.

↓

### Alternative Path — Something Else

If the user's thought does not fit the available options, they can choose:

**Something else**

↓

### 5. Enter Something Else

The user can enter their own topic manually.

**Action:** Enter the topic.

↓

The user returns to the "Choose more" decision and can decide whether to continue selecting or finish.

↓

### 6. Weigh

The selected topics are shown in a spatial area around "You".

The user can move each topic closer to or further away from themselves.

The user arranges the topics until the placement feels right.

↓

### 7. Focus

The experience identifies the topic the user placed closest to themselves.

The user is then asked to reflect on that topic.

↓

### 8. Insight

The experience reflects the user's selected topic and response back to them through a short, gentle insight.

There is no score, diagnosis, or evaluation.

↓

### 9. Complete

The experience ends with a short closing moment.

The user can finish the experience or start again.

---

## User Flow Summary

INTRO

↓

NOTICE

↓

Choose from available options?

→ Yes [Maximum 6] → Choose more?

→ Yes → Return to choosing from available options

→ No → WEIGH

→ No [Maximum 1] → Something else → Enter manually → Choose more?

↓

WEIGH

↓

FOCUS

↓

INSIGHT

↓

COMPLETE

---

## Interaction Highlights

### Spatial Reflection

Instead of asking users to rate how they feel with a number, the experience uses spatial distance to let users express what feels closer or heavier.

### User-Controlled Reflection

Users decide what topics are relevant to them and how those topics should be positioned.

The experience does not determine the meaning of their choices for them.

### Gentle Feedback

The interface uses subtle movement, scale, proximity, and visual feedback to make the interaction feel calm and responsive.

### Mooca as a Companion

Mooca acts as the visual anchor throughout the experience.

It provides a calm presence rather than behaving as an assistant that gives advice or evaluates the user.

### Progressive Reflection

The experience gradually moves through:

Notice → Weigh → Focus → Insight

Each step asks the user to reflect on only one thing at a time, keeping the overall experience short and approachable.

---

## High-Fidelity Screens

The final design includes high-fidelity screens for the main moments of the experience:

- Intro
- Notice
- Weigh
- Focus
- Insight
- Complete

The interface uses a calm visual language with soft surfaces, rounded components, subtle motion, and restrained use of brand colors.

---

## Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- Motion
- Lucide React

---

## Project Structure

The project is organized around the main application, imported design assets, and global styling.

- `src/app/` — main application
- `src/imports/` — imported design assets and components
- `src/styles/` — global styles, theme, typography, and Tailwind setup

---

## Running the Project

Install dependencies:

npm install

Run the development server:

npm run dev

Build for production:

npm run build

Preview the production build locally:

npm run preview

---

## Deployment

The project is built with Vite and deployed as a static web application.

Production deployment is hosted on Vercel. https://mindful-hxpf4y95q-m-0931.vercel.app/

---

## Reflection

The goal of Mindful is not to tell users how they feel.

It is to create a small space where they can stop, notice what they are carrying, and leave with a little more awareness than they had before.
