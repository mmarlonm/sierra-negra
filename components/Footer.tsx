export default function Footer() {
  return (
    <footer className="py-16 px-6 bg-gradient-to-b from-[#1A3009] via-[#2D5016] to-[#1A3009] text-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-3xl font-bold mb-5 flex items-center gap-2">
              <span>🌲</span>
              <span>Sierra Negra</span>
            </h3>
            <p className="text-white/80 leading-relaxed text-[15px]">
              Descubre la belleza natural de la Sierra Negra. 
              Una experiencia única en contacto con la naturaleza.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-5 text-white">Enlaces Rápidos</h4>
            <ul className="space-y-3 text-white/80">
              <li>
                <a href="#inicio" className="hover:text-white transition-colors text-[15px] flex items-center gap-2">
                  <span>→</span>
                  <span>Inicio</span>
                </a>
              </li>
              <li>
                <a href="#lugares" className="hover:text-white transition-colors text-[15px] flex items-center gap-2">
                  <span>→</span>
                  <span>Lugares</span>
                </a>
              </li>
              <li>
                <a href="#rutas" className="hover:text-white transition-colors text-[15px] flex items-center gap-2">
                  <span>→</span>
                  <span>Rutas</span>
                </a>
              </li>
              <li>
                <a href="#galeria" className="hover:text-white transition-colors text-[15px] flex items-center gap-2">
                  <span>→</span>
                  <span>Galería</span>
                </a>
              </li>
              <li>
                <a href="#video" className="hover:text-white transition-colors text-[15px] flex items-center gap-2">
                  <span>→</span>
                  <span>Video</span>
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-5 text-white">Contacto</h4>
            <ul className="space-y-3 text-white/80">
              <li className="flex items-center gap-3 text-[15px]">
                <span className="text-xl">📧</span>
                <span>info@sierranegra.com</span>
              </li>
              <li className="flex items-center gap-3 text-[15px]">
                <span className="text-xl">📱</span>
                <span>+52 123 456 7890</span>
              </li>
              <li className="flex items-center gap-3 text-[15px]">
                <span className="text-xl">📍</span>
                <span>Sierra Negra, México</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 text-center text-white/60">
          <p className="text-[15px]">&copy; 2024 Sierra Negra. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
