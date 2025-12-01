import React from 'react';
import { ArrowRight } from 'lucide-react';

const steps = [
  {
    num: '01',
    title: 'Consultation',
    desc: 'Share your vision with us. We listen to your preferences, rhythm, and dreams.',
  },
  {
    num: '02',
    title: 'Curation',
    desc: 'We craft a preliminary itinerary with unique stays and experiences.',
  },
  {
    num: '03',
    title: 'Journey',
    desc: 'Embark on your trip with a digital guidebook and 24/7 support.',
  },
] as const;

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-24 bg-sand-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          <div className="relative">
             <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl">
               <img src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Travel Planning" className="w-full h-auto object-cover" />
             </div>
             {/* Decorative box behind */}
             <div className="absolute -top-4 -left-4 w-full h-full border border-emerald-900/20 rounded-lg z-0"></div>
          </div>

          <div>
            <h2 className="font-serif text-4xl md:text-5xl text-emerald-950 mb-12">Seamlessly Planned.<br/>Unforgettable.</h2>
            
            <div className="space-y-12">
              {steps.map((step) => (
                <div key={step.num} className="flex gap-8 group">
                  <span className="font-serif text-4xl text-terracotta-400 group-hover:text-terracotta-500 transition-colors">{step.num}</span>
                  <div>
                    <h3 className="font-serif text-2xl text-emerald-900 mb-2">{step.title}</h3>
                    <p className="text-sand-800 font-light leading-relaxed max-w-sm">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12">
               <button className="text-emerald-900 font-medium hover:text-terracotta-600 transition-colors flex items-center gap-2">
                 Read about our process <ArrowRight className="h-4 w-4" />
               </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HowItWorks;