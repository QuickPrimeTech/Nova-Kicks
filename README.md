<div align="center">
  <div>
    <img src="https://img.shields.io/badge/-TypeScript-black?style=for-the-badge&logoColor=white&logo=typescript&color=3178C6"/>
    <img src="https://img.shields.io/badge/-Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" />
    <br/>
    <img src="https://img.shields.io/badge/Next.js-000?style=for-the-badge&logo=next.js&logoColor=white">
    <img src="https://img.shields.io/badge/-Drizzle-black?style=for-the-badge&logoColor=C5F74F&logo=drizzle&color=black"/>

  </div>
  </div>

## 📋 <a name="table">Table of Contents</a>

1. ✨ [Introduction](#introduction)
2. ⚙️ [Tech Stack](#tech-stack)
3. 🔋 [Features](#features)
4. 🤸 [Quick Start](#quick-start)
5. 🔗 [Assets](#links)
6. 🚀 [More](#more)

## <a name="introduction">✨ Introduction</a>

Nike-style eCommerce built with Devin AI, Next.js, Drizzle ORM, and Better Auth. In this project, you’ll master prompting as Devin helps generate sleek product pages powered by Next.js 15, TypeScript, and TailwindCSS. The backend runs on Neon PostgreSQL with Drizzle ORM, authentication is handled with Better Auth, and Zustand manages state — all packaged in a clean, modular UI to help you ship faster.

## <a name="tech-stack">⚙️ Tech Stack</a>

- **[Drizzle ORM](https://orm.drizzle.team/)** is a lightweight and performant TypeScript ORM designed with developer experience in mind. It provides a seamless interface between application code and database operations while maintaining high performance and reliability.

- **[supabase](https://supabase.com/)** is a fully managed, serverless PostgreSQL database platform. It offers features like instant provisioning, autoscaling, and database branching, enabling developers to build scalable applications without managing infrastructure.

- **[Next.js](https://nextjs.org/docs)** is a powerful React framework for building full-stack web applications. It simplifies development with features like server-side rendering, static site generation, and API routes, enabling developers to focus on building products and shipping quickly.

- **[TailwindCSS](https://tailwindcss.com/)** is a utility-first CSS framework that allows developers to build custom, responsive designs quickly without leaving their HTML. It provides pre-defined classes for layout, typography, colors, and more.

- **[TypeScript](https://www.typescriptlang.org/)** is a superset of JavaScript that adds static typing, providing better tooling, code quality, and error detection for developers. It is ideal for building large-scale applications and enhances the development experience.

- **[Zustand](https://zustand-demo.pmnd.rs)** is a minimal, hook-based state management library for React. It lets you manage global state with zero boilerplate, no context providers, and excellent performance through selective state subscriptions.

## <a name="features">🔋 Features</a>

👉 **Landing Page**: A fast, engaging homepage that introduces your brand and products with smooth animations and clear calls to action.

👉 **Product Listing Page**: Browse all products with filters, sorting, and real-time availability—powered by Devin AI-generated content for dynamic updates.

👉 **Product Details Page**: Detailed product info, images, and reviews with AI-enhanced descriptions to help customers make confident buying decisions.

👉 **Auth Pages**: Secure and seamless user signup, login, and password recovery using Better Auth, ensuring smooth access without backend hassles.

And many more, including code architecture and reusability.

## <a name="quick-start">🤸 Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

```bash
git clone https://github.com/QuickPrimeTech/Nova-Kicks.git
cd e-commerce
```

**Installation**

Install the project dependencies using pnpm:

```bash
pnpm install
```

**Set Up Environment Variables**

Create a new file named `.env` in the root of your project and add the following content:

```env
# Database
DATABASE_URL=your-connection-string-from-supabase

# Public
NEXT_PUBLIC_SITE_URL=https://localhost:3000

#Google Api Keys
GOOGLE_MAPS_CLIENT_SECRET=your-google-cloud-api-secret
NEXT_PUBLIC_GOOGLE_MAPS_CLIENT_ID=your-google-cloud-api-client-id
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your-google-cloud-api-key
```

**Running the Project**

```bash
pnpm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.

## 📁 Project Structure

```
src/
├── app/
│   ├── api/auth/[...all]/route.ts  # Better Auth API routes
│   └── page.tsx                    # Homepage
│
│───lib
│   └── auth/
│       └──index.ts                 # Better Auth configuration
│
├── db/
│   ├── index.ts               # Database connection
│   └── schema.ts              # Database schema
│
└── store/
    ├── auth.ts                    # Authentication state
    └── cart.ts                    # Shopping cart state
```

## 🗄️ Database Schema

The application includes the following tables:

- **users**: User accounts and profiles
- **sessions**: User sessions for Better Auth
- **accounts**: OAuth accounts and credentials
- **verifications**: Email verification tokens
- **products**: Product catalog
- **orders**: Customer orders
- **order_items**: Individual items in orders
