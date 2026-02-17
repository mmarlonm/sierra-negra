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
    // Simulate navigation to checkout if applicable
    if (typeof window !== 'undefined') {
      window.location.hash = 'checkout';
    }
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-0 md:p-6 lg:p-12 animate-fade-in">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/40 backdrop-blur-md cursor-pointer"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-6xl bg-white shadow-2xl overflow-hidden flex flex-col md:flex-row h-full md:h-auto md:max-h-[90vh] md:rounded-[2.5rem] animate-fade-in-up transition-all">
        
        {/* Close Button - Responsive Position */}
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 md:top-8 md:right-8 z-30 text-gray-400 hover:text-[#2D5016] bg-white/90 backdrop-blur-sm rounded-full p-2.5 transition-all hover:bg-green-50 shadow-md md:shadow-none"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
        </button>

        {/* Left Section: Visual Experience */}
        <div className="w-full md:w-1/2 lg:w-[55%] bg-[#FDFDFB] flex flex-col relative">
          <div className="flex-1 flex items-center justify-center p-8 md:p-12 overflow-hidden">
            <div className="relative w-full aspect-square md:h-full flex items-center justify-center">
              {images.length > 0 ? (
                <Image 
                  src={images[index]} 
                  alt={product.name} 
                  fill
                  className="object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-all duration-700 transform hover:scale-105" 
                />
              ) : (
                <div className="text-gray-300 text-lg font-light tracking-widest uppercase italic">Sierra Negra</div>
              )}
            </div>
          </div>
          
          {/* Enhanced Image Switcher (Horizontal Scroll for touch) */}
          {images.length > 1 && (
            <div className="p-6 md:p-8 flex justify-center gap-3 overflow-x-auto no-scrollbar">
              {images.map((src, i) => (
                <button 
                  key={i} 
                  onClick={() => setIndex(i)} 
                  className={`relative flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-2xl overflow-hidden border-2 transition-all duration-300 ${i === index ? 'border-[#2D5016] ring-4 ring-green-50 scale-105' : 'border-transparent opacity-50 hover:opacity-100 hover:scale-105'}`}
                >
                   <div className="relative w-full h-full">
                     <Image src={src} alt="" fill className="object-cover" />
                   </div>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right Section: Content & Actions */}
        <div className="w-full md:w-1/2 lg:w-[45%] flex flex-col bg-white overflow-y-auto">
          
          {/* Content Padding Wrapper */}
          <div className="p-8 md:p-12 pb-32 md:pb-12 space-y-8 h-full flex flex-col">
            
            <div className="space-y-4">
              {/* Product Badging */}
              <div className="flex flex-wrap gap-2">
                {product.origin && (
                  <span className="bg-[#2D5016]/5 text-[#2D5016] text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1.5 rounded-lg">
                    {product.origin}
                  </span>
                )}
                <span className="bg-orange-50 text-orange-700 text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1.5 rounded-lg">
                  Recién Cosechado
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl font-serif font-semibold text-gray-900 leading-[1.1] tracking-tight">
                {product.name}
              </h1>

              <div className="flex items-baseline gap-4">
                <p className="text-3xl font-light text-gray-900">
                  ${product.price.toFixed(2)}
                </p>
                <span className="text-sm text-gray-400 font-medium line-through">
                  ${(product.price * 1.25).toFixed(2)}
                </span>
              </div>
            </div>

            {/* Description Card */}
            <div className="bg-[#F8F9F5] p-6 rounded-[1.5rem] border border-[#2D5016]/5 transition-all hover:bg-[#F2F4ED]">
              <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#2D5016] opacity-60 mb-3">Origen y Calidad</h4>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed font-light">
                {product.description || "Este producto emblemático de la Sierra Negra es cultivado bajo procesos sustentables, capturando la esencia de nuestra tierra en cada bocado."}
              </p>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center text-[#2D5016]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Envío</p>
                  <p className="text-xs font-semibold text-gray-700">Gratis</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Calidad</p>
                  <p className="text-xs font-semibold text-gray-700">Garantizada</p>
                </div>
              </div>
            </div>

            {/* Sticky Action Footer for Mobile & Integrated for Desktop */}
            <div className="fixed md:relative bottom-0 left-0 right-0 bg-white border-t md:border-t-0 border-gray-100 p-6 md:p-0 md:mt-auto z-40 space-y-4">
              <div className="flex gap-4">
                {/* Modern Quantity Selector */}
                <div className="flex items-center bg-gray-100 rounded-2xl p-1.5">
                  <button 
                    onClick={() => setQty(Math.max(1, qty - 1))}
                    className="w-10 h-10 flex items-center justify-center text-gray-500 hover:text-[#2D5016] transition-all rounded-xl hover:bg-white"
                  >-</button>
                  <span className="w-10 text-center font-bold text-gray-800">{qty}</span>
                  <button 
                    onClick={() => setQty(qty + 1)}
                    className="w-10 h-10 flex items-center justify-center text-gray-500 hover:text-[#2D5016] transition-all rounded-xl hover:bg-white"
                  >+</button>
                </div>
                
                <button 
                  onClick={handleAddToCart}
                  className="flex-1 bg-[#2D5016] text-white py-4 rounded-2xl font-black uppercase tracking-[0.2em] text-xs hover:bg-[#325a19] hover:shadow-2xl hover:shadow-green-900/20 transition-all active:scale-95 flex items-center justify-center gap-2"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                  <span>Al Carrito</span>
                </button>
              </div>

              <button 
                onClick={handleBuyNow}
                className="w-full bg-gray-900 text-white py-4 rounded-2xl font-black uppercase tracking-[0.2em] text-xs hover:bg-black transition-all active:scale-95 shadow-xl md:hidden lg:block whitespace-nowrap overflow-hidden"
              >
                Comprar Ahora – Entrega Exprés
              </button>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}
