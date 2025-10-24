import { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Calendar, Users, Crown } from 'lucide-react';

const PhotoGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeFilter, setActiveFilter] = useState('all');

  const photoCollections = [
    {
      period: "Era HIMATIKA (2007-2017)",
      category: "himatika",
      photos: [
        {
          id: 1,
          src: "/photos/himatika/himatika-2007.jpg",
          caption: "MUSANG I - Transformasi HIMTI menjadi HIMATIKA",
          year: "2007",
          leader: "Julti Rerung Malisa",
          description: "Momen bersejarah perubahan nama organisasi dari HIMTI ke HIMATIKA"
        },
        {
          id: 2,
          src: "/photos/himatika/himatika-2008.jpg",
          caption: "Kepengurusan Periode 2008/2009",
          year: "2008",
          leader: "Wendyanto Panggalo",
          description: "Dokumentasi kepengurusan kedua HIMATIKA"
        },
        {
          id: 3,
          src: "/photos/himatika/himatika-2010.jpg",
          caption: "Kegiatan Mahasiswa HIMATIKA",
          year: "2010",
          leader: "Romanus Paisal",
          description: "Aktivitas dan event yang diadakan oleh HIMATIKA"
        },
        {
          id: 4,
          src: "/photos/himatika/himatika-2015.jpg",
          caption: "Kepengurusan Periode 2015/2016",
          year: "2015",
          leader: "Kristian Arman Pamangin",
          description: "Dokumentasi kepengurusan kesembilan HIMATIKA"
        },
        {
          id: 5,
          src: "/photos/himatika/himatika-2017.jpg",
          caption: "Kepengurusan Terakhir HIMATIKA",
          year: "2017",
          leader: "Erwin Pranoto",
          description: "Periode terakhir sebelum transformasi ke BEM FIKOM"
        }
      ]
    },
    {
      period: "Transisi ke BEM FIKOM (2018)",
      category: "transisi",
      photos: [
        {
          id: 6,
          src: "/2018.jpg",
          caption: "Konferensi I - Kelahiran BEM FIKOM",
          year: "2018",
          leader: "Dicky Saputra",
          description: "Momen bersejarah transformasi HIMATIKA menjadi BEM FIKOM"
        },
        {
          id: 7,
          src: "/2018.jpg",
          caption: "Penandatanganan SK Rektor",
          year: "2018",
          leader: "Dicky Saputra",
          description: "Kepengurusan pertama BEM FIKOM"
        }
      ]
    },
    {
      period: "BEM FIKOM (2018-Sekarang)",
      category: "bem",
      photos: [
        {
          id: 8,
          src: "/20199.jpg",
          caption: "Kepengurusan Periode 2019/2020",
          year: "2019",
          leader: "Mikael Welly",
          description: "Kepengurusan kedua BEM FIKOM"
        },
        {
          id: 9,
          src: "/2019.jpg",
          caption: "Kepengurusan Periode 2020/2021",
          year: "2020",
          leader: "Jothan Zodiathes",
          description: "Masa kepemimpinan di era pandemi"
        },
        {
          id: 10,
          src: "/2020.jpg",
          caption: "Kepengurusan Periode 2020/2021",
          year: "2020",
          leader: "Buttu",
          description: "Masa kepemimpinan di era pandemi"
        },
        {
          id: 11,
          src: "/2021.jpg",
          caption: "Kepengurusan Periode 2021/2022",
          year: "2021",
          leader: "Nasution Marthen",
          description: "Dokumentasi kegiatan dan kepengurusan"
        },
        {
          id: 12,
          src: "/2022.jpg",
          caption: "Kepengurusan Periode 2022/2023",
          year: "2022",
          leader: "Ade Purnomo Adji",
          description: "Kegiatan dan program kerja BEM FIKOM"
        },
        {
          id: 13,
          src: "/2023.jpg",
          caption: "Kepengurusan Periode 2023/2024",
          year: "2023",
          leader: "Rechy Yusuf Sulo Rombe",
          description: "Dokumentasi kepengurusan keenam BEM FIKOM"
        },
        {
          id: 14,
          src: "/2024.jpg",
          caption: "Kepengurusan Periode 2024/2025",
          year: "2024",
          leader: "Richard Mattew Kaeng",
          description: "Kepengurusan ketujuh BEM FIKOM"
        },
        {
          id: 15,
          src: "/2025.jpg", 
          caption: "Kepengurusan Periode 2025/2026",
          year: "2025", 
          leader: "Ifin",
          description: "Kepengurusan kedelapan BEM FIKOM - Masa Kepemimpinan Saat Ini",
          isCurrent: true
        }
      ]
    }
  ];

  
  const filteredCollections = activeFilter === 'all' 
    ? photoCollections 
    : photoCollections.filter(collection => collection.category === activeFilter);

  const openModal = (photo, index, collectionIndex) => {
    setSelectedImage({ ...photo, collectionIndex });
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setCurrentIndex(0);
  };

  const nextImage = () => {
    const currentCollection = filteredCollections[selectedImage.collectionIndex].photos;
    const newIndex = (currentIndex + 1) % currentCollection.length;
    setCurrentIndex(newIndex);
    setSelectedImage({ 
      ...currentCollection[newIndex], 
      collectionIndex: selectedImage.collectionIndex 
    });
  };

  const prevImage = () => {
    const currentCollection = filteredCollections[selectedImage.collectionIndex].photos;
    const newIndex = (currentIndex - 1 + currentCollection.length) % currentCollection.length;
    setCurrentIndex(newIndex);
    setSelectedImage({ 
      ...currentCollection[newIndex], 
      collectionIndex: selectedImage.collectionIndex 
    });
  };

  // Fungsi untuk cek apakah gambar ada
  const ImageDisplay = ({ photo, isModal = false }) => {
    // Coba load gambar, jika error gunakan placeholder
    const [imgError, setImgError] = useState(false);
    
    const handleImageError = () => {
      setImgError(true);
    };

    if (imgError || !photo.src) {
      return (
        <div className={`w-full flex items-center justify-center ${
          isModal ? 'h-96' : 'h-full'
        } ${
          photo.isCurrent 
            ? 'bg-gradient-to-br from-cyan-900/50 to-blue-900/50' 
            : 'bg-gradient-to-br from-gray-700 to-gray-800'
        }`}>
          <div className="text-center text-gray-400">
            <Users className={`${isModal ? 'w-16 h-16' : 'w-12 h-12'} mx-auto mb-4`} />
            <p className={isModal ? "text-lg font-semibold" : "text-sm"}>{photo.caption}</p>
            <p className={isModal ? "text-md mt-2" : "text-xs mt-1"}>{photo.year}</p>
            {photo.isCurrent && (
              <div className={`mt-3 px-3 py-1 bg-cyan-500/20 rounded-full text-cyan-300 ${
                isModal ? 'text-sm' : 'text-xs'
              }`}>
                Ketua: {photo.leader}
              </div>
            )}
          </div>
        </div>
      );
    }

    return (
      <img 
        src={photo.src} 
        alt={photo.caption}
        className={`w-full ${isModal ? 'h-96 object-contain' : 'h-full object-cover'}`}
        onError={handleImageError}
      />
    );
  };

  return (
    <section id="gallery" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Gallery
            </span> Sejarah
          </h2>
          <p className="text-gray-400 text-lg mb-8">Documentasi Visual Perjalanan 18+ Tahun Organisasi</p>
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {[
              { id: 'all', label: 'Semua Era' },
              { id: 'himatika', label: 'HIMATIKA' },
              { id: 'transisi', label: 'Transisi' },
              { id: 'bem', label: 'BEM FIKOM' }
            ].map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeFilter === filter.id
                    ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/25'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Photo Collections */}
        {filteredCollections.map((collection, collectionIndex) => (
          <div key={collectionIndex} className="mb-16">
            <h3 className="text-2xl font-bold text-white mb-8 text-center border-b border-gray-700 pb-4">
              {collection.period}
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {collection.photos.map((photo, index) => (
                <div
                  key={photo.id}
                  className={`relative group cursor-pointer transition-transform hover:-translate-y-2 ${
                    photo.isCurrent ? 'ring-2 ring-cyan-500 ring-offset-2 ring-offset-slate-900 rounded-xl' : ''
                  }`}
                  onClick={() => openModal(photo, index, collectionIndex)}
                >
                  {/* Current Badge */}
                  {photo.isCurrent && (
                    <div className="absolute -top-2 -right-2 z-10">
                      <div className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                        Saat Ini
                      </div>
                    </div>
                  )}
                  
                  <div className="relative overflow-hidden rounded-xl bg-gray-800 aspect-[4/3] border border-gray-700">
                    {/* Gunakan ImageDisplay component */}
                    <ImageDisplay photo={photo} />
                    
                    {/* Overlay on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <p className="text-white text-sm font-semibold mb-2">{photo.caption}</p>
                        <div className="flex items-center justify-between text-xs">
                          <div className="flex items-center gap-1 text-cyan-300">
                            <Calendar className="w-3 h-3" />
                            <span>{photo.year}</span>
                          </div>
                          <div className="flex items-center gap-1 text-yellow-300">
                            <Crown className="w-3 h-3" />
                            <span>{photo.leader.split('(')[0]}</span>
                          </div>
                        </div>
                        {photo.isCurrent && (
                          <div className="mt-2 px-2 py-1 bg-cyan-500/30 rounded-full text-cyan-200 text-xs text-center">
                            🎯 Kepemimpinan Saat Ini
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Modal untuk foto */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl w-full max-h-full">
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute -top-12 right-0 text-white hover:text-cyan-400 transition-colors z-10"
              >
                <X className="w-8 h-8" />
              </button>

              {/* Image Content */}
              <div className={`bg-gray-800 rounded-xl overflow-hidden border ${
                selectedImage.isCurrent ? 'border-cyan-500' : 'border-gray-700'
              }`}>
                <div className="relative">
                  {/* Current Badge in Modal */}
                  {selectedImage.isCurrent && (
                    <div className="absolute top-4 left-4 z-10">
                      <div className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                        🎯 Kepemimpinan Saat Ini
                      </div>
                    </div>
                  )}
                  
                  {/* Gunakan ImageDisplay component untuk modal */}
                  <ImageDisplay photo={selectedImage} isModal={true} />
                  
                  {/* Navigation Arrows */}
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>

                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </div>

                {/* Image Info */}
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-2xl font-bold text-white">{selectedImage.caption}</h3>
                    {selectedImage.isCurrent && (
                      <span className="bg-cyan-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                        Saat Ini
                      </span>
                    )}
                  </div>
                  <p className="text-gray-300 mb-4">{selectedImage.description}</p>
                  
                  <div className="flex flex-wrap gap-6 text-sm">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-cyan-400" />
                      <span className="text-cyan-300">Tahun: {selectedImage.year}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Crown className="w-4 h-4 text-yellow-400" />
                      <span className={`${selectedImage.isCurrent ? 'text-cyan-300 font-bold' : 'text-yellow-300'}`}>
                        Ketua: {selectedImage.leader}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-purple-400" />
                      <span className="text-purple-300">
                        {selectedImage.collectionIndex === 0 ? 'HIMATIKA' : 
                         selectedImage.collectionIndex === 1 ? 'Transisi' : 'BEM FIKOM'}
                      </span>
                    </div>
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