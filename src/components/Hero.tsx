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
        className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight"
      >
        Bridging the gap between <br className="hidden md:block"/>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-500 glitch-text" data-text="Software & Hardware.">
          Software & Hardware.
        </span>
      </motion.h1>

      <motion.p 
        className="text-lg md:text-xl text-[var(--color-cyber-text-muted)] max-w-2xl mb-10 leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        I'm <strong className="text-[var(--color-cyber-text)] font-semibold">Morrix Ken Ohata</strong>, a Computer Engineering Student & Semi Full-Stack Software Engineer. Building sleek digital interfaces and engineering connected embedded devices.
      </motion.p>

      <motion.div 
        className="flex flex-col sm:flex-row gap-6 flex-wrap"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <a href="#projects" className="px-8 py-4 bg-[var(--color-cyber-neon)] text-black font-bold font-mono glitch-hover transition-colors inline-flex justify-center items-center shadow-[0_0_15px_rgba(0,240,255,0.4)]">
          [VIEW PROJECTS]
        </a>
        <a href="#contact" className="px-8 py-4 border border-[var(--color-cyber-neon)] text-[var(--color-cyber-neon)] font-bold font-mono glitch-hover hover:bg-[var(--color-cyber-neon-dim)] transition-colors inline-flex justify-center items-center">
          CONTACT ME
        </a>
        <a href="/ArcaIcr_Resume.pdf" target="_blank" rel="noreferrer" className="px-8 py-4 border border-white/20 text-white font-bold font-mono hover:border-white hover:text-white transition-colors inline-flex justify-center items-center gap-2 cursor-pointer group">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-70 group-hover:opacity-100 transition-opacity"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
          RESUME.PDF
        </a>
      </motion.div>
    </section>
  );
}
