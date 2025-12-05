import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const anchorLinks = [
  { href: '#destinations', label: 'Destinations' },
  { href: '#how-it-works', label: 'Process' },
  { href: '#testimonials', label: 'Stories' },
];

const mainLinks = [
  { href: '/collections', label: 'Collections' },
  { href: '/about', label: 'About' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => setIsOpen((prev) => !prev);

  const handleAnchorClick = (href: string, e: React.MouseEvent) => {
    if (location.pathname !== '/') {
      e.preventDefault();
      navigate('/');
      // 等待導航完成後再滾動到錨點
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
    setIsOpen(false);
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    if (location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed w-full z-50 bg-sand-50/90 backdrop-blur-md border-b border-sand-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center cursor-pointer" onClick={handleLogoClick}>
            <span className="font-serif font-bold text-3xl text-emerald-900 tracking-tight">JourneyNest.</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Anchor Links (for homepage sections) */}
            {anchorLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleAnchorClick(link.href, e)}
                className="text-sand-800 hover:text-emerald-900 transition-colors font-medium text-sm tracking-wide uppercase"
              >
                {link.label}
              </a>
            ))}
            
            {/* Main Links */}
            {mainLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="text-sand-800 hover:text-emerald-900 transition-colors font-medium text-sm tracking-wide uppercase"
              >
                {link.label}
              </Link>
            ))}
            
            <Link to="/contact">
              <button className="bg-emerald-800 hover:bg-emerald-900 text-white px-7 py-3 rounded-lg font-medium text-sm tracking-wide transition-all shadow-sm hover:shadow-md">
                Start Planning
              </button>
            </Link>
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
          className="md:hidden bg-sand-50 border-b border-sand-200 absolute w-full h-screen overflow-y-auto"
        >
          <div className="px-6 pt-8 pb-10 space-y-6 flex flex-col items-center justify-center h-3/4">
            {/* Anchor Links */}
            {anchorLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleAnchorClick(link.href, e)}
                className="block text-2xl font-serif text-emerald-900"
              >
                {link.label}
              </a>
            ))}
            
            {/* Main Links */}
            {mainLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                onClick={toggleMenu}
                className="block text-2xl font-serif text-emerald-900"
              >
                {link.label}
              </Link>
            ))}
            
            <div className="pt-8">
              <Link to="/contact" onClick={toggleMenu}>
                <button className="w-full bg-emerald-800 hover:bg-emerald-900 text-white px-8 py-4 rounded-lg font-medium text-lg transition-colors shadow-md">
                  Start Planning
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;