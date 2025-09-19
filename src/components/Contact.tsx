import React from 'react';
import { Linkedin, Github } from 'lucide-react';
import ContactInfo from './ContactInfo';

const Contact: React.FC = () => {
  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: <Linkedin size={20} />,
      url: 'https://linkedin.com/in/aljay-mallari',
      color: 'hover:bg-blue-600 hover:text-white'
    },
    {
      name: 'Portfolio',
      icon: <Github size={20} />,
      url: 'https://aljaym.github.io/',
      color: 'hover:bg-blue-500 hover:text-white'
    }
  ];

  return (
    <section id="contact" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            I'm always interested in hearing about new opportunities and exciting projects. 
            Let's discuss how we can work together!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Info & Social */}
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900">Contact Information</h3>
              <ContactInfo variant="default" />
            </div>

            {/* Social Links */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900">Connect With Me</h3>
              
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 transition-all duration-200 ${social.color}`}
                    title={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Availability Status */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-3">Current Status</h4>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-gray-700">Available for new opportunities</span>
              </div>
              <p className="text-sm text-gray-600 mt-2">
                I'm currently accepting new projects and would love to hear about your ideas!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 