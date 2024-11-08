// src/components/LandingPage.js
import React from 'react';
import '../styles.css';
import logo from './logo.png';

const LandingPage = () => {
    return (
        <div className="landing-page">
            <img src={logo} alt="Limitless Logo" className="logo" />
            <h1 className="title">We’re building Limitless, democratizing venture capital.</h1>
        </div>
    );
};

export default LandingPage;
