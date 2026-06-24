import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Users, AlertTriangle, Phone, Mail, ArrowLeft, ExternalLink, 
  HelpCircle, CheckCircle2, ShieldAlert, Award, FileText, 
  Loader2, Radio, CheckSquare, Square, ClipboardCheck, Terminal
} from "lucide-react";

// --- CONFIGURATION ---
const GOOGLE_FORM_ACTION_URL = "https://docs.google.com/forms/d/e/1FAIpQLSfJsB3vTEKOliPMZcILT31KKqLZKOiTCcktmdMcywyrgRa3-A/formResponse";
const CONTACT_PHONE = "+91 9967053816";
const WHATSAPP_COMMUNITY_URL = "https://chat.whatsapp.com/C2eigV4u5Yw44WngA0Kjfi";

const RSVP = () => {
  // Form state
  const [teamName, setTeamName] = useState("");
  const [leaderName, setLeaderName] = useState("");
  const [leaderEmail, setLeaderEmail] = useState("");
  const [leaderMobile, setLeaderMobile] = useState("");
  
  const [member2Name, setMember2Name] = useState("");
  const [member3Name, setMember3Name] = useState("");
  const [member4Name, setMember4Name] = useState("");

  const [participate, setParticipate] = useState(""); // "Yes, our team will participate.", "No, our team will not participate."
  
  // Conditional fields (only if participate is Yes)
  const [startedWork, setStartedWork] = useState(""); // "Yes", "No"
  const [projectStatus, setProjectStatus] = useState(""); // "Idea Stage", "Research Stage", "Prototype Ready", "MVP Ready", "Working Product"
  const [projectDomain, setProjectDomain] = useState(""); 
  const [joinedWhatsApp, setJoinedWhatsApp] = useState(""); // "Yes", "No"
  const [receivingEmails, setReceivingEmails] = useState(""); // "Yes", "No"
  
  // Static inputs
  const [internships, setInternships] = useState(""); // "Yes", "No"
  const [futureUpdates, setFutureUpdates] = useState(""); // "Yes", "No"

  // Checkboxes (I confirm that:)
  const [confirmations, setConfirmations] = useState({
    leader: false,
    accurate: false,
    informed: false,
    finalRsvp: false
  });

  // UI state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [terminalLogs, setTerminalLogs] = useState([]);
  const [logsInterval, setLogsInterval] = useState(null);

  const iframeRef = useRef(null);
  const submitAttempts = useRef(0);

  // Auto scroll terminal log console
  const consoleBottomRef = useRef(null);
  useEffect(() => {
    if (consoleBottomRef.current) {
      consoleBottomRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [terminalLogs]);

  // Log message generator for terminal submission animation
  const startTerminalSimulation = () => {
    setIsSubmitting(true);
    setTerminalLogs([
      "INITIALIZING SECURE PROTOCOL [RSVP-2026]...",
      "STABLIZING QUANTUM LINK TO HACKVERSE HOST...",
    ]);

    const logPhrases = [
      "RESOLVING TARGET PORTAL: google.forms.response-cell",
      "ESTABLISHING HOST SHAKEHAND... OK",
      "DECRYPTING SECURITY TOKEN... SECURE",
      "ENCRYPTING PAYLOAD WITH QUANTUM KEYS...",
      "MAPPING FIELDS FOR INJECTION...",
      "TEAM CREDENTIAL SIGNATURE INJECTED",
      "INJECTING MEMBER STRUCTURE DETAILS...",
      "TRANSMITTING RSVP STATUS PACKETS...",
      "COMMITTING PARIPANTS TO EVENT DATABASE...",
      "SYSTEM STATUS: DEPLOYMENT STAGE COMPLETED",
      "AWAITING SERVER HANDSHAKE FINALIZATION...",
      "SYNCHRONIZING REIMBURSEMENT PAYMENTS DB...",
      "CREATING UNIQUE SIGNATURE VERIFICATION KEY...",
      "HANDSHAKE SUCCESSFUL! DATA TERMINATED IN CLOUD STORAGE"
    ];

    let currentLogIdx = 0;
    const interval = setInterval(() => {
      if (currentLogIdx < logPhrases.length) {
        setTerminalLogs(prev => [...prev, `[LOG]: ${logPhrases[currentLogIdx]}`]);
        currentLogIdx++;
      } else {
        clearInterval(interval);
      }
    }, 250);
    setLogsInterval(interval);
  };

  useEffect(() => {
    return () => {
      if (logsInterval) clearInterval(logsInterval);
    };
  }, [logsInterval]);

  const handleIframeLoad = () => {
    // iframe triggers onLoad initially as well, so we only handle it if we are submitting
    if (isSubmitting) {
      if (logsInterval) clearInterval(logsInterval);
      setTerminalLogs(prev => [
        ...prev, 
        "[SUCCESS]: ENVELOPE SECURED BY GOOGLE CLOUD SHIELD", 
        "[SUCCESS]: DISPATCH VERIFIED"
      ]);
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitSuccess(true);
      }, 800);
    }
  };

  const handleConfirmChange = (field) => {
    setConfirmations(prev => ({
      ...prev,
      [field]: !prev[field]
    }));
  };

  const validateForm = () => {
    if (!teamName.trim()) return "Team Name is required.";
    if (!leaderName.trim()) return "Team Leader Full Name is required.";
    
    // Email regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!leaderEmail.trim() || !emailRegex.test(leaderEmail)) {
      return "Valid Team Leader Email Address is required.";
    }

    // Phone regex (numbers only, min 10 digits)
    const phoneRegex = /^[0-9\s+-]{10,15}$/;
    if (!leaderMobile.trim() || !phoneRegex.test(leaderMobile.replace(/\s/g, ""))) {
      return "Valid Team Leader Mobile Number is required (Min 10 digits).";
    }

    if (!participate) return "Please indicate if your team will participate.";

    if (participate === "Yes, our team will participate.") {
      if (!startedWork) return "Please indicate if your team has started working on the project.";
      if (!projectStatus) return "Please select your current project status.";
      if (!projectDomain.trim()) return "Project Domain is required.";
      if (!joinedWhatsApp) return "Please confirm if team members joined the WhatsApp community.";
      if (!receivingEmails) return "Please confirm if you are receiving HackVerse emails.";
    }

    if (!internships) return "Please answer the internship opportunity question.";
    if (!futureUpdates) return "Please answer the future updates request question.";

    // Check all confirmations
    if (!confirmations.leader || !confirmations.accurate || !confirmations.informed || !confirmations.finalRsvp) {
      return "You must check all confirmations to verify you are the authorized team leader.";
    }

    return null;
  };

  const handleSubmit = (e) => {
    // If the browser blocks or fails we back it up
    const error = validateForm();
    if (error) {
      e.preventDefault();
      setErrorMessage(error);
      // scroll to error
      window.scrollTo({ top: 150, behavior: "smooth" });
      return;
    }

    setErrorMessage("");
    submitAttempts.current += 1;
    startTerminalSimulation();
    
    // Allow standard submission through HTML form targeted to the hidden iframe
  };

  return (
    <section className="py-24 px-6 relative bg-black/60 overflow-hidden min-h-screen flex flex-col items-center scanlines">
      {/* Decorative Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,240,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,240,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-black to-transparent pointer-events-none z-10" />
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black to-transparent pointer-events-none z-10" />

      {/* Hidden iframe for background submission */}
      <iframe 
        name="hidden_iframe" 
        id="hidden_iframe" 
        ref={iframeRef} 
        onLoad={handleIframeLoad} 
        style={{ display: "none" }}
      />

      <div className="max-w-3xl w-full relative z-10">
        
        {/* Back Link */}
        <div className="mb-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-gray-500 hover:text-neon-blue font-mono text-xs uppercase tracking-widest transition-colors duration-300"
          >
            <ArrowLeft size={14} /> [ RETURN_TO_NEXUS ]
          </Link>
        </div>

        {/* Title */}
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-3 mb-3">
            <ClipboardCheck className="text-neon-blue w-7 h-7 flicker" />
            <h2 className="glitch-text text-3xl md:text-5xl font-orbitron font-black text-gray-200 tracking-wide uppercase">
              FINAL <span className="text-neon-blue">RSVP</span>
            </h2>
          </div>
          <p className="text-gray-400 font-mono text-xs md:text-sm max-w-xl mx-auto leading-relaxed">
            HACKVERSE FINAL RSVP &amp; PARTICIPATION CONFIRMATION PORTAL
          </p>
        </div>

        {/* Info Banner */}
        <div className="mb-8 border border-cyber-red/30 bg-cyber-red/10 p-5 rounded-xl flex items-start gap-4 shadow-[0_0_15px_rgba(255,0,60,0.15)] relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1.5 h-full bg-cyber-red" />
          <AlertTriangle className="text-cyber-red shrink-0 w-6 h-6 animate-pulse" />
          <div className="font-mono text-xs md:text-sm">
            <span className="text-white font-bold block uppercase tracking-wider mb-1">
              🚨 PROTOCOL REQUIREMENT
            </span>
            <p className="text-gray-300 leading-relaxed">
              HackVerse is now completely <span className="text-neon-blue font-bold">ONLINE</span>. 
              Confirm your participation status and submit this RSVP by <span className="text-white font-bold underline">25th June, 12:00 PM</span>. 
              Failing to submit this form before the deadline will result in <span className="text-cyber-red font-bold">automatic withdrawal</span> of your team.
            </p>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {submitSuccess ? (
            /* Success State */
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-black/75 border-2 border-neon-blue/80 rounded-xl p-8 backdrop-blur-md text-center shadow-[0_0_45px_rgba(0,240,255,0.3)] relative overflow-hidden"
              style={{ clipPath: "polygon(15px 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0 100%, 0 15px)" }}
            >
              <div className="absolute top-0 right-0 bg-neon-blue/10 border-l border-b border-neon-blue/30 px-3 py-1 font-mono text-[9px] text-neon-blue">
                SECURE_CONNECTION // ESTABLISHED
              </div>

              <div className="w-20 h-20 rounded-full bg-neon-blue/15 border border-neon-blue/40 flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_rgba(0,240,255,0.25)]">
                <CheckCircle2 className="text-neon-blue w-10 h-10 animate-bounce" />
              </div>

              <h3 className="text-2xl font-orbitron font-bold text-white uppercase tracking-wider mb-4">
                TRANSMISSION SECURED
              </h3>

              <div className="font-mono text-xs text-gray-400 space-y-4 max-w-lg mx-auto bg-black/40 border border-white/5 p-4 rounded mb-8 text-left leading-relaxed">
                <p className="text-center text-neon-purple font-bold">// SECURE RSVP TRANSMISSION DATA</p>
                <div className="grid grid-cols-3 gap-2 border-t border-white/5 pt-2">
                  <span className="text-gray-500 font-bold">TEAM:</span>
                  <span className="col-span-2 text-white">{teamName}</span>
                  
                  <span className="text-gray-500 font-bold">LEADER:</span>
                  <span className="col-span-2 text-white">{leaderName}</span>

                  <span className="text-gray-500 font-bold">STATUS:</span>
                  <span className="col-span-2 text-green-400 font-bold">CONFIRMED (ONLINE BATTLEFIELD)</span>

                  <span className="text-gray-500 font-bold">TIMESTAMP:</span>
                  <span className="col-span-2 text-gray-300">{new Date().toLocaleString()}</span>

                  <span className="text-gray-500 font-bold">TOKEN ID:</span>
                  <span className="col-span-2 text-neon-blue font-bold">HACKV-2026-{Math.floor(100000 + Math.random() * 900000)}</span>
                </div>
              </div>

              <p className="text-gray-300 font-mono text-xs md:text-sm mb-8 leading-relaxed max-w-xl mx-auto">
                Thank you, Commander! Your final RSVP details have been securely logged. A full ₹1000 registration fee refund will be processed to all teams within 15-20 days after 29th June.
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a
                  href={WHATSAPP_COMMUNITY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-green-500 bg-green-500/10 text-green-400 hover:bg-green-500 hover:text-black font-orbitron text-xs font-bold tracking-widest transition-all duration-300 rounded"
                >
                  WHATSAPP COMMUNITY
                </a>
                <Link
                  to="/"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-white/10 bg-white/5 text-gray-300 hover:border-white/30 hover:text-white font-orbitron text-xs font-bold tracking-widest transition-all duration-300 rounded"
                >
                  RETURN TO NEXUS
                </Link>
              </div>
            </motion.div>
          ) : isSubmitting ? (
            /* Submitting / Loading State */
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="bg-black/80 border border-neon-blue/30 rounded-xl p-8 backdrop-blur-md shadow-[0_0_30px_rgba(0,240,255,0.15)] flex flex-col items-center justify-center min-h-[400px] relative"
              style={{ clipPath: "polygon(15px 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0 100%, 0 15px)" }}
            >
              <Loader2 className="text-neon-blue w-12 h-12 animate-spin mb-6" />
              <h3 className="text-lg font-orbitron text-white uppercase tracking-widest mb-6">
                UPLOADING DATA TO CORE DATABASE
              </h3>

              {/* Terminal Emulator */}
              <div className="w-full bg-[#050510] border border-neon-blue/20 rounded p-4 font-mono text-left text-[10px] md:text-xs text-neon-blue h-48 overflow-y-auto flex flex-col justify-start gap-1 scrollbar-hide shadow-inner">
                <div className="flex items-center gap-2 border-b border-neon-blue/20 pb-2 mb-2">
                  <Terminal size={14} className="animate-pulse text-neon-purple" />
                  <span className="text-neon-purple text-[10px] uppercase font-bold">HACKVERSE SECURE UPLOAD MONITOR</span>
                </div>
                {terminalLogs.map((log, idx) => (
                  <div key={idx} className="whitespace-pre-wrap leading-relaxed">
                    {log}
                  </div>
                ))}
                <div ref={consoleBottomRef} />
              </div>
            </motion.div>
          ) : (
            /* Form Input State */
            <motion.form
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              onSubmit={handleSubmit}
              action={GOOGLE_FORM_ACTION_URL}
              method="POST"
              target="hidden_iframe"
              className="space-y-6"
            >
              {/* Error Box */}
              {errorMessage && (
                <div className="border border-cyber-red/50 bg-cyber-red/10 px-4 py-3 rounded-lg text-cyber-red font-mono text-xs md:text-sm flex items-center gap-3 animate-shake">
                  <AlertTriangle className="shrink-0 w-5 h-5" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* SECTION 1: Team & Leader Details */}
              <div className="bg-black/75 border border-white/10 rounded-xl p-6 md:p-8 backdrop-blur-md space-y-5">
                <h3 className="text-md font-orbitron font-bold text-white uppercase tracking-wider border-b border-white/5 pb-3 flex items-center gap-2">
                  <Users size={16} className="text-neon-blue" />
                  01 // TEAM IDENTIFIER
                </h3>

                {/* Team Name */}
                <div className="space-y-2">
                  <label className="block text-xs font-mono text-gray-400 uppercase tracking-widest">
                    Team Name <span className="text-cyber-red">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    name="entry.565512647"
                    value={teamName}
                    onChange={(e) => setTeamName(e.target.value)}
                    placeholder="Enter registered team name"
                    className="w-full bg-black/40 border border-white/10 rounded px-4 py-2.5 text-white font-mono text-xs md:text-sm focus:border-neon-blue focus:outline-none transition-colors"
                  />
                </div>

                {/* Team Leader Name */}
                <div className="space-y-2">
                  <label className="block text-xs font-mono text-gray-400 uppercase tracking-widest">
                    Team Leader Full Name <span className="text-cyber-red">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    name="entry.1342785361"
                    value={leaderName}
                    onChange={(e) => setLeaderName(e.target.value)}
                    placeholder="Enter leader's full name"
                    className="w-full bg-black/40 border border-white/10 rounded px-4 py-2.5 text-white font-mono text-xs md:text-sm focus:border-neon-blue focus:outline-none transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Team Leader Email */}
                  <div className="space-y-2">
                    <label className="block text-xs font-mono text-gray-400 uppercase tracking-widest">
                      Leader Email Address <span className="text-cyber-red">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      name="entry.1267990590"
                      value={leaderEmail}
                      onChange={(e) => setLeaderEmail(e.target.value)}
                      placeholder="e.g. leader@gmail.com"
                      className="w-full bg-black/40 border border-white/10 rounded px-4 py-2.5 text-white font-mono text-xs md:text-sm focus:border-neon-blue focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Team Leader Mobile */}
                  <div className="space-y-2">
                    <label className="block text-xs font-mono text-gray-400 uppercase tracking-widest">
                      Leader WhatsApp Contact Number <span className="text-cyber-red">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      name="entry.2039448966"
                      value={leaderMobile}
                      onChange={(e) => setLeaderMobile(e.target.value)}
                      placeholder="e.g. +91 9876543210"
                      className="w-full bg-black/40 border border-white/10 rounded px-4 py-2.5 text-white font-mono text-xs md:text-sm focus:border-neon-blue focus:outline-none transition-colors"
                    />
                  </div>
                </div>
              </div>

              {/* SECTION 2: Members Names */}
              <div className="bg-black/75 border border-white/10 rounded-xl p-6 md:p-8 backdrop-blur-md space-y-5">
                <h3 className="text-md font-orbitron font-bold text-white uppercase tracking-wider border-b border-white/5 pb-3 flex items-center gap-2">
                  <Users size={16} className="text-neon-purple" />
                  02 // OPERATIVE CREW MEMBERS
                </h3>
                <p className="text-gray-500 font-mono text-[10px] uppercase">
                  // Input member names as filled in original registration (Optional if team is smaller)
                </p>

                <div className="space-y-4">
                  {/* Member 2 */}
                  <div className="space-y-2">
                    <label className="block text-xs font-mono text-gray-400 uppercase tracking-widest">
                      Member 2 Full Name
                    </label>
                    <input
                      type="text"
                      name="entry.1969533357"
                      value={member2Name}
                      onChange={(e) => setMember2Name(e.target.value)}
                      placeholder="Enter second member's name"
                      className="w-full bg-black/40 border border-white/10 rounded px-4 py-2.5 text-white font-mono text-xs md:text-sm focus:border-neon-purple focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Member 3 */}
                  <div className="space-y-2">
                    <label className="block text-xs font-mono text-gray-400 uppercase tracking-widest">
                      Member 3 Full Name
                    </label>
                    <input
                      type="text"
                      name="entry.114289814"
                      value={member3Name}
                      onChange={(e) => setMember3Name(e.target.value)}
                      placeholder="Enter third member's name"
                      className="w-full bg-black/40 border border-white/10 rounded px-4 py-2.5 text-white font-mono text-xs md:text-sm focus:border-neon-purple focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Member 4 */}
                  <div className="space-y-2">
                    <label className="block text-xs font-mono text-gray-400 uppercase tracking-widest">
                      Member 4 Full Name
                    </label>
                    <input
                      type="text"
                      name="entry.754342759"
                      value={member4Name}
                      onChange={(e) => setMember4Name(e.target.value)}
                      placeholder="Enter fourth member's name"
                      className="w-full bg-black/40 border border-white/10 rounded px-4 py-2.5 text-white font-mono text-xs md:text-sm focus:border-neon-purple focus:outline-none transition-colors"
                    />
                  </div>
                </div>
              </div>

              {/* SECTION 3: Participation RSVP */}
              <div className="bg-black/75 border border-white/10 rounded-xl p-6 md:p-8 backdrop-blur-md space-y-6">
                <h3 className="text-md font-orbitron font-bold text-white uppercase tracking-wider border-b border-white/5 pb-3 flex items-center gap-2">
                  <Award size={16} className="text-neon-blue" />
                  03 // PARTICIPATION STATUS
                </h3>

                {/* Will participate */}
                <div className="space-y-3">
                  <label className="block text-xs font-mono text-gray-300 uppercase tracking-widest leading-relaxed">
                    Will your team participate in HACKVERSE on 28 June 2026? <span className="text-cyber-red">*</span>
                  </label>
                  
                  {/* Invisible real inputs for form submission */}
                  <input type="hidden" name="entry.1147008195" value={participate} />

                  <div className="space-y-3">
                    {[
                      { val: "Yes, our team will participate.", label: "YES, our team will participate and battle online! 🚀" },
                      { val: "No, our team will not participate.", label: "NO, our team will not participate and wants to withdraw. 🚫" }
                    ].map(opt => (
                      <button
                        key={opt.val}
                        type="button"
                        onClick={() => setParticipate(opt.val)}
                        className={`w-full text-left font-mono text-xs md:text-sm p-4 rounded border flex items-center gap-3 transition-all cursor-pointer ${
                          participate === opt.val
                            ? "bg-neon-blue/10 border-neon-blue text-neon-blue shadow-[0_0_15px_rgba(0,240,255,0.15)]"
                            : "bg-black/40 border-white/10 text-gray-400 hover:border-white/20 hover:text-white"
                        }`}
                      >
                        <span className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ${
                          participate === opt.val ? "border-neon-blue bg-neon-blue" : "border-gray-500"
                        }`}>
                          {participate === opt.val && <span className="w-1.5 h-1.5 rounded-full bg-black" />}
                        </span>
                        <span>{opt.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* CONDITIONAL SUB-SECTION: IF YES */}
                <AnimatePresence>
                  {participate === "Yes, our team will participate." && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="border-t border-white/5 pt-6 space-y-6 overflow-hidden"
                    >
                      {/* Started working */}
                      <div className="space-y-3">
                        <label className="block text-xs font-mono text-gray-300 uppercase tracking-widest">
                          Has your team started working on the project? <span className="text-cyber-red">*</span>
                        </label>
                        <input type="hidden" name="entry.580213438" value={startedWork} />
                        <div className="flex gap-4">
                          {["Yes", "No"].map(val => (
                            <button
                              key={val}
                              type="button"
                              onClick={() => setStartedWork(val)}
                              className={`flex-1 font-mono text-xs md:text-sm py-3 px-4 rounded border text-center transition-all cursor-pointer ${
                                startedWork === val
                                  ? "bg-neon-blue/10 border-neon-blue text-neon-blue"
                                  : "bg-black/40 border-white/10 text-gray-400 hover:border-white/20"
                              }`}
                            >
                              {val}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Project Status */}
                      <div className="space-y-3">
                        <label className="block text-xs font-mono text-gray-300 uppercase tracking-widest">
                          Current Project Status <span className="text-cyber-red">*</span>
                        </label>
                        <input type="hidden" name="entry.257537744" value={projectStatus} />
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                          {["Idea Stage", "Research Stage", "Prototype Ready", "MVP Ready", "Working Product"].map(val => (
                            <button
                              key={val}
                              type="button"
                              onClick={() => setProjectStatus(val)}
                              className={`font-mono text-xs p-3 rounded border text-center transition-all cursor-pointer ${
                                projectStatus === val
                                  ? "bg-neon-blue/10 border-neon-blue text-neon-blue shadow-[0_0_10px_rgba(0,240,255,0.1)]"
                                  : "bg-black/40 border-white/10 text-gray-400 hover:border-white/20"
                              }`}
                            >
                              {val}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Project Domain */}
                      <div className="space-y-2">
                        <label className="block text-xs font-mono text-gray-300 uppercase tracking-widest">
                          Project Domain <span className="text-cyber-red">*</span>
                        </label>
                        <input
                          type="text"
                          required={participate === "Yes, our team will participate."}
                          name="entry.927146604"
                          value={projectDomain}
                          onChange={(e) => setProjectDomain(e.target.value)}
                          placeholder="e.g. Artificial Intelligence, Healthcare Tech, FinTech"
                          className="w-full bg-black/40 border border-white/10 rounded px-4 py-2.5 text-white font-mono text-xs md:text-sm focus:border-neon-blue focus:outline-none transition-colors"
                        />
                      </div>

                      {/* WhatsApp Community */}
                      <div className="space-y-3">
                        <label className="block text-xs font-mono text-gray-300 uppercase tracking-widest">
                          Have all team members joined the official WhatsApp Community? <span className="text-cyber-red">*</span>
                        </label>
                        <input type="hidden" name="entry.1484838748" value={joinedWhatsApp} />
                        <div className="flex gap-4">
                          {["Yes", "No"].map(val => (
                            <button
                              key={val}
                              type="button"
                              onClick={() => setJoinedWhatsApp(val)}
                              className={`flex-1 font-mono text-xs md:text-sm py-3 px-4 rounded border text-center transition-all cursor-pointer ${
                                joinedWhatsApp === val
                                  ? "bg-neon-blue/10 border-neon-blue text-neon-blue"
                                  : "bg-black/40 border-white/10 text-gray-400 hover:border-white/20"
                              }`}
                            >
                              {val}
                            </button>
                          ))}
                        </div>
                        {joinedWhatsApp === "No" && (
                          <div className="text-[10px] text-neon-purple font-mono">
                            👉 You can join the Whatsapp Community here: <a href={WHATSAPP_COMMUNITY_URL} target="_blank" rel="noopener noreferrer" className="underline font-bold text-neon-blue">{WHATSAPP_COMMUNITY_URL}</a>
                          </div>
                        )}
                      </div>

                      {/* Receiving Emails */}
                      <div className="space-y-3">
                        <label className="block text-xs font-mono text-gray-300 uppercase tracking-widest">
                          Are you receiving emails from HACKVERSE? <span className="text-cyber-red">*</span>
                        </label>
                        <input type="hidden" name="entry.1620513225" value={receivingEmails} />
                        <div className="flex gap-4">
                          {["Yes", "No"].map(val => (
                            <button
                              key={val}
                              type="button"
                              onClick={() => setReceivingEmails(val)}
                              className={`flex-1 font-mono text-xs md:text-sm py-3 px-4 rounded border text-center transition-all cursor-pointer ${
                                receivingEmails === val
                                  ? "bg-neon-blue/10 border-neon-blue text-neon-blue"
                                  : "bg-black/40 border-white/10 text-gray-400 hover:border-white/20"
                              }`}
                            >
                              {val}
                            </button>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* SECTION 4: Feedback & Internships */}
              <div className="bg-black/75 border border-white/10 rounded-xl p-6 md:p-8 backdrop-blur-md space-y-6">
                <h3 className="text-md font-orbitron font-bold text-white uppercase tracking-wider border-b border-white/5 pb-3 flex items-center gap-2">
                  <FileText size={16} className="text-neon-purple" />
                  04 // OPPORTUNITY BRIEFING
                </h3>

                {/* Internship opportunities */}
                <div className="space-y-3">
                  <label className="block text-xs font-mono text-gray-300 uppercase tracking-widest leading-relaxed">
                    Would your team like to participate in post-hackathon internship and career opportunities? <span className="text-cyber-red">*</span>
                  </label>
                  <input type="hidden" name="entry.1064450896" value={internships} />
                  <div className="flex gap-4">
                    {["Yes", "No"].map(val => (
                      <button
                        key={val}
                        type="button"
                        onClick={() => setInternships(val)}
                        className={`flex-1 font-mono text-xs md:text-sm py-3 px-4 rounded border text-center transition-all cursor-pointer ${
                          internships === val
                            ? "bg-neon-purple/10 border-neon-purple text-neon-purple"
                            : "bg-black/40 border-white/10 text-gray-400 hover:border-white/20"
                        }`}
                      >
                        {val}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Future updates */}
                <div className="space-y-3">
                  <label className="block text-xs font-mono text-gray-300 uppercase tracking-widest leading-relaxed">
                    Would you like to receive updates regarding future hackathons, workshops, events, and community activities? <span className="text-cyber-red">*</span>
                  </label>
                  <input type="hidden" name="entry.1622541752" value={futureUpdates} />
                  <div className="flex gap-4">
                    {["Yes", "No"].map(val => (
                      <button
                        key={val}
                        type="button"
                        onClick={() => setFutureUpdates(val)}
                        className={`flex-1 font-mono text-xs md:text-sm py-3 px-4 rounded border text-center transition-all cursor-pointer ${
                          futureUpdates === val
                            ? "bg-neon-purple/10 border-neon-purple text-neon-purple"
                            : "bg-black/40 border-white/10 text-gray-400 hover:border-white/20"
                        }`}
                      >
                        {val}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* SECTION 5: Confirmations */}
              <div className="bg-black/75 border border-white/10 rounded-xl p-6 md:p-8 backdrop-blur-md space-y-6">
                <h3 className="text-md font-orbitron font-bold text-white uppercase tracking-wider border-b border-white/5 pb-3 flex items-center gap-2">
                  <ShieldAlert size={16} className="text-cyber-red" />
                  05 // COMMAND VERIFICATION
                </h3>

                {/* Confirm statements checkboxes */}
                <div className="space-y-4">
                  {[
                    { key: "leader", text: "I confirm that I am the Team Leader of this registered team." },
                    { key: "accurate", text: "I confirm that all information provided in this form is accurate." },
                    { key: "informed", text: "I confirm that I have informed all team members regarding HACKVERSE online protocols." },
                    { key: "finalRsvp", text: "I understand that this submission will be considered as our team's final RSVP and participation status, and failing to confirm details truthfully will result in revocation of our team's access keys." }
                  ].map(item => (
                    <button
                      key={item.key}
                      type="button"
                      onClick={() => handleConfirmChange(item.key)}
                      className="w-full text-left font-mono text-xs flex items-start gap-3 text-gray-300 hover:text-white transition-colors cursor-pointer select-none"
                    >
                      <span className="shrink-0 mt-0.5 text-neon-blue">
                        {confirmations[item.key] ? (
                          <CheckSquare size={16} className="text-neon-blue" />
                        ) : (
                          <Square size={16} className="text-gray-500" />
                        )}
                      </span>
                      <span>{item.text}</span>
                    </button>
                  ))}
                  
                  {/* Google Forms checkbox requires actual selection names to post to Google Form */}
                  {/* Google Form checkbox field expects all selected options to be posted as multiple parameters under the same entry.1335686960 */}
                  {confirmations.leader && <input type="hidden" name="entry.1335686960" value="I am the Team Leader." />}
                  {confirmations.accurate && <input type="hidden" name="entry.1335686960" value="All information provided in this form is accurate." />}
                  {confirmations.informed && <input type="hidden" name="entry.1335686960" value="I have informed all team members regarding HACKVERSE." />}
                  {confirmations.finalRsvp && <input type="hidden" name="entry.1335686960" value="I understand that this submission will be considered as our team's final RSVP and participation status." />}
                </div>
              </div>

              {/* Submit CTA */}
              <div className="text-center bg-black/40 border border-white/10 rounded-xl p-8 backdrop-blur-sm">
                <p className="text-gray-400 font-mono text-xs md:text-sm mb-6 leading-relaxed">
                  Verify all entries. Once dispatched, these coordinates will sync with the event core ledger.
                </p>

                <button
                  type="submit"
                  className="group relative inline-flex items-center gap-3 px-10 py-4 bg-neon-blue/10 border-2 border-neon-blue text-neon-blue font-orbitron font-black tracking-[0.2em] hover:bg-neon-blue hover:text-black hover:shadow-[0_0_40px_rgba(0,240,255,0.5)] transition-all duration-300 uppercase rounded cursor-pointer select-none"
                  style={{ clipPath: "polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)" }}
                >
                  <span>SUBMIT FINAL RSVP</span>
                  <Send size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>

                <p className="text-cyber-red/80 font-mono text-[9px] mt-6 tracking-wide italic">
                  &gt; Warning: Revocation of credentials occurs automatically on 25 June 12:00 PM for non-responsive nodes.
                </p>
              </div>
            </motion.form>
          )}
        </AnimatePresence>

        {/* Footer Support Info */}
        <div className="mt-12 text-center text-gray-500 font-mono text-xs">
          <span>Need help? Contact Sector Support Cell: </span>
          <a href={`tel:${CONTACT_PHONE}`} className="text-neon-blue hover:underline">
            {CONTACT_PHONE} (Yash Mohite)
          </a>
        </div>

      </div>
    </section>
  );
};

export default RSVP;
