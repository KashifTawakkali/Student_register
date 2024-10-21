import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import StudentRegistration from './Student_Register';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
    return (
        <Router>
            <div>
                {/* ToastContainer should be outside of Routes */}
                <ToastContainer position="top-right" autoClose={3000} hideProgressBar />

                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/register" element={<StudentRegistration />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
