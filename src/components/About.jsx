import React from 'react';
import moonImage from '../assets/moon.png';
import { useInView } from '../hooks/useInView';

const About = () => {
    const [moonRef, isMoonInView] = useInView({ threshold: 0.1 });
    const [boxRef, isBoxInView] = useInView({ threshold: 0.1 });

    return (
        <section className="about-section" id="about">
            <div className="content">

                {/* --- MOVE THE MOON DIV HERE (FIRST) --- */}
                <div 
                    id="moon" 
                    ref={moonRef} 
                    className={isMoonInView ? 'in-view' : ''}
                >
                    <img src={moonImage} alt="Moon" className="moon-image" />
                </div>
                {/* ------------------------------------- */}

                {/* --- LEAVE THE TEXT CONTENT HERE (SECOND) --- */}
                <h2>About Me</h2>
                <div className="about-info">
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
                {/* ------------------------------------------- */}

            </div>
        </section>
    );
};

export default About;