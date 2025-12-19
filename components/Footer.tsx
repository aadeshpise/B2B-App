import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-brand-black text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Brand */}
          <div className="space-y-4">
            <h3 className="font-belleza text-2xl font-bold">WOAVENIR B2B</h3>
            <p className="text-gray-300 text-sm leading-relaxed max-w-xs">
              Your premium apparel partner. We specialize in high-quality manufacturing and sustainable fashion solutions for brands worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-belleza text-xl mb-6 text-brand-salmon">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-300 hover:text-brand-salmon transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-brand-salmon transition-colors text-sm">
                  Contact Us
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-brand-salmon transition-colors text-sm">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-brand-salmon transition-colors text-sm">
                  Portfolio
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-belleza text-xl mb-6 text-brand-salmon">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="text-brand-salmon mt-1 flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  123 Fashion Ave, Suite 100<br />
                  New York, NY 10018
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-brand-salmon flex-shrink-0" />
                <span className="text-gray-300 text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-brand-salmon flex-shrink-0" />
                <a href="mailto:hello@woavenir.com" className="text-gray-300 hover:text-brand-salmon transition-colors text-sm">
                  hello@woavenir.com
                </a>
              </div>

              <div className="flex space-x-4 mt-6">
                <a href="#" className="text-gray-400 hover:text-brand-salmon transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-brand-salmon transition-colors">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} Woavenir B2B. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-500 hover:text-brand-salmon text-xs">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-brand-salmon text-xs">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;