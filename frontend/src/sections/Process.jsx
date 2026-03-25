import React from 'react';
import { MessageSquare, PenTool, Wrench, CheckCircle } from 'lucide-react';

const processSteps = [
  {
    title: 'The Brief',
    description: 'We begin by understanding your brand identity, marketing objectives, and the specific requirements of your exhibition space.',
    icon: MessageSquare,
  },
  {
    title: '3D Design',
    description: 'Our architects create immersive 3D mockups. We refine the visual concepts until we hit the perfect balance of form and function.',
    icon: PenTool,
  },
  {
    title: 'Fabrication',
    description: 'Once approved, your stand goes into production in our in-house facility, using premium materials under strict quality control.',
    icon: Wrench,
  },
  {
    title: 'Delivery',
    description: 'We handle logistics, on-site installation, and dismantling. You arrive at a turnkey stand ready to engage your audience.',
    icon: CheckCircle,
  }
];

function Process() {
  return (
    <section className="py-24 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        

        <div className="text-center max-w-2xl mx-auto mb-20">
          <h4 className="text-orange-600 font-bold uppercase tracking-widest text-sm mb-3">How We Work</h4>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Proven Process</h2>
          <p className="text-lg text-gray-600 font-light">
            An end-to-end operational framework ensuring seamless delivery from the first sketch to the final handshake.
          </p>
        </div>


        <div className="relative">

          <div className="hidden lg:block absolute top-[50px] left-[10%] right-[10%] h-[2px] bg-gray-200 z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 relative z-10">
            {processSteps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={index} className="relative group flex flex-col items-center text-center">
                  
                  <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center border-4 border-gray-50 shadow-sm relative group-hover:border-orange-100 group-hover:shadow-lg transition-all duration-500 mb-6">
                    <IconComponent size={32} className="text-gray-400 group-hover:text-orange-600 transition-colors duration-500" strokeWidth={1.5} />
                  </div>

                  <h3 className="text-2xl font-semibold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-gray-500 font-light leading-relaxed px-2">
                    {step.description}
                  </p>
                  
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}

export default Process;