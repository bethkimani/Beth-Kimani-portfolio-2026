import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import { AnimatedBackground } from './AnimatedBackground';
export function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-900">
      <AnimatedBackground />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-slate-900 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.9
          }}
          animate={{
            opacity: 1,
            scale: 1
          }}
          transition={{
            duration: 0.8,
            ease: 'easeOut'
          }}
          className="mb-8 inline-block">

          <div className="p-1 rounded-full bg-gradient-to-r from-primary to-accent">
            <div className="bg-slate-900 rounded-full p-4">
              <span className="text-4xl sm:text-5xl">👩‍💻</span>
            </div>
          </div>
        </motion.div>

        <motion.h1
          initial={{
            opacity: 0,
            y: 20
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.8,
            delay: 0.2
          }}
          className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">

          Beth Waceke{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-light">
            Kimani
          </span>
        </motion.h1>

        <motion.p
          initial={{
            opacity: 0,
            y: 20
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.8,
            delay: 0.4
          }}
          className="text-xl md:text-2xl text-slate-300 mb-4 max-w-2xl mx-auto">

          Software Engineer | Full-Stack Developer
        </motion.p>

        <motion.p
          initial={{
            opacity: 0,
            y: 20
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.8,
            delay: 0.5
          }}
          className="text-lg text-primary mb-10">

          Nairobi, Kenya
        </motion.p>

        <motion.div
          initial={{
            opacity: 0,
            y: 20
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.8,
            delay: 0.6
          }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4">

          <a
            href="#projects"
            className="px-8 py-4 bg-primary hover:bg-primary-dark text-white rounded-full font-semibold transition-all flex items-center gap-2 shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-1">

            View Projects <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href="#contact"
            className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white rounded-full font-semibold transition-all border border-slate-700 hover:border-slate-600 hover:-translate-y-1">

            Contact Me
          </a>
        </motion.div>

        <motion.div
          initial={{
            opacity: 0
          }}
          animate={{
            opacity: 1
          }}
          transition={{
            duration: 1,
            delay: 1
          }}
          className="mt-12 flex justify-center gap-6">

          <SocialLink
            href="https://github.com/bethkimani"
            icon={<Github />}
            label="GitHub" />

          <SocialLink
            href="https://www.linkedin.com/in/beth-kimani/"
            icon={<Linkedin />}
            label="LinkedIn" />

          <SocialLink
            href="mailto:kbwaceke@gmail.com"
            icon={<Mail />}
            label="Email" />

        </motion.div>
      </div>

      <motion.div
        initial={{
          opacity: 0
        }}
        animate={{
          opacity: 1
        }}
        transition={{
          delay: 1.5,
          duration: 1
        }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-slate-500">

        <ChevronDown className="w-8 h-8" />
      </motion.div>
    </div>);

}
function SocialLink({
  href,
  icon,
  label




}: {href: string;icon: React.ReactNode;label: string;}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-3 text-slate-400 hover:text-primary hover:bg-slate-800/50 rounded-full transition-colors"
      aria-label={label}>

      {icon}
    </a>);

}
