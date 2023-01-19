import React from "react";
import NavBar from "../components/NavBar";

const CreateUserRole = () => {
    return (
        <React.Fragment>
            <NavBar></NavBar>
            <div className="container mt-3">
                <form>
                    <input type="text" className="form-control " placeholder="Enter new user role name :"></input>
                    <div className="alert alert-success mt-2">Select User Role Permissions</div>

                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value=""></input>
                            <label class="form-check-label">
                                Create learning materials
                            </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value=""></input>
                            <label class="form-check-label">
                                Edit learning materials
                            </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value=""></input>
                            <label class="form-check-label">
                                Delete learning materials
                            </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value=""></input>
                            <label class="form-check-label">
                                Create discussion forums
                            </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value=""></input>
                            <label class="form-check-label">
                                Edit discussion forums
                            </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value=""></input>
                            <label class="form-check-label">
                                Lock discussion forums
                            </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value=""></input>
                            <label class="form-check-label">
                                Rate on learning materials
                            </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value=""></input>
                            <label class="form-check-label">
                                Comment or Replying on learning materials
                            </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value=""></input>
                            <label class="form-check-label">
                                Create chapters
                            </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value=""></input>
                            <label class="form-check-label">
                                Edit chapters
                            </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value=""></input>
                            <label class="form-check-label">
                                Temproroily delete chapters
                            </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value=""></input>
                            <label class="form-check-label">
                                Delete chapters permanently
                            </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value=""></input>
                            <label class="form-check-label">
                                Create common chapters
                            </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value=""></input>
                            <label class="form-check-label">
                                Give permissions to additionally requested chapters
                            </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value=""></input>
                            <label class="form-check-label">
                                Assign default chapters to job title
                            </label>
                    </div>
                    <br></br>
                    <input type="submit" className="btn btn-primary" value="Create User Role"></input> &nbsp;
                    <input type="reset" className="btn btn-warning" value="Reset"></input>
                </form>
            </div> 
        </React.Fragment>
    );
}
export default CreateUserRole;