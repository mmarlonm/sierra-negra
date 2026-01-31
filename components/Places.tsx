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
    image: 'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?auto=format&fit=crop&q=80&w=800',
    features: ['Vista panorámica', 'Amanecer', 'Fotografía'],
    gradient: 'from-orange-400 via-pink-500 to-cyan-400'
  },
  {
    id: 2,
    name: 'Cascada Esmeralda',
    description: 'Agua cristalina cayendo entre la vegetación exuberante. Un oasis de paz y frescura.',
    image: 'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&q=80&w=800',
    features: ['Cascada', 'Naturaleza', 'Relajación'],
    gradient: 'from-emerald-500 via-teal-400 to-green-500'
  },
  {
    id: 3,
    name: 'Bosque Encantado',
    description: 'Camina entre árboles centenarios y descubre la magia de la naturaleza virgen.',
    image: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&q=80&w=800',
    features: ['Senderismo', 'Flora', 'Aventura'],
    gradient: 'from-slate-700 via-green-600 to-emerald-700'
  },
  {
    id: 4,
    name: 'Lago de los Cisnes',
    description: 'Un espejo de agua tranquilo donde la naturaleza se refleja en perfecta armonía.',
    image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=800',
    features: ['Lago', 'Fauna', 'Paz'],
    gradient: 'from-blue-500 via-purple-500 to-cyan-400'
  },
  {
    id: 5,
    name: 'Cueva de Cristales',
    description: 'Explora formaciones geológicas únicas en esta cueva natural llena de misterio.',
    image: 'https://images.unsplash.com/photo-1506452305024-9d3f02d1c9b5?auto=format&fit=crop&q=80&w=800',
    features: ['Geología', 'Exploración', 'Aventura'],
    gradient: 'from-amber-600 via-stone-500 to-green-600'
  },
  {
    id: 6,
    name: 'Pico del Águila',
    description: 'El punto más alto de la sierra. Una caminata desafiante con recompensas increíbles.',
    image: 'https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?auto=format&fit=crop&q=80&w=800',
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
                  <div className="relative h-64 overflow-hidden group">
                    <Image 
                      src={place.image} 
                      alt={place.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="relative z-10 flex items-center gap-2 text-white/90 mb-2">
                         <span className="text-xl">📍</span>
                         <span className="font-medium text-sm">Sierra Negra, Puebla</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-2xl font-bold text-[#1A1A1A] mb-3 group-hover:text-primary transition-colors">
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
                  <div className="mt-auto pt-6 border-t border-gray-100">
                    <button className="btn-secondary w-full justify-center py-2.5 text-sm !rounded-xl">
                      <span>Ver Ubicación</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
