"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useCart } from './CartContext';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  let cart: any = null;
  try { cart = useCart(); } catch {}
  const ref = useRef<HTMLElement | null>(null);

  // Measure header height and set CSS variable so page content can offset correctly
  useEffect(() => {
    const setHeaderHeight = () => {
      try {
        const h = ref.current?.offsetHeight || 112;
        document.documentElement.style.setProperty('--header-height', `${h}px`);
      } catch (e) {}
    };
    setHeaderHeight();
    window.addEventListener('resize', setHeaderHeight);
    return () => window.removeEventListener('resize', setHeaderHeight);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header ref={ref} className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-lg shadow-md py-4 text-[#2D5016]' 
        : 'bg-black/40 backdrop-blur-sm text-white py-6'
    }`}>
      <nav className="container-custom flex items-center justify-between">
        <Link href="/#inicio" className={`${isScrolled ? 'text-2xl font-bold text-[#2D5016]' : 'text-2xl font-bold text-white drop-shadow-lg'}`}>
          🌲 Sierra Negra
        </Link>
        <ul className="hidden md:flex items-center gap-8">
          <li>
            <Link href="/#inicio" className={`${isScrolled ? 'text-[#2D5016] hover:text-[#4A7C2F] transition-colors font-medium text-[15px]' : 'text-white hover:text-gray-200 transition-colors font-medium text-[15px]'}`}>
              Inicio
            </Link>
          </li>
          <li>
            <Link href="/#lugares" className={`${isScrolled ? 'text-[#2D5016] hover:text-[#4A7C2F] transition-colors font-medium text-[15px]' : 'text-white hover:text-gray-200 transition-colors font-medium text-[15px]'}`}>
              Lugares
            </Link>
          </li>
          <li>
            <Link href="/#rutas" className={`${isScrolled ? 'text-[#2D5016] hover:text-[#4A7C2F] transition-colors font-medium text-[15px]' : 'text-white hover:text-gray-200 transition-colors font-medium text-[15px]'}`}>
              Rutas
            </Link>
          </li>
          <li>
            <Link href="/#galeria" className={`${isScrolled ? 'text-[#2D5016] hover:text-[#4A7C2F] transition-colors font-medium text-[15px]' : 'text-white hover:text-gray-200 transition-colors font-medium text-[15px]'}`}>
              Galería
            </Link>
          </li>
          <li>
            <Link href="/#video" className={`${isScrolled ? 'text-[#2D5016] hover:text-[#4A7C2F] transition-colors font-medium text-[15px]' : 'text-white hover:text-gray-200 transition-colors font-medium text-[15px]'}`}>
              Video
            </Link>
          </li>
          <li>
            <Link href="/#sugerencias" className={`${isScrolled ? 'text-[#2D5016] hover:text-[#4A7C2F] transition-colors font-medium text-[15px]' : 'text-white hover:text-gray-200 transition-colors font-medium text-[15px]'}`}>
              Sugerencias
            </Link>
          </li>
          <li>
            <Link href="/products" className={`${isScrolled ? 'text-[#2D5016] hover:text-[#4A7C2F] transition-colors font-medium text-[15px]' : 'text-white hover:text-gray-200 transition-colors font-medium text-[15px]'}`}>
              Tienda
            </Link>
          </li>
          <li>
            <Link href="/checkout" className="relative">
              <span className={`${isScrolled ? 'text-[#2D5016]' : 'text-white'} inline-flex items-center gap-2`}>🛒</span>
              {cart && cart.count > 0 && (
                <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs rounded-full px-2">{cart.count}</span>
              )}
            </Link>
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
              <Link href="/#inicio" className="text-[#2D5016] hover:text-[#4A7C2F] transition-colors font-medium block py-2">
                Inicio
              </Link>
            </li>
            <li>
              <Link href="/#lugares" className="text-[#2D5016] hover:text-[#4A7C2F] transition-colors font-medium block py-2">
                Lugares
              </Link>
            </li>
            <li>
              <Link href="/#rutas" className="text-[#2D5016] hover:text-[#4A7C2F] transition-colors font-medium block py-2">
                Rutas
              </Link>
            </li>
            <li>
              <Link href="/#galeria" className="text-[#2D5016] hover:text-[#4A7C2F] transition-colors font-medium block py-2">
                Galería
              </Link>
            </li>
            <li>
              <Link href="/#video" className="text-[#2D5016] hover:text-[#4A7C2F] transition-colors font-medium block py-2">
                Video
              </Link>
            </li>
            <li>
              <Link href="/#sugerencias" className="text-[#2D5016] hover:text-[#4A7C2F] transition-colors font-medium block py-2">
                Sugerencias
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
