import React from 'react';
import { SectionWrapper } from './SectionWrapper';
import { GraduationCap, Award } from 'lucide-react';
const education = [
{
  school: 'Moringa School',
  degree: 'Software Engineering (Full-Stack Development)',
  period: 'Sep 2024 – Jul 2025'
},
{
  school: 'AWS re/Start Kenya',
  degree: 'Cloud Computing & AWS Services',
  period: 'Jan 2025 – Apr 2025'
},
{
  school: 'Kiriri Women’s University',
  degree: 'BSc in Computer Science',
  period: 'Aug 2021 – Oct 2024'
}];

const certifications = [
'ReactJS',
'JavaScript',
'Networking Basics',
'Introduction to Cybersecurity',
'Microsoft Career Essentials in Software Development',
'Artificial Intelligence'];

export function Education() {
  return (
    <SectionWrapper id="education" className="bg-slate-900">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Education Column */}
        <div>
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
            <GraduationCap className="w-8 h-8 text-primary" />
            Education
          </h2>
          <div className="space-y-8">
            {education.map((edu, idx) =>
            <div
              key={idx}
              className="relative pl-8 border-l-2 border-slate-800 hover:border-primary transition-colors">

                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-slate-900 border-2 border-primary" />
                <h3 className="text-xl font-bold text-white mb-1">
                  {edu.school}
                </h3>
                <p className="text-primary font-medium mb-1">{edu.degree}</p>
                <p className="text-slate-500 text-sm">{edu.period}</p>
              </div>
            )}
          </div>
        </div>

        {/* Certifications Column */}
        <div>
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
            <Award className="w-8 h-8 text-accent" />
            Certifications
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {certifications.map((cert, idx) =>
            <div
              key={idx}
              className="p-4 bg-slate-800/30 border border-slate-700 rounded-lg hover:bg-slate-800 hover:border-accent/50 transition-all cursor-default">

                <p className="text-slate-300 font-medium">{cert}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </SectionWrapper>);

}