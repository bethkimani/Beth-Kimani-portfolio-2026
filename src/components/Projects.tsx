import React from 'react';
import { SectionWrapper } from './SectionWrapper';
import { Github, ExternalLink, Folder } from 'lucide-react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'UrbanMall E-Commerce Platform (In Progress)',
    description:
      'Designed and implemented frontend UI/UX for an e-commerce platform using React. Focused on responsive layouts, usability, and improving customer shopping experience. This is an ongoing project aimed at building a full-scale modern online marketplace.',
    tech: ['React', 'UI/UX Design', 'Frontend Development', 'CSS'],
    live: 'https://urbanmall.co.ke',
    github: null,
    featured: true
  },
  {
    title: 'Pet Adoption Platform',
    description:
      'A comprehensive platform connecting pets with potential owners. Features secure backend authentication and intuitive client dashboards for seamless adoption processes.',
    tech: ['React', 'REST APIs', 'CSS'],
    live: 'https://react-pets-adoption.vercel.app/',
    github: 'https://github.com/bethkimani/react-pets-adoption',
    featured: true
  },
 
  {
    title: 'Moringa Inventory System',
    description:
      'Team-based inventory tracking system featuring authentication, asset management, and reporting dashboards. Strengthened collaboration and Git workflow experience.',
    tech: ['React', 'Authentication', 'Team Project'],
    live: 'https://moringa-ims.netlify.app/',
    github: 'https://github.com/awangui/moringa-ims-frontend',
    featured: false
  },
  {
    title: 'TalantaMatch (AI Website Builder)',
    description:
      'A full-stack AI-powered website builder that allows users to create websites in minutes or hire developers. Built using React (frontend), Django (backend), and MySQL database.',
    tech: ['React', 'Django', 'MySQL', 'AI Integration', 'Full Stack'],
    live: 'https://talantamatch.com/',
    github: 'https://github.com/bethkimani/talantamatch',
    featured: true
  }
];

export function Projects() {
  return (
    <SectionWrapper id="projects" className="bg-slate-950">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Featured <span className="text-primary">Projects</span>
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto">
          A selection of projects that demonstrate my technical capabilities,
          UI/UX design skills, and problem-solving abilities.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            whileHover={{ y: -10 }}
            className="group relative bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 hover:border-primary/50 transition-all duration-300 flex flex-col"
          >
            {/* Top gradient line */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity" />

            <div className="p-8 flex-1 flex flex-col">

              {/* Icon + Links */}
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-slate-800 rounded-lg text-primary group-hover:text-white group-hover:bg-primary transition-colors">
                  <Folder className="w-6 h-6" />
                </div>

                <div className="flex gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-white transition-colors"
                      aria-label="View Source Code"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  )}

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-white transition-colors"
                      aria-label="View Live Demo"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-slate-400 mb-6 flex-1 leading-relaxed">
                {project.description}
              </p>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="text-xs font-medium px-3 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700"
                  >
                    {t}
                  </span>
                ))}
              </div>

            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
