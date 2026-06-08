import React, { useState, useEffect } from 'react';
import { Link,useNavigate } from "react-router-dom";
import { useStatusCounts } from "../StatusContext";
import axios from 'axios';

const CandidateTable = () => {
    const { status, loadStatusCount } = useStatusCounts();
    const navigate = useNavigate();

    const [candidates, setCandidates] = useState([]);
    const loadCandidates = async () => {
        const { data } = await axios.get(`/api/candidate/getcandidates?status=${status}`);
        //console.log(status)
        setCandidates(data);
    }

    useEffect(() => {
     
        loadCandidates();
    }, [])

    const OnConfirmClick = async(id) => {
        await axios.post(`/api/candidate/updatestatus?candidateid=${id}&status=confirmed`)
        loadStatusCount()
        navigate("/confirmed")
    }
    const OnRefuseClick = async (id) => {
        await axios.post(`/api/candidate/updatestatus?candidateid=${id}&status=refused`)
        loadStatusCount()
        navigate("/refused")
    }


    return (<div className="container">
        {/*{console.log(candidates) }*/}
        <table className="table table-hover table-bordered table-striped">
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
                    return (
                        <tr key={c.id}>
                            {/*{console.log(c) }*/}
                            <td>
                                <Link to={`/candidatedetails/${c.id}`}>
                                    {`${c.firstName} ${c.lastName}`}
                                </Link>
                            </td>
                            <td>{c.email}</td>
                            <td>{c.phoneNumber}</td>
                            <td>{c.notes}</td>
                            <td>{c.status}</td>
                            {c.status === "Pending" ? <>
                                <td><button className="btn btn-outline-success w-30" onClick={()=>OnConfirmClick(c.id)}>Confirm</button></td>
                                <td><button className="btn btn-outline-danger" onClick={()=>OnRefuseClick(c.id) }>Refuse</button></td>
                            </> : ''}
                        </tr>
                    )
                })}
            </tbody>
        </table>

    </div>)

}
export default CandidateTable;