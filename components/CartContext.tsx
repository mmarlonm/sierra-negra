"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

export type Product = {
  id: string;
  name: string;
  price: number;
  image?: string; // legacy single-image
  images?: string[]; // preferred: array of images for gallery
  category?: string;
  description?: string;
  origin?: string;
};

type CartItem = Product & { quantity: number };

type CartContextType = {
  items: CartItem[];
  addItem: (p: Product, qty?: number) => void;
  removeItem: (id: string) => void;
  updateQty: (id: string, qty: number) => void;
  clearCart: () => void;
  count: number;
  total: number;
  isCartOpen: boolean;
  toggleCart: () => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);

  // Hydrate from localStorage on mount
  useEffect(() => {
    try {
      const raw = localStorage.getItem("sn_cart");
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) {
          setItems(parsed);
        }
      }
    } catch {
      console.error("Failed to load cart");
    } finally {
      setIsHydrated(true);
    }
  }, []);

  // Save to localStorage when items change, but only after initial hydration
  useEffect(() => {
    if (!isHydrated) return;
    try {
      localStorage.setItem("sn_cart", JSON.stringify(items));
    } catch {}
  }, [items, isHydrated]);

  const addItem = (p: Product, qty = 1) => {
    setItems((prev) => {
      const found = prev.find((x) => x.id === p.id);
      if (found) return prev.map((x) => x.id === p.id ? { ...x, quantity: x.quantity + qty } : x);
      return [...prev, { ...p, quantity: qty }];
    });
  };

  const removeItem = (id: string) => setItems((prev) => prev.filter((x) => x.id !== id));

  const updateQty = (id: string, qty: number) => setItems((prev) => prev.map(x => x.id === id ? { ...x, quantity: Math.max(1, qty) } : x));

  const clearCart = () => setItems([]);

  const toggleCart = () => setIsCartOpen((prev) => !prev);

  const count = items.reduce((s, i) => s + i.quantity, 0);
  const total = items.reduce((s, i) => s + i.quantity * i.price, 0);

  return (
    <CartContext.Provider value={{ items, addItem, removeItem, updateQty, clearCart, count, total, isCartOpen, toggleCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
};

export default CartContext;
