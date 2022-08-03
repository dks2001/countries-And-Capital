import React, { useState } from "react";
import Home from "./Home";
import { Link } from "react-router-dom";

const Signup = () => {

    const [fName, setfname] = useState("");
    const [lName, setlname] = useState("");
    const [email, setemail] = useState("");
    const [password, setPassword] = useState("");
    const [newPass, setnewPass] = useState("");
    const [error, setError] = useState("");
    const [signup, setsignup] = useState("");


    const onClick = () => {
        if (fName === null || fName === "") {
            setError("First name cannot be empty");
        } else if (lName === null || lName === "") {
            setError("Last namecannot be empty");
        } else if (email === null || email === "") {
            setError("email cannot be empty");
        } else if (password === null || password === "") {
            setError("password cannot be empty");
        } else if (newPass === null || newPass === "") {
            setError("Please confirm your password");
        } else if (password !== newPass) {
            setError("Password didn't matched");
        } else {
            let obj = {
                fName : fName,
                lName : lName,
                email : email,
                password : password
            };
            localStorage.setItem(email,JSON.stringify(obj));
            setsignup("/home");
        }
    };

    return (
        <div className="container">

                        <div className="main-div">
                            <h2>Create Account</h2>
                            <div className="signup-div">
                                <h5>Already have an account?</h5>
                                <Link to="/"> sign in</Link>
                            </div>

                            <div className="name">
                                <input placeholder="First Name" type="text" value={fName} onChange={(e) => setfname(e.target.value)}></input>
                                <input placeholder="Last Name" type="text" value={lName} onChange={(e) => setlname(e.target.value)}></input>
                            </div>
                            <input type="email" placeholder="Email" value={email} onChange={(e) => setemail(e.target.value)}></input>
                            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
                            <input type="password" placeholder="Confirm Password" value={newPass} onChange={(e) => setnewPass(e.target.value)}></input>
                        
                            <Link className="button" onClick={onClick} to={signup}>Sign up</Link>
                            <div className="error">{error}</div>
                        </div>
              
        </div>
    );
}

export default Signup;