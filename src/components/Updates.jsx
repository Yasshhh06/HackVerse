import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Bell, Calendar, Clock, AlertTriangle, Monitor, Award, Briefcase, ChevronRight, Check } from "lucide-react";

const Updates = () => {
  const announcements = [
    {
      id: "announcement-1",
      date: "21 June 2026",
      time: "9:00 pm",
      title: "🚨🚨 MAJOR HACKVERSE ANNOUNCEMENT 🚨🚨",
      subtitle: "HackVerse is moving 100% ONLINE",
      tag: "CRITICAL PROTOCOL CHANGE",
      content: (
        <div className="space-y-6 text-gray-300 font-mono text-xs md:text-sm leading-relaxed">
          <p>
            Hello Dear HACKVERSE Participants <span className="text-[#00F0FF]">💙</span>,
          </p>
          <p>
            After careful consideration and due to certain unavoidable circumstances,{" "}
            <strong className="text-white font-bold bg-cyber-red/20 px-2 py-0.5 border border-cyber-red/40 rounded">
              HACKVERSE will now be conducted completely ONLINE.
            </strong>{" "}
            💻⚡
          </p>
          <p>But before you panic... hear us out. 👀</p>

          <div className="border border-white/10 bg-white/5 p-4 rounded-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[radial-gradient(circle,rgba(0,240,255,0.05),transparent_70%)] pointer-events-none" />
            <h4 className="text-sm font-orbitron font-bold text-[#00F0FF] mb-3 flex items-center gap-2">
              🔥 The Hackathon Structure remains EXACTLY the same.
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-gray-400">
              <div className="flex items-center gap-2">
                <span className="text-[#00F0FF]">📅</span> Date: <span className="text-white">28 June 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#00F0FF]">⏰</span> Timings: <span className="text-white">Same</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#00F0FF]">🏆</span> Prize Pool: <span className="text-white">Same</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#00F0FF]">🎓</span> Certificates: <span className="text-white">Same</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#00F0FF]">💼</span> Internship Opportunities: <span className="text-white">Same</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#00F0FF]">👨‍🏫</span> Mentorship & Evaluation: <span className="text-white">Same</span>
              </div>
            </div>
          </div>

          <p>
            The only difference is that everything will happen virtually.
          </p>
          <p>
            Our mentors, judges, industry experts, and organizing team will be connected with you live through video sessions throughout the hackathon. Project reviews, mentoring, judging, presentations, and final evaluations will all happen online.
          </p>

          <div className="border border-neon-purple/20 bg-neon-purple/5 p-5 rounded-lg">
            <h4 className="text-sm font-orbitron font-bold text-neon-purple mb-4 flex items-center gap-2">
              💰 Now comes the part you've been waiting for... 😈🔥
            </h4>
            <p className="text-xs text-gray-400 mb-4">
              As a commitment to our community and participants, we have decided to provide:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-green-400 shrink-0">✅</span>
                <div>
                  <strong className="text-white">Full HACKVERSE Registration Fee Refund (₹1000)</strong>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400 shrink-0">✅</span>
                <div>
                  <strong className="text-white">Travel Loss Reimbursement</strong>
                  <p className="text-gray-400 text-xs mt-0.5">
                    If you've booked train, bus, or flight tickets and incurred cancellation losses, we will cover the eligible loss amount after verification.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400 shrink-0">✅</span>
                <div>
                  <strong className="text-white">Hotel/Stay Loss Support</strong>
                  <p className="text-gray-400 text-xs mt-0.5">
                    If you've already booked accommodation specifically for HACKVERSE and incurred cancellation charges, those losses will also be reviewed and supported by our team.
                  </p>
                </div>
              </li>
            </ul>
            <p className="text-xs text-neon-purple/80 mt-4 italic font-bold">
              Because we believe participants should never be penalized for a decision made by the organizers. ❤️
            </p>
          </div>

          <div className="border-t border-white/10 my-4" />

          <div className="border border-yellow-500/20 bg-yellow-500/5 p-5 rounded-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[radial-gradient(circle,rgba(234,179,8,0.05),transparent_70%)] pointer-events-none" />
            <h4 className="text-sm font-orbitron font-bold text-yellow-500 mb-4 flex items-center gap-2">
              🚀 BIGGEST OPPORTUNITY ALERT 🚀
            </h4>
            <p className="text-xs text-gray-400 mb-4">
              This is where things get crazy... 👀 We are selecting <strong className="text-white">20 outstanding teams</strong> from HACKVERSE for a special opportunity connected to our upcoming flagship event:
            </p>
            
            <div className="grid grid-cols-3 gap-2 bg-black/40 p-3 rounded border border-white/5 mb-4 text-center text-xs">
              <div>
                <span className="text-gray-500 block mb-1">LOCATION</span>
                <span className="text-white font-bold font-orbitron">📍 Hyderabad</span>
              </div>
              <div>
                <span className="text-gray-500 block mb-1">VENUE</span>
                <span className="text-white font-bold font-orbitron">🏢 Microsoft Office</span>
              </div>
              <div>
                <span className="text-gray-500 block mb-1">DATE</span>
                <span className="text-white font-bold font-orbitron">📅 25 July</span>
              </div>
            </div>

            <p className="text-xs text-gray-400 mb-4">
              The best-performing teams from HACKVERSE will get an opportunity to be part of this exclusive experience.
            </p>

            <div className="space-y-3 font-mono text-xs">
              <div className="bg-black/60 p-3 border-l-2 border-green-500 rounded-r">
                <span className="text-green-400 font-bold font-orbitron block mb-1">🏆 TOP 5 TEAMS</span>
                <p className="text-gray-300">🚆 Train Travel Sponsored | 🏨 Stay Sponsored</p>
                <p className="text-[10px] text-gray-500 mt-1">We'll make sure you can focus on building and networking without worrying about travel and accommodation expenses.</p>
              </div>

              <div className="bg-black/60 p-3 border-l-2 border-yellow-500 rounded-r">
                <span className="text-yellow-500 font-bold font-orbitron block mb-1">🎯 REMAINING SELECTED TEAMS</span>
                <p className="text-gray-300">🎟️ Up to 50% Support Benefits on Travel & Stay Arrangements through our partner ecosystem.</p>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 my-4" />

          <div className="border border-blue-500/20 bg-blue-500/5 p-5 rounded-lg">
            <h4 className="text-sm font-orbitron font-bold text-[#00F0FF] mb-3 flex items-center gap-2">
              💼 INTERNSHIP OPPORTUNITIES
            </h4>
            <p className="text-xs text-gray-400">
              As promised from Day 1... Every participant remains eligible for internship opportunities.
            </p>
            <p className="text-xs text-gray-400 mt-2">
              After HACKVERSE, we will be conducting a dedicated Internship Drive Session where participants will get opportunities to interact with hiring partners, showcase their skills, and explore internship openings.
            </p>
          </div>

          <div className="border-t border-white/10 my-4" />

          <div className="space-y-3">
            <h4 className="text-sm font-orbitron font-bold text-white flex items-center gap-2">
              🔥 So what's next?
            </h4>
            <ul className="space-y-1 text-xs text-gray-400 font-mono list-disc list-inside pl-2">
              <li>Build your project.</li>
              <li>Improve your prototype.</li>
              <li>Use your AI credits.</li>
              <li>Prepare for submission.</li>
              <li>And get ready to compete with some of the best builders in the community.</li>
            </ul>
          </div>

          <p className="text-[#00F0FF] font-bold">
            This isn't a setback. This is an upgrade. 🚀
          </p>
          <p>
            HACKVERSE is going bigger, broader, and more accessible than ever before. Let's build something legendary together. 😈⚡🔥
          </p>

          <p className="text-right text-gray-400 font-orbitron font-bold text-xs mt-6">
            — Team HACKVERSE <span className="text-[#00F0FF]">💙</span>
          </p>
        </div>
      )
    }
  ];

  return (
    <section className="py-24 px-6 relative bg-black/60 overflow-hidden min-h-screen flex flex-col items-center scanlines">
      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,240,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,240,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      
      <div className="max-w-4xl w-full relative z-10">
        
        {/* Back Link */}
        <div className="mb-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-gray-500 hover:text-[#00F0FF] font-mono text-xs uppercase tracking-widest transition-colors duration-300"
          >
            <ArrowLeft size={14} /> [ RETURN_TO_NEXUS ]
          </Link>
        </div>

        {/* Title */}
        <div className="text-center mb-16">
          <p className="text-[#00F0FF]/60 font-mono text-xs tracking-widest uppercase mb-3">// BROADCAST_CHANNEL</p>
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            data-text="UPDATE PORTAL"
            className="glitch-text text-4xl md:text-6xl font-bold font-orbitron text-white mb-4 tracking-wider uppercase"
          >
            UPDATE PORTAL
          </motion.h2>
          <div className="flex items-center justify-center gap-2 text-gray-400 text-xs md:text-sm font-mono">
            <div className="h-6 w-0.5 bg-[#00F0FF] animate-pulse" />
            <p>Live transmissions, system adjustments, and community announcements.</p>
          </div>
        </div>

        {/* Announcements List */}
        <div className="space-y-12">
          {announcements.map((ann, idx) => (
            <motion.div
              key={ann.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="bg-black/80 border border-white/10 rounded-xl overflow-hidden shadow-2xl relative backdrop-blur-md hover:border-[#00F0FF]/40 transition-all duration-300"
            >
              {/* Header Bar */}
              <div className="bg-white/5 border-b border-white/10 px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#00F0FF]/10 flex items-center justify-center border border-[#00F0FF]/30">
                    <Bell size={16} className="text-[#00F0FF] animate-bounce" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-[#00F0FF] tracking-wider uppercase block">// {ann.tag}</span>
                    <h3 className="text-white font-orbitron font-bold text-sm md:text-base tracking-wide mt-0.5">
                      {ann.subtitle}
                    </h3>
                  </div>
                </div>
                
                {/* Date & Time */}
                <div className="flex items-center gap-4 text-[11px] font-mono text-gray-400 bg-black/40 px-3 py-1.5 rounded border border-white/5 self-start sm:self-auto">
                  <span className="flex items-center gap-1">
                    <Calendar size={12} className="text-[#00F0FF]" /> {ann.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={12} className="text-neon-purple" /> {ann.time}
                  </span>
                </div>
              </div>

              {/* Main Content Body */}
              <div className="p-6 md:p-8">
                <div className="mb-6 pb-4 border-b border-white/5">
                  <h2 className="text-lg md:text-xl font-orbitron font-bold text-white tracking-wide">
                    {ann.title}
                  </h2>
                </div>
                {ann.content}
              </div>

              {/* Technical scan line decoration */}
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#00F0FF] to-transparent opacity-60" />
            </motion.div>
          ))}
        </div>

        {/* Quick links related to the announcement */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-12 p-6 bg-black/40 border border-white/5 rounded-xl font-mono text-xs text-center space-y-4"
        >
          <p className="text-gray-400">Need to cancel your travel booking or check refund details?</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/registration"
              className="text-[#00F0FF] hover:underline flex items-center gap-1 transition-all"
            >
              Go to Refund Claims Page <ChevronRight size={14} />
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Updates;
