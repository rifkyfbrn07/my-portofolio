import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { ExternalLink, Github } from 'lucide-react';

export default function ProjectGallery({ onOpenProject }) {
  return (
    <section className="py-24 md:py-32 bg-[#FAF9F6] px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-neutral-900">Featured Work</h2>
            <p className="mt-4 text-neutral-500 max-w-xl text-lg">A selection of my recent frontend projects, demonstrating responsive design, clean architecture, and modern UI practices.</p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {PORTFOLIO_DATA.projects.map((project, idx) => (
            <motion.div 
              key={project.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: (idx % 2) * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group flex flex-col"
            >
              <div 
                onClick={() => onOpenProject && onOpenProject(project)}
                className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden bg-neutral-200 cursor-pointer mb-6"
              >
                <img 
                  src={project.image || "/profile.webp"} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500" />
                
                {/* Tech Badges inside image top-left */}
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  {project.techStack?.slice(0, 3).map(tech => (
                    <span key={tech} className="px-3 py-1 bg-white/90 backdrop-blur-sm text-neutral-900 text-xs font-semibold rounded-full shadow-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col flex-1 justify-between gap-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">{project.category}</span>
                  </div>
                  <h3 
                    onClick={() => onOpenProject && onOpenProject(project)}
                    className="text-2xl font-bold text-neutral-900 hover:text-[#8AE62E] transition-colors cursor-pointer"
                  >
                    {project.title}
                  </h3>
                  <p className="mt-3 text-neutral-600 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>

                <div className="flex items-center gap-4 mt-2">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-medium text-neutral-700 hover:text-black transition-colors">
                      <Github size={18} /> Source
                    </a>
                  )}
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-medium text-neutral-700 hover:text-black transition-colors">
                      <ExternalLink size={18} /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
