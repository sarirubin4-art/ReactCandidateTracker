
import React, { useState,useEffect } from 'react';
import { useStatusCounts } from "../StatusContext";
import CandidateTable from '../components/CandidateTable';

const Pending = () => {
    const { setStatus } = useStatusCounts();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const Load = async () => {
            await setStatus("pending");
            setLoading(false)
        }
        Load();
    }, [])
    if (loading) { return <div>Loading...</div> };

    return ( < CandidateTable />);
}

export default Pending;