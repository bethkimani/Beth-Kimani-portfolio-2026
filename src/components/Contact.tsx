import React from 'react';
import { SectionWrapper } from './SectionWrapper';
import { Mail, Phone, Github, Linkedin, MapPin } from 'lucide-react';
export function Contact() {
  return (
    <footer
      id="contact"
      className="bg-slate-950 pt-20 pb-10 border-t border-slate-900">

      <SectionWrapper>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-4xl font-bold text-white mb-6">
              Let's <span className="text-primary">Connect</span>
            </h2>
            <p className="text-slate-400 text-lg mb-8 max-w-md">
              I'm currently open to new opportunities in software engineering
              and web development. Whether you have a question or just want to
              say hi, I'll try my best to get back to you!
            </p>

            <div className="space-y-4">
              <ContactItem
                icon={<Mail className="w-5 h-5 text-accent" />}
                text="kbwaceke@gmail.com"
                href="mailto:kbwaceke@gmail.com" />

              <ContactItem
                icon={<Phone className="w-5 h-5 text-primary" />}
                text="+254 112 280 703"
                href="tel:+254112280703" />

              <ContactItem
                icon={<MapPin className="w-5 h-5 text-green-500" />}
                text="Nairobi, Kenya" />

            </div>
          </div>

          <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 text-center">
            <h3 className="text-2xl font-bold text-white mb-6">Find me on</h3>
            <div className="flex justify-center gap-6">
              <SocialButton
                href="https://github.com/bethkimani"
                icon={<Github className="w-6 h-6" />}
                label="GitHub" />

              <SocialButton
                href="https://www.linkedin.com/in/beth-kimani/"
                icon={<Linkedin className="w-6 h-6" />}
                label="LinkedIn" />

            </div>
            <p className="mt-8 text-slate-500 text-sm">
              © {new Date().getFullYear()} Beth Waceke Kimani. All rights
              reserved.
            </p>
          </div>
        </div>
      </SectionWrapper>
    </footer>);

}
function ContactItem({
  icon,
  text,
  href




}: {icon: React.ReactNode;text: string;href?: string;}) {
  const content =
  <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-slate-700 transition-colors">
      {icon}
      <span className="text-slate-300 font-medium">{text}</span>
    </div>;

  if (href) {
    return (
      <a
        href={href}
        className="block hover:-translate-y-1 transition-transform">

        {content}
      </a>);

  }
  return content;
}
function SocialButton({
  href,
  icon,
  label




}: {href: string;icon: React.ReactNode;label: string;}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col items-center gap-2 group">

      <div className="p-4 bg-slate-800 rounded-full text-slate-400 group-hover:text-white group-hover:bg-primary transition-all duration-300 shadow-lg group-hover:shadow-primary/25">
        {icon}
      </div>
      <span className="text-sm text-slate-500 group-hover:text-slate-300 transition-colors">
        {label}
      </span>
    </a>);

}
