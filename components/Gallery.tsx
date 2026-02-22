'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const GALLERY_GROUPS_DATA = [
  {
    id: 'eloxochitlan',
    coverImage: '/sierra-negra/images/gallery/san_miguel_eloxochitlan.jpg',
    images: [
      { id: 1, image: '/sierra-negra/images/gallery/san_miguel_eloxochitlan.jpg' },
      { id: 101, image: '/sierra-negra/images/shop/cafe.jpg' }
    ]
  },
  {
    id: 'zoquitlan',
    coverImage: '/sierra-negra/images/gallery/zoquitlan.webp',
    images: [
      { id: 5, image: '/sierra-negra/images/gallery/zoquitlan.webp' },
      { id: 7, image: '/sierra-negra/images/gallery/cacaloc_zoquitlan.jpg' },
      { id: 4, image: '/sierra-negra/images/gallery/tepeyac.jpg' }
    ]
  },
  {
    id: 'crucero',
    coverImage: '/sierra-negra/images/gallery/crucero.png',
    images: [
      { id: 1, image: '/sierra-negra/images/gallery/crucero.png' },
      { id: 2, image: '/sierra-negra/images/gallery/crucero_2.png' },
      { id: 3, image: '/sierra-negra/images/gallery/crucero_3.jpeg' }
    ]
  },
  {
    id: 'coyomeapan',
    coverImage: '/sierra-negra/images/gallery/san_juan_cuautla.jpg',
    images: [
      { id: 1, image: '/sierra-negra/images/gallery/san_juan_cuautla.jpg' }
    ]
  }
];

interface GalleryProps {
  dict: {
    tag: string;
    title: string;
    accent: string;
    description: string;
    view_gallery: string;
    destination: string;
    groups: {
      [key: string]: {
        name: string;
        description: string;
        images: {
          [key: string]: {
            title: string;
            description: string;
          };
        };
      };
    };
  };
}

export default function Gallery({ dict }: GalleryProps) {
  const [activeGroupId, setActiveGroupId] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const activeGroupData = GALLERY_GROUPS_DATA.find(g => g.id === activeGroupId);
  const activeGroupDict = activeGroupId ? dict.groups[activeGroupId] : null;

  useEffect(() => {
    if (activeGroupId) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [activeGroupId]);

  const openSlider = (groupId: string) => {
    setActiveGroupId(groupId);
    setCurrentIndex(0);
  };

  const nextSlide = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (activeGroupData) {
      setCurrentIndex((prev) => (prev + 1) % activeGroupData.images.length);
    }
  };

  const prevSlide = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (activeGroupData) {
      setCurrentIndex((prev) => (prev - 1 + activeGroupData.images.length) % activeGroupData.images.length);
    }
  };

  return (
    <section id="galeria" className="py-24 bg-[#FDFCF9] overflow-hidden">
      <div className="container-custom mx-auto">
        <div className="text-center mb-20 space-y-6 animate-fade-in-up">
          <span className="inline-block text-[#2D5016] text-[10px] font-black uppercase tracking-[0.3em] bg-[#2D5016]/5 px-6 py-2 rounded-full border border-[#2D5016]/10">
            {dict.tag}
          </span>
          <h2 className="text-5xl md:text-7xl font-serif font-bold text-gray-900 tracking-tight leading-none">
            {dict.title} <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2D5016] to-[#4A7C2F]">{dict.accent}</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-500 max-w-3xl mx-auto font-light leading-relaxed">
            {dict.description}
          </p>
        </div>
        
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-[1400px]">
            {GALLERY_GROUPS_DATA.map((group, index) => {
              const groupDict = dict.groups[group.id];
              if (!groupDict) return null;

              return (
                <div
                  key={group.id}
                  onClick={() => openSlider(group.id)}
                  className="group relative h-[500px] cursor-pointer overflow-hidden rounded-[2rem] shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:z-10"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="absolute inset-0 bg-gray-200 animate-pulse" />
                  <Image
                    src={group.coverImage}
                    alt={groupDict.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/10 to-black/90 opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="absolute inset-0 p-8 pt-12 position-relative flex flex-col justify-center text-white">
                    <div className="transform transition-transform duration-500 translate-y-4 group-hover:translate-y-0">
                      <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#87A96B] mb-2 opacity-80 group-hover:opacity-100 transition-all duration-500">
                        {dict.destination}
                      </p>
                      <h3 className="text-3xl font-serif font-bold mb-3 leading-tight drop-shadow-md">{groupDict.name}</h3>
                      
                      <div className="overflow-hidden transition-all duration-500 max-h-0 opacity-0 group-hover:max-h-40 group-hover:opacity-100">
                        <p className="text-sm text-gray-200 font-light leading-relaxed mb-4">
                          {groupDict.description}
                        </p>
                        
                        <div className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest border border-white/30 px-4 py-2 rounded-full hover:bg-white hover:text-[#2D5016] transition-all duration-300">
                          <span>{dict.view_gallery}</span>
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {activeGroupData && activeGroupDict && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-2xl flex items-center justify-center animate-fade-in"
          onClick={() => setActiveGroupId(null)}
        >
          <div className="absolute top-0 left-0 right-0 p-6 md:p-8 flex justify-between items-start z-[110]">
            <div className="text-white">
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#87A96B] mb-1">{dict.view_gallery}</p>
              <h3 className="text-2xl font-serif">{activeGroupDict.name}</h3>
            </div>
            <button 
              className="text-white/50 hover:text-white hover:rotate-90 transition-all duration-300 p-2"
              onClick={() => setActiveGroupId(null)}
            >
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="relative w-full h-full flex items-center justify-center p-4 md:p-12 overflow-hidden" onClick={e => e.stopPropagation()}>
            <button 
              onClick={prevSlide}
              className="hidden md:flex absolute left-8 z-[110] text-white hover:text-[#87A96B] transition-colors w-14 h-14 items-center justify-center border border-white/10 rounded-full hover:bg-white/5 backdrop-blur-sm"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" /></svg>
            </button>

            <div className="relative w-full max-w-6xl aspect-[4/5] md:aspect-video rounded-[1rem] md:rounded-[2rem] overflow-hidden shadow-2xl bg-[#1a1a1a]">
              <Image
                src={activeGroupData.images[currentIndex].image}
                alt={activeGroupDict.images[activeGroupData.images[currentIndex].id.toString()]?.title || ''}
                fill
                className="object-cover animate-fade-in transition-transform duration-700 hover:scale-105"
                key={activeGroupData.images[currentIndex].id}
                priority
              />
              
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                <div className="max-w-4xl mx-auto text-center md:text-left">
                  <p className="text-[#87A96B] text-[10px] font-black uppercase tracking-[0.3em] mb-3">
                    {currentIndex + 1} / {activeGroupData.images.length}
                  </p>
                  <h4 className="text-2xl md:text-4xl font-serif font-bold text-white mb-3 leading-tight">
                    {activeGroupDict.images[activeGroupData.images[currentIndex].id.toString()]?.title}
                  </h4>
                  <p className="text-sm md:text-lg text-gray-300 font-light leading-relaxed max-w-2xl">
                    {activeGroupDict.images[activeGroupData.images[currentIndex].id.toString()]?.description}
                  </p>
                </div>
              </div>
            </div>

            <button 
              onClick={nextSlide}
              className="hidden md:flex absolute right-8 z-[110] text-white hover:text-[#87A96B] transition-colors w-14 h-14 items-center justify-center border border-white/10 rounded-full hover:bg-white/5 backdrop-blur-sm"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" /></svg>
            </button>

            <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-3 md:hidden z-[110]">
              {activeGroupData.images.map((_, i) => (
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
