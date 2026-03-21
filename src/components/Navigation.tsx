import { useState } from 'react';
import { Terminal, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 w-full border-b border-white/10 bg-black/80 backdrop-blur-md z-50"
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="font-mono font-bold text-xl tracking-tighter flex items-center gap-2 cursor-pointer icon-glitch-hover transition-all w-fit">
          <Terminal size={20} className="text-[var(--color-cyber-neon)]" />
          <span>SYSTEM.INIT()</span>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-sm font-mono items-center text-[var(--color-cyber-text-muted)]">
          <div className="flex items-center gap-2 border border-white/10 px-3 py-1 bg-black/50" title="System Status: Online">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.8)]"></span>
            <span className="text-xs text-green-500">SYS_ONLINE</span>
          </div>
          <a href="#about" className="hover:text-[var(--color-cyber-neon)] transition-colors">./about</a>
          <a href="#projects" className="hover:text-[var(--color-cyber-neon)] transition-colors">./projects</a>
          <a href="#contact" className="hover:text-[var(--color-cyber-neon)] transition-colors">./contact</a>
          <a href="/ArcaIcr_Resume.pdf" target="_blank" rel="noreferrer" className="text-[var(--color-cyber-neon)] border border-[var(--color-cyber-neon)] px-3 py-1 hover:bg-[var(--color-cyber-neon-dim)] transition-colors inline-flex items-center">
            RESUME
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button 
          className="md:hidden text-[var(--color-cyber-text-muted)] hover:text-[var(--color-cyber-neon)] transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-white/10 bg-black/95 overflow-hidden font-mono text-sm"
          >
            <div className="flex flex-col px-6 py-4 gap-4 text-[var(--color-cyber-text-muted)]">
              <div className="flex items-center gap-2 border border-white/10 px-3 py-2 bg-black/50 w-fit mb-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.8)]"></span>
                <span className="text-xs text-green-500">SYS_ONLINE</span>
              </div>
              <a href="#about" onClick={() => setIsOpen(false)} className="hover:text-[var(--color-cyber-neon)] p-2 -mx-2 transition-colors">./about</a>
              <a href="#projects" onClick={() => setIsOpen(false)} className="hover:text-[var(--color-cyber-neon)] p-2 -mx-2 transition-colors">./projects</a>
              <a href="#contact" onClick={() => setIsOpen(false)} className="hover:text-[var(--color-cyber-neon)] p-2 -mx-2 transition-colors">./contact</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
