import React from "react";
import { NavLink } from "react-router-dom";
import OrderChartCard from "./OrderChartCard";
import OrderTimeChartCard from "./OrderTimeChartCard";

const AdminDashboardData = () => {
  return (
    <div>
      <nav className="h-16 row flex justify-between items-center  pl-6 ">
        <div className="flex gap-2">
          <NavLink className={"underline underline-offset-4 text-accent"}>
            Link 1
          </NavLink>
          <NavLink>Link 2</NavLink>
          <NavLink>Link 3</NavLink>
        </div>
        <div>
          <button className="rounded-lg bg-accent px-8 py-3 text-xl text-white duration-300 active:scale-95">
            Example
          </button>
        </div>
      </nav>
      <div className="data-section  h-full  grid grid-cols-3 justify-items-center py-10 gap-4">
        <div
          className={
            "w-[350px] h-[220px]  border shadow-xl rounded-xl flex flex-col justify-center  gap-3 py-6 pl-6"
          }
        >
          <div className=" space-y-2">
            <img
              className="size-20 bg-slate-500 object-cover rounded-full hover:blur-[2px] duration-500"
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="avatar"
            />
            <h3 className="font-semibold ">Jon Doe</h3>
            <div className="space-y-1">
              <p className="gray-description">Example Admin Information</p>
              <p className="gray-description">Example Admin Information</p>
              <p className="gray-description">Example Admin information</p>
            </div>
          </div>
        </div>
        <div
          className={
            "w-[350px] h-[220px]  border shadow-xl rounded-xl flex flex-col justify-center  gap-3 py-6 pl-6"
          }
        >
          <div className=" space-y-2">
            <h3 className="font-semibold ">Example Header</h3>
            <div className="space-y-1 grid grid-cols-2">
              <p className="gray-description">Example PDF</p>
              <p className="gray-description">Example PDF</p>
              <p className="gray-description">Example PDF</p>
              <p className="gray-description">Example PDF</p>
              <p className="gray-description">Example PDF</p>
              <p className="gray-description">Example PDF</p>
            </div>
          </div>
        </div>
        <div
          className={
            "w-[350px] h-[220px]  border shadow-xl rounded-xl flex flex-col justify-center  gap-3 py-6 pl-6"
          }
        >
          <div className=" space-y-2">
            <h3 className="font-semibold ">Order</h3>
            <div className="space-y-1">
              <p>Example Order flow</p>
              <p>Example Order flow</p>
              <p>Example Order flow</p>
            </div>
          </div>
        </div>

        <OrderChartCard />
        <OrderTimeChartCard />

        <div className={"w-[350px]  flex flex-col gap-8"}>
          <h3 className="text-2xl font-semibold">Upcoming Events</h3>

          <div className="h-28 shadow-lg bg-white w-full rounded-xl p-6">
            <p className="gray-description">Example Event 1</p>
            <p className="gray-description">Example Event 2</p>
          </div>
          <div className="h-28 shadow-lg bg-white w-full rounded-xl  p-6">
            <p className="gray-description">Example 2 Event 1</p>
            <p className="gray-description">Example 2 Event 2</p>
          </div>
          <div className="h-20 shadow-lg bg-white w-full rounded-xl  p-6 text-center">
            <p className="text-lg font-semibold text-accent">
              Show More Example
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardData;
