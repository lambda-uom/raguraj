import React from "react";

const PromoteDemoteRow = (props) => {
    return (
        <React.Fragment>
            <tr className="align-middle">
                <th scope="row"><img draggable={false} className="rounded-circle" style={{ "width": "40px" }} alt="user" src={props.image}></img></th>
                <td>{props.username}</td>
                <td>{props.department}</td>
                <td>
                    <select className="form-control">
                        <option>System Admin</option>
                        <option>Supervisor</option>
                        <option>Hired Employee</option>
                        <option>Moderator</option>
                    </select>
                </td>
                <td><button type="button" className="btn btn-success form-control">Save</button></td>
                <td><button type="reset" className="btn btn-warning form-control">Reset</button></td>
                {/* <td>@mdo</td> */}
                
            </tr>
        </React.Fragment>
    );
}
export default PromoteDemoteRow;