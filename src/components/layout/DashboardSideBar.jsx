import React from "react";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import PeopleIcon from "@mui/icons-material/People";
import Groups2Icon from "@mui/icons-material/Groups2";
import LogoutIcon from "@mui/icons-material/Logout";
import { NavLink } from "react-router-dom";
// import SideNavLink from '../sharedComponents/SideNavLink/SideNavLink';
const DashboardSideBar = () => {
  return (
    <aside className="flex flex-col justify-between bg-white h-full items-center ">
      <div className="flex flex-col gap-6 items-center">
        <NavLink className={"flex flex-col items-center"}>
          <AdminPanelSettingsIcon />
          <span className="text-accent font-normal">Admin</span>
        </NavLink>
        <NavLink className={"flex flex-col items-center"}>
          <PeopleIcon />
          <span className=" font-normal">Customer</span>
        </NavLink>
        <NavLink className={"flex flex-col items-center"}>
          <Groups2Icon />
          <span className="font-normal">Agents</span>
        </NavLink>
      </div>
      <div>
        <NavLink className={"flex flex-col items-center"}>
          <LogoutIcon />
          <span>Log out</span>
        </NavLink>
      </div>
    </aside>
  );
};

export default DashboardSideBar;
