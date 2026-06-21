import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const GLITCH_CHARS = '!@#$%^&*()_+-=[]{}|;:,.<>?/~`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789░▒▓█▄▀■□▪▫';
const HACK_CHARS = '01アイウエオカキクケコサシスセソタチツテト∑∆∇⊕⊗∅∞≈≠≤≥';

function randomChar() {
  const pool = Math.random() > 0.5 ? GLITCH_CHARS : HACK_CHARS;
  return pool[Math.floor(Math.random() * pool.length)];
}

function useGlitchText(target, duration = 1200, startDelay = 0) {
  const [text, setText] = useState('');
  const [done, setDone] = useState(false);
  useEffect(() => {
    let timeout;
    timeout = setTimeout(() => {
      const start = Date.now();
      const frames = Math.floor(duration / 40);
      let frame = 0;
      const interval = setInterval(() => {
        const progress = frame / frames;
        const resolved = Math.floor(progress * target.length);
        let out = '';
        for (let i = 0; i < target.length; i++) {
          if (i < resolved) out += target[i];
          else if (i === resolved) out += randomChar();
          else out += Math.random() > 0.6 ? randomChar() : ' ';
        }
        setText(out);
        frame++;
        if (frame > frames) {
          clearInterval(interval);
          setText(target);
          setDone(true);
        }
      }, 40);
      return () => clearInterval(interval);
    }, startDelay);
    return () => clearTimeout(timeout);
  }, [target, duration, startDelay]);
  return { text, done };
}

function MatrixRain() {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const cols = Math.floor(canvas.width / 14);
    const drops = Array(cols).fill(1);
    const draw = () => {
      ctx.fillStyle = 'rgba(0,0,0,0.07)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.font = '12px monospace';
      drops.forEach((y, i) => {
        const char = HACK_CHARS[Math.floor(Math.random() * HACK_CHARS.length)];
        const brightness = Math.random();
        ctx.fillStyle = brightness > 0.9 ? '#ffffff' : brightness > 0.7 ? '#00F0FF' : '#003a40';
        ctx.fillText(char, i * 14, y * 14);
        if (y * 14 > canvas.height && Math.random() > 0.975) drops[i] = 0;
        drops[i]++;
      });
    };
    const id = setInterval(draw, 40);
    return () => clearInterval(id);
  }, []);
  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-40" />;
}

function GlitchBar({ progress }) {
  const [corruption, setCorruption] = useState(0);
  useEffect(() => {
    const id = setInterval(() => {
      setCorruption(Math.random() > 0.7 ? Math.random() * 15 : 0);
    }, 120);
    return () => clearInterval(id);
  }, []);
  return (
    <div className="relative w-full h-3 bg-gray-950 border border-white/10 overflow-hidden">
      <motion.div
        className="h-full bg-neon-blue"
        style={{ width: `${Math.min(progress + corruption, 100)}%`, boxShadow: '0 0 12px #00F0FF, 0 0 30px #00F0FF' }}
        transition={{ duration: 0.15 }}
      />
      {/* corruption glitch blocks */}
      {Array.from({ length: 3 }).map((_, i) => (
        <div
          key={i}
          className="absolute top-0 h-full bg-cyber-red opacity-60"
          style={{
            left: `${Math.random() * 100}%`,
            width: `${Math.random() * 8}%`,
            display: Math.random() > 0.6 ? 'block' : 'none',
          }}
        />
      ))}
    </div>
  );
}

const LOG_LINES = [
  { t: 0,    text: 'Initializing HACKVERSE Protocol...', color: 'text-gray-300' },
  { t: 1200, text: 'Loading Innovation Modules...', color: 'text-gray-300' },
  { t: 2400, text: 'Connecting Developers Nationwide...', color: 'text-gray-300' },
  { t: 3600, text: 'Access Granted.', color: 'text-green-400' },
];

export default function Loader({ onLoadingComplete }) {
  const [visibleLogs, setVisibleLogs] = useState([]);
  const [progress, setProgress] = useState(0);
  const [screenGlitch, setScreenGlitch] = useState(false);
  const [finalFlash, setFinalFlash] = useState(false);
  const [exiting, setExiting] = useState(false);

  const title = useGlitchText('HACKVERSE', 1000, 200);

  // Reveal log lines one by one
  useEffect(() => {
    const timers = LOG_LINES.map((line) =>
      setTimeout(() => {
        setVisibleLogs((prev) => [...prev, line]);
        setProgress(((LOG_LINES.indexOf(line) + 1) / LOG_LINES.length) * 100);
      }, line.t)
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  // Random full-screen glitch shakes
  useEffect(() => {
    const id = setInterval(() => {
      if (Math.random() > 0.6) {
        setScreenGlitch(true);
        setTimeout(() => setScreenGlitch(false), 80 + Math.random() * 120);
      }
    }, 600);
    return () => clearInterval(id);
  }, []);

  // Final sequence
  useEffect(() => {
    const t1 = setTimeout(() => setFinalFlash(true), 4200);
    const t2 = setTimeout(() => {
      setExiting(true);
      setTimeout(onLoadingComplete, 1800);
    }, 5400);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [onLoadingComplete]);

  return (
    <AnimatePresence>
      {!exiting && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: 'blur(30px)', scale: 1.04 }}
          transition={{ duration: 1.8, ease: 'easeInOut' }}
          className="fixed inset-0 z-[9999] bg-black overflow-hidden flex flex-col items-center justify-center"
          style={{
            transform: screenGlitch
              ? `translate(${(Math.random() - 0.5) * 12}px, ${(Math.random() - 0.5) * 6}px) skewX(${(Math.random() - 0.5) * 3}deg)`
              : 'none',
            filter: screenGlitch ? 'saturate(3) contrast(1.5)' : 'none',
          }}
        >
          {/* Matrix rain background */}
          <MatrixRain />

          {/* Scanlines */}
          <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(0,0,0,0.3)_2px,rgba(0,0,0,0.3)_4px)] pointer-events-none z-10" />

          {/* RGB split overlay on glitch */}
          {screenGlitch && (
            <>
              <div className="absolute inset-0 bg-red-600/10 mix-blend-screen translate-x-1 z-20 pointer-events-none" />
              <div className="absolute inset-0 bg-cyan-400/10 mix-blend-screen -translate-x-1 z-20 pointer-events-none" />
            </>
          )}

          {/* ACCESS GRANTED flash */}
          <AnimatePresence>
            {finalFlash && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0, 1, 0.8] }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, times: [0, 0.1, 0.3, 0.5, 1] }}
                className="absolute inset-0 bg-neon-blue/10 z-30 flex items-center justify-center pointer-events-none"
              >
                <div
                  className="text-4xl md:text-7xl font-orbitron font-black text-white tracking-widest"
                  style={{ textShadow: '-4px 0 #FF003C, 4px 0 #00F0FF, 0 0 40px #00F0FF' }}
                >
                  ACCESS_GRANTED
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Terminal window */}
          <div className="relative z-20 w-full max-w-3xl mx-4">
            {/* Terminal titlebar */}
            <div className="flex items-center gap-2 bg-gray-950 border border-white/10 border-b-0 px-4 py-2 rounded-t">
              <div className="w-3 h-3 rounded-full bg-cyber-red" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="ml-3 text-gray-600 text-xs font-mono">root@hackverse — bash — 80×24</span>
              <div className="ml-auto text-yellow-500 text-xs font-mono flicker">● LIVE</div>
            </div>

            {/* Terminal body */}
            <div className="border border-white/10 bg-black/90 backdrop-blur-sm p-6 rounded-b relative overflow-hidden min-h-[320px]">
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-neon-blue/60" />
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-neon-blue/60" />

              {/* HACKVERSE glitch title */}
              <div className="text-center mb-6">
                <div
                  className="text-5xl md:text-7xl font-black font-orbitron tracking-tighter inline-block"
                  style={{
                    color: '#fff',
                    textShadow: screenGlitch
                      ? '-4px 0 #FF003C, 4px 0 #00F0FF'
                      : '0 0 20px rgba(0,240,255,0.5)',
                  }}
                >
                  {title.text || 'HACKV3RS3'}
                </div>
                <div className="text-neon-blue/60 font-mono text-xs tracking-[0.5em] mt-1">
                  SYSTEM_BREACH_DETECTED
                </div>
              </div>

              {/* Log lines */}
              <div className="space-y-1 font-mono text-xs mb-6 min-h-[160px]">
                {visibleLogs.map((line, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.1 }}
                    className={`${line.color} flex gap-2`}
                  >
                    <span className="text-gray-700 shrink-0">
                      {String(i).padStart(2, '0')} |
                    </span>
                    <span>{line.text}</span>
                  </motion.div>
                ))}
                {/* blinking cursor */}
                <span className="text-neon-blue animate-pulse">█</span>
              </div>

              {/* Progress bar */}
              <div className="space-y-1">
                <div className="flex justify-between text-[10px] font-mono text-gray-600">
                  <span>BREACH_PROGRESS</span>
                  <span className="text-neon-blue">{Math.round(progress)}%</span>
                </div>
                <GlitchBar progress={progress} />
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
