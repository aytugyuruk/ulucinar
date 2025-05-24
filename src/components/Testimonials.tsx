import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  age: number;
  image: string;
  quote: string;
  rating: number;
}

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "A.K.",
      age: 42,
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      quote: "Dr. Çınar sayesinde artık 'ulu çınar' gibi dimdik ayaktayım. İlişkimiz yeniden canlandı ve eşimle tekrar gençlik günlerimize döndük!",
      rating: 5
    },
    {
      id: 2,
      name: "Ayşe ve Mehmet T.",
      age: 35,
      image: "https://images.pexels.com/photos/4609038/pexels-photo-4609038.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      quote: "Evlilik terapimiz sırasında Dr. Çınar'ın esprili yaklaşımı sayesinde konuşması zor konuları bile rahatça ele alabildik. Artık yatak odamızda gülüşler eksik olmuyor!",
      rating: 5
    },
    {
      id: 3,
      name: "Zeynep B.",
      age: 29,
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      quote: "Cinsel isteksizlik sorunuyla gittiğimde Dr. Çınar'ın 'Bazen ateşi yakmak için doğru çıraya ihtiyaç vardır' sözü beni çok etkiledi. Şimdi hayatımda yeni bir sayfa açıldı!",
      rating: 5
    },
    {
      id: 4,
      name: "Burak D.",
      age: 38,
      image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      quote: "Erken boşalma sorunum vardı ve utanarak gittim. Dr. Çınar 'Hayatta bazı şeyler için acele etmek iyidir, ama bu onlardan biri değil' dedi. 3 seansta sorunum çözüldü!",
      rating: 5
    },
    {
      id: 5,
      name: "Elif ve Can Y.",
      age: 31,
      image: "https://images.pexels.com/photos/3831312/pexels-photo-3831312.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      quote: "Evliliğimizin ilk yılında yaşadığımız uyumsuzluklar için gittiğimizde Dr. Çınar 'Dans etmeyi öğrenmek gibidir, başta birbirinizin ayağına basarsınız' demişti. Şimdi mükemmel bir uyumumuz var!",
      rating: 4
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-800 mb-4">Mutlu Hastalarımız</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Yaşamları değişen hastalarımızın hikayeleri
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Navigation Buttons */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-white rounded-full p-2 shadow-md z-10 hover:bg-purple-50 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6 text-purple-600" />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-white rounded-full p-2 shadow-md z-10 hover:bg-purple-50 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6 text-purple-600" />
          </button>
          
          {/* Testimonial Card */}
          <div className="bg-purple-50 rounded-xl p-6 md:p-10 shadow-lg">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden flex-shrink-0 border-4 border-white shadow-md">
                <img 
                  src={testimonials[currentIndex].image} 
                  alt={testimonials[currentIndex].name} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="flex-1">
                <div className="flex items-center mb-4">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                  {[...Array(5 - testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-gray-300" />
                  ))}
                </div>
                
                <blockquote className="text-xl md:text-2xl text-gray-700 italic mb-6">
                  "{testimonials[currentIndex].quote}"
                </blockquote>
                
                <div className="font-medium">
                  <span className="text-purple-800 font-bold">{testimonials[currentIndex].name}</span>
                  <span className="text-gray-500">, {testimonials[currentIndex].age} yaşında</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Pagination Dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full ${
                  currentIndex === index ? 'bg-purple-600' : 'bg-purple-200'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;