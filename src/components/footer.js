import React from 'react';
import '../styles.css';

const Footer = () => {
    return (
        <footer className="footer">
            © {new Date().getFullYear()} Limitless. All rights reserved.
        </footer>
    );
};

export default Footer;
