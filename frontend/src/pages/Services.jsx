import React from 'react';
import { Check } from 'lucide-react';
import CTA from '../sections/CTA';

const services = [
  {
    id: 1,
    title: 'Custom Exhibition Stands',
    description: 'We design bespoke architecture that translates your brand\'s DNA into physical space. From double-decker structures to seamless curved LED walls, our custom stands guarantee a show-stopping presence.',
    features: ['3D Conceptualization', 'Premium Materials', 'Interactive Displays', 'Dedicated Project Manager'],
    image: 'https://designbullz.com/wp-content/uploads/2024/10/2-scaled.jpg'
  },
  {
    id: 2,
    title: 'Modular Solutions',
    description: 'Our modular systems provide maximum flexibility and cost-efficiency without compromising on high-end aesthetics. Perfect for brands with an active multi-show calendar.',
    features: ['Reusable Frameworks', 'Scalable Designs', 'Rapid Installation', 'Eco-Friendly Options'],
    image: 'https://www.expoexhibitionstands.com/wp-content/uploads/2025/03/img-20241121-wa0310.webp'
  },
  {
    id: 3,
    title: 'Pavilion Design',
    description: 'Representing a country or large consortium requires scale and cohesion. We specialize in designing massive pavilion spaces that guide foot traffic effortlessly through multiple vendor zones.',
    features: ['Zone Mapping', 'Wayfinding Signage', 'Mass Scale Procurement', 'On-site Hospitality'],
    image: 'https://spectracreatives.com/wp-content/uploads/2025/08/india-warehousing-show-2-1030x771.jpg'
  },
  {
    id: 4,
    title: 'Event Logistics & Storage',
    description: 'Leave the heavy lifting to us. We handle global shipping, customs clearance, venue regulations, and secure climate-controlled storage for your exhibition assets between shows.',
    features: ['Global Freight', 'Customs Handling', 'Asset Storage', 'Maintenance & Repair'],
    image: 'https://www.showplace.co.uk/wp-content/uploads/2025/01/DSC2144.jpg'
  }
];

function Services() {
  return (
    <div className="bg-white min-h-screen">
      
      {/* Mini Hero Header */}
      <section className="relative w-full h-[40vh] flex items-center justify-center overflow-hidden bg-gray-900 border-b border-gray-100">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://www.displayint.com/files/display/images/content/projekte/spitze-innotrans-berlin-2022/stage/messebau-spitzke-2022-innotrans-berlin-stage.jpg" 
            alt="Mavonorm Services" 
            className="w-full h-full object-cover object-bottom opacity-20"
          />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <p className="uppercase tracking-widest font-bold text-orange-500 text-sm mb-4">Our Expertise</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
            Comprehensive <span className="text-orange-500 font-light">Services</span>
          </h1>
          <p className="text-lg md:text-xl font-light text-gray-300 max-w-2xl mx-auto">
            From initial concept to final teardown, we provide end-to-end exhibition solutions on a global scale.
          </p>
        </div>
      </section>


      <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto space-y-32">
        {services.map((service, index) => {
          // Check if index is even or odd for alternating layout (Image Left vs Image Right)
          const isEven = index % 2 === 0;

          return (
            <div key={service.id} className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-20 items-center`}>
              
              {/* Image Block */}
              <div className="w-full lg:w-1/2 relative group">
                <div className="absolute inset-0 bg-orange-600 translate-x-4 translate-y-4 rounded-lg z-0 transition-transform duration-500 group-hover:translate-x-6 group-hover:translate-y-6"></div>
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="relative z-10 w-full h-[400px] object-cover rounded-lg shadow-xl"
                />
              </div>
              
              {/* Text Block */}
              <div className="w-full lg:w-1/2">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  {service.title}
                </h2>
                <p className="text-lg text-gray-600 font-light leading-relaxed mb-8">
                  {service.description}
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center shrink-0">
                        <Check size={14} className="text-orange-600" />
                      </div>
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                <button className="mt-10 border border-gray-300 py-3 px-8 text-gray-700 rounded-lg hover:border-orange-600 hover:text-orange-600 transition-colors font-semibold shadow-sm">
                  Learn More
                </button>
              </div>

            </div>
          );
        })}
      </section>

      {/* CTA Section */}
      <CTA />

    </div>
  );
}

export default Services;