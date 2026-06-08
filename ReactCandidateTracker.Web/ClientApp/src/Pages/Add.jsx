import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { useStatusCounts } from "../StatusContext";
import axios from 'axios';

const Add = () => {
    const [candidate, setCandidate] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: 0,
        notes: '',
        status: 'pending'
    });
    const [isAdding, setIsAdding] = useState(true);


    const navigate = useNavigate();
    const { loadStatusCount } = useStatusCounts();

    const onInputChange = e => {
        const copy = candidate;
        copy[e.target.name] = e.target.value;
        setCandidate({ ...copy })
    }

    const onSubmitClick = async() => {
        await axios.post('/api/candidate/addcandidate', candidate);
        setIsAdding(false)
        loadStatusCount();
        navigate('/pending') 
    }

    return (
        <div className="container" style={{ marginTop: "80px "}}>
            <div className="row" style={{ marginTop: "20px" }}>
            <div className="col-md-6 offset-md-3">
                <div className="card card-body bg-light">
                <h4>Add Candidate</h4>
                    <div className="input-group">
                        <span className="input-group-text">First and last name</span>
                        <input type="text" placeholder="First Name" name="firstName" onChange={onInputChange} className="form-control" />
                            <input type="text" placeholder="Last Name" name="lastName" onChange={onInputChange} className="form-control" />
                    </div>
                    <div>
                        <input type="email" name="email" placeholder="Email" onChange={onInputChange} className="form-control" />
                    </div>
                    <div>
                        <input type="text" name="phoneNumber" placeholder="Phone Number" onChange={onInputChange} className="form-control" />
                    </div>
                    <div>
                            <textarea rows="5" className="form-control" name="notes" onChange={onInputChange }></textarea>
                    </div>
                        <button className="btn btn-outline-info w-50" onClick={onSubmitClick}>{!isAdding ? 'adding...' : 'Submit'}</button>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Add;