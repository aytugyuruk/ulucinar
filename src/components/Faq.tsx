import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

const Faq: React.FC = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (id: number) => {
    setOpenItems(prevOpenItems => 
      prevOpenItems.includes(id) 
        ? prevOpenItems.filter(item => item !== id) 
        : [...prevOpenItems, id]
    );
  };

  const faqItems: FaqItem[] = [
    {
      id: 1,
      question: "Cinsel sorunlar için randevu almaya utanıyorum. Gizlilik konusunda nasıl bir politikanız var?",
      answer: "Endişelenmenize gerek yok! Kliniğimizde gizlilik en üst düzeyde tutulmaktadır. Tüm görüşmeler tamamen mahrem ve gizlidir. Hasta bilgileri sadece profesyonel ekibimiz tarafından görülebilir. Hatta bekleme odamız bile özel olarak tasarlanmıştır ki diğer hastalarla karşılaşma olasılığınız minimum olsun. Kapıdan girerken kendi kendinize uyduracağınız bir hikaye için hazırlık yapmanıza gerek yok!"
    },
    {
      id: 2,
      question: "Erektil disfonksiyon tedavisi ne kadar sürer?",
      answer: "Erektil disfonksiyon tedavisinin süresi, sorununuzun altında yatan nedenlere bağlı olarak değişir. Bazı hastalar birkaç seansta sonuç alırken, bazıları için daha uzun bir süreç gerekebilir. Genellikle 4-8 seans sonrasında önemli iyileşmeler gözlemlenir. Tedavi sürecinde sabırlı olmak önemlidir - Roma bir günde inşa edilmedi, sizin 'kuleniz' de öyle! Ama merak etmeyin, Dr. Ulu Çınar olarak hedefimiz sizi en kısa sürede eski gücünüze kavuşturmaktır."
    },
    {
      id: 3,
      question: "Eşimle birlikte mi gelmeliyiz yoksa tek başıma mı?",
      answer: "Bu tamamen sorunun doğasına ve sizin tercihinize bağlıdır. Bazı durumlarda önce tek bir görüşme yapıp sonra eşinizle birlikte devam etmek faydalı olabilir. Çift terapisi için elbette ikinizin de katılımı gereklidir. Ancak eşiniz gelmek istemiyorsa endişelenmeyin, tek başınıza da harikalar yaratabilirsiniz! Dr. Çınar olarak mizahi yaklaşımımla eşinizi de sürece dahil etmek için size ipuçları verebilirim. Nihayetinde bu yolculukta yalnız olmadığınızı bilmenizi isterim."
    },
    {
      id: 4,
      question: "Cinsel istek azlığı için doğal çözümler var mı?",
      answer: "Elbette! Cinsel istek azlığı için beslenme düzeni, egzersiz, stres yönetimi ve yaşam tarzı değişiklikleri gibi doğal yaklaşımlar öneriyorum. Bazı bitkisel takviyeler de yardımcı olabilir. Ancak unutmayın, isteğin en büyük düşmanı stres ve yorgunluktur. Bazen ihtiyacınız olan tek şey iyi bir tatil veya sadece bir gecelik iyi bir uyku olabilir! Her danışanım için kişiselleştirilmiş öneriler sunuyorum - çünkü her çınar aynı toprakta büyümez."
    },
    {
      id: 5,
      question: "Cinsel terapiler sağlık sigortası kapsamında mıdır?",
      answer: "Sağlık sigortaları genellikle teşhis edilmiş cinsel işlev bozuklukları için belirli sayıda terapi seansını karşılar. Ancak her sigorta şirketinin politikası farklı olduğundan, tedavi öncesinde sigorta şirketinizle görüşmenizi öneririm. Kliniğimiz, sigorta işlemlerinizde size yardımcı olacaktır. Ve eğer sigortanız karşılamıyorsa bile, düşünün ki bu aslında hayatınızın en değerli yatırımı olabilir - ne de olsa, mutlu bir yatak odası için yapılan harcama, sonra boşanma avukatına ödenecek paradan çok daha azdır!"
    },
    {
      id: 6,
      question: "Dr. Çınar'ın tedavi yaklaşımı neden bu kadar eğlenceli?",
      answer: "Cinsellik, insan hayatının en doğal ve keyifli yanlarından biri olmalıdır. Ancak sorunlar ortaya çıktığında, utanç ve endişe de beraberinde gelir. Ben tedavilerimde mizahı bir araç olarak kullanıyorum çünkü gülmek en iyi ilaçtır! Mizah, gerginliği azaltır, açık iletişimi teşvik eder ve tedavi sürecini daha katlanılabilir hale getirir. 'Ulu Çınar' olarak, köklerimiz derinlerde olsa da, dallarımız güneşe ve neşeye uzanır. Tedavi odamdan genellikle kahkahalar yükselir - çünkü cinsel sorunlarınızı çözerken bile hayattan keyif almanız gerektiğine inanıyorum!"
    }
  ];

  return (
    <section id="faq" className="py-20 bg-gradient-to-b from-pink-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-800 mb-4">Sıkça Sorulan Sorular</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Merak ettiğiniz her şeye cevap bulun
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {faqItems.map((item) => (
            <div 
              key={item.id} 
              className="mb-4 border border-purple-200 rounded-lg overflow-hidden"
            >
              <button
                className="w-full flex justify-between items-center p-4 md:p-6 text-left bg-white hover:bg-purple-50 transition-colors"
                onClick={() => toggleItem(item.id)}
                aria-expanded={openItems.includes(item.id)}
              >
                <span className="font-medium text-lg text-purple-800">{item.question}</span>
                {openItems.includes(item.id) ? (
                  <ChevronUp className="h-5 w-5 text-purple-600 flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-purple-600 flex-shrink-0" />
                )}
              </button>
              
              {openItems.includes(item.id) && (
                <div className="p-4 md:p-6 bg-white border-t border-purple-100">
                  <p className="text-gray-700">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-700 mb-4">Başka sorularınız mı var?</p>
          <a 
            href="#contact" 
            className="inline-block bg-purple-600 text-white px-6 py-3 rounded-full hover:bg-purple-700 transition-all hover:scale-105 shadow-md"
          >
            Bize Ulaşın
          </a>
        </div>
      </div>
    </section>
  );
};

export default Faq;