import React from 'react';
import { Feature } from '../types';
import { Calendar, Globe, UserCheck, Shield } from 'lucide-react';

const features: Feature[] = [
  {
    id: 1,
    title: "Bespoke Itineraries",
    description: "Tailored to your rhythm and interests, never generic.",
    icon: <Calendar className="h-6 w-6 text-emerald-900" />,
  },
  {
    id: 2,
    title: "Local Expertise",
    description: "Insider access to hidden gems and authentic experiences.",
    icon: <Globe className="h-6 w-6 text-emerald-900" />,
  },
  {
    id: 3,
    title: "Concierge Support",
    description: "24/7 assistance from our dedicated travel specialists.",
    icon: <UserCheck className="h-6 w-6 text-emerald-900" />,
  },
  {
    id: 4,
    title: "Verified Partners",
    description: "We work only with the most trusted names in hospitality.",
    icon: <Shield className="h-6 w-6 text-emerald-900" />,
  }
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-sand-200 pt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {features.map((feature) => (
            <div key={feature.id} className="flex flex-col items-start p-2">
              <div className="mb-6 p-3 bg-sand-50 rounded-full">
                {feature.icon}
              </div>
              <h3 className="font-serif text-xl text-emerald-950 mb-3">{feature.title}</h3>
              <p className="text-sand-800 text-sm leading-relaxed font-light">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;