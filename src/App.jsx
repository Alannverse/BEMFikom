import React, { useEffect } from 'react';
import HeroSection from './components/Header/HeroSection';
import Sejarah from './components/Sections/Sejarah';
import VisiMisi from './components/Sections/VisiMisi';
import Programs from './components/Sections/Programs';
import Gallery from './components/Sections/Gallery';
import KSB from './components/Sections/KSB';
import Coordinators from './components/Sections/Coordinators';
import Contact from './components/Sections/Contact';
import ComingSoon from './components/UI/ComingSoon';
import BackToTop from './components/UI/BackToTop';
import PhotoGallery from './components/Sections/PhotoGallery';

export default function App() {
  useEffect(() => {
    import('aos').then((AOS) => {
      AOS.init({
        duration: 1000,
        once: true,
        easing: 'ease-in-out',
      });
    });
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 relative overflow-hidden">
     
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-slate-900 to-purple-950"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-600/20 via-transparent to-transparent"></div>
      
     
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-700"></div>
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="relative z-10">
        
        <HeroSection />
         <ComingSoon /> 
        <Sejarah />
        <VisiMisi />
        <PhotoGallery />
        <Programs />
        <Gallery />
        <KSB />
        <Coordinators />
        <Contact />
        
       

       
        <footer 
          className="relative py-12 px-6 text-center border-t border-white/10"
          data-aos="fade-up"
        >
          <div className="max-w-4xl mx-auto">
            <p className="text-blue-200/80 mb-2">© 2025 BEM FIKOM UKI Paulus Makassar. All rights reserved.</p>
            <p className="text-blue-300/60 text-sm">Menyuarakan Aspirasi, Mewujudkan Inovasi</p>
          </div>
        </footer>

       
        <BackToTop />  
      </div>
    </div>
  );
}