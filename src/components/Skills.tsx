import React from 'react';
import { SectionWrapper } from './SectionWrapper';
import { motion } from 'framer-motion';
const skillCategories = [
{
  title: 'Languages & Frameworks',
  skills: [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Node.js',
  'Express',
  'PHP',
  'Python',
  'Java']

},
{
  title: 'Databases',
  skills: ['PostgreSQL', 'MySQL', 'MongoDB']
},
{
  title: 'Cloud & Tools',
  skills: ['AWS', 'Azure', 'Git', 'GitHub', 'Jira']
},
{
  title: 'IT & Support',
  skills: [
  'ICT Support',
  'Hardware Setup',
  'Network Troubleshooting',
  'System Maintenance']

}];

export function Skills() {
  return (
    <SectionWrapper id="skills" className="bg-slate-950">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Technical <span className="text-primary">Skills</span>
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto">
          A comprehensive toolkit of technologies and methodologies I use to
          build digital solutions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillCategories.map((category, idx) =>
        <div
          key={idx}
          className="bg-slate-900/50 p-8 rounded-2xl border border-slate-800 hover:border-slate-700 transition-colors">

            <h3 className="text-xl font-semibold text-white mb-6 border-b border-slate-800 pb-2 inline-block">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill, sIdx) =>
            <motion.span
              key={sIdx}
              initial={{
                opacity: 0,
                scale: 0.8
              }}
              whileInView={{
                opacity: 1,
                scale: 1
              }}
              transition={{
                delay: idx * 0.1 + sIdx * 0.05,
                duration: 0.3
              }}
              viewport={{
                once: true
              }}
              className="px-4 py-2 bg-slate-800 text-slate-300 rounded-lg text-sm font-medium border border-slate-700 hover:border-primary/50 hover:text-primary transition-colors cursor-default">

                  {skill}
                </motion.span>
            )}
            </div>
          </div>
        )}
      </div>
    </SectionWrapper>);

}