import { motion } from "framer-motion";
import { Lightbulb, Rocket, Zap, Target, Code, Cpu } from "lucide-react";

const ProblemStatements = () => {
  

    return (
        <section className="py-24 px-6 relative bg-black/60 overflow-hidden scanlines">
            <div className="max-w-6xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="flex items-center justify-center gap-3 mb-4"
                    >
                        <Lightbulb className="text-neon-blue w-8 h-8 flicker" />
                        <h2 data-text="PROBLEM STATEMENTS" className="glitch-text text-3xl md:text-5xl font-orbitron text-white tracking-wide uppercase">
                            PROBLEM <span className="text-neon-blue">STATEMENTS</span>
                        </h2>
                    </motion.div>
                    
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="bg-neon-blue/10 border border-neon-blue/30 p-4 rounded-lg inline-block mb-8"
                    >
                        <p className="text-neon-blue font-mono text-xs md:text-sm tracking-widest uppercase flex items-center gap-2">
                            <Rocket size={16} className="animate-pulse" /> PS STATUS: OPEN INNOVATION [ UNRESTRICTED ]
                        </p>
                    </motion.div>
                    
                    <p className="text-gray-400 font-mono text-xs md:text-sm max-w-3xl mx-auto leading-relaxed">
                        At HackVerse, we believe true innovation shouldn't be boxed in. 
                        While your project must align with a track, the specific problem you solve is up to you. 
                        <span className="text-white"> Identify any real-world challenge and build its solution.</span>
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="p-8 rounded-2xl bg-black/40 border border-white/10 backdrop-blur-md flex flex-col items-center text-center group hover:border-neon-blue/50 transition-all"
                    >
                        <div className="w-12 h-12 rounded-full bg-neon-blue/10 flex items-center justify-center mb-6 border border-neon-blue/30 text-neon-blue font-bold font-orbitron">01</div>
                        <h3 className="text-xl font-orbitron text-white mb-3 tracking-widest uppercase">SELECT A TRACK</h3>
                        <p className="text-gray-400 font-mono text-xs leading-relaxed">
                            Choose one of the five core domains that best fits your expertise or interest.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="p-8 rounded-2xl bg-black/40 border border-neon-blue/30 backdrop-blur-md flex flex-col items-center text-center group relative overflow-hidden shadow-[0_0_30px_rgba(0,240,255,0.1)]"
                    >
                        <div className="absolute inset-0 bg-neon-blue/5" />
                        <div className="w-12 h-12 rounded-full bg-neon-blue/20 flex items-center justify-center mb-6 border border-neon-blue/50 text-neon-blue font-bold font-orbitron relative z-10">02</div>
                        <h3 className="text-xl font-orbitron text-white mb-3 tracking-widest uppercase relative z-10 text-neon-blue">OPEN INNOVATION</h3>
                        <p className="text-gray-300 font-mono text-xs leading-relaxed relative z-10">
                            Build <span className="text-white font-bold underline decoration-neon-blue/50">ANY project</span> that falls under your track. There are no fixed problem statements.
                        </p>
                        <Zap className="absolute -bottom-4 -right-4 w-24 h-24 text-neon-blue/10 rotate-12" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="p-8 rounded-2xl bg-black/40 border border-white/10 backdrop-blur-md flex flex-col items-center text-center group hover:border-neon-blue/50 transition-all"
                    >
                        <div className="w-12 h-12 rounded-full bg-neon-blue/10 flex items-center justify-center mb-6 border border-neon-blue/30 text-neon-blue font-bold font-orbitron">03</div>
                        <h3 className="text-xl font-orbitron text-white mb-3 tracking-widest uppercase">TRANSMIT SOLUTION</h3>
                        <p className="text-gray-400 font-mono text-xs leading-relaxed">
                            Develop your prototype and submit your directives through the secure portal.
                        </p>
                    </motion.div>
                </div>

                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mt-8 text-center"
                >
                    <div className="inline-block p-[1px] bg-gradient-to-r from-transparent via-neon-blue/50 to-transparent w-full max-w-md h-[1px] mb-8" />
                    <p className="text-gray-500 font-mono text-[10px] tracking-[0.4em] uppercase mb-12">
                        &lt; THE DIGITAL FRONTIER IS UNBOUNDED /&gt;
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default ProblemStatements;
