import React from "react";
import NavBar from "../components/NavBar";
import "../App.css"
import { Link } from "react-router-dom";
import userroles from "../data/UserRoles.json";
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
                <table className="table">
                    <thead className="text-center">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">User Role</th>
                            <th scope="col">Number of Users</th>
                            <th scope="col">Show Users</th>
                            <th scope="col">Edit User Role</th>
                        </tr>
                    </thead>
                    <tbody className="text-center">
                        {
                            userroles.map((item) => {
                                return (
                                    <tr>
                                        <th scope="row">{item.id}</th>
                                        <td>{item.value}</td>
                                        <td>{item.count}</td>
                                        <td>
                                            <Link to={`/ShowUsersUnderRole/${item.value}`} className="btn form-control btn-outline-success btn-sm">Show Users</Link>
                                        </td>
                                        <td>
                                            <Link to={`/editUserRole/${item.value}`} className="btn form-control btn-outline-dark btn-sm">Edit User Role</Link>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>

            </div>

        </React.Fragment>
    );
}
export default AvailableUserRoles;