import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useSearchParams } from "react-router-dom";
import { Users, AlertTriangle, Phone, Mail, ArrowLeft, ExternalLink, HelpCircle, XCircle, CreditCard, ShieldAlert, Award, FileText, CheckCircle2, ClipboardCheck } from "lucide-react";

// --- CONFIGURATION ---
const GOOGLE_FORM_URL = "https://forms.gle/aE3Qa2pcsdfR19sD8"; // ACTUAL GOOGLE FORM LINK
const CANCELLATION_FORM_URL = "https://forms.gle/oSJNPF8UGxkE6np97";
const TRAVEL_REFUND_FORM_URL = "https://forms.gle/o77smVkaxhpt917x7";
const SUBMISSION_FORM_URL = "https://forms.gle/UESRQiKAeM1kz8Vg6";
const RSVP_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSfJsB3vTEKOliPMZcILT31KKqLZKOiTCcktmdMcywyrgRa3-A/viewform?usp=dialog";
const CONTACT_PHONE = "+91 9967053816";
const CONTACT_EMAIL = "contact@hackverse.dev"; // Placeholder email

const tabs = [
  { id: "rsvp", label: "01 // FINAL RSVP", icon: <ClipboardCheck size={16} /> },
  { id: "register", label: "02 // REGISTER & REFUND INFO", icon: <Users size={16} /> },
  { id: "cancellation", label: "03 // PARTICIPATION CANCEL", icon: <XCircle size={16} /> },
  { id: "travel", label: "04 // TRAVEL & STAY LOSS", icon: <CreditCard size={16} /> },
  { id: "submission", label: "05 // PROTOTYPE SUBMIT", icon: <FileText size={16} /> }
];

const Registration = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const tabParam = searchParams.get("tab");

  const defaultTab = ["rsvp", "register", "cancellation", "travel", "submission"].includes(tabParam) 
    ? tabParam 
    : "rsvp";

  const [activeTab, setActiveTab] = useState(defaultTab);

  useEffect(() => {
    if (tabParam && ["rsvp", "register", "cancellation", "travel", "submission"].includes(tabParam)) {
      setActiveTab(tabParam);
    }
  }, [tabParam]);

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    setSearchParams({ tab: tabId });
  };

  return (
    <section className="py-24 px-6 relative bg-black/60 overflow-hidden min-h-screen flex flex-col items-center scanlines">
      {/* Decorative Cyber Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(217,70,239,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(217,70,239,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-black to-transparent pointer-events-none z-10" />
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black to-transparent pointer-events-none z-10" />

      <div className="max-w-5xl w-full relative z-10">
        
        {/* Back Link */}
        <div className="mb-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-gray-500 hover:text-neon-purple font-mono text-xs uppercase tracking-widest transition-colors duration-300"
          >
            <ArrowLeft size={14} /> [ RETURN_TO_NEXUS ]
          </Link>
        </div>

        {/* Title & Description */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <AlertTriangle className="text-neon-purple w-6 h-6 flicker" />
            <h2
              data-text="CONTACT & SERVICES"
              className="glitch-text text-3xl md:text-5xl font-orbitron font-black text-gray-200 tracking-wide uppercase"
            >
              OPERATIONS <span className="text-neon-purple">&</span> SERVICE CELL
            </h2>
          </motion.div>
          <p className="text-gray-400 font-mono text-xs md:text-sm max-w-2xl mx-auto leading-relaxed">
            Ready to secure your credentials, submit cancellations, or request transit reimbursements for <span className="text-neon-purple font-bold">HackVerse 2026</span>? Activate the appropriate protocol below.
          </p>
        </div>

        {/* Cyber Tab Switcher */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12 border-b border-white/10 pb-6 relative z-10">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabChange(tab.id)}
              className={`relative px-5 py-3 font-orbitron font-bold text-xs tracking-wider transition-all duration-300 flex items-center justify-center gap-2 border cursor-pointer select-none outline-none ${
                activeTab === tab.id
                  ? "bg-neon-purple/10 border-neon-purple text-neon-purple shadow-[0_0_20px_rgba(217,70,239,0.25)]"
                  : "bg-black/40 border-white/10 text-gray-400 hover:text-white hover:border-white/30"
              }`}
              style={{ clipPath: "polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)" }}
            >
              {tab.icon}
              {tab.label}
              {activeTab === tab.id && (
                <motion.div
                  layoutId="activeTabUnderline"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-neon-purple"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Tab Content Panels */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {activeTab === "rsvp" && (
              <>
                {/* Info Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                  
                  {/* Card 1: RSVP Details */}
                  <div className="bg-black/75 border border-neon-purple/20 rounded-xl p-8 relative overflow-hidden backdrop-blur-md hover:border-neon-purple/60 hover:shadow-[0_0_30px_rgba(217,70,239,0.15)] transition-all duration-300">
                    <div className="absolute top-0 right-0 p-4 opacity-5">
                      <ClipboardCheck size={80} className="text-neon-purple" />
                    </div>
                    
                    <h3 className="text-xl font-orbitron font-bold text-white mb-6 uppercase tracking-wider flex items-center gap-3">
                      <ClipboardCheck size={20} className="text-neon-purple" /> RSVP & Confirmation Details
                    </h3>

                    <ul className="space-y-6 font-mono text-xs md:text-sm text-gray-300">
                      <li className="flex items-start gap-4 border-l-2 border-[#00F0FF] pl-3">
                        <span className="p-2 rounded bg-[#00F0FF]/10 text-[#00F0FF] shrink-0">⚡</span>
                        <div>
                          <strong className="text-[#00F0FF]">Online Transition:</strong>
                          <p className="text-gray-400 mt-1">As HackVerse is now completely ONLINE, you must submit this final RSVP form to confirm your participation.</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-4 border-l-2 border-cyber-red pl-3">
                        <span className="p-2 rounded bg-cyber-red/10 text-cyber-red shrink-0">⏰</span>
                        <div>
                          <strong className="text-cyber-red">RSVP Status:</strong>
                          <p className="text-gray-200 mt-1 font-bold">Closed on 25th June, 12:00 PM. If your team missed this deadline, please contact the help desk immediately.</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-4">
                        <span className="p-2 rounded bg-neon-purple/10 text-neon-purple shrink-0">💸</span>
                        <div>
                          <strong className="text-white">Fee Refund:</strong>
                          <p className="text-gray-400 mt-1">A full refund of ₹1000 will be automatically returned to all registered teams within 15 – 20 days after 29th June 2026.</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-4">
                        <span className="p-2 rounded bg-neon-purple/10 text-neon-purple shrink-0">👥</span>
                        <div>
                          <strong className="text-white">Form Submission:</strong>
                          <p className="text-gray-400 mt-1">Must be submitted by the Team Leader only. One submission per team.</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-4">
                        <span className="p-2 rounded bg-neon-purple/10 text-neon-purple shrink-0">🤖</span>
                        <div>
                          <strong className="text-white">Community Node:</strong>
                          <p className="text-gray-400 mt-1">Make sure all team members have joined the official Discord & WhatsApp groups for evaluation briefing.</p>
                        </div>
                      </li>
                    </ul>
                  </div>

                  {/* Card 2: Need Help Desk */}
                  <div className="bg-black/75 border border-neon-blue/20 rounded-xl p-8 relative overflow-hidden backdrop-blur-md hover:border-neon-blue/60 hover:shadow-[0_0_30px_rgba(0,240,255,0.15)] transition-all duration-300 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-orbitron font-bold text-white mb-6 uppercase tracking-wider flex items-center gap-3">
                        <HelpCircle size={20} className="text-neon-blue" /> Need Help?
                      </h3>
                      <p className="text-gray-400 font-mono text-xs md:text-sm leading-relaxed mb-6">
                        Contact Team HackVerse support cell for any RSVP issues or to query your team's registration status.
                      </p>
                    </div>

                    <div className="space-y-4 font-mono text-xs md:text-sm">
                      <a
                        href={`tel:${CONTACT_PHONE}`}
                        className="flex items-center gap-3 text-gray-300 hover:text-neon-blue transition-colors group"
                      >
                        <Phone size={16} className="text-neon-blue group-hover:scale-110 transition-transform" />
                        <span>{CONTACT_PHONE} (Yash Mohite)</span>
                      </a>
                      <div className="flex items-center gap-3 text-gray-500 cursor-not-allowed">
                        <Mail size={16} className="text-gray-600" />
                        <span>{CONTACT_EMAIL}</span>
                      </div>
                    </div>
                    
                    <div className="mt-6 text-neon-blue/60 font-mono text-[10px] uppercase">
                      // RSVP_NODE_ONLINE
                    </div>
                  </div>

                </div>

                {/* Center CTA Button */}
                <div className="text-center bg-black/40 border border-white/10 rounded-xl p-8 backdrop-blur-sm">
                  <p className="text-gray-400 font-mono text-xs md:text-sm mb-6 leading-relaxed">
                    Confirm your details carefully before entering the RSVP portal.
                  </p>

                  <a
                    href={RSVP_FORM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative inline-flex items-center gap-3 px-8 py-4 bg-neon-purple/10 border-2 border-neon-purple text-neon-purple font-orbitron font-black tracking-[0.2em] hover:bg-neon-purple hover:text-black hover:shadow-[0_0_40px_rgba(217,70,239,0.5)] transition-all duration-300 uppercase rounded"
                  >
                    <span>CONFIRM RSVP HERE</span>
                    <ExternalLink size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>

                  <p className="text-cyber-red/80 font-mono text-[10px] mt-6 tracking-wide italic">
                    &gt; The RSVP portal is now closed. For timeline details, check the Updates page.
                  </p>
                </div>
              </>
            )}

            {activeTab === "register" && (
              <>
                {/* Info Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                  
                  {/* Card 1: Registration Details */}
                  <div className="bg-black/75 border border-neon-purple/20 rounded-xl p-8 relative overflow-hidden backdrop-blur-md hover:border-neon-purple/60 hover:shadow-[0_0_30px_rgba(217,70,239,0.15)] transition-all duration-300">
                    <div className="absolute top-0 right-0 p-4 opacity-5">
                      <Users size={80} className="text-neon-purple" />
                    </div>
                    
                    <h3 className="text-xl font-orbitron font-bold text-white mb-6 uppercase tracking-wider flex items-center gap-3">
                      <Users size={20} className="text-neon-purple" /> Registration Details
                    </h3>

                    <ul className="space-y-6 font-mono text-xs md:text-sm text-gray-300">
                      <li className="flex items-start gap-4">
                        <span className="p-2 rounded bg-neon-purple/10 text-neon-purple shrink-0">💳</span>
                        <div>
                          <strong className="text-white">Registration Fee:</strong>
                          <p className="text-gray-400 mt-1">₹1000 Per Team <span className="text-[#00F0FF] font-bold">(100% Refundable)</span></p>
                        </div>
                      </li>
                      <li className="flex items-start gap-4 border-l-2 border-[#00F0FF] pl-3">
                        <span className="p-2 rounded bg-[#00F0FF]/10 text-[#00F0FF] shrink-0">💸</span>
                        <div>
                          <strong className="text-[#00F0FF]">Online Transition Refund:</strong>
                          <p className="text-gray-200 mt-1 font-bold">
                            Because HackVerse is now completely ONLINE, a FULL REFUND of ₹1000 will be automatically returned to all registered teams.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-4">
                        <span className="p-2 rounded bg-neon-purple/10 text-neon-purple shrink-0">👥</span>
                        <div>
                          <strong className="text-white">Team Size:</strong>
                          <p className="text-gray-400 mt-1">2 – 4 Members</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-4 border-l border-neon-purple/30 pl-3">
                        <span className="p-2 rounded bg-neon-purple/10 text-neon-purple shrink-0">🎁</span>
                        <div>
                          <strong className="text-neon-purple">Special Incentive:</strong>
                          <p className="text-gray-200 mt-1 font-bold">
                            Each participant will receive <span className="text-neon-blue font-bold">$50 worth of AI credits coupons</span> after successful registration!
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-4">
                        <span className="p-2 rounded bg-neon-purple/10 text-neon-purple shrink-0">📌</span>
                        <div>
                          <strong className="text-white">Payment Screenshot:</strong>
                          <p className="text-gray-400 mt-1">After payment, upload the payment screenshot in the registration form.</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-4">
                        <span className="p-2 rounded bg-neon-purple/10 text-neon-purple shrink-0">📧</span>
                        <div>
                          <strong className="text-white">Details Accuracy:</strong>
                          <p className="text-gray-400 mt-1">Ensure all team details are filled correctly before final submission.</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-4">
                        <span className="p-2 rounded bg-neon-purple/10 text-neon-purple shrink-0">⏰</span>
                        <div>
                          <strong className="text-white">Claim Deadline:</strong>
                          <p className="text-gray-400 mt-1">All travel/stay cancellation reimbursement claims must be submitted within 48 hours following event closure.</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-4">
                        <span className="p-2 rounded bg-neon-purple/10 text-neon-purple shrink-0">💸</span>
                        <div>
                          <strong className="text-white">Refund Timeline:</strong>
                          <p className="text-gray-400 mt-1">Refunds will be credited to your bank account within 15 – 20 days after 29th June 2026.</p>
                        </div>
                      </li>
                    </ul>
                  </div>

                  {/* Card 2: Need Help Desk */}
                  <div className="bg-black/75 border border-neon-blue/20 rounded-xl p-8 relative overflow-hidden backdrop-blur-md hover:border-neon-blue/60 hover:shadow-[0_0_30px_rgba(0,240,255,0.15)] transition-all duration-300 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-orbitron font-bold text-white mb-6 uppercase tracking-wider flex items-center gap-3">
                        <HelpCircle size={20} className="text-neon-blue" /> Need Help?
                      </h3>
                      <p className="text-gray-400 font-mono text-xs md:text-sm leading-relaxed mb-6">
                        Contact Team HackVerse for any registration-related queries, payment validation issues, or support requests.
                      </p>
                    </div>

                    <div className="space-y-4 font-mono text-xs md:text-sm">
                      <a
                        href={`tel:${CONTACT_PHONE}`}
                        className="flex items-center gap-3 text-gray-300 hover:text-neon-blue transition-colors group"
                      >
                        <Phone size={16} className="text-neon-blue group-hover:scale-110 transition-transform" />
                        <span>{CONTACT_PHONE} (Yash Mohite)</span>
                      </a>
                      <div className="flex items-center gap-3 text-gray-500 cursor-not-allowed">
                        <Mail size={16} className="text-gray-600" />
                        <span>{CONTACT_EMAIL}</span>
                      </div>
                    </div>
                    
                    <div className="mt-6 text-neon-blue/60 font-mono text-[10px] uppercase">
                      // SUPPORT_ONLINE
                    </div>
                  </div>

                </div>

                {/* Center CTA Button */}
                <div className="text-center bg-black/40 border border-white/10 rounded-xl p-8 backdrop-blur-sm">
                  <p className="text-gray-400 font-mono text-xs md:text-sm mb-6 leading-relaxed">
                    Ensure you have completed the payment and have details ready before entering the registration portal.
                  </p>

                  <a
                    href={GOOGLE_FORM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative inline-flex items-center gap-3 px-8 py-4 bg-neon-purple/10 border-2 border-neon-purple text-neon-purple font-orbitron font-black tracking-[0.2em] hover:bg-neon-purple hover:text-black hover:shadow-[0_0_40px_rgba(217,70,239,0.5)] transition-all duration-300 uppercase rounded"
                  >
                    <span>REGISTER HERE</span>
                    <ExternalLink size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>

                  <p className="text-cyber-red/80 font-mono text-[10px] mt-6 tracking-wide italic">
                    &gt; Incomplete registrations or fake screenshot uploads will result in automatic rejection of credentials.
                  </p>
                </div>
              </>
            )}

            {activeTab === "cancellation" && (
              <>
                {/* Info Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                  
                  {/* Card 1: Cancellation Policy */}
                  <div className="bg-black/75 border border-neon-purple/20 rounded-xl p-8 relative overflow-hidden backdrop-blur-md hover:border-neon-purple/60 hover:shadow-[0_0_30px_rgba(217,70,239,0.15)] transition-all duration-300">
                    <div className="absolute top-0 right-0 p-4 opacity-5">
                      <XCircle size={80} className="text-neon-purple" />
                    </div>
                    
                    <h3 className="text-xl font-orbitron font-bold text-white mb-6 uppercase tracking-wider flex items-center gap-3">
                      <ShieldAlert size={20} className="text-neon-purple" /> Refund & retraction
                    </h3>

                    <ul className="space-y-6 font-mono text-xs md:text-sm text-gray-300">
                      <li className="flex items-start gap-4">
                        <span className="p-2 rounded bg-neon-purple/10 text-neon-purple shrink-0">💸</span>
                        <div>
                          <strong className="text-white">Automatic Fee Refund:</strong>
                          <p className="text-gray-400 mt-1">
                            Since HACKVERSE is now 100% ONLINE, all registered teams will receive their ₹1000 registration fee refund automatically. You do NOT need to withdraw your participation to get this refund!
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-4">
                        <span className="p-2 rounded bg-neon-purple/10 text-neon-purple shrink-0">⏰</span>
                        <div>
                          <strong className="text-white">Processing Timeline:</strong>
                          <p className="text-gray-400 mt-1">
                            Refunds will be credited to your bank account within <span className="text-neon-purple font-bold">15 – 20 days</span> after <span className="text-white font-bold">29th June 2026</span>.
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>

                  {/* Card 2: Guidelines */}
                  <div className="bg-black/75 border border-neon-blue/20 rounded-xl p-8 relative overflow-hidden backdrop-blur-md hover:border-neon-blue/60 hover:shadow-[0_0_30px_rgba(0,240,255,0.15)] transition-all duration-300 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-orbitron font-bold text-white mb-6 uppercase tracking-wider flex items-center gap-3">
                        <FileText size={20} className="text-neon-blue" /> Withdrawal Guidelines
                      </h3>
                      <p className="text-gray-400 font-mono text-xs md:text-sm leading-relaxed mb-6">
                        If your team cannot participate in the virtual hackathon and wishes to withdraw participation completely, submit the withdrawal form with:
                      </p>
                      <ul className="space-y-3 font-mono text-xs text-gray-300 mb-6">
                        <li className="flex items-center gap-2">
                          <span className="text-neon-blue">✓</span> Registered Team Name & Leader details
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-neon-blue">✓</span> Original Payment Transaction ID & Proof of Payment
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-neon-blue">✓</span> Bank Details (for verify/reference)
                        </li>
                      </ul>
                    </div>

                    <div className="space-y-4 font-mono text-xs md:text-sm">
                      <a
                        href={`tel:${CONTACT_PHONE}`}
                        className="flex items-center gap-3 text-gray-300 hover:text-neon-blue transition-colors group"
                      >
                        <Phone size={16} className="text-neon-blue group-hover:scale-110 transition-transform" />
                        <span>{CONTACT_PHONE} (Yash Mohite)</span>
                      </a>
                    </div>
                    
                    <div className="mt-6 text-neon-blue/60 font-mono text-[10px] uppercase">
                      // RETRACT_PORTAL_SECURE
                    </div>
                  </div>

                </div>

                {/* Center CTA Button */}
                <div className="text-center bg-black/40 border border-white/10 rounded-xl p-8 backdrop-blur-sm">
                  <p className="text-gray-400 font-mono text-xs md:text-sm mb-6 leading-relaxed">
                    Submit your retraction request formally via the Google Form portal.
                  </p>

                  <a
                    href={CANCELLATION_FORM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative inline-flex items-center gap-3 px-8 py-4 bg-neon-purple/10 border-2 border-neon-purple text-neon-purple font-orbitron font-black tracking-[0.2em] hover:bg-neon-purple hover:text-black hover:shadow-[0_0_40px_rgba(217,70,239,0.5)] transition-all duration-300 uppercase rounded"
                  >
                    <span>SUBMIT WITHDRAWAL</span>
                    <ExternalLink size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>

                  <p className="text-cyber-red/80 font-mono text-[10px] mt-6 tracking-wide italic">
                    &gt; Retraction forms are processed post-event by the audit cell.
                  </p>
                </div>
              </>
            )}

            {activeTab === "travel" && (
              <>
                {/* Info Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                  
                  {/* Card 1: Travel & Stay Loss Reimbursement Policy */}
                  <div className="bg-black/75 border border-neon-purple/20 rounded-xl p-8 relative overflow-hidden backdrop-blur-md hover:border-neon-purple/60 hover:shadow-[0_0_30px_rgba(217,70,239,0.15)] transition-all duration-300">
                    <div className="absolute top-0 right-0 p-4 opacity-5">
                      <CreditCard size={80} className="text-neon-purple" />
                    </div>
                    
                    <h3 className="text-xl font-orbitron font-bold text-white mb-6 uppercase tracking-wider flex items-center gap-3">
                      <Award size={20} className="text-neon-purple" /> Loss Reimbursement Rules
                    </h3>

                    <ul className="space-y-6 font-mono text-xs md:text-sm text-gray-300">
                      <li className="flex items-start gap-4">
                        <span className="p-2 rounded bg-neon-purple/10 text-neon-purple shrink-0">📍</span>
                        <div>
                          <strong className="text-white">Eligible Claims:</strong>
                          <p className="text-gray-400 mt-1">Any participant who booked train, bus, or flight tickets, or hotel/stay accommodation specifically for HackVerse and incurred cancellation charges.</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-4">
                        <span className="p-2 rounded bg-neon-purple/10 text-neon-purple shrink-0">🎟️</span>
                        <div>
                          <strong className="text-white">Cancellation Loss Coverage:</strong>
                          <p className="text-gray-400 mt-1">We will cover the eligible cancellation loss amount verified by our operations team after verification.</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-4">
                        <span className="p-2 rounded bg-neon-purple/10 text-neon-purple shrink-0">📃</span>
                        <div>
                          <strong className="text-white">Documents Required:</strong>
                          <p className="text-gray-400 mt-1">Upload original booking receipts, cancellation receipts/invoices showing the specific cancellation charges/losses.</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-4">
                        <span className="p-2 rounded bg-neon-purple/10 text-neon-purple shrink-0">📅</span>
                        <div>
                          <strong className="text-white">Claim Deadline:</strong>
                          <p className="text-gray-400 mt-1">All reimbursement claims must be submitted within 48 hours following event closure.</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-4">
                        <span className="p-2 rounded bg-neon-purple/10 text-neon-purple shrink-0">💸</span>
                        <div>
                          <strong className="text-white">Refund Timeline:</strong>
                          <p className="text-gray-400 mt-1">Approved loss support payouts will be credited within 15 – 20 days after 29th June 2026.</p>
                        </div>
                      </li>
                    </ul>
                  </div>

                  {/* Card 2: Verification Protocol */}
                  <div className="bg-black/75 border border-neon-blue/20 rounded-xl p-8 relative overflow-hidden backdrop-blur-md hover:border-neon-blue/60 hover:shadow-[0_0_30px_rgba(0,240,255,0.15)] transition-all duration-300 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-orbitron font-bold text-white mb-6 uppercase tracking-wider flex items-center gap-3">
                        <CheckCircle2 size={20} className="text-neon-blue" /> Verification Protocol
                      </h3>
                      <p className="text-gray-400 font-mono text-xs md:text-sm leading-relaxed mb-6">
                        All transit and stay cancellation claims are audited by the HackVerse finance team. Original payment screenshots and verified bank details are mandatory.
                      </p>
                      <div className="bg-neon-blue/15 border-l-2 border-neon-blue p-4 font-mono text-xs text-gray-300 mb-4">
                        Note: Claim details (names, dates, destination/origin) must align exactly with your registered team profile.
                      </div>
                    </div>

                    <div className="space-y-4 font-mono text-xs md:text-sm">
                      <div className="flex items-center gap-3 text-gray-300">
                        <Mail size={16} className="text-neon-blue" />
                        <span>{CONTACT_EMAIL}</span>
                      </div>
                    </div>
                    
                    <div className="mt-6 text-neon-blue/60 font-mono text-[10px] uppercase">
                      // TRANSIT_SUPPORT_ONLINE
                    </div>
                  </div>

                </div>

                {/* Center CTA Button */}
                <div className="text-center bg-black/40 border border-white/10 rounded-xl p-8 backdrop-blur-sm">
                  <p className="text-gray-400 font-mono text-xs md:text-sm mb-6 leading-relaxed">
                    Submit your transit and stay cancellation details for loss reimbursement audit.
                  </p>

                  <a
                    href={TRAVEL_REFUND_FORM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative inline-flex items-center gap-3 px-8 py-4 bg-neon-purple/10 border-2 border-neon-purple text-neon-purple font-orbitron font-black tracking-[0.2em] hover:bg-neon-purple hover:text-black hover:shadow-[0_0_40px_rgba(217,70,239,0.5)] transition-all duration-300 uppercase rounded"
                  >
                    <span>CLAIM LOSS REIMBURSEMENT</span>
                    <ExternalLink size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>

                  <p className="text-cyber-red/80 font-mono text-[10px] mt-6 tracking-wide italic">
                    &gt; Fake claims or tampered documents will result in disqualification and immediate blacklist from all HackVerse portals.
                  </p>
                </div>
              </>
            )}

            {activeTab === "submission" && (
              <>
                {/* Info Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                  
                  {/* Card 1: Submission Details */}
                  <div className="bg-black/75 border border-neon-purple/20 rounded-xl p-8 relative overflow-hidden backdrop-blur-md hover:border-neon-purple/60 hover:shadow-[0_0_30px_rgba(217,70,239,0.15)] transition-all duration-300">
                    <div className="absolute top-0 right-0 p-4 opacity-5">
                      <FileText size={80} className="text-neon-purple" />
                    </div>
                    
                    <h3 className="text-xl font-orbitron font-bold text-white mb-6 uppercase tracking-wider flex items-center gap-3">
                      <FileText size={20} className="text-neon-purple" /> Submission Rules
                    </h3>

                    <ul className="space-y-6 font-mono text-xs md:text-sm text-gray-300">
                      <li className="flex items-start gap-4">
                        <span className="p-2 rounded bg-neon-purple/10 text-neon-purple shrink-0">👤</span>
                        <div>
                          <strong className="text-white">Team Leader Only:</strong>
                          <p className="text-gray-400 mt-1">This form must be submitted by the Team Leader only. Only one submission per team is allowed.</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-4">
                        <span className="p-2 rounded bg-neon-purple/10 text-neon-purple shrink-0">🛠️</span>
                        <div>
                          <strong className="text-white">Prototype Status:</strong>
                          <p className="text-gray-400 mt-1">Your prototype does not need to be fully completed. MVPs, wireframes, Figma designs, working demos, partially completed projects, and prototypes are all accepted.</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-4">
                        <span className="p-2 rounded bg-[#FF003C]/10 text-cyber-red shrink-0">📅</span>
                        <div>
                          <strong className="text-white">Submission Deadline:</strong>
                          <p className="text-cyber-red font-bold mt-1">26 June 2026</p>
                        </div>
                      </li>
                    </ul>
                  </div>

                  {/* Card 2: Mentorship & Challenge */}
                  <div className="bg-black/75 border border-neon-blue/20 rounded-xl p-8 relative overflow-hidden backdrop-blur-md hover:border-neon-blue/60 hover:shadow-[0_0_30px_rgba(0,240,255,0.15)] transition-all duration-300 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-orbitron font-bold text-white mb-6 uppercase tracking-wider flex items-center gap-3">
                        <Award size={20} className="text-neon-blue" /> Mentorship & Challenge
                      </h3>
                      <p className="text-gray-400 font-mono text-xs md:text-sm leading-relaxed mb-6">
                        Mentors will review your submission before Hackathon Day to understand your project idea, progress, implementation approach, and current status.
                      </p>
                      <div className="bg-neon-blue/15 border-l-2 border-neon-blue p-4 font-mono text-xs text-gray-300 mb-4">
                        <strong>Evaluation protocol:</strong> Based on your prototype, your team may receive a small challenge related to your project during final evaluation. The challenge tests innovation, adaptability, and problem solving.
                      </div>
                    </div>

                    <div className="mt-6 text-neon-blue/60 font-mono text-[10px] uppercase">
                      // PROTOCOL_SUBMISSIONS_OPEN
                    </div>
                  </div>

                </div>

                {/* Center CTA Button */}
                <div className="text-center bg-black/40 border border-white/10 rounded-xl p-8 backdrop-blur-sm">
                  <p className="text-gray-400 font-mono text-xs md:text-sm mb-6 leading-relaxed">
                    Submit your prototype details and repository/drive files before the deadline.
                  </p>

                  <a
                    href={SUBMISSION_FORM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative inline-flex items-center gap-3 px-8 py-4 bg-neon-purple/10 border-2 border-neon-purple text-neon-purple font-orbitron font-black tracking-[0.2em] hover:bg-neon-purple hover:text-black hover:shadow-[0_0_40px_rgba(217,70,239,0.5)] transition-all duration-300 uppercase rounded"
                  >
                    <span>SUBMIT PROTOTYPE</span>
                    <ExternalLink size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>

                  <p className="text-neon-blue/80 font-mono text-[10px] mt-6 tracking-wide italic">
                    &gt; Make sure your submission reflects your team's current progress as accurately as possible. Good luck and keep building! 🚀
                  </p>
                </div>
              </>
            )}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};

export default Registration;
