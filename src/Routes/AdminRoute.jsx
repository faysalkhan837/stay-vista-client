import { Navigate } from "react-router-dom";
import Loader from "../Components/Shared/Loader";
import UseRole from "../Hooks/UseRole";


const AdminRoute = ({children}) => {
    const [role, isLoading] = UseRole();
    if(isLoading) return <Loader></Loader>
    if(role === 'admin') {
        return children
    }else{
        <Navigate to='/dashbord'></Navigate>
    }
};

export default AdminRoute;