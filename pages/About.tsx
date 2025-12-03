import React from 'react';
import { Heart, Globe, Users, Award } from 'lucide-react';

const About: React.FC = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-sand-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="block text-terracotta-600 font-bold tracking-widest text-xs uppercase mb-6">
              Our Story
            </span>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-emerald-950 leading-[1.1] mb-8">
              Crafting journeys that <br/>
              <span className="italic text-terracotta-500">transform</span> the soul.
            </h1>
            <p className="text-lg text-sand-800 mb-10 leading-relaxed font-light max-w-2xl mx-auto">
              Founded on the belief that travel should be meaningful, not rushed. We connect you with authentic experiences that leave lasting impressions.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="block text-terracotta-600 font-bold tracking-widest text-xs uppercase mb-6">
                Our Mission
              </span>
              <h2 className="font-serif text-4xl md:text-5xl text-emerald-950 mb-6 leading-tight">
                To inspire mindful exploration
              </h2>
              <p className="text-sand-800 text-lg leading-relaxed font-light mb-6">
                We believe travel is more than visiting places—it's about connecting with cultures, understanding perspectives, and creating memories that shape who we become.
              </p>
              <p className="text-sand-800 text-lg leading-relaxed font-light">
                Every itinerary we craft is a carefully woven narrative, designed to slow you down, open your mind, and deepen your appreciation for the world's beautiful diversity.
              </p>
            </div>
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Travel Experience" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-sand-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="block text-terracotta-600 font-bold tracking-widest text-xs uppercase mb-6">
              What We Stand For
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-emerald-950 mb-6">
              Our Core Values
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-sand-200">
              <div className="mb-6 p-3 bg-sand-50 rounded-full w-fit">
                <Heart className="h-6 w-6 text-emerald-900" />
              </div>
              <h3 className="font-serif text-xl text-emerald-950 mb-3">Authenticity</h3>
              <p className="text-sand-800 text-sm leading-relaxed font-light">
                We seek out genuine experiences that reflect the true spirit of each destination.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-sand-200">
              <div className="mb-6 p-3 bg-sand-50 rounded-full w-fit">
                <Globe className="h-6 w-6 text-emerald-900" />
              </div>
              <h3 className="font-serif text-xl text-emerald-950 mb-3">Sustainability</h3>
              <p className="text-sand-800 text-sm leading-relaxed font-light">
                Responsible travel that respects local communities and preserves natural beauty.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-sand-200">
              <div className="mb-6 p-3 bg-sand-50 rounded-full w-fit">
                <Users className="h-6 w-6 text-emerald-900" />
              </div>
              <h3 className="font-serif text-xl text-emerald-950 mb-3">Connection</h3>
              <p className="text-sand-800 text-sm leading-relaxed font-light">
                Building bridges between travelers and the people, places, and stories that matter.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-sand-200">
              <div className="mb-6 p-3 bg-sand-50 rounded-full w-fit">
                <Award className="h-6 w-6 text-emerald-900" />
              </div>
              <h3 className="font-serif text-xl text-emerald-950 mb-3">Excellence</h3>
              <p className="text-sand-800 text-sm leading-relaxed font-light">
                Uncompromising attention to detail in every aspect of your journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="block text-terracotta-600 font-bold tracking-widest text-xs uppercase mb-6">
              Meet the Team
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-emerald-950 mb-6">
              Passionate Travel Curators
            </h2>
            <p className="text-sand-800 text-lg leading-relaxed font-light max-w-2xl mx-auto">
              Our team of travel specialists brings decades of combined experience and an insatiable curiosity for the world.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="relative h-64 w-64 mx-auto mb-6 rounded-full overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                  alt="Team Member" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-serif text-2xl text-emerald-950 mb-2">Sarah Chen</h3>
              <p className="text-terracotta-600 text-sm mb-4 font-medium">Founder & Creative Director</p>
              <p className="text-sand-800 text-sm leading-relaxed font-light max-w-xs mx-auto">
                Former travel journalist with a passion for uncovering hidden gems across Asia and Europe.
              </p>
            </div>
            <div className="text-center">
              <div className="relative h-64 w-64 mx-auto mb-6 rounded-full overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                  alt="Team Member" 
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <h3 className="font-serif text-2xl text-emerald-950 mb-2">Marcus Rivera</h3>
              <p className="text-terracotta-600 text-sm mb-4 font-medium">Head of Experiences</p>
              <p className="text-sand-800 text-sm leading-relaxed font-light max-w-xs mx-auto">
                Adventure enthusiast specializing in sustainable travel and local community partnerships.
              </p>
            </div>
            <div className="text-center">
              <div className="relative h-64 w-64 mx-auto mb-6 rounded-full overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                  alt="Team Member" 
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <h3 className="font-serif text-2xl text-emerald-950 mb-2">Elena Volkov</h3>
              <p className="text-terracotta-600 text-sm mb-4 font-medium">Concierge Lead</p>
              <p className="text-sand-800 text-sm leading-relaxed font-light max-w-xs mx-auto">
                Multilingual travel expert ensuring seamless experiences from planning to return.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;

