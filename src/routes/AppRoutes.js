//React Imports
import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Util Imports
import RequireAuth from '../utils/RequireAuth';
import RedirectIfLoggedIn from '../utils/RedirectIfLoggedIn';

// Page Imports
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
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<RedirectIfLoggedIn><GoogleLogin /></RedirectIfLoggedIn>} />
                <Route exact path="/login/" element={<RedirectIfLoggedIn><GoogleLogin /></RedirectIfLoggedIn>} />
                <Route exact path="/home" element={<RequireAuth><Home /></RequireAuth>} />
                <Route exact path="/availableuserroles" element={<RequireAuth><AvailableUserRoles /></RequireAuth>} />
                <Route exact path="/createUserRole" element={<RequireAuth><CreateUserRole /></RequireAuth>} />
                <Route exact path="/editUserRole/:userRole" element={<RequireAuth><EditUserRole /></RequireAuth>} />
                <Route exact path="/ShowUsersUnderRole/:userRole" element={<RequireAuth><ShowUsersUnderRole /></RequireAuth>} />
                <Route exact path="/promoteDemoteUser/" element={<RequireAuth><PromoteDemote /></RequireAuth>} />
                <Route exact path="/pendingrequests/" element={<RequireAuth><PendingUserApproval /></RequireAuth>} />
                <Route exact path="/hiredemployee/" element={<RequireAuth><HiredEmployee /></RequireAuth>} />
                <Route exact path="/hiredemployee2/" element={<RequireAuth><HiredEmployee2 /></RequireAuth>} />
            </Routes>
        </BrowserRouter>
    );
}
export default AppRoutes;