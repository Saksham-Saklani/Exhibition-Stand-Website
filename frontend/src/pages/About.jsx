import React from 'react';
import { Target, Globe, Award, MapPin, Building2, Users, Handshake, UserStar} from 'lucide-react';
import CTA from '../sections/CTA';
import aboutBanner from '../assets/aboutBanner.jpg';
import aboutImage from '../assets/about-img.webp';


const stats = [
  { label: 'Years of Experience', value: '15+', icon: Award },
  { label: 'Projects Completed', value: '1,200+', icon: Target },
  { label: 'Happy Clients', value: '500+', icon: UserStar },
  { label: 'Global Partners', value: '30+', icon: Globe },
  { label: 'Countries', value: '20+', icon: MapPin },
  { label: 'Exhibitions', value: '100+', icon: Building2 },
  { label: 'Professionals', value: '200+', icon: Users },
  { label: 'Industries', value: '50+', icon: Handshake },
  
];

function About() {
  return (
    <div className="bg-white">

      <section className="relative w-full h-[40vh] flex items-center justify-center overflow-hidden bg-gray-900 border-b border-gray-100">
        <div className="absolute inset-0 z-0">
          <img 
            src={aboutBanner} 
            alt="About Mavonorm" 
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <p className='uppercase tracking-widest font-bold text-orange-500 text-sm mb-4'>Since 2010</p>

          <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
            About <span className="text-orange-500 font-light">Mavonorm</span>
          </h1>
          <p className="text-lg md:text-xl font-light text-gray-300 max-w-2xl mx-auto">
            Turning creative concepts into physical realities on the global exhibition stage.
          </p>
        </div>
      </section>


      <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="w-full md:w-1/2">
            <h4 className="text-orange-600 font-bold uppercase tracking-widest text-sm mb-3">Our Story</h4>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Designing spaces that <br className="hidden md:block"/>
              <span className="font-light">inspire connection.</span>
            </h2>
            <p className="text-gray-600 font-light text-lg mb-6 leading-relaxed">
              Based in the heart of the design district, Mavonorm was founded on a simple principle: exhibition stands shouldn't just take up floor space; they should tell a compelling story. We are an end-to-end design and fabrication agency dedicated to elevating brand presence at trade shows across the globe.
            </p>
            <p className="text-gray-600 font-light text-lg mb-8 leading-relaxed">
              From the initial 3D sketch to the final on-site installation, our team of architects, carpenters, and logistics experts work closely with you. We pride ourselves on executing complex, bespoke modular designs flawlessly and sustainably.
            </p>
            <div className="flex items-center gap-4 border-l-4 border-orange-600 pl-6">
              <p className="text-xl font-medium text-gray-900 italic">
                "Our mission is to make your brand the unmistakable centerpiece of any event."
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 relative">
            <div className="absolute inset-0 bg-orange-600 translate-x-4 translate-y-4 rounded-lg z-0"></div>
            <img 
              src={aboutImage} 
              alt="Mavonorm Team at work" 
              className="relative z-10 w-full h-auto rounded-lg shadow-xl object-cover"
            />
          </div>
        </div>
      </section>


      <section className="bg-gray-50 py-24 border-y border-gray-100">
        <div className="max-w-5xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-orange-400 flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300">
                  <div className="w-16 h-16 bg-orange-50 text-orange-600 rounded-full flex items-center justify-center mb-6">
                    <Icon size={28} />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</h3>
                  <p className="text-gray-500 font-medium uppercase tracking-wider text-sm">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>


      <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto text-center">
        <h4 className="text-orange-600 font-bold uppercase tracking-widest text-sm mb-4">Trusted By Leaders</h4>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-16">
          Our Global Partners & Clients
        </h2>
        

        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          <div className="text-2xl font-black uppercase tracking-tighter">Acme Corp</div>
          <div className="text-3xl font-serif italic">Visionary</div>
          <div className="text-2xl font-bold tracking-widest">GLOBALTECH</div>
          <div className="text-3xl font-light">Nexus</div>
          <div className="text-2xl font-extrabold flex items-center gap-1">
            <span className="w-4 h-4 bg-gray-900 leading-none"></span> LOGIQ
          </div>
        </div>
      </section>


      <CTA />
    </div>
  );
}

export default About;