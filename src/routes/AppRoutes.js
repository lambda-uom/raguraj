import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AvailableUserRoles  from '../pages/AvailableUserRoles';
import CreateUserRole from '../pages/CreateUserRole';
import EditUserRole from '../pages/EditUserRole';
import GoogleLogin from '../pages/GoogleLogin';
import Home from '../pages/Home';
import PromoteDemote from '../pages/PromoteDemote';
import ShowUsersUnderRole from '../pages/SHowUsersUnderRole';
const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home></Home>} />
                <Route exact path="/availableuserroles" element={<AvailableUserRoles/>} />
                <Route exact path="/createUserRole" element={<CreateUserRole/>} />
                <Route exact path="/editUserRole/:userRole" element={<EditUserRole/>} />
                <Route exact path="/ShowUsersUnderRole/:userRole" element={<ShowUsersUnderRole/>} />
                <Route exact path="/promoteDemoteUser/" element={<PromoteDemote></PromoteDemote>} />
                <Route exact path="/googleLogin/" element={<GoogleLogin></GoogleLogin>} />
            </Routes>
        </BrowserRouter>
    );
}
export default AppRoutes;