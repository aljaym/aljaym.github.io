import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';
import ContactInfo from './ContactInfo';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-primary-400">Portfolio</h3>
            <p className="text-gray-300 leading-relaxed">
              A passionate developer focused on creating meaningful digital experiences 
              and solving complex problems through innovative technology solutions.
            </p>
            <div className="flex items-center gap-2 text-gray-400">
              <span>Made with</span>
              <Heart size={16} className="text-red-500 fill-current" />
              <span>and React</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-300 hover:text-primary-400 transition-colors duration-200">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-primary-400 transition-colors duration-200">
                  About
                </a>
              </li>
              <li>
                <a href="#experience" className="text-gray-300 hover:text-primary-400 transition-colors duration-200">
                  Experience
                </a>
              </li>
              <li>
                <a href="#skills" className="text-gray-300 hover:text-primary-400 transition-colors duration-200">
                  Skills
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-primary-400 transition-colors duration-200">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Get In Touch</h4>
            <ContactInfo 
              variant="footer" 
              showLabels={false}
              className="text-gray-300"
            />
            <div className="pt-2">
              <p className="text-sm text-gray-400">
                Available for freelance opportunities and full-time positions
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Aljay Q. Mallari. All rights reserved.
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 w-12 h-12 bg-primary-600 hover:bg-primary-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center group"
        title="Scroll to top"
      >
        <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform duration-200" />
      </button>
    </footer>
  );
};

export default Footer; 