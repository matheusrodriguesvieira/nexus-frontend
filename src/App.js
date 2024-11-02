import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Welcome from './Pages/Welcome/Welcome';
import Login from './Pages/Login/Login';
import HomePage from './Pages/HomePage/HomePage';
import Cadastro from './Pages/Cadastro/Cadastro';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<Welcome />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/Homepage" element={<HomePage />} />
                <Route path="/Cadastro" element={<Cadastro />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;