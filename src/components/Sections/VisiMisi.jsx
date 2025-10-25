import React, { useState } from 'react';
import { Target, Rocket } from 'lucide-react';

const VisiMisi = () => {
  const [activeTab, setActiveTab] = useState('visi');

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h3
            className="text-5xl md:text-6xl font-black text-white mb-6"
            data-aos="fade-down"
            data-aos-duration="300"
            data-aos-easing="ease-out-cubic"
          >
            Visi & Misi
          </h3>
          <div
            className="inline-block bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm px-6 py-3 rounded-full border border-blue-400/30"
            data-aos="fade-down"
            data-aos-delay="50"
            data-aos-duration="300"
            data-aos-easing="ease-out-cubic"
          >
            <p className="text-blue-200 text-lg">Arah & Tujuan BEM FIKOM 2025/2026</p>
          </div>
        </div>

        {/* Tab Switcher */}
        <div 
          className="flex justify-center gap-4 mb-12" 
          data-aos="fade-up"
          data-aos-duration="300"
          data-aos-delay="100"
          data-aos-easing="ease-out-cubic"
        >
          <button
            onClick={() => setActiveTab('visi')}
            className={`px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 ${
              activeTab === 'visi'
                ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-2xl shadow-blue-500/50 scale-105'
                : 'bg-white/5 backdrop-blur-xl text-blue-200 border border-white/10 hover:border-blue-400/50'
            }`}
          >
            <Target className="w-5 h-5 inline mr-2" />
            Visi
          </button>
          <button
            onClick={() => setActiveTab('misi')}
            className={`px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 ${
              activeTab === 'misi'
                ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-2xl shadow-purple-500/50 scale-105'
                : 'bg-white/5 backdrop-blur-xl text-purple-200 border border-white/10 hover:border-purple-400/50'
            }`}
          >
            <Rocket className="w-5 h-5 inline mr-2" />
            Misi
          </button>
        </div>

        {/* Visi Content */}
        {activeTab === 'visi' && (
          <div 
            className="relative" 
            data-aos="fade-up"
            data-aos-duration="400"
            data-aos-easing="ease-out-cubic"
            data-aos-offset="50"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-cyan-500/30 rounded-3xl blur-3xl"></div>
            <div className="relative bg-white/5 backdrop-blur-2xl rounded-3xl p-12 md:p-16 border border-white/10 shadow-2xl">
              <div className="flex items-start gap-6 mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center flex-shrink-0 animate-pulse">
                  <Target className="w-10 h-10 text-white" />
                </div>
                <div>
                  <h4 className="text-3xl md:text-4xl font-black text-white mb-4">Visi BEM FIKOM</h4>
                  <div className="h-1 w-32 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"></div>
                </div>
              </div>
              <p className="text-xl md:text-2xl text-blue-100 leading-relaxed font-medium">
                Menjadi salah satu Program Studi yang <span className="text-cyan-300 font-semibold">termuka di bidang Teknik Informatika di Kawasan Timur Indonesia</span>, 
                yang menghasilkan alumni dengan <span className="text-cyan-300 font-semibold">kualitas tinggi, percaya diri, kreatif dan inovatif</span> yang dapat bersaing di era globalisasi.
              </p>
            </div>
          </div>
        )}

        {/* Misi Content */}
        {activeTab === 'misi' && (
          <div 
            className="relative" 
            data-aos="fade-up"
            data-aos-duration="400"
            data-aos-easing="ease-out-cubic"
            data-aos-offset="50"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-3xl blur-3xl"></div>
            <div className="relative bg-white/5 backdrop-blur-2xl rounded-3xl p-12 md:p-16 border border-white/10 shadow-2xl">
              <div className="flex items-start gap-6 mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center flex-shrink-0 animate-pulse">
                  <Rocket className="w-10 h-10 text-white" />
                </div>
                <div>
                  <h4 className="text-3xl md:text-4xl font-black text-white mb-4">Misi BEM FIKOM</h4>
                  <div className="h-1 w-32 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                </div>
              </div>
              <p className="text-xl md:text-2xl text-purple-100 leading-relaxed font-medium">
                Menyediakan <span className="text-pink-300 font-semibold">program pendidikan, penelitian, dan pengabdian kepada masyarakat</span> di bidang Teknik Informatika 
                melalui <span className="text-pink-300 font-semibold">pengembangan kurikulum akademik yang adaptif</span> terhadap perkembangan teknologi dan kebutuhan masyarakat.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default VisiMisi;