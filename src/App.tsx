import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-[var(--color-cyber-bg)] text-[var(--color-cyber-text)] font-sans selection:bg-[var(--color-cyber-neon)] selection:text-black pb-10">
      <Navigation />

      <main className="pt-32 px-6 max-w-6xl mx-auto">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  )
}

export default App
