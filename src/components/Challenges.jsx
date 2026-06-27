import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Lock, Unlock, Sparkles, TrendingUp, DollarSign, Zap, Check, Users, Layers, Star, Award, FileText } from "lucide-react";

const Challenges = () => {
  const [isDecrypted, setIsDecrypted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const criteria = [
    {
      icon: <Zap className="text-neon-blue w-6 h-6" />,
      title: "Problem–Solution Fit",
      description: "Solve a real problem. Not just a cool AI wrapper.",
      tag: "CORE_FIT"
    },
    {
      icon: <DollarSign className="text-green-400 w-6 h-6" />,
      title: "Business Model & Revenue",
      description: "How are you making money? Who's paying you?",
      tag: "MONETIZATION"
    },
    {
      icon: <TrendingUp className="text-neon-purple w-6 h-6" />,
      title: "Tech Scalability & Moat",
      description: "Why can't someone copy your product in 2 days? What's your unfair advantage?",
      tag: "MOAT_STRENGTH"
    },
    {
      icon: <Layers className="text-yellow-500 w-6 h-6" />,
      title: "Product Readiness (MVP)",
      description: "Make it feel like an actual product, not just a demo. Clean UI, working features, solid experience.",
      tag: "LAUNCH_READY"
    },
    {
      icon: <Users className="text-cyber-red w-6 h-6" />,
      title: "Founding Team Dynamics",
      description: "Own your roles. Pitch like founders. Answer like CEOs.",
      tag: "FOUNDERS"
    }
  ];

  const bonuses = [
    "User validation",
    "Competitor analysis",
    "Market research",
    "Clear roadmap",
    "Strong pitch & storytelling"
  ];

  const teamChallenges = [
    {
      title: "🔒 Challenge 1: The Validation Hack (Market Validation)",
      icon: "🔍",
      task: "Pitch your prototype to 3-5 random people (or potential users online) who are not developers. Get their raw feedback, record what they liked/disliked, and present how you modified your project based on their inputs.",
      deliverable: "A 'User Feedback Log' slide in your final presentation PPT.",
      badgeColor: "border-[#00F0FF] text-[#00F0FF] bg-[#00F0FF]/5 hover:border-[#00F0FF]/50 shadow-[0_0_15px_rgba(0,240,255,0.02)]"
    },
    {
      title: "⚡ Challenge 2: The Monetization Blueprint (Business Model)",
      icon: "💰",
      task: "Define your target pricing model (SaaS subscription, transactional fee, freemium, etc.). Outline a unit economics scenario: if you had 1,000 active users, how much money would you make, and what would your server/API costs be?",
      deliverable: "A 'Revenue & Unit Economics' projection slide in your final presentation PPT.",
      badgeColor: "border-green-400 text-green-400 bg-green-400/5 hover:border-green-400/50 shadow-[0_0_15px_rgba(74,222,128,0.02)]"
    },
    {
      title: "🛡️ Challenge 3: The Technical Moat (Architectural Defense)",
      icon: "🛡️",
      task: "Draw a system architecture diagram. Explicitly show the security layers, data caching mechanisms (like Redis/local cache), and explain why a competitor cannot clone your app using simple API wrapper scrapers.",
      deliverable: "An 'Architecture & Technical Moat' slide with a diagram in your final presentation PPT.",
      badgeColor: "border-neon-purple text-neon-purple bg-neon-purple/5 hover:border-neon-purple/50 shadow-[0_0_15px_rgba(217,70,239,0.02)]"
    },
    {
      title: "🎨 Challenge 4: The Frictionless Experience (UI/UX Refactoring)",
      icon: "🎨",
      task: "Perform an audit of your app's onboarding/login flow. Reduce user steps to a maximum of 3 clicks. Ensure proper responsive layouts for mobile screens and clear error states.",
      deliverable: "A 1-minute video demo showing frictionless user journey (or a slide detailing UX fixes).",
      badgeColor: "border-yellow-500 text-yellow-500 bg-yellow-500/5 hover:border-yellow-500/50 shadow-[0_0_15px_rgba(234,179,8,0.02)]"
    },
    {
      title: "📈 Challenge 5: The Scalability Roadmap (6-Month Plan)",
      icon: "📈",
      task: "Write a step-by-step roadmap detailing how you would scale your app from 10 users to 10,000 users. What database optimizations, load balancing, or CDN layers would you introduce?",
      deliverable: "A 'Scale & Expansion Roadmap' timeline slide in your final presentation PPT.",
      badgeColor: "border-orange-500 text-orange-500 bg-orange-500/5 hover:border-orange-500/50 shadow-[0_0_15px_rgba(249,115,22,0.02)]"
    },
    {
      title: "🎙️ Challenge 6: The Elevator Pitch & Demo Video (Storytelling)",
      icon: "🎙️",
      task: "Record a high-energy 2-minute video pitching your MVP. Focus 20% on the technology, and 80% on the core problem, user value proposition, and business vision.",
      deliverable: "A YouTube/Drive link to the 2-minute elevator pitch video in your submission form.",
      badgeColor: "border-cyber-red text-cyber-red bg-cyber-red/5 hover:border-cyber-red/50 shadow-[0_0_15px_rgba(255,0,60,0.02)]"
    }
  ];

  return (
    <section className="py-24 px-6 relative bg-black/60 overflow-hidden min-h-screen flex flex-col items-center scanlines">
      {/* Cyber Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,240,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,240,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="max-w-4xl w-full relative z-10">
        
        {/* Back Link */}
        <div className="mb-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-gray-500 hover:text-neon-blue font-mono text-xs uppercase tracking-widest transition-colors duration-300"
          >
            <ArrowLeft size={14} /> [ RETURN_TO_NEXUS ]
          </Link>
        </div>

        {/* Title */}
        <div className="text-center mb-12">
          <p className="text-neon-blue/60 font-mono text-xs tracking-widest uppercase mb-3">// ENCRYPTED_PROTOCOL_NODE</p>
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            data-text="HACKVERSE CHALLENGES"
            className="glitch-text text-4xl md:text-6xl font-bold font-orbitron text-white mb-4 tracking-wider uppercase"
          >
            CHALLENGES
          </motion.h2>
          <div className="flex items-center justify-center gap-2 text-gray-400 text-xs md:text-sm font-mono">
            <div className="h-6 w-0.5 bg-neon-blue animate-pulse" />
            <p>Access active hackathon updates, hidden challenges, and leveling directives.</p>
          </div>
        </div>

        {/* Dynamic Display Area */}
        <div className="flex justify-center items-center w-full min-h-[400px]">
          <AnimatePresence mode="wait">
            {!isDecrypted ? (
              /* --- SURPRISE BOX (ENCRYPTED STATE) --- */
              <motion.div
                key="encrypted-box"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95, y: -10 }}
                transition={{ duration: 0.4 }}
                onClick={() => setIsDecrypted(true)}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="max-w-md w-full bg-black/80 border-2 border-dashed border-neon-purple/40 hover:border-neon-blue/80 p-8 rounded-xl text-center relative cursor-pointer group shadow-[0_0_20px_rgba(217,70,239,0.05)] hover:shadow-[0_0_40px_rgba(0,240,255,0.2)] transition-all duration-500 overflow-hidden"
              >
                {/* Background scanning light */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-purple/5 to-transparent -translate-y-full group-hover:translate-y-full transition-transform duration-1000 ease-in-out" />
                
                {/* Glowing neon particles decoration */}
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-[radial-gradient(circle,rgba(217,70,239,0.1),transparent_70%)]" />
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[radial-gradient(circle,rgba(0,240,255,0.1),transparent_70%)]" />

                {/* Cyber container layout */}
                <div className="mb-6 flex justify-center">
                  <motion.div
                    animate={
                      isHovered 
                        ? { rotateY: 180, scale: 1.1, filter: "drop-shadow(0 0 15px rgba(0, 240, 255, 0.8))" } 
                        : { y: [0, -10, 0] }
                    }
                    transition={
                      isHovered 
                        ? { duration: 0.4 } 
                        : { repeat: Infinity, duration: 3, ease: "easeInOut" }
                    }
                    className="w-24 h-24 rounded-2xl bg-black border-2 border-neon-purple/80 group-hover:border-neon-blue flex items-center justify-center relative shadow-[inset_0_0_20px_rgba(217,70,239,0.2)]"
                  >
                    {isHovered ? (
                      <Unlock size={42} className="text-neon-blue" />
                    ) : (
                      <Lock size={42} className="text-neon-purple animate-pulse" />
                    )}
                    
                    {/* Glowing pulse rings */}
                    <span className="absolute inset-0 w-full h-full border border-neon-purple/30 rounded-2xl scale-125 animate-ping opacity-30" />
                  </motion.div>
                </div>

                <h3 className="text-lg md:text-xl font-orbitron font-bold text-white mb-2 uppercase tracking-widest">
                  SECRET DATA ENVELOPE
                </h3>
                <p className="text-gray-400 font-mono text-xs mb-8 uppercase tracking-widest leading-relaxed">
                  Status: <span className="text-cyber-red font-bold animate-pulse">LOCKED // ENCRYPTED</span>
                  <br />
                  Origin: <span className="text-neon-purple font-bold">ORGANIZER_CORE</span>
                </p>

                <div className="inline-flex items-center gap-3 bg-neon-purple/10 border border-neon-purple/40 group-hover:bg-neon-blue/15 group-hover:border-neon-blue/60 text-neon-purple group-hover:text-neon-blue px-6 py-3 font-mono text-xs uppercase tracking-widest transition-all duration-300">
                  <Sparkles size={14} className="animate-spin" />
                  <span>DECRYPT DIRECTIVE</span>
                </div>

                <div className="mt-6 text-[10px] text-gray-500 font-mono">
                  SECURE PORTAL PIN // 256-BIT CRYPTO KEY LOADED
                </div>
              </motion.div>
            ) : (
              /* --- REVEALED CONTENT HUB --- */
              <motion.div
                key="decrypted-content"
                initial={{ opacity: 0, scale: 0.98, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="w-full bg-black/85 border border-neon-blue/40 p-6 md:p-10 rounded-2xl shadow-[0_0_50px_rgba(0,240,255,0.15)] relative overflow-hidden backdrop-blur-md"
              >
                {/* Ambient tech styling */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-[radial-gradient(circle,rgba(0,240,255,0.06),transparent_70%)] pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-[radial-gradient(circle,rgba(217,70,239,0.06),transparent_70%)] pointer-events-none" />
                
                {/* Laser line on top border */}
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-neon-blue to-transparent" />

                {/* Header Section */}
                <div className="mb-6 border-b border-white/10 pb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-neon-blue/10 flex items-center justify-center border border-neon-blue/30">
                      <Unlock size={18} className="text-neon-blue" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-neon-blue tracking-wider uppercase">// DATA_DECRYPTED_SUCCESSFUL</span>
                      <h3 className="text-white font-orbitron font-bold text-lg md:text-xl tracking-wider">
                        MISSION BRIEFING: STARTUP LEVEL-UP
                      </h3>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-[11px] font-mono text-cyber-red bg-cyber-red/10 border border-cyber-red/20 px-3 py-1 rounded font-bold uppercase tracking-wider animate-pulse">
                      ACTIVE TRANSMISSION
                    </span>
                  </div>
                </div>

                {/* General directives */}
                <div className="space-y-6 text-gray-300 font-mono text-xs md:text-sm leading-relaxed">
                  <div className="bg-white/5 border border-white/10 p-5 rounded-lg">
                    <p className="font-bold text-white mb-2 flex items-center gap-2">
                      <span className="text-neon-blue text-base">🚀</span> Hello Participants!
                    </p>
                    <p className="text-gray-400">
                      We reviewed every single prototype, and ngl... the ideas were actually insane. 🔥 Big W to every team for the effort.
                    </p>
                    <p className="text-white font-bold mt-3">
                      But now it's time to <span className="text-neon-blue border-b border-neon-blue/30 pb-0.5">level up. 💯</span>
                    </p>
                  </div>

                  <p className="text-center font-bold text-white text-sm md:text-base border border-dashed border-neon-purple/30 bg-neon-purple/5 p-4 rounded-lg">
                    We don't want just another hackathon project anymore—we want you to build a <span className="text-neon-purple text-glow font-orbitron font-black uppercase">startup</span>. Think bigger. Think product. Think scale.
                  </p>

                  <h4 className="text-xs font-orbitron font-bold text-neon-blue mt-8 mb-4 uppercase tracking-wider flex items-center gap-2">
                    ⚡ DIRECTIVE: UPGRADE PROTOCOLS BASED ON THESE CRITERIA:
                  </h4>

                  {/* Criteria Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {criteria.map((c, idx) => (
                      <div 
                        key={idx} 
                        className="bg-black/50 border border-white/5 hover:border-neon-blue/40 p-4 rounded-lg flex gap-4 transition-all duration-300"
                      >
                        <div className="shrink-0 p-2 bg-white/5 rounded border border-white/5 flex items-center justify-center self-start">
                          {c.icon}
                        </div>
                        <div>
                          <span className="text-[9px] text-gray-500 uppercase tracking-widest block mb-0.5">// {c.tag}</span>
                          <strong className="text-white font-orbitron text-xs md:text-sm block mb-1">{c.title}</strong>
                          <p className="text-gray-400 text-xs leading-relaxed">{c.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Bonus Points */}
                  <div className="border border-yellow-500/20 bg-yellow-500/5 p-5 rounded-lg mt-6">
                    <h5 className="text-xs font-orbitron font-bold text-yellow-500 mb-3 tracking-widest uppercase flex items-center gap-2">
                      ⭐ BONUS POINTS CRITERIA
                    </h5>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {bonuses.map((bonus, bIdx) => (
                        <div key={bIdx} className="flex items-center gap-2.5 text-xs bg-black/40 p-2.5 rounded border border-white/5">
                          <Check size={14} className="text-green-400 shrink-0" />
                          <span className="text-gray-300">{bonus}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Complete Challenge Catalog */}
                  <div className="border border-white/10 bg-black/40 p-5 rounded-lg mt-12">
                    <h4 className="text-xs font-orbitron font-bold text-white mb-2 uppercase tracking-wider flex items-center gap-2">
                      <Star size={14} className="text-neon-purple animate-pulse" /> HACKVERSE TEAM CHALLENGES
                    </h4>
                    <p className="text-gray-400 text-xs mb-6 font-mono leading-relaxed">
                      Upgrade your project further by aligning with at least one of the following challenges. Incorporate your chosen challenge deliverables into your final demo and pitch:
                    </p>

                    <div className="grid grid-cols-1 gap-4">
                      {teamChallenges.map((tc, tcIdx) => (
                        <div 
                          key={tcIdx}
                          className={`border rounded-lg p-5 bg-black/40 transition-all duration-300 hover:bg-black/60 ${tc.badgeColor}`}
                        >
                          <h5 className="font-orbitron font-bold text-white text-xs md:text-sm mb-2 flex items-center gap-2">
                            <span className="text-base">{tc.icon}</span>
                            {tc.title}
                          </h5>
                          <p className="text-gray-400 text-xs mb-3 font-mono leading-relaxed">{tc.task}</p>
                          <div className="text-[11px] font-mono text-gray-300 bg-white/5 px-3 py-1.5 rounded border border-white/5">
                            <span className="font-bold text-white">Deliverable: </span> {tc.deliverable}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>

                {/* Final Glowing CTA Outro */}
                <div className="text-center py-6 bg-gradient-to-r from-neon-purple/5 via-[#00F0FF]/5 to-neon-purple/5 border border-neon-blue/20 rounded-xl relative overflow-hidden shadow-[0_0_30px_rgba(0,240,255,0.05)] mt-8">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00F0FF]/10 to-transparent animate-pulse" />
                  <p className="text-gray-300 font-mono text-xs md:text-sm mb-2 font-bold relative z-10 px-4">
                    Don't build for the hackathon. Build like you're launching your startup tomorrow. 🚀
                  </p>
                  <h3 className="text-neon-blue font-orbitron font-bold text-sm md:text-base tracking-widest uppercase relative z-10 px-4">
                    See you in the finals. Make us say <span className="text-white bg-cyber-red/20 border border-cyber-red/30 px-2 py-0.5 rounded font-black font-mono">"Damn, this deserves funding!"</span> 👀🔥
                  </h3>
                </div>

                {/* Close/Reset Decryption button */}
                <div className="mt-8 flex justify-center">
                  <button 
                    onClick={() => setIsDecrypted(false)}
                    className="text-xs text-gray-500 hover:text-neon-purple font-mono uppercase tracking-widest transition-colors flex items-center gap-2"
                  >
                    [ RE-ENGAGE_ENCRYPTION_SHIELD ]
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

export default Challenges;
