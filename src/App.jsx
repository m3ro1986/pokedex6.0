import './styles/App.css';
import { useState } from 'react';
import Login from './pages/Login';
import { HashRouter, Route, Routes } from 'react-router-dom';
import ProtectedRoutes from './components/ProtectedRoutes';
import Pokedex from './pages/Pokedex';


function App() {
    const [count, setCount] = useState(0)

    return (
        <HashRouter>
            <Routes>
                <Route path='/' element={ <Login />} />
                
                <Route element={ <ProtectedRoutes />}>
                    <Route path='/pokedex' element={<Pokedex />}/>
                </Route>
            </Routes>
        </HashRouter>
    )
}

export default App
