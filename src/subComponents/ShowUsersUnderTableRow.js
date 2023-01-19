import React from "react";
const ShowUsersUnderTable = (props) => {
    return (
        <React.Fragment>
            <tr className="align-middle">
                <th scope="row"><img draggable={false}className="rounded-circle" style={{"width":"40px"}} alt="user" src={props.image}></img></th>
                <td>{props.username}</td>
                <td>{props.department}</td>
                {/* <td>@mdo</td> */}
            </tr>
        </React.Fragment>
    );
}
export default ShowUsersUnderTable;