import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Loader from './components/Loader';
import FloatingNavbar from './components/FloatingNavbar';


import Hero from './components/Hero';
import Mission from './components/Mission';
import Tracks from './components/Tracks';
import Venue from './components/Venue';
import Organizers from './components/Organizers';
import ProblemStatements from './components/ProblemStatements';
import Prizes from './components/Prizes';
import Rules from './components/Rules';
import Footer from './components/Footer';
import Registration from './components/Registration';
import Updates from './components/Updates';
import RSVP from './components/RSVP';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="bg-[#050505] min-h-screen text-white selection:bg-neon-blue selection:text-black">
      {loading ? (
        <Loader onLoadingComplete={() => setLoading(false)} />
      ) : (
        <>
          {/* ─── Global Fixed Video Background ─── */}
          <div className="fixed inset-0 z-0 pointer-events-none">
            <video
              autoPlay loop muted playsInline
              className="w-full h-full object-cover opacity-40"
            >
              <source src="/hero-bg.mp4" type="video/mp4" />
            </video>
            {/* Scanlines overlay */}
            <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(0,0,0,0.18)_2px,rgba(0,0,0,0.18)_4px)]" />
            {/* CRT vignette */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_55%,rgba(0,0,0,0.8)_100%)]" />
          </div>

          <FloatingNavbar />
          <Routes>
            <Route path="/" element={
              <div className="relative z-[2]">
                <Hero />
                <Mission />
                <Tracks />
                <ProblemStatements />
                <Prizes />
                <Rules />
                <Organizers />
                <Footer />
              </div>
            } />
            <Route path="/venue" element={<div className="relative z-[2]"><Venue /></div>} />
            <Route path="/registration" element={<div className="relative z-[2]"><Registration /></div>} />
            <Route path="/updates" element={<div className="relative z-[2]"><Updates /></div>} />
            <Route path="/rsvp" element={<div className="relative z-[2]"><RSVP /></div>} />
          </Routes>
        </>
      )}
    </div>
  );
}

export default App;
