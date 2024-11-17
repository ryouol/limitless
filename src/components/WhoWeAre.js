import React from 'react';
import '../styles.css';
import jackyImage from '../assets/jacky.jpg';
import royImage from '../assets/roy.JPG';

const WhoWeAre = () => {
    return (
        <div className="who-we-are">
            <h1 className="team-title">OUR TEAM</h1>
            <div className="team-container">
                <div className="team-member">
                    <img src={jackyImage} alt="Jacky Zhao" className="team-photo" />
                    <div className="team-info">
                        <h2 className="team-name">Jacky Zhao</h2>
                        <p>- Co-Founder<br />
                            - Stanford Econ + BioE<br />
                            - Prev. @ NFX Capital (VC)<br />
                            - Prev. @ Bregal Sagemount (Growth Equity)<br />
                            - Prev. @ YC-Healthtech W24</p>
                    </div>
                </div>
                <div className="team-member">
                    <img src={royImage} alt="Roy Luo" className="team-photo" />
                    <div className="team-info">
                        <h2 className="team-name">Roy Luo</h2>
                        <p>- Co-Founder<br />
                            - UWaterloo ECE<br />
                            - SWE @ Tesla<br />
                            - Prev. SWE @ AES (Cambridge-based biotech)<br />
                            - Prev. Lead SWE @ Vancouver-based PropTech startup</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhoWeAre;
