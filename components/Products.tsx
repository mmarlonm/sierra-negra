"use client";

import React, { useMemo, useState } from "react";
import ProductCard from "./ProductCard";
import ProductModal from "./ProductModal";
import { Product } from "./CartContext";
import { useCart } from "./CartContext";

const SAMPLE_PRODUCTS: Product[] = [
  {
    id: "p1",
    name: "Mermelada de Arándano Orgánica",
    price: 5.5,
    category: "Mermeladas",
    images: [
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505250469679-203ad9ced0cb?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "Hecha con frutas locales."
  },
  {
    id: "p2",
    name: "Artesanía: Jarro de Barro",
    price: 25.0,
    category: "Artesanias",
    images: [
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "Hecha a mano por artesanos locales."
  },
  {
    id: "p3",
    name: "Mermelada de Fresa Orgánica",
    price: 4.75,
    category: "Mermeladas",
    images: [
      "https://images.unsplash.com/photo-1502741126161-b048400d8f27?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "Dulce tradicional sin conservantes."
  },
  {
    id: "p4",
    name: "Paquete de Café Tostado",
    price: 8.9,
    category: "Alimentos",
    images: [
      "https://images.unsplash.com/photo-1511407397940-d57f68e81203?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "Café de la región, tueste medio."
  },
  {
    id: "p5",
    name: "Artesanía: Tejido Tradicional",
    price: 18.0,
    category: "Artesanias",
    images: [
      "https://images.unsplash.com/photo-1520975913550-5b0b1b2c4e9b?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "Tejido hecho a mano con tintes naturales."
  }
];

export default function Products() {
  const [category, setCategory] = useState<string>("Todos");
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<Product | null>(null);
  const { addItem } = useCart();

  const categories = useMemo(() => ["Todos", ...Array.from(new Set(SAMPLE_PRODUCTS.map(p => p.category || "Otros")))], []);

  const filtered = SAMPLE_PRODUCTS.filter(p =>
    (category === "Todos" || p.category === category) &&
    (p.name.toLowerCase().includes(query.toLowerCase()) || (p.description || '').toLowerCase().includes(query.toLowerCase()))
  );

  return (
    <section className="container-custom py-6">
      <div className="mb-6 shop-top">
        <div>
          <h2 className="heading-medium">Tienda</h2>
          <p className="small-muted">Artesanías, mermeladas orgánicas y productos locales.</p>
        </div>
        <div className="flex-1 max-w-md">
          <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Buscar productos, p. ej. mermelada" className="search-input" />
        </div>
      </div>

      <div className="chips mb-6">
        {categories.map(cat => (
          <div key={cat} onClick={() => setCategory(cat)} className={`chip ${cat === category ? 'active' : ''}`}>{cat}</div>
        ))}
      </div>

      <div className="shop-grid">
        {filtered.map(p => (
          <div key={p.id} className="cursor-pointer">
            <ProductCard product={p} onAdd={(prod) => addItem(prod, 1)} onView={() => setSelected(p)} />
          </div>
        ))}
      </div>

      {selected && (
        <ProductModal product={selected} onClose={() => setSelected(null)} onAdd={(p, qty=1)=>{ addItem(p, qty); setSelected(null); }} />
      )}
    </section>
  );
}
