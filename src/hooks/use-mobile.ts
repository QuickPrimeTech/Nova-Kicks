// @/hooks/use-mobile.ts

"use client";
import { useState, useEffect } from "react";

export const useIsMobile = (breakpoint: number = 768) => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    // Check on initial mount
    const checkMobile = () => {
      setIsMobile(window.innerWidth < breakpoint);
    };

    checkMobile();

    // Set up listener for window resizing
    window.addEventListener("resize", checkMobile);

    // Cleanup listener on unmount
    return () => window.removeEventListener("resize", checkMobile);
  }, [breakpoint]);

  return isMobile;
};
