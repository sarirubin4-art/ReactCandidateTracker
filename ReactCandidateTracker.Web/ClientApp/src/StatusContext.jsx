import { createContext, useState, useEffect, useContext } from 'react';
import axios from 'axios';

const StatusContext = createContext();


const StatusCountContextComponent = (props) => {
    const [counts, setCounts] = useState({ pending:0, confirmed:0, refused:0 });
    const [status, setStatus] = useState("pending");

    const loadStatusCount = async () => {
        const { data } = await axios.get('/api/candidate/getstatuscounts');
        setCounts(data);
    }

    useEffect(() => {
        loadStatusCount();
    }, [])

    const contextObj = {
        counts,
        loadStatusCount,
        status,
        setStatus
    };

    return (
        <StatusContext.Provider value={contextObj}>
            {props.children}
        </StatusContext.Provider>
    )
}

const useStatusCounts = () => {
    return useContext(StatusContext);
}

export { useStatusCounts };
export default StatusCountContextComponent;