import React from "react";
import NavBar from "../components/NavBar";
import "../App.css"
import { Link } from "react-router-dom";
const AvailableUserRoles = () => {
    return (
        <React.Fragment>
            <NavBar></NavBar>
            <div className="container mt-4">
                <div className="alert alert-info">
                    <h5>Available User Roles</h5>
                </div>
                <Link to="/createUserRole" className="border border-dark btn btn-light form-control">+ Create New User Role</Link>
                <hr className="mt-3"></hr>
                <table className="table table-striped">
                    <thead className="text-center">
                        <tr>
                            <th scope="col">User Role</th>
                            <th scope="col">Number of Users</th>
                            <th scope="col">Show Users</th>
                            <th scope="col">Edit User Role</th>
                        </tr>
                    </thead>
                    <tbody className="text-center">
                        <tr>
                            <th scope="row">System Admin</th>
                            <td>3</td>
                            <td><Link to="/ShowUsersUnderRole/System Admin" className="btn btn-success btn-sm">Show Users</Link></td>
                            <td><Link to="/editUserRole/System Admin" className="btn btn-info btn-sm">Edit User Role</Link></td>
                        </tr>
                        <tr>
                            <th scope="row">Content Creator</th>
                            <td>10</td>
                            <td><Link to="/ShowUsersUnderRole/Content Creator" className="btn btn-success btn-sm">Show Users</Link></td>
                            <td><Link to="/editUserRole/Content Creator" className="btn btn-info btn-sm">Edit User Role</Link></td>
                        </tr>
                        <tr>
                            <th scope="row">Supervisor</th>
                            <td>30</td>
                            <td><Link to="/ShowUsersUnderRole/Supervisor" className="btn btn-success btn-sm">Show Users</Link></td>
                            <td><Link to="/editUserRole/Supervisor" className="btn btn-info btn-sm">Edit User Role</Link></td>
                        </tr>
                        <tr>
                            <th scope="row">Hired Employee</th>
                            <td>300</td>
                            <td><Link to="/ShowUsersUnderRole/Hired Employee" className="btn btn-success btn-sm">Show Users</Link></td>
                            <td><Link to="/editUserRole/Hired Employee" className="btn btn-info btn-sm">Edit User Role</Link></td>
                        </tr>
                        <tr>
                            <th scope="row">Moderator</th>
                            <td>2</td>
                            <td><Link to="/ShowUsersUnderRole/Moderator" className="btn btn-success btn-sm">Show Users</Link></td>
                            <td><Link to="/editUserRole/Moderator" className="btn btn-info btn-sm">Edit User Role</Link></td>
                        </tr>

                    </tbody>
                </table>

            </div>

        </React.Fragment>
    );
}
export default AvailableUserRoles;