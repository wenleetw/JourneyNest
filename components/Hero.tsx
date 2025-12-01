import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-sand-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col lg:flex-row items-center">
          
          {/* Text Content */}
          <div className="lg:w-1/2 z-20 relative lg:-mr-20 lg:mt-10">
            <div className="bg-sand-50/80 backdrop-blur-md p-8 md:p-12 lg:p-16 rounded-xl shadow-sm border border-sand-200 max-w-2xl">
              <span className="block text-terracotta-600 font-bold tracking-widest text-xs uppercase mb-6">
                Curated Travel Experiences
              </span>
              
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-emerald-950 leading-[1.1] mb-8">
                The art of <br/>
                <span className="italic text-terracotta-500">mindful</span> travel.
              </h1>
              
              <p className="text-lg text-sand-800 mb-10 leading-relaxed font-light max-w-md">
                We craft bespoke itineraries for the modern explorer. Discover hidden gems, authentic culture, and unhurried luxury.
              </p>
              
              <div className="flex flex-col sm:flex-row items-start gap-6">
                <button className="flex items-center gap-3 bg-emerald-800 hover:bg-emerald-900 text-white px-8 py-4 rounded-lg font-medium transition-all shadow-md hover:shadow-lg">
                  Explore Collections
                  <ArrowRight className="h-4 w-4" />
                </button>
                <button className="flex items-center gap-2 text-emerald-900 px-4 py-4 font-medium hover:text-terracotta-600 transition-colors border-b border-transparent hover:border-terracotta-600">
                  Plan a Custom Trip
                </button>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="lg:w-2/3 w-full mt-12 lg:mt-0 relative z-10">
            <div className="relative h-[600px] lg:h-[750px] w-full">
              <img 
                src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&auto=format&fit=crop&w=1800&q=80" 
                alt="Serene Lake Landscape" 
                className="w-full h-full object-cover rounded-2xl shadow-xl filter brightness-[0.95]"
              />
              {/* Decorative elements */}
              <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-terracotta-400/20 rounded-full blur-3xl"></div>
              <div className="absolute top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-emerald-800/10 rounded-full blur-3xl"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;