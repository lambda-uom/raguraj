import { useState } from "react";
import axios from "axios";

const useFetch = (url) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [loginData, setLoginData] = useState();
    // console.log(loginData);
    const handleGoogle = async (response) => {
        // console.log(response.credential)
        setLoading(true);
        fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json", },
            body: JSON.stringify({ credential: response.credential }),
        }).then((res) => {
            setLoading(false);
            return res.json();
        }).then((data) => {
            // console.log(data)
            setLoginData(data);
            // if (data?.user) {
            // setLoginData(data?.user);
            // localStorage.setItem("user", JSON.stringify(data?.user));
            // window.location.reload();
            // }
            throw new Error(data?.message || data);
        }).catch((error) => {
            setError(error?.message);
        });
    };

    const [isUserAvailable,setIsUserAvailable] = useState();
    if (loginData) {
        console.log(loginData);
        axios.post('http://localhost:1337/users/isUserAvailable', { email: loginData?.user?.email })
            .then((res) => {
                setIsUserAvailable(res.data);
            }).catch((error) => {
                console.log(error)
            });
    }
    return { loading, error, handleGoogle, isUserAvailable,loginData };
};

export default useFetch;
