import React from 'react';
import { Github, Globe, Calendar, Code } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  category: string;
  featured: boolean;
  completionDate: string;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: 'Enterprise Web Application',
      description: 'Custom modules and components built with Laravel backend and React frontend for enterprise client. Features include user management, reporting, and third-party API integrations.',
      image: '/api/placeholder/600/400',
      technologies: ['Laravel', 'React', 'PHP', 'MySQL', 'JavaScript'],
      liveUrl: undefined,
      githubUrl: undefined,
      category: 'Full Stack',
      featured: false,
      completionDate: 'Dec 2023'
    },
    {
      id: 2,
      title: 'Data Center Management System',
      description: 'Frontend development for a comprehensive data center management system using Angular. Focused on user interface and user experience optimization.',
      image: '/api/placeholder/600/400',
      technologies: ['Angular', 'TypeScript', 'CSS', 'JavaScript'],
      liveUrl: undefined,
      githubUrl: undefined,
      category: 'Frontend',
      featured: false,
      completionDate: 'May 2018'
    },
    {
      id: 3,
      title: 'E-Commerce Platform Integration',
      description: 'Maintained and optimized e-commerce websites using BigCommerce and Neto platforms. Automated retail processes to improve operational efficiency.',
      image: '/api/placeholder/600/400',
      technologies: ['BigCommerce', 'Neto', 'JavaScript', 'PHP', 'API Integration'],
      liveUrl: undefined,
      githubUrl: undefined,
      category: 'Full Stack',
      featured: false,
      completionDate: 'June 2018'
    },
    {
      id: 4,
      title: 'Medical Software System',
      description: 'Healthcare technology solution involving database design, development, and maintenance using Yii framework. Focused on medical data management and reporting.',
      image: '/api/placeholder/600/400',
      technologies: ['Yii Framework', 'PHP', 'MySQL', 'JavaScript'],
      liveUrl: undefined,
      githubUrl: undefined,
      category: 'Full Stack',
      featured: false,
      completionDate: 'March 2017'
    },
    {
      id: 5,
      title: 'WordPress Custom Solutions',
      description: 'Multiple WordPress projects including custom theme development, plugin creation, and PSD to WordPress conversions. Built listing websites and custom functionalities.',
      image: '/api/placeholder/600/400',
      technologies: ['WordPress', 'PHP', 'MySQL', 'JavaScript', 'CSS'],
      liveUrl: undefined,
      githubUrl: undefined,
      category: 'Full Stack',
      featured: false,
      completionDate: 'Feb 2016'
    },
    {
      id: 6,
      title: 'Portfolio Website',
      description: 'Personal portfolio website showcasing projects and skills. Built with modern web technologies and responsive design.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'JavaScript'],
      liveUrl: 'https://aljaym.github.io/',
      githubUrl: 'https://github.com/aljaym',
      category: 'Frontend',
      featured: false,
      completionDate: 'Current'
    }
  ];

  const categories = ['All', 'Full Stack', 'Frontend', 'Backend'];
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="projects" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A collection of my recent work showcasing different technologies and problem-solving approaches
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center mb-12">
          <div className="flex space-x-2 bg-gray-100 p-1 rounded-lg">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  selectedCategory === category
                    ? 'bg-white text-primary-600 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300 ${
                project.featured ? 'ring-2 ring-primary-100' : ''
              }`}
            >
              {/* Featured Badge */}
              {project.featured && (
                <div className="absolute top-4 left-4 bg-primary-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                  Featured
                </div>
              )}

              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                <Code size={48} className="text-gray-400" />
                <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-all duration-300"></div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-primary-600 font-medium">{project.category}</span>
                  <span className="text-sm text-gray-500 flex items-center gap-1">
                    <Calendar size={14} />
                    {project.completionDate}
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex gap-3">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium text-sm transition-colors duration-200"
                    >
                      <Globe size={16} />
                      Live Demo
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-600 hover:text-gray-800 font-medium text-sm transition-colors duration-200"
                    >
                      <Github size={16} />
                      Source Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
                      <a
              href="https://aljaym.github.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2"
            >
              <Github size={20} />
              View Portfolio Website
            </a>
        </div>
      </div>
    </section>
  );
};

export default Projects; 