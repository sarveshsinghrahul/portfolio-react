import React from 'react';
import { useInView } from '../hooks/useInView';
// Import a placeholder image (you can change this)
import projectImg from '../assets/bg.webp'; 

// 1. UPDATE THE TIMELINE DATA with more info
const timelineData = [
    { 
        date: "January 2020", 
        title: "Started Web Development",
        description: "Began my journey learning the fundamentals: HTML, CSS, and JavaScript.",
        type: "milestone" // This is a simple milestone
    },
    { 
        date: "May 2020", 
        title: "First Portfolio Project",
        description: "Built my first-ever portfolio website to showcase my new skills and projects.",
        type: "project", // This is a project
        img: projectImg, // Add an image
        link: "https://github.com/sarveshsinghrahul/portfolio" // Add a link
    },
    { 
        date: "August 2021", 
        title: "Started Freelancing",
        description: "Began taking on freelance projects, designing and developing websites for clients.",
        type: "milestone" 
    },
    { 
        date: "March 2022", 
        title: "Learned React.js",
        description: "Expanded my skills into modern frontend frameworks by learning React.",
        type: "milestone" 
    },
    { 
        date: "September 2022", 
        title: "Major Project Completed",
        description: "Completed a major project for a client, building a responsive website with React and API integration.",
        type: "project",
        img: projectImg, // Add another image
        link: "#" // Add another link
    },
];

// 2. UPDATE THE TimelineItem COMPONENT
const TimelineItem = ({ data }) => {
    const [itemRef, isItemInView] = useInView({ threshold: 0.1 });

    return (
        <div 
            className={`timeline-item ${isItemInView ? 'in-view' : ''}`} 
            ref={itemRef}
        >
            <div className="timeline-content">
                {/* Use both date and title */}
                <h2>{data.date} - {data.title}</h2>
                
                {/* Conditionally render image if it's a project */}
                {data.type === 'project' && data.img && (
                    <img src={data.img} alt={data.title} className="timeline-project-img" />
                )}
                
                {/* Description */}
                <p>{data.description}</p>
                
                {/* Conditionally render button if it's a project */}
                {data.type === 'project' && data.link && (
                    <a href={data.link} className="btn-primary" target="_blank" rel="noopener noreferrer">
                        View Project
                    </a>
                )}
            </div>
        </div>
    );
};

// 3. UPDATE THE MAIN Timeline COMPONENT
const Timeline = () => {
    return (
        // Add a section title (optional, but good for clarity)
        <section id="timeline" className="timeline-section">
            <h2 style={{ fontSize: '2.5rem', color: 'var(--secondary)', marginBottom: '3rem', textAlign: 'center' }}>
                My Journey
            </h2>
            <div className="timeline-container">
                {timelineData.map((item, index) => (
                    <TimelineItem data={item} key={index} />
                ))}
            </div>
        </section>
    );
};

export default Timeline;