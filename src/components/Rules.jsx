import { motion } from "framer-motion";
import { Terminal, Shield } from "lucide-react";

const Rules = () => {
  const rules = [
    "Teams must consist of 2 to 4 members.",
    "All projects must be built from scratch during the hackathon.",
    "Plagiarism of any kind will lead to immediate disqualification.",
    "Respect all participants, mentors, and organizers.",
    "Follow the event timeline strictly; no extensions.",
    "Decisions made by the judges are final and binding."
  ];

  return (
    <section id="rules" className="py-16 md:py-24 px-6 bg-black/50 relative overflow-hidden scanlines">
      {/* Neon Purple radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(217,70,239,0.07),transparent_70%)] pointer-events-none" />
      {/* Neon grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(217,70,239,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(217,70,239,0.03)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">

        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-neon-purple/60 font-mono text-xs tracking-widest uppercase mb-3">// PROTOCOL_DIRECTIVES</p>
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            data-text="RULES & PROTOCOLS"
            className="glitch-text text-4xl md:text-6xl font-bold font-orbitron text-white mb-4 tracking-wider uppercase"
          >
            RULES & PROTOCOLS
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-black/70 border border-neon-purple/30 rounded-xl shadow-[0_0_40px_rgba(217,70,239,0.1)] overflow-hidden font-mono backdrop-blur-sm"
        >
          {/* Terminal Header */}
          <div className="bg-white/5 px-4 py-3 border-b border-neon-purple/20 flex items-center gap-4">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-neon-purple/80"></div>
              <div className="w-3 h-3 rounded-full bg-neon-blue/80"></div>
              <div className="w-3 h-3 rounded-full bg-white/20"></div>
            </div>
            <div className="text-gray-400 text-xs flex items-center gap-2">
              <Terminal size={12} />
              protocol_directives.sh
            </div>
            <div className="ml-auto flex items-center gap-2 text-neon-purple/60 text-[10px]">
              <Shield size={10} />
              SECURE_CHANNEL
            </div>
          </div>

          {/* Terminal Body */}
          <div className="p-6 md:p-10 text-gray-300 space-y-4">
            <div className="text-neon-blue mb-6 text-sm">
              $ ./view_protocols --all --secure
            </div>
            <div className="text-neon-purple/60 text-xs mb-6">
              [SYSTEM] Loading HackVerse 2026 participation directives...
            </div>

            {rules.map((rule, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
                className="flex gap-3 group hover:bg-white/3 rounded px-2 py-1 transition-colors"
              >
                <span className="text-neon-purple shrink-0 group-hover:text-neon-blue transition-colors">{`>`}</span>
                <span>
                  <span className="text-neon-blue/60 mr-2">[{String(index + 1).padStart(2, '0')}]</span>
                  <span className="text-gray-300 group-hover:text-white transition-colors">{rule}</span>
                </span>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="mt-6 text-neon-blue animate-pulse text-sm"
            >
              $ _
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Rules;
