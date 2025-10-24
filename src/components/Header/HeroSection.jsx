import React from 'react';
import { Sparkles, ArrowDown, ArrowRight, Users, Target, Rocket } from 'lucide-react';

const HeroSection = () => {
  return (
    <header className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl mx-auto text-center">
        
        <div 
          className="relative w-48 h-48 mx-auto mb-8 group"
          data-aos="zoom-in"
          data-aos-duration="800"
        >
          <div className="w-full h-full bg-white/10 backdrop-blur-2xl rounded-3xl p-7 border border-white/20 shadow-2xl shadow-blue-500/20 transition-all duration-500 group-hover:scale-105 group-hover:border-blue-400/30">
            <img 
              src="/logo bem.jpg" 
              alt="Logo BEM FIKOM" 
              className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
            />
          </div>
        </div>

       
        <div 
          className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm px-5 py-3 rounded-full border border-blue-400/30 mb-8 group hover:scale-105 transition-all duration-300"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <Sparkles className="w-4 h-4 text-cyan-400 group-hover:animate-pulse" />
          <span className="text-cyan-200 text-sm font-medium">Pengurus 2025/2026</span>
        </div>
        
       
        <h1 
          className="text-5xl md:text-7xl font-black text-white mb-6"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent animate-gradient bg-200%">
            BEM FIKOM
          </span>
        </h1>
        
       
        <div 
          className="space-y-3 mb-8"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <h2 className="text-xl md:text-2xl text-white/90 font-semibold">
            Fakultas Informatika dan Komputer
          </h2>
          <p className="text-blue-200/80 text-lg">
            Universitas Kristen Indonesia Paulus Makassar
          </p>
        </div>
        
        
        <div 
          className="mb-12"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <button className="group relative bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 rounded-2xl text-white font-semibold shadow-2xl shadow-blue-500/30 hover:shadow-purple-500/50 transition-all duration-500 hover:scale-105">
            <span className="flex items-center gap-3">
              Jelajahi Selengkapnya
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
          </button>
        </div>

        
        <div 
          className="grid grid-cols-3 gap-6 max-w-md mx-auto mb-12"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          {[
            { number: '26+', label: 'Pengurus', icon: Users },
            { number: '6', label: 'Divisi', icon: Target },
            { number: '3+', label: 'Program', icon: Rocket }
          ].map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center mx-auto mb-2 group-hover:bg-blue-500/20 transition-all duration-300">
                <stat.icon className="w-6 h-6 text-blue-400" />
              </div>
              <div className="text-2xl font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors duration-300">
                {stat.number}
              </div>
              <div className="text-blue-200/80 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

       
        <div 
          className="flex flex-col items-center gap-3"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <div className="text-cyan-300/70 text-sm font-light">Scroll untuk eksplorasi</div>
          <div className="w-7 h-12 border border-cyan-400/30 rounded-full flex justify-center bg-gradient-to-b from-cyan-500/10 to-transparent group hover:border-cyan-400/50 transition-all duration-300">
            <ArrowDown className="w-4 h-4 text-cyan-400 mt-2 animate-bounce group-hover:animate-pulse" />
          </div>
        </div>
      </div>

      
      <style jsx>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </header>
  );
};

export default HeroSection;