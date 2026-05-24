import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Home, MapPin, X, Send } from "lucide-react";
import { Link } from "react-router-dom";

const FloatingNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Register", icon: <Send size={20} />, to: "/registration" },
    { name: "Venue", icon: <MapPin size={20} />, to: "/venue" },
    { name: "Home", icon: <Home size={20} />, to: "/" }, // Bottom (closest to button)
  ];

  return (
    <div className="fixed bottom-8 right-8 z-[999] flex flex-col items-end gap-4 pointer-events-auto">
      <AnimatePresence>
        {isOpen && (
          <div className="flex flex-col items-end gap-3 mb-2">
            {menuItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: 20, scale: 0.8 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 20, scale: 0.8 }}
                transition={{ delay: index * 0.1, duration: 0.2 }}
              >
                  <Link
                    to={item.to}
                    className="flex items-center gap-3 bg-black/90 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full text-white hover:border-neon-blue hover:text-neon-blue transition-colors group shadow-lg"
                  >
                    <span className="text-sm font-orbitron tracking-wide">{item.name}</span>
                    <span className="text-gray-400 group-hover:text-neon-blue transition-colors">{item.icon}</span>
                  </Link>
              </motion.div>
            ))}
          </div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full flex items-center justify-center text-black font-bold shadow-[0_0_20px_rgba(255,165,0,0.5)] transition-all duration-300 z-50 cursor-pointer ${
          isOpen ? "bg-white rotate-45" : "bg-orange-500 hover:scale-110"
        }`}
      >
        {isOpen ? <Plus size={28} /> : <Plus size={28} color="white" />} {/* Using Plus for both, rotation handles X look */}
      </button>
    </div>
  );
};

export default FloatingNavbar;
