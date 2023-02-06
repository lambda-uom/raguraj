import { useState } from "react";

import jwt_decode from "jwt-decode";
const useFetch = (url) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const [userDataFromGoogle, setUserDataFromGoogle] = useState();

    const handleGoogle = async (response) => {
        setUserDataFromGoogle(jwt_decode(response.credential));
        setLoading(true);
        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },

            body: JSON.stringify({ credential: response.credential }),
        })
            .then((res) => {
                setLoading(false);
                return res.json();
            })
            .then((data) => {
                if (data?.user) {
                    localStorage.setItem("user", JSON.stringify(data?.user));
                    window.location.reload();
                }

                throw new Error(data?.message || data);
            })
            .catch((error) => {
                setError(error?.message);
            });
    };
    return { loading, error, handleGoogle, userDataFromGoogle };
};

export default useFetch;
