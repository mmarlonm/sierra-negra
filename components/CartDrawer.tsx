"use client";

import React from "react";
import Link from "next/link";
import { useCart } from "./CartContext";
import ImageWithFallback from "./ImageWithFallback";

export default function CartDrawer() {
  const { items, isCartOpen, toggleCart, removeItem, updateQty, total } = useCart();

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex justify-end font-[Outfit]">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
        onClick={toggleCart}
      />

      {/* Drawer Panel */}
      <div className="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col animate-in slide-in-from-right duration-300">
        
        {/* Header */}
        <div className="p-5 border-b border-gray-100 flex items-center justify-between bg-white z-10">
           <h2 className="text-xl font-bold text-gray-900">Tu Carrito ({items.length})</h2>
           <button 
             onClick={toggleCart} 
             className="p-2 hover:bg-gray-100 rounded-full transition-colors"
           >
             <svg className="w-6 h-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
           </button>
        </div>

        {/* Scrollable Items */}
        <div className="flex-1 overflow-y-auto p-5 space-y-6">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-8">
               <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mb-4">
                 <span className="text-4xl">🛒</span>
               </div>
               <h3 className="text-lg font-bold text-gray-900 mb-2">Tu carrito está vacío</h3>
               <p className="text-gray-500 mb-6">Parece que aún no has descubierto nuestros productos.</p>
               <button onClick={toggleCart} className="text-[#2D5016] font-bold underline">Volver a la tienda</button>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.id} className="flex gap-4">
                 {/* Product Image */}
                 <div className="w-20 h-24 bg-gray-50 rounded-lg overflow-hidden flex-shrink-0 border border-gray-200">
                    <ImageWithFallback 
                       src={(item.images && item.images[0]) || item.image || ""} 
                       alt={item.name} 
                       width={80} 
                       height={96} 
                       className="w-full h-full object-cover"
                    />
                 </div>

                 {/* Details */}
                 <div className="flex-1 flex flex-col justify-between">
                    <div>
                       <div className="flex justify-between items-start">
                         <h4 className="font-bold text-gray-900 text-sm line-clamp-2">{item.name}</h4>
                         <span className="font-bold text-gray-900 ml-2">${(item.price * item.quantity).toFixed(2)}</span>
                       </div>
                       <p className="text-xs text-gray-500 mt-1">{item.category}</p>
                    </div>

                    <div className="flex items-center justify-between mt-2">
                       {/* Qty Control */}
                       <div className="flex items-center border border-gray-200 rounded-lg bg-gray-50">
                          <button 
                            onClick={() => updateQty(item.id, item.quantity - 1)}
                            className="w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-white rounded-l-lg transition-colors"
                            disabled={item.quantity <= 1}
                          >
                            -
                          </button>
                          <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
                          <button 
                            onClick={() => updateQty(item.id, item.quantity + 1)}
                            className="w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-white rounded-r-lg transition-colors"
                          >
                            +
                          </button>
                       </div>

                       <button 
                         onClick={() => removeItem(item.id)}
                         className="text-xs text-red-500 font-medium underline px-2 py-1 hover:bg-red-50 rounded"
                       >
                         Eliminar
                       </button>
                    </div>
                 </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="p-6 border-t border-gray-100 bg-gray-50">
             <div className="flex justify-between items-center mb-4 text-lg font-bold text-gray-900">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
             </div>
             
             <div className="space-y-3">
               <Link 
                 href="/checkout" 
                 onClick={toggleCart}
                 className="block w-full bg-[#2D5016] text-white text-center py-4 rounded-xl font-bold shadow-lg hover:shadow-xl hover:bg-[#1e3a0f] transition-all active:scale-95"
               >
                 Proceder al Pago
               </Link>
               <p className="text-center text-xs text-gray-400">
                 Impuestos calculados en el checkout
               </p>
             </div>
          </div>
        )}

      </div>
    </div>
  );
}
