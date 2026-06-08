import React, { useState, useEffect } from 'react';
import { useStatusCounts } from "../StatusContext";
import CandidateTable from '../components/CandidateTable';

const Confirmed = () => {
    const [loading, setLoading] = useState(true);
    const { setStatus } = useStatusCounts();
    useEffect(() => {
        const Load = async () => {
            await setStatus("confirmed");
            setLoading(false)
        }
        Load();
    }, [])
    if (loading) { return <div>Loading...</div> };

    return (< CandidateTable />);
}

export default Confirmed;


