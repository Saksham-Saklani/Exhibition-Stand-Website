import React from 'react';
import CTA from '../sections/CTA';
import portfolio1 from '../assets/portfolio1.jpg'
import portfolio2 from '../assets/portfolio2.webp'
import portfolio3 from '../assets/portfolio3.jpg'
import portfolio4 from '../assets/portfolio4.webp'
import portfolio5 from '../assets/portfolio5.webp'
import portfolio6 from '../assets/portfolio6.png'
import portfolio7 from '../assets/portfolio7.jpg'
import portfolio8 from '../assets/portfolio8.jpg'
import aboutImage from '../assets/about-img.webp';
import portfolio10 from '../assets/portfolio10.webp'
import portfolio11 from '../assets/portfolio11.jpg'
import portfolio12 from '../assets/portfolio12.jpg'


const portfolioItems = [
  {
    title: 'Global Tech Expo',
    image: portfolio1,
    location: 'Dubai'
  },
  {
    title: 'Health & Wellness Summit',
    image: portfolio2,
    location: 'Berlin'
  },
  {
    title: 'Auto Show Pavilion',
    image: portfolio3,
    location: 'Las Vegas'
  },
  {
    title: 'Future Energy Forum',
    image: portfolio4,
    location: 'Frankfurt'
  },
  {
    title: 'Smart City Expo',
    image: portfolio5,
    location: 'Spain'
  },
  {
    title: 'Gaming Convention',
    image: portfolio6,
    location: 'Italy'
  },
  {
    title: 'Aviation Summit',
    image: portfolio7,
    location: 'Kuwait'
  },
  {
    title: 'Construction Expo',
    image: portfolio8,
    location: 'California'
  },
  {
    title: 'Marketing Week',
    image: aboutImage,
    location: 'Qatar'
  },
  {
    title: 'ComiCon',
    image: portfolio10,
    location: 'New York'
  },
  {
    title: 'RSA Conference',
    image: portfolio11,
    location: 'Saudi Arabia'
  },
  {
    title: 'EVT',
    image: portfolio12,
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