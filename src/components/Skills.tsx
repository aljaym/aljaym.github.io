import React from 'react';
import { Code, Database, Cloud, Palette, Zap } from 'lucide-react';

interface SkillCategory {
  id: string;
  name: string;
  icon: React.ReactNode;
  skills: Skill[];
}

interface Skill {
  name: string;
  level: number; // 1-5
  color: string;
}

const Skills: React.FC = () => {
  const skillCategories: SkillCategory[] = [
    {
      id: 'frontend',
      name: 'Frontend Development',
      icon: <Code size={24} className="text-blue-600" />,
      skills: [
        { name: 'HTML', level: 5, color: 'bg-orange-500' },
        { name: 'CSS', level: 5, color: 'bg-blue-500' },
        { name: 'JavaScript', level: 4, color: 'bg-yellow-500' },
        { name: 'TypeScript', level: 4, color: 'bg-blue-600' },
        { name: 'React', level: 4, color: 'bg-blue-500' },
        { name: 'Angular', level: 3, color: 'bg-red-500' },
        { name: 'jQuery', level: 4, color: 'bg-blue-600' },
        { name: 'Bootstrap', level: 5, color: 'bg-purple-500' },
      ]
    },
    {
      id: 'backend',
      name: 'Backend Development',
      icon: <Database size={24} className="text-green-600" />,
      skills: [
        { name: 'PHP', level: 5, color: 'bg-purple-600' },
        { name: 'Laravel', level: 5, color: 'bg-red-500' },
        { name: '.NET', level: 2, color: 'bg-blue-600' },
        { name: 'WordPress', level: 5, color: 'bg-blue-500' },
        { name: 'Yii Framework', level: 3, color: 'bg-green-600' },
        { name: 'REST APIs', level: 5, color: 'bg-purple-500' },
      ]
    },
    {
      id: 'database',
      name: 'Database & Tools',
      icon: <Cloud size={24} className="text-purple-600" />,
      skills: [
        { name: 'MySQL', level: 5, color: 'bg-blue-600' },
        { name: 'Docker', level: 3, color: 'bg-blue-500' },
        { name: 'Vagrant', level: 2, color: 'bg-blue-600' },
        { name: 'VirtualBox', level: 2, color: 'bg-orange-500' }
      ]
    },
    {
      id: 'design',
      name: 'Development Tools',
      icon: <Palette size={24} className="text-pink-600" />,
      skills: [
        { name: 'Git', level: 5, color: 'bg-orange-600' },
        { name: 'VS Code', level: 4, color: 'bg-blue-500' },
        { name: 'Debugging', level: 5, color: 'bg-red-500' },
        { name: 'Performance Optimization', level: 4, color: 'bg-green-500' },
        { name: 'API Integration', level: 5, color: 'bg-purple-500' },
        { name: 'Code Review', level: 4, color: 'bg-blue-600' },
      ]
    },
    {
      id: 'soft',
      name: 'Professional Skills',
      icon: <Zap size={24} className="text-yellow-600" />,
      skills: [
        { name: 'Team Collaboration', level: 5, color: 'bg-blue-500' },
        { name: 'Problem Solving', level: 5, color: 'bg-purple-500' },
        { name: 'Project Management', level: 3, color: 'bg-green-500' },
        { name: 'Client Communication', level: 4, color: 'bg-blue-600' },
        { name: 'Troubleshooting', level: 5, color: 'bg-orange-500' },
        { name: 'Code Maintenance', level: 5, color: 'bg-green-600' },
      ]
    }
  ];

  const getLevelText = (level: number): string => {
    switch (level) {
      case 1: return 'Beginner';
      case 2: return 'Elementary';
      case 3: return 'Intermediate';
      case 4: return 'Advanced';
      case 5: return 'Expert';
      default: return 'Beginner';
    }
  };

  return (
    <section id="skills" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and professional competencies
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div key={category.id} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300">
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                {category.icon}
                <h3 className="text-xl font-semibold text-gray-900">{category.name}</h3>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-700">{skill.name}</span>
                      <span className="text-sm text-gray-500">{getLevelText(skill.level)}</span>
                    </div>
                    
                    {/* Skill Level Bar */}
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full transition-all duration-300 ${skill.color}`}
                        style={{ width: `${(skill.level / 5) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-gray-900 mb-8">Additional Skills</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Agile/Scrum', 'CI/CD', 'Microservices', 'API Design', 'Performance Optimization',
              'Testing', 'Documentation', 'Code Review', 'Mentoring',
              'Client Communication', 'Requirements Gathering',
            ].map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-white text-gray-700 rounded-full text-sm font-medium border border-gray-200 hover:border-primary-300 hover:text-primary-600 transition-colors duration-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills; 