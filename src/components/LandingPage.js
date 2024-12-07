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
            
            {/* Figma Presentation Section */}
            <div className="figma-presentation">
                <iframe 
                    title="LimitLess Pitch"
                    style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
                    width="800"
                    height="450"
                    src="https://embed.figma.com/slides/HkfH1GQrIg4rhhRXGipBOY/LimitLess-Pitch?node-id=10-19&embed-host=share"
                    allowFullScreen
                />
            </div>

            <div className="investment-section">
                <LimitlessInvestment />
            </div>
            <Footer />
        </div>
    );
};
export default LandingPage;
