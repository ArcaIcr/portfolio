import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Cpu, Code2 } from 'lucide-react';

const projectsData = [
  {
    id: 1,
    title: "ESP32 Smart Home Hub",
    category: "hardware",
    description: "Custom IoT hub built with ESP32 and MQTT, interfacing with React native frontend for seamless home automation.",
    tech: ["C++", "ESP32", "MQTT", "React Native"],
    icon: <Cpu className="text-[var(--color-cyber-neon)]" size={24} />
  },
  {
    id: 2,
    title: "Cyberpunk Component Library",
    category: "software",
    description: "A highly customizable React UI library featuring neon aesthetics, complex Framer Motion transitions, and Tailwind v4.",
    tech: ["React", "TypeScript", "Tailwind v4", "Framer Motion"],
    icon: <Code2 className="text-[var(--color-cyber-neon)]" size={24} />
  },
  {
    id: 3,
    title: "Arduino Weather Station",
    category: "hardware",
    description: "Solar-powered environmental logger using Arduino Nano and DHT22 sensors, sending data via LoRa to a central server.",
    tech: ["Arduino", "C++", "LoRa", "Sensors"],
    icon: <Cpu className="text-[var(--color-cyber-neon)]" size={24} />
  },
  {
    id: 4,
    title: "Minimalist E-Commerce",
    category: "software",
    description: "Full-stack headless e-commerce store built with Next.js and Stripe, focused on unparalleled loading speeds.",
    tech: ["Next.js", "Stripe", "PostgreSQL", "Prisma"],
    icon: <Code2 className="text-[var(--color-cyber-neon)]" size={24} />
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
                  <a href="#" className="hover:text-[var(--color-cyber-neon)] transition-colors"><Github size={20} /></a>
                  <a href="#" className="hover:text-[var(--color-cyber-neon)] transition-colors"><ExternalLink size={20} /></a>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold mb-3 text-[var(--color-cyber-text)] group-hover:text-[var(--color-cyber-neon)] transition-colors">
                {project.title}
              </h3>
              
              <p className="text-[var(--color-cyber-text-muted)] mb-8 flex-grow">
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
