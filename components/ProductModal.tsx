"use client";

import React, { useState } from "react";
import { Product } from "./CartContext";

export default function ProductModal({ product, onClose, onAdd }: { product: Product; onClose: () => void; onAdd: (p: Product, qty?: number) => void }) {
  const [qty, setQty] = useState(1);
  const images = product.images && product.images.length ? product.images : product.image ? [product.image] : [];
  const [index, setIndex] = useState(0);
  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);
  const next = () => setIndex((i) => (i + 1) % images.length);
  return (
    <div className="modal-backdrop">
      <div className="modal-panel">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <div className="image-wrapper" style={{borderRadius:12, overflow:'hidden'}}>
              {images.length ? (
                <div style={{position:'relative'}}>
                  <img src={images[index]} alt={`${product.name} ${index+1}`} style={{width:'100%', height:420, objectFit:'cover'}} />
                  <button onClick={prev} className="btn-secondary" style={{position:'absolute', left:12, top:'50%', transform:'translateY(-50%)'}}>‹</button>
                  <button onClick={next} className="btn-secondary" style={{position:'absolute', right:12, top:'50%', transform:'translateY(-50%)'}}>›</button>
                </div>
              ) : (
                <div className="w-full h-64 bg-gray-100" />
              )}

              <div className="mt-3 flex gap-2 overflow-auto">
                {images.map((src, i) => (
                  <button key={i} onClick={() => setIndex(i)} style={{border: i===index ? '2px solid var(--primary)' : '2px solid transparent', padding:0, borderRadius:8, overflow:'hidden'}}>
                    <img src={src} alt={`thumb-${i}`} style={{width:96, height:64, objectFit:'cover', display:'block'}} />
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold">{product.name}</h3>
              <div className="text-lg font-bold text-[#4A7C2F]">${product.price.toFixed(2)}</div>
            </div>
            <p className="text-sm text-gray-600 mt-2">{product.description}</p>
            <p className="text-xs text-gray-500 mt-2">Categoría: {product.category}</p>

            <div className="mt-6 flex items-center gap-3">
              <input type="number" value={qty} min={1} onChange={(e)=>setQty(Math.max(1, Number(e.target.value)||1))} className="form-input" />
              <button onClick={() => onAdd(product, qty)} className="btn-add">Añadir al carrito</button>
            </div>
          </div>
        </div>
        <button onClick={onClose} className="modal-close" aria-label="Cerrar">×</button>
      </div>
    </div>
  );
}
