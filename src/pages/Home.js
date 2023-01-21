import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
const Home = () => {
    return (
        <React.Fragment>
            <NavBar></NavBar>
            <div className="container mt-5">
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>Function</th>
                            <th>Available To</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <Link to="googleLogin">
                                    GoogleLogin
                                </Link>
                            </td>
                            <td>All Users</td>
                        </tr>
                        <tr>
                            <td>
                                <Link to="furtherdetails">
                                    Enter Further Details
                                </Link>
                            </td>
                            <td>All Users</td>
                        </tr>
                        <tr>
                            <td>
                                <Link to="availableuserroles">
                                    Manage Available User Roles
                                </Link>
                            </td>
                            <td>Super Admin</td>
                        </tr>
                        <tr>
                            <td>
                                <Link to="createUserRole">
                                    ➡ Create User Role
                                </Link>
                            </td>
                            <td>Super Admin</td>
                        </tr>
                        <tr>
                            <td>
                                <Link to="editUserRole/Moderator">
                                ➡ Edit User Role - Moderator
                                </Link>
                            </td>
                            <td>Super Admin</td>
                        </tr>
                        <tr>
                            <td>
                                <Link to="ShowUsersUnderRole/Moderator">
                                ➡ Show Users Under Role - Moderator
                                </Link>
                            </td>
                            <td>Super Admin</td>
                        </tr>
                        <tr>
                            <td>
                                <Link to="promoteDemoteUser">
                                    Promote or Demote the User
                                </Link>
                            </td>
                            <td>Super Admin</td>
                        </tr>
                        <tr>
                            <td>
                                <Link to="pendingrequests">
                                    Pending Login Approvals
                                </Link>
                            </td>
                            <td>Super Admin</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </React.Fragment>

    );
}
export default Home;