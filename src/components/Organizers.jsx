import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const Organizers = () => {
  return (
    // ── SOLID SECTION: blocks global video ──
    <section id="team" className="py-16 md:py-24 px-6 bg-[#06060e] relative border-t border-white/5 scanlines">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,240,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,240,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-black to-transparent pointer-events-none z-10" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <p className="text-neon-blue/60 font-mono text-xs tracking-widest uppercase mb-2">// COMMAND_STRUCTURE</p>
          <h2
            data-text="COMMAND CENTER"
            className="glitch-text text-4xl md:text-5xl font-bold font-orbitron mb-2"
          >
            COMMAND <span className="text-neon-purple">CENTER</span>
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {[
            { name: "Yash Mohite", contact: "9967053816" }
          ].map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-black/70 border border-neon-purple/20 p-8 rounded-xl text-center group hover:border-neon-purple/60 hover:shadow-[0_0_30px_rgba(217,70,239,0.2)] transition-all w-full sm:w-80 glitch-card backdrop-blur-sm"
            >
              {/* Operator ID */}
              <div className="text-neon-blue/40 font-mono text-xs tracking-widest mb-4">
                OP_ID::{String(index + 1).padStart(3, '0')}
              </div>

              <h3 className="text-2xl font-bold font-orbitron text-white group-hover:text-neon-purple transition-colors mb-2 rgb-hover">
                {member.name}
              </h3>
              <p className="text-neon-blue text-xs mb-6 uppercase tracking-widest font-mono">[ Organizer ]</p>

              <a
                href={`https://wa.me/91${member.contact}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gray-400 hover:text-green-400 transition-colors border border-white/10 px-4 py-2 rounded-full hover:border-green-400/50 hover:shadow-[0_0_15px_rgba(74,222,128,0.2)] bg-white/5"
              >
                <MessageCircle size={18} />
                <span className="font-mono text-sm">{member.contact}</span>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Organizers;
