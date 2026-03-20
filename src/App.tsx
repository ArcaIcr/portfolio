import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { useEffect } from 'react';
import { Contact } from './components/Contact';
import { Cursor } from './components/Cursor';
import { useSoundEffect } from './hooks/useSoundEffect';

function App() {
  const { playHoverSound, playClickSound } = useSoundEffect();

  useEffect(() => {
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a') || target.closest('button') || target.closest('.group')) {
        playHoverSound();
      }
    };
    
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a') || target.closest('button')) {
        playClickSound();
      }
    };

    document.body.addEventListener('mouseover', handleMouseOver);
    document.body.addEventListener('click', handleClick);

    return () => {
      document.body.removeEventListener('mouseover', handleMouseOver);
      document.body.removeEventListener('click', handleClick);
    };
  }, [playHoverSound, playClickSound]);

  return (
    <div className="min-h-screen bg-[var(--color-cyber-bg)] text-[var(--color-cyber-text)] font-sans selection:bg-[var(--color-cyber-neon)] selection:text-black pb-10">
      <Cursor />
      <Navigation />

      <main className="pt-24 md:pt-32 px-6 max-w-6xl mx-auto">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  )
}

export default App
