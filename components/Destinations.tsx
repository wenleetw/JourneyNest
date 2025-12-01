import React from 'react';
import { Destination } from '../types';

const destinations: Destination[] = [
  {
    id: 1,
    name: 'Kyoto, Japan',
    description: 'Ancient temples and sublime gardens.',
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    price: 'from $2,400',
  },
  {
    id: 2,
    name: 'Amalfi Coast, Italy',
    description: 'Cliffside villages and azure waters.',
    image: 'https://images.unsplash.com/photo-1612456225451-bb8d10d0131d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    price: 'from $3,200',
  },
  {
    id: 3,
    name: 'Reykjavik, Iceland',
    description: 'Volcanic landscapes and northern lights.',
    image: 'https://images.unsplash.com/photo-1476610182048-b716b8518aae?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    price: 'from $1,800',
  },
];

const Destinations: React.FC = () => {
  return (
    <section id="destinations" className="py-24 bg-sand-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-2xl">
            <h2 className="font-serif text-4xl md:text-5xl text-emerald-950 mb-6">Curated Destinations</h2>
            <p className="text-sand-800 text-lg font-light leading-relaxed">
              Hand-picked locations for the discerning traveler. From bustling cultural hubs to secluded natural retreats.
            </p>
          </div>
          <button className="hidden md:block text-emerald-900 border-b border-emerald-900 pb-1 hover:text-terracotta-600 hover:border-terracotta-600 transition-colors uppercase text-sm tracking-widest font-medium mt-6 md:mt-0">
            View All Collections
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {destinations.map((dest) => (
            <div key={dest.id} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg aspect-[4/5] mb-6">
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors z-10"></div>
                <img 
                  src={dest.image} 
                  alt={dest.name} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              
              <div className="flex justify-between items-baseline border-b border-sand-200 pb-4">
                <div>
                  <h3 className="font-serif text-2xl text-emerald-950 mb-1 group-hover:text-terracotta-600 transition-colors">{dest.name}</h3>
                  <p className="text-sand-800 font-light text-sm">{dest.description}</p>
                </div>
                <span className="text-emerald-800 font-medium text-sm whitespace-nowrap ml-4">{dest.price}</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
          <button className="text-emerald-900 border-b border-emerald-900 pb-1 hover:text-terracotta-600 transition-colors uppercase text-sm tracking-widest font-medium">
            View All Collections
          </button>
        </div>
      </div>
    </section>
  );
};

export default Destinations;