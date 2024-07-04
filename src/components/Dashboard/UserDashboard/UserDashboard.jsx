import React from 'react';
import UserAsideNav from './UserSubComponent/UserAsideNav';
import { Outlet } from 'react-router-dom';

const UserDashboard = () => {
    return (
        <div className='min-h-screen pt-16 gap-x-[50px] flex items-start bg-white px-8'>
            <UserAsideNav></UserAsideNav>
            <Outlet></Outlet> 
        </div>
    );
};

export default UserDashboard;