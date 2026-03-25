import React from 'react';
import { useNavigate } from 'react-router-dom';

function Hero() {
  const navigate = useNavigate()
  return (
    <div className="relative w-full h-[85vh] flex items-center justify-center overflow-hidden bg-gray-900">

      <div className="absolute inset-0 z-0">
        <img 
          src="https://www.displayint.com/files/display/images/content/projekte/spitze-innotrans-berlin-2022/stage/messebau-spitzke-2022-innotrans-berlin-stage.jpg" 
          alt="Exhibition Hero Banner" 
          className="w-full h-full object-cover object-bottom scale-105"
        />

        <div className="absolute inset-0 bg-gray-900/40 bg-linear-to-t from-gray-900 via-gray-900/60 to-transparent"></div>
      </div>


      <div className="relative z-10 text-center text-white px-4 md:px-8 mt-16 max-w-7xl mx-auto flex flex-col items-center">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-light mb-8 leading-tight tracking-tight">
          We Build Stands <br className="hidden md:block"/>
          <span className='font-bold text-orange-500'>That Stand Out.</span>
        </h1>
        <p className="text-lg md:text-2xl mb-12 text-gray-300 font-light max-w-3xl">
          We design and build immersive spaces that captivate your audience, amplify your brand, and create unforgettable moments.
        </p>
        <div className="flex flex-col sm:flex-row gap-6">
          <button className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 px-12 rounded-md text-sm transition-all shadow-lg transform hover:-translate-y-1 uppercase tracking-wider  cursor-pointer"
          onClick={() => navigate('/portfolio')}>
            Explore Portfolio
          </button>
          <button className="border border-white/30 hover:border-white hover:bg-white hover:text-gray-900 text-white font-bold py-4 px-12 rounded-md text-sm transition-all shadow-lg transform hover:-translate-y-1 uppercase tracking-wider backdrop-blur-sm cursor-pointer"
          onClick={() => navigate('/contact')}>
            Get in Touch
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;