import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Faq from './components/Faq';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './utils/animations.css';

function App() {
  React.useEffect(() => {
    document.title = "Ulu Çınar - Cinsellik Uzmanı";
  }, []);

  return (
    <div className="font-sans antialiased">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Testimonials />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;