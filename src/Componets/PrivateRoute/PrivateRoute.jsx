import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const{user, loading}= useContext(AuthContext);

    const loaction = useLocation();

    console.log(loaction.pathname)

    


    if (loading){
        return <div className="text-center"> <span className="loading my-[40px]  loading-spinner loading-lg"></span></div>
    }
    if(user){
        return children;
    }
    return <Navigate state={loaction.pathname} to='/login'></Navigate>;
        
    
};

export default PrivateRoute;