import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Bell, Calendar, Clock, AlertTriangle, Monitor, Award, Briefcase, ChevronRight, Check, Sparkles, Trophy, ShieldAlert, Upload, Users } from "lucide-react";

const Updates = () => {
  const announcements = [
    {
      id: "announcement-2",
      date: "27 June 2026",
      time: "9:10 pm",
      title: "🚀 HACKVERSE 2026 – Official Virtual Hackathon Timeline",
      subtitle: "Official Hackathon Schedule & Guidelines",
      tag: "TIMELINE PROTOCOL",
      content: (
        <div className="space-y-8 text-gray-300 font-mono text-xs md:text-sm leading-relaxed">
          {/* Header Stats */}
          <div className="border border-[#00F0FF]/30 bg-[#00F0FF]/5 p-5 rounded-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[radial-gradient(circle,rgba(0,240,255,0.1),transparent_70%)] pointer-events-none" />
            <h4 className="text-xs font-orbitron font-bold text-[#00F0FF] mb-4 flex items-center gap-2">
              📊 EVENT SPECIFICATIONS
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
              <div className="bg-black/40 p-3 rounded border border-white/5 flex items-center gap-3">
                <Calendar size={18} className="text-[#00F0FF] shrink-0" />
                <div>
                  <span className="text-gray-500 block text-[10px]">DATE</span>
                  <span className="text-white font-bold font-orbitron">28 June 2026 (Sunday)</span>
                </div>
              </div>
              <div className="bg-black/40 p-3 rounded border border-white/5 flex items-center gap-3">
                <Monitor size={18} className="text-neon-purple shrink-0" />
                <div>
                  <span className="text-gray-500 block text-[10px]">MODE</span>
                  <span className="text-white font-bold font-orbitron text-[#00F0FF]">Virtual (Online)</span>
                </div>
              </div>
              <div className="bg-black/40 p-3 rounded border border-white/5 flex items-center gap-3">
                <Award size={18} className="text-green-400 shrink-0" />
                <div>
                  <span className="text-gray-500 block text-[10px]">PRIZE POOL</span>
                  <span className="text-white font-bold font-orbitron text-green-400">₹1,00,000+ (Cash + Kind)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Timeline Section */}
          <div className="space-y-6 relative before:absolute before:inset-0 before:left-[15px] before:right-auto before:w-[2px] before:bg-white/5">
            
            {/* Timeline Item 1: Challenge Reveal */}
            <div className="relative pl-10 group">
              <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-black border-2 border-[#00F0FF] flex items-center justify-center z-10 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_8px_rgba(0,240,255,0.5)]">
                <Sparkles size={14} className="text-[#00F0FF]" />
              </div>
              <div className="bg-white/5 border border-white/10 p-5 rounded-lg group-hover:border-[#00F0FF]/30 transition-all duration-300">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-bold text-[#00F0FF] bg-[#00F0FF]/10 px-2 py-0.5 rounded font-orbitron">3:00 AM IST</span>
                  <span className="text-white font-orbitron font-bold">Challenge Reveal</span>
                </div>
                <p className="text-xs text-gray-400">The official HACKVERSE challenge will be released.</p>
                <div className="mt-3 flex items-start gap-2 text-xs text-[#00F0FF]/80 bg-[#00F0FF]/5 p-3 rounded border border-[#00F0FF]/10">
                  <span className="shrink-0">📌</span>
                  <p>All registered teams can access the challenge through the official communication channels.</p>
                </div>
              </div>
            </div>

            {/* Timeline Item 2: Build Phase */}
            <div className="relative pl-10 group">
              <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-black border-2 border-neon-purple flex items-center justify-center z-10 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_8px_rgba(186,85,211,0.5)]">
                <Clock size={14} className="text-neon-purple" />
              </div>
              <div className="bg-white/5 border border-white/10 p-5 rounded-lg group-hover:border-neon-purple/30 transition-all duration-300">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-bold text-neon-purple bg-neon-purple/10 px-2 py-0.5 rounded font-orbitron">3:00 AM – 2:00 PM IST</span>
                  <span className="text-white font-orbitron font-bold">Build Phase (11 Hours)</span>
                </div>
                <p className="text-xs text-gray-400 mb-4">This is your dedicated development window. During this time, teams should:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
                  {[
                    "Build and complete the assigned challenge",
                    "Improve and finalize their solution",
                    "Push all code to GitHub",
                    "Test the application thoroughly",
                    "Prepare the final presentation (PPT)",
                    "Record a demo video (optional but recommended)"
                  ].map((task, tIdx) => (
                    <div key={tIdx} className="flex items-center gap-2 text-xs bg-black/30 p-2 rounded border border-white/5">
                      <Check size={12} className="text-green-400 shrink-0" />
                      <span className="text-gray-300">{task}</span>
                    </div>
                  ))}
                </div>
                <div className="flex items-start gap-2 text-xs text-yellow-500 bg-yellow-500/5 p-3 rounded border border-yellow-500/10">
                  <AlertTriangle size={14} className="text-yellow-500 shrink-0" />
                  <p>Teams are free to manage their own schedule during the build phase, but all work must be completed before the submission deadline.</p>
                </div>
              </div>
            </div>

            {/* Timeline Item 3: Development Ends */}
            <div className="relative pl-10 group">
              <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-black border-2 border-cyber-red flex items-center justify-center z-10 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_8px_rgba(255,0,60,0.5)]">
                <ShieldAlert size={14} className="text-cyber-red" />
              </div>
              <div className="bg-white/5 border border-white/10 p-5 rounded-lg group-hover:border-cyber-red/30 transition-all duration-300">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-bold text-cyber-red bg-cyber-red/10 px-2 py-0.5 rounded font-orbitron">2:00 PM IST</span>
                  <span className="text-white font-orbitron font-bold">Development Ends</span>
                </div>
                <div className="flex items-start gap-3 text-xs bg-cyber-red/5 p-3 rounded border border-cyber-red/20 text-gray-300">
                  <span className="text-cyber-red text-base font-bold shrink-0">🚫</span>
                  <div>
                    <strong className="text-white block mb-1">No further development is recommended after this time.</strong>
                    <p className="text-gray-400">Please make sure your project is ready for submission.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Timeline Item 4: Final Project Submission */}
            <div className="relative pl-10 group">
              <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-black border-2 border-yellow-500 flex items-center justify-center z-10 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_8px_rgba(234,179,8,0.5)]">
                <Upload size={14} className="text-yellow-500" />
              </div>
              <div className="bg-white/5 border border-white/10 p-5 rounded-lg group-hover:border-yellow-500/30 transition-all duration-300">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-bold text-yellow-500 bg-yellow-500/10 px-2 py-0.5 rounded font-orbitron">2:15 PM IST</span>
                  <span className="text-white font-orbitron font-bold">Final Project Submission</span>
                </div>
                <p className="text-xs text-gray-400 mb-3">Every Team Leader must submit the Final Submission Form. The submission must include:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-3">
                  {[
                    "GitHub Repository Link",
                    "Project Presentation (PPT/PDF)",
                    "Live Demo / Deployment Link (if available)",
                    "Demo Video (Optional)",
                    "Project Description",
                    "Technology Stack Used"
                  ].map((sub, sIdx) => (
                    <div key={sIdx} className="flex items-center gap-2 text-xs bg-black/30 p-2 rounded border border-white/5">
                      <span className="text-[#00F0FF] shrink-0">📌</span>
                      <span className="text-gray-300">{sub}</span>
                    </div>
                  ))}
                </div>
                <div className="flex items-start gap-2 text-xs text-cyber-red bg-cyber-red/5 p-3 rounded border border-cyber-red/20 font-bold">
                  <AlertTriangle size={14} className="text-cyber-red shrink-0" />
                  <p>Late submissions will NOT be accepted.</p>
                </div>
              </div>
            </div>

            {/* Timeline Item 5: Final Judging Round Begins */}
            <div className="relative pl-10 group">
              <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-black border-2 border-emerald-500 flex items-center justify-center z-10 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_8px_rgba(16,185,129,0.5)]">
                <Users size={14} className="text-emerald-500" />
              </div>
              <div className="bg-white/5 border border-white/10 p-5 rounded-lg group-hover:border-emerald-500/30 transition-all duration-300">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-bold text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded font-orbitron">3:00 PM IST</span>
                  <span className="text-white font-orbitron font-bold">Final Judging Round Begins</span>
                </div>
                <p className="text-xs text-gray-400 mb-4">Each team will receive approximately <strong className="text-white">6 minutes</strong>.</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  {/* Presentation Format */}
                  <div className="bg-black/40 p-3 rounded border border-white/5">
                    <h5 className="text-[11px] font-orbitron font-bold text-emerald-400 mb-2 uppercase tracking-wider">// Presentation Format</h5>
                    <div className="space-y-2 text-xs">
                      <div className="flex items-start gap-2">
                        <span className="text-emerald-400 font-bold shrink-0">🎤 4 Min:</span>
                        <span className="text-gray-300">Problem Statement, Solution Overview, Live Demo</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-neon-purple font-bold shrink-0">❓ 2 Min:</span>
                        <span className="text-gray-300">Judges' Q&A, Technical Discussion, Feedback</span>
                      </div>
                    </div>
                  </div>

                  {/* Evaluation Criteria */}
                  <div className="bg-black/40 p-3 rounded border border-white/5">
                    <h5 className="text-[11px] font-orbitron font-bold text-emerald-400 mb-2 uppercase tracking-wider">// Evaluation Criteria</h5>
                    <div className="grid grid-cols-2 gap-x-2 gap-y-1 text-[10px] text-gray-400">
                      <span>🏆 Innovation</span>
                      <span>⚙️ Technical Impl.</span>
                      <span>🎨 UI/UX Design</span>
                      <span>🤖 AI Integration</span>
                      <span>📈 Scalability</span>
                      <span>🎙️ Presentation</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Timeline Item 6: Winner Announcement */}
            <div className="relative pl-10 group">
              <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-black border-2 border-yellow-400 flex items-center justify-center z-10 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_8px_rgba(250,204,21,0.5)]">
                <Trophy size={14} className="text-yellow-400" />
              </div>
              <div className="bg-white/5 border border-white/10 p-5 rounded-lg group-hover:border-yellow-400/30 transition-all duration-300">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-bold text-yellow-400 bg-yellow-400/10 px-2 py-0.5 rounded font-orbitron">12:00 AM IST (29 June)</span>
                  <span className="text-white font-orbitron font-bold">Winner Announcement</span>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-3">
                  {[
                    "🏆 Top Teams",
                    "🥇 Prize Details",
                    "🎖️ Certificates",
                    "💼 Internships",
                    "🎉 Closing Ceremony"
                  ].map((w, wIdx) => (
                    <div key={wIdx} className="bg-black/40 p-2 rounded border border-white/5 text-[11px] text-gray-300 text-center font-bold">
                      {w}
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* Guidelines Section */}
          <div className="border border-yellow-500/20 bg-yellow-500/5 p-5 rounded-lg">
            <h4 className="text-sm font-orbitron font-bold text-yellow-500 mb-4 flex items-center gap-2">
              📢 IMPORTANT GUIDELINES
            </h4>
            <ul className="space-y-3 text-xs text-gray-400">
              <li className="flex items-start gap-2">
                <span className="text-yellow-500 shrink-0">•</span>
                <p>All teams must submit their final project before <strong className="text-white">2:15 PM IST</strong>.</p>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-500 shrink-0">•</span>
                <p>Only the submitted GitHub repository and project links will be considered during evaluation.</p>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-500 shrink-0">•</span>
                <p>Any code or project changes made after the submission deadline may not be considered by the judges.</p>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-500 shrink-0">•</span>
                <p>Team Leaders are responsible for submitting the final project on behalf of their team.</p>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-500 shrink-0">•</span>
                <p>Keep your GitHub repository, presentation, and demo ready before the submission deadline to avoid last-minute issues.</p>
              </li>
            </ul>
          </div>

          {/* Outro CTA */}
          <div className="text-center py-4 bg-white/5 rounded-lg border border-[#00F0FF]/20 relative overflow-hidden shadow-[0_0_15px_rgba(0,240,255,0.05)]">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00F0FF]/5 to-transparent animate-pulse" />
            <h3 className="text-[#00F0FF] font-orbitron font-bold text-xs md:text-sm tracking-widest uppercase">
              🚀 Build. Innovate. Impress the Judges. See You at HACKVERSE 2026!
            </h3>
          </div>
        </div>
      )
    },
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
