import { Terminal, Cpu, Layout, Code2, Wifi } from 'lucide-react';
import { motion } from 'framer-motion';

export function About() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="about" className="py-24 border-t border-white/10">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-3xl font-mono mb-6 flex items-center gap-3">
          <Terminal className="text-[var(--color-cyber-neon)]" /> ./about-me
        </h2>
        <div className="grid md:grid-cols-2 gap-12 text-[var(--color-cyber-text-muted)] leading-relaxed">
          <div>
            <p className="mb-4">
              I am a <strong className="text-[var(--color-cyber-text)]">Software Engineer</strong> with a deep passion for minimalist UI/UX design. I specialize in building responsive, blazing-fast web applications using React and modern frontend ecosystems.
            </p>
            <p>
              But my expertise doesn't stop at the browser. As a <strong className="text-[var(--color-cyber-text)]">Hardware Enthusiast</strong>, I engineer embedded systems, bridging the physical and digital worlds through IoT protocols, sensors, and microcontrollers.
            </p>
          </div>
          <div className="border-l border-[var(--color-cyber-neon-dim)] pl-6">
            <h3 className="text-[var(--color-cyber-text)] font-mono mb-4 flex items-center gap-2">
              <span className="text-[var(--color-cyber-neon)]">&gt;</span> CORE_MODULES
            </h3>
            <ul className="space-y-2 font-mono text-sm">
              <li>[x] Frontend Architecture</li>
              <li>[x] UI/UX Prototyping</li>
              <li>[x] Embedded C++ / MicroPython</li>
              <li>[x] Hardware Prototyping</li>
            </ul>
          </div>
        </div>
      </motion.div>

      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4"
      >
        {/* Skill Matrix */}
        <motion.div variants={item} className="p-6 border border-white/10 bg-[var(--color-cyber-card)] hover:border-[var(--color-cyber-neon)] transition-colors group">
          <Code2 className="mb-4 text-[var(--color-cyber-text-muted)] group-hover:text-[var(--color-cyber-neon)] transition-colors" size={28} />
          <h4 className="font-bold mb-1 text-[var(--color-cyber-text)]">Web Dev</h4>
          <p className="text-xs text-[var(--color-cyber-text-muted)]">React, TS, Vite, Tailwind</p>
        </motion.div>
        
        <motion.div variants={item} className="p-6 border border-white/10 bg-[var(--color-cyber-card)] hover:border-[var(--color-cyber-neon)] transition-colors group">
          <Layout className="mb-4 text-[var(--color-cyber-text-muted)] group-hover:text-[var(--color-cyber-neon)] transition-colors" size={28} />
          <h4 className="font-bold mb-1 text-[var(--color-cyber-text)]">UI / UX</h4>
          <p className="text-xs text-[var(--color-cyber-text-muted)]">Figma, Framer Motion</p>
        </motion.div>

        <motion.div variants={item} className="p-6 border border-white/10 bg-[var(--color-cyber-card)] hover:border-[var(--color-cyber-neon)] transition-colors group">
          <Cpu className="mb-4 text-[var(--color-cyber-text-muted)] group-hover:text-[var(--color-cyber-neon)] transition-colors" size={28} />
          <h4 className="font-bold mb-1 text-[var(--color-cyber-text)]">Embedded</h4>
          <p className="text-xs text-[var(--color-cyber-text-muted)]">Arduino, ESP32, RasPi</p>
        </motion.div>

        <motion.div variants={item} className="p-6 border border-white/10 bg-[var(--color-cyber-card)] hover:border-[var(--color-cyber-neon)] transition-colors group">
          <Wifi className="mb-4 text-[var(--color-cyber-text-muted)] group-hover:text-[var(--color-cyber-neon)] transition-colors" size={28} />
          <h4 className="font-bold mb-1 text-[var(--color-cyber-text)]">IoT Comms</h4>
          <p className="text-xs text-[var(--color-cyber-text-muted)]">MQTT, WebSockets, REST</p>
        </motion.div>
      </motion.div>
    </section>
  );
}
