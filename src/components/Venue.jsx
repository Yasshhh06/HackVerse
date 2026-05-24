import { motion } from "framer-motion";
import { MapPin, Train, Clock, Navigation } from "lucide-react";

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
          <p className="text-neon-blue/60 font-mono text-xs tracking-widest uppercase mb-3">// COORDINATES_LOCKED</p>
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            data-text="VENUE INTEL"
            className="glitch-text text-4xl md:text-6xl font-bold font-orbitron text-white mb-4 tracking-wider uppercase"
          >
            VENUE INTEL
          </motion.h2>
          <div className="flex items-center justify-center gap-2 text-gray-400 text-xs md:text-sm font-mono">
            <div className="h-6 w-0.5 bg-neon-blue flicker" />
            <p>Secure location coordinates. Proceed to designated sector.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Left: Holographic Encryption / Scanning Lock Visual */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="w-full aspect-square md:aspect-[4/3] bg-black/60 rounded-xl border border-cyber-red/30 overflow-hidden relative shadow-2xl flex flex-col items-center justify-center p-8 glitch-card"
            >
              <div className="absolute top-4 left-4 font-mono text-[10px] text-cyber-red/80 tracking-widest">
                [SYSTEM_STATUS: PROTECTED]
              </div>
              
              <div className="mb-6 w-20 h-20 rounded-full bg-cyber-red/10 border border-cyber-red/40 flex items-center justify-center shadow-[0_0_20px_rgba(239,68,68,0.2)] animate-pulse">
                <Lock size={36} className="text-cyber-red" />
              </div>

              <h3 className="text-xl md:text-2xl font-orbitron font-bold text-white mb-2 tracking-widest text-center">
                GPS COORDINATES LOCKED
              </h3>
              
              <div className="space-y-1 text-center font-mono text-xs text-gray-500">
                <p className="text-cyber-red animate-pulse">// DECRYPTION_KEY_PENDING</p>
                <p>SECTOR: MUMBAI, IN</p>
                <p className="text-gray-600 text-[10px] mt-2">TIMESTAMP: 14.JUN.2026</p>
              </div>

              {/* Scanning lines */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-5">
                <div className="w-full h-[2px] bg-cyber-red absolute top-0 animate-[scan_3s_linear_infinite]" />
              </div>
              
              <div className="absolute bottom-4 right-4 text-cyber-red/40 font-mono text-[10px]">
                LAT: XX.XXXX | LNG: XX.XXXX
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
                <MapPin size={40} className="text-neon-blue" />
              </div>
              <p className="text-neon-blue/60 font-mono text-[10px] tracking-widest uppercase mb-2">// TARGET_SECTOR</p>
              <h3 className="text-xl font-orbitron text-white mb-4 uppercase rgb-hover">Venue</h3>
              <div className="space-y-2 text-gray-400 text-sm font-mono">
                <p className="text-white font-bold text-lg">ANNOUNCING SOON</p>
                <p className="text-neon-blue">Mumbai, Maharashtra, India</p>
                <p className="text-xs text-gray-500 mt-4 leading-relaxed">
                  The designated offline battleground sector will be unlocked and broadcasted directly to all registered operatives ahead of the launch timeline.
                </p>
              </div>
            </motion.div>

            {/* Travel Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-black/60 border border-neon-blue/20 rounded-xl p-8 relative backdrop-blur-sm glitch-card"
            >
              <h3 className="flex items-center gap-3 text-xl font-orbitron text-neon-blue mb-6 uppercase">
                <Train size={24} /> TRAVEL PROTOCOLS
              </h3>
              <div className="bg-neon-blue/10 border-l-2 border-neon-blue p-4 mb-4">
                <h4 className="text-white font-bold text-sm mb-1">Transit Vector Data:</h4>
                <p className="text-gray-400 text-xs leading-relaxed font-mono">
                  Coordinates are currently classified. Transport nodes and landing directives will be transmitted to operatives once decryption is initialized.
                </p>
              </div>
              <p className="text-[10px] text-gray-500 font-mono">
                STATUS: WAITING_FOR_DECRYPTION_BROADCAST...
              </p>
            </motion.div>

          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-16 text-center"
        >
          <button
            disabled
            className="inline-flex items-center gap-3 px-8 py-4 border border-gray-700 text-gray-500 font-mono text-sm tracking-widest cursor-not-allowed rounded"
          >
            <Navigation size={16} />
            DIRECTIONS LOCKED
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Venue;
