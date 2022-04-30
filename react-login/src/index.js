import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Login'
import Ablum from './Ablum'
import SingUp from './register'
import Dashboard from './Dashboard';
import Dashboardprofile from './Dashboardprofile';
import Dashboardadmin from './Dashboardadmin';
import Dashboardmember from './Dashboardmember';
import Dashboardschedule from './Dashboardschedule';
import Dashboardaddclass from './Dashboardaddclass';
import Dashboarduser from './user/Dashboarduser';
import Dashboardprofileuser from './user/Dashboardprofileuser';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>

    <Route path="/profileuser" element={<Dashboardprofileuser/>} /> 
     <Route path="/member" element={<Dashboardmember/>} /> 
     <Route path="/addclass" element={<Dashboardaddclass/>} />    
     <Route path="/admin" element={<Dashboardadmin/>} />
     <Route path="/profile" element={<Dashboardprofile />} />
     <Route path="/login" element={<Login />} />
     <Route path="/ablum" element={<Ablum />} />
     <Route path="/singup" element={<SingUp />} />
     <Route path="/dashboard" element={<Dashboard />} />
     <Route path="/schedule" element={<Dashboardschedule/>} /> 
     <Route path="/user" element={<Dashboarduser/>} /> 

    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
