import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import Login from "../components/login/Login";
import Auth from "../hooks/auth/Auth";
import Signup from "../components/signup/Signup";
import Dashboard from "../components/Dashboard/Dashboard";
import Home from "../components/home/Home";
import MainLayout from "../components/layout/MainLayout";
import Bookings from "../components/bookings/Bookings";
import AgencyDashboard from "../components/Dashboard/UserDashboard/AgencyDashboard";
import Subroot from "../components/Dashboard/UserDashboard/subComponenets/Subroot";



function Pages(props) {
  return (
    // <Router>
    <Routes>
      {/* <Route path={"/"} element={<Auth child={<Login />} />} /> */}
      {/* <Route path={"/"} element={<Home />} /> */}
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path={"/bookings"} element={<Bookings />} />
        <Route path="/dashboard" element={<AgencyDashboard/>}>
        <Route path="" element={<Subroot></Subroot>}></Route>
        </Route>
      </Route>

      <Route path={"/signup"} element={<Signup />} />
      <Route path={"/login"} element={<Login />} />
      <Route path={"/dashboard"} element={<Dashboard />} />
    </Routes>
    // </Router>
  );
}

export default Pages;
