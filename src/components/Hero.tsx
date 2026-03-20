import { Terminal } from 'lucide-react';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export function Hero() {
  const [text, setText] = useState('');
  const fullText = "System Online...";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-[70vh] flex flex-col justify-center">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="inline-block p-1 px-3 border border-[var(--color-cyber-neon-dim)] bg-[var(--color-cyber-neon-dim)] text-[var(--color-cyber-neon)] uppercase font-mono text-xs w-fit mb-6 shadow-[0_0_10px_var(--color-cyber-neon-dim)]"
      >
        <span>{text}</span>
        <span className="animate-pulse">_</span>
      </motion.div>
      
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight"
      >
        Bridging the gap between <br className="hidden md:block"/>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-500">
          Software & Hardware.
        </span>
      </motion.h1>

      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="text-xl text-[var(--color-cyber-text-muted)] max-w-2xl mb-10 leading-relaxed font-light"
      >
        Semi Full-Stack Software Engineer & Hardware Specialist. Building sleek digital interfaces and engineering connected embedded devices.
      </motion.p>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="flex gap-4"
      >
        <a href="#projects" className="flex items-center gap-2 bg-[var(--color-cyber-neon)] text-black px-6 py-3 font-semibold hover:shadow-[0_0_20px_var(--color-cyber-neon-dim)] transition-shadow">
          <Terminal size={18} /> View Projects
        </a>
        <a href="#contact" className="flex items-center gap-2 border border-white/20 px-6 py-3 font-semibold hover:border-[var(--color-cyber-neon)] hover:text-[var(--color-cyber-neon)] transition-colors">
          Contact Me
        </a>
      </motion.div>
    </section>
  );
}
