import React from "react";
import NavBar from "../components/NavBar";
import PromoteDemoteRow from "../subComponents/PromoteDemoteRow";
const PromoteDemote = () => {
    return (
        <React.Fragment>
            <NavBar></NavBar>

            <div className="container mt-5">
                <div className="alert alert-success">Promote or Demote User</div>
                <select className="form-control">
                    <option disabled> Select User Role to View</option>
                    <option>System Admin</option>
                    <option>Supervisor</option>
                    <option>Hired Employee</option>
                    <option>Moderator</option>
                </select>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Image</th>
                            <th scope="col">Name</th>
                            <th scope="col">Department</th>
                            <th scope="col">Select New Role</th>
                            <th scope="col">Save</th>
                            <th scope="col">Reset</th>
                        </tr>
                    </thead>
                    <tbody>
                        <PromoteDemoteRow
                            image="https://bootdey.com/img/Content/avatar/avatar1.png"
                            username="bootdey"
                            department="HR"
                        />
                        <PromoteDemoteRow
                            image="https://bootdey.com/img/Content/avatar/avatar2.png"
                            username="Abc"
                            department="Finance"
                        />
                        <PromoteDemoteRow
                            image="https://bootdey.com/img/Content/avatar/avatar3.png"
                            username="Def"
                            department="IT"
                        />
                        <PromoteDemoteRow
                            image="https://bootdey.com/img/Content/avatar/avatar4.png"
                            username="Xyz"
                            department="Finance"
                        />
                    </tbody>
                </table>
            </div>

        </React.Fragment>
    );
}
export default PromoteDemote;