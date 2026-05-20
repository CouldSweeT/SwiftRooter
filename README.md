# SwiftRooter

Production-ready responsive website for a plumbing and rooter service company. The project is built as a polished business landing page with service discovery, trust-building sections, location cards, testimonials, FAQ content, and a validated request-a-call flow.

## Live Demo for Recruiters

View the deployed project here:

**[https://swiftrooter.vercel.app](https://swiftrooter.vercel.app)**

## Project Overview

SwiftRooter is a full marketing website built with Next.js, TypeScript, React, and Tailwind CSS. It demonstrates responsive UI development, reusable component architecture, validated forms, routing with the App Router, and deployment to Vercel.

## Why This Project Stands Out

- Modern App Router architecture with Next.js 16 and React 19
- Fully responsive layout for mobile, tablet, and desktop
- Reusable UI sections for services, testimonials, locations, FAQ, and lead capture
- Form validation with React Hook Form and Zod
- Server-side API route for contact form submission
- Optimized local image assets with `next/image`
- Tailwind CSS styling with a clean service-business visual system

## Tech Stack

- **Framework:** Next.js 16
- **Language:** TypeScript
- **UI:** React 19, Tailwind CSS 4
- **Forms:** React Hook Form, Zod
- **Icons:** Lucide React
- **Deployment:** Vercel

## Features

- Hero section with a strong service offer and lead-capture form
- Residential and commercial plumbing service categories
- Trust indicators, customer testimonials, and expert profiles
- Multi-page structure for Home, About, Services, Contact, and Privacy Policy
- Contact form API endpoint with schema validation
- Accessible navigation with desktop and mobile menus

## Getting Started

To run the project locally:

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open `http://localhost:3000` in your browser.

## Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## Project Structure

```text
src/
  app/                 App Router pages, layout, and API routes
  components/          Reusable page sections and UI components
  lib/data/            Content data for services, FAQ, locations, and more
  lib/schemas/         Zod validation schemas
public/                Images and static assets
```

## Deployment

This project is deployed on Vercel:

**Production:** [https://swiftrooter.vercel.app](https://swiftrooter.vercel.app)

The recommended deployment platform is Vercel because the project uses Next.js.

### Deploy From GitHub

1. Push the project to a GitHub repository.
2. Open Vercel and choose **Add New Project**.
3. Import the repository.
4. Keep the default framework preset: **Next.js**.
5. Build command: `npm run build`.
6. Output directory: leave empty.
7. Deploy.

### Deploy From CLI

```bash
npx vercel
npx vercel --prod
```

## Resume Description

**SwiftRooter** is a production-ready responsive website for a plumbing service brand, built with Next.js, TypeScript, Tailwind CSS, React Hook Form, and Zod. It includes reusable marketing sections, optimized image rendering, mobile navigation, validated lead capture, a server-side API route for form submissions, and Vercel deployment.
