import React from 'react';
import { MapPin, Calendar, GraduationCap } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get to know me better and understand what drives me in my professional journey
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image and Personal Info */}
          <div className="space-y-8">
            {/* Profile Image */}
            <div className="relative">
              <div className="w-80 h-80 mx-auto rounded-full overflow-hidden shadow-lg border-4 border-white">
                <img
                  src="/aljay.jpg"
                  alt="Aljay Q. Mallari - Full Stack Developer"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback to gradient background with User icon if image fails to load
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      parent.className = "w-80 h-80 mx-auto bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center shadow-lg border-4 border-white";
                      parent.innerHTML = '<svg class="w-32 h-32 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>';
                    }
                  }}
                />
              </div>
            </div>

            {/* Personal Information */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-700">
                <MapPin size={20} className="text-primary-600" />
                <span>Region III, Pampanga, Philippines</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <Calendar size={20} className="text-primary-600" />
                <span>10+ years of experience</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <GraduationCap size={20} className="text-primary-600" />
                <span>BS in Information Technology</span>
              </div>
            </div>
          </div>

          {/* Right Column - Story */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900">
              My Story
            </h3>
            
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                I'm a passionate Full Stack Developer with over 10 years of experience building 
                and optimizing web applications for eCommerce, SaaS, and enterprise environments. 
                My journey in tech has been focused on creating scalable, user-focused solutions 
                that drive business results.
              </p>
              
              <p>
                With expertise in PHP, Laravel, WordPress, React, and a wide range of programming 
                languages and tools, I specialize in both frontend and backend development. 
                I have a proven ability to boost application performance, streamline workflows, 
                and integrate complex third-party APIs.
              </p>
              
              <p>
                I'm a strong collaborator with cross-functional teams, always focused on delivering 
                high-quality, maintainable code. From troubleshooting production issues to 
                developing custom modules, I bring a comprehensive approach to web development 
                that ensures long-term success.
              </p>
            </div>

            {/* Key Values */}
            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-2">Problem Solver</h4>
                <p className="text-sm text-gray-600">Finding elegant solutions to complex challenges</p>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-2">Team Player</h4>
                <p className="text-sm text-gray-600">Collaborating effectively with cross-functional teams</p>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-2">Continuous Learner</h4>
                <p className="text-sm text-gray-600">Always expanding my knowledge and skills</p>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-2">Quality Focused</h4>
                <p className="text-sm text-gray-600">Delivering excellence in every project</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 