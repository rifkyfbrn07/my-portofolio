import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '../data/portfolioData';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }
};

export default function FeatureGrid() {
  return (
    <section className="py-24 bg-neutral-950 text-white px-6 border-t border-neutral-900">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 flex flex-col items-center text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Core Competencies</h2>
          <p className="text-neutral-400 mt-4 max-w-xl">Focused on delivering high-quality web experiences through modern architecture and continuous learning.</p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {PORTFOLIO_DATA.features.map((feature) => (
            <motion.div 
              key={feature.id}
              variants={itemVariants}
              className="group relative p-8 rounded-2xl bg-neutral-900 border border-neutral-800 hover:border-neutral-700 transition-colors duration-300 flex flex-col justify-between aspect-square"
            >
              <div className="text-neutral-500 font-mono text-sm tracking-wider">{feature.id}</div>
              
              <div>
                <h3 className="text-xl font-medium tracking-tight text-neutral-200 group-hover:text-[#A3FF3F] transition-colors">{feature.title}</h3>
                {feature.subtitle && (
                  <p className="text-sm text-neutral-500 mt-2">{feature.subtitle}</p>
                )}
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-[#A3FF3F]/0 group-hover:ring-[#A3FF3F]/20 transition-all duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
