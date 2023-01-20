import React from "react";
import further from "../images/furtherDetaile.svg"
const FurtherDetails = () => {
    return (
        <React.Fragment>
            <div className="container mt-5">
                <center><img src={further} alt="further details"></img></center>
                <div className="card" style={{ "backgroundColor": "#DDEEF8" }}>
                    <div className="card-header">
                        <h5 className="card-title">Enter Further Details</h5>
                    </div>
                    <div className="card-body">
                        <form>
                            <div className="row m-2">
                                <div className="col-md-6">
                                    <input type="text"
                                        className="form-control"
                                        placeholder="First Name">
                                    </input>
                                </div>
                                <div className="col-md-6">
                                    <input type="text"
                                        className="form-control"
                                        placeholder="Last Name">
                                    </input>
                                </div>
                            </div>
                            <div className="row m-2">
                                <div className="col-md-6">
                                    <div className="form-control">
                                        <label>Gender : &nbsp;</label>
                                        <input name="gender" type="radio" value="male" />
                                        <label>&nbsp;Male&nbsp;</label>
                                        <input name="gender" type="radio" value="male" />
                                        <label>&nbsp;Female&nbsp;</label>
                                        <input name="gender" type="radio" value="male" />
                                        <label>&nbsp;Other&nbsp;</label>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <input type="text"
                                        className="form-control"
                                        placeholder="Date of Birth"
                                        onFocus={(e) => e.target.type = 'date'}>
                                    </input>
                                </div>
                            </div>
                            <div className="row m-2">
                                <div className="col-md-6">
                                    <input type="text"
                                        className="form-control"
                                        placeholder="Phone Number">
                                    </input>
                                </div>
                                <div className="col-md-6">
                                    <input type="email"
                                        className="form-control"
                                        placeholder="Email Address">
                                    </input>
                                </div>
                            </div>
                            <div className="row m-2">
                                <div className="col-md-6">
                                    <select className="form-control">
                                        <option selected disabled> Select Department</option>
                                        <option>IT</option>
                                        <option>HR</option>
                                        <option>Abc</option>
                                        <option>Xyz</option>
                                    </select>
                                </div>
                                <div className="col-md-6">
                                    <select className="form-control">
                                        <option selected disabled> Select Job Title</option>
                                        <option>Intern Software Engineer</option>
                                        <option>Assistant Manager</option>
                                        <option>Abc</option>
                                        <option>Xyz</option>
                                    </select>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="card-footer bg-light">
                        <div className="row">
                            <div className="col-md-6">
                                <button className="btn btn-outline-success form-control" type="button">Save and Continue</button>
                            </div>
                            <div className="col-md-6">
                                <button className="btn btn-outline-warning form-control" type="button">Reset</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
export default FurtherDetails;