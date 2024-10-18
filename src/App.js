import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import StudentRegistration from './Student_Register'; 

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/register" element={<StudentRegistration />} />
            </Routes>
        </Router>
    );
};

export default App;
