import React from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";

const EditUserRole = () => {
    const{userRole}=useParams();
    return (
        <React.Fragment>
            <NavBar></NavBar>
            <div className="container mt-3">
                <form>
                    <input type="text" className="form-control " placeholder="Enter new user role name :" value={userRole}></input>
                    <div className="alert alert-success mt-2">Select User Role Permissions</div>

                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value=""></input>
                            <label className="form-check-label">
                                Create learning materials
                            </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value=""></input>
                            <label className="form-check-label">
                                Edit learning materials
                            </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value=""></input>
                            <label className="form-check-label">
                                Delete learning materials
                            </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" checked value=""></input>
                            <label className="form-check-label">
                                Create discussion forums
                            </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value=""></input>
                            <label className="form-check-label">
                                Edit discussion forums
                            </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" checked value=""></input>
                            <label className="form-check-label">
                                Lock discussion forums
                            </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value=""></input>
                            <label className="form-check-label">
                                Rate on learning materials
                            </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" checked value=""></input>
                            <label className="form-check-label">
                                Comment or Replying on learning materials
                            </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value=""></input>
                            <label className="form-check-label">
                                Create chapters
                            </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value=""></input>
                            <label className="form-check-label">
                                Edit chapters
                            </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" checked value=""></input>
                            <label className="form-check-label">
                                Temproroily delete chapters
                            </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value=""></input>
                            <label className="form-check-label">
                                Delete chapters permanently
                            </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value=""></input>
                            <label className="form-check-label">
                                Create common chapters
                            </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" checked value=""></input>
                            <label className="form-check-label">
                                Give permissions to additionally requested chapters
                            </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value=""></input>
                            <label className="form-check-label">
                                Assign default chapters to job title
                            </label>
                    </div>
                    <br></br>
                    <input type="submit" className="btn btn-primary" value="Edit User Role"></input> &nbsp;
                    <input type="reset" className="btn btn-warning" value="Reset"></input>
                </form>
            </div> 
        </React.Fragment>
    );
}
export default EditUserRole;