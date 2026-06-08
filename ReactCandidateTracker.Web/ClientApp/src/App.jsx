import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './Pages/Home';
import Add from './Pages/Add';
import Pending from './Pages/Pending';
import Confirmed from './Pages/Confirmed';
import Refused from './Pages/Refused';
import StatusCountContextComponent from './StatusContext';
import CandidateDetails from './Pages/CandidateDetails';

const App = () => {
    return (
        <StatusCountContextComponent>
            <Layout>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/add' element={<Add />} />
                    <Route path='/pending' element={<Pending />} />
                    <Route path='/refused' element={<Refused />} />
                    <Route path='/confirmed' element={<Confirmed />} />
                    <Route path='/candidatedetails/:id' element={<CandidateDetails />} />
                </Routes>
            </Layout>
        </StatusCountContextComponent>
    );
}

export default App;