// import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom"
import { useLocation } from "react-router-dom";
// import axios from "axios";
// import {logout} from "../components/NavBar"
const RequireAuth = ({ children }) => {
    // const navigate = useNavigate();
    // const [tokenValidity, setTokenValidity] = useState();
    const userData = JSON.parse(localStorage.getItem("user"));
    // useEffect(() => {
    //     axios.post('http://localhost:1337/authentication/verifyToken', { token: userData.token })
    //         .then((res) => {
    //             if (res.data.status === true) {
    //                 setTokenValidity(true);
    //             } else {
    //                 setTokenValidity(false);
    //                 localStorage.removeItem("user");
    //                 navigate("/login", { replace: true });
    //             }
    //         }).catch((error) => {
    //             console.log(error)
    //         });
    // }, [userData,navigate])

    const location = useLocation();
    //state={{path:location.pathname}}will pass requested url to the component

    // if (userData?.email && tokenValidity) {
    if (userData?.email) {
        return children
    } else {
        return <Navigate to="/login" state={{ path: location.pathname }} />
    }
}
export default RequireAuth