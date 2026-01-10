import React from 'react';

interface Skill {
  category: string;
  tools: string[];
  color: string;
}

const skills: Skill[] = [
  {
    category: 'Data Science & ML',
    tools: ['Python', 'TensorFlow', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn'],
    color: 'from-blue-500 to-blue-600',
  },
  {
    category: 'Frontend Development',
    tools: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML5', 'CSS3', 'JavaScript'],
    color: 'from-cyan-500 to-blue-500',
  },
  {
    category: 'Backend & Databases',
    tools: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'MySQL', 'SQL', 'REST APIs'],
    color: 'from-green-500 to-teal-500',
  },
  {
    category: 'Mobile Development',
    tools: ['Flutter', 'Dart', 'React Native', 'Cross-platform Apps'],
    color: 'from-purple-500 to-pink-500',
  },
  {
    category: 'Data Visualization & BI',
    tools: ['Power BI', 'Tableau', 'Plotly', 'D3.js', 'Apache Superset'],
    color: 'from-orange-500 to-red-500',
  },
  {
    category: 'DevOps & Tools',
    tools: ['Git', 'Docker', 'AWS', 'Firebase', 'Vercel', 'GitHub', 'VS Code'],
    color: 'from-red-500 to-pink-500',
  },
];

export default function SkillsSection() {
  return (
    <section id="about" className="w-full py-20 bg-gradient-to-b from-gray-900 to-black px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Skills & Technologies
          </h2>
          <p className="text-xl text-gray-300">
            Comprehensive toolkit for building intelligent data-driven solutions
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillGroup, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl bg-gray-800 hover:bg-gray-750 transition-all duration-300 transform hover:scale-105"
            >
              {/* Gradient Border Effect */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${skillGroup.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
              />

              {/* Content */}
              <div className="relative p-8 z-10">
                {/* Category Title */}
                <h3 className={`text-2xl font-bold mb-6 bg-gradient-to-r ${skillGroup.color} bg-clip-text text-transparent`}>
                  {skillGroup.category}
                </h3>

                {/* Tools Grid */}
                <div className="flex flex-wrap gap-3">
                  {skillGroup.tools.map((tool, toolIndex) => (
                    <span
                      key={toolIndex}
                      className={`px-4 py-2 rounded-full bg-gradient-to-r ${skillGroup.color} text-white text-sm font-semibold shadow-lg hover:shadow-xl transition-shadow duration-300`}
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Accent Line */}
              <div className={`absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r ${skillGroup.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`} />
            </div>
          ))}
        </div>

        {/* Certifications & Achievements */}
        <div className="mt-20 p-8 rounded-xl bg-gradient-to-r from-blue-900 to-purple-900 border border-blue-500 border-opacity-30">
          <h3 className="text-2xl font-bold text-white mb-6">
            🏆 Certifications & Expertise
          </h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-200">
            <li className="flex items-center">
              <span className="text-cyan-400 mr-3">✓</span>
              Certified Full Stack Developer (MERN Stack)
            </li>
            <li className="flex items-center">
              <span className="text-cyan-400 mr-3">✓</span>
              Data Scientist & Machine Learning Expert
            </li>
            <li className="flex items-center">
              <span className="text-cyan-400 mr-3">✓</span>
              Cloud Solutions (AWS, Firebase, Google Cloud)
            </li>
            <li className="flex items-center">
              <span className="text-cyan-400 mr-3">✓</span>
              Cross-Platform Mobile Development
            </li>
            <li className="flex items-center">
              <span className="text-cyan-400 mr-3">✓</span>
              Advanced Data Analytics & Visualization
            </li>
            <li className="flex items-center">
              <span className="text-cyan-400 mr-3">✓</span>
              Open Source Contributor
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
