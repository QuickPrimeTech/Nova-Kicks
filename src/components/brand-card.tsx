// @/components/brand-card.tsx

import { ChevronRight } from "lucide-react";
import Link from "next/link";

type BrandConfig = {
  gradient: string;
  textColor: string;
  subColor: string;
  borderColor: string;
  shimmer: string;
};

const brandConfigs: Record<string, BrandConfig> = {
  Nike: {
    gradient: "from-slate-900 via-slate-800 to-zinc-900",
    textColor: "text-white",
    subColor: "text-slate-400",
    borderColor: "border-white/10",
    shimmer: "from-white/5",
  },
  Adidas: {
    gradient: "from-black via-zinc-900 to-neutral-900",
    textColor: "text-white",
    subColor: "text-zinc-400",
    borderColor: "border-white/10",
    shimmer: "from-white/5",
  },
  Puma: {
    gradient: "from-red-950 via-red-900 to-rose-950",
    textColor: "text-white",
    subColor: "text-red-300/70",
    borderColor: "border-red-500/20",
    shimmer: "from-red-400/10",
  },
  Reebok: {
    gradient: "from-sky-900 via-blue-900 to-indigo-950",
    textColor: "text-white",
    subColor: "text-sky-300/70",
    borderColor: "border-sky-500/20",
    shimmer: "from-sky-400/10",
  },
  Converse: {
    gradient: "from-amber-900 via-orange-900 to-amber-950",
    textColor: "text-white",
    subColor: "text-amber-300/70",
    borderColor: "border-amber-500/20",
    shimmer: "from-amber-400/10",
  },
  Vans: {
    gradient: "from-slate-800 via-slate-700 to-zinc-800",
    textColor: "text-white",
    subColor: "text-slate-400",
    borderColor: "border-white/10",
    shimmer: "from-white/5",
  },
  "New Balance": {
    gradient: "from-gray-800 via-neutral-700 to-stone-800",
    textColor: "text-white",
    subColor: "text-gray-400",
    borderColor: "border-gray-500/20",
    shimmer: "from-gray-300/10",
  },
  Asics: {
    gradient: "from-blue-950 via-blue-900 to-cyan-950",
    textColor: "text-white",
    subColor: "text-blue-300/70",
    borderColor: "border-blue-500/20",
    shimmer: "from-blue-400/10",
  },
  Hoka: {
    gradient: "from-orange-900 via-orange-800 to-amber-900",
    textColor: "text-white",
    subColor: "text-orange-300/70",
    borderColor: "border-orange-500/20",
    shimmer: "from-orange-400/10",
  },
  "Under Armour": {
    gradient: "from-red-900 via-rose-900 to-red-950",
    textColor: "text-white",
    subColor: "text-red-300/70",
    borderColor: "border-red-500/20",
    shimmer: "from-red-400/10",
  },
  Mizuno: {
    gradient: "from-teal-950 via-teal-900 to-emerald-950",
    textColor: "text-white",
    subColor: "text-teal-300/70",
    borderColor: "border-teal-500/20",
    shimmer: "from-teal-400/10",
  },
  Saucony: {
    gradient: "from-violet-950 via-purple-900 to-violet-950",
    textColor: "text-white",
    subColor: "text-violet-300/70",
    borderColor: "border-violet-500/20",
    shimmer: "from-violet-400/10",
  },
  Brooks: {
    gradient: "from-cyan-950 via-cyan-900 to-sky-950",
    textColor: "text-white",
    subColor: "text-cyan-300/70",
    borderColor: "border-cyan-500/20",
    shimmer: "from-cyan-400/10",
  },
  Anta: {
    gradient: "from-emerald-950 via-green-900 to-emerald-950",
    textColor: "text-white",
    subColor: "text-emerald-300/70",
    borderColor: "border-emerald-500/20",
    shimmer: "from-emerald-400/10",
  },
  "Li-Ning": {
    gradient: "from-rose-950 via-pink-900 to-rose-950",
    textColor: "text-white",
    subColor: "text-rose-300/70",
    borderColor: "border-rose-500/20",
    shimmer: "from-rose-400/10",
  },
  On: {
    gradient: "from-zinc-800 via-zinc-700 to-neutral-800",
    textColor: "text-white",
    subColor: "text-zinc-400",
    borderColor: "border-white/10",
    shimmer: "from-white/5",
  },
};

const fallbackConfig: BrandConfig = {
  gradient: "from-slate-800 to-slate-900",
  textColor: "text-white",
  subColor: "text-slate-400",
  borderColor: "border-white/10",
  shimmer: "from-white/5",
};

export const BrandCard = ({ brand }: { brand: string }) => {
  const { gradient, textColor, subColor, borderColor, shimmer } =
    brandConfigs[brand] ?? fallbackConfig;

  const href = `/products?brand=${encodeURIComponent(brand)}`;

  return (
    <Link
      href={href}
      className={`
        group relative overflow-hidden rounded-2xl border bg-linear-to-br ${gradient} ${borderColor}
        p-6 transition-all duration-300
        hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/40
        active:scale-[0.98] block aspect-3/2
      `}
    >
      {/* Shimmer on hover */}
      <div
        className={`
          pointer-events-none absolute inset-0 bg-linear-to-br ${shimmer} to-transparent
          opacity-0 transition-opacity duration-300 group-hover:opacity-100
        `}
      />

      {/* Diagonal accent */}
      <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rotate-12 rounded-xl bg-background/5" />

      {/* Content */}
      <div className="relative flex h-full flex-col justify-center gap-2">
        <p
          className={`text-xl font-black leading-none tracking-tighter ${textColor}`}
        >
          {brand}
        </p>

        <div className="mt-4 flex items-center gap-1">
          <span
            className={`text-xs font-semibold uppercase tracking-wider ${subColor} transition-all duration-200 group-hover:mr-1`}
          >
            Shop
          </span>
          <ChevronRight className="text-white" />
        </div>
      </div>
    </Link>
  );
};
