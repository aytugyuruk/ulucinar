import React from 'react';
import { Instagram, Facebook, Twitter, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-purple-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center mb-6 md:mb-0">
            {/* Logo veya başlık buraya eklenebilir */}
          </div>
          
          <div className="flex space-x-6">
            <a href="#" className="hover:text-pink-400 transition-colors">
              <Instagram size={24} />
            </a>
            <a href="#" className="hover:text-pink-400 transition-colors">
              <Facebook size={24} />
            </a>
            <a href="#" className="hover:text-pink-400 transition-colors">
              <Twitter size={24} />
            </a>
            <a href="#" className="hover:text-pink-400 transition-colors">
              <Linkedin size={24} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-purple-700 pt-8 pb-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4 text-pink-300">Hakkımızda</h3>
              <p className="text-purple-200 text-sm">
                Ulu Çınar, uzun yıllara dayanan tecrübesi ile cinsel sağlık ve ilişki sorunlarında uzmanlaşmış bir doktordur. 
                İstanbul'da bulunan kliniğinde hastalara kaliteli ve eğlenceli bir tedavi deneyimi sunmaktadır.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4 text-pink-300">Hızlı Bağlantılar</h3>
              <ul className="space-y-2 text-purple-200 text-sm">
                <li><a href="#home" className="hover:text-white transition-colors">Ana Sayfa</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">Hakkımda</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Hizmetler</a></li>
                <li><a href="#testimonials" className="hover:text-white transition-colors">Yorumlar</a></li>
                <li><a href="#faq" className="hover:text-white transition-colors">SSS</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">İletişim</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4 text-pink-300">Hizmetlerimiz</h3>
              <ul className="space-y-2 text-purple-200 text-sm">
                <li><a href="#services" className="hover:text-white transition-colors">Cinsel Danışmanlık</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Çift Terapisi</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Erektil Disfonksiyon</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Erken Boşalma</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Cinsel İstek Sorunları</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4 text-pink-300">İletişim</h3>
              <address className="not-italic text-purple-200 text-sm space-y-2">
                <p>Bağdat Caddesi No: 123</p>
                <p>Kadıköy, İstanbul</p>
                <p>Telefon: +90 (212) 555 66 77</p>
                <p>E-posta: dr.ulucinar@example.com</p>
              </address>
            </div>
          </div>
        </div>
        
        <div className="border-t border-purple-700 mt-8 pt-8 text-center">
          <p className="text-purple-300 text-sm">
            &copy; {currentYear} Ulu Çınar. Tüm hakları saklıdır. | 
            <span className="text-pink-400"> "Hayatta sertleşen tek şey sorunlarınız olmasın"</span>
          </p>
          <p className="text-purple-400 text-xs mt-2">
            Not: Bu web sitesi yalnızca eğlence amaçlıdır. Gerçek tıbbi tavsiye için lütfen bir doktora danışın.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;