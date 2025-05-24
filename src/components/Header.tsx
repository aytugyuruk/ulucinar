import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          {/* Logo veya başlık buraya eklenebilir */}
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#home" className="text-purple-800 hover:text-pink-500 transition-colors">Ana Sayfa</a>
          <a href="#about" className="text-purple-800 hover:text-pink-500 transition-colors">Hakkımda</a>
          <a href="#services" className="text-purple-800 hover:text-pink-500 transition-colors">Hizmetler</a>
          <a href="#testimonials" className="text-purple-800 hover:text-pink-500 transition-colors">Yorumlar</a>
          <a href="#faq" className="text-purple-800 hover:text-pink-500 transition-colors">SSS</a>
          <a href="#contact" className="text-purple-800 hover:text-pink-500 transition-colors">İletişim</a>
          <a 
            href="#appointment" 
            className="bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-700 transition-colors"
          >
            Randevu Al
          </a>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-purple-800"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0 py-4">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            <a 
              href="#home" 
              className="text-purple-800 hover:text-pink-500 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Ana Sayfa
            </a>
            <a 
              href="#about" 
              className="text-purple-800 hover:text-pink-500 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Hakkımda
            </a>
            <a 
              href="#services" 
              className="text-purple-800 hover:text-pink-500 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Hizmetler
            </a>
            <a 
              href="#testimonials" 
              className="text-purple-800 hover:text-pink-500 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Yorumlar
            </a>
            <a 
              href="#faq" 
              className="text-purple-800 hover:text-pink-500 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              SSS
            </a>
            <a 
              href="#contact" 
              className="text-purple-800 hover:text-pink-500 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              İletişim
            </a>
            <a 
              href="#appointment" 
              className="bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-700 transition-colors text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Randevu Al
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;