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
          <p className="text-[var(--color-cyber-text-muted)] max-w-xl mx-auto mb-10">
            My inbox is always open. Whether you have a question, a project proposal, 
            or just want to talk tech—I'll try my best to get back to you!
          </p>

          <form action="https://api.web3forms.com/submit" method="POST" className="max-w-md mx-auto flex flex-col gap-4 text-left">
            <input type="hidden" name="access_key" value={import.meta.env.VITE_WEB3FORMS_ACCESS_KEY} />
            <input type="hidden" name="subject" value="New Portfolio Data Transmission" />
            <input type="hidden" name="from_name" value="Cyberpunk Portfolio" />

            <input 
              type="text" 
              name="name" 
              placeholder="YOUR IDENTIFICATION (NAME)" 
              required
              className="bg-black/50 border border-white/20 p-4 font-mono text-sm text-[var(--color-cyber-text)] focus:border-[var(--color-cyber-neon)] focus:outline-none transition-colors"
            />
            <input 
              type="email" 
              name="email" 
              placeholder="RETURN NODE (EMAIL)" 
              required
              className="bg-black/50 border border-white/20 p-4 font-mono text-sm text-[var(--color-cyber-text)] focus:border-[var(--color-cyber-neon)] focus:outline-none transition-colors"
            />
            <textarea 
              name="message" 
              placeholder="ENTER PAYLOAD (MESSAGE)" 
              rows={4}
              required
              className="bg-black/50 border border-white/20 p-4 font-mono text-sm text-[var(--color-cyber-text)] focus:border-[var(--color-cyber-neon)] focus:outline-none transition-colors resize-none"
            />
            <button 
              type="submit" 
              className="inline-flex justify-center items-center gap-2 bg-[var(--color-cyber-neon)] text-black px-8 py-4 font-bold font-mono transition-colors shadow-[0_0_15px_rgba(0,240,255,0.4)] mt-2 hover:bg-cyan-300"
            >
              <Mail size={20} /> TRANSMIT MESSAGE
            </button>
          </form>

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
