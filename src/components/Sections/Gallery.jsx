import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  
  const activities = [
    {
      id: 1,
      image: '1.jpg',
      title: 'Musyawarah Wilayah XI',
    },
    {
      id: 2,
      image: '2.jpg',
      title: 'Paskah bersama BEM FIKOM',
    },
    {
      id: 3,
      image: '3.jpg',
      title: 'Pelantikan Pengurus BEM FIKOM periode 2024/2025',
    },
    {
      id: 4,
      image: '4.jpg',
      title: 'Makan Bersama BEM FIKOM',
     
    },
    {
      id: 5,
      image: '5.jpg',
      title: 'Sosialisasi Maba 2025/2026',
      
    },
    
  ];

  const openLightbox = (activity, index) => {
    setSelectedImage(activity);
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % activities.length;
    setCurrentIndex(nextIndex);
    setSelectedImage(activities[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex = (currentIndex - 1 + activities.length) % activities.length;
    setCurrentIndex(prevIndex);
    setSelectedImage(activities[prevIndex]);
  };

  
  React.useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') closeLightbox();
    };

    if (selectedImage) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden'; 
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [selectedImage]);

  return (
    <>
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 
              className="text-5xl md:text-6xl font-black text-white mb-6"
              data-aos="fade-down"
            >
              
            </h3>
            <div 
              className="inline-block bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm px-6 py-3 rounded-full border border-blue-400/30"
              data-aos="fade-down"
              data-aos-delay="100"
            >
              <p className="text-blue-200 text-lg">Momen Berharga BEM FIKOM</p>
            </div>
          </div>

          {/* Grid Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activities.map((activity, index) => (
              <div
                key={activity.id}
                className="group relative cursor-pointer"
                data-aos="zoom-in"
                data-aos-delay={index * 100}
                onClick={() => openLightbox(activity, index)}
              >
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 z-10 rounded-2xl"></div>
                
                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 z-20">
                  <div className="bg-white/10 backdrop-blur-xl rounded-xl p-4 border border-white/20">
                    <h4 className="text-white font-bold text-lg mb-1">{activity.title}</h4>
                    <span className="inline-block px-2 py-1 bg-blue-500/30 text-blue-200 rounded text-xs font-semibold border border-blue-500/50">
                      {activity.category}
                    </span>
                  </div>
                </div>

                {/* Main Image Card */}
                <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/10 transform group-hover:scale-105 transition-all duration-500 h-80">
                  <img 
                    src={activity.image} 
                    alt={activity.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  
                  {/* Loading State */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="text-center text-white">
                      <ImageIcon className="w-8 h-8 mx-auto mb-2" />
                      <p className="text-sm">Klik untuk lihat detail</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16" data-aos="fade-up">
            <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
              <h4 className="text-2xl font-bold text-white mb-4">Ikuti Kegiatan Kami</h4>
              <p className="text-blue-200 mb-6 max-w-md mx-auto">
                Jadilah bagian dari momen seru berikutnya bersama BEM FIKOM
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 backdrop-blur-xl z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div 
            className="relative max-w-4xl w-full max-h-full"
            onClick={(e) => e.stopPropagation()} // Prevent close when clicking inside
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute -top-4 -right-4 z-10 w-12 h-12 bg-red-500/90 hover:bg-red-600 rounded-full flex items-center justify-center border border-white/20 transition-all duration-300 hover:scale-110"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center border border-white/20 backdrop-blur-sm transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>

            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center border border-white/20 backdrop-blur-sm transition-all duration-300 hover:scale-110"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>

            {/* Image Content */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/20">
              <div className="aspect-video bg-gray-800 relative">
                <img 
                  src={selectedImage.image} 
                  alt={selectedImage.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <h3 className="text-2xl font-bold text-white">{selectedImage.title}</h3>
                  <span className="px-3 py-1 bg-blue-500/30 text-blue-200 rounded-full text-sm font-semibold border border-blue-500/50">
                    {selectedImage.category}
                  </span>
                </div>
                <p className="text-gray-300 mb-4">{selectedImage.description}</p>
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <span>Gallery BEM FIKOM</span>
                  <span>{currentIndex + 1} / {activities.length}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;