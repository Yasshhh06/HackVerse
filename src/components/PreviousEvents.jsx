import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { MapPin, ArrowRight, X, Target, Zap, TrendingUp, Image as ImageIcon } from "lucide-react";

const PreviousEvents = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-300%"]);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const events = [
    {
      id: "01",
      title: "PROMPT CRAFT",
      description: "Prompt Engineering + Vibe Coding Workshop. Level up your AI game.",
      date: "JAN 20, 2026",
      image: "/promptcraft_main.jpeg", 
      details: {
        location: "Seminar Hall, SSJCOE | 10:30 AM – 2 PM",
        briefing: "This isn’t another boring session — this is where you actually learn how to make AI work like a weapon for you. From crafting killer prompts to building vibe-coded mini projects.",
        objectives: [
           "Hands-on prompt engineering.",
           "Real-time vibe-coding challenges.",
           "Fast-track AI tricks you won’t find on YouTube.",
           "Certificate of Completion."
        ],
        highlights: [
            "Crafting killer prompts.",
            "Building vibe-coded mini projects.",
            "Resume-worthy skills."
        ],
        impact: "Empowered participants with practical AI skills for real-world applications.",
      visuals: [
            "/promptcraft_visual1.jpg",
            "/promptcraft_visual2.jpg"
        ]
      }
    },
    {
      id: "02",
      title: "DSA CODE QUEST",
      description: "Hands-on Data Structures workshop followed by a coding battle.",
      date: "SEP 12, 2025",
      image: "/DSA_main.jpeg", 
      details: {
        location: "Seminar Hall, SSJCOE",
        briefing: "A comprehensive workshop on DSA concepts followed by a competitive contest.",
        objectives: [
           "Enhancing problem-solving efficiency.",
           "Mastering Data Structures & Algorithms.",
           "Preparation for technical interviews."
        ],
        highlights: [
            "Expert-led DSA Workshop.",
            "Real-time Coding Challenge."
        ],
        impact: "Significantly boosted campus coding culture and competitive spirit.",
        visuals: [
            "/DSA_visual1.jpg",
            "/DSA_visual2.jpg"
        ]
      }
    },
    {
      id: "03",
      title: "WEB DEV WORKSHOP",
      description: "Hands-on session building modern, responsive web applications.",
      date: "AUG 20, 2025",
      image: "/Web_Dev_main.jpeg", 
      details: {
        location: "Seminar Hall, SSJCOE",
        briefing: "From HTML/CSS basics to modern React component architecture.",
        objectives: [
           "Understanding Frontend Fundamentals.",
           "Responsive Design Best Practices.",
           "Deploying live web applications."
        ],
        highlights: [
            "Live Coding Walkthrough.",
            "Building a Personal Portfolio Site."
        ],
        impact: "Enabled participants to launch their first live websites.",
        visuals: [
            "/web_dev_visual1.jpg",
            "/web_dev_visual2.jpg"
        ]
      }
    },
    {
      id: "04",
      title: "CAREER COMPASS",
      description: "Navigating the path to a successful career in the tech industry.",
      date: "JUL 15, 2025",
      image: "/Career_Compass_main.jpeg",
      details: {
        location: "Seminar Hall, SSJCOE",
        briefing: "Strategic guidance on resume building, interview prep, and industry trends.",
        objectives: [
           "Resume & LinkedIn Optimization.",
           "Cracking Technical Interviews.",
           "Understanding Industry Expectations."
        ],
        highlights: [
            "Insights from Industry Veterans.",
            "Mock Interview Sessions."
        ],
        impact: "Provided clarity on career roadmaps for over 200+ aspiring engineers.",
        visuals: [
            "/Career_Compass_Visual1.jpg",
            "/Career_Compass_Visual2.jpg"
        ]
      }
    },
  ];

  return (
    <section id="legacy" ref={targetRef} className="relative h-[400vh] bg-black/90">
      <div className="sticky top-0 h-screen flex flex-col pt-32 md:pt-40 items-center overflow-hidden">
        
        {/* Header - Fixed to top left, fades out? No, keep it. */}
        <div className="absolute top-8 left-6 md:left-20 z-10 pointer-events-none">
            <h2 className="text-4xl md:text-6xl font-bold font-orbitron text-white mb-2 uppercase drop-shadow-lg">
                Past <span className="text-neon-blue">Events</span>
            </h2>
            <div className="flex items-center gap-2">
                <div className="h-1 w-12 bg-neon-blue"></div>
                <p className="text-gray-400 font-mono text-sm">Archived Mission Logs</p>
            </div>
        </div>

        {/* Horizontal Scroll Container */}
        <motion.div style={{ x }} className="flex flex-1 w-full">
          {events.map((event) => (
            <EventCard key={event.id} event={event} onOpen={() => setSelectedEvent(event)} />
          ))}
        </motion.div>
        
        {/* Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,240,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,240,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none -z-10"></div>
        {/* Purple glow accent */}
        <div className="absolute top-0 right-0 w-[50vw] h-[60vh] bg-[radial-gradient(circle,rgba(217,70,239,0.06),transparent_70%)] pointer-events-none -z-10"></div>
      </div>

       {/* Detail Modal */}
       <AnimatePresence>
        {selectedEvent && (
            <div className="fixed inset-0 z-[2000] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="w-full max-w-5xl bg-[#0a0f1f] border border-neon-blue/20 shadow-[0_0_50px_rgba(0,240,255,0.1)] flex flex-col md:flex-row overflow-hidden max-h-[90vh]"
                >
                    {/* Left: Image & Title */}
                    <div className="relative w-full md:w-2/5 h-64 md:h-auto overflow-hidden">
                        <img 
                            src={selectedEvent.image} 
                            alt={selectedEvent.title} 
                            className="w-full h-full object-cover filter grayscale contrast-125"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
                        <div className="absolute bottom-8 left-8 p-4">
                             <div className="inline-block px-2 py-1 border border-white/30 text-[10px] font-mono text-white/70 mb-2 backdrop-blur-md">
                                CASE FILE: ARCHIVE {selectedEvent.id}
                             </div>
                             <h2 className="text-3xl md:text-4xl font-orbitron font-bold text-white leading-none mb-2">
                                {selectedEvent.title}
                             </h2>
                             <div className="flex items-center gap-4 text-xs font-mono text-neon-blue">
                                <span className="flex items-center gap-1"><MapPin size={12}/> {selectedEvent.details.location}</span>
                                <span>{selectedEvent.date}</span>
                             </div>
                        </div>
                    </div>

                    {/* Right: Details */}
                    <div className="w-full md:w-3/5 p-8 overflow-y-auto custom-scrollbar bg-[#050505] text-left">
                        <button 
                            onClick={() => setSelectedEvent(null)}
                            className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors"
                        >
                            <X size={24} />
                        </button>

                        <div className="mb-8">
                             <p className="text-[10px] font-mono text-text-neon-yellow uppercase tracking-widest mb-2 text-yellow-500/80">
                                // BRIEFING
                             </p>
                             <p className="text-xl text-gray-200 font-light leading-relaxed">
                                {selectedEvent.details.briefing}
                             </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                            <div>
                                <h4 className="flex items-center gap-2 text-sm font-orbitron text-white mb-4 border-b border-white/10 pb-2">
                                    <Target size={14} className="text-neon-purple"/> OBJECTIVES
                                </h4>
                                <ul className="space-y-2">
                                    {selectedEvent.details.objectives.map((obj, i) => (
                                        <li key={i} className="text-xs md:text-sm text-gray-400 border-l border-white/10 pl-3">
                                            {obj}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                             <div>
                                <h4 className="flex items-center gap-2 text-sm font-orbitron text-white mb-4 border-b border-white/10 pb-2">
                                    <Zap size={14} className="text-neon-blue"/> HIGHLIGHTS
                                </h4>
                                <ul className="space-y-2">
                                    {selectedEvent.details.highlights.map((item, i) => (
                                        <li key={i} className="text-xs md:text-sm text-gray-400">
                                            • {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="mb-8">
                             <h4 className="flex items-center gap-2 text-sm font-orbitron text-white mb-2">
                                <TrendingUp size={14} className="text-green-400"/> IMPACT
                             </h4>
                             <p className="text-sm text-gray-400">
                                {selectedEvent.details.impact}
                             </p>
                        </div>

                        <div>
                             <h4 className="flex items-center gap-2 text-sm font-orbitron text-white mb-4">
                                <ImageIcon size={14} className="text-gray-400"/> VISUAL EVIDENCE
                             </h4>
                             <div className="flex gap-4 overflow-x-auto pb-2">
                                {selectedEvent.details.visuals.map((img, i) => (
                                    <img 
                                        key={i}
                                        src={img} 
                                        alt="evidence" 
                                        className="h-24 w-40 object-cover rounded-md border border-white/10 opacity-70 hover:opacity-100 transition-opacity"
                                    />
                                ))}
                             </div>
                        </div>

                    </div>
                </motion.div>
            </div>
        )}
      </AnimatePresence>

    </section>
  );
};

const EventCard = ({ event, onOpen }) => {
  return (
    <div className="w-screen h-full flex items-center justify-center p-6 md:p-20 shrink-0">
        <div className="group relative w-full max-w-4xl h-[60vh] md:h-full max-h-[600px] flex flex-col md:flex-row bg-[#0c0c0c] border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-colors shadow-2xl">
            
            {/* Image Section (Half width or full bg?) Let's do Split like before but inside card */}
            <div className="relative w-full md:w-1/2 h-1/2 md:h-full overflow-hidden">
                 <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 filter grayscale group-hover:grayscale-0"
                    style={{ backgroundImage: `url(${event.image})` }}
                  ></div>
                 <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                 
                 <div className="absolute top-4 left-4">
                     <span className="bg-black/60 border border-white/10 text-white text-xs font-mono px-2 py-1 rounded backdrop-blur-md">
                        {event.date}
                     </span>
                 </div>
            </div>

            {/* Content Section */}
            <div className="relative w-full md:w-1/2 h-1/2 md:h-full p-8 md:p-12 flex flex-col justify-center bg-[#0a0f1f]">
                 {/* Decorative */}
                 <div className="absolute top-0 right-0 p-4 opacity-10">
                    <h1 className="text-9xl font-black text-white font-orbitron">{event.id}</h1>
                 </div>

                 <div className="relative z-10">
                     <p className="text-neon-blue font-mono text-xs mb-2 tracking-widest uppercase">
                        // Archive File_{event.id}
                     </p>
                     <h3 className="text-3xl md:text-5xl font-orbitron font-bold text-white mb-6 leading-none">
                        {event.title}
                     </h3>
                     <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-8">
                        {event.description}
                     </p>
                     
                     <div className="flex items-center gap-6">
                        <button 
                            onClick={onOpen}
                            className="bg-transparent border border-white/50 text-white font-mono font-bold px-6 py-3 hover:bg-white hover:text-black transition-all flex items-center gap-2 tracking-widest text-sm whitespace-nowrap"
                        >
                            [ ACCESS_DATA ] <ArrowRight size={16}/>
                        </button>
                        <div className="flex items-center gap-2 text-gray-500 font-mono text-xs">
                             <MapPin size={14}/>
                             {event.details.location}
                        </div>
                     </div>
                 </div>
            </div>
        </div>
    </div>
  );
};

export default PreviousEvents;
