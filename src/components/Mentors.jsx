import { motion } from "framer-motion";
import { Shield, Brain, Terminal, Cpu, Database, Network, Key, Layers, Globe, Code } from "lucide-react";

const mentors = [
  {
    name: "Dr. Aravind Swaminathan",
    role: "Principal AI Scientist",
    specialty: "Neural Architectures & ML Ops",
    icon: <Brain className="w-6 h-6 text-neon-blue" />,
    borderClass: "hover:border-neon-blue hover:shadow-[0_0_20px_rgba(0,240,255,0.3)]",
    opId: "OP_MNT_001"
  },
  {
    name: "Elena Rostova",
    role: "Cybersecurity Analyst",
    specialty: "SecOps & Penetration Testing",
    icon: <Shield className="w-6 h-6 text-neon-purple" />,
    borderClass: "hover:border-neon-purple hover:shadow-[0_0_20px_rgba(217,70,239,0.3)]",
    opId: "OP_MNT_002"
  },
  {
    name: "Vikram Malhotra",
    role: "Lead Blockchain Architect",
    specialty: "Smart Contracts & Web3 Protocols",
    icon: <Key className="w-6 h-6 text-[#FFC800]" />,
    borderClass: "hover:border-[#FFC800] hover:shadow-[0_0_20px_rgba(255,200,0,0.3)]",
    opId: "OP_MNT_003"
  },
  {
    name: "Nisha Kulkarni",
    role: "Senior UX/UI Engineer",
    specialty: "Interactive Design Systems",
    icon: <Layers className="w-6 h-6 text-[#00FF64]" />,
    borderClass: "hover:border-[#00FF64] hover:shadow-[0_0_20px_rgba(0,255,100,0.3)]",
    opId: "OP_MNT_004"
  },
  {
    name: "Marcus Vance",
    role: "DevOps Protocol Commander",
    specialty: "Kubernetes & Scalable Pipelines",
    icon: <Terminal className="w-6 h-6 text-neon-blue" />,
    borderClass: "hover:border-neon-blue hover:shadow-[0_0_20px_rgba(0,240,255,0.3)]",
    opId: "OP_MNT_005"
  },
  {
    name: "Rohan Deshmukh",
    role: "Full Stack Architect",
    specialty: "Distributed Systems & GraphQL",
    icon: <Code className="w-6 h-6 text-neon-purple" />,
    borderClass: "hover:border-neon-purple hover:shadow-[0_0_20px_rgba(217,70,239,0.3)]",
    opId: "OP_MNT_006"
  },
  {
    name: "Aisha Diallo",
    role: "Database Engineer",
    specialty: "High-Throughput Vector DBs",
    icon: <Database className="w-6 h-6 text-[#FF003C]" />,
    borderClass: "hover:border-[#FF003C] hover:shadow-[0_0_20px_rgba(255,0,60,0.3)]",
    opId: "OP_MNT_007"
  },
  {
    name: "Zayn Al-Fayed",
    role: "Quantum Computing Dev",
    specialty: "Qubit Simulation & Cryptography",
    icon: <Cpu className="w-6 h-6 text-[#00F0FF]" />,
    borderClass: "hover:border-[#00F0FF] hover:shadow-[0_0_20px_rgba(0,240,255,0.3)]",
    opId: "OP_MNT_008"
  },
  {
    name: "Clara Oswald",
    role: "IoT Systems Integrator",
    specialty: "Edge Computing & Node Networks",
    icon: <Network className="w-6 h-6 text-[#B400FF]" />,
    borderClass: "hover:border-[#B400FF] hover:shadow-[0_0_20px_rgba(180,0,255,0.3)]",
    opId: "OP_MNT_009"
  },
  {
    name: "Kabir Mehta",
    role: "Open Innovation Strategist",
    specialty: "Product Design & Rapid Prototyping",
    icon: <Globe className="w-6 h-6 text-[#FF4D00]" />,
    borderClass: "hover:border-[#FF4D00] hover:shadow-[0_0_20px_rgba(255,77,0,0.3)]",
    opId: "OP_MNT_010"
  }
];

const Mentors = () => {
  return (
    <section id="mentors" className="py-16 md:py-24 px-6 bg-[#06060e] relative border-t border-white/5 scanlines">
      {/* Decorative background grid and glow */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,240,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,240,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-black to-transparent pointer-events-none z-10" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-neon-blue/60 font-mono text-xs tracking-widest uppercase mb-2">// INTEL_SUPPORT_CELL</p>
          <h2
            data-text="ELITE MENTORS"
            className="glitch-text text-4xl md:text-5xl font-bold font-orbitron mb-2"
          >
            ELITE <span className="text-neon-purple">MENTORS</span>
          </h2>
          <p className="text-gray-400 font-mono text-xs md:text-sm tracking-wide mt-2">
            FIELD EXPERTS STANDING BY TO COMPILE YOUR VENTURES
          </p>
        </div>

        {/* Mentors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {mentors.map((mentor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: (index % 5) * 0.08, duration: 0.3 }}
              whileHover={{ y: -6 }}
              className={`bg-black/80 border border-white/10 p-6 rounded-xl flex flex-col justify-between group transition-all duration-300 glitch-card backdrop-blur-sm cursor-pointer ${mentor.borderClass}`}
            >
              <div>
                {/* Op ID / Top strip */}
                <div className="flex justify-between items-center text-[9px] font-mono text-gray-500 tracking-wider mb-4 border-b border-white/5 pb-2">
                  <span>{mentor.opId}</span>
                  <span className="text-neon-blue/60 group-hover:text-neon-purple transition-colors">● ONLINE</span>
                </div>

                {/* Mentor Icon & Role */}
                <div className="mb-4 p-3 rounded-lg bg-white/5 w-12 h-12 flex items-center justify-center border border-white/10 group-hover:bg-white/10 transition-colors">
                  {mentor.icon}
                </div>

                {/* Name & Specialty */}
                <h3 className="text-lg font-bold font-orbitron text-white group-hover:text-neon-purple transition-colors mb-1 truncate">
                  {mentor.name}
                </h3>
                <p className="text-neon-blue text-xs font-mono uppercase tracking-wider mb-2">
                  {mentor.role}
                </p>
              </div>

              <div className="mt-4 border-t border-white/5 pt-3">
                <span className="text-[10px] text-gray-400 font-mono block leading-tight">
                  SPEC: <span className="text-gray-300 font-semibold">{mentor.specialty}</span>
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mentors;
