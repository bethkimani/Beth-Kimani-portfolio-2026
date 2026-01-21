import React from 'react';
import { SectionWrapper } from './SectionWrapper';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
const experiences = [
{
  title: 'Freelance Tutor & Web Developer',
  company: 'Remote',
  period: 'Mar 2025 – Present',
  description: [
  'Teach coding concepts to beginners and young learners.',
  'Tutor in HTML, CSS, JavaScript, and basic programming logic.',
  'Build websites and dashboards for clients.',
  'Support learners with practical, project-based lessons.']

},
{
  title: 'Backend Software Engineer (Apprenticeship)',
  company: 'AWS User Group Kenya',
  period: 'Apr 2025 – Oct 2025',
  description: [
  'Developed backend systems using Node.js and Express.',
  'Designed PostgreSQL databases for performance and accuracy.',
  'Worked in Agile teams and remote environments.']

},
{
  title: 'ICT Support Intern',
  company: 'ICS Technical College',
  period: 'May 2024 – Jul 2024',
  description: [
  'Built online timetable and evaluation systems using HTML, CSS, PHP, SQL.',
  'Provided hardware, software, and network support.',
  'Assisted staff and students with ICT issues.',
  'Participated in team project for college mobile app.']

},
{
  title: 'IT Expert (Part-Time)',
  company: 'Gralex Farm Fresh Ltd',
  period: 'Oct 2023 – Sep 2025',
  description: [
  'Provided technical support and cybersecurity training.',
  'Maintained WordPress websites.',
  'Improved internal digital systems.']

}];

export function Experience() {
  return (
    <SectionWrapper id="experience" className="bg-slate-900">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Professional <span className="text-primary">Experience</span>
        </h2>
        <p className="text-slate-400">
          My professional journey in tech and education.
        </p>
      </div>

      <div className="relative max-w-4xl mx-auto">
        {/* Vertical Line */}
        <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-px bg-slate-800" />

        <div className="space-y-12">
          {experiences.map((exp, idx) =>
          <div
            key={idx}
            className={`relative flex flex-col md:flex-row gap-8 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>

              {/* Timeline Dot */}
              <div className="absolute left-[-5px] md:left-1/2 transform md:-translate-x-1/2 top-0 w-3 h-3 bg-primary rounded-full ring-4 ring-slate-900 z-10" />

              {/* Content */}
              <div className="flex-1 ml-6 md:ml-0">
                <div
                className={`bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-slate-600 transition-colors ${idx % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>

                  <h3 className="text-xl font-bold text-white mb-1">
                    {exp.title}
                  </h3>
                  <div
                  className={`flex flex-wrap gap-4 text-sm text-primary mb-4 ${idx % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}>

                    <span className="flex items-center gap-1">
                      <Briefcase className="w-4 h-4" /> {exp.company}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" /> {exp.period}
                    </span>
                  </div>
                  <ul
                  className={`space-y-2 text-slate-400 text-sm ${idx % 2 === 0 ? 'md:items-start' : 'md:items-end'} flex flex-col`}>

                    {exp.description.map((item, i) =>
                  <li key={i} className="flex gap-2">
                        <span className="text-accent mt-1.5">•</span>
                        <span>{item}</span>
                      </li>
                  )}
                  </ul>
                </div>
              </div>

              {/* Spacer for alternating layout */}
              <div className="flex-1 hidden md:block" />
            </div>
          )}
        </div>
      </div>
    </SectionWrapper>);

}