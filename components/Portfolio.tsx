import React from 'react';
import { PROJECTS } from '../constants';
import { ExternalLink } from 'lucide-react';

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <span className="text-brand-accent font-semibold tracking-wider text-sm uppercase">Recent Work</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-dark mt-2">Selected Projects</h2>
          </div>
          <a href="https://sameerahmedshopify.journoportfolio.com" target="_blank" rel="noreferrer" className="hidden md:flex items-center gap-2 text-slate-600 hover:text-brand-accent transition-colors">
            View All Projects <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project) => (
            <div key={project.id} className="group relative overflow-hidden rounded-xl bg-white shadow-md cursor-pointer h-80">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-brand-accent text-xs font-bold tracking-wider uppercase mb-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                  {project.category}
                </span>
                <h3 className="text-white text-2xl font-bold mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                  {project.title}
                </h3>
                <p className="text-slate-200 text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-150 line-clamp-2">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
          <a href="https://sameerahmedshopify.journoportfolio.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-brand-accent font-medium">
             View Full Portfolio <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
