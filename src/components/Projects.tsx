import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Cpu, Code2, Layout, Terminal } from 'lucide-react';

const projectsData = [
  {
    id: 1,
    title: "SIMs: Self-Ticketing Kiosk",
    category: "software",
    description: "An online food ordering and self-ticketing kiosk system designed to streamline restaurant operations and customer ordering flows.",
    tech: ["TypeScript", "Frontend", "UI/UX"],
    repoUrl: "https://github.com/ArcaIcr/ES_Self-Ticketing-Food-Kiosk-main",
    icon: <Layout className="text-[var(--color-cyber-neon)]" size={24} />
  },
  {
    id: 2,
    title: "Water Quality ML",
    category: "software",
    description: "Machine learning AI integration developed to process, analyze, and predict water quality metrics based on environmental datasets.",
    tech: ["Python", "Machine Learning", "AI"],
    repoUrl: "https://github.com/ArcaIcr/water-quality-ml",
    icon: <Cpu className="text-[var(--color-cyber-neon)]" size={24} />
  },
  {
    id: 3,
    title: "JobHunting Platform",
    category: "software",
    description: "A dedicated job board platform connecting job seekers with employers, built with a robust backend architecture.",
    tech: ["PHP", "Web", "Backend"],
    repoUrl: "https://github.com/ArcaIcr/JobHunting",
    icon: <Code2 className="text-[var(--color-cyber-neon)]" size={24} />
  },
  {
    id: 4,
    title: "Banking GUI Kiosk",
    category: "software",
    description: "Interactive graphical user interface application simulating a secure banking kiosk transaction environment.",
    tech: ["Python", "GUI", "Desktop"],
    repoUrl: "https://github.com/ArcaIcr/GUI---BANKING-KIOSK",
    icon: <Terminal className="text-[var(--color-cyber-neon)]" size={24} />
  }
];

export function Projects() {
  const [filter, setFilter] = useState<'all' | 'software' | 'hardware'>('all');

  const filteredProjects = projectsData.filter(p => filter === 'all' || p.category === filter);

  return (
    <section id="projects" className="py-24 border-t border-white/10">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <h2 className="text-3xl font-mono flex items-center gap-3">
          <Code2 className="text-[var(--color-cyber-neon)]" /> ./projects
        </h2>
        
        {/* Filters */}
        <div className="flex flex-wrap gap-2 font-mono text-sm">
          {['all', 'software', 'hardware'].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f as any)}
              className={`px-4 py-2 border transition-colors ${
                filter === f 
                  ? 'border-[var(--color-cyber-neon)] bg-[var(--color-cyber-neon-dim)] text-[var(--color-cyber-neon)]' 
                  : 'border-white/10 text-[var(--color-cyber-text-muted)] hover:border-white/30'
              }`}
            >
              [{f.toUpperCase()}]
            </button>
          ))}
        </div>
      </div>

      <motion.div layout className="grid md:grid-cols-2 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              key={project.id}
              className="border border-white/10 bg-[var(--color-cyber-card)] p-8 hover:border-[var(--color-cyber-neon-dim)] transition-colors group flex flex-col"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-black/50 border border-white/5 rounded-sm icon-glitch-hover transition-colors">
                  {project.icon}
                </div>
                <div className="flex gap-3 text-[var(--color-cyber-text-muted)]">
                  <a href={project.repoUrl} target="_blank" rel="noreferrer" className="hover:text-[var(--color-cyber-neon)] transition-colors"><Github size={20} /></a>
                  <a href={project.repoUrl} target="_blank" rel="noreferrer" className="hover:text-[var(--color-cyber-neon)] transition-colors"><ExternalLink size={20} /></a>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold mb-3 text-[var(--color-cyber-text)] group-hover:text-[var(--color-cyber-neon)] transition-colors">
                {project.title}
              </h3>
              
              <p className="text-[var(--color-cyber-text-muted)] mb-8 flex-grow text-sm">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 font-mono text-xs">
                {project.tech.map(t => (
                  <span key={t} className="px-2 py-1 bg-black/50 border border-white/10 text-[var(--color-cyber-text-muted)]">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
