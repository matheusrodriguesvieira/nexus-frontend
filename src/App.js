import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Welcome from './Pages/Welcome/Welcome';
import Login from './Pages/Login/Login';
import HomePage from './Pages/HomePage/HomePage';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<Welcome />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/Homepage" element={<HomePage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;