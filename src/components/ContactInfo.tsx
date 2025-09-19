import React, { useState } from 'react';
import { Mail, Phone, MapPin, Eye, EyeOff } from 'lucide-react';

interface ContactItem {
  icon: React.ReactNode;
  title: string;
  maskedValue: string;
  realValue: string;
  link?: string;
  isPrivate: boolean;
  isVisible: boolean;
  toggleVisibility: () => void;
}

interface ContactInfoProps {
  variant?: 'default' | 'footer';
  showLabels?: boolean;
  className?: string;
}

const ContactInfo: React.FC<ContactInfoProps> = ({ 
  variant = 'default', 
  showLabels = true,
  className = ''
}) => {
  const [showEmail, setShowEmail] = useState(false);
  const [showPhone, setShowPhone] = useState(false);

  const contactInfo: ContactItem[] = [
    {
      icon: <Mail size={variant === 'footer' ? 20 : 24} className="text-primary-600" />,
      title: 'Email',
      maskedValue: 'mallarixxxxxx@xxx.xxx',
      realValue: 'mallarialjay07@gmail.com',
      link: 'mailto:mallarialjay07@gmail.com',
      isPrivate: true,
      isVisible: showEmail,
      toggleVisibility: () => setShowEmail(!showEmail)
    },
    {
      icon: <Phone size={variant === 'footer' ? 20 : 24} className="text-primary-600" />,
      title: 'Phone',
      maskedValue: '+639xxxxxxxx9',
      realValue: '+639452063639',
      link: 'tel:+639452063639',
      isPrivate: true,
      isVisible: showPhone,
      toggleVisibility: () => setShowPhone(!showPhone)
    },
    {
      icon: <MapPin size={variant === 'footer' ? 20 : 24} className="text-primary-600" />,
      title: 'Location',
      maskedValue: 'San Nicolas 1 Magalang, Pampanga, Philippines',
      realValue: 'San Nicolas 1 Magalang, Pampanga, Philippines',
      link: undefined,
      isPrivate: false,
      isVisible: true,
      toggleVisibility: () => {}
    }
  ];

  if (variant === 'footer') {
    return (
      <div className="space-y-2 text-gray-300">
        {contactInfo.map((item, index) => (
          <div key={index} className="flex items-center space-x-3">
            <div className="flex-shrink-0">
              {item.icon}
            </div>
            <div className="flex-1">
              {showLabels && (
                <h4 className="text-sm font-medium text-gray-400 mb-1">{item.title}</h4>
              )}
              <div className="flex items-center gap-2">
                {item.link ? (
                  <a
                    href={item.link}
                    className="text-sm text-gray-300 hover:text-primary-400 transition-colors"
                  >
                    {item.isVisible ? item.realValue : item.maskedValue}
                  </a>
                ) : (
                  <span className="text-sm text-gray-300">
                    {item.isVisible ? item.realValue : item.maskedValue}
                  </span>
                )}
                
                {item.isPrivate && (
                  <button
                    onClick={item.toggleVisibility}
                    className="p-1 text-gray-400 hover:text-primary-400 transition-colors"
                    aria-label={`${item.isVisible ? 'Hide' : 'Show'} ${item.title}`}
                  >
                    {item.isVisible ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  // Default variant - matches the original Contact.tsx layout
  return (
    <div className="space-y-4">
      {contactInfo.map((item, index) => (
        <div key={index} className="flex items-start gap-4">
          <div className="flex-shrink-0 mt-1">
            {item.icon}
          </div>
          <div className="flex-1">
            <h4 className="font-medium text-gray-900">{item.title}</h4>
            <div className="flex items-center gap-2">
              {item.isPrivate ? (
                <>
                  <span className="text-gray-600">
                    {item.isVisible ? item.realValue : item.maskedValue}
                  </span>
                  <button
                    onClick={item.toggleVisibility}
                    className="p-1 text-gray-400 hover:text-primary-600 transition-colors duration-200"
                    title={item.isVisible ? 'Hide contact info' : 'Show contact info'}
                  >
                    {item.isVisible ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                  {item.isVisible && item.link && (
                    <a
                      href={item.link}
                      className="ml-2 text-primary-600 hover:text-primary-700 transition-colors duration-200 text-sm"
                      title={`Contact via ${item.title.toLowerCase()}`}
                    >
                      Contact
                    </a>
                  )}
                </>
              ) : (
                <span className="text-gray-600">{item.realValue}</span>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactInfo;
