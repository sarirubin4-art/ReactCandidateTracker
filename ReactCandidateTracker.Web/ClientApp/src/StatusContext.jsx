import { createContext, useState, useEffect, useContext } from 'react';
import axios from 'axios';

const StatusContext = createContext();


const StatusCountContextComponent = (props) => {
    const [counts, setCounts] = useState([]);
    const [status, setStatus] = useState("");

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