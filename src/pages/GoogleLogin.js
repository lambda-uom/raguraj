import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import axios from "axios";
import FurtherDetails from "./FurtherDetails";
import jwt_decode from "jwt-decode";
const GoogleLogin = () => {
    //state to store login response data from backend
    //should be saved in local storage
    const [loginData, setLoginData] = useState();
    //if user is available in database then set this state to true else false
    const [isUserAvailable, setIsUserAvailable] = useState(true);
    //state to store decoded values of google login response
    const [googleLoginDecodedValues, setGoogleLoginDecodedValues] = useState();
    //function to handle google login response
    const handleGoogle = async (response) => {
        setGoogleLoginDecodedValues(jwt_decode(response.credential));
        fetch("http://localhost:1337/authentication/login", {
            method: "POST",
            headers: { "Content-Type": "application/json", },
            body: JSON.stringify({ credential: response.credential }),
        }).then((res) => {
            return res.json();
        }).then((data) => {
            setLoginData(data);
        }).catch((error) => {
            console.log(error)
            // console.log(error?.message);
        });
    };

    //if loginData is not null then check if user is available in database
    //if user is available in database then set isUserAvailable to true else false
    //if user is not available in database, AddFurtherDetails component will be rendered
    useEffect(() => {
        if (loginData) {
            // console.log(loginData);
            axios.post('http://localhost:1337/users/isUserAvailable', { email: loginData?.user?.email })
                .then((res) => {
                    console.log("User Availability: " + res.data.status)
                    if (res.data.status === true) {
                        localStorage.setItem("user", JSON.stringify(loginData?.user));
                        window.location.reload();
                    } else {
                        setIsUserAvailable(res.data.status);
                        document.getElementById("loginDiv").hidden = false;
                    }
                    // console.log(res.data)
                }).catch((error) => {
                    console.log(error)
                });
        }
    }, [loginData])

    //render google login button
    useEffect(() => {
        /* global google */
        google.accounts.id.initialize({
            client_id: "707797281139-4aqd3htq7bnut6nsp76ufc448svl64r9.apps.googleusercontent.com",
            callback: handleGoogle,
        });
        google.accounts.id.renderButton(document.getElementById("loginDiv"), {
            type: "standard",
            theme: "outline",
            size: "large",
            text: "continue_with",
            shape: "square",
        });
    }, []);

    return (
        <React.Fragment>
            <NavBar></NavBar>
            <div className="container mt-5">
                {
                    (isUserAvailable === false) ? null : <div id="loginDiv"></div>
                }

                
                {
                    (isUserAvailable === false) ? <FurtherDetails loginData={loginData} userData={googleLoginDecodedValues} /> : null
                }

            </div>
        </React.Fragment>
    );
};

export default GoogleLogin;
