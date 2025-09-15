import React from 'react';
import { Download, Mail, ArrowDown, Code, Database, Globe, Zap } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="section-padding pt-24 relative overflow-hidden">
      {/* Banner Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-secondary-50">
        {/* Floating Tech Icons */}
        <div className="absolute inset-0 opacity-10">
          <Code className="absolute top-20 left-10 w-8 h-8 text-primary-600 animate-bounce" style={{ animationDelay: '0s' }} />
          <Database className="absolute top-32 right-20 w-6 h-6 text-secondary-600 animate-bounce" style={{ animationDelay: '1s' }} />
          <Globe className="absolute top-40 left-1/4 w-7 h-7 text-primary-500 animate-bounce" style={{ animationDelay: '2s' }} />
          <Zap className="absolute top-24 right-1/3 w-5 h-5 text-secondary-500 animate-bounce" style={{ animationDelay: '0.5s' }} />
          <Code className="absolute bottom-32 right-10 w-6 h-6 text-primary-400 animate-bounce" style={{ animationDelay: '1.5s' }} />
          <Database className="absolute bottom-40 left-20 w-8 h-8 text-secondary-400 animate-bounce" style={{ animationDelay: '2.5s' }} />
        </div>
        
        {/* Geometric Shapes */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-16 left-16 w-32 h-32 bg-primary-300 rounded-full blur-xl"></div>
          <div className="absolute top-32 right-24 w-24 h-24 bg-secondary-300 rounded-full blur-lg"></div>
          <div className="absolute bottom-24 left-32 w-40 h-40 bg-primary-200 rounded-full blur-2xl"></div>
          <div className="absolute bottom-16 right-16 w-28 h-28 bg-secondary-200 rounded-full blur-xl"></div>
        </div>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Greeting */}
          <div className="animate-fade-in">
            <p className="text-primary-600 font-medium mb-4">Hello, I'm</p>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              Aljay Q. Mallari
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-600 mb-8">
              Full Stack / Web Developer
            </h2>
          </div>

          {/* Description */}
          <div className="animate-slide-up">
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Full Stack / Web Developer with 10+ years of experience building and optimizing 
              web applications for eCommerce, SaaS, and enterprise environments. Skilled in PHP, 
              Laravel, WordPress, React, and delivering high-quality, scalable solutions.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
            <a href="#contact" className="btn-primary flex items-center gap-2">
              <Mail size={20} />
              Get In Touch
            </a>
            <a 
              href="/resume.pdf" 
              className="btn-secondary flex items-center gap-2"
              download
            >
              <Download size={20} />
              Download Resume
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="mt-16 animate-bounce-gentle">
            <a href="#about" className="inline-block text-gray-400 hover:text-primary-600 transition-colors duration-200">
              <ArrowDown size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 