import React from 'react';
import { Briefcase, Calendar, MapPin, ExternalLink } from 'lucide-react';

interface ExperienceItem {
  id: number;
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  technologies: string[];
  link?: string;
}

const Experience: React.FC = () => {
  const experiences: ExperienceItem[] = [
    {
      id: 1,
      title: 'Full Stack Developer',
      company: 'Kinetic Innovative Staffing Services LLC',
      location: 'Remote',
      period: 'July 2023 - Sept 2025',
      description: [
        'Designed and developed custom modules and components using Laravel (backend) and React (frontend)',
        'Developed and optimized features based on product owner requirements, significantly enhancing user experience',
        'Integrated third-party APIs and services to extend platform capabilities and streamline workflows',
        'Monitored system performance, diagnosed production issues, and implemented long-term fixes'
      ],
      technologies: ['Laravel', 'React', 'PHP', 'JavaScript', 'MySQL'],
      link: undefined
    },
    {
      id: 2,
      title: 'Senior Software Engineer',
      company: 'Cloudstaff',
      location: 'Remote',
      period: 'Jan 2020 - June 2023',
      description: [
        'Worked extensively on both frontend (Angular, React) and backend (PHP, .NET) development',
        'Collaborated with cross-functional teams to troubleshoot and resolve client-reported issues',
        'Integrated and maintained third-party APIs across multiple production environments',
        'Member of the support team responsible for handling issues raised by clients'
      ],
      technologies: ['Angular', 'React', 'PHP', '.NET', 'JavaScript'],
      link: undefined
    },
    {
      id: 3,
      title: 'Web Developer/PHP Developer',
      company: 'Kinetic Innovative Staffing Services LLC',
      location: 'Remote',
      period: 'June 2018 - Dec 2020',
      description: [
        'Developed, maintained, and deployed client websites and web applications using Laravel and WordPress',
        'Participated in end-to-end project delivery from planning to deployment and post-launch support',
        'Integrated third-party platforms and services via REST APIs, improving system interoperability',
        'Ensured clean, secure, and scalable code across all projects'
      ],
      technologies: ['Laravel', 'WordPress', 'PHP', 'MySQL', 'REST APIs'],
      link: undefined
    },
    {
      id: 4,
      title: 'Full Stack Developer',
      company: 'Shore360',
      location: 'Remote',
      period: 'May 2018 - June 2018',
      description: [
        'Automated retail client processes to improve operational efficiency',
        'Maintained and debugged eCommerce websites using BigCommerce and Neto',
        'Worked on short-term projects focused on process optimization'
      ],
      technologies: ['BigCommerce', 'Neto', 'JavaScript', 'PHP'],
      link: undefined
    },
    {
      id: 5,
      title: 'Senior Software Engineer',
      company: 'Cloudstaff',
      location: 'Remote',
      period: 'June 2017 - May 2018',
      description: [
        'Developed, maintained, deployed, and debugged WordPress-based websites',
        'Worked as part of a team on a data center management system, focusing on frontend tasks using Angular',
        'Ensured optimal performance and functionality across all projects'
      ],
      technologies: ['WordPress', 'Angular', 'PHP', 'JavaScript', 'MySQL'],
      link: undefined
    },
    {
      id: 6,
      title: 'Web Developer',
      company: 'Global Outsourcing Systems Unlimited, Inc/Global Tech Hub',
      location: 'Philippines',
      period: 'Feb 2016 - March 2017',
      description: [
        'Worked with medical software involving planning, database design, and development',
        'Added new features and maintained systems using Yii framework',
        'Collaborated on complex healthcare technology solutions'
      ],
      technologies: ['Yii Framework', 'PHP', 'MySQL', 'JavaScript'],
      link: undefined
    }
  ];

  return (
    <section id="experience" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Work Experience</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            My professional journey and the companies I've had the privilege to work with
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <div
              key={experience.id}
              className={`relative p-6 bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300 ${
                index === 0 ? 'ring-2 ring-primary-100' : ''
              }`}
            >
              {/* Current Role Badge */}
              {/* {index === 0 && (
                <div className="absolute -top-3 left-6 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Current Role
                </div>
              )} */}

              <div className="grid md:grid-cols-3 gap-6">
                {/* Left Column - Company Info */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Briefcase size={20} className="text-primary-600" />
                    <h3 className="text-xl font-semibold text-gray-900">
                      {experience.title}
                    </h3>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-gray-600">
                      <span className="font-medium">{experience.company}</span>
                      {experience.link && (
                        <a
                          href={experience.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary-600 hover:text-primary-700 transition-colors duration-200"
                        >
                          <ExternalLink size={16} />
                        </a>
                      )}
                    </div>
                    
                    <div className="flex items-center gap-2 text-gray-500 text-sm">
                      <MapPin size={16} />
                      <span>{experience.location}</span>
                    </div>
                    
                    <div className="flex items-center gap-2 text-gray-500 text-sm">
                      <Calendar size={16} />
                      <span>{experience.period}</span>
                    </div>
                  </div>
                </div>

                {/* Right Column - Description and Technologies */}
                <div className="md:col-span-2 space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Key Responsibilities:</h4>
                    <ul className="space-y-2">
                      {experience.description.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-gray-600">
                          <span className="w-2 h-2 bg-primary-400 rounded-full mt-2 flex-shrink-0"></span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience; 