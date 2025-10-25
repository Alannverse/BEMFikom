import { useState, useEffect } from "react";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Calendar,
  Crown,
  FileText,
  DollarSign,
  Users,
  Award,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const PhotoGallery = () => {
  const [selectedKSB, setSelectedKSB] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activePeriod, setActivePeriod] = useState("all");

  // 🟢 Inisialisasi AOS
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    });
  }, []);

  // 🎯 DATA KSB BERDASARKAN SEJARAH
  const ksbPeriods = [
    {
      period: "Era HIMATIKA (2007-2017)",
      category: "himatika",
      teams: [
        {
          year: "2007/2008",
          ketua: "Julti Rerung Malisa",
          sekretaris: "[Sekretaris]",
          bendahara: "[Bendahara]",
          description: "Periode pertama setelah transformasi HIMTI menjadi HIMATIKA",
          photo: "/photos/himatika/2007-2008.jpg"
        },
        {
          year: "2008/2009",
          ketua: "Wendyanto Panggalo",
          sekretaris: "[Sekretaris]",
          bendahara: "[Bendahara]",
          description: "Kepengurusan kedua HIMATIKA",
          photo: "/photos/himatika/2008-2009.jpg"
        },
        {
          year: "2009/2010",
          ketua: "Asmadi Djasman",
          sekretaris: "[Sekretaris]",
          bendahara: "[Bendahara]",
          description: "Kepengurusan ketiga HIMATIKA",
          photo: "/photos/himatika/2009-2010.jpg"
        },
        {
          year: "2010/2011",
          ketua: "Romanus Paisal",
          sekretaris: "[Sekretaris]",
          bendahara: "[Bendahara]",
          description: "Kepengurusan keempat HIMATIKA",
          photo: "/photos/himatika/2010-2011.jpg"
        },
        {
          year: "2011/2012",
          ketua: "Yonas Kala' Banduru",
          sekretaris: "[Sekretaris]",
          bendahara: "[Bendahara]",
          description: "Kepengurusan kelima HIMATIKA",
          photo: "/photos/himatika/2011-2012.jpg"
        },
        {
          year: "2012/2013",
          ketua: "Chrissani Adi Putra",
          sekretaris: "[Sekretaris]",
          bendahara: "[Bendahara]",
          description: "Kepengurusan keenam HIMATIKA",
          photo: "/photos/himatika/2012-2013.jpg"
        },
        {
          year: "2013/2014",
          ketua: "William Waromi → Nofriyanto Pasauran Todingan",
          sekretaris: "[Sekretaris]",
          bendahara: "[Bendahara]",
          description: "Kepengurusan ketujuh HIMATIKA dengan perubahan kepemimpinan",
          photo: "/photos/himatika/2013-2014.jpg"
        },
        {
          year: "2014/2015",
          ketua: "Alton Sujianto Kato",
          sekretaris: "[Sekretaris]",
          bendahara: "[Bendahara]",
          description: "Kepengurusan kedelapan HIMATIKA",
          photo: "/photos/himatika/2014-2015.jpg"
        },
        {
          year: "2015/2016",
          ketua: "Kristian Arman Pamangin",
          sekretaris: "[Sekretaris]",
          bendahara: "[Bendahara]",
          description: "Kepengurusan kesembilan HIMATIKA",
          photo: "/photos/himatika/2015-2016.jpg"
        },
        {
          year: "2016/2017",
          ketua: "Risaldy Andika Putra",
          sekretaris: "[Sekretaris]",
          bendahara: "[Bendahara]",
          description: "Kepengurusan kesepuluh HIMATIKA",
          photo: "/photos/himatika/2016-2017.jpg"
        },
        {
          year: "2017/2018",
          ketua: "Erwin Pranoto",
          sekretaris: "[Sekretaris]",
          bendahara: "[Bendahara]",
          description: "Kepengurusan terakhir HIMATIKA sebelum transformasi",
          photo: "/photos/himatika/2017-2018.jpg"
        }
      ]
    },
    {
      period: "Era BEM FIKOM (2018-Sekarang)",
      category: "bem",
      teams: [
        {
          year: "2018/2019",
          ketua: "Dicky Saputra",
          sekretaris: "[Vilson Seti Sadar]",
          bendahara: "[Rosita Tampang]",
          description: "Kepengurusan pertama BEM FIKOM setelah transformasi",
          photo: "/2018.jpg",
        },
        {
          year: "2019/2020",
          ketua: "Mikael Welly",
          sekretaris: "[Anderson Pilar Kasih Patodingan]",
          bendahara: "[Yuyun Kurniati]",
          description: "Kepengurusan kedua BEM FIKOM",
          photo: "/20199.jpg",
        },
        {
          year: "2020/2021",
          ketua: "Jothan Zodiathes → Buttu",
          sekretaris: "[Yorinda Gapriel Rapang]",
          bendahara: "[Priska Tingga]",
          description: "Kepengurusan ketiga BEM FIKOM dengan perubahan kepemimpinan",
          photo: "/2019.jpg",
        },
          {
          year: "2020/2021",
          ketua: "Buttu",
          sekretaris: "[Yorinda Gapriel Rapang]",
          bendahara: "[Priska Tingga]",
          description: "Kepengurusan ketiga BEM FIKOM dengan perubahan kepemimpinan",
          photo: "/2020.jpg",
        },
        {
          year: "2021/2022",
          ketua: "Nasution Marthen",
          sekretaris: "[Ary Irsanto Basongan]",
          bendahara: "[Rika Efendi]",
          description: "Kepengurusan keempat BEM FIKOM",
          photo: "/2021.jpg",
        },
        {
          year: "2022/2023",
          ketua: "Ade Purnomo Adji",
          sekretaris: "[Raymhonta Ginting]",
          bendahara: "[Fransisca L. Christina S.]",
          description: "Kepengurusan kelima BEM FIKOM",
          photo: "/2022.jpg",
        },
        {
          year: "2023/2024",
          ketua: "Rechy Yusuf Sulo Rombe",
          sekretaris: "[Afrianti Rodan]",
          bendahara: "[Dhio Anggraini]",
          description: "Kepengurusan keenam BEM FIKOM",
          photo: "/2023.jpg",
        },
        {
          year: "2024/2025",
          ketua: "Richard Mattew Kaeng",
          sekretaris: "[Grace Laura Febrina]",
          bendahara: "[Sazikirana Pabuntang]",
          description: "Kepengurusan ketujuh BEM FIKOM",
          photo: "/2024.jpg",
        },
        {
          year: "2025/2026",
          ketua: "Ifin",
          sekretaris: "[Praseptialan]",
          bendahara: "[Himpraise]",
          description: "Kepengurusan kedelapan BEM FIKOM - Masa Kepemimpinan Saat Ini",
          photo: "/2025.jpg",
          isCurrent: true
        }
      ]
    }
  ];

  const filteredPeriods = activePeriod === "all" 
    ? ksbPeriods 
    : ksbPeriods.filter(period => period.category === activePeriod);

  
  const openModal = (team, index, periodIndex) => {
    setSelectedKSB({ ...team, periodIndex });
    setCurrentIndex(index);
  };

  const closeModal = () => setSelectedKSB(null);

  const nextKSB = () => {
    const currentPeriod = filteredPeriods[selectedKSB.periodIndex].teams;
    const newIndex = (currentIndex + 1) % currentPeriod.length;
    setCurrentIndex(newIndex);
    setSelectedKSB({ ...currentPeriod[newIndex], periodIndex: selectedKSB.periodIndex });
  };

  const prevKSB = () => {
    const currentPeriod = filteredPeriods[selectedKSB.periodIndex].teams;
    const newIndex = (currentIndex - 1 + currentPeriod.length) % currentPeriod.length;
    setCurrentIndex(newIndex);
    setSelectedKSB({ ...currentPeriod[newIndex], periodIndex: selectedKSB.periodIndex });
  };

  // 🖼️ Komponen Gambar
  const ImageDisplay = ({ team, isModal = false }) => {
    const [imgError, setImgError] = useState(false);
    const handleError = () => setImgError(true);

    if (imgError || !team.photo) {
      return (
        <div className={`flex flex-col items-center justify-center ${
          isModal ? "h-80" : "aspect-[4/3]"
        } rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 text-gray-400 p-6`}>
          <Users className={`${isModal ? "w-16 h-16" : "w-12 h-12"} mb-3`} />
          <p className="text-center font-medium">Tim KSB {team.year}</p>
          <p className="text-sm mt-1">{team.ketua}</p>
        </div>
      );
    }

    return (
      <img
        src={team.photo}
        alt={`KSB Periode ${team.year}`}
        onError={handleError}
        className={`w-full ${
          isModal ? "h-80 object-contain" : "object-cover aspect-[4/3]"
        } rounded-xl`}
      />
    );
  };

  return (
    <section id="ksb-gallery" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Gallery KSB
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Dokumentasi Ketua, Sekretaris, dan Bendahara dari Masa ke Masa
          </p>

          
          <div className="flex flex-wrap justify-center gap-4 mt-8" data-aos="zoom-in">
            {[
              { id: "all", label: "Semua Periode" },
              { id: "himatika", label: "HIMATIKA" },
              { id: "bem", label: "BEM FIKOM" },
            ].map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActivePeriod(filter.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activePeriod === filter.id
                    ? "bg-cyan-500 text-white shadow-lg shadow-cyan-500/25"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        
        {filteredPeriods.map((period, periodIndex) => (
          <div key={periodIndex} className="mb-16" data-aos="fade-up">
            <h3 className="text-2xl font-bold text-white mb-8 text-center border-b border-gray-700 pb-4">
              {period.period}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {period.teams.map((team, index) => (
                <div
                  key={index}
                  data-aos="zoom-in"
                  data-aos-delay={index * 100}
                  onClick={() => openModal(team, index, periodIndex)}
                  className={`group cursor-pointer transition-all hover:-translate-y-2 ${
                    team.isCurrent
                      ? "ring-2 ring-cyan-500 ring-offset-2 ring-offset-slate-900 rounded-xl"
                      : ""
                  }`}
                >
                  
                  {team.isCurrent && (
                    <div className="absolute -top-2 -right-2 z-10">
                      <div className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                        Saat Ini
                      </div>
                    </div>
                  )}

                  <div className="relative overflow-hidden rounded-xl bg-gray-800 border border-gray-700">
                    <ImageDisplay team={team} />
                    
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex flex-col justify-end">
                      <div className="text-center">
                        <p className="text-white font-semibold text-sm mb-2">
                          Periode {team.year}
                        </p>
                        <div className="space-y-1 text-xs text-gray-300">
                          <div className="flex items-center justify-center gap-1">
                            <Crown className="w-3 h-3 text-yellow-400" />
                            <span>{team.ketua.split('→')[0].trim()}</span>
                          </div>
                          <div className="flex items-center justify-center gap-1">
                            <FileText className="w-3 h-3 text-blue-400" />
                            <span>{team.sekretaris}</span>
                          </div>
                          <div className="flex items-center justify-center gap-1">
                            <DollarSign className="w-3 h-3 text-green-400" />
                            <span>{team.bendahara}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    
                    <div className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-cyan-400 text-sm font-semibold">
                          {team.year}
                        </span>
                        {team.isCurrent && (
                          <Award className="w-4 h-4 text-yellow-400" />
                        )}
                      </div>
                      <p className="text-white text-sm font-medium truncate">
                        {team.ketua.split('→')[0].trim()}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

       
        {selectedKSB && (
          <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl w-full">
              <button
                onClick={closeModal}
                className="absolute -top-12 right-0 text-white hover:text-cyan-400 transition z-10"
              >
                <X className="w-8 h-8" />
              </button>

              <div className={`bg-gray-800 rounded-xl overflow-hidden border ${
                selectedKSB.isCurrent ? "border-cyan-500" : "border-gray-700"
              }`}>
                <div className="relative">
                  <ImageDisplay team={selectedKSB} isModal={true} />
                  
                  
                  <button
                    onClick={prevKSB}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={nextKSB}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <h3 className="text-2xl font-bold text-white">
                      KSB Periode {selectedKSB.year}
                    </h3>
                    {selectedKSB.isCurrent && (
                      <span className="bg-cyan-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                        Saat Ini
                      </span>
                    )}
                  </div>

                  <p className="text-gray-300 mb-6">{selectedKSB.description}</p>

                  
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="text-center p-4 bg-gray-700/50 rounded-lg">
                      <Crown className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                      <h4 className="text-yellow-300 font-semibold mb-1">Ketua</h4>
                      <p className="text-white">{selectedKSB.ketua}</p>
                    </div>
                    
                    <div className="text-center p-4 bg-gray-700/50 rounded-lg">
                      <FileText className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                      <h4 className="text-blue-300 font-semibold mb-1">Sekretaris</h4>
                      <p className="text-white">{selectedKSB.sekretaris}</p>
                    </div>
                    
                    <div className="text-center p-4 bg-gray-700/50 rounded-lg">
                      <DollarSign className="w-8 h-8 text-green-400 mx-auto mb-2" />
                      <h4 className="text-green-300 font-semibold mb-1">Bendahara</h4>
                      <p className="text-white">{selectedKSB.bendahara}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 mt-6 text-sm text-gray-400">
                    <Calendar className="w-4 h-4" />
                    <span>Periode {selectedKSB.year}</span>
                    <span className="mx-2">•</span>
                    <Users className="w-4 h-4" />
                    <span>
                      {selectedKSB.periodIndex === 0 ? 'HIMATIKA' : 'BEM FIKOM'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PhotoGallery;