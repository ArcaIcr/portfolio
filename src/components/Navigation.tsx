import { Terminal } from 'lucide-react';
import { motion } from 'framer-motion';

export function Navigation() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 w-full border-b border-white/10 bg-black/60 backdrop-blur-md z-50"
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="font-mono font-bold text-xl tracking-tighter flex items-center gap-2 cursor-pointer">
          <Terminal size={20} className="text-[var(--color-cyber-neon)]" />
          <span>SYSTEM.INIT()</span>
        </div>
        <div className="hidden md:flex gap-8 text-sm font-mono text-[var(--color-cyber-text-muted)]">
          <a href="#about" className="hover:text-[var(--color-cyber-neon)] transition-colors">./about</a>
          <a href="#projects" className="hover:text-[var(--color-cyber-neon)] transition-colors">./projects</a>
          <a href="#contact" className="hover:text-[var(--color-cyber-neon)] transition-colors">./contact</a>
        </div>
      </div>
    </motion.nav>
  );
}
