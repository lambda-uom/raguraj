import React from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import ShowUsersUnderTable from "../subComponents/ShowUsersUnderTableRow";
const ShowUsersUnderRole = () => {
    const { userRole } = useParams();
    return (
        <React.Fragment>
            <NavBar></NavBar>
            <div className="container mt-4">
                <div className="alert alert-success">
                    <h4>{userRole} Details</h4>

                </div>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Image</th>
                            <th scope="col">Name</th>
                            <th scope="col">Department</th>
                            {/* <th scope="col">Handle</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        <ShowUsersUnderTable
                            image="https://bootdey.com/img/Content/avatar/avatar1.png"
                            username="bootdey"
                            department="HR"
                        />
                        <ShowUsersUnderTable
                            image="https://bootdey.com/img/Content/avatar/avatar2.png"
                            username="Abc"
                            department="Finance"
                        />
                        <ShowUsersUnderTable
                            image="https://bootdey.com/img/Content/avatar/avatar3.png"
                            username="Def"
                            department="IT"
                        />
                        <ShowUsersUnderTable
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
export default ShowUsersUnderRole;