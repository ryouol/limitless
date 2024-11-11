import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import WhoWeAre from './components/WhoWeAre';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/who-we-are" element={<WhoWeAre />} />
                {/* Add other routes as needed */}
            </Routes>
        </Router>
    );
};

export default App;
