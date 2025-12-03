import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, Calendar, ArrowLeft, ArrowRight, Check } from 'lucide-react';
import { collections } from '../data/collections';

const CollectionDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const collection = collections.find(c => c.id === Number(id));

  if (!collection) {
    return (
      <main>
        <div className="min-h-screen flex items-center justify-center bg-sand-50">
          <div className="text-center">
            <h1 className="font-serif text-4xl text-emerald-950 mb-4">Collection Not Found</h1>
            <Link to="/collections" className="text-emerald-800 hover:text-emerald-900">
              Return to Collections
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-24 overflow-hidden bg-sand-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            to="/collections" 
            className="inline-flex items-center gap-2 text-emerald-900 hover:text-terracotta-600 transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            <span className="font-medium">Back to Collections</span>
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="block text-terracotta-600 font-bold tracking-widest text-xs uppercase mb-6">
                {collection.category} Collection
              </span>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-emerald-950 leading-[1.1] mb-6">
                {collection.title}
              </h1>
              <p className="text-lg text-sand-800 mb-8 leading-relaxed font-light">
                {collection.description}
              </p>
              
              <div className="flex flex-wrap gap-6 mb-8">
                <div className="flex items-center gap-2 text-sand-700">
                  <Calendar className="h-5 w-5 text-emerald-900" />
                  <span className="font-medium">{collection.duration}</span>
                </div>
                <div className="flex items-center gap-2 text-sand-700">
                  <MapPin className="h-5 w-5 text-emerald-900" />
                  <span className="font-medium">{collection.destinations.length} destinations</span>
                </div>
              </div>
              
              <div className="mb-8">
                <span className="text-3xl font-serif text-emerald-950">{collection.price}</span>
                <span className="text-sand-600 text-sm ml-2">per person</span>
              </div>
              
              <Link to="/contact">
                <button className="flex items-center gap-3 bg-emerald-800 hover:bg-emerald-900 text-white px-8 py-4 rounded-lg font-medium transition-all shadow-md hover:shadow-lg">
                  Plan Your Journey
                  <ArrowRight className="h-4 w-4" />
                </button>
              </Link>
            </div>
            
            <div className="relative h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-xl">
              <img 
                src={collection.image} 
                alt={collection.title} 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      {collection.highlights && (
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-4xl text-emerald-950 mb-12">Journey Highlights</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {collection.highlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <Check className="h-5 w-5 text-emerald-900" />
                  </div>
                  <p className="text-sand-800 font-light leading-relaxed">{highlight}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Itinerary Section */}
      {collection.itinerary && (
        <section className="py-24 bg-sand-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-4xl text-emerald-950 mb-12">Sample Itinerary</h2>
            <div className="space-y-6">
              {collection.itinerary.map((day, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-sand-200">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-emerald-800 text-white rounded-full flex items-center justify-center font-serif text-lg">
                      {index + 1}
                    </div>
                    <p className="text-sand-800 font-light leading-relaxed pt-2">{day}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* What's Included Section */}
      {collection.included && (
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-4xl text-emerald-950 mb-12">What's Included</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {collection.included.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <Check className="h-5 w-5 text-emerald-900" />
                  </div>
                  <p className="text-sand-800 font-light leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Destinations Section */}
      <section className="py-24 bg-sand-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-4xl text-emerald-950 mb-12">Destinations</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {collection.destinations.map((destination, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-sand-200 text-center">
                <MapPin className="h-8 w-8 text-emerald-900 mx-auto mb-4" />
                <h3 className="font-serif text-xl text-emerald-950">{destination}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl md:text-5xl text-emerald-950 mb-6">
            Ready to embark on this journey?
          </h2>
          <p className="text-lg text-sand-800 mb-10 leading-relaxed font-light max-w-2xl mx-auto">
            Contact our travel specialists to customize this collection to your preferences and create your perfect itinerary.
          </p>
          <Link to="/contact">
            <button className="flex items-center gap-3 bg-emerald-800 hover:bg-emerald-900 text-white px-8 py-4 rounded-lg font-medium transition-all shadow-md hover:shadow-lg mx-auto">
              Start Planning
              <ArrowRight className="h-4 w-4" />
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default CollectionDetail;
