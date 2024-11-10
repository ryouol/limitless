import React from 'react';
import { Link } from 'react-router-dom';
import '../styles.css';

const Toolbar = () => {
    return (
        <nav className="toolbar">
            <Link to="/learn-more" className="toolbar-link">Learn More</Link>
            <Link to="/who-we-are" className="toolbar-link">Who We Are</Link>
            <Link to="/contact-us" className="toolbar-link">Contact Us</Link>
        </nav>
    );
};

export default Toolbar;
