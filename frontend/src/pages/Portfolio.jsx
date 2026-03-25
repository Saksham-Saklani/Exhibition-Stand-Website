import React from 'react';
import CTA from '../sections/CTA';

const portfolioItems = [
  {
    title: 'Global Tech Expo',
    image: 'https://designbullz.com/wp-content/uploads/2024/10/2-scaled.jpg',
    location: 'Dubai'
  },
  {
    title: 'Health & Wellness Summit',
    image: 'https://www.arabexpo.me/wp-content/uploads/2024/09/blog-4-scaled.jpg',
    location: 'Berlin'
  },
  {
    title: 'Auto Show Pavilion',
    image: 'https://spectracreatives.com/wp-content/uploads/2025/08/india-warehousing-show-2-1030x771.jpg',
    location: 'Las Vegas'
  },
  {
    title: 'Future Energy Forum',
    image: 'https://exhibitnstandsbuilder.com/wp-content/uploads/2025/03/Top-exhibition-stand-builders-in-Europe.jpg',
    location: 'Frankfurt'
  },
  {
    title: 'Smart City Expo',
    image: 'https://i0.wp.com/crystalcraftexpo.com/wp-content/uploads/2025/09/veolia.jpg?fit=800%2C600&ssl=1',
    location: 'Spain'
  },
  {
    title: 'Gaming Convention',
    image: 'https://quantumintegrated.in/wp-content/uploads/2025/06/2-1536x864.png',
    location: 'Italy'
  },
  {
    title: 'Aviation Summit',
    image: 'https://sdragon.com.vn/wp-content/uploads/2025/12/thiet-ke-gian-hang-trien-lam-2026-1.jpg',
    location: 'Kuwait'
  },
  {
    title: 'Construction Expo',
    image: 'https://www.exhibition-booth-design.com/wp-content/uploads/2024/04/02-4-1.jpg',
    location: 'California'
  },
  {
    title: 'Marketing Week',
    image: 'https://www.expoexhibitionstands.com/wp-content/uploads/2025/03/img-20241121-wa0310.webp',
    location: 'Qatar'
  },
  {
    title: 'ComiCon',
    image: 'https://www.quadrant2design.com/wp-content/uploads/2025/01/Mighty-Jaxx-Exhibition-Stand-by-Quadrant2Design.jpg',
    location: 'New York'
  },
  {
    title: 'RSA Conference',
    image: 'https://expopartner.dk/wp-content/uploads/2026/02/IMG_0376_red_komp.jpg',
    location: 'Saudi Arabia'
  },
  {
    title: 'EVT',
    image: 'https://www.popology.com.au/wp-content/uploads/2024/08/Pop_Clients_EVT-768x522.jpg',
    location: 'Sydney'
  },
];

function Portfolio() {
  return (
    <div className="bg-white min-h-screen">
      
      {/* Mini Hero Header */}
      <section className="relative w-full h-[40vh] flex items-center justify-center overflow-hidden bg-gray-900 border-b border-gray-100">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://www.showplace.co.uk/wp-content/uploads/2025/01/DSC2144.jpg" 
            alt="Portfolio Mavonorm" 
            className="w-full h-full object-cover object-center opacity-30"
          />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <p className='uppercase tracking-widest font-bold text-orange-500 text-sm mb-4'>Rentals</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
            Our <span className="text-orange-500 font-light">Work</span>
          </h1>
          <p className="text-lg md:text-xl font-light text-gray-300 max-w-2xl mx-auto">
            Explore our diverse portfolio of award-winning exhibition stands and immersive environments.
          </p>
        </div>
      </section>


      <section className="py-24 px-4 md:px-8 max-w-8xl mx-auto">
        <div className="flex flex-col items-center justify-center mb-16">
          <h2 className="text-3xl md:text-5xl text-gray-900 mb-8 border-b pb-4 font-light border-gray-400 ">Booth Designs Built for Global Brands</h2>
          
        </div>

        {/* Portfolio Grid (Matching tight gap-2 style) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {portfolioItems.map((item, index) => (
            <div key={index} className="relative overflow-hidden group">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-80 object-cover hover:scale-105 transition-transform duration-500 cursor-pointer"
              />

              <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/80 to-transparent p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <span className="text-orange-500 text-xs font-bold uppercase tracking-widest block mb-1">
                  {item.location}
                </span>
                <h3 className="text-white text-xl font-semibold">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* CTA Section */}
      <CTA />
    </div>
  );
}

export default Portfolio;