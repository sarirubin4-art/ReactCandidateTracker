import React from 'react';
import { useStatusCounts } from "../StatusContext";
import CandidateTable from '../components/CandidateTable';

const Confirmed = () => {
    const { setStatus } = useStatusCounts();
    setStatus("confirmed");
    return (<CandidateTable />);

}

export default Confirmed;