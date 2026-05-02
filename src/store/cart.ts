//@/store/cart.ts

import { create } from "zustand";

type ProductSize = {
  size: string;
  stock: number;
};

export type CartItem = {
  id: string; // cartId (unique per cart item)
  productId: string;
  name: string;
  price: number;
  image: string;
  size: ProductSize;
  quantity: number;
};

type CartStore = {
  items: CartItem[];

  addItem: (item: Omit<CartItem, "id">) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;

  // derived helpers
  getTotalItems: () => number;
  getTotalPrice: () => number;
};

export const useCartStore = create<CartStore>((set, get) => ({
  items: [],

  addItem: (item) =>
    set((state) => {
      const existing = state.items.find(
        (i) => i.productId === item.productId && i.size.size === item.size.size,
      );

      // If same product + same size → increase quantity
      if (existing) {
        return {
          items: state.items.map((i) =>
            i.id === existing.id
              ? { ...i, quantity: i.quantity + item.quantity }
              : i,
          ),
        };
      }

      // Otherwise create new cart item
      const newItem: CartItem = {
        ...item,
        id: crypto.randomUUID(),
      };

      return { items: [...state.items, newItem] };
    }),

  removeItem: (id) =>
    set((state) => ({
      items: state.items.filter((i) => i.id !== id),
    })),

  updateQuantity: (id, quantity) =>
    set((state) => ({
      items: state.items.map((i) =>
        i.id === id ? { ...i, quantity: Math.max(1, quantity) } : i,
      ),
    })),

  clearCart: () => set({ items: [] }),

  // 🔥 derived values
  getTotalItems: () =>
    get().items.reduce((acc, item) => acc + item.quantity, 0),

  getTotalPrice: () =>
    get().items.reduce((acc, item) => acc + item.price * item.quantity, 0),
}));
