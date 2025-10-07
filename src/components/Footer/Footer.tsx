import React from 'react';
import './Footer.css';

const Footer: React.FC = () => (
    <footer className="portfolio-footer">
        <p>&copy; {new Date().getFullYear()} Karl Angelo P. Dela Cruz. All rights reserved.</p>
    </footer>
);

export default Footer;
