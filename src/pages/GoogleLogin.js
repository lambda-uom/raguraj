import React from "react";
import { useEffect, useState } from 'react';
import jwt_decode from "jwt-decode";
import loginImage from "../images/login.svg"
const GoogleLogin = () => {
    const [user, setUser] = useState({});
    function handleCallbackResponse(response) {
        console.log("Encoded JWT ID token: " + response.credential);
        var userObject = jwt_decode(response.credential);
        console.log(userObject);
        setUser(userObject);
        document.getElementById("signInDiv").hidden = true;
    }
    function handleSignOut(event) {
        setUser({});
        document.getElementById("signInDiv").hidden = false;
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
        //optional
        google.accounts.id.prompt();
    }, [])
    return (
        <React.Fragment>
            <center>
                <h2 className="text-secondary mt-5">New Employee Training System</h2>
                <img draggable={false}alt="user" src={loginImage}></img>
                <div className="App">
                    <div id="signInDiv"  className="mt-5"></div>
                    {
                        Object.keys(user).length != 0 &&
                        <button onClick={(e) => handleSignOut(e)}>SignOut</button>
                    }
                    {/* {user &&
                    <div>
                        <img alt="user" src={user.picture}></img>
                        <h3>{user.name}</h3>
                    </div>
                } */}
                </div>
            </center>
        </React.Fragment>
    );
}
export default GoogleLogin;
