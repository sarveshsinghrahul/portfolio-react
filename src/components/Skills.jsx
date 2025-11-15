import React from 'react';
import { useInView } from '../hooks/useInView';
// Import icons from the library you just installed
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact } from 'react-icons/fa';
import { SiVite, SiTailwindcss } from 'react-icons/si';

// 1. SKILLS DATA
// Add or remove skills as you like. Find more icons at: https://react-icons.github.io/react-icons
const skills = [
    { icon: <FaHtml5 />, name: "HTML5" },
    { icon: <FaCss3Alt />, name: "CSS3" },
    { icon: <FaJsSquare />, name: "JavaScript" },
    { icon: <FaReact />, name: "React" },
    { icon: <SiVite />, name: "Vite" },
    { icon: <SiTailwindcss />, name: "Tailwind" }, // Example
];

// 2. SKILL CARD COMPONENT
const SkillCard = ({ skill }) => {
    const [cardRef, isCardInView] = useInView({ threshold: 0.1 });

    return (
        <div 
            className={`skill-card ${isCardInView ? 'in-view' : ''}`} 
            ref={cardRef}
        >
            {skill.icon}
            <p>{skill.name}</p>
        </div>
    );
};

// 3. MAIN SKILLS COMPONENT
const Skills = () => {
    return (
        <section id="skills" className="skills-section">
            <h2>My Skills</h2>
            <div className="skills-grid">
                {skills.map((skill, index) => (
                    <SkillCard skill={skill} key={index} />
                ))}
            </div>
        </section>
    );
};

export default Skills;