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
    <section id="sugerencias" className="section bg-white">
      <div className="container-custom">
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="text-5xl">💡</span>
          </div>
          <h2 className="heading-medium mb-6">
            <span className="text-gradient">Sugerencias y Consejos</span>
          </h2>
          <p className="text-xl text-[#4A4A4A] max-w-2xl mx-auto leading-relaxed">
            Prepárate para una experiencia segura y memorable
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                selectedCategory === category
                  ? 'btn-primary'
                  : 'btn-secondary'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSuggestions.map((suggestion, index) => (
            <div 
              key={suggestion.id} 
              className="card-modern relative overflow-hidden group hover:border-transparent"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${suggestion.color} opacity-10 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-700`}></div>
              
              <div className="p-8 relative z-10">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${suggestion.color} flex items-center justify-center text-2xl shadow-md text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {suggestion.icon}
                </div>
                
                <span className="inline-block px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase mb-3 bg-gray-100 text-gray-600">
                  {suggestion.category}
                </span>

                <h3 className="text-xl font-bold text-[#1A1A1A] mb-3 group-hover:text-primary transition-colors">
                  {suggestion.title}
                </h3>
                
                <p className="text-[#4A4A4A] leading-relaxed text-[15px]">
                  {suggestion.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
