"use client";

import React from "react";
import { Product } from "./CartContext";

export default function ProductCard({ product, onAdd, onView }: { product: Product; onAdd: (p: Product) => void; onView?: () => void }) {
  return (
    <div className="product-card card-modern product-card" role="button">
      <div className="product-media">
        {((product.images && product.images[0]) || product.image) ? (
          <img src={(product.images && product.images[0]) || product.image} alt={product.name} className="object-cover w-full h-full" />
        ) : (
          <div className="text-sm text-gray-500">Imagen</div>
        )}
        <div className="product-overlay" />
        <div className="tag-badge">Orgánico</div>
        <div className="price-ribbon">${product.price.toFixed(2)}</div>
        <button className="quick-view" onClick={(e) => { e.stopPropagation(); onView && onView(); }}>Ver galería</button>
      </div>
      <div className="product-body">
        <div className="flex items-center justify-between">
          <h3 className="product-title">{product.name}</h3>
        </div>
        <p className="product-meta">{product.category}</p>
        <div className="product-actions">
          <button onClick={(e) => { e.stopPropagation(); onAdd(product); }} className="btn-add">Añadir</button>
        </div>
      </div>
    </div>
  );
}
