import React, { useState } from 'react';
import {Link} from "react-router-dom";
import  { useStatusCounts } from "../StatusContext";

const CandidateTable = () => {
    const { status ,setStatus} = useStatusCounts();

    const [candidates, setCandidates] = useState([]);

    useEffect(() => {
        const loadCandidates = async () => {
            const { data } = await axios.get(`/api/candidate/getcandidates?status=${status}`);
            setCandidates(data);
        }
        loadCandidates();
        setStatus('');
    }, [])

    return (<div className="container">
        <div className="table table-hover table-bordered table-striped">
            <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone Number</th>
                        <th>Notes</th>
                        <th>Status</th>
                    </tr>
            </thead>
            <tbody>
            {candidates.map(c => {
                <Link to={`/candidatedetails?id=${c.id}`}>
                    <tr>
                        <td>{`${c.firstName} ${c.lastName}`}</td>
                        <td>{c.email}</td>
                        <td>{c.phoneNumber}</td>
                        <td>{c.Notes}</td>
                        <td>{c.status}</td>
                    </tr>
                </Link>
                })}
            </tbody>
        </div>

    </div>)

}
export default CandidateTable;