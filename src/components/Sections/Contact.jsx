import React from 'react';
import { Mail, MapPin, Clock, ArrowRight, Sparkles, MessageCircle, Send, Target } from 'lucide-react';
import { socialLinks } from '../../data/constants';

const Contact = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Enhanced Header */}
        <div className="text-center mb-20">
          <div 
            className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm px-8 py-4 rounded-2xl border border-blue-400/30 mb-8 shadow-2xl shadow-blue-500/10"
            data-aos="fade-down"
            data-aos-duration="300"
          >
            <div className="relative">
              <Sparkles className="w-6 h-6 text-blue-300 animate-pulse" />
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
            </div>
            <span className="text-blue-200 font-semibold text-lg">Terhubung Dengan Kami</span>
          </div>
          
          <h3 
            className="text-6xl md:text-8xl font-black text-white mb-8"
            data-aos="fade-down"
            data-aos-delay="50"
          >
            <span className="bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
              Hubungi
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-gradient">
              Kami
            </span>
          </h3>
          
          <p 
            className="text-xl text-blue-200/90 max-w-2xl mx-auto leading-relaxed"
            data-aos="fade-down"
            data-aos-delay="50"
          >
            Mari berkolaborasi dan sampaikan aspirasi Anda. Kami siap mendengarkan dan beraksi bersama menuju perubahan yang lebih baik.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Information - Enhanced */}
          <div className="space-y-8">
            {/* Floating Contact Cards */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Email Card */}
              <div 
                className="group relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-blue-400/50 transition-all duration-500 hover:scale-105 hover:-translate-y-2 shadow-2xl shadow-blue-500/10"
                data-aos="fade-right"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                {/* Floating Elements */}
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-blue-500 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
                <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-cyan-500 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse delay-300"></div>
                
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-blue-500/25">
                    <Mail className="w-7 h-7 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-3">Email</h4>
                  <p className="text-blue-200 text-lg mb-4 font-medium">bemfikomukip27@gmail.com</p>
                  <a 
                    href="mailto:bemfikomukip27@gmail.com" 
                    className="inline-flex items-center gap-3 text-cyan-300 hover:text-cyan-200 transition-all duration-300 font-semibold group/link"
                  >
                    <span>Kirim Email</span>
                    <div className="relative">
                      <ArrowRight className="w-5 h-5 group-hover/link:translate-x-2 transition-transform duration-300" />
                    </div>
                  </a>
                </div>
              </div>

              {/* Location Card */}
              <div 
                className="group relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-purple-400/50 transition-all duration-500 hover:scale-105 hover:-translate-y-2 shadow-2xl shadow-purple-500/10"
                data-aos="fade-right"
                data-aos-delay="50"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                {/* Floating Elements */}
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-purple-500 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
                <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-pink-500 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse delay-300"></div>
                
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-purple-500/25">
                    <MapPin className="w-7 h-7 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-3">Lokasi</h4>
                  <p className="text-purple-200 text-lg mb-4 font-medium">UKI Paulus Makassar</p>
                  <a 
                    href="https://maps.google.com/?q=Universitas+Kristen+Indonesia+Paulus+Makassar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 text-pink-300 hover:text-pink-200 transition-all duration-300 font-semibold group/link"
                  >
                    <span>Lihat di Maps</span>
                    <div className="relative">
                      <ArrowRight className="w-5 h-5 group-hover/link:translate-x-2 transition-transform duration-300" />
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* Enhanced Operating Hours */}
            <div 
              className="group relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-orange-400/30 transition-all duration-500 shadow-2xl shadow-orange-500/10"
              data-aos="fade-right"
              data-aos-delay="50"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-yellow-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="flex items-center gap-6 mb-8">
                  <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-2xl flex items-center justify-center shadow-lg shadow-orange-500/25">
                    <Clock className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-white">Jam Operasional</h4>
                    <p className="text-blue-200 text-lg">Sekretariat BEM FIKOM</p>
                  </div>
                </div>
                <div className="space-y-4">
                  {[
                    { days: 'Senin - Jumat', time: '09.00 - 17.00 WITA', color: 'from-orange-500/20 to-orange-500/30' },
                    { days: 'Sabtu', time: '09.00 - 17.00 WITA', color: 'from-yellow-500/20 to-yellow-500/30' },
                    { days: 'Minggu', time: 'Libur', color: 'from-red-500/20 to-red-500/30', isClosed: true }
                  ].map((schedule, index) => (
                    <div 
                      key={index}
                      className="flex justify-between items-center py-4 px-6 bg-gradient-to-r from-white/5 to-white/10 rounded-2xl border border-white/10 group-hover:border-orange-400/20 transition-all duration-300"
                    >
                      <span className="text-white/90 text-lg font-medium">{schedule.days}</span>
                      <span className={`px-4 py-2 rounded-full text-sm font-bold ${
                        schedule.isClosed 
                          ? 'bg-red-500/20 text-red-300 border border-red-500/30' 
                          : 'bg-gradient-to-r from-orange-500/20 to-yellow-500/20 text-white border border-orange-500/30'
                      }`}>
                        {schedule.time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Enhanced Social Media */}
            <div 
              className="group relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-cyan-400/30 transition-all duration-500 shadow-2xl shadow-cyan-500/10"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <h4 className="text-2xl font-bold text-white mb-8 text-center">Ikuti Media Sosial Kami</h4>
                <div className="flex justify-center gap-6">
                  {socialLinks.map((social, index) => (
                    <a 
                      key={index} 
                      href={social.link} 
                      className="group/social relative w-20 h-20 bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-3xl flex items-center justify-center border border-white/10 hover:border-blue-400/50 transition-all duration-500 hover:scale-110 hover:-translate-y-2 shadow-lg"
                      aria-label={social.label}
                      data-aos="zoom-in"
                      data-aos-delay={100 + (index * 100)}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 rounded-3xl opacity-0 group-hover/social:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute -top-2 -right-2 w-4 h-4 bg-cyan-400 rounded-full opacity-0 group-hover/social:opacity-100 transition-opacity duration-300 animate-pulse"></div>
                      <social.icon className="w-8 h-8 text-white relative z-10 group-hover/social:scale-110 transition-transform duration-300" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Google Maps & CTA */}
          <div className="space-y-8">
            {/* Enhanced Google Maps */}
            <div 
              className="relative group"
              data-aos="fade-left"
              data-aos-delay="50"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
              <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/10 group-hover:border-blue-400/30 transition-all duration-500 shadow-2xl shadow-blue-500/10">
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
                  <div className="absolute top-6 right-6 bg-black/50 backdrop-blur-sm rounded-2xl p-3 border border-white/20 group-hover:border-blue-400/30 transition-all duration-300">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="p-8 bg-gradient-to-t from-slate-900 to-transparent">
                  <h4 className="text-2xl font-bold text-white mb-3">Sekretariat BEM FIKOM</h4>
                  <p className="text-blue-200 text-lg">Universitas Kristen Indonesia Paulus Makassar</p>
                </div>
              </div>
            </div>

            {/* Enhanced CTA Section */}
            <div 
              className="text-center"
              data-aos="fade-up"
              data-aos-delay="50"
            >
              <div className="group relative bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 backdrop-blur-xl rounded-3xl p-10 border border-white/10 hover:border-cyan-400/30 transition-all duration-500 shadow-2xl shadow-cyan-500/10">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-cyan-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative">
                  <div className="flex justify-center mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-3xl flex items-center justify-center shadow-2xl shadow-cyan-500/25 group-hover:scale-110 transition-transform duration-500">
                      <MessageCircle className="w-9 h-9 text-white" />
                    </div>
                  </div>
                  <h4 className="text-3xl font-bold text-white mb-6">Sampaikan Aspirasi Anda</h4>
                  <p className="text-blue-200 text-lg mb-8 max-w-md mx-auto leading-relaxed">
                    Suara Anda penting bagi kemajuan BEM FIKOM. Mari bersama-sama membangun perubahan yang lebih baik untuk kampus kita.
                  </p>
                  <a
                    href="mailto:bemfikomukip27@gmail.com?subject=Aspirasi%20BEM%20FIKOM&body=Halo%20BEM%20FIKOM,%0A%0ASaya%20ingin%20menyampaikan%20aspirasi:%0A%0A[Isi%20aspirasi%20Anda%20di%20sini]%0A%0ATerima%20kasih"
                    className="group/btn relative inline-flex items-center gap-6 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 px-16 py-5 rounded-2xl text-white font-bold text-xl shadow-2xl shadow-blue-500/30 hover:shadow-purple-500/50 transition-all duration-500 hover:scale-105 hover:shadow-3xl overflow-hidden"
                  >
                    <span className="bg-gradient-to-r from-white to-white/90 bg-clip-text text-transparent">
                      Kirim Aspirasi
                    </span>
                    <div className="relative">
                      <Send className="w-6 h-6 group-hover/btn:translate-x-2 transition-transform duration-300" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-1000"></div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;