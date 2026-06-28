import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Trophy, Medal, Award, Flame, Search, Sparkles, 
  ArrowLeft, CheckCircle2, ChevronRight, Zap, ExternalLink, HelpCircle, 
  Volume2, VolumeX, ShieldAlert, Plane, Terminal, Send
} from "lucide-react";

// GenZ quotes array
const GENZ_QUOTES = [
  "No cap, this codebase was cooking on high heat! 🍳🔥",
  "They really ctrl+alt-defeated the competition. 💅",
  "Absolute main character energy. 👑",
  "The compiler was literally crying and throwing up. 🥵",
  "Clean code? Yes. Pure rizz? Absolutely. 😏",
  "They built different. Period. 💯",
  "The bugs saw this team and decided to commit sudoku. 💀",
  "This project resides rent-free in the judges' heads. 🧠⚡",
  "Vibe check: PASSED. Server: UP. Rizz: CRACKED. 🚀",
  "Not an API wrapper, just a whole wrapper-class of their own! 💎",
  "Serving raw tech excellence, no side dish. 🍽️",
  "Honestly, the commits were absolute fire. 🔥✍️",
  "They didn't just understand the assignment, they rewrote the grading rubric. 📝⚡",
  "The CSS was clean, but the backend was pure savagery. 🦁🔥"
];

// Qualified teams for Hyderabad Microsoft Flagship Event
const QUALIFIED_TEAMS = [
  "MergeInfinity",
  "Hacknomics",
  "BrainByte",
  "Tequila Techies",
  "STRIFF",
  "Team HACKERS",
  "Straw Hats",
  "TST",
  "GODSEC",
  "FourByteForce",
  "Techeys",
  "Unfazed",
  "Matrix",
  "Binary Bros"
];

// Custom lightweight confetti logic to avoid installing packages
const ConfettiCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (canvas) {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
      }
    };
    window.addEventListener("resize", handleResize);

    const colors = ["#00F0FF", "#D946EF", "#FF003C", "#FFD700", "#4ADE80"];
    const confettiCount = 120;
    const particles = [];

    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * -height - 20;
        this.rotation = Math.random() * 360;
        this.rotationSpeed = Math.random() * 4 - 2;
        this.size = Math.random() * 8 + 6;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 4 + 3;
        this.opacity = 1;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.rotation += this.rotationSpeed;
        if (this.y > height) {
          this.y = -20;
          this.x = Math.random() * width;
          this.speedY = Math.random() * 4 + 3;
        }
      }

      draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate((this.rotation * Math.PI) / 180);
        ctx.fillStyle = this.color;
        ctx.globalAlpha = this.opacity;
        ctx.fillRect(-this.size / 2, -this.size / 2, this.size, this.size);
        ctx.restore();
      }
    }

    for (let i = 0; i < confettiCount; i++) {
      particles.push(new Particle());
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      particles.forEach((p) => {
        p.update();
        p.draw();
      });
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    // Slow down & fade out after 6 seconds to not hurt performance
    const fadeTimeout = setTimeout(() => {
      let interval = setInterval(() => {
        particles.forEach((p) => {
          p.opacity -= 0.05;
        });
        if (particles[0].opacity <= 0) {
          clearInterval(interval);
          cancelAnimationFrame(animationFrameId);
        }
      }, 100);
    }, 6000);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
      clearTimeout(fadeTimeout);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-[10] w-full h-full" />;
};

const Winners = () => {
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [rizzMeter, setRizzMeter] = useState(88);
  const [activeTab, setActiveTab] = useState("all");

  const changeQuote = () => {
    let nextIndex = Math.floor(Math.random() * GENZ_QUOTES.length);
    while (nextIndex === quoteIndex) {
      nextIndex = Math.floor(Math.random() * GENZ_QUOTES.length);
    }
    setQuoteIndex(nextIndex);
    // Randomize vibe meter slightly
    setRizzMeter(Math.floor(Math.random() * 20) + 81);
  };

  useEffect(() => {
    // Switch quote every 8 seconds automatically
    const interval = setInterval(() => {
      changeQuote();
    }, 8000);
    return () => clearInterval(interval);
  }, [quoteIndex]);

  const filteredTeams = QUALIFIED_TEAMS.filter((team) =>
    team.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="relative min-h-screen text-white font-inter bg-[#050505] pt-24 pb-16 px-4 md:px-8 overflow-hidden">
      {/* Confetti Trigger */}
      <ConfettiCanvas />

      {/* Cyber Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(217,70,239,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(0,240,255,0.015)_1px,transparent_1px)] bg-[size:45px_45px] pointer-events-none" />
      
      {/* Light glow effects */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-neon-blue/5 rounded-full filter blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[400px] h-[400px] bg-neon-purple/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-20">
        {/* Back Link */}
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-xs font-orbitron tracking-wider text-gray-400 hover:text-[#00F0FF] transition-colors group mb-8"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
          BACK_TO_HOME_BASE
        </Link>

        {/* Header Hero Section */}
        <div className="text-center mb-16 relative">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-yellow-500/20 bg-yellow-500/5 text-yellow-500 text-xs font-orbitron tracking-widest mb-4">
            <Trophy size={14} className="animate-bounce" />
            ELITE PROTOCOL FINALISED
          </div>
          
          <h1 
            data-text="HACKVERSE CHAMPIONS"
            className="glitch-text text-4xl md:text-7xl font-extrabold font-orbitron tracking-tighter mb-4 text-glow"
          >
            HACKVERSE <span className="text-[#00F0FF]">CHAMPIONS</span>
          </h1>
          <p className="text-gray-400 font-mono text-xs md:text-sm max-w-2xl mx-auto leading-relaxed">
            The compilation is finished. The builds are verified. 
            Behold the top developers who absolutely cooked, served, and set the standard for HackVerse 2026.
          </p>
        </div>

        {/* Gen Z Vibe Box */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto mb-16 bg-black/60 backdrop-blur-md border border-white/10 p-6 rounded-2xl relative overflow-hidden glitch-card"
        >
          <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-[#00F0FF] to-neon-purple" />
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div className="space-y-2">
              <span className="text-[10px] font-mono tracking-widest text-[#00F0FF] block">
                ⚡ CURRENT VIBE CHECK // REAL TALK
              </span>
              <AnimatePresence mode="wait">
                <motion.p 
                  key={quoteIndex}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ duration: 0.3 }}
                  className="text-lg md:text-xl font-orbitron font-semibold text-white italic"
                >
                  "{GENZ_QUOTES[quoteIndex]}"
                </motion.p>
              </AnimatePresence>
            </div>

            <div className="shrink-0 flex items-center gap-4 bg-white/5 p-3 rounded-xl border border-white/5">
              <div className="text-right">
                <span className="text-[9px] font-mono text-gray-400 block">RIZZ RATING</span>
                <span className="text-lg font-orbitron font-bold text-neon-purple">{rizzMeter}% CRACKED</span>
              </div>
              <button 
                onClick={changeQuote}
                className="bg-gradient-to-r from-[#00F0FF] to-neon-purple hover:from-neon-purple hover:to-[#00F0FF] text-black font-bold p-3 rounded-lg text-xs font-orbitron tracking-wider transition-all duration-300 shadow-[0_0_15px_rgba(0,240,255,0.3)] hover:scale-105 cursor-pointer"
              >
                VIBE GENERATOR 🔄
              </button>
            </div>
          </div>
        </motion.div>

        {/* Podium Layout */}
        <h2 className="text-center font-orbitron text-2xl md:text-3xl font-bold mb-10 text-white flex items-center justify-center gap-3">
          <Sparkles className="text-yellow-500 animate-spin" size={24} />
          THE PODIUM OF HONOR
          <Sparkles className="text-yellow-500 animate-spin" size={24} />
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 items-end gap-8 mb-20 max-w-5xl mx-auto">
          
          {/* 2nd Place: Team Arise */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="order-2 lg:order-1 flex flex-col items-center"
          >
            {/* Crown/Avatar Zone */}
            <div className="relative mb-4 flex flex-col items-center">
              <Medal className="w-14 h-14 text-gray-300 drop-shadow-[0_0_15px_rgba(200,200,200,0.5)]" />
              <div className="absolute -top-3 right-0 bg-gray-600 text-black text-[9px] font-extrabold font-orbitron px-2 py-0.5 rounded-full uppercase">
                🥈 2nd
              </div>
            </div>
            
            {/* Podium Box */}
            <div className="w-full bg-gradient-to-t from-gray-950 to-gray-900/60 border border-gray-500/30 rounded-2xl p-6 text-center shadow-[0_0_30px_rgba(156,163,175,0.05)] hover:border-gray-400 transition-all duration-300 group hover:scale-[1.02]">
              <div className="mb-4">
                <span className="text-[10px] text-gray-400 font-mono tracking-widest uppercase">1ST RUNNER-UP</span>
                <h3 className="text-2xl font-bold font-orbitron text-gray-100 group-hover:text-white mt-1">
                  Team Arise
                </h3>
              </div>

              <div className="space-y-3 py-3 border-y border-white/5 font-mono text-xs text-gray-300">
                <div className="flex justify-between">
                  <span className="text-gray-500">LEADER:</span>
                  <span className="text-white font-semibold font-orbitron">Aadesh Dilip Singh</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">BOUNTY:</span>
                  <span className="text-green-400 font-bold font-orbitron">₹25,000</span>
                </div>
              </div>

              <p className="text-[11px] text-gray-400 italic mt-4 font-mono">
                "Pure structural engineering. Flawless dev workflow."
              </p>
            </div>
          </motion.div>

          {/* 1st Place: Angry Bird */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="order-1 lg:order-2 flex flex-col items-center lg:mb-6"
          >
            {/* Trophy Zone */}
            <div className="relative mb-5 flex flex-col items-center">
              <div className="absolute -top-6 animate-bounce text-xl">
                👑
              </div>
              <Trophy className="w-20 h-20 text-[#FFD700] drop-shadow-[0_0_25px_rgba(255,215,0,0.6)] animate-pulse" />
              <div className="absolute -bottom-1 bg-yellow-500 text-black text-[10px] font-extrabold font-orbitron px-3 py-0.5 rounded-full uppercase shadow-lg">
                🥇 CHAMP
              </div>
            </div>

            {/* Podium Box */}
            <div className="w-full bg-gradient-to-t from-yellow-950/40 to-yellow-900/10 border-2 border-yellow-500/50 rounded-3xl p-8 text-center shadow-[0_0_40px_rgba(255,215,0,0.15)] hover:border-yellow-400 transition-all duration-300 group hover:scale-[1.04] relative overflow-hidden">
              {/* Corner Glow Ribbon */}
              <div className="absolute -top-12 -right-12 w-24 h-24 bg-yellow-500/10 rotate-45 pointer-events-none" />
              
              <div className="mb-4">
                <span className="text-xs text-yellow-500 font-mono tracking-widest uppercase font-bold">// GRAND CHAMPION</span>
                <h3 className="text-3xl font-black font-orbitron text-yellow-400 group-hover:text-yellow-300 mt-1 drop-shadow-sm">
                  Angry Bird
                </h3>
              </div>

              <div className="space-y-3 py-4 border-y border-yellow-500/20 font-mono text-xs text-gray-200">
                <div className="flex justify-between">
                  <span className="text-yellow-500/70">LEADER:</span>
                  <span className="text-white font-bold font-orbitron">Priyanshi Vadodariya</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-yellow-500/70">BOUNTY:</span>
                  <span className="text-yellow-400 font-black text-sm font-orbitron">₹40,000</span>
                </div>
              </div>

              <p className="text-xs text-yellow-300/80 italic mt-4 font-mono">
                "Absolute system dominance. The judges stood up and clapped."
              </p>
            </div>
          </motion.div>

          {/* 3rd Place: The Iterators */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="order-3 flex flex-col items-center"
          >
            {/* Crown/Avatar Zone */}
            <div className="relative mb-4 flex flex-col items-center">
              <Award className="w-14 h-14 text-[#CD7F32] drop-shadow-[0_0_15px_rgba(205,127,50,0.5)]" />
              <div className="absolute -top-3 right-0 bg-[#CD7F32] text-black text-[9px] font-extrabold font-orbitron px-2 py-0.5 rounded-full uppercase">
                🥉 3rd
              </div>
            </div>

            {/* Podium Box */}
            <div className="w-full bg-gradient-to-t from-amber-950/30 to-amber-900/10 border border-amber-800/30 rounded-2xl p-6 text-center shadow-[0_0_30px_rgba(205,127,50,0.05)] hover:border-amber-700 transition-all duration-300 group hover:scale-[1.02]">
              <div className="mb-4">
                <span className="text-[10px] text-amber-500 font-mono tracking-widest uppercase">2ND RUNNER-UP</span>
                <h3 className="text-2xl font-bold font-orbitron text-amber-300 group-hover:text-amber-200 mt-1">
                  The Iterators
                </h3>
              </div>

              <div className="space-y-3 py-3 border-y border-white/5 font-mono text-xs text-gray-300">
                <div className="flex justify-between">
                  <span className="text-gray-500">LEADER:</span>
                  <span className="text-white font-semibold font-orbitron">Rayyan Ansari</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">BOUNTY:</span>
                  <span className="text-green-400 font-bold font-orbitron">₹10,000</span>
                </div>
              </div>

              <p className="text-[11px] text-gray-400 italic mt-4 font-mono">
                "Iterating at terminal velocity. Pure engineering optimization."
              </p>
            </div>
          </motion.div>

        </div>

        {/* Category Conversion Explainer Banner */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-16 bg-[#00F0FF]/5 border border-[#00F0FF]/20 rounded-2xl p-6 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-36 h-36 bg-[radial-gradient(circle,rgba(0,240,255,0.1),transparent_70%)] pointer-events-none" />
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="p-3 bg-[#00F0FF]/10 rounded-full border border-[#00F0FF]/20 text-[#00F0FF] shrink-0">
              <Zap size={24} className="animate-pulse" />
            </div>
            <div>
              <h4 className="text-sm font-orbitron font-bold text-white mb-1">
                📢 BOUNTY PROTOCOL AMENDMENT
              </h4>
              <p className="text-xs text-gray-300 font-mono leading-relaxed">
                Since no team qualified separately for the <span className="text-neon-purple font-semibold">Best Girls Team</span> and <span className="text-[#00F0FF] font-semibold">Best Boys Team</span> categories, we decided to convert those awards into <span className="text-yellow-500 font-semibold">two additional Runner-Up prizes</span>. This ensures maximum rewards are distributed back to outstanding build achievements!
              </p>
            </div>
          </div>
        </motion.div>

        {/* Runner-Ups and Special Mention Grid */}
        <h2 className="text-center font-orbitron text-xl md:text-2xl font-bold mb-8 text-white">
          ⭐ ADDITIONAL DISTINCTIONS
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-24">
          {/* 3rd Runner-Up: TST */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-neon-purple transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex justify-between items-center mb-3">
                <span className="text-[10px] font-mono text-neon-purple tracking-widest uppercase">🏅 3RD RUNNER-UP</span>
                <span className="bg-neon-purple/10 text-neon-purple text-[10px] font-bold px-2 py-0.5 rounded font-orbitron">CONVERTED CATEGORY</span>
              </div>
              <h4 className="text-lg font-bold font-orbitron text-white mb-2">TST</h4>
              <div className="space-y-1.5 text-xs font-mono text-gray-300 mb-4">
                <p><span className="text-gray-500">Leader:</span> Kandarp Choudhary</p>
                <p><span className="text-gray-500">Prize:</span> <span className="text-green-400 font-bold font-orbitron">₹10,000</span></p>
              </div>
            </div>
            <p className="text-[11px] text-gray-400 italic font-mono pt-3 border-t border-white/5">
              "Masterful orchestration. High aesthetic values."
            </p>
          </motion.div>

          {/* 4th Runner-Up: Impic */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-neon-purple transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex justify-between items-center mb-3">
                <span className="text-[10px] font-mono text-neon-purple tracking-widest uppercase">🏅 4TH RUNNER-UP</span>
                <span className="bg-neon-purple/10 text-neon-purple text-[10px] font-bold px-2 py-0.5 rounded font-orbitron">CONVERTED CATEGORY</span>
              </div>
              <h4 className="text-lg font-bold font-orbitron text-white mb-2">Impic</h4>
              <div className="space-y-1.5 text-xs font-mono text-gray-300 mb-4">
                <p><span className="text-gray-500">Leader:</span> Zaid Rakhange</p>
                <p><span className="text-gray-500">Prize:</span> <span className="text-green-400 font-bold font-orbitron">₹10,000</span></p>
              </div>
            </div>
            <p className="text-[11px] text-gray-400 italic font-mono pt-3 border-t border-white/5">
              "An extremely resilient solution for critical workflows."
            </p>
          </motion.div>

          {/* Special Mention: ARIA */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-green-400 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex justify-between items-center mb-3">
                <span className="text-[10px] font-mono text-green-400 tracking-widest uppercase">⭐ SPECIAL MENTION</span>
                <span className="bg-green-400/10 text-green-400 text-[10px] font-bold px-2 py-0.5 rounded font-orbitron">VALOR AWARD</span>
              </div>
              <h4 className="text-lg font-bold font-orbitron text-white mb-2">ARIA</h4>
              <div className="space-y-1.5 text-xs font-mono text-gray-300 mb-4">
                <p><span className="text-gray-500">Leader:</span> Nabil Salim Thange</p>
                <p><span className="text-gray-500">Prize:</span> <span className="text-green-400 font-bold font-orbitron">₹5,000</span></p>
              </div>
            </div>
            <p className="text-[11px] text-gray-400 italic font-mono pt-3 border-t border-white/5">
              "Honorable presentation. Outstanding persistence in debugging."
            </p>
          </motion.div>
        </div>

        {/* Microsoft Flagship Event Qualifiers */}
        <div className="bg-gradient-to-b from-[#0e0c1b] to-[#050505] border border-white/10 rounded-3xl p-8 md:p-12 max-w-5xl mx-auto relative overflow-hidden">
          {/* Tech accents */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-[#00F0FF]/5 rounded-full filter blur-[60px]" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-neon-purple/5 rounded-full filter blur-[60px]" />
          
          <div className="relative z-10">
            {/* Section Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10 pb-6 border-b border-white/10">
              <div>
                <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded bg-blue-500/10 border border-blue-500/30 text-blue-400 text-[10px] font-mono font-bold tracking-widest mb-3 uppercase">
                  ✈️ MISSION HYDERABAD ROADSHOW
                </div>
                <h3 className="text-2xl md:text-3xl font-extrabold font-orbitron">
                  QUALIFIED FOR MICROSOFT EVENT
                </h3>
                <p className="text-xs text-gray-400 font-mono mt-1">
                  The following teams are shortlisted for the flagship event in Hyderabad. Congratulations! 🚀
                </p>
              </div>

              {/* Search Bar */}
              <div className="relative w-full md:w-72 shrink-0">
                <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Filter teams..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-black/60 border border-white/10 rounded-full py-2 pl-9 pr-4 text-xs font-mono text-white placeholder-gray-500 focus:outline-none focus:border-[#00F0FF] transition-colors"
                />
              </div>
            </div>

            {/* Grid of Qualified Teams */}
            {filteredTeams.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {filteredTeams.map((team, idx) => (
                  <motion.div
                    key={team}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.03 }}
                    className="flex items-center justify-between bg-black/40 border border-white/5 hover:border-[#00F0FF]/30 p-4 rounded-xl transition-all duration-300 group hover:bg-[#00F0FF]/5 hover:shadow-[0_0_15px_rgba(0,240,255,0.05)]"
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded-full bg-[#00F0FF]/10 border border-[#00F0FF]/20 flex items-center justify-center text-[10px] font-bold text-[#00F0FF] font-orbitron">
                        {idx + 1}
                      </span>
                      <span className="text-sm font-semibold font-orbitron tracking-wide text-gray-200 group-hover:text-white">
                        {team}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5 opacity-40 group-hover:opacity-100 transition-opacity">
                      <span className="text-[9px] font-mono text-[#00F0FF] font-bold tracking-widest">
                        BOARDING
                      </span>
                      <CheckCircle2 size={12} className="text-green-400 shrink-0" />
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 border border-dashed border-white/10 rounded-xl">
                <p className="text-sm text-gray-500 font-mono">
                  No matching teams found. The database returns null. 🔍
                </p>
              </div>
            )}
            
            {/* Travel Footer note */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 p-4 bg-white/5 rounded-xl border border-white/5">
              <div className="flex items-center gap-3">
                <span className="text-xl">🎒</span>
                <div>
                  <span className="text-[10px] font-mono text-gray-400 block">DESTINATION PROTOCOL</span>
                  <span className="text-xs font-bold text-white font-mono">Microsoft Hyderabad Office, India</span>
                </div>
              </div>
              <div className="text-right">
                <span className="text-[10px] font-mono text-gray-400 block">DEPARTURE STATUS</span>
                <span className="text-xs font-bold text-[#00F0FF] font-mono tracking-widest uppercase">SHORTLISTED // COMMITTED</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Winners;
