import { motion } from "framer-motion";
import { Brain, BookOpen, Globe, Shield, Lightbulb, Swords } from "lucide-react";

const tracks = [
  {
    title: "EDTECH",
    description: "Revolutionizing the way we learn.",
    icon: <BookOpen className="w-10 h-10" />,
    color: "hover:border-[#FFC800] hover:shadow-[0_0_30px_rgba(255,200,0,0.4)]",
    iconColor: "text-[#FFC800]",
  },
  {
    title: "AI / ML",
    description: "Build intelligent systems and smart solutions.",
    icon: <Brain className="w-10 h-10" />,
    color: "hover:border-[#FF003C] hover:shadow-[0_0_30px_rgba(255,0,60,0.4)]",
    iconColor: "text-[#FF003C]",
  },
  {
    title: "WEB / APP DEV",
    description: "Create impactful web & mobile builds.",
    icon: <Globe className="w-10 h-10" />,
    color: "hover:border-[#00FF64] hover:shadow-[0_0_30px_rgba(0,255,100,0.4)]",
    iconColor: "text-[#00FF64]",
  },
  {
    title: "CYBERTECH",
    description: "Securing the digital frontier.",
    icon: <Shield className="w-10 h-10" />,
    color: "hover:border-[#B400FF] hover:shadow-[0_0_30px_rgba(180,0,255,0.4)]",
    iconColor: "text-[#B400FF]",
  },
  {
    title: "OPEN INNOVATION",
    description: "Solve real-world problems with your unique ideas.",
    icon: <Lightbulb className="w-10 h-10" />,
    color: "hover:border-[#00F0FF] hover:shadow-[0_0_30px_rgba(0,240,255,0.4)]",
    iconColor: "text-[#00F0FF]",
  },
];

const Tracks = () => {
  return (
    // ── VIDEO SECTION: transparent so global video shows through ──
    <section id="tracks" className="py-16 md:py-24 px-4 bg-black/40 relative overflow-hidden flex flex-col items-center scanlines">
      {/* Top/bottom fades */}
      <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-black to-transparent pointer-events-none z-10" />
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black to-transparent pointer-events-none z-10" />

      <div className="max-w-6xl w-full z-10 relative">

        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-3 mb-2"
          >
            <Swords className="w-8 h-8 text-[#FF4D00]" />
            <h2
              data-text="HACKVERSE TRACKS"
              className="glitch-text text-4xl md:text-5xl font-orbitron text-white tracking-wide"
            >
              HACKVERSE TRACKS
            </h2>
          </motion.div>
          <p className="text-gray-500 tracking-[0.3em] font-mono text-xs md:text-sm uppercase">
            CHOOSE YOUR BATTLEFIELD
          </p>
        </div>

        {/* Cards */}
        <div className="flex flex-wrap justify-center gap-8">
          {tracks.map((track, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`relative w-full md:w-[calc(33.333%-2rem)] max-w-sm h-80 bg-black/70 border border-white/10 rounded-2xl flex flex-col items-center justify-center p-6 backdrop-blur-md group transition-all duration-300 ${track.color} cursor-pointer hover:-translate-y-2 glitch-card`}
            >
              {/* Icon */}
              <div className={`mb-6 p-4 rounded-full bg-white/5 group-hover:bg-white/10 transition-all duration-300 transform group-hover:scale-110 ${track.iconColor}`}>
                <div className={`${track.iconColor} drop-shadow-[0_0_8px_currentColor]`}>
                  {track.icon}
                </div>
              </div>

              {/* Corner accents */}
              <span className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-current opacity-30 group-hover:opacity-100 transition-opacity" style={{ color: track.iconColor.replace('text-[', '').replace(']', '') }} />
              <span className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-current opacity-30 group-hover:opacity-100 transition-opacity" style={{ color: track.iconColor.replace('text-[', '').replace(']', '') }} />

              <h3 className={`text-xl font-bold font-orbitron text-white mb-3 text-center tracking-wide group-hover:${track.iconColor} rgb-hover transition-colors`}>
                {track.title}
              </h3>
              <p className="text-gray-400 text-sm text-center font-mono leading-relaxed group-hover:text-gray-300 transition-colors">
                {track.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tracks;

