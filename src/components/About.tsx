import React from 'react';
import { SectionWrapper } from './SectionWrapper';
import { Code2, Users, Lightbulb, GraduationCap } from 'lucide-react';
export function About() {
  return (
    <SectionWrapper id="about" className="bg-slate-900">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            About <span className="text-primary">Me</span>
          </h2>
          <div className="space-y-4 text-slate-300 text-lg leading-relaxed">
            <p>
              I am a passionate Software Engineer and IT professional with
              strong experience in web development, ICT support, and coding
              mentorship. My journey involves not just writing code, but
              empowering others to understand it.
            </p>
            <p>
              Skilled in teaching programming basics, building digital systems,
              and supporting learners through hands-on and engaging methods. I
              have a proven ability to work with students, beginners, and
              diverse teams both remotely and on-site.
            </p>
            <p>
              Whether I'm architecting a backend system or explaining a complex
              algorithm to a student, I bring the same level of dedication and
              clarity to every task.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <FeatureCard
            icon={<Code2 className="w-8 h-8 text-accent" />}
            title="Full-Stack Dev"
            description="Building robust web applications from front to back." />

          <FeatureCard
            icon={<Users className="w-8 h-8 text-primary" />}
            title="Mentorship"
            description="Teaching coding concepts to beginners and students." />

          <FeatureCard
            icon={<Lightbulb className="w-8 h-8 text-yellow-400" />}
            title="Problem Solving"
            description="Creative approaches to complex technical challenges." />

          <FeatureCard
            icon={<GraduationCap className="w-8 h-8 text-green-400" />}
            title="Continuous Learning"
            description="Always expanding knowledge in new technologies." />

        </div>
      </div>
    </SectionWrapper>);

}
function FeatureCard({
  icon,
  title,
  description




}: {icon: React.ReactNode;title: string;description: string;}) {
  return (
    <div className="p-6 rounded-xl bg-slate-800/50 border border-slate-700 hover:border-primary/50 transition-colors">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-slate-400 text-sm">{description}</p>
    </div>);

}