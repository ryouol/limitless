import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';

const LearnMore = () => <div>Learn More content will go here.</div>;
const WhoWeAre = () => <div>Who We Are content will go here.</div>;
const ContactUs = () => (
    <div>
        <h2>Contact Us</h2>
        <form>
            <label>Email:</label>
            <input type="email" name="email" placeholder="Your email" required />
            <label>Message:</label>
            <textarea name="message" placeholder="Write your message here" required />
            <button type="submit">Send</button>
        </form>
    </div>
);

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/learn-more" element={<LearnMore />} />
                <Route path="/who-we-are" element={<WhoWeAre />} />
                <Route path="/contact-us" element={<ContactUs />} />
            </Routes>
        </Router>
    );
};

export default App;
