import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Cpu, Code2, RotateCw } from 'lucide-react';

const projectsData = [
  {
    id: 1,
    title: "ESP32 Smart Home Hub",
    category: "hardware",
    description: "Custom IoT hub built with ESP32 and MQTT, interfacing with React native frontend for seamless home automation.",
    tech: ["C++", "ESP32", "MQTT"],
    codeSnippet: "void setup() {\n  Serial.begin(115200);\n  setup_wifi();\n  client.setServer(mqtt_server, 1883);\n}",
    icon: <Cpu className="text-[var(--color-cyber-neon)]" size={24} />
  },
  {
    id: 2,
    title: "Cyberpunk Component Lib",
    category: "software",
    description: "A highly customizable React UI library featuring neon aesthetics, complex Framer Motion transitions.",
    tech: ["React", "TS", "Framer"],
    codeSnippet: "const GlitchText = ({ text }) => (\n  <span className='glitch-text' data-text={text}>\n    {text}\n  </span>\n);",
    icon: <Code2 className="text-[var(--color-cyber-neon)]" size={24} />
  },
  {
    id: 3,
    title: "Arduino Weather Station",
    category: "hardware",
    description: "Solar-powered environmental logger using Arduino Nano and DHT22 sensors, sending data via LoRa.",
    tech: ["Arduino", "C++", "LoRa"],
    codeSnippet: "DHT dht(DHTPIN, DHTTYPE);\nfloat h = dht.readHumidity();\nfloat t = dht.readTemperature();",
    icon: <Cpu className="text-[var(--color-cyber-neon)]" size={24} />
  },
  {
    id: 4,
    title: "Minimalist E-Commerce",
    category: "software",
    description: "Full-stack headless e-commerce store built with Next.js and Stripe, focused on unparalleled loading speeds.",
    tech: ["Next.js", "Stripe", "Prisma"],
    codeSnippet: "export async function loadCart() {\n  return db.cart.findUnique({ where });\n}",
    icon: <Code2 className="text-[var(--color-cyber-neon)]" size={24} />
  }
];

function FlipCard({ project }: { project: typeof projectsData[0] }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="relative h-[360px] cursor-pointer group" style={{ perspective: '1000px' }} onClick={() => setIsFlipped(!isFlipped)}>
      <motion.div
        className="w-full h-full relative"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Front Face */}
        <div className="absolute inset-0 border border-white/10 bg-[var(--color-cyber-card)] p-8 hover:border-[var(--color-cyber-neon-dim)] transition-colors flex flex-col shadow-lg" style={{ backfaceVisibility: 'hidden' }}>
          <div className="flex justify-between items-start mb-6">
            <div className="p-3 bg-black/50 border border-white/5 rounded-sm icon-glitch-hover transition-colors">
              {project.icon}
            </div>
            <div className="flex gap-3 text-[var(--color-cyber-text-muted)] opacity-50 group-hover:opacity-100 transition-opacity">
              <RotateCw size={20} className="hover:text-[var(--color-cyber-neon)] transition-colors" />
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
        </div>

        {/* Back Face */}
        <div className="absolute inset-0 border border-[var(--color-cyber-neon-dim)] bg-black p-8 flex flex-col shadow-[0_0_20px_var(--color-cyber-neon-dim)]" style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}>
          <div className="flex justify-between items-center mb-4 pb-4 border-b border-white/10">
            <span className="font-mono text-[var(--color-cyber-neon)] text-sm">&gt; {project.category === 'software' ? 'index.tsx' : 'main.cpp'}</span>
            <div className="flex gap-3 text-[var(--color-cyber-text-muted)] z-10" onClick={(e) => e.stopPropagation()}>
              <a href="#" className="hover:text-[var(--color-cyber-neon)] transition-colors"><Github size={18} /></a>
              <a href="#" className="hover:text-[var(--color-cyber-neon)] transition-colors"><ExternalLink size={18} /></a>
            </div>
          </div>
          <pre className="font-mono text-xs text-green-400 bg-[#0A0A0A] p-4 rounded-sm border border-white/5 flex-grow overflow-x-auto selection:bg-green-400 selection:text-black mt-2">
            <code>{project.codeSnippet}</code>
          </pre>
        </div>
      </motion.div>
    </div>
  );
}

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

      <motion.div layout className="grid md:grid-cols-2 gap-6" style={{ perspective: '1000px' }}>
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              key={project.id}
            >
               <FlipCard project={project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
