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
    <section id="galeria" className="py-24 bg-[#FDFCF9] overflow-hidden">
      <div className="container-custom mx-auto">
        <div className="text-center mb-20 space-y-6 animate-fade-in-up">
          <span className="inline-block text-[#2D5016] text-[10px] font-black uppercase tracking-[0.3em] bg-[#2D5016]/5 px-6 py-2 rounded-full border border-[#2D5016]/10">
            Nuestros Paisajes
          </span>
          <h2 className="text-5xl md:text-7xl font-serif font-bold text-gray-900 tracking-tight leading-none">
            Explora la <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2D5016] to-[#4A7C2F]">Sierra Negra</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-500 max-w-3xl mx-auto font-light leading-relaxed">
            Una travesía visual por los rincones más emblemáticos de nuestra tierra, capturando la esencia viva de nuestra cultura y naturaleza.
          </p>
        </div>
        
        {/* Centered Modern Grid */}
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-[1400px]">
            {galleryGroups.map((group, index) => (
              <div
                key={group.id}
                onClick={() => openSlider(group)}
                className="group relative h-[500px] cursor-pointer overflow-hidden rounded-[2rem] shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:z-10"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-gray-200 animate-pulse" />
                <Image
                  src={group.coverImage}
                  alt={group.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                
                {/* Modern Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/0 to-black/80 opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-[2px]" />
                
                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="overflow-hidden">
                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#87A96B] mb-3 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
                      Destino
                    </p>
                    <h3 className="text-3xl font-serif font-bold mb-3 leading-none">{group.name}</h3>
                    <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-500">
                      <p className="text-sm text-gray-200 font-light leading-relaxed mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                        {group.description}
                      </p>
                      
                      <div className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest border border-white/30 px-4 py-2 rounded-full hover:bg-white hover:text-[#2D5016] transition-all duration-300">
                        <span>Ver Galería</span>
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modern Slider Overlay */}
      {activeGroup && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-2xl flex items-center justify-center animate-fade-in"
          onClick={() => setActiveGroup(null)}
        >
          {/* Top Controls */}
          <div className="absolute top-0 left-0 right-0 p-6 md:p-8 flex justify-between items-start z-[110]">
            <div className="text-white">
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#87A96B] mb-1">Galería</p>
              <h3 className="text-2xl font-serif">{activeGroup.name}</h3>
            </div>
            <button 
              className="text-white/50 hover:text-white hover:rotate-90 transition-all duration-300 p-2"
              onClick={() => setActiveGroup(null)}
            >
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Slider Content */}
          <div className="relative w-full h-full flex items-center justify-center p-4 md:p-12 overflow-hidden" onClick={e => e.stopPropagation()}>
            
            {/* Prev Button - Hidden on mobile */}
            <button 
              onClick={prevSlide}
              className="hidden md:flex absolute left-8 z-[110] text-white hover:text-[#87A96B] transition-colors w-14 h-14 items-center justify-center border border-white/10 rounded-full hover:bg-white/5 backdrop-blur-sm"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" /></svg>
            </button>

            {/* Main Image Container */}
            <div className="relative w-full max-w-6xl aspect-[4/5] md:aspect-video rounded-[1rem] md:rounded-[2rem] overflow-hidden shadow-2xl bg-[#1a1a1a]">
              <Image
                src={activeGroup.images[currentIndex].image}
                alt={activeGroup.images[currentIndex].title}
                fill
                className="object-cover animate-fade-in transition-transform duration-700 hover:scale-105"
                key={activeGroup.images[currentIndex].id}
                priority
              />
              
              {/* Image Info Bar */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                <div className="max-w-4xl mx-auto text-center md:text-left">
                  <p className="text-[#87A96B] text-[10px] font-black uppercase tracking-[0.3em] mb-3">
                    {currentIndex + 1} / {activeGroup.images.length}
                  </p>
                  <h4 className="text-2xl md:text-4xl font-serif font-bold text-white mb-3 leading-tight">
                    {activeGroup.images[currentIndex].title}
                  </h4>
                  <p className="text-sm md:text-lg text-gray-300 font-light leading-relaxed max-w-2xl">
                    {activeGroup.images[currentIndex].description}
                  </p>
                </div>
              </div>
            </div>

            {/* Next Button - Hidden on mobile */}
            <button 
              onClick={nextSlide}
              className="hidden md:flex absolute right-8 z-[110] text-white hover:text-[#87A96B] transition-colors w-14 h-14 items-center justify-center border border-white/10 rounded-full hover:bg-white/5 backdrop-blur-sm"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" /></svg>
            </button>

            {/* Mobile Navigation Dots */}
            <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-3 md:hidden z-[110]">
              {activeGroup.images.map((_, i) => (
                <button 
                  key={i} 
                  onClick={() => setCurrentIndex(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${i === currentIndex ? 'bg-white w-6' : 'bg-white/30 w-1.5'}`}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
