import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="bg-brand-beige sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="font-belleza text-2xl font-bold text-brand-black">
              WOAVENIR B2B
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`${
                  isActive(link.path)
                    ? 'text-brand-salmon font-semibold border-b-2 border-brand-salmon'
                    : 'text-brand-black hover:text-brand-salmon transition-colors duration-200'
                } px-1 py-1 text-sm uppercase tracking-wider`}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="#get-started"
              className="bg-brand-black text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-brand-salmon transition-colors duration-300"
            >
              Get Started
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-brand-black hover:text-brand-salmon focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-brand-beige border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`${
                  isActive(link.path)
                    ? 'text-brand-salmon bg-brand-beige/50'
                    : 'text-brand-black hover:text-brand-salmon'
                } block px-3 py-2 rounded-md text-base font-medium`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
             <a
              href="#get-started"
              className="block w-full text-center mt-4 bg-brand-black text-white px-6 py-3 rounded-full text-base font-medium hover:bg-brand-salmon transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;