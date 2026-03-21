import { Terminal, Cpu, Layout, Code2, Wifi } from 'lucide-react';
import { motion } from 'framer-motion';
import { TerminalApp } from './TerminalApp';

export function About() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="about" className="py-24 border-t border-white/10">
      <motion.div 
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        <h2 className="text-3xl font-mono mb-6 flex items-center gap-3 w-fit icon-glitch-hover">
          <Terminal className="text-[var(--color-cyber-neon)]" /> <span className="glitch-text" data-text="./about-me">./about-me</span>
        </h2>
        
        <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
          <div className="flex-1 text-lg md:text-xl text-[var(--color-cyber-text-muted)] max-w-2xl leading-relaxed flex flex-col gap-4">
            <motion.p variants={item}>
              Hi, I'm <strong className="text-[var(--color-cyber-neon)]">Morrix Ken Ohata</strong>, a <strong className="text-[var(--color-cyber-text)]">Computer Engineering Student</strong> bridging the gap between digital interfaces and physical hardware. 
              I specialize in creating seamless web applications and engineering connected embedded devices.
            </motion.p>
            <motion.p variants={item} className="text-base text-[var(--color-cyber-text)]">
              I am a <strong>Software Engineer</strong> with a deep passion for minimalist UI/UX design. I specialize in building responsive, blazing-fast web applications using React and modern frontend ecosystems.
            </motion.p>
            <motion.p variants={item} className="text-base">
              But my expertise doesn't stop at the browser. As a <strong className="text-[var(--color-cyber-text)]">Hardware Enthusiast</strong>, I engineer embedded systems, bridging the physical and digital worlds through IoT protocols, sensors, and microcontrollers.
            </motion.p>
          </div>
          
          <motion.div
             className="relative w-48 h-48 md:w-64 md:h-64 flex-shrink-0 group"
             variants={item}
          >
            {/* Cyberpunk Offset Border */}
            <div className="absolute inset-0 border-2 border-[var(--color-cyber-neon)] translate-x-3 translate-y-3 z-0 transition-transform duration-500 group-hover:translate-x-4 group-hover:translate-y-4" />
            
            {/* Profile Image (Defaults to GitHub Avatar) */}
            <img 
              src="https://github.com/ArcaIcr.png" 
              alt="ArcaIcr Profile" 
              className="absolute inset-0 w-full h-full object-cover z-10 filter grayscale group-hover:grayscale-0 transition-all duration-500 shadow-[0_0_15px_rgba(0,240,255,0.2)]"
            />
          </motion.div>
        </div>

        <motion.div 
          variants={container}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          <motion.div variants={item} className="p-6 border border-white/5 bg-white/5 hover:border-[var(--color-cyber-neon)] transition-colors group">
            <Layout className="text-[var(--color-cyber-neon)] mb-4 group-hover:animate-[icon-glitch_0.3s_infinite]" size={32} />
            <h3 className="font-bold mb-2">Web Dev</h3>
            <p className="text-xs text-[var(--color-cyber-text-muted)]">React, TS, Vite, Tailwind</p>
          </motion.div>
          
          <motion.div variants={item} className="p-6 border border-white/5 bg-white/5 hover:border-[var(--color-cyber-neon)] transition-colors group">
            <Code2 className="text-[var(--color-cyber-neon)] mb-4 group-hover:animate-[icon-glitch_0.3s_infinite]" size={32} />
            <h3 className="font-bold mb-2">UI / UX</h3>
            <p className="text-xs text-[var(--color-cyber-text-muted)]">Framer Motion, CSS, Figma</p>
          </motion.div>
          
          <motion.div variants={item} className="p-6 border border-white/5 bg-white/5 hover:border-[var(--color-cyber-neon)] transition-colors group">
            <Cpu className="text-[var(--color-cyber-neon)] mb-4 group-hover:animate-[icon-glitch_0.3s_infinite]" size={32} />
            <h3 className="font-bold mb-2">Embedded</h3>
            <p className="text-xs text-[var(--color-cyber-text-muted)]">Arduino, ESP32, RasPi</p>
          </motion.div>
          
          <motion.div variants={item} className="p-6 border border-white/5 bg-white/5 hover:border-[var(--color-cyber-neon)] transition-colors group">
            <Wifi className="text-[var(--color-cyber-neon)] mb-4 group-hover:animate-[icon-glitch_0.3s_infinite]" size={32} />
            <h3 className="font-bold mb-2">IoT Comms</h3>
            <p className="text-xs text-[var(--color-cyber-text-muted)]">MQTT, WebSockets, REST</p>
          </motion.div>
        </motion.div>

        <TerminalApp />
      </motion.div>
    </section>
  );
}
