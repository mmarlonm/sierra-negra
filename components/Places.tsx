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

const places: Place[] = [
  {
    id: 1,
    name: 'Mirador del Cielo',
    description: 'Una vista panorámica que te dejará sin aliento. Observa el amanecer desde las alturas.',
    image: '/images/places/mirador.jpg',
    features: ['Vista panorámica', 'Amanecer', 'Fotografía'],
    gradient: 'from-orange-400 via-pink-500 to-cyan-400'
  },
  {
    id: 2,
    name: 'Cascada Esmeralda',
    description: 'Agua cristalina cayendo entre la vegetación exuberante. Un oasis de paz y frescura.',
    image: '/images/places/cascada.jpg',
    features: ['Cascada', 'Naturaleza', 'Relajación'],
    gradient: 'from-emerald-500 via-teal-400 to-green-500'
  },
  {
    id: 3,
    name: 'Bosque Encantado',
    description: 'Camina entre árboles centenarios y descubre la magia de la naturaleza virgen.',
    image: '/images/places/bosque.jpg',
    features: ['Senderismo', 'Flora', 'Aventura'],
    gradient: 'from-slate-700 via-green-600 to-emerald-700'
  },
  {
    id: 4,
    name: 'Lago de los Cisnes',
    description: 'Un espejo de agua tranquilo donde la naturaleza se refleja en perfecta armonía.',
    image: '/images/places/lago.jpg',
    features: ['Lago', 'Fauna', 'Paz'],
    gradient: 'from-blue-500 via-purple-500 to-cyan-400'
  },
  {
    id: 5,
    name: 'Cueva de Cristales',
    description: 'Explora formaciones geológicas únicas en esta cueva natural llena de misterio.',
    image: '/images/places/cueva.jpg',
    features: ['Geología', 'Exploración', 'Aventura'],
    gradient: 'from-amber-600 via-stone-500 to-green-600'
  },
  {
    id: 6,
    name: 'Pico del Águila',
    description: 'El punto más alto de la sierra. Una caminata desafiante con recompensas increíbles.',
    image: '/images/places/pico.jpg',
    features: ['Montañismo', 'Vista', 'Desafío'],
    gradient: 'from-green-700 via-emerald-600 to-teal-500'
  }
];

export default function Places() {
  return (
    <section id="lugares" className="section bg-gradient-to-b from-white via-[#FDFCF9] to-[#F5F1E8]">
      <div className="container-custom">
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="text-5xl">🌲</span>
          </div>
          <h2 className="heading-medium mb-6">
            <span className="text-gradient">Lugares Mágicos</span>
          </h2>
          <p className="text-xl text-[#4A4A4A] max-w-2xl mx-auto leading-relaxed">
            Descubre los destinos más impresionantes que la Sierra Negra tiene para ofrecer
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {places.map((place, index) => (
            <div 
              key={place.id} 
              className="group relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="card-modern overflow-hidden h-full flex flex-col">
                <div className="relative h-64 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${place.gradient} flex items-center justify-center`}>
                    <div className="text-center text-white/90">
                      <div className="text-6xl mb-2 transform group-hover:scale-110 transition-transform duration-500">🌲</div>
                      <div className="text-sm font-semibold">Imagen de {place.name}</div>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold text-[#1A1A1A] mb-3 group-hover:text-[#2D5016] transition-colors">
                    {place.name}
                  </h3>
                  <p className="text-[#4A4A4A] mb-5 leading-relaxed text-[15px] flex-1">
                    {place.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {place.features.map((feature, idx) => (
                      <span 
                        key={idx}
                        className="badge-light text-xs"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                  <a href={place.image} className="btn-primary w-full justify-center text-sm py-3">
                    <span>Explorar</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
