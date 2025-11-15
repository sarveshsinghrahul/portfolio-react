import React from 'react';
import StarCanvas from './components/StarCanvas';
import Navbar from './components/Navbar';
import ProgressBar from './components/ProgressBar'; // <-- 1. IMPORT IT
import Landing from './components/Landing';
import About from './components/About';
import Skills from './components/Skills'; 
import Timeline from './components/Timeline';
import Contact from './components/Contact';

function App() {
  return (
    <>
      {/* These are fixed or background elements */}
      <StarCanvas />
      <Navbar />
      <ProgressBar /> {/* <-- 2. ADD IT HERE */}
      
      {/* These are the page sections */}
      <main>
        <Landing />
        <About />
        <Skills /> 
        <Timeline />
        <Contact />
      </main>

      <footer>
        <p>&copy; 2024 Sarvesh Singh. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;