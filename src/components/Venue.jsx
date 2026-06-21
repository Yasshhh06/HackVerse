import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Monitor, CreditCard, Clock, Radio, Unlock, ExternalLink, ArrowRight } from "lucide-react";

const Venue = () => {
  return (
    <section id="venue" className="py-16 md:py-24 px-6 bg-black/50 min-h-screen border-t border-white/5 relative overflow-hidden scanlines">
      {/* Neon Blue radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,240,255,0.07),transparent_70%)] pointer-events-none" />
      {/* Neon grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,240,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,240,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none" />
      {/* Purple corner accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[radial-gradient(circle,rgba(217,70,239,0.08),transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-neon-blue/60 font-mono text-xs tracking-widest uppercase mb-3">// BROADCAST_SECTOR_ONLINE</p>
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            data-text="VENUE & VECTOR"
            className="glitch-text text-4xl md:text-6xl font-bold font-orbitron text-white mb-4 tracking-wider uppercase"
          >
            VENUE & VECTOR
          </motion.h2>
          <div className="flex items-center justify-center gap-2 text-gray-400 text-xs md:text-sm font-mono">
            <div className="h-6 w-0.5 bg-neon-blue animate-pulse" />
            <p>Physical coordinates redirected. Virtual access portals initialized.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Left: Holographic Encryption / Scanning Unlocked Visual */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="w-full aspect-square md:aspect-[4/3] bg-black/60 rounded-xl border border-neon-blue/30 overflow-hidden relative shadow-2xl flex flex-col items-center justify-center p-8 glitch-card"
            >
              <div className="absolute top-4 left-4 font-mono text-[10px] text-neon-blue tracking-widest">
                [SYSTEM_STATUS: ONLINE_CHANNELS_OPEN]
              </div>
              
              <div className="mb-6 w-20 h-20 rounded-full bg-neon-blue/10 border border-neon-blue/40 flex items-center justify-center shadow-[0_0_20px_rgba(0,240,255,0.2)]">
                <Unlock size={36} className="text-neon-blue" />
              </div>

              <h3 className="text-xl md:text-2xl font-orbitron font-bold text-white mb-2 tracking-widest text-center">
                ONLINE PROTOCOL ACTIVE
              </h3>
              
              <div className="space-y-1 text-center font-mono text-xs text-gray-500">
                <p className="text-[#00F0FF] animate-pulse">// DECRYPTION_KEY_COMPLETED</p>
                <p className="text-white">SECTOR: 100% ONLINE (VIRTUAL)</p>
                <p className="text-gray-400 text-[10px] mt-2">TIMESTAMP: 28.JUN.2026</p>
              </div>

              {/* Scanning lines */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-5">
                <div className="w-full h-[2px] bg-neon-blue absolute top-0 animate-[scan_3s_linear_infinite]" />
              </div>
              
              <div className="absolute bottom-4 right-4 text-neon-blue/40 font-mono text-[10px]">
                LAT: ONLINE | LNG: ONLINE
              </div>
            </motion.div>
          </div>

          {/* Right: Informational Sector Logs */}
          <div className="space-y-6">

            {/* Location Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-black/60 border border-neon-blue/20 rounded-xl p-8 relative overflow-hidden backdrop-blur-sm glitch-card"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Monitor size={40} className="text-neon-blue" />
              </div>
              <p className="text-neon-blue/60 font-mono text-[10px] tracking-widest uppercase mb-2">// TARGET_SECTOR</p>
              <h3 className="text-xl font-orbitron text-white mb-4 uppercase rgb-hover">Virtual Venue</h3>
              <div className="space-y-2 text-gray-400 text-sm font-mono">
                <p className="text-white font-bold text-lg">100% ONLINE PARTICIPATION</p>
                <p className="text-[#00F0FF]">Zoom, Discord, & Live Stream Channels</p>
                <p className="text-xs text-gray-500 mt-4 leading-relaxed">
                  Due to unavoidable circumstances, all project reviews, mentoring sessions, evaluator checks, presentations, and final judging protocols will take place online. Credentials to access the online sectors will be transmitted directly to registered team leaders.
                </p>
              </div>
            </motion.div>

            {/* Travel Card -> cancellation support */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-black/60 border border-neon-blue/20 rounded-xl p-8 relative backdrop-blur-sm glitch-card"
            >
              <h3 className="flex items-center gap-3 text-xl font-orbitron text-neon-blue mb-6 uppercase">
                <CreditCard size={24} /> TRAVEL & STAY REIMBURSEMENT
              </h3>
              <div className="bg-cyber-red/10 border-l-2 border-cyber-red p-4 mb-4">
                <h4 className="text-white font-bold text-sm mb-1">Financial Losses Covered:</h4>
                <p className="text-gray-400 text-xs leading-relaxed font-mono">
                  Full registration fees (₹1,000) will be refunded. If you incurred cancellation losses on bus, train, or flight bookings, or hotel accommodations specific to HackVerse, we will cover the eligible losses upon verification.
                </p>
              </div>
              <p className="text-[10px] text-neon-purple font-mono">
                STATUS: CLAIM CELL READY FOR TRANSMISSIONS
              </p>
            </motion.div>

          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-16 text-center flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link
            to="/updates"
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-neon-blue/10 border-2 border-neon-blue text-neon-blue font-orbitron font-bold tracking-widest hover:bg-neon-blue hover:text-black hover:shadow-[0_0_30px_rgba(0,240,255,0.4)] transition-all duration-300 rounded"
          >
            <Radio size={16} className="animate-pulse" />
            VIEW BROADCAST DETAILS
          </Link>
          
          <Link
            to="/registration"
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-neon-purple/10 border border-neon-purple/40 text-neon-purple font-orbitron font-bold tracking-widest hover:bg-neon-purple hover:text-black hover:shadow-[0_0_30px_rgba(217,70,239,0.3)] transition-all duration-300 rounded"
          >
            <CreditCard size={16} />
            SUBMIT REFUND CLAIM
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Venue;
