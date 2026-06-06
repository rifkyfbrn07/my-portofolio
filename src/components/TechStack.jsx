import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '../data/portfolioData';

const Badge = ({ children }) => (
  <motion.div 
    whileHover={{ scale: 1.05, y: -2 }}
    className="px-4 py-2 bg-neutral-100 border border-neutral-200 rounded-full text-sm font-medium text-neutral-700 shadow-sm hover:border-[#A3FF3F]/50 hover:bg-[#A3FF3F]/10 hover:text-neutral-900 transition-colors cursor-default"
  >
    {children}
  </motion.div>
);

const Category = ({ title, description, skills }) => (
  <div className="py-10 border-b border-neutral-200 last:border-0">
    <div className="flex flex-col md:flex-row gap-8">
      <div className="w-full md:w-1/3">
        <h3 className="text-sm font-mono tracking-widest uppercase text-neutral-400 mb-3">{title}</h3>
        <p className="text-neutral-600 text-sm leading-relaxed">{description}</p>
      </div>
      <div className="w-full md:w-2/3 flex flex-wrap gap-3 items-start">
        {skills.map((skill) => (
          <Badge key={skill}>{skill}</Badge>
        ))}
      </div>
    </div>
  </div>
);

export default function TechStack() {
  const { frontend, backend, tools, learning } = PORTFOLIO_DATA.techStack;

  return (
    <section className="py-24 bg-white px-6">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16">
        
        {/* Left Side: Sticky Header */}
        <div className="w-full lg:w-1/3">
          <div className="sticky top-32">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold tracking-tight text-neutral-900"
            >
              TECH <span className="text-[#A3FF3F]">STACK</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-6 text-neutral-500 text-lg leading-relaxed"
            >
              Building modern web experiences with a focus on responsive design, clean architecture, and continuous learning through real-world projects.
            </motion.p>
          </div>
        </div>

        {/* Right Side: Stack Categories */}
        <div className="w-full lg:w-2/3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Category 
              title="Frontend Development" 
              description="Building responsive and modern web interfaces using component-based architecture and performance-focused design."
              skills={frontend}
            />
            <Category 
              title="Backend & API" 
              description="Developing backend services and REST APIs using Laravel with structured database integration."
              skills={backend}
            />
            <Category 
              title="Tools & Workflow" 
              description="Using modern development tools for version control, API testing, UI design, and collaborative workflows."
              skills={tools}
            />
            <Category 
              title="Learning Journey" 
              description="Continuously learning Linux, networking concepts, cybersecurity fundamentals, and problem-solving through personal projects."
              skills={learning}
            />
          </motion.div>
        </div>

      </div>
    </section>
  );
}
