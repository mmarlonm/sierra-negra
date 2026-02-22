'use client';

import Image from 'next/image';
// Imágenes de Unsplash seleccionadas para el tema Sierra Negra
const routeImages = {
  amanecer: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800",
  bosque: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=800", 
  pico: "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?auto=format&fit=crop&q=80&w=800",
  cascadas: "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&q=80&w=800",
  nocturna: "https://images.unsplash.com/photo-1505322022379-7c3353ee6291?auto=format&fit=crop&q=80&w=800",
  travesia: "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?auto=format&fit=crop&q=80&w=800"
};

const ROUTES_DATA = [
  { id: 1, icon: '🌅', color: 'from-orange-400 to-pink-500', image: routeImages.amanecer, difficulty: 'Moderada' },
  { id: 2, icon: '🌲', color: 'from-green-500 to-emerald-600', image: routeImages.bosque, difficulty: 'Fácil' },
  { id: 3, icon: '⛰️', color: 'from-slate-600 to-slate-800', image: routeImages.pico, difficulty: 'Difícil' },
  { id: 4, icon: '💧', color: 'from-cyan-500 to-blue-600', image: routeImages.cascadas, difficulty: 'Moderada' },
  { id: 5, icon: '⭐', color: 'from-indigo-600 to-purple-700', image: routeImages.nocturna, difficulty: 'Fácil' },
  { id: 6, icon: '🏕️', color: 'from-amber-600 to-orange-600', image: routeImages.travesia, difficulty: 'Difícil' }
];

const difficultyStyles: { [key: string]: string } = {
  'Fácil': 'bg-green-100 text-green-700 border border-green-200',
  'Moderada': 'bg-orange-100 text-orange-700 border border-orange-200',
  'Difícil': 'bg-red-100 text-red-700 border border-red-200',
  'Easy': 'bg-green-100 text-green-700 border border-green-200',
  'Moderate': 'bg-orange-100 text-orange-700 border border-orange-200',
  'Hard': 'bg-red-100 text-red-700 border border-red-200'
};

interface RoutesProps {
  dict: {
    tag: string;
    title: string;
    accent: string;
    description: string;
    explore: string;
    difficulty_label: {
      [key: string]: string;
    };
    items: {
      [key: string]: {
        name: string;
        description: string;
        highlights: string[];
        duration: string;
        distance: string;
      };
    };
  };
}

export default function Routes({ dict }: RoutesProps) {
  return (
    <section id="rutas" className="section bg-white">
      <div className="container-custom">
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-block mb-4">
            <span className="text-5xl">{dict.tag.includes('Rutas') ? '🗺️' : '📍'}</span>
          </div>
          <h2 className="heading-medium mb-6">
            <span className="text-gray-900">{dict.title} </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2D5016] to-[#87A96B]">{dict.accent}</span>
          </h2>
          <p className="text-xl text-[#4A4A4A] max-w-2xl mx-auto leading-relaxed font-light">
            {dict.description}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ROUTES_DATA.map((data, index) => {
            const item = dict.items[data.id.toString()];
            if (!item) return null;
            
            const diffLabel = dict.difficulty_label[data.difficulty] || data.difficulty;
            const diffStyle = difficultyStyles[diffLabel] || difficultyStyles[data.difficulty];

            return (
              <div 
                key={data.id} 
                className="card-modern group flex flex-col h-full"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Imagen de cabecera */}
                <div className="card-image-container relative h-64">
                  <Image 
                    src={data.image} 
                    alt={item.name}
                    fill
                    className="card-image object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute top-4 right-4 z-10">
                    <span className={`${diffStyle} px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/90 backdrop-blur-sm shadow-sm`}>
                      {diffLabel}
                    </span>
                  </div>
                </div>

                <div className="p-8 flex flex-col flex-grow bg-white rounded-b-3xl border-x border-b border-gray-100">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${data.color} flex items-center justify-center text-xl shadow-lg shadow-gray-200 text-white`}>
                      {data.icon}
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-gray-900 leading-tight group-hover:text-[#2D5016] transition-colors">
                      {item.name}
                    </h3>
                  </div>
                  
                  <div className="flex gap-3 mb-6">
                    <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-xl border border-gray-100">
                      <span className="text-base text-[#2D5016]">⏱️</span>
                      <span className="text-xs font-bold text-gray-700 uppercase tracking-tight">{item.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-xl border border-gray-100">
                      <span className="text-base text-[#2D5016]">📏</span>
                      <span className="text-xs font-bold text-gray-700 uppercase tracking-tight">{item.distance}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-8 leading-relaxed text-sm font-light flex-grow">
                    {item.description}
                  </p>
                  
                  <div className="mb-8">
                    <div className="flex flex-wrap gap-2">
                      {item.highlights.map((highlight, idx) => (
                        <span 
                          key={idx}
                          className="text-[10px] font-bold text-[#2D5016] bg-[#2D5016]/5 px-3 py-1.5 rounded-lg uppercase tracking-wider"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <a 
                    href="#lugares" 
                    className="flex items-center justify-center gap-2 bg-[#2D5016]/5 hover:bg-[#2D5016] text-[#2D5016] hover:text-white py-4 rounded-xl transition-all duration-300 font-bold text-xs uppercase tracking-widest group/btn border border-[#2D5016]/10"
                  >
                    <span>{dict.explore}</span>
                    <svg className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
