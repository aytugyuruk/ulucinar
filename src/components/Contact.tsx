import React, { useState } from 'react';
import { Phone, Mail, MapPin, Calendar } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    isNewPatient: 'yes',
    concernType: 'individual'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send the data to a server
    alert('Teşekkürler! Mesajınız gönderildi. En kısa sürede size geri dönüş yapacağız.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
      isNewPatient: 'yes',
      concernType: 'individual'
    });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-800 mb-4">İletişim</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Sorularınız için bize ulaşın veya hemen randevu alın
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div>
            <div className="bg-purple-50 p-8 rounded-lg shadow-md mb-8">
              <h3 className="text-2xl font-bold text-purple-800 mb-6">İletişim Bilgileri</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-purple-600 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-purple-800">Telefon</h4>
                    <p className="text-gray-700">+90 (212) 555 66 77</p>
                    <p className="text-sm text-gray-500 mt-1">Pazartesi - Cuma: 09:00 - 18:00</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-purple-600 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-purple-800">E-posta</h4>
                    <p className="text-gray-700">dr.ulucinar@example.com</p>
                    <p className="text-sm text-gray-500 mt-1">7/24 e-postalarınıza yanıt veriyoruz</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-purple-600 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-purple-800">Adres</h4>
                    <p className="text-gray-700">Bağdat Caddesi No: 123</p>
                    <p className="text-gray-700">Kadıköy, İstanbul</p>
                    <p className="text-sm text-gray-500 mt-1">Metro ve otobüs duraklarına yakın</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Calendar className="h-6 w-6 text-purple-600 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-purple-800">Çalışma Saatleri</h4>
                    <p className="text-gray-700">Pazartesi - Cuma: 09:00 - 18:00</p>
                    <p className="text-gray-700">Cumartesi: 10:00 - 15:00</p>
                    <p className="text-sm text-gray-500 mt-1">Pazar günleri kapalıyız</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-pink-50 p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-pink-600 mb-4">Acil Durumlar İçin</h3>
              <p className="text-gray-700 mb-4">
                Acil durumlar için lütfen doğrudan telefonla ulaşın. Randevusuz hastalar için sınırlı zaman dilimlerimiz vardır.
              </p>
              <p className="text-lg font-medium text-pink-600">+90 (533) 444 55 66</p>
            </div>
          </div>
          
          {/* Contact Form */}
          <div>
            <div className="bg-white p-8 rounded-lg shadow-md border border-purple-100">
              <h3 className="text-2xl font-bold text-purple-800 mb-6" id="appointment">Randevu Talebi</h3>
              
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Adınız Soyadınız</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    required
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">E-posta Adresiniz</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    required
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Telefon Numaranız</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    required
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="isNewPatient" className="block text-gray-700 font-medium mb-2">İlk Randevu mu?</label>
                    <select
                      id="isNewPatient"
                      name="isNewPatient"
                      value={formData.isNewPatient}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    >
                      <option value="yes">Evet, ilk randevum</option>
                      <option value="no">Hayır, daha önce geldim</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="concernType" className="block text-gray-700 font-medium mb-2">Danışmanlık Türü</label>
                    <select
                      id="concernType"
                      name="concernType"
                      value={formData.concernType}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    >
                      <option value="individual">Bireysel Danışmanlık</option>
                      <option value="couple">Çift Danışmanlığı</option>
                      <option value="other">Diğer</option>
                    </select>
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Mesajınız (İsteğe Bağlı)</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Sorununuz hakkında kısa bir bilgi verebilirsiniz..."
                  />
                </div>
                
                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-purple-600 text-white px-8 py-3 rounded-full hover:bg-purple-700 transition-all hover:scale-105 shadow-md"
                  >
                    Randevu Talebi Gönder
                  </button>
                </div>
              </form>
              
              <p className="text-sm text-gray-500 mt-6 text-center">
                Gizliliğinize saygı duyuyoruz. Bilgileriniz kesinlikle gizli tutulacaktır.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;