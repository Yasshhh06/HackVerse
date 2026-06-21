import { useState } from "react";
import { Github, Twitter, Instagram, Mail, Linkedin, Youtube, Check, Copy } from "lucide-react";

const Footer = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = (e, text) => {
    e.preventDefault();
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    // ── VIDEO SECTION: transparent so global video shows through ──
    <footer className="relative bg-black/80 py-12 border-t border-neon-blue/20 backdrop-blur-sm scanlines">
      {/* Faint grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,240,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,240,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

          {/* Brand */}
          <div className="text-center md:text-left">
            <h3
              data-text="HACKVERSE"
              className="glitch-text text-3xl font-bold font-orbitron text-white inline-block"
            >
              HACK<span className="text-neon-blue">VERSE</span>
            </h3>
            <p className="text-gray-600 text-xs mt-2 font-mono">© 2026 HackVerse. All rights reserved.</p>
          </div>

          {/* Status */}
          <div className="text-center font-mono text-xs text-neon-blue/50 space-y-1">
            <p className="flicker">SYSTEM_STATUS :: ONLINE</p>
            <p>28 JUN 2026 :: H-HOUR APPROACHING</p>
          </div>


        </div>

        {/* Bottom separator */}
        <div className="mt-8 pt-6 border-t border-white/5 text-center">
          <p className="text-gray-800 text-xs font-mono tracking-widest">
            &lt; POWERED BY HACKVERSE // BUILD.DISRUPT.SURVIVE /&gt;
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
