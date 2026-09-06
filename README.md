# StudyHub

A modern and responsive learning platform built with **Next.js, React, and TypeScript**. StudyHub allows users to explore courses, view detailed course information, access lessons, and monitor their learning progress through an interactive dashboard.

The project is designed to demonstrate core **Next.js App Router concepts**, including Server Components, Client Components, SSR, SSG, ISR, API Routes, dynamic routing, and image optimization.

---

## Live Demo

**Live Website:**
YOUR_VERCEL_DEPLOYMENT_URL

---

## Features

- 📚 Browse available courses
- 🔎 Search courses
- 🏷️ Filter courses by category
- 📖 View detailed course information
- 🎓 Access individual course lessons
- 📊 Track learning progress
- ⚡ Interactive progress dashboard
- 🧩 Dynamic and nested routing
- 🖥️ Server Components
- 💻 Client Components
- 🔄 Server-Side Rendering (SSR)
- 📦 Static Site Generation (SSG)
- ♻️ Incremental Static Regeneration (ISR)
- 🔌 Next.js API Routes
- 🖼️ Next.js Image Optimization
- 📱 Responsive user interface

---

## Tech Stack

### Frontend

- Next.js
- React
- TypeScript
- CSS

### Framework Features

- Next.js App Router
- Server Components
- Client Components
- Dynamic Routes
- Nested Routes
- SSR
- SSG
- ISR
- API Routes
- Image Optimization

### Development Tools

- Node.js
- npm
- Git
- GitHub
- Vercel

---

## Project Structure

```text
studyhub/
│
├── app/
│   ├── api/
│   │   └── courses/
│   │       └── route.ts
│   │
│   ├── courses/
│   │   └── [id]/
│   │       ├── lessons/
│   │       │   └── [lessonId]/
│   │       │       └── page.tsx
│   │       │
│   │       └── page.tsx
│   │
│   ├── dashboard/
│   |   ├── dashboard.css
│   │   └── page.tsx
│   │
│   ├── isr/
│   |   ├── isr.css
│   │   └── page.tsx
│   │
│   ├── ssr/
│   |   ├── ssr.css
│   │   └── page.tsx
│   │
│   ├── ssg/
│   |   ├── ssg.css
│   │   └── page.tsx
│   │
│   ├── page.tsx
│   ├── layout.tsx
│   └── globals.css
│
├── components/
│   ├── Navbar.tsx
│   ├── CourseCard.tsx
│   ├── CourseExplorer.tsx
│   └── DashboardProgress.tsx
│
├── data/
│   └── courses.ts
│
├── public/
│   └── images/
│
├── package.json
├── tsconfig.json
├── next.config.ts
└── README.md
```

---

## Pages

| Page                               | Description                             |
| ---------------------------------- | --------------------------------------- |
| `/`                                | StudyHub home page                      |
| `/courses`                         | Course listing and exploration          |
| `/courses/[id]`                    | Dynamic course details                  |
| `/courses/[id]/lessons/[lessonId]` | Individual lesson details               |
| `/dashboard`                       | Learning progress dashboard             |
| `/ssr`                             | Server-Side Rendering example           |
| `/ssg`                             | Static Site Generation example          |
| `/isr`                             | Incremental Static Regeneration example |

---

## API Routes

StudyHub includes Next.js API routes for handling course-related data.

### Get All Courses

```http
GET /api/courses
```

Returns the available courses.

### Get Course by ID

```http
GET /api/courses/:id
```

Example:

```text
/api/courses/1
```

---

## Next.js Concepts Demonstrated

### Server Components

The application uses Next.js Server Components where server-side rendering and data fetching are beneficial.

### Client Components

Interactive features such as search, filtering, and progress tracking use Client Components.

Example:

```tsx
"use client";
```

### Dynamic Routing

Course and lesson pages use dynamic route segments.

Example:

```text
/courses/[id]
```

and:

```text
/courses/[id]/lessons/[lessonId]
```

This allows the application to display dynamic content based on the selected course and lesson.

### Server-Side Rendering

SSR is demonstrated through the:

```text
/ssr
```

route.

The page is rendered on the server for each request.

### Static Site Generation

SSG is demonstrated through:

```text
/ssg
```

The page can be generated statically at build time.

### Incremental Static Regeneration

ISR is demonstrated through:

```text
/isr
```

This allows statically generated content to be updated after deployment without rebuilding the entire application.

### Image Optimization

Course images are optimized using the built-in Next.js `Image` component.

Example:

```tsx
import Image from "next/image";
```

---

## Getting Started

Follow these steps to run StudyHub locally.

### 1. Clone the Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### 2. Navigate to the Project

```bash
cd studyhub
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start the Development Server

```bash
npm run dev
```

### 5. Open the Application

Visit:

```text
http://localhost:3000
```

---

## Available Scripts

### Development

```bash
npm run dev
```

Starts the development server.

### Production Build

```bash
npm run build
```

Creates an optimized production build.

### Start Production Server

```bash
npm start
```

Starts the application in production mode.

### Lint

```bash
npm run lint
```

Runs the project's linting checks.

---

## Future Improvements

The project can be extended with additional features such as:

- 🔐 User authentication
- 👤 User profiles
- 💾 Database integration
- 📝 Course enrollment
- ✅ Lesson completion tracking
- 🏆 Certificates
- 💳 Course payments
- ⭐ Course reviews and ratings
- 🔔 Notifications
- 📈 Advanced learning analytics
- 👨‍🏫 Instructor dashboard
- 🛠️ Admin dashboard

---

## Learning Objectives

This project was developed to practice and demonstrate:

- Next.js App Router
- TypeScript with Next.js
- React component architecture
- Server and Client Components
- Dynamic routing
- Nested routing
- API Routes
- SSR
- SSG
- ISR
- Image optimization
- Responsive UI development
- Git and GitHub workflow
- Vercel deployment

---
