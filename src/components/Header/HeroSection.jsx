import React, { useEffect, useState } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  Users, 
  Target, 
  Rocket, 
  Play,
  Star,
  Zap,
  Heart,
  Share2,
  Calendar,
  MapPin
} from 'lucide-react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [activeStat, setActiveStat] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);

    // Auto rotate stats
    const interval = setInterval(() => {
      setActiveStat(prev => (prev + 1) % 3);
    }, 3000);

    return () => {
      window.removeEventListener('resize', checkMobile);
      clearInterval(interval);
    };
  }, []);

  return (
    <header className="min-h-screen relative flex items-center justify-center px-4 sm:px-6 py-8 lg:py-20 overflow-hidden">
      
      {/* Enhanced Background for Both */}
      <div className="absolute inset-0">
        {/* Animated Gradient Orbs */}
        <div className="absolute top-10 left-5 lg:top-1/4 lg:left-1/4 w-72 h-72 lg:w-96 lg:h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-5 lg:bottom-1/4 lg:right-1/4 w-64 h-64 lg:w-80 lg:h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 lg:w-64 lg:h-64 bg-purple-500/15 rounded-full blur-3xl animate-pulse delay-500"></div>
        
        {/* Animated Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(isMobile ? 15 : 25)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400/30 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>

        {/* Dynamic Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] lg:bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,black,transparent)]"></div>
      </div>

      <div className="max-w-7xl mx-auto text-center lg:text-left relative z-10 w-full">
        
        {isMobile ? (
          /* 🎯 ENHANCED MOBILE LAYOUT */
          <div className="space-y-8">
            
            {/* Floating Logo with Enhanced Effects */}
            <div 
              className={`relative mx-auto max-w-[280px] transition-all duration-1000 ${
                isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-10 opacity-0 scale-95'
              }`}
            >
              {/* Orbital Rings */}
              <div className="absolute inset-0 -m-4">
                <div className="absolute inset-0 border-2 border-cyan-400/20 rounded-3xl animate-spin-slow"></div>
                <div className="absolute inset-3 border-2 border-blue-400/15 rounded-2xl animate-spin-slow reverse"></div>
              </div>

              {/* Main Logo Container */}
              <div className="relative group">
                {/* Outer Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-1000"></div>
                
                {/* Main Card */}
                <div className="relative bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-2xl rounded-3xl p-6 border border-white/25 shadow-2xl shadow-cyan-500/20 group-hover:shadow-blue-500/30 transition-all duration-500 group-hover:scale-105">
                  
                  {/* Animated Shine */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                  
                  {/* Logo */}
                  <div className="relative z-10">
                    <img 
                      src="/logo bem.jpg" 
                      alt="Logo BEM FIKOM" 
                      className="w-full h-auto object-contain transform group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                </div>

              </div>
            </div>

            {/* Enhanced Content Section */}
            <div className="space-y-6">
              
              {/* Epic Heading */}
              <div className="space-y-4">
                <h1 className="text-5xl sm:text-6xl font-black text-white leading-tight">
                  <span className="bg-gradient-to-r from-white via-cyan-200 to-blue-200 bg-clip-text text-transparent">
                    BEM
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-gradient text-6xl sm:text-7xl">
                    FIKOM
                  </span>
                </h1>
                
                <div className="space-y-2">
                  <h2 className="text-xl sm:text-2xl text-white/90 font-light bg-white/5 backdrop-blur-sm py-2 px-4 rounded-xl">
                    Fakultas Informatika dan Komputer
                  </h2>
                </div>
              </div>

              {/* Interactive Description */}
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-4 border border-white/10">
                <p className="text-base text-gray-200 leading-relaxed">
                  "Wadah aspirasi mahasiswa FIKOM yang menciptakan 
                  <span className="text-cyan-300 font-semibold"> lingkungan inovatif </span>
                  dengan
                  <span className="text-blue-300 font-semibold"> semangat kolaborasi "</span>
                </p>
              </div>

              
              {/* Animated Stats Carousel */}
              <div className="pt-4">
                <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-4 border border-white/10">
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { number: '26+', label: 'Pengurus Aktif', icon: Users, color: 'from-cyan-500 to-blue-500' },
                      { number: '6', label: 'Divisi Unggulan', icon: Target, color: 'from-blue-500 to-purple-500' },
                      { number: '3+', label: 'Program Kerja', icon: Rocket, color: 'from-purple-500 to-pink-500' }
                    ].map((stat, index) => (
                      <div 
                        key={index}
                        className={`text-center p-3 rounded-xl bg-gradient-to-br ${stat.color} transition-all duration-500 transform ${
                          activeStat === index ? 'scale-105 -translate-y-1 shadow-lg' : 'scale-95 opacity-80'
                        }`}
                        onTouchStart={() => setActiveStat(index)}
                      >
                        <div className="p-2 rounded-lg bg-white/20 backdrop-blur-sm mb-2 mx-auto w-12 h-12 flex items-center justify-center">
                          <stat.icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="text-xl font-bold text-white mb-1">
                          {stat.number}
                        </div>
                        <div className="text-white/90 text-xs font-medium">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Stats Indicator */}
                  <div className="flex justify-center gap-1 mt-3">
                    {[0, 1, 2].map((index) => (
                      <div
                        key={index}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          activeStat === index ? 'bg-cyan-400 w-6' : 'bg-white/30'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Social Proof */}
              <div className="flex items-center justify-center gap-4 pt-2">
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  
                  <span>+150 Mahasiswa</span>
                </div>
              </div>
            </div>

            {/* Enhanced Scroll Indicator */}
            <div 
              className={`flex flex-col items-center gap-3 pt-6 transition-all duration-1000 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: '1200ms' }}
            >
              <div className="text-cyan-300/80 text-sm font-medium tracking-wider flex items-center gap-2">
                <span>SWIPE TO EXPLORE</span>
                <div className="w-4 h-4 bg-cyan-400/20 rounded-full flex items-center justify-center">
                  <ArrowRight className="w-2 h-2 text-cyan-400" />
                </div>
              </div>
              <div className="w-8 h-12 border-2 border-cyan-400/40 rounded-2xl flex justify-center p-1 bg-gradient-to-b from-cyan-500/20 to-transparent group active:scale-95 transition-transform">
                <div className="w-1 h-3 bg-cyan-400 rounded-full mt-1 animate-bounce"></div>
              </div>
            </div>
          </div>
        ) : (
          /* 🖥️ DESKTOP LAYOUT - EPIC VERSION */
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Column - Text Content */}
            <div className="text-left space-y-8">
              
              {/* Epic Heading */}
              <div className="space-y-6">
                <h1 className="text-7xl lg:text-8xl font-black text-white leading-tight">
                  <span className="bg-gradient-to-r from-white via-cyan-200 to-blue-200 bg-clip-text text-transparent">
                    BEM
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-gradient">
                    FIKOM
                  </span>
                </h1>
                
                <div className="space-y-4">
                  <h2 className="text-3xl text-white/90 font-light">
                    Fakultas Informatika dan Komputer
                  </h2>
                </div>
              </div>

              {/* Enhanced Description */}
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
                <p className="text-lg text-gray-200 leading-relaxed">
                  "Wadah aspirasi dan pengembangan mahasiswa FIKOM yang berkomitmen menciptakan 
                  <span className="text-cyan-300 font-semibold"> lingkungan akademik yang inovatif </span>
                  dan penuh dengan
                  <span className="text-blue-300 font-semibold"> semangat kolaborasi.</span>
                  Membangun generasi digital yang kreatif dan kompetitif."
                </p>
              </div>

             {/* Modern Stats Section */}
<div className="pt-8">
  <div className="grid grid-cols-3 gap-6">
    {[
      { 
        number: '26+', 
        label: 'Pengurus Aktif', 
        icon: Users, 
        gradient: 'from-cyan-500 to-blue-500',
        glow: 'shadow-cyan-500/25',
        delay: 600
      },
      { 
        number: '6', 
        label: 'Divisi Unggulan', 
        icon: Target, 
        gradient: 'from-blue-500 to-purple-500',
        glow: 'shadow-blue-500/25',
        delay: 700
      },
      { 
        number: '3+', 
        label: 'Program Kerja', 
        icon: Rocket, 
        gradient: 'from-purple-500 to-pink-500',
        glow: 'shadow-purple-500/25',
        delay: 800
      }
    ].map((stat, index) => (
      <div 
        key={index}
        className={`relative group cursor-pointer transition-all duration-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}
        style={{ transitionDelay: `${stat.delay}ms` }}
        onMouseEnter={() => setActiveStat(index)}
      >
        {/* Animated Background Glow */}
        <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 ${stat.glow}`}></div>
        
        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden rounded-3xl">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                left: `${20 + i * 30}%`,
                top: `${10 + i * 40}%`,
                animationDelay: `${i * 0.5}s`,
                animation: `float 3s ease-in-out infinite`
              }}
            />
          ))}
        </div>

        {/* Main Stat Card */}
        <div className={`relative bg-gradient-to-br ${stat.gradient} backdrop-blur-xl rounded-3xl p-6 border border-white/20 shadow-2xl transition-all duration-500 group-hover:scale-105 group-hover:-translate-y-2 group-hover:shadow-2xl ${stat.glow}`}>
          
          {/* Animated Border */}
          <div className="absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r from-white/20 via-transparent to-white/20 bg-clip-border opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
          
          {/* Icon Container */}
          <div className="relative mb-4">
            <div className="absolute inset-0 bg-white/20 rounded-2xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto border border-white/20 group-hover:bg-white/20 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12">
              <stat.icon className="w-10 h-10 text-white group-hover:scale-110 transition-transform duration-300" />
            </div>
            
            {/* Icon Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>

          {/* Number with Counter Animation */}
          <div className="relative mb-3">
            <div className="text-4xl font-black text-white group-hover:scale-110 transition-transform duration-300">
              {stat.number}
            </div>
            {/* Number Glow */}
            <div className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r from-white to-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm">
              {stat.number}
            </div>
          </div>

          {/* Label */}
          <div className="text-white/90 text-sm font-semibold tracking-wide group-hover:text-white transition-colors duration-300">
            {stat.label}
          </div>

          {/* Progress Bar Animation */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10 rounded-b-3xl overflow-hidden">
            <div 
              className={`h-full bg-gradient-to-r ${stat.gradient} transition-all duration-1000 group-hover:w-full`}
              style={{ width: '0%' }}
            ></div>
          </div>

          {/* Hover Effect Lines */}
          <div className="absolute inset-0 rounded-3xl overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-white/50 to-transparent animate-shine"></div>
            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-white/50 to-transparent animate-shine delay-500"></div>
          </div>
        </div>

        {/* Connection Lines Between Stats */}
        {index < 2 && (
          <div className="absolute top-1/2 -right-3 transform translate-y-1/2 w-6 h-0.5 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200"></div>
        )}
      </div>
    ))}
  </div>

  {/* Stats Navigation Dots */}
  <div className="flex justify-center gap-2 mt-8">
    {[0, 1, 2].map((index) => (
      <button
        key={index}
        onClick={() => setActiveStat(index)}
        className={`w-3 h-3 rounded-full transition-all duration-300 ${
          activeStat === index 
            ? 'bg-cyan-400 scale-125' 
            : 'bg-white/30 hover:bg-white/50'
        }`}
      />
    ))}
  </div>
</div>

              {/* Social Proof Desktop */}
              <div className="flex items-center gap-6 pt-4">
                <div className="flex items-center gap-3 text-gray-300">
                  <div className="flex -space-x-3">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full border-2 border-gray-900"></div>
                    ))}
                  </div>
                  <div>
                    <div className="font-semibold">+150 Mahasiswa</div>
                    <div className="text-sm text-gray-400">Bergabung dengan kami</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Visual Content */}
<div className="relative">
  <div 
    className={`relative mx-auto lg:ml-auto max-w-md transition-all duration-1000 ${
      isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-10 opacity-0 scale-95'
    }`}
  >
    {/* Floating Elements - Tetap ada */}
    <div className="absolute -top-8 -left-8 w-32 h-32 bg-cyan-500/20 rounded-3xl blur-xl animate-float"></div>
    <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-500/20 rounded-3xl blur-xl animate-float delay-1000"></div>
    <div className="absolute top-1/2 -right-12 w-24 h-24 bg-purple-500/15 rounded-2xl blur-xl animate-float delay-500"></div>
    
    {/* Orbital Rings - Tetap ada tapi lebih rapi */}
    <div className="absolute inset-0 -m-4 pointer-events-none">
      <div className="absolute inset-0 border border-cyan-400/15 rounded-3xl animate-spin-slow"></div>
      <div className="absolute inset-3 border border-blue-400/10 rounded-2xl animate-spin-slow reverse"></div>
    </div>

    {/* Animated Particles - Tetap ada tapi lebih sedikit */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-cyan-400/30 rounded-full animate-float"
          style={{
            left: `${20 + Math.random() * 60}%`,
            top: `${20 + Math.random() * 60}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${4 + Math.random() * 3}s`
          }}
        />
      ))}
    </div>

    {/* Main Logo Container */}
    <div className="relative group">
      {/* Outer Glow - Tetap ada */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/25 to-blue-500/25 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
      
      {/* Main Card */}
      <div className="relative bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl shadow-cyan-500/15 group-hover:shadow-blue-500/25 transition-all duration-500 group-hover:scale-105">
        
       
        <div className="relative z-10">
          <img 
            src="/logo bem.jpg" 
            alt="Logo BEM FIKOM" 
            className="w-full h-auto object-contain transform group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>
      {/* Additional Floating Elements - Tetap ada tapi lebih sedikit */}
      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-6 bg-cyan-400/20 rounded-full blur-sm animate-float delay-1500"></div>
      </div>
      <div className="absolute -bottom-3 left-1/4 transform -translate-x-1/2">
        <div className="w-4 h-4 bg-blue-400/20 rounded-full blur-sm animate-float delay-2000"></div>
      </div>
      <div className="absolute -bottom-3 right-1/4 transform translate-x-1/2">
        <div className="w-5 h-5 bg-purple-400/20 rounded-full blur-sm animate-float delay-2500"></div>
      </div>
</div>
    {/* Connection Lines */}
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-0 left-1/2 w-0.5 h-20 bg-gradient-to-b from-cyan-400/50 to-transparent"></div>
      <div className="absolute bottom-0 left-1/2 w-0.5 h-20 bg-gradient-to-t from-blue-400/50 to-transparent"></div>
      <div className="absolute top-1/2 left-0 w-20 h-0.5 bg-gradient-to-r from-purple-400/50 to-transparent"></div>
      <div className="absolute top-1/2 right-0 w-20 h-0.5 bg-gradient-to-l from-cyan-400/50 to-transparent"></div>
    </div>
  </div>
</div>
          </div>
        )}

        {/* Desktop Scroll Indicator */}
        {!isMobile && (
          <div 
            className={`flex flex-col items-center gap-4 pt-16 transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
            style={{ transitionDelay: '1200ms' }}
          >
            <div className="text-cyan-300/80 text-sm font-medium tracking-wider">SCROLL TO EXPLORE</div>
            <div className="w-8 h-12 border-2 border-cyan-400/40 rounded-2xl flex justify-center p-1 bg-gradient-to-b from-cyan-500/20 to-transparent group hover:border-cyan-400/60 transition-all duration-300">
              <div className="w-1.5 h-4 bg-cyan-400 rounded-full mt-1 animate-bounce group-hover:animate-pulse"></div>
            </div>
          </div>
        )}
      </div>

     <style jsx>{`
  @keyframes gradient {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
  }
  @keyframes float {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-20px) rotate(180deg); }
  }
  @keyframes spin-slow {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
  @keyframes bounce-slow {
    0%, 100% { transform: translateY(0) rotate(6deg); }
    50% { transform: translateY(-10px) rotate(6deg); }
  }
  .animate-gradient {
    background-size: 200% 200%;
    animation: gradient 4s ease infinite;
  }
  .animate-float {
    animation: float 6s ease-in-out infinite;
  }
  .animate-spin-slow {
    animation: spin-slow 8s linear infinite;
  }
  .animate-spin-slow.reverse {
    animation-direction: reverse;
  }
  .animate-bounce-slow {
    animation: bounce-slow 3s ease-in-out infinite;
  }
    @keyframes gradient {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
  }
  @keyframes float {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-10px) rotate(5deg); }
  }
  @keyframes spin-slow {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
  @keyframes bounce-slow {
    0%, 100% { transform: translateY(0) rotate(3deg); }
    50% { transform: translateY(-5px) rotate(3deg); }
  }
  .animate-gradient {
    background-size: 200% 200%;
    animation: gradient 4s ease infinite;
  }
  .animate-float {
    animation: float 6s ease-in-out infinite;
  }
  .animate-spin-slow {
    animation: spin-slow 12s linear infinite;
  }
  .animate-spin-slow.reverse {
    animation-direction: reverse;
  }
  .animate-bounce-slow {
    animation: bounce-slow 4s ease-in-out infinite;
  }
`}</style>
    </header>
  );
};

export default HeroSection;