import { AppBar, Button, Toolbar } from "@mui/material";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, Link, useNavigate, Navigate } from "react-router-dom";
export function AdminDashboard(){
    const navigate = useNavigate();
    return(
        <div>
            <div>
           <h1>Welcome to Admin Dashboard</h1>
           <Button className="mb-3 float-right" variant="contained" onClick={() => navigate("/")}>Logout</Button>
           </div>
           <div>
           <Button className="mb-3" variant="contained" onClick={() => navigate("/register")}>Add User</Button>
           </div>
        
           <div>
           <Button className="mb-3" variant="contained" onClick={() => navigate("/createLead")}>Create Lead</Button>
           </div>
           <div>
           <Button className="mb-3" variant="contained" onClick={() => navigate("/createcontact")}>Create Contact</Button>
           </div>
           <div>
           <Button className="mb-3" variant="contained" onClick={() => navigate("/createsr")}>Create Service Request</Button>
           
           </div>
        </div>
    )
}