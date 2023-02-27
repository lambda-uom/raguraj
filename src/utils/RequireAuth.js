import { Navigate } from "react-router-dom"
import { useLocation } from "react-router-dom";
const RequireAuth = ({children}) => {
    const location = useLocation();
    //state={{path:location.pathname}}will pass requested url to the component

    if(! JSON.parse(localStorage.getItem("user"))?.email){
        return <Navigate to="/login" state={{path:location.pathname}} />
    }
    return children
}
export default RequireAuth