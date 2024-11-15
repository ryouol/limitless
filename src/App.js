import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import WhoWeAre from './components/WhoWeAre';
import LearnMore from './components/LearnMore';
import ContactUs from './components/ContactUs'; // Import the ContactUs component

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/who-we-are" element={<WhoWeAre />} />
                <Route path="/learn-more" element={<LearnMore />} />
                <Route path="/contact-us" element={<ContactUs />} /> {/* Add route for Contact Us page */}
            </Routes>
        </Router>
    );
};

export default App;
