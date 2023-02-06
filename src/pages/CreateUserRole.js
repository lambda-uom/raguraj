import React from "react";
import NavBar from "../components/NavBar";
import perimssions from "../data/Permissions.json"
const CreateUserRole = () => {
    return (
        <React.Fragment>
            <NavBar></NavBar>
            <div className="container mt-3">
                <form>
                    <div className="card">
                        <div className="card-header">
                            <h5>Create New User Role</h5>
                        </div>
                        <div className="card-body">
                            <input type="text" className="form-control " placeholder="Enter new user role name :"></input>
                            <div className="form-control mt-3">
                                Select Permissions
                            </div>
                            <div className="row">
                            {
                                perimssions.map((item) => {
                                    return (
                                        <div className="form-check mt-1 col-md-4">
                                            <input className="form-check-input" type="checkbox" id={`p` + item.id}></input>
                                            <label className="form-check-label">
                                                {item.permission}
                                            </label>
                                        </div>
                                    )
                                })
                            }
                            </div>
                        </div>
                        <div className="card-footer">
                            <input type="submit" className="btn btn-primary" value="Create User Role"></input> &nbsp;
                            <input type="reset" className="btn btn-warning" value="Reset"></input>
                        </div>
                    </div>
                </form>
            </div>
        </React.Fragment>
    );
}
export default CreateUserRole;