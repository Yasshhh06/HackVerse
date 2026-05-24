import { motion } from "framer-motion";

const Mission = () => {
  return (
    // ── SOLID SECTION: blocks global video ──
    <section id="mission" className="relative py-16 md:py-24 px-4 md:px-8 bg-[#060610] text-white overflow-hidden min-h-screen flex flex-col justify-center scanlines">
      {/* Decorative grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,240,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,240,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none" />
      {/* Top fade */}
      <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-black to-transparent pointer-events-none z-10" />
      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black to-transparent pointer-events-none z-10" />

      <div className="max-w-7xl mx-auto w-full relative z-10">

        {/* Header */}
        <div className="mb-12">
          <p className="text-neon-blue font-mono text-xs md:text-sm tracking-widest uppercase mb-2">// SYSTEM_INTEL</p>
          <h2
            data-text="MISSION BRIEF"
            className="glitch-text text-4xl md:text-6xl font-bold font-orbitron text-white"
          >
            MISSION <span className="text-neon-blue">BRIEF</span>
          </h2>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">

          {/* Left: Text Intel */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="border border-neon-blue/20 bg-black/60 rounded-xl p-8 md:p-12 relative overflow-hidden backdrop-blur-sm glitch-card"
          >
            <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(rgba(0,240,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,240,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none" />

            <h3 className="text-2xl md:text-4xl font-normal mb-8 relative z-10 text-gray-100">
              Initiating HackVerse Protocol.
            </h3>

            <div className="space-y-6 font-mono text-gray-400 text-sm md:text-base relative z-10">
              <p>
                <span className="text-neon-blue/60">[SYSTEM_LOG]:</span> A convergence of elite developers, designers, and innovators detected at HACKVERSE Node.
              </p>
              <div className="pl-4 border-l-2 border-neon-blue/50">
                <p className="mb-2 rgb-hover">Mission: 12-hour sprint</p>
                <p className="mb-2 rgb-hover">Build the future</p>
                <p className="mb-2 rgb-hover">Disrupt the present</p>
                <p className="rgb-hover">Survive deployment</p>
              </div>
            </div>
          </motion.div>

          {/* Right: Radar Visual */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="border border-neon-blue/20 bg-black/60 relative rounded-xl overflow-hidden min-h-[300px] flex items-center justify-center glitch-card"
          >
            <div className="absolute top-4 right-4 text-neon-blue flicker text-xs font-mono">SCANNING...</div>

            <div className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center">
              <div className="absolute inset-0 border border-red-900/40 rounded-full" />
              <div className="absolute inset-8 border border-red-900/40 rounded-full" />
              <div className="absolute inset-16 border border-red-900/40 rounded-full" />
              <div className="absolute inset-24 border border-red-900/30 rounded-full bg-red-900/10" />
              <div className="absolute w-full h-full animate-[spin_4s_linear_infinite] rounded-full bg-[conic-gradient(from_0deg,transparent_0deg,transparent_270deg,rgba(220,38,38,0.5)_360deg)]" />
              <div className="w-3 h-3 bg-red-500 rounded-full shadow-[0_0_15px_#ef4444,0_0_30px_#ef4444] flicker" />
            </div>

            <div className="absolute bottom-4 left-4 font-mono text-[10px] text-neon-blue/60">
              <p>LIVE_FEED :: ACTIVE</p>
              <p>LOC: HACKVERSE_NODE</p>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { label: 'OPERATIVES', value: '200+', icon: '👥' },
            { label: 'BOUNTY', value: '₹1,00,000+', icon: '🏆' },
            { label: 'MENTORS', value: '5+', icon: '🛡' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="border border-neon-blue/20 bg-black/50 p-6 flex flex-col items-center justify-center text-center hover:border-neon-blue/60 hover:shadow-[0_0_20px_rgba(0,240,255,0.2)] transition-all duration-300 glitch-card"
            >
              <div className="text-2xl mb-2">{stat.icon}</div>
              <div className="text-3xl font-bold text-neon-blue mb-1 font-orbitron rgb-hover">{stat.value}</div>
              <div className="text-[10px] tracking-widest uppercase text-gray-500 font-mono">{stat.label}</div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Mission;
