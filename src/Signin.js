import React, { useState } from "react";
import "./index.css";
import Home from "./Home";
import { Link } from "react-router-dom";


const Signin = () => {


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [login, setLogin] = useState("");
    const [error, setError] = useState("");

    const onClick = () => {

        if (email === null || email === "") {
            setError("email cannot be empty");
        } else if (password === null || password === "") {
            setError("password cannot be empty");
        } else {
            let mail = JSON.parse(localStorage.getItem(email));
            if(mail !== null) {
                let pass = mail.password;
                if(password === pass) {
                    setLogin("/home");
                }
            } else {
                setError("User Not Registered");
            }
        }
        
    };



    return (
        <div className="container">

            <div className="main-div">
                <h2>Login Here</h2>
                <div className="signup-div">
                    <h5>Don't have an account?</h5>

                    <Link to="/signup"> sign up</Link>
                </div>
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}></input>

                <Link className="button" onClick={onClick} to={login}>Sign In</Link>
                <div className="error">{error}</div>
            </div>

        </div>
    );

}

export default Signin;