import React from 'react';
import { CONTACT_INFO, PROFILE_IMAGE } from '../constants';
import { ArrowRight, Download } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-brand-light overflow-hidden pt-20">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-100 transform -skew-x-12 translate-x-20 z-0" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-6 animate-fade-in-up">
            <div className="inline-block px-4 py-2 bg-blue-100 text-brand-accent rounded-full text-sm font-semibold tracking-wide">
              Shopify & React.js Developer
            </div>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-brand-dark leading-tight">
              Crafting <span className="text-brand-accent">Digital</span> <br/>
              Masterpieces
            </h1>
            <p className="text-lg text-slate-600 max-w-lg leading-relaxed">
              I help brands build high-converting Shopify stores and dynamic web applications. 
              Let's turn your eCommerce vision into reality with speed, SEO, and stunning design.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <a 
                href="#contact" 
                className="px-8 py-4 bg-brand-dark text-white rounded-lg font-medium hover:bg-slate-800 transition-colors flex items-center gap-2 shadow-lg hover:shadow-xl"
              >
                Let's Talk <ArrowRight className="w-4 h-4" />
              </a>
              <a 
                href={CONTACT_INFO.linkedin}
                target="_blank"
                rel="noreferrer" 
                className="px-8 py-4 bg-white border border-slate-200 text-brand-dark rounded-lg font-medium hover:bg-slate-50 transition-colors flex items-center gap-2"
              >
                LinkedIn <Download className="w-4 h-4" />
              </a>
            </div>

            <div className="flex items-center gap-4 pt-8 text-sm text-slate-500">
               <div className="flex -space-x-2">
                 {[1,2,3].map(i => (
                   <div key={i} className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white flex items-center justify-center text-xs font-bold">
                     {i}+
                   </div>
                 ))}
               </div>
               <p>Trusted by 20+ Businesses globally</p>
            </div>
          </div>
          
          <div className="flex-1 relative">
            <div className="relative w-72 h-72 md:w-96 md:h-96 mx-auto">
              <div className="absolute inset-0 border-2 border-brand-accent rounded-full transform translate-x-4 translate-y-4"></div>
              <img 
                src={PROFILE_IMAGE} 
                alt="Sameer Ahmed" 
                className="w-full h-full object-cover rounded-full shadow-2xl relative z-10 border-4 border-white"
              />
              {/* Floating Badge */}
              <div className="absolute -bottom-4 right-10 bg-white p-4 rounded-xl shadow-lg z-20 flex items-center gap-3 animate-bounce-slow">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                   <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                </div>
                <div>
                  <p className="text-xs text-slate-500">Projects Completed</p>
                  <p className="text-lg font-bold text-brand-dark">50+</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
