import React from 'react';
import '../styles.css';

const LearnMore = () => {
    return (
        <div className="learn-more">
            <section className="learn-more-section">
                <h1 className="section-title">Purpose</h1>
                <p className="section-content">
                    <strong>Commoditize</strong> access to VC funds for the <strong>ordinary</strong> people, 
                    while <strong>revolutionizing</strong> traditional <strong>GP-LP</strong> relationships 
                    and fund return.
                </p>
            </section>
            <section className="learn-more-section">
                <h1 className="section-title">The Problem</h1>
                <p className="section-content">
                    Access to invest in <strong>notable</strong> VCs’ new funds is <strong>gate-kept</strong> by institutional LPs, 
                    and a <strong>20-80</strong> split of returns remains the <strong>standard</strong> across the industry.
                </p>
            </section>
            <section className="learn-more-section">
                <h1 className="section-title">Introducing: LimitLess</h1>
                <p className="section-content">
                    • The <strong>first</strong> investment app to offer stakes in top VC funds for <strong>accredited individuals</strong>.<br />
                    • For GPs: the <strong>first</strong> LP that takes a significantly lower percentage of return than industry standards.
                </p>
            </section>
        </div>
    );
};

export default LearnMore;
