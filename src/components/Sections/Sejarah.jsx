import React from 'react';
import { Calendar, Users, Award, Star, Crown, BookOpen } from 'lucide-react';

const Sejarah = () => {
  const milestones = [
    {
      year: '2007',
      title: 'Berdiri sebagai HIMATIKA',
      description: 'Awal mula organisasi dengan nama HIMATIKA di bawah Fakultas Teknik setelah MUSANG I',
      leaders: ['Julti Rerung Malisa'],
      icon: Users,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      year: '2007-2018',
      title: 'Era HIMATIKA - 11 Periode Kepemimpinan',
      description: 'Perjalanan panjang HIMATIKA dengan berbagai perkembangan organisasi',
      leaders: [
        'Julti Rerung Malisa (2007/2008)',
        'Wendyanto Panggalo (2008/2009)',
        'Asmadi Djasman (2009/2010)',
        'Romanus Paisal (2010/2011)',
        'Yonas Kala\' Banduru (2011/2012)',
        'Chrissani Adi Putra (2012/2013)',
        'William Waromi → Nofriyanto Pasauran Todingan (2013/2014)',
        'Alton Sujianto Kato (2014/2015)',
        'Kristian Arman Pamangin (2015/2016)',
        'Risaldy Andika Putra (2016/2017)',
        'Erwin Pranoto (2017/2018)'
      ],
      icon: BookOpen,
      color: 'from-purple-500 to-pink-500'
    },
    {
      year: '2018',
      title: 'Transformasi menjadi BEM FIKOM',
      description: 'Berdasarkan SK Rektor No. 005/SK/UKIP.02/2018, organisasi resmi menjadi BEM FIKOM',
      leaders: ['Dicky Saputra'],
      icon: Award,
      color: 'from-orange-500 to-amber-500'
    },
    {
      year: '2018-2024',
      title: 'Perkembangan Kepemimpinan BEM FIKOM',
      description: '7 periode kepemimpinan dengan berbagai pencapaian dan inovasi',
      leaders: [
        'Dicky Saputra (2018/2019)',
        'Mikael Welly (2019/2020)',
        'Jothan Zodiathes → Buttu (2020/2021)',
        'Nasution Marthen (2021/2022)',
        'Ade Purnomo Adji (2022/2023)',
        'Rechy Yusuf Sulo Rombe (2023/2024)',
        'Richard Mattew Kaeng (2024/2025)'
      ],
      icon: Star,
      color: 'from-green-500 to-emerald-500'
    },
    {
      year: '2025',
      title: 'BEM FIKOM Sekarang',
      description: 'Terus berkomitmen menjadi wadah aspirasi dan pengembangan mahasiswa FIKOM',
      leaders: ['Ifin (2025/2026)'],
      icon: Crown,
      color: 'from-cyan-500 to-blue-500'
    }
  ];

  return (
    <section className="py-20 px-6" id="sejarah">
      <div className="max-w-6xl mx-auto">
        
        
        <div className="text-center mb-16">
          <h3 
            className="text-4xl md:text-5xl font-black text-white mb-4"
            data-aos="fade-down"
          >
            Sejarah BEM FIKOM
          </h3>
          <div 
            className="inline-block bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm px-6 py-3 rounded-full border border-blue-400/30"
            data-aos="fade-down"
            data-aos-delay="100"
          >
            <p className="text-blue-200 text-sm">Perjalanan 18+ Tahun Organisasi Mahasiswa</p>
          </div>
        </div>

        
        <div 
          className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 mb-12"
          data-aos="fade-up"
        >
          <div className="flex items-start gap-4">
            <div className="p-3 bg-blue-500/20 rounded-xl border border-blue-500/30">
              <BookOpen className="w-6 h-6 text-blue-400" />
            </div>
            <div>
              <h4 className="text-xl font-bold text-white mb-4">Sejarah Singkat BEM FIKOM</h4>
              <div className="space-y-3 text-gray-300 leading-relaxed text-sm">
                <p>
                  Keberadaan Organisasi kemahasiswaan ini telah berjalan selama kurang lebih <span className="text-cyan-300 font-semibold">18 tahun</span>. 
                  Dimana sebelumnya organisasi ini bernama <span className="text-cyan-300">HIMTI</span> tetapi setelah diadakan <span className="text-cyan-300">MUSANG I</span> pada tahun 2007, 
                  organisasi ini berubah nama menjadi <span className="text-cyan-300">HIMATIKA</span> yang masih dalam naungan BEM Fakultas Teknik.
                </p>
                <p>
                  Himpunan Mahasiswa Informatika (HIMATIKA) pertama kali di godok dan diperjuangkan setelah terpisahnya Jurusan Teknik Informatika 
                  dari Teknik Elektro oleh salah satu senior kita yaitu <span className="text-cyan-300">kanda Julti Rerung Malisa</span>.
                </p>
                <p>
                  Sejak dikeluarkannya <span className="text-cyan-300">SK Rektor UKIP dengan nomor: 005/SK/UKIP.02/2018</span> tentang penetapan 
                  Fakultas Informatika dan Komputer Universitas Kristen Indonesia Paulus pada tanggal 26 Januari 2018 mengharuskan organisasi ini 
                  menjadi BEM dan pada <span className="text-cyan-300">Konferensi I tahun 2018</span> organisasi ini resmi berubah nama menjadi 
                  <span className="text-cyan-300"> BEM FIKOM</span> selaku pelaksana Eksekutif dan DPM dari Fakultas Informatika dan Komputer 
                  selaku pelaksana Legislatif.
                </p>
              </div>
            </div>
          </div>
        </div>

       
        <div className="relative">
          
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
          
          
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
                data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
                data-aos-delay={index * 100}
              >
                
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-6' : 'pl-6'}`}>
                  <div className="bg-white/5 backdrop-blur-xl rounded-xl p-5 border border-white/10 hover:border-white/20 transition-all duration-300">
                    
                    <div className="inline-flex items-center gap-1 bg-white/10 px-3 py-1 rounded-full border border-white/10 mb-3">
                      <Calendar className="w-3 h-3 text-blue-400" />
                      <span className="text-blue-200 text-xs font-medium">{milestone.year}</span>
                    </div>
                    
                    
                    <h4 className="text-lg font-bold text-white mb-2">{milestone.title}</h4>
                    <p className="text-gray-300 leading-relaxed text-xs mb-3">{milestone.description}</p>
                    
                    
                    <div className="border-t border-white/10 pt-3">
                      <div className="flex items-center gap-1 mb-2">
                        <Crown className="w-3 h-3 text-yellow-400" />
                        <span className="text-yellow-300 text-xs font-medium">Ketua Umum:</span>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {milestone.leaders.map((leader, leaderIndex) => (
                          <span 
                            key={leaderIndex}
                            className={`px-2 py-1 rounded-full text-xs border ${
                              milestone.year === '2025' 
                                ? 'bg-cyan-500/20 text-cyan-200 border-cyan-500/30' 
                                : milestone.year === '2018'
                                ? 'bg-orange-500/20 text-orange-200 border-orange-500/30'
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

                
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full border-2 border-slate-900 z-10"></div>

                {/* Icon */}
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

        
        <div 
          className="mt-12 text-center"
          data-aos="fade-up"
        >
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-xl rounded-xl p-6 border border-white/10">
            <h4 className="text-lg font-bold text-white mb-3">Dari HIMTI ke BEM FIKOM</h4>
            <p className="text-blue-200 text-sm max-w-4xl mx-auto leading-relaxed mb-4">
              Bermula dari <span className="text-cyan-300">HIMTI</span> yang bertransformasi menjadi 
              <span className="text-cyan-300"> HIMATIKA</span> pada tahun 2007, 
              organisasi ini telah melalui perjalanan panjang selama <span className="text-cyan-300">18+ tahun</span>. 
              Melalui <span className="text-cyan-300">SK Rektor tahun 2018</span>, organisasi bertransformasi menjadi 
              <span className="text-cyan-300"> BEM FIKOM</span> yang terus berkomitmen 
              mewadahi aspirasi dan mengembangkan potensi mahasiswa FIKOM UKIP.
            </p>
            
            
            <div className="inline-flex items-center gap-2 bg-cyan-500/10 px-4 py-2 rounded-full border border-cyan-500/30">
              <Crown className="w-4 h-4 text-cyan-400" />
              <span className="text-cyan-200 text-xs font-medium">
                Ketua Umum 2025/2026: <span className="font-bold text-cyan-300">Ifin</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sejarah;