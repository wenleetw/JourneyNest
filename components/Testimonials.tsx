import React from 'react';
import { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Jenkins",
    location: "New York",
    quote: "JourneyNest curated an experience that felt completely unique to us. It wasn't just a vacation; it was a deepening of our understanding of the world.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
  },
  {
    id: 2,
    name: "Marcus Chen",
    location: "Toronto",
    quote: "The attention to detail was impeccable. From the boutique hotels to the private guides, everything spoke of quality and thoughtfulness.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    location: "Madrid",
    quote: "Finally, a travel service that understands the balance between adventure and relaxation. Every moment was perfectly timed.",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-emerald-950 mb-16">Traveler Stories</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12">
          {testimonials.map((t) => (
            <div key={t.id} className="flex flex-col items-center">
              <div className="mb-6">
                <img 
                  src={t.avatar} 
                  alt={t.name} 
                  className="h-16 w-16 rounded-full object-cover ring-2 ring-sand-200 p-1"
                />
              </div>
              <blockquote className="font-serif text-xl text-emerald-900 italic mb-6 leading-relaxed">
                "{t.quote}"
              </blockquote>
              <div className="text-sm tracking-wide uppercase mt-auto">
                <span className="font-bold text-emerald-950 block mb-1">{t.name}</span>
                <span className="text-terracotta-500 font-medium">{t.location}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;