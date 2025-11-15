import React from 'react';

const Navbar = () => {
    // You'll need to add state for the hamburger menu
    // const [isOpen, setIsOpen] = useState(false);
    // const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <header className="navbar">
            <div className="logo">
                <h1>Sarvesh Singh</h1>
            </div>
            
            <div className="hamburger" /* onClick={toggleMenu} */>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
            <nav /* className={isOpen ? 'show' : ''} */>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#timeline">Timeline</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;