import React from 'react';

interface Project {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  color: string;
}

const projects: Project[] = [
  {
    title: 'Machine Learning Predictive Models',
    description: 'Advanced ML models for flight delay prediction, customer churn analysis, and price forecasting using TensorFlow and Scikit-learn.',
    tags: ['Python', 'TensorFlow', 'Data Analysis', 'Predictive Modeling'],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Full Stack Web Applications',
    description: 'MERN stack applications with real-time data processing, interactive dashboards, and seamless user experiences.',
    tags: ['React', 'Node.js', 'MongoDB', 'TypeScript'],
    color: 'from-green-500 to-teal-500',
  },
  {
    title: 'Cross-Platform Mobile Apps',
    description: 'Flutter applications for fitness tracking, service management, and community platforms with real-time synchronization.',
    tags: ['Flutter', 'Dart', 'Firebase', 'Mobile'],
    color: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Data Visualization Dashboards',
    description: 'Interactive BI dashboards using Power BI and custom visualizations for business intelligence and real-time analytics.',
    tags: ['Power BI', 'Tableau', 'D3.js', 'Analytics'],
    color: 'from-orange-500 to-red-500',
  },
];

export default function ProjectsSection() {
  return (
    <section className="w-full py-20 bg-black px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-300">
            Innovative solutions across data science, web, and mobile development
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 hover:border-gray-500 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
            >
              {/* Gradient Header */}
              <div className={`h-1 w-full bg-gradient-to-r ${project.color}`} />

              {/* Content */}
              <div className="p-8 relative z-10">
                <h3 className="text-2xl font-bold text-white mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className={`px-3 py-1 rounded-full text-sm font-semibold bg-gradient-to-r ${project.color} text-white`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Link Button */}
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold transition-colors"
                  >
                    View Project
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                )}
              </div>

              {/* Background Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
