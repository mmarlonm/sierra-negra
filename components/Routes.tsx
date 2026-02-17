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

interface Route {
  id: number;
  name: string;
  difficulty: 'Fácil' | 'Moderada' | 'Difícil';
  duration: string;
  distance: string;
  description: string;
  highlights: string[];
  icon: string;
  color: string;
  image: string;
}

const routes: Route[] = [
  {
    id: 1,
    name: 'Ruta del Amanecer',
    difficulty: 'Moderada',
    duration: '3-4 horas',
    distance: '8 km',
    description: 'Una caminata matutina perfecta para ver el amanecer desde el mirador.',
    highlights: ['Amanecer espectacular', 'Vista panorámica', 'Fotografía'],
    icon: '🌅',
    color: 'from-orange-400 to-pink-500',
    image: routeImages.amanecer
  },
  {
    id: 2,
    name: 'Sendero del Bosque',
    difficulty: 'Fácil',
    duration: '2 horas',
    distance: '5 km',
    description: 'Ideal para familias. Camina entre árboles y disfruta de la naturaleza.',
    highlights: ['Familiar', 'Naturaleza', 'Relajante'],
    icon: '🌲',
    color: 'from-green-500 to-emerald-600',
    image: routeImages.bosque
  },
  {
    id: 3,
    name: 'Ascenso al Pico',
    difficulty: 'Difícil',
    duration: '6-8 horas',
    distance: '15 km',
    description: 'Para los más aventureros. Llega a la cima y disfruta de vistas inigualables.',
    highlights: ['Desafiante', 'Vista 360°', 'Logro personal'],
    icon: '⛰️',
    color: 'from-slate-600 to-slate-800',
    image: routeImages.pico
  },
  {
    id: 4,
    name: 'Circuito de las Cascadas',
    difficulty: 'Moderada',
    duration: '4-5 horas',
    distance: '10 km',
    description: 'Visita múltiples cascadas y pozas naturales en un solo recorrido.',
    highlights: ['Cascadas', 'Nado', 'Diversión'],
    icon: '💧',
    color: 'from-cyan-500 to-blue-600',
    image: routeImages.cascadas
  },
  {
    id: 5,
    name: 'Ruta Nocturna',
    difficulty: 'Fácil',
    duration: '2 horas',
    distance: '4 km',
    description: 'Explora la sierra bajo las estrellas con guías especializados.',
    highlights: ['Astronomía', 'Naturaleza nocturna', 'Experiencia única'],
    icon: '⭐',
    color: 'from-indigo-600 to-purple-700',
    image: routeImages.nocturna
  },
  {
    id: 6,
    name: 'Travesía Completa',
    difficulty: 'Difícil',
    duration: '2 días',
    distance: '30 km',
    description: 'La ruta más completa. Acampa bajo las estrellas y vive la aventura completa.',
    highlights: ['Acampada', 'Aventura', 'Experiencia completa'],
    icon: '🏕️',
    color: 'from-amber-600 to-orange-600',
    image: routeImages.travesia
  }
];

const difficultyStyles = {
  'Fácil': 'bg-green-100 text-green-700 border border-green-200',
  'Moderada': 'bg-orange-100 text-orange-700 border border-orange-200',
  'Difícil': 'bg-red-100 text-red-700 border border-red-200'
};

export default function Routes() {
  return (
    <section id="rutas" className="section bg-white">
      <div className="container-custom">
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="text-5xl">🗺️</span>
          </div>
          <h2 className="heading-medium mb-6">
            <span className="text-gradient">Rutas para Explorar</span>
          </h2>
          <p className="text-xl text-[#4A4A4A] max-w-2xl mx-auto leading-relaxed">
            Elige tu aventura. Desde caminatas familiares hasta desafíos extremos.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {routes.map((route, index) => (
            <div 
              key={route.id} 
              className="card-modern group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Imagen de cabecera */}
              <div className="card-image-container relative">
                <Image 
                  src={route.image} 
                  alt={route.name}
                  fill
                  className="card-image object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute top-4 right-4 z-10">
                  <span className={`${difficultyStyles[route.difficulty]} px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/90 backdrop-blur-sm shadow-sm`}>
                    {route.difficulty}
                  </span>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${route.color} flex items-center justify-center text-lg shadow-sm text-white`}>
                    {route.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#1A1A1A] leading-tight group-hover:text-primary transition-colors">
                    {route.name}
                  </h3>
                </div>
                
                <div className="flex gap-4 mb-4 text-sm text-[#4A4A4A]">
                  <div className="flex items-center gap-1.5 bg-gray-50 px-3 py-1.5 rounded-lg">
                    <span className="text-lg">⏱️</span>
                    <span className="font-medium">{route.duration}</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-gray-50 px-3 py-1.5 rounded-lg">
                    <span className="text-lg">📏</span>
                    <span className="font-medium">{route.distance}</span>
                  </div>
                </div>
                
                <p className="text-[#4A4A4A] mb-6 leading-relaxed text-[15px] flex-grow">
                  {route.description}
                </p>
                
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {route.highlights.map((highlight, idx) => (
                      <span 
                        key={idx}
                        className="text-xs font-medium text-gray-600 bg-gray-100 px-3 py-1 rounded-full"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
                
                <a 
                  href="#lugares" 
                  className="btn-secondary w-full justify-center text-sm py-3 !border-gray-200 hover:!border-primary hover:!bg-primary hover:!text-white group-hover:border-primary/30"
                >
                  <span>Ver Detalles</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
