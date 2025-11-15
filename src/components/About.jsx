import React from 'react';
import moonImage from '../assets/moon.png'; // <-- FIX 1: Import the image
import { useInView } from '../hooks/useInView'; // <-- FIX 2: Import the hook

const About = () => {
    // FIX 3: Call the hook for each element you want to observe
    const [moonRef, isMoonInView] = useInView({ threshold: 0.1 });
    const [boxRef, isBoxInView] = useInView({ threshold: 0.1 });

    return (
        <section className="about-section" id="about">
            <div className="content">
                {/* FIX 4: Add the ref and conditional className */}
                <div 
                    id="moon" 
                    ref={moonRef} 
                    className={isMoonInView ? 'in-view' : ''}
                >
                    {/* FIX 5: Use the imported image variable */}
                    <img src={moonImage} alt="Moon" className="moon-image" />
                </div>
                <h2>About Me</h2>
                <div className="about-info">
                    {/* FIX 6: Add the ref and conditional className */}
                    <div 
                        className={`about-box ${isBoxInView ? 'in-view' : ''}`}
                        ref={boxRef}
                    > 
                        <p>
                            Hi, I'm Sarvesh Singh, a passionate software engineer and web designer...
                            (Your full text here)
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;