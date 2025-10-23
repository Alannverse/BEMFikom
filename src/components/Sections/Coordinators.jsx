import React from 'react';
import { coordinators } from '../../data/constants';  // ← DUA KALI ../

const Coordinators = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h3 
            className="text-5xl md:text-6xl font-black text-white mb-4"
            data-aos="fade-down"
          >
            Koordinator Divisi
          </h3>
          <div 
            className="inline-block bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm px-6 py-2 rounded-full border border-blue-400/30"
            data-aos="fade-down"
            data-aos-delay="100"
          >
            <p className="text-blue-200 text-lg">6 Divisi Aktif</p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coordinators.map((coordinator, index) => (
            <div 
              key={index} 
              className="group relative"
              data-aos="flip-left"
              data-aos-delay={index * 100}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl blur-lg opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>
              <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/10 transform group-hover:scale-105 transition-all duration-500">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={coordinator.image} 
                    alt={coordinator.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  />
                </div>
                <div className="p-6 text-center bg-gradient-to-t from-black/50 to-transparent">
                  <h4 className="text-lg font-bold text-white mb-1">{coordinator.name}</h4>
                  <p className="text-cyan-300 font-semibold text-sm">Koordinator {coordinator.division}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Coordinators;