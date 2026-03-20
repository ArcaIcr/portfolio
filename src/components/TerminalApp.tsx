import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon } from 'lucide-react';

type Command = {
  cmd: string;
  output: string | React.ReactNode;
};

export function TerminalApp() {
  const [history, setHistory] = useState<Command[]>([
    { cmd: 'init', output: 'System initialized. Type "help" to view available commands.' }
  ]);
  const [input, setInput] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const cmd = input.trim().toLowerCase();
    let output: string | React.ReactNode = '';

    switch (cmd) {
      case 'help':
        output = 'Available commands: whoami, skills, hardware, software, clear';
        break;
      case 'whoami':
        output = 'Software Engineer & UI/UX enthusiast bridging the gap between digital interfaces and physical hardware.';
        break;
      case 'skills':
        output = '[Frontend]: React, TypeScript, Tailwind, Framer Motion\n[Embedded]: Arduino, ESP32, MQTT';
        break;
      case 'hardware':
        output = 'I build smart home hubs, environmental loggers, and IoT solutions using ESP32 and C++.';
        break;
      case 'software':
        output = 'I design blazing-fast web applications with massive aesthetic focus.';
        break;
      case 'clear':
        setHistory([]);
        setInput('');
        return;
      default:
        output = `Command not found: ${cmd}. Type "help" for a list of commands.`;
    }

    setHistory([...history, { cmd: input, output }]);
    setInput('');
  };

  return (
    <div className="w-full max-w-3xl mx-auto rounded-md border border-[var(--color-cyber-neon-dim)] bg-black/80 font-mono text-sm shadow-[0_0_15px_rgba(0,240,255,0.1)] overflow-hidden mt-16 group z-10 relative">
      {/* Terminal Title Bar */}
      <div className="flex items-center gap-2 bg-[#121212] border-b border-[var(--color-cyber-neon-dim)] px-4 py-3 cursor-default">
        <TerminalIcon size={16} className="text-[var(--color-cyber-neon)] group-hover:animate-[icon-glitch_0.3s_infinite]" />
        <span className="text-[var(--color-cyber-text-muted)] text-xs">guest@system: ~/portfolio</span>
      </div>

      {/* Terminal Window */}
      <div 
        ref={scrollRef}
        className="h-64 p-5 overflow-y-auto text-[var(--color-cyber-text)] flex flex-col gap-3 scroll-smooth cursor-text"
        onClick={() => inputRef.current?.focus()}
      >
        {history.map((h, i) => (
          <div key={i} className="mb-2">
            <div className="flex gap-2 text-[var(--color-cyber-neon)]">
              <span>$</span>
              <span>{h.cmd}</span>
            </div>
            <div className="text-[var(--color-cyber-text-muted)] whitespace-pre-wrap pl-4 mt-1">
              {h.output}
            </div>
          </div>
        ))}
        
        {/* Active Input Line */}
        <form onSubmit={handleCommand} className="flex gap-2 text-[var(--color-cyber-neon)] mt-2 items-center">
          <span>$</span>
          <input 
            ref={inputRef}
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="bg-transparent border-none outline-none flex-grow text-[var(--color-cyber-neon)] font-mono selection:bg-[var(--color-cyber-magenta)]"
            spellCheck="false"
            autoComplete="off"
          />
        </form>
      </div>
    </div>
  );
}
