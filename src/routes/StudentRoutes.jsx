import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../screens/Student/Home/Home";
import Profile from "../screens/Student/Profile/Profile";
import Careers from "../screens/Student/Careers/Careers";
import StudentLogin from "../screens/Student/StudentLogin/StudentLogin";
import StudentRegister from "../screens/Student/StudentRegister/StudentRegister";
import NavBar from "../components/NavBar/NavBar";

const StudentRoutes = () => {

  const [reload, setReload] = useState(false);

  return (
    <>
      <NavBar reload={reload} setReload={setReload} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signin" element={<StudentLogin reload={reload} setReload={setReload}/>} />
        <Route path="/signup" element={<StudentRegister />} />
      </Routes>
    </>
  );
};

export default StudentRoutes;
