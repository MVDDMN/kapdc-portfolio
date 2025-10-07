import React from 'react';
import './Navbar.css';

const Navbar: React.FC = () => {
    const handleScroll = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className="portfolio-navbar">
            <a href="#" onClick={() => handleScroll('hero')}>
                Home
            </a>
            <a href="#" onClick={() => handleScroll('about')}>
                About
            </a>
            <a href="#" onClick={() => handleScroll('skills')}>
                Skills
            </a>
            <a href="#" onClick={() => handleScroll('projects')}>
                Projects
            </a>
            <a href="#" onClick={() => handleScroll('contact')}>
                Contact
            </a>
        </nav>
    );
};

export default Navbar;