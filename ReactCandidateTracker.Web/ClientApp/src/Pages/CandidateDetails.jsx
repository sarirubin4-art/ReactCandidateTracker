import React, { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";
import axios from 'axios';

const CandidateDetails = () => {

    const [candidate, setCandidate] = useState({ firstName: '', lastName: '', email: '', phoneNumber: '', notes: '', status: '' });
    const [isLoading, setIsLoading] = useState(true);
    const { id } = useParams()

    useEffect(() => {
        const GetCandidate = async () => {
            const { data } = await axios.get(`/api/candidate/getcandidate?id=${id}`);
            setCandidate(data)
            setIsLoading(false);
        }
        GetCandidate();
    })

    return (<div className="container" style={{ marginTop: "80px " }}>
        <div className="row" style={{ marginTop: "20px" }}>
            <div className="col-md-6 offset-md-3">
                <div className="card card-body bg-light">
                    <h5>Candidate Details for:</h5>
                    <h4>{`${candidate.firstName} ${candidate.lastName}`}</h4>
                    <h6>Email: {candidate.email}</h6>
                    <h5>Phone Number: {candidate.phoneNumber}</h5>
                    <h5>Status: {candidate.status}</h5>
                    <h5>Notes: {candidate.notes}</h5>
                </div>
            </div>
        </div>
    </div>)
}

export default CandidateDetails;
