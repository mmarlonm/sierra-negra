'use client';

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
    color: 'from-orange-400 to-pink-500'
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
    color: 'from-green-500 to-emerald-600'
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
    color: 'from-slate-600 to-slate-800'
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
    color: 'from-cyan-500 to-blue-600'
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
    color: 'from-indigo-600 to-purple-700'
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
    color: 'from-amber-600 to-orange-600'
  }
];

const difficultyStyles = {
  'Fácil': 'bg-gradient-to-r from-green-500 to-emerald-600 text-white',
  'Moderada': 'bg-gradient-to-r from-amber-500 to-orange-500 text-white',
  'Difícil': 'bg-gradient-to-r from-red-600 to-rose-700 text-white'
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
              className="card-modern p-6 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center justify-between mb-5">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${route.color} flex items-center justify-center text-3xl shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                  {route.icon}
                </div>
                <span className={`${difficultyStyles[route.difficulty]} px-4 py-1.5 rounded-full text-sm font-semibold shadow-md`}>
                  {route.difficulty}
                </span>
              </div>
              
              <h3 className="text-2xl font-bold text-[#1A1A1A] mb-4">
                {route.name}
              </h3>
              
              <div className="flex gap-6 mb-5 text-sm text-[#4A4A4A]">
                <div className="flex items-center gap-2">
                  <span className="text-lg">⏱️</span>
                  <span className="font-medium">{route.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-lg">📏</span>
                  <span className="font-medium">{route.distance}</span>
                </div>
              </div>
              
              <p className="text-[#4A4A4A] mb-5 leading-relaxed text-[15px]">
                {route.description}
              </p>
              
              <div className="mb-5">
                <p className="text-sm font-semibold text-[#1A1A1A] mb-3">Destacados:</p>
                <div className="flex flex-wrap gap-2">
                  {route.highlights.map((highlight, idx) => (
                    <span 
                      key={idx}
                      className="badge-light text-xs"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
              
              <a href="#lugares" className="btn-primary w-full justify-center text-sm py-3">
                <span>Ver Detalles</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
