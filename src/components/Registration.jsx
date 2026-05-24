import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Users, AlertTriangle, Phone, Mail, ArrowLeft, ExternalLink, HelpCircle } from "lucide-react";

// --- CONFIGURATION ---
const GOOGLE_FORM_URL = "https://forms.gle/aE3Qa2pcsdfR19sD8"; // ACTUAL GOOGLE FORM LINK
const CONTACT_PHONE = "+91 9967053816";
const CONTACT_EMAIL = "contact@hackverse.dev"; // Placeholder email

const Registration = () => {

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
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <AlertTriangle className="text-neon-purple w-6 h-6 flicker" />
            <h2
              data-text="CONTACT & REGISTRATION"
              className="glitch-text text-3xl md:text-5xl font-orbitron font-black text-gray-200 tracking-wide uppercase"
            >
              CONTACT <span className="text-neon-purple">&</span> REGISTRATION
            </h2>
          </motion.div>
          <p className="text-gray-400 font-mono text-xs md:text-sm max-w-2xl mx-auto leading-relaxed">
            Ready to join <span className="text-neon-purple font-bold">HackVerse 2026</span>? 🚀 Complete your team registration below to secure your access key.
          </p>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          
          {/* Card 1: Registration Details */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-black/75 border border-neon-purple/20 rounded-xl p-8 relative overflow-hidden backdrop-blur-md hover:border-neon-purple/60 hover:shadow-[0_0_30px_rgba(217,70,239,0.15)] transition-all duration-300"
          >
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
                  <p className="text-gray-400 mt-1">₹1000 Per Team</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="p-2 rounded bg-neon-purple/10 text-neon-purple shrink-0">👥</span>
                <div>
                  <strong className="text-white">Team Size:</strong>
                  <p className="text-gray-400 mt-1">2 – 4 Members</p>
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
            </ul>
          </motion.div>

          {/* Card 2: Need Help Desk */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-black/75 border border-neon-blue/20 rounded-xl p-8 relative overflow-hidden backdrop-blur-md hover:border-neon-blue/60 hover:shadow-[0_0_30px_rgba(0,240,255,0.15)] transition-all duration-300 flex flex-col justify-between"
          >
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
          </motion.div>

        </div>

        {/* Center CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-center bg-black/40 border border-white/10 rounded-xl p-8 backdrop-blur-sm"
        >
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
        </motion.div>

      </div>
    </section>
  );
};

export default Registration;
