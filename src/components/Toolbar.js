import React from 'react';
import { Link } from 'react-router-dom';
import '../styles.css';

const Toolbar = () => {
    return (
        <nav className="toolbar">
            <div className="toolbar-content">
                <div className="toolbar-left">
                    <Link to="/" className="logo-link">Limitless</Link>
                </div>
                <div className="toolbar-links">
                    <Link to="/learn-more" className="nav-link">Learn More</Link>
                    <Link to="/who-we-are" className="nav-link">Who We Are</Link>
                    <Link to="/contact-us" className="nav-link">Contact Us</Link>
                </div>
            </div>
        </nav>
    );
};

export default Toolbar;
