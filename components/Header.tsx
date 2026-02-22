"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useCart } from './CartContext';

interface HeaderProps {
  lang: 'es' | 'en';
  dict: {
    title: string;
    links: {
      inicio: string;
      lugares: string;
      rutas: string;
      galeria: string;
      video: string;
      sugerencias: string;
      tienda: string;
      carrito: string;
    };
  };
}

export default function Header({ lang, dict }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const cart = useCart();
  const pathname = usePathname();
  const router = useRouter();
  
  useEffect(() => {
    const frame = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(frame);
  }, []);
  
  // Safe toggle
  const handleCartClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (cart && cart.toggleCart) cart.toggleCart();
  };

  const ref = useRef<HTMLElement | null>(null);

  // Measure header height and set CSS variable so page content can offset correctly
  useEffect(() => {
    const setHeaderHeight = () => {
      try {
        const h = ref.current?.offsetHeight || 112;
        document.documentElement.style.setProperty('--header-height', `${h}px`);
      } catch {}
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

  const toggleLanguage = () => {
    const newLang = lang === 'es' ? 'en' : 'es';
    // usePathname() already excludes the basePath (/sierra-negra)
    // path without lang part (e.g. /es/products -> /products)
    const pathWithoutLang = pathname.replace(/^\/(es|en)/, '');
    router.push(`/${newLang}${pathWithoutLang}`);
  };

  return (
    <header ref={ref} className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-lg shadow-md py-4 text-[#2D5016]' 
        : 'bg-black/40 backdrop-blur-sm text-white py-6'
    }`}>
      <nav className="container-custom flex items-center justify-between">
        <Link href={`/${lang}/#inicio`} className={`${isScrolled ? 'text-2xl font-bold text-[#2D5016]' : 'text-2xl font-bold text-white drop-shadow-lg'}`}>
          🌲 {dict.title}
        </Link>
        <ul className="hidden md:flex items-center gap-8">
          <li>
            <Link href={`/${lang}/#inicio`} className={`${isScrolled ? 'text-[#2D5016] hover:text-[#4A7C2F] transition-colors font-medium text-[15px]' : 'text-white hover:text-gray-200 transition-colors font-medium text-[15px]'}`}>
              {dict.links.inicio}
            </Link>
          </li>
          <li>
            <Link href={`/${lang}/#lugares`} className={`${isScrolled ? 'text-[#2D5016] hover:text-[#4A7C2F] transition-colors font-medium text-[15px]' : 'text-white hover:text-gray-200 transition-colors font-medium text-[15px]'}`}>
              {dict.links.lugares}
            </Link>
          </li>
          <li>
            <Link href={`/${lang}/#rutas`} className={`${isScrolled ? 'text-[#2D5016] hover:text-[#4A7C2F] transition-colors font-medium text-[15px]' : 'text-white hover:text-gray-200 transition-colors font-medium text-[15px]'}`}>
              {dict.links.rutas}
            </Link>
          </li>
          <li>
            <Link href={`/${lang}/#galeria`} className={`${isScrolled ? 'text-[#2D5016] hover:text-[#4A7C2F] transition-colors font-medium text-[15px]' : 'text-white hover:text-gray-200 transition-colors font-medium text-[15px]'}`}>
              {dict.links.galeria}
            </Link>
          </li>
          <li>
            <Link href={`/${lang}/#video`} className={`${isScrolled ? 'text-[#2D5016] hover:text-[#4A7C2F] transition-colors font-medium text-[15px]' : 'text-white hover:text-gray-200 transition-colors font-medium text-[15px]'}`}>
              {dict.links.video}
            </Link>
          </li>
          <li>
            <Link href={`/${lang}/#sugerencias`} className={`${isScrolled ? 'text-[#2D5016] hover:text-[#4A7C2F] transition-colors font-medium text-[15px]' : 'text-white hover:text-gray-200 transition-colors font-medium text-[15px]'}`}>
              {dict.links.sugerencias}
            </Link>
          </li>
          <li>
            <Link href={`/${lang}/products`} className={`${isScrolled ? 'text-[#2D5016] hover:text-[#4A7C2F] transition-colors font-medium text-[15px]' : 'text-white hover:text-gray-200 transition-colors font-medium text-[15px]'}`}>
              {dict.links.tienda}
            </Link>
          </li>
          <li className="flex items-center gap-4">
            <button 
              onClick={toggleLanguage}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-full border transition-all duration-300 ${
                isScrolled 
                  ? 'border-[#2D5016]/20 text-[#2D5016] hover:bg-[#2D5016] hover:text-white' 
                  : 'border-white/20 text-white hover:bg-white hover:text-black'
              } text-[11px] font-bold tracking-wider group/lang`}
              title={lang === 'es' ? 'Switch to English' : 'Cambiar a Español'}
            >
              <svg 
                className={`w-3.5 h-3.5 transition-transform duration-500 group-hover/lang:rotate-[360deg] ${isScrolled ? 'text-[#2D5016]' : 'text-white group-hover/lang:text-black'}`} 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
              <span>{lang === 'es' ? 'EN' : 'ES'}</span>
            </button>
            <button onClick={handleCartClick} className="relative group/cart transition-transform hover:scale-110 active:scale-95">
              <svg 
                className={`w-6 h-6 ${isScrolled ? 'text-[#2D5016]' : 'text-white'}`} 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              {mounted && cart && cart.count > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center shadow-lg border-2 border-white animate-bounce-short">
                  {cart.count}
                </span>
              )}
            </button>
          </li>
        </ul>
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`${isScrolled ? 'md:hidden p-2 text-[#2D5016] hover:bg-[#F5F1E8] rounded-full transition-colors' : 'md:hidden p-2 text-white hover:bg-white/20 rounded-full transition-colors'}`}
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
              <Link href={`/${lang}/#inicio`} className="text-[#2D5016] hover:text-[#4A7C2F] transition-colors font-medium block py-2">
                {dict.links.inicio}
              </Link>
            </li>
            <li>
              <Link href={`/${lang}/#lugares`} className="text-[#2D5016] hover:text-[#4A7C2F] transition-colors font-medium block py-2">
                {dict.links.lugares}
              </Link>
            </li>
            <li>
              <Link href={`/${lang}/#rutas`} className="text-[#2D5016] hover:text-[#4A7C2F] transition-colors font-medium block py-2">
                {dict.links.rutas}
              </Link>
            </li>
            <li>
              <Link href={`/${lang}/#galeria`} className="text-[#2D5016] hover:text-[#4A7C2F] transition-colors font-medium block py-2">
                {dict.links.galeria}
              </Link>
            </li>
            <li>
              <Link href={`/${lang}/#video`} className="text-[#2D5016] hover:text-[#4A7C2F] transition-colors font-medium block py-2">
                {dict.links.video}
              </Link>
            </li>
            <li>
              <Link href={`/${lang}/#sugerencias`} className="text-[#2D5016] hover:text-[#4A7C2F] transition-colors font-medium block py-2">
                {dict.links.sugerencias}
              </Link>
            </li>
            <li>
              <Link href={`/${lang}/products`} className="text-[#2D5016] hover:text-[#4A7C2F] transition-colors font-medium block py-2">
                {dict.links.tienda}
              </Link>
            </li>
            <li className="flex flex-col gap-4 py-4 border-t border-gray-100">
              <div className="flex items-center justify-between">
                <button 
                  onClick={toggleLanguage}
                  className="flex items-center gap-2 text-[#2D5016] font-bold border border-[#2D5016]/20 bg-gray-50 px-4 py-2 rounded-full text-xs transition-all active:scale-95 shadow-sm"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                  {lang === 'es' ? 'English' : 'Español'}
                </button>
                <button onClick={(e) => { handleCartClick(e); setIsMobileMenuOpen(false); }} className="relative text-[#2D5016] font-bold flex items-center gap-3 bg-gray-50 px-4 py-2 rounded-full text-xs border border-[#2D5016]/20 shadow-sm active:scale-95">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <span>{dict.links.carrito}</span>
                  {mounted && cart && cart.count > 0 && (
                    <span className="bg-red-500 text-white text-[10px] rounded-full h-4 w-4 flex items-center justify-center -ml-1 border border-white shadow-sm">{cart.count}</span>
                  )}
                </button>
              </div>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
