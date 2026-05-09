// @/store/accessibility.ts

import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

type AccessibilityStore = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

export const useAccessibilityStore = create<AccessibilityStore>()(
  immer((set) => ({
    open: false,
    setOpen: (open) => set({ open }),
  })),
);
