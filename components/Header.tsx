'use client';

import { useState, useEffect } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-lg shadow-md py-4 text-[#2D5016]' 
        : 'bg-black/40 backdrop-blur-sm text-white py-6'
    }`}>
      <nav className="container-custom flex items-center justify-between">
        <a href="#inicio" className={`${isScrolled ? 'text-2xl font-bold text-[#2D5016]' : 'text-2xl font-bold text-white drop-shadow-lg'}`}>
          🌲 Sierra Negra
        </a>
        <ul className="hidden md:flex items-center gap-8">
          <li>
            <a href="#inicio" className={`${isScrolled ? 'text-[#2D5016] hover:text-[#4A7C2F] transition-colors font-medium text-[15px]' : 'text-white hover:text-gray-200 transition-colors font-medium text-[15px]'}`}>
              Inicio
            </a>
          </li>
          <li>
            <a href="#lugares" className={`${isScrolled ? 'text-[#2D5016] hover:text-[#4A7C2F] transition-colors font-medium text-[15px]' : 'text-white hover:text-gray-200 transition-colors font-medium text-[15px]'}`}>
              Lugares
            </a>
          </li>
          <li>
            <a href="#rutas" className={`${isScrolled ? 'text-[#2D5016] hover:text-[#4A7C2F] transition-colors font-medium text-[15px]' : 'text-white hover:text-gray-200 transition-colors font-medium text-[15px]'}`}>
              Rutas
            </a>
          </li>
          <li>
            <a href="#galeria" className={`${isScrolled ? 'text-[#2D5016] hover:text-[#4A7C2F] transition-colors font-medium text-[15px]' : 'text-white hover:text-gray-200 transition-colors font-medium text-[15px]'}`}>
              Galería
            </a>
          </li>
          <li>
            <a href="#video" className={`${isScrolled ? 'text-[#2D5016] hover:text-[#4A7C2F] transition-colors font-medium text-[15px]' : 'text-white hover:text-gray-200 transition-colors font-medium text-[15px]'}`}>
              Video
            </a>
          </li>
          <li>
            <a href="#sugerencias" className={`${isScrolled ? 'text-[#2D5016] hover:text-[#4A7C2F] transition-colors font-medium text-[15px]' : 'text-white hover:text-gray-200 transition-colors font-medium text-[15px]'}`}>
              Sugerencias
            </a>
          </li>
        </ul>
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`${isScrolled ? 'md:hidden p-2 text-[#2D5016] hover:bg-[#F5F1E8] rounded-lg transition-colors' : 'md:hidden p-2 text-white hover:bg-white/20 rounded-lg transition-colors'}`}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-[#E8DCC6]">
          <ul className="container-custom py-4 flex flex-col gap-4">
            <li>
              <a href="#inicio" className="text-[#2D5016] hover:text-[#4A7C2F] transition-colors font-medium block py-2">
                Inicio
              </a>
            </li>
            <li>
              <a href="#lugares" className="text-[#2D5016] hover:text-[#4A7C2F] transition-colors font-medium block py-2">
                Lugares
              </a>
            </li>
            <li>
              <a href="#rutas" className="text-[#2D5016] hover:text-[#4A7C2F] transition-colors font-medium block py-2">
                Rutas
              </a>
            </li>
            <li>
              <a href="#galeria" className="text-[#2D5016] hover:text-[#4A7C2F] transition-colors font-medium block py-2">
                Galería
              </a>
            </li>
            <li>
              <a href="#video" className="text-[#2D5016] hover:text-[#4A7C2F] transition-colors font-medium block py-2">
                Video
              </a>
            </li>
            <li>
              <a href="#sugerencias" className="text-[#2D5016] hover:text-[#4A7C2F] transition-colors font-medium block py-2">
                Sugerencias
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
