import React from 'react';
import { motion } from 'framer-motion';
interface SectionWrapperProps {
  children: ReactNode;
  id?: string;
  className?: string;
  delay?: number;
}
export function SectionWrapper({
  children,
  id,
  className = '',
  delay = 0
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={`py-20 px-4 md:px-8 overflow-hidden ${className}`}>

      <motion.div
        initial={{
          opacity: 0,
          y: 50
        }}
        whileInView={{
          opacity: 1,
          y: 0
        }}
        viewport={{
          once: true,
          margin: '-100px'
        }}
        transition={{
          duration: 0.6,
          delay,
          ease: 'easeOut'
        }}
        className="max-w-7xl mx-auto">

        {children}
      </motion.div>
    </section>);

}