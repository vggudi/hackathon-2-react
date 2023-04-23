import { Routes, Route, Link, useNavigate, Navigate } from "react-router-dom";
import { useState, useRef } from 'react';
import  {Dialog}  from "./dialog";

export function LoginForm() {
    const navigate = useNavigate();
    const emailRef = useRef(undefined);
    const passwordRef = useRef(undefined);
    const [loginStatus,setLoginStatus]=useState(false);
    async function  handleSubmit(event){
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const response =await fetch('https://hackathon2-b4pk.onrender.com/users/login', {
            method: "POST",
            body:  JSON.stringify({
                "username":email,
                "password":password
            }),
            headers: {
              "Content-Type": "application/json",
            },
          })
          .then((response) => response.json());
          console.log(response.message);
          if(response.message === 'Successfully Logged In'){
            setLoginStatus(true);
            localStorage.setItem('tokenId',response.token);
              if(response.userType === "Admin"){
                navigate("/admindashboard");
              } else if (response.userType === "Manager"){
                navigate("/managerdashboard");
              } else {
                navigate("/employeedashboard");
              }
          }
          if(response.message === 'Invalid Credentials'){
           setLoginStatus(false);
           navigate('/dialog', { state: { textMessage: response.message} });
          //<Dialog />
          }
    }
    

  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"
              ref={emailRef}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
              ref={passwordRef}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
              Submit
            </button>
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary" onClick={() => navigate("/register")}>
              Register
            </button>
          </div>
          <p className="forgot-password text-right mt-2">
            Forgot <a href="#">password?</a>
          </p>
        </div>

      </form>
    </div>
  )
}