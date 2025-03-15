import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";


const PrivateRoute = ({ children }) => {

    const { user, loading } = useAuth();
    const location = useLocation();

    if(loading) {
        return <div className="w-full mx-auto py-80"> <span className="loading loading-bars loading-xs"></span>
        <span className="loading loading-bars loading-sm"></span>
        <span className="loading loading-bars loading-md"></span>
        <span className="loading loading-bars loading-lg"></span> </div>
    }

    if(user) {
        return children;
    }

    return <Navigate to="/signin" state={{from: location}} replace></Navigate>
};

export default PrivateRoute;
