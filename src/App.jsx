import React, { useState, useEffect } from 'react'; // <-- 1. IMPORT useState & useEffect
// import StarCanvas from './components/StarCanvas'; // <-- 2. REMOVE StarCanvas import
import Loader from './components/Loader';           // <-- 3. IMPORT new Loader
import Navbar from './components/Navbar';
import ProgressBar from './components/ProgressBar'; 
import Landing from './components/Landing';
import About from './components/About';
import Skills from './components/Skills'; 
import Timeline from './components/Timeline';
import Contact from './components/Contact';

function App() {
  // 4. Add loading state
  const [isLoading, setIsLoading] = useState(true);

  // 5. Set timer to end loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500); // 2.5 seconds, adjust as you like

    // Clear timeout if component unmounts
    return () => clearTimeout(timer);
  }, []); // Empty array ensures this runs only once

  // 6. Conditionally render Loader or main app
  return (
    isLoading ? (
      <Loader />
    ) : (
      <>
        {/* These are fixed or background elements */}
        {/* <StarCanvas /> */} {/* <-- 7. REMOVE StarCanvas from here */}
        <Navbar />
        <ProgressBar /> 
        
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
    )
  );
}

export default App;