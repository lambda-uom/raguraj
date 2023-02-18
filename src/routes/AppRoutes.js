import React, { useEffect, useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AvailableUserRoles from '../pages/AvailableUserRoles';
import CreateUserRole from '../pages/CreateUserRole';
import HiredEmployee from '../pages/Dashboard/HiredEmployee';
import HiredEmployee2 from '../pages/Dashboard/HiredEmployee2';
import EditUserRole from '../pages/EditUserRole';
import GoogleLogin from '../pages/GoogleLogin';
import Home from '../pages/Home';
import PendingUserApproval from '../pages/PendingUserApproval';
import PromoteDemote from '../pages/PromoteDemote';
import ShowUsersUnderRole from '../pages/SHowUsersUnderRole';
const AppRoutes = () => {
    const [user, setUser] = useState({});
    const [tokenStatus, settokenstatus] = useState({});

    useEffect(() => {
        const theUser = localStorage.getItem("user");
        if (theUser && !theUser.includes("undefined")) {
            setUser(JSON.parse(theUser));
        }
    }, []);

    const tokenValidation = () => {
        try {
            const decodedUser = JSON.parse(localStorage.getItem("user"));
            fetch("http://localhost:1337/authentication/checkTokenValidity", {
                method: "POST",
                headers: { "Content-Type": "application/json", },
                body: JSON.stringify({ authorization: decodedUser.token }),
            }).then((res) => {
                return res.json();
            }).then((data) => {
                settokenstatus(false)
                if (data.status === false) {
                    localStorage.removeItem("user");
                    window.location.reload();
                }
            }).catch((error) => {
                console.log(error?.message);
            });
        } catch {
            console.log("Login !")
        }
        return tokenStatus;
    }




    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={(user?.email) ? <Navigate to="/home" /> : <GoogleLogin />} />
                <Route exact path="/login/" element={(user?.email) ? <Navigate to="/home" /> : <GoogleLogin />} />
                <Route exact path="/home" element={(user?.email) ? <Home /> : <Navigate to="/login" />} />
                <Route exact path="/availableuserroles" element={(user?.email) ? <AvailableUserRoles /> : <Navigate to="/login" />} />
                <Route exact path="/createUserRole" element={(user?.email) ? <CreateUserRole /> : <Navigate to="/login" />} />
                <Route exact path="/editUserRole/:userRole" element={(user?.email) ? <EditUserRole /> : <Navigate to="/login" />} />
                <Route exact path="/ShowUsersUnderRole/:userRole" element={(user?.email) ? <ShowUsersUnderRole /> : <Navigate to="/login" />} />
                <Route exact path="/promoteDemoteUser/" element={(user?.email) ? <PromoteDemote /> : <Navigate to="/login" />} />
                <Route exact path="/pendingrequests/" element={(user?.email) ? <PendingUserApproval /> : <Navigate to="/login" />} />
                <Route exact path="/hiredemployee/" element={(user?.email) ? <HiredEmployee /> : <Navigate to="/login" />} />
                <Route exact path="/hiredemployee2/" element={(user?.email) ? <HiredEmployee2 /> : <Navigate to="/login" />} />
            </Routes>
        </BrowserRouter>
    );
}
export default AppRoutes;