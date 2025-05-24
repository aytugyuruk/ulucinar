import React, { useState } from 'react';
import { Activity, Heart, Users, Brain, Clock, ZoomIn } from 'lucide-react';

interface Service {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  funnyQuote: string;
}

const Services: React.FC = () => {
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  const services: Service[] = [
    {
      id: 1,
      icon: <Activity className="h-12 w-12 text-purple-600" />,
      title: "Erektil Disfonksiyon Tedavisi",
      description: "Erektil disfonksiyon için kişiselleştirilmiş tedavi planları ve modern yaklaşımlar sunuyoruz.",
      funnyQuote: "Hayatta bazı şeyler yukarı kalkmalı, moraliniz değil!"
    },
    {
      id: 2,
      icon: <Heart className="h-12 w-12 text-pink-500" />,
      title: "Çift Terapisi",
      description: "İlişkinizi güçlendirmek ve yakınlığı artırmak için profesyonel çift terapisi hizmetimiz.",
      funnyQuote: "Sizi yatak odasında değil, hayatın her alanında birleştiriyoruz."
    },
    {
      id: 3,
      icon: <Users className="h-12 w-12 text-blue-500" />,
      title: "Cinsel Danışmanlık",
      description: "Cinsel yaşamınızla ilgili her türlü sorunuza özel ve profesyonel danışmanlık.",
      funnyQuote: "Sorunuzu sormaktan çekinmeyin, biz her şeyi duyduk!"
    },
    {
      id: 4,
      icon: <Brain className="h-12 w-12 text-indigo-500" />,
      title: "Cinsel Eğitim",
      description: "Bireyler ve çiftler için özel olarak tasarlanmış cinsel eğitim programları.",
      funnyQuote: "İyi bir cinsel yaşam için pratikten önce teori şart!"
    },
    {
      id: 5,
      icon: <Clock className="h-12 w-12 text-orange-500" />,
      title: "Erken Boşalma Tedavisi",
      description: "Erken boşalma sorunları için etkili ve kanıtlanmış tedavi yöntemleri.",
      funnyQuote: "Yavaşlamak her zaman iyidir, trafikte değil yatak odasında!"
    },
    {
      id: 6,
      icon: <ZoomIn className="h-12 w-12 text-green-500" />,
      title: "Cinsel İstek Bozuklukları",
      description: "Düşük libido ve cinsel istek bozuklukları için bütünsel tedavi yaklaşımları.",
      funnyQuote: "Ateşinizi yeniden yakalayın, hem de yangın alarmı çalmadan!"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-purple-50 to-pink-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-800 mb-4">Hizmetlerimiz</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Cinsel sağlığınız için sunduğumuz özel hizmetler
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-purple-800 mb-3">{service.title}</h3>
              <p className="text-gray-700 mb-4">{service.description}</p>
              
              <div 
                className={`bg-purple-100 p-3 rounded-lg italic text-purple-700 transition-all duration-300 ${
                  hoveredService === service.id ? 'opacity-100 max-h-24' : 'opacity-0 max-h-0 overflow-hidden'
                }`}
              >
                "{service.funnyQuote}"
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="#appointment" 
            className="inline-block bg-purple-600 text-white px-6 py-3 rounded-full hover:bg-purple-700 transition-all hover:scale-105 shadow-md"
          >
            Randevu Al
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;