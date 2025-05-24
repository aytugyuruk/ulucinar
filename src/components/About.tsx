import React from 'react';
import { Award, Heart, Users, ThumbsUp } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-800 mb-4">Hakkımda</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Cinselliğinizi iyileştirmenin köklerine iniyoruz
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8 items-center mb-16">
          <div className="md:w-1/2">
            <img 
              src="/images/foto.jpg" 
              alt="Ulu Çınar" 
              className="w-full h-auto rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300"
            />
          </div>
          
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold text-purple-700 mb-4">Ulu Çınar'ın Hikayesi</h3>
            <p className="text-gray-700 mb-6">
              Merhaba, ben Ulu Çınar. İnsanların en hassas ve özel sorunlarında yardım eli uzatan bir cinsellik uzmanıyım. 
              15 yıllık tecrübemle, ilişkileri yeniden canlandırmak ve sağlıklı bir cinsel yaşamın kapılarını açmak için buradayım.
            </p>
            <p className="text-gray-700 mb-6">
              Adım gibi, köklerim derindir ve hastalarımın sorunlarına kalıcı çözümler sunarım. 
              "Ulu Çınar" lakabımı, yıllarca ayakta kalabilen ve birçok fırtınaya göğüs gerebilen profesyonel yaklaşımımdan aldım.
            </p>
            <p className="text-gray-700 mb-6">
              İlişkilerde ve cinsellikte yaşanan sorunların, genellikle konuşulmaktan kaçınıldığını biliyorum. 
              Kliniğimde, her türlü sorunu mizah ve anlayışla ele alarak, hastaların kendilerini rahat hissetmelerini sağlıyorum.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center">
                <Award className="text-purple-600 mr-2" />
                <span className="text-gray-700">15+ Yıl Tecrübe</span>
              </div>
              <div className="flex items-center">
                <Heart className="text-pink-500 mr-2" />
                <span className="text-gray-700">5000+ Mutlu Çift</span>
              </div>
              <div className="flex items-center">
                <Users className="text-blue-500 mr-2" />
                <span className="text-gray-700">Özel Danışmanlık</span>
              </div>
              <div className="flex items-center">
                <ThumbsUp className="text-green-500 mr-2" />
                <span className="text-gray-700">%98 Başarı Oranı</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-purple-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold text-purple-700 mb-3">Eğitim</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Hamidiye Tıp Fakültesi, Tıp Doktoru</li>
              <li>• Cinsel Sağlık Enstitüsü, Uzmanlık</li>
              <li>• Harvard Üniversitesi, İleri Cinsel Terapi</li>
              <li>• Avrupa Cinsel Tıp Akademisi, Sertifika</li>
            </ul>
          </div>
          
          <div className="bg-pink-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold text-pink-600 mb-3">Uzmanlık Alanları</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Cinsel İşlev Bozuklukları</li>
              <li>• Çift Terapisi ve İlişki Sorunları</li>
              <li>• Cinsel Eğitim ve Danışmanlık</li>
              <li>• Erektil Disfonksiyon Tedavisi</li>
              <li>• Cinsel İstek Bozuklukları</li>
            </ul>
          </div>
          
          <div className="bg-blue-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold text-blue-600 mb-3">Yaklaşımım</h3>
            <p className="text-gray-700">
              Tedavide mizahı bir araç olarak kullanırım. Çünkü gülümsemenin iyileştirici gücüne inanıyorum. 
              Hassas konuları ele alırken bile, hastaların rahat hissetmesini sağlayan samimi bir ortam yaratıyorum.
              Her hastaya özel çözümler üretir, bilimsel yaklaşımlarla mizahı harmanlayarak unutulmaz bir tedavi deneyimi sunarım.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;