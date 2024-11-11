import React from 'react';
import { Link } from 'react-router-dom';
import '../styles.css';

const Toolbar = () => {
    return (
        <nav className="toolbar">
            <Link to="/learn-more" className="button-89">Learn More</Link>
            <Link to="/who-we-are" className="button-89">Who We Are</Link>
            <Link to="/contact-us" className="button-89">Contact Us</Link>
        </nav>
    );
};

export default Toolbar;
