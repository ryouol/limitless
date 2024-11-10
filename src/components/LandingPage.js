import React from 'react';
import { Link } from 'react-router-dom';
import Toolbar from './Toolbar';
import '../styles.css';
import logo from './logo.png';

const LandingPage = () => {
    return (
        <div className="landing-page">
            <Toolbar /> {/* Add Toolbar here */}
            <img src={logo} alt="Limitless Logo" className="logo" />
            <h1 className="title">We’re Building Limitless, Democratizing Venture Capital.</h1>
            <div className="buttons">
                <Link to="/learn-more">
                    <button className="button-89" role="button">Learn More</button>
                </Link>
                <Link to="/contact-us">
                    <button className="button-89" role="button">Contact Us</button>
                </Link>
            </div>
        </div>
    );
};

export default LandingPage;
