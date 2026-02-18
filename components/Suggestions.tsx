'use client';

import { useState } from 'react';

interface Suggestion {
  id: number;
  category: string;
  title: string;
  description: string;
  icon: string;
  color: string;
}

const suggestions: Suggestion[] = [
  {
    id: 1,
    category: 'Equipamiento',
    title: 'Lleva ropa cómoda',
    description: 'Usa ropa de senderismo y zapatos adecuados. Las capas son importantes para cambios de temperatura.',
    icon: '👕',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 2,
    category: 'Seguridad',
    title: 'Hidratación constante',
    description: 'Lleva suficiente agua. Se recomienda al menos 2 litros por persona para rutas de más de 3 horas.',
    icon: '💧',
    color: 'from-cyan-500 to-blue-600'
  },
  {
    id: 3,
    category: 'Fotografía',
    title: 'Mejor hora para fotos',
    description: 'El amanecer y atardecer ofrecen la mejor iluminación. Evita el mediodía para mejores resultados.',
    icon: '📸',
    color: 'from-purple-500 to-pink-500'
  },
  {
    id: 4,
    category: 'Naturaleza',
    title: 'Respeta el entorno',
    description: 'No dejes basura, no arranques plantas y mantén distancia con la fauna silvestre.',
    icon: '🌿',
    color: 'from-green-500 to-emerald-600'
  },
  {
    id: 5,
    category: 'Planificación',
    title: 'Revisa el clima',
    description: 'Consulta el pronóstico antes de salir. Las condiciones pueden cambiar rápidamente en la montaña.',
    icon: '🌤️',
    color: 'from-yellow-400 to-orange-500'
  },
  {
    id: 6,
    category: 'Grupos',
    title: 'No vayas solo',
    description: 'Es más seguro explorar en grupo. Si vas solo, informa a alguien de tu ruta y hora estimada de regreso.',
    icon: '👥',
    color: 'from-indigo-500 to-purple-600'
  }
];

export default function Suggestions() {
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');

  const categories = ['Todos', ...Array.from(new Set(suggestions.map(s => s.category)))];

  const filteredSuggestions = selectedCategory === 'Todos' 
    ? suggestions 
    : suggestions.filter(s => s.category === selectedCategory);

  return (
    <section id="sugerencias" className="section bg-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#2D5016]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <span className="inline-block text-[#2D5016] text-[10px] font-black uppercase tracking-[0.3em] bg-green-50 px-4 py-2 rounded-full mb-3 border border-[#2D5016]/10">
            Tips de Viaje
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 tracking-tight mb-4">
            Sugerencias y Consejos
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed font-light">
            Prepárate para una experiencia segura y memorable con nuestras recomendaciones esenciales.
          </p>
        </div>
        
        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2.5 rounded-full text-sm font-bold tracking-wide transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-[#2D5016] text-white shadow-lg shadow-green-900/20 transform scale-105'
                  : 'bg-white border border-gray-200 text-gray-500 hover:bg-gray-50 hover:border-gray-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSuggestions.map((suggestion, index) => (
            <div 
              key={suggestion.id} 
              className="group relative bg-white border border-gray-200 rounded-[2rem] p-8 transition-all duration-300 hover:shadow-xl hover:border-[#2D5016]/20 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start justify-between mb-6">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${suggestion.color} flex items-center justify-center text-3xl shadow-sm text-white transition-transform duration-300 group-hover:scale-110`}>
                  <span className="drop-shadow-sm filter">{suggestion.icon}</span>
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-[#2D5016] bg-[#2D5016]/5 px-3 py-1 rounded-full">
                  {suggestion.category}
                </span>
              </div>
              
              <h3 className="text-xl font-serif font-bold text-gray-900 mb-3 group-hover:text-[#2D5016] transition-colors">
                {suggestion.title}
              </h3>
              
              <p className="text-gray-500 leading-relaxed text-sm font-light">
                {suggestion.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
