import React from 'react';
import { Calendar, Users, Award, Star, Crown } from 'lucide-react';

const Sejarah = () => {
  const milestones = [
    {
      year: '2007',
      title: 'Berdiri sebagai HIMATIKA',
      description: 'Awal mula organisasi dengan nama HIMATIKA di bawah Fakultas Teknik',
      leaders: ['Julti Rerung Malisa'],
      icon: Users,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      year: '2018', 
      title: 'Transformasi menjadi BEM FIKOM',
      description: 'Berdasarkan SK Rektor No. 005/SK/UKIP.02/2018, organisasi resmi menjadi BEM FIKOM',
      leaders: ['Dicky Saputra'],
      icon: Award,
      color: 'from-purple-500 to-pink-500'
    },
    {
      year: '2018-2024',
      title: 'Perkembangan Kepemimpinan',
      description: '7 periode kepemimpinan dengan berbagai pencapaian dan inovasi',
      leaders: [
        'Mikael Welly',
        'Jothan Zodiathes → Buttu', 
        'Nasution Marthen',
        'Ade Purnomo Adji',
        'Rechy Yusuf Sulo Rombe',
        'Richard Mattew Kaeng'
      ],
      icon: Star,
      color: 'from-orange-500 to-red-500'
    },
    {
      year: '2025',
      title: 'BEM FIKOM Sekarang',
      description: 'Terus berkomitmen menjadi wadah aspirasi dan pengembangan mahasiswa FIKOM',
      leaders: ['Ifin'],
      icon: Crown,
      color: 'from-green-500 to-emerald-500'
    }
  ];

  return (
    <section className="py-20 px-6" id="sejarah">
      <div className="max-w-4xl mx-auto">
        {/* Header Section - Diperkecil */}
        <div className="text-center mb-12">
          <h3 
            className="text-4xl md:text-5xl font-black text-white mb-4"
            data-aos="fade-down"
          >
            Sejarah BEM FIKOM
          </h3>
          <div 
            className="inline-block bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm px-4 py-2 rounded-full border border-blue-400/30"
            data-aos="fade-down"
            data-aos-delay="100"
          >
            <p className="text-blue-200 text-sm">Perjalanan 11+ Tahun Organisasi Mahasiswa FIKOM</p>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
          
          {/* Timeline Items */}
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
                data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
                data-aos-delay={index * 100}
              >
                {/* Content */}
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-6' : 'pl-6'}`}>
                  <div className="bg-white/5 backdrop-blur-xl rounded-xl p-5 border border-white/10">
                    {/* Year Badge - Diperkecil */}
                    <div className="inline-flex items-center gap-1 bg-white/10 px-3 py-1 rounded-full border border-white/10 mb-3">
                      <Calendar className="w-3 h-3 text-blue-400" />
                      <span className="text-blue-200 text-xs font-medium">{milestone.year}</span>
                    </div>
                    
                    {/* Title & Description - Diperkecil */}
                    <h4 className="text-lg font-bold text-white mb-2">{milestone.title}</h4>
                    <p className="text-gray-300 leading-relaxed text-xs mb-3">{milestone.description}</p>
                    
                    {/* Leaders Section - Diperkecil */}
                    <div className="border-t border-white/10 pt-3">
                      <div className="flex items-center gap-1 mb-1">
                        <Crown className="w-3 h-3 text-yellow-400" />
                        <span className="text-yellow-300 text-xs font-medium">Ketua:</span>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {milestone.leaders.map((leader, leaderIndex) => (
                          <span 
                            key={leaderIndex}
                            className={`px-2 py-1 rounded-full text-xs border ${
                              milestone.year === '2025' 
                                ? 'bg-cyan-500/20 text-cyan-200 border-cyan-500/30' 
                                : 'bg-blue-500/20 text-blue-200 border-blue-500/30'
                            }`}
                          >
                            {leader}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Timeline Dot - Diperkecil */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full border-2 border-slate-900 z-10"></div>

                {/* Icon - Diperkecil */}
                <div className={`w-1/2 ${index % 2 === 0 ? 'pl-6' : 'pr-6'}`}>
                  <div className="flex justify-center">
                    <div className={`w-12 h-12 bg-gradient-to-br ${milestone.color} rounded-xl flex items-center justify-center`}>
                      <milestone.icon className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Summary Section - Diperkecil */}
        <div 
          className="mt-12 text-center"
          data-aos="fade-up"
        >
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-xl rounded-xl p-6 border border-white/10">
            <h4 className="text-xl font-bold text-white mb-3">Dari HIMATIKA ke BEM FIKOM</h4>
            <p className="text-blue-200 text-sm max-w-2xl mx-auto leading-relaxed mb-4">
              Bermula dari <span className="text-cyan-300">HIMATIKA</span> pada tahun 2007, 
              organisasi ini telah melalui perjalanan panjang selama <span className="text-cyan-300">11+ tahun</span>. 
              Pada tahun 2018, melalui SK Rektor, organisasi bertransformasi menjadi 
              <span className="text-cyan-300"> BEM FIKOM</span> yang terus berkomitmen 
              mewadahi aspirasi dan mengembangkan potensi mahasiswa.
            </p>
            
            {/* Current Leader - Diperkecil */}
            <div className="inline-flex items-center gap-2 bg-cyan-500/10 px-4 py-2 rounded-full border border-cyan-500/30">
              <Crown className="w-4 h-4 text-cyan-400" />
              <span className="text-cyan-200 text-xs font-medium">
                Ketua: <span className="font-bold text-cyan-300">Ifin</span> (2025/2026)
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sejarah;