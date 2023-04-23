import { useState, useRef } from 'react';
import { Routes, Route, Link, useNavigate, Navigate } from "react-router-dom";
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';
export function Register() {
    const navigate = useNavigate();
    const emailRef = useRef(undefined);
    const passwordRef = useRef(undefined);
    const firstNameRef = useRef(undefined);
    const lastNameRef = useRef(undefined);
    const userTypeRef = useRef(undefined);
    const [registerStatus,setRegisterStatus]=useState([]);
    async function handleRegister(event){
        event.preventDefault();
        console.log('Inside Handle Submit');
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const firstName =firstNameRef.current.value;
        const lastName =lastNameRef.current.value;
        const userType = userTypeRef.current.value;
        const registerResponse = await fetch('https://hackathon2-b4pk.onrender.com/users/signup', {
            method: "POST",
            body:  JSON.stringify({
                "username":email,
                "password":password,
                "firstName":firstName,
                "lastName":lastName,
                "userType":userType
            }),
            headers: {
              "Content-Type": "application/json",
            },
          })
          .then((registerResponse) => registerResponse.json());
          setRegisterStatus(registerResponse);
          console.log(registerResponse.message);
          navigate('/dialog', { state: { textMessage: registerResponse.message} });
    };
return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign Up / Register</h3>
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
            <label>First Name</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Enter first name"
              ref={firstNameRef}
            />
          </div>
          <div className="form-group mt-3">
            <label>Last Name</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Enter last name"
              ref={lastNameRef}
            />
          </div>
          <div className="form-group mt-3">
            <label>User Type</label>
            <select  className="form-control mt-1" ref={userTypeRef}>
            <option value="select">Select User Type</option>
            <option value="Admin">Admin</option>
  ...       <option value="Manager">Manager</option>
            <option value="Employee">Employee</option>
          </select>
            
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
            <button type="submit" className="btn btn-primary" onClick={handleRegister}>
              Register
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}