import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: '#destinations', label: 'Destinations' },
  { href: '#features', label: 'Experiences' },
  { href: '#how-it-works', label: 'Process' },
  { href: '#testimonials', label: 'Stories' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <nav className="fixed w-full z-50 bg-sand-50/90 backdrop-blur-md border-b border-sand-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center cursor-pointer">
            <span className="font-serif font-bold text-3xl text-emerald-900 tracking-tight">JourneyNest.</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sand-800 hover:text-emerald-900 transition-colors font-medium text-sm tracking-wide uppercase"
              >
                {link.label}
              </a>
            ))}
            <button className="bg-emerald-800 hover:bg-emerald-900 text-white px-7 py-3 rounded-lg font-medium text-sm tracking-wide transition-all shadow-sm hover:shadow-md">
              Start Planning
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-emerald-900 hover:text-emerald-700 focus:outline-none"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
              aria-controls="mobile-nav"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div
          id="mobile-nav"
          className="md:hidden bg-sand-50 border-b border-sand-200 absolute w-full h-screen"
        >
          <div className="px-6 pt-8 pb-10 space-y-6 flex flex-col items-center justify-center h-3/4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={toggleMenu}
                className="block text-2xl font-serif text-emerald-900"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-8">
              <button className="w-full bg-emerald-800 hover:bg-emerald-900 text-white px-8 py-4 rounded-lg font-medium text-lg transition-colors shadow-md">
                Start Planning
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;