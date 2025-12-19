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
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("sn_cart");
      if (raw) setItems(JSON.parse(raw));
    } catch (e) {}
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem("sn_cart", JSON.stringify(items));
    } catch (e) {}
  }, [items]);

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

  const count = items.reduce((s, i) => s + i.quantity, 0);
  const total = items.reduce((s, i) => s + i.quantity * i.price, 0);

  return (
    <CartContext.Provider value={{ items, addItem, removeItem, updateQty, clearCart, count, total }}>
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
