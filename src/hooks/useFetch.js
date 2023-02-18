import { useState } from "react";
// import axios from "axios";

const useFetch = (url) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const handleGoogle = async (response) => {
        console.log(response.credential)
        setLoading(true);
        fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json", },
            body: JSON.stringify({ credential: response.credential }),
        }).then((res) => {
            setLoading(false);
            return res.json();
        }).then((data) => {
            console.log(data)
            if (data?.user) {
                localStorage.setItem("user", JSON.stringify(data?.user));
                window.location.reload();
            }
            throw new Error(data?.message || data);
        }).catch((error) => {
            setError(error?.message);
        });
    };
    return { loading, error, handleGoogle };
};

export default useFetch;
