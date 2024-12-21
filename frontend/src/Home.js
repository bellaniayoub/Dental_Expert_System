// src/HomePage.js
import React, { useState } from 'react';
import './Home.css';

const HomePage = () => {
    const [diagnosis, setDiagnosis] = useState('');

    const handleDiagnosisSelect = (choice) => {
        setDiagnosis(choice);
    };

    return (
        <div className={`container ${diagnosis}`}>
            <nav className="navbar">
                <h1 className="navbar-title">Dental Expert System</h1>
                <ul className="navbar-links">
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
            <div className="content">
                <p className="description">Select a dental diagnosis option below:</p>
                <div className="options">
                    <button className="option-button" onClick={() => handleDiagnosisSelect('Cavity')}>
                        Cavity
                    </button>
                    <button className="option-button" onClick={() => handleDiagnosisSelect('Gum_Disease')}>
                        Gum Disease
                    </button>
                    <button className="option-button" onClick={() => handleDiagnosisSelect('Tooth_Sensitivity')}>
                        Tooth Sensitivity
                    </button>
                </div>
                {diagnosis && (
                    <div className="result">
                        <h2>You selected: {diagnosis}</h2>
                        <p>Here are some recommendations for {diagnosis}...</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default HomePage;