"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Product } from "./CartContext";

export default function ProductModal({ product, onClose, onAdd }: { product: Product; onClose: () => void; onAdd: (p: Product, qty?: number) => void }) {
  const [qty, setQty] = useState(1);
  const images = product.images && product.images.length ? product.images : product.image ? [product.image] : [];
  const [index, setIndex] = useState(0);

  // Prevent background scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const handleAddToCart = () => {
    onAdd(product, qty);
    onClose();
  };

  const handleBuyNow = () => {
    onAdd(product, qty);
    onClose();
    if (typeof window !== 'undefined') {
      window.location.hash = 'checkout';
    }
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-0 md:p-4 lg:p-8 animate-fade-in">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-md cursor-pointer transition-opacity"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-7xl bg-[#FDFCF9] shadow-2xl overflow-hidden flex flex-col md:flex-row h-full md:h-auto md:max-h-[95vh] md:rounded-[2rem] animate-fade-in-up transition-all border border-white/20">
        
        {/* Close Button */}
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 z-30 text-gray-500 hover:text-black bg-white/80 backdrop-blur-md rounded-full p-3 transition-all hover:scale-110 shadow-lg"
          aria-label="Cerrar"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
        </button>

        {/* Left Section: Immersive Image Experience */}
        <div className="w-full md:w-[60%] lg:w-[65%] bg-[#F5F5F0] relative flex flex-col justify-center">
          <div className="h-[50vh] md:h-[80vh] w-full relative flex items-center justify-center p-8 md:p-16">
            <div className="relative w-full h-full max-w-2xl max-h-2xl">
              {images.length > 0 ? (
                <Image 
                  src={images[index]} 
                  alt={product.name} 
                  fill
                  className="object-contain drop-shadow-2xl transition-all duration-700 ease-out" 
                  priority
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gray-100 rounded-3xl text-gray-300 font-serif italic text-2xl">
                  Sin imagen
                </div>
              )}
            </div>
          </div>
          
          {/* Gallery Thumbnails - Floating at bottom center */}
          {images.length > 1 && (
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 p-2 bg-white/50 backdrop-blur-md rounded-2xl shadow-sm border border-white/40">
              {images.map((src, i) => (
                <button 
                  key={i} 
                  onClick={() => setIndex(i)} 
                  className={`relative w-14 h-14 rounded-xl overflow-hidden transition-all duration-300 ${i === index ? 'ring-2 ring-[#2D5016] scale-110 opacity-100' : 'opacity-60 hover:opacity-100 hover:scale-105'}`}
                >
                   <Image src={src} alt="" fill className="object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right Section: Product Details */}
        <div className="w-full md:w-[40%] lg:w-[35%] bg-white flex flex-col border-l border-gray-100 overflow-y-auto md:overflow-visible relative">
          
          <div className="flex-1 p-8 md:p-10 flex flex-col gap-6 overflow-y-auto custom-scrollbar">
            {/* Header Info */}
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-3">
                {product.origin && (
                  <span className="px-3 py-1 rounded-full border border-[#2D5016]/20 text-[#2D5016] text-[10px] font-bold uppercase tracking-widest bg-green-50/50">
                    {product.origin}
                  </span>
                )}
                <span className="px-3 py-1 rounded-full bg-orange-50 text-orange-800 text-[10px] font-bold uppercase tracking-widest">
                  Fresco
                </span>
              </div>

              <h1 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 leading-tight">
                {product.name}
              </h1>

              <div className="flex items-baseline gap-4 pt-2">
                <span className="text-4xl font-light text-gray-900 tracking-tight">
                  ${product.price.toFixed(2)}
                </span>
                <span className="text-lg text-gray-400 line-through font-light">
                  ${(product.price * 1.2).toFixed(2)}
                </span>
              </div>
            </div>

            <div className="w-full h-px bg-gray-100 my-2" />

            {/* Description */}
            <div className="space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400">Descripción</h3>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed font-light font-[Outfit]">
                {product.description || "Un producto excepcional cultivado con dedicación en las montañas de la Sierra Negra, trayendo lo mejor de la naturaleza directamente a tu hogar."}
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-4 bg-gray-50 rounded-2xl">
                <div className="w-8 h-8 text-[#2D5016] mb-2">
                   <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </div>
                <p className="text-xs font-bold text-gray-900 uppercase">Entrega Rápida</p>
                <p className="text-[10px] text-gray-500">En 24-48 horas</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-2xl">
                <div className="w-8 h-8 text-[#2D5016] mb-2">
                   <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <p className="text-xs font-bold text-gray-900 uppercase">Garantía</p>
                <p className="text-[10px] text-gray-500">Frescura total</p>
              </div>
            </div>
          </div>

          {/* Sticky Footer Actions */}
          <div className="p-6 md:p-8 bg-white border-t border-gray-100 z-20">
             <div className="flex flex-col gap-4">
               {/* Controls */}
               <div className="flex items-center gap-4">
                  {/* Quantity */}
                  <div className="flex items-center bg-gray-100 rounded-full p-1.5 h-14">
                    <button 
                      onClick={() => setQty(Math.max(1, qty - 1))}
                      className="w-11 h-11 flex items-center justify-center rounded-full bg-white text-gray-600 shadow-sm hover:scale-105 transition-all text-xl"
                    >-</button>
                    <span className="w-12 text-center font-semibold text-lg text-gray-900">{qty}</span>
                    <button 
                      onClick={() => setQty(qty + 1)}
                      className="w-11 h-11 flex items-center justify-center rounded-full bg-[#2D5016] text-white shadow-sm hover:scale-105 transition-all text-xl"
                    >+</button>
                  </div>

                  {/* Add to Cart */}
                  <button 
                    onClick={handleAddToCart}
                    className="flex-1 bg-[#2D5016] text-white h-14 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-[#1f3a0e] transition-all shadow-xl shadow-green-900/10 flex items-center justify-center gap-2 group"
                  >
                    <span>Agregar</span>
                    <span className="bg-white/20 px-2 py-0.5 rounded text-xs">${(product.price * qty).toFixed(0)}</span>
                  </button>
               </div>
               
               <button 
                 onClick={handleBuyNow}
                 className="w-full py-3 text-xs font-bold uppercase tracking-widest text-[#2D5016] hover:bg-green-50 rounded-xl transition-colors"
               >
                 Comprar Ahora
               </button>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
}
