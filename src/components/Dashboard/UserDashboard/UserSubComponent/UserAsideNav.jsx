import React from 'react';
import { NavLink } from 'react-router-dom';
import { LuLayoutDashboard } from "react-icons/lu";
import logo from "../../../../assets/images/sundorban.png"

const UserAsideNav = () => {
    return (
        <div className='w-[14%] sticky top-[125px]  bg-[#3E425B] min-h-[85vh] pt-[100px] text-white rounded-[50px]'>
            
             {/* top image and profile text info. */}
             <div className='relative  flex justify-center items-center flex-col'>
                <img className='w-[142px] h-[142px] rounded-full' src={logo} alt="logo" />
                <div className='mt-[54px]'>
                <h1 className='text-xl font-semibold '>Adrit solutions</h1>
                <h1 className='text-base font-semibold mt-1'>Adrit@gmail.com</h1>
                </div>
                <div className='w-4/5 mt-[28px] border-b-2 border-[#BF5E1B]'></div>
             </div>
             {/* aside nav bar */}
             <ul className='text-black font-bold text-[20px]  flex items-center justify-center flex-col gap-5 mt-24'>
                <li><NavLink className="flex items-center gap-x-1" to={""}><LuLayoutDashboard />Dashboard</NavLink></li>
                {/* <li><NavLink className="flex items-center gap-x-1"  to={"add"}><IoTicket />Add Booking</NavLink></li> */}
             </ul>
        </div>
    );
};

export default UserAsideNav;