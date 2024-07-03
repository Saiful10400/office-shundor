import React from "react";
import DashboardSideBar from "../layout/DashboardSideBar";
import DashboardNavbar from "../layout/DashboardNavbar";
import { NavLink } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AdminDashboardData from "./AdminDashboardData/AdminDashboardData";

const Dashboard = () => {
  return (
    <div className="max-w-screen-2xl mx-auto bg-primary min-h-screen">
      <DashboardNavbar />
      <div className="grid grid-cols-12 max-w-screen-xl mx-auto  min-h-screen mt-2 p-2 ">
        <div className="col-span-1 h-screen  sticky top-0 left-0 overflow-auto pt-10 pb-20 rounded-xl shadow-2xl bg-white">
          <DashboardSideBar />
        </div>
        <div className="col-span-11 h-full">
          {/* chldren component here */}
          <AdminDashboardData />
          {/* <AdminDashboardData /> */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
