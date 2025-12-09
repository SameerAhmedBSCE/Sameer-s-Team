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
              className="w-64 md:w-80 h-40 md:h-52 mx-4 relative group flex-shrink-0 rounded-xl overflow-hidden shadow-md"
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