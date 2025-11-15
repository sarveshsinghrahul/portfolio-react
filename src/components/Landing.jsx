import React, { useState, useEffect } from 'react';
import StarCanvas from './StarCanvas'; // <-- 1. IMPORT StarCanvas HERE

// ADD A LEADING SPACE to each string in this array
const phrases = [" Student", " Web Designer", " Photographer"];
const colors = ["#db96ca", "#75283f", "#c86177"];

const Landing = () => {
    const [text, setText] = useState('');
    const [isErasing, setIsErasing] = useState(false);
    const [phraseIndex, setPhraseIndex] = useState(0);
    const [letterIndex, setLetterIndex] = useState(0);

    useEffect(() => {
        const currentPhrase = phrases[phraseIndex];
        
        const timeout = setTimeout(() => {
            if (isErasing) {
                // Erasing logic
                if (letterIndex > 0) {
                    setText(currentPhrase.substring(0, letterIndex - 1));
                    setLetterIndex(letterIndex - 1);
                } else {
                    setIsErasing(false);
                    setPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
                }
            } else {
                // Typing logic
                if (letterIndex < currentPhrase.length) {
                    setText(currentPhrase.substring(0, letterIndex + 1));
                    setLetterIndex(letterIndex + 1);
                } else {
                    setTimeout(() => setIsErasing(true), 1000); // Pause before erasing
                }
            }
        }, isErasing ? 100 : 120 + Math.random() * 50);

        return () => clearTimeout(timeout);
    }, [text, isErasing, letterIndex, phraseIndex]);

    return (
        <section id="home" className="landing-page">
            <StarCanvas /> {/* <-- 2. ADD StarCanvas HERE */}
            <div className="content">
                <div className="landing-content">
                    <h1>Hi, I'm Sarvesh Singh, a 
                        {/* The space will now appear correctly here */}
                        <span className="typed-text" style={{ color: colors[phraseIndex] }}>
                            {text}
                        </span>
                    </h1>
                </div>
                <h1>Welcome to My Portfolio</h1>
                <p>Explore my projects and skills.</p>
                <a href="#timeline" className="btn-primary">View Projects</a>
            </div>
        </section>
    );
};

export default Landing;