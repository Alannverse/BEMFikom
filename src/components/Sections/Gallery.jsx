import React, { useState, useEffect } from 'react';
import { 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Image as ImageIcon,
  Calendar,
  Users,
  MapPin,
  Heart,
  Share2,
  Download,
  ZoomIn
} from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState('all');
  const [imageLoaded, setImageLoaded] = useState({});

  // 🟢 Inisialisasi AOS - DIPERCEPAT
  useEffect(() => {
    AOS.init({
      duration: 400, // Dipercepat dari 800
      once: true,
      offset: 50, // Dipercepat dari 100
      easing: 'ease-out-cubic' // Efek easing lebih smooth
    });
  }, []);

  // 📸 Data Kegiatan BEM FIKOM
  const activities = [
    {
      id: 1,
      image: '/1.jpg',
      title: 'Musyawarah Wilayah XI',
      category: 'organisasi',
      date: '15 Maret 2024',
      location: 'Aula SMK tagari toraja utara',
      description: 'Musyawarah wilayah ke-11 yang membahas perkembangan organisasi dan rencana kerja ke depan',
      photos: ['/1.jpg', '/2.jpg', '/3.jpg'],
      featured: true
    },
    {
      id: 2,
      image: '/2.jpg',
      title: 'Paskah bersama BEM FIKOM',
      category: 'keagamaan',
      date: '2 April 2024',
      location: 'Wisata Pantai Galesong',
      description: 'Perayaan Paskah bersama keluarga besar BEM FIKOM dengan berbagai kegiatan kebersamaan',
      photos: ['/2.jpg', '/1.jpg'],
      
    },
    {
      id: 3,
      image: '/3.jpg',
      title: 'Pelantikan Pengurus BEM FIKOM periode 2024/2025',
      category: 'organisasi',
      date: '10 Februari 2024',
      location: 'Basement kampus',
      description: 'Momen bersejarah pelantikan pengurus baru BEM FIKOM untuk periode 2024/2025',
      photos: ['/3.jpg', '/4.jpg', '/5.jpg'], 
      featured: true
    },
    {
      id: 4,
      image: '/4.jpg',
      title: 'Makan Bersama BEM FIKOM',
      category: 'kebersamaan',
      date: '9 Mei 2025',
      location: 'Perumahan Griya Alam Permai, Ruko 1',
      description: 'Acara silaturahmi dan makan bersama untuk mempererat hubungan antar anggota BEM FIKOM',
      photos: ['/4.jpg'],
      
    },
    {
      id: 5,
      image: '/5.jpg',
      title: 'Sosialisasi Maba 2025/2026',
      category: 'organisasi',
      date: '22 Oktober 2025',
      location: 'Ruang senat lama',
      description: 'Sosialisasi dan pengenalan kampus untuk mahasiswa baru angkatan 2025/2026',
      photos: ['/5.jpg', '/1.jpg', '/2.jpg'],
      featured: true
      
    },
    {
      id: 6,
      image: '/munas.jpg',
      title: 'Munas VI Permikomnas',
      category: 'organisasi',
      date: '2019',
      location: 'Universitas siliwangi, tasikmalaya',
      description: 'Musyawarah nasional ke-6 permikomnas yang dihadiri oleh perwakilan BEM FIKOM UKI paulus makassar',
      photos: ['/munas.jpg'],
      
    },
    {
      id: 7,
      image: '/p2018.jpg',
      title: 'dokumentasi pengurus BEM FIKOM periode 2018/2019',
      category: 'organisasi',
      date: '2018',
      location: 'Universitas kristen indonesia paulus makassar',
      description: 'Momen bersejarah dan foto bersama pengurus BEM FIKOM periode 2018/2019',
      photos: ['/munas.jpg'],
      
    },
    {
      id: 8,
      image: '/p2019.jpg',
      title: 'dokumentasi pengurus BEM FIKOM periode 2019/2020',
      category: 'organisasi',
      date: '2020',
      location: 'Universitas kristen indonesia paulus makassar',
      description: 'Momen bersejarah dan foto bersama pengurus BEM FIKOM periode 2018/2019',
      photos: ['/p2019.jpg'],
      
    },
    {
      id: 9,
      image: '/pekan it.jpg',
      title: 'Pekan IT BEM FIKOM UKI Paulus Makassar',
      category: 'organisasi',
      date: '2019',
      location: 'Universitas kristen indonesia paulus makassar',
      description: 'Momen seru pekan IT yang diadakan oleh BEM FIKOM UKI Paulus Makassar',
      photos: ['/pekan it.jpg'],
      
    },
     {
      id: 10,
      image: '/s it.jpg',
      title: 'Seminar IT BEM FIKOM UKI Paulus Makassar',
      category: 'organisasi',
      date: '2019',
      location: 'Gedung liling Universitas kristen indonesia paulus makassar',
      description: 'Momen seminar it yang diadakan oleh BEM FIKOM UKI Paulus Makassar',
      photos: ['/pekan it.jpg'],
      
    },
    {
      id: 11,
      image: '/baksos19.jpg',
      title: 'Bakti Sosial BEM FIKOM UKI Paulus Makassar',
      category: 'sosial',
      date: '27 februari 2019',
      location: 'SMA negeri 1 bonggakaradeng',
      description: 'satukan langkah mejalin keakrapan antara mahasiswa dan masyarakat',
      photos: ['/baksos19.jpg'],
      
    },
    {
      id: 12,
      image: '/rakernas.jpg',
      title: 'Rapat Kerja Nasional Permikomnas',
      category: 'organisasi',
      date: '',
      location: '',
      description: '',
      photos: ['/rakernas.jpg'],
      
    },
    {
      id: 13,
      image: '/PLKO 017.jpg',
      title: 'Pelatihan lanjutan kepemimpinan organisasi (PLKO) 2017',
      category: 'organisasi',
      date: '',
      location: 'universitas kristen indonesia paulus makassar',
      description: 'satukan langkah mejalin keakrapan antara mahasiswa dan masyarakat',
      photos: ['/PLKO 017.jpg'],
      
    },
    {
      id: 14,
      image: '/ultah himatika.jpg',
      title: 'Anniversary himatika yang ke-11',
      category: 'organisasi',
      date: '',
      location: 'Gedung lilin Universitas kristen indonesia paulus makassar',
      description: '',
      photos: ['/ultah himatika.jpg'],
      
    },
  ];

  // Kategori kegiatan
  const categories = [
    { id: 'all', label: 'Semua Kegiatan', count: activities.length },
    { id: 'organisasi', label: 'Organisasi', count: activities.filter(a => a.category === 'organisasi').length },
    { id: 'akademik', label: 'Akademik', count: activities.filter(a => a.category === 'akademik').length },
    { id: 'sosial', label: 'Sosial', count: activities.filter(a => a.category === 'sosial').length },
    { id: 'keagamaan', label: 'Keagamaan', count: activities.filter(a => a.category === 'keagamaan').length },
    { id: 'kebersamaan', label: 'Kebersamaan', count: activities.filter(a => a.category === 'kebersamaan').length }
  ];

  const filteredActivities = activeCategory === 'all' 
    ? activities 
    : activities.filter(activity => activity.category === activeCategory);

  const openLightbox = (activity, index) => {
    setSelectedImage(activity);
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % filteredActivities.length;
    setCurrentIndex(nextIndex);
    setSelectedImage(filteredActivities[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex = (currentIndex - 1 + filteredActivities.length) % filteredActivities.length;
    setCurrentIndex(prevIndex);
    setSelectedImage(filteredActivities[prevIndex]);
  };

  const handleImageLoad = (id) => {
    setImageLoaded(prev => ({ ...prev, [id]: true }));
  };

  // Keyboard navigation
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };

    if (selectedImage) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [selectedImage, currentIndex]);

  return (
    <section id="activities" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER SECTION */}
        <div className="text-center mb-16" 
             data-aos="fade-up"
             data-aos-duration="300"
             data-aos-easing="ease-out-cubic">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Gallery
            </span> Kegiatan
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Dokumentasi Momen Berharga dan Aktivitas BEM FIKOM
          </p>
        </div>

        {/* CATEGORY FILTER */}
        <div className="flex flex-wrap justify-center gap-3 mb-12" 
             data-aos="fade-up"
             data-aos-duration="300"
             data-aos-delay="100"
             data-aos-easing="ease-out-cubic">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/25'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
              }`}
            >
              {category.label}
              <span className="ml-2 text-xs opacity-75">({category.count})</span>
            </button>
          ))}
        </div>

        {/* ACTIVITIES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredActivities.map((activity, index) => (
            <div
              key={activity.id}
              data-aos="zoom-in"
              data-aos-duration="400"
              data-aos-delay={index * 50} // Dipercepat dari 100
              data-aos-easing="ease-out-cubic"
              data-aos-offset="50"
              className={`group relative cursor-pointer transition-all duration-500 hover:-translate-y-2 ${
                activity.featured ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
              onClick={() => openLightbox(activity, index)}
            >
              {/* Featured Badge */}
              {activity.featured && (
                <div className="absolute top-4 left-4 z-20">
                  <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg flex items-center gap-1">
                    <Heart className="w-3 h-3" />
                    Featured
                  </div>
                </div>
              )}

              {/* Image Container */}
              <div className="relative rounded-2xl overflow-hidden bg-gray-800 border border-gray-700">
                {/* Image */}
                <div className="aspect-[4/3] relative overflow-hidden">
                  <img 
                    src={activity.image} 
                    alt={activity.title}
                    className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 ${
                      imageLoaded[activity.id] ? 'opacity-100' : 'opacity-0'
                    }`}
                    onLoad={() => handleImageLoad(activity.id)}
                    loading="lazy"
                  />
                  
                  {/* Loading Skeleton */}
                  {!imageLoaded[activity.id] && (
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-800 animate-pulse flex items-center justify-center">
                      <ImageIcon className="w-8 h-8 text-gray-500" />
                    </div>
                  )}

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />

                  {/* View Indicator */}
                  <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex items-center gap-1 bg-black/50 text-white px-2 py-1 rounded-full text-xs">
                      <ZoomIn className="w-3 h-3" />
                      <span>Klik untuk lihat</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-white font-semibold text-lg leading-tight flex-1">
                      {activity.title}
                    </h3>
                  
                  </div>

                  <div className="flex items-center gap-4 text-gray-400 text-sm mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{activity.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      <span>{activity.location}</span>
                    </div>
                  </div>

                  <p className="text-gray-300 text-sm line-clamp-2">
                    {activity.description}
                  </p>

                  {/* Category Badge */}
                  <div className="mt-3">
                    <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                      activity.category === 'organisasi' ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30' :
                      activity.category === 'akademik' ? 'bg-green-500/20 text-green-300 border border-green-500/30' :
                      activity.category === 'sosial' ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30' :
                      activity.category === 'keagamaan' ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30' :
                      'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                    }`}>
                      {categories.find(cat => cat.id === activity.category)?.label}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA SECTION */}
        <div className="text-center mt-16" 
             data-aos="fade-up"
             data-aos-duration="300"
             data-aos-delay="100"
             data-aos-easing="ease-out-cubic">
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20">
            <h4 className="text-2xl font-bold text-white mb-4">Jadi Bagian Kegiatan Kami</h4>
            <p className="text-cyan-200 mb-6 max-w-md mx-auto">
              Ikuti momen seru berikutnya dan buat kenangan berharga bersama BEM FIKOM
            </p>
          </div>
        </div>
      </div>

      {/* LIGHTBOX MODAL */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/95 backdrop-blur-xl z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div 
            className="relative max-w-6xl w-full max-h-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute -top-4 -right-4 z-10 w-12 h-12 bg-red-500/90 hover:bg-red-600 rounded-full flex items-center justify-center border border-white/20 transition-all duration-300 hover:scale-110 shadow-lg"
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
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/20 shadow-2xl">
              <div className="aspect-video bg-gray-800 relative">
                <img 
                  src={selectedImage.image} 
                  alt={selectedImage.title}
                  className="w-full h-full object-contain"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none"></div>
              </div>
              
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">{selectedImage.title}</h3>
                    <div className="flex items-center gap-4 text-gray-300 text-sm mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{selectedImage.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{selectedImage.location}</span>
                      </div>
                      
                    </div>
                  </div>
                </div>

                <p className="text-gray-300 mb-4 leading-relaxed">{selectedImage.description}</p>
                
                <div className="flex items-center justify-between pt-4 border-t border-gray-700">
                  <span className="text-gray-400 text-sm">Gallery BEM FIKOM</span>
                  <span className="text-gray-400 text-sm">{currentIndex + 1} / {filteredActivities.length}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;