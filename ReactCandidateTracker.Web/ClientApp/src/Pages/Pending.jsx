
import React from 'react';
import { useStatusCounts } from "../StatusContext";
import CandidateTable from '../components/CandidateTable';

const Pending = () => {
    const { setStatus } = useStatusCounts();
    setStatus("pending");
    return (<CandidateTable />);

}

export default Pending;