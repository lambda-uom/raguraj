import React, { useEffect } from "react";
import useFetch from "../hooks/useFetch";
import NavBar from "../components/NavBar";
const GoogleLogin = () => {
    const { handleGoogle, loading, error } = useFetch("http://localhost:1337/authentication/login");
    useEffect(() => {
        /* global google */
        if (window.google) {
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
            // google.accounts.id.prompt()
        }
    }, [handleGoogle]);

    return (
        <>
            <NavBar></NavBar>
            <div className="container mt-5">
                {
                    <div>
                        {error && <p style={{ color: "red" }}>{error}</p>}
                        {loading ? <div>Loading....</div> : <div id="loginDiv"></div>}
                    </div>
                }
            </div>
        </>
    );
};

export default GoogleLogin;
