import React from 'react';
import { Layers, Lightbulb, Hammer, Truck, ArrowRight } from 'lucide-react';

const services = [
  {
    id: 1,
    title: 'Custom Exhibition Design',
    icon: Lightbulb,
  },
  {
    id: 2,
    title: 'Modular Solutions',
    icon: Layers,
  },
  {
    id: 3,
    title: 'Stand Fabrication',
    icon: Hammer,
  },
  {
    id: 4,
    title: 'Logistics & Installation',
    icon: Truck,
  }
];

function ServicesPreview() {
  return (
    <section className="py-24 px-4 md:px-8 bg-white max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-20 border-b border-gray-200 pb-10">
        <div className="max-w-xl">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 tracking-tight">
            Our Core <span className="font-bold">Services</span>
          </h2>
          <p className="text-lg text-gray-500 font-light">
            End-to-end exhibition solutions designed to make your brand stand out on the show floor.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service) => {
          const IconComponent = service.icon;
          return (
            <div 
              key={service.id} 
              className="group relative cursor-pointer h-72 border border-gray-100 flex flex-col items-center justify-center overflow-hidden bg-white hover:border-orange-200 hover:shadow-2xl transition-all duration-500"
            >
              {/* Massive background icon */}
              <div className="absolute inset-0 flex items-center justify-center text-gray-200 group-hover:text-orange-50/60 group-hover:scale-125 transition-all duration-700 z-0">
                <IconComponent size={200} strokeWidth={0.5} />
              </div>

              {/* Title & Read More Over Icon */}
              <div className="relative z-10 text-center px-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2 group-hover:-translate-y-2 group-hover:text-orange-600 transition-all duration-500">
                  {service.title}
                </h3>
                
                {/* Read More button appearing on hover */}
                <div className="flex items-center justify-center text-orange-600 font-semibold uppercase tracking-widest text-sm opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-75">
                  <span className="mr-2">Read More</span>
                  <ArrowRight size={16} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default ServicesPreview;
