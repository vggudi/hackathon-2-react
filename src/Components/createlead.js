import { useState, useRef } from 'react';
import { Routes, Route, Link, useNavigate, Navigate } from "react-router-dom";
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';
export function CreateLead(){
        const navigate = useNavigate();
        const nameRef = useRef(undefined);
        const statusRef = useRef(undefined);
        async function handleLead(event){
            event.preventDefault();
            console.log('Inside Handle Submit');
            const name = nameRef.current.value;
            const status = statusRef.current.value;
            const registerResponse = await fetch('https://hackathon2-b4pk.onrender.com/createLead', {
                method: "POST",
                body:  JSON.stringify({
                    "name":name,
                    "status":status,
                }),
                headers: {
                  "Content-Type": "application/json",
                },
              })
              .then((registerResponse) => registerResponse.json());
              console.log(registerResponse.message);
              navigate('/dialog', { state: { textMessage: registerResponse.message} });
        };
    return (<div className="Auth-form-container">
    <form className="Auth-form">
      <div className="Auth-form-content">
        <h3 className="Auth-form-title">Create Lead</h3>
        <div className="form-group mt-3">
          <label>Name</label>
          <input
            type="text"
            className="form-control mt-1"
            placeholder="Enter name"
            ref={nameRef}
          />
        </div>
        <div className="form-group mt-3">
          <label>Status</label>
          <select  className="form-control mt-1" ref={statusRef}>
          <option value="select">Select Status</option>
          <option value="new">New</option>
...       <option value="lost">Lost</option>
          <option value="contacted">Contacted</option>
        </select>
        </div>
        <div className="d-grid gap-2 mt-3">
          <button type="submit" className="btn btn-primary" onClick={handleLead}>
            Create Lead
          </button>
        </div>
      </div>
    </form>
  </div>
)
}