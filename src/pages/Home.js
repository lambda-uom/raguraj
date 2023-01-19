import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
    return (
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
                            <Link to="availableuserroles">
                                Available User Roles
                            </Link>
                        </td>
                        <td>Super Admin</td>
                    </tr>
                    <tr>
                        <td>
                            <Link to="createUserRole">
                                Create User Role
                            </Link>
                        </td>
                        <td>Super Admin</td>
                    </tr>
                    <tr>
                        <td>
                            <Link to="editUserRole/Moderator">
                                Edit User Role - Moderator
                            </Link>
                        </td>
                        <td>Super Admin</td>
                    </tr>
                    <tr>
                        <td>
                            <Link to="ShowUsersUnderRole/moderator">
                                Show Users Under Role - Moderator
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
                </tbody>
            </table>
        </div>
    );
}
export default Home;