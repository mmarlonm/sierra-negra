'use client';

import Image from 'next/image';

interface Place {
  id: number;
  name: string;
  description: string;
  image: string;
  features: string[];
  gradient: string;
}

const PLACES_DATA = [
  { id: 1, image: 'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?auto=format&fit=crop&q=80&w=800', gradient: 'from-orange-400 via-pink-500 to-cyan-400' },
  { id: 2, image: 'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&q=80&w=800', gradient: 'from-emerald-500 via-teal-400 to-green-500' },
  { id: 3, image: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&q=80&w=800', gradient: 'from-slate-700 via-green-600 to-emerald-700' },
  { id: 4, image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=800', gradient: 'from-blue-500 via-purple-500 to-cyan-400' },
  { id: 5, image: 'https://images.unsplash.com/photo-1506452305024-9d3f02d1c9b5?auto=format&fit=crop&q=80&w=800', gradient: 'from-amber-600 via-stone-500 to-green-600' },
  { id: 6, image: 'https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?auto=format&fit=crop&q=80&w=800', gradient: 'from-green-700 via-emerald-600 to-teal-500' }
];

interface PlacesProps {
  dict: {
    tag: string;
    title: string;
    accent: string;
    description: string;
    explore: string;
    items: {
      [key: string]: {
        name: string;
        description: string;
        features: string[];
      };
    };
  };
}

export default function Places({ dict }: PlacesProps) {
  return (
    <section id="lugares" className="section bg-gradient-to-b from-white via-[#FDFCF9] to-[#F5F1E8]">
      <div className="container-custom">
        <div className="text-center mb-20 space-y-4 animate-fade-in-up">
          <span className="inline-block text-[#2D5016] text-[10px] font-black uppercase tracking-[0.3em] bg-[#2D5016]/5 px-4 py-2 rounded-full mb-2 border border-[#2D5016]/10">
            {dict.tag}
          </span>
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-gray-900 tracking-tight">
            {dict.title} <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2D5016] to-[#87A96B]">{dict.accent}</span>
          </h2>
          <p className="text-xl text-[#4A4A4A] max-w-2xl mx-auto leading-relaxed font-light">
            {dict.description}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PLACES_DATA.map((data, index) => {
            const item = dict.items[data.id.toString()];
            if (!item) return null;
            
            return (
              <div 
                key={data.id} 
                className="group flex flex-col h-full bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Image Section */}
                <div className="relative h-64 w-full overflow-hidden">
                  <Image 
                    src={data.image} 
                    alt={item.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300" />
                  
                  {/* Location Badge */}
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm">
                      <span className="text-xs">📍</span>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-gray-800">Puebla</span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="flex-1 p-8 flex flex-col">
                  <h3 className="text-2xl font-serif font-bold text-gray-900 mb-3 group-hover:text-[#2D5016] transition-colors">
                    {item.name}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed text-sm font-light mb-6 flex-1">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {item.features.map((feature, idx) => (
                      <span 
                        key={idx}
                        className="px-3 py-1 rounded-md bg-gray-50 text-gray-700 text-[10px] font-bold uppercase tracking-wider border border-gray-200"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  <div className="border-t border-gray-100 pt-6 mt-auto">
                     <button className="w-full flex items-center justify-center gap-2 bg-[#2D5016]/5 hover:bg-[#2D5016] text-[#2D5016] hover:text-white py-3 rounded-xl transition-all duration-300 font-bold text-xs uppercase tracking-widest group/btn">
                       <span>{dict.explore}</span>
                       <svg className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                       </svg>
                     </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
