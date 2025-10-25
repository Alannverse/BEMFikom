import React from 'react';

const ComingSoon = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-xl mx-auto text-center">
        <div 
          className="space-y-8"
          data-aos="fade-up" 
          data-aos-duration="400"
        >
         
          <div className="space-y-4">
            <h3 className="text-5xl md:text-6xl font-black text-white">
              COMING
              <span className="block text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text">
                SOON
              </span>
            </h3>
            
            
            <div 
              className="w-24 h-0.5 bg-gradient-to-r from-blue-500/40 to-purple-500/40 mx-auto rounded-full"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="600"
            ></div>
          </div>
          
         
          <p 
            className="text-blue-200/80 text-xl"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Website resmi BEM FIKOM <span className="text-cyan-300">segera launching</span>!
          </p>

         
          <div 
            className="flex justify-center items-center gap-3"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComingSoon;