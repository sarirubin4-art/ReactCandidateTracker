import React from 'react';
import { useStatusCounts } from "../StatusContext";
import CandidateTable from '../components/CandidateTable';

const Refused = () => {
    const { setStatus } = useStatusCounts();
    setStatus("refused");
    return (<CandidateTable />);

}
export default Refused;