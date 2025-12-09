import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Contact from './components/Contact';
import AdminDashboard from './components/AdminDashboard';
import GeminiAssistant from './components/GeminiAssistant';
import ImageSlider from './components/ImageSlider';
import StoreAudit from './components/StoreAudit';

function App() {
  const [isAdminOpen, setIsAdminOpen] = useState(false);

  // Analytics: Track Page View on Mount
  useEffect(() => {
    // Simple mock analytics tracking in localStorage
    const currentViews = parseInt(localStorage.getItem('pageViews') || '0');
    localStorage.setItem('pageViews', (currentViews + 1).toString());
  }, []);

  // Content Protection: Disable right-click and image dragging
  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };

    const handleDragStart = (e: DragEvent) => {
      // Prevent dragging of images
      if (e.target instanceof HTMLImageElement) {
        e.preventDefault();
      }
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('dragstart', handleDragStart);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('dragstart', handleDragStart);
    };
  }, []);

  return (
    <div className="font-sans text-brand-dark antialiased selection:bg-brand-accent selection:text-white">
      <Navbar onOpenAdmin={() => setIsAdminOpen(true)} />
      
      <main>
        <Hero />
        <ImageSlider />
        <Services />
        <StoreAudit />
        <Portfolio />
        <About />
        <Contact />
      </main>

      <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
        <div className="container mx-auto px-6 text-center md:text-left md:flex justify-between items-center">
          <div>
            <p className="font-serif text-white text-xl font-bold mb-2">Sameer Ahmed</p>
            <p className="text-sm">Building digital experiences that matter.</p>
          </div>
          <div className="mt-6 md:mt-0 text-sm">
            &copy; {new Date().getFullYear()} Sameer Ahmed. All rights reserved.
          </div>
        </div>
      </footer>

      <AdminDashboard isOpen={isAdminOpen} onClose={() => setIsAdminOpen(false)} />
      <GeminiAssistant />
    </div>
  );
}

export default App;