import React, { useEffect, useState } from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-purple-50 to-pink-50 pt-16"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-10 left-1/3 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="container mx-auto px-4 text-center z-10">
        <div className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-purple-800">
            <span className="text-pink-600">Ulu Çınar</span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-medium mb-8 text-purple-600">
            Cinsellik ve İlişki Uzmanı
          </h2>
          
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-10 text-gray-700">
            "Hayatınızda sertleşen tek şey sorunlarınız olmasın"
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
            <a 
              href="#appointment" 
              className="bg-purple-600 text-white px-6 py-3 rounded-full hover:bg-purple-700 transition-all hover:scale-105 shadow-md"
            >
              Hemen Randevu Al
            </a>
            <a 
              href="#services" 
              className="bg-pink-500 text-white px-6 py-3 rounded-full hover:bg-pink-600 transition-all hover:scale-105 shadow-md"
            >
              Hizmetlerimiz
            </a>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
          <a href="#about" className="text-purple-600 hover:text-purple-800 transition-colors">
            <ArrowDown size={32} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;