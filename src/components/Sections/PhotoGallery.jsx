import { useState, useEffect, useCallback } from "react";
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
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  // 🟢 Inisialisasi AOS
  useEffect(() => {
    AOS.init({
      duration: 500,
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

  // 🎯 FUNGSI DENGAN USE CALLBACK UNTUK PERFORMANCE
  const openModal = useCallback((team, index, periodIndex) => {
    setSelectedKSB({ ...team, periodIndex });
    setCurrentIndex(index);
  }, []);

  const closeModal = useCallback(() => {
    setSelectedKSB(null);
    setCurrentIndex(0);
  }, []);

  const nextKSB = useCallback(() => {
    if (!selectedKSB) return;
    
    const currentPeriod = filteredPeriods[selectedKSB.periodIndex]?.teams;
    if (!currentPeriod) return;
    
    const newIndex = (currentIndex + 1) % currentPeriod.length;
    setCurrentIndex(newIndex);
    setSelectedKSB({ ...currentPeriod[newIndex], periodIndex: selectedKSB.periodIndex });
  }, [selectedKSB, currentIndex, filteredPeriods]);

  const prevKSB = useCallback(() => {
    if (!selectedKSB) return;
    
    const currentPeriod = filteredPeriods[selectedKSB.periodIndex]?.teams;
    if (!currentPeriod) return;
    
    const newIndex = (currentIndex - 1 + currentPeriod.length) % currentPeriod.length;
    setCurrentIndex(newIndex);
    setSelectedKSB({ ...currentPeriod[newIndex], periodIndex: selectedKSB.periodIndex });
  }, [selectedKSB, currentIndex, filteredPeriods]);

  // 🎯 HANDLE TOUCH EVENTS UNTUK MOBILE
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextKSB();
    } else if (isRightSwipe) {
      prevKSB();
    }
    
    setTouchStart(null);
    setTouchEnd(null);
  };

  // 🎯 HANDLE KEYBOARD EVENTS
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedKSB) return;
      
      switch(e.key) {
        case 'Escape':
          closeModal();
          break;
        case 'ArrowLeft':
          prevKSB();
          break;
        case 'ArrowRight':
          nextKSB();
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedKSB, closeModal, prevKSB, nextKSB]);

  // 🖼️ Komponen Gambar yang Dioptimalkan - PERBAIKAN DI SINI
  const ImageDisplay = ({ team, isModal = false, onClick = null }) => {
    const [imgError, setImgError] = useState(false);
    const [imgLoaded, setImgLoaded] = useState(false);

    const handleError = () => setImgError(true);
    const handleLoad = () => setImgLoaded(true);

    // Handler untuk klik gambar
    const handleImageClick = (e) => {
      e.stopPropagation(); 
      if (onClick) {
        onClick();
      }
    };

    if (imgError || !team.photo) {
      return (
        <div 
          className={`flex flex-col items-center justify-center ${
            isModal ? "h-80 md:h-96" : "aspect-[4/3]"
          } rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 text-gray-400 p-6 cursor-pointer`}
          onClick={handleImageClick}
        >
          <Users className={`${isModal ? "w-16 h-16 md:w-20 md:h-20" : "w-12 h-12"} mb-3`} />
          <p className="text-center font-medium">Tim KSB {team.year}</p>
          <p className="text-sm mt-1 text-center">{team.ketua.split('→')[0].trim()}</p>
        </div>
      );
    }

    return (
      <div 
        className={`relative ${isModal ? "h-80 md:h-96" : "aspect-[4/3]"} cursor-pointer`}
        onClick={handleImageClick}
      >
        {!imgLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-800 rounded-xl">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-500"></div>
          </div>
        )}
        <img
          src={team.photo}
          alt={`KSB Periode ${team.year}`}
          onError={handleError}
          onLoad={handleLoad}
          className={`w-full h-full ${
            isModal ? "object-contain" : "object-cover"
          } rounded-xl transition-opacity duration-300 ${imgLoaded ? 'opacity-100' : 'opacity-0'}`}
          loading="lazy"
        />
      </div>
    );
  };

  return (
    <section id="ksb-gallery" className="py-12 md:py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER YANG LEBIH RESPONSIF */}
        <div className="text-center mb-12 md:mb-16" data-aos="fade-up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Gallery KSB
            </span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto px-4">
            Dokumentasi Ketua, Sekretaris, dan Bendahara dari Masa ke Masa
          </p>

          {/* FILTER BUTTONS YANG LEBIH RESPONSIF */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mt-6" data-aos="zoom-in">
            {[
              { id: "all", label: "Semua Periode" },
              { id: "himatika", label: "HIMATIKA" },
              { id: "bem", label: "BEM FIKOM" },
            ].map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActivePeriod(filter.id)}
                className={`px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
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

        {/* GRID YANG LEBIH RESPONSIF */}
        {filteredPeriods.map((period, periodIndex) => (
          <div key={periodIndex} className="mb-12 md:mb-16" data-aos="fade-up">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 md:mb-8 text-center border-b border-gray-700 pb-3 md:pb-4 px-4">
              {period.period}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
              {period.teams.map((team, index) => (
                <div
                  key={index}
                  data-aos="zoom-in"
                  data-aos-delay={index * 100}
                  className={`group cursor-pointer transition-all duration-300 hover:-translate-y-2 ${
                    team.isCurrent
                      ? "ring-2 ring-cyan-500 ring-offset-2 ring-offset-slate-900 rounded-xl"
                      : ""
                  }`}
                >
                  {/* BADGE CURRENT */}
                  {team.isCurrent && (
                    <div className="absolute -top-2 -right-2 z-10">
                      <div className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-2 sm:px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                        Saat Ini
                      </div>
                    </div>
                  )}

                  <div 
                    className="relative overflow-hidden rounded-xl bg-gray-800 border border-gray-700"
                    onClick={() => openModal(team, index, periodIndex)}
                  >
                    {/* PERBAIKAN: ImageDisplay sekarang menerima onClick prop */}
                    <ImageDisplay 
                      team={team} 
                      onClick={() => openModal(team, index, periodIndex)}
                    />
                    
                    {/* OVERLAY INFO */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-3 sm:p-4 flex flex-col justify-end">
                      <div className="text-center">
                        <p className="text-white font-semibold text-sm mb-2">
                          Periode {team.year}
                        </p>
                        <div className="space-y-1 text-xs text-gray-300">
                          <div className="flex items-center justify-center gap-1">
                            <Crown className="w-3 h-3 text-yellow-400" />
                            <span className="truncate">{team.ketua.split('→')[0].trim()}</span>
                          </div>
                          <div className="flex items-center justify-center gap-1">
                            <FileText className="w-3 h-3 text-blue-400" />
                            <span className="truncate">{team.sekretaris}</span>
                          </div>
                          <div className="flex items-center justify-center gap-1">
                            <DollarSign className="w-3 h-3 text-green-400" />
                            <span className="truncate">{team.bendahara}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* CARD CONTENT */}
                    <div className="p-3 sm:p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-cyan-400 text-xs sm:text-sm font-semibold">
                          {team.year}
                        </span>
                        {team.isCurrent && (
                          <Award className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400" />
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

        {/* MODAL YANG LEBIH RESPONSIF - PERBAIKAN TOMBOL CLOSE */}
        {selectedKSB && (
          <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-2 sm:p-4">
            <div 
              className="relative max-w-4xl w-full h-full md:h-auto flex items-center justify-center"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {/* TOMBOL CLOSE YANG LEBIH BESAR DAN MUDAH DIKLIK */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white hover:text-cyan-400 transition z-50 p-2 bg-black/50 rounded-full hover:bg-black/70"
              >
                <X className="w-6 h-6 sm:w-8 sm:h-8" />
              </button>

              {/* OVERLAY CLICK UNTUK CLOSE MODAL */}
              <div 
                className="absolute inset-0"
                onClick={closeModal}
              />

              <div 
                className={`relative bg-gray-800 rounded-xl overflow-hidden border ${
                  selectedKSB.isCurrent ? "border-cyan-500" : "border-gray-700"
                } w-full max-h-[90vh] overflow-y-auto z-40`}
                onClick={(e) => e.stopPropagation()} // Mencegah close saat klik di dalam modal
              >
                <div className="relative">
                  {/* ImageDisplay di modal TIDAK bisa diklik untuk close */}
                  <ImageDisplay team={selectedKSB} isModal={true} />
                  
                  {/* NAVIGATION BUTTONS */}
                  <button
                    onClick={prevKSB}
                    className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 sm:p-3 rounded-full transition z-30"
                  >
                    <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6" />
                  </button>
                  <button
                    onClick={nextKSB}
                    className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 sm:p-3 rounded-full transition z-30"
                  >
                    <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6" />
                  </button>
                </div>

                <div className="p-4 sm:p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-4">
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      KSB Periode {selectedKSB.year}
                    </h3>
                    {selectedKSB.isCurrent && (
                      <span className="bg-cyan-500 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-bold self-start sm:self-auto">
                        Saat Ini
                      </span>
                    )}
                  </div>

                  <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">
                    {selectedKSB.description}
                  </p>

                  {/* LEADERSHIP GRID */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                    <div className="text-center p-3 sm:p-4 bg-gray-700/50 rounded-lg">
                      <Crown className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-400 mx-auto mb-2" />
                      <h4 className="text-yellow-300 font-semibold mb-1 text-sm sm:text-base">Ketua</h4>
                      <p className="text-white text-sm">{selectedKSB.ketua}</p>
                    </div>
                    
                    <div className="text-center p-3 sm:p-4 bg-gray-700/50 rounded-lg">
                      <FileText className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400 mx-auto mb-2" />
                      <h4 className="text-blue-300 font-semibold mb-1 text-sm sm:text-base">Sekretaris</h4>
                      <p className="text-white text-sm">{selectedKSB.sekretaris}</p>
                    </div>
                    
                    <div className="text-center p-3 sm:p-4 bg-gray-700/50 rounded-lg">
                      <DollarSign className="w-6 h-6 sm:w-8 sm:h-8 text-green-400 mx-auto mb-2" />
                      <h4 className="text-green-300 font-semibold mb-1 text-sm sm:text-base">Bendahara</h4>
                      <p className="text-white text-sm">{selectedKSB.bendahara}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 mt-4 sm:mt-6 text-xs sm:text-sm text-gray-400">
                    <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span>Periode {selectedKSB.year}</span>
                    <span className="mx-1 sm:mx-2">•</span>
                    <Users className="w-3 h-3 sm:w-4 sm:h-4" />
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