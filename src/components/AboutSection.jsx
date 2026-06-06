import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { ArrowRight } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about-section" className="relative w-full bg-[#FAF9F6] py-24 md:py-32 overflow-hidden px-6">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        
        {/* Left: Image Container */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-md aspect-[4/5] rounded-3xl overflow-hidden bg-neutral-100"
        >
          <img 
            src="/sindoro.jpg" 
            alt="Rifky Febrian Iskandar"
            className="w-full h-full object-cover object-top filter grayscale-[20%] hover:grayscale-0 transition-all duration-700 ease-out hover:scale-105"
          />
          <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-3xl pointer-events-none" />
        </motion.div>

        {/* Right: Content */}
        <div className="flex-1 flex flex-col items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 border border-neutral-200 text-xs font-medium tracking-wide uppercase text-neutral-600 mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#A3FF3F]" />
            About Me
          </motion.div>

          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900 mb-6"
          >
            Passionate about crafting <span className="text-neutral-400">digital experiences</span> that matter.
          </motion.h3>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-neutral-600 text-base md:text-lg leading-relaxed space-y-6"
          >
            {PORTFOLIO_DATA.profile.bio.split('\n\n').map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10"
          >
            <a 
              href={PORTFOLIO_DATA.profile.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-neutral-900 font-medium hover:text-[#8AE62E] transition-colors group"
            >
              Connect on LinkedIn
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
