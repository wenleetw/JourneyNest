import React from 'react';
import { MapPin, Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { collections } from '../data/collections';

const Collections: React.FC = () => {
  const featuredCollections = collections.filter(c => c.featured);
  const allCollections = collections;

  return (
    <main>
      {/* Featured Collections */}
      <section className="pt-32 pb-24 lg:pt-40 lg:pb-24 bg-sand-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="block text-terracotta-600 font-bold tracking-widest text-xs uppercase mb-6">
              Featured Collections
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-emerald-950 mb-6">
              Start Your Journey
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {featuredCollections.map((collection) => (
              <Link key={collection.id} to={`/collections/${collection.id}`} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-xl aspect-[4/4] mb-6">
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors z-10"></div>
                  <img 
                    src={collection.image} 
                    alt={collection.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-4 left-4 z-20">
                    <span className="bg-emerald-800 text-white px-3 py-1 rounded-full text-xs font-medium uppercase tracking-widest">
                      {collection.category}
                    </span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="font-serif text-2xl text-emerald-950 mb-2 group-hover:text-terracotta-600 transition-colors">
                      {collection.title}
                    </h3>
                    <p className="text-sand-800 font-light leading-relaxed text-sm">
                      {collection.description}
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap gap-4 text-sm text-sand-700">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-emerald-900" />
                      <span>{collection.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-emerald-900" />
                      <span>{collection.destinations.length} destinations</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center pt-4 border-t border-sand-200">
                    <span className="text-emerald-800 font-medium">{collection.price}</span>
                    <div className="flex items-center gap-2 text-emerald-900 group-hover:text-terracotta-600 transition-colors font-medium text-sm">
                      Learn More
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* All Collections */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="block text-terracotta-600 font-bold tracking-widest text-xs uppercase mb-6">
              All Collections
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-emerald-950 mb-6">
              Explore More
            </h2>
            <p className="text-sand-800 text-lg leading-relaxed font-light max-w-2xl mx-auto">
              Browse our complete collection of curated travel experiences, each thoughtfully designed to create lasting memories.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allCollections.map((collection) => (
              <Link key={collection.id} to={`/collections/${collection.id}`} className="bg-white rounded-xl overflow-hidden shadow-sm border border-sand-200 group hover:shadow-lg transition-shadow">
                <div className="relative overflow-hidden aspect-[16/10]">
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors z-10"></div>
                  <img 
                    src={collection.image} 
                    alt={collection.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-4 left-4 z-20">
                    <span className="bg-emerald-800 text-white px-3 py-1 rounded-full text-xs font-medium uppercase tracking-widest">
                      {collection.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="font-serif text-xl text-emerald-950 mb-2 group-hover:text-terracotta-600 transition-colors">
                      {collection.title}
                    </h3>
                    <p className="text-sand-800 font-light leading-relaxed text-sm">
                      {collection.description}
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap gap-3 text-xs text-sand-700">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3 text-emerald-900" />
                      <span>{collection.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-3 w-3 text-emerald-900" />
                      <span>{collection.destinations.join(', ')}</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center pt-4 border-t border-sand-200">
                    <span className="text-emerald-800 font-medium text-sm">{collection.price}</span>
                    <div className="flex items-center gap-2 text-emerald-900 group-hover:text-terracotta-600 transition-colors font-medium text-xs">
                      View Details
                      <ArrowRight className="h-3 w-3" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-sand-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl md:text-5xl text-emerald-950 mb-6">
            Don't see what you're looking for?
          </h2>
          <p className="text-lg text-sand-800 mb-10 leading-relaxed font-light max-w-2xl mx-auto">
            Our travel specialists can create a completely custom itinerary tailored to your unique interests and preferences.
          </p>
          <Link to="/contact">
            <button className="flex items-center gap-3 bg-emerald-800 hover:bg-emerald-900 text-white px-8 py-4 rounded-lg font-medium transition-all shadow-md hover:shadow-lg mx-auto">
              Plan a Custom Trip
              <ArrowRight className="h-4 w-4" />
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Collections;

