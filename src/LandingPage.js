import React, { useState } from 'react';
import './landingpage.css';
import RegisterGif from './Assets/register.gif';
import LogoImage from './Assets/Daltin_Logo_TM (1).png';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const LandingPage = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const navigate = useNavigate(); // Initialize useNavigate

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    const handleRegisterClick = () => {
        navigate('/register'); // Navigate to the registration page
    };

    return (
        <div>
            {/* Header */}
            <header>
                <img src={LogoImage} alt="Logo" className="logo-image" />
                <div className="burger" onClick={toggleNav}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <nav className={isNavOpen ? 'active' : ''}>
                    <a target='_blank' href="https://www.linkedin.com/in/mohammadkashif-patel/">LinkedIn</a>
                    <a target='_blank' href="https://github.com/KashifTawakkali">Github</a>
                    <a target='_blank' href="https://www.facebook.com/profile.php?id=61564728474120">Facebook</a>
                    <a target='_blank' href="https://www.instagram.com/tawakkalipatil/?igsh=MTJhdGZxOGhvbWZoYQ%3D%3D">Instagram</a>
                    <a target='_blank' href="https://3d-portfolio-tau-ecru.vercel.app">Portfolio</a>
                </nav>
                <button onClick={handleRegisterClick}>Register</button> {/* Handle navigation on click */}
            </header>

            {/* Main Section */}
            <main>
                {/* Text Section */}
                <div className="text-section">
                    <h1 className="animate-title">Student Register</h1>
                    <p className="animate-text">
                        Student registration is a critical process in educational institutions, whether for schools, colleges, or universities. It involves collecting and organizing relevant information about students who are enrolling in a program or course. The registration process serves multiple purposes, including confirming eligibility, gathering personal data, managing academic records, and facilitating communication between students and the institution.

                        A well-designed student registration journey should provide a seamless, user-friendly experience that minimizes errors, ensures accurate data collection, and leaves a positive impression on students.
                    </p>
                    <button className="glow-on-hover" onClick={handleRegisterClick}> Register</button> {/* Handle navigation on click */}
                </div>

                {/* Illustration Section */}
                <div className="illustration-section">
                    <img
                        src={RegisterGif}
                        alt="Illustration"
                        style={{ borderRadius: '15px' }}
                    />
                </div>
            </main>
        </div>
    );
};

export default LandingPage;
