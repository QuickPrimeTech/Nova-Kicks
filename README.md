<div align="center">

# 👟 Nova Kicks

<img src="https://res.cloudinary.com/quick-prime-tech/image/upload/v1778491171/nova_kicks_kdhrrl.png" alt="Nova Kicks Banner" width="100%" style="border-radius: 12px;" />

<br/>

**A sleek Nike-style eCommerce experience — built fast, shipped smart.**

<br/>

[![Visit Live Site](https://img.shields.io/badge/🌐%20Visit%20Nova%20Kicks-Live%20Demo-black?style=for-the-badge)](https://novakicks.quickprimetech.com)

<br/>

![TypeScript](https://img.shields.io/badge/-TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Next.js](https://img.shields.io/badge/-Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/-Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Drizzle](https://img.shields.io/badge/-Drizzle-C5F74F?style=for-the-badge&logo=drizzle&logoColor=black)
![Supabase](https://img.shields.io/badge/-Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white)

</div>

---

## 📋 Table of Contents

1. [✨ Introduction](#-introduction)
2. [⚙️ Tech Stack](#%EF%B8%8F-tech-stack)
3. [🔋 Features](#-features)
4. [🤸 Quick Start](#-quick-start)
5. [📁 Project Structure](#-project-structure)
6. [🗄️ Database Schema](#%EF%B8%8F-database-schema)

---

## ✨ Introduction

Nova Kicks is a Nike-style eCommerce storefront built with **Devin AI**, **Next.js 15**, **Drizzle ORM**, and **Better Auth**. It's designed to help you master AI-assisted development — Devin generates sleek product pages, while TypeScript and TailwindCSS keep the UI sharp and maintainable.

The backend runs on **Supabase (PostgreSQL)** with **Drizzle ORM** for type-safe queries, **Better Auth** handles authentication seamlessly, and **Zustand** manages client-side state — all in a clean, modular architecture that's easy to extend and ship.

---

## ⚙️ Tech Stack

| Technology                                    | Purpose                                                    |
| --------------------------------------------- | ---------------------------------------------------------- |
| [Next.js 15](https://nextjs.org/docs)         | Full-stack React framework with SSR, SSG & API routes      |
| [TypeScript](https://www.typescriptlang.org/) | Static typing for better DX and reliability                |
| [TailwindCSS](https://tailwindcss.com/)       | Utility-first CSS for rapid, responsive UI                 |
| [Drizzle ORM](https://orm.drizzle.team/)      | Lightweight, type-safe TypeScript ORM                      |
| [Supabase](https://supabase.com/)             | Managed PostgreSQL with instant provisioning & autoscaling |
| [Zustand](https://zustand-demo.pmnd.rs)       | Minimal, hook-based global state management                |

---

## 🔋 Features

- **🏠 Landing Page** — A fast, engaging homepage with smooth animations and strong calls to action
- **📦 Product Listing Page** — Browse all products with filters, sorting, and real-time availability powered by AI-generated content
- **🔍 Product Details Page** — Rich product pages with images, reviews, and AI-enhanced descriptions for confident buying decisions
- **🔐 Auth Pages** — Seamless signup, login, and password recovery via Better Auth — no backend hassle
- **🛒 Cart & State** — Global cart management powered by Zustand with zero boilerplate
- **🧱 Modular Architecture** — Reusable components and clean code structure for fast iteration

---

## 🤸 Quick Start

### Prerequisites

Make sure you have the following installed:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [pnpm](https://pnpm.io/)

### 1. Clone the Repository

```bash
git clone https://github.com/QuickPrimeTech/Nova-Kicks.git
cd e-commerce
```

### 2. Install Dependencies

```bash
pnpm install
```

### 3. Set Up Environment Variables

Create a `.env` file in the root of your project:

```env
# Database
DATABASE_URL=your-connection-string-from-supabase

# App URL
NEXT_PUBLIC_SITE_URL=https://localhost:3000

# Google API Keys
GOOGLE_MAPS_CLIENT_SECRET=your-google-cloud-api-secret
NEXT_PUBLIC_GOOGLE_MAPS_CLIENT_ID=your-google-cloud-api-client-id
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your-google-cloud-api-key
```

### 4. Set Up the Database

Generate the schema, run migrations, and seed the database with initial data:

```bash
# Generate schema files
pnpm db:generate

# Apply migrations to your database
pnpm db:migrate

# Seed the database with initial data
pnpm db:seed
```

> **Note:** All three commands must be run in order before starting the app for the first time.

### 5. Run the Development Server

```bash
pnpm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.

---

## 📁 Project Structure

```
src/
├── app/
│   ├── api/auth/[...all]/route.ts   # Better Auth API routes
│   └── page.tsx                     # Homepage
│
├── lib/
│   └── auth/
│       └── index.ts                 # Better Auth configuration
│
├── db/
│   ├── index.ts                     # Database connection
│   └── schema.ts                    # Database schema
│
└── store/
    ├── auth.ts                      # Authentication state (Zustand)
    └── cart.ts                      # Shopping cart state (Zustand)
```

---

## 🗄️ Database Schema

| Table           | Description                         |
| --------------- | ----------------------------------- |
| `users`         | User accounts and profiles          |
| `sessions`      | Active user sessions (Better Auth)  |
| `accounts`      | OAuth accounts and credentials      |
| `verifications` | Email verification tokens           |
| `products`      | Product catalog                     |
| `orders`        | Customer orders                     |
| `order_items`   | Individual line items within orders |

---

<div align="center">

Made with ❤️ by [QuickPrimeTech](https://github.com/QuickPrimeTech)

[![Visit Live Site](https://img.shields.io/badge/🌐%20novakicks.quickprimetech.com-Visit%20Now-black?style=for-the-badge)](https://novakicks.quickprimetech.com)

</div>
