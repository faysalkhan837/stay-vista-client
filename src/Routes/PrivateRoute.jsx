
import { Navigate, useLocation } from 'react-router-dom';
import UseAuth from '../Hooks/UseAuth';
import Loader from '../Components/Shared/Loader';

const PrivateRoute = ({children}) => {
    const {user, loding} = UseAuth();
    const location = useLocation();
    
    if(loding) return <Loader></Loader>
    if(user) return children;
    return <Navigate to='/login' state={location.pathname} replace></Navigate>
};

export default PrivateRoute;