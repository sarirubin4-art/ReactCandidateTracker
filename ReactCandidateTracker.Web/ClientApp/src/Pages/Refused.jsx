import React, { useEffect, useState } from 'react';
import { useStatusCounts } from "../StatusContext";
import CandidateTable from '../components/CandidateTable';

const Refused = () => {
    const { setStatus } = useStatusCounts();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
            const Load = async () => {
                await setStatus("refused");
                setLoading(false)
            }
            Load();
    }, [])
    if (loading) { return <div>Loading...</div> };

    return (< CandidateTable />);

}
export default Refused;