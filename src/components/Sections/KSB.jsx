import React from 'react';
import { ksbMembers } from '../../data/constants';

const KSB = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h3 
            className="text-5xl md:text-6xl font-black text-white mb-4"
            data-aos="fade-down"
          >
            Kepengurusan Inti
          </h3>
          <div 
            className="inline-block bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm px-6 py-2 rounded-full border border-blue-400/30"
            data-aos="fade-down"
            data-aos-delay="100"
          >
            <p className="text-blue-200 text-lg">Ketua • Sekretaris • Bendahara</p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {ksbMembers.map((member, index) => (
            <div 
              key={index} 
              className="group relative"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
              <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/10 transform group-hover:scale-105 transition-all duration-500">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  />
                </div>
                <div className="p-8 text-center bg-gradient-to-t from-black/50 to-transparent">
                  <h4 className="text-2xl font-bold text-white mb-2">{member.name}</h4>
                  <p className="text-blue-300 font-semibold">{member.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KSB;