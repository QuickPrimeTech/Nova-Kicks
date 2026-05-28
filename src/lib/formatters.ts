// @/lib/formatters.ts

import { useEffect, useState } from "react";

export function useRelativeTime(date: Date | string): string {
  const [relative, setRelative] = useState<string>("");

  useEffect(() => {
    const now = new Date();
    const then = new Date(date);
    const diffMs = now.getTime() - then.getTime();
    const diffSec = Math.floor(diffMs / 1000);
    const diffMin = Math.floor(diffSec / 60);
    const diffHour = Math.floor(diffMin / 60);
    const diffDay = Math.floor(diffHour / 24);
    const diffWeek = Math.floor(diffDay / 7);

    let result = "";
    if (diffSec < 60) result = "Just now";
    else if (diffMin < 60) result = `${diffMin}min ago`;
    else if (diffHour < 24) result = `${diffHour}h ago`;
    else if (diffDay < 7) result = `${diffDay}d ago`;
    else if (diffWeek < 4) result = `${diffWeek}w ago`;
    else
      result = then.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      });

    setRelative(result);
  }, [date]);

  return relative;
}
