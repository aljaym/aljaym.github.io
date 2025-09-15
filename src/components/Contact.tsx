import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Eye, EyeOff } from 'lucide-react';

const Contact: React.FC = () => {
  const [showEmail, setShowEmail] = useState(false);
  const [showPhone, setShowPhone] = useState(false);

  const contactInfo = [
    {
      icon: <Mail size={24} className="text-primary-600" />,
      title: 'Email',
      maskedValue: 'mallarixxxxxx@xxx.xxx',
      realValue: 'mallarialjay07@gmail.com',
      link: 'mailto:mallarialjay07@gmail.com',
      isPrivate: true,
      isVisible: showEmail,
      toggleVisibility: () => setShowEmail(!showEmail)
    },
    {
      icon: <Phone size={24} className="text-primary-600" />,
      title: 'Phone',
      maskedValue: '+639xxxxxxxx9',
      realValue: '+639452063639',
      link: 'tel:+639452063639',
      isPrivate: true,
      isVisible: showPhone,
      toggleVisibility: () => setShowPhone(!showPhone)
    },
    {
      icon: <MapPin size={24} className="text-primary-600" />,
      title: 'Location',
      maskedValue: 'San Nicolas 1 Magalang, Pampanga, Philippines',
      realValue: 'San Nicolas 1 Magalang, Pampanga, Philippines',
      link: undefined,
      isPrivate: false,
      isVisible: true,
      toggleVisibility: () => {}
    }
  ];

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
              
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0 mt-1">
                      {info.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900">{info.title}</h4>
                      <div className="flex items-center gap-2">
                        {info.isPrivate ? (
                          <>
                            <span className="text-gray-600">
                              {info.isVisible ? info.realValue : info.maskedValue}
                            </span>
                            <button
                              onClick={info.toggleVisibility}
                              className="p-1 text-gray-400 hover:text-primary-600 transition-colors duration-200"
                              title={info.isVisible ? 'Hide contact info' : 'Show contact info'}
                            >
                              {info.isVisible ? <EyeOff size={16} /> : <Eye size={16} />}
                            </button>
                            {info.isVisible && info.link && (
                              <a
                                href={info.link}
                                className="ml-2 text-primary-600 hover:text-primary-700 transition-colors duration-200 text-sm"
                                title={`Contact via ${info.title.toLowerCase()}`}
                              >
                                Contact
                              </a>
                            )}
                          </>
                        ) : (
                          <span className="text-gray-600">{info.realValue}</span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
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