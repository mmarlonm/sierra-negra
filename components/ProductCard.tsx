import React from "react";
import Image from "next/image";
import { Product } from "./CartContext";

export default function ProductCard({ product, onAdd, onView }: { product: Product; onAdd: (p: Product) => void; onView?: () => void }) {
  return (
    <div 
      className="group flex flex-col items-start cursor-pointer w-full h-full"
      onClick={onView}
    >
      {/* Image Container - Aspect Ratio 4:5 for vertical aesthetic / rounded-xl */}
      <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden bg-gray-100 mb-4 shadow-sm transition-all duration-500 hover:shadow-md">
         {((product.images && product.images[0]) || product.image) ? (
          <Image 
            src={(product.images && product.images[0]) || product.image || ""} 
            alt={product.name} 
            fill
            className="object-cover w-full h-full transform transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="flex items-center justify-center h-full text-gray-400 text-xs bg-gray-50">
            <span className="opacity-50">Sin imagen</span>
          </div>
        )}
        
        {/* Origin Badge - Elegant pill */}
        {product.origin && (
           <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] uppercase font-bold tracking-widest text-[#2D5016] shadow-sm">
             {product.origin}
           </div>
        )}

        {/* Add Button - Floating Action Button style. Always visible on touch (via CSS media queries ideally, but here just showing it). 
            We'll make it appear on hover for desktop, but for mobile we might need it always. 
            For this 'Touch-First' design, let's keep it clean: visible on hover on desktop, 
            but maybe we rely on the product page for mobile or show a button below? 
            Actually, a corner button is great. Let's make it more prominent. 
        */}
        <button 
          onClick={(e) => { e.stopPropagation(); onAdd(product); }}
          className="absolute bottom-3 right-3 bg-white text-gray-900 p-3 rounded-full shadow-lg transform transition-all duration-300
                     hover:bg-[#2D5016] hover:text-white
                     lg:opacity-0 lg:translate-y-4 lg:group-hover:opacity-100 lg:group-hover:translate-y-0
                     opacity-100 translate-y-0" /* Always visible on mobile (default), hover logic applies on lg screens */
          title="Agregar al carrito"
        >
           <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" /></svg>
        </button>
      </div>

      {/* Content */}
      <div className="w-full space-y-1">
        <div className="flex justify-between items-start gap-4">
          <h3 className="text-base font-semibold text-gray-900 leading-tight group-hover:text-[#2D5016] transition-colors">
            {product.name}
          </h3>
          <span className="font-bold text-gray-900 shrink-0">${product.price}</span>
        </div>
        <p className="text-[10px] text-gray-400 uppercase tracking-wider font-medium">{product.category}</p>
      </div>
    </div>
  );
}
