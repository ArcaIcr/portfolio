import { Terminal, Mail, Github, Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';
import { motion } from 'framer-motion';

export function Contact() {
  return (
    <section id="contact" className="py-24 border-t border-white/10">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
        >
          <div className="inline-flex items-center justify-center p-4 bg-[var(--color-cyber-neon-dim)] rounded-full mb-6">
            <Terminal className="text-[var(--color-cyber-neon)]" size={32} />
          </div>
          <h2 className="text-4xl font-extrabold mb-6 tracking-tight text-[var(--color-cyber-text)]">
            Initiate Connection
          </h2>
          <p className="text-[var(--color-cyber-text-muted)] text-lg mb-10 leading-relaxed">
            Whether you have a software project, a hardware prototype, or just want to discuss the latest in tech, my inbox is always open.
          </p>
          
          <a href="mailto:hello@example.com" className="inline-flex items-center gap-2 bg-[var(--color-cyber-neon)] text-black px-8 py-4 font-bold text-lg hover:shadow-[0_0_30px_var(--color-cyber-neon-dim)] transition-shadow duration-300">
            <Mail size={20} /> Transmit Message
          </a>

          <div className="flex flex-wrap justify-center gap-4 md:gap-6 mt-16 pb-8 border-b border-white/10">
            <a href="#" className="p-3 border border-white/10 bg-[var(--color-cyber-card)] hover:border-[var(--color-cyber-neon)] hover:text-[var(--color-cyber-neon)] transition-all">
              <Github size={24} />
            </a>
            <a href="#" className="p-3 border border-white/10 bg-[var(--color-cyber-card)] hover:border-[var(--color-cyber-neon)] hover:text-[var(--color-cyber-neon)] transition-all">
              <Linkedin size={24} />
            </a>
            <a href="#" className="p-3 border border-white/10 bg-[var(--color-cyber-card)] hover:border-[var(--color-cyber-neon)] hover:text-[var(--color-cyber-neon)] transition-all">
              <Twitter size={24} />
            </a>
            <a href="#" className="p-3 border border-white/10 bg-[var(--color-cyber-card)] hover:border-[var(--color-cyber-neon)] hover:text-[var(--color-cyber-neon)] transition-all">
              <Facebook size={24} />
            </a>
            <a href="#" className="p-3 border border-white/10 bg-[var(--color-cyber-card)] hover:border-[var(--color-cyber-neon)] hover:text-[var(--color-cyber-neon)] transition-all">
              <Instagram size={24} />
            </a>
          </div>

          <div className="mt-8 font-mono text-sm text-[var(--color-cyber-text-muted)] flex items-center justify-center gap-2 block">
            <span>&copy; {new Date().getFullYear()}</span> 
            <span className="text-[var(--color-cyber-neon)]">||</span> 
            <span>Built with React, Tailwind v4 & Framer Motion.</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
