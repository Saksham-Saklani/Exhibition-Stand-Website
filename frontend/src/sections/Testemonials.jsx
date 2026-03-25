import React from 'react';
import { Star } from 'lucide-react';
import avatar1 from '../assets/avatar1.jpg'
import avatar2 from '../assets/avatar2.jpg'
import avatar3 from '../assets/avatar3.jpg'


const testimonials = [
  {
    name: 'Sarah Jenkins',
    company: 'TechFlow Solutions',
    image: avatar1,
    review: 'The team delivered an exceptional modular stand that completely transformed our presence at the annual trade show. Their attention to detail and on-site support were phenomenal.',
  },
  {
    name: 'Michael Chen',
    company: 'Global Innovate',
    image: avatar2,
    review: 'From the initial 3D designs to the final build, the process was seamless. The custom exhibition stand they built for us was the highlight of the event.',
  },
  {
    name: 'Emma Rossi',
    company: 'Visionary Dynamics',
    image: avatar3,
    review: 'Professional, creative, and highly reliable. They handled all the logistics so we could focus on networking with our clients. Highly recommended!',
  }
];

function Testemonials() {
  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h4 className="text-orange-600 font-bold uppercase tracking-widest text-sm mb-3">Client Stories</h4>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">What Our Clients Say</h2>
          <p className="text-lg text-gray-500 font-light">
            Don't just take our word for it. Here is what leading brands have to say about our exhibition services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-10 rounded-2xl hover:shadow-xl transition-shadow duration-300 border border-gray-100 flex flex-col justify-between h-full">
              

              <div>
                <div className="flex gap-1 mb-6 text-orange-500">
                  <Star size={20} fill="currentColor" />
                  <Star size={20} fill="currentColor" />
                  <Star size={20} fill="currentColor" />
                  <Star size={20} fill="currentColor" />
                  <Star size={20} fill="currentColor" />
                </div>
                <p className="text-gray-700 font-light text-lg mb-8 italic">
                  "{testimonial.review}"
                </p>
              </div>
              

              <div className="flex items-center gap-4 mt-auto">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-14 h-14 rounded-full object-cover border-2 border-orange-100 shadow-sm"
                />
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm font-medium text-orange-600">{testimonial.company}</p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Testemonials;