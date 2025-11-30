'use client';
import "./hero.css";

import { useEffect, useRef } from 'react';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const slides = [
  {
    id: 1,
    name: 'Sierra Negra',
    description: 'Un paraíso natural lleno de paisajes impresionantes y experiencias inolvidables.',
    image: '/sierra-negra/images/hero/crucero_2.jpeg',
    link: '#lugares'
  },
  {
    id: 2,
    name: 'El Tepeyac',
    description: 'Observa uno de los rios mas importantes de la sierra negra.',
    image: '/sierra-negra/images/hero/tepeyac.jpg',
    link: '#lugares'
  },
  {
    id: 3,
    name: 'Zoquitlan',
    description: 'Un lugar lleno de historia y tradiciones que te harán sentir parte de la cultura local.',
    image: '/sierra-negra/images/hero/zoquitlan.webp',
    link: '#lugares'
  },
  {
    id: 4,
    name: 'San Juan Cuautla',
    description: 'Camina entre árboles centenarios y descubre la magia de la naturaleza virgen.',
    image: '/sierra-negra/images/hero/san_juan_cuautla.jpg',
    link: '#rutas'
  },
  {
    id: 5,
    name: 'Cacaloc Zoquitlan',
    description: 'El punto más alto de la sierra. Una caminata desafiante con recompensas increíbles.',
    image: '/sierra-negra/images/hero/cacaloc_zoquitlan.jpg',
    link: '#rutas'
  },
  {
    id: 6,
    name: 'San Miguel Eloxochitlan',
    description: 'Un lugar de mucha naturaleza y paz, ideal para desconectarte del mundo y reconectar contigo mismo.',
    image: '/sierra-negra/images/hero/san_miguel_eloxochitlan.jpg',
    link: '#galeria'
  }
];

export default function Hero() {
  const slideRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const prevRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const slide = slideRef.current;
    const next = nextRef.current;
    const prev = prevRef.current;

    if (!slide || !next || !prev) return;

    const handleNext = () => {
      const items = slide.querySelectorAll('.item');
      if (items.length > 0) {
        slide.appendChild(items[0]);
      }
    };

    const handlePrev = () => {
      const items = slide.querySelectorAll('.item');
      if (items.length > 0) {
        slide.prepend(items[items.length - 1]);
      }
    };

    next.addEventListener('click', handleNext);
    prev.addEventListener('click', handlePrev);

    const delegatedClick = (e: Event) => {
      const target = (e.target as HTMLElement).closest('.item');
      if (!target) return;

      const all = Array.from(slide.querySelectorAll('.item'));
      const index = all.indexOf(target);

      if (index > 1) {
        handleNext();
      }
    };

    slide.addEventListener('click', delegatedClick);

    return () => {
      next.removeEventListener('click', handleNext);
      prev.removeEventListener('click', handlePrev);
      slide.removeEventListener('click', delegatedClick);
    };
  }, []);

  return (
    <section id="inicio" className="relative w-full h-screen overflow-hidden bg-black">
      <div className="slider-container w-full h-full">
        <div className="container-slider">
          <div className="slide" ref={slideRef}>
            {slides.map((slide) => (
              <div 
                key={slide.id} 
                className="item"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="item-overlay"></div>
                <div className="content">
                  <div className="name">{slide.name}</div>
                  <div className="des">{slide.description}</div>
                  <a href={slide.link} className="btn-slide">
                    Explorar
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="button">
            <button className="prev" ref={prevRef}>
              <FaArrowLeft />
            </button>

            <div className="scroll-indicator">
              <div className="scroll-mouse">
                <div className="scroll-wheel"></div>
              </div>
            </div>

            <button className="next" ref={nextRef}>
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
