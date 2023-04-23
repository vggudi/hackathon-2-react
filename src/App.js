import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {LoginForm} from './Components/login';
import { Register } from "./Components/register";
import { Routes, Route, Link, useNavigate, Navigate } from "react-router-dom";
import { AdminDashboard } from './Components/admindashboard';
import { Dialog } from './Components/dialog';
import { ManagerDashboard } from './Components/managerdashboard';
import { EmployeeDashboard } from './Components/employeedashboard';
import {CreateLead} from "./Components/createlead";
import { Heading } from './Components/heading';
function App() { 
  return (
    <div className="App">
      <Heading text="CRM Application"/>
    <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/register" element={<Register />} />
          <Route path="/admindashboard" element={<AdminDashboard />} />
          <Route path="/managerdashboard" element={<ManagerDashboard />} />
          <Route path="/employeedashboard" element={<EmployeeDashboard />} />
          <Route path="/createLead" element={<CreateLead />} />
          <Route path="/createcontact" element={<EmployeeDashboard />} />
          <Route path="/createsr" element={<EmployeeDashboard />} />
          <Route path="/dialog" element={<Dialog />} />
     </Routes>
   </div>
  );
}

export default App;
