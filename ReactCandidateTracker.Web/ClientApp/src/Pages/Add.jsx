import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useStatusCounts } from "../StatusContext";

const Add = () => {
    const [candidate, setCandidate] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: 0,
        notes: '',
        status: 'pending'
    });

    const navigate = useNavigate();
    const { loadStatusCounts } = useStatusCounts();

    const onInputChange = e => {
        const copy = candidate;
        copy[e.target.name] = e.target.value;
        setCandidate({...copy})
    }

    const onSubmitClick = () => {
         axios.post('/api/candidate/addcandidate', candidate);
        loadStatusCounts();
        navigate('/pending');
    }

    return (
        <div className="card">
            <div className="input-group">
                <span class="input-group-text">First and last name</span>
                <input type="text" placeholder="First Name" name="firstName" onChange={onInputChange} className="form-control" />
                <input type="text" placeholder="Last Name" name="lastName" className="form-control" />
            </div>
            <div>
                <input type="email" name="email" placeholder="Email" onChange={onInputChange} className="form-control"/>
            </div>
            <div>
                <input type="text" name="phoneNumber" placeholder="Phone Number" onChange={onInputChange} className="form-control" />
            </div>
            <div>
            <textarea rows="5" className="form-control" name="notes"></textarea>
            </div>
            <button className="btn btn-outline-info w-50" onClick={onSubmitClick}>Submit</button>
        </div>
    )
}

export default Add;