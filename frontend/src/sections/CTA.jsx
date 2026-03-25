import React from 'react';
import { useNavigate } from 'react-router-dom';

function CTA() {
  const navigate = useNavigate()
  return (
    <section className="bg-gray-900 text-white py-24 relative overflow-hidden">

      <div className="absolute inset-0 bg-linear-to-tr from-gray-900 via-gray-800 to-orange-950/20 z-0"></div>
      
      <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
          Ready to make a lasting impression at your next event?
        </h2>
        <p className="text-xl text-gray-300 font-light mb-12 max-w-2xl mx-auto">
          Let’s discuss how our bespoke exhibition stands can elevate your brand, capture leads, and stand out in a crowded hall.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button onClick={() => navigate("/contact")} className="bg-orange-600 text-white font-bold py-4 px-10 rounded-lg text-lg hover:bg-orange-700 transition-colors shadow-lg">
            Request a Free Quote
          </button>
          <button onClick={() => navigate("/portfolio")} className="border-2 border-white/20 text-white font-bold py-4 px-10 rounded-lg text-lg hover:border-white hover:bg-white hover:text-gray-900 transition-all">
            See Our Work
          </button>
        </div>
      </div>
    </section>
  );
}

export default CTA;