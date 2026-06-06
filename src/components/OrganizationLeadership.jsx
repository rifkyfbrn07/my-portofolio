import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { ArrowUpRight } from 'lucide-react';

const StatCard = ({ label, value }) => (
  <div className="flex flex-col py-6 border-b border-neutral-200 last:border-0">
    <span className="text-4xl font-bold text-neutral-900 tracking-tighter">{value}</span>
    <span className="text-xs font-mono tracking-widest uppercase text-neutral-400 mt-2">{label}</span>
  </div>
);

export default function OrganizationLeadership() {
  return (
    <section className="py-24 bg-[#FAF9F6] px-6">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24">
        
        {/* Left Side: Sticky Title & Stats */}
        <div className="w-full lg:w-1/3">
          <div className="sticky top-32">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 leading-[1.1] mb-6"
            >
              ORGANIZATION<br />
              <span className="text-neutral-400">& LEADERSHIP</span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-neutral-500 text-base leading-relaxed mb-12"
            >
              Leadership experiences and organizational activities that strengthened collaboration, communication, and project execution skills through real-world responsibilities.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col border-t border-neutral-200"
            >
              <StatCard label="TOTAL ROLE" value="04" />
              <StatCard label="ACTIVE YEAR" value="03" />
              <StatCard label="PROJECTS" value="05+" />
              <StatCard label="LEADERSHIP" value="02" />
            </motion.div>
          </div>
        </div>

        {/* Right Side: Cards */}
        <div className="w-full lg:w-2/3 flex flex-col gap-6">
          {PORTFOLIO_DATA.organization.map((org, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group relative p-8 md:p-10 rounded-3xl bg-white border border-neutral-200 shadow-sm hover:shadow-md hover:border-neutral-300 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 group-hover:text-[#8AE62E] transition-colors">{org.title}</h3>
                  <p className="text-neutral-500 font-medium mt-1">{org.role}</p>
                </div>
                <div className="inline-flex px-3 py-1 bg-neutral-100 rounded-full text-xs font-mono text-neutral-500 shrink-0 h-fit">
                  {org.period}
                </div>
              </div>
              <p className="text-neutral-600 leading-relaxed text-sm md:text-base">
                {org.description}
              </p>
              
              {/* Optional decor */}
              <ArrowUpRight size={20} className="absolute top-8 right-8 text-neutral-300 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
