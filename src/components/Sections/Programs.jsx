import React from 'react';
import { programs } from '../../data/constants';  

const Programs = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h3 
            className="text-5xl md:text-6xl font-black text-white mb-6"
            data-aos="fade-down"
          >
            Program Unggulan
          </h3>
          <div 
            className="inline-block bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm px-6 py-3 rounded-full border border-blue-400/30"
            data-aos="fade-down"
            data-aos-delay="100"
          >
            <p className="text-blue-200 text-lg">Karya Nyata untuk FIKOM</p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div
              key={index}
              className="group relative"
              data-aos="zoom-in"
              data-aos-delay={index * 150}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${program.color} rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500`}></div>
              <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 h-full transform group-hover:scale-105 transition-all duration-300">
                <div className={`w-full h-2 bg-gradient-to-r ${program.color} rounded-full mb-6`}></div>
                <h4 className="text-2xl font-bold text-white mb-4">{program.title}</h4>
                <p className="text-gray-300 leading-relaxed mb-6">{program.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;