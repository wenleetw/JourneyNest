import React from 'react';
import { Instagram, Twitter, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-emerald-950 text-sand-100 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20 border-b border-emerald-900 pb-12">
           <div className="md:col-span-4">
              <span className="font-serif text-3xl font-bold tracking-tight text-white mb-6 block">JourneyNest.</span>
              <p className="text-emerald-200/80 leading-relaxed font-light max-w-sm">
                 Crafting journeys that inspire, connect, and transform. The world is waiting for your story.
              </p>
           </div>
           
           <div className="md:col-span-2">
              <h4 className="text-white font-medium mb-6 uppercase tracking-widest text-xs">Explore</h4>
              <ul className="space-y-4 text-emerald-200/80 font-light text-sm">
                 <li><a href="#" className="hover:text-white transition-colors">Destinations</a></li>
                 <li><a href="#" className="hover:text-white transition-colors">Experiences</a></li>
                 <li><a href="#" className="hover:text-white transition-colors">Journal</a></li>
                 <li><a href="#" className="hover:text-white transition-colors">Membership</a></li>
              </ul>
           </div>
           
           <div className="md:col-span-2">
              <h4 className="text-white font-medium mb-6 uppercase tracking-widest text-xs">Company</h4>
              <ul className="space-y-4 text-emerald-200/80 font-light text-sm">
                 <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                 <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                 <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
                 <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
           </div>

           <div className="md:col-span-4">
              <h4 className="text-white font-medium mb-6 uppercase tracking-widest text-xs">Stay Inspired</h4>
              <p className="text-emerald-200/80 font-light text-sm mb-4">Join our newsletter for curated travel notes.</p>
              <div className="flex gap-2">
                 <input type="email" placeholder="Email address" className="bg-emerald-900/50 border border-emerald-800 text-white px-4 py-2 w-full rounded focus:outline-none focus:border-terracotta-500" />
                 <button className="bg-terracotta-500 hover:bg-terracotta-600 px-6 py-2 text-white rounded font-medium transition-colors">Join</button>
              </div>
           </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-emerald-200/60 text-xs font-light">
          <div className="mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} JourneyNest Inc. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white transition-colors"><Instagram className="h-4 w-4" /></a>
            <a href="#" className="hover:text-white transition-colors"><Twitter className="h-4 w-4" /></a>
            <a href="#" className="hover:text-white transition-colors"><Facebook className="h-4 w-4" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;