import React from "react";
import NotificationsIcon from "@mui/icons-material/Notifications";
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
const DashboardNavbar = () => {
  return (
    <nav className="h-16 w-full flex justify-between items-center bg-white px-12 shadow-lg">
      <h2 className="text-2xl font-bold">
        <span className="text-[#ff7f89]">eBooking</span>{" "}
        <span className="text-accent">Courier</span>
      </h2>
      <div className="flex gap-4 items-center">
        <span className="text-accent">
          <NotificationsIcon />
        </span>
        <p className="text-lg font-medium">Jon Doe</p>
        <img
          className="size-10 object-cover rounded-full"
          src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="avatar"
        />
      </div>
    </nav>
  );
};

export default DashboardNavbar;
