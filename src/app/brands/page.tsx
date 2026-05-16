// @/app/brands/page.tsx

import { cacheLife } from "next/cache";
import { getBrands } from "@/db/functions/product";
import Link from "next/link";
import {
  LuZap,
  LuFlame,
  LuShield,
  LuStar,
  LuWind,
  LuMountain,
  LuActivity,
  LuTrendingUp,
  LuTarget,
  LuAward,
  LuRadical,
  LuTimer,
  LuGlobe,
  LuSwords,
  LuDiamond,
  LuSparkles,
} from "react-icons/lu";

// ─── Brand Config ────────────────────────────────────────────────────────────

type BrandConfig = {
  gradient: string; // Tailwind gradient classes
  iconBg: string; // icon circle bg
  iconColor: string; // icon colour
  textColor: string; // brand name colour
  subColor: string; // "Shop Collection" colour
  borderColor: string; // card border
  shimmer: string; // hover shimmer overlay colour
  Icon: React.ElementType;
  tagline: string;
};

const brandConfigs: Record<string, BrandConfig> = {
  Nike: {
    gradient: "from-slate-900 via-slate-800 to-zinc-900",
    iconBg: "bg-white/10",
    iconColor: "text-white",
    textColor: "text-white",
    subColor: "text-slate-400",
    borderColor: "border-white/10",
    shimmer: "from-white/5",
    Icon: LuZap,
    tagline: "Just Do It",
  },
  Adidas: {
    gradient: "from-black via-zinc-900 to-neutral-900",
    iconBg: "bg-white/10",
    iconColor: "text-white",
    textColor: "text-white",
    subColor: "text-zinc-400",
    borderColor: "border-white/10",
    shimmer: "from-white/5",
    Icon: LuTarget,
    tagline: "Impossible Is Nothing",
  },
  Puma: {
    gradient: "from-red-950 via-red-900 to-rose-950",
    iconBg: "bg-red-400/20",
    iconColor: "text-red-300",
    textColor: "text-white",
    subColor: "text-red-300/70",
    borderColor: "border-red-500/20",
    shimmer: "from-red-400/10",
    Icon: LuFlame,
    tagline: "Forever Faster",
  },
  Reebok: {
    gradient: "from-sky-900 via-blue-900 to-indigo-950",
    iconBg: "bg-sky-400/20",
    iconColor: "text-sky-300",
    textColor: "text-white",
    subColor: "text-sky-300/70",
    borderColor: "border-sky-500/20",
    shimmer: "from-sky-400/10",
    Icon: LuShield,
    tagline: "Be More Human",
  },
  Converse: {
    gradient: "from-amber-900 via-orange-900 to-amber-950",
    iconBg: "bg-amber-400/20",
    iconColor: "text-amber-300",
    textColor: "text-white",
    subColor: "text-amber-300/70",
    borderColor: "border-amber-500/20",
    shimmer: "from-amber-400/10",
    Icon: LuStar,
    tagline: "Since 1908",
  },
  Vans: {
    gradient: "from-slate-800 via-slate-700 to-zinc-800",
    iconBg: "bg-white/10",
    iconColor: "text-slate-200",
    textColor: "text-white",
    subColor: "text-slate-400",
    borderColor: "border-white/10",
    shimmer: "from-white/5",
    Icon: LuRadical,
    tagline: "Off The Wall",
  },
  "New Balance": {
    gradient: "from-gray-800 via-neutral-700 to-stone-800",
    iconBg: "bg-gray-400/20",
    iconColor: "text-gray-200",
    textColor: "text-white",
    subColor: "text-gray-400",
    borderColor: "border-gray-500/20",
    shimmer: "from-gray-300/10",
    Icon: LuActivity,
    tagline: "Fearlessly Independent",
  },
  Asics: {
    gradient: "from-blue-950 via-blue-900 to-cyan-950",
    iconBg: "bg-blue-400/20",
    iconColor: "text-blue-300",
    textColor: "text-white",
    subColor: "text-blue-300/70",
    borderColor: "border-blue-500/20",
    shimmer: "from-blue-400/10",
    Icon: LuTimer,
    tagline: "Sound Mind, Sound Body",
  },
  Hoka: {
    gradient: "from-orange-900 via-orange-800 to-amber-900",
    iconBg: "bg-orange-400/20",
    iconColor: "text-orange-300",
    textColor: "text-white",
    subColor: "text-orange-300/70",
    borderColor: "border-orange-500/20",
    shimmer: "from-orange-400/10",
    Icon: LuMountain,
    tagline: "Fly Human Fly",
  },
  "Under Armour": {
    gradient: "from-red-900 via-rose-900 to-red-950",
    iconBg: "bg-red-400/20",
    iconColor: "text-red-300",
    textColor: "text-white",
    subColor: "text-red-300/70",
    borderColor: "border-red-500/20",
    shimmer: "from-red-400/10",
    Icon: LuSwords,
    tagline: "I Will",
  },
  Mizuno: {
    gradient: "from-teal-950 via-teal-900 to-emerald-950",
    iconBg: "bg-teal-400/20",
    iconColor: "text-teal-300",
    textColor: "text-white",
    subColor: "text-teal-300/70",
    borderColor: "border-teal-500/20",
    shimmer: "from-teal-400/10",
    Icon: LuWind,
    tagline: "Serious Sport",
  },
  Saucony: {
    gradient: "from-violet-950 via-purple-900 to-violet-950",
    iconBg: "bg-violet-400/20",
    iconColor: "text-violet-300",
    textColor: "text-white",
    subColor: "text-violet-300/70",
    borderColor: "border-violet-500/20",
    shimmer: "from-violet-400/10",
    Icon: LuTrendingUp,
    tagline: "Run For Good",
  },
  Brooks: {
    gradient: "from-cyan-950 via-cyan-900 to-sky-950",
    iconBg: "bg-cyan-400/20",
    iconColor: "text-cyan-300",
    textColor: "text-white",
    subColor: "text-cyan-300/70",
    borderColor: "border-cyan-500/20",
    shimmer: "from-cyan-400/10",
    Icon: LuAward,
    tagline: "Run Happy",
  },
  Anta: {
    gradient: "from-emerald-950 via-green-900 to-emerald-950",
    iconBg: "bg-emerald-400/20",
    iconColor: "text-emerald-300",
    textColor: "text-white",
    subColor: "text-emerald-300/70",
    borderColor: "border-emerald-500/20",
    shimmer: "from-emerald-400/10",
    Icon: LuGlobe,
    tagline: "Keep Moving",
  },
  "Li-Ning": {
    gradient: "from-rose-950 via-pink-900 to-rose-950",
    iconBg: "bg-rose-400/20",
    iconColor: "text-rose-300",
    textColor: "text-white",
    subColor: "text-rose-300/70",
    borderColor: "border-rose-500/20",
    shimmer: "from-rose-400/10",
    Icon: LuDiamond,
    tagline: "Anything is Possible",
  },
  On: {
    gradient: "from-zinc-800 via-zinc-700 to-neutral-800",
    iconBg: "bg-white/10",
    iconColor: "text-zinc-200",
    textColor: "text-white",
    subColor: "text-zinc-400",
    borderColor: "border-white/10",
    shimmer: "from-white/5",
    Icon: LuSparkles,
    tagline: "Dream On",
  },
};

const fallbackConfig: BrandConfig = {
  gradient: "from-slate-800 to-slate-900",
  iconBg: "bg-white/10",
  iconColor: "text-white",
  textColor: "text-white",
  subColor: "text-slate-400",
  borderColor: "border-white/10",
  shimmer: "from-white/5",
  Icon: LuZap,
  tagline: "Shop Collection",
};

// ─── Cached Fetch ─────────────────────────────────────────────────────────────

const fetchBrandsCached = async () => {
  "use cache";
  cacheLife({
    revalidate: 6 * 60 * 60,
    stale: 6 * 60 * 60,
    expire: 6 * 60 * 60,
  });

  return await getBrands();
};

// ─── Page ─────────────────────────────────────────────────────────────────────

export default async function BrandsPage() {
  const brands = await fetchBrandsCached();

  return (
    <div className="min-h-screen px-4 py-10 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-10 text-center">
        <p className="text-xs font-mono tracking-widest uppercase text-muted-foreground mb-2">
          Explore
        </p>
        <h1 className="font-display text-heading-2 md:text-heading-1 uppercase">
          Shop by Brand
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          {brands.length} premium brands · free shipping on orders over KSH
          5,000
        </p>
      </div>

      {/* Grid */}
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4">
        {brands.map((brand) => {
          const config = brandConfigs[brand] ?? fallbackConfig;
          const {
            gradient,
            iconBg,
            iconColor,
            textColor,
            subColor,
            borderColor,
            shimmer,
            Icon,
            tagline,
          } = config;
          const href = `/products?brand=${encodeURIComponent(brand)}`;

          return (
            <Link
              key={brand}
              href={href}
              className={`
                group relative overflow-hidden rounded-2xl border bg-gradient-to-br ${gradient} ${borderColor}
                p-5 transition-all duration-300
                hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/40
                active:scale-[0.98]
              `}
            >
              {/* Shimmer on hover */}
              <div
                className={`
                  pointer-events-none absolute inset-0 bg-gradient-to-br ${shimmer} to-transparent
                  opacity-0 transition-opacity duration-300 group-hover:opacity-100
                `}
              />

              {/* Diagonal accent line */}
              <div className="pointer-events-none absolute -right-6 -top-6 h-20 w-20 rotate-12 rounded-xl bg-white/5" />

              {/* Icon */}
              <div
                className={`mb-4 flex h-11 w-11 items-center justify-center rounded-xl ${iconBg}`}
              >
                <Icon className={`h-6 w-6 ${iconColor}`} />
              </div>

              {/* Brand name */}
              <p
                className={`text-base font-black leading-tight tracking-tight ${textColor}`}
              >
                {brand}
              </p>

              {/* Tagline */}
              <p
                className={`mt-1 text-[11px] font-medium ${subColor} line-clamp-1`}
              >
                {tagline}
              </p>

              {/* Arrow that slides in on hover */}
              <div className="mt-3 flex items-center gap-1">
                <span
                  className={`text-[11px] font-semibold uppercase tracking-wider ${subColor} transition-all duration-200 group-hover:mr-1`}
                >
                  Shop
                </span>
                <svg
                  className={`h-3 w-3 ${subColor} translate-x-0 transition-transform duration-200 group-hover:translate-x-1`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
