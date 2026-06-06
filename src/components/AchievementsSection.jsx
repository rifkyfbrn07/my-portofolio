import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export default function AchievementsSection() {
  return (
    <section className="py-24 bg-neutral-950 text-white px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <h2 className="text-xs font-mono tracking-widest uppercase text-[#A3FF3F] mb-4">Milestones</h2>
          <h3 className="text-4xl md:text-5xl font-bold tracking-tight">FEATURED <br/><span className="text-neutral-500">ACHIEVEMENTS</span></h3>
        </motion.div>

        <div className="relative border-l border-neutral-800 ml-4 md:ml-8 pl-8 md:pl-12 py-4 space-y-16">
          {PORTFOLIO_DATA.achievements.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="relative group"
            >
              {/* Timeline Dot */}
              <div className="absolute w-3 h-3 bg-neutral-800 rounded-full -left-[42px] md:-left-[54px] top-1.5 group-hover:bg-[#A3FF3F] group-hover:shadow-[0_0_10px_rgba(163,255,63,0.5)] transition-all duration-300 ring-4 ring-neutral-950" />
              
              <div className="flex flex-col gap-2">
                <span className="text-sm font-mono text-[#A3FF3F]">{item.year}</span>
                <h4 className="text-xl md:text-2xl font-semibold text-neutral-200 tracking-tight">{item.title}</h4>
                <p className="text-neutral-500 mt-2 max-w-2xl leading-relaxed">{item.description}</p>
                {item.techStack && item.techStack.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-4">
                    {item.techStack.map(tech => (
                      <span key={tech} className="px-2.5 py-1 text-xs rounded-md bg-neutral-900 border border-neutral-800 text-neutral-400">
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
