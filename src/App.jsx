import React from 'react';
import StarCanvas from './components/StarCanvas';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import About from './components/About';
import Timeline from './components/Timeline';
import Contact from './components/Contact';
// You will need to create and import the ProgressBar component

function App() {
  return (
    <>
      {/* These are fixed or background elements */}
      <StarCanvas />
      <Navbar />
      {/* <ProgressBar /> */} {/* You'd need to convert the progress bar logic */}
      
      {/* These are the page sections */}
      <main>
        <Landing />
        <About />
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