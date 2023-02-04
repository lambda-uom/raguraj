import React from "react";
import { useEffect, useState } from 'react';
import jwt_decode from "jwt-decode";
import axios from "axios";
import swal from 'sweetalert'
import FurtherDetails from "./FurtherDetails";
const GoogleLogin = () => {
    const [user, setUser] = useState({});
    const [isUserAvailable, setIsUserAvailable] = useState(true);

    function handleCallbackResponse(response) {
        // console.log("Encoded JWT ID token: " + response.credential);
        var userObject = jwt_decode(response.credential);
        setUser(userObject);
        console.log(userObject)
        localStorage.setItem('userProfileImage', userObject.picture);
        var postData = { email: userObject.email }
        axios.post('http://localhost:1337/users/isUserAvailable', postData)
            .then((res) => {
                setIsUserAvailable(res.data.status)
                if (res.data.status === false) {
                    swal("Enter your further details","","info")
                }
            }).catch((error) => {
                console.log(error)
            });
    }
    useEffect(() => {
        /* global google */
        google.accounts.id.initialize({
            client_id: "707797281139-4aqd3htq7bnut6nsp76ufc448svl64r9.apps.googleusercontent.com",
            callback: handleCallbackResponse
        })
        google.accounts.id.renderButton(
            document.getElementById("signInDiv"),
            { theme: "outline", size: "large" }
        )
        google.accounts.id.prompt();
    }, [])
    return (
        <React.Fragment>
            {
                (isUserAvailable)
                    ?<center><div className="App"><div id="signInDiv" className="mt-5"></div></div></center>
                    :<FurtherDetails
                        fname={user.given_name}
                        lname={user.family_name}
                        email={user.email}
                    ></FurtherDetails>
            }

        </React.Fragment>
    );
}
export default GoogleLogin;
