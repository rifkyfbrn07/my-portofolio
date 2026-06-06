import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

const ProgressBar = ({ label, progress }) => (
  <div className="flex flex-col gap-2">
    <div className="flex justify-between text-sm font-mono">
      <span className="text-neutral-300">{label}</span>
      <span className="text-[#A3FF3F]">{progress}%</span>
    </div>
    <div className="h-1.5 w-full bg-neutral-800 rounded-full overflow-hidden">
      <motion.div 
        initial={{ width: 0 }}
        whileInView={{ width: `${progress}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="h-full bg-[#A3FF3F]"
      />
    </div>
  </div>
);

const StatBox = ({ label, value }) => (
  <div className="p-6 rounded-2xl bg-neutral-900 border border-neutral-800 flex flex-col gap-2">
    <span className="text-sm font-mono text-neutral-500 uppercase tracking-widest">{label}</span>
    <span className="text-4xl font-bold text-white">{value}</span>
  </div>
);

export default function ProfileOverview() {
  return (
    <section className="py-24 bg-neutral-950 text-white px-6 border-t border-neutral-900">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24">
        
        {/* Left: Stats Grid */}
        <div className="w-full lg:w-1/2">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold tracking-tight mb-8"
          >
            PROFILE OVERVIEW
          </motion.h2>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="grid grid-cols-2 gap-4"
          >
            <StatBox label="Projects" value="06" />
            <StatBox label="Tech Stack" value="12+" />
            <StatBox label="Organization" value="03" />
            <StatBox label="Learning" value="2023 -" />
          </motion.div>
          
          <motion.a 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            href={PORTFOLIO_DATA.profile.socials.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 mt-8 text-neutral-400 hover:text-[#A3FF3F] transition-colors group text-sm font-mono uppercase tracking-widest"
          >
            View GitHub
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </div>

        {/* Right: Current Focus */}
        <div className="w-full lg:w-1/2 lg:pt-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="p-8 rounded-3xl bg-neutral-900/50 border border-neutral-800"
          >
            <h3 className="text-xl font-medium text-white mb-2">CURRENT FOCUS</h3>
            <p className="text-neutral-500 text-sm mb-8">Areas currently being explored and improved.</p>
            
            <div className="flex flex-col gap-6">
              <ProgressBar label="Next.js" progress={85} />
              <ProgressBar label="Tailwind CSS" progress={90} />
              <ProgressBar label="Laravel" progress={75} />
              <ProgressBar label="REST API" progress={80} />
              <ProgressBar label="UI Design" progress={70} />
              <ProgressBar label="TypeScript" progress={65} />
            </div>

            <div className="mt-8 pt-6 border-t border-neutral-800 flex items-center gap-3">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#A3FF3F] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#A3FF3F]"></span>
              </span>
              <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">Continuous Learning</span>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
