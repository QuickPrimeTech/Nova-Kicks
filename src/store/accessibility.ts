// @/store/accessibility.ts

import { create } from "zustand";

type AccessibilityState = {
  isOpen: boolean;
  open: (open: boolean) => void;
};

export const useAccessibility = create<AccessibilityState>((set) => ({
  isOpen: false,
  open: (open) => set({ isOpen: open }),
}));
