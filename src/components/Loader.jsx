import React, { useState } from 'react'; // <-- 1. Import useState
import { motion } from 'framer-motion';

// --- STYLES ---

// This is the full-screen backdrop
const loaderContainerStyle = {
  width: '100vw',
  height: '100vh',
  position: 'fixed',
  top: 0,
  left: 0,
  zIndex: 9999,
  backgroundColor: 'var(--background)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

// This container holds the two text layers
const textContainerStyle = {
  position: 'relative',
};

// This is the "empty" or "base" logo style
const baseLogoStyle = {
  fontFamily: "'Pacifico', cursive", // From your style.css
  fontSize: '8rem',
  color: 'var(--box2)', // "Empty" color
  letterSpacing: '0px',
  // Use flex to align brackets and number
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

// This is the "filled" text. It sits directly on top.
const topLogoStyle = {
  ...baseLogoStyle, // Inherits all styles from the base
  position: 'absolute',
  top: 0,
  left: 0,
  color: 'var(--accent)', // "Filled" color
  zIndex: 1,
  width: '100%', // Ensure it covers the base
};

// This style gives the number a fixed width
// so the brackets don't "jiggle" as the number changes
const numberStyle = {
  // 'ch' is a unit relative to the '0' character width
  width: '5.5ch', 
  textAlign: 'center',
  display: 'inline-block',
};

// --- FRAMER MOTION ---

const Loader = () => {
  // 2. This state will hold the visible number
  const [percentage, setPercentage] = useState(0);

  return (
    // 3. The main backdrop component
    <motion.div
      style={loaderContainerStyle}
      // Animate opacity for fade-in/out
      // Animate a *custom* 'count' property from 0 to 100
      initial={{ opacity: 0, count: 0 }}
      animate={{ opacity: 1, count: 100 }}
      exit={{ opacity: 0 }}
      // 4. Define separate transitions for opacity and count
      transition={{
        opacity: { duration: 0.3 },
        // This duration MUST match the clipPath animation
        count: { duration: 2.2, ease: 'easeInOut' } 
      }}
      // 5. On every frame of the 'count' animation,
      //    get the latest value and update our React state
      onUpdate={(latest) => {
        setPercentage(Math.round(latest.count));
      }}
    >
      {/* 6. The Text Container */}
      <div style={textContainerStyle}>
        
        {/* The Base/Empty Text. It shows the updating percentage. */}
        <div style={baseLogoStyle}>
          <span>{'{'}</span>
          <span style={numberStyle}>{percentage}%</span>
          <span>{'}'}</span>
        </div>
        
        {/* The Top/Filled Text (animated with clipPath) */}
        <motion.div
          style={topLogoStyle}
          // The clipPath animation runs in parallel
          initial={{ clipPath: 'inset(0 100% 0 0)' }} 
          animate={{ clipPath: 'inset(0 0% 0 0)' }} 
          transition={{
            duration: 2.2, // Must match the 'count' transition
            ease: 'easeInOut',
          }}
        >
          {/* This text *also* uses the updating 'percentage' state */}
          <span>{'{'}</span>
          <span style={numberStyle}>{percentage}%</span>
          <span>{'}'}</span>
        </motion.div>
        
      </div>
    </motion.div>
  );
};

export default Loader;