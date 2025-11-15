import React, { useState, useEffect } from 'react';

const ProgressBar = () => {
    // 1. State to hold the scroll percentage
    const [scrollPercentage, setScrollPercentage] = useState(0);

    // 2. Function to calculate and update the scroll percentage
    const handleScroll = () => {
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

        // Prevent division by zero if scrollHeight is 0
        if (scrollHeight > 0) {
            const percentage = (scrollTop / scrollHeight) * 100;
            setScrollPercentage(percentage);
        } else {
            setScrollPercentage(0); // At the top or no scroll
        }
    };

    // 3. Add/Remove scroll event listener
    useEffect(() => {
        // Add event listener when the component mounts
        window.addEventListener('scroll', handleScroll);
        
        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); // Empty array ensures this effect runs only once on mount

    // 4. Render the component
    // The styles from src/style.css for #progress-container 
    // and #progress-bar will be applied automatically.
    return (
        <div id="progress-container">
            <div 
                id="progress-bar" 
                style={{ width: `${scrollPercentage}%` }} // Update width dynamically
            ></div>
        </div>
    );
};

export default ProgressBar;