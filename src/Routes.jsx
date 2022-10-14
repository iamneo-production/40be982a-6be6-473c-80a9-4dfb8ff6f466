import React, { useState, useEffect, useRef} from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./component/Login";
import Signup from "./component/Signup";

import Enrolledcourse from "./component/Enrolledcourse";
import ViewAcademy from "./component/ViewAcademy";
import Adminacademy from "./component/Adminacademy";

const Routess = ()=>{
    return(
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/Enrolledcourse" element={< Enrolledcourse/>} />
            <Route path="/viewAcademy" element={< ViewAcademy/>} />
            <Route path="/Adminacademy" element={< Adminacademy/>} />
            
          </Routes>
        </BrowserRouter>
    )
}

export default Routess
