'use client';

import { useState } from 'react';
import Image from 'next/image';

const galleryImages = [
  { 
    id: 1, 
    title: 'Crucero', 
    image: '/images/gallery/crucero.jpeg',
    description: 'Paisaje del crucero en la Sierra Negra'
  },
  { 
    id: 2, 
    title: 'Crucero 2', 
    image: '/images/gallery/crucero_2.jpeg',
    description: 'Vista panorámica del crucero'
  },
  { 
    id: 3, 
    title: 'Crucero 3', 
    image: '/images/gallery/crucero_3.jpeg',
    description: 'Naturaleza del crucero'
  },
  { 
    id: 4, 
    title: 'El Tepeyac', 
    image: '/images/gallery/tepeyac.jpg',
    description: 'Uno de los ríos más importantes de la Sierra Negra'
  },
  { 
    id: 5, 
    title: 'Zoquitlan', 
    image: '/images/gallery/zoquitlan.webp',
    description: 'Lugar lleno de historia y tradiciones'
  },
  { 
    id: 6, 
    title: 'San Juan Cuautla', 
    image: '/images/gallery/san_juan_cuautla.jpg',
    description: 'Naturaleza virgen y paisajes impresionantes'
  },
  { 
    id: 7, 
    title: 'Cacaloc Zoquitlan', 
    image: '/images/gallery/cacaloc_zoquitlan.jpg',
    description: 'Punto más alto de la sierra con vistas increíbles'
  },
  { 
    id: 8, 
    title: 'San Miguel Eloxochitlan', 
    image: '/images/gallery/san_miguel_eloxochitlan.jpg',
    description: 'Lugar de mucha naturaleza y paz'
  }
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <section id="galeria" className="section bg-gradient-to-b from-[#F5F1E8] to-white">
      <div className="container-custom">
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="text-5xl">📸</span>
          </div>
          <h2 className="heading-medium mb-6">
            <span className="text-gradient">Galería de Paisajes</span>
          </h2>
          <p className="text-xl text-[#4A4A4A] max-w-2xl mx-auto leading-relaxed">
            Captura la belleza de la Sierra Negra a través de estas imágenes
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              onClick={() => setSelectedImage(image.id)}
              className="card-modern cursor-pointer group overflow-hidden"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={image.image}
                  alt={image.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-white font-semibold text-lg">{image.title}</h3>
                  <p className="text-white/90 text-sm mt-1">{image.description}</p>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-[#1A1A1A] text-center group-hover:text-[#2D5016] transition-colors">
                  {image.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
        
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div 
              className="card-modern p-4 max-w-6xl w-full max-h-[95vh] overflow-y-auto" 
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-video w-full mb-6 rounded-2xl overflow-hidden">
                <Image
                  src={galleryImages.find(img => img.id === selectedImage)?.image || ''}
                  alt={galleryImages.find(img => img.id === selectedImage)?.title || ''}
                  fill
                  className="object-contain"
                  sizes="100vw"
                />
              </div>
              <div className="text-center mb-6">
                <h3 className="text-3xl font-bold text-[#1A1A1A] mb-2">
                  {galleryImages.find(img => img.id === selectedImage)?.title}
                </h3>
                <p className="text-[#4A4A4A] text-lg">
                  {galleryImages.find(img => img.id === selectedImage)?.description}
                </p>
              </div>
              <button 
                onClick={() => setSelectedImage(null)}
                className="btn-primary w-full justify-center"
              >
                <span>Cerrar</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
