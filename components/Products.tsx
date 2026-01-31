"use client";

import React, { useMemo, useState } from "react";
import ProductCard from "./ProductCard";
import ProductModal from "./ProductModal";
import { Product } from "./CartContext";
import { useCart } from "./CartContext";

// ...existing imports...



export default function Products() {
  const [category, setCategory] = useState<string>("Todos");
  const [origin, setOrigin] = useState<string>("Todos");
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<Product | null>(null);
  const { addItem } = useCart();

  // SAMPLE_PRODUCTS with local images
  const SAMPLE_PRODUCTS: Product[] = [
    // Zoquitlán
    {
      id: "z1",
      name: "Durazno Criollo de Zoquitlán",
      price: 35.0,
      category: "Frutas",
      description: "Durazno dulce y jugoso, cultivado en las tierras altas de Zoquitlán. Ideal para mermeladas o consumo fresco.",
      image: "/sierra-negra/images/shop/durazno.png",
      images: ["/sierra-negra/images/shop/durazno.png"],
      origin: "Zoquitlán"
    },
    {
      id: "z2",
      name: "Aguacate Criollo Pequeño",
      price: 28.0,
      category: "Frutas",
      description: "Aguacate de cáscara comestible, sabor intenso y textura cremosa. Conocido localmente como 'pagua' o 'aguacatillo'.",
      image: "/sierra-negra/images/shop/aguacate.jpg",
      images: ["/sierra-negra/images/shop/aguacate.jpg"],
      origin: "Zoquitlán"
    },
    // Coyomeapan
    {
      id: "c1",
      name: "Manzana Golden de Coyomeapan",
      price: 22.0,
      category: "Frutas",
      description: "Manzana crujiente y aromática, cultivada en la niebla de Coyomeapan. Perfecta para postres.",
      image: "/sierra-negra/images/shop/manzana.jpg",
      images: ["/sierra-negra/images/shop/manzana.jpg"],
      origin: "Coyomeapan"
    },
    // Eloxochitlán
    {
      id: "e1",
      name: "Café de Altura Eloxochitlán",
      price: 180.0,
      category: "Bebidas",
      description: "Café arábica de estricta altura, con notas a chocolate y cítricos. Tostado medio artesanal.",
      image: "/sierra-negra/images/shop/cafe.jpg",
      images: ["/sierra-negra/images/shop/cafe.jpg"],
      origin: "Eloxochitlán"
    },
    {
      id: "e2",
      name: "Canela en Rama Orgánica",
      price: 45.0,
      category: "Especias",
      description: "Canela recién cosechada, aroma intenso y dulce. Varitas largas seleccionadas a mano.",
      image: "/sierra-negra/images/shop/canela.jpg",
      images: ["/sierra-negra/images/shop/canela.jpg"],
      origin: "Eloxochitlán"
    },
    {
      id: "e3",
      name: "Mermelada de Naranja Casera",
      price: 65.0,
      category: "Mermeladas",
      description: "Elaborada con naranjas locales y azúcar de caña. Sin conservadores artificiales.",
      image: "/sierra-negra/images/shop/mermelada.png",
      images: ["/sierra-negra/images/shop/mermelada.png"],
      origin: "Eloxochitlán"
    },
    {
      id: "e4",
      name: "Frijol Negro de la Sierra",
      price: 32.0,
      category: "Granos",
      description: "Frijol negro nativo, de cocción rápida y caldo espeso. Sabor inigualable.",
      image: "/sierra-negra/images/shop/frijol.png",
      images: ["/sierra-negra/images/shop/frijol.png"],
      origin: "Eloxochitlán"
    },
    {
      id: "e5",
      name: "Chile Seco Ahumado",
      price: 55.0,
      category: "Especias",
      description: "Chile secado al sol y ahumado con leña de encino. Picor medio y gran aroma.",
      image: "/sierra-negra/images/shop/chile.png",
      images: ["/sierra-negra/images/shop/chile.png"],
      origin: "Eloxochitlán"
    }
  ];

  const categories = useMemo(() => ["Todos", ...Array.from(new Set(SAMPLE_PRODUCTS.map(p => p.category || "Otros")))], [SAMPLE_PRODUCTS]);
  const origins = useMemo(() => ["Todos", ...Array.from(new Set(SAMPLE_PRODUCTS.map(p => p.origin || "Otros")))], [SAMPLE_PRODUCTS]);

  const filtered = SAMPLE_PRODUCTS.filter(p =>
    (category === "Todos" || p.category === category) &&
    (origin === "Todos" || p.origin === origin) &&
    (p.name.toLowerCase().includes(query.toLowerCase()) || (p.description || '').toLowerCase().includes(query.toLowerCase()))
  );

  return (
    <section className="bg-[#FAF9F6] min-h-screen pb-24 font-[Outfit]">
      {/* Hero Section - Reduced height, elegant */}
      <div className="relative h-[25vh] min-h-[220px] w-full overflow-hidden bg-[#2D5016]">
        <div className="absolute inset-0 z-0">
             <img 
              src="/sierra-negra/images/shop/hero-shop.png" 
              alt="Sierra Negra"
              className="w-full h-full object-cover opacity-80"
            />
        </div>
        
        <div className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-center items-start">
           <span className="text-green-300 uppercase tracking-[0.2em] text-xs font-bold mb-2">Catálogo 2026</span>
           <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg font-serif tracking-tight">
             Sabores de Altura
           </h1>
           <p className="text-gray-200 text-sm md:text-base max-w-lg font-light">
             Sabores auténticos de la Sierra Negra, directo a tu mesa.
           </p>
        </div>
      </div>

      {/* Sticky Filter Bar */}
      <div className="sticky top-[var(--header-height)] z-30 bg-white/80 backdrop-blur-xl border-b border-gray-100 shadow-sm transition-all duration-300">
        <div className="container mx-auto px-4 md:px-6 py-3">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            
            {/* Horizontal Scrollable Filters */}
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1 md:pb-0 w-full md:w-auto mask-linear-fade">
              <button 
                onClick={() => setCategory("Todos")}
                className={`flex-shrink-0 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${category === "Todos" ? 'bg-[#2D5016] text-white shadow-lg shadow-green-900/20' : 'bg-gray-100/80 text-gray-600 hover:bg-gray-200 backdrop-blur-sm'}`}
              >
                Todo
              </button>
              {categories.filter(c => c !== "Todos").map(cat => (
                <button 
                  key={cat}
                  onClick={() => setCategory(cat)}
                  className={`flex-shrink-0 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${cat === category ? 'bg-[#2D5016] text-white shadow-lg shadow-green-900/20' : 'bg-gray-100/80 text-gray-600 hover:bg-gray-200 backdrop-blur-sm'}`}
                >
                  {cat}
                </button>
              ))}
              <div className="w-[1px] h-6 bg-gray-300 mx-2 hidden md:block"></div>
               {/* Origin Filters Inline (Optional) or separate. Let's keep them here for easy access */}
               {origins.filter(o => o !== "Todos").map(place => (
                 <button
                    key={place}
                    onClick={() => setOrigin(origin === place ? "Todos" : place)}
                    className={`flex-shrink-0 px-3 py-1.5 rounded-md text-xs font-medium uppercase tracking-wider border transition-all ${origin === place ? 'border-[#2D5016] text-[#2D5016] bg-green-50' : 'border-dashed border-gray-300 text-gray-500 hover:border-gray-400'}`}
                 >
                   {place}
                 </button>
               ))}
            </div>

            {/* Search */}
            <div className="relative w-full md:w-64 flex-shrink-0">
               <input 
                 value={query} 
                 onChange={(e) => setQuery(e.target.value)} 
                 placeholder="Buscar..." 
                 className="w-full py-2.5 pl-5 pr-10 rounded-full bg-gray-100/50 text-gray-800 placeholder-gray-400 border-none focus:ring-2 focus:ring-[#2D5016]/20 outline-none text-sm transition-all"
               />
               <span className="absolute right-4 top-3 text-gray-400 text-xs">🔍</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-8">
          <div className="mb-6 flex justify-between items-end">
             <h2 className="text-xl font-serif text-gray-900">
               {category === "Todos" ? "Todos los Productos" : category}
               {origin !== "Todos" && <span className="text-gray-500 text-base font-sans ml-2 font-normal">de {origin}</span>}
             </h2>
             <span className="text-xs text-gray-500 font-mono">
               {filtered.length} RESULTADOS
             </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-x-4 gap-y-8">
             {filtered.map(p => (
               <div key={p.id} className="h-full">
                 <ProductCard product={p} onAdd={(prod) => addItem(prod, 1)} onView={() => setSelected(p)} />
               </div>
             ))}
          </div>

          {filtered.length === 0 && (
            <div className="min-h-[40vh] flex flex-col items-center justify-center text-center">
              <p className="text-gray-400 text-lg mb-4 font-light">No encontramos lo que buscas.</p>
              <button 
                onClick={() => {setCategory("Todos"); setOrigin("Todos"); setQuery("");}}
                className="text-[#2D5016] font-medium border-b border-[#2D5016] hover:opacity-70 transition-opacity"
              >
                Limpiar filtros
              </button>
            </div>
          )}
      </div>

      {selected && (
        <ProductModal product={selected} onClose={() => setSelected(null)} onAdd={(p, qty=1)=>{ addItem(p, qty); setSelected(null); }} />
      )}
    </section>
  );
}
