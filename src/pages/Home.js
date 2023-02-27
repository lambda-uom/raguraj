import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
const Home = () => {
    // useEffect(() => {
    //     const theUser=JSON.parse(localStorage.getItem("user"));
    //     fetch("http://localhost:1337/authentication/checkTokenValidity", {
    //         method: "POST",
    //         headers: { "Content-Type": "application/json", },
    //         body: JSON.stringify({ authorization: theUser.token }),
    //     }).then((res) => {
    //         return res.json();
    //     }).then((data) => {
    //         console.log(data)
    //         // throw new Error(data?.message || data);
    //     }).catch((error) => {
    //         console.log(error?.message);
    //     });
    // });
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
                                <Link to="/login">
                                    Login
                                </Link>
                            </td>
                            <td>All Users</td>
                        </tr>
                        
                        <tr>
                            <td>
                                <Link to="/availableuserroles">
                                    Manage Available User Roles
                                </Link>
                            </td>
                            <td>Super Admin</td>
                        </tr>
                        <tr>
                            <td>
                                <Link to="/createUserRole">
                                    ➡ Create User Role
                                </Link>
                            </td>
                            <td>Super Admin</td>
                        </tr>
                        <tr>
                            <td>
                                <Link to="/editUserRole/Moderator">
                                    ➡ Edit User Role - Moderator
                                </Link>
                            </td>
                            <td>Super Admin</td>
                        </tr>
                        <tr>
                            <td>
                                <Link to="/ShowUsersUnderRole/Moderator">
                                    ➡ Show Users Under Role - Moderator
                                </Link>
                            </td>
                            <td>Super Admin</td>
                        </tr>
                        <tr>
                            <td>
                                <Link to="/promoteDemoteUser">
                                    Promote or Demote the User
                                </Link>
                            </td>
                            <td>Super Admin</td>
                        </tr>
                        <tr>
                            <td>
                                <Link to="/pendingrequests">
                                    Pending Login Approvals
                                </Link>
                            </td>
                            <td>System Admin</td>
                        </tr>
                        <tr>
                            <td>
                                <Link to="/hiredemployee">
                                    Hired Employee Dashboard
                                </Link>
                            </td>
                            <td>Hired Employee</td>
                        </tr>
                        <tr>
                            <td>
                                <Link to="/hiredemployee2">
                                    Hired Employee Dashboard - Final Project assignment request
                                </Link>
                            </td>
                            <td>Hired Employee</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </React.Fragment>

    );
}
export default Home;