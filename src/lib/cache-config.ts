// @/lib/cache-config.ts

export const CACHE_PROFILES = {
  default: {
    revalidate: 3 * 60 * 60,
    stale: 6 * 60 * 60,
    expire: 6 * 60 * 60,
  },
  // Add more when you need different durations
  short: {
    revalidate: 60 * 60,
    stale: 60 * 60,
    expire: 2 * 60 * 60,
  },
} as const;
