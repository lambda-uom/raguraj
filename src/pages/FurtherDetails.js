import React, { useEffect, useState } from "react";
import further from "../images/furtherDetaile.svg"
import axios from "axios";
import swal from 'sweetalert'
const FurtherDetails = () => {
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [gender, setGender] = useState("NA");
    const [dob, setDob] = useState();
    const [phone, setPhone] = useState();
    const [email, setEmail] = useState();
    const [department, setDepartment] = useState();
    const [jobTitle, setJobTitle] = useState();
    const [submitStatus, setSubmitStatus] = useState();
    const [submitMessage, setSubmitMessage] = useState();
    useEffect(() => {
        if (submitStatus === "success") {
            swal("Good job!", submitMessage, "success")
            setSubmitStatus();
        } else if (submitStatus === "duplicate") {
            swal("Warning",submitMessage , "warning")
            setSubmitStatus();
        } else if (submitStatus === false) {
            swal("Error","Error saving data to the database" , "error")
            setSubmitStatus();
        }
    }, [submitStatus,submitMessage])
    const submitFurtherDetails = (e) => {
        e.preventDefault();
        const postData = {
            firstName: firstName,
            lastName: lastName,
            gender: gender,
            dob: dob,
            phone: phone,
            email: email,
            department: department,
            jobTitle: jobTitle
        }
        axios.post('http://localhost:1337/authentication/addFurtherDetails', postData)
            .then((res) => {
                setSubmitStatus(res.data.status);
                setSubmitMessage(res.data.message);
            }).catch((error) => {
                setSubmitStatus(false);
            });
            
    }
    return (
        <React.Fragment>
            <div className="container mt-5">
                <center><img src={further} alt="further details"></img></center>
                <div className="card" style={{ "backgroundColor": "#DDEEF8" }}>
                    <div className="card-header">
                        <h5 className="card-title">Enter Further Details
                        </h5>
                    </div>
                    <form onSubmit={submitFurtherDetails}>
                        <div className="card-body">
                            <div className="row m-2">
                                <div className="col-md-6">
                                    <input type="text"
                                        className="form-control"
                                        placeholder="First Name"
                                        value={firstName}
                                        onChange={e => setFirstName(e.target.value)}
                                        required
                                    >
                                    </input>
                                </div>
                                <div className="col-md-6">
                                    <input required type="text"
                                        className="form-control"
                                        placeholder="Last Name"
                                        value={lastName}
                                        onChange={e => setLastName(e.target.value)}
                                    >
                                    </input>
                                </div>
                            </div>
                            <div className="row m-2">
                                <div className="col-md-6">
                                    <div className="form-control">
                                        <label>Gender : &nbsp;</label>
                                        <input required name="gender" checked={gender === "Male"} type="radio" value="Male"
                                            onChange={e => setGender(e.target.value)}
                                        />
                                        <label>&nbsp;Male&nbsp;</label>
                                        <input required name="gender" checked={gender === "Female"} type="radio" value="Female"
                                            onChange={e => setGender(e.target.value)}
                                        />
                                        <label>&nbsp;Female&nbsp;</label>
                                        <input required name="gender" checked={gender === "NA"} type="radio" value="NA"
                                            onChange={e => setGender(e.target.value)}
                                        />
                                        <label>&nbsp;Prefer not to say&nbsp;</label>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <input required type="text"
                                        className="form-control"
                                        placeholder="Date of Birth"
                                        onFocus={(e) => e.target.type = 'date'}
                                        value={dob}
                                        onChange={e => setDob(e.target.value)}
                                    >
                                    </input>
                                </div>
                            </div>
                            <div className="row m-2">
                                <div className="col-md-6">
                                    <input required type="text"
                                        className="form-control"
                                        placeholder="Phone Number"
                                        value={phone}
                                        onChange={e => setPhone(e.target.value)}>
                                    </input>
                                </div>
                                <div className="col-md-6">
                                    <input required type="email"
                                        className="form-control"
                                        placeholder="Email Address"
                                        value={email}
                                        onChange={e => setEmail(e.target.value)}
                                    >
                                    </input>
                                </div>
                            </div>
                            <div className="row m-2">
                                <div className="col-md-6">
                                    <select required className="form-control" onChange={e => setDepartment(e.target.value)}>
                                        <option value="" disabled selected> Select Department</option>
                                        <option value="IT">IT</option>
                                        <option value="HR">HR</option>
                                        <option value="ABC">Abc</option>
                                        <option value="XYZ">Xyz</option>
                                    </select>
                                </div>
                                <div className="col-md-6">
                                    <select required className="form-control" onChange={e => setJobTitle(e.target.value)}>
                                        <option value="" disabled selected> Select Job Title</option>
                                        <option value="Intern SE">Intern Software Engineer</option>
                                        <option value="Assistant Manager">Assistant Manager</option>
                                        <option value="Job Abc">Abc</option>
                                        <option value="Job Xyz">Xyz</option>
                                    </select>
                                </div>
                            </div>

                        </div>
                        <div className="card-footer bg-light">
                            <div className="row">
                                <div className="col-md-6">
                                    <input className="btn btn-outline-success form-control" type="submit" value="Submit Details"></input>
                                </div>
                                <div className="col-md-6">
                                    <input className="btn btn-outline-warning form-control" type="reset" value="Reset"></input>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </React.Fragment>
    );
}
export default FurtherDetails;



















