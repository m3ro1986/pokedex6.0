import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoutes = () => {

    const trainer = useSelector( state => state.trainerName )

    if( trainer ){
        return <Outlet />
    } else { 
        return <Navigate to='/' />
    }                    
};                       

export default ProtectedRoutes;