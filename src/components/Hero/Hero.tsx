import React from 'react';
import profileImg from '../../assets/hero-profile-img.jpg';
import './Hero.css';

const Hero: React.FC = () => (
    <section id="hero" className="portfolio-hero">
        <img
            src={profileImg}
            alt="Profile"
            className="profile-icon"
            onContextMenu={(e) => e.preventDefault()}
        />
        <h1>Karl Angelo P. Dela Cruz</h1>
        <p>Fullstack Developer, Specializing in Mobile and Web Development</p>
    </section>
);

export default Hero;