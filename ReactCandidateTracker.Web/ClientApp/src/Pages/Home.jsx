import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';

const Home = () => {
    const navigate = useNavigate();
    const onButtonClick = () => {
        navigate("/pending");
    }
    
    return (
        <div className="app-container">
            <div className="d-flex flex-column justify-content-center align-items-center">
                <h1>Welcome to the Candidate Tracker</h1>
                <button onClick={onButtonClick} className="btn btn-primary mb-3">View Pending Candidates</button>
            </div>
        </div>
    );
};

export default Home;