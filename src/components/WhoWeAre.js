import React from 'react';
import { Building2, Rocket, Users } from 'lucide-react';
import '../styles.css';

const WhoWeAre = () => {
  return (
    <div className="who-we-are">
      <div className="hero-section">
        <h1>Revolutionizing Venture Capital</h1>
        <p>
          At Limitless, we're building the future of venture capital through innovation, 
          technology, and a deep understanding of the startup ecosystem.
        </p>
      </div>

      <div className="vision-cards">
        <div className="vision-card">
          <Building2 />
          <h3>Our Foundation</h3>
          <p>Built on expertise from leading institutions and companies in tech and finance</p>
        </div>

        <div className="vision-card">
          <Rocket />
          <h3>Our Mission</h3>
          <p>Transform the VC landscape through innovative technology and deep industry insights</p>
        </div>

        <div className="vision-card">
          <Users />
          <h3>Our Impact</h3>
          <p>Empowering the next generation of groundbreaking startups and founders</p>
        </div>
      </div>

      <div className="team-section">
        <h2>Our Team</h2>
        <div className="team-grid">
          <div className="team-member">
            <h3>Jacky Zhao</h3>
            <p className="role">Co-Founder</p>
            <ul>
              <li>Stanford Economics & Bioengineering</li>
              <li>Former Investor @ NFX Capital (VC)</li>
              <li>Former Investor @ Bregal Sagemount (Growth Equity)</li>
              <li>YC-Healthtech W24</li>
            </ul>
          </div>
          <div className="team-member">
            <h3>Roy Luo</h3>
            <p className="role">Co-Founder</p>
            <ul>
              <li>UWaterloo Electrical & Computer Engineering</li>
              <li>Software Engineer @ Tesla</li>
              <li>Former SWE @ AES (Cambridge-based biotech)</li>
              <li>Former Lead SWE @ Vancouver-based PropTech startup</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
