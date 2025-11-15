import React, { useState } from 'react'; // <-- 1. IMPORT useState

const Navbar = () => {
    // 2. ADD STATE FOR THE HAMBURGER MENU
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);

    // 3. ADD A FUNCTION TO CLOSE MENU ON LINK CLICK
    const closeMenu = () => setIsOpen(false);

    return (
        <header className="navbar">
            <div className="logo">
                <h1>Sarvesh Singh</h1>
            </div>
            
            {/* 4. ADD onClick TO THE HAMBURGER */}
            <div className="hamburger" onClick={toggleMenu}>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>

            {/* 5. ADD CONDITIONAL CLASS AND onClick TO NAV */}
            <nav className={isOpen ? 'show' : ''} onClick={closeMenu}>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#skills">Skills</a></li> {/* <-- 6. ADD SKILLS LINK */}
                    <li><a href="#timeline">Timeline</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;