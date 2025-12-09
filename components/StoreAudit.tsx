import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

const StoreAudit: React.FC = () => {
  const [email, setEmail] = useState('');
  const [storeUrl, setStoreUrl] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this to your backend
    console.log("Audit request:", { email, storeUrl });
    setSubmitted(true);
    setTimeout(() => {
        setSubmitted(false);
        setEmail('');
        setStoreUrl('');
    }, 5000);
  };

  return (
    <section className="py-16 bg-blue-50 border-y border-blue-100">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden md:flex">
            <div className="p-8 md:p-12 md:w-1/2 bg-brand-dark text-white flex flex-col justify-center">
                <h2 className="text-3xl font-serif font-bold mb-4">
                    Get a Free <span className="text-brand-accent">Store Audit</span>
                </h2>
                <p className="text-slate-300 leading-relaxed text-lg">
                    If your Shopify store needs a trust-first redesign, I can quote you the mistakes and improvements you can do in your store for better conversions.
                </p>
            </div>
            
            <div className="p-8 md:p-12 md:w-1/2 flex items-center">
                {submitted ? (
                    <div className="w-full text-center space-y-4 animate-fade-in-up">
                        <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
                            <CheckCircle className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold text-brand-dark">Request Received!</h3>
                        <p className="text-slate-600">I'll review your store and send the audit to your email shortly.</p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="w-full space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">Your Email</label>
                            <input 
                                type="email" 
                                required
                                placeholder="name@company.com"
                                className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-brand-accent focus:border-brand-accent outline-none"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">Store URL</label>
                            <input 
                                type="url" 
                                required
                                placeholder="https://yourstore.com"
                                className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-brand-accent focus:border-brand-accent outline-none"
                                value={storeUrl}
                                onChange={(e) => setStoreUrl(e.target.value)}
                            />
                        </div>
                        <button 
                            type="submit" 
                            className="w-full py-3 bg-brand-accent hover:bg-blue-600 text-white font-bold rounded-lg transition-colors flex items-center justify-center gap-2"
                        >
                            Get Free Audit <Send className="w-4 h-4" />
                        </button>
                    </form>
                )}
            </div>
        </div>
      </div>
    </section>
  );
};

export default StoreAudit;