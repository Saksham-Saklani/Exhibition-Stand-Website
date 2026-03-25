import React from 'react'
import { useNavigate } from 'react-router-dom'
import portfolio1 from '../assets/portfolio1.jpg'
import portfolio2 from '../assets/portfolio2.webp'
import portfolio3 from '../assets/portfolio3.jpg'
import portfolio4 from '../assets/portfolio4.webp'
import portfolio5 from '../assets/portfolio5.webp'
import portfolio6 from '../assets/portfolio6.png'


function PortfolioPreview() {
    const navigate = useNavigate()
    const portfolio =[
        {
            image:portfolio1
        },
        {
            image:portfolio2
        },
        {
            image:portfolio3
        },
        {
            image:portfolio4
        },
        {
            image:portfolio5
        },
        {
            image:portfolio6
        },
    ]
  return (

      <section className='bg-white py-24 border-t border-gray-100'>
        <div className="max-w-7xl mx-auto px-4 md:px-8">
            
            {/* Standardized Header */}
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h4 className="text-orange-600 font-bold uppercase tracking-widest text-sm mb-3">Our Portfolio</h4>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Here is some of our best work</h2>
              <p className="text-lg text-gray-500 font-light">
                Take a look at the immersive exhibition spaces we have created for leading brands worldwide.
              </p>
            </div>

            {/* Grid layout */}
            <div className='grid grid-cols-1 md:grid-cols-3 gap-2 px-2 mb-16'>
                {portfolio.map((item, index) => (
                    <div key={index} className='overflow-hidden'>
                        <img className='w-full h-80 object-cover hover:scale-105 transition-all duration-300' src={item.image} alt="" />
                    </div>
                ))}
            </div>

            <div className='flex flex-col sm:flex-row items-center justify-center gap-4'>
                <button className='border border-gray-300 py-3 px-10 text-gray-700 rounded-lg hover:border-gray-900 hover:text-gray-900 transition-colors font-semibold text-lg cursor-pointer'
                onClick={() => navigate('/contact')}>Start Your Project</button>
                <button className='bg-orange-600 font-semibold text-white px-10 py-3 rounded-lg hover:bg-orange-700 transition-colors cursor-pointer text-lg shadow-md cursor-pointer'
                onClick={() => navigate('/portfolio')}>View Full Portfolio</button>
            </div>
            
        </div>
      </section>
  )
}

export default PortfolioPreview