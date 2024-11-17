import React from 'react';
import { Link } from 'react-router-dom';
import Toolbar from './Toolbar';
import Footer from './footer';
import '../styles.css';
import logo from '../assets/logo.png';
import LimitlessInvestment from './LimitlessInvestment';

const LandingPage = () => {
    return (
        <div className="landing-page">
            <Toolbar />
            <div className="hero-section">
                <img src={logo} alt="Limitless Logo" className="logo" />
                <h1 className="title">We're Building Limitless, Democratizing Venture Capital.</h1>
                <div className="hero-buttons">
                    <Link to="/learn-more">
                        <button className="action-button primary">Learn More</button>
                    </Link>
                    <Link to="/contact-us">
                        <button className="action-button secondary">Contact Us</button>
                    </Link>
                </div>
                <div className="scroll-indicator">
                    <span>Scroll to explore</span>
                    <div className="scroll-arrow">↓</div>
                </div>
            </div>
            <div className="investment-section">
                <LimitlessInvestment />
            </div>
            <Footer />
        </div>
    );
};
export default LandingPage;
