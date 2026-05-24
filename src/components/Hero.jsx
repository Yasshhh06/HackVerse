import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

// ── Glitch title cycle ──
const CYCLE = [
  { text: 'HACKVERSE', hold: 2800 },
  { text: 'H4CKV3RS3', hold: 2200 },
  { text: 'HACKVERSE', hold: 1200 },
  { text: 'H4CKV3RS3', hold: 1600 },
  { text: 'H@CKV3RS3', hold: 2400 },
  { text: 'HACKVERSE', hold: 1000 },
  { text: 'H@CKV3RS3', hold: 1800 },
  { text: 'HACKVERSE', hold: 3000 },
];

function useGlitchCycle() {
  const [display, setDisplay] = useState('HACKVERSE');
  const phase = useRef(0);
  useEffect(() => {
    let id;
    function tick() {
      const p = CYCLE[phase.current % CYCLE.length];
      setDisplay(p.text);
      phase.current++;
      id = setTimeout(tick, p.hold);
    }
    id = setTimeout(tick, CYCLE[0].hold);
    return () => clearTimeout(id);
  }, []);
  return display;
}

const Hero = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const titleText = useGlitchCycle();

  useEffect(() => {
    const targetDate = new Date('June 14, 2026 00:00:00').getTime();
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      } else clearInterval(interval);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    // ── VIDEO SECTION: transparent bg so global video shows through ──
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 pt-28 overflow-hidden bg-transparent">

      {/* Bottom fade to next solid section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-black pointer-events-none z-10" />





      {/* ── GLITCH MAIN TITLE ── */}
      <h1
        data-text={titleText}
        className="hero-glitch relative z-10 text-5xl sm:text-7xl md:text-9xl font-bold font-orbitron tracking-tighter mb-4 text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.4)] select-none px-2 w-full max-w-full overflow-hidden"
      >
        {titleText}
      </h1>

      {/* Tagline pill */}
      <div className="relative z-10 mb-10">
        <div className="border border-white/20 bg-black/40 backdrop-blur-sm px-6 py-2 rounded-full glitch-card">
          <span className="text-gray-300 font-mono text-xs md:text-sm tracking-[0.2em] uppercase">
            &lt; 12-Hour National Level Hybrid Hackathon /&gt;
          </span>
        </div>
      </div>



      {/* Countdown Timer */}
      <div className="relative z-10 grid grid-cols-4 gap-4 md:gap-8 mb-12">
        {[
          { label: 'DAYS', value: timeLeft.days },
          { label: 'HRS', value: timeLeft.hours },
          { label: 'MINS', value: timeLeft.minutes },
          { label: 'SECS', value: timeLeft.seconds }
        ].map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="w-16 h-16 md:w-28 md:h-28 border border-neon-blue/40 bg-black/60 backdrop-blur-md flex items-center justify-center rounded-sm mb-2 shadow-[0_0_20px_rgba(0,240,255,0.2)] glitch-card">
              <span className="text-2xl md:text-5xl font-mono text-neon-blue font-bold">
                {String(item.value).padStart(2, '0')}
              </span>
            </div>
            <span className="text-[10px] md:text-xs text-gray-500 tracking-widest uppercase font-mono">{item.label}</span>
          </div>
        ))}
      </div>

      {/* Info Bar — reference style */}
      <div className="relative z-10 flex flex-col items-center gap-3 mb-8 text-center">

        {/* Main title line */}
        <h2 className="text-2xl md:text-3xl font-bold font-orbitron tracking-wide">
          <span className="text-neon-blue">12 HOUR </span>
          <span className="text-white">HACKATHON PROTOCOL</span>
        </h2>

        {/* Location | Date row */}
        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 text-gray-400 font-mono text-[10px] md:text-sm tracking-widest">
          <span className="flex items-center gap-1.5">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 text-neon-blue shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
            ANNOUNCED SOON (MUMBAI)
          </span>
          <span className="hidden md:inline text-white/20">|</span>
          <span className="flex items-center gap-1.5">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 text-neon-blue shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
            14TH JUNE 2026
          </span>
        </div>
      </div>

      {/* CTA Buttons */}
      <div className="relative z-10 flex flex-wrap justify-center gap-6 mb-12">
        <Link
          to="/registration"
          className="group relative px-8 py-4 bg-black/60 border-2 border-neon-blue/80 text-neon-blue font-orbitron font-bold tracking-widest hover:bg-white hover:text-blue-600 hover:shadow-[0_0_40px_rgba(0,240,255,0.6)] transition-all duration-300 overflow-hidden"
          style={{ clipPath: "polygon(10% 0, 100% 0, 100% 70%, 90% 100%, 0 100%, 0 30%)" }}
        >
          <span className="relative z-10 flex items-center gap-3">
            REGISTER NOW <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </span>
        </Link>

        <a
          href="https://chat.whatsapp.com/C2eigV4u5Yw44WngA0Kjfi"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative px-8 py-4 bg-black/60 border-2 border-green-500/80 text-green-400 font-orbitron font-bold tracking-widest hover:bg-green-500 hover:text-black hover:shadow-[0_0_40px_rgba(74,222,128,0.6)] transition-all duration-300 overflow-hidden"
          style={{ clipPath: "polygon(10% 0, 100% 0, 100% 70%, 90% 100%, 0 100%, 0 30%)" }}
        >
          <span className="relative z-10 flex items-center gap-3">
            WHATSAPP COMMUNITY <MessageCircle size={20} className="group-hover:rotate-12 transition-transform" />
          </span>
        </a>
      </div>



      {/* Notice Strip */}
      <div className="absolute bottom-4 left-0 right-0 z-20 flex justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-black/80 border-y border-neon-blue/30 py-2 w-full max-w-4xl backdrop-blur-md flex items-center overflow-hidden relative group"
        >
          <div className="absolute inset-0 bg-neon-blue/5 group-hover:bg-neon-blue/10 transition-colors" />

          <motion.div
            animate={{ x: ["0%", "-100%"] }}
            transition={{
              repeat: Infinity,
              duration: 45,
              ease: "linear"
            }}
            className="whitespace-nowrap flex items-center gap-12 relative z-10"
          >
            <p className="text-gray-300 font-mono text-[9px] md:text-xs tracking-[0.2em] uppercase px-4 flex items-center gap-2">
              <span className="text-neon-blue"> [ NOTICE ] </span>
              Registration ends on <span className="text-white font-bold">10 JUN 12:00 PM</span>
            </p>
            <p className="text-gray-300 font-mono text-[9px] md:text-xs tracking-[0.2em] uppercase px-4 flex items-center gap-2">
              <span className="text-neon-purple"> [ BONUS ] </span>
              Each participant receives <span className="text-neon-blue font-bold">$50 worth of AI credits</span> after registration!
            </p>
            <p className="text-gray-300 font-mono text-[9px] md:text-xs tracking-[0.2em] uppercase px-4 flex items-center gap-2">
              <span className="text-neon-blue"> [ NOTICE ] </span>
              Registration ends on <span className="text-white font-bold">10 JUN 12:00 PM</span>
            </p>
            <p className="text-gray-300 font-mono text-[9px] md:text-xs tracking-[0.2em] uppercase px-4 flex items-center gap-2">
              <span className="text-neon-purple"> [ BONUS ] </span>
              Each participant receives <span className="text-neon-blue font-bold">$50 worth of AI credits</span> after registration!
            </p>
          </motion.div>

          {/* Scanning line for notice */}
          <div className="absolute bottom-0 left-0 w-full h-[1px] bg-neon-blue/50 animate-[scan_2s_linear_infinite]" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
