import React from 'react';
import { useInView } from '../hooks/useInView'; // <-- FIX 1: Import the hook

const timelineData = [
    { date: "January 2020", text: "Began learning HTML, CSS, and JavaScript." },
    // ... (rest of your data)
];

const TimelineItem = ({ data }) => {
    // FIX 2: Call the hook inside the item component
    const [itemRef, isItemInView] = useInView({ threshold: 0.1 });

    return (
        // FIX 3: Add the ref and conditional className
        <div 
            className={`timeline-item ${isItemInView ? 'in-view' : ''}`} 
            ref={itemRef}
        >
            <div className="timeline-content">
                <h2>{data.date}</h2>
                <p>{data.text}</p>
            </div>
        </div>
    );
};

const Timeline = () => {
    return (
        <section id="timeline" className="timeline-section">
            <div className="timeline-container">
                {timelineData.map((item, index) => (
                    <TimelineItem data={item} key={index} />
                ))}
            </div>
        </section>
    );
};

export default Timeline;