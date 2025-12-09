import React from 'react';
import { PROJECTS } from '../constants';

const ImageSlider: React.FC = () => {
  // Duplicate the projects array to create a seamless infinite loop
  const sliderItems = [...PROJECTS, ...PROJECTS];

  return (
    <section className="py-12 bg-white border-b border-slate-100 overflow-hidden">
      <div className="container mx-auto px-6 mb-6">
         <p className="text-center text-sm font-bold text-slate-400 uppercase tracking-widest">Featured Work Preview</p>
      </div>
      <div className="relative w-full">
        <div className="flex w-max animate-scroll hover:pause-animation">
          {sliderItems.map((project, index) => (
            <div 
              key={`${project.id}-${index}`} 
              // Dimensions set to match aspect ratio of 940x788
              // Mobile: 300x251 (approx 32% scale)
              // Desktop: 470x394 (50% scale)
              className="w-[300px] h-[251px] md:w-[470px] md:h-[394px] mx-4 relative group flex-shrink-0 rounded-xl overflow-hidden shadow-md"
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                 <p className="text-white font-bold text-lg">{project.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageSlider;