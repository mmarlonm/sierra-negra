'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface GalleryImage {
  id: number;
  title: string;
  image: string;
  description: string;
}

interface GalleryGroup {
  id: string;
  name: string;
  description: string;
  coverImage: string;
  images: GalleryImage[];
}

const galleryGroups: GalleryGroup[] = [
  {
    id: 'eloxochitlan',
    name: 'Eloxochitlán',
    description: 'Tierra de nubes y cafetales de altura.',
    coverImage: '/sierra-negra/images/gallery/san_miguel_eloxochitlan.jpg',
    images: [
      { id: 1, title: 'San Miguel Eloxochitlán', image: '/sierra-negra/images/gallery/san_miguel_eloxochitlan.jpg', description: 'Vista aérea de la joya de la sierra.' },
      { id: 101, title: 'Cafetales al Amanecer', image: '/sierra-negra/images/shop/cafe.jpg', description: 'El origen de nuestro sabor.' }
    ]
  },
  {
    id: 'zoquitlan',
    name: 'Zoquitlán',
    description: 'Cuna de tradiciones y paisajes infinitos.',
    coverImage: '/sierra-negra/images/gallery/zoquitlan.webp',
    images: [
      { id: 5, title: 'Centro de Zoquitlán', image: '/sierra-negra/images/gallery/zoquitlan.webp', description: 'Historia viva en cada rincón.' },
      { id: 7, title: 'Cacaloc', image: '/sierra-negra/images/gallery/cacaloc_zoquitlan.jpg', description: 'El punto más alto de la Sierra Negra.' },
      { id: 4, title: 'Río El Tepeyac', image: '/sierra-negra/images/gallery/tepeyac.jpg', description: 'Aguas cristalinas que dan vida a la región.' }
    ]
  },
  {
    id: 'crucero',
    name: 'El Crucero',
    description: 'Intersección natural entre valles y montañas.',
    coverImage: '/sierra-negra/images/gallery/crucero.png',
    images: [
      { id: 1, title: 'Mirador del Crucero', image: '/sierra-negra/images/gallery/crucero.png', description: 'Donde las nubes tocan la tierra.' },
      { id: 2, title: 'Sendero de Montaña', image: '/sierra-negra/images/gallery/crucero_2.png', description: 'Caminos que cuentan historias.' },
      { id: 3, title: 'Bosque de Niebla', image: '/sierra-negra/images/gallery/crucero_3.jpeg', description: 'Misterio y naturaleza en estado puro.' }
    ]
  },
  {
    id: 'coyomeapan',
    name: 'Coyomeapan',
    description: 'El corazón profundo de la Sierra Negra.',
    coverImage: '/sierra-negra/images/gallery/san_juan_cuautla.jpg',
    images: [
      { id: 1, title: 'San Juan Cuautla', image: '/sierra-negra/images/gallery/san_juan_cuautla.jpg', description: 'Paz y serenidad en las faldas de la montaña.' }
    ]
  }
];

export default function Gallery() {
  const [activeGroup, setActiveGroup] = useState<GalleryGroup | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Prevent scroll when slider is open
  useEffect(() => {
    if (activeGroup) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [activeGroup]);

  const openSlider = (group: GalleryGroup) => {
    setActiveGroup(group);
    setCurrentIndex(0);
  };

  const nextSlide = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (activeGroup) {
      setCurrentIndex((prev) => (prev + 1) % activeGroup.images.length);
    }
  };

  const prevSlide = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (activeGroup) {
      setCurrentIndex((prev) => (prev - 1 + activeGroup.images.length) % activeGroup.images.length);
    }
  };

  return (
    <section id="galeria" className="py-24 bg-[#FDFDFB]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20 space-y-4">
          <span className="text-[#2D5016] text-[10px] font-black uppercase tracking-[0.3em] bg-green-50 px-4 py-2 rounded-full">
            Nuestros Paisajes
          </span>
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-gray-900 tracking-tight">
            Explora la Sierra Negra
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto font-light leading-relaxed">
            Una travesía visual por los rincones más emblemáticos de nuestra tierra, capturando la esencia de nuestra cultura.
          </p>
        </div>
        
        {/* Grouped Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {galleryGroups.map((group, index) => (
            <div
              key={group.id}
              onClick={() => openSlider(group)}
              className="group relative h-[450px] cursor-pointer overflow-hidden rounded-[2.5rem] shadow-2xl shadow-green-900/10 transition-all duration-700 hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Image
                src={group.coverImage}
                alt={group.name}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110 group-hover:rotate-1"
              />
              {/* Overlay Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent transition-all duration-500 group-hover:via-gray-900/60" />
              
              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                <div className="transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-[9px] font-black uppercase tracking-[0.4em] text-green-400 mb-2 drop-shadow-sm">Destino</p>
                  <h3 className="text-3xl font-serif font-bold mb-3 drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">{group.name}</h3>
                  <p className="text-xs text-gray-200 font-light md:opacity-0 group-hover:opacity-100 transition-all duration-500 max-w-[240px] line-clamp-2">
                    {group.description}
                  </p>
                  
                  <div className="mt-6 flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-white/50 group-hover:text-white transition-colors">
                    <span>Ver {group.images.length} fotos</span>
                    <div className="w-6 h-px bg-white/30 group-hover:w-10 transition-all" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Slider Overlay */}
      {activeGroup && (
        <div 
          className="fixed inset-0 z-[100] bg-gray-950/95 backdrop-blur-xl flex items-center justify-center animate-fade-in"
          onClick={() => setActiveGroup(null)}
        >
          {/* Close Button */}
          <button 
            className="absolute top-8 right-8 z-[110] text-white/50 hover:text-white transition-colors p-4 bg-white/5 rounded-full backdrop-blur-md"
            onClick={() => setActiveGroup(null)}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Slider Content */}
          <div className="relative w-full h-full flex items-center justify-center p-4 md:p-12 overflow-hidden" onClick={e => e.stopPropagation()}>
            
            {/* navigation - prev */}
            <button 
              onClick={prevSlide}
              className="absolute left-4 md:left-12 z-[110] text-white/30 hover:text-white transition-all bg-white/5 hover:bg-white/10 p-6 rounded-full backdrop-blur-sm"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            </button>

            {/* Current Image */}
            <div className="relative w-full max-w-6xl aspect-[4/3] md:aspect-video rounded-[3rem] overflow-hidden shadow-2xl">
              <Image
                src={activeGroup.images[currentIndex].image}
                alt={activeGroup.images[currentIndex].title}
                fill
                className="object-cover animate-fade-in"
                key={activeGroup.images[currentIndex].id}
              />
              
              {/* Image Info - Glassmorphic Bottom Bar with higher contrast */}
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 bg-black/60 md:bg-white/10 backdrop-blur-md border-t border-white/20">
                <div className="max-w-3xl">
                  <p className="text-green-400 text-[10px] font-black uppercase tracking-[0.3em] mb-2 drop-shadow-sm">
                    {activeGroup.name} • {currentIndex + 1} de {activeGroup.images.length}
                  </p>
                  <h4 className="text-2xl md:text-4xl font-serif font-bold text-white mb-2 drop-shadow-[0_2px_15px_rgba(0,0,0,0.8)]">
                    {activeGroup.images[currentIndex].title}
                  </h4>
                  <p className="text-base md:text-lg text-gray-100 font-light leading-relaxed drop-shadow-sm">
                    {activeGroup.images[currentIndex].description}
                  </p>
                </div>
              </div>
            </div>

            {/* navigation - next */}
            <button 
              onClick={nextSlide}
              className="absolute right-4 md:right-12 z-[110] text-white/30 hover:text-white transition-all bg-white/5 hover:bg-white/10 p-6 rounded-full backdrop-blur-sm"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </button>

            {/* Mobile Swipe Indicators */}
            <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2 md:hidden">
              {activeGroup.images.map((_, i) => (
                <div 
                  key={i} 
                  className={`w-2 h-2 rounded-full transition-all ${i === currentIndex ? 'bg-white w-8' : 'bg-white/20'}`}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
