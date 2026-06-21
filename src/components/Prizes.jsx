import { motion } from "framer-motion";
import { Trophy, Award, Medal, Gift, Sparkles, GiftIcon, Users, Globe } from "lucide-react";

const mainPrizes = [
  {
    place: "02",
    title: "1ST RUNNER UP",
    reward: "₹25,000",
    description: "Sector Scout Credential",
    color: "from-gray-400 to-gray-600",
    borderClass: "hover:border-gray-400 hover:shadow-[0_0_20px_rgba(156,163,175,0.3)]",
    icon: <Medal className="w-8 h-8 text-gray-300" />,
    delay: 0.1
  },
  {
    place: "01",
    title: "GRAND CHAMPION",
    reward: "₹40,000",
    description: "Ultimate Sector Vanguard",
    color: "from-[#FFD700] to-[#FFA500]",
    borderClass: "hover:border-[#FFD700] hover:shadow-[0_0_30px_rgba(255,215,0,0.4)]",
    icon: <Trophy className="w-12 h-12 text-[#FFD700] animate-pulse" />,
    highlight: true,
    delay: 0
  },
  {
    place: "03",
    title: "2ND RUNNER UP",
    reward: "₹10,000",
    description: "Sector Sentinel Credential",
    color: "from-[#CD7F32] to-[#8B4513]",
    borderClass: "hover:border-[#CD7F32] hover:shadow-[0_0_20px_rgba(205,127,50,0.3)]",
    icon: <Award className="w-8 h-8 text-[#CD7F32]" />,
    delay: 0.2
  }
];

const categoryPrizes = [
  {
    title: "BEST ALL-GIRLS TEAM",
    reward: "₹10,000",
    description: "Empowering diversity in tech",
    icon: <Users className="w-8 h-8 text-neon-purple" />,
    borderClass: "hover:border-neon-purple hover:shadow-[0_0_20px_rgba(217,70,239,0.3)]",
    delay: 0.1
  },
  {
    title: "BEST UI/UX / INNOVATION",
    reward: "₹10,000",
    description: "Exceptional design and creativity",
    icon: <Globe className="w-8 h-8 text-neon-blue" />,
    borderClass: "hover:border-neon-blue hover:shadow-[0_0_20px_rgba(0,240,255,0.3)]",
    delay: 0.2
  },
  {
    title: "SPECIAL MENTION",
    reward: "₹5,000",
    description: "Honorable effort and dedication",
    icon: <Gift className="w-8 h-8 text-green-400" />,
    borderClass: "hover:border-green-400 hover:shadow-[0_0_20px_rgba(74,222,128,0.3)]",
    delay: 0.3
  }
];

const perks = [
  {
    title: "$50 AI Credits",
    desc: "Granted to every registered operative post successful deployment validation.",
    icon: <Sparkles className="text-neon-blue" />
  },
  {
    title: "Premium Dev Swag",
    desc: "Exquisite HackVerse cyber-themed custom kits for top performing teams.",
    icon: <GiftIcon className="text-neon-purple" />
  },
  {
    title: "Elite Guild Badges",
    desc: "Official physical Certificates of Valor and cryptographic achievements for records.",
    icon: <Award className="text-green-400" />
  }
];

const Prizes = () => {
  return (
    <section id="prizes" className="py-16 md:py-24 px-6 bg-black/40 relative border-t border-white/5 scanlines">
      {/* Laser grids */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(217,70,239,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(0,240,255,0.01)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-neon-blue/60 font-mono text-xs tracking-widest uppercase mb-2">// BOUNTY_ALLOCATION</p>
          <h2
            data-text="PRIZE DECK"
            className="glitch-text text-4xl md:text-5xl font-bold font-orbitron mb-2"
          >
            PRIZE <span className="text-neon-blue">DECK</span>
          </h2>
          <p className="text-gray-400 font-mono text-xs md:text-sm tracking-wide mt-2">
            ₹1,00,000 CASH BOUNTY & AI PERKS DISTRIBUTED BY THE CELL
          </p>
        </div>

        {/* Podium Layout for Main Prizes */}
        <div className="flex flex-col md:flex-row items-stretch justify-center gap-8 mb-16 max-w-5xl mx-auto">
          {/* We map in custom order: 2nd Place, 1st Place, 3rd Place for podium visual on desktop */}
          {/* Order logic for responsive: 1st place always first or center */}
          {mainPrizes.map((prize, idx) => (
            <motion.div
              key={prize.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: prize.delay, duration: 0.4 }}
              whileHover={{ y: -8 }}
              className={`flex-1 bg-black/80 border p-8 rounded-2xl flex flex-col justify-between items-center text-center relative group transition-all duration-300 backdrop-blur-md ${
                prize.highlight 
                  ? "border-neon-blue/40 shadow-[0_0_30px_rgba(0,240,255,0.1)] md:-translate-y-4 md:hover:-translate-y-6" 
                  : "border-white/10"
              } ${prize.borderClass}`}
            >
              {prize.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-neon-blue text-black font-orbitron font-extrabold text-[9px] px-3 py-1 rounded-full tracking-[0.2em] shadow-[0_0_15px_rgba(0,240,255,0.5)]">
                  ULTIMATE_NODE
                </div>
              )}

              <div className="flex flex-col items-center">
                {/* Place Indicator */}
                <div className="text-[10px] font-mono text-gray-500 mb-2">PLACE :: {prize.place}</div>
                
                {/* Trophy/Medal Icon */}
                <div className="mb-6 p-4 rounded-full bg-white/5 border border-white/5 group-hover:bg-white/10 group-hover:scale-110 transition-all duration-300">
                  {prize.icon}
                </div>

                <h3 className="text-xl font-bold font-orbitron text-white group-hover:text-neon-blue transition-colors tracking-wider">
                  {prize.title}
                </h3>
                
                <p className="text-xs text-gray-500 font-mono mt-1 mb-4 uppercase tracking-widest">
                  {prize.description}
                </p>
              </div>

              <div className="w-full mt-6 pt-6 border-t border-white/5">
                <span className="text-3xl md:text-4xl font-extrabold font-orbitron text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 group-hover:from-neon-blue group-hover:to-neon-purple transition-all duration-500">
                  {prize.reward}
                </span>
                <span className="text-[10px] text-gray-500 font-mono block mt-2">CASH BOUNTY</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Category & Track Bounties */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <p className="text-neon-purple/60 font-mono text-xs tracking-widest uppercase mb-2">// CATEGORY_BOUNTIES</p>
            <h3 className="text-2xl md:text-3xl font-bold font-orbitron text-white tracking-wider">
              SPECIAL <span className="text-neon-purple">BOUNTIES</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {categoryPrizes.map((prize, idx) => (
              <motion.div
                key={prize.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: prize.delay, duration: 0.4 }}
                whileHover={{ y: -6 }}
                className={`bg-black/80 border p-6 rounded-2xl flex flex-col justify-between items-center text-center relative group transition-all duration-300 backdrop-blur-md border-white/10 ${prize.borderClass}`}
              >
                <div className="flex flex-col items-center">
                  <div className="mb-4 p-3 rounded-full bg-white/5 border border-white/5 group-hover:bg-white/10 group-hover:scale-110 transition-all duration-300">
                    {prize.icon}
                  </div>

                  <h4 className="text-md font-bold font-orbitron text-white group-hover:text-neon-purple transition-colors tracking-wider">
                    {prize.title}
                  </h4>
                  
                  <p className="text-xs text-gray-400 font-mono mt-2 mb-4 tracking-wide leading-relaxed">
                    {prize.description}
                  </p>
                </div>

                <div className="w-full mt-4 pt-4 border-t border-white/5">
                  <span className="text-2xl font-extrabold font-orbitron text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 group-hover:from-neon-purple group-hover:to-neon-blue transition-all duration-500">
                    {prize.reward}
                  </span>
                  <span className="text-[9px] text-gray-500 font-mono block mt-1">CASH BOUNTY</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Sub perks (AI Credits, Swags, etc.) */}
        <div className="border-t border-white/5 pt-16">
          <h3 className="text-center font-orbitron text-xs text-neon-purple tracking-[0.35em] uppercase mb-10">
            // ADDITIONAL_OPERATIVE_BENEFITS
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {perks.map((perk, idx) => (
              <motion.div
                key={perk.title}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -15 : 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.3 }}
                className="bg-black/40 border border-white/5 p-6 rounded-xl flex gap-4 items-start group hover:border-white/15 transition-all duration-300"
              >
                <div className="p-3 bg-white/5 border border-white/5 rounded-lg shrink-0 group-hover:bg-white/10 transition-colors">
                  {perk.icon}
                </div>
                <div>
                  <h4 className="text-md font-orbitron font-semibold text-white group-hover:text-neon-blue transition-colors mb-1">
                    {perk.title}
                  </h4>
                  <p className="text-xs text-gray-400 font-mono leading-relaxed">
                    {perk.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Prizes;
