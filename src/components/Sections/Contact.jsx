import React from 'react';
import { Mail, MapPin, Clock, ArrowRight, Sparkles } from 'lucide-react';
import { socialLinks } from '../../data/constants';

const Contact = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div 
            className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm px-6 py-3 rounded-full border border-blue-400/30 mb-6"
            data-aos="fade-down"
          >
            <Sparkles className="w-5 h-5 text-blue-300" />
            <span className="text-blue-200 font-medium">Terhubung Dengan Kami</span>
          </div>
          <h3 
            className="text-5xl md:text-7xl font-black text-white mb-6"
            data-aos="fade-down"
            data-aos-delay="100"
          >
            Hubungi <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Kami</span>
          </h3>
          <p 
            className="text-xl text-blue-200/80 max-w-2xl mx-auto"
            data-aos="fade-down"
            data-aos-delay="200"
          >
            Mari berkolaborasi dan sampaikan aspirasi Anda. Kami siap mendengarkan dan beraksi bersama.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Email Card */}
              <div 
                className="group relative bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-blue-400/50 transition-all duration-500 hover:scale-105"
                data-aos="fade-right"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">Email</h4>
                  <p className="text-blue-200 mb-3">bemfikomukip27@gmail.com</p>
                  <a 
                    href="mailto:bemfikomukip27@gmail.com" 
                    className="inline-flex items-center gap-2 text-cyan-300 hover:text-cyan-200 transition-colors duration-300 text-sm font-medium"
                  >
                    Kirim Email
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Location Card */}
              <div 
                className="group relative bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-purple-400/50 transition-all duration-500 hover:scale-105"
                data-aos="fade-right"
                data-aos-delay="100"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">Lokasi</h4>
                  <p className="text-purple-200 mb-3">UKI Paulus Makassar</p>
                  <a 
                    href="https://maps.google.com/?q=Universitas+Kristen+Indonesia+Paulus+Makassar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-pink-300 hover:text-pink-200 transition-colors duration-300 text-sm font-medium"
                  >
                    Lihat di Maps
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Operating Hours */}
            <div 
              className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-xl flex items-center justify-center">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white">Jam Operasional</h4>
                  <p className="text-blue-200">Sekretariat BEM FIKOM</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center py-2 border-b border-white/10">
                  <span className="text-white/80">Senin - Jumat</span>
                  <span className="text-white font-semibold">09.00 - 17.00 WITA</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-white/10">
                  <span className="text-white/80">Sabtu</span>
                  <span className="text-white font-semibold">09.00 - 17.00 WITA</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-white/80">Minggu</span>
                  <span className="text-orange-300 font-semibold">Libur</span>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div 
              className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10"
              data-aos="fade-right"
              data-aos-delay="300"
            >
              <h4 className="text-2xl font-bold text-white mb-6 text-center">Ikuti Jejak Kami</h4>
              <div className="flex justify-center gap-4">
                {socialLinks.map((social, index) => (
                  <a 
                    key={index} 
                    href={social.link} 
                    className="group relative w-16 h-16 bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/10 hover:border-blue-400/50 transition-all duration-300 hover:scale-110"
                    aria-label={social.label}
                    data-aos="zoom-in"
                    data-aos-delay={400 + (index * 100)}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <social.icon className="w-7 h-7 text-white relative z-10 group-hover:scale-110 transition-transform duration-300" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Google Maps & CTA */}
          <div className="space-y-8">
            {/* Google Maps */}
            <div 
              className="relative group"
              data-aos="fade-left"
              data-aos-delay="200"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
              <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/10">
                <div className="aspect-video bg-gray-800 relative">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3625.7686737234685!2d119.50087500226465!3d-5.119690110592754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dbefd0014856679%3A0x4da049f9d7d5da69!2sUKIP%5BUnivesitaskristenpaulus%5D!5e0!3m2!1sid!2sid!4v1761235843391!5m2!1sid!2sid"
                    width="100%"
                    height="100%"
                    style={{ border: 0, filter: 'contrast(1.1) saturate(1.2)' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="min-h-[400px]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent pointer-events-none"></div>
                </div>
                <div className="p-6 bg-gradient-to-t from-slate-900 to-transparent">
                  <h4 className="text-xl font-bold text-white mb-2">Sekretariat BEM FIKOM</h4>
                  <p className="text-blue-200">Universitas Kristen Indonesia Paulus Makassar</p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div 
              className="text-center"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
                <h4 className="text-2xl font-bold text-white mb-4">Sampaikan Aspirasi Anda</h4>
                <p className="text-blue-200 mb-6 max-w-md mx-auto">
                  Suara Anda penting bagi kemajuan BEM FIKOM. Mari bersama-sama membangun perubahan yang lebih baik.
                </p>
                <a
                  href="mailto:bemfikomukip27@gmail.com?subject=Aspirasi%20BEM%20FIKOM&body=Halo%20BEM%20FIKOM,%0A%0ASaya%20ingin%20menyampaikan%20aspirasi:%0A%0A[Isi%20aspirasi%20Anda%20di%20sini]%0A%0ATerima%20kasih"
                  className="group relative inline-flex items-center gap-4 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 px-12 py-4 rounded-full text-white font-bold text-lg shadow-2xl shadow-blue-500/30 hover:shadow-purple-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl"
                >
                  <span className="bg-gradient-to-r from-white to-white/90 bg-clip-text text-transparent">
                    Kirim Aspirasi Sekarang
                  </span>
                  <div className="relative">
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;